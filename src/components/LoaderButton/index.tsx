import React, { ElementType, forwardRef, Ref } from 'react';

import { ButtonProps } from '@mui/material';

import clsx from 'clsx';

import {
  ContentWrapper,
  StyledButton,
  StyledButtonBase,
  StyledCircularLoader,
  StyledIconButton,
} from './styles';
import useLoaderButtonVM from './vm';

interface LoaderButtonProps<C extends ElementType<any>> {
  /**
   * Button root element type
   * @default 'default'
   */
  buttonType?: 'icon' | 'base' | 'default';
  component?: C;
  isLoading?: boolean;
  /**
   * If a promise is returned then a loader will appear on
   * the button until the promise is resolved or rejected
   */
  onClick?: (event: React.MouseEvent) => void | Promise<any>;
  className?: string;
  classes?: Partial<Record<'root' | 'progressWrapper' | 'progress', string>>;
}

export type Props<C extends ElementType<any> = 'button'> = ButtonProps<C, LoaderButtonProps<C>>;

const Content = <C extends ElementType<any> = 'button'>({
  children,
  isLoading,
  classes,
}: {
  children: Props<C>['children'];
  isLoading: Props<C>['isLoading'];
  classes: Props<C>['classes'];
}) => {
  return (
    <>
      {children}
      {isLoading && (
        <ContentWrapper className={classes?.progressWrapper}>
          <StyledCircularLoader className={classes?.progress} />
        </ContentWrapper>
      )}
    </>
  );
};

const LoaderButton = <C extends ElementType<any> = 'button'>(
  { children, className, classes, buttonType = 'default', ...props }: Props<C>,
  ref: Ref<HTMLButtonElement>,
) => {
  const { isLoading, handleClick } = useLoaderButtonVM(props);

  if (buttonType === 'icon') {
    return (
      <StyledIconButton
        {...props}
        ref={ref}
        disabled={props.disabled || isLoading}
        onClick={handleClick}
        className={clsx(className, classes?.root)}
      >
        <Content isLoading={isLoading} classes={classes}>
          {children}
        </Content>
      </StyledIconButton>
    );
  }

  if (buttonType === 'base') {
    return (
      <StyledButtonBase
        {...props}
        ref={ref}
        disabled={props.disabled || isLoading}
        onClick={handleClick}
        className={clsx(className, classes?.root)}
      >
        <Content isLoading={isLoading} classes={classes}>
          {children}
        </Content>
      </StyledButtonBase>
    );
  }

  return (
    <StyledButton
      {...props}
      ref={ref}
      disabled={props.disabled || isLoading}
      onClick={handleClick}
      className={clsx(className, classes?.root)}
    >
      <Content isLoading={isLoading} classes={classes}>
        {children}
      </Content>
    </StyledButton>
  );
};

export default forwardRef(LoaderButton);

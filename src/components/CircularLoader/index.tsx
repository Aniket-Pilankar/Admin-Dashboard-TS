import clsx from 'clsx';

import { circularLoaderClasses } from './styles';
import { CircularLoader as StyledCircularLoader } from './styles';

interface Props {
  className?: string;
}

const CircularLoader = ({ className }: Props) => {
  return <StyledCircularLoader className={clsx(circularLoaderClasses.spinner, className)} />;
};

export default CircularLoader;

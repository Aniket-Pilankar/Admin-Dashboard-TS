import { MouseEvent, MouseEventHandler, useCallback, useMemo, useState } from 'react';

import { useMounted } from '../../utils/hooks';

export interface Props {
  /**
   * When isLoading is true,
   * button will be disabled
   * and a loader will appear as endIcon on button
   * @default false
   */
  isLoading?: boolean;
  /**
   * If a promise is returned then
   * button will be disabled
   * and a loader will appear as endIcon on button
   * until the promise is resolved or rejected
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void | Promise<any>;
}

export default function useLoaderButtonVM({ isLoading: _isLoading, onClick }: Props) {
  const isMounted = useMounted();

  const [isAwaiting, setIsAwaiting] = useState(false);

  const isLoading = useMemo(() => isAwaiting || _isLoading, [_isLoading, isAwaiting]);

  const handleClick: MouseEventHandler<HTMLElement> = useCallback(
    async (e) => {
      if (!onClick) return;
      try {
        setIsAwaiting(true);
        await onClick(e);
      } finally {
        if (isMounted()) {
          setIsAwaiting(false);
        }
      }
    },
    [isMounted, onClick],
  );

  return { isLoading, handleClick };
}

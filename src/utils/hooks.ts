import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import store from '../redux/store';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * This hook provides a function that returns whether the component is still mounted.
 * This is useful as a check before calling set state operations which will generates
 * a warning when it is called when the component is unmounted.
 * @returns a function
 *
 * @see https://stackoverflow.com/a/70716215/9709887
 */
export function useMounted(): () => boolean {
  const mountedRef = useRef(false);

  useEffect(function useMountedEffect() {
    mountedRef.current = true;
    return function useMountedEffectCleanup() {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    function isMounted() {
      return mountedRef.current;
    },
    [mountedRef],
  );
}

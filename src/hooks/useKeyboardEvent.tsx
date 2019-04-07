import React, { useEffect } from 'react';

export function useKeyboardEvent(key: string, callback: (param: any) => any) {
  useEffect(() => {
    const handler = (event: { key: string }) => {
      if (event.key === key) {
        callback(event);
      }
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
}

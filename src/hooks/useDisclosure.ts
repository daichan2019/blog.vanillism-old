import { useCallback, useState } from 'react';

export const useDisclosure = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => {
    return setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    return setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    return setIsOpen((state) => {
      return !state;
    });
  }, []);

  return { isOpen, open, close, toggle };
};

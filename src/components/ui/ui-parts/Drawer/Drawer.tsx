import type { FC } from 'react';

import { DrawerTransition } from '@/components/ui/ui-parts/DrawerTransition';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <DrawerTransition isOpen={isOpen} onClose={onClose}>
      <p>hoge</p>
    </DrawerTransition>
  );
};

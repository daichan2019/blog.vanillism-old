import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { DrawerTransition } from '@/components/ui/ui-parts/DrawerTransition';
import { navigation } from '@/config/navigation';
import DrawerCloseTrigger from '@/public/img/drawer-close.svg';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <DrawerTransition isOpen={isOpen} onClose={onClose}>
      <div className='justify-end flex'>
        <button className='sm:hidden' onClick={onClose}>
          <DrawerCloseTrigger className='fill-current w-6 h-6' />
        </button>
      </div>
      <div className='my-10'>
        <nav>
          <ul className='flex flex-col gap-6'>
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Anchor as='internal' href={item.path} className='font-bold'>
                    {item.name}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </DrawerTransition>
  );
};

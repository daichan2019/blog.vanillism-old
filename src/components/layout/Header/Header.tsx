import Image from 'next/image';
import type { FC } from 'react';
import { useDisclosure } from 'src/hooks/useDisclosure';

import { Anchor } from '@/components/ui/ui-elements/Anchor';
import { Drawer } from '@/components/ui/ui-parts/Drawer';
import { navigation } from '@/config/navigation';
import DrawerOpenTrigger from '@/public/img/drawer-open.svg';

export const Header: FC = () => {
  const { close, isOpen, open } = useDisclosure();

  return (
    <>
      <header className='sticky top-0 w-full bg-neutral-50'>
        <div className='py-6 flex xl:max-w-5xl justify-between items-center mx-auto max-w-3xl px-4 sm:px-6 xl:px-0'>
          <h1 className='text-xl md:text-2xl font-bold'>
            <Anchor as='internal' href='/' className='flex gap-2 items-center'>
              <Image src='/img/orange.jpg' className='rounded-full' height={32} width={32} alt='' />
              <span>blog.vanillism</span>
            </Anchor>
          </h1>
          <nav className='hidden sm:block'>
            <ul className='flex gap-6'>
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Anchor
                      as='internal'
                      href={item.path}
                      className='font-bold transition-colors hover:text-orange-500'
                    >
                      {item.name}
                    </Anchor>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className='sm:hidden' onClick={open}>
            <DrawerOpenTrigger className='fill-current w-6 h-6' />
          </button>
        </div>
      </header>
      <Drawer isOpen={isOpen} onClose={close} />
    </>
  );
};

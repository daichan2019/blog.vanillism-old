import type { FC } from 'react';

import { Anchor } from '@/components/ui/ui-elements/Anchor';

type NavigationItem = {
  name: string;
  path: string;
};

const navigation = [
  { name: 'Me', path: '/me' },
  { name: 'Articles', path: '/articles' },
] as NavigationItem[];

export const Header: FC = () => {
  return (
    <header className='py-6'>
      <div className='mx-3 flex max-w-5xl justify-between lg:mx-auto'>
        <h1>blog.vanillism</h1>
        <nav>
          <ul className='flex gap-4'>
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Anchor to='internal' href={item.path}>
                    {item.name}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

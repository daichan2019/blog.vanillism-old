import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header>
      <h1>blog.vanillism</h1>
      <nav>
        <ul>
          <li>Me</li>
          <li>Articles</li>
        </ul>
      </nav>
    </header>
  );
};

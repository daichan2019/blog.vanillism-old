type NavigationItem = {
  name: string;
  path: string;
};

export const navigation = [
  { name: 'Articles', path: '/articles' },
  { name: 'Tags', path: '/tags' },
  { name: 'Me', path: '/me' },
] as NavigationItem[];

export const formatDate = (date: string) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const now = new Date(date).toLocaleDateString('en-US', options);

  return now;
};

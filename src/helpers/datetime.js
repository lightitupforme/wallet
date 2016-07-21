export const timestampToDateTime = timestamp => {
  const locale = new Intl.DateTimeFormat('de-DE', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return locale.format(new Date(timestamp * 1000));
};

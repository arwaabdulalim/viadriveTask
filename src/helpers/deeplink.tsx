export const getQueryParams = (link: string | null) => {
  if (link?.split('?')?.[1]) {
    return JSON.parse(
      '{"' +
        decodeURI(
          link.split('?')[1].replace(/&/g, '","').replace(/[=]/g, '":"'),
        ) +
        '"}',
    );
  }
  return null;
};

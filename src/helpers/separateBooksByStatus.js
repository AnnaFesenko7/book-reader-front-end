export const separateBooksByStatus = data => {
  return data?.reduce((obj, book) => {
    const stat = book.status;
    return { ...obj, [stat]: obj[stat] ? [...obj[stat], book] : [book] };
  }, {});
};

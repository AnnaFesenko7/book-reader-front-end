import { StyledSelect, Placeholder, StyledOption } from './SeleckBooks.styled';

const books = [
  {
    status: 'toRead',
    _id: 1,
    author: 'Гюго',
    pages: 300,
    title: 'Людина що сміється',
    year: 1980,
    rating: 2,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 2,
    author: 'J.K.Roling',
    pages: 400,
    title: 'Harry Potter',
    year: 2014,
    rating: 2,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 3,
    author: 'Жуль Верн',
    pages: 250,
    title: '15-тирічний капітан',
    year: 2008,
    rating: 4,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 4,
    author: 'Жуль Верн',
    pages: 250,
    title: '15-ти    річний капітан',
    year: 2008,
    rating: 4,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 5,
    author: 'Жуль Верн',
    pages: 250,
    title:
      '15-ти    річний капітан yyyyyyyy yygggggg gggggggggggggg gggfffffff fffffffffffffff fyyyyyyyyy yyyyyyyy yyyyyyyyyyy',
    year: 2008,
    rating: 5,
    resume: '',
  },
];

export const SeleckBooks = () => {
  const defaultValue = 'Обрати книги з бібліотеки';
  return (
    <StyledSelect
      onChange={e => console.log(e.target.value)}
      name="book"
      defaultValue={defaultValue}
    >
      <Placeholder value="Обрати книги з бібліотеки" disabled hidden>
        {/* Select your option  */}
        Обрати книги з бібліотеки
      </Placeholder>
      {books.map(({ _id, title }) => (
        <StyledOption key={_id} value={_id}>
          {title}
        </StyledOption>
      ))}
      {/* <StyledOption value="xs">Extra Small</StyledOption>
      <StyledOption value="s">Small</StyledOption>
      <StyledOption value="m">Medium</StyledOption>
      <StyledOption value="l">Large</StyledOption> */}
    </StyledSelect>
  );
};

import React from 'react';
import { FaBookOpen, FaFlag } from 'react-icons/fa';
import { InfoItem } from './InfoItem';

import { Wrapper, StyledList } from './Info.styled';

const infolContent = [
  {
    step: 1,
    icon: FaBookOpen,
    title: 'Створіть особисту бібліотеку',
    text: 'Додайте до неї книжки, які маєте намір прочитати.',
  },
  {
    step: 2,
    icon: FaFlag,
    title: 'Сформуйте своє перше тренування',
    text: 'Визначте ціль, оберіть період, розпочинайте тренування.',
  },
];

export const Info = () => {
  return (
    <Wrapper>
      <StyledList>
        {infolContent.map((item, index) => (
          <li key={index}>
            <InfoItem item={item} />
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );
};

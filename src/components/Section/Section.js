import React from 'react';
import { MainTitle } from './SectionStyle';
const Section = ({ title, children }) => {
  return (
    <>
      <MainTitle>{title}</MainTitle>
      {children}
    </>
  );
};
export default Section;

import styled from 'styled-components';

const FeedbackButton = styled.button`
  background-color: green;
  border-radius: 4px;
  box-shadow: 7px 9px 8px 0px rgba(34, 60, 80, 0.2);
  border: none;
  padding: 10px;
  &:hover {
    background-color: blue;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export { FeedbackButton };

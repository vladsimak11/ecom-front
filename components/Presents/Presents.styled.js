import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: 30px;
  font-size: 2rem;
`;

export const PresentsList = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const PresentsItem = styled.li`
  flex-basis: calc((100% - 40px) / 3);
  border-bottom: 4px solid var(--second-color);
`;
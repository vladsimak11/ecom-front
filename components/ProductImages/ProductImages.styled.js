import styled from "styled-components";

export const Image = styled.img`
  height: 124px;
  `;
  export const BigImage = styled.img`
  width: 300px;
  height: 400px;
  border: 2px solid var(--main-color);
`;
export const ImageButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
  `;
export const ImageButton = styled.div`
  border: 2px solid var(--main-color);
  ${props => props.active ? `
    border-color: var(--main-color);
    ` : `
    border-color: transparent;
  `}
    cursor: pointer;
  `;
export const ImageWrapper = styled.div`
  display: flex;
`;
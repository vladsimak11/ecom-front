import styled from 'styled-components';

export const BackgroundHero = styled.div`
  color: #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-width: 1280px;
  min-height: 600px;
  
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.65)
  ), url(${props => props.images.Hero1280.src});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.65)
    ), url(${props => props.images.Hero2560.src});
  }  

`;

export const StyledTitle = styled.h1`
  font-weight: normal;
  text-align: center;
  font-size: 44px;
  line-height: 1.7;
  text-transform: uppercase;
`;

export const StyledDesc = styled.p`
  text-align: center;
  padding: 0 250px;
  margin-top: 20px;
  line-height: 1.6;
`;
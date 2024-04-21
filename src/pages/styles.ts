import styled from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Title = styled.h1`
  text-align: center;
  font-size: 64px;
  color: #000;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 985px;
  height: 453px;
  margin: auto;
  background-image: url('/image.png');
  background-size: cover;
  left: 50%;
  transform: translateX(2%);

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 985px;
  margin: auto;
  margin-top: 30px;

`;

export const Button = styled.button<ButtonProps>`
  flex-grow: 1;
  margin: 10px;
  height: 83px;
  background-color: ${props => props.color};
  font-family: 'JejuGothic', sans-serif;
  font-size: 48px;
  line-height: 52px;
  color: #000;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 26px;
    height: 41px;
  }
`;

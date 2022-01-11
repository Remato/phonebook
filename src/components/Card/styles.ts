import styled from 'styled-components/native';

type ButtonProps = {
  shadow?: boolean;
};

export const CardView = styled.View<ButtonProps>`
  background-color: '#f20';
  border-radius: 8px;
  width: 100%;
  elevation: 15;
  box-shadow: 0px 10px 15px #0000001a;
`;

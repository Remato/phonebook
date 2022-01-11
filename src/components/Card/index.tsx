import React, { FC } from 'react';
import { CardView } from './styles';

const Card: FC = ({ children, ...rest }) => {
  return <CardView {...rest}>{children}</CardView>;
};

export default Card;

import React, { FC } from 'react';
import { Wrapper, ButtonBase } from './styles';

type Props = {
  label: string;
  icon?: string;
  loading?: boolean;
  color?: string;
  onPress?: () => void;
};

const Button: FC<Props> = ({
  label,
  icon = '',
  loading = false,
  color,
  onPress,
}) => {
  return (
    <Wrapper>
      <ButtonBase
        loading={loading}
        icon={icon}
        onPress={onPress}
        color={color || '#56ace0'}
      >
        {label}
      </ButtonBase>
    </Wrapper>
  );
};

export default Button;

import React, { FC } from 'react';
import Teste from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';

import {
  Wrapper,
  Title,
  Text,
  Name,
  InfoLabelWrapper,
  Icon,
  ButtonWrapper,
} from './styles';

type Props = {
  contact: ContactsResponse;
  onPressDelete(id: string): void;
};

const Contact: FC<Props> = ({ contact, onPressDelete }) => {
  const { address, birthdate, name, lastName, phone, email, id } = contact;

  return (
    <Wrapper>
      <Icon>
        <Teste name="account" size={70} color="#000" />
      </Icon>
      <Name>{`${name} ${lastName}`}</Name>
      <InfoLabelWrapper>
        <Text>Telefone:</Text>
        <Title>{phone}</Title>
      </InfoLabelWrapper>
      <InfoLabelWrapper>
        <Text>Nascimento:</Text>
        <Title>{birthdate}</Title>
      </InfoLabelWrapper>
      <InfoLabelWrapper>
        <Text>Email:</Text>
        <Title>{email}</Title>
      </InfoLabelWrapper>
      <InfoLabelWrapper>
        <Text>Endereço:</Text>
        <Title>{address}</Title>
      </InfoLabelWrapper>

      <ButtonWrapper>
        <Button
          label="Deletar contato"
          color="#e87850"
          onPress={() => onPressDelete(id)}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Contact;

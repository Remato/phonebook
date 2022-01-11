import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import {
  Wrapper,
  Name,
  Contact,
  Title,
  IconAndNameWrapper,
  Text,
  ButtonWrapper,
} from './styles';

type Props = {
  userName: string;
  contacts: ContactsResponse[];
  onPressContact(contact: ContactsResponse): void;
  onPressAdd(): void;
};

const Login: FC<Props> = ({
  userName,
  contacts,
  onPressContact,
  onPressAdd,
}) => {
  return (
    <Wrapper>
      <Title>{userName}, esses são seus Contatos</Title>

      {contacts.map((contact, index) => (
        <Contact key={String(index)} onPress={() => onPressContact(contact)}>
          <IconAndNameWrapper>
            <Icon name="account" size={20} color="#000" />
            <Name>{`${contact.name} ${contact.lastName}`}</Name>
          </IconAndNameWrapper>
          <Text>{contact.phone}</Text>
        </Contact>
      ))}
      <ButtonWrapper>
        <Button
          label="Adicionar novo contato"
          color="#194f82"
          onPress={onPressAdd}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Login;

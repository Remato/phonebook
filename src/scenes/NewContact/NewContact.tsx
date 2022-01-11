import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Wrapper, IconWrapper, ButtonWrapper, InputWrapper } from './styles';

type Props = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  birthdate: string;
  handleName(t: string): void;
  handleLastName(t: string): void;
  handleEmail(t: string): void;
  handlePhone(t: string): void;
  handleAddress(t: string): void;
  handleBirthdate(t: string): void;
  addNewContact(): void;
};

const NewContact: FC<Props> = ({
  name,
  lastName,
  email,
  phone,
  address,
  birthdate,
  handleName,
  handleLastName,
  handleEmail,
  handlePhone,
  handleAddress,
  handleBirthdate,
  addNewContact,
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon name="account" size={70} color="#000" />
        <Icon name="plus" size={70} color="#000" />
      </IconWrapper>
      <InputWrapper>
        <Input label="Nome" value={name} onChangeText={handleName} />

        <Input
          label="Sobrenome"
          value={lastName}
          onChangeText={handleLastName}
        />

        <Input label="Email" value={email} onChangeText={handleEmail} />

        <Input label="Telefone" value={phone} onChangeText={handlePhone} />

        <Input label="Endereço" value={address} onChangeText={handleAddress} />

        <Input
          label="Data de aniversário"
          value={birthdate}
          onChangeText={handleBirthdate}
        />
      </InputWrapper>

      <ButtonWrapper>
        <Button
          label="Adicionar contato"
          color="#60745c"
          onPress={addNewContact}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NewContact;

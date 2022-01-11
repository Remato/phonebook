import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { uniqueId } from 'lodash';
import NewContact from './NewContact';
import { addContact } from '../../api';

const NewContactContainer: FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleName = (name: string) => setName(name);
  const handleLastName = (lastName: string) => setLastName(lastName);
  const handleEmail = (email: string) => setEmail(email);
  const handlePhone = (phone: string) => setPhone(phone);
  const handleAddress = (address: string) => setAddress(address);
  const handleBirthdate = (birthdate: string) => setBirthdate(birthdate);

  const { goBack } = useNavigation();

  const addNewContact = async () => {
    await addContact({
      id: uniqueId(),
      phone,
      address,
      name,
      birthdate,
      email,
      lastName,
    });
    goBack();
  };

  return (
    <NewContact
      name={name}
      lastName={lastName}
      email={email}
      phone={phone}
      address={address}
      birthdate={birthdate}
      handleName={handleName}
      handleLastName={handleLastName}
      handleEmail={handleEmail}
      handlePhone={handlePhone}
      handleAddress={handleAddress}
      handleBirthdate={handleBirthdate}
      addNewContact={addNewContact}
    />
  );
};

export default NewContactContainer;

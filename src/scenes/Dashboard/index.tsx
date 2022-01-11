import React, { FC, useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';
import { getContacts } from '../../api';

const DashboardContainer: FC = () => {
  const [contacts, setContacts] = useState<ContactsResponse[]>([]);
  const { navigate } = useNavigation();

  const user = {
    name: 'Admin',
  };

  const onPressContact = (contact: ContactsResponse) =>
    navigate('PRIVATE', {
      screen: 'Dados do contato',
      params: {
        contact,
      },
    });

  const onPressAdd = () =>
    navigate('PRIVATE', {
      screen: 'Novo contato',
    });

  const fetchContacts = async () => {
    const contacts = await getContacts();
    setContacts(contacts);
  };

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, []),
  );

  return (
    <Dashboard
      userName={user.name}
      contacts={contacts}
      onPressContact={onPressContact}
      onPressAdd={onPressAdd}
    />
  );
};

export default DashboardContainer;

import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Contact from './Contact';
import { deleteContact } from '../../api';

type Props = {
  route: {
    params: {
      contact: ContactsResponse;
    };
  };
};

const ContactContainer: FC<Props> = ({ route }) => {
  const { contact } = route.params;
  const { goBack } = useNavigation();

  const onPressDelete = (id: string) => {
    deleteContact(id);
    goBack();
  };

  return <Contact contact={contact} onPressDelete={onPressDelete} />;
};

export default ContactContainer;

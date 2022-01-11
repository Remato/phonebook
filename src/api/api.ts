import axios from 'axios';

const api = axios.create({
  baseURL: `https://61dd07aa591c3a0017e1abc1.mockapi.io/api/v1`,
});

export const getContacts = async (): Promise<ContactsResponse[]> => {
  try {
    const { data } = await api.get(`/contacts`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async (
  contact: ContactsResponse,
): Promise<ContactsResponse> => {
  try {
    const { data } = await api.post(`/contacts`, contact);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async (id: string): Promise<void> => {
  try {
    await api.delete(`/contacts/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

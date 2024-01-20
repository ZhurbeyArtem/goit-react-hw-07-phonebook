import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://65ab0055fcd1c9dcffc61174.mockapi.io/contacts/contacts',
        contact
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

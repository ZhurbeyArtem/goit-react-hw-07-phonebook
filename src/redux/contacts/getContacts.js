import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://65ab0055fcd1c9dcffc61174.mockapi.io/contacts/contacts'
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getContacts = state => state.contacts;

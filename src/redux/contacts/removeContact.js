import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRemoveContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `https://65ab0055fcd1c9dcffc61174.mockapi.io/contacts/contacts/${id}`,
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

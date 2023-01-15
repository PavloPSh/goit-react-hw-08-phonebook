import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.unshift({ id: nanoid(), ...action.payload });
    },
    removeContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact} = contactsSlice.actions;

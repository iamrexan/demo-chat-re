import { createSlice } from "@reduxjs/toolkit";

export const contactSlick = createSlice({
  name: "contact",
  initialState: {
    value: {
      1: {
        firstName: "Aravind",
        lastName: "Ramakrishnan",
        phoneNumbers: ["235416894"],
        email: "",
        profilePath: "",
        status: "alive",
      },
      2: {
        firstName: "Prakash",
        lastName: "Ramakrishnan",
        phoneNumbers: ["235416894"],
        email: "",
        profilePath: "",
        status: "alive",
      },
      3: {
        firstName: "",
        lastName: "",
        phoneNumbers: ["235416894"],
        email: "",
        profilePath: "",
        status: "alive",
      },
    },
  },
  reducers: {
    addContact: (state, action) => {
      let key =
        typeof Object.keys(state.value).pop() == "undefined"
          ? 0
          : parseInt(Object.keys(state.value).pop()) + 1;
      state.value = {
        ...state.value,
        [key]: action.payload,
      };
    },
    updateContact: (state, action) => {
      const id = action.payload.id;
      delete action.payload.id;
      state.value = {
        ...state.value,
        [parseInt(id)]: action.payload,
      };
    },
    deleteContact: (state, action) => {
      const val = delete state.value[action.payload];
      state = { ...val };
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactSlick.actions;

export default contactSlick.reducer;

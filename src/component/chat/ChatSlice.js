import { createSlice } from "@reduxjs/toolkit";

export const ChatSlike = createSlice({
  name: "chat",
  initialState: {
    value: {
      1: [
        {
          from: 888,
          to: 1,
          msg: "Hi This is Anto",
        },
        {
          from: 1,
          to: 888,
          msg: "Hi Anto",
        },
      ],
    },
  },
  reducers: {
    addMessage: (state, action) => {
      const st = JSON.parse(JSON.stringify(state.value));
      if (Object.keys(st).filter((e) => e == action.payload.to).length < 1) {
        state.value = {
          ...state.value,
          [action.payload.to]: [action.payload],
        };
      } else {
        state.value = {
          ...state.value,
          [action.payload.to]: [...st[action.payload.to], action.payload],
        };
      }
    },
  },
});

export const { addMessage } = ChatSlike.actions;

export default ChatSlike.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IContact {
  email: string;
  message: string;
  isSubmitted: boolean;
}

const initialState = {
  email: "",
  message: "",
  isSubmitted: false,
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submit: (state: IContact, action: PayloadAction<Partial<IContact>>) => {
      state.email = action.payload.email ?? "";
      state.message = action.payload.message ?? "";
      state.isSubmitted = true;
    },
  },
});

export const { submit } = contactSlice.actions;

export const selectContact = (state: RootState) => state.contact;

export default contactSlice.reducer;

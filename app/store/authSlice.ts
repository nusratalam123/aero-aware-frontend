import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as jwt_decode from "jwt-decode";
interface User {
  id: string;
  name: string;
  email: string;
  district?: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = { user: null };

// Async thunk to fetch user from token
export const fetchUser = createAsyncThunk<User | null>("auth/fetchUser", async () => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) return null;

    const decoded: User = jwt_decode.jwtDecode(token);  
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;

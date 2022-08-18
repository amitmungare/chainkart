import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./api";
import { toast } from "react-toastify";
import { RootState } from "./store";
import { User } from "../types";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ formData, navigate }: any, { rejectWithValue }) => {
    try {
      let user: any;
      const res = await api.login(formData);
      const data = res.data;
      if (data.message) {
        toast.error(data.message);
        return;
      }
      const token = data.token;
      user = data.user;
      user = { ...user, token };
      console.log(user);
      toast.success("Login successful");
      navigate("/");
      return user;
    } catch (err) {
      return rejectWithValue(err.message.data);
      // toast.error(err);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ formData, navigate }: any, { rejectWithValue }) => {
    try {
      let user: any;
      const res = await api.register(formData);
      // console.log(res);
      const data = res.data;
      if (data.message) {
        toast.error(data.message);
        return;
      }
      const token = data.token;
      user = data.user;
      user = { ...user, token };
      toast.success("Register successful");
      navigate("/");
      return user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/update",
  async ({ formData, token }: any, { rejectWithValue }) => {
    try {
      // console.log(formData, token);
      const res = await api.updateProfile(formData, token);

      toast.success("Profile updated");
      return { ...formData, token };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/password",
  async ({ formData, token }: any, { rejectWithValue }) => {
    try {
      const res = await api.updatePassword(formData, token);
      toast.success("Password updated");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  try {
    const { data } = await api.logout();
    toast.success("Logout successful");
  } catch (err) {
    toast.error("Logout failed");
  }
});

interface IS {
  user: User | null;
  loading: boolean;
  error: any;
}

const initialState: IS = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.toString()]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginUser.rejected.toString()]: (state, action) => {
      state.loading = false;
      // console.log(error);
      state.error = action.payload;
    },

    [logoutUser.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [logoutUser.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.user = null;
    },
    [logoutUser.rejected.toString()]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },

    [registerUser.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [registerUser.rejected.toString()]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },

    [updateUserProfile.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [updateUserProfile.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [updateUserProfile.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateUserPassword.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [updateUserPassword.fulfilled.toString()]: (state, action) => {
      state.loading = false;
    },
    [updateUserPassword.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export const selectU = (state: RootState) => state.user;

export default userSlice.reducer;

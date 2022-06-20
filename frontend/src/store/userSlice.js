import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./api";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      let user;
      const res = await api.login(formData);
      const data = res.data;
      if (data.message) {
        toast.error(data.message);
        return;
      }
      const token = data.token;
      user = data.user;
      user = { ...user, token };
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
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      let user;
      const res = await api.register(formData);
      console.log(res);
      const data = res.data;
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
  async ({ formData, toast, token }, { rejectWithValue }) => {
    try {
      // console.log(formData, token);
      const res = await api.updateProfile(formData, token);
      console.log(res);
      toast.success("Profile updated");
      return { ...formData, token };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/password",
  async ({ formData, toast, token }, { rejectWithValue }) => {
    try {
      const res = await api.updatePassword(formData, token);
      toast.success("Password updated");
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logout", async ({ toast }) => {
  try {
    const { data } = await api.logout();
    toast.success("Logout successful");
  } catch (err) {
    toast.error("Logout failed");
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      // console.log(error);
      state.error = action.payload;
    },

    [logoutUser.pending]: (state, action) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = null;
    },
    [logoutUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },

    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },

    [updateUserProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUserProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [updateUserProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateUserPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUserPassword.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateUserPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

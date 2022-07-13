import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "./api";
import { toast } from "react-toastify";
import {
  Login,
  Register,
  User,
  UpdateProfie,
  UpdatePassword,
} from "../utils/dataTypes";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ formData, navigate }: any, { rejectWithValue }) => {
    try {
      console.log(formData);
      let user: User;
      const { data } = await api.login(formData);
      if (data.message) {
        toast.error(data.message);

        return;
      }
      const token = data.token;
      user = data.user;
      user = { ...user, token };
      toast.success("Login successful");
      navigate("/");
      console.log(user);
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
      let user: User;
      const { data } = await api.register(formData);
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
  async (props: UpdateProfie, { rejectWithValue }) => {
    try {
      console.log(props);
      const res = await api.updateProfile(props);

      toast.success("Profile updated");
      return props;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "user/password",
  async (props: UpdatePassword, { rejectWithValue }) => {
    try {
      const res = await api.updatePassword(props);
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

interface initialState1 {
  user: User;
  loading: boolean;
  error: string;
}

const initialState: initialState1 = {
  user: {
    user: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      city: "",
      state: "",
      pincode: 0,
      landmark: "",
      hnumber: 0,
    },
    token: "",
    active: false,
  },
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
        state.user.active = true;
      }
    );

    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.loading = false;
        state.user.active = true;
      }
    );

    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(updateUserProfile.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      updateUserProfile.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(updateUserProfile.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(updateUserPassword.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      updateUserPassword.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(updateUserPassword.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(logoutUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      logoutUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = initialState.user;
        state.loading = false;
      }
    );

    builder.addCase(logoutUser.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;

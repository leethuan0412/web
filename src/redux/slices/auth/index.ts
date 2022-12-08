import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    userInfo?: {
        id?: number;
        name?: string;
        email?: string;
    };
    token?: string;
}


const initialState: IInitialState = {
    userInfo: {},
    token: '',
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccountToken(state, action) {
            state.token = action.payload;
          },
          setUserProfile(state, action) {
            state.userInfo = action.payload;
          },
    },
    // extraReducers: (buider) => {
    //     buider.addCase(
    //         login.fulfilled,
    //         (state: IInitialState, action: PayloadAction<IAction>) => {
    //             const payload = action.payload;
    //             console.log(action.payload);
    //             state.userInfo = payload.data;
    //             state.token = payload.token;
    //         },
    //     );
    //     buider.addCase(register.fulfilled, (state, action) => {
    //         state.userInfo = action.payload.data;
    //         state.token = action.payload.token;
    //     });
    //     buider.addCase(logout.fulfilled, (state: IInitialState) => {
    //         state.userInfo = {};
    //         state.token = '';
    //     });
    //     buider.addCase(logout.rejected, (state: IInitialState) => {
    //         state.userInfo = {};
    //         state.token = '';
    //     });
    //     buider.addCase(getUserInfo.fulfilled, (state: any, action) => {
    //         state.userInfo = action.payload.data;
    //     });
    //     buider.addCase(getUserInfo.rejected, (state: IInitialState) => {
    //         state.userInfo = {};
    //         state.token = '';
    //     });
    // },
});

export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        name: '',
        phone: '',
        address: '',
        
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching =true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        setUserInfo: (state,action) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
        }
    }
})

export const{loginStart,loginSuccess,loginFailure,setUserInfo} = userSlice.actions
export default userSlice.reducer;
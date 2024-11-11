import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:{name:"",phone:"",adults:0,children:0,email:""},
    reducers:{
        updateName(state,action){
            state.name =action.payload
        },
        updatePhone(state,action){
            state.phone =action.payload
        },
        updateAdult(state,action){
            state.adults =action.payload
        },

        updateChildren(state,action){
            state.children =action.payload
        },
        updateEmail(state,action){
            state.email = action.payload
        }
    }
    
})

export const {updateAdult,updateChildren,updatePhone,updateName,updateEmail} = UserSlice.actions

export default UserSlice.reducer
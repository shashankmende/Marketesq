import { createSlice } from "@reduxjs/toolkit";


const QuantitySlice = createSlice({
    name:"quantity",
    initialState:{rooms:0,checkInDate:"",checkOutDate:""},
    reducers:{
        incrementRooms(state){
            console.log('incremented')
            state.rooms += 1 
        },
        decrementRooms(state){
            
            if (state.rooms>0) {
                state.rooms -=1     
            }
            
            
        },
        setCheckInDate(state,action){
            state.checkInDate =action.payload
        },
        setCheckOutDate(state,action){
            state.checkOutDate =     action.payload
        }

    }
})


export const { incrementRooms,decrementRooms,setCheckInDate,setCheckOutDate } = QuantitySlice.actions;
export default QuantitySlice.reducer
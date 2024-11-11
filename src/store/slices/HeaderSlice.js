import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: "header",
    initialState: { active: "initail" }, 
    reducers: {
        updateActive(state, action) {
            console.log(state)
            state.active = action.payload;
        }
    }
});

export const { updateActive } = HeaderSlice.actions;
export default HeaderSlice.reducer;

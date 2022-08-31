
import { createSlice } from "@reduxjs/toolkit";

export const nameTraiderSlice = createSlice({
    name: "nametraider",
    initialState: " ",
    reducers: {
        setNameTraider: (state, action) => action.payload
    }
})
export const { setNameTraider } = nameTraiderSlice.actions
export default nameTraiderSlice.reducer

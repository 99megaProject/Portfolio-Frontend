import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: false,
    mode_style: '!bg-white !text-black'
}

const featureSlice = createSlice({
    name: 'feature slice',
    initialState,
    reducers: {
        modeReduc: (state, action) => {
            state.mode = action.payload
        },
        mode_style_Reduc: (state, action) => {
            state.mode_style = action.payload
        }
    }
})


export default featureSlice.reducer

export const { modeReduc, mode_style_Reduc } = featureSlice.actions
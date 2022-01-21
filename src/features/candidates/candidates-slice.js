import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flag: false
}

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState,
    reducers: {
        toggle(state) {
            state.flag = !state.flag
        }
    }
})

export const { toggle } = candidatesSlice.actions
export default candidatesSlice.reducer
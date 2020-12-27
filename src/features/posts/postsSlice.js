import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    {id: '1', title: "1st Post!", content: 'Hello!'},
    {id: '2', title: "2nd Post!", content: 'Nore text!'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer


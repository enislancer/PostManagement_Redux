import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    {id: '1', title: "1st Post!", content: '1st content!'},
    {id: '2', title: "2nd Post!", content: 'second content!'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        }
    }
})
export const {postAdded} = postSlice.actions
export default postSlice.reducer


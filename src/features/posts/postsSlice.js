import {createSlice, nanoid} from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1', 
        title: "1st Post!", 
        content: '1st content!', 
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        user: '1',
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
    },
    {
        id: '2', 
        title: "2nd Post!", 
        content: 'second content!', 
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        user: '2',
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
          },
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(), 
                        date: new Date().toISOString(),
                        title, 
                        content, 
                        user:userId
                    }
                }
            }
        },

        postUpdated(state, action){
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost){
                existingPost.title = title
                existingPost.content = content
            }
        } ,
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
              existingPost.reactions[reaction]++
            }
          }
    }
})
export const {postAdded, postUpdated , reactionAdded } = postSlice.actions
export default postSlice.reducer


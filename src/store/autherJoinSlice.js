import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { 
        authors: [],

    loading: null,
    error: false,

 }
export const getAuthors = createAsyncThunk("authors/get",async (user) => {
    const res = await axios.post('https://localhost:44367/api/joinrequest/interval', user, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluLmtoYWxpbEBnbWFpbC5jb20iLCJuYW1laWQiOiJVc3JBZG1pbi1kMWM4LTQzMGItOGNmYi0xNDg2MzkyYjQ5YWIiLCJyb2xlIjoiQWRtaW4iLCJqdGkiOiI1YzA4ODIyYi1jMjc1LTRlNDctYTY5NC1kMjQyMzRkZjc2M2EiLCJpYXQiOjE2NTA0NzUyOTcsIm5iZiI6MTY1MDQ3NTI5NywiZXhwIjoxNjUwNDgyNDk3LCJpc3MiOiJ3ZWJBcGkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAvIn0.6099nTKLTh-zMM8zuapc1yLke_jdxKKgUXoKNJ3J0aw`
        }
    });
    return res.data;
})
const authorSlice = createSlice({
  name: 'author',
  initialState,
    extraReducers: {
        [getAuthors.pending]: (state) => {
            state.loading = true;
        },
        [getAuthors.fulfilled]: (state, { payload }) => {
            state.authors = [];
            state.authors.push(payload);
            state.loading = null;
        },
        [getAuthors.rejected]: (state) => {
            state.loading = null;
            state.error = true;
        }
    }
})


export default authorSlice.reducer
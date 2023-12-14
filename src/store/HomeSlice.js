import { createSlice } from "@reduxjs/toolkit";


export const HomeSlice = createSlice({
    name: 'HomeSlice',
    initialState: {
        upcomurl:[],
        genres:{},
        popurl:[],
    },
    reducers: {
        GetApiData: (state, action) => {
            state.upcomurl = action.payload;
        },
        GetApiGenres: (state, action)=> {
            state.genres = action.payload;
        },
        GetPopularData: (state, action) => {
            state.popurl = action.payload;
        }
    },
})

export const { GetApiData, GetApiGenres, GetPopularData} = HomeSlice.actions;
export default HomeSlice.reducer
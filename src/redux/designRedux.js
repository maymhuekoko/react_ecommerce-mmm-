import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
    name: "design",
    initialState: {
        colors: {
            'ar1': '#FF0000','ar2': '#FFA500','ar3': '#FF0088', 'ar4': '#FF0AAA','ar5': '#FF0800',
            'ar6': '#800080','ar7': '#FFFF00','ar8': '#FF00FF', 'ar9': '#FF0000','ar10': '#FF8000',
        },
        sizes :  [{
            "design_type": "vneck",
            "gender_type": "m",
            "filename": "vneck_male_sizechart.PNG",
              
        }, {
            "design_type": "vneck",
             "gender_type": "f",
            "filename": "vneck_female_sizechart.jpg",
           },
           {
            "design_type": "v2",
             "gender_type": "f",
            "filename": "vneck_female_sizechart.jpg",
           },
        ]   
    },
    reducers: {
        
    }
})

export const{} = designSlice.actions
export default designSlice.reducer;
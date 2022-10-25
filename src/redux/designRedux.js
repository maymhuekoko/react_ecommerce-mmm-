import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
    name: "cart",
    initialState: {
        colors: {
            'ar1': '#FF0000','ar2': '#FFA500','ar3': '#FF0088', 'ar4': '#FF0AAA','ar5': '#FF0800',
            'ar6': '#800080','ar7': '#FFFF00','ar8': '#FF00FF', 'ar9': '#FF0000','ar10': '#FF8000',
        },
        sizes :  [{
            "name": "Raj",
             "Age":"15",
            "RollNumber": "123",
            "Marks": "99",
              
        }, {
            "name": "Aman",
             "Age":"14",
            "RollNumber": "223",
            "Marks": "69",
           },
          
        ]   
    },
    reducers: {
        
    }
})

export const{} = designSlice.actions
export default designSlice.reducer;
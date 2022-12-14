import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
    name: "design",
    initialState: {
        colors: {
            'ar6': '#6d676d', 'ar7': '#b5b067', 'ar8': '#91c618',
            'ar16': '#e798cb', 'ar18': '#7da253', 'ar19': '#151617', 'ar20': '#495f93', 
            'ar21': '#141314', 'ar23': '#9d9fa4', 
            'ar26': '#dd7a5c',
            'ar32': '#042501',
            'ar36': '#cf0930',
            'ar43': '#ffe101', 'ar44': '#12bbaa', 
            'ar48': '#e0b730',
            'ar57': '#631700',
            'ar66': '#44012d', 'ar67': '#ff80b3', 'ar70': '#d3a527',
            'ar75': '#8d1f66',
            'ar77': '#067b02', 'ar79': '#f17a55',
            'ar81': '#976422', 'ar82': '#838789', 
            'ar88': '#1ec157', 'ar64': '#06bd00',
            'ar90': '#91813b',
            'ar96': '#0a3e38', 'ar98': '#0b7694', 
            'ar101': '#78eee0', 'ar106': '#544444',
        },
        orders: [],
        edit_testname: '',
        edit_testqty: '',
        edit_testprice: '',
        homesearch: false,
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        removeOrder: (state, action) => {
            for (var i = 0; i < state.orders.length; i++) {
                if (state.orders[i].orderid === action.payload.id) {
                    state.orders.splice(i, 1);
                }
            }
        },
        editOrder: (state,action) => {
            for (var i = 0; i < state.orders.length; i++) {
                if (state.orders[i].orderid === action.payload.id) {
                    state.edit_testname = state.orders[i].testname;
                    state.edit_testqty = state.orders[i].testqty;
                    state.edit_testprice = state.orders[i].testprice;
                    state.orders.splice(i, 1);
                }
            }
        },
        resetOrder: (state) => {
            state.orders.length = 0;
        },
        showSearch: (state) => {
            state.homesearch = true;
        },
        resetSearch: (state) => {
            state.homesearch = false;
        }

    }
})

export const { addOrder, removeOrder, resetOrder, editOrder,showSearch,resetSearch } = designSlice.actions
export default designSlice.reducer;
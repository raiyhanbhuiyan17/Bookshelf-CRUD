import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialBooks ={
    books:[
        {id:uuidv4(), title: 'Harry Potter', author: 'JK Rowlings'},
        {id:uuidv4(), title: 'Forty Rules of Love', author:'Elif Shafak'},
        {id:uuidv4(), title: 'Atomic Habits', author:'David Reanaund'},
    ]
}

const bookSlice = createSlice({
    name:'books',
    initialState: initialBooks,
    reducers:{
        showBooks: ((state,action)=>state),
        addBook: ((state,action)=>{
                state.books.push(action.payload);
        }),
        updateBook: ((state,action)=>{
            const {id,title,author} = action.payload;
            const isBookExist = state.books.filter((book)=>book.id===id);
            if(isBookExist){
                isBookExist[0].id=id;
                isBookExist[0].title=title;
                isBookExist[0].author=author;
            }
            

        }),
        deleteBook: (state,action)=>{
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id) //here we are keeping all id's except the one is given through payload from user side.
        },
        
    }
})

export default bookSlice.reducer;
export const {showBooks,addBook,updateBook,deleteBook} = bookSlice.actions;
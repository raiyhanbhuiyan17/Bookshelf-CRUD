import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {

  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const dispatch = useDispatch();
  //whenever I am adding it will go to the Show Books page. so we're using navigate hooks here
  const navigate = useNavigate();
  //for adding id we need the length 
  //const numberofBooks = useSelector(state=>state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const book = {id:numberofBooks+1 ,title,author};
    const book = {id:uuidv4() ,title,author};
    dispatch(addBook(book));
    //whenever I am adding it will go to the Show Books page.
    navigate('/show-books',{replace:true});

  };

  return (  
    <div>
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Title: </label>
            <input 
             type='text'
             id='title'
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             required
            />
          </div>
          <div className="form-field">
            <label htmlFor="author">Author: </label>
            <input 
             type='text'
             id='author'
             value={author}
             onChange={(e)=>setAuthor(e.target.value)}
             required
            />
          </div>
          <button type="submit" >Add Book</button>
            
        </form>

      
    </div>
  )
}

export default AddBook

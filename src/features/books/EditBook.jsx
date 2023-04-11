import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { updateBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const Editbook = () => {
  const location = useLocation();
  //console.log(location);
  const [id,setId] = useState(location.state.id);
  const [title,setTitle] = useState(location.state.title);
  const [author,setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(updateBook({id,title,author}));
    navigate('/show-books',{replace:true});
  };

  return (
    <div>
        <h2>Edit Book</h2>
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
          <button type="submit" >Update Book</button>
            
        </form>
      
    </div>
  )
}

export default Editbook

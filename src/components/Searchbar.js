import React from 'react';
import {useState} from 'react';
import useStyles from '../styles/inputStyle';
import {useSelector, useDispatch} from 'react-redux';

 function Searchbar(){
    const posts = useSelector(state=>state.posts);
    const dispatch = useDispatch();  
     const [search,setSearch] = useState("");
    const classes = useStyles();
    const isPresent = (value, checkValue) => value.toString().toLowerCase().includes(checkValue);

const handleChange = ()=>{
  const searchInp = search.toString().toLowerCase();
  const filteredPosts= posts.post.filter(
    ({
      id, body,title
    })=> isPresent(id,searchInp)||isPresent(body,searchInp)||isPresent(title,searchInp)
  ) 

  dispatch({type:'FILTERED',payload: filteredPosts})
}


    return (
        <input
          className={classes.Input}
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e)=>{setSearch(e.target.value);console.log(search)
          handleChange()}}
        />
    )
}

export default Searchbar;
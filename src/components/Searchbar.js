import React from 'react';
import {useState,useEffect} from 'react';
import useStyles from '../styles/inputStyle';
import {useSelector, useDispatch} from 'react-redux';

 function Searchbar(){
    const posts = useSelector(state=>state.posts);
    const temp = useSelector(state=>state.posts.temp);

    const dispatch = useDispatch();  
     const [search,setSearch] = useState("");
    const classes = useStyles();
    const isPresent = (value, checkValue) => value.toString().toLowerCase().includes(checkValue);

    var Prevlen; //prev search string length
    
  useEffect(()=>{
    if(search.length===0){
      dispatch({type:'FILTERED',payload:temp})
    }
  },[])

  const handleChange = ()=>{
    const searchInp = search.toString().toLowerCase();
    const filteredPosts= posts.post.filter(
    ({
      id, body,title
    })=> isPresent(id,searchInp)||isPresent(body,searchInp)||isPresent(title,searchInp)
  ) 

  dispatch({type:'FILTERED',payload: filteredPosts})
  if(filteredPosts.length===0){
    Prevlen = search.toString().length;
  }
  if(filteredPosts.length===0 && search.toString().length<=Prevlen){
    // resets the posts after no post is found during search
    //resets on backspace in searchbar
    dispatch({type:'FILTERED',payload:temp})
  }
  if(search.length===0){
    dispatch({type:'FILTERED',payload:temp})
  }

}


    return (
        <input
          className={classes.Input}
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e)=>{setSearch(e.target.value);
                    handleChange()}}
        />
    )
}

export default Searchbar;
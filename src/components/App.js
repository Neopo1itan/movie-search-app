/*
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-12 16:41:52
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-12 18:34:14
 */
import React, { useEffect, useState } from "react"
import './App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // 用自己的替换

const App = () => {
  const [loading, setLoading] = useState(true);//加载状态
  const [movies, setMovies] = useState([]);//电影列表
  const [errorMessage,setErrorMessage] = useState(null);//错误信息

  useEffect(()=>{
    fetch(MOVIE_API_URL).then(response => response.json()).then(jsonResponse => {
      setMovies(jsonResponse.Search);
      setLoading(false);
    });
  },[]);

  const search = searchValue => {//搜索方法
    setLoading(true);
    setErrorMessage(null)

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(response => response.json()).then(jsonResponse => {
      if(jsonResponse.Response === "True"){
        setMovies(jsonResponse.Search);
        setLoading(false);
      }else{
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    });
  };

  return(
    <div className='App'>
      <Header text="MovieSearchApp"></Header>
      <Search search={search}></Search>
      <p className='App-intro'>分享一些喜欢的电影</p>
      <div className='movies'>
        { loading&&!errorMessage?(
        <span>loading...</span>
        ):errorMessage?(
        <div className='errorMessage'>{errorMessage}</div>
        ):(
          movies.map((movie,index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie}/>
          ))
        )}
      </div>
    </div>
  );
};
export default App;

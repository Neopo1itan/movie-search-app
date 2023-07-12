/*
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-12 17:40:52
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-12 18:36:21
 */
import React, { useState } from "react"

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);//修改搜索值
    }
    const resetInputField = () => {
        setSearchValue('');//重置搜索
    }
    const callSearchFunction = (e) => {
        e.preventDefault();//阻止默认操作
        props.search(searchValue);//调用搜索
        resetInputField();//调用重置函数
    }

    return(
        <form className="search">
            <input type="text" value={searchValue} onChange={handleSearchInputChanges}/>
            <input type="submit" value="SEARCH" onClick={callSearchFunction} />
        </form>
    )
}

export default Search;
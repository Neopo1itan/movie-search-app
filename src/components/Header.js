/*
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-12 17:07:25
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-12 17:18:24
 */
import React from "react"

const Header = (props) => {
    return (
        <header className="App-header"> 
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;
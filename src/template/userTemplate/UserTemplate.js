import React from 'react';
import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
// import page
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
// import picture
import imgBackground from '../../assets/img/background1.jpg';
//import types
import { USER_LOGIN } from "../../util/setting";

export const UserTemp = (props) => {

    if(localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/" /> 
    }

    const { Component, ...restProps } = props;

    const style = {
        backgroundImage:`url(${imgBackground})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:'10%',
    }

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <div style={style}>
                <Component {...propsRoute} />
            </div>
            <Footer />
        </Fragment>
    }} />

}
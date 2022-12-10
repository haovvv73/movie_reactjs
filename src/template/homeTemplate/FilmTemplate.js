import React from 'react'
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import HeaderLite from '../../component/header/HeaderLite';


export const FilmTemp = (props)=>{

    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>
            <HeaderLite/>

            <Component {...propsRoute} />

            <Footer/>
        </Fragment>
    }}/>

}
import React from 'react'
import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";


export const HomeTemp = (props)=>{

    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>
            <Header/>

            <Component {...propsRoute} />

            <Footer/>
        </Fragment>
    }}/>

}
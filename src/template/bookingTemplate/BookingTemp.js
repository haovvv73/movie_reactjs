import React from 'react'
import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import HeaderCinema from "../../component/header/headerCinema/HeaderCinema";
import { USER_LOGIN } from "../../util/setting";


export const BookingTemp = (props)=>{

    const {Component,...restProps} = props;

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/login"/> 
    }

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <HeaderCinema/>

            <Component {...propsRoute} />

        </Fragment>
    }} />

}
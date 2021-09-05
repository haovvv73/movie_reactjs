import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";


export const UserTemp = (props)=>{

    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
        <Header/>

        <Component {...propsRoute} />

        <Footer/>

        </Fragment>
    }} />

}
import React from 'react';
import { history } from '../../../App';

export default function HeaderCinema() {

    const back = () => history.goBack();

    return (
        <div className="headerCinema">
            <nav className="navbar navbar-light headerCinema__nav fixed-top">
                <span onClick={back} className="navbar-brand ml-2"> <i className="fa fa-chevron-left mr-1"></i>  Trở lại </span>
            </nav>
        </div>
    )
}

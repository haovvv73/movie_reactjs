import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
    // trạng thái loading
    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {
                isLoading ? <div className="body__loading">
                    <div className="loading ">
                        <span>Loading</span>
                    </div>
                </div> : ''
        }
        </Fragment>
    )
}

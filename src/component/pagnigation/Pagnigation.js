import React from 'react'
import PropTypes from 'prop-types'

Pagnigation.propTypes = {
    pagnigation: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}

Pagnigation.defaultProps = {
    onPageChange: null,
}

function Pagnigation(props) {
    //các phần tử , hàm chuyển trang
    const { pagnigation, onPageChange } = props;
    // tổng số trang , trang gần đây
    const { totalPages, currentPage } = pagnigation

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className={`page-item ${currentPage <= 1 ? "disabled" : null}`} >
                        <button className="page-link" onClick={
                            () => handlePageChange(currentPage - 1)
                        }>Previous</button>
                    </li>

                    {currentPage <= 1 ? null : <li className="page-item ">
                        <button className="page-link text-dark" onClick={
                            () => handlePageChange(currentPage - 1)
                        }>{currentPage - 1}</button>
                    </li>}

                    <li className="page-item"><button className="page-link bg-info text-white">{currentPage}</button></li>

                    {currentPage >= totalPages ? null : <li className="page-item">
                        <button className="page-link text-dark" onClick={
                            () => handlePageChange(currentPage + 1)
                        }>{currentPage + 1}</button>
                    </li>}

                    <li className={`page-item ${currentPage >= totalPages ? "disabled" : null}`} >
                        <button className="page-link" onClick={
                            () => handlePageChange(currentPage + 1)
                        }>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagnigation



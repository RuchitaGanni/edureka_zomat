import React from 'react';

function Table(props) {
    let renderTable = ''
    renderTable = ({ data }) => {

        if (data.length > 0) {
            return data.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.cost}</td>
                        <td>UPI</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        } else {
            renderTable =
                <img src="/assests/loader2.gif" alt="loading..." id="loaderGIF" />
        }
    }
    return (
        <>
            {renderTable(props)}</>
    )
}

export default Table;
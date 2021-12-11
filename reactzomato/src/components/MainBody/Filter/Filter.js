import React, { Component, Fragment } from 'react';
import './Filter.css';
class Filter extends Component {
    render() {
        return (
            <Fragment >
                <div className="filter">
                    <div className="filter_elements">
                        <div className="filter_heading">
                            <span className="filter_span">Filter</span>
                        </div>
                        <div className="filter_search">
                            <div className="filtersSections1">

                                <span className="filter_search_title">Search Locations</span>



                                <select className="filter_search_box">
                                    <option>Select Location</option>
                                    <option>Hyderabad</option>
                                    <option>Chennai</option>
                                    <option>Kolkata</option>
                                </select>

                            </div>
                            <div className="filtersSections2">

                                <span className="filter_cusines">CUSINES </span>

                                <div className="filter_checkbox">
                                    <div>
                                        <input type="checkbox" value="South" /><label>South Indian</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="Chineese" /><label>Chineese</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="Mexican" /><label>Chineese</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersSections3">

                                <span className="filter_persons">Choose for </span>

                                <div className="filter_checkbox">
                                    <div>
                                        <input type="radio" /><label>One</label>
                                    </div>
                                    <div>
                                        <input type="radio" /><label>Two</label>
                                    </div>
                                    <div>
                                        <input type="radio" /><label>Three</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersSections4">

                                <span className="filter_persons">Sort </span>

                                <div className="filter_checkbox">
                                    <div>
                                        <input type="radio" /><label>Pice low to high</label>
                                    </div>
                                    <div>
                                        <input type="radio" /><label>Price high to low</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Filter;
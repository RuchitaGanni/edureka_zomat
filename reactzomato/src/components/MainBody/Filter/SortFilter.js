import React, { Component, Fragment } from 'react';
class SortFilter extends Component {
    render() {
        return (
            <Fragment>
                <div className="filtersSections4">

                    <span className="filter_persons">Sort </span>

                    <div className="filter_checkbox">
                        <div>
                            <input type="radio" name="cuisine" value="1" /><label>Pice low to high</label>
                        </div>
                        <div>
                            <input type="radio" name="cuisine" value="-1" /><label>Price high to low</label>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SortFilter
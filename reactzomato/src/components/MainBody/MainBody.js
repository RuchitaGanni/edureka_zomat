import React, { Component, Fragment } from 'react';
import Filter from './Filter/Filter';
import List from './List/List';
import './MainBody.css';
import axios from 'axios';
const url = "https://edu-zomatoapp.herokuapp.com/filter";
class MainBody extends Component {


    constructor(props) {
        super(props);

        this.state={
            restList:''
        }
    }

    render() {
        return (
            <Fragment >
                <div className="container">
                    <div>
                        <h3>Quick Search Results</h3>
                    </div>
                    <div className="page_content">
                        <Filter />
                        <List restData={this.state.restList}/>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        const mealId = this.props.match.params.mealTypeId;
        axios.get(`${url}/${mealId}`)
        .then((res) => {
            console.log(res.data,'res')
            this.setState({restList:res.data})
        })
    }
}
export default MainBody;
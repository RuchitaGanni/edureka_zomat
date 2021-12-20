import React, { Component, Fragment } from 'react';

class MenuItems extends Component {
    constructor() {
        super()
        this.state = {
            orderObj: {}
        }
    }
    orderId = [];
    orderIds = [];

    addItem = (id) => {
        // console.log('click', id);
        // this.setState({ orderObj: { id: id } })
        // sessionStorage.setItem('MENUID', this.setState({ orderObj: { id: id } }));
        // this.orderIds.push(this.state.orderObj)
        // console.log(this.orderIds, 'oo');
       // if (this.orderIds.length > 0) {
            //         if (this.orderObj.hasOwnProperty(id)) {
            //             console.log('innn', id)
            //             this.orderObj[id] =5;
            //         }else{
            //             this.orderObj[id] = 2;
            //             this.orderIds.push(this.orderObj);
            //             this.orderObj={}
        //     this.orderIds.map((i) => {
        //         console.log(Object.keys(i),i, 'l',i);
        //     })
        // }

        //         console.log(this.orderObj, '====', this.orderIds);
        //         // this.orderIds.map( (i,index)=>{
        //         //     console.log(Object.keys(i),'l',index);
        //         // })
        //     //}
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    // without porps
    renderMenu = ({ menuItems }) => {
        if (menuItems) {
            //console.log(menuItems, 'm');
            return menuItems.map((item) => {
                return (
                    <Fragment>
                        <div className="card">
                            <div class="itemImg">
                                <img src={item.menu_image} alt={item.menu_name} className="cardImage" />
                            </div>
                            <div class="itemdetails">
                                <div><span class="itemName">{item.menu_name}</span></div>
                                <div >
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star checked"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div>
                                    <span className="itemPrice">&#8377; {item.menu_price}</span>
                                </div>

                            </div>
                            <div className="btnsDiv">
                                <div>
                                    <button className="btn btn-success" onClick={() => { this.addItem(item.menu_id) }}><i class="fa fa-plus" ></i></button>
                                    <button className="btn btn-danger"><i class="fa fa-minus" ></i></button>
                                </div>
                            </div>
                        </div>
                    </Fragment >
                )
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div class="container">
                    {this.renderMenu(this.props)}
                </div>
            </Fragment>
        )
    }

}
export default MenuItems;
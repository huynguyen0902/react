import React , { Component } from 'react';
class Product extends Component{
    Show_Product = (children, image, edit) => {
        console.log({edit})
        if({edit}){
            console.log("aaaaaaaaaaaaaaaa")
            return <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {children}
                        </div>
                        <div className="panel-body">
                            <a href="#" className="thumbnail">
                                <img src={image} />
                            </a>
                            <div className="describe">
                                asdasd
                            </div>
                            <div>
                                <button className="btn btn-primary col-xs-6" onClick={() => this.Show_Feature("abc")}>Save</button>
                                <button className="btn btn-default col-xs-6">Cancle</button>
                            </div>
                            
                        </div>
                    </div> 
                </div>
        }
        return <h1>false</h1>
        
    }
    a = () =>{
        return <h1>1234</h1>
    }
    render(){
        return(
            <div>
                
                {this.Show_Product(this.props.children, this.props.image, this.props.edit)}
            </div>
            
        );
    }
}
export default Product;
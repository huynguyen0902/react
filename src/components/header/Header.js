import React, {Component} from 'react';
import './Header.css';
import Time from '../time/Time';
class Header extends Component{
    render(){
        return(
            
            <div id="contentHeader">
                <div className="col-xs-6" id="title">
                    <h3>ACEHR</h3>
                </div>
                <div className="col-xs-6" id="time">
                    <h3><Time></Time></h3>
                </div>
            </div>
            
        );
    }
}
export default Header;
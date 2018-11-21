import React, {Component} from 'react';
import Input from '../input/Input';
import './Content.css'
import MainContent from '../mainContent/MainContent';
class Content extends Component{
    render(){
        return(
            <div className="container" id="containerContent">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="container" id="titleContent"> Patient List</div>
                    </div>
                    <div className="panel-body">
                        <Input></Input>
                        <MainContent></MainContent>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default Content;
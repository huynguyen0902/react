import React, {Component} from 'react';
import InputContent from '../inputContent/InputContent';
import './ContainerContent.css'
import MainContent from '../mainContent/MainContent';
class ContainerContent extends Component{
    render(){
        return(
            <div className="container" id="containerContent">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="container" id="titleContent"> Patient List</div>
                    </div>
                    <div className="panel-body">
                        <InputContent></InputContent>
                        <MainContent></MainContent>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default ContainerContent;
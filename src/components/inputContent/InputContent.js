import React, {Component} from 'react';
import './InputContent.css'
class InputContent extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="form-group col-xs-4">
                            <label className="control-label" htmlFor="facility">Facility</label>
                            <select  className="form-control" id="facility">
                                <option value="">1</option>
                            </select>
                    </div>  
                    
                </div>
                <div className="col-xs-10">
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="firstname">First name</label>
                            <input type="text" className="form-control" id="firstname" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="lastname">Last name</label>
                            <input type="text" className="form-control" id="lastname" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="dob">DOB</label>
                            <input type="text" className="form-control" id="dob" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="patientid">Patient ID</label>
                            <input type="text" className="form-control" id="patientid" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="char#">Chart #</label>
                            <input type="text" className="form-control" id="char#" /> 
                    </div>
                    <div className="form-group col-xs-2">
                            <label className="control-label" htmlFor="ssn">SSN</label>
                            <input type="text" className="form-control" id="ssn" /> 
                    </div>
                
                </div>
                <div className="col-xs-2">
                    <div className="form-group col-xs-1">
                        <label className="control-label" htmlFor="btnClear">Clear</label>
                        <button type="button" className="btn btn-primary" id="btnClear">Clear search</button>
                    </div>  
                </div>
                <div className="col-xs-6">
                    <button className="btn btn-primary" onClick={() => this.addElement()}>add</button>
                    <button className="btn btn-danger" onClick={() => this.removeElement()}>remove</button>
                </div>
                
            </div>
            
        );
    }
}
export default InputContent;
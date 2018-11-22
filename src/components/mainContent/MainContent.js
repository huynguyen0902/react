import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
class MainContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    Status: "Active",
                    PatientID: "1",
                    Chart: "0123",
                    PatientName: "John"
                }

            ],
            isAdd: false
        };
    }
    addElement = () => {
        let ne = this.state.data;
        ne.push({
            Status: "Active",
            PatientID: "1",
            Chart: "0123",
            PatientName: "John"
        })
        this.setState({
            data: ne
        });
    }
    paging = () =>{
        let totalElement = this.state.data;
        console.log(totalElement.length);
        return <Pagination
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
        />
    }

    render(){
        let elements = this.state.data.map((item, index) => {
            let result = '';
            result = <tr key = {index}>
                        <td>{item.Status}</td>
                        <td>{item.PatientID}</td>
                        <td>{item.Chart}</td>
                        <td>{item.PatientName}</td>
                    </tr>
            return result;
        }) ;
        
        return(
            <div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Patient ID</th>
                        <th>Chart #</th>
                        <th>Patient Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>SSN</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={() => this.addElement()}>add</button>
            {this.paging()}
            </div>
        );
    }
}
export default MainContent;
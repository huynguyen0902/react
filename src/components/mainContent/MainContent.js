import React, {Component} from 'react';
class MainContent extends Component{
    Select_Patient = () => {
        alert("aa")
    }
    render(){
        return(
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
                    <tr onClick={() => this.Select_Patient()}>
                        <td>Active</td>
                        <td>1</td>
                        <td>aa</td>
                        <td>asd</td>
                        <td>sadasd</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>

                    </tr>
                    <tr>
                        <td>Active</td>
                        <td>1</td>
                        <td>aa</td>
                        <td>asd</td>
                        <td>sadasd</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>
                        <td>Active</td>

                    </tr>
                </tbody>
            </table>
        );
    }
}
export default MainContent;
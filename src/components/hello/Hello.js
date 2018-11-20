import React, { Component } from 'react';

class HelloComponent extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
           <table className="table table-hover">
             <thead>
               <tr>
                 <th>STT</th>
                 <th>NAME</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>1</td>
                 <td>Huy</td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
    );
  }
}

export default HelloComponent;

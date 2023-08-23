import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Vehicle_Selection() {
  return (
     <div className="selection">
       <h1>Sub-Columns Table</h1>
       <table>
        <thead>
           <tr>
             <th>CAR CLASS</th>
             <th>CAR TYPE</th>
             <th colSpan="3">BASE RATE</th>
           </tr>
              
           <tr>
            <th>DAILY </th>
            <th>WEEKLY</th>
            <th>MONTHLY</th>
          </tr>

         </thead>
         <tbody>
           <tr>
             <td>IMAGE 1</td>
             <td>MARUTI</td>
             <td>200/-</td>
             <td>500/-</td>
            <td>600/-</td>
            <Button variant="primary">select</Button>
            
          </tr>


          <tr>
           <td>image 2</td>
            <td>aveo</td>
            <td>1234/-</td>
            <td>12078/-</td>
            <td>6789/-</td>
          <Button variant="primary">select</Button>
            
          </tr>

          <tr>
        <td>image 3</td>
           <td>red car</td>
           <td>46422/-</td>
            <td>6789/-</td>
            <td>56676/-</td>
            <Button variant="primary">select</Button>

          </tr>
         </tbody>
        </table>
      <Button variant="primary">CONTINUE</Button>
      <Button variant="secondary">CANCEL</Button>

    </div>
    
  );
}
// TableComponent.jsx

import React from 'react';
import './GB.css'; // Import the CSS file for styling
import tableData from './GB.js';
import HCard from '../../../HeaderCard/HCard.jsx'

const GB = () => {


  return (

    <>
   <HCard head={"Governing Body Members 2019-20"}></HCard>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.srNo}</td>
                <td>{data.name}</td>
                <td>{data.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GB;

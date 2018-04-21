import React from 'react';
import DataListEntry from './DataListEntry.jsx';

const DataList = (props) => (
  <div>
    <h4> List of Data </h4>

    {props.data.map((item) => 
      <DataListEntry item={item}/>
    )}
  </div>
  )

export default DataList;
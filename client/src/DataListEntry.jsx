import React from 'react';

// const DataListEntry = (props) => (
  
//   <div>
//     {props.item.AboutMe}
//   </div>

// )

class DataListEntry extends React.Component{
  constructor(props) {
      super(props);
      this.state = {};
      // console.log(props)
  }
  
  render() {
    // console.log(this.props.data)
    // const inlineStyle = {color: 'blue'};
      return (
          <div>
           
                {/* <h3 style={inlineStyle}>Name: </h3> */}
              {this.props.data.AboutMe}
             <h5>About Me</h5> 
              {this.props.data.AboutMe}
              <h5>Languages</h5>
              {this.props.data.Languages}
              <h5>Response Rate</h5>
              {this.props.data.ResponseRate}
              <h5>Response Time</h5>
              {this.props.data.ResponseTime}
          </div>
      )
    }
}

export default DataListEntry;
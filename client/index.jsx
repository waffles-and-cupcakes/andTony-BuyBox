import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DataListEntry from './src/DataListEntry.jsx';

// alert("HERE");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    // invokes get request, render data
    this.findData();
  }
  

  findData() {
    var context = this;
    //get request
    // console.log('blue')
    $.ajax({
      type: 'GET',
      url: '/rooms/1/host' 

    }).done(function(data) {
      // console.log('hello, ' + data)
      console.dir(data)
      // console.log(context);
      context.setState({data: data[0]});
    })
  }

  render () {
    // console.log(this.state.data)
    return (<div>
      <h1>Hosted By</h1>
      <DataListEntry data={this.state.data}/>
    </div>)
  }
}




ReactDOM.render(<App />, document.getElementById('root'));

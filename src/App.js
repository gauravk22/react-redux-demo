import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import action1 from './action'

import { bindActionCreators } from 'redux';

class App extends React.Component {

constructor(props){
	super(props);
	console.log(this.props);
	this.handleClick=this.handleClick.bind(this);

}

handleClick(){
	console.log('clicked:'+this.props.data);
	this.props.act();
}

render(){
  return (
<div>
 <h1>Redux Notes App</h1>

  <h3>Add a Note</h3>
  <form id="add-note">
    Title: <br />
    <input type="text" name="title"/>
    <br />
    Content: <br />
    <textarea name="content" cols="30" rows="5"></textarea>
    <br />
    <button type="button" onClick={this.handleClick}>Add Note</button>
  </form>

  <hr />

  <h3>All Notes</h3>
  <ul id="notes">
    <li>
      <b>Title</b>
      <button data-id="5">x</button>
      <br />
      <span>Note Content</span>
    </li>
  </ul>
</div>

  )
}
}

function mapStateToProps(state){
	//console.log(state);
	return{
		data:state.state

	}
}

function mapDispatchToProps(dispatch){
	return{
		act:bindActionCreators(action1,dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;

/*
* conditional rendering 
**/


import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate (prevProps, prevState){
    console.log('prevProps',prevProps);
    console.log('prevState',prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // ejax call nad get new data
      
    }
  }

  componentWillMount (){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.");
  }
  

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

  };
  //constructor(){
  //  super();
    //bind event handlers 
  //  this.handleIncrement = this.handleIncrement.bind(this)
  //}


  render() {
    console.log('props',this.props);
    return (
      <div>
        {/*<h4>{this.props.children}</h4>*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter.value;
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
  }

}

export default Counter;

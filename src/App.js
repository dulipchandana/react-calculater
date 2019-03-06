import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
    console.log('ds', counter);
  };

  handleDelete = (counterId) => {
    console.log('event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId)
    //this.setState({counters:counters})
    this.setState({ counters })

  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length}/>
        <main className="containers">
          <Counters 
                    counters={this.state.counters}
                    onReset={this.handleReset} 
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

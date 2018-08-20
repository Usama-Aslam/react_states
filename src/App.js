import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      count:0,
      count2:0
    }
      // this.setSomething = this.setSomething.bind(this)
  }

  renderHeader(){
    return <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
  }
  renderBody(){
    return  <p className="App-intro">
               This is a simple react setState project which demonstrate the use of<br></br>
               "this.state= &#123; &#125;"  <br></br>
               "this.setState(&#123;&#125;)"<br></br>
               and the use of bind in the for functions so that they can refer "this". <br></br><br></br>
                
               {/*  using bind in direct function calling onClick */}
                <button onClick={this.setSomeValue.bind(this)}>Click me</button><span>  onclick function "this.setSomeValue.bind(this)"</span>
                <p>{this.state.count}</p>

               {/* using bind by using arrow function calling. */}
                <button onClick={()=>this.setAnotherSomeValue()}>Click me</button><span> binding by using arrow function "()=>&#123;this.setAnotherValue() &#125;" </span>
                <p>{this.state.count2}</p>
             </p>
  }
  setSomeValue(){
    this.setState({
      count:++this.state.count,
    })
    console.log(this.state.count)
  }

  setAnotherSomeValue(){
    this.setState({
      count2:++this.state.count2
    })
    console.log(this.state.count2)
  }

  render() {
    return (
      <div className="App">
       {this.renderHeader()}
       {this.renderBody()}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

import List from '../list/list';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import './home.css'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      amount: '',
      num: '',
      clicked: false
    }
    this.generator = this.generator.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  /**
   * Generates random number
   */
  generator(){
    const newGenerate = {
      amount: this.state.amount,
      num: this.state.num
    }
    if(!(newGenerate.amount && newGenerate.num)) return
    axios.post('http://localhost:5000/generator', newGenerate)
      .then((res) => this.setState.clicked = true)
      // .then((res) => this.renderList())
      .catch((err) => console.log(err.message));
  }

  renderList(){
    return <List />;
  }

  render() {
    let clicked = this.state.clicked;
    let listing;
    clicked ? listing = <List /> : listing = '';

    return (
      <div>
        <div className='select'>
          <div><label htmlFor="amount">Amount: </label></div>
          <div><label htmlFor="num">How many: &nbsp; </label></div>
        </div>
        <div className='select'>
          <div>
            <select name='amount' id="amount" onChange={this.onChange}>
                <option value="">--Please choose an option--</option>
                <option value="2">GHC 2</option>
                <option value="5">GHC 5</option>
                <option value="10">GHC 10</option>
            </select>
          </div>
          <div>
            <select name='num' id="num" onChange={this.onChange}>
              <option value="">--Please choose an option--</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div className='select'>
          <Button color='success' onClick={this.generator}>Generate</Button>
        </div>
        <br />
        {listing}
      </div>
    )
  }
}

export default Home;
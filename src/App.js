import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from'./components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      });
    })
  }

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  {<SearchBar searchYelp={this.searchYelp} />}
  {<BusinessList businesses={this.state.businesses} />}
</div>
    );
  }
}

export default App;


/*
const business = {
imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'Big Daddy D\'s Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
};


const businesses = [business, business, business, business, business, business];

class App extends Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, and ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  {<SearchBar searchYelp={this.searchYelp} />}
  {<BusinessList businesses={businesses} />}
</div>
    );
  }
}

export default App;
*/

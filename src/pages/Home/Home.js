import React from 'react';
import List from '../../components/List';
import './Home.css';

const Home = () => {
  return (
    <div className="container home">
      <h1 className="text-center">To-do List</h1>
      <List />
    </div>
  )
}

export default Home
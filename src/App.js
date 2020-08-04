import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Title from './components/Title';
import './App.css';
import api from './api';
import { Link } from 'react-router-dom';

class App extends Component{

  state = {
    filmes: [],
  }

    async componentDidMount(){
      const response = await api.get('https://api.themoviedb.org/3/movie/550?api_key=0030ef91e243888043f8b436ffe721fe');
      console.log(response.data);
      this.setState({filmes: response.data});
    }

    render(){

      return(
        <>
    
        <Title/>
        <Searchbar/>

        <Link to="/Busca"><h3>Clique aqui para visualizar modelos de busca</h3></Link> 
          
          
         
        </>
      );
    }
}


export default App;

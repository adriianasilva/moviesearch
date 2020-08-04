import React from 'react';
import Card from './components/Card';
import Pages from './components/Pages';
import Searchbar from './components/Searchbar';
import Title from './components/Title';
import './App.css';


function Busca() {
  return (
    <>
    Resultados de busca:
    <Title/>
    <Searchbar/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Pages/>
    </>
   
  );
}

export default Busca;

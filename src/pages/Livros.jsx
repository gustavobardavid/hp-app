import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Item from '../components/Item';
import Profile from '../components/Profile';

function Livros() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.potterdb.com/v1/books`
        );
        setBooks(response.data.data);
        setLoading(false); 
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
        <h1>Qual livro deseja conhecer hoje?</h1>
      <Item items={books} />
    </>
  );
}

export default Livros;

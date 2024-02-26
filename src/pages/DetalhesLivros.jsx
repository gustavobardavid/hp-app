import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetalhesLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await axios.get(
          `https://api.potterdb.com/v1/books/${id}`
        );
        setLivro(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do livro', error);
      }
    };

    fetchLivro();
  }, [id]);

  if (!livro) {
    return <div>Carregando detalhes do livro...</div>;
  }

  return (
    <div>
      <img src={livro.attributes.cover} alt={livro.attributes.title} />
      <h2>{livro.attributes.title}</h2>
      <p>{livro.attributes.summary}</p>
      <p>Páginas: {livro.attributes.pages}</p>
      <p>Ano de publicação: {livro.attributes.release_date}</p>
    </div>
  );
}

export default DetalhesLivro;

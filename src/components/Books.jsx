import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Books() {
    const [dados, setDados] =  useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `https://api.potterdb.com/v1/books`
            );
            setDados(response.data.data);
            console.log(response);
          } catch (error) {
            console.error('Erro ao buscar dados', error);
          }
        };
    
        fetchData();
      }, []);

      return (
        <>
          {dados.map((data) => (
            <div key={data.id}>
              <h2>{data.attributes.title}</h2>
              <img src={data.attributes.cover} alt={data.attributes.title} />
              <p>{data.attributes.summary}</p>
  
            </div>
          ))}
        </>
      )
}

export default Books
import axios from 'axios'
import { useState } from 'react'
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('Masculino');
  const [price, setPrice] = useState(1);
  const [color, setColor] = useState('Azul');
  const [size, setSize] = useState('Pequeno');

  function handleData() {
    if (!name || !genre || !price) {
      alert('Preencha os campos vazios')
      return;
    }

    axios.post('https://crudcrud.com/api/36f13f00115f4b8faf3b0191bbf1398b/products', {
      nome: name,
      genero: genre,
      preço: price,
      cor: color,
      tamanho: size
    });
  
  alert('Item cadastrado com sucesso!');
  setName('');
  setGenre('Selecione o gênero');
  setPrice(1);
  setColor('Selecione a cor')
  setSize('Selecione o tamanho');
}

return (
  <div className="App">
    <div className="Container">
      <div className="titleBox">
        <h1>Cadastre aqui seu produto</h1>
      </div>
      <form className="Container" onSubmit={handleData}>
        <label>Nome do produto</label>
        <input type="text" value={name} onChange={(e: any) => setName(e.target.value)} />
        <label>Gênero</label>
        <select id="genero" name="genero" onChange={(e: any) => setGenre(e.target.value)} >
          <option value="Masculino" >Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Unisex">Unisex</option>
        </select>
        <label>Preço</label>
        <input type="number" min="1" value={price} onChange={(e: any) => setPrice(e.target.value)} />
        <label>Cor</label>
        <select name="cores" onChange={(e: any) => setColor(e.target.value)} >
          <option value="Azul" >Azul</option>
          <option value="Verde">Verde</option>
          <option value="Amarelo">Amarelo</option>
        </select>
        <label>Tamanho</label>
        <select name="select" onChange={(e: any) => setSize(e.target.value)} >
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Grande">Grande</option>
        </select>
        <div className="titleBox">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
)
}

export default App

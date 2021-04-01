import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPessoaForm(props) {
  const [pessoa, setPessoa] = useState('');

  function handleChange(e) {
    setPessoa(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(pessoa);
    setPessoa('');
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Add novo contacto" value={pessoa} onChange={handleChange} />
  <button type="submit">Adicionar</button>
  </form>;
}

function PeopleList(props){
  const vetor = props.dados;
  const NomesLista = vetor.map((valor, index) => 
  <li key={index}>{valor}</li>
  );
  return <ul>{NomesLista}</ul>;
}

function ControladorContatos(props){
    const [contatos, setContatos] = useState(props.dados);

  function AddContato(nome){
    setContatos([...contatos, nome]);
  }

  return(
    <div>
    <AddPessoaForm handleSubmit={AddContato}/>
    <PeopleList dados={contatos}/>
    </div>
  );
}

const contatos = ["Paulo Jorge", "José Pedro", "José Salvador", "Ana Paula"];


ReactDOM.render(
  <ControladorContatos dados={contatos}/>, 
  document.getElementById('root')
);
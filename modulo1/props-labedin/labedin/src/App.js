import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno'
import { CardIdiomas } from './components/CardIdiomas/CardIdiomas';
import ImagemPerfil from './imagemPerfil.jpg'
import Seta from './seta.png'
import Violao from './violao.png'
import Email from './email.png'
import Localizacao from './localizacao.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPerfil}
          nome="André"
          descricao="Oi, eu sou o André."
        />

        <ImagemButton
          imagem={Seta}
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={Email}
          nome="Email"
          complemento="emailfalso@gmail.com"
        />

        <CardPequeno
          imagem={Localizacao}
          nome="Endereço"
          complemento="Rua Falsa Rodrigo Trigoso"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e Pessoais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem={Violao}
          nome="Violão"
          descricao="Alguns vários anos tocando violão."
        />

        <h2>Idiomas</h2>
        <CardIdiomas
          idioma1="Português"
          nivelIdioma1="Fluente ou nativo"
          idioma2="Inglês"
          nivelIdioma2="Fluente ou nativo"
        />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

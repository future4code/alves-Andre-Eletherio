import profile from './profile-pic.png';
import './App.css';
import lupa from './lupa.png'

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <header>
        <h1>Lab Tube</h1>
        <div className='pesquisa'>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
          <img src={lupa} />
        </div>
        <button>FAZER LOGIN</button>
      </header >

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Explorar</li>
            <li className="botoes-meunu-vertical">Shorts</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Biblioteca  </li>
            <li className="botoes-meunu-vertical">Histórico</li>
            <hr />
          </ul>
          <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
          <button>FAZER LOGIN</button>
          <hr />
          <h1>O MELHOR DO YOUTUBE</h1>
          <ul>
            <li className="botoes-meunu-vertical">Música</li>
            <li className="botoes-meunu-vertical">Esportes</li>
            <li className="botoes-meunu-vertical">Jogos</li>
            <li className="botoes-meunu-vertical">Filmes</li>
            <li className="botoes-meunu-vertical">Notícias</li>
            <li className="botoes-meunu-vertical">Ao vivo</li>
            <li className="botoes-meunu-vertical">Aprender</li>
            <li className="botoes-meunu-vertical">Vídeos do momento</li>
            <li className="botoes-meunu-vertical">Vídeo em 360</li>
            <li className="botoes-meunu-vertical">Início</li>
          </ul>
          <hr />
          <ul>
            <li className="botoes-meunu-vertical">Procurar canais</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media4" onClick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media5" onClick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media6" onClick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media7" onClick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media8" onClick="reproduzVideo()">
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{titulo}</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div >
  );
}

export default App;

import Game from'./Componentes/Game';
import Intro from './Componentes/Intro';
import './Componentes/CSS/App.css'
function App() {
  return (
   <div className='body_app'>
    <header className='header_app'>
      <h1 className='h1_app'>THE GAME</h1>
      <Intro></Intro>
    </header>
    <main>
      <Game></Game>
    </main>
   </div>
  )
}

export default App;

import Header from './Components/Header/Header'
import Hero from './Components/Luis/Luis'
import Nav from './Components/Nav/Nav'
import Listas from './Components/Lists/Lists'
import './App.css'
import DataServices from './Services/services'

function App() {
  return (
    <div className='app-root'>
      <Header />
      <Hero />
      <Nav />

      <section id='educacion'>
        <Listas titulo='Educacion' items={DataServices.estudios.map(s => s.Titulo)}/>
      </section>

      <section id='experiencia'>
        <Listas titulo='Experiencia' items={DataServices.experiencia}/>
      </section>

      <section id='skills'>
        <Listas titulo='Skills' items={DataServices.skills}/>
      </section>
    </div>
  )
}

export default App
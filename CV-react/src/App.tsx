import Header from './Components/Header/Header'
import Hero from './Components/Luis/Luis'
import Nav from './Components/Nav/Nav'
import Listas from './Components/Lists/Lists'
import './App.css'

function App() {
  return (
    <div className='app-root'>
      <Header />
      <Hero />
      <Nav />

      <section id='educacion'>
        <Listas titulo='Educacion' uno='Colegio Elim---Bachillerato en computación---2023-2024'
        dos='UFM---Licenciatura en ingeniería en computer science---2025-actualidad'/>
      </section>

      <section id='experiencia'>
        <Listas titulo='Experiencia' uno='Desarrollo web' dos='Github intermedio' tres='Python intermedio' cuatro='APIS'/>
      </section>

      <section id='skills'>
        <Listas titulo='Skills' uno='buen comunicador' dos='ordenado' tres='trabajo efectivo'/>
      </section>
    </div>
  )
}

export default App
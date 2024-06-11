
import './App.css'
import { Card } from './components/Card'
import cards from './utils/data/cards'

function App() {

  return (
    <main className="container">
      <h1>TechForge</h1>
      <h3>Navegue pela variedade de opcões e encontre as ferramentas ideias para impulsionar seu projeto</h3>
      <section className='navigation'>
        <div className="options">
          <select name="" id="">
            <option value="Opção 1">Opção 1</option>
            <option value="Opcão 2">Opção 2</option>
            <option value="Opcão 3">Opção 3</option>
          </select>
        </div>
        <div className="searchbar">
          <input type="search" name="" id="" />
          <span><img src="TechForgeSite\public\searchh.svg" alt="" /></span>
        </div>
      </section>
      <section className="sectionCard">
        {
          cards.map((filter, index) => {
            return (
              <Card
                key={index}
                name={filter.title}
                image={filter.image}
                link={filter.link}
                category={filter.category}
              />
            )
          })
        }

      </section>
    </main>

  )
}

export default App

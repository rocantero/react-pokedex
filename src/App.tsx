import "./App.css"
import { CombatReady } from './features/combatReady/CombatReady';
import { PokemonList } from "./features/list/PokemonList";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>PokéDex</h2>
      </header>
      <section className="main">

            <PokemonList />
            <CombatReady />
      </section>
    </div>
  )
}

export default App

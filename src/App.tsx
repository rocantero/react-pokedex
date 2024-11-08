import "./App.css"
import { useAppSelector } from "./app/hooks";
import { CombatReady } from './features/combatReady/CombatReady';
import { PokemonDetail } from "./features/detail/PokemonDetail";
import { PokemonList } from "./features/list/PokemonList";


const App = () => {
  const isSelected = useAppSelector((state) => state.pokemon.isSelected)

  return (
    
    <div className="App">
      <header className="App-header">
        <h2>PokéDex</h2>
      </header>
      <section className="main">

        {
        isSelected ? <PokemonDetail /> : <PokemonList />
        }
        <CombatReady />
      </section>
    </div>
  )
}

export default App

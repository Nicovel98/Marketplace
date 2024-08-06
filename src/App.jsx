import './css/App.css'
import { Context } from './context/Context'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <Context.Provider value={{}}>
      <div>
        <AppRouter />
      </div>
    </Context.Provider>
  )
}

export default App

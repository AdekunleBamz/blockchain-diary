import './App.css'
import { WalletConnection } from './components/WalletConnection'

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Blockchain Diary</h1>
        <WalletConnection />
      </header>
    </div>
  )
}

export default App

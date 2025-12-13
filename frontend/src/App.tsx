import './App.css';
import { WalletConnection } from './components/WalletConnection';
import { AddWord } from './components/AddWord';
import { FullStory } from './components/FullStory';
import { Contributors } from './components/Contributors';
import { useStory } from './hooks/useStory';

function App() {
  const { story, isLoading, error, refetch } = useStory();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Blockchain Diary</h1>
        <WalletConnection />
      </header>

      {error && (
        <div style={{ padding: '1rem', backgroundColor: '#fee', color: '#c33', borderRadius: '4px', marginBottom: '1rem' }}>
          Error: {error}
        </div>
      )}

      <main>
        <AddWord onWordAdded={refetch} />
        <FullStory story={story} isLoading={isLoading} />
        <Contributors story={story} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;

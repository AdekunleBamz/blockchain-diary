import { useWallet } from '../contexts/WalletContext';

export function WalletConnection() {
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet();

  if (isConnected && address) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  return (
    <button onClick={connectWallet}>Connect Wallet</button>
  );
}


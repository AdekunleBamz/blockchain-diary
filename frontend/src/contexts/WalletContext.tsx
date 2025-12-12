import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

const NETWORK = 'testnet';
const network = NETWORK === 'testnet' ? new StacksTestnet() : new StacksMainnet();

const appConfig = new AppConfig(['store_write', 'publish_data'], undefined, undefined, undefined, undefined, network);
const userSession = new UserSession({ appConfig });

interface WalletContextType {
  userSession: UserSession;
  isConnected: boolean;
  address: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      setIsConnected(true);
      setAddress(userSession.loadUserData().profile.stxAddress.testnet);
    }
  }, []);

  const connectWallet = async () => {
    showConnect({
      appDetails: {
        name: 'Blockchain Diary',
        icon: window.location.origin + '/vite.svg',
      },
      onFinish: () => {
        const userData = userSession.loadUserData();
        setIsConnected(true);
        setAddress(userData.profile.stxAddress.testnet);
      },
      userSession,
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut();
    setIsConnected(false);
    setAddress(null);
  };

  return (
    <WalletContext.Provider
      value={{
        userSession,
        isConnected,
        address,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}


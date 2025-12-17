# Blockchain Diary

A collaborative storytelling dApp built on the Stacks blockchain where users contribute one word at a time to create a shared story. Built with Clarity 4 smart contracts and a modern React frontend.

![Blockchain Diary](frontend/public/img.png)

## Features

- **One Word at a Time**: Users can add a single word (max 32 characters) to the collaborative story
- **Unlimited Story Length**: No word limit - stories can grow indefinitely (v2 contract)
- **Categories**: Organize words by category (general, tech, fun, poetry, or custom)
- **Daily Streak Tracking**: Track consecutive days of contributions with automatic streak calculation
- **Real-time Updates**: Story automatically refreshes every 10 seconds to show new contributions
- **Contributor Tracking**: See all contributors and their word counts
- **Wallet Integration**: Connect any SIP-030 compatible wallet (Hiro, Xverse, etc.)
- **Modern UI**: Clean, minimal white and blue design

## Tech Stack

### Smart Contract
- **Clarity 4**: Latest version of the Clarity language
- **Clarinet**: Development and testing framework
- **Deployed on Stacks Mainnet**

### Frontend
- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **@stacks/connect**: SIP-030 wallet integration
- **@stacks/transactions**: Contract interaction utilities

## Clarity 4 Features

This contract leverages several Clarity 4 features:

1. **Unlimited Storage**: The story-v2 contract uses a map-based storage system, allowing unlimited words (no fixed cap)
2. **Auto-incrementing IDs**: Each word gets a unique ID that increments automatically
3. **Category Support**: Words can be tagged with categories for better organization
4. **Clarity 4 Epoch**: Contract is configured for the latest Clarity 4 epoch
5. **Enhanced Type System**: Improved type checking and safety features in Clarity 4


### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blockchain-diary
```

2. Install contract dependencies:
```bash
# Install Clarinet (if not already installed)
# See: https://docs.hiro.so/clarinet/installing-clarinet
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

### Development

#### Contract Development

Check the contract:
```bash
clarinet check
```

Run tests:
```bash
npm run test
```

#### Frontend Development

Start the development server:
```bash
cd frontend
npm run dev
```

The app will be available at `http://localhost:5173`


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Resources

- [Stacks Documentation](https://docs.stacks.co/)
- [Clarity Language Reference](https://docs.stacks.co/docs/clarity)
- [Clarity 4 Features](https://docs.stacks.co/docs/clarity/clarity-4)
- [Clarinet Documentation](https://docs.hiro.so/clarinet)
- [@stacks/connect Documentation](https://github.com/stacks-network/connect)

## Acknowledgments

Built with the Stacks blockchain and Clarity 4 smart contract language.


type TokenT = {
  address?: string
  name: string
  website: string
  description: string
  explorer: string
  type: string
  symbol: string
  decimals: number
  status: string
  tags?: string[]
  id: string
  research?: string
  data_source?: string
  links?: { name: string; url: string }[]
}

export const arbitrumTokensFullList: TokenT[] = [
  {
    address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
    name: 'USDA',
    website: 'https://www.angle.money/',
    description:
      'USDA is an over-collateralized and decentralized USD stablecoin by the Angle Protocol.',
    explorer:
      'https://arbiscan.io/token/0x0000206329b97DB379d5E1Bf586BbDB969C63274',
    type: 'ARBITRUM',
    symbol: 'USDA',
    decimals: 18,
    status: 'active',
    tags: ['defi', 'stablecoin'],
    id: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
    links: [
      {
        name: 'github',
        url: 'https://github.com/AngleProtocol',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/AngleProtocol',
      },
      {
        name: 'docs',
        url: 'https://docs.angle.money',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/angle-usd',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/ZheVAnFt6h',
      },
    ],
  },
  {
    address: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
    name: 'Staked USDA',
    website: 'https://www.angle.money/',
    description:
      'stUSD is a USD savings solution built on top of USDA by the Angle Protocol',
    explorer:
      'https://arbiscan.io/token/0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
    type: 'ARBITRUM',
    symbol: 'stUSD',
    decimals: 18,
    status: 'active',
    tags: ['defi', 'stablecoin'],
    id: '0x0022228a2cc5E7eF0274A7Baa600d44da5aB5776',
    links: [
      {
        name: 'github',
        url: 'https://github.com/AngleProtocol',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/AngleProtocol',
      },
      {
        name: 'docs',
        url: 'https://docs.angle.money',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/angle-staked-agusd',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/ZheVAnFt6h',
      },
    ],
  },
  {
    address: '0x004626A008B1aCdC4c74ab51644093b155e59A23',
    name: 'Staked EURA',
    website: 'https://www.angle.money/',
    description:
      'stEUR is a Euro savings solution built on top of EURA by the Angle Protocol.',
    explorer:
      'https://arbiscan.io/token/0x004626A008B1aCdC4c74ab51644093b155e59A23',
    type: 'ARBITRUM',
    symbol: 'stEUR',
    decimals: 18,
    status: 'active',
    tags: ['defi', 'stablecoin'],
    id: '0x004626A008B1aCdC4c74ab51644093b155e59A23',
    links: [
      {
        name: 'github',
        url: 'https://github.com/AngleProtocol',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/AngleProtocol',
      },
      {
        name: 'docs',
        url: 'https://docs.angle.money',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/staked-ageur',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/ZheVAnFt6h',
      },
    ],
  },
  {
    address: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
    name: 'Balancer',
    website: 'https://balancer.finance/',
    description:
      'Balancer is an automated portfolio manager and trading platform.',
    explorer:
      'https://arbiscan.io/token/0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
    type: 'ARBITRUM',
    symbol: 'BAL',
    decimals: 18,
    status: 'active',
    id: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/balancer-labs',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/BalancerLabs',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/balancer/',
      },
    ],
  },
  {
    address: '0x080F6AEd32Fc474DD5717105Dba5ea57268F46eb',
    name: 'Synapse',
    website: 'https://synapseprotocol.com/',
    description:
      'Synapse is a cross-chain layer ∞ protocol powering interoperability between blockchains.',
    explorer:
      'https://arbiscan.io/token/0x080f6aed32fc474dd5717105dba5ea57268f46eb',
    type: 'ARBITRUM',
    symbol: 'SYN',
    decimals: 18,
    status: 'active',
    id: '0x080F6AEd32Fc474DD5717105Dba5ea57268F46eb',
    tags: ['nft'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/synapseprotocol',
      },
      {
        name: 'telegram',
        url: 'https://t.me/synapseprotocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/synapse-2/',
      },
    ],
  },
  {
    address: '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704',
    name: 'VelaToken',
    type: 'ARBITRUM',
    symbol: 'VELA',
    decimals: 18,
    website: 'https://vela.exchange/',
    description:
      'Trade crypto and forex assets with up to 100x leverage on the world’s most advanced decentralized trading platform.',
    explorer:
      'https://arbiscan.io/token/0x088cd8f5ef3652623c22d48b1605dcfe860cd704',
    status: 'active',
    id: '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/vela_exchange',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/vela-token/',
      },
    ],
  },
  {
    address: '0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b',
    name: 'AIDOGE',
    website: 'https://arbdoge.ai/',
    description:
      'ArbDogeAI is created by AI. 100% of the tokens belong to the community. Never consider AIDOGE as a MEME.',
    explorer:
      'https://arbiscan.io/token/0x09e18590e8f76b6cf471b3cd75fe1a1a9d2b2c2b',
    type: 'ARBITRUM',
    symbol: 'AIDOGE',
    decimals: 6,
    status: 'active',
    id: '0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b',
    tags: ['memes'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/arbdogeai',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@ArbDogeAI',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/arbdoge-ai/',
      },
      {
        name: 'whitepaper',
        url: 'https://docs.arbdoge.ai/',
      },
    ],
  },
  {
    address: '0x0c5fa0E07949F941A6c2C29a008252db1527d6EE',
    name: 'Opulous',
    type: 'ARBITRUM',
    symbol: 'OPUL',
    website: 'https://opulous.org/',
    decimals: 18,
    description:
      'Opulous Token believe in a future where musicians keep control of the music they create and forge even deeper connections with their fans.',
    explorer:
      'https://arbiscan.io/token/0x0c5fa0E07949F941A6c2C29a008252db1527d6EE',
    status: 'active',
    id: '0x0c5fa0E07949F941A6c2C29a008252db1527d6EE',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/opulousapp',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/opulousapp',
      },
    ],
  },
  {
    address: '0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8',
    name: 'Pendle',
    website: 'https://www.pendle.finance/',
    description:
      "Pendle is a protocol for people to trade and hedge yield. Users can tokenize yield and trade them on Pendle's AMM",
    explorer:
      'https://arbiscan.io/token/0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8',
    type: 'ARBITRUM',
    symbol: 'PENDLE',
    decimals: 18,
    status: 'active',
    id: '0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8',
    links: [
      {
        name: 'github',
        url: 'https://github.com/pendle-finance',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/pendle_fi',
      },
      {
        name: 'docs',
        url: 'https://docs.pendle.finance/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/pendle',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/9x9VUngNZD',
      },
    ],
  },
  {
    address: '0x10393c20975cF177a3513071bC110f7962CD67da',
    name: 'Jones DAO',
    website: 'https://jonesdao.io/',
    description:
      'Jones DAO is a yield generation, asset management, and options liquidity protocol, with vaults that enable 1-click access to institutional-grade options strategies while unlocking liquidity and capital efficiency for DeFi options.',
    explorer:
      'https://arbiscan.io/token/0x10393c20975cf177a3513071bc110f7962cd67da',
    type: 'ARBITRUM',
    symbol: 'JONES',
    decimals: 18,
    status: 'active',
    id: '0x10393c20975cF177a3513071bC110f7962CD67da',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Jones-DAO',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/DAOJonesOptions',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/jones-dao/',
      },
    ],
  },
  {
    address: '0x13A7DeDb7169a17bE92B0E3C7C2315B46f4772B3',
    name: 'Boop',
    type: 'ARBITRUM',
    symbol: 'Boop',
    decimals: 18,
    website: 'https://boopthecoin.com/',
    description:
      '$BOOP is a coin for the people, forever. Fueled by pure dog joy, let the power of $BOOP show you the way.',
    explorer:
      'https://arbiscan.io/token/0x13A7DeDb7169a17bE92B0E3C7C2315B46f4772B3',
    status: 'active',
    id: '0x13A7DeDb7169a17bE92B0E3C7C2315B46f4772B3',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/boopthecoin',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/boop-the-coin/',
      },
    ],
  },
  {
    address: '0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60',
    name: 'Lido DAO',
    type: 'ARBITRUM',
    symbol: 'LDO',
    decimals: 18,
    website: 'https://stake.lido.fi/',
    description:
      'Lido is a liquid staking solution for Ethereum. Lido lets users stake their ETH - with no minimum deposits or maintaining of infrastructure - whilst participating in on-chain activities, e.g. lending, to compound returns. LDO is an ERC20 token granting governance rights in the Lido DAO.',
    explorer:
      'https://arbiscan.io/token/0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60',
    status: 'active',
    id: '0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/lidofinance',
      },
      {
        name: 'telegram',
        url: 'https://t.me/lidofinance',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/lido-dao/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/lido-dao/',
      },
    ],
  },
  {
    address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    name: 'Frax',
    website: 'https://frax.finance/',
    description:
      'Frax is a new paradigm in stablecoin design, bringing together a two-token seigniorage share system, swap-based monetary policy, fully on-chain oracles, and decentralized governance alongside its fractional-algorithmic stablecoin design.',
    explorer:
      'https://arbiscan.io/token/0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    type: 'ARBITRUM',
    symbol: 'FRAX',
    decimals: 18,
    status: 'active',
    id: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    tags: ['defi', 'stablecoin'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/FraxFinance',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/Frax Finance',
      },
      {
        name: 'telegram',
        url: 'https://t.me/fraxfinance',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/Xwe8kAwZ4a',
      },
    ],
  },
  {
    address: '0x18c11FD286C5EC11c3b683Caa813B77f5163A122',
    name: 'Gains Network',
    type: 'ARBITRUM',
    symbol: 'GNS',
    decimals: 18,
    website: 'https://gains.trade/',
    description:
      'Gains Network is developing the next-gen decentralized leveraged trading platform - gTrade.',
    explorer:
      'https://arbiscan.io/token/0x18c11FD286C5EC11c3b683Caa813B77f5163A122',
    status: 'active',
    id: '0x18c11FD286C5EC11c3b683Caa813B77f5163A122',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/GainsNetwork',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/gains-network/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/gains-network/',
      },
      {
        name: 'whitepaper',
        url: 'https://gains-network.gitbook.io/docs-home/',
      },
      {
        name: 'docs',
        url: 'https://gains-network.gitbook.io/docs-home/',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/gains-network',
      },
      {
        name: 'github',
        url: 'https://github.com/GainsNetwork/',
      },
      {
        name: 'blog',
        url: 'https://medium.com/gains-network',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/GainsNetwork_io',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0x1C43D05be7E5b54D506e3DdB6f0305e8A66CD04e',
    name: 'ZTX',
    website: 'https://ztx.io/',
    description: 'ZTX is a virtual world empowering creators and communities.',
    explorer:
      'https://arbiscan.io/token/0x1C43D05be7E5b54D506e3DdB6f0305e8A66CD04e',
    type: 'ARBITRUM',
    symbol: 'ZTX',
    decimals: 18,
    status: 'active',
    id: '0x1C43D05be7E5b54D506e3DdB6f0305e8A66CD04e',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/ZTXofficial',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/ztx/',
      },
    ],
  },
  {
    address: '0x1F2b426417663Ac76eB92149a037753a45969F31',
    name: 'Real World Assetss',
    type: 'ARBITRUM',
    symbol: 'RWAS',
    decimals: 18,
    website: 'https://www.rwa-finance.com/#/',
    description:
      'RWA Finance is an extraordinary platform that is changing the field of issuing and trading Real World Assets (RWA).',
    explorer:
      'https://arbiscan.io/token/0x1F2b426417663Ac76eB92149a037753a45969F31',
    status: 'active',
    id: '0x1F2b426417663Ac76eB92149a037753a45969F31',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/RWA_Finance_',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/rwa-finance/',
      },
    ],
  },
  {
    address: '0x20547341E58fB558637FA15379C92e11F7b7F710',
    name: 'Mozaic',
    symbol: 'MOZ',
    type: 'ARBITRUM',
    decimals: 18,
    description:
      'Automatic, omnichain yield farming. Mozaic provides AI-optimized yield and liquidity strategies, powered by LayerZero. Farm automatically on every blockchain: Deposit and withdraw on any chain, in any coin or LP token',
    website: 'https://mozaic.finance/',
    explorer:
      'https://arbiscan.io/token/0x20547341e58fb558637fa15379c92e11f7b7f710',
    status: 'active',
    id: '0x20547341E58fB558637FA15379C92e11F7b7F710',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/Mozaic_Fi',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/mozaic/',
      },
    ],
  },
  {
    address: '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614',
    name: 'The Graph',
    website: 'https://thegraph.com',
    description:
      'The Graph is an indexing protocol and global API for organizing blockchain data and making it easily accessible with GraphQL. Developers can use Graph Explorer to search, find, and publish all the public data they need to build decentralized applications. The Graph Network makes it possible to build serverless dApps that run entirely on public infrastructure.',
    explorer:
      'https://arbiscan.io/token/0x23a941036ae778ac51ab04cea08ed6e2fe103614',
    research: 'https://github.com/graphprotocol/research',
    type: 'ARBITRUM',
    symbol: 'GRT',
    decimals: 18,
    status: 'abandoned',
    id: '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/graphprotocol/graph-node',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/graphprotocol',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/thegraph',
      },
      {
        name: 'telegram',
        url: 'https://t.me/graphprotocol',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/the-graph/',
      },
    ],
  },
  {
    address: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    name: 'Axelar',
    type: 'ARBITRUM',
    symbol: 'AXL',
    decimals: 6,
    website: 'https://axelar.network/',
    description:
      'Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.',
    explorer:
      'https://arbiscan.io/token/0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    status: 'active',
    id: '0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/axelarcore',
      },
      {
        name: 'github',
        url: 'https://github.com/axelarnetwork',
      },
      {
        name: 'telegram',
        url: 'https://t.me/axelarcommunity',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/axelar',
      },
      {
        name: 'docs',
        url: 'https://docs.axelar.dev/',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/aRZ3Ra6f7D',
      },
      {
        name: 'forum',
        url: 'https://community.axelar.network/',
      },
      {
        name: 'whitepaper',
        url: 'https://axelar.network/axelar_whitepaper.pdf',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/axelar',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@axelar-foundation',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/axelar/',
      },
      {
        name: 'blog',
        url: 'https://axelar.network/blog',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@Axelarcore',
      },
    ],
    tags: ['wrapped'],
  },
  {
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    name: 'Wrapped BTC',
    type: 'ARBITRUM',
    symbol: 'WBTC',
    decimals: 8,
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin.',
    explorer:
      'https://arbiscan.io/token/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
    status: 'active',
    id: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    links: [
      {
        name: 'whitepaper',
        url: 'https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/wrapped-bitcoin/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/wrapped-bitcoin/',
      },
    ],
    tags: ['wrapped'],
  },
  {
    address: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    name: 'Radiant',
    type: 'ARBITRUM',
    symbol: 'RDNT',
    decimals: 18,
    website: 'https://app.radiant.capital/',
    description:
      "$RDNT, an OFT-20, is Radiant's native utility token. Radiant Capital is an omnichain money market built atop Layer Zero. Deposit and borrow assets cross-chain, seamlessly. Through decentralized discussions, voting, and governance, the Radiant DAO determines the decisions, and, ultimately, the vision of the Radiant ecosystem.",
    explorer:
      'https://arbiscan.io/token/0x3082CC23568eA640225c2467653dB90e9250AaA0',
    status: 'active',
    id: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    links: [
      {
        name: 'github',
        url: 'https://github.com/radiant-capital',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/RDNTCapital',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/radiantcapital',
      },
      {
        name: 'telegram',
        url: 'https://t.me/radiantcapitalofficial',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0x319f865b287fCC10b30d8cE6144e8b6D1b476999',
    name: 'Cartesi',
    type: 'ARBITRUM',
    symbol: 'CTSI',
    decimals: 18,
    website: 'https://cartesi.io/',
    description:
      'Cartesi, The Blockchain OS, is a layer-2 platform for the development and deployment of scalable decentralized applications. The Blockchain OS offers a Linux operating system coupled with a blockchain infrastructure.',
    explorer:
      'https://arbiscan.io/token/0x319f865b287fCC10b30d8cE6144e8b6D1b476999',
    status: 'active',
    id: '0x319f865b287fCC10b30d8cE6144e8b6D1b476999',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/cartesiproject',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/cartesiproject',
      },
    ],
  },
  {
    address: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
    name: 'JOE',
    symbol: 'JOE',
    type: 'ARBITRUM',
    decimals: 18,
    description: 'One-stop Decentralized Trading on Avalanche.',
    website: 'https://traderjoexyz.com/',
    explorer:
      'https://arbiscan.io/token/0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
    status: 'active',
    id: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/traderjoe_xyz',
      },
      {
        name: 'telegram',
        url: 'https://t.me/traderjoe_xyz',
      },
      {
        name: 'github',
        url: 'https://github.com/traderjoe-xyz/',
      },
    ],
  },
  {
    address: '0x38F9bf9dCe51833Ec7f03C9dC218197999999999',
    name: 'Nya',
    type: 'ARBITRUM',
    symbol: 'NYA',
    decimals: 18,
    website: 'https://www.nya.vip',
    description:
      "Explore the cultural phenomenon of Nya - the playful cat sound that's become a symbol of joy and connection. Discover how this simple word unites fans worldwide.",
    explorer:
      'https://arbiscan.io/token/0x38F9bf9dCe51833Ec7f03C9dC218197999999999',
    status: 'active',
    id: '0x38F9bf9dCe51833Ec7f03C9dC218197999999999',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/NyaOnEarth',
      },
      {
        name: 'telegram',
        url: 'https://t.me/NyaOnEarth',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/3V8gZFP5kb',
      },
      {
        name: 'docs',
        url: 'https://wiki.nya.vip',
      },
    ],
    tags: ['memes', 'nft'],
  },
  {
    address: '0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c',
    name: 'Zyber',
    type: 'ARBITRUM',
    symbol: 'ZYB',
    decimals: 18,
    website: 'https://zyberswap.io/',
    description:
      'Community-driven and governed DEX on Arbitrum with lots of utility on its native token ZYBER.',
    explorer:
      'https://arbiscan.io/token/0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c',
    status: 'active',
    id: '0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/zyberswap',
      },
      {
        name: 'telegram',
        url: 'https://t.me/zyberswapofficial',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/zyberswap/',
      },
    ],
  },
  {
    address: '0x3BD2dFd03BC7c3011ed7fb8c4d0949B382726cee',
    name: 'ROOBEE',
    website: 'https://roobee.io/',
    description:
      'Roobee is a blockchain-based investment platform for non-professional and private investors. Roobee allows you to build an investment portfolio consisting of various assets, from cryptocurrencies to stocks and ETFs. The payment can be made in any convenient way, without limitations, and without high entry thresholds.',
    explorer:
      'https://arbiscan.io/token/0x3BD2dFd03BC7c3011ed7fb8c4d0949B382726cee',
    type: 'ARBITRUM',
    symbol: 'ROOBEE',
    decimals: 18,
    status: 'active',
    id: '0x3BD2dFd03BC7c3011ed7fb8c4d0949B382726cee',
  },
  {
    address: '0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF',
    name: 'Spell Token',
    website: 'https://abracadabra.money/',
    description:
      'Abracadabra.money is a lending platform that allows users to borrow funds using Interest Bearing Tokens as collateral.',
    explorer:
      'https://arbiscan.io/token/0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af',
    type: 'ARBITRUM',
    symbol: 'SPELL',
    decimals: 18,
    status: 'active',
    id: '0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF',
    tags: ['defi'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/MIM_Spell',
      },
      {
        name: 'medium',
        url: 'https://abracadabramoney.medium.com/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/spell-token/',
      },
    ],
  },
  {
    address: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    name: 'Mai Stablecoin',
    website: 'https://www.mai.finance/',
    description:
      'miMatic is an algorithmic stablecoin that is collateralized with Matic tokens',
    explorer:
      'https://arbiscan.io/token/0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    type: 'ARBITRUM',
    symbol: 'MAI',
    decimals: 18,
    status: 'active',
    id: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/0xLaoZi',
      },
      {
        name: 'telegram',
        url: 'https://t.me/QiDaoProtocol',
      },
    ],
  },
  {
    address: '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8',
    name: 'Camelot',
    type: 'ARBITRUM',
    symbol: 'GRAIL',
    decimals: 18,
    website: 'https://camelot.exchange/',
    description:
      'Camelot is an ecosystem-focused and community-driven DEX built on Arbitrum.',
    explorer:
      'https://arbiscan.io/token/0x3d9907f9a368ad0a51be60f7da3b97cf940982d8',
    status: 'active',
    id: '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/camelotdex',
      },
      {
        name: 'telegram',
        url: 'https://t.me/camelotdex',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/camelot-token/',
      },
    ],
  },
  {
    address: '0x4186BFC76E2E237523CBC30FD220FE055156b41F',
    name: 'KelpDao Restaked ETH',
    website: 'https://kelpdao.xyz/restake/',
    description:
      'rsETH is a Liquid Restaked Token (LRT) issued by Kelp DAO designed to offer liquidity to illiquid assets deposited into restaking platforms, such as EigenLayer. It aims to address the risks and challenges posed by the current offering of restaking',
    explorer:
      'https://arbiscan.io/token/0x4186bfc76e2e237523cbc30fd220fe055156b41f',
    type: 'ARBITRUM',
    symbol: 'rsETH',
    decimals: 18,
    status: 'active',
    id: '0x4186BFC76E2E237523CBC30FD220FE055156b41F',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/KelpDAO',
      },
    ],
  },
  {
    address: '0x431402e8b9dE9aa016C743880e04E517074D8cEC',
    name: 'Hegic',
    website: 'https://hegic.co/',
    description:
      'Hegic is an on-chain, non-custodial peer-to-pool options trading protocol built on Ethereum. Currently Hegic supports options trading in for Bitcoin (wBTC) and Ether (ETH).',
    explorer:
      'https://arbiscan.io/token/0x431402e8b9dE9aa016C743880e04E517074D8cEC',
    type: 'ARBITRUM',
    symbol: 'HEGIC',
    decimals: 18,
    status: 'active',
    id: '0x431402e8b9dE9aa016C743880e04E517074D8cEC',
    links: [
      {
        name: 'github',
        url: 'https://github.com/hegic',
      },
    ],
  },
  {
    address: '0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A',
    name: 'The Doge NFT',
    type: 'ARBITRUM',
    symbol: 'DOG',
    decimals: 18,
    website: 'https://doge.pleasr.org/',
    description:
      'The most iconic meme in internet history, the original Doge, fractionalized and available for anyone to own. Fractionalizing this NFT means that now anyone can own a piece of one of the most recognized and loved images of our generation.',
    explorer:
      'https://arbiscan.io/token/0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A',
    status: 'active',
    id: '0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/ownthedoge',
      },
      {
        name: 'telegram',
        url: 'https://t.me/ownthedoge',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/the-doge-nft/',
      },
    ],
  },
  {
    address: '0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66',
    name: 'Xai',
    type: 'ARBITRUM',
    symbol: 'XAI',
    decimals: 18,
    website: 'https://xai.games/',
    description:
      'The Xai token has a dual role on the Xai blockchain. It serves as the gas token for transactions and rewards validator nodes. Moreover, it is the main currency in the gaming ecosystem, accepted for game purchases and in-game items.',
    explorer:
      'https://arbiscan.io/token/0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66',
    status: 'active',
    id: '0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/xai-games/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/xai_games',
      },
    ],
  },
  {
    address: '0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42',
    name: 'MUX Protocol',
    website: 'https://mux.network',
    description:
      'MUX Protocol is the first decentralized perpetual aggregator; it offers deep aggregated liquidity, optimized trading cost, up to 100x leverage, diverse market options and unique aggregator features like smart position routing, aggregated position, leverage boosting and liquidation price optimization.',
    explorer:
      'https://arbiscan.io/token/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42',
    type: 'ARBITRUM',
    symbol: 'MCB',
    decimals: 18,
    status: 'active',
    id: '0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/muxprotocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/mcdex/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/mux-protocol/',
      },
    ],
  },
  {
    address: '0x50E401255275dc405A99d3281f396cCa681eEa9d',
    name: 'Kortana',
    type: 'ARBITRUM',
    symbol: 'KORA',
    decimals: 18,
    website: 'https://kortanalegacy.com/',
    description:
      'Kortana Legacy is a 3rd-person shooter game that allows players to earn financial rewards through betting. With fast-paced action and competitive gameplay, players can stake their cryptocurrency to win big while battling it out in immersive, high-stakes battles.',
    explorer:
      'https://arbiscan.io/token/0x50e401255275dc405a99d3281f396cca681eea9d',
    status: 'active',
    id: '0x50E401255275dc405A99d3281f396cCa681eEa9d',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/KortanaLegacy',
      },
      {
        name: 'telegram',
        url: 'https://t.me/KortanaLegacyOFFICIAL',
      },
      {
        name: 'whitepaper',
        url: 'https://kortanalegacy.com/wp-content/uploads/2023/05/KORTANA-LEGACY-WHITEPAPER-1.pdf',
      },
    ],
    tags: ['gamefi'],
  },
  {
    address: '0x51C601dC278EB2CFea8e52c4caA35B3d6a9A2c26',
    name: 'Chainge',
    website: 'https://chainge.finance/',
    description:
      'Chainge Finance is a next generation DeFi app that stands as the most liquid web3 trading venue on the market.',
    explorer:
      'https://arbiscan.io/token/0x51C601dC278EB2CFea8e52c4caA35B3d6a9A2c26',
    type: 'ARBITRUM',
    symbol: 'XCHNG',
    decimals: 18,
    status: 'active',
    id: '0x51C601dC278EB2CFea8e52c4caA35B3d6a9A2c26',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/FinanceChainge',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/chainge/',
      },
    ],
  },
  {
    address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    name: 'MAGIC',
    symbol: 'MAGIC',
    type: 'ARBITRUM',
    decimals: 18,
    description:
      'MAGIC is the utility token that connects gaming communities in the Treasure Metaverse: a decentralized NFT ecosystem which sits on Arbitrum, one of Ethereum’s Layer 2 scaling solutions.',
    website: 'https://treasure.lol/',
    explorer:
      'https://arbiscan.io/token/0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    status: 'active',
    id: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/Treasure_NFT',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@TreasureNFT',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/ru/currencies/magic-token/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/magic/',
      },
    ],
  },
  {
    address: '0x5575552988A3A80504bBaeB1311674fCFd40aD4B',
    name: 'Sperax',
    symbol: 'SPA',
    type: 'ARBITRUM',
    decimals: 18,
    description:
      'A project that aims to provide decentralized financial services for all with its original BDLS consensus protocol and a dual stablecoin system.',
    website: 'https://sperax.io/',
    explorer:
      'https://arbiscan.io/token/0x5575552988A3A80504bBaeB1311674fCFd40aD4B',
    status: 'active',
    id: '0x5575552988A3A80504bBaeB1311674fCFd40aD4B',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/SperaxUSD',
      },
      {
        name: 'telegram',
        url: 'https://t.me/SperaxUSD',
      },
    ],
  },
  {
    address: '0x560363BdA52BC6A44CA6C8c9B4a5FadbDa32fa60',
    name: 'SeedifyFund',
    type: 'ARBITRUM',
    symbol: 'SFUND',
    decimals: 18,
    website: 'https://seedify.fund',
    description:
      'A Blockchain Innovation Ecosystem, with a Seed Stage Fund, Decentralized Incubator, and Launchpad',
    explorer:
      'https://arbiscan.io/token/0x560363BdA52BC6A44CA6C8c9B4a5FadbDa32fa60',
    status: 'active',
    id: '0x560363BdA52BC6A44CA6C8c9B4a5FadbDa32fa60',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/seedifyfund',
      },
      {
        name: 'telegram',
        url: 'https://t.me/seedifyfundofficial',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/seedify-fund/',
      },
    ],
  },
  {
    address: '0x580E933D90091b9cE380740E3a4A39c67eB85B4c',
    name: 'GameSwift',
    type: 'ARBITRUM',
    symbol: 'GSWIFT',
    decimals: 18,
    website: 'https://gswift.community/',
    description:
      'GSWIFT is an omnitoken that can seamlessly be transferred between blockchains. Experience the true power of move $GSWIFT across multiple blockchains. With its game-changing range of utilities, $GSWIFT is setting new standards for Web3 gaming tokens.',
    explorer:
      'https://arbiscan.io/token/0x580e933d90091b9ce380740e3a4a39c67eb85b4c',
    status: 'active',
    id: '0x580E933D90091b9cE380740E3a4A39c67eB85B4c',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/GameSwift_io',
      },
      {
        name: 'github',
        url: 'https://github.com/gswiftcommunity',
      },
      {
        name: 'telegram',
        url: 'https://t.me/gameswift_io',
      },
    ],
  },
  {
    address: '0x589d35656641d6aB57A545F08cf473eCD9B6D5F7',
    name: 'GYEN',
    website: 'https://stablecoin.z.com/gyen/',
    description:
      'GYEN anchors its value to the price of the Japanese Yen. Redeemable and pegged 1-to-1 with fiat currency to virtually eliminate volatility, while still benefiting from the advantages of cryptocurrency, such as high-speed transaction and low costs, especially for cross-border payments',
    explorer:
      'https://arbiscan.io/token/0x589d35656641d6aB57A545F08cf473eCD9B6D5F7',
    type: 'ARBITRUM',
    symbol: 'GYEN',
    decimals: 6,
    status: 'active',
    id: '0x589d35656641d6aB57A545F08cf473eCD9B6D5F7',
    links: [
      {
        name: 'github',
        url: 'https://github.com/trust-zcom/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/GMOTrust',
      },
      {
        name: 'medium',
        url: 'https://gmotrust.medium.com/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/gyen/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/gyen',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/channel/UCO7CNhdHYiJoBICgbo-yyiw/featured',
      },
    ],
  },
  {
    address: '0x6694340fc020c5E6B96567843da2df01b2CE1eb6',
    name: 'Stargate',
    type: 'ARBITRUM',
    symbol: 'STG',
    decimals: 18,
    website: 'https://stargate.finance/',
    description: 'Stargate is a fully composable liquidity transport protocol.',
    explorer:
      'https://arbiscan.io/token/0x6694340fc020c5e6b96567843da2df01b2ce1eb6',
    status: 'active',
    id: '0x6694340fc020c5E6B96567843da2df01b2CE1eb6',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/joinchat/LEM0ELklmO1kODdh',
      },
      {
        name: 'whitepaper',
        url: 'https://stargateprotocol.gitbook.io/stargate/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/stargate-finance/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/stargate-finance/',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    name: 'LayerZero',
    website: 'https://layerzero.network/',
    description:
      'LayerZero is a technology that enables applications to move data across blockchains, uniquely supporting censorship-resistant messages and permissionless development through immutable smart contracts',
    explorer:
      'https://arbiscan.io/token/0x6985884c4392d348587b19cb9eaaf157f13271cd',
    type: 'ARBITRUM',
    symbol: 'ZRO',
    decimals: 18,
    status: 'active',
    id: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/LayerZero_Labs',
      },
      {
        name: 'telegram',
        url: 'https://t.me/joinchat/VcqxYkStIDsyN2Rh',
      },
    ],
  },
  {
    address: '0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581',
    name: 'DODO',
    website: 'https://dodoex.io/',
    description:
      'DODO is a liquidity protocol powered by the Proactive Market Maker (PMM) algorithm and built for capital efficiency.',
    explorer:
      'https://arbiscan.io/token/0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581',
    type: 'ARBITRUM',
    symbol: 'DODO',
    decimals: 18,
    status: 'active',
    id: '0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581',
    links: [
      {
        name: 'github',
        url: 'https://github.com/DODOEX/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/DODO',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/DodoEx/',
      },
      {
        name: 'medium',
        url: 'https://medium.com/dodoex',
      },
    ],
  },
  {
    address: '0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55',
    name: 'Dopex Governance Token',
    symbol: 'DPX',
    type: 'ARBITRUM',
    decimals: 18,
    description: 'DPX - vanilla governance and protocol fee accrual token',
    website: 'https://www.dopex.io/',
    explorer:
      'https://arbiscan.io/token/0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
    status: 'active',
    id: '0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/dopex_io',
      },
      {
        name: 'github',
        url: 'https://github.com/dopex-io',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/dopex/',
      },
    ],
  },
  {
    address: '0x6dAF586B7370B14163171544fca24AbcC0862ac5',
    name: 'BPET',
    website: 'https://www.xpet.tech/',
    description:
      'Raising your virtual pet on Twitter, hunting chest and farming $BPET token.',
    explorer:
      'https://arbiscan.io/token/0x6dAF586B7370B14163171544fca24AbcC0862ac5',
    type: 'ARBITRUM',
    symbol: 'BPET',
    decimals: 18,
    status: 'active',
    id: '0x6dAF586B7370B14163171544fca24AbcC0862ac5',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/xpet_tech',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/bpet/',
      },
    ],
  },
  {
    address: '0x6fD58f5a2F3468e35fEb098b5F59F04157002407',
    name: 'poor guy',
    website: 'https://www.pogai.org/',
    description: 'A meme token.',
    explorer:
      'https://arbiscan.io/token/0x6fd58f5a2f3468e35feb098b5f59f04157002407',
    type: 'ARBITRUM',
    symbol: 'pogai',
    decimals: 18,
    status: 'active',
    id: '0x6fD58f5a2F3468e35fEb098b5F59F04157002407',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/pogai/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/_pogai_',
      },
    ],
  },
  {
    address: '0x7Be5Dd337CC6cE3e474F64E2A92A566445290864',
    name: 'Openleverage Token V2',
    website: 'https://openleverage.finance/',
    description:
      'OpenLeverage is a permissionless money market protocol enabling decentralized lending, borrowing, and margin trading across a diverse range of cryptocurrency pairs, fostering an accessible and efficient DeFi ecosystem.',
    explorer:
      'https://arbiscan.io/token/0x7Be5Dd337CC6cE3e474F64E2A92A566445290864',
    type: 'ARBITRUM',
    symbol: 'OLE',
    decimals: 18,
    status: 'active',
    id: '0x7Be5Dd337CC6cE3e474F64E2A92A566445290864',
    tags: ['defi'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/OpenLeverage',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/openleverage',
      },
      {
        name: 'medium',
        url: 'https://openleverage.medium.com/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/openleverage/',
      },
      {
        name: 'docs',
        url: 'https://docs.openleverage.finance/main/',
      },
      {
        name: 'telegram',
        url: 'https://t.me/openleverageofficial',
      },
      {
        name: 'github',
        url: 'https://github.com/OpenLeverageDev/openleverage-contracts',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/openleverage',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@openleverageprotocol9047',
      },
    ],
  },
  {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    name: 'Wrapped Ether',
    type: 'ARBITRUM',
    symbol: 'WETH',
    decimals: 18,
    website: 'https://weth.io/',
    description: 'wETH is wrapped ETH',
    explorer:
      'https://arbiscan.io/token/0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    status: 'active',
    id: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/weth/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/weth/',
      },
    ],
  },
  {
    address: '0x82e3A8F066a6989666b031d916c43672085b1582',
    name: 'yearn.finance',
    website: 'https://yearn.finance/',
    description:
      'YFI is the governance token for Yearn.Finance, a site that performs a variety of functions for DeFi users, moving their assets in and out of different liquidity pools in order to find the best yields.',
    explorer:
      'https://arbiscan.io/token/0x82e3A8F066a6989666b031d916c43672085b1582',
    research: 'https://research.binance.com/en/projects/yearnfinance',
    type: 'ARBITRUM',
    symbol: 'YFI',
    decimals: 18,
    status: 'active',
    id: '0x82e3A8F066a6989666b031d916c43672085b1582',
    tags: ['defi', 'governance'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/iearn-finance',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/iearnfinance',
      },
      {
        name: 'blog',
        url: 'https://medium.com/iearn',
      },
      {
        name: 'telegram',
        url: 'https://t.me/iearnfinance',
      },
      {
        name: 'whitepaper',
        url: 'https://docs.yearn.finance/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/yearn-finance/',
      },
    ],
  },
  {
    address: '0x847503FbF003cE8B005546Aa3c03B80b7C2F9771',
    name: 'Byte',
    type: 'ARBITRUM',
    symbol: 'BYTE',
    decimals: 9,
    website: 'https://www.bytedog.ai/',
    description:
      "Byte ($BYTE) is a novel ERC meme token that creatively intertwines the worlds of cryptocurrency and popular culture. Inspired by Elon Musk's announcement of naming his dog 'Byte' in reference to his Grok AI project.",
    explorer:
      'https://arbiscan.io/token/0x580e933d90091b9ce380740e3a4a39c67eb85b4c',
    status: 'active',
    id: '0x847503FbF003cE8B005546Aa3c03B80b7C2F9771',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/Byte_Erc20',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/byte/',
      },
      {
        name: 'telegram',
        url: 'https://t.me/Byte_ERC20',
      },
    ],
  },
  {
    address: '0x87AAfFdF26c6885f6010219208D5B161ec7609c0',
    name: 'Equation',
    website: 'https://equation.org/',
    description:
      'Equation is a decentralized perpetual protocol built on Arbitrum.',
    explorer:
      'https://arbiscan.io/token/0x87AAfFdF26c6885f6010219208D5B161ec7609c0',
    type: 'ARBITRUM',
    symbol: 'EQU',
    decimals: 18,
    status: 'active',
    id: '0x87AAfFdF26c6885f6010219208D5B161ec7609c0',
    links: [
      {
        name: 'github',
        url: 'https://github.com/EquationDAO',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/EquationDAO',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/equation/',
      },
    ],
  },
  {
    address: '0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8',
    name: 'DMT',
    type: 'ARBITRUM',
    symbol: 'DMT',
    decimals: 18,
    website: 'https://sankodreammachine.net/',
    description:
      'Arbitrum L3 Appchain Staking Powered Gaming Console Play To Win Play To Burn 1,000,000 Tokens Hard Cap ©. Sanko Dream Machine, Only Powered By $DMT.',
    explorer:
      'https://arbiscan.io/token/0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8',
    status: 'active',
    id: '0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/SankoGameCorp',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/sanko-game-corp/',
      },
    ],
  },
  {
    address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    name: 'Arbitrum',
    type: 'ARBITRUM',
    symbol: 'ARB',
    decimals: 18,
    website: 'https://arbitrum.foundation/',
    description:
      '$ARB tokens can be used to vote on Arbitrum DAO governance proposals, allowing $ARB holders to collectively shape the future of Arbitrum protocols and chains. Token holders can also delegate their voting power to delegates.',
    explorer:
      'https://arbiscan.io/token/0x912ce59144191c1204e64559fe8253a0e49e6548',
    status: 'active',
    id: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/arbitrum',
      },
      {
        name: 'whitepaper',
        url: 'https://docs.arbitrum.foundation/deployment-addresses',
      },
      {
        name: 'discord',
        url: 'https://discord.com/arbitrum',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/ru/currencies/arbitrum-iou/',
      },
    ],
  },
  {
    address: '0x95146881b86B3ee99e63705eC87AfE29Fcc044D9',
    name: 'Vertex',
    website: 'https://vertexprotocol.com/',
    description:
      'Vertex is a cross-margined decentralized exchange (DEX) protocol offering spot, perpetuals, and an integrated money market bundled into one vertically integrated application on Arbitrum.',
    explorer:
      'https://arbiscan.io/token/0x95146881b86B3ee99e63705eC87AfE29Fcc044D9',
    type: 'ARBITRUM',
    symbol: 'VRTX',
    decimals: 18,
    status: 'active',
    id: '0x95146881b86B3ee99e63705eC87AfE29Fcc044D9',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/vertex_protocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/vertex-protocol/',
      },
    ],
  },
  {
    address: '0x9623063377AD1B27544C965cCd7342f7EA7e88C7',
    name: 'The Graph',
    website: 'https://thegraph.com',
    description:
      'The Graph is an indexing protocol and global API for organizing blockchain data and making it easily accessible with GraphQL. Developers can use Graph Explorer to search, find, and publish all the public data they need to build decentralized applications. The Graph Network makes it possible to build serverless dApps that run entirely on public infrastructure.',
    explorer:
      'https://arbiscan.io/token/0x9623063377ad1b27544c965ccd7342f7ea7e88c7',
    research: 'https://github.com/graphprotocol/research',
    type: 'ARBITRUM',
    symbol: 'GRT',
    decimals: 18,
    status: 'active',
    id: '0x9623063377AD1B27544C965cCd7342f7EA7e88C7',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/graphprotocol/graph-node',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/graphprotocol',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/thegraph',
      },
      {
        name: 'telegram',
        url: 'https://t.me/graphprotocol',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/the-graph/',
      },
    ],
  },
  {
    address: '0x965d00aA7ABC62CA10132e641D08593435aC811d',
    name: 'KAP Games',
    type: 'ARBITRUM',
    symbol: 'KAP',
    decimals: 18,
    website: 'https://about.kap.gg/',
    description:
      'KAP Games is a web3 gaming distributor, publisher & studio, specializing in browser and mobile-native experiences. Utilizing emerging technologies to unlock the next generation of gaming, KAP curates a web3 ecosystem where diverse games, innovative projects, and vibrant communities collide.',
    explorer:
      'https://arbiscan.io/token/0x965d00aA7ABC62CA10132e641D08593435aC811d',
    status: 'active',
    id: '0x965d00aA7ABC62CA10132e641D08593435aC811d',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/KAPGamesGG',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/kap-games/',
      },
    ],
  },
  {
    address: '0x982239D38Af50B0168dA33346d85Fb12929c4c07',
    name: 'Arbitrove Governance Token',
    type: 'ARBITRUM',
    symbol: 'TROVE',
    decimals: 18,
    website: 'https://nitrocartel.finance/arbitrove',
    description:
      'Nitro Cartel will aggressively strive to solve the problem by mobilizing crypto’s citizens into the collective cartelization of financial and human capital.',
    explorer:
      'https://arbiscan.io/token/0x982239d38af50b0168da33346d85fb12929c4c07',
    status: 'active',
    id: '0x982239D38Af50B0168dA33346d85Fb12929c4c07',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/nitrocartel',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/nitro-cartel/',
      },
    ],
  },
  {
    address: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    name: 'beefy.finance',
    symbol: 'BIFI',
    type: 'ARBITRUM',
    decimals: 18,
    description: 'The MultiChain Yield Optimizer',
    website: 'https://beefy.finance/',
    explorer:
      'https://arbiscan.io/token/0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae',
    status: 'active',
    id: '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/beefyfinance',
      },
      {
        name: 'telegram',
        url: 'https://t.me/beefyfinance',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/beefy-finance/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/beefy-finance/',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0x9E758B8a98a42d612b3D38B66a22074DC03D7370',
    name: 'Symbiosis',
    type: 'ARBITRUM',
    symbol: 'SIS',
    decimals: 18,
    website: 'https://symbiosis.finance',
    description:
      'Symbiosis aggregates decentralized exchange liquidity across any EVM and non-EVM networks. Swap any token and transfer liquidity. Yes, any.',
    explorer:
      'https://arbiscan.io/token/0x9e758b8a98a42d612b3d38b66a22074dc03d7370',
    status: 'active',
    id: '0x9E758B8a98a42d612b3D38B66a22074DC03D7370',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/symbiosis_fi',
      },
      {
        name: 'github',
        url: 'https://github.com/symbiosis-finance',
      },
      {
        name: 'telegram',
        url: 'https://t.me/symbiosis_finance',
      },
      {
        name: 'medium',
        url: 'https://medium.com/symbiosis-fi',
      },
    ],
    tags: ['stablecoin'],
  },
  {
    address: '0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3',
    name: 'Multichain',
    type: 'ARBITRUM',
    symbol: 'MULTI',
    decimals: 18,
    website: 'https://multichain.org/',
    description:
      'Multichain is a cross-chain router protocol (CRP), to be the ultimate router for Web3.',
    explorer:
      'https://arbiscan.io/token/0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3',
    status: 'active',
    id: '0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/multichainorg',
      },
      {
        name: 'github',
        url: 'https://github.com/anyswap',
      },
      {
        name: 'telegram',
        url: 'https://t.me/anyswap',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/multichain/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/multichain/',
      },
    ],
  },
  {
    address: '0x9b3fa2A7C3EB36d048A5d38d81E7fAFC6bc47B25',
    name: 'Aluna Token',
    website: 'https://aluna.social',
    description:
      'Aluna Social - Multi-exchange Social Trading Terminal for Crypto Traders and Investors',
    explorer:
      'https://arbiscan.io/token/0x9b3fa2a7c3eb36d048a5d38d81e7fafc6bc47b25',
    type: 'ARBITRUM',
    symbol: 'ALN',
    decimals: 18,
    status: 'active',
    id: '0x9b3fa2A7C3EB36d048A5d38d81E7fAFC6bc47B25',
  },
  {
    address: '0x9f6AbbF0Ba6B5bfa27f4deb6597CC6Ec20573FDA',
    name: 'Ferrum Network',
    website: 'https://ferrum.network',
    description:
      'Ferrum Network aims to empower individuals with decentralized financial technology.',
    explorer:
      'https://arbiscan.io/token/0x9f6AbbF0Ba6B5bfa27f4deb6597CC6Ec20573FDA',
    type: 'ARBITRUM',
    symbol: 'FRM',
    decimals: 18,
    status: 'active',
    id: '0x9f6AbbF0Ba6B5bfa27f4deb6597CC6Ec20573FDA',
  },
  {
    address: '0xB299751B088336E165dA313c33e3195B8c6663A6',
    name: 'StarHeroes',
    type: 'ARBITRUM',
    symbol: 'STAR',
    decimals: 18,
    website: 'https://starheroes.io/',
    description:
      "StarHeroes: pioneering multiplayer space shooter esports game by GameSwift's STAR studio. Early Access debuts Q2 2024 with 400k pre-registrations. Get ready for the first Decentralized Esports Tournament, featuring a $1.6m prize pool.",
    explorer:
      'https://arbiscan.io/token/0xb299751b088336e165da313c33e3195b8c6663a6',
    status: 'active',
    id: '0xB299751B088336E165dA313c33e3195B8c6663A6',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/starheroes_game',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/starheroes/',
      },
    ],
  },
  {
    address: '0xB9AF4762c039D63e30039F1712dfaB77026408c7',
    name: 'BullBear AI',
    type: 'ARBITRUM',
    symbol: 'AIBB',
    decimals: 18,
    website: 'https://bull-bear.ai/',
    description:
      'BullBear AI is developed using AI to predict the BULL and BEAR markets through User Behaviors and Price Action, generating profit for users.',
    explorer:
      'https://arbiscan.io/token/0xb9af4762c039d63e30039f1712dfab77026408c7',
    status: 'active',
    id: '0xB9AF4762c039D63e30039F1712dfaB77026408c7',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/bullbear_ai',
      },
      {
        name: 'telegram',
        url: 'https://t.me/ai_bullbear',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/bullbear-ai/',
      },
    ],
  },
  {
    address: '0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E',
    name: 'Badger',
    website: 'https://badger.finance/',
    description:
      'DAO dedicated to building products and infrastructure to bring Bitcoin to DeFi.',
    explorer:
      'https://arbiscan.io/token/0xbfa641051ba0a0ad1b0acf549a89536a0d76472e',
    type: 'ARBITRUM',
    symbol: 'BADGER',
    decimals: 18,
    status: 'active',
    id: '0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E',
    tags: ['defi', 'governance'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/$BADGER',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/xSPFHHS',
      },
      {
        name: 'medium',
        url: 'https://badgerdao.medium.com/',
      },
    ],
  },
  {
    address: '0xC9C4fd7579133701FA2769b6955e7E56bb386DB1',
    name: 'Bridge Token',
    website: 'https://bridge.link',
    description:
      'Bridge Oracle System is a technology through which external data can be injected.',
    explorer:
      'https://arbiscan.io/token/0xc9c4fd7579133701fa2769b6955e7e56bb386db1',
    type: 'ARBITRUM',
    symbol: 'BRG',
    decimals: 18,
    status: 'active',
    id: '0xC9C4fd7579133701FA2769b6955e7E56bb386DB1',
    tags: ['defi'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/bridge_oracle',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/bridge-oracle/',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/brg',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/bridge-oracle/',
      },
      {
        name: 'telegram',
        url: 'https://t.me/Bridge_Oracle',
      },
      {
        name: 'github',
        url: 'https://github.com/BridgeOracle',
      },
      {
        name: 'whitepaper',
        url: 'https://bridge.link/BRG-Whitepaper.pdf',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@bridge_oracle',
      },
    ],
  },
  {
    address: '0xC9CBf102c73fb77Ec14f8B4C8bd88e050a6b2646',
    name: 'Alpha Finance Lab',
    website: 'https://alphafinance.io',
    description:
      'Alpha Finance Lab is an ecosystem of cross-chain DeFi products that will interoperate to bring optimal alpha returns to users. Alpha products focus on capturing unaddressed demand in DeFi in an innovative and user friendly way.',
    explorer:
      'https://arbiscan.io/token/0xC9CBf102c73fb77Ec14f8B4C8bd88e050a6b2646',
    data_source: 'crowd',
    type: 'ARBITRUM',
    symbol: 'ALPHA',
    decimals: 18,
    status: 'active',
    id: '0xC9CBf102c73fb77Ec14f8B4C8bd88e050a6b2646',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/AlphaFinanceLab',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/alphafinancelab',
      },
      {
        name: 'telegram',
        url: 'https://t.me/AlphaFinanceLab',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/Z2vuKDT',
      },
    ],
  },
  {
    address: '0xD4d026322C88C2d49942A75DfF920FCfbC5614C1',
    name: 'Openleverage Token (Old)',
    website: 'https://openleverage.finance/',
    description:
      'OpenLeverage is a permissionless money market protocol enabling decentralized lending, borrowing, and margin trading across a diverse range of cryptocurrency pairs, fostering an accessible and efficient DeFi ecosystem.',
    explorer:
      'https://arbiscan.io/token/0xD4d026322C88C2d49942A75DfF920FCfbC5614C1',
    type: 'ARBITRUM',
    symbol: 'Old OLE',
    decimals: 18,
    status: 'active',
    id: '0xD4d026322C88C2d49942A75DfF920FCfbC5614C1',
    tags: ['defi'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/OpenLeverage',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/openleverage',
      },
      {
        name: 'medium',
        url: 'https://openleverage.medium.com/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/openleverage/',
      },
      {
        name: 'docs',
        url: 'https://docs.openleverage.finance/main/',
      },
      {
        name: 'telegram',
        url: 'https://t.me/openleverageofficial',
      },
      {
        name: 'github',
        url: 'https://github.com/OpenLeverageDev/openleverage-contracts',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/openleverage',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@openleverageprotocol9047',
      },
    ],
  },
  {
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    name: 'Dai Stablecoin',
    type: 'ARBITRUM',
    symbol: 'DAI',
    decimals: 18,
    website: 'https://tether.to/',
    description:
      'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
    explorer:
      'https://arbiscan.io/token/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    status: 'active',
    id: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/multi-collateral-dai/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/dai/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/MakerDAO',
      },
      {
        name: 'whitepaper',
        url: 'https://makerdao.com/whitepaper/',
      },
    ],
    tags: ['stablecoin', 'defi'],
  },
  {
    address: '0xDFB8BE6F8c87f74295A87de951974362CedCFA30',
    name: 'EdgeMatrix Computing network',
    type: 'ARBITRUM',
    symbol: 'EMC',
    decimals: 18,
    website: 'https://edgematrix.pro/',
    description:
      'EMC (EdgeMatrix Computing) is a decentralized computing network in the AI era.',
    explorer:
      'https://arbiscan.io/token/0xdfb8be6f8c87f74295a87de951974362cedcfa30',
    status: 'active',
    id: '0xDFB8BE6F8c87f74295A87de951974362CedCFA30',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/EMCprotocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/edge-matrix-computing/',
      },
    ],
  },
  {
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    name: 'Axelar Wrapped USDC',
    type: 'ARBITRUM',
    symbol: 'axlUSDC',
    decimals: 6,
    website: 'https://axelar.network/',
    description:
      'Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.',
    explorer:
      'https://arbiscan.io/token/0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    status: 'active',
    id: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/axelarcore',
      },
      {
        name: 'github',
        url: 'https://github.com/axelarnetwork',
      },
      {
        name: 'telegram',
        url: 'https://t.me/axelarcommunity',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/axelar-usdc',
      },
      {
        name: 'docs',
        url: 'https://docs.axelar.dev/',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/aRZ3Ra6f7D',
      },
      {
        name: 'forum',
        url: 'https://community.axelar.network/',
      },
      {
        name: 'whitepaper',
        url: 'https://axelar.network/axelar_whitepaper.pdf',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/axelar',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@axelar-foundation',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/axlusdc/',
      },
      {
        name: 'blog',
        url: 'https://axelar.network/blog',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@Axelarcore',
      },
    ],
    tags: ['stablecoin', 'wrapped'],
  },
  {
    address: '0xEe9801669C6138E84bD50dEB500827b776777d28',
    name: 'O3 Swap',
    type: 'ARBITRUM',
    symbol: 'O3',
    decimals: 18,
    website: 'https://o3swap.com',
    description:
      'O3 Swap Token (O3) is a governance token issued by O3 Swap. It is an important mediator to promote the development of the O3 Swap network. All participants and developers are encouraged to participate in the maintenance of the overall ecological network by staking, voting, etc. we are committed to providing a one-stop aggregation & exchange platform for users and offering developers access to an open, distributed, friendly, and secure trading environment.',
    explorer:
      'https://arbiscan.io/token/0xee9801669c6138e84bd50deb500827b776777d28',
    status: 'active',
    id: '0xEe9801669C6138E84bD50dEB500827b776777d28',
  },
  {
    address: '0xEf04804E1e474D3F9B73184D7ef5D786F3Fce930',
    name: 'Wall Street Games',
    website: 'https://wsg.gg',
    description:
      'Wall Street Games is a next generation hybrid blockchain-based online gaming platform, where players battle each other in fun & addicting simple games for rewards in cryptocurrencies!',
    explorer:
      'https://arbiscan.io/token/0xEf04804E1e474D3F9B73184D7ef5D786F3Fce930',
    type: 'ARBITRUM',
    symbol: 'WSG',
    decimals: 18,
    status: 'active',
    id: '0xEf04804E1e474D3F9B73184D7ef5D786F3Fce930',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/WSGToken',
      },
      {
        name: 'telegram',
        url: 'https://t.me/wallstreetgamesarb',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/wall-street-games-new/',
      },
    ],
  },
  {
    address: '0xFA5Ed56A203466CbBC2430a43c66b9D8723528E7',
    name: 'EURA',
    website: 'https://www.angle.money/',
    description:
      'EURA is an over-collateralized and decentralized Euro stablecoin by the Angle Protocol.',
    explorer:
      'https://arbiscan.io/token/0xFA5Ed56A203466CbBC2430a43c66b9D8723528E7',
    type: 'ARBITRUM',
    symbol: 'EURA',
    decimals: 18,
    status: 'active',
    tags: ['defi', 'stablecoin'],
    id: '0xFA5Ed56A203466CbBC2430a43c66b9D8723528E7',
    links: [
      {
        name: 'github',
        url: 'https://github.com/AngleProtocol',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/AngleProtocol',
      },
      {
        name: 'docs',
        url: 'https://docs.angle.money',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/ageur',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/ZheVAnFt6h',
      },
    ],
  },
  {
    address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    name: 'Magic Internet Money',
    website: 'https://abracadabra.money/',
    description: 'MIM is a stablecoin backed by interest bearing collateral',
    explorer:
      'https://arbiscan.io/token/0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a',
    type: 'ARBITRUM',
    symbol: 'MIM',
    decimals: 18,
    status: 'active',
    id: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    links: [
      {
        name: 'github',
        url: 'https://github.com/Abracadabra-money/magic-internet-money',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/MIM_Spell',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/magic-internet-money/',
      },
    ],
  },
  {
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    name: 'Bridged USDC',
    type: 'ARBITRUM',
    symbol: 'USDC.e',
    decimals: 6,
    website: 'https://www.centre.io/usdc',
    description:
      'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
    explorer:
      'https://arbiscan.io/token/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    status: 'active',
    id: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/usd-coin/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/usd-coin/',
      },
      {
        name: 'blog',
        url: 'https://centre.io/blog',
      },
    ],
    tags: ['stablecoin'],
  },
  {
    address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    name: 'Uniswap',
    website: 'https://uniswap.org',
    description:
      'UNI is the Uniswap protocol token. Uniswap is a decentralized protocol for automated liquidity provision on Ethereum.',
    explorer:
      'https://arbiscan.io/token/0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    research: 'https://research.binance.com/en/projects/uniswap',
    type: 'ARBITRUM',
    symbol: 'UNI',
    decimals: 18,
    status: 'active',
    id: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    tags: ['defi', 'governance'],
    links: [
      {
        name: 'discord',
        url: 'https://discord.com/invite/XErMcTq',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/UniswapProtocol',
      },
      {
        name: 'blog',
        url: 'https://uniswap.org/blog/uni/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/uniswap/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/uniswap/',
      },
    ],
  },
  {
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    name: 'Tether USD',
    type: 'ARBITRUM',
    symbol: 'USDT',
    decimals: 6,
    website: 'https://tether.to/',
    description:
      'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
    explorer:
      'https://arbiscan.io/token/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    status: 'active',
    id: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/tether/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/tether/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/Tether_to',
      },
      {
        name: 'whitepaper',
        url: 'https://stableset.com/audits/tether_audit_v1/tether_audit_v1.pdf',
      },
    ],
    tags: ['stablecoin'],
  },
  {
    address: '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1',
    name: 'Gnosis',
    website: 'https://gnosis.io',
    description:
      'Gnosis is a decentralized prediction market built on the Ethereum protocol.',
    explorer:
      'https://arbiscan.io/token/0xa0b862f60edef4452f25b4160f177db44deb6cf1',
    type: 'ARBITRUM',
    symbol: 'GNO',
    decimals: 18,
    status: 'active',
    id: '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/gnosis',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/gnosisPM',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/gnosisPM/',
      },
      {
        name: 'blog',
        url: 'https://blog.gnosis.io/',
      },
      {
        name: 'facebook',
        url: 'https://facebook.com/Gnosis.pm/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/gnosis/',
      },
    ],
  },
  {
    address: '0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689',
    name: 'dForce',
    type: 'ARBITRUM',
    symbol: 'DF',
    decimals: 18,
    website: 'http://dforce.network/',
    description:
      'dForce advocates for building an integrated and interoperable and scalable open finance protocol network, cultivating intra-protocol liquidity and network effects, while remain in full openness to interact and integrated with other protocols.',
    explorer:
      'https://arbiscan.io/token/0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689',
    status: 'active',
    id: '0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/dforcenet',
      },
      {
        name: 'github',
        url: 'https://github.com/dforce-network/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/dforce-token/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/dforce/',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0xaa54e84A3e6e5A80288d2C2f8e36eA5cA3A3Ca30',
    name: 'SHARBI',
    type: 'ARBITRUM',
    symbol: 'SHARBI',
    decimals: 9,
    website: 'https://sharbi.net/',
    description:
      'Sharbi is a community-owned, Arbitrum and Ethereum token. Sharbi is known for being the mistress of Shiba.',
    explorer:
      'https://arbiscan.io/token/0xaa54e84a3e6e5a80288d2c2f8e36ea5ca3a3ca30',
    status: 'active',
    id: '0xaa54e84A3e6e5A80288d2C2f8e36eA5cA3A3Ca30',
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/SharbiPortal',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/SharbiToken',
      },
    ],
    tags: ['memes'],
  },
  {
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    name: 'USD Coin',
    type: 'ARBITRUM',
    symbol: 'USDC',
    decimals: 6,
    website: 'https://www.centre.io/usdc',
    description:
      'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
    explorer:
      'https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831',
    status: 'active',
    id: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/usd-coin/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/usd-coin/',
      },
      {
        name: 'blog',
        url: 'https://centre.io/blog',
      },
    ],
    tags: ['stablecoin'],
  },
  {
    address: '0xb9600c807f069D27f92a2a65b48F12Eeef7e2007',
    name: 'Altranium',
    type: 'ARBITRUM',
    symbol: 'ALTR',
    decimals: 18,
    website: 'https://altranium.com/',
    description:
      'Altranium coin comes fully equipped with the cogitating & imperative ecosystem with the emerging and integrated technologies which can build DeFi, SocialFi, GameFi and metaverses. ALTR hones the ability to process tokens deploying full decentralize systems such as DeFi on Ethereum, by using the native Blockchain to create the interactive visual experiences, enhancing the experience further with VR (Virtual Reality) Media Codec within Metaverse(s) as well as CRE (Corporate Real Estate)',
    explorer:
      'https://arbiscan.io/token/0xb9600c807f069d27f92a2a65b48f12eeef7e2007',
    status: 'active',
    id: '0xb9600c807f069D27f92a2a65b48F12Eeef7e2007',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/altranium',
      },
      {
        name: 'github',
        url: 'https://github.com/ALTRANIUM',
      },
      {
        name: 'telegram',
        url: 'https://t.me/altranium',
      },
      {
        name: 'medium',
        url: 'https://medium.com/@altranium_',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/altranium/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/altranium',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/altranium',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/Altraniyumm/',
      },
    ],
    tags: ['gamefi'],
  },
  {
    address: '0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b',
    name: 'Wootrade Network',
    type: 'ARBITRUM',
    symbol: 'WOO',
    decimals: 18,
    website: 'https://woo.network',
    description:
      'Wootrade aims to provide deep liquidity and superior order execution at the lowest cost for traders, exchanges, institutions, and DeFi platforms. Its flagship, WOO X, is a professional trading platform featuring customizable modules, and zero-fees with deep liquidity across spot and margin. Wootrade was founded by Kronos Research, a quantitative trading firm generating $10-15B in daily volume, with the goal of democratizing access to deep liquidity and yield strategies through various products.',
    explorer:
      'https://arbiscan.io/token/0xcafcd85d8ca7ad1e1c6f82f651fa15e33aefd07b',
    status: 'active',
    id: '0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b',
    tags: ['defi'],
    links: [
      {
        name: 'telegram',
        url: 'https://t.me/wootrade',
      },
      {
        name: 'blog',
        url: 'https://medium.com/@wootrade',
      },
      {
        name: 'facebook',
        url: 'https://facebook.com/Wootrade',
      },
      {
        name: 'whitepaper',
        url: 'https://woo.network/Litepaper.pdf',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/wootrade-network/',
      },
    ],
  },
  {
    address: '0xcb8b5CD20BdCaea9a010aC1F8d835824F5C87A04',
    name: 'CoW Protocol Token',
    type: 'ARBITRUM',
    symbol: 'COW',
    decimals: 18,
    website: 'https://cow.fi',
    description:
      'COW token allows its holders the right to govern and curate the infrastructure of the CoW Protocol ecosystem through the CowDAO. Additionally, COW token holders receive fee discounts when trading on CowSwap & some other perks.',
    explorer:
      'https://arbiscan.io/token/0xcb8b5CD20BdCaea9a010aC1F8d835824F5C87A04',
    status: 'active',
    id: '0xcb8b5CD20BdCaea9a010aC1F8d835824F5C87A04',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/CoWSwap',
      },
      {
        name: 'github',
        url: 'https://github.com/cowprotocol',
      },
      {
        name: 'source_code',
        url: 'https://github.com/cowprotocol/token',
      },
      {
        name: 'blog',
        url: 'https://blog.cow.fi',
      },
      {
        name: 'docs',
        url: 'https://docs.cow.fi',
      },
      {
        name: 'discord',
        url: 'https://discord.com/invite/cowprotocol',
      },
      {
        name: 'forum',
        url: 'https://forum.cow.fi',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/cow-protocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/cow-protocol',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@CoWSwap',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189',
    name: 'Okcash',
    type: 'ARBITRUM',
    symbol: 'OK',
    decimals: 18,
    website: 'https://okcash.co',
    description:
      'OK is the leading multi chain PoS, web3 + NFTs open source electronic cash, its design is public, nobody owns or controls Okcash and everyone can take part.',
    explorer:
      'https://arbiscan.io/token/0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189',
    status: 'active',
    id: '0xd3Ac016b1B8C80EeAdDe4D186A9138C9324e4189',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/OkcashCrypto',
      },
      {
        name: 'github',
        url: 'https://github.com/okcashpro',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/okcash/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/okcash',
      },
      {
        name: 'medium',
        url: 'https://medium.com/okcash',
      },
    ],
    tags: ['defi'],
  },
  {
    address: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
    name: 'SushiSwap',
    website: 'https://sushiswap.fi',
    description:
      'SushiSwap claims to be an evolution of #Uniswap with $SUSHI tokenomics.',
    explorer:
      'https://arbiscan.io/token/0xd4d42f0b6def4ce0383636770ef773390d85c61a',
    type: 'ARBITRUM',
    symbol: 'SUSHI',
    decimals: 18,
    status: 'active',
    id: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
    tags: ['defi', 'governance', 'nft'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/sushiswap',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/sushiswap',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/sushi/',
      },
    ],
  },
  {
    address: '0xd58D345Fd9c82262E087d2D0607624B410D88242',
    name: 'Tellor',
    website: 'https://tellor.io',
    description:
      'Tellor (a decentralized oracle) aims to address the Oracle problem on Ethereum.',
    explorer:
      'https://arbiscan.io/token/0xd58D345Fd9c82262E087d2D0607624B410D88242',
    type: 'ARBITRUM',
    symbol: 'TRB',
    decimals: 18,
    status: 'active',
    id: '0xd58D345Fd9c82262E087d2D0607624B410D88242',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/WeAreTellor',
      },
      {
        name: 'telegram',
        url: 'https://t.me/tellor',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/tellor/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/tellor/',
      },
    ],
  },
  {
    address: '0xdA0a57B710768ae17941a9Fa33f8B720c8bD9ddD',
    name: 'Marlin POND',
    website: 'https://www.marlin.pro/',
    description:
      'Marlin is an open protocol that provides a high-performance programmable network infrastructure for Web 3.0',
    explorer:
      'https://arbiscan.io/token/0xda0a57b710768ae17941a9fa33f8b720c8bd9ddd',
    type: 'ARBITRUM',
    symbol: 'POND',
    decimals: 18,
    status: 'active',
    id: '0xdA0a57B710768ae17941a9Fa33f8B720c8bD9ddD',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/marlinprotocol',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/marlin/',
      },
      {
        name: 'telegram',
        url: 'https://t.me/marlinprotocol',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/marlin/',
      },
    ],
  },
  {
    address: '0xdA661fa59320B808c5a6d23579fCfEdf1FD3cf36',
    name: 'MOBOX',
    website: 'https://mobox.io',
    description:
      'An Optimized Yield-Farming platform combining the best of DeFi and Gaming NFTs. Creating a truly Free To Play Play To Earn Ecosystem on the Binance Smart Chain',
    explorer:
      'https://arbiscan.io/token/0xdA661fa59320B808c5a6d23579fCfEdf1FD3cf36',
    type: 'ARBITRUM',
    symbol: 'MBOX',
    decimals: 18,
    status: 'active',
    id: '0xdA661fa59320B808c5a6d23579fCfEdf1FD3cf36',
    tags: ['defi'],
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/MOBOX_Official',
      },
      {
        name: 'telegram',
        url: 'https://t.me/mobox_io',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/mobox/',
      },
    ],
  },
  {
    address: '0xe4DDDfe67E7164b0FE14E218d80dC4C08eDC01cB',
    name: 'Kyber Network',
    website: 'https://kyber.network',
    description:
      'Kyber Network’s on-chain liquidity protocol allows decentralized token swaps to be integrated into any application, enabling value exchange to be performed seamlessly between all parties in the ecosystem.',
    explorer:
      'https://arbiscan.io/token/0xe4dddfe67e7164b0fe14e218d80dc4c08edc01cb',
    type: 'ARBITRUM',
    symbol: 'KNC',
    decimals: 18,
    status: 'active',
    id: '0xe4DDDfe67E7164b0FE14E218d80dC4C08eDC01cB',
    tags: ['defi', 'governance'],
  },
  {
    address: '0xe821C045f9149B44ef96f8054B9c6d94f4c89417',
    name: 'DOVU',
    website: 'https://dovu.earth/',
    description:
      'DOVU is a technology infrastructure provider, powering trusted environmental and carbon digital markets by providing market integrity. The DOVU token serves as the protocol’s utility token, enabling holders to participate and create their own environmental audit trail ecosystems. Token holders can stake their DOVU to earn multiplier rewards, aligning long-term incentives with the protocol’s mission of building reliable carbon markets.',
    explorer:
      'https://arbiscan.io/token/0xe821C045f9149B44ef96f8054B9c6d94f4c89417',
    type: 'ARBITRUM',
    symbol: 'DOVU',
    decimals: 8,
    status: 'active',
    id: '0xe821C045f9149B44ef96f8054B9c6d94f4c89417',
    tags: ['wrapped', 'staking'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/dovuofficial/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/dovuofficial',
      },
      {
        name: 'blog',
        url: 'https://dovu.earth/en/news/',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/dovu-earth/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/en/coins/dovu',
      },
      {
        name: 'youtube',
        url: 'https://youtube.com/@DOVUearth',
      },
    ],
  },
  {
    address: '0xf0a479C9c3378638EC603b8B6B0d75903902550B',
    name: 'CATCH',
    type: 'ARBITRUM',
    symbol: 'CATCH',
    decimals: 18,
    website: 'https://spacecatch.io/',
    description:
      'SpaceCatch is a next-generation AR game driven by complex artificial intelligence. Build your Hero, protect the human Metaverse, train your avatar, defeat aliens, earn rewards, and show that you are more intelligent than AI.',
    explorer:
      'https://arbiscan.io/token/0xf0a479C9c3378638EC603b8B6B0d75903902550B',
    status: 'active',
    id: '0xf0a479C9c3378638EC603b8B6B0d75903902550B',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/spacecatch_io',
      },
      {
        name: 'telegram',
        url: 'https://t.me/spacecatch_io',
      },
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/spacecatch/',
      },
    ],
  },
  {
    address: '0xf3C091ed43de9c270593445163a41A876A0bb3dd',
    name: 'Orbs',
    website: 'https://orbs.com',
    description:
      'Orbs is a blockchain infrastructure-as-a-service built for large scale consumer applications to meet their business and technological requirements.',
    explorer:
      'https://arbiscan.io/token/0xf3C091ed43de9c270593445163a41A876A0bb3dd',
    type: 'ARBITRUM',
    symbol: 'ORBS',
    decimals: 18,
    status: 'active',
    id: '0xf3C091ed43de9c270593445163a41A876A0bb3dd',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/orbs_network',
      },
      {
        name: 'github',
        url: 'https://github.com/orbs-network',
      },
      {
        name: 'telegram',
        url: 'https://t.me/orbs_network',
      },
    ],
  },
  {
    address: '0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3',
    name: 'Lorenzo stBTC',
    type: 'ARBITRUM',
    symbol: 'stBTC',
    decimals: 18,
    website: 'https://www.lorenzo-protocol.xyz/',
    description:
      'To be the premier Bitcoin platform for yield-bearing token issuance, trading, and settlement.',
    explorer:
      'https://arbiscan.io/token/0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3',
    status: 'active',
    id: '0xf6718b2701D4a6498eF77D7c152b2137Ab28b8A3',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/LorenzoProtocol',
      },
      {
        name: 'telegram',
        url: 'https://t.me/lorenzoprotocol',
      },
    ],
  },
  {
    address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    name: 'Chainlink',
    website: 'https://chain.link',
    description:
      'Chainlink is a decentralized oracle service, which aims to connect smart contracts with data from the real world. Oracles are needed to function as data feeds in smart contracts. Oracles provide external data (e.g. temperature, weather) that can drive smart contract executions. Participants on the network are incentivized (through rewards) to provide smart contracts with access to external data feeds.',
    explorer:
      'https://arbiscan.io/token/0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    type: 'ARBITRUM',
    symbol: 'LINK',
    decimals: 18,
    status: 'active',
    id: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    tags: ['defi'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/smartcontractkit/chainlink',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/chainlink',
      },
      {
        name: 'reddit',
        url: 'https://reddit.com/r/chainlink',
      },
      {
        name: 'whitepaper',
        url: 'https://link.smartcontract.com/whitepaper',
      },
    ],
  },
  {
    address: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    name: 'GMX',
    type: 'ARBITRUM',
    symbol: 'GMX',
    decimals: 18,
    website: 'https://gmx.io/',
    description:
      'GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.',
    explorer:
      'https://arbiscan.io/token/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    status: 'active',
    id: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    links: [
      {
        name: 'coinmarketcap',
        url: 'https://coinmarketcap.com/currencies/gmx/',
      },
      {
        name: 'coingecko',
        url: 'https://coingecko.com/coins/gmx/',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/GMX_IO',
      },
      {
        name: 'telegram',
        url: 'https://t.me/GMX_IO',
      },
    ],
    tags: ['defi'],
  },
]

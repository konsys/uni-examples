// import { Token } from '@uniswap/sdk-core';

import { Token } from '@uniswap/sdk-core'

import { arbitrumTokensFullList } from './arbitrumTokensFullList'
export const ARBITRUM_POOL_FACTORY_CONTRACT_ADDRESS =
  '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const ARBITRUM_SWAP_ROUTER_ADDRESS =
  '0xE592427A0AEce92De3Edee1F18E0157C05861564'

export type ArbitrumTokenName =
  | 'USDA'
  | 'stUSD'
  | 'stEUR'
  | 'BAL'
  | 'SYN'
  | 'VELA'
  | 'AIDOGE'
  | 'OPUL'
  | 'PENDLE'
  | 'JONES'
  | 'Boop'
  | 'LDO'
  | 'FRAX'
  | 'GNS'
  | 'ZTX'
  | 'RWAS'
  | 'MOZ'
  | 'GRT'
  | 'AXL'
  | 'WBTC'
  | 'RDNT'
  | 'CTSI'
  | 'JOE'
  | 'NYA'
  | 'ZYB'
  | 'ROOBEE'
  | 'SPELL'
  | 'MAI'
  | 'GRAIL'
  | 'rsETH'
  | 'HEGIC'
  | 'DOG'
  | 'XAI'
  | 'MCB'
  | 'KORA'
  | 'XCHNG'
  | 'MAGIC'
  | 'SPA'
  | 'SFUND'
  | 'GSWIFT'
  | 'GYEN'
  | 'STG'
  | 'ZRO'
  | 'DODO'
  | 'DPX'
  | 'BPET'
  | 'pogai'
  | 'OLE'
  | 'WETH'
  | 'YFI'
  | 'BYTE'
  | 'EQU'
  | 'DMT'
  | 'ARB'
  | 'VRTX'
  | 'KAP'
  | 'TROVE'
  | 'BIFI'
  | 'SIS'
  | 'MULTI'
  | 'ALN'
  | 'FRM'
  | 'STAR'
  | 'AIBB'
  | 'BADGER'
  | 'BRG'
  | 'ALPHA'
  | 'Old OLE'
  | 'DAI'
  | 'EMC'
  | 'axlUSDC'
  | 'O3'
  | 'WSG'
  | 'EURA'
  | 'MIM'
  | 'USDC.e'
  | 'UNI'
  | 'USDT'
  | 'GNO'
  | 'DF'
  | 'SHARBI'
  | 'USDC'
  | 'ALTR'
  | 'WOO'
  | 'COW'
  | 'OK'
  | 'SUSHI'
  | 'TRB'
  | 'POND'
  | 'MBOX'
  | 'KNC'
  | 'DOVU'
  | 'CATCH'
  | 'ORBS'
  | 'stBTC'
  | 'LINK'
  | 'GMX'

export type ArbitrumTokensData = Record<ArbitrumTokenName, Token>

export class ArbitrumChainTokensClass {
  private tokens: ArbitrumTokensData = {} as ArbitrumTokensData
  constructor() {
    arbitrumTokensFullList.forEach((token) => {
      const { id, decimals, symbol, name } = token
      const newToken = new Token(42161, id, decimals, symbol, name)

      if (newToken.symbol) {
        this.tokens[newToken.symbol as ArbitrumTokenName] = newToken
      }
    })
  }
  public getTokensData = (): ArbitrumTokensData => {
    return this.tokens
  }

  public getTokenByAddress = (address: string) => {
    const found = Object.values(this.tokens).find((t) => t.address === address)
    return found
  }
}

export const arbitrumTokensData = new ArbitrumChainTokensClass().getTokensData()

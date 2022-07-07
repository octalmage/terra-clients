/**
* This file was automatically generated by @terra-money/terra-cosmwasm-typescript-gen@0.1.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @terra-money/terra-cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { LCDClient, Coins, Wallet, MsgExecuteContract, TxInfo, WaitTxBroadcastResult } from "@terra-money/terra.js";
import { ConnectedWallet } from "@terra-money/wallet-provider";
function isConnectedWallet(x: Wallet | ConnectedWallet): x is ConnectedWallet {
  return typeof (x as Wallet).key === "undefined";
};
async function waitForInclusionInBlock(lcd: LCDClient, txHash: string): Promise<TxInfo | undefined> {
  let res;
  for (let i = 0; i <= 50; i++) {
    try {
      res = await lcd.tx.txInfo(txHash);
    } catch (error) {
      // NOOP
    }
      
    if (res) {
      break;
    }
      
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
      
  return res;
};
export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface AllowanceResponse {
  allowance: Uint128;
  expires: Expiration;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balance: Uint128;
  [k: string]: unknown;
}
export type Cw20ExecuteMsg = {
  transfer: {
    amount: Uint128;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Uint128;
    [k: string]: unknown;
  };
} | {
  send: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  increase_allowance: {
    amount: Uint128;
    expires?: Expiration | null;
    spender: string;
    [k: string]: unknown;
  };
} | {
  decrease_allowance: {
    amount: Uint128;
    expires?: Expiration | null;
    spender: string;
    [k: string]: unknown;
  };
} | {
  transfer_from: {
    amount: Uint128;
    owner: string;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  send_from: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
    [k: string]: unknown;
  };
} | {
  burn_from: {
    amount: Uint128;
    owner: string;
    [k: string]: unknown;
  };
} | {
  mint: {
    amount: Uint128;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  update_marketing: {
    description?: string | null;
    marketing?: string | null;
    project?: string | null;
    [k: string]: unknown;
  };
} | {
  upload_logo: Logo;
};
export type Binary = string;
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export interface DownloadLogoResponse {
  data: Binary;
  mime_type: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  decimals: number;
  initial_balances: Cw20Coin[];
  marketing?: InstantiateMarketingInfo | null;
  mint?: MinterResponse | null;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
  [k: string]: unknown;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
  [k: string]: unknown;
}
export interface MinterResponse {
  cap?: Uint128 | null;
  minter: string;
  [k: string]: unknown;
}
export type LogoInfo = "embedded" | {
  url: string;
};
export type Addr = string;
export interface MarketingInfoResponse {
  description?: string | null;
  logo?: LogoInfo | null;
  marketing?: Addr | null;
  project?: string | null;
  [k: string]: unknown;
}
export type QueryMsg = {
  balance: {
    address: string;
    [k: string]: unknown;
  };
} | {
  token_info: {
    [k: string]: unknown;
  };
} | {
  minter: {
    [k: string]: unknown;
  };
} | {
  allowance: {
    owner: string;
    spender: string;
    [k: string]: unknown;
  };
} | {
  all_allowances: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  all_accounts: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  marketing_info: {
    [k: string]: unknown;
  };
} | {
  download_logo: {
    [k: string]: unknown;
  };
};
export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: Uint128;
  [k: string]: unknown;
}
export interface Cw20BaseReadOnlyInterface {
  contractAddress: string;
  balance: ({
    address
  }: {
    address: string;
  }) => Promise<BalanceResponse>;
  tokenInfo: () => Promise<TokenInfoResponse>;
  minter: () => Promise<MinterResponse>;
  allowance: ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }) => Promise<AllowanceResponse>;
  allAllowances: ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccounts: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfo: () => Promise<MarketingInfoResponse>;
  downloadLogo: () => Promise<DownloadLogoResponse>;
}
export class Cw20BaseQueryClient implements Cw20BaseReadOnlyInterface {
  client: LCDClient;
  contractAddress: string;

  constructor(client: LCDClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balance = this.balance.bind(this);
    this.tokenInfo = this.tokenInfo.bind(this);
    this.minter = this.minter.bind(this);
    this.allowance = this.allowance.bind(this);
    this.allAllowances = this.allAllowances.bind(this);
    this.allAccounts = this.allAccounts.bind(this);
    this.marketingInfo = this.marketingInfo.bind(this);
    this.downloadLogo = this.downloadLogo.bind(this);
  }

  balance = async ({
    address
  }: {
    address: string;
  }): Promise<BalanceResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      balance: {
        address
      }
    });
  };
  tokenInfo = async (): Promise<TokenInfoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      token_info: {}
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      minter: {}
    });
  };
  allowance = async ({
    owner,
    spender
  }: {
    owner: string;
    spender: string;
  }): Promise<AllowanceResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      allowance: {
        owner,
        spender
      }
    });
  };
  allAllowances = async ({
    limit,
    owner,
    startAfter
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<AllAllowancesResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      all_allowances: {
        limit,
        owner,
        start_after: startAfter
      }
    });
  };
  allAccounts = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<AllAccountsResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      all_accounts: {
        limit,
        start_after: startAfter
      }
    });
  };
  marketingInfo = async (): Promise<MarketingInfoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      marketing_info: {}
    });
  };
  downloadLogo = async (): Promise<DownloadLogoResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      download_logo: {}
    });
  };
}
export interface Cw20BaseInterface extends Cw20BaseReadOnlyInterface {
  contractAddress: string;
  transfer: ({
    amount,
    recipient
  }: {
    amount: string;
    recipient: string;
  }, funds?: Coins) => Promise<any>;
  burn: ({
    amount
  }: {
    amount: string;
  }, funds?: Coins) => Promise<any>;
  send: ({
    amount,
    contract,
    msg
  }: {
    amount: string;
    contract: string;
    msg: string;
  }, funds?: Coins) => Promise<any>;
  increaseAllowance: ({
    amount,
    expires,
    spender
  }: {
    amount: string;
    expires?: Expiration;
    spender: string;
  }, funds?: Coins) => Promise<any>;
  decreaseAllowance: ({
    amount,
    expires,
    spender
  }: {
    amount: string;
    expires?: Expiration;
    spender: string;
  }, funds?: Coins) => Promise<any>;
  transferFrom: ({
    amount,
    owner,
    recipient
  }: {
    amount: string;
    owner: string;
    recipient: string;
  }, funds?: Coins) => Promise<any>;
  sendFrom: ({
    amount,
    contract,
    msg,
    owner
  }: {
    amount: string;
    contract: string;
    msg: string;
    owner: string;
  }, funds?: Coins) => Promise<any>;
  burnFrom: ({
    amount,
    owner
  }: {
    amount: string;
    owner: string;
  }, funds?: Coins) => Promise<any>;
  mint: ({
    amount,
    recipient
  }: {
    amount: string;
    recipient: string;
  }, funds?: Coins) => Promise<any>;
  updateMarketing: ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coins) => Promise<any>;
  uploadLogo: (funds?: Coins) => Promise<any>;
}
export class Cw20BaseClient extends Cw20BaseQueryClient implements Cw20BaseInterface {
  client: LCDClient;
  wallet: Wallet | ConnectedWallet;
  contractAddress: string;

  constructor(client: LCDClient, wallet: Wallet | ConnectedWallet, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.wallet = wallet;
    this.contractAddress = contractAddress;
    this.transfer = this.transfer.bind(this);
    this.burn = this.burn.bind(this);
    this.send = this.send.bind(this);
    this.increaseAllowance = this.increaseAllowance.bind(this);
    this.decreaseAllowance = this.decreaseAllowance.bind(this);
    this.transferFrom = this.transferFrom.bind(this);
    this.sendFrom = this.sendFrom.bind(this);
    this.burnFrom = this.burnFrom.bind(this);
    this.mint = this.mint.bind(this);
    this.updateMarketing = this.updateMarketing.bind(this);
    this.uploadLogo = this.uploadLogo.bind(this);
  }

  transfer = async ({
    amount,
    recipient
  }: {
    amount: string;
    recipient: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      transfer: {
        amount,
        recipient
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  burn = async ({
    amount
  }: {
    amount: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      burn: {
        amount
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  send = async ({
    amount,
    contract,
    msg
  }: {
    amount: string;
    contract: string;
    msg: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      send: {
        amount,
        contract,
        msg
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  increaseAllowance = async ({
    amount,
    expires,
    spender
  }: {
    amount: string;
    expires?: Expiration;
    spender: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      increase_allowance: {
        amount,
        expires,
        spender
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  decreaseAllowance = async ({
    amount,
    expires,
    spender
  }: {
    amount: string;
    expires?: Expiration;
    spender: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      decrease_allowance: {
        amount,
        expires,
        spender
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  transferFrom = async ({
    amount,
    owner,
    recipient
  }: {
    amount: string;
    owner: string;
    recipient: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      transfer_from: {
        amount,
        owner,
        recipient
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  sendFrom = async ({
    amount,
    contract,
    msg,
    owner
  }: {
    amount: string;
    contract: string;
    msg: string;
    owner: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      send_from: {
        amount,
        contract,
        msg,
        owner
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  burnFrom = async ({
    amount,
    owner
  }: {
    amount: string;
    owner: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      burn_from: {
        amount,
        owner
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  mint = async ({
    amount,
    recipient
  }: {
    amount: string;
    recipient: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      mint: {
        amount,
        recipient
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  updateMarketing = async ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      update_marketing: {
        description,
        marketing,
        project
      }
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
  uploadLogo = async (funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      upload_logo: {}
    }, funds);

    if (isConnectedWallet(this.wallet)) {
      const tx = await this.wallet.post({
        msgs: [execMsg]
      });
      return waitForInclusionInBlock(this.client, tx.result.txhash);
    } else {
      const execTx = await this.wallet.createAndSignTx({
        msgs: [execMsg]
      });
      return this.client.tx.broadcast(execTx);
    }
  };
}
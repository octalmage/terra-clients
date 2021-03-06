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
export type ExecuteMsg = {
  propose: {
    description: string;
    latest?: Expiration | null;
    msgs: CosmosMsgForEmpty[];
    title: string;
    [k: string]: unknown;
  };
} | {
  vote: {
    proposal_id: number;
    vote: Vote;
    [k: string]: unknown;
  };
} | {
  execute: {
    proposal_id: number;
    [k: string]: unknown;
  };
} | {
  close: {
    proposal_id: number;
    [k: string]: unknown;
  };
};
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
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  wasm: WasmMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type Vote = "yes" | "no" | "abstain" | "veto";
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export type Duration = {
  height: number;
} | {
  time: number;
};
export type Threshold = {
  absolute_count: {
    weight: number;
    [k: string]: unknown;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
    [k: string]: unknown;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
    [k: string]: unknown;
  };
};
export type Decimal = string;
export interface InstantiateMsg {
  max_voting_period: Duration;
  threshold: Threshold;
  voters: Voter[];
  [k: string]: unknown;
}
export interface Voter {
  addr: string;
  weight: number;
  [k: string]: unknown;
}
export type Status = "pending" | "open" | "rejected" | "passed" | "executed";
export type ThresholdResponse = {
  absolute_count: {
    total_weight: number;
    weight: number;
    [k: string]: unknown;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
    total_weight: number;
    [k: string]: unknown;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
    total_weight: number;
    [k: string]: unknown;
  };
};
export interface ListProposalsResponse {
  proposals: ProposalResponseForEmpty[];
  [k: string]: unknown;
}
export interface ProposalResponseForEmpty {
  description: string;
  expires: Expiration;
  id: number;
  msgs: CosmosMsgForEmpty[];
  status: Status;
  threshold: ThresholdResponse;
  title: string;
  [k: string]: unknown;
}
export interface ListVotersResponse {
  voters: VoterDetail[];
  [k: string]: unknown;
}
export interface VoterDetail {
  addr: string;
  weight: number;
  [k: string]: unknown;
}
export interface ListVotesResponse {
  votes: VoteInfo[];
  [k: string]: unknown;
}
export interface VoteInfo {
  proposal_id: number;
  vote: Vote;
  voter: string;
  weight: number;
  [k: string]: unknown;
}
export interface ProposalResponse {
  description: string;
  expires: Expiration;
  id: number;
  msgs: CosmosMsgForEmpty[];
  status: Status;
  threshold: ThresholdResponse;
  title: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  threshold: {
    [k: string]: unknown;
  };
} | {
  proposal: {
    proposal_id: number;
    [k: string]: unknown;
  };
} | {
  list_proposals: {
    limit?: number | null;
    start_after?: number | null;
    [k: string]: unknown;
  };
} | {
  reverse_proposals: {
    limit?: number | null;
    start_before?: number | null;
    [k: string]: unknown;
  };
} | {
  vote: {
    proposal_id: number;
    voter: string;
    [k: string]: unknown;
  };
} | {
  list_votes: {
    limit?: number | null;
    proposal_id: number;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  voter: {
    address: string;
    [k: string]: unknown;
  };
} | {
  list_voters: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
};
export interface ReverseProposalsResponse {
  proposals: ProposalResponseForEmpty[];
  [k: string]: unknown;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
  [k: string]: unknown;
}
export interface VoterResponse {
  weight?: number | null;
  [k: string]: unknown;
}
export interface Cw3FixedMultisigReadOnlyInterface {
  contractAddress: string;
  threshold: () => Promise<ThresholdResponse>;
  proposal: ({
    proposalId
  }: {
    proposalId: number;
  }) => Promise<ProposalResponse>;
  listProposals: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<ListProposalsResponse>;
  reverseProposals: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }) => Promise<ReverseProposalsResponse>;
  getVote: ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }) => Promise<VoteResponse>;
  listVotes: ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }) => Promise<ListVotesResponse>;
  voter: ({
    address
  }: {
    address: string;
  }) => Promise<VoterResponse>;
  listVoters: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListVotersResponse>;
}
export class Cw3FixedMultisigQueryClient implements Cw3FixedMultisigReadOnlyInterface {
  client: LCDClient;
  contractAddress: string;

  constructor(client: LCDClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.threshold = this.threshold.bind(this);
    this.proposal = this.proposal.bind(this);
    this.listProposals = this.listProposals.bind(this);
    this.reverseProposals = this.reverseProposals.bind(this);
    this.getVote = this.getVote.bind(this);
    this.listVotes = this.listVotes.bind(this);
    this.voter = this.voter.bind(this);
    this.listVoters = this.listVoters.bind(this);
  }

  threshold = async (): Promise<ThresholdResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      threshold: {}
    });
  };
  proposal = async ({
    proposalId
  }: {
    proposalId: number;
  }): Promise<ProposalResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      proposal: {
        proposal_id: proposalId
      }
    });
  };
  listProposals = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<ListProposalsResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      list_proposals: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseProposals = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: number;
  }): Promise<ReverseProposalsResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      reverse_proposals: {
        limit,
        start_before: startBefore
      }
    });
  };
  getVote = async ({
    proposalId,
    voter
  }: {
    proposalId: number;
    voter: string;
  }): Promise<VoteResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        voter
      }
    });
  };
  listVotes = async ({
    limit,
    proposalId,
    startAfter
  }: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  }): Promise<ListVotesResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      list_votes: {
        limit,
        proposal_id: proposalId,
        start_after: startAfter
      }
    });
  };
  voter = async ({
    address
  }: {
    address: string;
  }): Promise<VoterResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      voter: {
        address
      }
    });
  };
  listVoters = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListVotersResponse> => {
    return this.client.wasm.contractQuery(this.contractAddress, {
      list_voters: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface Cw3FixedMultisigInterface extends Cw3FixedMultisigReadOnlyInterface {
  contractAddress: string;
  propose: ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, funds?: Coins) => Promise<any>;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: string;
  }, funds?: Coins) => Promise<any>;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coins) => Promise<any>;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coins) => Promise<any>;
}
export class Cw3FixedMultisigClient extends Cw3FixedMultisigQueryClient implements Cw3FixedMultisigInterface {
  client: LCDClient;
  wallet: Wallet | ConnectedWallet;
  contractAddress: string;

  constructor(client: LCDClient, wallet: Wallet | ConnectedWallet, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.wallet = wallet;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
  }

  propose = async ({
    description,
    latest,
    msgs,
    title
  }: {
    description: string;
    latest?: Expiration;
    msgs: CosmosMsgForEmpty[];
    title: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      propose: {
        description,
        latest,
        msgs,
        title
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
  vote = async ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: string;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        vote
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
  execute = async ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      execute: {
        proposal_id: proposalId
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
  close = async ({
    proposalId
  }: {
    proposalId: number;
  }, funds?: Coins): Promise<WaitTxBroadcastResult | TxInfo | undefined> => {
    const senderAddress = isConnectedWallet(this.wallet) ? this.wallet.walletAddress : this.wallet.key.accAddress;
    const execMsg = new MsgExecuteContract(senderAddress, this.contractAddress, {
      close: {
        proposal_id: proposalId
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
}
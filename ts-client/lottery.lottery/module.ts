// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgBuyLottery } from "./types/lottery/lottery/tx";
import { MsgUpdateBet } from "./types/lottery/lottery/tx";
import { MsgDeleteBet } from "./types/lottery/lottery/tx";
import { MsgCreateBet } from "./types/lottery/lottery/tx";


export { MsgBuyLottery, MsgUpdateBet, MsgDeleteBet, MsgCreateBet };

type sendMsgBuyLotteryParams = {
  value: MsgBuyLottery,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateBetParams = {
  value: MsgUpdateBet,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteBetParams = {
  value: MsgDeleteBet,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateBetParams = {
  value: MsgCreateBet,
  fee?: StdFee,
  memo?: string
};


type msgBuyLotteryParams = {
  value: MsgBuyLottery,
};

type msgUpdateBetParams = {
  value: MsgUpdateBet,
};

type msgDeleteBetParams = {
  value: MsgDeleteBet,
};

type msgCreateBetParams = {
  value: MsgCreateBet,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgBuyLottery({ value, fee, memo }: sendMsgBuyLotteryParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBuyLottery: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBuyLottery({ value: MsgBuyLottery.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBuyLottery: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateBet({ value, fee, memo }: sendMsgUpdateBetParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateBet: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateBet({ value: MsgUpdateBet.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateBet: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteBet({ value, fee, memo }: sendMsgDeleteBetParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteBet: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteBet({ value: MsgDeleteBet.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteBet: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateBet({ value, fee, memo }: sendMsgCreateBetParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateBet: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateBet({ value: MsgCreateBet.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateBet: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgBuyLottery({ value }: msgBuyLotteryParams): EncodeObject {
			try {
				return { typeUrl: "/lottery.lottery.MsgBuyLottery", value: MsgBuyLottery.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBuyLottery: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateBet({ value }: msgUpdateBetParams): EncodeObject {
			try {
				return { typeUrl: "/lottery.lottery.MsgUpdateBet", value: MsgUpdateBet.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateBet: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteBet({ value }: msgDeleteBetParams): EncodeObject {
			try {
				return { typeUrl: "/lottery.lottery.MsgDeleteBet", value: MsgDeleteBet.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteBet: Could not create message: ' + e.message)
			}
		},
		
		msgCreateBet({ value }: msgCreateBetParams): EncodeObject {
			try {
				return { typeUrl: "/lottery.lottery.MsgCreateBet", value: MsgCreateBet.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateBet: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			LotteryLottery: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;
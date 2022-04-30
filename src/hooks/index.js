import { ethers } from "ethers";
import { useCall, useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { WAFFLETOKEN_ADDRESS } from "../constants/strings";
import WAFFLETOKEN_ABI from "../constants/waffle-token.abi.json";

const simpleContractInterface = new ethers.utils.Interface(WAFFLETOKEN_ABI);
const contract = new Contract(WAFFLETOKEN_ADDRESS, simpleContractInterface);

export const useBalanceOf = (address) => {
  const res = useCall({
    contract: contract,
    method: "balanceOf",
    args: [address],
  });

  return res ? ethers.utils.formatEther(res.value[0]) : 0;
}

export const useMint = (address, amount) => {
  const { state, send } = useContractFunction(contract, "mint", { receiver: address, amount: amount });
  return { state, send };
}

export const useTransfer = (address, amount) => {
  const { state, send } = useContractFunction(contract, "transfer", { recipient: address, amount: amount });
  return { state, send };
}
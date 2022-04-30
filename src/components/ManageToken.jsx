import { ethers } from "ethers";
import { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import { Link, Stack } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useBalanceOf, useMint, useTransfer } from '../hooks'
import ConnectWallet from '../components/ConnectWallet'
import { CHAIN_ID, CHAIN_NAME } from '../constants/strings'

const ManageToken = ({ 
  activateBrowserWallet,
  deactivate,
  account,
  chainId,
  switchNetwork,
  error
}) => {
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState(0)
  const [minting, setMinting] = useState(false)
  const [transfering, setTransfering] = useState(false)
  const balance = useBalanceOf(account)

  const { state: mintState, send: mint } = useMint();
  const { state: transferState, send: transfer } = useTransfer();

  const { enqueueSnackbar } = useSnackbar();

  function handleAddress (e) {
    setAddress(e.target.value)
  } 

  function handleAmount (e) { 
    setAmount(Number(e.target.value))
  } 

  async function changeNetwork () {
    switchNetwork(CHAIN_ID)
  }

  async function handleMint () {   
    setMinting(true) 
    await mint(address, ethers.utils.parseEther(String(amount)))
    setMinting(false) 
    enqueueSnackbar('Minted successfully!', { variant: 'success' });
  }

  async function handleTransfer () {    
    setTransfering(true)
    await transfer(address, ethers.utils.parseEther(String(amount)))
    setTransfering(false)
    enqueueSnackbar('Transfered successfully!', { variant: 'success' });
  }

  return (
    <Stack spacing={3}>
      <Input required placeholder="Enter the target address" value={address} onChange={handleAddress} />
      <Input required type="number" inputProps={{ min: 0 }} placeholder="Enter the amount" value={amount} onChange={handleAmount} />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {account ? (
          chainId === CHAIN_ID ? (
            <>
              <Button 
                variant="contained" 
                onClick={handleMint} 
                disabled={address.length === 0 || amount <= 0 || minting}
              >
                {minting ? `Minting...` : `Mint`}
              </Button>
              
              <Button 
                variant="contained" 
                onClick={handleTransfer} 
                disabled={balance <= 0 || address.length === 0 || amount <= 0 || transfering}
              >
                {transfering ? `Transfering...` : `Transfer`}
              </Button>  
            </>
          ) : (
            <Button variant="contained" color="warning" onClick={changeNetwork}>
              {`Switch Network to ${CHAIN_NAME}`}
            </Button>
          )
        ) : (
          error ? (
            <Link 
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Please install Metamask.
            </Link>
          ) : (
            <ConnectWallet 
              activateBrowserWallet={activateBrowserWallet} 
              deactivate={deactivate} 
              account={account}
            />
          )
        )}
      </Stack>
    </Stack>     
  )
}

export default ManageToken
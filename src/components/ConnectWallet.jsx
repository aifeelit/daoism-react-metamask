import Button from '@mui/material/Button';

import imgMetamask from '../assets/images/metamask.png'

const ConnectWallet = ({
  activateBrowserWallet,
  deactivate,
  account
}) => {
  return (
    <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={account ? deactivate : activateBrowserWallet}>
      {account ? (
        <span style={{ textTransform: 'none' }}>{`${account.substring(0, 6)}...${account.substr(-4)}`}</span>
      ) : (
        <>
          <img src={imgMetamask} width="30" height="30" alt="" />
          <span style={{ paddingLeft: 6 }}>Connect Wallet</span>  
        </>
      )}
    </Button>
  )
}

export default ConnectWallet
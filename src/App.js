import * as React from 'react';
import { useState, useEffect } from 'react'
import { useEthers } from "@usedapp/core";
import AppBar from '@mui/material/AppBar';

import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';

import ConnectWallet from './components/ConnectWallet'
import Profile from './components/Profile'
import ManageToken from './components/ManageToken'

import imgLogo from './assets/images/logo.png'
import imgWaffle from './assets/images/waffle.png'

function App() {
  const { chainId, activateBrowserWallet, deactivate, account, switchNetwork, error } = useEthers();

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img src={imgLogo} width="114" height="43" alt="" style={{ marginRight: 'auto', cursor: 'pointer' }} />
          <ConnectWallet 
            activateBrowserWallet={activateBrowserWallet} 
            deactivate={deactivate} 
            account={account}             
          />
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 4 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ marginBottom: 4 }}>
          <img src={imgWaffle} width="100" height="100" alt="" />
          <Typography 
            color="text.primary" 
            sx={(theme) => ({ 
              fontWeight: 'bold',
              [theme.breakpoints.down("sm")]: { fontSize: '34px' },
              [theme.breakpoints.up("sm")]: { fontSize: '44px' }
            }) }
          >
            Waffle Token
          </Typography>
        </Stack>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="sm" component="main">
        <Card sx={{ p: 4, boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
          <Profile account={account} />
          <ManageToken 
            activateBrowserWallet={activateBrowserWallet}
            deactivate={deactivate}
            account={account}
            chainId={chainId}
            switchNetwork={switchNetwork}
            error={error}
          />
        </Card>
      </Container>
    </>
  );
}

export default App
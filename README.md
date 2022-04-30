# Daoism Systems Front-end Engineer Technical Challenge 

This technical challenge will evaluate:

- 🚀 best practices for React
- 🛸 ability to implement web3 technologies such as calling a Solidity contract from UI or minting a token

## Overview
The applicant will be tasked with the creation of a simple React app that connects to a [Metamask](https://metamask.io/) wallet and calls a Solidity contract function with the help of [useDapp](https://usedapp.io/) hook.

## Requirements
- a `<Profile />` component should either display a wallet address and a token balance if the user is connected to the wallet, or display a "connect to wallet" button
- a `<Transfer />` component that contains a form with 2 inputs: "to" (address) and "amount" that allows for a token to be sent to the specified address
- a `<Mint />` component that contains a form with 2 inputs: "to" (address) and "amount" that allows generating tokens for the set address
- https://create-react-app.dev/ may be used as a boilerplate or similar
- using any CSS framework is a plus
- error handling
- tests (_optional_, but a big plus)
- any token can be used or [0x9ed2135850920ba65566d010b947b49e88651675](https://rinkeby.etherscan.io/address/0x9ed2135850920ba65566d010b947b49e88651675#code)

## How to start
npm install
npm start

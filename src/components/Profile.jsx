import { useBalanceOf } from '../hooks'
import Input from '@mui/material/Input'
import { Stack } from '@mui/material'

const DataForm = ({ label, value }) => (
  <Stack direction="row" alignItems="center" spacing={1} my={2}>
    <label>{label}</label>
    <Input type="text" value={value} readOnly disableUnderline sx={{ flex: 1 }} />
  </Stack>
)

const Profile  = ({ account }) => {
  const tokenBalance = useBalanceOf(account)

  return (
    <>
      {account ? <DataForm label="Your account: " value={account} /> : ``}
      {account ? <DataForm label="Your token balance: " value={tokenBalance} /> : ``}
    </>
  )
}

export default Profile
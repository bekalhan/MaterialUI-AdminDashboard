import {Box} from '@mui/material';
import Header from '../../components/Header';

const index = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
       <Header title="DASHBOARD" subtitle="welcome to your dashboard" />
      </Box>
    </Box>
  )
}

export default index
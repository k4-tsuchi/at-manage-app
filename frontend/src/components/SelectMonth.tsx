
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import { Box, Container } from '@mui/material';

interface Props {
  month: string,
}

const SelectMonth: React.FC<Props> = (props) => {

  const arrowStyle = {
    fontSize: '2rem',
    border: '1px solid #E0E0E0',
    borderRadius: 1,
    boxShadow: 1,
    m: 2,
  }

  const monthStyle = {
    fontSize: '1.2rem',
    border: '1px solid #E0E0E0',
    borderRadius: 1,
    boxShadow: 1,
    m: 1,
    p: 1
  }

  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      alineItems: 'center',
      m:1
    }}>
      <ArrowLeftIcon sx={arrowStyle} />
      <Box sx={monthStyle}>{props.month}</Box>
      <ArrowRightIcon sx={arrowStyle}/>
    </Box>
  )
}

export default SelectMonth;
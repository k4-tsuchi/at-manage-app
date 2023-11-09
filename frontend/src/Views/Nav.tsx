
import { useSetAtom } from 'jotai';
import { modeAtom } from '../Atom/atoms';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Nav = () => {

  const setMode = useSetAtom(modeAtom)

  return (
    <nav className='fixed top-auto bottom-0 left-0 w-full z-50'>
      <ul className='flex bg-ryuhow-blue justify-around'>
        <li onClick={() => setMode('TIMER')}><AccessTimeIcon sx={{ fontSize: 60, color: '#fff', padding: 0.6 }}/></li>
        <li onClick={() => setMode('ASSIGNMENT')}><AssignmentIcon sx={{ fontSize: 60, color: '#fff', padding: 0.6 }}/></li>
      </ul>
    </nav>
  )
}

export default Nav;
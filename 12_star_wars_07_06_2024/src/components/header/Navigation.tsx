import { FC } from 'react'
import { navItems } from '../../utils/constants'
import NavItem from './NavItem'


//const Navigation: FC<{ setPage: (newValue: string) => void }> = ({ setPage }) =>  {
  const Navigation: FC = () =>  {
  return (
    <nav>
      <ul>
        { navItems.map(title => (
        /*<NavItem key={title} title={title} setPage={setPage}/> */
          <NavItem key={title} title={title} /> 
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

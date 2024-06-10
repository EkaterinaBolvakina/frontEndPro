import  { FC, useContext } from 'react'
import { PageContext } from '../../App'

// const NavItem: FC<{ title: string, setPage: (newValue: string) => void }> = ({title, setPage}) => {
  const NavItem: FC<{ title: string }> = ({title}) => {
  const change = useContext(PageContext) // 3. Kontext erhalten
  return (
    <li onClick={() => change?.setPage!(title)} className="commonButton"> {title} </li>
  )
}

export default NavItem
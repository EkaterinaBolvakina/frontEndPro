import { FC } from 'react'
import Navigation from './Navigation'

const Header: FC = () => {
    return (
        <>
            <header className='header'>
                <Navigation />
                <h1 className='headerTitle'>City Outlet</h1>
            </header>
        </>
    )
}

export default Header

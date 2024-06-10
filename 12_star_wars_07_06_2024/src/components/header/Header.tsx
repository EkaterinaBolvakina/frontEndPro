import { FC } from 'react'
import Navigation from './Navigation'

//const Header: FC<{ setPage: (newValue: string) => void }> = ({ setPage }) => {
const Header: FC = () => {
    return (
        <>
            <header>
                {/* <Navigation setPage={setPage} /> */}
                <Navigation />
                <h1>Luke Skywalker</h1>
            </header>
        </>
    )
}

export default Header

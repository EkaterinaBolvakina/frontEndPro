import { FC, useContext } from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import { PageContext } from '../../App'
import { navItems } from '../../utils/constants'
import Contact from '../Contact'


//const Main: FC<{ page:string }> = () => {
const Main: FC = () => {
  const context = useContext(PageContext);
  if (!context) return null; // Frühes Rückgabestatement

  const renderContent = () => {
    switch (context.page) {
      case navItems[0]:
        return (
          <>
            <section className="left">
              <Hero />
            </section>
            <section className="right">
              <h2>Dream Team</h2>
              <DreamTeam />
            </section>
            <FarGalaxy />
          </>
        )
      case navItems[1]:
        return <div>About me - Page Content</div>;
      case navItems[2]:
        return <div>Star Wars -  Page Content</div>;
      case navItems[3]:
        return <div><Contact /></div>;
      default:
        return (
          <>
            <section className="left">
              <Hero />
            </section>
            <section className="right">
              <h2>Dream Team</h2>
              <DreamTeam />
            </section>
            <FarGalaxy />
          </>
        )
    }
  }

  return (
    <>
      <main>
        {renderContent()}
      </main>
    </>
  )
}

export default Main
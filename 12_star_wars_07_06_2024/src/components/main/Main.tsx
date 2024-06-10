import { FC, useContext } from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import { PageContext } from '../../App'


//const Main: FC<{ page:string }> = () => {
const Main: FC = () => {
  const context = useContext(PageContext);
  if (!context) return null; // Frühes Rückgabestatement

  const renderContent = () => {
    switch (context.page) {
      case 'Home':
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
      case 'About me':
        return <div>About me - Page Content</div>;
      case 'Star Wars':
        return <div>Star Wars -  Page Content</div>;
      case 'Contact':
        return <div>Contact -  Page Content</div>;
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
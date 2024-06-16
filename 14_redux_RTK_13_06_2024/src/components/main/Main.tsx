import { FC, useContext } from 'react'
import { PageContext } from '../../App'
import { navItems } from '../../utils/constants'
import Sandwich from './Sandwich'
import Library from './Library'
import Counter from './Counter'


const Main: FC = () => {
  const context = useContext(PageContext);
  if (!context) return null; // Frühes Rückgabestatement

  const renderContent = () => {
    switch (context.page) {
      case navItems[0]:
        return (
          <>
            <section className="left">
              <Sandwich />
            </section>
          </>
        )
      case navItems[1]:
        return <div><Library /></div>;
      case navItems[2]:
        return <div><Counter /></div>;
      default:
        return (
          <>
            <section className="left">
              <Sandwich />
            </section>
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
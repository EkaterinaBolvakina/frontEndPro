import React from 'react'
import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'


const Main = () => {
  return (
    <>
      <main>
        <section className="left">
          <Hero />
        </section>
        <section className="right">
          <h2>Dream Team</h2>
          <DreamTeam />
        </section>
        <FarGalaxy />
      </main>
    </>
  )
}

export default Main
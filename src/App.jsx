import Hero from "./components/Hero.jsx"
import Highlights from "./components/Highlights.jsx"
import Navbar from "./components/Navbar.jsx"
import PhoneModel from "./components/PhoneModel.jsx"

import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <PhoneModel /> 
    </main>
  )
}

export default Sentry.withProfiler(App)
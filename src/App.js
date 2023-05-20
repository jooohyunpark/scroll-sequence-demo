import React from 'react'
import '@/styles/main.scss'

import ScrollSection from './components/ScrollSection'

const App = () => {
  return (
    <div>
      <h1>🎵</h1>

      <div style={{ width: '100%', height: '100vh', background: 'orange' }} />

      <ScrollSection />

      <div style={{ width: '100%', height: '100vh', background: 'orange' }} />
    </div>
  )
}

export default App

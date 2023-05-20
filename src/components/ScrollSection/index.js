import React from 'react'
import ScrollModule from './ScrollModule'

export default function () {
  return (
    <section>
      <ScrollModule
        frameCount={147}
        indexNumberLength={4}
        firstFrameIndex={1}
        dimension={{ width: 1158, height: 770 }}
        path="hero_desktop_"
        startAt={0}
        endAt={0.85}
      />
    </section>
  )
}

import React from 'react'
import Section from '../partials/Section'
import ScrollModule from './ScrollModule'

export default function () {
  return (
    <Section paddingY={{ top: false, bottom: true }}>
      <ScrollModule
        frameCount={301}
        indexNumberLength={5}
        firstFrameIndex={0}
        dimension={{ width: 1280, height: 573 }}
        path="hero_desktop_"
        startAt={0}
        endAt={0.85}
      />
    </Section>
  )
}

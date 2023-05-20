import React from 'react'
import ScrollModule from './ScrollModule'

export default function () {
  return (
    <section>
      <ScrollModule
        sequenceConfig={{
          firstFrameIndex: 1,
          frameCount: 147,
          dimension: { width: 1158, height: 770 },
          path: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/',
          startAt: 0,
          endAt: 0.8,
          indexPadLength: 4
        }}
      />
    </section>
  )
}

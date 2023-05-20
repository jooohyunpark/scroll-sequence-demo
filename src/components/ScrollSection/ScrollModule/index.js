import React, { useRef, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import {
  useTransform,
  useScroll,
  easeInOut,
  useMotionValueEvent
} from 'framer-motion'

import {
  ScrollLayout,
  StickyContainerLayout,
  Canvas,
  H1Container,
  H1
} from './styles'

const ScrollModule = ({
  sequenceConfig = {
    frameCount: 150,
    dimension: { width: 1280, height: 720 },
    path: '',
    startAt: 0,
    endAt: 1,
    indexPadLength: 4,
    firstFrameIndex: 0
  }
}) => {
  const {
    frameCount,
    dimension,
    path,
    startAt,
    endAt,
    indexPadLength,
    firstFrameIndex
  } = sequenceConfig

  const ref = useRef(null)
  const canvasRef = useRef(null)
  const imageArrayRef = useRef(new Array(frameCount))

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const currentFrame = index =>
    `${path}${index.toString().padStart(indexPadLength, '0')}.jpg`

  // Create image elements
  const loadImage = i =>
    new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = currentFrame(i)
    })

  // preloads all images as Promise to the imgArrayRef
  const preloadImages = () => {
    for (let i = firstFrameIndex; i < frameCount + firstFrameIndex; i += 1) {
      if (imageArrayRef.current[i]) continue // eslint-disable-line
      imageArrayRef.current[i] = loadImage(i)
    }
  }

  console.log(imageArrayRef.current)

  const updateImage = async (index, canvas) => {
    if (!imageArrayRef.current[index]) {
      imageArrayRef.current[index] = loadImage(index)
    }

    const currentImage = await imageArrayRef.current[index]

    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(currentImage, 0, 0)
  }

  useEffect(() => {
    preloadImages()

    updateImage(firstFrameIndex, canvasRef.current)
  }, [])

  const mappedScrollProgress = useTransform(
    scrollYProgress,
    [startAt, endAt],
    [0, 1]
  )

  useMotionValueEvent(mappedScrollProgress, 'change', value => {
    const frameIndex =
      Math.min(frameCount - 1, Math.ceil(value * frameCount)) + firstFrameIndex

    updateImage(frameIndex, canvasRef.current)
  })

  //
  const opacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.9, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut
    }
  )
  const scale = useTransform(scrollYProgress, [0.6, 0.9, 1], [1, 1.1, 5], {
    ease: easeInOut
  })

  return (
    <ScrollLayout ref={ref} $height={'300vh'}>
      <StickyContainerLayout>
        <Canvas
          ref={canvasRef}
          width={dimension.width}
          height={dimension.height}
        />

        <H1Container>
          <H1 style={{ opacity, scale }}>Scoll sequence is cool</H1>
        </H1Container>
      </StickyContainerLayout>
    </ScrollLayout>
  )
}

export default ScrollModule

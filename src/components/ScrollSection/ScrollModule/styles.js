import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { MediaAbove } from '../../../styles/mixins'

export const ScrollLayout = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  background: white;
`

export const StickyContainerLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`

export const H1Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HeadlineH1 = styled(motion.h1)`
  color: black;
  white-space: pre;
`

export const Headline1 = styled(motion.div)``

export const Headline2 = styled(motion.div)``

import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ScrollLayout = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  background: black;
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
  object-fit: contain;
  position: relative;
  max-width: 1000px;
`

export const H1Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const H1 = styled(motion.h1)`
  font-size: 80px;
  white-space: pre;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`

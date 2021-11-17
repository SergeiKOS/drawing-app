import { useState, useEffect, useRef } from 'react'
import ClearCanvasBtn from './ClearCanvasBtn'
import EraseBtn from './EraseBtn'
import LineWidthControl from './LineWidthControl'

const Canvas = () => {
  const [lineWidth, setLineWidth] = useState(10)
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight

    const ctx = canvas.getContext('2d')
    contextRef.current = ctx
  }, [])
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = 'black'
    ctx.lineWidth = lineWidth
  }, [lineWidth])

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const drawing = (e) => {
    if (!isDrawing) return

    const { offsetX, offsetY } = e.nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const submitWidth = (e) => {
    e.preventDefault()
  }

  const handleWidthChange = (e) => {
    setLineWidth(e.target.value)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  const handleErase = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = 'white'
  }

  return (
    <>
      <ClearCanvasBtn onClearCanvas={clearCanvas} />
      <EraseBtn onErase={handleErase} />
      <LineWidthControl
        submitWidth={submitWidth}
        handleWidthChange={handleWidthChange}
        lineWidth={lineWidth}
      />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        ref={canvasRef}
      />
    </>
  )
}

export default Canvas

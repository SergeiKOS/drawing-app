import { useState, useEffect, useRef } from 'react'
import { ChromePicker } from 'react-color'

import ClearCanvasBtn from './ClearCanvasBtn'
import EraseBtn from './EraseBtn'
import LineBtn from './LineBtn'
import ThicknessControl from './ThicknessControl'
import ShowColorBtn from './ShowColorBtn'

const Canvas = () => {
  const [thicknessControl, setThicknessControl] = useState(3)
  const [eraserThicknessControl, setEraserThicknessControl] = useState(10)
  const [lineColor, setLineColor] = useState('#000000')
  const [isDrawing, setIsDrawing] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [eraserOn, setEraserOn] = useState(false)
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
    if (eraserOn) {
      ctx.strokeStyle = 'white'
      ctx.lineWidth = eraserThicknessControl
    }
  }, [eraserThicknessControl, eraserOn])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = lineColor
    ctx.lineWidth = thicknessControl
  }, [thicknessControl, lineColor])

  const startDrawing = (e) => {
    let { offsetX, offsetY } = e.nativeEvent
    if (e.touches) {
      offsetX = e.touches[0].clientX
      offsetY = e.touches[0].clientY
    }
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)

    showColorPicker && handlePickColor()
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const drawing = (e) => {
    if (!isDrawing) return

    let { offsetX, offsetY } = e.nativeEvent
    if (e.touches) {
      offsetX = e.touches[0].clientX
      offsetY = e.touches[0].clientY
    }

    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const submitWidth = (e) => {
    e.preventDefault()
  }

  const handleWidthChange = (e) => {
    if (!eraserOn) {
      setThicknessControl(Number(e.target.value))
    } else {
      setEraserThicknessControl(Number(e.target.value))
    }
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
    setEraserOn(true)
  }

  const handleLine = () => {
    setEraserOn(false)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = lineColor
    ctx.lineWidth = thicknessControl
  }

  const handleColorChange = (color) => {
    setLineColor(color.hex)
  }

  const handlePickColor = () => {
    setShowColorPicker(!showColorPicker)
  }

  return (
    <div className="canvas-wrapper">
      <h1 className="visually-hidden">Drawing superstar canvas</h1>
      <ul className="settings-list">
        <li>
          <ClearCanvasBtn onClearCanvas={clearCanvas} />
        </li>
        <li>
          {eraserOn ? (
            <LineBtn onLine={handleLine} />
          ) : (
            <EraseBtn onErase={handleErase} />
          )}
        </li>
        <li>
          <ThicknessControl
            submitWidth={submitWidth}
            onWidthChange={handleWidthChange}
            thicknessControl={thicknessControl}
            eraserThicknessControl={eraserThicknessControl}
            eraserOn={eraserOn}
          />
        </li>
        <li>
          <ShowColorBtn
            onPickColor={handlePickColor}
            showColorPicker={showColorPicker}
          />
          {showColorPicker && (
            <ChromePicker
              className="color-picker"
              color={lineColor}
              onChangeComplete={handleColorChange}
            />
          )}
        </li>
      </ul>

      <canvas
        onMouseDown={startDrawing}
        onTouchStart={startDrawing}
        onMouseUp={finishDrawing}
        onTouchEnd={finishDrawing}
        onMouseMove={drawing}
        onTouchMove={drawing}
        ref={canvasRef}
      />
    </div>
  )
}

export default Canvas

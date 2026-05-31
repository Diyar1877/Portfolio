import { useEffect, useRef } from 'react'

const GLYPHS = '01ABCDEF$#<>/'.split('')

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let columns = []
    let frame = 0

    const setupColumns = () => {
      const fontSize = window.innerWidth < 768 ? 12 : 14
      const columnCount = Math.ceil(canvas.width / (fontSize * 2.8))

      ctx.font = `${fontSize}px var(--font-mono), monospace`
      columns = Array.from({ length: columnCount }, (_, index) => ({
        x: index * fontSize * 1.6,
        y: Math.random() * -canvas.height,
        speed: fontSize * (0.1 + Math.random() * 0.08),
        length: 5 + Math.floor(Math.random() * 8),
        fontSize,
      }))
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setupColumns()
    }

    const drawColumn = column => {
      for (let offset = 0; offset < column.length; offset += 1) {
        const y = column.y - offset * column.fontSize * 1.15

        if (y < -column.fontSize || y > canvas.height + column.fontSize) {
          continue
        }

        const opacity = Math.max(0, 0.26 - offset * 0.028)
        ctx.fillStyle = `rgba(255, 40, 40, ${opacity})`
        ctx.fillText(GLYPHS[(offset + frame + Math.floor(column.x)) % GLYPHS.length], column.x, y)
      }
    }

    const animate = () => {
      frame += 1
      ctx.fillStyle = 'rgba(5, 0, 0, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      columns.forEach(column => {
        drawColumn(column)
        column.y += column.speed

        if (column.y - column.length * column.fontSize > canvas.height && Math.random() > 0.993) {
          column.y = Math.random() * -canvas.height * 0.6
          column.speed = column.fontSize * (0.1 + Math.random() * 0.08)
          column.length = 5 + Math.floor(Math.random() * 8)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.32,
        mixBlendMode: 'screen',
      }}
    />
  )
}

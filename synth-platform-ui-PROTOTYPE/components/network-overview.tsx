"use client"

import { useEffect, useRef } from "react"

export default function NetworkOverview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight

      drawNetwork(ctx, canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation
    let animationFrame: number
    const animate = () => {
      drawNetwork(ctx, canvas.width, canvas.height)
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const drawNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height)

    // Center point (fog coordinator)
    const centerX = width / 2
    const centerY = height / 2

    // Draw connections
    ctx.strokeStyle = "rgba(99, 102, 241, 0.3)"
    ctx.lineWidth = 1

    // Generate some random nodes
    const nodeCount = 20
    const radius = Math.min(width, height) * 0.4
    const nodes: { x: number; y: number; type: string }[] = []

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const distance = radius * (0.6 + Math.random() * 0.4)
      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance

      // Randomly assign node types
      const types = ["device", "device", "device", "edge", "edge", "cloud"]
      const type = types[Math.floor(Math.random() * types.length)]

      nodes.push({ x, y, type })

      // Draw connection to center
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Draw connections between some nodes
      if (i > 0 && Math.random() > 0.5) {
        const prevNode = nodes[Math.floor(Math.random() * i)]
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(prevNode.x, prevNode.y)
        ctx.stroke()
      }
    }

    // Draw center node (fog coordinator)
    ctx.fillStyle = "rgba(99, 102, 241, 0.2)"
    ctx.beginPath()
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgb(99, 102, 241)"
    ctx.beginPath()
    ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
    ctx.fill()

    // Draw nodes
    nodes.forEach((node) => {
      let color
      switch (node.type) {
        case "device":
          color = "rgba(16, 185, 129, 0.7)" // Green
          break
        case "edge":
          color = "rgba(245, 158, 11, 0.7)" // Amber
          break
        case "cloud":
          color = "rgba(99, 102, 241, 0.7)" // Indigo
          break
        default:
          color = "rgba(156, 163, 175, 0.7)" // Gray
      }

      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
      ctx.fill()
    })

    // Add pulse effect to center node
    const time = Date.now() / 1000
    const pulseSize = 20 + Math.sin(time * 2) * 5

    ctx.strokeStyle = "rgba(99, 102, 241, 0.3)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
    ctx.stroke()
  }

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute bottom-2 right-2 flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-primary/70"></div>
          <span>Coordinator</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
          <span>Device</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-amber-500/70"></div>
          <span>Edge</span>
        </div>
      </div>
    </div>
  )
}


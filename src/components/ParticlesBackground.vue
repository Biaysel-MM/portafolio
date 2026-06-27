<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationId = null

onMounted(() => {
  const cvs = canvas.value
  if (!cvs) return
  const ctx = cvs.getContext('2d')
  let w, h
  const particles = []

  function resize() {
    w = window.innerWidth
    h = window.innerHeight
    cvs.width = w
    cvs.height = h
  }

  class Particle {
    constructor() {
      this.reset()
    }
    reset() {
      this.x = Math.random() * w
      this.y = Math.random() * h
      this.size = Math.random() * 2 + 0.5
      this.speedX = (Math.random() - 0.5) * 0.3
      this.speedY = (Math.random() - 0.5) * 0.3
      this.opacity = Math.random() * 0.5 + 0.1
    }
    update() {
      this.x += this.speedX
      this.y += this.speedY
      if (this.x < 0 || this.x > w) this.speedX *= -1
      if (this.y < 0 || this.y > h) this.speedY *= -1
    }
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 255, 174, ${this.opacity})`
      ctx.fill()
    }
  }

  function init() {
    resize()
    const count = Math.min(Math.floor((w * h) / 15000), 80)
    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h)
    particles.forEach(p => {
      p.update()
      p.draw()
    })
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(0, 255, 174, ${0.05 * (1 - dist / 150)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
    animationId = requestAnimationFrame(animate)
  }

  init()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas ref="canvas"
    class="fixed inset-0 pointer-events-none z-0" />
</template>

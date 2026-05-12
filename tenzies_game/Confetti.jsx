// Confetti.jsx

import { useEffect, useRef } from "react"

export default function Confetti() {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles = []

        function createConfetti() {

            for (let i = 0; i < 150; i++) {

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,

                    size: Math.random() * 8 + 4,

                    speedY: Math.random() * 3 + 2,
                    speedX: Math.random() * 2 - 1,

                    rotation: Math.random() * Math.PI * 2,

                    color: `hsl(${Math.random() * 360}, 100%, 50%)`
                })
            }
        }

        createConfetti()

        let animationId

        function render() {

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {

                ctx.save()

                ctx.translate(particle.x, particle.y)
                ctx.rotate(particle.rotation)

                ctx.fillStyle = particle.color

                ctx.fillRect(
                    -particle.size / 2,
                    -particle.size / 2,
                    particle.size,
                    particle.size
                )

                ctx.restore()

                particle.y += particle.speedY
                particle.x += particle.speedX
                particle.rotation += 0.02
            })

            animationId = requestAnimationFrame(render)
        }

        render()

        return () => {
            cancelAnimationFrame(animationId)
        }

    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 9999
            }}
        />
    )
}
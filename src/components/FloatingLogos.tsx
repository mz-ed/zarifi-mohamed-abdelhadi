import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const logos = [
  <svg key="react" viewBox="-10 -10 40 40" fill="none">
    <ellipse cx="10" cy="10" rx="8" ry="3" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
    <ellipse cx="10" cy="10" rx="8" ry="3" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 10 10)"/>
    <ellipse cx="10" cy="10" rx="8" ry="3" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 10 10)"/>
    <circle cx="10" cy="10" r="1.5" fill="#61dafb"/>
  </svg>,
  <svg key="ts" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#3178c6"/>
    <path d="M18 24.5v-4.5h4v1.5h-2.5v1h2v1.5h-2v1h2.5V27H22a2 2 0 0 1-2-2v-1.5a1 1 0 0 1 1-1h1v1h-1v1h1v1.5h-3zm-2.5-5.5h-2.5v10h-2v-10H8.5V17h7v2z" fill="#fff"/>
  </svg>,
  <svg key="py" viewBox="0 0 32 32" fill="none">
    <path d="M16 2c-1.5 0-3 .2-4.2.5-2.2.6-2.6 1.3-2.6 2.8v2h5.3v.8H7.5C5.5 8 3.9 9.2 3.5 11.3c-.5 2.5-.5 4 0 6.6.4 1.8 1.3 2.6 3.3 2.6h2.1v-3.3c0-2 1.7-3.7 3.7-3.7h5.3c1.6 0 2.9-1.3 2.9-2.9V5.3c0-1.6-1.3-2.6-2.9-3C19 2.2 17.5 2 16 2zm-2.9 2.5c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3a1.3 1.3 0 0 1 0-2.6z" fill="#4584b6"/>
    <path d="M24.5 8.2h-2.1v3.3c0 2-1.7 3.7-3.7 3.7h-5.3c-1.6 0-2.9 1.3-2.9 2.9v5.3c0 1.6 1.3 2.6 2.9 3 1.6.4 3.4.6 5.3.6 1.5 0 3-.2 4.2-.5 2.2-.6 2.6-1.3 2.6-2.8v-2h-5.3v-.8h6.6c2 0 3.6-1.2 4-3.3.5-2.5.5-4 0-6.6-.4-1.8-1.3-2.6-3.3-2.6zm-5.6 19.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3a1.3 1.3 0 0 1 0 2.6z" fill="#ffe052"/>
  </svg>,
  <svg key="js" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#f7df1e"/>
    <path d="M9 26.5l-2 1.2c-.5.3-1 0-.7-.6l1.4-2.4c.2-.4.7-.5 1-.2l.3.2c.5.3 1 .2 1.3-.2l2.3-3.5c.3-.4.8-.5 1.2-.2l.3.2c.6.4 1.3.3 1.8-.2l2.2-2.7c.4-.5 1-.5 1.4-.1l.3.3c.5.5 1.2.5 1.7 0l3-3.5c.4-.5 1-.5 1.4-.1.3.3.5.7.4 1.1l-.4 1.5c-.2.6-.7 1-1.3 1h-.5a1.2 1.2 0 0 1-1-.5l-.3-.3c-.5-.5-1.2-.5-1.7 0l-2.2 2.7c-.4.5-1 .5-1.4.1l-.3-.3c-.5-.5-1.2-.5-1.7 0l-2.3 3.5c-.3.4-.8.5-1.2.2l-.3-.2c-.5-.3-1-.2-1.3.2L10 24.8c-.3.4-.8.5-1.2.2l-.3-.2c-.4-.3-1-.2-1.3.2l-1 1.3z" fill="#000"/>
  </svg>,
  <svg key="docker" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#2496ed"/>
    <path d="M12 12h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm0 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0h-2v2h2v-2zm8.7-3.3A5 5 0 0 0 16 7a.5.5 0 0 0-.5.5v.5A5 5 0 0 0 12 10H9.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-1a3 3 0 0 0-2.3-2.8z" fill="#fff"/>
  </svg>,
  <svg key="node" viewBox="0 0 32 32" fill="none">
    <path d="M16 2a2 2 0 0 0-1 .27L5.4 7.77a2 2 0 0 0-1 1.73v10.3c0 .7.38 1.36 1 1.73l9.6 5.5c.3.18.64.27 1 .27s.7-.1 1-.27l9.6-5.5a2 2 0 0 0 1-1.73V9.5c0-.7-.38-1.36-1-1.73L17 2.27A2 2 0 0 0 16 2z" fill="#68a063"/>
    <path d="M20 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm-3 2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1zm-3 2c-.6 0-1 .4-1 1v0c0 .6.4 1 1 1s1-.4 1-1v0c0-.6-.4-1-1-1z" fill="#fff"/>
  </svg>,
  <svg key="mongo" viewBox="0 0 32 32" fill="none">
    <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" fill="#4db33d"/>
    <path d="M16 6c-.5 0-1 .4-1 1v2c0 .6.5 1 1 1s1-.4 1-1V7c0-.6-.5-1-1-1zm0 5c-.5 0-1 .4-1 1v2c0 .6.5 1 1 1s1-.4 1-1v-2c0-.6-.5-1-1-1zm0 5c-.5 0-1 .4-1 1v2c0 .6.5 1 1 1s1-.4 1-1v-2c0-.6-.5-1-1-1z" fill="#fff"/>
  </svg>,
  <svg key="k8s" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#326ce5"/>
    <path d="M16 6l2.5 5.2L24 10l-2 4.5 4.5 2-5 2.5L24 24l-5.5-2L16 26l-2.5-5L8 22l2-4.5L5.5 16l4.5-2L8 9l5.5 2L16 6z" fill="none" stroke="#fff" strokeWidth="1.2"/>
    <circle cx="16" cy="16" r="2" fill="#fff"/>
  </svg>,
  <svg key="tw" viewBox="0 0 32 32" fill="none">
    <path d="M16 4c-5 0-8 2.5-9 7.5 1.8-2.5 3.9-3.4 6.3-2.7 1.4.4 2.4 1.5 3.5 2.6 1.8 1.8 3.8 3.9 8.2 3.9 5 0 8-2.5 9-7.5-1.8 2.5-3.9 3.4-6.3 2.7-1.4-.4-2.4-1.5-3.5-2.6C21.4 5.5 19.4 4 16 4zm-1.7 10.5c-1.8-1.8-3.8-3.9-8.2-3.9-5 0-8 2.5-9 7.5 1.8-2.5 3.9-3.4 6.3-2.7 1.4.4 2.4 1.5 3.5 2.6 1.8 1.8 3.8 3.9 8.2 3.9 5 0 8-2.5 9-7.5-1.8 2.5-3.9 3.4-6.3 2.7-1.4-.4-2.4-1.5-3.5-2.6-1.2-1.1-3.2-2.6-6.7-2.6z" fill="#38bdf8"/>
  </svg>,
  <svg key="vsc" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="4" fill="#007acc"/>
    <path d="M23 6l-10 8-4-3-2 1v8l2 1 4-3 10 8 3-2V8l-3-2z" fill="#fff"/>
  </svg>,
  <svg key="gh" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" fill="#24292e"/>
    <path d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.8 1.2 3.5.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12z" fill="#fff"/>
  </svg>,
  <svg key="figma" viewBox="0 0 32 32" fill="none">
    <circle cx="11" cy="21" r="5" fill="#f24e1e"/>
    <path d="M6 11a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z" fill="#ff7262"/>
    <path d="M16 6h5a5 5 0 0 1 0 10h-5V6z" fill="#a259ff"/>
    <circle cx="21" cy="16" r="5" fill="#1abcfe"/>
    <path d="M21 21a5 5 0 1 1-5-5h5v5z" fill="#0acf83"/>
  </svg>,
]

const PORTAL_SIZE = 250
const HALF_PORTAL = PORTAL_SIZE / 2
const MARGIN = HALF_PORTAL + 20

function LogoItem({ svg, portal }: { svg: React.ReactNode; portal: { x: number; y: number; active: boolean } }) {
  const [size] = useState(() => 24 + Math.random() * 30)
  
  // Choose a random starting coordinate inside the viewport
  const [home] = useState(() => ({
    x: 50 + Math.random() * (window.innerWidth - 100),
    y: 50 + Math.random() * (window.innerHeight - 100),
  }))

  // A random cluster offset so they don't all overlap exactly on the center
  const [clusterOffset] = useState(() => {
    const angle = Math.random() * Math.PI * 2
    const distance = 10 + Math.random() * 50 // cluster within 10px and 60px radius
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    }
  })

  // We define the floating/suction motion as dynamic keyframes
  const logoVariants: any = {
    idle: {
      left: [
        home.x,
        home.x + (Math.random() - 0.5) * 80,
        home.x + (Math.random() - 0.5) * 80,
        home.x,
      ],
      top: [
        home.y,
        home.y + (Math.random() - 0.5) * 80,
        home.y + (Math.random() - 0.5) * 80,
        home.y,
      ],
      scale: 1,
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      }
    },
    sucked: {
      left: portal.x + clusterOffset.x - size / 2,
      top: portal.y + clusterOffset.y - size / 2,
      scale: 0.6,
      rotate: 360 + (Math.random() - 0.5) * 180,
      transition: {
        duration: 1.2 + Math.random() * 0.8,
        ease: "easeOut",
      }
    }
  }

  return (
    <motion.div
      className="floating-logo"
      style={{
        position: "fixed",
        width: size,
        height: size,
      }}
      variants={logoVariants}
      animate={portal.active ? "sucked" : "idle"}
    >
      <div className="logo-trail" />
      {svg}
    </motion.div>
  )
}

export default function FloatingLogos() {
  const [portal, setPortal] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  })

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const cycle = () => {
      const x = MARGIN + Math.random() * (window.innerWidth - MARGIN * 2)
      const y = MARGIN + Math.random() * (window.innerHeight - MARGIN * 2)
      setPortal({ x, y, active: true })

      timeout = setTimeout(() => {
        setPortal(p => ({ ...p, active: false }))
        timeout = setTimeout(() => {
          cycle()
        }, 3000 + Math.random() * 2000) // idle phase of 3-5 seconds
      }, 4000 + Math.random() * 2000) // active phase of 4-6 seconds
    }

    const startDelay = setTimeout(cycle, 1500)
    return () => {
      clearTimeout(startDelay)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {portal.active && (
          <motion.div
            className="eclipse-portal"
            style={{ left: portal.x, top: portal.y, width: PORTAL_SIZE, height: PORTAL_SIZE }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="eclipse-sun" />
            <div className="eclipse-corona" />
            <div className="eclipse-ring ring-1" />
            <div className="eclipse-ring ring-2" />
            <div className="eclipse-ring ring-3" />
            {[...Array(12)].map((_, i) => (
              <div key={i} className="ember" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="floating-logos">
        {logos.map((svg, i) => (
          <LogoItem key={i} svg={svg} portal={portal} />
        ))}
      </div>
    </>
  )
}

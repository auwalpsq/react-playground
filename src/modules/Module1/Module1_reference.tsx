import './Module1.css'

// ============================================================
// MODULE 1 REFERENCE: Introduction to React, TSX & Hello World
// ============================================================

interface UserGreetingProps {
  name: string;
}

function Greeting({ name }: UserGreetingProps) {
  const currentTime: string = new Date().toLocaleTimeString()

  return (
    <div className="greeting-container">
      <h2 className="greeting-title">
        Hello, {name}!
      </h2>
      <p className="greeting-text">
        Welcome to your first React TypeScript (TSX) Component.
      </p>
      <div className="time-badge">
        Local Time: {currentTime}
      </div>
    </div>
  )
}

export default function Module1() {
  return (
    <div className="module-container">
      <div className="module-badge">
        MODULE 1: TSX & RENDER
      </div>
      <h1 className="module-title">
        Hello, React (TS)!
      </h1>
      <p className="module-description">
        This page is rendered by a functional React component using TypeScript (.tsx).
      </p>
      <Greeting name="TypeScript Developer" />
    </div>
  )
}

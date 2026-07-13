import { useState } from 'react'
import './Module3.css'

// ============================================================
// MODULE 3 REFERENCE: State & Event Handling (Interactive UI)
// ============================================================

export default function Module3() {
  // Demo 1 State: Counter
  const [count, setCount] = useState<number>(0)

  // Demo 2 State: Theme Toggle
  const [isDark, setIsDark] = useState<boolean>(false)

  // Handlers for Counter
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  // Handler for Theme Toggle
  const handleToggleTheme = () => setIsDark(!isDark)

  return (
    <div className="module-header">
      <div className="module-badge">
        MODULE 3: STATE & EVENTS
      </div>

      <h1 className="module-title">
        Interactive State
      </h1>
      
      <p className="module-description">
        State acts as component-level memory. When state updates, React automatically 
        re-renders only the changed parts of the screen.
      </p>

      {/* Demo 1: The Counter */}
      <div className="interactive-demo">
        <h3 className="demo-title">Demo 1: Interactive Counter</h3>
        <div className="counter-container">
          <button className="btn-counter" onClick={handleDecrement} aria-label="Decrease">
            -
          </button>
          <span className="count-display">{count}</span>
          <button className="btn-counter" onClick={handleIncrement} aria-label="Increase">
            +
          </button>
        </div>
      </div>

      {/* Demo 2: Dynamic Styling via State */}
      <div className="interactive-demo">
        <h3 className="demo-title">Demo 2: Dynamic Class Styling</h3>
        
        {/* We dynamically add 'dark-theme' or 'light-theme' class based on state */}
        <div className={`preview-card ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <h4 style={{ margin: 0, fontSize: '16px' }}>Student Profile Preview</h4>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
            Current Mode: <strong>{isDark ? 'Dark Theme' : 'Light Theme'}</strong>
          </p>
        </div>

        <button className="btn-toggle" onClick={handleToggleTheme}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

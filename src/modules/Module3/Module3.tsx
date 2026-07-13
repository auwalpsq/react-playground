import {useState} from 'react'
import './Module3.css'

// ============================================================
// MODULE 3: Practice File
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module3/Module3_reference.tsx
// ============================================================

export default function Module3() {
  // TODO 1: Declare state variables using `useState`.
  // - `count`: number state initialized to 0.
  // - `isDark`: boolean state initialized to false.

  const [count, setCount] = useState<number>(0)

  const [isDark, setIsDark] = useState<boolean>(false)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => count > 0 ? setCount(count - 1) : setCount(count  )

  const handleToggleTheme = () => setIsDark(!isDark)


  // TODO 2: Write handler functions.
  // - `handleIncrement`: increases `count` by 1.
  // - `handleDecrement`: decreases `count` by 1.
  // - `handleToggleTheme`: toggles `isDark` boolean value.


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

      {/* TODO 3: Build Demo 1 - Interactive Counter */}
      {/* Return:
          - A container <div className="interactive-demo">
          - A heading <h3 className="demo-title"> containing "Demo 1: Interactive Counter"
          - A wrapper <div className="counter-container">
            - A button <button className="btn-counter"> containing "-" triggering handleDecrement onClick
            - A span <span className="count-display"> displaying the count state value
            - A button <button className="btn-counter"> containing "+" triggering handleIncrement onClick
      */}
      <div className="interactive-demo">
        <h3 className="demo-counter">Demo 1: Interactive Counter</h3>
        <div className="counter-container">
          <button className="btn-counter" onClick={handleDecrement}>-</button>
          <span className="count-display">{count}</span>
          <button className="btn-counter" onClick={handleIncrement}>+</button>
        </div>
      </div>

      {/* TODO 4: Build Demo 2 - Dynamic Class Styling */}
      {/* Return:
          - A container <div className="interactive-demo">
          - A heading <h3 className="demo-title"> containing "Demo 2: Dynamic Class Styling"
          - A preview card <div className="preview-card ...">
            - The card must have class `preview-card` and a conditional class:
              (`dark-theme` if isDark is true, otherwise `light-theme`).
            - Inside render a title and dynamic text showing the current theme name.
          - A toggle button <button className="btn-toggle"> triggering handleToggleTheme onClick
      */}

      <div className="interactive-demo">
        <h3 className="demo-title">Demo 2: Dynamic Styling</h3>

        <div className={`preview-card ${isDark ? 'dark-theme' : 'light-theme'}`}>
          <h4 style={{margin: 0, fontSize: '16px'}}>Student Profile Preview</h4>
          <p style={{margin: 0, fontSize: '14px'}}>
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

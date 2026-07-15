import './Module1.css'

// ============================================================
// MODULE 1: Practice File
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module1/Module1_reference.tsx
// ============================================================

// TODO 1: Define a TypeScript interface named `UserGreetingProps`.
// It should require a single prop: `name` of type string.
interface UserGreetingProps{
  name: string
}

// TODO 2: Write a child functional component named `Greeting`.
// - It must accept destructured props matching `UserGreetingProps`.
// - Inside, declare a constant `currentTime` to store the local time string.
// - Return a layout with:
//   - A container <div className="greeting-container">
//   - An <h2 className="greeting-title"> containing "Hello, {name}!"
//   - A paragraph <p className="greeting-text">
//   - A time badge <div className="time-badge"> displaying the time.
function Greeting({name}: UserGreetingProps){
  const currentTime = new Date().toLocaleString()

  return (
    <div className="greeting-container">
      <h2 className="greeting-title">
        Hello, {name}
      </h2>
      <p className="greeting-text">
        Welcome to your first React Typescript (TSX) Component.
      </p>
      <div className="time-badge">
        Local Time: {currentTime}
      </div>
    </div>
  )
}

// TODO 3: Write the main functional component `Module1` (default export).
// Return a container layout:
// - A container <div className="module-container">
// - A badge <div className="module-badge"> containing "MODULE 1: TSX & RENDER"
// - A heading <h1 className="module-title"> containing "Hello, React (TS)!"
// - A description <p className="module-description">
// - Render your <Greeting /> subcomponent and pass it a name prop.


export default function Module1(){
  return (
    <div className="module-container">
      <div className="module-badge">
        MODULE 1: TSX & RENDER
      </div>
      <h1 className="module-title">
        Hello, React (TS)!
      </h1>
      <p className="module-description">
        This page is rendered by a functional react component using Typescript (.tsx).
      </p>
      <Greeting name = "Typescript Developer" />

    </div>
  )
}

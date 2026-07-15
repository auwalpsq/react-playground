// ============================================================
// MODULE 8: Practice File (React Router)
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module8/Module8_reference.tsx
// ============================================================

// TODO 1: Import routing hooks and components from 'react-router-dom':
// HashRouter (as Router), Routes, Route, NavLink, Link, Outlet, useParams, Navigate, useOutletContext
// And import the stylesheet './Module8.css'


export default function Module8() {
  return (
    // TODO 2: Wrap your layout in <Router>
    // - Add a heading h1 for "Multi-Page Navigation"
    // - Add a description paragraph.
    // - Create a <nav className="router-nav"> with <NavLink> buttons pointing to:
    //   - "/" (Home)
    //   - "/about" (About)
    //   - "/courses" (Courses)
    //   - Use standard dynamic className to apply "active" styling class if isActive is true.
    
    // TODO 3: Create a <div className="router-content"> container
    // - Inside, declare your <Routes> block:
    //   - Path "/" rendering <Home />
    //   - Path "/about" rendering <About />
    //   - Path "/courses" rendering <Courses /> (as a parent route containing a child nested route for path ":courseId")
    //   - Path "*" rendering <Navigate to="/" replace /> (fallback redirect)
    <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
      [Practice File is ready. Start implementing the TODO steps in Module8.tsx!]
    </div>
  )
}

// TODO 4: Define subpages:
// - function Home() { ... }
// - function About() { ... }
// - function Courses() { ... }
//   - Inside Courses: declare a small list of 3 course objects (id, name, description).
//   - Map through the courses and render a <Link> pointing to `/courses/[courseId]`.
//   - Render an <Outlet /> at the bottom and pass the courses list as the outlet's `context` prop.

// TODO 5: Define the dynamic detail component:
// - function CourseDetail() { ... }
//   - Extract courseId using `useParams()`
//   - Grab the course list using `useOutletContext()`
//   - Find the matched course by ID and draw its name and description details.

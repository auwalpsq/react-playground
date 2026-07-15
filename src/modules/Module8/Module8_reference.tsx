import { HashRouter as Router, Routes, Route, NavLink, Link, Outlet, useParams, Navigate, useOutletContext } from 'react-router-dom'
import './Module8.css'

// ============================================================
// MODULE 8 REFERENCE: React Router & Client-Side Navigation
// ============================================================

interface Course {
  id: string
  name: string
  description: string
}

export default function Module8() {
  return (
    // 1. HashRouter manages the URL and state (using "#" for safe sandbox reloads)
    <Router>
      <div className="router-container">
        <div className="module-badge">
          MODULE 8: REACT ROUTER
        </div>
        
        <h1 className="module-title">Multi-Page Navigation</h1>
        
        <p className="module-description">
          Vite compiles your pages into a Single Page App. React Router swaps 
          components instantly based on the URL without reloading the browser.
        </p>

        {/* 2. Navigation Bar using NavLink (which knows if it is active) */}
        <nav className="router-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          
          <NavLink 
            to="/courses" 
            className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
          >
            Courses
          </NavLink>
        </nav>

        {/* 3. The display window where pages swap based on matching paths */}
        <div className="router-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Nested Route: courses will render child sub-routes inside an <Outlet /> */}
            <Route path="/courses" element={<Courses />}>
              <Route path=":courseId" element={<CourseDetail />} />
            </Route>

            {/* Fallback redirect if user enters an invalid URL */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

// ------------------------------------------------------------
// Subpages & Dynamic Render Blocks
// ------------------------------------------------------------

function Home() {
  return (
    <div>
      <h2>🏫 Welcome to the Portal</h2>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
        You are currently on the <strong>Home Page</strong>. Look at your browser address bar: 
        it shows <code>#/</code>. 
      </p>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
        Try clicking between tabs. Notice how the page switches <strong>instantly</strong> 
        without any white flash or spinner reloads!
      </p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>ℹ️ About smartsms</h2>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
        This module models a typical dashboard setup. In a production app like smartsms, 
        your main layout (Header/Sidebar) stays fixed, and only this content area swaps out 
        as you navigate.
      </p>
    </div>
  )
}

function Courses() {
  const courseList: Course[] = [
    { id: 'math', name: 'Advanced Mathematics', description: 'Focuses on algebra, calculus, and mathematical inductions.' },
    { id: 'science', name: 'General Physics', description: 'Covers thermodynamics, kinematics, and basic electromagnetic physics.' },
    { id: 'lit', name: 'English Literature', description: 'Explores classical prose, poetry, and Shakespearean dramas.' }
  ]

  return (
    <div>
      <h2>📚 Academic Course Registry</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
        Select a course below. This showcases <strong>Dynamic Route Params</strong> (injecting values into the URL):
      </p>

      {/* Render list of course links */}
      <div className="course-grid">
        {courseList.map(c => (
          <Link key={c.id} to={`/courses/${c.id}`} className="course-card">
            <strong>{c.name}</strong> →
          </Link>
        ))}
      </div>

      {/* 4. Outlet is the slot where React Router draws the matched child Route (:courseId) */}
      <Outlet context={courseList} />
    </div>
  )
}

function CourseDetail() {
  // 5. useParams extracts variables from the URL path "/courses/:courseId"
  const { courseId } = useParams<{ courseId: string }>()
  
  // useOutletContext lets the child share the data array passed down by the parent <Outlet />
  const courses = useOutletContext<Course[]>()
  
  const selectedCourse = courses.find(c => c.id === courseId)

  if (!selectedCourse) {
    return <div className="course-detail">Course details not found.</div>
  }

  return (
    <div className="course-detail">
      <h3>📘 {selectedCourse.name}</h3>
      <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
        {selectedCourse.description}
      </p>
    </div>
  )
}

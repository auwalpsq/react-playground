// ============================================================
// MODULE 8: Practice File (React Router)
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module8/Module8_reference.tsx
// ============================================================
import { HashRouter as Router, Routes, Route, NavLink, Link, Outlet, useParams, Navigate, useOutletContext } from "react-router-dom"
import './Module8.css'
// TODO 1: Import routing hooks and components from 'react-router-dom':
// HashRouter (as Router), Routes, Route, NavLink, Link, Outlet, useParams, Navigate, useOutletContext
// And import the stylesheet './Module8.css'

interface Course {
  id: string
  name: string
  description: string
}

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
      <Router>
        <div className="router-container">
          <div className="router-badge">
            MODULE 8: REACT ROUTER
          </div>

          <h1 className="module-title">Multi-Page Navigation</h1>

          <p className="module-description">
            Vite compiles your pages into a Single Page App. React Router swaps
            components instantly based on the URL without reloading the browser.
          </p>

          {/** 2. Navigation Bar using NavLink (which knows if it is active) */}

          <nav className="router-nav">
            <NavLink
              to="/"
              className={({isActive}) => `nav-link-btn ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link-btn ${isActive ? 'active' : ''}`}
              end
            >
              About
            </NavLink>

            <NavLink
              to="/courses"
              className={({isActive}) => `nav-link-btn ${isActive ? 'active' : ''}`}
            >
              Courses
            </NavLink>
          </nav>

          <div className="router-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/courses" element={<Courses />}>
                <Route path=":courseId" element={<CourseDetail />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    // TODO 3: Create a <div className="router-content"> container
    // - Inside, declare your <Routes> block:
    //   - Path "/" rendering <Home />
    //   - Path "/about" rendering <About />
    //   - Path "/courses" rendering <Courses /> (as a parent route containing a child nested route for path ":courseId")
    //   - Path "*" rendering <Navigate to="/" replace /> (fallback redirect)
    
  )
}

// TODO 4: Define subpages:
// - function Home() { ... }
// - function About() { ... }
// - function Courses() { ... }
//   - Inside Courses: declare a small list of 3 course objects (id, name, description).
//   - Map through the courses and render a <Link> pointing to `/courses/[courseId]`.
//   - Render an <Outlet /> at the bottom and pass the courses list as the outlet's `context` prop.
function Home(){
  return (
    <div>
      <h2> 🏫 Welcome to the Portal</h2>
      <p style={{marginTop: '10px', lineHeight: '1.6'}}>
        You are currently on the <strong>Home Page</strong>. Look at your browser address bar:
        it shows <code>#/</code>
      </p>
      <p style={{marginTop: '10px', lineHeight: '1.6'}}>
        Try clicking between tabs. Notice how the page switches <strong>instantly</strong>
        without any white flash or spiner reloads!
      </p>
    </div>
  )
}
function About(){
  return (
    <div>
      <h2> ℹ️  About SmartSMS</h2>

      <p style={{marginTop: '10px', lineHeight: '1.6'}}>
        This module models a typical dashboard setup. In a production app like smartsms, 
        your main layout (Header/Sidebar) stays fixed, and only this content area swaps out 
        as you navigate.
      </p>      
    </div>
  )
}

function Courses(){
  const courseList: Course[] = [
    {id: 'math', name: 'Advanced Mathematics', description: 'Focuses on algebra, calculus, and mathematical inductions.'},
    {id: 'science', name: 'General Physics', description: 'Covers thermodynamics, kinematics, and basic electromagnetic physics.'},
    {id: 'lit', name: 'English Literature', description: 'Explores classical prose, poetry, and Shakespearean dramas.'}
  ]

  return (
    <div>
      <h2> 📚 Academic Course Registry</h2>
      <p style={{color: 'var(--text-muted)', fontSize: '14px'}}>
        Select a course below. This showcases a <strong>Dynamic Route Params</strong> (injecting values into the URL):
      </p>

      {/** Render list of course links */}
      <div className="course-grid">
        {courseList.map(c => (
          <Link key={c.id} to={`/courses/${c.id}`} className="course-card">
            <strong>{c.name}</strong> →
          </Link>
        ))}
      </div>

      {/** Outlet is the slot where React Router draws the matched child Route (:courseId) */}
      <Outlet context={courseList} />
    </div>
  )
}
// TODO 5: Define the dynamic detail component:
// - function CourseDetail() { ... }
//   - Extract courseId using `useParams()`
//   - Grab the course list using `useOutletContext()`
//   - Find the matched course by ID and draw its name and description details.

function CourseDetail(){
  const { courseId } = useParams<{courseId: string}>()

  const courses = useOutletContext<Course[]>()

  const selectedCourse = courses.find(c => c.id === courseId)

  if(!selectedCourse){
    return <div className="course-detail">Course detail not found.</div>
  }

  return (
    <div className="course-detail">
      <h3> 📘 {selectedCourse.name} </h3>
      <p style={{marginTop: '8px', fontSize:'14px', color: 'var(--text-muted)'}}>
        {selectedCourse.description}
      </p>
    </div>
  )
}

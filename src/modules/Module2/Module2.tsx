import './Module2.css'

// ============================================================
// MODULE 2: Practice File
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module2/Module2_reference.tsx
// ============================================================

// TODO 1: Define a TypeScript interface named `StudentCardProps`.
// It should require:
// - name: string
// - age: number
// - grade: string
// - isEnrolled: boolean
// - subjects: string[] (array of strings)


// TODO 2: Write a child functional component named `StudentCard`.
// - It accepts destructured props matching `StudentCardProps`.
// - Return a layout with:
//   - A container <div className="student-card">
//   - A card header <div className="card-header"> containing the name and status badge
//     - The status badge should use class `enrollment-status` along with a conditional class
//       (`status-enrolled` if isEnrolled is true, otherwise `status-suspended`).
//   - A meta block <div className="student-meta"> showing Age and Class.
//   - A subject list <div className="subject-list"> mapping over `subjects` to render
//     individual <span className="subject-tag"> elements (remember to provide a `key={index}`).


// TODO 3: Write the main functional component `Module2` (default export).
// Return a layout:
// - A container <div className="module-header">
// - A badge <div className="module-badge"> containing "MODULE 2: COMPONENTS & PROPS"
// - A heading <h1 className="module-title"> containing "Reusable Components"
// - A description paragraph
// - Render your `<StudentCard />` three times, passing different details for each student.

interface StudentCardProps{
  name: string
  age: number
  grade: string
  isEnrolled: boolean
  subjects: string[]
}
function StudentCard({name, age, grade, isEnrolled, subjects}: StudentCardProps){
  return (
    <div className="student-card">
      <div className="card-header">
        <h3 className="student-name">{name}</h3>
        <span className={`enrollment-status ${isEnrolled ? 'status-enrolled' : 'status-suspended'}`}>
          {isEnrolled ? 'Enrolled' : 'Suspended'}
        </span>
      </div>

      <div className="student-meta">
        <span>Age: <strong>{age}</strong></span> . <span>Class: <strong>{grade}</strong></span>
      </div>

      <div className="subject-list">
        {subjects.map((subject, index) => (
          <span key={index} className="subject-tag">
            {subject}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Module2(){
  return (
    <div className="module-header">
      <div className="module-badge">MODULE 2: COMPONENTS & PROPS</div>
      <h1 className="module-title">Reusable Components</h1>

      <p className="">
        Instead of writing duplicate layout blocks we created a single 
        <code>&lt;StructuredCard&gt;</code> component and reuse it by passing a unique props to each.
      </p>

      {/* Reusing the StructuredCard component 3 times with different props */}

      <StudentCard 
        name="Aisha Dawud"
        age={15}
        grade="JSS 3"
        isEnrolled={true}
        subjects={['Mathematics', 'English Language', 'Basic Science']}
      />

      <StudentCard 
        name="Abubakar Auwal Usman"
        age={4}
        grade="Nursery 1"
        isEnrolled={true}
        subjects={['Arabic', 'Creative Art', 'Mathematics']}
      />

      <StudentCard 
        name="Dawud Auwal Usman"
        age={2}
        grade="Creche"
        isEnrolled={false}
        subjects={['Cartoon', 'Physical Education', 'English Language']}
      />
    </div>
  )
}

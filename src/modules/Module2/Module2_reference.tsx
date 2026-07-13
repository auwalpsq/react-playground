import './Module2.css'

// ============================================================
// MODULE 2 REFERENCE: Components & Props (Reusable UI)
// ============================================================

interface StudentCardProps {
  name: string;
  age: number;
  grade: string;
  isEnrolled: boolean;
  subjects: string[];
}

function StudentCard({ name, age, grade, isEnrolled, subjects }: StudentCardProps) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3 className="student-name">
          {name}
        </h3>
        <span className={`enrollment-status ${isEnrolled ? 'status-enrolled' : 'status-suspended'}`}>
          {isEnrolled ? 'Enrolled' : 'Suspended'}
        </span>
      </div>

      <div className="student-meta">
        <span>Age: <strong>{age}</strong></span> · <span>Class: <strong>{grade}</strong></span>
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

export default function Module2() {
  return (
    <div className="module-header">
      <div className="module-badge">
        MODULE 2: COMPONENTS & PROPS
      </div>

      <h1 className="module-title">
        Reusable Components
      </h1>
      
      <p className="module-description">
        Instead of writing duplicate layout blocks, we created a single 
        <code>&lt;StudentCard /&gt;</code> component and reused it by passing unique props to each.
      </p>

      {/* Reusing the StudentCard component 3 times with different props */}
      <StudentCard 
        name="Usman Bello" 
        age={15} 
        grade="JSS 3" 
        isEnrolled={true} 
        subjects={['Mathematics', 'English Language', 'Basic Science']} 
      />

      <StudentCard 
        name="Chioma Nwachukwu" 
        age={14} 
        grade="JSS 2" 
        isEnrolled={true} 
        subjects={['Social Studies', 'Home Economics', 'English Language']} 
      />

      <StudentCard 
        name="Abubakar Musa" 
        age={16} 
        grade="SS 1" 
        isEnrolled={false} 
        subjects={['Physics', 'Chemistry', 'Further Mathematics']} 
      />
    </div>
  )
}

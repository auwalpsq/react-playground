import { useState, type SubmitEvent, type ChangeEvent } from 'react'
import './Module5.css'

interface Student {
  id: number;
  name: string;
  grade: string;
}

interface StudentFormData {
  name: string;
  grade: string;
}

const initialStudents: Student[] = [
  { id: 1, name: 'Usman Bello', grade: 'JSS 3' },
  { id: 2, name: 'Chioma Nwachukwu', grade: 'JSS 2' }
]

export default function Module5() {
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [formData, setFormData] = useState<StudentFormData>({
    name: '',
    grade: 'JSS 2'
  })
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (error) setError(null)
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.name.trim() === '') {
      setError('Student name is required.')
      return
    }

    const newStudent: Student = {
      id: Date.now(),
      name: formData.name.trim(),
      grade: formData.grade
    }

    setStudents([...students, newStudent])
    setFormData({
      name: '',
      grade: 'JSS 2'
    })
  }

  const handleDeleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div className="module-header">
      <div className="module-badge">
        MODULE 5: CONTROLLED FORMS
      </div>

      <h1 className="module-title">
        Forms & User Input
      </h1>
      
      <p className="module-description">
        Controlled inputs capture user keypresses in React state, providing 
        safe data entry, validations, and dynamic list bindings.
      </p>

      <div className="form-card">
        <h3 className="form-title">Add New Student</h3>
        
        <form className="student-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nameInput">Full Name</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              className="form-input"
              placeholder="e.g. Abubakar Musa"
              value={formData.name}
              onChange={handleInputChange}
            />
            {error && <span className="error-text">{error}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="gradeSelect">Class Grade</label>
            <select
              id="gradeSelect"
              name="grade"
              className="form-select"
              value={formData.grade}
              onChange={handleInputChange}
            >
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
              <option value="SS 1">SS 1</option>
              <option value="SS 2">SS 2</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">
            Add Student
          </button>
        </form>
      </div>

      <div className="list-section">
        <h3 className="list-section-title">Active Student Directory</h3>
        <div className="student-list">
          {students.map(student => (
            <div key={student.id} className="student-item">
              <div className="student-info">
                <span className="student-name">{student.name}</span>
                <span className="student-grade">Class: {student.grade}</span>
              </div>
              <button 
                className="btn-delete" 
                onClick={() => handleDeleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

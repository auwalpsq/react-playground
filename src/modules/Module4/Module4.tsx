import {useState} from 'react'
import './Module4.css'

interface Student{
    id: number
    name: string
    grade: string
}

const initialStudents: Student[] = [
    {id: 1, name: 'Usman Bello', grade: 'JSS 3'},
    {id: 2, name: 'Chioma Nwachukwu', grade: 'JSS 2'},
    {id: 3, name: 'Abubakar Musa', grade: 'SS 1'},
    {id: 4, name: 'Fatima Yusuf', grade: 'JSS 3'},
    {id: 5, name: 'Chinedu Okeke', grade: 'JSS 2'}
]

export default function Module4(){
    const [students, setStudents] = useState<Student[]>(initialStudents)

    const [activeFilter, setActiveFilter] = useState<string>('All')

    const handleDeleteStudent = (id: number) => {
        setStudents(students.filter(student => student.id !== id))
    }

    const filteredStudents = students.filter(student => activeFilter === 'All' || student.grade === activeFilter)

    const filterOptions = ['All', 'JSS 2', 'JSS 3', 'SS 1']

    return (
        <div className="module-header">
            <div className="module-badge">
                MODULE 4: LIST & KEYS
            </div>

            <h1 className="module-title">
                Dynamic Lists
            </h1>

            <p className="module-description">
                Transforming raw data arrays into dynamic UI components using
                <code>.map()</code>, and handling list state updates cleanly.
            </p>

            {/** Filter and stats controls */}

            <div className="controls-bar">
                <div className="filter-btn-group">
                    {filterOptions.map(option => (
                        <button 
                            key={option}
                            className={`btn-filter ${activeFilter === option ? 'active' : ''}`}
                            onClick={() => setActiveFilter(option)}
                        >{option}</button>

                    ))}
                </div>
                <div style={{fontSize: '13px', color: 'var(--text)'}}>
                    Showing <strong>{filteredStudents.length}</strong> of
                    <strong> {students.length}</strong>
                </div>
            </div>

            {/** Rendered student list */}
            <div className="student-list">
                {filteredStudents.length > 0
                
                ? (
                    filteredStudents.map(student => (
                        <div key={student.id} className="student-item">
                            <div className="student-info">
                                <span className="student-name">{student.name}</span>
                                <span className="student-grade">Class: {student.grade}</span>
                            </div>
                            <button 
                                className="btn-delete"
                                onClick={() => handleDeleteStudent(student.id)}>

                                    Delete
                            </button>
                        </div>
                    )
                ))
                : (
                    <div className="no-students-message">No students found in this class</div>
                ) }
            </div>
        </div>
    )
}


import { useState, useEffect, type ChangeEvent } from 'react'
import './Module6.css'

// ============================================================
// MODULE 6 REFERENCE: Side Effects & API Integration (useEffect)
// ============================================================

interface Student {
  id: number
  name: string
  email: string
  grade: string
  company: string
}

export default function Module6() {
  const [students, setStudents] = useState<Student[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [simulateError, setSimulateError] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const fetchStudents = async () => {
      setIsLoading(true)
      setError(null)

      try {
        if (simulateError) {
          throw new Error('Simulation Mode: Connection to the database failed.')
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const mappedStudents: Student[] = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          grade: user.id % 2 === 0 ? 'SS 2' : 'JSS 3',
          company: user.company?.name || 'Academic Board'
        }))

        setStudents(mappedStudents)
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong while fetching.')
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    fetchStudents()

    return () => {
      controller.abort()
    }
  }, [refetchTrigger, simulateError])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="module-header">
      <div className="module-badge">
        MODULE 6: USEEFFECT & APIS
      </div>

      <h1 className="module-title">
        Side Effects & APIs
      </h1>

      <p className="module-description">
        The <code>useEffect</code> hook connects React state with external operations like network requests. 
        It safely triggers, cleans up, and manages asynchronous loading/error lifecycles.
      </p>

      <div className="control-panel">
        <div className="toggle-group">
          <label className="toggle-label">
            <input 
              type="checkbox" 
              checked={simulateError} 
              onChange={(e) => setSimulateError(e.target.checked)} 
              className="toggle-checkbox"
            />
            <span className="toggle-text">Simulate API Failure Mode</span>
          </label>
        </div>

        <button 
          className="btn-refresh" 
          onClick={() => setRefetchTrigger(prev => prev + 1)}
          disabled={isLoading}
        >
          {isLoading ? 'Fetching...' : 'Force Refresh API'}
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Filter students by name or house..."
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={isLoading || !!error}
        />
      </div>

      <div className="api-result-section">
        {isLoading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Fetching active student data from API...</p>
            <div className="skeleton-container">
              {[1, 2, 3].map(n => (
                <div key={n} className="skeleton-card">
                  <div className="skeleton-line title"></div>
                  <div className="skeleton-line text"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && error && (
          <div className="error-state">
            <span className="error-icon">⚠️</span>
            <h4 className="error-title">API Connection Failed</h4>
            <p className="error-msg">{error}</p>
            <p className="error-hint">
              Disable the "Simulate API Failure Mode" toggle above and click "Force Refresh API" to recover.
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="student-directory">
            <h3 className="directory-title">
              Fetched Students ({filteredStudents.length})
            </h3>
            
            {filteredStudents.length === 0 ? (
              <div className="empty-state">
                <p>No students match your filter term.</p>
              </div>
            ) : (
              <div className="grid-list">
                {filteredStudents.map(student => (
                  <div key={student.id} className="directory-card">
                    <div className="student-badge">{student.grade}</div>
                    <h4 className="student-name-title">{student.name}</h4>
                    <p className="student-meta">📧 {student.email}</p>
                    <p className="student-meta">🏡 House: {student.company}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

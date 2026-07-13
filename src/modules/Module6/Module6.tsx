import { useState, useEffect, type ChangeEvent } from 'react'
import './Module6.css'

// ============================================================
// MODULE 6: Practice File
// Type the code yourself! Follow the TODO steps below.
//
// TIP: If you get stuck, you can refer to:
//   src/modules/Module6/Module6_reference.tsx
// ============================================================

// TODO 1: Define a TypeScript interface named `Student`.
// It should require:
// - id: number
// - name: string
// - email: string
// - grade: string
// - company: string


export default function Module6() {
  // TODO 2: Declare state variables using `useState`.
  // - `students`: Student[] initialized to []
  // - `isLoading`: boolean initialized to true
  // - `error`: string | null initialized to null
  // - `simulateError`: boolean initialized to false
  // - `searchTerm`: string initialized to ''
  // - `refetchTrigger`: number initialized to 0

  // TODO 3: Implement the `useEffect` hook to fetch data from API.
  // - Use an AbortController for cleanup.
  // - Inside, write an async `fetchStudents` function:
  //   - Set isLoading to true, and reset error to null.
  //   - Fetch data from: 'https://jsonplaceholder.typicode.com/users' (pass abort signal).
  //   - Handle a simulated error if `simulateError` is true.
  //   - Map data to match the `Student` interface:
  //     - id: user.id
  //     - name: user.name
  //     - email: user.email
  //     - grade: user.id % 2 === 0 ? 'SS 2' : 'JSS 3'
  //     - company: user.company?.name || 'Academic Board'
  //   - Update `students` state.
  //   - Catch errors (ignore AbortError) and set the `error` state.
  //   - In `finally`, set isLoading to false.
  // - Invoke `fetchStudents()`.
  // - Return cleanup function that calls `abort()` on the controller.
  // - Add correct dependency array: [refetchTrigger, simulateError].

  // TODO 4: Write input handler for search term changes.

  // TODO 5: Filter the `students` array based on the `searchTerm`
  // (check if student name or company matches search term, case-insensitively).

  return (
    <div className="module-header">
      <div className="module-badge">
        MODULE 6: USEEFFECT & APIS
      </div>

      <h1 className="module-title">
        Side Effects & APIs
      </h1>

      <p className="module-description">
        Implement useEffect to fetch data and manage loading/error states. 
        Open <code>src/modules/Module6/Module6.tsx</code> and follow the TODOs!
      </p>

      {/* TODO 6: Build the layout structure (Refer to reference file if needed) */}
      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
        [Practice File is ready. Start implementing the TODO steps in Module6.tsx!]
      </div>
    </div>
  )
}

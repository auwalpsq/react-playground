import { createContext, useContext, useState, useEffect } from 'react'

// ============================================================
// MODULE 7 REFERENCE: Context API & Global State Management
// ============================================================

// 1. Create the Context (The blueprint)
export const ThemeContext = createContext('light')

export default function Module7() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Effect: When theme changes, update classList on the document root
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    // 2. Wrap children in Provider and pass state value
    <ThemeContext.Provider value={theme}>
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <div className="module-badge">
          MODULE 7: CONTEXT API
        </div>
        
        <h1 className="module-title">Global State Demo</h1>
        
        <p className="module-description">
          Clicking the toggle below updates React state, which flows through the Context Provider 
          and triggers the global theme change.
        </p>

        <button 
          onClick={toggleTheme} 
          style={{ 
            padding: '12px 24px', 
            fontSize: '14px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            background: 'var(--accent)',
            color: '#fff',
            marginBottom: '20px'
          }}
        >
          Toggle Theme (Current: {theme.toUpperCase()})
        </button>

        {/* Intermediate receives NO props */}
        <IntermediateCard />
      </div>
    </ThemeContext.Provider>
  )
}

function IntermediateCard() {
  return (
    <div style={{ 
      border: '1px solid var(--border)', 
      padding: '24px', 
      marginTop: '20px',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.02)'
    }}>
      <h3 style={{ color: 'var(--text-h)', margin: '0 0 8px 0' }}>Intermediate Card</h3>
      <p style={{ color: 'var(--text)', fontSize: '14px', margin: '0 0 16px 0' }}>
        I do not take any props. I do not know what theme is active.
      </p>
      
      {/* DeepChild receives NO props */}
      <DeepChildCard />
    </div>
  )
}

function DeepChildCard() {
  // 3. Consume context value directly
  const theme = useContext(ThemeContext)

  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '12px',
      background: theme === 'light' ? '#f3f4f6' : '#1f2937',
      border: '1px solid var(--border)'
    }}>
      <h4 style={{ color: theme === 'light' ? '#1f2937' : '#f9fafb', margin: '0 0 8px 0' }}>
        Deep Child Card
      </h4>
      <p style={{ color: theme === 'light' ? '#4b5563' : '#d1d5db', fontSize: '13px', margin: 0 }}>
        I consumed the value <strong>"{theme}"</strong> directly from the Context blueprint!
      </p>
    </div>
  )
}

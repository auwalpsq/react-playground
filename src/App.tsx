import Module5 from './modules/Module5/Module5'
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      {/* Container Card */}
      <main style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        boxShadow: 'var(--shadow)',
        padding: '32px',
        width: '100%',
        maxWidth: '640px',
        boxSizing: 'border-box'
      }}>
        {/* Render our active Module */}
        <Module5 />
      </main>

      {/* Footer / Navigation */}
      <footer style={{
        marginTop: '32px',
        fontSize: '14px',
        color: 'var(--text)',
        textAlign: 'center'
      }}>
        React TypeScript Playground · Open <code>react_learning_roadmap.md</code> to see what's next!
      </footer>
    </div>
  )
}

export default App

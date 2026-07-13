import './CSSModule.css'

// ============================================================
// CSS BONUS MODULE REFERENCE: Box-Sizing & Shadows
// ============================================================

export default function CSSModule() {
  return (
    <div className="css-module-container">
      <div className="module-badge">CSS BONUS MODULE</div>
      <h1 className="module-title">Professional Layouts</h1>
      <p className="module-description">
        Learn how box-sizing keeps boxes aligned, and how layered drop shadows create realistic, floating plastic cards.
      </p>

      {/* Part 1: Box-Sizing Demo */}
      <h2 className="section-title">Part 1: Content-Box vs. Border-Box</h2>
      <p style={{ fontSize: '14px', marginBottom: '16px' }}>
        Both boxes below are coded as <code>width: 200px</code>. Notice how the first one blows up in size because of padding and borders!
      </p>
      <div className="box-sizing-demo">
        <div className="demo-box content-box-card">
          <strong>Content-Box</strong><br />
          Width expands to: 248px! (200 + 40 padding + 8 borders)
        </div>
        <div className="demo-box border-box-card">
          <strong>Border-Box</strong><br />
          Width stays exactly: 200px! (Padding pushes inward)
        </div>
      </div>

      {/* Part 2: Box-Shadow Progression */}
      <h2 className="section-title">Part 2: Box-Shadow progression to Professional Cards</h2>
      <div className="shadow-progression">
        
        <div className="card-base card-flat">
          <strong>1. Flat (No Shadow)</strong><br />
          No depth at all. Looks like a simple flat drawing.
        </div>

        <div className="card-base card-amateur">
          <strong>2. Amateur (Harsh offset, no blur)</strong><br />
          Solid black outline. Looks like a retro comic book element, not a modern interface.
        </div>

        <div className="card-base card-single-blur">
          <strong>3. Average (Single fuzzy blur)</strong><br />
          A bit better, but looks muddy and leaks out of the sides awkwardly.
        </div>

        <div className="card-base card-professional">
          <strong>4. Professional (Layered with negative spread)</strong><br />
          Two stacked shadows. The negative spread pulls the shadow inward, keeping it neat and tight.
        </div>

        <div className="card-base card-plastic">
          <strong>5. Skeuomorphic (Glossy Plastic Card)</strong><br />
          Uses <code>inset</code> highlights at the top edge to simulate light reflecting off plastic.
        </div>

      </div>
    </div>
  )
}

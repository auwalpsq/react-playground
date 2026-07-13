import './CSSModule.css'

// ============================================================
// CSS BONUS MODULE: Box-Sizing & Shadows (Practice File)
// Follow the TODO guidelines to build your card layouts.
//
// TIP: If you get stuck, refer to:
//   src/modules/CSSModule/CSSModule_reference.tsx
// ============================================================

export default function CSSModule() {
  return (
    <div className="css-module-container">
      <div className="module-badge">CSS BONUS MODULE</div>
      <h1 className="module-title">Professional Layouts</h1>
      <p className="module-description">
        Learn how box-sizing keeps boxes aligned, and how layered drop shadows create realistic, floating plastic cards.
      </p>

      {/* TODO 1: Box-Sizing comparison.
          Type two divs inside the box-sizing-demo wrapper:
          1. A div with class "demo-box content-box-card" containing explanation text.
          2. A div with class "demo-box border-box-card" containing explanation text.
      */}
      <h2 className="section-title">Part 1: Content-Box vs. Border-Box</h2>
      <p style={{fontSize: '14px', marginBottom: '16px'}}>
        Both boxes below are coded as <code>with: 200px</code>. Notice how the first one blows up in size because of padding and borders!
      </p>
      <div className="box-sizing-demo">
        <div className="demo-box content-box-card">
          <strong>Content-Box</strong><br />
          Width expands to: 248px! (200 + 40 padding + 8 borders)
        </div>
        <div className="demo-box border-box-card">
          <strong>Border-Box</strong> <br />
          Width stays exactly: 200px! (padding pushes inward)
        </div>
      </div>

      {/* TODO 2: Shadow progression.
          Type five cards in order inside the shadow-progression container.
          Use the class "card-base" combined with each specific shadow variant:
          1. Flat: "card-base card-flat"
          2. Amateur: "card-base card-amateur"
          3. Average Blur: "card-base card-single-blur"
          4. Stacked Professional: "card-base card-professional"
          5. Skeuomorphic Plastic Card: "card-base card-plastic"
      */}
      <h2 className="section-title">Part 2: Box-Shadow progression to Professional Cards</h2>
      <div className="shadow-progression">
        
        <div className="card-base card-flat">
          <strong>1. Flat (No Shadow)</strong> <br />
          No depth at all. Looks like a simple flat drawing.
        </div>

        <div className="card-base card-amateur">
          <strong>2. Amateur (Harsh offset, no blur)</strong> <br />
          Solid black outline. Looks like a retro comic book element, not a modern interface.
        </div>

        <div className="card-base card-single-blur">
          <strong>3. Average (Single fuzzy blur)</strong> <br />
          A bit better, but looks muddy and leaks out of the slides akwardly.
        </div>

        <div className="card-base card-professional">
          <strong>4. Professional (layered with negative spread)</strong> <br />
          Two stacked shadows. The negative spread pulls the shadow inward, keeping it neat and tight.
        </div>

        <div className="card-base card-plastic">
          <strong>Skeuomorphic (Glossy Plastic Card)</strong> <br />
          Uses <code>inset</code> highlights at the top edge to simulate light reflecting the plastic.
        </div>

      </div>
    </div>
  )
}


export default function Home() {
  return (
    <main className="container">
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '4rem'
      }}>
        <div className="animate-float" style={{ marginBottom: '2rem' }}>
          <span style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '99px', 
            background: 'var(--glass)', 
            border: '1px solid var(--glass-border)',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            ✨ Welcome to the Future
          </span>
        </div>
        
        <h1 className="gradient-text" style={{ 
          fontSize: 'clamp(3rem, 10vw, 6rem)', 
          lineHeight: '1.1',
          marginBottom: '1.5rem'
        }}>
          Stellar Experiences <br /> Built for Scale
        </h1>
        
        <p style={{ 
          maxWidth: '600px', 
          fontSize: '1.25rem', 
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '3rem'
        }}>
          A premium Next.js template designed to wow your users with stunning visuals and lightning-fast performance.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn glass-card" style={{ color: 'white' }}>Learn More</button>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            Unmatched Performance
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '4rem'
          }}>
            {[
              { title: "Fast", desc: "Optimized for speed out of the box." },
              { title: "Beautiful", desc: "Curated design system for premium feel." },
              { title: "Modern", desc: "Built with the latest Next.js 15 features." }
            ].map((feature, i) => (
              <div key={i} style={{ 
                padding: '2rem', 
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: '20px',
                border: '1px solid var(--glass-border)'
              }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer style={{ 
        padding: '4rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--glass-border)',
        color: 'rgba(255,255,255,0.4)'
      }}>
        <p>© 2026 Stellar Website. Built with Antigravity.</p>
      </footer>
    </main>
  );
}

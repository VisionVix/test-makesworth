'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  const [activeTool, setActiveTool] = useState('takehome');
  const [thSalary, setThSalary] = useState(45000);
  const [thPension, setThPension] = useState(5);
  const [thStudent, setThStudent] = useState('0');
  const [thResult, setThResult] = useState<any>(null);
  
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "👋 I'm Calcy! Tap a question or type your own for instant UK tax answers." }
  ]);

  // Particles Logic
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles: any[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1
      });
    }
    function animate() {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(200,150,62,0.2)';
        ctx!.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const calculateTakeHome = () => {
    const salary = Number(thSalary);
    const pension = salary * (Number(thPension) / 100);
    const taxable = salary - pension;
    const pa = 12570;
    let tax = 0;
    if (taxable > pa) {
      const b1 = Math.min(taxable - pa, 37700);
      const b2 = Math.max(0, taxable - pa - 37700);
      tax = b1 * 0.2 + b2 * 0.4;
    }
    const takeHome = salary - tax - pension;
    setThResult({ takeHome, tax, pension, monthly: takeHome / 12 });
  };

  return (
    <main>
      <Navbar />
      
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <canvas ref={canvasRef} className="hero-particles" />
        <div className="hero-content container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge hero-fade d1"><span className="dot" />Chartered Accountants — Harrow & Milton Keynes</div>
              <h1>
                <span className="hero-text-reveal"><span className="hero-text-line">Keep More Money.</span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Grow <em>Faster.</em></span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Worry Less.</span></span>
              </h1>
              <p className="hero-sub hero-fade d2">We don't just do your accounts — we help you build a more profitable business, pay less tax, and get your weekends back.</p>
              <div className="hero-actions hero-fade d4">
                <a href="#contact" className="btn btn-gold">Book Free Consultation</a>
                <a href="#tools" className="btn btn-outline-w">Try Free Tax Tools</a>
              </div>
            </div>
            <div className="hero-visual hero-fade d4">
              <div className="hero-card">
                <div className="hero-stats">
                  <div className="hero-stat"><span className="num">13+</span><span className="lbl">Years of Excellence</span></div>
                  <div className="hero-stat"><span className="num">2500+</span><span className="lbl">Clients Worldwide</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME STRIP */}
      <section className="outcome-strip">
        <div className="container">
          <div className="outcome-cards">
            <div className="outcome-card">
              <div className="oc-num">£4,200+</div>
              <div className="oc-txt">Average annual tax savings per client</div>
            </div>
            <div className="outcome-card">
              <div className="oc-num">10+ hrs</div>
              <div className="oc-txt">Monthly time saved on financial admin</div>
            </div>
            <div className="outcome-card">
              <div className="oc-num">100%</div>
              <div className="oc-txt">HMRC compliant with zero penalties</div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="tools">
        <div className="container">
          <div className="tools-header">
            <div className="s-label">Free Financial Tools</div>
            <h2 className="s-title">Calculate Your <em>Savings</em> Instantly</h2>
          </div>
          <div className="tools-tabs">
            <button className={`tool-tab ${activeTool === 'takehome' ? 'active' : ''}`} onClick={() => setActiveTool('takehome')}>💰 Take-Home Pay</button>
            <button className={`tool-tab ${activeTool === 'compare' ? 'active' : ''}`} onClick={() => setActiveTool('compare')}>⚖️ Sole Trader vs Ltd</button>
          </div>

          {activeTool === 'takehome' && (
            <div className="tool-panel active">
              <div className="tool-layout">
                <div className="tool-form">
                  <h3>Take-Home Pay Calculator</h3>
                  <div className="tf-group">
                    <label>Annual Gross Salary (£)</label>
                    <input type="number" value={thSalary} onChange={(e) => setThSalary(Number(e.target.value))} />
                  </div>
                  <div className="tf-group">
                    <label>Pension Contribution (%)</label>
                    <input type="number" value={thPension} onChange={(e) => setThPension(Number(e.target.value))} />
                  </div>
                  <button className="tf-btn" onClick={calculateTakeHome}>Calculate</button>
                </div>
                <div className="tool-result">
                  {thResult ? (
                    <div id="th-results-body">
                      <div className="result-row"><span>Gross</span><span>£{thSalary.toLocaleString()}</span></div>
                      <div className="result-row"><span>Tax</span><span style={{color:'var(--red)'}}>-£{Math.round(thResult.tax).toLocaleString()}</span></div>
                      <div className="result-row total"><span>Annual Take-Home</span><span>£{Math.round(thResult.takeHome).toLocaleString()}</span></div>
                      <div className="result-row highlight"><span>Monthly</span><span>£{Math.round(thResult.monthly).toLocaleString()}</span></div>
                    </div>
                  ) : (
                    <p style={{textAlign:'center', padding:'40px 0', color:'#999'}}>Enter details to see results</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CHATBOT */}
      <button className="chatbot-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>
        <div className="chatbot-badge" />
        <div className="toggle-calcy">
           <div className="calc-body"><div className="calc-shell"><div className="calc-display"><div className="display-text">TAX?</div></div></div></div>
        </div>
      </button>

      <div className={`chatbot ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h4>Makesworth Tax Assistant</h4>
          <button onClick={() => setIsChatOpen(false)}>✕</button>
        </div>
        <div className="chatbot-msgs">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.type}`}>{m.text}</div>
          ))}
        </div>
        <div className="chatbot-input">
          <input type="text" placeholder="Ask a UK tax question..." />
          <button>Send</button>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>© 2025 Makesworth Accountants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
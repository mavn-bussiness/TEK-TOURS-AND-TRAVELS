import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  { image: '/images/IMG_20230828_131906.jpg', region: 'East Asia', location: 'Beijing, China', headline: 'Walking the Great\nWall of China', body: 'An ancient wonder stretching 21,000 km across misty mountains — now yours to conquer.', cta: 'Plan China Trip', ctaLink: '/packages', accent: '#c9a96e', tag: 'Cultural' },
  { image: 'https://images.unsplash.com/photo-1509897739002-791fa79aac9b?q=80&w=1920&auto=format&fit=crop', region: 'East Africa', location: 'Bwindi, Uganda', headline: 'Face-to-Face\nwith Gorillas', body: "Deep in ancient rainforest, 700 mountain gorillas wait. Half the world's population — right here.", cta: 'Book the Trek', ctaLink: '/booking', accent: '#7ab87a', tag: 'Wildlife' },
  { image: '/images/Snapchat-1906972103.jpg', region: 'Middle East', location: 'Dubai, UAE', headline: 'Desert Nights\nand Marina Lights', body: 'From golden dunes at sunset to the glittering skyline — Dubai never stops surprising.', cta: 'Explore Dubai', ctaLink: '/packages', accent: '#c9a96e', tag: 'Luxury' },
  { image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80', region: 'East Africa', location: 'Serengeti, Tanzania', headline: 'The Great\nMigration', body: '1.5 million wildebeest, 350,000 gazelle — the greatest wildlife spectacle on Earth.', cta: 'Safari Packages', ctaLink: '/packages', accent: '#d4855a', tag: 'Safari' },
  { image: '/images/murchison-falls-view.jpg', region: 'East Africa', location: 'Murchison Falls, Uganda', headline: 'Where the Nile\nThunders', body: "The world's most powerful waterfall — the entire Nile forced through a 7-metre gap.", cta: 'See Murchison', ctaLink: '/destinations', accent: '#5b9bd5', tag: 'Nature' },
  { image: '/images/Snapchat-740087849.jpg', region: 'Southeast Asia', location: 'Phuket, Thailand', headline: 'Thai Islands\nEscape', body: 'Limestone karsts, crystal seas, longtail boats to hidden coves. Time stops here.', cta: 'Thailand Tours', ctaLink: '/packages', accent: '#4ab3c8', tag: 'Beach' },
  { image: '/images/mountain-climbing.avif', region: 'East Africa', location: 'Rwenzori, Uganda', headline: 'Mountains\nof the Moon', body: "Africa's last equatorial glaciers — a legendary high-altitude adventure like no other.", cta: 'Mountain Trek', ctaLink: '/packages', accent: '#9b7ec8', tag: 'Adventure' },
  { image: '/images/Snapchat-783147270.jpg', region: 'Europe & Asia', location: 'Istanbul, Turkey', headline: 'Where East\nMeets West', body: 'Two continents, one city. Byzantine domes, spice-scented bazaars, Bosphorus sunsets.', cta: 'Istanbul Packages', ctaLink: '/packages', accent: '#c97a7a', tag: 'Cultural' },
  { image: '/images/lake-bunyonyi.avif', region: 'East Africa', location: 'Lake Bunyonyi, Uganda', headline: "Africa's Most\nBeautiful Lake", body: '29 islands, terraced emerald hills, mirror-calm water. The perfect place to exhale.', cta: 'Lake Retreats', ctaLink: '/destinations', accent: '#6aab8a', tag: 'Nature' },
];

const DURATION = 6500;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [dir, setDir] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startRef = useRef(Date.now());

  const go = useCallback((nextIdx) => {
    if (transitioning || nextIdx === current) return;
    setTransitioning(true);
    setPrevIdx(current);
    setDir(nextIdx > current ? 1 : -1);
    setCurrent(nextIdx);
    setProgress(0);
    startRef.current = Date.now();
    setTimeout(() => { setPrevIdx(null); setTransitioning(false); }, 850);
  }, [current, transitioning]);

  const next = useCallback(() => go((current + 1) % slides.length), [go, current]);
  const back = useCallback(() => go((current - 1 + slides.length) % slides.length), [go, current]);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, DURATION);
    return () => clearInterval(timerRef.current);
  }, [next]);

  useEffect(() => {
    clearInterval(progressRef.current);
    startRef.current = Date.now();
    setProgress(0);
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
    }, 40);
    return () => clearInterval(progressRef.current);
  }, [current]);

  const slide = slides[current];
  const prevSlide = prevIdx !== null ? slides[prevIdx] : null;

  const overlayGrad = 'linear-gradient(110deg, rgba(10,10,15,0.88) 0%, rgba(10,10,15,0.52) 55%, rgba(10,10,15,0.26) 100%)';
  const bottomGrad  = 'linear-gradient(to top, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.12) 65%, transparent 100%)';

  return (
    <section style={{ position:'relative', width:'100%', height:'100svh', minHeight:600, background:'#0a0a0f', overflow:'hidden' }}>
      <style>{`
        @keyframes kbIn    { from { transform:scale(1.07); } to { transform:scale(1); } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes growW   { from { width:0; opacity:0; } to { opacity:1; } }
        @keyframes sInR    { from { transform:translateX(5%);  opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes sInL    { from { transform:translateX(-5%); opacity:0; } to { transform:translateX(0); opacity:1; } }
        @keyframes sOutL   { from { transform:translateX(0); opacity:1; } to { transform:translateX(-5%); opacity:0; } }
        @keyframes sOutR   { from { transform:translateX(0); opacity:1; } to { transform:translateX(5%);  opacity:0; } }
      `}</style>

      {/* Outgoing */}
      {prevSlide && (
        <div style={{ position:'absolute', inset:0, zIndex:1, animation:`${dir>0?'sOutL':'sOutR'} 0.85s cubic-bezier(0.76,0,0.24,1) forwards` }}>
          <img src={prevSlide.image} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
          <div style={{ position:'absolute', inset:0, background:overlayGrad }} />
          <div style={{ position:'absolute', inset:0, background:bottomGrad }} />
        </div>
      )}

      {/* Incoming */}
      <div key={current} style={{ position:'absolute', inset:0, zIndex:2, animation:`${dir>0?'sInR':'sInL'} 0.85s cubic-bezier(0.76,0,0.24,1) forwards` }}>
        <img src={slide.image} alt={slide.location} loading="eager" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', animation:'kbIn 8s ease-out forwards' }} />
        <div style={{ position:'absolute', inset:0, background:overlayGrad }} />
        <div style={{ position:'absolute', inset:0, background:bottomGrad }} />
        <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:10, height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', maxWidth:1280, margin:'0 auto', padding:'0 clamp(24px, 5vw, 64px)', paddingTop:110 }}>

        {/* Top meta */}
        <div key={`m${current}`} style={{ display:'flex', alignItems:'center', gap:12, animation:'fadeUp 0.5s ease 0.1s both' }}>
          <Compass style={{ width:13, height:13, color:slide.accent, flexShrink:0 }} />
          <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>{slide.region}</span>
          <span style={{ display:'inline-block', width:1, height:12, background:'rgba(255,255,255,0.14)' }} />
          <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.26)' }}>
            {String(current+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}
          </span>
        </div>

        {/* Main text block */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:680 }}>

          {/* Tag */}
          <div key={`t${current}`} style={{ display:'inline-flex', alignItems:'center', gap:8, alignSelf:'flex-start', padding:'5px 14px', borderRadius:999, border:`1px solid ${slide.accent}40`, background:`${slide.accent}14`, marginBottom:20, animation:'fadeUp 0.5s ease 0.18s both' }}>
            <span style={{ width:5, height:5, borderRadius:'50%', background:slide.accent }} />
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:slide.accent }}>{slide.tag}</span>
          </div>

          {/* Headline */}
          <h1 key={`h${current}`} style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'clamp(46px,7.5vw,92px)', lineHeight:1.0, letterSpacing:'-0.025em', color:'#fff', whiteSpace:'pre-line', textShadow:'0 6px 36px rgba(0,0,0,0.45)', animation:'fadeUp 0.6s ease 0.22s both', margin:'0 0 0.35em' }}>
            {slide.headline}
          </h1>

          {/* Rule */}
          <div key={`r${current}`} style={{ width:52, height:2, background:`linear-gradient(90deg, ${slide.accent}, transparent)`, marginBottom:'1.3em', animation:'growW 0.5s ease 0.35s both' }} />

          {/* Body */}
          <p key={`b${current}`} style={{ fontFamily:"'Crimson Text',serif", fontSize:'clamp(16px,1.75vw,21px)', color:'rgba(255,255,255,0.68)', lineHeight:1.76, maxWidth:500, animation:'fadeUp 0.6s ease 0.3s both', margin:'0 0 2em' }}>
            {slide.body}
          </p>

          {/* CTAs */}
          <div key={`c${current}`} style={{ display:'flex', gap:12, flexWrap:'wrap', animation:'fadeUp 0.6s ease 0.38s both' }}>
            <Link to={slide.ctaLink} style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'13px 26px', borderRadius:4, background:`linear-gradient(135deg, ${slide.accent}, ${slide.accent}bb)`, color:'#0a0a0f', fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase', boxShadow:`0 8px 26px ${slide.accent}40`, textDecoration:'none', transition:'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 14px 36px ${slide.accent}60`; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow=`0 8px 26px ${slide.accent}40`; }}>
              {slide.cta} <ArrowUpRight style={{ width:13, height:13 }} />
            </Link>
            <Link to="/destinations" style={{ display:'inline-flex', alignItems:'center', padding:'13px 26px', borderRadius:4, border:'1px solid rgba(255,255,255,0.18)', background:'rgba(255,255,255,0.06)', color:'rgba(255,255,255,0.82)', fontFamily:"'Montserrat',sans-serif", fontWeight:600, fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase', backdropFilter:'blur(10px)', textDecoration:'none', transition:'background 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'; }}>
              All Destinations
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div>
          <div style={{ height:1, background:'rgba(255,255,255,0.07)', marginBottom:18 }}>
            <div style={{ height:'100%', width:`${progress}%`, background:`linear-gradient(90deg, ${slide.accent}, ${slide.accent}88)`, transition:'width 0.04s linear', borderRadius:1 }} />
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom:28 }}>
            {/* Location */}
            <div style={{ display:'flex', alignItems:'center', gap:7 }}>
              <MapPin style={{ width:12, height:12, color:slide.accent, flexShrink:0 }} />
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)' }}>{slide.location}</span>
            </div>
            {/* Dots */}
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              {slides.map((_,i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Slide ${i+1}`} style={{ padding:0, border:'none', cursor:'pointer', borderRadius:2, height:2, width:i===current?28:8, background:i===current?slide.accent:'rgba(255,255,255,0.22)', transition:'all 0.35s ease' }} />
              ))}
            </div>
            {/* Arrows */}
            <div style={{ display:'flex', gap:8 }}>
              {[[back,ChevronLeft,'Prev'],[next,ChevronRight,'Next']].map(([fn,Icon,label]) => (
                <button key={label} onClick={fn} aria-label={label} style={{ width:40, height:40, borderRadius:3, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', transition:'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.07)'}>
                  <Icon style={{ width:17, height:17, color:'rgba(255,255,255,0.8)' }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip — XL only */}
      <div style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', zIndex:20, display:'none', flexDirection:'column', gap:7 }} className="xl-thumbs">
        {slides.map((s,i) => (
          <button key={i} onClick={() => go(i)} aria-label={s.location} style={{ width:66, height:44, borderRadius:3, overflow:'hidden', padding:0, border:`2px solid ${i===current?slide.accent:'transparent'}`, opacity:i===current?1:0.38, transition:'all 0.3s ease', cursor:'pointer' }}
            onMouseEnter={e => { if(i!==current) e.currentTarget.style.opacity='0.72'; }}
            onMouseLeave={e => { if(i!==current) e.currentTarget.style.opacity='0.38'; }}>
            <img src={s.image} alt={s.location} style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="lazy" />
          </button>
        ))}
      </div>
      <style>{`@media(min-width:1280px){.xl-thumbs{display:flex!important}}`}</style>
    </section>
  );
};

export default Hero;
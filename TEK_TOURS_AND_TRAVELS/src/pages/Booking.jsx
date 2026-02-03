import { useState } from "react";
import { Mail, MapPin, Check } from "lucide-react";

const CONTACT_EMAIL = "bookings@yoursafari.com";

/* ── optimized image bg (fixed, behind everything) ── */
const ImageBg = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
    <img
      src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80&auto=format&fit=crop"
      alt="Ocean view"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      loading="eager"
    />
    {/* multi-stop overlay: darker at top & bottom, lighter mid so glass pops */}
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(180deg, rgba(6,40,65,0.82) 0%, rgba(8,55,85,0.55) 40%, rgba(8,55,85,0.55) 60%, rgba(6,40,65,0.82) 100%)"
    }} />
  </div>
);

/* ── shared styles ── */
const styles = {
  glass: {
    background: "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
  },
  input: {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.22)",
    color: "#fff",
    outline: "none",
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "'Montserrat', sans-serif",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box"
  },
  label: {
    display: "block",
    fontSize: 11,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "rgba(255,255,255,0.6)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 6
  }
};

/* ── focus / placeholder via a tiny <style> injected once ── */
const InjectStyles = () => (
  <style>{`
    .glass-input::placeholder { color: rgba(255,255,255,0.38); }
    .glass-input:focus {
      border-color: rgba(125,211,252,0.7) !important;
      box-shadow: 0 0 0 3px rgba(56,189,248,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .glass-input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px rgba(255,255,255,0.12) inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    /* responsive: stack rows on small screens */
    .row-pair { display: flex; gap: 12px; }
    @media (max-width: 520px) {
      .row-pair { flex-direction: column; gap: 14px; }
    }
  `}</style>
);

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });
  const reset = () => { setSent(false); setForm({ name:"", email:"", phone:"", destination:"", message:"" }); };
  const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSend = () => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Destination Interest: ${form.destination || "Not specified"}`,
      "",
      "─────────────────────",
      form.message || "(No additional message)"
    ].join("\n");
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Tour Booking Enquiry – " + (form.name || "New Visitor"))}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setSent(true);
  };

  /* ── SUCCESS ── */
  if (sent) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px", position: "relative" }}>
        <InjectStyles />
        <ImageBg />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 380, width: "100%" }}>
          <div style={{
            width: 88, height: 88, borderRadius: "50%", margin: "0 auto 24px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #38bdf8, #7dd3fc)",
            boxShadow: "0 4px 24px rgba(56,189,248,0.4)"
          }}>
            <Check size={42} color="#fff" strokeWidth={3} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#fff", margin: "0 0 10px", fontWeight: 700 }}>
            Email Opened!
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(186,230,253,0.9)", lineHeight: 1.6, margin: "0 0 24px" }}>
            Your details are pre-filled. Just hit <strong style={{ color: "#fff" }}>Send</strong> in your email app.
          </p>
          <button onClick={reset} style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600,
            background: "linear-gradient(135deg, #38bdf8, #7dd3fc)", color: "#0c4a6e",
            border: "none", borderRadius: 10, padding: "11px 28px", cursor: "pointer",
            boxShadow: "0 4px 16px rgba(56,189,248,0.35)", transition: "opacity 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            New Enquiry
          </button>
        </div>
      </div>
    );
  }

  /* ── MAIN ── */
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <InjectStyles />
      <ImageBg />

      {/* content – 120 px top pad clears any fixed nav */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 600, margin: "0 auto",
        padding: "120px 18px 50px",
        minHeight: "100vh", display: "flex", flexDirection: "column"
      }}>

        {/* header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 18px", borderRadius: 999, marginBottom: 14,
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.18)"
          }}>
            <MapPin size={15} color="#7dd3fc" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: "#bae6fd", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              Destinations
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 6vw, 40px)", color: "#fff", margin: "0 0 8px", fontWeight: 700, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
            Plan Your Tour
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(186,230,253,0.85)", margin: 0 }}>
            Tell us where you'd like to go — we'll handle the rest
          </p>
        </div>

        {/* ── GLASS CARD ── */}
        <div style={{ ...styles.glass, borderRadius: 20, overflow: "hidden", flex: 1 }}>
          <div style={{ height: 3, background: "linear-gradient(90deg, transparent, rgba(125,211,252,0.7), rgba(56,189,248,0.9), rgba(125,211,252,0.7), transparent)" }} />

          <div style={{ padding: "24px 20px 28px" }}>
            {/* row 1 – name & email */}
            <div className="row-pair">
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Name *</label>
                <input className="glass-input" type="text" name="name" value={form.name} onChange={change} required placeholder="Jane Doe" style={styles.input} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Email *</label>
                <input className="glass-input" type="email" name="email" value={form.email} onChange={change} required placeholder="jane@email.com" style={styles.input} />
              </div>
            </div>

            {/* row 2 – phone & destination */}
            <div className="row-pair" style={{ marginTop: 14 }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Phone</label>
                <input className="glass-input" type="tel" name="phone" value={form.phone} onChange={change} placeholder="+256 700 000 000" style={styles.input} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Destination</label>
                <input className="glass-input" type="text" name="destination" value={form.destination} onChange={change} placeholder="e.g. Bwindi, Zanzibar…" style={styles.input} />
              </div>
            </div>

            {/* message */}
            <div style={{ marginTop: 14 }}>
              <label style={styles.label}>
                Anything else? <span style={{ textTransform: "none", fontWeight: 400, color: "rgba(255,255,255,0.38)" }}>(dates, group size, budget…)</span>
              </label>
              <textarea className="glass-input" name="message" value={form.message} onChange={change} rows={4}
                placeholder="Travel dates, number of people, budget, questions… anything at all."
                style={{ ...styles.input, resize: "none", lineHeight: 1.6 }} />
            </div>

            {/* send button */}
            <button type="button" onClick={handleSend} style={{
              marginTop: 20, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "13px 0", borderRadius: 12, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #0369a1, #0284c7)",
              color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "'Montserrat', sans-serif",
              boxShadow: "0 4px 20px rgba(3,105,161,0.45)", transition: "transform 0.15s, box-shadow 0.15s"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(3,105,161,0.55)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(3,105,161,0.45)"; }}
              onMouseDown={e => { e.currentTarget.style.transform = "scale(0.975)"; }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
            >
              <Mail size={18} />
              Send Enquiry
            </button>

            <p style={{ textAlign: "center", marginTop: 12, fontSize: 12, fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.42)", lineHeight: 1.5 }}>
              Opens your email with details pre-filled — just hit send.
            </p>
          </div>
        </div>

        {/* branding */}
        <p style={{ textAlign: "center", marginTop: 18, fontSize: 11, fontFamily: "'Montserrat', sans-serif", color: "rgba(186,230,253,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Destinations · The Holiday &amp; Travel Show
        </p>
      </div>
    </div>
  );
}
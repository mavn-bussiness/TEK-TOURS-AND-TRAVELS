import { useState } from "react";
import { Mail, MapPin, Check, Phone, User, Calendar, Users, MessageSquare, ChevronDown } from "lucide-react";

const CONTACT_EMAIL = "info@tektours.com";

const destinations = [
  "Bwindi – Gorilla Trekking",
  "Murchison Falls, Uganda",
  "Queen Elizabeth NP, Uganda",
  "Kidepo Valley, Uganda",
  "Lake Bunyonyi, Uganda",
  "Rwenzori Mountains, Uganda",
  "Jinja – Source of the Nile",
  "Masai Mara, Kenya",
  "Serengeti, Tanzania",
  "Zanzibar, Tanzania",
  "Mount Kilimanjaro, Tanzania",
  "Ngorongoro Crater, Tanzania",
  "Volcanoes NP, Rwanda",
  "Beijing & Great Wall, China",
  "Phuket & Phi Phi, Thailand",
  "Dubai, UAE",
  "Istanbul, Turkey",
  "Custom / Multiple Destinations",
];

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    destination: "", travelDate: "",
    groupSize: "", budget: "", message: "",
  });

  const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", phone: "", destination: "", travelDate: "", groupSize: "", budget: "", message: "" });
  };

  const handleSend = () => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Destination: ${form.destination || "Not specified"}`,
      `Travel Date: ${form.travelDate || "Not specified"}`,
      `Group Size: ${form.groupSize || "Not specified"}`,
      `Budget: ${form.budget || "Not specified"}`,
      "",
      "──────────────────────────",
      "Additional Information:",
      form.message || "(None provided)",
    ].join("\n");

    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Tour Booking Enquiry – " + (form.name || "New Visitor"))}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setSent(true);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "13px 14px 13px 44px",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "'Montserrat', sans-serif",
    background: focused === name ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
    border: `1px solid ${focused === name ? "rgba(184,151,90,0.6)" : "rgba(255,255,255,0.1)"}`,
    color: "#fff",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    boxShadow: focused === name ? "0 0 0 3px rgba(184,151,90,0.12)" : "none",
  });

  const textareaStyle = {
    width: "100%",
    padding: "13px 14px 13px 44px",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "'Montserrat', sans-serif",
    background: focused === "message" ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
    border: `1px solid ${focused === "message" ? "rgba(184,151,90,0.6)" : "rgba(255,255,255,0.1)"}`,
    color: "#fff",
    outline: "none",
    resize: "none",
    lineHeight: 1.6,
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    boxShadow: focused === "message" ? "0 0 0 3px rgba(184,151,90,0.12)" : "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: "rgba(255,255,255,0.45)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: 7,
  };

  const iconStyle = {
    position: "absolute",
    left: 14,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    width: 16,
    height: 16,
  };

  // Success screen
  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#0a0a0f' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
            alt="" className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
        </div>
        <div className="relative z-10 text-center max-w-md w-full">
          <div className="inline-flex items-center justify-center rounded-full mb-6"
            style={{ width: 90, height: 90, background: 'linear-gradient(135deg, #b8975a, #d4af6e)', boxShadow: '0 8px 32px rgba(184,151,90,0.4)' }}>
            <Check size={40} color="#0a0a0f" strokeWidth={3} />
          </div>
          <h1 className="text-white mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700 }}>
            Email Opened!
          </h1>
          <p className="mb-8" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            Your enquiry details are pre-filled. Just hit <strong className="text-white">Send</strong> in your email app and we'll be in touch shortly.
          </p>
          <button onClick={reset}
            className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
            style={{ background: 'linear-gradient(135deg, #b8975a, #d4af6e)', color: '#0a0a0f', fontFamily: "'Montserrat', sans-serif" }}>
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* Background image */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.85) 100%)' }} />
      </div>

      <style>{`
        .bk-input::placeholder { color: rgba(255,255,255,0.28); }
        .bk-select option { background: #1a1a24; color: #fff; }
      `}</style>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row" style={{ paddingTop: 80 }}>

        {/* ── LEFT PANEL ── */}
        <div className="lg:w-2/5 xl:w-1/3 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16">
          <span className="inline-block px-4 py-2 rounded-full border text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif", color: '#b8975a', borderColor: 'rgba(184,151,90,0.3)', background: 'rgba(184,151,90,0.08)' }}>
            Start Your Journey
          </span>

          <h1 className="text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px, 4vw, 58px)', letterSpacing: '-0.02em' }}>
            Plan Your <br />
            <span className="italic font-normal" style={{ color: '#c9e89d' }}>Next Adventure</span>
          </h1>

          <p className="mb-10" style={{ fontFamily: "'Crimson Text', serif", fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
            Fill in the form and we'll put together a personalised itinerary for you. No pressure — just great travel planning.
          </p>

          {/* Contact info */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email Us', value: 'info@tektours.com' },
              { icon: Phone, label: 'Call / WhatsApp', value: '+256 743 161 414' },
              { icon: MapPin, label: 'Based In', value: 'Plot 330 Block 10 House 15, Kiyindi Lane Nakulabye Trading Center, Bukesa Mengo' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{ width: 44, height: 44, background: 'rgba(184,151,90,0.12)', border: '1px solid rgba(184,151,90,0.2)' }}>
                    <Icon style={{ width: 18, height: 18, color: '#b8975a' }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.35)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.3)' }}>
              We arrange trips to
            </p>
            <div className="flex flex-wrap gap-2">
              {['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'China', 'Thailand', 'Dubai', 'Turkey'].map(d => (
                <span key={d} className="px-3 py-1 rounded-full text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif", background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — FORM ── */}
        <div className="lg:w-3/5 xl:w-2/3 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
          <div className="w-full max-w-2xl">

            {/* Card */}
            <div style={{
              borderRadius: 20,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              overflow: 'hidden',
            }}>
              {/* Gold top bar */}
              <div style={{ height: 3, background: 'linear-gradient(90deg, transparent, #b8975a, #d4af6e, #b8975a, transparent)' }} />

              <div style={{ padding: '32px 28px 36px' }}>
                <h2 className="text-white mb-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 24 }}>
                  Booking Enquiry
                </h2>
                <p className="mb-8 text-sm" style={{ fontFamily: "'Crimson Text', serif", fontSize: 16, color: 'rgba(255,255,255,0.45)' }}>
                  Fields marked * are required — everything else helps us plan better.
                </p>

                <div className="space-y-5">

                  {/* Row 1: Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <div style={{ position: 'relative' }}>
                        <User style={{ ...iconStyle, color: focused === 'name' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <input className="bk-input" type="text" name="name" value={form.name} onChange={change}
                          placeholder="Jane Doe" style={inputStyle('name')}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <div style={{ position: 'relative' }}>
                        <Mail style={{ ...iconStyle, color: focused === 'email' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <input className="bk-input" type="email" name="email" value={form.email} onChange={change}
                          placeholder="jane@email.com" style={inputStyle('email')}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone + Destination */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <div style={{ position: 'relative' }}>
                        <Phone style={{ ...iconStyle, color: focused === 'phone' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <input className="bk-input" type="tel" name="phone" value={form.phone} onChange={change}
                          placeholder="+256 743 161 414" style={inputStyle('phone')}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Destination *</label>
                      <div style={{ position: 'relative' }}>
                        <MapPin style={{ ...iconStyle, color: focused === 'destination' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <select className="bk-input bk-select" name="destination" value={form.destination} onChange={change}
                          style={{ ...inputStyle('destination'), appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}
                          onFocus={() => setFocused('destination')} onBlur={() => setFocused(null)}>
                          <option value="" disabled>Select destination…</option>
                          {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        <ChevronDown style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Travel Date + Group Size */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Preferred Travel Date</label>
                      <div style={{ position: 'relative' }}>
                        <Calendar style={{ ...iconStyle, color: focused === 'travelDate' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <input className="bk-input" type="date" name="travelDate" value={form.travelDate} onChange={change}
                          style={{ ...inputStyle('travelDate'), colorScheme: 'dark' }}
                          onFocus={() => setFocused('travelDate')} onBlur={() => setFocused(null)} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Group Size</label>
                      <div style={{ position: 'relative' }}>
                        <Users style={{ ...iconStyle, color: focused === 'groupSize' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                        <select className="bk-input bk-select" name="groupSize" value={form.groupSize} onChange={change}
                          style={{ ...inputStyle('groupSize'), appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}
                          onFocus={() => setFocused('groupSize')} onBlur={() => setFocused(null)}>
                          <option value="" disabled>Select group size…</option>
                          <option>Solo traveller</option>
                          <option>2 people</option>
                          <option>3–5 people</option>
                          <option>6–10 people</option>
                          <option>11–20 people</option>
                          <option>20+ people</option>
                        </select>
                        <ChevronDown style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
                      </div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label style={labelStyle}>Approximate Budget (per person)</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: focused === 'budget' ? '#b8975a' : 'rgba(255,255,255,0.25)', fontSize: 14, fontFamily: "'Montserrat', sans-serif", pointerEvents: 'none' }}>$</span>
                      <select className="bk-input bk-select" name="budget" value={form.budget} onChange={change}
                        style={{ ...inputStyle('budget'), appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}
                        onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)}>
                        <option value="" disabled>Select budget range…</option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $2,000</option>
                        <option>$2,000 – $4,000</option>
                        <option>$4,000 – $7,000</option>
                        <option>$7,000+</option>
                        <option>Flexible / Not sure yet</option>
                      </select>
                      <ChevronDown style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 15, height: 15, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Additional Details</label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare style={{ position: 'absolute', left: 14, top: 16, pointerEvents: 'none', width: 16, height: 16, color: focused === 'message' ? '#b8975a' : 'rgba(255,255,255,0.25)' }} />
                      <textarea className="bk-input" name="message" value={form.message} onChange={change} rows={4}
                        placeholder="Any specific interests, dietary requirements, accessibility needs, or questions…"
                        style={textareaStyle}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '4px 0' }} />

                  {/* Submit */}
                  <button type="button" onClick={handleSend}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm transition-all duration-300 group"
                    style={{
                      background: 'linear-gradient(135deg, #b8975a, #d4af6e)',
                      color: '#0a0a0f',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 15,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(184,151,90,0.35)',
                      letterSpacing: '0.04em',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,151,90,0.5)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(184,151,90,0.35)'; }}
                  >
                    <Mail size={18} />
                    Send Enquiry
                  </button>

                  <p className="text-center text-xs" style={{ fontFamily: "'Montserrat', sans-serif", color: 'rgba(255,255,255,0.28)', lineHeight: 1.6 }}>
                    Opens your email app with all details pre-filled — just hit Send.
                    <br />We typically respond within 24 hours.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
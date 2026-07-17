'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mbdnrgzg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <style>{`
        .nk-contact {
          background-color: #F5EFE6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .nk-contact-hero {
          background-color: #1E2318;
          padding: 5rem 1.25rem 4rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .nk-contact-hero {
            padding: 7rem 3rem 5rem;
          }
        }
        .nk-contact-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(245,239,230,0.35);
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .nk-contact-hero-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 400;
          font-size: clamp(36px, 8vw, 80px);
          color: #F5EFE6;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .nk-contact-hero-sub {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: rgba(245,239,230,0.4);
          margin: 0 auto;
          max-width: 400px;
          line-height: 1.7;
        }

        /* ── BODY ── */
        .nk-contact-body {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 1.25rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .nk-contact-body {
            grid-template-columns: 1fr 1.6fr;
            gap: 5rem;
            padding: 5rem 3rem;
          }
        }

        /* ── LEFT PANEL ── */
        .nk-contact-info-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(30,35,24,0.35);
          text-transform: uppercase;
          margin: 0 0 1.5rem;
        }
        .nk-contact-info-list {
          list-style: none;
          padding: 0;
          margin: 0 0 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .nk-contact-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .nk-contact-info-type {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(30,35,24,0.35);
          text-transform: uppercase;
          margin: 0;
        }
        .nk-contact-info-value {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #1E2318;
          margin: 0;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .nk-contact-info-value:hover {
          opacity: 0.6;
        }

        .nk-contact-divider {
          height: 1px;
          background: rgba(30,35,24,0.1);
          margin: 0 0 2.5rem;
        }

        .nk-contact-hours-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: #1E2318;
          margin: 0 0 0.75rem;
        }
        .nk-contact-hours-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(30,35,24,0.5);
          margin: 0;
        }

        /* ── FORM ── */
        .nk-contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .nk-contact-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 480px) {
          .nk-contact-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        .nk-contact-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .nk-contact-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          color: rgba(30,35,24,0.45);
          text-transform: uppercase;
        }
        .nk-contact-input,
        .nk-contact-textarea,
        .nk-contact-select {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: #1E2318;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(30,35,24,0.2);
          border-radius: 0;
          padding: 0.6rem 0;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
          appearance: none;
          -webkit-appearance: none;
        }
        .nk-contact-input::placeholder,
        .nk-contact-textarea::placeholder {
          color: rgba(30,35,24,0.25);
        }
        .nk-contact-input:focus,
        .nk-contact-textarea:focus,
        .nk-contact-select:focus {
          border-bottom-color: #1E2318;
        }
        .nk-contact-textarea {
          resize: none;
          min-height: 120px;
          line-height: 1.7;
        }
        .nk-contact-select {
          cursor: pointer;
          color: rgba(30,35,24,0.5);
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%231E2318' stroke-opacity='0.4' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 4px center;
          padding-right: 20px;
        }
        .nk-contact-select option {
          color: #1E2318;
        }

        .nk-contact-submit {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F5EFE6;
          background: #1E2318;
          border: none;
          padding: 1rem 2.5rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: opacity 0.2s;
          align-self: flex-start;
          margin-top: 0.5rem;
        }
        .nk-contact-submit:hover {
          opacity: 0.75;
        }
        .nk-contact-submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .nk-contact-submit-arrow {
          font-size: 14px;
          transition: transform 0.25s;
        }
        .nk-contact-submit:hover .nk-contact-submit-arrow {
          transform: translateX(4px);
        }

        /* ── STATUS MESSAGES ── */
        .nk-contact-success {
          background: rgba(30,35,24,0.05);
          border-left: 2px solid #1E2318;
          padding: 1rem 1.25rem;
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: #1E2318;
          line-height: 1.6;
        }
        .nk-contact-error {
          background: rgba(180,60,30,0.06);
          border-left: 2px solid #B43C1E;
          padding: 1rem 1.25rem;
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: #B43C1E;
          line-height: 1.6;
        }

        /* ── BOTTOM STRIP ── */
        .nk-contact-strip {
          background-color: #1E2318;
          padding: 2.5rem 1.25rem;
        }
        @media (min-width: 768px) {
          .nk-contact-strip {
            padding: 3rem;
          }
        }
        .nk-contact-strip-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .nk-contact-strip-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .nk-contact-strip-text {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(18px, 3vw, 28px);
          font-weight: 400;
          color: #F5EFE6;
          margin: 0;
          line-height: 1.2;
        }
        .nk-contact-strip-sub {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(245,239,230,0.3);
          text-transform: uppercase;
          margin: 0.3rem 0 0;
        }
        .nk-contact-strip-link {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #F5EFE6;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(245,239,230,0.25);
          padding: 0.75rem 1.5rem;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .nk-contact-strip-link:hover {
          background: #F5EFE6;
          color: #1E2318;
        }
      `}</style>

      <div className="nk-contact">

        {/* ── HEADER ── */}
        <Header />

        {/* ── HERO ── */}
        <div className="nk-contact-hero">
          <p className="nk-contact-eyebrow">Get in touch</p>
          <h1 className="nk-contact-hero-heading">Contact Us</h1>
          <p className="nk-contact-hero-sub">
            Have a custom order in mind, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        {/* ── BODY ── */}
        <div className="nk-contact-body">

          {/* LEFT — info */}
          <div>
            <p className="nk-contact-info-label">Reach us directly</p>
            <ul className="nk-contact-info-list">
              <li className="nk-contact-info-item">
                <p className="nk-contact-info-type">Email</p>
                <a href="mailto:nkhandbag@gmail.com" className="nk-contact-info-value">
                  nkhandbag@gmail.com
                </a>
              </li>
              <li className="nk-contact-info-item">
                <p className="nk-contact-info-type">WhatsApp</p>
                <a href="https://wa.me/918439998480" target="_blank" rel="noopener noreferrer" className="nk-contact-info-value">
                  +91 8439998480
                </a>
                <a href="https://wa.me/919315101359" target="_blank" rel="noopener noreferrer" className="nk-contact-info-value">
                  +91 9315101359 
                </a>
                <a href="https://wa.me/917303788877" target="_blank" rel="noopener noreferrer" className="nk-contact-info-value">
                  +91 7303788877
                </a>
                <a href="https://wa.me/919867135289" target="_blank" rel="noopener noreferrer" className="nk-contact-info-value">
                  +91 9867135289
                </a>
              </li>
              <li className="nk-contact-info-item">
                <p className="nk-contact-info-type">Instagram</p>
                <a href="https://instagram.com/nkhandbag" target="_blank" rel="noopener noreferrer" className="nk-contact-info-value">
                  @nkhandbag
                </a>
              </li>
              <li className="nk-contact-info-item">
                <p className="nk-contact-info-type">Location</p>
                <p className="nk-contact-info-value" style={{ cursor: 'default' }}>
                  Mumbai, Maharashtra
                </p>
              </li>
            </ul>

            <div className="nk-contact-divider" />

            <p className="nk-contact-hours-heading">Working hours</p>
            <p className="nk-contact-hours-text">
              Monday – Saturday<br />
              10:00 am – 7:00 pm IST<br /><br />
              We typically respond within 24 hours.
            </p>
          </div>

          {/* RIGHT — form */}
          <div>
            {status === 'success' ? (
              <div className="nk-contact-success">
                Message received — we'll get back to you within 24 hours.
              </div>
            ) : (
              <form className="nk-contact-form" onSubmit={handleSubmit}>

                <div className="nk-contact-row">
                  <div className="nk-contact-field">
                    <label className="nk-contact-label">Name</label>
                    <input
                      className="nk-contact-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="nk-contact-field">
                    <label className="nk-contact-label">Email</label>
                    <input
                      className="nk-contact-input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="nk-contact-field">
                  <label className="nk-contact-label">I'm interested in</label>
                  <select
                    className="nk-contact-select"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Shopping Bags">Shopping Bags</option>
                    <option value="Event Bags">Event Bags</option>
                    <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                    <option value="General Query">General Query</option>
                  </select>
                </div>

                <div className="nk-contact-field">
                  <label className="nk-contact-label">Message</label>
                  <textarea
                    className="nk-contact-textarea"
                    name="message"
                    placeholder="Tell us what you have in mind..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="nk-contact-error">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  className="nk-contact-submit"
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && (
                    <span className="nk-contact-submit-arrow">→</span>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className="nk-contact-strip">
          <div className="nk-contact-strip-inner">
            <div>
              <p className="nk-contact-strip-text">Looking for something specific?</p>
              <p className="nk-contact-strip-sub">Browse our full collection</p>
            </div>
            <a href="/products" className="nk-contact-strip-link">
              Shop Now →
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
export function OurStory() {
  return (
    <>
      <style>{`
        .nk-story {
          background-color: #1E2318;
          overflow-x: hidden;
        }

        /* ── HEADER ── */
        .nk-story-header {
          padding: 3rem 1.25rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (min-width: 768px) {
          .nk-story-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            padding: 4rem 3rem 2rem;
          }
        }
        .nk-story-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          color: rgba(245,239,230,0.35);
          text-transform: uppercase;
          margin: 0;
        }
        .nk-story-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 400;
          font-size: clamp(28px, 6vw, 56px);
          color: #F5EFE6;
          line-height: 1;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .nk-story-tagline {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: rgba(245,239,230,0.4);
          margin: 0;
          max-width: 320px;
          line-height: 1.6;
        }

        /* ── TIMELINE ── */
        /* Mobile: vertical stacked */
        .nk-story-timeline-wrap {
          padding: 2rem 1.25rem 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .nk-story-timeline-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 2rem 3rem 3rem;
          }
          .nk-story-timeline-wrap::-webkit-scrollbar { display: none; }
        }

        /* Mobile: vertical list */
        .nk-story-timeline {
          display: flex;
          flex-direction: column;
          position: relative;
          gap: 0;
        }
        @media (min-width: 640px) {
          .nk-story-timeline {
            display: grid;
            grid-template-columns: repeat(4, minmax(200px, 1fr));
            flex-direction: unset;
            min-width: 640px;
          }
        }

        /* vertical line on mobile */
        .nk-story-timeline::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(245,239,230,0.12);
        }
        @media (min-width: 640px) {
          .nk-story-timeline::before {
            left: 7px;
            right: 7px;
            top: 6px;
            bottom: auto;
            width: auto;
            height: 1px;
          }
        }

        /* Mobile: side-by-side dot + content */
        .nk-story-item {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 0 0.75rem;
          padding-bottom: 2rem;
          position: relative;
        }
        @media (min-width: 640px) {
          .nk-story-item {
            display: block;
            padding: 0 2rem 0 0;
          }
        }

        .nk-story-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #F5EFE6;
          border: 3px solid #1E2318;
          outline: 1px solid rgba(245,239,230,0.35);
          flex-shrink: 0;
          margin-top: 2px;
        }
        @media (min-width: 640px) {
          .nk-story-dot {
            margin-bottom: 1.25rem;
            margin-top: 0;
          }
        }

        .nk-story-item-body {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .nk-story-year {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          color: rgba(245,239,230,0.35);
          text-transform: uppercase;
          margin: 0 0 0.25rem;
        }
        .nk-story-item-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: #F5EFE6;
          margin: 0 0 0.3rem;
          line-height: 1.2;
        }
        @media (min-width: 640px) {
          .nk-story-item-heading {
            font-size: 20px;
          }
        }
        .nk-story-item-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 12px;
          line-height: 1.7;
          color: rgba(245,239,230,0.45);
          margin: 0;
        }

        /* ── BOTTOM ── */
        .nk-story-bottom {
          border-top: 1px solid rgba(245,239,230,0.07);
          padding: 2rem 1.25rem;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem 1rem;
        }
        @media (min-width: 640px) {
          .nk-story-bottom {
            padding: 2.5rem 3rem;
            gap: 0;
          }
        }

        .nk-story-expertise-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          color: rgba(245,239,230,0.3);
          text-transform: uppercase;
          margin: 0 0 0.75rem;
        }
        .nk-story-expertise-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nk-story-expertise-item {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: #F5EFE6;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        @media (min-width: 640px) {
          .nk-story-expertise-item {
            font-size: 22px;
          }
        }
        .nk-story-expertise-item::before {
          content: '';
          width: 14px;
          height: 1px;
          background: rgba(245,239,230,0.3);
          flex-shrink: 0;
        }

        .nk-story-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-left: 1rem;
          border-left: 1px solid rgba(245,239,230,0.07);
        }
        @media (min-width: 640px) {
          .nk-story-stats {
            padding-left: 3rem;
          }
        }
        .nk-story-stats-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        @media (min-width: 640px) {
          .nk-story-stats-row {
            gap: 3rem;
          }
        }
        .nk-story-stat-num {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(24px, 5vw, 40px);
          font-weight: 300;
          color: #F5EFE6;
          line-height: 1;
          margin: 0 0 0.2rem;
        }
        .nk-story-stat-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          color: rgba(245,239,230,0.3);
          text-transform: uppercase;
          margin: 0;
        }
      `}</style>

      <section className="nk-story" id="our-story">

        {/* ── HEADER ── */}
        <div className="nk-story-header">
          <div>
            <p className="nk-story-eyebrow">Est. 2001</p>
            <h2 className="nk-story-heading">Our Story</h2>
          </div>
          <p className="nk-story-tagline">
            From a small room in Delhi to a well-established studio in Mumbai —
            two decades of handcrafted bags.
          </p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="nk-story-timeline-wrap">
          <div className="nk-story-timeline">
            {[
              {
                year: '2001',
                heading: 'A room in Delhi',
                text: 'Started with a single machine and a belief that craft speaks for itself.',
              },
              {
                year: '2001 – 2011',
                heading: 'A decade of craft',
                text: 'Built a loyal clientele across Delhi through quality and word of mouth.',
              },
              {
                year: '2011 – 2012',
                heading: 'Delhi to Mumbai',
                text: 'Made the leap to Mumbai — bigger workshop, wider market, same hands.',
              },
              {
                year: 'Today',
                heading: 'Still handcrafted',
                text: 'Trusted by brands and individuals. Every bag still made by hand.',
              },
            ].map((item) => (
              <div key={item.year} className="nk-story-item">
                <div className="nk-story-dot" />
                <div className="nk-story-item-body">
                  <p className="nk-story-year">{item.year}</p>
                  <p className="nk-story-item-heading">{item.heading}</p>
                  <p className="nk-story-item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div className="nk-story-bottom">
          <div>
            <p className="nk-story-expertise-label">What we do best</p>
            <ul className="nk-story-expertise-list">
              <li className="nk-story-expertise-item">Shopping Bags</li>
              <li className="nk-story-expertise-item">Event Bags</li>
            </ul>
          </div>

          <div className="nk-story-stats">
            <p className="nk-story-expertise-label">By the numbers</p>
            <div className="nk-story-stats-row">
              <div>
                <p className="nk-story-stat-num">20+</p>
                <p className="nk-story-stat-label">Years</p>
              </div>
              <div>
                <p className="nk-story-stat-num">2</p>
                <p className="nk-story-stat-label">Cities</p>
              </div>
              <div>
                <p className="nk-story-stat-num">100%</p>
                <p className="nk-story-stat-label">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
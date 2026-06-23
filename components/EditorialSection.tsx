import Link from 'next/link';

export function EditorialSection() {
  return (
    <section className="relative overflow-hidden bg-[#EDE8DF] px-5 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-24">

      {/* Subtle vertical grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 12) 100%',
        }}
      />

      {/* Side labels — desktop only */}
      <div className="absolute bottom-12 left-5 hidden lg:block">
        <span
          className="font-mono text-[10px] tracking-widest-plus text-[#8C7B6B]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          CRAFTED IN MUMBAI.
        </span>
      </div>
      <div className="absolute bottom-12 right-5 hidden lg:block">
        <span
          className="font-mono text-[10px] tracking-widest-plus text-[#8C7B6B]"
          style={{ writingMode: 'vertical-rl' }}
        >
          NK·X
        </span>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="relative mx-auto hidden max-w-[1400px] lg:block" style={{ height: '520px' }}>

        <h2
          className="display absolute leading-none text-[#1A1A1A]"
          style={{ fontSize: 'clamp(80px, 10vw, 152px)', top: '0px', left: '14%' }}
        >
          REDEFINE
        </h2>

        <div
          className="absolute overflow-hidden rounded-sm"
          style={{ top: '12px', left: '62%', width: '18vw', maxWidth: '260px', height: '110px', background: 'linear-gradient(135deg, #C8BFB0, #D9D0C1)' }}
        >
          {/* TODO: <Image src="/editorial-1.jpg" alt="" fill className="object-cover" /> */}
        </div>

        <p
          className="absolute text-right text-sm leading-relaxed text-[#6B5E50]"
          style={{ top: '8px', right: '4%', maxWidth: '200px' }}
        >
          Embrace a new perspective and discover what true craftsmanship feels like.
        </p>

        <p
          className="absolute text-sm leading-relaxed text-[#6B5E50]"
          style={{ top: '185px', left: '4%', maxWidth: '200px' }}
        >
          Transform your everyday carry and discover new meaning in the things you hold close.
        </p>

        <h2
          className="display absolute leading-none text-[#1A1A1A]"
          style={{ fontSize: 'clamp(80px, 10vw, 152px)', top: '155px', left: '38%' }}
        >
          YOUR
        </h2>

        <div
          className="absolute overflow-hidden rounded-sm"
          style={{ top: '175px', right: '5%', width: '22vw', maxWidth: '310px', height: '110px', background: 'linear-gradient(135deg, #BFB8A8, #CEC6B4)' }}
        >
          {/* TODO: <Image src="/editorial-2.jpg" alt="" fill className="object-cover" /> */}
        </div>

        <div
          className="absolute overflow-hidden rounded-sm"
          style={{ top: '330px', left: '4%', width: '18vw', maxWidth: '240px', height: '110px', background: 'linear-gradient(135deg, #C8BFB0, #BFB8A8)' }}
        >
          {/* TODO: <Image src="/editorial-3.jpg" alt="" fill className="object-cover" /> */}
        </div>

        <span
          className="absolute font-sans text-2xl text-[#8C7B6B]"
          style={{ top: '374px', left: '28%' }}
        >
          →
        </span>

        <h2
          className="display absolute leading-none text-[#1A1A1A]"
          style={{ fontSize: 'clamp(80px, 10vw, 152px)', top: '310px', left: '38%' }}
        >
          CRAFT
        </h2>

        <div className="absolute" style={{ bottom: '-60px', left: '50%', transform: 'translateX(-50%)' }}>
          <Link
            href="/products"
            className="group flex items-center gap-3 rounded-full border border-[#1A1A1A] bg-transparent px-8 py-3.5 font-mono text-xs tracking-widest-plus text-[#1A1A1A] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#EDE8DF]"
          >
            SHOP NOW
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Spacer for desktop CTA */}
      <div className="hidden lg:block" style={{ height: '80px' }} />

      {/* ── MOBILE LAYOUT ── */}
      <div className="flex flex-col lg:hidden">

        {/* REDEFINE */}
        <h2 className="display text-[clamp(48px,14vw,88px)] leading-[0.88] text-[#1A1A1A]">
          REDEFINE
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6B5E50]">
          Embrace a new perspective and discover what true craftsmanship feels like.
        </p>

        {/* YOUR */}
        <h2 className="display mt-6 text-[clamp(48px,14vw,88px)] leading-[0.88] text-[#1A1A1A]">
          YOUR
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6B5E50]">
          Transform your everyday carry and discover new meaning in the things you hold close.
        </p>

        {/* CRAFT */}
        <h2 className="display mt-6 text-[clamp(48px,14vw,88px)] leading-[0.88] text-[#1A1A1A]">
          CRAFT
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6B5E50]">
          Every stitch, every cut, every finish — made by hand in Mumbai with materials that age beautifully.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="group flex items-center gap-3 rounded-full border border-[#1A1A1A] px-7 py-3 font-mono text-xs tracking-widest-plus text-[#1A1A1A] transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#EDE8DF]"
          >
            SHOP NOW
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS, ADVANTAGES, HERO_IMAGE } from "./data";
import { ContactPopup } from "./ContactPopup";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setContactOpen(true);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="#" className="flex items-center shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/bucket/46ccdb28-75ba-4dca-b464-5fae4ae2a81d.png"
              alt="Труд Вача — логотип"
              className="h-10 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-[hsl(var(--orange))] text-sm font-golos transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
              title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.886a.5.5 0 0 0 .614.614l6.039-1.465A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.884 0-3.65-.495-5.185-1.36l-.368-.212-3.58.869.887-3.58-.23-.378A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
            <a href="tel:+78314000000" className="font-oswald text-gray-900 font-semibold text-base tracking-wide hover:text-[hsl(var(--orange))] transition-colors">
              +7 (831) 400-00-00
            </a>
            <button onClick={openContact}
              className="bg-[hsl(var(--orange))] hover:bg-[hsl(var(--orange-dark))] text-white font-golos font-semibold text-sm px-4 py-2 rounded transition-colors whitespace-nowrap">
              Связаться с нами
            </button>
          </div>

          <button className="lg:hidden text-gray-800 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-2 pt-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="text-gray-700 hover:text-[hsl(var(--orange))] py-2 text-sm font-golos border-b border-gray-100 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="tel:+78314000000" className="block mt-4 font-oswald text-gray-900 font-semibold text-lg">
            +7 (831) 400-00-00
          </a>
          <button onClick={openContact}
            className="mt-3 block w-full text-center bg-[hsl(var(--orange))] text-white font-golos font-semibold py-2 rounded transition-colors">
            Связаться с нами
          </button>
        </div>
      )}
      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Производство сэндвич-панелей" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(210,18%,8%)]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,18%,8%)]/95 via-[hsl(210,18%,8%)]/80 to-[hsl(210,18%,8%)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,18%,8%)]/80 via-transparent to-transparent" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[hsl(var(--orange))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--orange))]/20 border border-[hsl(var(--orange))]/40 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--orange))] rounded-full animate-pulse" />
            <span className="text-[hsl(var(--orange))] text-sm font-golos font-medium">Производитель · г. Вача</span>
          </div>

          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase mb-6">
            Стеновые и кровельные<br />
            <span className="text-[hsl(var(--orange))]">панели</span> от производителя<br />
            в Нижегородской области
          </h1>

          <p className="font-golos text-gray-300 text-lg mb-4">
            Минеральная вата и пенопласт · Прямая отгрузка с цеха · Без наценок
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#calculator"
              className="bg-[hsl(var(--orange))] hover:bg-[hsl(var(--orange-dark))] text-white font-golos font-semibold px-8 py-3 rounded text-base transition-colors">
              Рассчитать стоимость
            </a>
            <a href="#contacts"
              className="border border-white/40 hover:border-[hsl(var(--orange))] text-white font-golos font-semibold px-8 py-3 rounded text-base transition-colors">
              Получить консультацию
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { val: "15+", label: "лет на рынке" },
              { val: "1200+", label: "объектов сдано" },
              { val: "500 км", label: "радиус доставки" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-oswald text-3xl font-bold text-[hsl(var(--orange))]">{s.val}</div>
                <div className="font-golos text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <Icon name="ChevronDown" size={20} className="text-white/50" />
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end gap-4 mb-14">
          <div>
            <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Конкурентные преимущества</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Почему мы?</h2>
          </div>
          <div className="h-1 flex-1 bg-[hsl(var(--orange))]/20 mb-3 hidden sm:block" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => (
            <div key={adv.num}
              className="group border border-gray-100 rounded-lg p-6 hover-lift bg-white shadow-sm hover:border-[hsl(var(--orange))]/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--orange))]/10 rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--orange))] transition-colors">
                  <Icon name={adv.icon as string} size={22} className="text-[hsl(var(--orange))] group-hover:text-white transition-colors" fallback="CheckCircle" />
                </div>
                <span className="font-oswald text-4xl font-bold text-gray-100 group-hover:text-[hsl(var(--orange))]/20 transition-colors">{adv.num}</span>
              </div>
              <h3 className="font-oswald text-lg font-semibold text-[hsl(var(--steel))] uppercase leading-snug mb-2">{adv.title}</h3>
              <p className="font-golos text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
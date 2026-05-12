import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/be6ab502-1cf9-4d6d-8a6b-d122b6743273.jpg";

// ─── DATA ──────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "О нас", href: "#why-us" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Продукция", href: "#products" },
  { label: "Производство", href: "#production" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const ADVANTAGES = [
  {
    icon: "Factory",
    num: "01",
    title: "Собственный производственный цех в Вача",
    desc: "Приглашаем на экскурсию — убедитесь в качестве лично.",
  },
  {
    icon: "ShieldCheck",
    num: "02",
    title: "Качество в приоритете",
    desc: "Честный сердечник и толщина металла. Плотность минеральной ваты и пенопласта строго по ГОСТу.",
  },
  {
    icon: "Truck",
    num: "03",
    title: "Вовремя и быстро доставим до объекта",
    desc: "Фуры выходят прямо с цеха. Нет наценки за перевалочные базы.",
  },
  {
    icon: "BadgePercent",
    num: "04",
    title: "Выгодные условия и честная цена",
    desc: "Гибкая система скидок для оптовых покупателей.",
  },
];

const PANEL_TYPES = ["Стеновые", "Кровельные"] as const;

const WAVE_TYPES: Record<string, string[]> = {
  Стеновые: ["Прямолинейная", "Микроволна", "С-21", "МП-20"],
  Кровельные: ["Трапеция Т-35", "Трапеция Т-75", "Прямолинейная"],
};

const FILLER_TYPES = ["Минеральная вата", "Пенопласт (ПСБ)"];

const THICKNESSES: Record<string, number[]> = {
  "Минеральная вата": [50, 80, 100, 120, 150, 200],
  "Пенопласт (ПСБ)": [50, 80, 100, 120, 150],
};

const COLORS = [
  { name: "RAL 1015", hex: "#E6D2B5", label: "Слоновая кость" },
  { name: "RAL 3005", hex: "#5B1F22", label: "Винно-красный" },
  { name: "RAL 5005", hex: "#005387", label: "Сигнальный синий" },
  { name: "RAL 6005", hex: "#2F4538", label: "Мох-зелёный" },
  { name: "RAL 7004", hex: "#9DA3A6", label: "Сигнальный серый" },
  { name: "RAL 8017", hex: "#442F20", label: "Шоколад" },
  { name: "RAL 9003", hex: "#F2F2F2", label: "Белый сигнальный" },
  { name: "RAL 9006", hex: "#A8A9AD", label: "Бело-алюминий" },
];

const BASE_PRICES: Record<string, Record<number, number>> = {
  "Минеральная вата": { 50: 1450, 80: 1780, 100: 2050, 120: 2350, 150: 2900, 200: 3650 },
  "Пенопласт (ПСБ)": { 50: 980, 80: 1200, 100: 1380, 120: 1560, 150: 1850 },
};

const PRODUCTS = [
  { name: "Профнастил С8", desc: "Для стен и ограждений", price: "от 280 ₽/м²", emoji: "🏗️" },
  { name: "Профнастил НС35", desc: "Для кровли", price: "от 390 ₽/м²", emoji: "🏠" },
  { name: "Металлочерепица", desc: "Монтеррей, Каскад", price: "от 520 ₽/м²", emoji: "🏘️" },
  { name: "Доборные элементы", desc: "Коньки, торцы, нащельники", price: "от 180 ₽/п.м", emoji: "🔩" },
  { name: "Крепёжные системы", desc: "Саморезы, дюбели, кляммеры", price: "от 4 ₽/шт", emoji: "⚙️" },
];

const FAQS = [
  {
    q: "Каковы сроки производства и доставки панелей?",
    a: "Стандартная партия изготавливается за 3–7 рабочих дней. Доставка по Нижегородской области — 1–2 дня после готовности. Точные сроки зависят от объёма заказа и текущей загрузки цеха.",
  },
  {
    q: "Какая минимальная партия для заказа?",
    a: "Минимальный заказ — от 50 кв.м. Для меньших объёмов возможен самовывоз со склада в Вача. Свяжитесь с менеджером для уточнения наличия.",
  },
  {
    q: "Предоставляете ли вы документы качества?",
    a: "Да, на все панели предоставляем сертификаты соответствия, паспорта качества и результаты испытаний. Плотность сердечника подтверждается лабораторными исследованиями.",
  },
  {
    q: "Возможна ли нестандартная длина панели?",
    a: "Производим панели нестандартной длины — от 500 мм до 12 000 мм с шагом 1 мм. Стоимость рассчитывается индивидуально.",
  },
  {
    q: "Есть ли монтаж под ключ?",
    a: "Да, работаем с проверенными монтажными бригадами в регионе. Можем организовать монтаж «под ключ» — обсудите детали с нашим менеджером.",
  },
];

const GALLERY_IMGS = [
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/f3fa3b57-cc52-4e66-8f7f-bf813657d2c1.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/50316217-9523-43d8-b030-07fe0a555907.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/80f83038-a4c9-444e-b5b2-6f748494ce9f.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/439b702d-16dd-48a9-a2be-de4263d3446f.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/8c0e3339-97c6-4f3c-8b3b-70ff4e2ec19c.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/0fb9e89c-a7cd-4fd5-a7f8-6a39942ad922.jpg",
];

// ─── HEADER ────────────────────────────────────────────────────────────────

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{background: 'linear-gradient(to right, #ffffff 260px, hsl(var(--steel)) 260px)'}}>
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
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-[hsl(var(--orange))] text-sm font-golos transition-colors">
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
            <a href="tel:+78314000000" className="font-oswald text-white font-semibold text-base tracking-wide hover:text-[hsl(var(--orange))] transition-colors">
              +7 (831) 400-00-00
            </a>
            <a href="#contacts"
              className="bg-[hsl(var(--orange))] hover:bg-[hsl(var(--orange-dark))] text-white font-golos font-semibold text-sm px-4 py-2 rounded transition-colors whitespace-nowrap">
              Связаться с нами
            </a>
          </div>

          <button className="lg:hidden text-[hsl(var(--steel))] p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(var(--steel-mid))] border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-2 pt-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="text-gray-200 hover:text-[hsl(var(--orange))] py-2 text-sm font-golos border-b border-white/10 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="tel:+78314000000" className="block mt-4 font-oswald text-white font-semibold text-lg">
            +7 (831) 400-00-00
          </a>
          <a href="#contacts" onClick={() => setMobileOpen(false)}
            className="mt-3 block w-full text-center bg-[hsl(var(--orange))] text-white font-golos font-semibold py-2 rounded transition-colors">
            Связаться с нами
          </a>
        </div>
      )}
    </header>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────

function Hero() {
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

// ─── WHY US ─────────────────────────────────────────────────────────────────

function WhyUs() {
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

// ─── CALCULATOR ─────────────────────────────────────────────────────────────

function Calculator() {
  const [panelType, setPanelType] = useState<"Стеновые" | "Кровельные">("Стеновые");
  const [wave, setWave] = useState(WAVE_TYPES["Стеновые"][0]);
  const [filler, setFiller] = useState(FILLER_TYPES[0]);
  const [thickness, setThickness] = useState(100);
  const [color, setColor] = useState(COLORS[6]);
  const [area, setArea] = useState(100);

  const handlePanelType = (t: "Стеновые" | "Кровельные") => {
    setPanelType(t);
    setWave(WAVE_TYPES[t][0]);
  };

  const handleFiller = (f: string) => {
    setFiller(f);
    const tArr = THICKNESSES[f];
    if (!tArr.includes(thickness)) setThickness(tArr[2]);
  };

  const basePrice = BASE_PRICES[filler]?.[thickness] ?? 1500;
  const roofMul = panelType === "Кровельные" ? 1.1 : 1;
  const pricePerM2 = Math.round(basePrice * roofMul);
  const total = Math.round(pricePerM2 * area);

  return (
    <section id="calculator" className="py-20 bg-[hsl(var(--steel))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Онлайн-расчёт</p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase">Калькулятор панелей</h2>
          <p className="font-golos text-gray-400 mt-3">Подберите параметры — получите ориентировочную стоимость</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="mb-6">
              <label className="block font-golos text-sm text-gray-500 mb-2">Тип панели</label>
              <div className="flex rounded-lg overflow-hidden border border-gray-200">
                {PANEL_TYPES.map((t) => (
                  <button key={t} onClick={() => handlePanelType(t)}
                    className={`flex-1 py-2.5 font-golos font-semibold text-sm transition-colors ${panelType === t ? "bg-[hsl(var(--orange))] text-white" : "text-gray-500 hover:bg-gray-50"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block font-golos text-sm text-gray-500 mb-1">Вид волны</label>
                <select value={wave} onChange={(e) => setWave(e.target.value)}
                  className="w-full border border-gray-200 rounded px-3 py-2 font-golos text-[hsl(var(--steel))] bg-white focus:outline-none focus:border-[hsl(var(--orange))] text-sm">
                  {WAVE_TYPES[panelType].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-golos text-sm text-gray-500 mb-1">Вид наполнителя</label>
                <select value={filler} onChange={(e) => handleFiller(e.target.value)}
                  className="w-full border border-gray-200 rounded px-3 py-2 font-golos text-[hsl(var(--steel))] bg-white focus:outline-none focus:border-[hsl(var(--orange))] text-sm">
                  {FILLER_TYPES.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-golos text-sm text-gray-500 mb-2">Толщина наполнителя</label>
              <div className="flex flex-wrap gap-2">
                {THICKNESSES[filler].map((t) => (
                  <button key={t} onClick={() => setThickness(t)}
                    className={`px-3 py-1.5 rounded border font-golos font-medium text-sm transition-all ${thickness === t ? "bg-[hsl(var(--orange))] border-[hsl(var(--orange))] text-white" : "border-gray-200 text-gray-600 hover:border-[hsl(var(--orange))]"}`}>
                    {t} мм
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-golos text-sm text-gray-500 mb-2">Цвет металла</label>
              <div className="flex flex-wrap gap-2">
                {COLORS.map((c) => (
                  <button key={c.name} onClick={() => setColor(c)} title={`${c.name} — ${c.label}`}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${color.name === c.name ? "border-[hsl(var(--orange))] scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"}`}
                    style={{ backgroundColor: c.hex }} />
                ))}
              </div>
              <p className="font-golos text-xs text-gray-400 mt-1.5">{color.name} · {color.label}</p>
            </div>

            <div>
              <label className="block font-golos text-sm text-gray-500 mb-1">Площадь (м²)</label>
              <input type="number" min={10} max={10000} value={area} onChange={(e) => setArea(Number(e.target.value))}
                className="w-full border border-gray-200 rounded px-3 py-2 font-golos text-[hsl(var(--steel))] focus:outline-none focus:border-[hsl(var(--orange))] text-sm" />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-[hsl(var(--orange))] rounded-xl p-6 sm:p-8 text-white flex-1">
              <p className="font-golos text-white/80 text-sm uppercase tracking-widest mb-3">Ориентировочная стоимость</p>
              <div className="font-oswald text-5xl font-bold mb-1">
                {total.toLocaleString("ru-RU")} ₽
              </div>
              <p className="font-golos text-white/70 text-sm mb-6">{pricePerM2.toLocaleString("ru-RU")} ₽/м² · {area} м²</p>

              <div className="space-y-2 border-t border-white/20 pt-4 mb-6">
                {[
                  ["Тип", `${panelType}`],
                  ["Волна", wave],
                  ["Наполнитель", `${filler}, ${thickness} мм`],
                  ["Цвет", `${color.name}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm font-golos">
                    <span className="text-white/60">{k}</span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <a href="#contacts"
                className="block w-full text-center bg-white text-[hsl(var(--orange))] font-golos font-bold py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Заказать расчёт у менеджера
              </a>
            </div>

            <div className="bg-[hsl(var(--steel-mid))] rounded-xl p-4 text-gray-400 text-sm font-golos">
              <Icon name="Info" size={14} className="inline mr-1.5 text-[hsl(var(--orange))]" />
              Цены ориентировочные. Точная стоимость зависит от объёма и комплектации.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ───────────────────────────────────────────────────────────────

function Products() {
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Ассортимент</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Сопутствующие товары</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActive((a) => (a === 0 ? PRODUCTS.length - 1 : a - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors">
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button onClick={() => setActive((a) => (a === PRODUCTS.length - 1 ? 0 : a + 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[hsl(var(--orange))] hover:text-[hsl(var(--orange))] transition-colors">
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((p, i) => (
            <div key={p.name}
              className={`bg-white rounded-xl p-5 border-2 hover-lift cursor-pointer transition-all ${i === active ? "border-[hsl(var(--orange))] shadow-lg" : "border-gray-100"}`}
              onClick={() => setActive(i)}>
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-oswald font-semibold text-[hsl(var(--steel))] uppercase text-sm leading-snug mb-1">{p.name}</h3>
              <p className="font-golos text-gray-400 text-xs mb-2">{p.desc}</p>
              <p className="font-golos font-bold text-[hsl(var(--orange))] text-sm">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#contacts" className="inline-flex items-center gap-2 font-golos text-[hsl(var(--steel))] font-semibold hover:text-[hsl(var(--orange))] transition-colors">
            Запросить полный прайс-лист
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTION ─────────────────────────────────────────────────────────────

function Production() {
  return (
    <section id="production" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-3">О нашем производстве</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase leading-tight mb-6">
              Цех полного цикла<br />в городе Вача
            </h2>
            <div className="space-y-4 font-golos text-gray-600 text-base leading-relaxed">
              <p>
                Наш завод расположен в Вача, Нижегородская область. Производственный цех площадью более 4 000 м² оснащён современными линиями для изготовления сэндвич-панелей с наполнителем из минеральной ваты и пенопласта.
              </p>
              <p>
                Мы контролируем каждый этап — от закупки стального листа до отгрузки готовых панелей. Толщина металла, плотность сердечника, качество покраски — всё проходит входной и выходной контроль.
              </p>
              <p>
                Приглашаем посетить производство лично. Убедитесь в качестве — мы открыты для экскурсий по предварительному согласованию.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: "Ruler", val: "4 000 м²", label: "площадь цеха" },
                { icon: "Zap", val: "до 500 м²", label: "в день" },
                { icon: "Award", val: "ГОСТ", label: "сертификаты" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[hsl(var(--orange))]/10 rounded-lg flex items-center justify-center">
                    <Icon name={s.icon as string} size={18} className="text-[hsl(var(--orange))]" fallback="CheckCircle" />
                  </div>
                  <div>
                    <div className="font-oswald font-bold text-[hsl(var(--steel))] text-lg">{s.val}</div>
                    <div className="font-golos text-gray-400 text-xs">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contacts"
              className="inline-block mt-8 bg-[hsl(var(--steel))] hover:bg-[hsl(var(--orange))] text-white font-golos font-semibold px-6 py-3 rounded transition-colors">
              Записаться на экскурсию
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[hsl(var(--steel))]">
            <img src={HERO_IMAGE} alt="Производство" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-[hsl(var(--orange))] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Icon name="Play" size={32} className="text-white ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg px-4 py-2">
              <p className="font-golos text-white text-sm">Видео с производства · Вача, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ────────────────────────────────────────────────────────────────

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Наши объекты</p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Фотогалерея</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMGS.map((src, i) => (
            <div key={i} onClick={() => setLightbox(src)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${i === 0 ? "sm:col-span-2 row-span-2" : ""}`}>
              <img src={src} alt={`Объект ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "h-64 sm:h-full" : "h-40 sm:h-48"}`} />
              <div className="absolute inset-0 bg-[hsl(var(--steel))]/0 group-hover:bg-[hsl(var(--steel))]/40 transition-all flex items-center justify-center">
                <Icon name="ZoomIn" size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Фото объекта" className="max-w-full max-h-full rounded-xl object-contain" />
          <button className="absolute top-4 right-4 text-white" onClick={() => setLightbox(null)}>
            <Icon name="X" size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

// ─── CALLBACK FORM ──────────────────────────────────────────────────────────

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="callback" className="py-20 bg-[hsl(var(--steel))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-3">Индивидуальный подход</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase leading-tight">
              Возможны<br />
              <span className="text-[hsl(var(--orange))]">индивидуальные</span><br />
              условия…
            </h2>
            <p className="font-golos text-gray-400 mt-4 text-base leading-relaxed">
              Крупный заказ, нестандартные размеры, особые сроки? Обсудим условия под ваш проект. Оставьте заявку — менеджер перезвонит в течение 30 минут.
            </p>
            <div className="flex flex-col gap-3 mt-8">
              {[
                { icon: "Clock", text: "Ответим в течение 30 минут" },
                { icon: "Package", text: "Бесплатный расчёт спецификации" },
                { icon: "Handshake", text: "Скидки от объёма от 500 м²" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[hsl(var(--orange))]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={item.icon as string} size={16} className="text-[hsl(var(--orange))]" fallback="CheckCircle" />
                  </div>
                  <span className="font-golos text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-[hsl(var(--steel))] mb-2">Заявка принята!</h3>
                <p className="font-golos text-gray-500">Менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-oswald text-2xl font-bold text-[hsl(var(--steel))] uppercase mb-4">Обратная связь</h3>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">Ваше имя</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Иванов"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))]" />
                </div>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">Телефон</label>
                  <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))]" />
                </div>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">Комментарий (необязательно)</label>
                  <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} placeholder="Опишите ваш проект…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))] resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-[hsl(var(--orange))] hover:bg-[hsl(var(--orange-dark))] text-white font-golos font-bold py-3 rounded-lg transition-colors">
                  Отправить заявку
                </button>
                <p className="font-golos text-gray-400 text-xs text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Вопрос — Ответ</p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Популярные вопросы</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-all ${open === i ? "border-[hsl(var(--orange))] shadow-md" : "border-gray-100"}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                <span className="font-golos font-semibold text-[hsl(var(--steel))] text-sm sm:text-base">{f.q}</span>
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open === i ? "bg-[hsl(var(--orange))]" : "bg-gray-100"}`}>
                  <Icon name={open === i ? "Minus" : "Plus"} size={14} className={open === i ? "text-white" : "text-gray-500"} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-4 font-golos text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACTS ───────────────────────────────────────────────────────────────

function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Мы на карте</p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Контакты</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: "Phone", label: "Телефон", val: "+7 (831) 400-00-00", href: "tel:+78314000000" },
              { icon: "Mail", label: "Email", val: "info@vacha-panel.ru", href: "mailto:info@vacha-panel.ru" },
              { icon: "MapPin", label: "Адрес", val: "606150, Нижегородская обл., г. Вача, ул. Промышленная, 1", href: "#" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-[hsl(var(--orange))]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name={c.icon as string} size={20} className="text-[hsl(var(--orange))]" />
                </div>
                <div>
                  <p className="font-golos text-gray-400 text-xs uppercase tracking-wider mb-0.5">{c.label}</p>
                  <a href={c.href} className="font-golos font-semibold text-[hsl(var(--steel))] hover:text-[hsl(var(--orange))] transition-colors">
                    {c.val}
                  </a>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200">
              <p className="font-golos text-gray-400 text-sm mb-3">Мессенджеры</p>
              <div className="flex gap-3">
                <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-golos font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  WhatsApp
                </a>
                <a href="https://t.me/vacha_panel" target="_blank" rel="noopener noreferrer"
                  className="bg-[#229ED9] text-white font-golos font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Telegram
                </a>
              </div>
            </div>

            <div className="bg-[hsl(var(--steel))] rounded-xl p-5">
              <p className="font-golos text-gray-300 text-sm mb-1">Время работы</p>
              <p className="font-oswald text-white font-semibold">Пн–Пт: 8:00 — 17:00</p>
              <p className="font-oswald text-gray-400 text-sm">Сб: 9:00 — 13:00 · Вс: выходной</p>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl min-h-[360px] bg-gray-200">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=42.127%2C55.813&z=13&l=map"
              width="100%" height="100%" style={{ minHeight: 360, border: 0 }}
              title="Карта" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[hsl(var(--steel))] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-3">
              <img
                src="https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/bucket/46ccdb28-75ba-4dca-b464-5fae4ae2a81d.png"
                alt="Труд Вача — логотип"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-golos text-gray-400 text-sm leading-relaxed">
              Производитель сэндвич-панелей в Нижегородской области. Стеновые и кровельные панели с 2009 года. ООО «Труд Вача».
            </p>
          </div>
          <div>
            <h4 className="font-oswald text-white font-semibold uppercase tracking-wider mb-3 text-sm">Навигация</h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="font-golos text-gray-400 hover:text-[hsl(var(--orange))] text-sm transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-oswald text-white font-semibold uppercase tracking-wider mb-3 text-sm">Контакты</h4>
            <div className="space-y-2 font-golos text-gray-400 text-sm">
              <p><a href="tel:+78314000000" className="hover:text-[hsl(var(--orange))] transition-colors">+7 (831) 400-00-00</a></p>
              <p><a href="mailto:info@vacha-panel.ru" className="hover:text-[hsl(var(--orange))] transition-colors">info@vacha-panel.ru</a></p>
              <p>г. Вача, Нижегородская обл.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-golos text-gray-500 text-sm">© 2024 Труд Вача · Все права защищены</p>
          <p className="font-golos text-gray-600 text-xs">ИНН 5225000000 · ОГРН 1000000000000</p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyUs />
      <Calculator />
      <Products />
      <Production />
      <Gallery />
      <CallbackForm />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
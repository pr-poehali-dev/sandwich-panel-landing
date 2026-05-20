import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  PANEL_TYPES,
  WAVE_TYPES,
  WAVE_INFO,
  FILLER_TYPES,
  FILLER_INFO,
  THICKNESSES,
  COLORS,
  BASE_PRICES,
} from "./data";

export function Calculator() {
  const [panelType, setPanelType] = useState<"Стеновые" | "Кровельные">("Стеновые");
  const [wave, setWave] = useState(WAVE_TYPES["Стеновые"][0]);
  const [filler, setFiller] = useState(FILLER_TYPES[0]);
  const [thickness, setThickness] = useState(100);
  const [color, setColor] = useState(COLORS[6]);
  const [area, setArea] = useState(100);
  const [waveOpen, setWaveOpen] = useState(false);
  const [fillerOpen, setFillerOpen] = useState(false);

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
                <button type="button" onClick={() => setWaveOpen(true)}
                  className="w-full flex items-center justify-between border border-gray-200 rounded px-3 py-2 font-golos text-[hsl(var(--steel))] bg-white hover:border-[hsl(var(--orange))] text-sm transition-colors">
                  <span>{wave}</span>
                  <Icon name="LayoutGrid" size={16} className="text-[hsl(var(--orange))]" />
                </button>
              </div>
              <div>
                <label className="block font-golos text-sm text-gray-500 mb-1">Вид наполнителя</label>
                <button type="button" onClick={() => setFillerOpen(true)}
                  className="w-full flex items-center justify-between border border-gray-200 rounded px-3 py-2 font-golos text-[hsl(var(--steel))] bg-white hover:border-[hsl(var(--orange))] text-sm transition-colors">
                  <span>{filler}</span>
                  <Icon name="Layers" size={16} className="text-[hsl(var(--orange))]" />
                </button>
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

      {/* Filler selection popup */}
      {fillerOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setFillerOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
              <div>
                <p className="font-golos text-[hsl(var(--orange))] text-xs uppercase tracking-widest font-semibold">Выбор материала</p>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[hsl(var(--steel))] uppercase">Вид наполнителя</h3>
              </div>
              <button onClick={() => setFillerOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-4 sm:p-6 flex sm:grid sm:grid-cols-2 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scroll-pl-4 [scrollbar-width:thin]">
              {FILLER_TYPES.map((f) => {
                const info = FILLER_INFO[f];
                const isActive = filler === f;
                return (
                  <button key={f} onClick={() => { handleFiller(f); setFillerOpen(false); }}
                    className={`text-left bg-white rounded-xl border-2 overflow-hidden transition-all hover-lift shrink-0 w-[85%] sm:w-auto snap-start ${isActive ? "border-[hsl(var(--orange))] shadow-lg" : "border-gray-100 hover:border-[hsl(var(--orange))]/50"}`}>
                    <div className="aspect-[4/3] w-full bg-gray-50 overflow-hidden">
                      {info?.img && <img src={info.img} alt={f} className="w-full h-full object-cover" />}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-oswald font-semibold text-[hsl(var(--steel))] uppercase text-base">{f}</h4>
                        {isActive && <Icon name="CheckCircle2" size={18} className="text-[hsl(var(--orange))]" />}
                      </div>

                      <p className="font-golos text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Преимущества</p>
                      <ul className="space-y-1.5 mb-3">
                        {info?.benefits.map((b) => (
                          <li key={b} className="flex gap-2 font-golos text-xs text-gray-600 leading-snug">
                            <Icon name="Check" size={12} className="text-[hsl(var(--orange))] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="font-golos text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Для кого подходит</p>
                      <ul className="space-y-1.5">
                        {info?.suitableFor.map((s) => (
                          <li key={s} className="flex gap-2 font-golos text-xs text-gray-600 leading-snug">
                            <Icon name="Users" size={12} className="text-[hsl(var(--steel))] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Wave selection popup */}
      {waveOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setWaveOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl">
              <div>
                <p className="font-golos text-[hsl(var(--orange))] text-xs uppercase tracking-widest font-semibold">Выбор профиля</p>
                <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[hsl(var(--steel))] uppercase">Вид волны</h3>
              </div>
              <button onClick={() => setWaveOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-4 sm:p-6 flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scroll-pl-4 [scrollbar-width:thin]">
              {WAVE_TYPES[panelType].map((w) => {
                const info = WAVE_INFO[w];
                const isActive = wave === w;
                return (
                  <button key={w} onClick={() => { setWave(w); setWaveOpen(false); }}
                    className={`text-left bg-white rounded-xl border-2 overflow-hidden transition-all hover-lift shrink-0 w-[80%] sm:w-auto snap-start ${isActive ? "border-[hsl(var(--orange))] shadow-lg" : "border-gray-100 hover:border-[hsl(var(--orange))]/50"}`}>
                    <div className="aspect-square w-full bg-gray-50 overflow-hidden">
                      {info?.img && <img src={info.img} alt={w} className="w-full h-full object-cover" />}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-oswald font-semibold text-[hsl(var(--steel))] uppercase text-base">{w}</h4>
                        {isActive && <Icon name="CheckCircle2" size={18} className="text-[hsl(var(--orange))]" />}
                      </div>
                      {info?.benefits && (
                        <ul className="space-y-1.5">
                          {info.benefits.map((b) => (
                            <li key={b} className="flex gap-2 font-golos text-xs text-gray-600 leading-snug">
                              <Icon name="Check" size={12} className="text-[hsl(var(--orange))] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

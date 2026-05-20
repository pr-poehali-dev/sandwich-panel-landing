import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  PRODUCTS_INSTALL,
  PRODUCTS_TRIM,
  FAQS,
  GALLERY_IMGS,
  NAV_LINKS,
  HERO_IMAGE,
} from "./data";

export function Products() {
  const [tab, setTab] = useState<"install" | "trim">("install");
  const [active, setActive] = useState(0);

  const list = tab === "install" ? PRODUCTS_INSTALL : PRODUCTS_TRIM;

  const switchTab = (t: "install" | "trim") => {
    setTab(t);
    setActive(0);
  };

  return (
    <section id="products" className="py-20 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="font-golos text-[hsl(var(--orange))] font-semibold uppercase text-sm tracking-widest mb-2">Ассортимент</p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold text-[hsl(var(--steel))] uppercase">Сопутствующие товары</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 mb-10 max-w-3xl mx-auto">
          <button onClick={() => switchTab("install")}
            className={`flex-1 px-6 py-3 font-oswald uppercase tracking-wider text-sm sm:text-base font-semibold border-2 transition-all rounded-lg sm:rounded-r-none ${tab === "install" ? "bg-[hsl(var(--orange))] border-[hsl(var(--orange))] text-white" : "border-gray-200 text-gray-600 hover:border-[hsl(var(--orange))] bg-white"}`}>
            Товары для монтажа
          </button>
          <button onClick={() => switchTab("trim")}
            className={`flex-1 px-6 py-3 font-oswald uppercase tracking-wider text-sm sm:text-base font-semibold border-2 transition-all rounded-lg sm:rounded-l-none sm:border-l-0 ${tab === "trim" ? "bg-[hsl(var(--orange))] border-[hsl(var(--orange))] text-white" : "border-gray-200 text-gray-600 hover:border-[hsl(var(--orange))] bg-white"}`}>
            Доборные элементы
          </button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {list.map((p, i) => (
            <div key={p.name}
              className={`bg-white rounded-xl overflow-hidden border-2 hover-lift cursor-pointer transition-all flex flex-col ${i === active ? "border-[hsl(var(--orange))] shadow-lg" : "border-gray-100"}`}
              onClick={() => setActive(i)}>
              <div className="aspect-square w-full overflow-hidden bg-gray-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-oswald font-semibold text-[hsl(var(--steel))] uppercase text-base leading-snug mb-1">{p.name}</h3>
                <p className="font-golos text-gray-400 text-xs mb-3 flex-1">{p.desc}</p>
                <p className="font-golos font-bold text-[hsl(var(--orange))] text-base">{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contacts" className="inline-flex items-center gap-2 font-golos text-[hsl(var(--steel))] font-semibold hover:text-[hsl(var(--orange))] transition-colors">
            Запросить полный прайс-лист
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Production() {
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

export function Gallery() {
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

export function CallbackForm() {
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

export function FAQ() {
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

export function Contacts() {
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

export function Footer() {
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

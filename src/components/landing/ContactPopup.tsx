import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

const CONTACT_ITEMS = [
  { icon: "Phone", label: "Телефон", val: "+7 (831) 400-00-00", href: "tel:+78314000000" },
  { icon: "Mail", label: "Email", val: "info@vacha-panel.ru", href: "mailto:info@vacha-panel.ru" },
];

export function ContactPopup({ open, onClose }: ContactPopupProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setName("");
      setPhone("");
      setMsg("");
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <p className="font-golos text-[hsl(var(--orange))] text-xs uppercase tracking-widest font-semibold">Свяжитесь с нами</p>
            <h3 className="font-oswald text-xl sm:text-2xl font-bold text-[hsl(var(--steel))] uppercase">Контакты и заявка</h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Левая часть: контакты */}
          <div className="bg-[hsl(var(--steel))] p-6 sm:p-8 space-y-5">
            {CONTACT_ITEMS.map((c) => (
              <div key={c.label} className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-[hsl(var(--orange))]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={18} className="text-[hsl(var(--orange))]" />
                </div>
                <div>
                  <p className="font-golos text-gray-400 text-xs uppercase tracking-wider mb-0.5">{c.label}</p>
                  <a href={c.href} className="font-golos font-semibold text-white hover:text-[hsl(var(--orange))] transition-colors text-sm sm:text-base break-all">
                    {c.val}
                  </a>
                </div>
              </div>
            ))}

            <div>
              <p className="font-golos text-gray-400 text-xs uppercase tracking-wider mb-2">Мессенджеры</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://wa.me/79001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-golos font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Icon name="MessageCircle" size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/vacha_panel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#229ED9] text-white font-golos font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
              </div>
            </div>

            <div className="bg-[hsl(var(--steel-mid))] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Clock" size={14} className="text-[hsl(var(--orange))]" />
                <p className="font-golos text-gray-300 text-xs uppercase tracking-wider">Режим работы</p>
              </div>
              <p className="font-oswald text-white font-semibold text-sm">Пн–Пт: 8:00 — 17:00</p>
              <p className="font-oswald text-gray-400 text-xs mt-0.5">Сб: 9:00 — 13:00 · Вс: выходной</p>
            </div>
          </div>

          {/* Правая часть: форма */}
          <div className="p-6 sm:p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-[hsl(var(--steel))] mb-2">Заявка принята!</h3>
                <p className="font-golos text-gray-500 text-sm">Менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-oswald text-xl font-bold text-[hsl(var(--steel))] uppercase">Обратная связь</h3>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">ФИО</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иванов Иван Иванович"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))]"
                  />
                </div>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">Телефон</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))]"
                  />
                </div>
                <div>
                  <label className="block font-golos text-sm text-gray-500 mb-1">Комментарий</label>
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    rows={3}
                    placeholder="Опишите ваш проект…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-golos text-sm focus:outline-none focus:border-[hsl(var(--orange))] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--orange))] hover:bg-[hsl(var(--orange-dark))] text-white font-golos font-bold py-3 rounded-lg transition-colors"
                >
                  Отправить заявку
                </button>
                <p className="font-golos text-gray-400 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--orange))] hover:underline">
                    политикой обработки персональных данных
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

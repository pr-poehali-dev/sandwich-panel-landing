export const HERO_IMAGE = "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/be6ab502-1cf9-4d6d-8a6b-d122b6743273.jpg";

export const NAV_LINKS = [
  { label: "О нас", href: "#why-us" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Продукция", href: "#products" },
  { label: "Производство", href: "#production" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

export const ADVANTAGES = [
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

export const PANEL_TYPES = ["Стеновые", "Кровельные"] as const;

export const WAVE_TYPES: Record<string, string[]> = {
  Стеновые: ["Прямолинейная", "Микроволна", "С-21"],
  Кровельные: ["Трапеция Т-35", "Трапеция Т-75", "Прямолинейная"],
};

export const WAVE_INFO: Record<string, { img: string; benefits: string[] }> = {
  "Прямолинейная": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/84025bdb-3002-4abe-868f-f57a951adebc.jpg",
    benefits: [
      "Лаконичный современный вид фасада",
      "Идеальна для офисов и торговых центров",
      "Простой и быстрый монтаж",
    ],
  },
  "Микроволна": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/016be961-3ed3-4676-a257-189c28abe147.jpg",
    benefits: [
      "Скрывает мелкие неровности поверхности",
      "Универсальна — подходит для любых зданий",
      "Усиленная жёсткость за счёт микрорельефа",
    ],
  },
  "С-21": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/0556afe8-7d71-4f35-8237-02dc1d6f47b4.jpg",
    benefits: [
      "Повышенная прочность за счёт глубокого профиля",
      "Подходит для больших пролётов",
      "Классический промышленный вид",
    ],
  },
  "Трапеция Т-35": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/0556afe8-7d71-4f35-8237-02dc1d6f47b4.jpg",
    benefits: [
      "Оптимальна для кровли средних пролётов",
      "Хороший отвод воды",
      "Универсальная геометрия",
    ],
  },
  "Трапеция Т-75": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/0556afe8-7d71-4f35-8237-02dc1d6f47b4.jpg",
    benefits: [
      "Высокая несущая способность",
      "Подходит для больших пролётов",
      "Используется на промышленных объектах",
    ],
  },
};

export const FILLER_TYPES = ["Минеральная вата", "Пенопласт (ПСБ)"];

export const FILLER_INFO: Record<string, { img: string; benefits: string[]; suitableFor: string[] }> = {
  "Минеральная вата": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/a3b21b5e-b97e-4c14-93fa-4ba7efbfbbe4.jpg",
    benefits: [
      "Негорючий материал (класс НГ)",
      "Высокая шумоизоляция",
      "Паропроницаемость — стены «дышат»",
      "Срок службы более 50 лет",
    ],
    suitableFor: [
      "Промышленные и складские здания",
      "Объекты с повышенными требованиями к пожарной безопасности",
      "Холодильные и морозильные камеры",
    ],
  },
  "Пенопласт (ПСБ)": {
    img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/fa7e2b67-44f7-431e-89e5-8b36b94e8bec.jpg",
    benefits: [
      "Доступная цена — экономия бюджета",
      "Низкая теплопроводность",
      "Малый вес — простой монтаж",
      "Влагостойкость и долговечность",
    ],
    suitableFor: [
      "Торговые павильоны и автомойки",
      "Сельскохозяйственные постройки",
      "Гаражи и хозяйственные блоки",
    ],
  },
};

export const THICKNESSES: Record<string, number[]> = {
  "Минеральная вата": [50, 80, 100, 120, 150, 200],
  "Пенопласт (ПСБ)": [50, 80, 100, 120, 150],
};

export const COLORS = [
  { name: "RAL 1015", hex: "#E6D2B5", label: "Слоновая кость" },
  { name: "RAL 3005", hex: "#5B1F22", label: "Винно-красный" },
  { name: "RAL 5005", hex: "#005387", label: "Сигнальный синий" },
  { name: "RAL 6005", hex: "#2F4538", label: "Мох-зелёный" },
  { name: "RAL 7004", hex: "#9DA3A6", label: "Сигнальный серый" },
  { name: "RAL 8017", hex: "#442F20", label: "Шоколад" },
  { name: "RAL 9003", hex: "#F2F2F2", label: "Белый сигнальный" },
  { name: "RAL 9006", hex: "#A8A9AD", label: "Бело-алюминий" },
];

export const BASE_PRICES: Record<string, Record<number, number>> = {
  "Минеральная вата": { 50: 1450, 80: 1780, 100: 2050, 120: 2350, 150: 2900, 200: 3650 },
  "Пенопласт (ПСБ)": { 50: 980, 80: 1200, 100: 1380, 120: 1560, 150: 1850 },
};

export const PRODUCTS_INSTALL = [
  { name: "Саморезы кровельные", desc: "Для крепления панелей и профнастила", price: "от 4 ₽/шт", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/f6de2aa7-2e9e-475a-8591-ff924006c17e.jpg" },
  { name: "Уплотнительная лента", desc: "Герметизация стыков панелей", price: "от 320 ₽/рулон", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/d4fc2109-1226-4c38-9d0d-ea3b4d608a5e.jpg" },
  { name: "Монтажная пена", desc: "Профессиональная, всесезонная", price: "от 410 ₽/шт", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/4dd2fcc2-1ba2-41bd-b89d-b8615eafd575.jpg" },
  { name: "Анкеры и дюбели", desc: "Усиленные, для тяжёлых конструкций", price: "от 12 ₽/шт", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/6d090b46-0e34-4ea0-a94a-c642b405b418.jpg" },
  { name: "Монтажный инструмент", desc: "Биты, насадки, заклёпочники", price: "от 850 ₽", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/24a3433c-f795-409f-84d4-4afa92e80af0.jpg" },
];

export const PRODUCTS_TRIM = [
  { name: "Конёк кровельный", desc: "Для оформления конька крыши", price: "от 280 ₽/п.м", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/a0a85a3d-a5c0-4b17-a56d-dd14fee2e5f5.jpg" },
  { name: "Угловой профиль", desc: "Внешние и внутренние углы", price: "от 220 ₽/п.м", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/f10e0ba4-dff5-455a-b967-3876444bc8c5.jpg" },
  { name: "Капельник", desc: "Карнизная планка для отвода воды", price: "от 180 ₽/п.м", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/fa07e087-45cc-4388-b482-3b9eabbfcdb1.jpg" },
  { name: "Обрамление окон", desc: "Откосы и наличники", price: "от 240 ₽/п.м", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/11a45734-5e34-4dbf-b33a-c38ea5f0bc33.jpg" },
  { name: "Парапетная планка", desc: "Защита верхней кромки парапета", price: "от 310 ₽/п.м", img: "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/5bfe8c9d-8a69-4dcb-b4f7-02c9adc964e4.jpg" },
];

export const FAQS = [
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

export const GALLERY_IMGS = [
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/f3fa3b57-cc52-4e66-8f7f-bf813657d2c1.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/50316217-9523-43d8-b030-07fe0a555907.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/80f83038-a4c9-444e-b5b2-6f748494ce9f.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/439b702d-16dd-48a9-a2be-de4263d3446f.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/8c0e3339-97c6-4f3c-8b3b-70ff4e2ec19c.jpg",
  "https://cdn.poehali.dev/projects/a621fb39-3f34-4513-9b42-231474e4c569/files/0fb9e89c-a7cd-4fd5-a7f8-6a39942ad922.jpg",
];
PAPER_BOOK_INPUT_ID = 'paper_book';
BINDING_INPUT_ID = 'binding';
PAPER_COVER_INPUT_ID = 'paper_cover';
REFINEMENT_COVER_INPUT_ID = 'refinement_cover'
PAGES_NUMBER_INPUT_ID = 'pages_number'
CIRCULATION_INPUT_ID = 'circulation'
PAPER_SPECS = [
    { name: "a5_80g", displayName: "148mmx210mm A5 80g", price: 0.019 },
    { name: "a5_70g", displayName: "148mmx210mm A5 70g", price: 0.018 },
    { name: "a5_90g", displayName: "148mmx210mm A5 90g", price: 0.021 },
    { name: "b5_70g", displayName: "B5 pomniejszony 70g", price: 0.017 },
];
BINDINGS = [
    { name: "soft", displayName: "Miękka", ratio: 1.0 },
    { name: "soft_wings", displayName: "Miękka ze skrzydełkami", ratio: 1.15 },
];
COVER_PRINTINGS = [
    { name: "1/0", displayName: "1/0", ratio: 0.9 },
    { name: "2/0", displayName: "2/0", ratio: 1.0 },
    { name: "3/0", displayName: "3/0", ratio: 1.0 },
    { name: "4/0", displayName: "4/0", ratio: 1.0 },
];
COVER_REFINEMENTS = [
    { name: "foil_gloss", displayName: "Folia błysk", price: 0.15 },
    { name: "foil_matt", displayName: "Folia mat UV", price: 0.33 },
    { name: "foil_soft_touch", displayName: "Folia soft touch", price: 0.35 },
    {
        name: "foil_soft_touch_uv",
        displayName: "Folia soft touch + UV",
        price: 0.6,
    },
];
CIRCULATION_RATIOS = [
    { min: 300, max: 500, ratio: 1.2 },
    { min: 501, max: 750, ratio: 1.15 },
    { min: 751, max: 999, ratio: 1.1 },
    { min: 1000, max: 1000, ratio: 1 },
    { min: 1001, max: 1250, ratio: 0.98 },
    { min: 1251, max: 1500, ratio: 0.96 },
    { min: 1501, max: 2000, ratio: 0.91 },
    { min: 2001, max: 3000, ratio: 0.88 },
    { min: 3001, max: 4000, ratio: 0.87 },
    { min: 4001, max: 5000, ratio: 0.86 },
]
PAGE_NUMBER_RATIOS = [
    { min: 0, max: 95, ratio: 2 },
    { min: 96, max: 128, ratio: 1.8 },
    { min: 144, max: 176, ratio: 1.75 },
    { min: 192, max: 240, ratio: 1.7 },
    { min: 256, max: 304, ratio: 1.65 },
    { min: 320, max: 384, ratio: 1.6 },
    { min: 400, max: 464, ratio: 1.55 },
    { min: 480, max: 560, ratio: 1.5 },
    { min: 576, max: 624, ratio: 1.45 },
];
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
    { name: "a5_creamy_80g_v2", displayName: "148mmx210mm A5 creamy 80g v.2.0", price: 0.021 },
    { name: "b5_80g", displayName: "B5 pomniejszony 80g", price: 0.02 },
    { name: "b5_90g", displayName: "B5 pomniejszony 90g", price: 0.023 },
    { name: "b5_creamy_80g_v2", displayName: "B5 pomniejszony creamy 80g v.2.0", price: 0.023 },
    { name: "b5_creamy_90g_v2", displayName: "B5 pomniejszony creamy 90g v.2.0", price: 0.026 },
    { name: "size_170x240_70g", displayName: "170mmx240mm 70g", price: 0.021 },
    { name: "size_170x240_80g", displayName: "170mmx240mm 80g", price: 0.024 },
    { name: "size_170x240_90g", displayName: "170mmx240mm 90g", price: 0.027 },
    { name: "size_170x240_creamy_80g_v2", displayName: "170mmx240mm creamy 80g v.2.0", price: 0.027 },
    { name: "size_170x240_creamy_90g_v2", displayName: "170mmx240mm creamy 90g v.2.0", price: 0.03 },
    { name: "size_165x235_70g", displayName: "165mmx235mm 70g", price: 0.021 },
    { name: "size_165x235_80g", displayName: "165mmx235mm 80g", price: 0.024 },
    { name: "size_165x235_90g", displayName: "165mmx235mm 90g", price: 0.027 },
    { name: "size_165x235_creamy_80g_v2", displayName: "165mmx235mm creamy 80g v.2.0", price: 0.027 },
    { name: "size_165x235_creamy_90g_v2", displayName: "165mmx235mm creamy 90g v.2.0", price: 0.03 },
    { name: "size_158x235_70g", displayName: "158mmx235mm 70g", price: 0.021 },
    { name: "size_158x235_80g", displayName: "158mmx235mm 80g", price: 0.024 },
    { name: "size_158x235_90g", displayName: "158mmx235mm 90g", price: 0.027 },
    { name: "size_158x235_creamy_80g_v2", displayName: "158mmx235mm creamy 80g v.2.0", price: 0.027 },
    { name: "size_158x235_creamy_90g_v2", displayName: "158mmx235mm creamy 90g v.2.0", price: 0.03 }
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
const CIRCULATION_RATIOS = [
    { min: 1000, max: 1000, ratio: 1.0 },
    { min: 1001, max: 1250, ratio: 0.9878 },
    { min: 1251, max: 1500, ratio: 0.9634 },
    { min: 1501, max: 1750, ratio: 0.9268 },
    { min: 1751, max: 2000, ratio: 0.9146 },
    { min: 2001, max: 2200, ratio: 0.8902 },
    { min: 2201, max: 2500, ratio: 0.8537 },
    { min: 2501, max: 2750, ratio: 0.8415 },
    { min: 2751, max: 3000, ratio: 0.8171 },
    { min: 3001, max: 3200, ratio: 0.8049 },
    { min: 3201, max: 3500, ratio: 0.7805 },
    { min: 3501, max: 3750, ratio: 0.7561 },
    { min: 3751, max: 4000, ratio: 0.7317 }
];
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
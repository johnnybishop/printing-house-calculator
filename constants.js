PAPER_BOOK_INPUT_ID = 'paper_book';
PAPER_WEIGHT_INPUT_ID = 'paper_weight';
BINDING_INPUT_ID = 'binding';
PAPER_COVER_INPUT_ID = 'paper_cover';
REFINEMENT_COVER_INPUT_ID = 'refinement_cover'
PAGES_NUMBER_INPUT_ID = 'pages_number'
CIRCULATION_INPUT_ID = 'circulation'
PAPER_SPECS = {
    a5: {
        displayName: "148mmx210mm A5",
        weights: {
            "70g": 0.018,
            "80g": 0.01893, 
            "90g": 0.021,
            "creamy_80g_v2": 0.021,
        }
    },
    size_140x208: {
        displayName: "140mmx208mm A5 pomniejszony",
        weights: {
            "70g": 0.018,
            "80g": 0.01893,
            "90g": 0.021,
            "creamy_80g_v2": 0.021,
        }
    },
    size_158x235: {
        displayName: "158mmx235mm",
        weights: {
            "70g": 0.021,
            "80g": 0.024,
            "90g": 0.027,
            "creamy_80g_v2": 0.027,
        }
    },
    size_165x235: {
        displayName: "165mmx235mm",
        weights: {
            "70g": 0.021,
            "80g": 0.024,
            "90g": 0.027,
            "creamy_80g_v2": 0.027,
        }
    },
    b5_pomniejszony: {
        displayName: "B5 pomniejszony (165mmx235mm)",
        weights: {
            "70g": 0.017,
            "80g": 0.02,
            "90g": 0.023,
            "creamy_80g_v2": 0.023,
        }
    },
    size_170x240: {
        displayName: "170mmx240mm",
        weights: {
            "70g": 0.021,
            "80g": 0.024,
            "90g": 0.027,
            "creamy_80g_v2": 0.027,
            "creamy_90g_v2": 0.03
        }
    },
    size_200x210: {
        displayName: "200mmx210mm",
        weights: {
            "70g": 0.021,
            "80g": 0.03,
            "90g": 0.033,
            "creamy_80g_v2": 0.033,
        }
    }
};


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
    { min: 30, max: 39, ratio: 2.4 },
    { min: 40, max: 79, ratio: 2.2 },
    { min: 80, max: 80, ratio: 2 },
    { min: 96, max: 128, ratio: 1.8 },
    { min: 144, max: 176, ratio: 1.7 },
    { min: 192, max: 240, ratio: 1.6 },
    { min: 256, max: 304, ratio: 1.4 },
    { min: 320, max: 384, ratio: 1.2 },
    { min: 400, max: 464, ratio: 1 },
    { min: 480, max: 560, ratio: 0.95 },
    { min: 576, max: 624, ratio: 0.9 },
];
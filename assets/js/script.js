document.addEventListener("DOMContentLoaded", function () {
    const formatOptionsConfig = Object.keys(PAPER_SPECS).map(key => ({
        name: key,
        displayName: PAPER_SPECS[key].displayName
    }));
    const weightInput = document.getElementById(PAPER_BOOK_INPUT_ID);
    createSelectField(formatOptionsConfig, PAPER_BOOK_INPUT_ID);
    createSelectField(BINDINGS, BINDING_INPUT_ID);
    createSelectField(COVER_PRINTINGS, PAPER_COVER_INPUT_ID);
    createSelectField(COVER_REFINEMENTS, REFINEMENT_COVER_INPUT_ID);
    createSelectField(INSIDE_PRINTINGS, INSIDE_COVER_INPUT_ID);
    validateCirculationAndPagesNumber()
    updateWeightSelect(weightInput.value);

    document.getElementById('submit-btn').addEventListener('click', () => calculatePrice());

    weightInput.addEventListener('change', (event) => {
        const selectedFormatKey = event.target.value;
        updateWeightSelect(selectedFormatKey);
    });

});

function createSelectField(optionsConfig, id) {
    const selectElement = document.getElementById(id);

    if (!selectElement) {
        return;
    }

    selectElement.innerHTML = ''; // Clear existing options

    optionsConfig.forEach((config) => {
        const option = document.createElement('option');
        option.value = config.name;
        option.textContent = config.displayName;
        selectElement.appendChild(option);
    })
}

function updateWeightSelect(formatKey) {
    if (!PAPER_SPECS[formatKey]) return;

    const weightOptionsConfig = Object.entries(PAPER_SPECS[formatKey].weights).filter(([weightKey, weightValue]) => weightValue !== null).map(([weightKey]) => ({
        name: weightKey,
        displayName: weightKey.replace(/_/g, ' ') // Replace underscores for better readability
    }));

    createSelectField(weightOptionsConfig, PAPER_WEIGHT_INPUT_ID);
}

function calculatePrice() {
    const pagesNumberInput = document.getElementById(PAGES_NUMBER_INPUT_ID);
    const circulationInput = document.getElementById(CIRCULATION_INPUT_ID);
    const paperBookInput = document.getElementById(PAPER_BOOK_INPUT_ID);
    const paperWeightInput = document.getElementById(PAPER_WEIGHT_INPUT_ID);
    const bindingInput = document.getElementById(BINDING_INPUT_ID);
    const refinementCoverInput = document.getElementById(REFINEMENT_COVER_INPUT_ID);
    const coverPaperInput = document.getElementById(PAPER_COVER_INPUT_ID);
    const coverInsideInput = document.getElementById(INSIDE_COVER_INPUT_ID);


    if (!pagesNumberInput || !circulationInput || pagesNumberInput.classList.contains('invalid') || circulationInput.classList.contains('invalid')) {
        return;
    }

    const pagesNumber = +pagesNumberInput.value;
    const circulation = +circulationInput.value;
    const pagePrice = getPriceForFormatAndWeight(paperBookInput.value, paperWeightInput.value)
    const bindingRatio = BINDINGS.find((v) => v.name === bindingInput.value)?.ratio;
    const coverRefinementsPrice = COVER_REFINEMENTS.find((v) => v.name === refinementCoverInput.value)?.price;
    const coverPrintingRatio = COVER_PRINTINGS.find((v) => v.name === coverPaperInput.value)?.ratio;
    const circulationRatio = CIRCULATION_RATIOS.find((v) => circulation >= v.min && circulation <= v.max)?.ratio ?? CIRCULATION_RATIOS.at(-1).ratio;
    const pageNumberRatio = PAGE_NUMBER_RATIOS.find((v) => pagesNumber >= v.min && pagesNumber <= v.max)?.ratio ?? PAGE_NUMBER_RATIOS.at(-1).ratio;
    const insidePrintingRatio = INSIDE_PRINTINGS.find((v) => v.name === coverInsideInput.value)?.ratio;

    const bookPrice = ((pagesNumber * pagePrice * bindingRatio * insidePrintingRatio + coverRefinementsPrice) * circulationRatio).toFixed(2);
    const totalPrice = (bookPrice * circulation * coverPrintingRatio * pageNumberRatio);
    const meanBookPrice = (totalPrice / circulation);


    const resultDiv = document.getElementById('result');

    const values = [
        ['Cena jednej książki', getPriceInCurrencyString(meanBookPrice)],
        ['Cena całkowita', getPriceInCurrencyString(totalPrice)]
    ]

    resultDiv.innerHTML = ''

    for (const [textContent, value] of values) {
        const description = document.createElement('p');
        description.innerHTML = `${textContent}: <span style="color: red">${value}</span>`
        resultDiv.appendChild(description);
    }
}

function getPriceInCurrencyString(price, currencyCode = 'PLN') {
    return `${price.toFixed(2)} ${currencyCode}`;
}

function validateCirculationAndPagesNumber() {
    const pagesNumberInput = document.getElementById(PAGES_NUMBER_INPUT_ID);
    const circulationInput = document.getElementById(CIRCULATION_INPUT_ID);

    if (!pagesNumberInput || !circulationInput) {
        return;
    }

    [pagesNumberInput, circulationInput].forEach((input, index) => input.addEventListener('input', (event) => {
        const errorMessage = input.nextElementSibling;
        if (!Number.isInteger(+event.target.value) || (event.target.id === 'circulation' && +event.target.value < 300) || +event.target.value < 1) { // todo dirty hack for validation
            input.classList.add('invalid');
            errorMessage.style.display = 'block';
        } else {
            input.classList.remove('invalid');
            errorMessage.style.display = 'none';
        }
    }))
}

function getPriceForFormatAndWeight(format, weight) {
    const formatKey = format.toLowerCase().replace(/ /g, '_'); // e.g., "A5" -> "a5"
    const formatData = PAPER_SPECS[formatKey];

    if (formatData && formatData.weights[weight]) {
        return formatData.weights[weight];
    }

    return null; // Return null if format or weight is not found
}



document.addEventListener("DOMContentLoaded", function () {
    createSelectField(PAPER_SPECS, PAPER_BOOK_INPUT_ID);
    createSelectField(BINDINGS, BINDING_INPUT_ID);
    createSelectField(COVER_PRINTINGS, PAPER_COVER_INPUT_ID);
    createSelectField(COVER_REFINEMENTS, REFINEMENT_COVER_INPUT_ID);
    validateCirculationAndPagesNumber()

    document.getElementById('submit-btn').addEventListener('click', () => calculatePrice());

});


function createSelectField(optionsConfig, id) {
    const selectElement = document.getElementById(id);

    if (!selectElement) {
        return;
    }

    optionsConfig.forEach((config) => {
        const option = document.createElement('option');
        option.value = config.name;
        option.textContent = config.displayName;
        selectElement.appendChild(option);
    })
}

function calculatePrice() {
    const pagesNumberInput = document.getElementById(PAGES_NUMBER_INPUT_ID);
    const circulationInput = document.getElementById(CIRCULATION_INPUT_ID);
    const paperBookInput = document.getElementById(PAPER_BOOK_INPUT_ID);
    const bindingInput = document.getElementById(BINDING_INPUT_ID);
    const refinementCoverInput = document.getElementById(REFINEMENT_COVER_INPUT_ID);
    const coverPaperInput = document.getElementById(PAPER_COVER_INPUT_ID);


    if (!pagesNumberInput || !circulationInput || pagesNumberInput.classList.contains('invalid') || circulationInput.classList.contains('invalid')) {
        return;
    }

    const pagesNumber = +pagesNumberInput.value;
    const circulation = +circulationInput.value;
    const pagePrice = PAPER_SPECS.find((v) => v.name === paperBookInput.value)?.price;
    const bindingRatio = BINDINGS.find((v) => v.name === bindingInput.value)?.ratio;
    const coverRefinementsPrice = COVER_REFINEMENTS.find((v) => v.name === refinementCoverInput.value)?.price;
    const coverPrintingRatio = COVER_PRINTINGS.find((v) => v.name === coverPaperInput.value)?.ratio;
    const circulationRatio = CIRCULATION_RATIOS.find((v) => circulation >= v.min && circulation <= v.max)?.ratio ?? CIRCULATION_RATIOS.at(-1).ratio;
    // todo temporary disabled
    // const pageNumberRatio = PAGE_NUMBER_RATIOS.find((v) => pagesNumber >= v.min && pagesNumber <= v.max)?.ratio ?? PAGE_NUMBER_RATIOS.at(-1).ratio;
    const pageNumberRatio = 1;


    const bookPrice = ((pagesNumber * pagePrice * bindingRatio + coverRefinementsPrice) * circulationRatio).toFixed(2);
    const totalPrice = (bookPrice * circulation * coverPrintingRatio * pageNumberRatio).toFixed(2);

    console.log('nakład mnożnik: ', circulationRatio);
    console.log('ilość stron mnożnik: ', pageNumberRatio);
    console.log('cena jednej ksiazki: ', bookPrice);
    console.log('cena całkowita: ', totalPrice);

    const resultDiv = document.getElementById('result');
    
    const values = [
        ['cena strony', pagePrice],
        ['mnożnik oprawa', bindingRatio],
        ['uszlachetnienie okładki cena', coverRefinementsPrice],
        ['mnożnik zadruk okładki', coverPrintingRatio],
        ['mnożnik nakład', circulationRatio],
        ['mnożnik ilość stron', pageNumberRatio],
        ['cena jednej książki', bookPrice],
        ['cena całkowita', totalPrice]
    ]

    resultDiv.innerHTML = ''

    for (const [textContent, value] of values) {
        const description = document.createElement('p');
        description.innerHTML = `${textContent}: <span style="color: red">${value}</span>`
        resultDiv.appendChild(description);
    }
}

function validateCirculationAndPagesNumber() {
    const pagesNumberInput = document.getElementById(PAGES_NUMBER_INPUT_ID);
    const circulationInput = document.getElementById(CIRCULATION_INPUT_ID);

    if (!pagesNumberInput || !circulationInput) {
        return;
    }

    [pagesNumberInput, circulationInput].forEach((input,index) => input.addEventListener('input', (event) => {
        const errorMessage = input.nextElementSibling;
        console.log(event);
        if (!Number.isInteger(+event.target.value) || (event.target.id === 'circulation' && +event.target.value < 300) || +event.target.value < 1) { // todo dirty hack for validation
            input.classList.add('invalid');
            errorMessage.style.display = 'block';
        } else {
            input.classList.remove('invalid');
            errorMessage.style.display = 'none';
        }
    }))
}

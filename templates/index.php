<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator ceny usług</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <div class="form-container">
        <form id="multiStepForm">
            <div class="form-step form-step-active">
                <h2>Kalkulator ceny usługi</h2>
                <label for="paper_book">Format</label>
                <select id="paper_book" required>
                    <option value="" disabled selected>Wybierz</option>
                </select>
                <label for="paper_weight">Papier</label>
                <select id="paper_weight" required>
                    <option value="" disabled selected>Wybierz</option>
                </select>
                <label for="binding">Oprawa</label>
                <select id="binding" required>
                    <option value="" disabled selected>Wybierz</option>
                </select>
                <label for="paper_cover">Zadruk okładki</label>
                <select id="paper_cover" required>
                    <option value="" disabled selected>Wybierz</option>
                </select>
                <label for="refinement_cover">Uszlachetnienie</label>
                <select id="refinement_cover" required>
                    <option value="" disabled selected>Wybierz</option>
                </select>
                <label for="circulation">Nakład</label>
                <input id="circulation" type="text">
                <span class="error-message" id="circulation_error_message">Minimalny nakład wynosi 300 sztuk.</span>
                <label for="pages_number">Stron</label>
                <input id="pages_number" type="text">
                <span class="error-message" id="pages_number_error_message">Wprowadzona wartość powinna być liczbą całkowitą większą od 0.</span>

                <button id="submit-btn" type="button">Oblicz koszt</button>
            </div>
            <div id="result" class="result"></div>
        </form>
    </div>
    <script src="../js/script.js"></script>
    <script src="../js/constants.js"></script>

</body>
</html>

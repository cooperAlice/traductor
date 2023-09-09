       document.addEventListener("DOMContentLoaded", () => {
            const textToTranslateInput = document.getElementById("text-to-translate");
            const translateButton = document.getElementById("translate-button");
            const translationResult = document.getElementById("translation-result");

            translateButton.addEventListener("click", async () => {
                const textToTranslate = textToTranslateInput.value;
                // Modifica la URL para traducir del español (es-ES) al inglés (en-US)
                const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=es%7Cen&q=${textToTranslate}&mt=1&onlyprivate=0&de=a%40b.c`;

                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'ca7bb25b00msh7921706a9ae8721p1eb396jsn8987093de18b',
                        'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(url, options);
                    const result = await response.json();
                    // Obtén la traducción desde la respuesta JSON
                    const translatedText = result.responseData.translatedText;
                    translationResult.textContent = translatedText;
                } catch (error) {
                    console.error(error);
                    translationResult.textContent = "Error al realizar la traducción.";
                }
            });
        });









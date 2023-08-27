const apiUrl =
  "https://raw.githubusercontent.com/bss709/langlio_source/main/dictionary.json";

async function wordsSelect() {
  try {
    const response = await fetch(apiUrl);
    const countriesData = await response.json();

    const countrySelect = document.getElementById("selectWords");

    countriesData.forEach((dictionary) => {
      const option = document.createElement("option");
      option.value = dictionary.word;
      option.textContent = dictionary.word;
      countrySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der Wörter:", error);
  }
}

wordsSelect();

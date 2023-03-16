//Part 2 - JS Questions -

// Question: sort(a) -
a = [[3, 5, 3], ["a"], [4, "b", 5, 6], [6, 2]];
a.sort((a, b) => a.length - b.length);

console.log(a);

// - stays, + replace, = stays

//Question: statistic(s) -
function countWords(string) {
  // question mark operator
  const words = string?.split(" ") || [];
  const wordObject = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordObject[word]) {
      wordObject[word]++;
    } else {
      wordObject[word] = 1;
    }
  }
  return wordObject;
}

console.log(countWords("i know what i know"));

// Part 3 - DOM

//Getting elements
const countries =
  '{"countries":[{"name":"France","population":66000000,"capital":"Paris","currency":"eur"},{"name":"Germany","population":82620000,"capital":"Berin","currency":"eur"},{"name":"Norway","population":5233000,"capital":"Oslo","currency":"nok"},{"name":"Russia","population":144526000,"capital":"Moscow","currency":"rub"}]}';
const parsedCountries = JSON.parse(countries).countries;
parsedCountries.sort((a, b) => a.name.localeCompare(b.name));

const tableBtn = document.getElementById("table-button");
const tableList = document.getElementById("table");
const tableSummary = document.getElementById("table-summary");

//Event Listeners
tableBtn.addEventListener("click", handleClick);

//Creating elements
const tRow = document.createElement("tr");
const allKeys = Object.keys(parsedCountries[0]);

//Getting Header Values By Keys:
allKeys.forEach((key) => {
  const tHeader = document.createElement("th");
  tHeader.innerText = key;
  tRow.appendChild(tHeader);
});
tableList.appendChild(tRow);

//Getting Header Values By Values:
parsedCountries.forEach((country) => {
  const tRow = document.createElement("tr");
  Object.values(country).forEach((value) => {
    const tData = document.createElement("td");
    tData.innerText = value;
    tRow.appendChild(tData);
  });
  tableList.appendChild(tRow);
});


let euroCount = 0;

parsedCountries.forEach((country) => {
  if (country.currency === "eur") {
    euroCount++;
  }
});
const countryCount = parsedCountries.length;

tableSummary.innerText = `The amount of countries: ${countryCount}, the amount of euro used: ${euroCount}`;

//Functions
function handleClick() {
  tableList.classList.toggle("show");
  tableSummary.classList.toggle("show");
}
// Function to fetch country data from API
async function fetchCountryData(countryName) {
  // 1. Build API URL
  const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  // 2. Make the API request
  const response = await fetch(apiUrl);

  // 3. Check if response is ok
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // 4. Convert data to JSON
  const data = await response.json();

  // 5. Check if country was found
  if (data.status === 404) {
    throw new Error("Country not found");
  }

  // 6. Return the first country result
  return data[0];
}

export default fetchCountryData;

fetch('config/language/language.json')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('country');
    data.countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.value;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching country data:', error));
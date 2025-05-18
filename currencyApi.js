class CurrencyConverter {
  constructor(url) {
    this.apiUrl = url ;
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((data) => {
        this.rates = data.rates
        console.log(data)
      })
      .catch((error) => {
        console.error("Error tetchig exchange retes", error);
      });
  }
  
}
const CurrencyApi = "https://api.exchangerate-api.com/v4/latest/USD"
const weather = "https://goweather.herokuapp.com/weather/bangladesh"
const data = new CurrencyConverter(weather)
console.log(data)
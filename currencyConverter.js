class CurrencyConverter {
  static async fetchRate() {
    const url = "https://api.exchangerate-api.com/v4/latest/USD";
    const res = await fetch(url);
    const data = await res.json();

    return data.rates.BDT;
  }

  static async USDtoBDT(amount) {
    const rate = await CurrencyConverter.fetchRate();
    const bdt = amount * rate;
    return bdt;
  }
  static async BDTtoUSD(amount) {
    const rate = await CurrencyConverter.fetchRate();
    const usd = amount / rate;
    return usd;
  }
}

const amountInUSD = 100;
const bdt = await CurrencyConverter.USDtoBDT(amountInUSD);
const bdtData = `${amountInUSD} USD is equal to ${bdt} BDT `;
console.log(bdtData);
const amountInBDT = 12153;
const usd = await CurrencyConverter.BDTtoUSD(amountInBDT);
const usdData = `${amountInBDT} BDT is equal to ${usd} USD `;
console.log(usdData);

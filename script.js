const rates = {
  USD: { USD: 1, EUR: 0.92, GBP: 0.78, INR: 83.6, JPY: 149.5 },
  EUR: { USD: 1.09, EUR: 1, GBP: 0.85, INR: 90.8, JPY: 162.6 },
  GBP: { USD: 1.28, EUR: 1.18, GBP: 1, INR: 106.7, JPY: 191.2 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, INR: 1, JPY: 1.79 },
  JPY: { USD: 0.0067, EUR: 0.0061, GBP: 0.0052, INR: 0.56, JPY: 1 }
};

const amount = document.querySelector("#amount");
const from = document.querySelector("#from-currency");
const to = document.querySelector("#to-currency");
const result = document.querySelector("#result");
const rateLabel = document.querySelector("#rate-label");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}

function convert() {
  const rate = rates[from.value][to.value];
  const value = Number(amount.value) || 0;
  result.textContent = formatNumber(value * rate);
  rateLabel.textContent = `1 ${from.value} = ${formatNumber(rate)} ${to.value}`;
}

document.querySelector("#calculate").addEventListener("click", convert);
amount.addEventListener("input", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);
document.querySelector("#swap-button").addEventListener("click", () => {
  const oldFrom = from.value;
  from.value = to.value;
  to.value = oldFrom;
  convert();
});

convert();

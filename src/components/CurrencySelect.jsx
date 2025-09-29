const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];

const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
    // Map currency codes to correct country codes for flags
    const getCountryCode = (currency) => {
        const currencyToCountry = {
            'EUR': 'eu', 
            'USD': 'us',
            'GBP': 'gb',
            'JPY': 'jp',
            'CHF': 'ch',
            'CAD': 'ca',
            'AUD': 'au',
            'SEK': 'se',
            'NOK': 'no',
            'DKK': 'dk',
            'CNY': 'cn',
            'RUB': 'ru',
            'INR': 'in',
            'BRL': 'br',
            'KRW': 'kr',
            'MXN': 'mx',
            // Regional currencies - use representative country
            'XAF': 'cm', 
            'XCD': 'ag', 
            'XOF': 'sn', 
            'XPF': 'pf', 
            'ANG': 'cw', 
            // Other special cases
            'TWD': 'tw', 
            'HKD': 'hk', 
            'MOP': 'mo', 
        };
        return currencyToCountry[currency] || currency.substring(0, 2).toLowerCase();
    };
    
    const countryCode = getCountryCode(selectedCurrency);

  return (
    <div className="currency-select">
      <img 
        src={`https://flagcdn.com/24x18/${countryCode}.png`} 
        alt={`${selectedCurrency} flag`}
        onError={(e) => {
          // Fallback to a generic currency icon if flag fails to load
          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE4IiByeD0iMiIgZmlsbD0iIzM0MzQzNCIvPgo8dGV4dCB4PSIxMiIgeT0iMTIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5KwPC90ZXh0Pgo8L3N2Zz4=';
        }}
      />
      <select 
      onChange={handleCurrency}
      className="currency-dropdown" value={selectedCurrency}>
        {currencyCodes.map(currency  => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;

# Currency Converter

A modern, responsive currency converter built with React and Vite. Get real-time exchange rates for 160+ currencies with an intuitive user interface.

![Currency Converter](./public/demo.png)

## Demo

Try the live demo: [Currency Converter](https://askeran17.github.io/currency-converter/)

## Features

- **Real-time Exchange Rates**: Powered by ExchangeRate-API
- **160+ Currencies**: Support for all major world currencies
- **Country Flags**: Visual currency identification with flag icons
- **Auto-conversion**: Instant rate calculation as you type
- **Currency Swap**: One-click currency pair swapping
- **Responsive Design**: Works perfectly on desktop and mobile
- **Clean UI**: Modern, intuitive interface
- **No API Key Required**: Uses free Open Access API

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **CSS3** - Custom styling with modern CSS
- **ExchangeRate-API** - Free currency exchange rate API
- **FlagCDN** - Country flag images

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Askeran17/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Usage

1. **Enter Amount**: Type the amount you want to convert
2. **Select Currencies**: Choose source and target currencies from dropdowns
3. **View Results**: Conversion happens automatically
4. **Swap Currencies**: Click the swap icon to reverse conversion

## Supported Currencies

The app supports 160+ currencies including:

- **Major**: USD, EUR, GBP, JPY, CAD, AUD, CHF
- **Asian**: CNY, INR, KRW, SGD, HKD, THB
- **European**: SEK, NOK, DKK, PLN, CZK
- **Others**: BRL, MXN, RUB, ZAR, and many more

## API Integration

This project uses the free [ExchangeRate-API](https://exchangerate-api.com/) Open Access endpoint:

- **Endpoint**: `https://open.er-api.com/v6/latest/{base_currency}`
- **Rate Limit**: Reasonable limits for personal use
- **Updates**: Daily rate updates
- **No Auth**: No API key required

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [ExchangeRate-API](https://exchangerate-api.com/) for free currency data
- [FlagCDN](https://flagcdn.com/) for country flag images
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool

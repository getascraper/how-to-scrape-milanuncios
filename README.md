# Milanuncios Scraper | Spain Classifieds | Apify Actor

<p align="center">
  <a href="https://apify.com/getascraper/milanuncios-scraper"><img src="https://img.shields.io/badge/apify%20actor-ready-green" alt="Apify Actor"></a>
  <a href="https://github.com/getascraper/how-to-scrape-milanuncios"><img src="https://img.shields.io/badge/typescript-5.3-blue" alt="TypeScript"></a>
  <a href="https://github.com/getascraper/how-to-scrape-milanuncios"><img src="https://img.shields.io/badge/playwright-browser-red" alt="Playwright"></a>
  <a href="https://github.com/getascraper/how-to-scrape-milanuncios"><img src="https://img.shields.io/badge/spain%20classifieds-cars%20%7C%20property%20%7C%20phones-yellow" alt="Spain Classifieds"></a>
  <a href="https://apify.com/getascraper/milanuncios-scraper"><img src="https://img.shields.io/badge/euro%20prices-EUR-orange" alt="Euro Prices"></a>
</p>

**Milanuncios scraper and Spanish classifieds data extraction API.** Extract cars, property, phones, and second-hand listings with EUR prices, images, and seller profiles from milanuncios.com with this Apify Actor. Playwright browser automation with ES residential proxies. Bypass Datadome blocks. Free tier included.

**Price: $4.99 per 1,000 results**

## What does Milanuncios Scraper do?

The **Milanuncios Scraper** pulls live, structured listings from **Milanuncios** (milanuncios.com), Spain's largest classifieds marketplace. It extracts product titles, prices, locations, car mileage attributes, and professional dealer coordinates for any keyword across Spain.

It uses **Playwright browser automation** with premium Spanish (ES) residential proxies to bypass Datadome blocks and extract:
- Cars, property, phones, and second-hand listings
- Full EUR prices with normalized numeric values
- Car attributes: year, mileage, fuel type, transmission, horsepower, warranty
- Seller profiles: type (private or professional), name, location
- Images and detailed descriptions

## Why use Milanuncios Scraper?

- **Track Spanish second-hand valuations.** Compare asking prices and vehicle details across Spain's largest classifieds marketplace.
- **Source direct owner listings.** Automatically isolate private individuals from professional dealerships to find direct deals, saving money on intermediary margins.
- **Get clean, normalized numbers.** Instantly convert Spanish price strings (e.g., 124.900 EUR or 16.900EUR) and vehicle tags into clean numeric values in Euros.
- **Feed market intelligence.** Plug structured Spanish property, car, or phone rows directly into spreadsheets, BI dashboards, or RAG models.

## How to use Milanuncios Scraper

1. Create a free Apify account.
2. Open the **Milanuncios Scraper** in the Apify Store.
3. Enter your search keyword (e.g., iphone 15, audi a4 avant).
4. Select the target region or province (e.g., Madrid, Barcelona, Valencia).
5. Click **Start** and download the dataset as JSON, CSV, or Excel.

## Input Parameters

| Field | Default | Description |
| text | iphone 15 | Search keyword (e.g., bmw x5 or piso 3 habitaciones). Supports Spanish and English. |
| city | all (Spain) | Filter listings by major Spanish regions or provinces (Madrid, Barcelona, etc.). |
| category | "" (All) | Target specific categories (Motor, Real Estate, Jobs, Phones). |
| sellerType | "" (All) | Filter out dealerships or individual direct owners. |
| priceFrom | 0 | Minimum asking price in Euros. |
| priceTo | 0 | Maximum asking price in Euros. |
| isShippable | false | Only include listings available for shipping (Envios disponibles). |
| maxItems | 100 | Maximum number of listings to extract. |

## Output Structure

```json
{
    "id": "578414171",
    "url": "https://www.milanuncios.com/bmw-de-segunda-mano/bmw-xm-578414171.htm",
    "title": "BMW - XM",
    "description": "Bienvenido a gtcars premium, presentes en gran canaria...",
    "postedDate": "2026-01-28T12:05:37.000Z",
    "scrapedAt": "2026-06-10T13:00:00.000Z",
    "price": 124900,
    "priceRaw": "124.900 EUR",
    "previousPrice": null,
    "currency": "EUR",
    "city": "San Miguel de Abona",
    "province": "Tenerife",
    "region": "Canarias",
    "address": "Unknown address",
    "sellerType": "PROFESSIONAL",
    "sellerName": "GT Cars Premium Tenerife",
    "sellerSince": null,
    "sellerRating": null,
    "sellerTotalListings": null,
    "sellerUrl": "",
    "year": 2023,
    "mileage": 25800,
    "fuel": "Hybrid",
    "transmission": "Automatic",
    "hp": 653,
    "warranty": "12 Months",
    "images": []
}
```

## Output Fields

| Field | Description |
| id | Unique identifier of the listing. |
| url | Direct public listing link. |
| title | Title of the listing. |
| price | Standardized current price value in Euros (EUR). |
| priceRaw | Raw price string from the source (e.g., 124.900 EUR). |
| province | Spanish province where the listing is located (e.g., Madrid, Tenerife). |
| sellerType | Type of seller (PROFESSIONAL or PRIVATE). |
| year | Build year of the vehicle (Motor only). |
| mileage | Mileage in kilometers (Motor only). |
| fuel | Standardized bilingual fuel type (Diesel, Gasoline, Hybrid). |
| transmission | Standardized bilingual transmission type (Automatic, Manual). |
| hp | Horsepower rating of the vehicle. |
| warranty | Standardized bilingual warranty period. |
| scrapedAt | ISO timestamp of when the listing was saved. |

## Cost

Pricing is per row saved to the dataset. Empty runs cost nothing. There is no fixed fee.

A single 100-card run typically saves 100 rows. You can monitor the row count live in the run console.

## Tips

- **Bypass geoblocks natively.** The Actor automatically routes through premium, high-reputation Spanish (ES) Residential Proxies by default, ensuring seamless execution and 0% WAF blocking.
- **Exclude dealers to find bargain deals.** Turn on the sellerType: private filter to drop professional dealerships and extract direct owner listings, saving money on intermediary markups.
- **Schedule it.** Use Apify Schedules to run daily or weekly and watch for price drops or new listings entering your target region.

## FAQ

**Is scraping Milanuncios legal?**
This Actor retrieves publicly available classified listings on Milanuncios. Make sure your usage complies with Milanuncios's terms of service and applicable laws.

**Can I run this on a schedule?**
Yes. Use Apify Schedules to run daily or weekly.

**How can I submit suggestions or bugs?**
Open an issue in the **Issues** tab on this Actor's page, or contact us through the Apify Console.

## Related scraping tools

- [Mercari Japan Scraper](https://github.com/getascraper/how-to-scrape-mercari-japan) - Japanese second-hand marketplace with JPY prices
- [Mercari US Scraper](https://github.com/getascraper/how-to-scrape-mercari-us) - US second-hand marketplace with USD prices
- [Google Shopping Ads Scraper](https://github.com/getascraper/how-to-scrape-google-shopping-ads) - Product ads and pricing data
- [Gofractional Scraper](https://github.com/getascraper/how-to-scrape-gofractional) - Fractional job listings and salary data
- [JobMaster Scraper](https://github.com/getascraper/how-to-scrape-jobmaster) - Israeli job listings with salary data

## Support

- Open an issue at https://github.com/getascraper/how-to-scrape-milanuncios/issues
- Contact us through the Apify Console

---

*Built with the Apify SDK and Playwright. Optimized for Spanish classifieds data extraction at scale.*

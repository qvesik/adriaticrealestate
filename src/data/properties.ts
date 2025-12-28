export type DealType = "sale" | "rent";
export type CategoryType = "apartments" | "houses" | "land-garages" | "businesses";

export type Property = {
  id: string;
  deal: DealType;
  category: CategoryType;
  title: string;
  description: string;
  salePrice?: number;
  rentPrice?: number;
  areaM2: number;
  city: "durres" | "golem" | "vlora" | "saranda" | "tirana" | "shengjin" | "velipoje";
  addressLine?: string;
  images: string[];
  video?: { kind: "youtube" | "mp4"; url: string };
  map: { lat: number; lng: number; embedUrl?: string; googleMapsUrl?: string };
};

const mapsByCity = {
  durres: { lat: 41.3231, lng: 19.4414 },
  golem: { lat: 41.2436, lng: 19.5164 },
  vlora: { lat: 40.4661, lng: 19.4914 },
  saranda: { lat: 39.8756, lng: 20.0053 },
  tirana: { lat: 41.3275, lng: 19.8187 },
  shengjin: { lat: 41.8136, lng: 19.5939 },
  velipoje: { lat: 41.8778, lng: 19.4053 },
} as const;

function embedFromLatLng(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

function mapsUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export const properties: Property[] = [
  {
    id: "a101",
    deal: "sale",
    category: "apartments",
    title: "Modern Apartment in Durrës (2+1)",
    description:
      "Bright 2-bedroom apartment with balcony, elevator building, close to services. Great for living or investment.",
    salePrice: 95000,
    areaM2: 78,
    city: "durres",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/8d345684-9943-4862-9912-8b87d7147817.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
    ],
    video: { kind: "youtube", url: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
    map: (() => {
      const { lat, lng } = mapsByCity.durres;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "a102",
    deal: "rent",
    category: "apartments",
    title: "Sea-view Studio in Vlorë",
    description:
      "Cozy studio apartment with sea-view balcony, fully furnished, available for long-term rent.",
    rentPrice: 450,
    areaM2: 32,
    city: "vlora",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/8d345684-9943-4862-9912-8b87d7147817.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.vlora;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "h201",
    deal: "sale",
    category: "houses",
    title: "Family House in Tirana (3BR)",
    description:
      "Detached house with yard, parking, and great access to the city center. Ideal for families.",
    salePrice: 185000,
    areaM2: 160,
    city: "tirana",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/8d345684-9943-4862-9912-8b87d7147817.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.tirana;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "h202",
    deal: "rent",
    category: "houses",
    title: "Garden House in Durrës",
    description:
      "Comfortable house with garden and terrace. Fully furnished. Quiet neighborhood.",
    rentPrice: 900,
    areaM2: 120,
    city: "durres",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/8d345684-9943-4862-9912-8b87d7147817.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.durres;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "lg301",
    deal: "sale",
    category: "land-garages",
    title: "Land Plot near Golem (Investment)",
    description:
      "Land plot suitable for residential development. Easy access road and utilities nearby.",
    salePrice: 65000,
    areaM2: 420,
    city: "golem",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.golem;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "lg302",
    deal: "rent",
    category: "land-garages",
    title: "Garage Space in Durrës (Long-term)",
    description:
      "Secure garage space for car storage. Easy access, suitable for long-term rent.",
    rentPrice: 80,
    areaM2: 18,
    city: "durres",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.durres;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "b401",
    deal: "sale",
    category: "businesses",
    title: "Café Business in Saranda (Turnkey)",
    description:
      "Operating café in a high-footfall area. Includes equipment and lease transfer options.",
    salePrice: 120000,
    areaM2: 95,
    city: "saranda",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/8d345684-9943-4862-9912-8b87d7147817.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.saranda;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
  {
    id: "b402",
    deal: "rent",
    category: "businesses",
    title: "Shop Space in Tirana (Main Street)",
    description:
      "Retail space suitable for shop or showroom. High visibility, flexible layout.",
    rentPrice: 1500,
    areaM2: 110,
    city: "tirana",
    images: [
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/2df786cc-50d6-44f7-ba09-c57e419d975a.png",
      "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/ddcc779d-88f3-4efc-8ddb-2e752d2ce298.png",
    ],
    map: (() => {
      const { lat, lng } = mapsByCity.tirana;
      return { lat, lng, embedUrl: embedFromLatLng(lat, lng), googleMapsUrl: mapsUrl(lat, lng) };
    })(),
  },
];

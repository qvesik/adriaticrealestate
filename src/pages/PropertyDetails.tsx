import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, ArrowLeft, Ruler, Tag } from "lucide-react";
import { properties } from "@/data/properties";
import { siteTranslations, type LanguageCode } from "@/lib/siteTranslations";

export default function PropertyDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const type = (params.type as "sale" | "rent") || "sale";
  const category = (params.category as any) || "apartments";
  const id = params.id as string;

  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("selectedLanguage") as LanguageCode) || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("selectedLanguage", language);
  }, [language]);

  const t = siteTranslations[language];

  const property = useMemo(() => {
    return properties.find(
      (p) => p.id === id && p.deal === type && p.category === category
    );
  }, [id, type, category]);

  const priceText = useMemo(() => {
    if (!property) return "";
    if (type === "sale") return `€${(property.salePrice ?? 0).toLocaleString("en-US")}`;
    return `€${(property.rentPrice ?? 0).toLocaleString("en-US")}/${t.month}`;
  }, [property, type, t.month]);

  if (!property) {
    return (
      <div className="min-h-screen bg-[#1E3A5F] text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <Button variant="secondary" onClick={() => navigate("/")}>
            {t.backToHome}
          </Button>
          <div className="mt-10 text-xl">{t.noResults}</div>
        </div>
      </div>
    );
  }

  const cityLabel = (t as any)[property.city] ?? property.city;

  return (
    <div className="min-h-screen bg-[#1E3A5F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Button
            variant="secondary"
            onClick={() => navigate(`/properties/${type}/${category}`)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToResults}
          </Button>

          {/* Language (keeps the same approach as other pages) */}
          <div className="flex items-center gap-2">
            <Button
              variant={language === "en" ? "default" : "secondary"}
              onClick={() => setLanguage("en")}
              className="h-10"
            >
              EN
            </Button>
            <Button
              variant={language === "ru" ? "default" : "secondary"}
              onClick={() => setLanguage("ru")}
              className="h-10"
            >
              RU
            </Button>
            <Button
              variant={language === "sq" ? "default" : "secondary"}
              onClick={() => setLanguage("sq")}
              className="h-10"
            >
              SQ
            </Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white text-[#102A43] overflow-hidden">
            <CardContent className="p-6">
              <Tabs defaultValue="photos">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="photos">{t.gallery}</TabsTrigger>
                  <TabsTrigger value="video">{t.video}</TabsTrigger>
                </TabsList>

                <TabsContent value="photos" className="mt-4">
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {property.images.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="rounded-xl overflow-hidden">
                              <img
                                src={src}
                                alt={`${property.title} ${idx + 1}`}
                                className="w-full h-[360px] object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                </TabsContent>

                <TabsContent value="video" className="mt-4">
                  {!property.video ? (
                    <div className="text-gray-600">—</div>
                  ) : property.video.kind === "youtube" ? (
                    <div className="rounded-xl overflow-hidden aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={property.video.url}
                        title="Property video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video className="w-full rounded-xl" controls>
                      <source src={property.video.url} />
                    </video>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold leading-tight">{property.title}</h1>
              <div className="mt-3 text-2xl font-bold">{priceText}</div>
              <div className="mt-3 flex flex-wrap gap-4 text-white/80">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {cityLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Ruler className="w-4 h-4" />
                  {property.areaM2} m²
                </span>
                <span className="inline-flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {type === "sale" ? t.forSale : t.forRent}
                </span>
              </div>
            </div>

            <Card className="bg-white text-[#102A43]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{t.description}</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-[#102A43]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">{t.map}</h2>
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={property.map.embedUrl}
                    className="w-full h-[280px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                  />
                </div>
                <div className="mt-4">
                  <a
                    href={property.map.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-[#1E3A5F] font-semibold"
                  >
                    {t.openInMaps}
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3 flex-wrap">
              <Button
                className="bg-white text-[#102A43] hover:bg-white/90"
                onClick={() => window.open("https://t.me/Qvesik", "_blank")}
              >
                {t.contact} (Telegram)
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.open("https://wa.me/355688174771", "_blank")}
              >
                {t.contact} (WhatsApp)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

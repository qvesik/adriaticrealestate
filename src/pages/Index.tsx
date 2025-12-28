import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Shield, Users, Globe, FileCheck, BadgeCheck, Building2, Home as HomeIcon, MapPin, Store, ChevronRight, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [activeTab, setActiveTab] = useState("sale");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const heroImages = [
    "/assets/hero-albanian-coast-durres_variant_1.jpg",
    "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/0b1e51a9-2415-4f91-a68d-fa777b6111e7.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/5f3191aa-6508-4ba7-90a3-046399770267.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: "apartments",
      nameKey: "apartments",
      icon: <Building2 className="w-12 h-12" />,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/7f9e868c-9d26-4c43-9c33-6391a48edcee.png",
    },
    {
      id: "houses",
      nameKey: "houses",
      icon: <HomeIcon className="w-12 h-12" />,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/5724c673-e56b-4b19-b01b-cf1ef00c0053.png",
    },
    {
      id: "land-garages",
      nameKey: "landGarages",
      icon: <MapPin className="w-12 h-12" />,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/bb688d1d-7108-4b0a-bfa3-44a36aea4490.png",
    },
    {
      id: "businesses",
      nameKey: "businesses",
      icon: <Store className="w-12 h-12" />,
      image: "https://mgx-backend-cdn.metadl.com/generate/images/865598/2025-12-27/1e45f89b-1ee7-4df8-8419-8a58c8318584.png",
    },
  ];

  const translations = {
    en: {
      heroTitle: "Property in Albania for Living & Investment",
      heroSubtitle: "Find reliable apartments in Albania with full legal support.",
      growingMarket: "Growing European Market",
      growingMarketDesc: "Albania is one of Europe's fastest-growing real estate markets.",
      affordablePrices: "Affordable Prices",
      affordablePricesDesc: "Prices from €30,000+ with strong investment potential.",
      legalSupport: "Legal Support for Buyers",
      legalSupportDesc: "Full legal assistance for local and international clients.",
      propertyCategories: "Property Categories",
      propertyCategoriesDesc: "Browse properties by category",
      forSale: "For Sale",
      forRent: "For Rent",
      apartments: "Apartments",
      houses: "Houses",
      landGarages: "Land & Garages",
      businesses: "Businesses",
      whyChooseUs: "Why Choose Us",
      localExperts: "Local Experts in Albania",
      localExpertsDesc: "Deep understanding of the Albanian real estate market.",
      languageSupport: "Multilingual Support",
      languageSupportDesc: "English, Russian and Albanian language support.",
      fullLegal: "Full Legal Assistance",
      fullLegalDesc: "From property selection to ownership registration.",
      transparentPricing: "Transparent Pricing",
      transparentPricingDesc: "No hidden fees, clear and honest process.",
      popularAreas: "Popular Areas",
      popularAreasDesc: "Explore the most sought-after locations in Albania",
      durresName: "Durrës",
      durresDesc: "Coastal city with beautiful beaches and growing infrastructure",
      shengjinName: "Shëngjin",
      shengjinDesc: "Charming coastal town with pristine beaches and relaxed atmosphere",
      velipojeName: "Velipojë",
      velipojeDesc: "Peaceful beach destination perfect for vacation properties",
      vloraName: "Vlora",
      vloraDesc: "Historic port city with stunning Adriatic and Ionian sea views",
      sarandaName: "Saranda",
      sarandaDesc: "Popular tourist destination with Mediterranean climate",
      tiranaName: "Tirana",
      tiranaDesc: "Capital city with modern amenities and business opportunities",
      faq: "FAQ",
      faqDesc: "Frequently Asked Questions",
      faqQ1: "Can foreigners buy property in Albania?",
      faqA1: "Yes, foreigners can freely buy property in Albania.",
      faqQ2: "Are there property taxes?",
      faqA2: "Taxes are low compared to other European countries.",
      faqQ3: "Is residency possible through property purchase?",
      faqA3: "Yes, property ownership helps with residency options.",
      faqQ4: "What documents are required?",
      faqA4: "Passport and basic legal documentation.",
      faqQ5: "How long does the process take?",
      faqA5: "Usually 2–4 weeks.",
      footerTagline: "Your trusted partner for property in Albania",
      copyright: "© 2025 Adriatic Real Estate",
      contact: "Contact",
    },
    ru: {
      heroTitle: "Недвижимость в Албании для жизни и инвестиций",
      heroSubtitle: "Подбор надёжных апартаментов в Албании с полным юридическим сопровождением.",
      growingMarket: "Растущий рынок Европы",
      growingMarketDesc: "Албания — один из самых быстрорастущих рынков недвижимости в Европе.",
      affordablePrices: "Доступные цены",
      affordablePricesDesc: "Цены от 30 000 € с высоким инвестиционным потенциалом.",
      legalSupport: "Юридическая поддержка",
      legalSupportDesc: "Полное сопровождение сделки для местных и иностранных покупателей.",
      propertyCategories: "Категории недвижимости",
      propertyCategoriesDesc: "Просмотр недвижимости по категориям",
      forSale: "Продажа",
      forRent: "Аренда",
      apartments: "Апартаменты",
      houses: "Дома",
      landGarages: "Земля и гаражи",
      businesses: "Бизнес",
      whyChooseUs: "Почему мы",
      localExperts: "Местные эксперты",
      localExpertsDesc: "Отличное знание рынка недвижимости Албании.",
      languageSupport: "Многоязычная поддержка",
      languageSupportDesc: "Английский, русский и албанский языки.",
      fullLegal: "Полное юридическое сопровождение",
      fullLegalDesc: "От подбора до регистрации собственности.",
      transparentPricing: "Прозрачные цены",
      transparentPricingDesc: "Без скрытых комиссий.",
      popularAreas: "Популярные районы",
      popularAreasDesc: "Изучите самые востребованные места в Албании",
      durresName: "Дуррес",
      durresDesc: "Прибрежный город с красивыми пляжами и развивающейся инфраструктурой",
      shengjinName: "Шенгин",
      shengjinDesc: "Очаровательный прибрежный город с чистыми пляжами и спокойной атмосферой",
      velipojeName: "Велипое",
      velipojeDesc: "Спокойное пляжное направление, идеальное для отдыха",
      vloraName: "Влёра",
      vloraDesc: "Исторический портовый город с потрясающими видами на Адриатическое и Ионическое моря",
      sarandaName: "Саранда",
      sarandaDesc: "Популярное туристическое направление со средиземноморским климатом",
      tiranaName: "Тирана",
      tiranaDesc: "Столица с современными удобствами и бизнес-возможностями",
      faq: "Часто задаваемые вопросы",
      faqDesc: "Ответы на популярные вопросы",
      faqQ1: "Могут ли иностранцы покупать недвижимость в Албании?",
      faqA1: "Да, иностранцы могут свободно покупать недвижимость в Албании.",
      faqQ2: "Есть ли налоги на недвижимость?",
      faqA2: "Налоги низкие по сравнению с другими европейскими странами.",
      faqQ3: "Можно ли получить вид на жительство через покупку недвижимости?",
      faqA3: "Да, владение недвижимостью помогает с получением вида на жительство.",
      faqQ4: "Какие документы требуются?",
      faqA4: "Паспорт и базовая юридическая документация.",
      faqQ5: "Сколько времени занимает процесс?",
      faqA5: "Обычно 2–4 недели.",
      footerTagline: "Ваш надежный партнер в сфере недвижимости в Албании",
      copyright: "© 2025 Adriatic Real Estate",
      contact: "Контакт",
    },
    sq: {
      heroTitle: "Pasuri të Paluajtshme në Shqipëri për Jetesë dhe Investim",
      heroSubtitle: "Apartamente të besueshme në Shqipëri me mbështetje të plotë ligjore.",
      growingMarket: "Treg në Rritje Evropiane",
      growingMarketDesc: "Shqipëria është një nga tregjet më të shpejta në rritje në Evropë.",
      affordablePrices: "Çmime të Përballueshme",
      affordablePricesDesc: "Çmime nga 30,000 € me potencial të fortë investimi.",
      legalSupport: "Mbështetje Ligjore",
      legalSupportDesc: "Asistencë e plotë ligjore për blerës vendas dhe të huaj.",
      propertyCategories: "Kategoritë e pronave",
      propertyCategoriesDesc: "Shfletoni pronat sipas kategorisë",
      forSale: "Për shitje",
      forRent: "Për qira",
      apartments: "Apartamente",
      houses: "Shtëpi",
      landGarages: "Tokë dhe garazhe",
      businesses: "Biznese",
      whyChooseUs: "Pse ne",
      localExperts: "Ekspertë Lokalë",
      localExpertsDesc: "Njohuri të thella të tregut të pasurive të paluajtshme.",
      languageSupport: "Mbështetje shumëgjuhëshe",
      languageSupportDesc: "Anglisht, rusisht dhe shqip.",
      fullLegal: "Asistencë Ligjore e Plotë",
      fullLegalDesc: "Nga përzgjedhja deri te regjistrimi i pronës.",
      transparentPricing: "Çmime Transparente",
      transparentPricingDesc: "Pa tarifa të fshehura.",
      popularAreas: "Zona popullore",
      popularAreasDesc: "Eksploroni vendet më të kërkuara në Shqipëri",
      durresName: "Durrës",
      durresDesc: "Qytet bregdetar me plazhe të bukura dhe infrastrukturë në rritje",
      shengjinName: "Shëngjin",
      shengjinDesc: "Qytet bregdetar tërheqës me plazhe të pastra dhe atmosferë të qetë",
      velipojeName: "Velipojë",
      velipojeDesc: "Destinacion i qetë plazhi i përsosur për prona pushimi",
      vloraName: "Vlorë",
      vloraDesc: "Qytet historik portual me pamje mahnitëse të detit Adriatik dhe Jon",
      sarandaName: "Sarandë",
      sarandaDesc: "Destinacion i njohur turistik me klimë mesdhetare",
      tiranaName: "Tiranë",
      tiranaDesc: "Kryeqyteti me komoditet moderne dhe mundësi biznesi",
      faq: "Pyetje të shpeshta",
      faqDesc: "Përgjigje për pyetjet më të zakonshme",
      faqQ1: "A mund të blejnë të huajt prona në Shqipëri?",
      faqA1: "Po, të huajt mund të blejnë lirisht prona në Shqipëri.",
      faqQ2: "A ka taksa pronash?",
      faqA2: "Taksat janë të ulëta krahasuar me vendet e tjera evropiane.",
      faqQ3: "A është e mundur rezidenca përmes blerjes së pronës?",
      faqA3: "Po, pronësia e pronës ndihmon me opsionet e rezidencës.",
      faqQ4: "Çfarë dokumentesh kërkohen?",
      faqA4: "Pasaportë dhe dokumentacion bazë ligjor.",
      faqQ5: "Sa kohë zgjat procesi?",
      faqA5: "Zakonisht 2–4 javë.",
      footerTagline: "Partneri juaj i besueshëm për prona në Shqipëri",
      copyright: "© 2025 Adriatic Real Estate",
      contact: "Kontakt",
    },
  };

  const t = translations[language as keyof typeof translations];

  const popularAreas = [
    {
      nameKey: "durresName",
      descKey: "durresDesc",
      image: "/assets/hero-albanian-coast-durres.jpg",
    },
    {
      nameKey: "shengjinName",
      descKey: "shengjinDesc",
      image: "/assets/property-beachfront-residence_variant_2.jpg",
    },
    {
      nameKey: "velipojeName",
      descKey: "velipojeDesc",
      image: "/assets/property-villa-pool-adriatic_variant_2.jpg",
    },
    {
      nameKey: "vloraName",
      descKey: "vloraDesc",
      image: "/assets/property-modern-apartment-seaview_variant_2.jpg",
    },
    {
      nameKey: "sarandaName",
      descKey: "sarandaDesc",
      image: "/assets/property-penthouse-balcony_variant_2.jpg",
    },
    {
      nameKey: "tiranaName",
      descKey: "tiranaDesc",
      image: "/assets/property-beachfront-residence.jpg",
    },
  ];

  const handleWhatsApp1 = () => {
    window.open("https://wa.me/355688174771", "_blank");
  };

  const handleWhatsApp2 = () => {
    window.open("https://wa.me/355698205096", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/Qvesik", "_blank");
  };

  const handleCategoryClick = (type: string, category: string) => {
    navigate(`/properties/${type}/${category}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Language & Theme Switchers - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 shadow-lg transition-colors"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[120px] bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 shadow-lg transition-colors">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN English</SelectItem>
            <SelectItem value="ru">RU Русский</SelectItem>
            <SelectItem value="sq">SQ Shqip</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{t.growingMarket}</h3>
              <p className="text-muted-foreground">{t.growingMarketDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{t.affordablePrices}</h3>
              <p className="text-muted-foreground">{t.affordablePricesDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{t.legalSupport}</h3>
              <p className="text-muted-foreground">{t.legalSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">{t.propertyCategories}</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{t.propertyCategoriesDesc}</p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="sale" className="text-lg">{t.forSale}</TabsTrigger>
              <TabsTrigger value="rent" className="text-lg">{t.forRent}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sale">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card"
                    onClick={() => handleCategoryClick('sale', category.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={t[category.nameKey as keyof typeof t] as string}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="mb-3">{category.icon}</div>
                        <h3 className="text-2xl font-bold">{t[category.nameKey as keyof typeof t]}</h3>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card"
                    onClick={() => handleCategoryClick('rent', category.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={t[category.nameKey as keyof typeof t] as string}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="mb-3">{category.icon}</div>
                        <h3 className="text-2xl font-bold">{t[category.nameKey as keyof typeof t]}</h3>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Popular Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">{t.popularAreas}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{t.popularAreasDesc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAreas.map((area, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={area.image}
                    alt={t[area.nameKey as keyof typeof t] as string}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{t[area.nameKey as keyof typeof t]}</h3>
                    <p className="text-gray-200">{t[area.descKey as keyof typeof t]}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">{t.faq}</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">{t.faqDesc}</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline py-4">
                  {t.faqQ1}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 text-base pt-2 pb-4">
                  {t.faqA1}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline py-4">
                  {t.faqQ2}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 text-base pt-2 pb-4">
                  {t.faqA2}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline py-4">
                  {t.faqQ3}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 text-base pt-2 pb-4">
                  {t.faqA3}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline py-4">
                  {t.faqQ4}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 text-base pt-2 pb-4">
                  {t.faqA4}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline py-4">
                  {t.faqQ5}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 text-base pt-2 pb-4">
                  {t.faqA5}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/assets/why-choose-us-background.jpg')" }}
        />
        
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">{t.whyChooseUs}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <Users className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t.localExperts}</h3>
              <p className="text-gray-200">{t.localExpertsDesc}</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <Globe className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t.languageSupport}</h3>
              <p className="text-gray-200">{t.languageSupportDesc}</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <FileCheck className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t.fullLegal}</h3>
              <p className="text-gray-200">{t.fullLegalDesc}</p>
            </div>
            
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <BadgeCheck className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t.transparentPricing}</h3>
              <p className="text-gray-200">{t.transparentPricingDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Section */}
      <footer className="bg-[#0F1F33] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3">Adriatic Real Estate</h3>
            <p className="text-gray-300 text-lg mb-6">{t.footerTagline}</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button
                onClick={handleWhatsApp1}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp +355 68 817 4771
              </Button>
              <Button
                onClick={handleWhatsApp2}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp +355 69 820 5096
              </Button>
              <Button
                onClick={handleTelegram}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </Button>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-gray-400">{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
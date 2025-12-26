import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Shield, Users, Globe, FileCheck, BadgeCheck, Heart, MessageCircle, Send, X, User, TrendingUpIcon, Home as HomeIcon, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [language, setLanguage] = useState("en");
  const [showContactMenu, setShowContactMenu] = useState(false);

  const propertiesForSale = [
    {
      id: 1,
      image: "/assets/property-modern-apartment-seaview.jpg",
      title: "Studio Apartment",
      price: "€75,000",
    },
    {
      id: 2,
      image: "/assets/property-villa-pool-adriatic.jpg",
      title: "1-Bedroom Apartment",
      price: "€110,000",
    },
    {
      id: 3,
      image: "/assets/property-penthouse-balcony.jpg",
      title: "2-Bedroom Apartment",
      price: "€165,000",
    },
    {
      id: 4,
      image: "/assets/property-beachfront-residence.jpg",
      title: "Sea-View Apartment",
      price: "€230,000",
    },
  ];

  const propertiesForRent = [
    {
      id: 1,
      image: "/assets/property-modern-apartment-seaview_variant_1.jpg",
      title: "Studio Apartment",
      price: "€450/month",
    },
    {
      id: 2,
      image: "/assets/property-villa-pool-adriatic_variant_1.jpg",
      title: "1-Bedroom Apartment",
      price: "€650/month",
    },
    {
      id: 3,
      image: "/assets/property-penthouse-balcony_variant_1.jpg",
      title: "2-Bedroom Apartment",
      price: "€850/month",
    },
    {
      id: 4,
      image: "/assets/property-beachfront-residence_variant_1.jpg",
      title: "Sea-View Apartment",
      price: "€1,100/month",
    },
  ];

  const popularAreas = [
    {
      name: "Durrës",
      description: "Coastal city with beautiful beaches and growing infrastructure",
      image: "/assets/hero-albanian-coast-durres.jpg",
    },
    {
      name: "Golem",
      description: "Peaceful seaside area perfect for vacation homes and investments",
      image: "/assets/property-beachfront-residence_variant_2.jpg",
    },
    {
      name: "Vlora",
      description: "Historic port city with stunning Adriatic and Ionian sea views",
      image: "/assets/property-villa-pool-adriatic_variant_2.jpg",
    },
    {
      name: "Saranda",
      description: "Popular tourist destination with Mediterranean climate",
      image: "/assets/property-modern-apartment-seaview_variant_2.jpg",
    },
    {
      name: "Tirana",
      description: "Capital city with modern amenities and business opportunities",
      image: "/assets/property-penthouse-balcony_variant_2.jpg",
    },
  ];

  const translations = {
    en: {
      heroTitle: "Property in Albania for Living & Investment",
      heroSubtitle: "Find reliable apartments in Albania with full legal support for foreigners.",
      growingMarket: "Growing European Market",
      growingMarketDesc: "Albania is one of Europe's fastest-growing real estate markets.",
      affordablePrices: "Affordable Prices",
      affordablePricesDesc: "Property prices from €70,000 to €250,000 with strong investment potential.",
      legalSupport: "Legal Support for Buyers",
      legalSupportDesc: "Full legal assistance for local and international clients.",
      featuredProperties: "Featured Properties",
      featuredPropertiesDesc: "Handpicked apartments for sale and rent.",
      forSale: "For Sale",
      forRent: "For Rent",
      viewAllProperties: "View All Properties",
      whyChooseUs: "Why Choose Us",
      localExperts: "Local Experts in Albania",
      localExpertsDesc: "Deep understanding of the Albanian real estate market.",
      languageSupport: "Multilingual Support",
      languageSupportDesc: "English, Russian and Albanian language support.",
      fullLegal: "Full Legal Assistance",
      fullLegalDesc: "From property selection to ownership registration.",
      transparentPricing: "Transparent Pricing",
      transparentPricingDesc: "No hidden fees, clear and honest process.",
      whoWeWorkWith: "Who We Work With",
      whoWeWorkWithDesc: "We help diverse clients find their perfect property in Albania",
      privateBuyers: "Private Buyers",
      privateBuyersDesc: "Individuals and families looking for their dream home in Albania",
      investors: "Investors",
      investorsDesc: "Property investors seeking high-return opportunities in growing markets",
      longTermRent: "Long-Term Rent",
      longTermRentDesc: "Clients looking for quality rental properties with flexible terms",
      relocation: "Relocation to Albania",
      relocationDesc: "Expats and remote workers moving to Albania for lifestyle or business",
      popularAreas: "Popular Areas",
      popularAreasDesc: "Explore the most sought-after locations in Albania",
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
      howBuyingWorks: "How Buying Works",
    },
    ru: {
      heroTitle: "Недвижимость в Албании для жизни и инвестиций",
      heroSubtitle: "Подбор надёжных апартаментов в Албании с полным юридическим сопровождением для иностранцев.",
      growingMarket: "Растущий рынок Европы",
      growingMarketDesc: "Албания — один из самых быстрорастущих рынков недвижимости в Европе.",
      affordablePrices: "Доступные цены",
      affordablePricesDesc: "Недвижимость от 70 000 до 250 000 € с высоким инвестиционным потенциалом.",
      legalSupport: "Юридическая поддержка",
      legalSupportDesc: "Полное сопровождение сделки для местных и иностранных покупателей.",
      featuredProperties: "Избранные объекты",
      featuredPropertiesDesc: "Отобранные квартиры для продажи и аренды",
      forSale: "Продажа",
      forRent: "Аренда",
      viewAllProperties: "Все объекты",
      whyChooseUs: "Почему мы",
      localExperts: "Местные эксперты",
      localExpertsDesc: "Отличное знание рынка недвижимости Албании.",
      languageSupport: "Многоязычная поддержка",
      languageSupportDesc: "Английский, русский и албанский языки.",
      fullLegal: "Полное юридическое сопровождение",
      fullLegalDesc: "От подбора до регистрации собственности.",
      transparentPricing: "Прозрачные цены",
      transparentPricingDesc: "Без скрытых комиссий.",
      whoWeWorkWith: "С кем мы работаем",
      whoWeWorkWithDesc: "Мы помогаем разным клиентам найти идеальную недвижимость в Албании",
      privateBuyers: "Частные покупатели",
      privateBuyersDesc: "Люди и семьи, ищущие дом своей мечты в Албании",
      investors: "Инвесторы",
      investorsDesc: "Инвесторы в недвижимость, ищущие высокодоходные возможности на растущих рынках",
      longTermRent: "Долгосрочная аренда",
      longTermRentDesc: "Клиенты, ищущие качественную арендную недвижимость с гибкими условиями",
      relocation: "Переезд в Албанию",
      relocationDesc: "Экспаты и удаленные работники, переезжающие в Албанию для жизни или бизнеса",
      popularAreas: "Популярные районы",
      popularAreasDesc: "Изучите самые востребованные места в Албании",
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
      howBuyingWorks: "Как проходит покупка",
    },
    sq: {
      heroTitle: "Pasuri të Paluajtshme në Shqipëri për Jetesë dhe Investim",
      heroSubtitle: "Apartamente të besueshme në Shqipëri me mbështetje të plotë ligjore për të huajt.",
      growingMarket: "Treg në Rritje Evropiane",
      growingMarketDesc: "Shqipëria është një nga tregjet më të shpejta në rritje në Evropë.",
      affordablePrices: "Çmime të Përballueshme",
      affordablePricesDesc: "Pasuri nga 70,000 € deri në 250,000 € me potencial të fortë investimi.",
      legalSupport: "Mbështetje Ligjore",
      legalSupportDesc: "Asistencë e plotë ligjore për blerës vendas dhe të huaj.",
      featuredProperties: "Prona të zgjedhura",
      featuredPropertiesDesc: "Apartamente të përzgjedhura për shitje dhe qira",
      forSale: "Për shitje",
      forRent: "Për qira",
      viewAllProperties: "Shiko të gjitha pronat",
      whyChooseUs: "Pse ne",
      localExperts: "Ekspertë Lokalë",
      localExpertsDesc: "Njohuri të thella të tregut të pasurive të paluajtshme.",
      languageSupport: "Mbështetje shumëgjuhëshe",
      languageSupportDesc: "Anglisht, rusisht dhe shqip.",
      fullLegal: "Asistencë Ligjore e Plotë",
      fullLegalDesc: "Nga përzgjedhja deri te regjistrimi i pronës.",
      transparentPricing: "Çmime Transparente",
      transparentPricingDesc: "Pa tarifa të fshehura.",
      whoWeWorkWith: "Me kë punojmë",
      whoWeWorkWithDesc: "Ne ndihmojmë klientë të ndryshëm të gjejnë pronën e tyre të përsosur në Shqipëri",
      privateBuyers: "Blerës privatë",
      privateBuyersDesc: "Individë dhe familje që kërkojnë shtëpinë e tyre të ëndrrave në Shqipëri",
      investors: "Investitorë",
      investorsDesc: "Investitorë në prona që kërkojnë mundësi me kthim të lartë në tregje në rritje",
      longTermRent: "Qira afatgjatë",
      longTermRentDesc: "Klientë që kërkojnë prona me qira cilësore me kushte fleksibël",
      relocation: "Zhvendosje në Shqipëri",
      relocationDesc: "Ekspatë dhe punëtorë në distancë që zhvendosen në Shqipëri për jetesë ose biznes",
      popularAreas: "Zona popullore",
      popularAreasDesc: "Eksploroni vendet më të kërkuara në Shqipëri",
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
      howBuyingWorks: "Si funksionon blerja",
    },
  };

  const t = translations[language as keyof typeof translations];

  const handleWhatsApp1 = () => {
    window.open("https://wa.me/355688174771", "_blank");
  };

  const handleWhatsApp2 = () => {
    window.open("https://wa.me/355698205096", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/Qvesik", "_blank");
  };

  const handleViewProperties = () => {
    window.open("https://wa.me/355688174771", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[120px] bg-white/95 backdrop-blur-sm shadow-lg border-2 border-[#1E3A5F]/20 hover:border-[#1E3A5F] transition-colors">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN English</SelectItem>
            <SelectItem value="ru">RU Русский</SelectItem>
            <SelectItem value="sq">SQ Shqip</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showContactMenu ? (
          <Button
            size="lg"
            onClick={() => setShowContactMenu(true)}
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-6 rounded-full shadow-2xl transition-all duration-300 hover:shadow-xl flex items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold">{t.contact}</span>
          </Button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-4 space-y-3 border-2 border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[#1E3A5F]">{t.contact}</span>
              <button
                onClick={() => setShowContactMenu(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <Button
              onClick={handleWhatsApp1}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center gap-2 justify-start"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp +355 68 817 4771
            </Button>
            <Button
              onClick={handleWhatsApp2}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center gap-2 justify-start"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp +355 69 820 5096
            </Button>
            <Button
              onClick={handleTelegram}
              className="w-full bg-[#0088cc] hover:bg-[#006699] text-white flex items-center gap-2 justify-start"
            >
              <Send className="w-4 h-4" />
              Telegram @Qvesik
            </Button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero-albanian-coast-durres_variant_1.jpg')" }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8">
            {t.heroSubtitle}
          </p>
          <Link to="/how-buying-works">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              {t.howBuyingWorks}
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.growingMarket}</h3>
              <p className="text-gray-600">{t.growingMarketDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.affordablePrices}</h3>
              <p className="text-gray-600">{t.affordablePricesDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.legalSupport}</h3>
              <p className="text-gray-600">{t.legalSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1E3A5F]">{t.featuredProperties}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">{t.featuredPropertiesDesc}</p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="sale" className="text-lg">{t.forSale}</TabsTrigger>
              <TabsTrigger value="rent" className="text-lg">{t.forRent}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sale">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertiesForSale.map((property) => (
                  <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-[#1E3A5F]">{property.title}</h3>
                      <p className="text-2xl font-bold text-[#1E3A5F]">{property.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {propertiesForRent.map((property) => (
                  <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-[#1E3A5F]">{property.title}</h3>
                      <p className="text-2xl font-bold text-[#1E3A5F]">{property.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleViewProperties}
              className="bg-[#1E3A5F] hover:bg-[#152B47] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              {t.viewAllProperties}
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1E3A5F]">{t.whoWeWorkWith}</h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">{t.whoWeWorkWithDesc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <User className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.privateBuyers}</h3>
              <p className="text-gray-600">{t.privateBuyersDesc}</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <TrendingUpIcon className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.investors}</h3>
              <p className="text-gray-600">{t.investorsDesc}</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <HomeIcon className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.longTermRent}</h3>
              <p className="text-gray-600">{t.longTermRentDesc}</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <MapPin className="w-16 h-16 text-[#1E3A5F]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{t.relocation}</h3>
              <p className="text-gray-600">{t.relocationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1E3A5F]">{t.popularAreas}</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">{t.popularAreasDesc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAreas.map((area, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{area.name}</h3>
                    <p className="text-gray-200">{area.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1E3A5F]">{t.faq}</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">{t.faqDesc}</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A5F] hover:no-underline">
                  {t.faqQ1}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {t.faqA1}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A5F] hover:no-underline">
                  {t.faqQ2}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {t.faqA2}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A5F] hover:no-underline">
                  {t.faqQ3}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {t.faqA3}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A5F] hover:no-underline">
                  {t.faqQ4}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {t.faqA4}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-lg font-semibold text-[#1E3A5F] hover:no-underline">
                  {t.faqQ5}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {t.faqA5}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-[#1E3A5F]">
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

      {/* Footer */}
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
                <MessageCircle className="w-4 h-4" />
                WhatsApp +355 68 817 4771
              </Button>
              <Button
                onClick={handleWhatsApp2}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp +355 69 820 5096
              </Button>
              <Button
                onClick={handleTelegram}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
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
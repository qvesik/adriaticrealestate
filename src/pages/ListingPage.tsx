import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Building2, Home as HomeIcon, MapPin as MapPinIcon, Store, SlidersHorizontal, X, Sun, Moon } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { properties, type Property } from "@/data/properties";
import { siteTranslations, type LanguageCode } from "@/lib/siteTranslations";
import { useTheme } from "@/contexts/ThemeContext";


export default function ListingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
  });
  
  // Extract type and category from URL path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const type = pathParts[1]; // 'sale' or 'rent'
  const category = pathParts[2]; // 'apartments', 'houses', etc.
  
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    location: "",
  });

  const [activeFilters, setActiveFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    location: "",
  });

  const t = siteTranslations[language as LanguageCode];

  const categoryIcons = {
    apartments: <Building2 className="w-8 h-8" />,
    houses: <HomeIcon className="w-8 h-8" />,
    "land-garages": <MapPinIcon className="w-8 h-8" />,
    businesses: <Store className="w-8 h-8" />,
  };

  const categoryNames = {
    apartments: t.apartments,
    houses: t.houses,
    "land-garages": t.landGarages,
    businesses: t.businesses,
  };

  const locations = [
    { value: "durres", label: t.durres },
    { value: "shengjin", label: t.shengjin },
    { value: "velipoje", label: t.velipoje },
    { value: "vlora", label: t.vlora },
    { value: "saranda", label: t.saranda },
    { value: "tirana", label: t.tirana },
  ];

  // Base dataset: filter by deal type and category from URL
  const baseProperties = properties.filter(
    (p) => p.deal === type && p.category === category
  );

  const formatPrice = (p: Property) => {
    if (type === "sale") return `€${(p.salePrice ?? 0).toLocaleString("en-US")}`;
    return `€${(p.rentPrice ?? 0).toLocaleString("en-US")}/${t.month}`;
  };

  // Filter properties based on category, type, and active filters
  const filteredProperties = useMemo(() => {
    return baseProperties.filter((property) => {

      const priceValue = type === "sale" ? property.salePrice : property.rentPrice;
      
      // Price filter
      if (activeFilters.minPrice && priceValue < Number(activeFilters.minPrice)) {
        return false;
      }
      if (activeFilters.maxPrice && priceValue > Number(activeFilters.maxPrice)) {
        return false;
      }

      // Area filter
      if (activeFilters.minArea && property.areaM2 < Number(activeFilters.minArea)) {
        return false;
      }
      if (activeFilters.maxArea && property.areaM2 > Number(activeFilters.maxArea)) {
        return false;
      }

      // Location filter
      if (activeFilters.location && property.city !== activeFilters.location) {
        return false;
      }

      return true;
    });
  }, [activeFilters, baseProperties, type]);

  const handleApplyFilters = () => {
    setActiveFilters({ ...filters });
    setMobileFiltersOpen(false);
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      location: "",
    };
    setFilters(emptyFilters);
    setActiveFilters(emptyFilters);
  };

  // Validate URL params
  useEffect(() => {
    if (!type || !category || (type !== 'sale' && type !== 'rent')) {
      navigate('/');
    }
  }, [type, category, navigate]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-3 block text-gray-900">{t.priceRange}</Label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              type="number"
              placeholder={t.minPrice}
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder={t.maxPrice}
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Area Range */}
      <div>
        <Label className="text-base font-semibold mb-3 block text-gray-900">{t.areaRange}</Label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              type="number"
              placeholder={t.minArea}
              value={filters.minArea}
              onChange={(e) => setFilters({ ...filters, minArea: e.target.value })}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder={t.maxArea}
              value={filters.maxArea}
              onChange={(e) => setFilters({ ...filters, maxArea: e.target.value })}
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <Label className="text-base font-semibold mb-3 block text-gray-900">{t.location}</Label>
        <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
          <SelectTrigger className="bg-white border-gray-300 text-gray-900">
            <SelectValue placeholder={t.selectLocation} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {locations.map((loc) => (
              <SelectItem key={loc.value} value={loc.value} className="text-gray-900">
                {loc.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <Button
          onClick={handleApplyFilters}
          className="w-full bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white"
        >
          {t.applyFilters}
        </Button>
        <Button
          onClick={handleClearFilters}
          variant="outline"
          className="w-full bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50"
        >
          {t.clearFilters}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Switcher - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 shadow-lg transition-colors"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </Button>
      </div>

      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:text-gray-200 hover:bg-white/10 mb-4"
          >
            ← {t.backToHome}
          </Button>
          <div className="flex items-center gap-4">
            {categoryIcons[category as keyof typeof categoryIcons]}
            <div>
              <h1 className="text-4xl font-bold">
                {categoryNames[category as keyof typeof categoryNames]}
              </h1>
              <p className="text-xl text-gray-200 mt-2">
                {type === "sale" ? t.forSale : t.forRent}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className={`hidden lg:block ${showFilters ? "w-80" : "w-0"} transition-all duration-300 overflow-hidden`}>
            <Card className="sticky top-8 bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <SlidersHorizontal className="w-6 h-6" />
                    {t.filters}
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="text-gray-900 hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Desktop Filter Toggle */}
            {!showFilters && (
              <Button
                onClick={() => setShowFilters(true)}
                className="hidden lg:flex mb-6 bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                {t.filters}
              </Button>
            )}

            {/* Mobile Filter Sheet */}
            <div className="lg:hidden mb-6">
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button className="w-full bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white">
                    <SlidersHorizontal className="w-5 h-5 mr-2" />
                    {t.filters}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh] bg-white">
                  <SheetHeader>
                    <SheetTitle className="text-gray-900 flex items-center gap-2">
                      <SlidersHorizontal className="w-6 h-6" />
                      {t.filters}
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 overflow-y-auto max-h-[calc(85vh-120px)]">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} onClick={() => navigate(`/properties/${type}/${category}/${property.id}`)} role="button" tabIndex={0} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-gray-200 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{property.title}</h3>
                    <p className="text-2xl font-bold text-[#1E3A5F] mb-2">{formatPrice(property)}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {(t as any)[property.city] ?? property.city}
                      </span>
                      <span>{property.areaM2} m²</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">{t.noResults}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
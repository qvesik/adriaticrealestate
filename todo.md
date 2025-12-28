# Adriatic Real Estate Website - Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Albania Prime Property**: Premium Mediterranean real estate aesthetic
- **Luxury European Real Estate Sites**: Clean, trustworthy, elegant
- **Style**: Mediterranean Luxury + Clean Minimalism + High-end Real Estate

### Color Palette
- Primary Background: #FFFFFF (Pure White)
- Primary Accent: #1E3A5F (Deep Navy Blue - overlays, sections)
- Secondary Accent: #C9A961 (Elegant Gold - primary CTAs, accents)
- WhatsApp Green: #25D366 (WhatsApp button)
- Text Primary: #1A1A1A (Almost Black)
- Text Secondary: #6B7280 (Gray)
- Overlay: rgba(30, 58, 95, 0.7) (Navy blue with transparency)

### Typography
- Heading1 (Hero): Playfair Display font-weight 700 (56px)
- Heading2 (Sections): Playfair Display font-weight 600 (40px)
- Heading3 (Cards): Playfair Display font-weight 600 (24px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Button Text: Inter font-weight 600 (16px)

### Key Component Styles
- **Primary Button (Gold)**: Gold background (#C9A961), white text, 8px rounded, hover: darken 10%, smooth shadow
- **Secondary Button (WhatsApp)**: Green background (#25D366), white text, 8px rounded, hover: darken 10%
- **Property Cards**: White background, subtle shadow, 12px rounded, hover: lift 4px with enhanced shadow
- **Form Inputs**: White background, gray border, 8px rounded, focus: navy border
- **Icons**: Navy blue color, 48px size for feature sections

### Layout & Spacing
- Hero section: Full viewport height (min-h-screen) with background image
- Section padding: 80px vertical, responsive
- Property grid: 4 columns desktop, 2 tablet, 1 mobile, 24px gaps
- Container max-width: 1280px
- Smooth scroll behavior and subtle animations

### Images to Generate
1. **hero-albanian-coast-durres.jpg** - Stunning aerial view of Durrës coastline at golden hour, turquoise Adriatic Sea, modern buildings along the beach, luxury feel (Style: photorealistic, warm lighting, premium)
2. **property-modern-apartment-seaview.jpg** - Modern luxury apartment interior with large windows showing sea view, contemporary furniture, bright and spacious (Style: photorealistic, architectural photography)
3. **property-villa-pool-adriatic.jpg** - Luxury villa with infinity pool overlooking the Adriatic Sea, Mediterranean architecture, sunset lighting (Style: photorealistic, luxury real estate)
4. **property-penthouse-balcony.jpg** - Elegant penthouse balcony with panoramic coastal views, modern outdoor furniture, evening ambiance (Style: photorealistic, upscale)
5. **property-beachfront-residence.jpg** - Beachfront property exterior, white modern architecture, palm trees, blue sky (Style: photorealistic, Mediterranean luxury)
6. **why-choose-us-background.jpg** - Soft-focus Albanian coastal landscape, beach and mountains in background, serene atmosphere (Style: photorealistic, slightly blurred for text overlay)

---

## Development Tasks

### 1. Setup & Image Generation
- Read template structure
- Generate all 6 images using ImageCreator.generate_image
- Update index.html title to "Adriatic Real Estate - Property in Albania"

### 2. Homepage Structure (src/pages/Index.tsx)
- Create main layout with all sections
- Import necessary shadcn components

### 3. Hero Section Component
- Full-width background with Albanian coast image
- Dark blue gradient overlay
- Centered content with headline and subtitle
- Two CTA buttons (gold and WhatsApp green)

### 4. Trust Highlights Section
- 3 icon blocks in horizontal layout
- Icons: TrendingUp, DollarSign, Shield (from lucide-react)
- Responsive grid

### 5. Featured Properties Section
- Section title "Featured Properties"
- Tabs component for "For Sale" / "For Rent"
- Grid of 4 property cards with images, titles, prices
- Heart icon for favorites
- "View All Properties" button

### 6. Why Choose Us Section
- Full-width background image with overlay
- 4 icon blocks: Users, Globe, FileCheck, BadgeCheck
- Centered layout with icons and text

### 7. Consultation Form Section
- Form title
- Input fields: Name, Country, Budget (select dropdown)
- Green "Request a Call" button
- Form validation

### 8. Footer Component
- Company name and tagline
- Minimal clean design
- Copyright text

### 9. Styling & Animations
- Add smooth hover effects
- Implement scroll animations
- Ensure responsive design
- Apply luxury aesthetic throughout

### 10. Final Testing
- Run lint check
- Test responsiveness
- Verify all images load correctly
- Check UI rendering quality
# BuildCraft Construction Website

A modern, SEO-optimized construction company website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### SEO Optimization
- **Comprehensive Meta Tags**: Title templates, descriptions, keywords, and Open Graph tags
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized images, fonts, and code splitting
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### Modern Design
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations and hover effects
- **Professional Typography**: Inter and Playfair Display fonts
- **Color Scheme**: Construction-themed blue and orange palette
- **Custom Animations**: Fade-in, slide-in effects with CSS animations

### Key Sections
1. **Hero Section**: Rotating slideshow with compelling messaging
2. **About Section**: Company values, stats, and expertise
3. **Services Section**: Comprehensive service offerings with filtering
4. **Projects Section**: Portfolio showcase with category filtering
5. **Testimonials**: Client reviews with carousel navigation
6. **Contact Form**: Professional contact form with validation

### Technical Features
- **Next.js 15**: Latest App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom components
- **Lucide React**: Modern icon library
- **Framer Motion**: Smooth animations (installed but not used in current implementation)
- **Form Handling**: Client-side form validation and submission
- **Image Optimization**: Next.js Image component for performance

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
construction-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles and CSS variables
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   └── robots.ts           # Robots.txt configuration
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Site footer
│       ├── HeroSection.tsx     # Hero banner with slideshow
│       ├── AboutSection.tsx    # About company section
│       ├── ServicesSection.tsx  # Services showcase
│       ├── ProjectsSection.tsx  # Portfolio with filtering
│       ├── TestimonialsSection.tsx # Client testimonials
│       └── ContactSection.tsx   # Contact form and info
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:
- Primary: `#1e40af` (Blue)
- Secondary: `#f59e0b` (Orange)
- Accent: `#10b981` (Green)

### Content
- Update company information in `Header.tsx` and `Footer.tsx`
- Modify services in `ServicesSection.tsx`
- Add real projects in `ProjectsSection.tsx`
- Update testimonials in `TestimonialsSection.tsx`

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify sitemap URLs in `src/app/sitemap.ts`
- Add real images to `/public` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Performance Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in Next.js analyzer

## 🎯 SEO Best Practices Implemented

1. **Meta Tags**: Comprehensive title, description, and Open Graph tags
2. **Structured Data**: JSON-LD schema for organization and services
3. **Semantic HTML**: Proper heading hierarchy and semantic elements
4. **Performance**: Optimized Core Web Vitals
5. **Accessibility**: ARIA labels and keyboard navigation
6. **Mobile-First**: Responsive design for all devices

## 📞 Support

For questions or support, contact:
- Email: info@buildcraft.com
- Phone: (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
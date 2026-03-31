
# School Management System — Marketing Website

## Design Direction
- **Theme**: Dark-to-light gradient backgrounds with vibrant accent colors (electric blue, bright green, warm orange)
- **Style**: New-age, energetic — bold typography, glassmorphism cards, smooth animations, floating gradient blobs
- **Typography**: Large bold headings, clean sans-serif body text
- **Layout**: Full-width sections with generous spacing, animated on scroll

## Pages

### 1. Home / Landing Page
- **Navbar**: Logo, nav links (Features, Pricing, About), "Get Started" CTA button — sticky with blur backdrop
- **Hero Section**: Bold headline ("Transform Your School Management"), subtext, two CTAs (Get Started, Watch Demo), animated illustration/graphic on the right
- **Trusted By / Stats Bar**: Scrolling logos of partner schools + key stats (10K+ schools, 1M+ students, etc.)
- **Feature Highlights**: 3-4 card grid showcasing top features (Attendance, Grades, Communication, Fee Management) with icons and hover effects
- **AI/Smart Features Section**: Highlight smart analytics and automation with a split layout (text + visual)
- **Testimonials**: Carousel of school admin/teacher quotes with avatars
- **CTA Banner**: "Ready to modernize your school?" with email input + button
- **Footer**: Links, social icons, copyright

### 2. Features / Solutions Page
- **Hero**: "Everything Your School Needs" with animated icons
- **Feature Sections** (alternating left-right layout):
  - Student Management — enrollment, profiles, records
  - Attendance Tracking — automated, real-time alerts
  - Exam & Gradebook — create exams, auto-grading, report cards
  - Fee Management — online payments, reminders, receipts
  - Communication Hub — announcements, parent-teacher chat
  - Timetable & Scheduling — drag-and-drop scheduler
  - Analytics Dashboard — insights, reports, trends
- Each section has an icon, title, description, and a mockup/illustration
- **Integration Section**: Icons of tools it integrates with
- **CTA**: "See it in action — Book a Demo"

### 3. Pricing Page
- **Hero**: "Simple, Transparent Pricing"
- **Toggle**: Monthly / Annual billing switch
- **3 Pricing Tiers** (cards):
  - **Starter** (Free) — Up to 100 students, basic features
  - **Professional** — Up to 1000 students, all features, priority support
  - **Enterprise** — Unlimited, custom integrations, dedicated manager
- Each card: price, feature checklist, CTA button
- **Comparison Table**: Detailed feature-by-feature comparison
- **FAQ Section**: Accordion with common pricing questions

### 4. About / Contact Page
- **About Section**: Mission statement, founding story, team values with animated counters
- **Team Grid**: Photo cards of leadership team with roles
- **Contact Form**: Name, email, school name, message — with validation and success toast
- **Office Location**: Embedded map placeholder + address info
- **CTA**: "Join 10,000+ schools transforming education"

## Shared Components
- Responsive navbar with mobile hamburger menu
- Animated scroll-reveal effects throughout
- Consistent gradient accents and glassmorphism cards
- Footer with sitemap links, social media, newsletter signup

## Technical Notes
- All pages are static React components with React Router
- Framer Motion-style CSS animations for scroll reveals
- Fully responsive (mobile, tablet, desktop)
- No backend needed — contact form shows success toast only

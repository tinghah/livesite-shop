# MM Resume Service: Personal Planning & Checklist

This is a private planning document for the MM Resume live site service.

## Project Overview
Selling professional resume/portfolio live sites to clients in Myanmar and beyond, utilizing GitHub Pages for hosting and custom subdomains for branding.

## Implementation Checklist

### Phase 1: Setup & Basic Infrastructure (GitHub.io)
- [x] Create GitHub repository (`tinghah/livesite-shop`)
- [x] Build bilingual (English/Burmese) landing page
- [x] Create professional design with HTML/CSS/JS
- [x] Ensure UTF-8 encoding for Burmese text support
- [x] Initial push of core website files to GitHub
- [ ] Configure GitHub Pages to deploy via GitHub Actions
- [ ] Verify live site at `tinghah.github.io/livesite-shop`

### Phase 2: Branding & Domain Management
- [ ] Purchase domain `mmresume.com`
- [ ] Set up Cloudflare for DNS management and SSL
- [ ] Configure root domain `mmresume.com` to point to the main landing page
- [ ] Set up automated subdomain provisioning for clients (e.g., `client.mmresume.com`)

### Phase 3: Client Onboarding & Template Development
- [ ] Create a standard "Client Resume Template" repository
- [ ] Define data submission format for clients (Form/Email)
- [ ] Establish pricing tiers ($25 Basic, $50 Professional)
- [ ] Set up a streamlined workflow for converting client data to live sites

### Phase 4: Marketing & Sales
- [ ] Launch main landing page on `mmresume.com`
- [ ] Create sample portfolio sites for demonstration
- [ ] Start social media marketing (Facebook/LinkedIn)
- [ ] Implement order/contact system

## Deployment Strategy
1.  **Current Stage**: Using the free `github.io` domain for initial setup and testing.
2.  **Next Stage**: Transition to `mmresume.com` via Cloudflare. Cloudflare will handle the CNAME records for subdomains, pointing them to individual client repositories hosted on GitHub Pages. This ensures high performance, free SSL, and a professional branded experience for every client.

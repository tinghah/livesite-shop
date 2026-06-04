# Business Plan: MM Resume Live Site Service

## Executive Summary
The **MM Resume Live Site Service** is a specialized digital agency providing professional, high-performance, and personalized resume/portfolio websites for professionals and job seekers. By leveraging the stability of GitHub Pages and the branding power of custom subdomains (e.g., `clientname.mmresume.com`), we offer a premium alternative to traditional PDF resumes and generic LinkedIn profiles.

## Core Objectives
1.  **Professional Branding**: Provide clients with a unique web presence that stands out to recruiters.
2.  **Technical Simplicity**: Handle all technical aspects, from hosting to domain configuration, for the client.
3.  **Bilingual Support**: Cater specifically to the Myanmar market with full support for Burmese and English content.

## Technical Architecture
The service utilizes a robust and cost-effective infrastructure:
*   **Primary Domain**: `mmresume.com` (Root domain for marketing and sales).
*   **Hosting Provider**: GitHub Pages (Used for client portfolio sites due to its high uptime and performance).
*   **Domain Management**: A centralized DNS provider to manage subdomains pointing to client GitHub repositories.
*   **Deployment Workflow**:
    1.  Create a public GitHub repository for the client (e.g., `github.com/mmresume/client-name`).
    2.  Enable GitHub Pages for the repository.
    3.  Configure a CNAME record in the repository and a corresponding CNAME record in the `mmresume.com` DNS settings.

## Service Packages & Pricing

| Package | Features | Price (One-time) | Annual Maintenance |
| :--- | :--- | :--- | :--- |
| **Basic** | Single-page HTML resume, `client.mmresume.com` subdomain, Standard template. | $25 | $10 |
| **Professional** | Multi-page site, Custom graphics, SEO optimization, Priority support. | $50 | $15 |
| **Premium** | Interactive elements, Blog integration, Custom domain support, Monthly updates. | $100 | $25 |

## Workflow & Delivery Process
1.  **Onboarding**: Client submits resume data and selects a template via the main website.
2.  **Development**: Our team builds the portfolio site using the `livesite-shop` framework.
3.  **Review**: A preview link is sent to the client for feedback and revisions.
4.  **Deployment**: The site is pushed to GitHub, and the subdomain is activated.
5.  **Handover**: Client receives access to the repository (if requested) and instructions for future updates.

## Technical Setup Instructions
### For Developers
1.  **Repository Setup**:
    ```bash
    git clone https://github.com/tinghah/livesite-shop.git
    cd livesite-shop
    ```
2.  **Local Development**:
    Ensure all files are saved with **UTF-8** encoding to support Burmese characters. Use a local server to preview changes.
3.  **Subdomain Configuration**:
    Add a CNAME file to the root of the client's repository:
    ```text
    clientname.mmresume.com
    ```
4.  **DNS Provider**:
    In your DNS management panel, add:
    *   Type: `CNAME`
    *   Host: `clientname`
    *   Value: `mmresume.github.io` (or the specific GitHub user/org pages URL).

## Contact & Support
For inquiries, please visit our main landing page or contact our support team at `support@mmresume.com`.

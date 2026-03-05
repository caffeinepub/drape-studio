# Drape Studio

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full single-page luxury website for "Drape Studio" curtain and blinds brand based in Kerala
- Hero section with headline, subtext, and CTA button
- About Us section with brand story and four highlights
- Products section with 5 product categories (Zebra Blinds, Roman Blinds, PVC Curtains, Premium Fabric Curtains, Motorized Blinds), each with image and description
- Why Choose Us section with 5 value propositions
- Contact section with WhatsApp button, Call Now button, and inquiry form (Name, Phone, Location, Requirement)
- Footer with brand logo text, social media icons, and tagline
- Inquiry form submissions stored in backend canister

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Generate backend canister to store inquiry form submissions with fields: name, phone, location, requirement, timestamp
2. Generate product and hero images via AI image generation
3. Build single-page React frontend:
   - Sticky navigation with brand logo
   - Hero section with full-bleed background image, headline, subtext, CTA
   - About Us section with brand story and 4 highlight cards
   - Products section with 5 product cards (image, name, description)
   - Why Choose Us section with 5 feature items
   - Contact section with WhatsApp/Call buttons and inquiry form wired to backend
   - Footer with logo text, social links, tagline
   - Smooth scroll behavior, subtle entrance animations

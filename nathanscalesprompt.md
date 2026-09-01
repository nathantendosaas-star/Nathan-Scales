# Nathan Scales Website Redesign — Antigravity Build Prompt

## Role

You are an expert product designer and senior frontend engineer working inside the existing Nathan Scales website repository.

Your task is to **redesign the existing landing page UI in place** so it stops looking like a generic AI-generated/vibe-coded template and becomes a credible, premium, conversion-focused digital studio website that a real business owner would trust.

This is a **UI-only redesign**.

Do not build a backend, authentication, database, CMS, dashboard, payment system, lead-management system, API layer, or server-side functionality.

The existing project and codebase are the source of truth for the current implementation. Inspect them first. Reuse working infrastructure and components where appropriate, but redesign the interface substantially.

---

# 1. Business Context

Brand/business name:

**Nathan Scales**

What Nathan Scales does:

- Professional website design and development for businesses
- Digital marketing and growth services
- Custom software and business systems

Core positioning:

**Build the digital presence. Build the growth engine. Build the system behind the business.**

The site should communicate that Nathan Scales is not simply a person who "makes websites." The offer is broader:

1. A business can get a stronger, more credible online presence.
2. That presence can be connected to marketing and lead generation.
3. The business can eventually have custom software/systems built around its operations.

The visual language should make those three capabilities feel like one coherent service ecosystem rather than three unrelated service cards.

---

# 2. Primary Goal

The website has one primary job:

**Turn a skeptical business visitor into a qualified prospect.**

The visitor should quickly understand:

- What Nathan Scales does
- Who it is for
- Why the work is commercially useful
- What kind of work can be delivered
- That the website is built by someone who understands business outcomes, not just visual design
- Exactly what to do next

The primary conversion action is the existing Google Form CTA.

Google Form URL:

https://docs.google.com/forms/d/e/1FAIpQLSfQDkmxKo7DvARap_JfuQdKgIUFL0PNOpa7jCBOhwqq6b0jxw/viewform?usp=header

Important:

**The Google Form is already intended to be integrated into the website without sending the visitor to a new page or browser tab. Preserve that behavior.**

The CTA should open the form **inside the current site UI**, preferably using a polished modal, drawer, or full-height in-page overlay depending on the existing architecture.

Do NOT use `target="_blank"` for the main CTA.

Do NOT make the user leave the website to complete the form unless the existing Google Form embedding technically prevents a good experience.

---

# 3. Important Design Constraints

These are hard requirements.

## Color

Use a **black + white / grayscale visual system**.

Primary colors should be based around:

- near-black / black
- white / off-white
- carefully chosen neutral grays

Do not introduce a colorful brand palette.

Do not use purple gradients.

Do not use purple/pink/blue "AI startup" gradients.

Do not use neon glows.

Do not use colorful gradient text.

Do not use rainbow/mesh/aurora effects.

The site should feel confident, editorial, technical, and intentional.

---

## Icons and graphics

**No emojis.**

Do not use emoji characters as icons or decorative UI.

Avoid unnecessary icon grids.

Do not use random Lucide/icon-library symbols for every feature simply because an icon slot exists.

Use typography, spacing, rules, numbers, diagrams, screenshots, and interface fragments where they communicate better.

**Do not create decorative SVG illustrations just to fill empty space.**

Do not use fake logos, fake partner marks, or fake certifications.

---

## Images

The current site may contain generic/fake placeholder images.

Remove the placeholder-image feeling completely.

Do not use stock images of:

- random business people shaking hands
- generic office teams
- fake laptop mockups
- unrelated corporate buildings
- obviously AI-generated business people
- generic "successful entrepreneur" imagery

Do not insert invented images just to make sections look complete.

Prefer, in this order:

1. Existing real project screenshots/assets found in the repository
2. Real screenshots of existing website/UI work found in the repository
3. Real product/interface compositions created from actual project content already present in the repo
4. Typography/structure-based visual treatments that do not need photography

If genuine portfolio images are missing, it is better to create a strong typographic/project presentation than to invent fake case-study images.

Never pretend that a concept mockup was a real client project.

---

## Social proof

**No fake reviews.**

Do not fabricate:

- testimonials
- client names
- company names
- star ratings
- review quotes
- revenue numbers
- lead numbers
- conversion improvements
- project statistics
- years of experience
- client counts
- satisfaction percentages
- awards
- certifications
- partnerships

Only display facts already present in the repository or supplied by the user.

If credible proof does not exist yet, replace the testimonial section with stronger proof mechanisms such as:

- selected work
- process
- what is included
- technical capability
- clear service definitions
- transparent engagement flow
- "built for..." positioning

Do not add a fake "Trusted by 50+ businesses" strip.

---

# 4. Anti-Slop / Human-Designed Requirement

The uploaded `unslop-ui` skill must be treated as a hard design guardrail.

The point is NOT to swap one AI default for another.

Do not produce:

- centered hero + three generic feature cards
- giant gradient headline
- generic dark SaaS hero
- generic cream + serif + sage "tasteful" AI look
- repeated floating rounded cards
- excessive glassmorphism
- excessive pill buttons
- meaningless bento grids
- every section looking like a template
- identical card shapes repeated down the page
- excessive decorative blobs
- excessive glow
- huge empty space that serves no compositional purpose
- visual noise generated only to make the site feel "premium"

The uploaded skill explicitly requires deliberate decisions around reference, color, typography, and layout intent instead of silently falling back to defaults. Follow that principle. fileciteturn0file0L59-L79

You must make the site feel like someone intentionally designed **Nathan Scales**, not "a cool agency template."

---

# 5. Recommended Design Direction

Use a **technical-editorial studio** direction.

The mood should be:

- precise
- credible
- restrained
- premium
- technical
- business-focused
- modern without trend-chasing
- confident without being flashy

Think closer to a serious digital product studio / engineering-led creative studio than a generic marketing agency.

Avoid copying any specific site.

The design can combine:

- strong black/white editorial typography
- oversized but controlled type
- thin rules
- asymmetric composition
- restrained motion
- project-led visual hierarchy
- high-quality spacing
- technical labels
- numbered sections
- small metadata lines
- strong contrasts
- occasional dense information blocks

The page should feel visually designed, not assembled from components.

---

# 6. Typography Direction

Choose a deliberate typography system rather than defaulting automatically to Inter or Geist.

Use a high-quality modern grotesk/sans-serif pairing available through the existing project/font setup.

Possible direction:

- expressive display sans for major headings
- highly readable neutral sans for body/UI
- optional monospace accent for small metadata, technical labels, section numbering, or process details

Do not use a generic "startup SaaS font stack" without making a deliberate choice.

Do not use decorative serif typography.

Do not use gradient typography.

Typography should do much of the visual work.

---

# 7. Page Architecture

Do NOT create a predictable "hero + three cards + testimonials + pricing" landing page.

Use a more deliberate narrative.

Recommended structure:

## Section 01 — Header / Navigation

Minimal, high-confidence navigation.

Suggested navigation:

- Work
- Services
- Process
- About
- Start a Project

Keep the header visually quiet.

Do not put 6–8 links in the header.

The Start a Project CTA should be visually distinct but restrained.

On mobile, use a clean compact menu.

---

## Section 02 — Hero

The hero should immediately position Nathan Scales as a business-building digital partner.

Suggested message direction:

**Websites, marketing, and software built around the way your business actually works.**

Supporting copy should explain the three pillars:

- websites
- digital marketing
- custom business systems

The hero should NOT claim specific results.

Use direct, concrete language.

Avoid phrases like:

- "We transform businesses"
- "Unlock your growth potential"
- "Elevate your brand"
- "The future of digital"
- "Revolutionary digital solutions"

Those sound generic.

The hero CTA should be:

**Start a Project**

Secondary CTA may be:

**View Work**

The primary CTA opens the embedded Google Form inside the current site.

The hero visual should NOT be a generic device mockup.

Instead, create a distinctive editorial composition such as:

- a large monochrome interface snapshot from actual work
- layered project fragments
- a typographic work index
- a cropped UI system
- a structured "digital system" visual
- a black/white browser window composition based on real project material in the repo

Use real repo assets wherever possible.

---

# 8. Trust / Positioning Strip

Instead of fake logos or fake numbers, use a short statement block that answers:

**What kind of work is this?**

Example content direction:

"From first impression to internal workflow, the goal is the same: build digital systems that make the business easier to discover, easier to trust, and easier to operate."

This should feel like a strategic statement rather than marketing filler.

---

# 9. Services

Present the three core capabilities as a connected system, not three identical cards.

### 01 — Websites

Explain that Nathan Scales builds websites designed for:

- credibility
- clarity
- mobile usability
- conversion
- speed
- strong positioning

### 02 — Digital Marketing

Explain that this can include:

- campaign/marketing strategy
- landing pages
- lead-generation systems
- search visibility
- digital acquisition
- conversion-focused improvements

Do not promise guaranteed lead counts or guaranteed ROI.

### 03 — Custom Software & Business Systems

Explain that this is for businesses that have operational problems worth solving with software.

Examples can include:

- internal tools
- workflow systems
- customer-facing applications
- business dashboards
- custom automations
- integrations

Do not make technical claims that are not supported by the current project.

The visual structure should make these feel like different levels of the same digital capability.

---

# 10. Work / Portfolio

This should be one of the strongest sections of the page.

Use **real work from the existing repository**.

Before writing this section:

1. Search the repo for project names, screenshots, images, routes, and existing portfolio content.
2. Identify the strongest genuine projects.
3. Only show projects supported by actual project files/content.
4. Do not invent project outcomes.

Each project should communicate:

- Project name
- Category
- What was built
- One concise outcome-oriented description based only on known facts

Avoid fake metrics.

A project card does not need to say "+124% conversions."

A stronger version is:

"Website / E-commerce / UI"

followed by a precise description of the work.

Visually, make the work section feel like a curated studio archive rather than an endless card grid.

Possible composition:

- one large featured project
- two smaller supporting projects
- variable card sizes
- large screenshots
- restrained metadata
- hover movement that reveals useful information

---

# 11. Process

Use a clear process because it increases confidence without fabricating social proof.

Suggested sequence:

01 — Understand
02 — Structure
03 — Build
04 — Refine
05 — Launch

Use actual wording that explains what happens.

Avoid "Our proven 5-step framework" unless that framework is real and already established.

The process should reassure the client that there is a method behind the work.

---

# 12. Why Nathan Scales / Differentiation

Create a section that answers:

**Why work with Nathan Scales instead of simply hiring someone to make a website?**

Possible positioning:

- Business-first thinking
- Design + development under one roof
- Marketing considered from the beginning
- Systems can extend beyond the website
- Direct communication
- Solutions shaped around the business

Do not make claims that require external proof.

Do not fabricate certifications or authority markers.

The tone should be straightforward and matter-of-fact.

---

# 13. Engagement / How to Start

Create a clean final decision section.

Heading direction:

**Have something that needs to be built?**

Supporting copy:

"Tell me what your business needs, what is not working, and what you want to improve. I’ll use that information to understand whether a website, marketing system, custom software, or a combination makes sense."

CTA:

**Start a Project**

This opens the Google Form within the current page UI.

Do not navigate away.

---

# 14. Embedded Google Form Experience

The form is the primary CTA experience.

Implement it as a polished in-page UI.

Preferred behavior:

1. User clicks Start a Project
2. Background page remains visible but visually de-emphasized
3. Form opens in a modal/drawer/full-height overlay
4. Form is embedded directly
5. User can close it and return to the page
6. Page scroll position is preserved
7. Focus is handled correctly
8. Mobile form experience is usable
9. The form URL is exactly the supplied URL
10. Do not open another browser tab

Use an accessible overlay.

Do not make the modal look like an ugly browser iframe dumped on top of the page.

The surrounding frame should visually match the site.

---

# 15. Motion System

Motion should create polish, not spectacle.

Requirements:

- no animation on every tiny element
- no endless floating animations
- no gratuitous parallax everywhere
- no glowing particles
- no scroll-jacking
- no excessive spring physics

Use motion intentionally for:

- hero entrance
- section reveal
- image/project hover
- navigation state
- modal opening
- subtle text/line transitions
- CTA interaction

Hover effects are required on interactive UI, but do not make every single decorative feature animate.

Animations should generally be:

- short
- smooth
- directional
- subtle

Respect `prefers-reduced-motion`.

---

# 16. Hover Interactions

The user explicitly wants hover behavior throughout the site where it makes sense.

Good hover examples:

### Project cards
- image scale: very small
- metadata transition
- arrow/indicator movement
- secondary overlay information

### Primary CTA
- slight translation / border / fill interaction

### Navigation
- underline, offset, or text transition

### Service items
- subtle row movement or reveal

### Process items
- active number/line response

Do NOT animate every section just because it exists.

---

# 17. Responsive Behavior

Build mobile-first quality.

Test:

- 320px
- 375px
- 390px
- 430px
- tablet
- desktop
- large desktop

On mobile:

- no horizontal overflow
- no tiny typography
- no giant hero that pushes content too far below the fold
- navigation must remain usable
- project screenshots must crop intelligently
- modal form must be usable
- buttons must have comfortable tap targets

Desktop composition should not simply collapse into a one-column stack everywhere.

Make deliberate responsive layout decisions.

---

# 18. UI Quality Requirements

The website should have:

- consistent spacing rhythm
- consistent container logic
- strong hierarchy
- controlled line lengths
- deliberate alignment
- clean responsive type
- clear section transitions
- accessible contrast
- obvious CTA hierarchy
- visually distinct but coherent sections

Avoid:

- arbitrary rounded corners everywhere
- giant radius values on every component
- excessive cards
- excessive shadows
- excessive borders
- fake browser chrome used as decoration
- random floating labels
- repeated "01 / 02 / 03" decoration with no functional purpose
- generic feature icon + heading + paragraph layouts repeated 10 times

Use visual variety through composition, not decoration.

---

# 19. Content Rules

Write specific copy.

Avoid AI-ish filler such as:

- "Your vision, our expertise"
- "Where creativity meets technology"
- "Empowering businesses to thrive"
- "Transform your digital presence"
- "Unlock your potential"
- "Next-generation solutions"
- "Seamless experiences"
- "Cutting-edge innovation"
- "End-to-end digital transformation"

Prefer concrete business language.

The copy should sound like a capable person explaining what they build.

Do not over-explain.

Do not invent client results.

Do not invent statistics.

Do not invent credentials.

---

# 20. Existing Repo Preservation

Before changing anything:

- inspect the existing app structure
- identify the framework
- identify reusable components
- inspect current routes
- inspect current global styles
- inspect existing image assets
- inspect current form implementation
- inspect current page copy
- inspect responsive behavior

Preserve useful infrastructure.

Replace weak design rather than unnecessarily rebuilding the project architecture.

Do not introduce backend functionality.

Do not change deployment infrastructure unless required for the UI.

Do not remove dependencies blindly.

---

# 21. Accessibility

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible dialog behavior
- sensible aria labels
- sufficient color contrast
- reduced-motion support
- image alt text where real images exist

Do not rely on color alone to communicate state.

---

# 22. Performance

This is a professional business website.

Prioritize:

- fast first render
- optimized images
- lazy loading below-the-fold images
- avoiding oversized assets
- avoiding unnecessary JavaScript
- no heavy animation library additions unless genuinely necessary

Do not add a large dependency simply for one effect.

---

# 23. Final Self-Review Before Finishing

Before declaring the UI complete, review it as a skeptical potential client.

Ask:

1. Does this look like a real business website or an AI-generated template?
2. Is the value proposition obvious in the first few seconds?
3. Is it obvious what Nathan Scales actually does?
4. Does the website build trust without fake proof?
5. Is the CTA obvious without becoming obnoxious?
6. Does the portfolio feel real?
7. Are there any fake-looking images?
8. Are there any invented statistics or testimonials?
9. Are there any purple gradients or neon effects?
10. Are there any emoji icons?
11. Does every section have a reason to exist?
12. Are there too many cards?
13. Is the visual hierarchy strong without relying on glow/gradients?
14. Does it feel deliberately designed around Nathan Scales?
15. Does the mobile version feel designed rather than collapsed?

If the answer to any of these is no, refine the UI before stopping.

---

# 24. Anti-Vibe-Code Audit

Use the uploaded `unslop-ui` guidance while building and, after implementation, audit the finished code for obvious AI-generated visual tells.

The skill specifically notes that automated scanning catches mechanical issues but cannot detect layout coherence, spacing consistency, or content overflowing its container, so perform a human visual review as well. fileciteturn0file0L91-L107

If a deliberate brand choice is flagged by the scanner, document it in code with the appropriate `unslop-ignore` comment rather than changing an intentional decision into another generic default. fileciteturn0file0L110-L116

---

# 25. Deliverable

The deliverable is the redesigned Nathan Scales landing page UI inside the existing project.

Do not stop at a written plan.

Actually implement the interface.

At the end, report briefly:

- what was redesigned
- what existing assets were reused
- how the Google Form CTA works
- whether anything could not be safely shown because the repository did not contain real supporting content

Do not fabricate missing information just to complete a section.

---
name: email-customizer
description: Customize B2B sales, outreach, and HTML marketing emails for Nathan Scales Marketing Agency. Use when AI agents need to generate, personalize, or tailor HTML executive briefings, B2B cold emails, case study showcases, or multi-touch follow-up sequences.
metadata:
  version: 1.0.0
---

# Email Customizer & Template Engine

You are an expert email strategist, HTML email developer, and outreach copywriter. Your role is to take raw prospect data, company research, or campaign requirements and generate highly personalized, high-converting sales and outreach emails.

---

## 🚨 MANDATORY RULES FOR ALL AI AGENTS

1. **Nathan Scales Logo Rule:**
   Every HTML email template **MUST** feature the official Nathan Scales logo URL in the header:
   ```
   https://raw.githubusercontent.com/nathantendosaas-star/Nathan-Scales/refs/heads/main/public/NSM-logo.svg
   ```

2. **No False Asset Truth Rule:**
   The Seyani Brothers example email is provided **ONLY as a structural HTML layout baseline**. Do **NOT** use Seyani Brothers logos, images, project names, or text content as source-of-truth assets for other prospects or companies. Every campaign must use actual prospect research or appropriate placeholder variables.

3. **Responsive MSO Email HTML Standards:**
   HTML emails must use table-based layouts, inline styles, Microsoft Outlook (`<!--[if mso]>`) conditional VML/table tags, and mobile responsive media queries.

4. **Peer-Level Outreach Copywriting:**
   Outreach emails must sound like a sharp human colleague, not generic marketing copy or AI templates. Keep CTAs low-friction ("Would this be useful?", "Open to a quick 10-minute call?").

---

## Skill Directory Layout

When cloning or accessing this repository, AI agents should utilize the files located in `skills/email-customizer/`:

```
skills/email-customizer/
├── SKILL.md                          # This master instruction guide
├── templates/
│   ├── executive-briefing.html       # Premium HTML Executive Briefing & Audit Email
│   ├── b2b-outreach.html             # Clean, minimal HTML B2B Outreach Email
│   ├── case-study-showcase.html      # Portfolio & Case Study Showcase HTML Email
│   └── cold-outreach-sequence.md     # Multi-touch plain text / hybrid sales sequences
└── references/
    ├── customization-variables.md    # Complete table of {{VARIABLES}} and default values
    ├── html-email-guidelines.md      # Email client rendering, inline CSS & MSO rules
    └── outreach-frameworks.md        # Subject lines, follow-up cadences & objection handling
```

---

## How to Customize an Email (AI Agent Workflow)

When customized outreach is requested, follow this 5-step process:

### Step 1: Gather Prospect Context
Extract or request the following parameters:
- **Recipient:** Name, Title, Company Name, Industry / Niche (e.g., Civil Engineering, Commercial Roofing, SaaS)
- **Target Tier:** Mid-Market, Enterprise, or SME
- **Pain Point / Hook:** Specific observation (e.g., legacy site build, missing SSL, slow mobile load, lack of donor pre-qualification documentation)
- **Value Proposition:** Concise, tailored outcome (e.g., "digital audit for Class A contractors", "converting SEO traffic into direct RFPs")
- **Visual Assets (if HTML):** Hero image URL depicting relevant work/industry, caption text, client/target logo if applicable.
- **CTA Destination:** Specific landing page URL (default: `https://nathanscales.vercel.app/contact` or custom audit link).

### Step 2: Select the Appropriate Template
- Use `templates/executive-briefing.html` for formal executive briefings, donor/institutional pre-qualification audits, or high-tier enterprise prospects.
- Use `templates/b2b-outreach.html` for mid-market B2B direct outreach where clean HTML structure with low visual noise is needed.
- Use `templates/case-study-showcase.html` when highlighting visual portfolios, client milestones, or before/after website transformations.
- Use `templates/cold-outreach-sequence.md` for multi-touch cold email cadences, plain-text DMs, or follow-up sequences.

### Step 3: Populate Template Variables
Replace all double-mustache `{{VARIABLE}}` tags in the chosen template with customized copy. Ensure:
- `{{PREHEADER_TEXT}}` is crisp, non-repetitive, and under 90 characters.
- `{{NSM_LOGO_URL}}` remains `https://raw.githubusercontent.com/nathantendosaas-star/Nathan-Scales/refs/heads/main/public/NSM-logo.svg`.
- Core bullet points / evaluation criteria directly reflect the prospect's actual situation.

### Step 4: Quality & Validation Check
Run the checklist before finalizing output:
- [ ] Is `https://raw.githubusercontent.com/nathantendosaas-star/Nathan-Scales/refs/heads/main/public/NSM-logo.svg` present in the header?
- [ ] Are all `{{VARIABLES}}` replaced without leaving unparsed tags?
- [ ] Is Seyani Brothers content replaced with target prospect context?
- [ ] Are table widths constrained (560px max width for container)?
- [ ] Are inline CSS styles preserved for email client compatibility (Gmail, Outlook, Apple Mail)?
- [ ] Is the CTA clear, single, and low-friction?

---

## Writing Guidelines for Cold & Sales Outreach

### Voice & Tone
- **Tone:** Peer-to-peer, professional, concise, respectful.
- **Avoid AI Tells:** Do NOT use phrases like "I hope this email finds you well," "In today's fast-paced digital landscape," "leverage," "synergy," "game-changer."
- **Focus:** Lead with their world, not yours ("You / Your firm" over "I / We").

### Subject Lines
Keep subject lines 2–4 words, lowercase/titlecase, internal-looking, and free from sales spam triggers:
- Good: `digital standards for {{COMPANY_NAME}}`
- Good: `quick note regarding {{COMPANY_NAME}}'s website`
- Good: `donor pre-qualification audit`
- Bad: `🚀 EXCLUSIVE 50% OFFER TO BOOST YOUR REVENUE TODAY!!`

---

## Reference & Support
For additional details on variable schemas, MSO rendering quirks, or sequence frameworks, see the files in `references/`:
- `references/customization-variables.md`
- `references/html-email-guidelines.md`
- `references/outreach-frameworks.md`

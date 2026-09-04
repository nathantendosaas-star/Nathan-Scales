# Customization Variables Reference

This document outlines all available mustache placeholders used across the HTML and Markdown email templates in `skills/email-customizer/templates/`.

---

## Global Variables

| Variable Placeholder | Description | Default / Example Value |
| --- | --- | --- |
| `{{NSM_LOGO_URL}}` | Official Nathan Scales logo (MANDATORY for all HTML emails) | `https://raw.githubusercontent.com/nathantendosaas-star/Nathan-Scales/refs/heads/main/public/NSM-logo.svg` |
| `{{AGENCY_URL}}` | Main Nathan Scales portfolio URL | `https://nathanscales.vercel.app/` |
| `{{CTA_URL}}` | Destination link for primary CTA button | `https://nathanscales.vercel.app/contact` |
| `{{SENDER_NAME}}` | Sender's full name or agent title | `Nathan Scales BD Team` |

---

## Executive Briefing Template Variables (`executive-briefing.html`)

| Variable | Description | Example Value |
| --- | --- | --- |
| `{{EMAIL_TITLE}}` | Browser `<title>` for the email | `Executive Briefing — Target Company` |
| `{{PREHEADER_TEXT}}` | Hidden preheader preview snippet | `Digital pre-qualification audit for tier-1 contractors.` |
| `{{HEADER_BADGE_TEXT}}` | Top right header category tag | `Executive Briefing` |
| `{{EMAIL_HEADING}}` | Main H1 headline | `Digital Pre-Qualification Standards for Institutional Infrastructure` |
| `{{SALUTATION_NAME}}` | Greeting recipient | `Sir/Madam` or `Eng. Mukasa` |
| `{{INTRO_PARAGRAPH}}` | Opening line connecting prospect reputation to digital standards | `Your firm's track record with global institutions places you in a distinct tier...` |
| `{{FEATURED_IMAGE_URL}}` | Hero card visual asset URL | Relevant project/site image |
| `{{FEATURED_IMAGE_ALT}}` | Image alt tag text | `Entebbe Project Site` |
| `{{FEATURED_TAG_TEXT}}` | Accent tag above visual caption | `Milestone Infrastructure` |
| `{{FEATURED_CAPTION_TEXT}}` | Visual caption | `Landside Terminal Expansion Project` |
| `{{BODY_PARAGRAPH_1}}` | Core narrative connecting project scale to public digital presence | `Milestones of this scale reinforce standing, but international panels evaluate...` |
| `{{CRITERIA_BOX_TITLE}}` | Title for key audit box | `Core Evaluation Criteria` |
| `{{CRITERION_1_LABEL}}` | Label 1 | `Safety Compliance` |
| `{{CRITERION_1_TEXT}}` | Description 1 | `Centralized HSE & ISO documentation access.` |
| `{{CRITERION_2_LABEL}}` | Label 2 | `Data Security` |
| `{{CRITERION_2_TEXT}}` | Description 2 | `Verified SSL protocols and secure pathways.` |
| `{{CRITERION_3_LABEL}}` | Label 3 | `Technical Case Studies` |
| `{{CRITERION_3_TEXT}}` | Description 3 | `Structured breakdowns for vetting officers.` |
| `{{BODY_PARAGRAPH_2}}` | Value prop summary | `At Nathan Scales Marketing, we perform concise digital audits...` |
| `{{CTA_TEXT}}` | Button copy | `Request Compliance Audit` |
| `{{PROSPECT_LOGO_URL}}` | Target prospect logo (or neutral placeholder) | Prospect logo image URL |
| `{{COMPANY_NAME}}` | Prospect company name | `Target Firm Name` |
| `{{FOOTER_SUBTITLE}}` | Brief footer title | `Digital Standards Executive Briefing` |

---

## B2B Outreach Template Variables (`b2b-outreach.html`)

| Variable | Description |
| --- | --- |
| `{{TIME_OF_DAY}}` | `morning` / `afternoon` |
| `{{OBSERVATION_HOOK}}` | Specific true observation from research |
| `{{VALUE_PROPOSITION_BODY}}` | Tailored value proposition |
| `{{BOX_TITLE}}` | Quick audit box header |
| `{{FINDING_1}}`, `{{FINDING_2}}`, `{{FINDING_3}}` | 3 quick findings |
| `{{CLOSING_QUESTION}}` | Low friction CTA question |

---

## Case Study Showcase Template Variables (`case-study-showcase.html`)

| Variable | Description |
| --- | --- |
| `{{CASE_STUDY_TITLE}}` | Headline for case study email |
| `{{CLIENT_INDUSTRY_CATEGORY}}` | Industry tag |
| `{{STAT_1_NUMBER}}`, `{{STAT_1_LABEL}}` | Key metric 1 (e.g., `+180%`, `Inquiry Rate`) |
| `{{STAT_2_NUMBER}}`, `{{STAT_2_LABEL}}` | Key metric 2 (e.g., `1.2s`, `Mobile Load Time`) |
| `{{STAT_3_NUMBER}}`, `{{STAT_3_LABEL}}` | Key metric 3 (e.g., `$450k`, `Pipeline Generated`) |
| `{{TRANSFORMATION_DESCRIPTION}}` | Paragraph describing transformation |
| `{{RELEVANCE_TO_PROSPECT}}` | Specific takeaway for prospect |

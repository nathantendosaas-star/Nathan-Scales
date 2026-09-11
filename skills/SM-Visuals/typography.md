# SKILL: Typography & Calligraphy Analysis (typography.md)

## Purpose
This skill analyzes the **font system and hand-drawn/annotation elements**
of a reference image in isolation from layout and color. It exists because
font pairing is one of the most identity-defining parts of a visual style —
two posts can share the exact same layout and color grade and still feel
completely different because of font choice alone.

---

## Step 1 — Identify the font family types (not exact fonts, but categories)
Classify every distinct text style present into one of these categories.
Most references use 2, occasionally 3:

- **Serif display** — classic, editorial, authoritative (e.g. Playfair,
  Georgia-style). Common for headline words that need gravitas.
- **Bold sans-serif / grotesque** — thick, modern, confident, app-native
  (e.g. Helvetica Bold, Inter Bold). Common for casual/personal-brand
  styles.
- **Script / handwritten-style digital font** — NOT actually hand-drawn,
  but a designed script typeface used for emphasis words. Common for the
  single "wow" word or phrase in a headline.
- **True hand-drawn annotation** — looks literally sketched with a pen/
  marker tool, irregular, imperfect. Used for names, labels, or arrows —
  never for body copy.

For each category found, note:
- Which specific words/lines use it
- Approximate weight (thin / regular / bold / black)
- Case (Title Case, ALL CAPS, sentence case)
- Color

## Step 2 — Hierarchy mapping
Rank every text element by visual weight (size × boldness × contrast) from
loudest to quietest. This ranking must be preserved in the output — the
generator should not make the fourth-loudest element compete with the
loudest one.

Typical hierarchy (confirm against the actual reference, don't assume):
1. Headline / hook phrase — loudest
2. Emphasis word/phrase (often the script font or a color pop)
3. Subheadline / supporting line
4. Body paragraph text
5. Small print (footer, CTA, handle, year) — quietest, smallest

## Step 3 — Emphasis mechanics
How does this reference draw attention to specific words, without changing
font size dramatically? Look for:

- **Color shift** — one word/phrase in an accent color while the rest stays
  white/black
- **Font shift** — one word/phrase switches to the script/handwritten font
  while surrounding text stays in the primary font
- **Underline** — hand-drawn rough stroke vs. a single clean straight line.
  These read completely differently (rough = energetic/casual, straight =
  minimal/confident) — identify which one the reference uses, precisely.
- **Isolation** — the emphasized word/phrase gets its own line even if it
  would fit on the line above/below

## Step 4 — Hand-drawn annotation audit (critical — do not over-apply)
Hand-drawn elements are the easiest thing to over-add because they're
"the fun part." Be strict here:

- Does the reference have ANY hand-drawn element at all? If no, output
  `NONE — do not add hand-drawn elements.` and stop this section.
- If yes, identify exactly what type:
  - **Name label**: a shape (circle, oval, underline-only) with handwritten
    text inside/under it, identifying a person or thing
  - **Arrow**: connecting a label to a specific point in the photo — note
    its curve style (single swoop, double curve, straight), thickness, and
    what it's pointing AT (must be a specific point, e.g. the subject's
    face — not empty space)
  - **Circle/scribble emphasis**: loosely circling something in the photo
    itself (a logo, an object)
- Note stroke weight (thin marker vs. thick brush) and color (almost always
  white, sometimes matches the accent color)
- Note precisely how "rough" vs. "clean" the line is — a single straight
  underline is NOT the same style as a scribbled loop, and they should never
  be substituted for each other

## Step 5 — Output format
```
FONT SYSTEM:
  - Primary (headline): [category, weight, case, color]
  - Secondary (subhead/body): [category, weight, case, color]
  - Emphasis (if different from primary): [category, weight, color]
HIERARCHY ORDER: [1 loudest → 5 quietest, mapped to actual text elements]
EMPHASIS MECHANIC: [color shift / font shift / underline style / isolation —
  specify exactly which combination the reference uses]
HAND-DRAWN ELEMENTS: [NONE, or precise description per Step 4]
```

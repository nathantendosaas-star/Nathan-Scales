# SKILL: Image Analysis (image_analysis.md)

## Purpose
This skill analyzes a **reference image** (a single slide or carousel from an
Instagram-style post) and extracts its *structural pattern* — how it's built —
completely separate from *what it's about*. The output of this skill feeds
into `typography.md`, `theme.md`, and finally `guide-prompt.md` to generate a
NEW image using a different subject's raw photo.

**Critical rule: ignore the literal content of the reference.**
Who the person is, what they're doing, what industry they're in, what the
words literally say — none of that matters. Only extract the *pattern*:
where things sit, how big they are, what order information appears in, and
what visual role each element plays. A reference image of someone on a boat
talking about crypto and a reference image of someone at a whiteboard talking
about branding can produce the *exact same skill output* if they share the
same structural pattern.

---

## Step 1 — Identify the slide's narrative role
Every slide in a carousel plays one of these roles. Identify which one the
reference image is:

- **Hook / Cover slide** — first slide, designed to stop the scroll. Usually
  a bold claim, number, or question. Minimal body text.
- **Credibility / Origin slide** — introduces who the subject is and why
  they're worth listening to (background, stats, timeframe).
- **Tension / Turn slide** — the pivot point in the story (a failure, a
  decision, a change in direction).
- **Payoff / Resolution slide** — the outcome, the "what it became."
- **CTA / Closer slide** — explicit call to action (follow, DM, link in bio).

Record which role this specific reference image occupies. If given multiple
reference images from the same post, log the role of each one in sequence —
this sequence is itself part of the pattern (e.g. hook → credibility → turn
→ payoff).

## Step 2 — Composition & layout mapping
Map the image into a simple grid (thirds, both horizontal and vertical) and
record:

- **Subject placement**: Is the person centered, off to one side, cropped
  tight (face/shoulders) or full-body? What fraction of the frame do they
  occupy?
- **Text placement**: Which zone(s) of the grid hold text? Is text
  overlapping the subject, or sitting entirely in negative space (sky, wall,
  empty water, etc.)?
- **Alignment**: Center-aligned, left-aligned, or right-aligned text blocks?
- **Reading order**: What does the eye hit first, second, third? (e.g.
  headline → subject → small print)
- **Safe zones**: Areas of the image left deliberately empty/plain — these
  are where THIS layout expects text to go. Note their position precisely
  (e.g. "top 20% of frame," "left third, vertically centered").

## Step 3 — Narrative / copy pattern extraction
Do NOT extract the literal sentences. Extract the *shape* of the copy:

- **Sentence length and rhythm**: Short fragments? Full sentences? A mix,
  with fragments used for punch and full sentences for context?
- **Line break logic**: Is text broken like prose (wraps naturally) or like
  poetry (deliberate short lines, one idea per line)?
- **POV**: First person ("I'm...") or third person ("He built...")? This is
  a major tone signal — first person reads as confessional/personal, third
  person reads as documentary/case-study.
- **Hook mechanic** (cover slide only): Is the hook a number/stat, a
  question, a bold claim, or a contradiction/before-after? Classify it.
- **Punctuation/emphasis pattern**: Are certain words bolded, colored, or
  isolated on their own line for emphasis? Which words earn that treatment
  (usually numbers, negations like "No," or the single most surprising
  word)?

Output a **template** version of the copy with placeholders, e.g.:
```
[BOLD CLAIM] + [SPECIFIC NUMBER/TIMEFRAME]
[SUBJECT NAME]
[credibility negation 1]. [credibility negation 2].
[failed attempt 1]. [failed attempt 2]. [failed attempt 3]. [one-word verdict].
```

## Step 4 — UI chrome elements
Catalog every piece of "interface" styling present — these are platform
affordances the reference is imitating, and they must be reproduced exactly
or not at all:

- Carousel arrows (‹ ›) — present? Position? Style (outlined circle, solid,
  semi-transparent)?
- Carousel dots — present? Position (bottom-center is standard)? How many,
  and which one is highlighted?
- Footer bar — present? What does it contain (avatar, handle, "follow for
  more," year/copyright)? Exact left/center/right arrangement?
- CTA text ("swipe," "let me tell you," etc.) — present? Position, weight,
  color?
- Any watermark, credit line, or small print?

**Do not invent chrome that isn't in the reference.** If the reference has
no footer bar, the output must have no footer bar. If it has no hand-drawn
annotations, none should be added (that's `typography.md`'s job to flag, but
`image_analysis.md` should note its absence here too).

## Step 5 — Output format
Produce a structured summary using this exact shape so `guide-prompt.md` can
consume it directly:

```
SLIDE ROLE: [hook / credibility / turn / payoff / CTA]
SUBJECT FRAMING: [placement, crop, % of frame]
TEXT ZONES: [list of safe zones with position]
READING ORDER: [1, 2, 3...]
COPY TEMPLATE: [placeholder-ized text structure from Step 3]
POV: [first / third person]
UI CHROME PRESENT: [list only what exists]
UI CHROME ABSENT: [explicitly list common elements that are NOT present, to
prevent the generator from adding them by default]
```

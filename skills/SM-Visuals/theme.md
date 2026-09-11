# SKILL: Theme, Color & Overlay Analysis (theme.md)

## Purpose
This is the **most critical** skill in the set. Every generation failure
in this workflow so far has come from the image generator misjudging how
the raw photo's background should be treated. This skill exists to remove
ambiguity from that decision entirely, before any prompt reaches the
generator.

---

## Step 1 — THE CORE QUESTION (answer this first, before anything else)
Does the reference image use:

**(A) PRESERVED BACKGROUND** — the original photo/location is still fully
recognizable; it has only been darkened, color-graded, or had a gradient
laid over it. You can still tell it's a real room, boat, field, street,
etc.

**(B) REPLACED/STUDIO BACKGROUND** — the subject has been cut out and
placed on a new, artificial background (solid color, blurred studio
backdrop, gradient-only backdrop with no real-world detail).

**This determination overrides every other instruction in this skill and in
`guide-prompt.md`.** Get this wrong and the whole output fails, regardless
of how correct the fonts or colors are.

**Default assumption when uncertain: (A) PRESERVED BACKGROUND.** Real-world
detail (visible walls, objects, horizon lines, other people, texture) in
the reference is strong evidence for (A). Only classify as (B) if the
background is clearly a flat/blurred studio-style backdrop with no
identifiable real location.

Output this as the first line of the report, in caps, unmissable:
`BACKGROUND MODE: PRESERVED` or `BACKGROUND MODE: REPLACED`

## Step 2 — Overlay / gradient treatment (only relevant if PRESERVED)
If Step 1 = PRESERVED, describe the overlay precisely:

- **Direction**: top-to-bottom darkening? Bottom-to-top? Vignette (dark
  edges, light center)? Radial glow behind the subject's head?
- **Intensity per zone**: Is the darkening uniform, or heavier in specific
  areas (e.g. much darker at the very top and very bottom where text/footer
  sit, lighter in the middle where the subject is)? Map this to
  top-third / middle-third / bottom-third at minimum.
- **Color of the overlay**: Pure black/gray (neutral), or tinted (warm
  red/orange like a sunset grade, cool blue/navy like a night grade)? This
  single choice defines the emotional register of the whole image — warm =
  intimate/urgent, cool = professional/composed, neutral = documentary.
- **Opacity estimate**: Rough percentage — is the original photo still
  90% visible through the overlay, or has it been pushed down to 40%
  visibility?

## Step 3 — Color grading of the photo itself
Separate from the overlay, has the underlying photo's color been graded?

- Saturation: boosted, reduced, or untouched?
- Temperature: pushed warmer, cooler, or neutral?
- Contrast: crushed blacks/lifted highlights (moody/filmic) or flat/natural?
- Grain/noise: added for texture, or removed for a clean digital look?

## Step 4 — Accent color logic
Identify where color (beyond white/black/gray) appears and WHY:

- **Fixed brand color**: same accent color regardless of what's in the
  photo (e.g. always orange, always red) — this signals a defined brand
  palette.
- **Adaptive/photo-matched color**: accent color pulled from something
  already in the photo (e.g. text is blue because the sky is blue) — this
  signals a looser, more organic style that changes per-post.
- Note exactly which elements carry the accent color (one emphasis word?
  an underline? a small CTA arrow?) — don't let it spread further than the
  reference uses it.

## Step 5 — Background decluttering (PRESERVED mode only)
Real backgrounds are often busy (boxes, bags, other people, clutter). Does
the reference:
- Leave the background exactly as-is, clutter included (documentary/raw
  feel), or
- Selectively soften/blur/desaturate distracting background elements while
  keeping the space recognizable (cleaner but still real)?

Note which, and if the latter, note whether this is done via focus/blur,
via the darkening overlay alone, or both.

## Step 6 — Subject treatment
- Is the subject's clothing/appearance left completely untouched?
- If the reference implies any change to the subject (relighting, color
  correction, background separation), note it explicitly — but treat any
  instruction to alter the subject's actual identity, face, or body as
  out of scope for this skill. This skill only governs environment,
  color, and mood — not identity.

## Step 7 — Output format
```
BACKGROUND MODE: [PRESERVED / REPLACED]
OVERLAY: [direction, per-zone intensity, color tint, opacity estimate]
  (write "NONE" if Step 1 = REPLACED and overlay doesn't apply the same way)
COLOR GRADE: [saturation, temperature, contrast, grain]
ACCENT COLOR: [fixed or adaptive, which elements carry it, source color if
  adaptive]
DECLUTTER: [none / selective softening — describe]
SUBJECT TREATMENT: [untouched / relit / notes]
```

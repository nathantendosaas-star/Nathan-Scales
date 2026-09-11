# GUIDE PROMPT (guide-prompt.md)

## What this file is
This is the master instruction that tells the image generator HOW to combine
the outputs of `image_analysis.md`, `typography.md`, and `theme.md` with a
short third-party prompt and two images (a **reference image** and a **raw
image**) into one final generated visual.

This file should be read LAST, after the three skill files, and the
generator should treat it as the binding operating procedure for the whole
task — not just another reference doc.

---

## Inputs you will receive, every time
1. **`image_analysis.md`, `typography.md`, `theme.md`** — the three skill
   files (always provided, always read first, in that order)
2. **One or more reference images** — used ONLY to extract style. Their
   literal subject matter, content, and identity are irrelevant and must
   never appear in the output.
3. **One raw image** — the real photo that supplies the actual subject,
   background, and content for the new output. This is the ONLY source of
   visual content in the final image.
4. **A short third-party prompt** — plain language describing what this
   specific output should say/be about (e.g. the hook text, the name, the
   specific claim). This prompt supplies the WORDS. The skill files supply
   the STYLE. Never let one override the other.

## Non-negotiable global rules
These apply regardless of what any individual skill output says, because
they have caused failures before:

1. **The raw image is the base layer, always.** Never regenerate, redraw,
   reinterpret, or "recreate in the style of" the raw image. If
   `theme.md`'s output says `BACKGROUND MODE: PRESERVED`, the raw image's
   actual background, lighting, and objects must remain fully intact and
   recognizable — only a gradient/overlay/color-grade may be applied on
   top, per the theme skill's exact specification.
2. **Never invent chrome, annotations, or elements not confirmed present**
   in the reference per `image_analysis.md` Step 4 and `typography.md`
   Step 4. Absence is a real instruction, not a gap to fill in creatively.
3. **The subject's identity, face, and body from the raw image are fixed.**
   Only clothing color/pattern may be adjusted, and only if explicitly
   instructed in the third-party prompt or by a specific styling need
   (e.g. removing a distracting logo) — never change who the person is or
   how they look.
4. **Text content comes from the third-party prompt, never from the
   reference image.** The reference's actual words are a pattern template
   (per `image_analysis.md` Step 3's placeholder output) — fill that
   template with the new subject's real information, don't reuse or
   lightly edit the reference's literal sentences.
5. **One layout at a time.** If multiple reference images/slides were
   analyzed, generate one output per slide role, matching each new output
   to its corresponding analyzed role — don't blend two different slide
   layouts into one image unless explicitly asked.

## Assembly procedure
Follow these steps in order for each image to be generated:

**Step 1 — Load context.**
Read the three skill outputs (already run against the reference image(s))
and the third-party short prompt. Identify which slide role is being
generated (hook / credibility / turn / payoff / CTA — see
`image_analysis.md` Step 1).

**Step 2 — Confirm background mode.**
State explicitly: "Background mode for this generation: [PRESERVED /
REPLACED], per theme.md." If PRESERVED (the default), commit to keeping
the raw image's environment fully intact.

**Step 3 — Build the layout instruction.**
Using `image_analysis.md`'s composition mapping (Step 2) and text-zone
data, place the new text into the same safe zones, same alignment, same
reading order as the reference — adapted to wherever those zones actually
fall on the raw image (they won't be pixel-identical since the raw photo
has different proportions/subject position than the reference).

**Step 4 — Build the typography instruction.**
Apply `typography.md`'s font system, hierarchy, and emphasis mechanic
exactly. Fill in the copy template from `image_analysis.md` Step 3 using
the specifics from the third-party prompt. Apply hand-drawn elements ONLY
if `typography.md` Step 4 confirmed they exist in the reference, and only
in the position/style it described.

**Step 5 — Build the theme instruction.**
Apply `theme.md`'s overlay direction/intensity/color, color grade, accent
color logic, and decluttering approach exactly as specified. Do not
increase or decrease the intensity of the overlay from what was reported —
consistency across a multi-slide post matters more than any single slide
looking "better."

**Step 6 — Assemble the final prompt and generate.**
Combine Steps 2–5 into a single explicit instruction set (background mode
→ layout → typography → theme → any third-party-prompt-specific content)
and generate the image against the raw photo.

**Step 7 — Self-check before output.**
Before finalizing, verify:
- [ ] Is the raw photo's real background still recognizable (if PRESERVED)?
- [ ] Does every text element match the font category specified in
      `typography.md` (no default/generic fonts substituted)?
- [ ] Are hand-drawn elements present ONLY if `typography.md` confirmed
      them, and pointing at a specific location (not empty space)?
- [ ] Is the overlay direction/intensity matching `theme.md`, not heavier
      or lighter than specified?
- [ ] Does the UI chrome (dots, arrows, footer) match exactly what
      `image_analysis.md` Step 4 listed as present — nothing extra added?
- [ ] Is the subject's face/identity from the raw photo completely
      unchanged?

If any check fails, revise that specific element only — do not regenerate
the whole image from scratch, to avoid re-introducing errors in parts that
were already correct.

## Third-party prompt handling
The short prompt you receive alongside these files should be treated as the
**content brief only** — e.g. "hook slide, claim is that I built a $0
agency in 6 months, my name is Nathan." It will rarely specify layout,
font, or color — that's what the three skill files are for. If the
third-party prompt DOES specify a style preference that conflicts with the
skill files (e.g. "make it more colorful"), the third-party prompt wins,
since it reflects the actual user's real-time intent — but only override
the specific point of conflict, keep everything else per the skill files.

## Output
Generate one image per requested slide, following the procedure above.
When generating multiple slides for one carousel, keep the font system,
theme, and chrome IDENTICAL across all slides in that set — only the copy
content and specific text zone (per each slide's role) should change. A
carousel where slide 1 and slide 2 look like they're from two different
posts is a failure state.

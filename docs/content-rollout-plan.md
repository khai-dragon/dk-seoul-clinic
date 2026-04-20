# DK Seoul Clinic Content Rollout Plan

## Preview workflow

- Fast preview while editing: `http://localhost:3001`
- Current production domain: `https://dk-seoul-clinic.vercel.app`
- Suggested review rhythm:
  - Check changes instantly on local preview while work is in progress
  - Push a Vercel deployment after each completed phase so production can be reviewed in batches

## Current structural assessment

- The current visual language is stable and should be preserved.
- Global navigation and subpage layout are already aligned with the clinic menu structure.
- Most detail pages already match the intended section order from the PPT brief.
- The main blocker is not layout, but missing content integration:
  - image placeholders remain across many pages
  - assets are stored outside the app and are not yet wired into the UI
  - page copy is still hardcoded page-by-page
  - reservation/legal/clinic info areas are still incomplete

## Non-negotiables for implementation

- Keep the current design system, color palette, spacing, and motion direction.
- Do not redesign the IA unless source materials force a content change.
- Build reusable content blocks before filling pages one by one.
- Treat the PPT as a page brief, not just a visual reference.

## Phase order

### Phase 1. Source mapping and gaps

- Match every route to its source folder and PPT slide brief
- Identify routes with enough assets already available
- Identify routes with copy gaps or missing images
- Lock a delivery order that minimizes rework

### Phase 2. Content foundation

- Create a consistent asset structure inside the app
- Normalize filenames and convert unsupported/heavy formats if needed
- Add reusable image/content components without changing the current tone
- Reduce repeated page-specific placeholder markup

### Phase 3. Main page integration

- Replace hero and service placeholders with real clinic assets
- Connect category visuals to actual detail-page materials
- Keep current premium tone and animation density

### Phase 4. High-confidence detail pages

- Stem cell pages
- IV therapy pages
- Hyperbaric oxygen pages
- Wellness pages

These have the clearest PPT guidance and/or stronger asset coverage.

### Phase 5. Partial-gap pages

- Skin remodeling pages
- Diet medication page
- Any page where PPT guidance is incomplete or assets are uneven

These should be finalized after confirming copy or source direction.

### Phase 6. Operational completion

- Reservation handling direction
- Real clinic address/phone/hours/map
- Privacy policy and terms pages
- Final QA across desktop/mobile
- Vercel deployment review

## Route to source mapping

### Main

- `/`
  - folder: `1. 메인페이지 이미지`
  - status: enough assets available for hero, service cards, and section imagery

### Stem Cell

- `/stem-cell/premium-cell`
  - PPT: slide 2
  - folder: `2. 줄기세포 카테고리`
  - asset coverage: strong

- `/stem-cell/research-lab`
  - PPT: slide 3
  - folder: `2. 줄기세포 카테고리`
  - asset coverage: strong

- `/stem-cell/cell-therapy`
  - PPT: slide 4
  - folder: `2. 줄기세포 카테고리`
  - asset coverage: moderate to strong

- `/stem-cell/advanced-regenerative`
  - PPT: slide 5
  - folder: no final certificate asset yet
  - gap: certificate image appears to be pending

### IV Therapy

- `/iv-therapy`
  - PPT: slides 1, 6
  - folder: `3. 수액테라피 카테고리`

- `/iv-therapy/brain-healing`
- `/iv-therapy/dr-venus-healing`
- `/iv-therapy/stress-healing`
- `/iv-therapy/time-healing`
- `/iv-therapy/detox-healing`
- `/iv-therapy/power-healing`
  - PPT: slides 7, 8, 9
  - folder: `3. 수액테라피 카테고리`
  - note: shared structure should be standardized first

- `/iv-therapy/personal-prescription`
  - PPT: slide 6
  - folder: `3. 수액테라피 카테고리`

### Skin Remodeling

- `/skin-remodeling/skin-booster`
  - PPT: slide 10
  - folder: `4. 스킨리모델링 카테고리1-스킨부스터`
  - asset coverage: strong

- `/skin-remodeling/stem-cell`
  - PPT: slide 11
  - folder: no clearly dedicated folder found
  - gap: copy brief exists, asset source should be confirmed

- `/skin-remodeling/filler`
- `/skin-remodeling/botox`
  - PPT: slide 12
  - folder: `4. 스킨리모델링 카테고리4-필러`
  - gap: filler assets exist, botox-specific asset coverage is unclear

- `/skin-remodeling/collagen-booster`
  - folder: `4. 스킨리모델링 카테고리2-콜라겐부스터`
  - gap: no clearly matching PPT slide extracted yet

- `/skin-remodeling/ecm-booster`
  - folder: `4. 스킨리모델링 카테고리3-ECM부스터`
  - gap: no clearly matching PPT slide extracted yet

### Energy Lifting

- `/energy-lifting/thermage`
  - PPT: slide 13
  - folder: `5. 에너지리프팅 카테고리`
  - asset coverage: strong

- `/energy-lifting/ulthera`
- `/energy-lifting/sofwave`
- `/energy-lifting/titanium`
- `/energy-lifting/onda`
- `/energy-lifting/volnewmer`
- `/energy-lifting/shrink`
- `/energy-lifting/inmode`
  - folder: `5. 에너지리프팅 카테고리`
  - gap: assets exist, but PPT guidance is much lighter than thermage

### Diet

- `/diet/custom-diet`
  - PPT: slide 22
  - folder: `6. 다이어트 카테고리`

- `/diet/glp1-injection`
  - PPT: slide 23
  - folder: `6. 다이어트 카테고리`

- `/diet/medication`
  - folder: `6. 다이어트 카테고리`
  - gap: no clearly isolated PPT slide for this page

### Wellness

- `/wellness/anti-stress`
  - PPT: slides 14, 15, 16
  - folder: `7. 웰니스 카테고리`

- `/wellness/chronic-fatigue`
  - PPT: slide 17
  - folder: `7. 웰니스 카테고리`

- `/wellness/immune-balance`
  - PPT: slides 18, 19, 20, 21
  - folder: `7. 웰니스 카테고리`

### Hyperbaric Oxygen

- `/hyperbaric-oxygen/about`
  - PPT: slide 24
  - folder: `8. 고압산소케어 카테고리`

- `/hyperbaric-oxygen/chamber`
  - PPT: slides 25, 26
  - folder: `8. 고압산소케어 카테고리`

- `/hyperbaric-oxygen/solution`
  - PPT: slides 27, 28, 29, 30
  - folder: `8. 고압산소케어 카테고리`

## Known issues to resolve during rollout

- Placeholder image blocks remain across many routes
- Main page still uses placeholder visual sections
- Reservation page is not wired to a real submission flow
- Real clinic address, phone, map, and hours are not finalized in code
- Footer links to `/privacy` and `/terms`, but those routes do not exist yet
- Some referenced external clinic pages in the PPT should not be copied directly without filtering/rewriting
- Some source formats are not web-friendly and may need conversion

## Immediate next implementation target

1. Create a reusable asset/content structure inside the app
2. Wire real imagery into the main page and one representative detail group
3. Use that pattern to roll out the remaining categories in batches

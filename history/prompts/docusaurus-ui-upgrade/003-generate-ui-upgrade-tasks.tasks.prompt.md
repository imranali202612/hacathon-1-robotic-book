---
id: 003
title: Generate Docusaurus UI Upgrade Tasks
stage: tasks
date: 2025-12-19
surface: agent
model: claude-sonnet-4-5
feature: docusaurus-ui-upgrade
branch: 001-module1-ros2
user: User
command: /sp.tasks
labels: ["tasks", "ui-upgrade", "docusaurus", "css", "implementation"]
links:
  spec: specs/004-docusaurus-ui-upgrade/spec.md
  research: specs/004-docusaurus-ui-upgrade/research.md
  plan: specs/004-docusaurus-ui-upgrade/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-docusaurus-ui-upgrade/tasks.md
tests:
  - Manual validation: Tasks file created successfully with 110 tasks
  - Structure validation: 8 phases match plan.md architecture
  - Format validation: All tasks follow checklist format with Task IDs (T001-T110)
  - Dependency validation: Phase dependencies documented, 22 tasks marked parallelizable [P]
---

## Prompt

```text
/sp.tasks
```

## Response snapshot

Generated comprehensive task breakdown for Docusaurus UI Upgrade with 110 CSS implementation tasks organized into 8 phases.

**Task File Created**: `specs/004-docusaurus-ui-upgrade/tasks.md`

**Task Organization (110 tasks total)**:

1. **Phase 1: Foundation (CSS Variables & Typography)** - T001-T012 (12 tasks)
   - Back up custom.css (T001)
   - CSS organization comments (T002)
   - Light mode variables (T003)
   - Dark mode variables (T004)
   - Typography properties (T005)
   - Spacing/layout properties (T006)
   - Map to Infima variables (T007-T008)
   - Apply typography to elements (T009-T011)
   - Testing checkpoint (T012)

2. **Phase 2: Navigation (Sidebar, Navbar, Footer)** - T013-T027 (15 tasks)
   - Sidebar module headers (T013), chapter links (T014), active state (T015), emoji icons (T016), hover effects (T017), collapsed behavior test (T018)
   - Navbar container (T019), logo (T020), links (T021), theme toggle (T022), sticky test (T023)
   - Footer container (T024), titles (T025), links (T026), testing checkpoint (T027)

3. **Phase 3: Content Elements (Code, Tables, Admonitions)** - T028-T047 (20 tasks)
   - Code blocks: Prism themes light/dark [P] (T028-T029), container (T030), inline code (T031), copy button (T032), language badge (T033)
   - Tables [P]: container (T034), striped rows (T035), hover effects (T036), headers (T037)
   - Admonitions [P]: base (T038), tip (T039), info (T040), warning (T041), danger (T042), headings (T043)
   - Other content [P]: blockquotes (T044), images (T045), hr (T046), testing checkpoint (T047)

4. **Phase 4: Responsive Design** - T048-T061 (14 tasks)
   - Mobile breakpoint (< 768px): media query (T048), font size (T049), tap targets (T050), spacing (T051), hamburger menu (T052)
   - Tablet breakpoint (768-996px): media query (T053), content width (T054)
   - Desktop breakpoint (> 996px): media query (T055), fixed sidebar (T056)
   - Testing: mobile widths (T057), tablet widths (T058), desktop widths (T059), code block scroll (T060), image scaling (T061)

5. **Phase 5: Dark Mode Polish** - T062-T069 (8 tasks)
   - Refine variables (T062)
   - Test code blocks (T063), tables (T064), admonitions (T065), Mermaid (T066)
   - Contrast checking (T067), adjustments (T068)
   - Testing checkpoint (T069)

6. **Phase 6: Mermaid Diagram Theming** - T070-T079 (10 tasks)
   - Update docusaurus.config.js theme (T070)
   - Define light mode variables (T071), dark mode variables (T072)
   - CSS container styling (T073), responsive scaling (T074)
   - Test Module 1 diagrams (T075), Module 2 (T076), Module 3 (T077)
   - Test light/dark mode (T078), adjust if needed (T079)

7. **Phase 7: Accessibility & Performance** - T080-T092 (13 tasks)
   - Accessibility: focus-visible (T080), skip-to-content (T081), prefers-reduced-motion (T082), Lighthouse audit (T083), contrast check (T084), keyboard nav test (T085), fixes (T086)
   - Performance: file size check (T087), remove unused CSS (T088), optimize selectors (T089), Lighthouse audit (T090), CLS check (T091), load time test (T092)

8. **Phase 8: Build & Validation** - T093-T110 (18 tasks)
   - Build testing: npm run build (T093), npm start visual (T094), screenshots (T095)
   - Cross-browser [P]: Chrome (T096), Firefox (T097), Safari (T098), Edge (T099)
   - Mobile device [P]: iOS Safari (T100), Android Chrome (T101)
   - Content validation: links (T102), content unchanged (T103), modules (T104), chapters (T105)
   - Final checks: 5-page Lighthouse (T106), performance 90+ (T107), accessibility 90+ (T108), document issues (T109), comparison doc (T110)

**Key Features**:
- All tasks specify exact file path (`website/src/css/custom.css` or `website/docusaurus.config.js`)
- 22 tasks marked [P] for parallel execution (different CSS sections, no dependencies)
- MVP scope: Phases 1-3 (47 tasks, ~7-9 hours) delivers core visual upgrade
- Sequential dependencies documented between phases
- Phase 1 CRITICAL: All other phases depend on CSS custom properties

**Execution Strategy**:
- Sequential single-developer: 13-20 hours total (matches plan.md estimate)
- Incremental delivery: Deploy after Phase 2 (navigation), Phase 3 (content), Phase 5 (dark mode), Phase 8 (complete)
- MVP-first: Phases 1-3 deliver independently testable and valuable visual upgrade

**Implementation Approach**:
- CSS-only implementation (no JavaScript, no React components)
- Backward compatibility (all Docusaurus features preserved)
- Progressive enhancement (works without JS)
- Clear organization with section comments matching AD-001 from plan.md

## Outcome

- ✅ Impact: Complete task breakdown for Docusaurus UI upgrade ready for execution; 110 CSS implementation tasks with clear dependencies and parallel opportunities
- 🧪 Tests: 8 testing checkpoints (one per phase), final validation includes Lighthouse audits (90+ goal), cross-browser testing (4 browsers), mobile device testing (2 platforms), contrast checking (WCAG AA 4.5:1)
- 📁 Files: Created tasks.md with 110 tasks in specs/004-docusaurus-ui-upgrade/
- 🔁 Next prompts: Run `/sp.implement` to start Phase 1-3 MVP (Foundation, Navigation, Content Elements - 47 tasks, ~7-9 hours), or start full implementation (all 8 phases, 110 tasks, ~13-20 hours)
- 🧠 Reflection: Task granularity balances atomicity with context; Phase 1 (Foundation) correctly marked as CRITICAL blocker for all subsequent phases; 22 parallelizable tasks identified for efficiency; MVP scope (Phases 1-3) allows early validation and feedback before responsive/accessibility work

## Evaluation notes (flywheel)

- Failure modes observed: None - task generation follows CSS architecture pattern from plan.md with clear phase dependencies
- Graders run and results (PASS/FAIL): Manual validation PASS - 110 tasks generated, all follow checklist format (- [ ] [TaskID] Description), file paths specified, dependencies documented
- Prompt variant (if applicable): Standard /sp.tasks workflow applied to CSS-only UI/UX upgrade (no backend, no API, no React components)
- Next experiment (smallest change to try): Execute Phase 1 (Foundation) via /sp.implement and validate CSS custom properties work correctly with Docusaurus/Infima before proceeding to Phase 2-8 (ensure design token mapping successful)

---
description: "Task list for Docusaurus UI Upgrade"
---

# Tasks: Docusaurus UI Upgrade

**Input**: Design documents from `/specs/004-docusaurus-ui-upgrade/`
**Prerequisites**: plan.md (required), spec.md (required), research.md

**Tests**: Not requested in feature specification. Validation is manual (visual testing, Lighthouse audits, user testing).

**Organization**: Tasks are grouped by implementation phase (CSS architecture) following the 8-phase plan.

## Format: `[ID] [P?] [Phase] Description`

- **[P]**: Can run in parallel (different CSS sections, no dependencies)
- **[Phase]**: Which phase this task belongs to (Foundation, Navigation, Content, etc.)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus project**: `website/` at repository root
- **CSS file**: `website/src/css/custom.css` (main implementation file)
- **Config file**: `website/docusaurus.config.js` (Mermaid theme only)
- All CSS tasks modify `custom.css` unless otherwise specified

---

## Phase 1: Foundation (CSS Variables & Typography)

**Purpose**: Establish design token system and typography foundation

**⚠️ CRITICAL**: All other phases depend on these CSS custom properties

- [X] T001 Back up existing custom.css file at website/src/css/custom.css (create custom.css.backup)
- [X] T002 Add CSS organization comments section headers in website/src/css/custom.css (8 sections per plan.md AD-001)
- [X] T003 Define :root CSS custom properties for light mode colors in website/src/css/custom.css (primary, secondary, accent, semantic)
- [X] T004 Define [data-theme='dark'] CSS custom properties for dark mode colors in website/src/css/custom.css
- [X] T005 Define typography CSS custom properties in website/src/css/custom.css (font families, sizes, line heights, weights)
- [X] T006 Define spacing and layout CSS custom properties in website/src/css/custom.css (margins, padding, gaps, radii)
- [X] T007 Map custom color properties to Infima variables (--ifm-color-primary, etc.) in website/src/css/custom.css
- [X] T008 Map custom typography properties to Infima variables (--ifm-font-family-base, etc.) in website/src/css/custom.css
- [X] T009 Apply typography styles to body element in website/src/css/custom.css (font-family, font-size, line-height)
- [X] T010 Apply typography styles to heading elements (h1-h6) in website/src/css/custom.css (font-size, font-weight, line-height)
- [X] T011 Apply typography styles to code and pre elements in website/src/css/custom.css (font-family, font-size)
- [X] T012 Test Phase 1: View any docs page, verify colors and typography applied correctly

**Checkpoint**: Foundation complete - color system and typography established

---

## Phase 2: Navigation (Sidebar, Navbar, Footer)

**Purpose**: Enhance navigation visual hierarchy and usability

**Dependencies**: Phase 1 (CSS variables must be defined)

### Sidebar Navigation

- [X] T013 Style sidebar module headers (.menu__link--sublist) in website/src/css/custom.css (uppercase, small font, gray, background shading)
- [X] T014 Style sidebar chapter links (.menu__link) in website/src/css/custom.css (padding, border-radius, hover states)
- [X] T015 Style sidebar active state (.menu__link--active) in website/src/css/custom.css (bold, color, 4px left border)
- [X] T016 Add emoji icons to sidebar module headers using ::before pseudo-elements in website/src/css/custom.css (📚 for modules)
- [X] T017 Style sidebar hover effects (.menu__link:hover) in website/src/css/custom.css (background color transition)
- [X] T018 Test collapsed/expanded sidebar behavior (verify collapsible sections work)

### Navbar

- [X] T019 Style navbar container (.navbar) in website/src/css/custom.css (box-shadow, backdrop-filter, background)
- [X] T020 Style navbar logo (.navbar__logo) in website/src/css/custom.css (height, margin)
- [X] T021 Style navbar links (.navbar__link) in website/src/css/custom.css (font-weight, color, hover transition)
- [X] T022 Style navbar theme toggle button in website/src/css/custom.css (border-radius, padding, hover background)
- [X] T023 Test navbar sticky behavior (verify navbar remains visible on scroll)

### Footer

- [X] T024 Style footer container (.footer) in website/src/css/custom.css (background, border-top, padding)
- [X] T025 Style footer section titles (.footer__title) in website/src/css/custom.css (font-size, font-weight, text-transform, letter-spacing)
- [X] T026 Style footer links (.footer__link-item) in website/src/css/custom.css (color, hover transition)
- [X] T027 Test Phase 2: Navigate between modules, verify sidebar active states and visual hierarchy clear

**Checkpoint**: Navigation complete - sidebar, navbar, footer visually enhanced

---

## Phase 3: Content Elements (Code, Tables, Admonitions)

**Purpose**: Polish content element styling

**Dependencies**: Phase 1 (CSS variables must be defined)

### Code Blocks

- [X] T028 [P] Override Prism light theme token colors in website/src/css/custom.css (keywords, strings, functions, comments)
- [X] T029 [P] Override Prism dark theme token colors in website/src/css/custom.css (match brand colors)
- [X] T030 Style code block container (pre[class*='language-']) in website/src/css/custom.css (background, border, border-radius, padding)
- [X] T031 Style inline code elements (code) in website/src/css/custom.css (background, color, padding, border-radius)
- [X] T032 Style code copy button (.clean-btn) in website/src/css/custom.css (background, color, padding, hover state, always visible)
- [ ] T033 Add optional language badge to code blocks using ::before pseudo-element in website/src/css/custom.css

### Tables

- [X] T034 [P] Style table container (.markdown table) in website/src/css/custom.css (border-collapse, width, borders)
- [X] T035 [P] Add striped rows styling (table tr:nth-child(even)) in website/src/css/custom.css
- [X] T036 [P] Add table hover effects (table tr:hover) in website/src/css/custom.css (background color change)
- [X] T037 [P] Style table headers (table th) in website/src/css/custom.css (bold, background, padding)

### Admonitions

- [X] T038 [P] Style base admonition container (.admonition) in website/src/css/custom.css (border-left width, border-radius, padding, margin)
- [X] T039 [P] Style tip admonitions (.admonition-tip) with green colors and 💡 emoji in website/src/css/custom.css
- [X] T040 [P] Style info admonitions (.admonition-info) with blue colors and ℹ️ emoji in website/src/css/custom.css
- [X] T041 [P] Style warning admonitions (.admonition-warning) with yellow colors and ⚠️ emoji in website/src/css/custom.css
- [X] T042 [P] Style danger admonitions (.admonition-danger) with red colors and 🚫 emoji in website/src/css/custom.css
- [X] T043 [P] Style admonition headings (.admonition-heading) in website/src/css/custom.css (font-weight, margin)

### Other Content Elements

- [X] T044 [P] Style blockquotes in website/src/css/custom.css (border-left, italic, padding, background)
- [X] T045 [P] Style images in website/src/css/custom.css (max-width, center alignment, border-radius)
- [X] T046 [P] Style horizontal rules (hr) in website/src/css/custom.css (border, margin)
- [X] T047 Test Phase 3: View docs with code blocks, tables, admonitions, verify all styled correctly

**Checkpoint**: Content elements complete - code, tables, admonitions polished

---

## Phase 4: Responsive Design

**Purpose**: Optimize for mobile and tablet devices

**Dependencies**: Phases 1-3 (all elements must be styled first)

### Mobile Breakpoint (< 768px)

- [ ] T048 Add mobile breakpoint media query (@media screen and (max-width: 768px)) in website/src/css/custom.css
- [ ] T049 Increase base font size to 16px minimum for mobile in website/src/css/custom.css (avoid iOS zoom)
- [ ] T050 Increase tap target sizes for buttons and links (min 48px height) in website/src/css/custom.css
- [ ] T051 Adjust spacing and padding for mobile (reduce margins, increase line-height) in website/src/css/custom.css
- [ ] T052 Style mobile hamburger menu if needed in website/src/css/custom.css

### Tablet Breakpoint (768px - 996px)

- [ ] T053 Add tablet breakpoint media query (@media screen and (min-width: 768px) and (max-width: 996px)) in website/src/css/custom.css
- [ ] T054 Adjust content width and sidebar behavior for tablet in website/src/css/custom.css

### Desktop Breakpoint (> 996px)

- [ ] T055 Add desktop breakpoint media query (@media screen and (min-width: 996px)) in website/src/css/custom.css
- [ ] T056 Verify fixed sidebar layout on desktop in website/src/css/custom.css

### Responsive Testing

- [ ] T057 Test mobile layout on Chrome DevTools (320px, 375px, 414px widths)
- [ ] T058 Test tablet layout on Chrome DevTools (768px, 834px widths)
- [ ] T059 Test desktop layout on Chrome DevTools (1024px, 1440px, 1920px widths)
- [ ] T060 Verify code blocks scroll horizontally on mobile without breaking layout
- [ ] T061 Verify images and Mermaid diagrams scale appropriately on all screen sizes

**Checkpoint**: Responsive design complete - mobile, tablet, desktop optimized

---

## Phase 5: Dark Mode Polish

**Purpose**: Ensure dark mode quality and readability

**Dependencies**: Phases 1-3 (all elements styled), Phase 4 optional

- [ ] T062 Review and refine dark mode color variables in website/src/css/custom.css (ensure no pure black #000)
- [ ] T063 Test code block readability in dark mode (verify syntax highlighting contrast)
- [ ] T064 Test table styling in dark mode (verify striped rows visible)
- [ ] T065 Test all admonition types in dark mode (verify colors and contrast)
- [ ] T066 Test Mermaid diagrams in dark mode (verify readability)
- [ ] T067 Run WebAIM Contrast Checker on dark mode text colors (verify WCAG AA compliance: 4.5:1 minimum)
- [ ] T068 Adjust any dark mode colors failing contrast requirements in website/src/css/custom.css
- [ ] T069 Test Phase 5: Switch to dark mode, review all docs pages for readability

**Checkpoint**: Dark mode complete - all elements readable and WCAG AA compliant

---

## Phase 6: Mermaid Diagram Theming

**Purpose**: Align Mermaid diagrams with brand colors

**Dependencies**: Phase 1 (color system defined)

- [ ] T070 Update mermaid.theme configuration in website/docusaurus.config.js (set light: 'base', dark: 'dark')
- [ ] T071 Define mermaid.themeVariables for light mode in website/docusaurus.config.js (primaryColor, lineColor, secondaryColor, tertiaryColor)
- [ ] T072 Define mermaid.themeVariables for dark mode in website/docusaurus.config.js (if needed, adjust colors)
- [ ] T073 Add CSS container styling for Mermaid diagrams (.mermaid) in website/src/css/custom.css (background, border, padding, center alignment)
- [ ] T074 Ensure Mermaid diagrams scale responsively (.mermaid svg max-width: 100%) in website/src/css/custom.css
- [ ] T075 Test all existing Mermaid diagrams in Module 1 (verify colors and readability)
- [ ] T076 Test all existing Mermaid diagrams in Module 2 (verify colors and readability)
- [ ] T077 Test all existing Mermaid diagrams in Module 3 (verify colors and readability)
- [ ] T078 Test Mermaid diagrams in both light and dark modes
- [ ] T079 Adjust theme variables if any diagrams are hard to read in website/docusaurus.config.js

**Checkpoint**: Mermaid theming complete - diagrams match brand colors

---

## Phase 7: Accessibility & Performance

**Purpose**: Ensure WCAG AA compliance and performance standards

**Dependencies**: All styling phases complete (1-6)

### Accessibility

- [ ] T080 Add focus-visible styles for keyboard navigation (*:focus-visible) in website/src/css/custom.css (2px outline, primary color)
- [ ] T081 Add skip-to-content link styling in website/src/css/custom.css (off-screen by default, visible on focus)
- [ ] T082 Add prefers-reduced-motion media query to disable animations in website/src/css/custom.css
- [ ] T083 Run Lighthouse accessibility audit (aim for 90+ score)
- [ ] T084 Run WebAIM Contrast Checker on all text/background combinations (verify 4.5:1 minimum)
- [ ] T085 Test keyboard navigation (Tab key) through all interactive elements (links, buttons, inputs)
- [ ] T086 Fix any accessibility issues found in Lighthouse or contrast checker

### Performance

- [ ] T087 Review custom.css file size (verify under 50KB unminified)
- [ ] T088 Remove any unused CSS rules from website/src/css/custom.css
- [ ] T089 Optimize CSS selectors for specificity (avoid deep nesting, !important)
- [ ] T090 Run Lighthouse performance audit (aim for 90+ score)
- [ ] T091 Verify no layout shift (CLS score < 0.1) on page load
- [ ] T092 Test page load time (should remain under 2 seconds on fast 3G)

**Checkpoint**: Accessibility & Performance complete - WCAG AA compliant, Lighthouse 90+

---

## Phase 8: Build & Validation

**Purpose**: Final testing and validation before deployment

**Dependencies**: All phases complete (1-7)

### Build Testing

- [ ] T093 Run npm run build in website/ directory (verify no errors or warnings)
- [ ] T094 Run npm start in website/ directory and visually inspect all pages
- [ ] T095 Compare before/after screenshots for visual regression testing (homepage, module pages, chapter pages)

### Cross-Browser Testing

- [ ] T096 [P] Test on Chrome (latest version) - verify all styles render correctly
- [ ] T097 [P] Test on Firefox (latest version) - verify all styles render correctly
- [ ] T098 [P] Test on Safari (latest version) - verify all styles render correctly
- [ ] T099 [P] Test on Edge (latest version) - verify all styles render correctly

### Mobile Device Testing

- [ ] T100 [P] Test on iOS Safari (real device or simulator) - verify responsive design
- [ ] T101 [P] Test on Android Chrome (real device or simulator) - verify responsive design

### Content Validation

- [ ] T102 Verify all internal links work (no broken links)
- [ ] T103 Verify all Markdown content unchanged (git diff on docs/ folder should show no changes)
- [ ] T104 Verify all modules appear in sidebar (Module 1, Module 2, Module 3)
- [ ] T105 Verify all chapters render correctly within modules

### Final Checks

- [ ] T106 Run Lighthouse audits on 5 pages (homepage, Module 1 index, Module 1 Chapter 1, Module 2 index, Module 3 index)
- [ ] T107 Verify Lighthouse Performance score 90+ on all tested pages
- [ ] T108 Verify Lighthouse Accessibility score 90+ on all tested pages
- [ ] T109 Document any known issues or limitations in plan.md or spec.md
- [ ] T110 Create before/after comparison document with screenshots and metrics

**Checkpoint**: Build & Validation complete - UI upgrade ready for deployment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Foundation)**: No dependencies - MUST start first (all phases depend on this)
- **Phase 2 (Navigation)**: Depends on Phase 1 (uses CSS variables)
- **Phase 3 (Content Elements)**: Depends on Phase 1 (uses CSS variables)
- **Phase 4 (Responsive)**: Depends on Phases 1-3 (all elements styled first)
- **Phase 5 (Dark Mode)**: Depends on Phases 1-3 (all elements styled first)
- **Phase 6 (Mermaid)**: Depends on Phase 1 (uses color system), Independent of Phases 2-5
- **Phase 7 (Accessibility)**: Depends on Phases 1-6 (all styling complete)
- **Phase 8 (Validation)**: Depends on Phases 1-7 (all work complete)

### Parallel Opportunities

- **Phase 1**: Sequential (must complete in order)
- **Phase 2**: Sidebar, Navbar, Footer can partially overlap (different CSS selectors)
- **Phase 3**: Code, Tables, Admonitions can run in parallel [P] (different CSS selectors)
- **Phase 4**: Breakpoints must be sequential
- **Phase 5**: Sequential (testing-focused)
- **Phase 6**: Can run parallel with Phase 4-5 if needed
- **Phase 7**: Sequential (testing and auditing)
- **Phase 8**: Cross-browser tests [P] and device tests [P] can run in parallel

---

## Implementation Strategy

### MVP First (Phases 1-3)

1. Complete Phase 1: Foundation (CSS variables, typography)
2. Complete Phase 2: Navigation (sidebar, navbar, footer)
3. Complete Phase 3: Content Elements (code, tables, admonitions)
4. **STOP and VALIDATE**: Test on desktop Chrome, verify visual improvements
5. If validated: Proceed to Phases 4-8 or deploy MVP

**Total MVP Time**: ~7-9 hours

### Incremental Delivery

1. Foundation → Validate (colors and typography applied)
2. Add Navigation → Deploy (sidebar and navbar enhanced)
3. Add Content Elements → Deploy (code blocks and admonitions styled)
4. Add Responsive → Deploy (mobile-friendly)
5. Add Dark Mode + Mermaid → Deploy (polished dark mode)
6. Add Accessibility + Validation → Deploy (complete)

**Benefits**: Each phase adds value, allows user feedback

### Sequential Single-Developer Strategy

For a single developer (recommended for consistency):

1. Phase 1 (Foundation): 2-3 hours
2. Phase 2 (Navigation): 2-3 hours
3. Phase 3 (Content Elements): 2-3 hours
4. Phase 4 (Responsive): 2-3 hours
5. Phase 5 (Dark Mode): 1-2 hours
6. Phase 6 (Mermaid): 1-2 hours
7. Phase 7 (Accessibility): 1-2 hours
8. Phase 8 (Validation): 1-2 hours

**Total**: 13-20 hours for complete UI upgrade

---

## Notes

- **CSS-Only Implementation**: All tasks modify `custom.css` (no JavaScript, no React components)
- **File Paths**: All CSS tasks modify `website/src/css/custom.css` unless specified
- **Mermaid Config**: Only T070-T072 modify `website/docusaurus.config.js`
- **Backup**: T001 creates backup before any changes
- **No Content Changes**: Markdown files in `website/docs/` remain untouched (verified in T103)
- **Validation**: Each phase ends with testing checkpoint
- **[P] Markers**: Tasks marked [P] can run in parallel (different CSS sections)

---

## Task Summary

**Total Tasks**: 110

**Task Count by Phase**:
- Phase 1 (Foundation): 12 tasks
- Phase 2 (Navigation): 15 tasks
- Phase 3 (Content Elements): 20 tasks
- Phase 4 (Responsive): 14 tasks
- Phase 5 (Dark Mode): 8 tasks
- Phase 6 (Mermaid): 10 tasks
- Phase 7 (Accessibility & Performance): 13 tasks
- Phase 8 (Build & Validation): 18 tasks

**Parallel Opportunities**:
- Phase 3: 16 tasks can run in parallel (code, tables, admonitions, other content)
- Phase 8: 6 tasks can run in parallel (cross-browser and device testing)
- **Total**: 22 parallelizable tasks out of 110

**Suggested MVP Scope**: Phases 1-3 (47 tasks, ~7-9 hours)
- Delivers core visual upgrade (colors, typography, navigation, content elements)
- Independently testable and valuable
- Can deploy and gather feedback before continuing

---

## Format Validation

✅ **All tasks follow checklist format**:
- [x] All tasks start with `- [ ]` checkbox
- [x] All tasks have sequential Task ID (T001-T110)
- [x] [P] markers only on truly parallelizable tasks
- [x] All tasks include explicit file paths (custom.css or docusaurus.config.js)
- [x] Tasks organized by phase for sequential implementation

✅ **Ready for immediate execution**

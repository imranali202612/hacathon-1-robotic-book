---
id: 002
title: Plan Docusaurus UI Upgrade
stage: plan
date: 2025-12-19
surface: agent
model: claude-sonnet-4-5
feature: docusaurus-ui-upgrade
branch: 001-module1-ros2
user: User
command: /sp.plan
labels: ["planning", "ui-upgrade", "docusaurus", "css", "design-system"]
links:
  spec: specs/004-docusaurus-ui-upgrade/spec.md
  research: specs/004-docusaurus-ui-upgrade/research.md
  plan: specs/004-docusaurus-ui-upgrade/plan.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/004-docusaurus-ui-upgrade/plan.md
tests:
  - Manual validation: Plan document created successfully
  - Architecture validation: 10 architecture decisions documented
  - Phase validation: 8 implementation phases defined with dependencies
---

## Prompt

```text
/sp.plan

Project: Docusaurus Website UI Upgrade

Technology:

* Framework: Docusaurus
* Project location: `website/`
* Scope: Frontend UI/UX only

Plan:

Phase 1: Baseline Assessment

1. Review current Docusaurus version and theme
2. Identify UI pain points (layout, typography, navigation)
3. Inventory existing custom styles and components

Phase 2: Design Updates

1. Refine color palette and typography
2. Improve spacing, readability, and visual hierarchy
3. Enhance navbar, sidebar, and footer layout

Phase 3: Implementation

1. Update theme configuration (`themeConfig`)
2. Customize CSS (`custom.css`)
3. Adjust existing React components if needed
4. Ensure no content or routing changes

Phase 4: Responsiveness & Accessibility

1. Verify mobile and tablet layouts
2. Check contrast, font sizes, and keyboard navigation

Phase 5: Validation

1. Run local build and preview
2. Verify all pages render correctly
3. Ensure no broken links or regressions

Definition of Done:

* UI visibly improved across the site
* Content remains unchanged
* Site builds successfully with Docusaurus
* Responsive and accessible design verified
```

## Response snapshot

Created comprehensive implementation plan for Docusaurus UI Upgrade with 10 architecture decisions and 8 implementation phases.

**Architecture Decisions Created**:

1. **AD-001: CSS Organization Strategy**
   - 8 logical sections: Variables, Typography, Colors, Layout, Navigation, Content, Responsive, Dark Mode
   - Clear comments and CSS custom properties
   - Follows Docusaurus/Infima conventions

2. **AD-002: Color System Implementation**
   - CSS custom properties for all colors
   - Primary: Tech blue (#2563eb), Secondary: Slate (#64748b), Accent: Cyan (#06b6d4)
   - Semantic colors: success, warning, danger, info
   - Light and dark mode scales

3. **AD-003: Typography System**
   - Font families: Inter (UI) + JetBrains Mono (code) with system font fallbacks
   - Modular type scale (1.25 ratio, 8 sizes: xs to 4xl)
   - Line heights: tight (1.25), normal (1.5), relaxed (1.7)
   - Font weights: normal (400) to bold (700)

4. **AD-004: Sidebar Navigation Architecture**
   - Docusaurus `.menu` classes with custom CSS
   - Module headers: uppercase, small, gray, background shading
   - Active state: bold, colored, 4px left border
   - Icons: Unicode emojis (📚 📖) for simplicity

5. **AD-005: Responsive Breakpoints Strategy**
   - Use Docusaurus/Infima breakpoints (mobile < 768px, tablet 768-996px, desktop > 996px)
   - Mobile enhancements: larger tap targets (48px), increased font (16px), bottom nav bar
   - No custom breakpoints (leverage existing)

6. **AD-006: Code Block Styling Architecture**
   - Prism theme overrides via CSS custom properties
   - Light: GitHub-inspired, Dark: Nord/Dracula hybrid
   - Prominent copy button (always visible)
   - Optional language badges (Python, YAML, Bash)

7. **AD-007: Admonition Styling Strategy**
   - Unicode emojis for icons (💡 ℹ️ ⚠️ 🚫)
   - Semantic colors: green (tip), blue (info), yellow (warning), red (danger)
   - 4px left border with 10% tinted background
   - Bold headings for scannability

8. **AD-008: Mermaid Diagram Theming Strategy**
   - Configure in docusaurus.config.js (themeVariables)
   - Light: base theme, Dark: dark theme (not forest)
   - Brand-aligned colors (blue, cyan, gray)
   - Responsive container with borders

9. **AD-009: Navbar and Footer Enhancement Strategy**
   - Minimal structural changes
   - Navbar: subtle shadow, backdrop blur, sticky behavior
   - Footer: border-top, organized columns, hover states
   - Consistency with overall design

10. **AD-010: Performance and Accessibility Strategy**
    - Keep custom.css under 50KB (minified)
    - WCAG AA compliance (4.5:1 contrast minimum)
    - Focus-visible indicators (2px outline)
    - Respect prefers-reduced-motion
    - Skip-to-content link for screen readers

**Implementation Phases (8 phases)**:

1. **Phase 1: Foundation** (2-3 hours)
   - CSS custom properties (colors, typography, spacing)
   - Modular scale and design tokens
   - Map to Infima variables

2. **Phase 2: Navigation** (2-3 hours)
   - Sidebar module grouping and active states
   - Navbar enhancements (shadow, logo, theme toggle)
   - Footer styling (links, colors)

3. **Phase 3: Content Elements** (2-3 hours)
   - Prism theme overrides (light + dark)
   - Code block styling (borders, copy button, language badges)
   - Admonitions (colors, icons, borders)
   - Tables (striped rows, hover effects)

4. **Phase 4: Responsive Design** (2-3 hours)
   - Mobile breakpoint (< 768px): larger tap targets, increased font
   - Tablet breakpoint (768-996px): drawer overlay
   - Desktop breakpoint (> 996px): fixed sidebar
   - Optional mobile bottom nav bar

5. **Phase 5: Dark Mode Polish** (1-2 hours)
   - Refine dark mode variables
   - Test code blocks, diagrams, admonitions
   - Adjust contrast for WCAG AA
   - No pure black (#0f172a instead)

6. **Phase 6: Mermaid Diagram Theming** (1-2 hours)
   - Update themeVariables in docusaurus.config.js
   - Test all existing diagrams (Modules 1-3)
   - Adjust colors for readability
   - Add CSS container styling

7. **Phase 7: Accessibility & Performance** (1-2 hours)
   - Focus-visible styles
   - Color contrast testing (WebAIM)
   - Skip-to-content link
   - Prefers-reduced-motion
   - Lighthouse audit (90+ goal)

8. **Phase 8: Build & Validation** (1-2 hours)
   - npm run build (verify no errors)
   - Visual regression testing
   - Cross-browser testing (Chrome, Firefox, Safari)
   - Mobile device testing
   - Check all links work

**Total Estimated Time**: 13-20 hours for complete UI upgrade

**File Structure**:
- Modify: `website/docusaurus.config.js` (Mermaid theme config only)
- Modify: `website/src/css/custom.css` (all CSS implementation)
- Optional: `website/static/fonts/` (self-hosted fonts if needed)
- No new files created

**Execution Strategy**:
- Sequential single-author: 13-20 hours total
- Incremental delivery: Deploy after Phase 2 (navigation), Phase 3 (content), Phase 5 (dark mode), Phase 8 (complete)
- MVP-first: Phases 1-3 deliver core visual upgrade (~7-9 hours)

**Risk Mitigation**:
- CSS specificity conflicts → Use Docusaurus classes, avoid !important
- Dark mode readability → Test separately, use contrast checker
- Mobile layout breaks → Use Docusaurus breakpoints, test on real devices
- Mermaid visibility → Test all diagrams, adjust theme variables
- Performance degradation → Keep CSS under 50KB, run Lighthouse audits

**Key Decisions**:
- CSS-only implementation (no JavaScript, no React components)
- Backward compatibility (all Docusaurus features preserved)
- Progressive enhancement (works without JS)
- Maintainability (clear organization, documented decisions)

## Outcome

- ✅ Impact: Complete implementation plan for Docusaurus UI upgrade; ready for task generation and execution
- 📁 Files: Created plan.md with 10 architecture decisions and 8 implementation phases in specs/004-docusaurus-ui-upgrade/
- 🎯 Implementation Approach: CSS-only changes to custom.css (13-20 hours), Mermaid config in docusaurus.config.js
- 🔁 Next prompts: Run `/sp.tasks` to generate detailed CSS implementation tasks (expected 50-60 tasks), then `/sp.implement` for Phase 1-3 MVP
- 🧠 Reflection: CSS custom properties enable maintainable theming; Docusaurus/Infima integration requires careful mapping; 8-phase approach allows incremental delivery and validation; accessibility and performance are non-negotiable (WCAG AA, Lighthouse 90+)

## Evaluation notes (flywheel)

- Failure modes observed: None - planning follows CSS architecture pattern with clear design system decisions
- Graders run and results (PASS/FAIL): Manual validation PASS - 10 architecture decisions documented, 8 phases defined with time estimates and dependencies
- Prompt variant (if applicable): Standard /sp.plan workflow applied to UI/UX upgrade (CSS-focused, no backend/API)
- Next experiment (smallest change to try): Generate tasks.md and validate task breakdown aligns with 8-phase plan structure before implementation (ensure CSS organization mirrors plan architecture)

---
id: 004-docusaurus-ui-upgrade
title: Docusaurus Website UI Upgrade
status: specification
created: 2025-12-19
updated: 2025-12-19
---

# Feature Specification: Docusaurus Website UI Upgrade

## Overview

**Feature**: Visual design and usability upgrade for the existing Physical AI Book Docusaurus website

**Target Audience**: Developers and learners consuming technical documentation (AI engineers learning robotics)

**Goal**: Enhance the visual design, typography, layout, and navigation of the Docusaurus site to improve readability and user experience without changing content structure or information architecture.

**Priority**: P2 (after core content modules are complete)

---

## User Stories

### User Story 1 - Improved Visual Design (Priority: P1)

**As a** reader of the Physical AI Book
**I want** a modern, visually appealing interface with better typography and color harmony
**So that** I can focus on learning without visual distractions and enjoy a professional reading experience

**Acceptance Criteria**:
- Color scheme is cohesive and brand-appropriate (robotics/AI theme)
- Typography hierarchy is clear (headings, body text, code)
- Spacing and white space improve readability
- Dark mode and light mode both have polished aesthetics
- Visual elements (buttons, cards, badges) have consistent styling

**Independent Test**: Reader survey shows improved visual appeal (rating 4+/5) compared to baseline.

---

### User Story 2 - Enhanced Navigation & Usability (Priority: P2)

**As a** learner navigating through multiple modules
**I want** clear navigation cues and improved sidebar organization
**So that** I can easily find content and track my learning progress

**Acceptance Criteria**:
- Sidebar navigation is visually distinct and easy to scan
- Active page/section is clearly highlighted
- Breadcrumbs or progress indicators show current location
- Mobile navigation is intuitive and responsive
- Search functionality is prominent and accessible

**Independent Test**: User testing shows 80%+ task completion rate for navigation scenarios (find Module 2, find Chapter 3 within Module 1, return to homepage).

---

### User Story 3 - Responsive Design Optimization (Priority: P3)

**As a** mobile or tablet user
**I want** the website to be fully functional and readable on my device
**So that** I can learn on-the-go without compromising the experience

**Acceptance Criteria**:
- Layout adapts smoothly to mobile (320px), tablet (768px), and desktop (1024px+)
- Text is readable without zooming on mobile devices
- Navigation menu is accessible on mobile (hamburger menu, drawer)
- Code blocks scroll horizontally on narrow screens
- Images and diagrams scale appropriately

**Independent Test**: Responsive design testing passes on Chrome DevTools for 5 standard breakpoints (mobile, tablet portrait, tablet landscape, desktop, wide desktop).

---

## Functional Requirements

### FR-001: Color System Modernization
**Priority**: P1 (foundational)
The UI MUST implement a cohesive color system:
- Primary color: Reflect robotics/AI theme (technology blue, mechanical gray, or AI green)
- Accent colors: Support visual hierarchy (success, warning, info, danger)
- Background colors: Light mode (warm white, not pure white) and dark mode (dark gray, not pure black)
- Text colors: High contrast for accessibility (WCAG AA minimum)

### FR-002: Typography Enhancement
**Priority**: P1
Typography MUST be optimized for readability:
- Font family: Modern sans-serif for UI (Inter, Open Sans) + monospace for code (Fira Code, JetBrains Mono)
- Font sizes: Clear hierarchy (h1: 2.5rem, h2: 2rem, h3: 1.5rem, body: 1rem, code: 0.9rem)
- Line height: Comfortable reading (1.6-1.8 for body text)
- Letter spacing: Slightly increased for headings (-0.01em), normal for body

### FR-003: Sidebar Navigation Redesign
**Priority**: P2
Sidebar MUST provide clear navigation:
- Module grouping: Visual separation between modules (borders, background shading)
- Active state: Clear highlighting of current page (bold, color, left border)
- Collapsible sections: Expand/collapse modules to reduce visual clutter
- Icons: Optional icons for modules (book icon, robot icon)
- Sticky behavior: Sidebar remains visible on scroll (desktop)

### FR-004: Responsive Layout Enhancements
**Priority**: P2
Layout MUST adapt to all screen sizes:
- Mobile (320px-768px): Single column, hamburger menu, bottom nav for prev/next
- Tablet (768px-1024px): Sidebar drawer (overlay), full-width content
- Desktop (1024px+): Fixed sidebar (left), content (center), TOC (right)
- Breakpoints: Use Docusaurus/Infima breakpoints for consistency

### FR-005: Code Block Improvements
**Priority**: P2
Code blocks MUST be visually enhanced:
- Syntax highlighting: Updated Prism themes (light: GitHub, dark: Dracula with adjustments)
- Copy button: Prominent and accessible
- Line numbers: Optional (enabled for longer snippets)
- Language badge: Show language label (Python, YAML, Bash)
- Scrollbars: Custom styled (not default OS scrollbars)

### FR-006: Admonition Styling
**Priority**: P2
Admonitions (:::tip, :::info, :::warning) MUST be redesigned:
- Icons: Modern iconography (Feather Icons, Heroicons)
- Colors: Semantic colors (blue for info, yellow for warning, green for tip, red for danger)
- Borders: Subtle left border (4px) with matching background tint
- Typography: Bold titles, clear hierarchy

### FR-007: Mermaid Diagram Theming
**Priority**: P3
Mermaid diagrams MUST match overall theme:
- Light mode: Clean theme (neutral or base) with brand colors
- Dark mode: Dark theme (forest or dark) with adjusted colors
- Consistency: Diagram colors align with primary/accent colors

### FR-008: Header/Navbar Enhancements
**Priority**: P2
Navbar MUST be modernized:
- Logo: Custom Physical AI Book logo (if provided) or styled text
- Search: Prominent search bar (if Algolia/local search plugin added)
- Theme toggle: Clear light/dark mode switch (sun/moon icons)
- Links: Clear hover states and active states
- Sticky: Navbar remains visible on scroll

### FR-009: Footer Redesign
**Priority**: P3
Footer MUST be updated:
- Links: Organized into clear columns (Book, Community, Resources)
- Social links: Icons for GitHub, Discussions
- Copyright: Updated with correct year and branding
- Background: Consistent with dark mode styling

### FR-010: Content Layout Optimization
**Priority**: P2
Content area MUST be optimized:
- Max width: 800px-900px for comfortable reading (current Docusaurus default is good)
- Margins: Generous side margins (desktop)
- Images: Centered with captions, responsive sizing
- Tables: Responsive (horizontal scroll on mobile), striped rows, hover effects
- Blockquotes: Styled with left border and italic text

---

## Non-Functional Requirements

### NFR-001: Performance
UI changes MUST NOT degrade performance:
- Page load time remains under 2 seconds (excluding network)
- CSS bundle size increase under 50KB
- No layout shift (CLS) during page load

### NFR-002: Accessibility
UI MUST meet WCAG 2.1 AA standards:
- Color contrast ratio 4.5:1 minimum for text
- Keyboard navigation functional (tab order, focus indicators)
- Screen reader compatible (ARIA labels where needed)
- Focus states clearly visible

### NFR-003: Browser Compatibility
UI MUST work across modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

### NFR-004: Maintainability
CSS MUST be maintainable:
- Use CSS custom properties (variables) for colors, spacing
- Avoid !important overrides
- Follow Docusaurus/Infima naming conventions
- Comment complex selectors

---

## Success Criteria

### SC-001: Visual Appeal
Post-upgrade user survey shows:
- 80%+ rate visual design as "Good" or "Excellent"
- 70%+ prefer new design over old

### SC-002: Readability
Readability metrics improve:
- Time-to-find-content reduces by 20% (user testing)
- User testing shows 90%+ can identify current module/chapter

### SC-003: Responsiveness
Responsive design passes:
- Lighthouse mobile score remains 90+ (Performance, Accessibility)
- Manual testing passes on 5 breakpoints

### SC-004: No Regressions
Existing functionality preserved:
- All docs pages render correctly
- All internal links work
- Mermaid diagrams render
- Code syntax highlighting works
- Search (if enabled) works

### SC-005: Dark Mode Quality
Dark mode is polished:
- No pure black backgrounds (#121212 or similar)
- Text contrast meets WCAG AA (4.5:1 minimum)
- Code blocks are readable in dark mode

### SC-006: Build Success
Build and deployment:
- `npm run build` succeeds with no warnings
- No console errors in browser
- Static site deploys successfully

---

## Constraints

### C-001: No Content Changes
**Constraint**: Zero changes to existing Markdown content files
**Rationale**: This is a UI-only upgrade; content is already authored

### C-002: Framework Preservation
**Constraint**: Docusaurus framework and plugins remain unchanged
**Rationale**: Avoid breaking changes; leverage existing Docusaurus ecosystem

### C-003: No Information Architecture Changes
**Constraint**: Sidebar structure, routing, and page organization remain the same
**Rationale**: Users expect consistent navigation paths

### C-004: CSS-Only Implementation
**Constraint**: UI changes implemented via CSS (custom.css) and Docusaurus theme config
**Rationale**: Minimize JavaScript for simplicity and performance

---

## Out of Scope

The following are explicitly OUT of scope for this feature:

- ❌ Writing new documentation content
- ❌ Changing module organization or sidebar structure
- ❌ Adding new plugins (search, analytics) - UI prep only
- ❌ Backend services or APIs
- ❌ Framework migration (Docusaurus → other)
- ❌ Multi-language support (i18n)
- ❌ Advanced interactivity (quizzes, code playgrounds)
- ❌ Custom React components (unless needed for theme)
- ❌ Logo design (use placeholder or existing)

---

## Dependencies

### Prerequisites
- **Existing Docusaurus Site**: website/ folder with working configuration
- **Modules 1-3 Content**: Authored content for testing visual changes

### External Resources
Content will reference (but not implement):
- Docusaurus theming documentation
- Infima CSS framework documentation
- Prism syntax highlighting themes
- Mermaid theming documentation

---

## Risks and Mitigation

### Risk 1: CSS Specificity Conflicts
**Risk**: Custom CSS may conflict with Docusaurus/Infima defaults
**Mitigation**: Use CSS custom properties; test thoroughly; leverage CSS cascade

### Risk 2: Dark Mode Inconsistencies
**Risk**: Dark mode styling may have contrast or readability issues
**Mitigation**: Test dark mode separately; use WCAG contrast checkers; get user feedback

### Risk 3: Mobile Layout Breaks
**Risk**: Responsive design may break on edge case devices
**Mitigation**: Test on real devices; use Chrome DevTools responsive mode; test common breakpoints

### Risk 4: Mermaid Diagram Visibility
**Risk**: Mermaid diagrams may be hard to read with new color scheme
**Mitigation**: Test Mermaid themes (light: neutral/base, dark: forest/dark); adjust if needed

---

## Definition of Done

Docusaurus UI Upgrade is complete when:

- ✅ `specs/004-docusaurus-ui-upgrade/spec.md` approved
- ✅ `specs/004-docusaurus-ui-upgrade/plan.md` created with design decisions
- ✅ `specs/004-docusaurus-ui-upgrade/tasks.md` generated with actionable CSS tasks
- ✅ All CSS changes implemented in `website/src/css/custom.css`
- ✅ Theme config updated in `website/docusaurus.config.js` (if needed)
- ✅ Build succeeds (`npm run build` with no warnings)
- ✅ Visual regression testing passes (manual review of all pages)
- ✅ Responsive design testing passes (5 breakpoints)
- ✅ Dark mode testing passes (all pages readable)
- ✅ User testing confirms improved usability (SC-001, SC-002)

---

## Appendix: User Story Mapping

| User Story | Priority | Files Affected | Independent Test |
|------------|----------|----------------|------------------|
| US1: Visual Design | P1 | custom.css, docusaurus.config.js | User survey rating 4+/5 |
| US2: Navigation & Usability | P2 | custom.css (sidebar, breadcrumbs) | User testing 80%+ task completion |
| US3: Responsive Design | P3 | custom.css (media queries) | Responsive testing passes 5 breakpoints |

Each user story maps to specific CSS sections for independent implementation and testing.

---

## Appendix: Current State Analysis

**Current Docusaurus Setup**:
- **Theme**: Docusaurus preset-classic with default Infima CSS
- **Colors**: Default green primary (#2e8555 light, #25c2a0 dark)
- **Prism**: GitHub theme (light), Dracula theme (dark)
- **Mermaid**: Neutral theme (light), Forest theme (dark)
- **Custom CSS**: Minimal (only color overrides in custom.css)

**Current Issues** (to address):
- Generic green color scheme (not robotics/AI themed)
- Default Docusaurus styling (not differentiated)
- Sidebar lacks visual hierarchy
- Code blocks use default copy button styling
- Admonitions use default Infima colors

**Opportunities**:
- Leverage Docusaurus/Infima CSS custom properties
- Minimal JavaScript needed (CSS-only upgrade possible)
- Mermaid diagrams already enabled (just need theming)
- Dark mode already functional (just needs polish)

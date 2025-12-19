---
id: 004-docusaurus-ui-upgrade-plan
title: Docusaurus UI Upgrade Implementation Plan
created: 2025-12-19
updated: 2025-12-19
---

# Implementation Plan: Docusaurus UI Upgrade

## Overview

This plan details the implementation strategy for upgrading the Physical AI Book Docusaurus website's visual design and usability through CSS-only changes.

**Input Documents**:
- `specs/004-docusaurus-ui-upgrade/spec.md` (requirements, user stories)
- `specs/004-docusaurus-ui-upgrade/research.md` (design decisions)

**Output**: Enhanced Docusaurus website with improved visual design, typography, navigation, and responsiveness

---

## Architecture Decisions

### AD-001: CSS Organization Strategy

**Decision**: Organize custom.css into logical sections with clear comments and CSS custom properties

**Structure**:
```css
/* ========================================
   1. CSS CUSTOM PROPERTIES (VARIABLES)
   ======================================== */
:root { /* Light mode variables */ }
[data-theme='dark'] { /* Dark mode variables */ }

/* ========================================
   2. TYPOGRAPHY
   ======================================== */
/* Font families, sizes, line heights, weights */

/* ========================================
   3. COLOR SYSTEM
   ======================================== */
/* Primary, secondary, accent, semantic colors */

/* ========================================
   4. LAYOUT & SPACING
   ======================================== */
/* Container widths, margins, padding, gaps */

/* ========================================
   5. NAVIGATION (NAVBAR, SIDEBAR, FOOTER)
   ======================================== */
/* Navbar, sidebar, footer, breadcrumbs */

/* ========================================
   6. CONTENT ELEMENTS
   ======================================== */
/* Code blocks, tables, admonitions, images */

/* ========================================
   7. RESPONSIVE DESIGN
   ======================================== */
/* Media queries for mobile, tablet, desktop */

/* ========================================
   8. DARK MODE OVERRIDES
   ======================================== */
/* Dark mode specific adjustments */
```

**Rationale**:
- Clear section separation improves maintainability
- CSS custom properties enable easy theming
- Follows Docusaurus/Infima conventions
- Future developers can navigate easily

**Alternatives Considered**:
- Separate CSS files: Rejected - adds HTTP requests, complicates Docusaurus config
- CSS-in-JS: Rejected - out of scope, requires React component changes

---

### AD-002: Color System Implementation

**Decision**: Use CSS custom properties for all colors, define semantic color scales

**Color Architecture**:
```css
:root {
  /* Primary brand colors */
  --custom-primary: #2563eb;      /* Blue 600 */
  --custom-primary-dark: #1e40af; /* Blue 700 */
  --custom-primary-light: #3b82f6; /* Blue 500 */

  /* Secondary/accent colors */
  --custom-secondary: #64748b;    /* Slate 500 */
  --custom-accent: #06b6d4;       /* Cyan 500 */

  /* Semantic colors */
  --custom-success: #10b981;      /* Green 500 */
  --custom-warning: #f59e0b;      /* Amber 500 */
  --custom-danger: #ef4444;       /* Red 500 */
  --custom-info: #3b82f6;         /* Blue 500 */

  /* Backgrounds */
  --custom-bg-base: #ffffff;
  --custom-bg-surface: #f8fafc;   /* Slate 50 */
  --custom-bg-elevated: #f1f5f9;  /* Slate 100 */

  /* Text colors */
  --custom-text-primary: #0f172a; /* Slate 900 */
  --custom-text-secondary: #475569; /* Slate 600 */
  --custom-text-tertiary: #94a3b8; /* Slate 400 */

  /* Borders */
  --custom-border-default: #e2e8f0; /* Slate 200 */
  --custom-border-emphasis: #cbd5e1; /* Slate 300 */

  /* Map to Infima variables */
  --ifm-color-primary: var(--custom-primary);
  --ifm-color-primary-dark: var(--custom-primary-dark);
  /* ... (more mappings) */
}

[data-theme='dark'] {
  /* Dark mode overrides */
  --custom-bg-base: #0f172a;      /* Slate 900 */
  --custom-bg-surface: #1e293b;   /* Slate 800 */
  --custom-text-primary: #f1f5f9; /* Slate 100 */
  /* ... */
}
```

**Rationale**:
- Centralized color management
- Easy theme switching
- Infima compatibility via mapping
- Design token pattern (industry standard)

---

### AD-003: Typography System

**Decision**: Use system font stack with web font fallbacks, define clear type scale

**Implementation**:
```css
:root {
  /* Font families */
  --custom-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', sans-serif;
  --custom-font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas',
                      'Monaco', 'Courier New', monospace;

  /* Map to Infima */
  --ifm-font-family-base: var(--custom-font-sans);
  --ifm-font-family-monospace: var(--custom-font-mono);

  /* Type scale (modular scale: 1.25 ratio) */
  --custom-font-size-xs: 0.75rem;   /* 12px */
  --custom-font-size-sm: 0.875rem;  /* 14px */
  --custom-font-size-base: 1rem;    /* 16px */
  --custom-font-size-lg: 1.125rem;  /* 18px */
  --custom-font-size-xl: 1.25rem;   /* 20px */
  --custom-font-size-2xl: 1.5rem;   /* 24px */
  --custom-font-size-3xl: 1.875rem; /* 30px */
  --custom-font-size-4xl: 2.25rem;  /* 36px */

  /* Line heights */
  --custom-line-height-tight: 1.25;
  --custom-line-height-normal: 1.5;
  --custom-line-height-relaxed: 1.7;

  /* Font weights */
  --custom-font-weight-normal: 400;
  --custom-font-weight-medium: 500;
  --custom-font-weight-semibold: 600;
  --custom-font-weight-bold: 700;
}

/* Apply to elements */
body {
  font-family: var(--custom-font-sans);
  font-size: var(--custom-font-size-base);
  line-height: var(--custom-line-height-relaxed);
}

code, pre {
  font-family: var(--custom-font-mono);
  font-size: 0.9em;
}
```

**Rationale**:
- System fonts load instantly (performance)
- Web fonts as progressive enhancement
- Clear type hierarchy
- Comfortable reading line-height (1.7)

**Font Loading Strategy**:
- Option 1: Load fonts from Google Fonts (add `<link>` in `docusaurus.config.js`)
- Option 2: Self-host fonts (add to `static/fonts/`, reference in CSS)
- **Recommended**: Google Fonts for simplicity, self-host if GDPR concerns

---

### AD-004: Sidebar Navigation Architecture

**Decision**: Use Docusaurus `.menu` classes with custom CSS enhancements, no JavaScript needed

**Sidebar Hierarchy**:
```css
/* Module-level grouping (category headers) */
.menu__list-item--collapsed,
.menu__list-item {
  /* Module container styling */
}

.menu__link--sublist {
  /* Module header (e.g., "Module 1: ROS 2") */
  text-transform: uppercase;
  font-size: var(--custom-font-size-xs);
  font-weight: var(--custom-font-weight-semibold);
  color: var(--custom-text-tertiary);
  background: var(--custom-bg-surface);
  padding: 0.75rem 1rem;
  border-radius: 6px;
}

/* Chapter links */
.menu__link {
  /* Normal chapter links */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.menu__link:hover {
  background: var(--custom-bg-surface);
}

/* Active chapter */
.menu__link--active {
  font-weight: var(--custom-font-weight-semibold);
  color: var(--custom-primary);
  background: var(--custom-bg-elevated);
  border-left: 4px solid var(--custom-primary);
  padding-left: calc(1rem - 4px); /* Adjust for border */
}
```

**Icons Strategy**:
- Use Unicode emojis for simplicity: 📚 (module), 📖 (chapter)
- Or CSS `::before` pseudo-elements with SVG data URIs
- **Recommended**: Emojis for MVP, SVG icons for polish

**Rationale**:
- Leverages Docusaurus classes (no custom HTML)
- Pure CSS solution (no JavaScript)
- Clear visual hierarchy
- Accessible (focus states preserved)

---

### AD-005: Responsive Breakpoints Strategy

**Decision**: Use Docusaurus/Infima breakpoints, enhance mobile with CSS-only bottom nav

**Breakpoints** (from Infima):
```css
/* Mobile: < 768px */
@media screen and (max-width: 768px) {
  /* Single column, hamburger menu, increased font size */
}

/* Tablet: 768px - 996px */
@media screen and (min-width: 768px) and (max-width: 996px) {
  /* Drawer sidebar, full-width content */
}

/* Desktop: > 996px */
@media screen and (min-width: 996px) {
  /* Fixed sidebar, constrained content, TOC (if enabled) */
}
```

**Mobile Enhancements**:
1. **Larger tap targets**: Buttons min 48px height
2. **Increased font size**: Base 16px (avoid iOS zoom)
3. **Bottom navigation bar**: Prev/Next chapter links (sticky)

**Bottom Nav Implementation**:
```css
/* Add via CSS ::after pseudo-element on main content */
.main-wrapper::after {
  content: '';
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--custom-bg-base);
  border-top: 1px solid var(--custom-border-default);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 100;
}

/* Prev/Next buttons styled via adjacent elements */
/* (Note: May need minimal JavaScript or Docusaurus plugin for links) */
```

**Alternative**: Use existing Docusaurus pagination, just style it fixed on mobile

**Rationale**:
- Docusaurus handles breakpoints well (don't reinvent)
- Mobile-first enhancements improve usability
- CSS-only solution preferred

---

### AD-006: Code Block Styling Architecture

**Decision**: Override Prism themes via CSS custom properties, add visual enhancements

**Prism Theme Overrides**:
```css
/* Light mode code blocks */
:root {
  --custom-code-bg: #f8fafc;          /* Slate 50 */
  --custom-code-border: #e2e8f0;      /* Slate 200 */
  --custom-code-text: #0f172a;        /* Slate 900 */
  --custom-code-comment: #64748b;     /* Slate 500 */
  --custom-code-keyword: #2563eb;     /* Blue 600 */
  --custom-code-string: #10b981;      /* Green 500 */
  --custom-code-function: #7c3aed;    /* Violet 600 */
}

[data-theme='dark'] {
  --custom-code-bg: #1e293b;          /* Slate 800 */
  --custom-code-border: #334155;      /* Slate 700 */
  --custom-code-text: #e2e8f0;        /* Slate 200 */
  /* ... */
}

/* Apply to code blocks */
pre[class*='language-'] {
  background: var(--custom-code-bg);
  border: 1px solid var(--custom-code-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

code[class*='language-'] {
  background: transparent;
  color: var(--custom-code-text);
}

/* Copy button enhancement */
.clean-btn {
  /* Docusaurus copy button class */
  background: var(--custom-primary);
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: var(--custom-font-size-sm);
  font-weight: var(--custom-font-weight-medium);
  opacity: 1; /* Always visible */
  transition: background-color 0.2s ease;
}

.clean-btn:hover {
  background: var(--custom-primary-dark);
}
```

**Language Badge** (optional):
```css
/* Add language label via data attribute */
pre[class*='language-']::before {
  content: attr(data-language);
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: var(--custom-font-size-xs);
  font-weight: var(--custom-font-weight-semibold);
  text-transform: uppercase;
  color: var(--custom-text-tertiary);
  background: var(--custom-bg-surface);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
```

**Rationale**:
- Brand-aligned syntax colors
- Clear visual separation (borders)
- Prominent copy button
- Optional language labels for clarity

---

### AD-007: Admonition Styling Strategy

**Decision**: Use Unicode emojis for icons, override Infima admonition colors with brand colors

**Admonition Architecture**:
```css
/* Base admonition styling */
.admonition {
  border-left-width: 4px;
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
}

/* Tip (green) */
.admonition-tip {
  border-left-color: var(--custom-success);
  background: color-mix(in srgb, var(--custom-success) 10%, transparent);
}

.admonition-tip .admonition-heading::before {
  content: '💡 ';
}

/* Info (blue) */
.admonition-info {
  border-left-color: var(--custom-info);
  background: color-mix(in srgb, var(--custom-info) 10%, transparent);
}

.admonition-info .admonition-heading::before {
  content: 'ℹ️ ';
}

/* Warning (yellow) */
.admonition-warning {
  border-left-color: var(--custom-warning);
  background: color-mix(in srgb, var(--custom-warning) 10%, transparent);
}

.admonition-warning .admonition-heading::before {
  content: '⚠️ ';
}

/* Danger (red) */
.admonition-danger {
  border-left-color: var(--custom-danger);
  background: color-mix(in srgb, var(--custom-danger) 10%, transparent);
}

.admonition-danger .admonition-heading::before {
  content: '🚫 ';
}

/* Admonition heading */
.admonition-heading {
  font-weight: var(--custom-font-weight-semibold);
  margin-bottom: 0.5rem;
}
```

**Icon Options**:
- **MVP**: Unicode emojis (no HTTP requests, universal support)
- **Polish**: SVG icons via `::before` with data URIs

**Rationale**:
- Semantic colors improve scannability
- Emojis add personality (appropriate for educational content)
- Subtle background tints (10% opacity) avoid visual clutter

---

### AD-008: Mermaid Diagram Theming Strategy

**Decision**: Configure Mermaid themes in `docusaurus.config.js`, align colors with brand

**Mermaid Config** (docusaurus.config.js):
```javascript
mermaid: {
  theme: {
    light: 'base',  // Neutral light theme
    dark: 'dark'    // Clean dark theme (not forest)
  },
  themeVariables: {
    // Light mode colors
    primaryColor: '#dbeafe',        // Blue 100 (light background)
    primaryTextColor: '#0f172a',    // Slate 900 (dark text)
    primaryBorderColor: '#2563eb',  // Blue 600 (brand blue)
    lineColor: '#94a3b8',           // Slate 400 (connectors)
    secondaryColor: '#bfdbfe',      // Blue 200 (secondary nodes)
    tertiaryColor: '#f1f5f9',       // Slate 100 (backgrounds)

    // Font
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',

    // Shapes
    nodeBorder: '2px',
    mainBkg: '#ffffff',

    // Dark mode (auto-applied by Docusaurus)
    darkMode: true,
    // ... dark mode overrides
  }
}
```

**CSS Enhancements**:
```css
/* Mermaid container styling */
.mermaid {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--custom-bg-surface);
  border: 1px solid var(--custom-border-default);
  border-radius: 8px;
}

/* Ensure diagrams scale on mobile */
.mermaid svg {
  max-width: 100%;
  height: auto;
}
```

**Rationale**:
- Theme config centralizes diagram colors
- Brand-aligned colors improve consistency
- Responsive container prevents overflow

---

### AD-009: Navbar and Footer Enhancement Strategy

**Decision**: Minimal changes to navbar/footer structure, focus on styling consistency

**Navbar Enhancements**:
```css
/* Sticky navbar with subtle shadow */
.navbar {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  background: color-mix(in srgb, var(--custom-bg-base) 95%, transparent);
}

/* Logo styling */
.navbar__logo {
  height: 32px;
  margin-right: 0.5rem;
}

/* Navbar links */
.navbar__link {
  font-weight: var(--custom-font-weight-medium);
  color: var(--custom-text-primary);
  transition: color 0.2s ease;
}

.navbar__link:hover {
  color: var(--custom-primary);
}

/* Theme toggle button */
.navbar__item button[title*='theme'] {
  border-radius: 4px;
  padding: 0.5rem;
  transition: background-color 0.2s ease;
}

.navbar__item button[title*='theme']:hover {
  background: var(--custom-bg-surface);
}
```

**Footer Enhancements**:
```css
.footer {
  background: var(--custom-bg-base);
  border-top: 1px solid var(--custom-border-default);
  padding: 2rem 0;
}

.footer__title {
  font-size: var(--custom-font-size-sm);
  font-weight: var(--custom-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--custom-text-tertiary);
  margin-bottom: 1rem;
}

.footer__link-item {
  color: var(--custom-text-secondary);
  transition: color 0.2s ease;
}

.footer__link-item:hover {
  color: var(--custom-primary);
}
```

**Rationale**:
- Consistency with overall design
- Subtle visual enhancements
- No structural changes needed

---

### AD-010: Performance and Accessibility Strategy

**Decision**: Optimize CSS delivery, ensure WCAG AA compliance

**Performance**:
- Keep custom.css under 50KB (minified)
- Use CSS custom properties (no preprocessing overhead)
- Leverage browser caching (Docusaurus handles this)
- Avoid complex selectors (specificity wars)

**Accessibility**:
```css
/* Focus indicators */
*:focus-visible {
  outline: 2px solid var(--custom-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to content link (for screen readers) */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--custom-primary);
  color: white;
  padding: 0.5rem 1rem;
  z-index: 1000;
  transition: top 0.2s ease;
}

.skip-to-content:focus {
  top: 0;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Color Contrast**:
- All text meets WCAG AA (4.5:1 minimum)
- Use WebAIM Contrast Checker during implementation
- Test with browser DevTools (Lighthouse)

**Rationale**:
- Performance budget prevents bloat
- Accessibility is non-negotiable
- Progressive enhancement approach

---

## File Structure

Implementation will modify these files:

```
physical-ai-book/
└── website/
    ├── docusaurus.config.js         # Mermaid theme config (minimal changes)
    ├── src/
    │   └── css/
    │       └── custom.css           # Main implementation file (all CSS)
    └── static/
        └── fonts/                   # Optional: self-hosted fonts (if needed)
            ├── inter-var.woff2
            └── jetbrains-mono-var.woff2
```

**No New Files Created**: All changes in existing structure

---

## Implementation Phases

### Phase 1: Foundation (CSS Variables & Typography)

**Goal**: Establish design token system and typography

**Tasks**:
1. Define CSS custom properties for colors (light + dark mode)
2. Define typography variables (fonts, sizes, line heights, weights)
3. Set up modular scale and spacing system
4. Map custom properties to Infima variables
5. Apply typography to body, headings, code

**Time Estimate**: 2-3 hours

**Validation**: View any docs page, verify colors and typography applied

---

### Phase 2: Navigation (Sidebar, Navbar, Footer)

**Goal**: Enhance navigation visual hierarchy and usability

**Tasks**:
1. Style sidebar module grouping (background, borders)
2. Style sidebar active state (bold, color, left border)
3. Add sidebar hover states
4. Enhance navbar (shadow, logo, links, theme toggle)
5. Enhance footer (title styling, link colors)
6. Test collapsible sidebar behavior

**Time Estimate**: 2-3 hours

**Validation**: Navigate between modules, verify active states clear

---

### Phase 3: Content Elements (Code, Tables, Admonitions)

**Goal**: Polish content element styling

**Tasks**:
1. Override Prism theme colors (light + dark)
2. Style code block borders, padding, copy button
3. Add optional language badges
4. Style admonitions (colors, icons, borders)
5. Style tables (striped rows, hover, borders)
6. Style blockquotes, images, horizontal rules

**Time Estimate**: 2-3 hours

**Validation**: View docs with code blocks, tables, admonitions

---

### Phase 4: Responsive Design

**Goal**: Optimize for mobile and tablet

**Tasks**:
1. Add mobile breakpoint styles (< 768px)
2. Increase tap targets (buttons, links)
3. Test hamburger menu behavior
4. Add optional mobile bottom navigation bar
5. Test tablet breakpoint (768px - 996px)
6. Verify desktop layout (> 996px)

**Time Estimate**: 2-3 hours

**Validation**: Test on Chrome DevTools responsive mode (5 breakpoints)

---

### Phase 5: Dark Mode Polish

**Goal**: Ensure dark mode quality

**Tasks**:
1. Refine dark mode color variables
2. Test code block readability (dark mode)
3. Test Mermaid diagrams (dark mode)
4. Adjust contrast for WCAG AA compliance
5. Test all admonitions (dark mode)

**Time Estimate**: 1-2 hours

**Validation**: Switch to dark mode, review all pages

---

### Phase 6: Mermaid Diagram Theming

**Goal**: Align Mermaid diagrams with brand colors

**Tasks**:
1. Update `mermaid.themeVariables` in docusaurus.config.js
2. Test all existing Mermaid diagrams (Modules 1-3)
3. Adjust colors for readability (light + dark)
4. Add CSS container styling for diagrams

**Time Estimate**: 1-2 hours

**Validation**: View all chapters with Mermaid diagrams

---

### Phase 7: Accessibility & Performance

**Goal**: Ensure WCAG AA compliance and performance

**Tasks**:
1. Add focus-visible styles for keyboard navigation
2. Test color contrast (WebAIM Contrast Checker)
3. Add skip-to-content link (accessibility)
4. Respect prefers-reduced-motion
5. Run Lighthouse audit (Accessibility, Performance)
6. Minify custom.css (if needed)

**Time Estimate**: 1-2 hours

**Validation**: Lighthouse score 90+ for Accessibility

---

### Phase 8: Build & Validation

**Goal**: Final testing and validation

**Tasks**:
1. Run `npm run build` (verify no errors)
2. Visual regression testing (compare before/after screenshots)
3. Cross-browser testing (Chrome, Firefox, Safari)
4. Mobile device testing (real devices if available)
5. Check all internal links work
6. Verify no content changes

**Time Estimate**: 1-2 hours

**Validation**: Build succeeds, all tests pass

---

## Dependencies

### Phase Dependencies
- **Phase 1 (Foundation)**: No dependencies - start immediately
- **Phase 2 (Navigation)**: Depends on Phase 1 (colors, typography)
- **Phase 3 (Content)**: Depends on Phase 1 (colors, typography)
- **Phase 4 (Responsive)**: Depends on Phases 1-3 (all elements styled)
- **Phase 5 (Dark Mode)**: Depends on Phases 1-3 (all elements styled)
- **Phase 6 (Mermaid)**: Independent (can run parallel with Phase 4-5)
- **Phase 7 (A11y/Perf)**: Depends on all styling complete
- **Phase 8 (Validation)**: Depends on all phases complete

### External Dependencies
- Docusaurus 3.x (existing)
- Prism React Renderer (existing)
- Mermaid theme (existing)
- No new dependencies required

---

## Execution Strategy

### Sequential Single-Author Strategy

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

### Incremental Delivery

1. Foundation + Navigation → Deploy (basic visual upgrade)
2. Add Content Elements → Deploy (polished content)
3. Add Responsive + Dark Mode → Deploy (mobile-friendly)
4. Add Mermaid + Accessibility → Deploy (complete)

**Benefits**: Each phase adds value without breaking previous work

---

## Risk Mitigation

### Risk 1: CSS Specificity Conflicts
**Mitigation**: Use Docusaurus/Infima class names, avoid `!important`, test thoroughly

### Risk 2: Dark Mode Readability Issues
**Mitigation**: Test dark mode separately, use contrast checker, avoid pure black (#000)

### Risk 3: Mobile Layout Breaks
**Mitigation**: Use Docusaurus breakpoints, test on real devices, use DevTools responsive mode

### Risk 4: Mermaid Diagram Visibility
**Mitigation**: Test all diagrams after color changes, adjust theme variables if needed

### Risk 5: Performance Degradation
**Mitigation**: Keep custom.css under 50KB, avoid complex selectors, run Lighthouse audits

---

## Validation Criteria

Docusaurus UI Upgrade is ready for deployment when:

- ✅ All 8 phases complete
- ✅ `npm run build` succeeds with no warnings
- ✅ Visual regression testing passes (all pages look better)
- ✅ Responsive testing passes (5 breakpoints)
- ✅ Dark mode testing passes (all pages readable)
- ✅ Accessibility testing passes (Lighthouse 90+, WCAG AA)
- ✅ Performance testing passes (Lighthouse 90+, < 2s load)
- ✅ Cross-browser testing passes (Chrome, Firefox, Safari)
- ✅ No content changes (Markdown files untouched)
- ✅ No routing changes (all links work)

---

## Notes

- **CSS-Only Implementation**: No JavaScript, no React components, no new dependencies
- **Backward Compatibility**: All existing Docusaurus features preserved
- **Framework Agnostic**: Design system can be adapted to other frameworks later
- **Maintainability**: Clear CSS organization, documented decisions, uses standard practices
- **Progressive Enhancement**: Works without JavaScript, enhanced with modern CSS features

---

## Next Steps

After planning approval (`/sp.plan` complete):

1. Run `/sp.tasks` to generate detailed CSS implementation tasks (50-60 tasks expected)
2. Run `/sp.implement` to execute Phase 1-3 (MVP: Foundation, Navigation, Content)
3. Test and iterate on styling before proceeding to Phase 4-8
4. Deploy incrementally (phase by phase) or all at once (after Phase 8)

---
id: 004-docusaurus-ui-upgrade-research
title: Docusaurus UI Upgrade Research - Design Decisions
created: 2025-12-19
updated: 2025-12-19
---

# Research: Docusaurus UI Upgrade - Design Decisions

## Purpose

This document records key design and technical decisions for the Docusaurus UI upgrade. It serves as the bridge between user requirements (spec.md) and the implementation plan (plan.md).

---

## Research Questions and Decisions

### 1. What color scheme best represents "Physical AI" and robotics?

**Decision**: Use a technology-forward blue/gray palette with electric accent colors

**Rationale**:
- **Primary color**: Deep tech blue (#2563eb or similar) - represents intelligence, technology, trust
- **Secondary**: Mechanical gray (#64748b) - represents physical hardware, robots
- **Accent**: Electric cyan (#06b6d4) - represents AI/future, high contrast
- **Avoid**: Default Docusaurus green (too generic), pure black/white (too stark)

**Color Psychology**:
- Blue: Intelligence, trust, technology (AI)
- Gray: Metal, hardware, engineering (Robots)
- Cyan/Teal: Innovation, energy (Physical AI fusion)

**Inspiration**:
- NVIDIA branding (green + black, but we'll use blue to differentiate)
- Boston Dynamics website (clean white + accent colors)
- ROS documentation (blue theme)

**Implementation**:
```css
:root {
  --ifm-color-primary: #2563eb; /* Blue 600 */
  --ifm-color-secondary: #64748b; /* Slate 500 */
  --ifm-color-accent: #06b6d4; /* Cyan 500 */
}
```

---

### 2. Which typography stack provides best readability for technical content?

**Decision**: Inter for UI text + JetBrains Mono for code

**Rationale**:
- **Inter**: Modern, open-source, optimized for screens, excellent at small sizes, neutral
- **JetBrains Mono**: Designed for code, ligatures, clear letter differentiation (0 vs O, 1 vs l)
- **Fallbacks**: System fonts for performance (San Francisco, Segoe UI, Roboto)

**Alternatives Considered**:
- Open Sans: Too ubiquitous, less modern
- Fira Code: Good for code, but JetBrains Mono has better readability
- Source Sans Pro: Good but Inter is more contemporary

**Line Height Decisions**:
- Body text: 1.7 (comfortable for long reading)
- Headings: 1.2 (tighter, more impact)
- Code: 1.5 (balance readability and density)

**Implementation**:
```css
:root {
  --ifm-font-family-base: 'Inter', -apple-system, system-ui, sans-serif;
  --ifm-font-family-monospace: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  --ifm-line-height-base: 1.7;
}
```

---

### 3. How should the sidebar visually distinguish modules and chapters?

**Decision**: Use background shading for modules, left border for active state, icons for visual anchors

**Rationale**:
- **Module grouping**: Subtle background (#f8fafc for light, #1e293b for dark) creates visual separation
- **Active state**: Bold text + 4px left border in primary color + slightly brighter background
- **Icons**: Optional emoji or SVG icons (📚 for modules, 📖 for chapters) - low-fi but effective
- **Collapsible**: Allow modules to collapse to reduce visual clutter (Docusaurus supports this)

**Visual Hierarchy**:
1. Module headers: Uppercase, smaller font, gray text, background shading
2. Chapter links: Normal case, primary font size, full contrast
3. Active chapter: Bold, colored, border

**Implementation Strategy**:
- Use Docusaurus `.menu` and `.menu__link` classes
- Override with custom CSS
- Add `::before` pseudo-elements for icons (if using CSS icons)

---

### 4. What's the best approach for responsive design with Docusaurus?

**Decision**: Leverage Docusaurus/Infima breakpoints, enhance mobile navigation with bottom prev/next bar

**Rationale**:
- Docusaurus already handles basic responsiveness (sidebar → drawer on mobile)
- **Mobile enhancement**: Add sticky bottom navigation bar with prev/next chapter buttons
- **Tablet**: Keep drawer overlay (don't force sidebar visible)
- **Desktop**: Fixed sidebar (left), content (center), TOC (right if needed)

**Breakpoints** (from Infima):
- Mobile: 320px - 768px
- Tablet: 768px - 996px
- Desktop: 996px+

**Mobile-Specific Enhancements**:
- Larger tap targets (48px minimum for buttons)
- Increased font size (16px minimum to avoid zoom on iOS)
- Simplified navigation (hide less important nav items)

---

### 5. How should code blocks be styled to improve readability?

**Decision**: Custom syntax highlighting with GitHub theme (light) and Nord/Dracula hybrid (dark), prominent copy button, subtle line numbers

**Rationale**:
- **Light mode**: GitHub theme is proven for readability (familiar to developers)
- **Dark mode**: Nord (softer) or adjusted Dracula (high contrast without harshness)
- **Copy button**: Always visible (not just on hover), positioned top-right, icon + text
- **Line numbers**: Enabled for snippets > 10 lines, gray/subdued
- **Language badge**: Show language in top-left (Python, YAML, Bash) for quick identification

**Prism Theme Customization**:
- Override specific token colors for brand consistency
- Ensure code block background contrasts with page background
- Add subtle border to code blocks (not just background color)

**Implementation**:
```css
/* Code block enhancements */
.prism-code {
  background: var(--custom-code-bg);
  border: 1px solid var(--custom-border-color);
  border-radius: 8px;
}

.prism-code .token-line {
  line-height: 1.5;
}
```

---

### 6. Should we add custom icons for admonitions or use default?

**Decision**: Use Feather Icons (SVG) for admonitions, styled with semantic colors

**Rationale**:
- **Feather Icons**: Clean, modern, open-source, lightweight SVG
- **Semantic colors**: Blue (info), yellow (warning), green (tip/success), red (danger)
- **Consistency**: Icons provide visual anchors, help scan content quickly
- **Implementation**: Use CSS `::before` pseudo-elements with SVG data URIs or Unicode emojis as fallback

**Admonition Types**:
- :::tip → 💡 (lightbulb) or Feather "zap" icon, green
- :::info → ℹ️ (info symbol) or Feather "info" icon, blue
- :::warning → ⚠️ (warning triangle) or Feather "alert-triangle" icon, yellow
- :::danger → 🚫 (no entry) or Feather "alert-octagon" icon, red

**Alternative**: Use Unicode emojis for simplicity (no HTTP requests, no custom SVG)

---

### 7. How should Mermaid diagrams be themed to match the new color scheme?

**Decision**: Create custom Mermaid theme variables that match primary/accent colors

**Rationale**:
- Mermaid supports theme customization via `docusaurus.config.js`
- **Light mode**: Use `base` or `neutral` theme, override primary/accent colors
- **Dark mode**: Use `dark` theme (not `forest`), override for better contrast
- **Color consistency**: Diagram colors should align with brand colors (blue, cyan, gray)

**Mermaid Theme Config** (in docusaurus.config.js):
```javascript
mermaid: {
  theme: {
    light: 'base',
    dark: 'dark'
  },
  themeVariables: {
    primaryColor: '#2563eb',      // Brand blue
    primaryTextColor: '#1e293b',  // Dark slate
    primaryBorderColor: '#64748b', // Gray
    lineColor: '#94a3b8',         // Light gray
    secondaryColor: #06b6d4',     // Cyan accent
    tertiaryColor: '#e2e8f0'      // Very light gray
  }
}
```

---

### 8. Should we implement a custom hero section or keep it minimal?

**Decision**: Keep minimal (no custom hero section), focus on documentation readability

**Rationale**:
- **Scope**: This is a documentation site, not a marketing landing page
- **User flow**: Users arrive to read content, not to be impressed by a hero
- **Performance**: Avoid unnecessary images, animations, or complex layouts
- **Docusaurus default**: Homepage already has a clean layout; just improve styling

**Homepage Enhancements** (if needed later):
- Clear "Start Learning" button linking to Module 1
- Brief description of the book (2-3 sentences)
- Module overview cards (optional, low priority)

**Focus**: Prioritize chapter/module readability over homepage design.

---

### 9. How should tables be styled for readability?

**Decision**: Striped rows, hover effects, responsive horizontal scroll on mobile

**Rationale**:
- **Striped rows**: Alternating row colors (#f8fafc light, #1e293b dark) improve readability
- **Hover effect**: Highlight row on hover (subtle background change)
- **Borders**: Use subtle borders (1px solid #e2e8f0), not heavy lines
- **Responsive**: Wrap tables in scroll container on mobile (don't break layout)
- **Header styling**: Bold headers, slightly darker background

**Implementation**:
```css
.markdown table {
  border-collapse: collapse;
  width: 100%;
}

.markdown table tr:nth-child(even) {
  background-color: var(--custom-table-stripe-bg);
}

.markdown table tr:hover {
  background-color: var(--custom-table-hover-bg);
}
```

---

### 10. Should we add any custom animations or keep it static?

**Decision**: Minimal animations for UX feedback only (no decorative animations)

**Rationale**:
- **Performance**: Avoid jank on lower-end devices
- **Distraction**: Animations can distract from content
- **Accessibility**: Respect `prefers-reduced-motion` media query
- **Use cases**: Hover states (buttons, links), focus indicators, drawer/modal transitions

**Allowed Animations**:
- Button hover: Subtle color transition (200ms ease)
- Sidebar toggle: Drawer slide-in (300ms ease-in-out)
- Link underline: Expand from center (150ms ease)
- Focus indicator: Pulse outline (300ms ease)

**Avoid**:
- Background animations
- Parallax effects
- Auto-playing animations
- Page transition effects

---

## Summary of Key Decisions

| Decision ID | Question | Answer |
|-------------|----------|--------|
| D1 | Color scheme | Tech blue (#2563eb) + mechanical gray (#64748b) + electric cyan (#06b6d4) |
| D2 | Typography | Inter (UI) + JetBrains Mono (code), line-height 1.7 for body |
| D3 | Sidebar styling | Background shading for modules, left border for active state, icons for visual anchors |
| D4 | Responsive approach | Leverage Docusaurus breakpoints, add mobile bottom nav bar |
| D5 | Code block styling | GitHub theme (light), Nord/Dracula hybrid (dark), prominent copy button |
| D6 | Admonition icons | Feather Icons (SVG) or Unicode emojis, semantic colors |
| D7 | Mermaid theming | Custom theme variables matching brand colors (blue, cyan, gray) |
| D8 | Hero section | Keep minimal, focus on documentation readability |
| D9 | Table styling | Striped rows, hover effects, responsive scroll |
| D10 | Animations | Minimal (UX feedback only), respect prefers-reduced-motion |

---

## Open Questions

None at this time. All research questions resolved for UI upgrade specification.

---

## References

- User requirements: Docusaurus UI upgrade prompt (visual design, navigation, responsive)
- Docusaurus theming documentation: https://docusaurus.io/docs/styling-layout
- Infima CSS framework: https://infima.dev/
- WCAG 2.1 accessibility guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Feather Icons: https://feathericons.com/
- Inter font: https://rsms.me/inter/
- JetBrains Mono font: https://www.jetbrains.com/lp/mono/

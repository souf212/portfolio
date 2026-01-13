# Design System - Portfolio Professionnel

## Palette Choisie: "Deep Ocean" 🌊

**Justification**: Équilibre parfait entre sophistication et lisibilité. Tons bleus profonds évoquant la technologie et la confiance. Excellent contraste WCAG.

### Couleurs Principales

- **Primary (Accent)**: `#64FFDA` (Teal/Cyan) - Actions, liens, accents
- **Secondary (Cards)**: `#0D1B2A` (Navy très foncé) - Arrière-plans cartes
- **Background Base**: `#0A1628` (Navy profond) - Fond de base
- **Text Primary**: `#E2E8F0` (Gris clair) - Texte principal
- **Text Secondary**: `#94A3B8` (Gris moyen) - Texte secondaire
- **Text Heading**: `#F1F5F9` (Blanc cassé) - Titres
- **Accent Warm**: `#F472B6` (Rose subtil) - Accents chauds optionnels
- **Accent Info**: `#60A5FA` (Bleu clair) - États positifs

### BubbleBackground - Couleurs Adaptées

**Base Gradient**: `#0F172A` → `#1E293B` → `#0F172A` (Slate très foncé, subtil)

**Bulles** (opacités réduites pour subtilité):
- Bubble 1: `40, 150, 255` (Bleu profond) - Opacity: 0.35
- Bubble 2: `139, 92, 246` (Violet subtil) - Opacity: 0.30
- Bubble 3: `59, 130, 246` (Bleu ciel) - Opacity: 0.32
- Bubble 4: `236, 72, 153` (Rose doux) - Opacity: 0.28
- Bubble 5: `34, 197, 94` (Vert émeraude) - Opacity: 0.25
- Bubble Interactive: `99, 102, 241` (Indigo) - Opacity: 0.30

**Mode de mélange**: `screen` (plus subtil que `hard-light`)

### Principes de Motion

- **Background (BubbleBackground)**: Mouvement lent (20-40s), easing smooth
- **UI Interactions**: Rapides (150-250ms), responsive
- **Transitions**: Cubic-bezier(0.4, 0, 0.2, 1) - Material Design standard
- **Micro-interactions**: Subtiles, pas intrusives

### Améliorations Appliquées

✅ Système de couleurs cohérent avec variables CSS
✅ BubbleBackground adapté (couleurs subtiles, opacités réduites)
✅ Overlay de contenu subtil (gradient vertical)
✅ Glassmorphism amélioré (backdrop-filter, blur)
✅ Transitions professionnelles
✅ Contraste WCAG amélioré
✅ Typographie hiérarchique

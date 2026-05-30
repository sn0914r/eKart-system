const styles = `
  <style>
    :root {
      /* Colors */
      --primary: #f7f5f0;
      --on-primary: #2b2622;
      --ink: #f7f5f0;
      --body: #c9c0ad;
      --body-strong: #dad2c1;
      --mute: #aea69c;
      --canvas: #2b2622;
      --canvas-soft: #383330;
      --hairline: #3f3a36;
      
      /* Typography */
      --font-inter: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'DM Mono', ui-monospace, SFMono-Regular, monospace;
      --font-serif: 'Instrument Serif', Georgia, serif;
      
      /* Spacing */
      --spacing-xxs: 2px;
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 10px;
      --spacing-lg: 16px;
      --spacing-xl: 24px;
      --spacing-2xl: 32px;
      --spacing-3xl: 48px;
      --spacing-4xl: 64px;
      --spacing-5xl: 96px;
      
      /* Border Radius */
      --rounded-none: 0px;
      --rounded-xxs: 1px;
      --rounded-xs: 2px;
      --rounded-sm: 3px;
      --rounded-md: 4px;
      --rounded-lg: 6px;
      --rounded-full: 9999px;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      padding: 0;
      background-color: var(--canvas);
      color: var(--body);
      font-family: var(--font-inter);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Typography Classes */
    .display-xl {
      font-family: var(--font-inter);
      font-size: 64px;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -1.6px;
      color: var(--ink);
    }
    
    .display-md {
      font-family: var(--font-inter);
      font-size: 32px;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: -0.8px;
      color: var(--ink);
    }
    
    .display-sm {
      font-family: var(--font-inter);
      font-size: 24px;
      font-weight: 500;
      line-height: 1.33;
      letter-spacing: -0.4px;
      color: var(--ink);
    }

    .body-lg { font-size: 18px; font-weight: 400; line-height: 1.55; }
    .body-md { font-size: 16px; font-weight: 400; line-height: 1.5; }
    .body-md-strong { font-size: 16px; font-weight: 500; line-height: 1.5; color: var(--ink); }
    .body-sm { font-size: 14px; font-weight: 400; line-height: 1.4; color: var(--body); }
    
    .code {
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 400;
      line-height: 1.4;
      color: var(--ink);
    }

    a { text-decoration: none; color: inherit; }

    /* Layout & Utilities */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-xl); }

    .mb-sm { margin-bottom: var(--spacing-sm); }
    .mb-md { margin-bottom: var(--spacing-md); }
    .mb-lg { margin-bottom: var(--spacing-lg); }
    .mb-xl { margin-bottom: var(--spacing-xl); }
    .mb-2xl { margin-bottom: var(--spacing-2xl); }

    .mt-xl { margin-top: var(--spacing-xl); }
    .mt-3xl { margin-top: var(--spacing-3xl); }
    
    .flex { display: flex; }
    .flex-col { display: flex; flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-sm { gap: var(--spacing-sm); }
    .gap-md { gap: var(--spacing-md); }
    .gap-lg { gap: var(--spacing-lg); }
    .text-center { text-align: center; }

    .grid { display: grid; }
    .grid-2 { grid-template-columns: repeat(1, 1fr); gap: var(--spacing-xl); }
    .grid-3 { grid-template-columns: repeat(1, 1fr); gap: var(--spacing-xl); }
    
    @media (min-width: 768px) {
      .grid-2 { grid-template-columns: repeat(2, 1fr); }
      .grid-3 { grid-template-columns: repeat(3, 1fr); }
    }

    /* Components */
    .nav-bar {
      background-color: var(--canvas);
      color: var(--ink);
      padding: var(--spacing-md) var(--spacing-xl);
      border-bottom: 1px solid var(--hairline);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .nav-bar .logo { font-size: 14px; font-weight: 500; }

    .hero-band {
      background-color: var(--canvas);
      padding: var(--spacing-5xl) 0;
    }
    .hero-band h1 { margin: 0 0 var(--spacing-lg) 0; }
    .hero-band p { max-width: 800px; margin: 0 0 var(--spacing-lg) 0; }

    .button-primary {
      background-color: var(--primary);
      color: var(--on-primary);
      font-size: 14px;
      font-weight: 500;
      border-radius: var(--rounded-sm);
      padding: var(--spacing-sm) var(--spacing-lg);
      display: inline-flex;
      align-items: center;
      transition: opacity 0.2s;
      cursor: pointer;
    }
    .button-primary:hover { opacity: 0.9; }

    .button-secondary-ghost {
      background-color: var(--canvas);
      color: var(--ink);
      font-size: 14px;
      font-weight: 500;
      border-radius: var(--rounded-sm);
      padding: var(--spacing-sm) var(--spacing-lg);
      display: inline-flex;
      align-items: center;
      transition: background-color 0.2s;
      cursor: pointer;
    }
    .button-secondary-ghost:hover { background-color: var(--canvas-soft); }

    .card-content {
      background-color: var(--canvas-soft);
      color: var(--ink);
      border: 1px solid var(--hairline);
      border-radius: var(--rounded-md);
      padding: var(--spacing-xl);
      transition: border-color 0.2s;
    }
    .card-content:hover { border-color: var(--mute); }

    .screenshot-card {
      background-color: var(--canvas-soft);
      border: 1px solid var(--hairline);
      border-radius: var(--rounded-lg);
      padding: var(--spacing-md);
    }
    .screenshot-card img {
      width: 100%;
      height: auto;
      border-radius: var(--rounded-md);
      border: 1px solid var(--hairline);
      margin-bottom: var(--spacing-md);
      display: block;
    }

    .list-item {
      padding: var(--spacing-sm) 0;
      display: flex;
      align-items: flex-start;
    }
    .list-item .bullet {
      color: var(--primary);
      margin-right: var(--spacing-md);
      font-weight: 500;
    }

    .badge {
      display: inline-block;
      background-color: var(--canvas);
      border: 1px solid var(--hairline);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--rounded-xs);
      font-family: var(--font-mono);
      font-size: 13px;
      margin-right: var(--spacing-xs);
      margin-bottom: var(--spacing-xs);
      color: var(--ink);
    }

    .section { padding: var(--spacing-4xl) 0; border-top: 1px solid var(--hairline); }
    .section:first-of-type { border-top: none; padding-top: 0; }

    footer {
      background-color: var(--canvas);
      padding: var(--spacing-3xl) 0;
      border-top: 1px solid var(--hairline);
    }
  </style>

`;

document.addEventListener('DOMContentLoaded', () => {
  document.head.insertAdjacentHTML('beforeend', styles);
});

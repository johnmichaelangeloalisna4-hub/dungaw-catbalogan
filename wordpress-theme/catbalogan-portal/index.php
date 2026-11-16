<?php
/**
 * All-in-One Template for Dungaw Catbalogan Tourism Website
 *
 * @package Catbalogan_Portal
 */
$theme_uri = esc_url( get_template_directory_uri() );
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dungaw Catbalogan - Gateway to Samar</title>

  <!-- Google Fonts: Playfair Display, Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    /* ==========================================================
       CSS VARIABLES & RESET (FIGMA EDITORIAL CREAM, TEAL & CORAL)
       ========================================================== */
    :root {
      --navy-dark: #0c2333;
      --navy-deep: #081a26;
      --teal-primary: #0f8b84;
      --teal-hover: #0a726c;
      --teal-light: #22d3ee;
      --cyan-border: #20c4b7;
      --coral-accent: #e57c67;
      --coral-hover: #d46954;
      --text-dark: #1e293b;
      --text-muted: #64748b;
      --text-light: #f1f5f9;
      --bg-white: #ffffff;
      --bg-cream: #faf7f2;
      --bg-cream-alt: #f3ede3;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: var(--font-body);
      color: var(--text-dark);
      background-color: var(--bg-cream);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    section[id] {
      scroll-margin-top: 76px;
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      outline: none;
      transition: all 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideInRight {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }

    /* ==========================================================
       1. NAVBAR
       ========================================================== */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: var(--bg-cream);
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 54px;
      border-bottom: 1px solid rgba(12, 35, 51, 0.08);
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .brand-logo-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .brand-logos-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .brand-official-logo {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--teal-primary);
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      background: #ffffff;
    }

    .brand-circle {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #f7f6f2;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 2px 6px rgba(0, 135, 121, 0.25);
      border: 2px solid var(--teal-primary);
      overflow: hidden;
    }

    .brand-circle img,
    .brand-circle svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-title {
      font-family: var(--font-serif);
      font-size: 20px;
      font-weight: 800;
      color: var(--navy-dark);
      line-height: 1.1;
      letter-spacing: -0.3px;
      white-space: nowrap;
    }

    .brand-sub {
      font-family: var(--font-heading);
      font-size: 9.5px;
      font-weight: 700;
      color: var(--teal-primary);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 2px;
      white-space: nowrap;
    }

    .site-nav {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .site-nav a {
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      padding: 24px 0;
      position: relative;
      white-space: nowrap;
    }

    .site-nav a:hover {
      color: var(--coral-accent);
    }

    .site-nav a.active {
      color: var(--navy-dark);
      font-weight: 700;
    }

    .site-nav a.active::after {
      content: '';
      position: absolute;
      bottom: 16px;
      left: 0;
      right: 0;
      height: 2.5px;
      background: var(--coral-accent);
      border-radius: 2px;
    }

    body.admin-bar .site-header { top: 32px; }
    @media (max-width: 782px) { body.admin-bar .site-header { top: 46px; } }

    .menu-toggle-btn {
      display: none;
      background: transparent;
      font-size: 22px;
      color: var(--navy-dark);
      padding: 6px 10px;
    }

    /* ==========================================================
       2. HERO SECTION
       ========================================================== */
    .hero-section {
      position: relative;
      min-height: calc(100vh - 76px);
      display: flex;
      align-items: center;
      background: #091a24 url('<?php echo $theme_uri; ?>/images/hero.jpg') center center/cover no-repeat;
      overflow: hidden;
      padding: 60px 54px;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg, 
        rgba(8, 25, 36, 0.92) 0%, 
        rgba(8, 25, 36, 0.76) 45%, 
        rgba(8, 25, 36, 0.40) 80%, 
        rgba(8, 25, 36, 0.20) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 720px;
    }

    .hero-pill-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(14, 42, 56, 0.65);
      backdrop-filter: blur(8px);
      border: 1.2px solid rgba(255, 255, 255, 0.25);
      border-radius: 30px;
      padding: 6px 18px;
      color: #ffffff;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      margin-bottom: 22px;
    }

    .hero-pill-badge i {
      font-size: 11px;
      color: #38bdf8;
    }

    .hero-title-box {
      border: 2px solid var(--cyan-border);
      padding: 20px 32px;
      display: inline-block;
      margin-bottom: 24px;
      background: rgba(8, 25, 36, 0.18);
      backdrop-filter: blur(2px);
    }

    .hero-title {
      font-family: var(--font-serif);
      font-size: 66px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.0;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }

    .hero-subtitle {
      font-size: 16.5px;
      color: #e2e8f0;
      max-width: 540px;
      line-height: 1.6;
      margin-bottom: 34px;
      border-left: 2.5px solid var(--coral-accent);
      padding-left: 16px;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-explore {
      background: var(--teal-primary);
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 30px;
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 16px rgba(15, 139, 132, 0.45);
    }

    .btn-explore:hover {
      background: var(--teal-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(15, 139, 132, 0.55);
    }

    .btn-meet {
      background: rgba(12, 35, 51, 0.55);
      backdrop-filter: blur(8px);
      border: 1.2px solid rgba(255, 255, 255, 0.35);
      color: #ffffff;
      padding: 14px 28px;
      border-radius: 30px;
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    }

    .btn-meet:hover {
      background: rgba(12, 35, 51, 0.85);
      border-color: #ffffff;
      transform: translateY(-2px);
    }

    .hero-floating-right {
      position: absolute;
      bottom: 34px;
      right: 54px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }

    .hero-floating-right::before {
      content: '';
      position: absolute;
      width: 240px;
      height: 240px;
      right: -30px;
      bottom: -50px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(229, 124, 103, 0.38) 0%, rgba(229, 124, 103, 0) 70%);
      pointer-events: none;
      z-index: -1;
    }

    .badge-eastern-visayas {
      background: rgba(14, 42, 56, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.22);
      padding: 7px 16px;
      border-radius: 8px;
      color: #e2e8f0;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }

    .badge-eastern-visayas:hover {
      background: rgba(14, 42, 56, 0.98);
      border-color: var(--teal-light);
      color: #ffffff;
    }

    .btn-my-trip {
      background: var(--coral-accent);
      color: #ffffff;
      padding: 11px 22px;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 8px 24px rgba(229, 124, 103, 0.45);
    }

    .btn-my-trip:hover {
      background: var(--coral-hover);
      transform: translateY(-2px);
      box-shadow: 0 10px 28px rgba(229, 124, 103, 0.55);
    }

    .badge-trip-count {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #ffffff;
      color: var(--coral-accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 800;
    }

    /* ==========================================================
       3. SECTIONS CONTENT
       ========================================================== */
    .content-section {
      padding: 90px 54px;
      max-width: 1280px;
      margin: 0 auto;
    }

    .section-band {
      background: var(--bg-cream-alt);
      width: 100%;
    }

    .section-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      color: var(--coral-accent);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .section-title {
      font-family: var(--font-serif);
      font-size: 40px;
      font-weight: 800;
      color: var(--navy-dark);
      letter-spacing: -0.5px;
      line-height: 1.15;
      margin-bottom: 14px;
    }

    .section-subtitle {
      font-size: 16px;
      color: var(--text-muted);
      max-width: 680px;
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .about-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .feature-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 32px 28px;
      transition: all 0.25s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.08);
      border-color: var(--teal-primary);
    }

    .feature-icon-box {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: #e6f6f4;
      color: var(--teal-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 700;
      color: var(--navy-dark);
      margin-bottom: 12px;
    }

    .feature-card p {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .btn-card-link {
      background: transparent;
      color: var(--teal-primary);
      font-size: 13.5px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 0;
      width: fit-content;
    }

    .btn-card-link:hover {
      color: var(--navy-dark);
      gap: 10px;
    }

    /* Spots Filter & Search Toolbar */
    .spots-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 36px;
    }

    .spots-filter-bar {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 8px 20px;
      border-radius: 30px;
      font-size: 13.5px;
      font-weight: 600;
      border: 1.5px solid #cbd5e1;
      background: #ffffff;
      color: #475569;
    }

    .filter-btn.active, .filter-btn:hover {
      background: var(--teal-primary);
      color: #ffffff;
      border-color: var(--teal-primary);
    }

    .spots-search-wrap {
      position: relative;
      width: 260px;
      max-width: 100%;
    }

    .spots-search-wrap i {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      font-size: 13px;
    }

    .spots-search-input {
      width: 100%;
      padding: 9px 14px 9px 38px;
      border: 1.5px solid #cbd5e1;
      border-radius: 30px;
      font-family: inherit;
      font-size: 13.5px;
      background: #ffffff;
      outline: none;
    }

    .spots-search-input:focus {
      border-color: var(--teal-primary);
    }

    .spots-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }

    .spot-card {
      background: #ffffff;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
    }

    .spot-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.08);
    }

    .spot-img-wrap {
      height: 210px;
      position: relative;
      overflow: hidden;
      background: #e2e8f0;
      cursor: pointer;
    }

    .spot-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
      display: block;
    }

    .spot-card:hover .spot-img-wrap img {
      transform: scale(1.05);
    }

    .spot-tag {
      position: absolute;
      top: 14px;
      left: 14px;
      background: var(--teal-primary);
      color: #ffffff;
      padding: 4px 12px;
      border-radius: 14px;
      font-size: 11px;
      font-weight: 700;
    }

    .spot-body {
      padding: 22px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .spot-title {
      font-family: var(--font-heading);
      font-size: 19px;
      font-weight: 800;
      color: var(--navy-dark);
      margin-bottom: 8px;
      cursor: pointer;
    }

    .spot-title:hover {
      color: var(--teal-primary);
    }

    .spot-desc {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .spot-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-add-trip {
      background: #f1f5f9;
      color: var(--navy-dark);
      border-radius: 20px;
      padding: 8px 16px;
      font-size: 12.5px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-add-trip:hover,
    .btn-add-trip.added {
      background: var(--teal-primary);
      color: #ffffff;
    }

    .btn-view-details {
      background: transparent;
      color: var(--teal-primary);
      font-size: 12.5px;
      font-weight: 700;
      padding: 6px 4px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }

    .btn-view-details:hover {
      color: var(--navy-dark);
    }

    .festival-banner {
      background: linear-gradient(135deg, var(--navy-dark) 0%, #0e3b4a 100%);
      border-radius: 20px;
      padding: 54px;
      color: #ffffff;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 40px;
      align-items: center;
    }

    .fest-tag {
      background: var(--coral-accent);
      color: #ffffff;
      font-size: 11px;
      font-weight: 800;
      padding: 5px 14px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .fest-title {
      font-family: var(--font-serif);
      font-size: 38px;
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 14px;
    }

    .fest-desc {
      font-size: 15px;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 24px;
    }

    .festival-img-frame {
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 14px 30px rgba(0,0,0,0.3);
      height: 300px;
      background: #0c2333;
    }

    .festival-img-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .food-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .food-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      overflow: hidden;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .food-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 24px rgba(0,0,0,0.06);
    }

    .food-img {
      height: 170px;
      width: 100%;
      object-fit: cover;
      display: block;
      background: #e2e8f0;
      cursor: pointer;
    }

    .food-info {
      padding: 18px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .food-name {
      font-family: var(--font-heading);
      font-size: 16.5px;
      font-weight: 700;
      color: var(--navy-dark);
      margin-bottom: 6px;
    }

    .food-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 14px;
    }

    /* Sources Attribution Section */
    .sources-section {
      background: var(--bg-cream-alt);
      padding: 50px 54px;
      border-top: 1px solid rgba(12, 35, 51, 0.08);
      border-bottom: 1px solid rgba(12, 35, 51, 0.08);
    }

    .sources-container {
      max-width: 1280px;
      margin: 0 auto;
    }

    .sources-title {
      font-family: var(--font-heading);
      font-size: 20px;
      font-weight: 800;
      color: var(--navy-dark);
      margin-bottom: 16px;
    }

    .sources-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px 20px;
      font-size: 13px;
      color: var(--text-muted);
      list-style-position: inside;
    }

    .sources-grid li {
      margin-bottom: 4px;
    }

    .site-footer {
      background: var(--navy-dark);
      color: #ffffff;
      padding: 60px 54px 30px 54px;
    }

    .footer-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding-bottom: 36px;
      margin-bottom: 30px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .footer-brand .brand-title {
      color: #ffffff;
    }

    .footer-links {
      display: flex;
      gap: 28px;
      flex-wrap: wrap;
    }

    .footer-links a {
      font-size: 14px;
      color: #cbd5e1;
    }

    .footer-links a:hover {
      color: var(--teal-light);
    }

    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: #94a3b8;
      flex-wrap: wrap;
      gap: 12px;
    }

    /* ==========================================================
       MODALS, DRAWER & TOAST
       ========================================================== */
    .trip-drawer-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(4px);
      z-index: 9999;
      display: none;
      justify-content: flex-end;
    }

    .trip-drawer-backdrop.open {
      display: flex;
      animation: fadeIn 0.2s ease;
    }

    .trip-drawer {
      width: 440px;
      max-width: 92vw;
      background: #ffffff;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-shadow: -8px 0 24px rgba(0,0,0,0.25);
      animation: slideInRight 0.25s ease;
    }

    .drawer-header {
      padding: 20px 24px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .drawer-header h3 {
      font-family: var(--font-heading);
      font-size: 19px;
      font-weight: 800;
      color: var(--navy-dark);
    }

    .drawer-close-btn {
      background: transparent;
      font-size: 24px;
      color: #64748b;
      line-height: 1;
      padding: 4px 8px;
    }

    .drawer-close-btn:hover {
      color: var(--navy-dark);
    }

    .drawer-body {
      padding: 22px 24px;
      flex: 1;
      overflow-y: auto;
    }

    .drawer-list-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .btn-clear-all {
      background: transparent;
      color: #ef4444;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 6px;
    }

    .btn-clear-all:hover {
      background: #fef2f2;
    }

    .saved-trip-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 14px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 8px;
      font-size: 13.5px;
      font-weight: 600;
    }

    .remove-trip-btn {
      background: transparent;
      color: #ef4444;
      font-size: 16px;
      padding: 2px 6px;
    }

    .drawer-form {
      margin-top: 20px;
      padding-top: 18px;
      border-top: 1px solid #e2e8f0;
    }

    .drawer-field {
      margin-bottom: 12px;
    }

    .drawer-field label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: var(--navy-dark);
      margin-bottom: 4px;
    }

    .drawer-field input {
      width: 100%;
      padding: 9px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13.5px;
      outline: none;
    }

    .drawer-field input:focus {
      border-color: var(--teal-primary);
    }

    .drawer-footer {
      padding: 16px 24px;
      border-top: 1px solid #e2e8f0;
      background: #f8fafc;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .btn-submit-trip {
      width: 100%;
      background: var(--teal-primary);
      color: #ffffff;
      padding: 12px;
      border-radius: 24px;
      font-size: 14px;
      font-weight: 700;
    }

    .btn-submit-trip:hover {
      background: var(--teal-hover);
    }

    .btn-download-trip {
      width: 100%;
      background: #ffffff;
      color: var(--navy-dark);
      border: 1.5px solid #cbd5e1;
      padding: 9px;
      border-radius: 24px;
      font-size: 13px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .btn-download-trip:hover {
      border-color: var(--teal-primary);
      color: var(--teal-primary);
    }

    .inquiry-success-box {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      color: #065f46;
      border-radius: 10px;
      padding: 14px;
      font-size: 13px;
      margin-top: 14px;
      display: none;
    }

    .inquiry-success-box.show {
      display: block;
    }

    /* Modals */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(8, 25, 36, 0.72);
      backdrop-filter: blur(4px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-backdrop.open {
      display: flex;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: #ffffff;
      border-radius: 16px;
      max-width: 560px;
      width: 100%;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .modal-hero-img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      display: block;
      background: #e2e8f0;
    }

    .modal-meta-list {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 14px 16px;
      margin-top: 16px;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .feature-card.clickable-card {
      cursor: pointer;
    }

    .modal-items-section {
      margin-top: 16px;
    }

    .modal-items-heading {
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--teal-primary);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .modal-items-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .modal-item-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      background: #faf7f2;
      border: 1px solid #e7e0d4;
      border-radius: 12px;
      transition: border-color 0.15s ease;
    }

    .modal-item-row:hover {
      border-color: var(--teal-primary);
    }

    .modal-item-thumb {
      width: 62px;
      height: 62px;
      border-radius: 10px;
      object-fit: cover;
      flex-shrink: 0;
      background: #e2e8f0;
    }

    .modal-item-icon {
      width: 62px;
      height: 62px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
      border: 1px solid rgba(12, 35, 51, 0.08);
    }

    .modal-item-info {
      flex: 1;
      min-width: 0;
    }

    .modal-item-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--navy-dark);
      margin: 0 0 3px;
    }

    .modal-item-desc {
      font-size: 12.5px;
      color: #475569;
      margin: 0 0 7px;
      line-height: 1.45;
    }

    .modal-item-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }

    .modal-item-btn {
      font-size: 11.5px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 999px;
      border: 1px solid var(--teal-primary);
      background: #ffffff;
      color: var(--teal-primary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }

    .modal-item-btn:hover,
    .modal-item-btn.added {
      background: var(--teal-primary);
      color: #ffffff;
    }

    .modal-item-map-btn {
      font-size: 11.5px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 999px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #334155;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }

    .modal-item-map-btn:hover {
      border-color: var(--navy-dark);
      color: var(--navy-dark);
    }

    .schedule-item {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid #f1f5f9;
      font-size: 14px;
    }

    .schedule-item:last-child {
      border-bottom: none;
    }

    /* ==========================================================
       STREET VIEW / 360 VIEWPOINT EXPLORER
       ========================================================== */
    .btn-street-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(12, 35, 51, 0.85);
      backdrop-filter: blur(6px);
      color: #ffffff;
      border: 1px solid rgba(34, 211, 238, 0.55);
      padding: 5px 11px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      z-index: 2;
    }

    .btn-street-badge:hover {
      background: var(--teal-primary);
      border-color: #ffffff;
    }

    .food-img-wrap {
      position: relative;
      height: 170px;
      overflow: hidden;
      background: #e2e8f0;
    }

    .food-img-wrap .food-img {
      height: 100%;
    }

    .food-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .sv-modal {
      position: fixed;
      inset: 0;
      z-index: 100000;
      background: #06131c;
      display: none;
      flex-direction: column;
      user-select: none;
    }

    .sv-modal.open {
      display: flex;
      animation: fadeIn 0.2s ease;
    }

    .sv-topbar {
      background: #0c2333;
      border-bottom: 1px solid rgba(255, 255, 255, 0.14);
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      color: #ffffff;
    }

    .sv-topbar-info {
      display: flex;
      flex-direction: column;
      min-width: 200px;
    }

    .sv-info-eyebrow {
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--teal-light);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sv-info-title {
      font-family: var(--font-serif);
      font-size: 19px;
      font-weight: 800;
      line-height: 1.2;
      color: #ffffff;
    }

    .sv-info-sub {
      font-size: 12px;
      color: #cbd5e1;
    }

    .sv-mode-tabs {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(255, 255, 255, 0.08);
      padding: 4px;
      border-radius: 30px;
      flex-wrap: wrap;
    }

    .sv-mode-btn {
      background: transparent;
      color: #cbd5e1;
      padding: 7px 14px;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .sv-mode-btn.active {
      background: var(--teal-primary);
      color: #ffffff;
    }

    .sv-mode-btn:hover:not(.active) {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
    }

    .sv-top-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sv-hud-btn {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      padding: 8px 13px;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .sv-hud-btn:hover {
      background: var(--teal-primary);
      border-color: var(--teal-primary);
    }

    .sv-close-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sv-close-btn:hover {
      background: var(--coral-accent);
      border-color: var(--coral-accent);
    }

    /* Main Split Stage */
    .sv-stage {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 0;
      position: relative;
      background: #050f17;
    }

    .sv-stage.mode-map {
      grid-template-columns: 1fr;
    }
    .sv-stage.mode-map .sv-view-pane {
      display: none;
    }

    .sv-stage.mode-street .sv-map-pane,
    .sv-stage.mode-photo .sv-map-pane {
      display: none;
    }
    .sv-stage.mode-street,
    .sv-stage.mode-photo {
      grid-template-columns: 1fr;
    }

    .sv-map-pane {
      position: relative;
      border-right: 1px solid rgba(255, 255, 255, 0.14);
      background: #e2e8f0;
      min-height: 0;
    }

    .sv-iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }

    .sv-map-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 4;
      background: rgba(12, 35, 51, 0.88);
      color: #ffffff;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      pointer-events: none;
    }

    .sv-view-pane {
      position: relative;
      min-height: 0;
      display: flex;
      flex-direction: column;
      background: #050f17;
    }

    .sv-viewport {
      position: relative;
      flex: 1;
      overflow: hidden;
      cursor: grab;
      touch-action: none;
      background: radial-gradient(circle at center, #0e293b 0%, #050f17 100%);
    }

    .sv-viewport:active {
      cursor: grabbing;
    }

    .sv-canvas-img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 125%;
      height: 125%;
      object-fit: cover;
      transform-origin: center center;
      will-change: transform;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .sv-gsv-wrap {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      display: none;
    }

    .sv-gsv-wrap.active {
      display: block;
    }

    .sv-viewport.hidden {
      display: none;
    }

    /* Ground Navigation Controls */
    .sv-ground-nav {
      position: absolute;
      bottom: 18px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .sv-road-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .sv-chevron-btn {
      background: rgba(12, 35, 51, 0.82);
      backdrop-filter: blur(8px);
      border: 1.5px solid rgba(255, 255, 255, 0.6);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 30px;
      font-size: 12.5px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
      white-space: nowrap;
    }

    .sv-chevron-btn:hover:not(:disabled) {
      background: var(--teal-primary);
      border-color: #ffffff;
      transform: translateY(-2px);
    }

    .sv-chevron-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .sv-turn-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(12, 35, 51, 0.82);
      border: 1px solid rgba(255, 255, 255, 0.4);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }

    .sv-turn-btn:hover {
      background: var(--coral-accent);
    }

    .sv-hud-right {
      position: absolute;
      right: 14px;
      bottom: 18px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .sv-compass {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(12, 35, 51, 0.85);
      border: 1.5px solid rgba(255, 255, 255, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
    }

    .sv-compass-needle {
      width: 4px;
      height: 24px;
      position: relative;
      transition: transform 0.12s ease-out;
    }

    .sv-compass-needle::before {
      content: '';
      position: absolute;
      top: 0;
      left: -3px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 12px solid var(--coral-accent);
    }

    .sv-compass-needle::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -3px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 12px solid #cbd5e1;
    }

    .sv-zoom-stack {
      display: flex;
      flex-direction: column;
      background: rgba(12, 35, 51, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      overflow: hidden;
    }

    .sv-zoom-btn {
      width: 38px;
      height: 32px;
      background: transparent;
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .sv-zoom-btn:last-child {
      border-bottom: none;
    }

    .sv-zoom-btn:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .sv-zoom-readout {
      font-size: 11px;
      font-weight: 700;
      color: #e2e8f0;
      background: rgba(12, 35, 51, 0.82);
      padding: 3px 8px;
      border-radius: 10px;
    }

    .sv-hint-pill {
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 4;
      background: rgba(12, 35, 51, 0.78);
      color: #e2e8f0;
      font-size: 11.5px;
      padding: 5px 14px;
      border-radius: 20px;
      pointer-events: none;
      white-space: nowrap;
      max-width: 92%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .sv-strip {
      background: #081822;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding: 10px 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      overflow-x: auto;
    }

    .sv-thumb {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px 6px 6px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.06);
      border: 1.5px solid transparent;
      color: #cbd5e1;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .sv-thumb img {
      width: 42px;
      height: 32px;
      object-fit: cover;
      border-radius: 6px;
    }

    .sv-thumb.active {
      background: rgba(15, 139, 132, 0.28);
      border-color: var(--teal-light);
      color: #ffffff;
    }

    @media (max-width: 900px) {
      .sv-stage {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
      }
      .sv-map-pane {
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      }
      .sv-topbar {
        padding: 10px 12px;
      }
      .sv-info-title {
        font-size: 16px;
      }
    }

    .toast-notice {
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: var(--navy-dark);
      color: #ffffff;
      padding: 12px 22px;
      border-radius: 30px;
      font-size: 13.5px;
      font-weight: 600;
      z-index: 10001;
      opacity: 0;
      pointer-events: none;
      transition: all 0.25s ease;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      border: 1px solid rgba(34, 211, 238, 0.35);
    }

    .toast-notice.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    /* ==========================================================
       RESPONSIVE BREAKPOINTS
       ========================================================== */
    @media (max-width: 1180px) {
      .site-header { padding: 0 28px; }
      .site-nav { gap: 18px; }
      .site-nav a { font-size: 13.5px; }
    }

    @media (max-width: 992px) {
      .site-header { padding: 0 24px; }
      .site-nav {
        display: none;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        position: absolute;
        top: 76px;
        left: 0;
        right: 0;
        background: var(--bg-cream);
        padding: 12px 24px 20px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        border-top: 1px solid rgba(12, 35, 51, 0.08);
      }
      .site-nav.mobile-open {
        display: flex;
      }
      .site-nav a {
        width: 100%;
        padding: 12px 0;
        border-bottom: 1px solid #f8fafc;
      }
      .site-nav a.active::after {
        bottom: 4px;
        width: 40px;
        right: auto;
      }
      body.admin-bar .site-header { top: 32px; }
    @media (max-width: 782px) { body.admin-bar .site-header { top: 46px; } }

    .menu-toggle-btn { display: block; }
      .hero-section { padding: 60px 24px 130px; }
      .hero-title { font-size: 42px; }
      .hero-title-box { padding: 18px 24px; }
      .about-cards-grid, .spots-grid, .food-grid, .sources-grid { grid-template-columns: 1fr; }
      .festival-banner { grid-template-columns: 1fr; padding: 32px; }
      .hero-floating-right { right: 24px; bottom: 24px; }
      .content-section, .sources-section { padding: 60px 24px; }
      .spots-search-wrap { width: 100%; }
    }
  </style>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- ========================================================
       1. HEADER WITH DUAL LOGOS
       ======================================================== -->
  <header class="site-header">
    <a href="#home" class="brand-logo-wrap">
      <div class="brand-logos-container">
        <img src="<?php echo $theme_uri; ?>/images/official_logo.jpg" alt="Catbalogan Official Logo" class="brand-official-logo">
        <div class="brand-circle">
          <img src="<?php echo $theme_uri; ?>/images/dungaw_logo.png" alt="Dungaw Catbalogan Logo">
        </div>
      </div>
      <div class="brand-text">
        <span class="brand-title">Dungaw Catbalogan</span>
        <span class="brand-sub">CITY TOURISM</span>
      </div>
    </a>

    <!-- Navigation Menu -->
    <nav class="site-nav" id="siteNav">
      <a href="#home" class="active">Home</a>
      <a href="#about">About Catbalogan</a>
      <a href="#spots">Tourist Spots</a>
      <a href="#culture">Culture &amp; Festivals</a>
      <a href="#food">Food &amp; Delicacies</a>
      <a href="#products">Local Products</a>
    </nav>

    <button class="menu-toggle-btn" id="menuToggleBtn" aria-label="Toggle navigation" onclick="toggleMobileNav()">
      <i class="fa-solid fa-bars" id="menuToggleIcon"></i>
    </button>
  </header>

  <!-- ========================================================
       2. HERO SECTION
       ======================================================== -->
  <section id="home" class="hero-section">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="hero-pill-badge">
        <i class="fa-solid fa-location-dot"></i>
        <span>GATEWAY TO SAMAR</span>
      </div>

      <div class="hero-title-box">
        <h1 class="hero-title">
          DISCOVER THE<br>
          SOUL OF<br>
          CATBALOGAN
        </h1>
      </div>

      <p class="hero-subtitle">
        Where island beauty, rich traditions, and unforgettable flavors meet.
      </p>

      <div class="hero-actions">
        <button class="btn-explore" onclick="exploreCatbalogan()">
          EXPLORE DESTINATIONS <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button class="btn-meet" onclick="discoverCulture()">
          DISCOVER OUR CULTURE <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <div class="hero-floating-right">
      <button class="badge-eastern-visayas" onclick="openRegionModal()" title="View location &amp; travel guide">
        <i class="fa-solid fa-compass" style="color: var(--teal-light);"></i> EASTERN VISAYAS
      </button>
      <button class="btn-my-trip" onclick="toggleTripDrawer()">
        <i class="fa-regular fa-bookmark"></i>
        <span>My Trip</span>
        <span class="badge-trip-count" id="tripCountBadge">0</span>
      </button>
    </div>
  </section>

  <!-- ========================================================
       3. ABOUT CATBALOGAN SECTION
       ======================================================== -->
  <section id="about" class="content-section">
    <span class="section-badge">GATEWAY TO SAMAR</span>
    <h2 class="section-title">The City of Captivating Colors</h2>
    <p class="section-subtitle">
      Nestled along the shores of Maqueda Bay, Catbalogan City serves as the historic capital and vibrant cultural heart of Samar province.
    </p>

    <div class="about-cards-grid">
      <div class="feature-card">
        <div>
          <div class="feature-icon-box"><i class="fa-solid fa-landmark"></i></div>
          <h3>Historic Capital</h3>
          <p>Founded in 1596, Catbalogan holds four centuries of rich history, Spanish-era architecture, and heroic heritage honored by the city's iconic Obelisk.</p>
        </div>
        <button class="btn-card-link" onclick="openDetailModal('historic-capital')">
          Read History <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="feature-card">
        <div>
          <div class="feature-icon-box"><i class="fa-solid fa-water"></i></div>
          <h3>Coastal Gateway</h3>
          <p>A flourishing marine crossroads flanked by serene sea vistas, home to the country's longest wooden boardwalks and crystal island escapes.</p>
        </div>
        <button class="btn-card-link" onclick="openDetailModal('coastal-gateway')">
          Coastal Guide <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="feature-card">
        <div>
          <div class="feature-icon-box"><i class="fa-solid fa-masks-theater"></i></div>
          <h3>Vibrant Culture</h3>
          <p>Celebrated across the Philippines for the renowned Manaragat Festival, exquisite Lara Samar woven handicrafts, and world-class culinary treasures.</p>
        </div>
        <button class="btn-card-link" onclick="openDetailModal('vibrant-culture')">
          Explore Culture <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- ========================================================
       4. TOURIST SPOTS SECTION
       ======================================================== -->
  <div class="section-band">
    <section id="spots" class="content-section">
      <span class="section-badge">DESTINATIONS</span>
      <h2 class="section-title">Explore Samar's Premier Spots</h2>
      <p class="section-subtitle">
        From serene beaches and multi-tiered rainforest waterfalls to heritage monuments, choose your adventure and add it to your trip.
      </p>

      <div class="spots-toolbar">
        <div class="spots-filter-bar">
          <button class="filter-btn active" data-filter="all" onclick="filterSpots('all', event)">All Destinations</button>
          <button class="filter-btn" data-filter="island" onclick="filterSpots('island', event)">Islands &amp; Beaches</button>
          <button class="filter-btn" data-filter="nature" onclick="filterSpots('nature', event)">Nature &amp; Falls</button>
          <button class="filter-btn" data-filter="heritage" onclick="filterSpots('heritage', event)">Historical &amp; Heritage</button>
        </div>
        <div class="spots-search-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="spotsSearchInput" class="spots-search-input" placeholder="Search destinations..." oninput="searchSpots()">
        </div>
      </div>

      <div class="spots-grid" id="spotsGrid">
        <!-- Spot 1: Buri Island -->
        <div class="spot-card" data-category="island">
          <div class="spot-img-wrap" onclick="openStreetView('buri')">
            <img src="<?php echo $theme_uri; ?>/images/buri.jpg" alt="Buri Island Boardwalk">
            <span class="spot-tag">Island</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('buri')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('buri')">Buri Island Boardwalk</h3>
              <p class="spot-desc">Experience the longest wooden footbridge in the country, turquoise seas, and golden sunset panoramas over Samar Sea.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="Buri Island Boardwalk" onclick="addToTrip('Buri Island Boardwalk')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('buri')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Spot 2: Bangon Falls -->
        <div class="spot-card" data-category="nature">
          <div class="spot-img-wrap" onclick="openStreetView('bangon')">
            <img src="<?php echo $theme_uri; ?>/images/bangon.jpg" alt="Bangon Falls">
            <span class="spot-tag">Waterfall</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('bangon')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('bangon')">Bangon Falls</h3>
              <p class="spot-desc">A magnificent cascade tucked in deep virgin rainforest with natural rock pools perfect for eco-trekkers.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="Bangon Falls" onclick="addToTrip('Bangon Falls')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('bangon')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Spot 3: The Obelisk -->
        <div class="spot-card" data-category="heritage">
          <div class="spot-img-wrap" onclick="openStreetView('obelisk')">
            <img src="<?php echo $theme_uri; ?>/images/obelisk.jpg" alt="The Obelisk">
            <span class="spot-tag">Heritage</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('obelisk')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('obelisk')">The Obelisk</h3>
              <p class="spot-desc">Towering monument at the city square illustrating four defining eras of Samar's bravery and heritage.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="The Obelisk" onclick="addToTrip('The Obelisk')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('obelisk')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Spot 4: Pieta Park -->
        <div class="spot-card" data-category="heritage">
          <div class="spot-img-wrap" onclick="openStreetView('pieta')">
            <img src="<?php echo $theme_uri; ?>/images/pieta.jpg" alt="Pieta Park">
            <span class="spot-tag">Heritage</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('pieta')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('pieta')">Pieta Park</h3>
              <p class="spot-desc">Historic shrine adjoining the Cathedral grounds erected in solemn remembrance of local maritime history.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="Pieta Park" onclick="addToTrip('Pieta Park')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('pieta')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Spot 5: Darahuway Guti Island -->
        <div class="spot-card" data-category="island">
          <div class="spot-img-wrap" onclick="openStreetView('darahuway')">
            <img src="<?php echo $theme_uri; ?>/images/darahuway.jpg" alt="Darahuway Guti Island">
            <span class="spot-tag">Island</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('darahuway')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('darahuway')">Darahuway Guti Island</h3>
              <p class="spot-desc">Pristine coral sanctuaries, secluded coves, and scenic trekking bluffs overlooking Eastern Visayas waters.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="Darahuway Guti Island" onclick="addToTrip('Darahuway Guti Island')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('darahuway')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Spot 6: Maqueda Bay Sunset -->
        <div class="spot-card" data-category="nature">
          <div class="spot-img-wrap" onclick="openStreetView('maqueda')">
            <img src="<?php echo $theme_uri; ?>/images/maqueda.jpg" alt="Maqueda Bay Sunset">
            <span class="spot-tag">Scenic Vista</span>
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('maqueda')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="spot-body">
            <div>
              <h3 class="spot-title" onclick="openDetailModal('maqueda')">Maqueda Bay Sunset</h3>
              <p class="spot-desc">Renowned as one of the most picturesque sunset viewing spots in the Visayas along the Catbalogan boulevard.</p>
            </div>
            <div class="spot-actions">
              <button class="btn-add-trip" data-spot="Maqueda Bay Sunset" onclick="addToTrip('Maqueda Bay Sunset')">
                <i class="fa-solid fa-plus"></i> Add to My Trip
              </button>
              <button class="btn-view-details" onclick="openDetailModal('maqueda')">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p id="noSpotsMessage" style="display: none; text-align: center; color: var(--text-muted); padding: 36px 0; font-size: 15px;">
        No destinations match your search. <button class="btn-card-link" style="display:inline;" onclick="resetSpotsFilter()">Show all destinations</button>
      </p>
    </section>
  </div>

  <!-- ========================================================
       5. CULTURE & FESTIVALS SECTION
       ======================================================== -->
  <section id="culture" class="content-section">
    <div class="festival-banner">
      <div>
        <span class="fest-tag">Annual Celebration &bull; August</span>
        <h2 class="fest-title">Manaragat Festival</h2>
        <p class="fest-desc">
          Celebrated every August in devotion to St. Bartholomew, the Manaragat Festival pays homage to the fishermen of Samar through grand oceanic street dancing, luminous marine life costumes, and exuberant musical pageantry.
        </p>
        <div class="hero-actions">
          <button class="btn-explore" onclick="toggleScheduleModal()">
            View Festival Schedule <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="btn-meet" data-spot="Manaragat Festival (August)" onclick="addToTrip('Manaragat Festival (August)')">
            <i class="fa-solid fa-bookmark"></i> Save to My Trip
          </button>
        </div>
      </div>

      <div class="festival-img-frame">
        <img src="<?php echo $theme_uri; ?>/images/manaragat.jpg" alt="Manaragat Festival">
      </div>
    </div>
  </section>

  <!-- ========================================================
       6. FOOD & DELICACIES SECTION
       ======================================================== -->
  <div class="section-band">
    <section id="food" class="content-section">
      <span class="section-badge">CULINARY HERITAGE</span>
      <h2 class="section-title">Authentic Samar Flavors</h2>
      <p class="section-subtitle">
        Taste the rich culinary traditions passed down through generations in Catbalogan kitchens.
      </p>

      <div class="food-grid">
        <div class="food-card">
          <div class="food-img-wrap" onclick="openStreetView('tamalos')">
            <img src="<?php echo $theme_uri; ?>/images/tamalos.jpg" alt="Tamalos" class="food-img">
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('tamalos')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="food-info">
            <div>
              <h3 class="food-name">Tamalos</h3>
              <p class="food-desc">Samar's signature delicacy: tender pork stewed in rich, spicy peanut sauce inside fragrant banana leaves.</p>
            </div>
            <div class="food-actions">
              <button class="btn-card-link" onclick="openDetailModal('tamalos')">
                Where to Taste <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="btn-card-link" style="color: var(--coral-accent);" onclick="openStreetView('tamalos')">
                <i class="fa-solid fa-street-view"></i> Street View
              </button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img-wrap" onclick="openStreetView('crabs')">
            <img src="<?php echo $theme_uri; ?>/images/crabs.jpg" alt="Maqueda Blue Crabs" class="food-img">
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('crabs')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="food-info">
            <div>
              <h3 class="food-name">Maqueda Blue Crabs</h3>
              <p class="food-desc">Freshly harvested sweet crabs, prawns, and reef fish straight from the coastal fishing bancas.</p>
            </div>
            <div class="food-actions">
              <button class="btn-card-link" onclick="openDetailModal('crabs')">
                Where to Taste <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="btn-card-link" style="color: var(--coral-accent);" onclick="openStreetView('crabs')">
                <i class="fa-solid fa-street-view"></i> Street View
              </button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img-wrap" onclick="openStreetView('danggit')">
            <img src="<?php echo $theme_uri; ?>/images/danggit.jpg" alt="Samar Danggit &amp; Tapa" class="food-img">
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('danggit')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="food-info">
            <div>
              <h3 class="food-name">Samar Danggit &amp; Tapa</h3>
              <p class="food-desc">Artisanal sun-dried fish and cured specialties renowned throughout Eastern Visayas.</p>
            </div>
            <div class="food-actions">
              <button class="btn-card-link" onclick="openDetailModal('danggit')">
                Where to Buy <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="btn-card-link" style="color: var(--coral-accent);" onclick="openStreetView('danggit')">
                <i class="fa-solid fa-street-view"></i> Street View
              </button>
            </div>
          </div>
        </div>

        <div class="food-card">
          <div class="food-img-wrap" onclick="openStreetView('corioso')">
            <img src="<?php echo $theme_uri; ?>/images/corioso.jpg" alt="Corioso &amp; Pastries" class="food-img">
            <button type="button" class="btn-street-badge" onclick="event.stopPropagation(); openStreetView('corioso')">
              <i class="fa-solid fa-street-view"></i> 360&deg; View
            </button>
          </div>
          <div class="food-info">
            <div>
              <h3 class="food-name">Corioso &amp; Pastries</h3>
              <p class="food-desc">Heritage butter cookies and sweet roscas crafted by legacy Catbalogan family bakeshops.</p>
            </div>
            <div class="food-actions">
              <button class="btn-card-link" onclick="openDetailModal('corioso')">
                Where to Buy <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="btn-card-link" style="color: var(--coral-accent);" onclick="openStreetView('corioso')">
                <i class="fa-solid fa-street-view"></i> Street View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ========================================================
       7. LOCAL PRODUCTS SECTION
       ======================================================== -->
  <section id="products" class="content-section">
    <span class="section-badge">CRAFTS &amp; SOUVENIRS</span>
    <h2 class="section-title">Lara Samar &amp; Handcrafted Goods</h2>
    <p class="section-subtitle">
      Bring home a piece of Catbalogan with vibrant tikog grass weavings and community-made craft pieces.
    </p>

    <div class="about-cards-grid">
      <div class="feature-card clickable-card" onclick="openDetailModal('lara-samar')">
        <div>
          <div class="feature-icon-box" style="background: #fdf2f8; color: #db2777;"><i class="fa-solid fa-basket-shopping"></i></div>
          <h3>Lara Samar Woven Mats</h3>
          <p>World-famous handwoven banig mats turned into modern designer bags, clutches, and home d&eacute;cor made by Samar women weavers.</p>
        </div>
        <button class="btn-card-link" onclick="event.stopPropagation(); openDetailModal('lara-samar')">
          View Woven Items <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="feature-card clickable-card" onclick="openDetailModal('pasalubong')">
        <div>
          <div class="feature-icon-box" style="background: #eff6ff; color: #2563eb;"><i class="fa-solid fa-gift"></i></div>
          <h3>Pasalubong Gift Packs</h3>
          <p>Curated boxes of Catbalogan heritage cookies, dried seafood, and regional delicacies ready for travelers to take home.</p>
        </div>
        <button class="btn-card-link" onclick="event.stopPropagation(); openDetailModal('pasalubong')">
          View Included Foods <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div class="feature-card clickable-card" onclick="openDetailModal('shellcraft')">
        <div>
          <div class="feature-icon-box" style="background: #f0fdf4; color: #16a34a;"><i class="fa-solid fa-hand-holding-heart"></i></div>
          <h3>Community Shellcraft</h3>
          <p>Sustainable coastal handicrafts created by island coastal communities supporting livelihood initiatives.</p>
        </div>
        <button class="btn-card-link" onclick="event.stopPropagation(); openDetailModal('shellcraft')">
          View Artisan Crafts <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>



  <!-- ========================================================
       9. FOOTER
       ======================================================== -->
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-logos-container">
          <img src="<?php echo $theme_uri; ?>/images/official_logo.jpg" alt="Catbalogan Official Logo" class="brand-official-logo">
          <div class="brand-circle">
            <img src="<?php echo $theme_uri; ?>/images/dungaw_logo.png" alt="Dungaw Catbalogan Logo">
          </div>
        </div>
        <div class="brand-text">
          <span class="brand-title">Dungaw Catbalogan</span>
          <span class="brand-sub" style="color: #22d3ee;">CITY TOURISM</span>
        </div>
      </div>

      <div class="footer-links">
        <a href="#about">About Catbalogan</a>
        <a href="#spots">Tourist Spots</a>
        <a href="#culture">Festivals</a>
        <a href="#food">Delicacies</a>
        <a href="#products">Products</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <?php echo date('Y'); ?> Dungaw Catbalogan Tourism Office. Province of Samar, Philippines.</p>
      <p>Gateway to Samar &bull; City of Captivating Colors</p>
    </div>
  </footer>

  <!-- ========================================================
       10. INTERACTIVE "MY TRIP" DRAWER
       ======================================================== -->
  <div class="trip-drawer-backdrop" id="tripDrawerBackdrop" onclick="closeTripDrawerOnOutside(event)">
    <div class="trip-drawer" id="tripDrawer">
      <div class="drawer-header">
        <h3><i class="fa-solid fa-bookmark" style="color: var(--teal-primary); margin-right: 8px;"></i>My Trip Planner</h3>
        <button class="drawer-close-btn" aria-label="Close drawer" onclick="toggleTripDrawer()">&times;</button>
      </div>
      <div class="drawer-body">
        <div class="drawer-list-header">
          <p style="font-size: 13.5px; color: #64748b;">Saved items for your Catbalogan trip:</p>
          <button type="button" class="btn-clear-all" id="clearTripsBtn" onclick="clearAllTrips()">Clear All</button>
        </div>
        <div id="savedTripList"></div>

        <form class="drawer-form" id="tripInquiryForm" onsubmit="submitItineraryInquiry(event)">
          <div class="drawer-field">
            <label for="visitorName">Your Full Name</label>
            <input type="text" id="visitorName" placeholder="e.g. Juan Dela Cruz" required>
          </div>
          <div class="drawer-field">
            <label for="visitorEmail">Email or Contact Number</label>
            <input type="text" id="visitorEmail" placeholder="e.g. juan@email.com / 0917..." required>
          </div>
          <div class="drawer-field">
            <label for="visitDate">Preferred Travel Date</label>
            <input type="date" id="visitDate" required>
          </div>
        </form>

        <div class="inquiry-success-box" id="inquirySuccessBox"></div>
      </div>
      <div class="drawer-footer">
        <button type="submit" form="tripInquiryForm" class="btn-submit-trip">
          Send Itinerary Inquiry <i class="fa-solid fa-paper-plane" style="margin-left: 6px;"></i>
        </button>
        <button type="button" class="btn-download-trip" onclick="downloadItinerary()">
          <i class="fa-solid fa-file-excel" style="color: #16a34a;"></i> Download Itinerary (Excel .xlsx)
        </button>
      </div>
    </div>
  </div>

  <!-- ========================================================
       11. FESTIVAL SCHEDULE MODAL
       ======================================================== -->
  <div class="modal-backdrop" id="scheduleModal" onclick="if(event.target===this) toggleScheduleModal()">
    <div class="modal-card">
      <div class="drawer-header">
        <h3><i class="fa-solid fa-calendar-days" style="color: var(--teal-primary); margin-right: 8px;"></i>Manaragat Festival Highlights</h3>
        <button class="drawer-close-btn" aria-label="Close modal" onclick="toggleScheduleModal()">&times;</button>
      </div>
      <div class="drawer-body">
        <div class="schedule-item"><strong>Aug 1 &ndash; Aug 10</strong><span>Opening Parade &amp; Trade Fair</span></div>
        <div class="schedule-item"><strong>Aug 15 &ndash; Aug 20</strong><span>Fluvial Procession &amp; Samar Bay Regatta</span></div>
        <div class="schedule-item"><strong>Aug 23</strong><span>Manaragat Grand Street Dance &amp; Showdown</span></div>
        <div class="schedule-item"><strong>Aug 24</strong><span>Feast of St. Bartholomew &amp; Fireworks</span></div>
      </div>
      <div class="drawer-footer">
        <button type="button" class="btn-submit-trip" onclick="addToTrip('Manaragat Festival (August)'); toggleScheduleModal();">
          <i class="fa-solid fa-bookmark" style="margin-right: 6px;"></i> Add Festival to My Trip
        </button>
      </div>
    </div>
  </div>

  <!-- ========================================================
       12. UNIVERSAL DETAIL MODAL (SPOTS, ABOUT, FOOD, PRODUCTS, REGION)
       ======================================================== -->
  <div class="modal-backdrop" id="detailModal" onclick="if(event.target===this) closeDetailModal()">
    <div class="modal-card">
      <div class="drawer-header">
        <h3 id="detailModalTitle">Details</h3>
        <button class="drawer-close-btn" aria-label="Close modal" onclick="closeDetailModal()">&times;</button>
      </div>
      <img id="detailModalImg" class="modal-hero-img" src="" alt="" style="display: none;">
      <div class="drawer-body">
        <span id="detailModalTag" class="section-badge" style="margin-bottom: 6px;"></span>
        <p id="detailModalBody" style="font-size: 14.5px; color: #334155; line-height: 1.7;"></p>
        <div id="detailModalItems" class="modal-items-section" style="display: none;"></div>
        <div class="modal-meta-list" id="detailModalMeta"></div>
      </div>
      <div class="drawer-footer" id="detailModalFooter">
        <button type="button" class="btn-submit-trip" id="detailModalActionBtn"></button>
        <button type="button" class="btn-download-trip" id="detailModalStreetViewBtn" style="display: none;">
          <i class="fa-solid fa-street-view" style="color: var(--teal-primary);"></i> Open 360&deg; Street View
        </button>
      </div>
    </div>
  </div>

  <!-- ========================================================
       13. INTERACTIVE MAP + STREET VIEW / 360 EXPLORER
       ======================================================== -->
  <div class="sv-modal" id="streetViewModal" role="dialog" aria-modal="true" aria-label="Map and Street View Explorer">
    <!-- Top Control Bar (Cleanly above map, never overlaps WordPress Admin Bar) -->
    <div class="sv-topbar">
      <div class="sv-topbar-info">
        <div class="sv-info-eyebrow">
          <i class="fa-solid fa-location-dot"></i>
          <span id="svCategoryLabel">CATBALOGAN MAP &amp; STREET VIEW</span>
          <span id="svStepLabel" style="color: #94a3b8;">1 / 11</span>
        </div>
        <div class="sv-info-title" id="svTitle">Catbalogan City</div>
        <div class="sv-info-sub" id="svSubtitle">Interactive Map &amp; Viewpoint Explorer</div>
      </div>

      <!-- View Mode Switcher -->
      <div class="sv-mode-tabs" role="tablist">
        <button type="button" class="sv-mode-btn active" data-mode="split" onclick="svSetMode('split')">
          <i class="fa-solid fa-table-columns"></i> Map + View
        </button>
        <button type="button" class="sv-mode-btn" data-mode="map" onclick="svSetMode('map')">
          <i class="fa-solid fa-map"></i> Map Only
        </button>
        <button type="button" class="sv-mode-btn" data-mode="street" onclick="svSetMode('street')">
          <i class="fa-solid fa-street-view"></i> Google Street View
        </button>
        <button type="button" class="sv-mode-btn" data-mode="photo" onclick="svSetMode('photo')">
          <i class="fa-solid fa-camera-rotate"></i> Photo 360&deg;
        </button>
      </div>

      <div class="sv-top-actions">
        <button type="button" class="sv-hud-btn" id="svMapLayerBtn" onclick="svToggleMapLayer()" title="Switch Road / Satellite">
          <i class="fa-solid fa-layer-group"></i> <span id="svMapLayerLabel">Satellite</span>
        </button>
        <a id="svGoogleMapsLink" href="https://www.google.com/maps/search/?api=1&query=Catbalogan+City+Samar" target="_blank" rel="noopener" class="sv-hud-btn">
          <i class="fa-solid fa-arrow-up-right-from-square" style="color: var(--teal-light);"></i> Open Maps
        </a>
        <button type="button" class="sv-hud-btn sv-minimize-header-btn" id="svToggleMinimizeBtn" onclick="svToggleTopbarMinimize()" title="Minimize / Hide header for full map focus">
          <i class="fa-solid fa-compress" id="svMinimizeIcon"></i> <span id="svMinimizeText">Minimize</span>
        </button>
        <button type="button" class="sv-close-btn" aria-label="Close Street View" onclick="closeStreetView()">&times;</button>
      </div>
    </div>

    
    <!-- Floating Minimal HUD Pill when Topbar is Minimized / Hidden -->
    <div class="sv-topbar-restore-pill" id="svTopbarRestorePill" style="display: none;">
      <div class="sv-pill-main" onclick="svToggleTopbarMinimize()" title="Click to expand controls and modes">
        <i class="fa-solid fa-location-dot" style="color: #f97316;"></i>
        <span class="sv-pill-title" id="svPillTitle">Catbalogan City</span>
        <span class="sv-pill-expand"><i class="fa-solid fa-chevron-down"></i> Expand Controls</span>
      </div>
      <div class="sv-pill-quick-actions">
        <button type="button" class="sv-pill-quick-btn" onclick="svToggleMapLayer()" title="Switch Satellite / Road">
          <i class="fa-solid fa-layer-group"></i>
        </button>
        <button type="button" class="sv-pill-quick-btn sv-pill-close-btn" onclick="closeStreetView()" title="Close Map Explorer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <!-- Split Stage: Real Interactive Google Map + Interactive Street View / Photo 360 -->
    <div class="sv-stage" id="svStage">
      <!-- Left Pane: Real Google Map with Location Pin -->
      <div class="sv-map-pane">
        <div class="sv-map-badge">
          <i class="fa-solid fa-map-pin" style="color: var(--coral-accent);"></i>
          <span id="svMapPinLabel">Catbalogan Map Pin</span>
        </div>
        <iframe id="svMapFrame" class="sv-iframe" title="Catbalogan Interactive Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>

      <!-- Right Pane: Google Street View OR Interactive Photo 360 -->
      <div class="sv-view-pane">
        <!-- Real Google Street View Embed -->
        <div class="sv-gsv-wrap" id="svGsvWrap">
          <iframe id="svGsvFrame" class="sv-iframe" title="Google Street View" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>

        <!-- Photo 360 Pinch/Drag/Forward-Back Viewpoint Canvas -->
        <div class="sv-viewport" id="svViewport">
          <img id="svImage" class="sv-canvas-img" src="<?php echo $theme_uri; ?>/images/hero.jpg" alt="Street View Scene">

          <div class="sv-hint-pill">
            <i class="fa-solid fa-hand-pointer"></i> Drag to look &bull; Pinch / scroll to zoom &bull; Forward / Go Back
          </div>

          <div class="sv-ground-nav">
            <div class="sv-road-row">
              <button type="button" class="sv-turn-btn" onclick="svPanBy(140, 0)" title="Turn Left">
                <i class="fa-solid fa-rotate-left"></i>
              </button>
              <button type="button" class="sv-chevron-btn" id="svForwardBtn" onclick="svMoveStep(1)">
                <i class="fa-solid fa-arrow-up"></i> Move Forward
              </button>
              <button type="button" class="sv-turn-btn" onclick="svPanBy(-140, 0)" title="Turn Right">
                <i class="fa-solid fa-rotate-right"></i>
              </button>
            </div>
            <button type="button" class="sv-chevron-btn" id="svBackBtn" onclick="svMoveStep(-1)" style="padding: 7px 16px; font-size: 12px;">
              <i class="fa-solid fa-arrow-down"></i> Go Back (Ha Luyo)
            </button>
          </div>

          <div class="sv-hud-right">
            <div class="sv-compass" onclick="svResetView()" title="Reset heading">
              <div class="sv-compass-needle" id="svCompassNeedle"></div>
            </div>
            <div class="sv-zoom-stack">
              <button type="button" class="sv-zoom-btn" onclick="svZoom(0.35)" title="Zoom In">+</button>
              <button type="button" class="sv-zoom-btn" onclick="svZoom(-0.35)" title="Zoom Out">&minus;</button>
            </div>
            <span class="sv-zoom-readout" id="svZoomReadout">1.0x</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Connected Waypoint Strip -->
    <div class="sv-strip" id="svThumbStrip"></div>
  </div>

  <!-- Toast Notice -->
  <div class="toast-notice" id="toastNotice"></div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    const STORAGE_KEY = 'dungaw_catbalogan_trips';
    const INQUIRY_KEY = 'dungaw_catbalogan_inquiry';
    let savedTrips = [];
    let currentCategory = 'all';
    let lastInquiry = null;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) savedTrips = JSON.parse(stored);
      const storedInquiry = localStorage.getItem(INQUIRY_KEY);
      if (storedInquiry) lastInquiry = JSON.parse(storedInquiry);
    } catch (e) {
      savedTrips = [];
      lastInquiry = null;
    }

    const DETAILS_DATA = {
      'buri': {
        tag: 'ISLAND DESTINATION',
        title: 'Buri Island Boardwalk',
        img: '<?php echo $theme_uri; ?>/images/buri.jpg',
        tripName: 'Buri Island Boardwalk',
        body: 'Located in Barangay Buri, Catbalogan City, the Buri Island Boardwalk stretches over coastal waters and mangrove beds, offering peaceful walks, fresh sea breeze, and panoramic sunset views over Samar Sea.',
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Location:</strong> Brgy. Buri, Catbalogan City, Samar',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Best Time:</strong> 4:00 PM &ndash; 6:00 PM for Sunset',
          '<strong><i class="fa-solid fa-person-walking" style="color:var(--teal-primary)"></i> Activities:</strong> Boardwalk Stroll, Photography, Island Sightseeing'
        ]
      },
      'bangon': {
        tag: 'ECO-TOURISM &amp; NATURE',
        title: 'Bangon Falls',
        img: '<?php echo $theme_uri; ?>/images/bangon.jpg',
        tripName: 'Bangon Falls',
        body: 'A multi-tiered waterfall surrounded by lush Samar rainforest. Visitors can enjoy cool mountain waters, natural plunge pools, and scenic jungle trekking trails.',
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Access:</strong> Via Catbalogan Eco-Trail / San Jorge Route',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Best Time:</strong> Morning (7:00 AM &ndash; 11:00 AM)',
          '<strong><i class="fa-solid fa-shield-halved" style="color:var(--teal-primary)"></i> Tip:</strong> Wear water-friendly trekking shoes and leave no trace'
        ]
      },
      'obelisk': {
        tag: 'HISTORICAL LANDMARK',
        title: 'The Obelisk',
        img: '<?php echo $theme_uri; ?>/images/obelisk.jpg',
        tripName: 'The Obelisk',
        body: 'Standing prominently at the Provincial Capitol grounds in Catbalogan, The Obelisk features sculptural reliefs portraying four key eras of Samar history: Pre-Colonial, Spanish, American, and Modern Samar.',
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Location:</strong> Samar Provincial Capitol Park, Catbalogan City',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Access:</strong> Open Daily (Free Entry)',
          '<strong><i class="fa-solid fa-camera" style="color:var(--teal-primary)"></i> Highlights:</strong> Heritage Reliefs, Capitol Grounds, City Square'
        ]
      },
      'pieta': {
        tag: 'MEMORIAL HERITAGE',
        title: 'Pieta Park',
        img: '<?php echo $theme_uri; ?>/images/pieta.jpg',
        tripName: 'Pieta Park',
        body: 'Adjacent to St. Bartholomew Parish Church, Pieta Park serves as a quiet memorial and reflection space honoring the victims of the 1987 MV Do&ntilde;a Paz maritime tragedy and celebrating local faith.',
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Location:</strong> Beside St. Bartholomew Cathedral, Downtown Catbalogan',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Access:</strong> Open Daily',
          '<strong><i class="fa-solid fa-church" style="color:var(--teal-primary)"></i> Nearby:</strong> City Plaza &amp; Heritage District'
        ]
      },
      'darahuway': {
        tag: 'ISLAND SANCTUARY',
        title: 'Darahuway Guti Island',
        img: '<?php echo $theme_uri; ?>/images/darahuway.jpg',
        tripName: 'Darahuway Guti Island',
        body: 'Part of the Darahuway island cluster off the coast of Catbalogan, Darahuway Guti offers quiet coves, clear snorkeling waters, and gentle coastal bluffs facing Maqueda Bay.',
        meta: [
          '<strong><i class="fa-solid fa-ship" style="color:var(--teal-primary)"></i> Access:</strong> 20&ndash;30 mins boat ride from Catbalogan Pier',
          '<strong><i class="fa-solid fa-water" style="color:var(--teal-primary)"></i> Activities:</strong> Snorkeling, Swimming, Island Hopping',
          '<strong><i class="fa-solid fa-sun" style="color:var(--teal-primary)"></i> Best Season:</strong> March &ndash; September'
        ]
      },
      'maqueda': {
        tag: 'SCENIC BAYFRONT',
        title: 'Maqueda Bay Sunset',
        img: '<?php echo $theme_uri; ?>/images/maqueda.jpg',
        tripName: 'Maqueda Bay Sunset',
        body: 'Along the Catbalogan bayfront boulevard, locals and travelers gather every afternoon as golden skies reflect across fishing bancas anchored on Maqueda Bay.',
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Location:</strong> Catbalogan Bayfront Boulevard',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Best Time:</strong> 5:00 PM &ndash; 6:15 PM',
          '<strong><i class="fa-solid fa-utensils" style="color:var(--teal-primary)"></i> Nearby:</strong> Evening street food &amp; bayfront eateries'
        ]
      },
      'historic-capital': {
        tag: 'CITY PROFILE',
        title: 'Historic Capital of Samar',
        img: '<?php echo $theme_uri; ?>/images/obelisk.jpg',
        tripName: '',
        body: 'Founded by Jesuit missionaries in 1596 and converted into a component city in 2007, Catbalogan has long been Samar&rsquo;s administrative, educational, and commercial center.',
        meta: [
          '<strong><i class="fa-solid fa-calendar" style="color:var(--teal-primary)"></i> Founded:</strong> October 1596',
          '<strong><i class="fa-solid fa-city" style="color:var(--teal-primary)"></i> Cityhood:</strong> June 16, 2007',
          '<strong><i class="fa-solid fa-language" style="color:var(--teal-primary)"></i> Language:</strong> Waray-Waray, Filipino, English'
        ]
      },
      'coastal-gateway': {
        tag: 'GEOGRAPHY &amp; SEASCAPE',
        title: 'Coastal Gateway to Samar',
        img: '<?php echo $theme_uri; ?>/images/buri.jpg',
        tripName: '',
        body: 'Surrounded by verdant hills on one side and Maqueda Bay on the other, Catbalogan links mainland Samar to island barangays including Buri, Darahuway Dako, and Darahuway Guti.',
        meta: [
          '<strong><i class="fa-solid fa-compass" style="color:var(--teal-primary)"></i> Region:</strong> Eastern Visayas (Region VIII)',
          '<strong><i class="fa-solid fa-anchor" style="color:var(--teal-primary)"></i> Port Hub:</strong> Catbalogan City Port &amp; Pier',
          '<strong><i class="fa-solid fa-road" style="color:var(--teal-primary)"></i> Highway:</strong> Along the Maharlika (Pan-Philippine) Highway'
        ]
      },
      'vibrant-culture': {
        tag: 'HERITAGE &amp; ARTS',
        title: 'Vibrant Waray Culture',
        img: '<?php echo $theme_uri; ?>/images/manaragat.jpg',
        tripName: 'Manaragat Festival (August)',
        body: 'Catbalogan celebrates the sea and its fisherfolk every August with the Manaragat Festival, showcasing colorful marine-inspired street dances, Waray music, and artisanal crafts.',
        meta: [
          '<strong><i class="fa-solid fa-masks-theater" style="color:var(--teal-primary)"></i> Signature Fiesta:</strong> Manaragat Festival (August)',
          '<strong><i class="fa-solid fa-heart" style="color:var(--teal-primary)"></i> Patron Saint:</strong> St. Bartholomew the Apostle',
          '<strong><i class="fa-solid fa-palette" style="color:var(--teal-primary)"></i> Tagline:</strong> City of Captivating Colors'
        ]
      },
      'tamalos': {
        tag: 'SAMAR CULINARY TREASURE',
        title: 'Tamalos',
        img: '<?php echo $theme_uri; ?>/images/tamalos.jpg',
        tripName: 'Food Trail: Samar Tamalos',
        body: 'Inspired by Hispanic-era tamales and perfected by Samar kitchens, Catbalogan Tamalos pairs tender pork belly with rich roasted peanut sauce steamed inside fragrant banana leaves.',
        meta: [
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Try:</strong> Catbalogan Public Market &amp; Heritage Kitchens',
          '<strong><i class="fa-solid fa-bowl-food" style="color:var(--teal-primary)"></i> Key Ingredients:</strong> Pork Belly, Roasted Peanuts, Rice Flour, Annatto',
          '<strong><i class="fa-solid fa-star" style="color:var(--teal-primary)"></i> Tip:</strong> Best enjoyed warm for breakfast or merienda'
        ]
      },
      'crabs': {
        tag: 'FRESH FROM MAQUEDA BAY',
        title: 'Maqueda Blue Crabs',
        img: '<?php echo $theme_uri; ?>/images/crabs.jpg',
        tripName: 'Food Trail: Maqueda Bay Seafood',
        body: 'Catbalogan&rsquo;s coastal waters yield sweet, meaty blue crabs (masag), prawns, and fresh reef fish landed daily by local fishermen.',
        meta: [
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Try:</strong> Bayfront Seafood Grills &amp; Morning Fish Port',
          '<strong><i class="fa-solid fa-fire" style="color:var(--teal-primary)"></i> Popular Style:</strong> Steamed with Calamansi or Cooked in Coconut Milk',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Fresh Catch:</strong> Early morning &amp; sunset markets'
        ]
      },
      'danggit': {
        tag: 'ARTISANAL PASALUBONG',
        title: 'Samar Danggit &amp; Tapa',
        img: '<?php echo $theme_uri; ?>/images/danggit.jpg',
        tripName: 'Pasalubong: Samar Danggit &amp; Tapa',
        body: 'Naturally sun-dried rabbitfish (danggit), boneless squid, and cured tapa prepared by coastal families&mdash;crispy, savory, and vacuum-packed for travel.',
        meta: [
          '<strong><i class="fa-solid fa-bag-shopping" style="color:var(--teal-primary)"></i> Where to Buy:</strong> Catbalogan Dried Fish Stalls &amp; Pasalubong Center',
          '<strong><i class="fa-solid fa-plane" style="color:var(--teal-primary)"></i> Travel Friendly:</strong> Available sealed for hand-carry or luggage',
          '<strong><i class="fa-solid fa-utensils" style="color:var(--teal-primary)"></i> Pairing:</strong> Serve with spiced vinegar and garlic rice'
        ]
      },
      'corioso': {
        tag: 'LEGACY BAKERY SPECIALTY',
        title: 'Corioso &amp; Local Pastries',
        img: '<?php echo $theme_uri; ?>/images/corioso.jpg',
        tripName: 'Pasalubong: Corioso &amp; Pastries',
        body: 'Crisp, buttery Corioso cookies, roscas, and traditional Samar baked treats passed down by multi-generational Catbalogan family bakeries.',
        meta: [
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Buy:</strong> Downtown Heritage Bakeshops',
          '<strong><i class="fa-solid fa-mug-hot" style="color:var(--teal-primary)"></i> Pairing:</strong> Ideal with native Samar sikwate (hot cacao)',
          '<strong><i class="fa-solid fa-gift" style="color:var(--teal-primary)"></i> Great For:</strong> Office &amp; family pasalubong packs'
        ]
      },
      'lara-samar': {
        tag: 'LOCAL CRAFTSMANSHIP',
        title: 'Lara Samar Woven Mats &amp; Bags',
        img: '',
        tripName: 'Shopping: Lara Samar Woven Goods',
        body: 'Hand-dyed tikog grass is woven by skilled women artisans into intricate geometric banig mats, structured totes, laptop sleeves, and modern home pieces.',
        itemsTitle: 'Featured Handwoven Tikog Pieces',
        items: [
          {
            title: 'Traditional Samar Banig Mat',
            desc: 'Hand-dyed, sun-dried tikog reed mats woven with intricate geometric floral and heritage patterns.',
            icon: 'fa-solid fa-layer-group',
            iconBg: '#fdf2f8',
            iconColor: '#db2777',
            tripItem: 'Shopping: Lara Samar Banig Mat'
          },
          {
            title: 'Banig Designer Totes &amp; Clutches',
            desc: 'Modern everyday handbags, leather-trimmed totes, and woven evening clutches crafted by Samar women weavers.',
            icon: 'fa-solid fa-bag-shopping',
            iconBg: '#fef3c7',
            iconColor: '#d97706',
            tripItem: 'Shopping: Banig Designer Bag'
          },
          {
            title: 'Tikog Table Runners &amp; Wall Art',
            desc: 'Colorfast woven placemats, table runners, and laptop sleeves ideal for gifting or coastal home styling.',
            icon: 'fa-solid fa-palette',
            iconBg: '#ecfdf5',
            iconColor: '#059669',
            tripItem: 'Shopping: Tikog Home Decor'
          }
        ],
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Where to Find:</strong> Samar Provincial Trade &amp; Pasalubong Centers',
          '<strong><i class="fa-solid fa-leaf" style="color:var(--teal-primary)"></i> Material:</strong> Sustainably harvested, sun-dried Tikog reed',
          '<strong><i class="fa-solid fa-hands-holding-circle" style="color:var(--teal-primary)"></i> Impact:</strong> Supports local Samar women weavers'
        ]
      },
      'pasalubong': {
        tag: 'CURATED SOUVENIR BOXES',
        title: 'Catbalogan Pasalubong Packs',
        img: '<?php echo $theme_uri; ?>/images/corioso.jpg',
        svKey: 'corioso',
        tripName: 'Shopping: Catbalogan Pasalubong Box',
        body: 'Combine Catbalogan&rsquo;s best local foods and delicacies in one travel-ready gift pack &mdash; choose from heritage bakeshop cookies, sun-dried seafood, savory tamalos, and waterfront favorites:',
        itemsTitle: 'Foods &amp; Delicacies Inside Gift Packs',
        items: [
          {
            title: 'Corioso Cookies &amp; Heritage Pastries',
            desc: 'Crisp butter Corioso biscuits, sweet roscas, and native cacao tablea rounds baked fresh at downtown family bakeshops.',
            img: '<?php echo $theme_uri; ?>/images/corioso.jpg',
            svKey: 'corioso',
            tripItem: 'Pasalubong: Corioso & Pastries'
          },
          {
            title: 'Samar Danggit &amp; Dried Seafood Tapa',
            desc: 'Sun-dried rabbitfish (danggit), dried squid, and cured boneless tapa vacuum-sealed for airport-safe travel.',
            img: '<?php echo $theme_uri; ?>/images/danggit.jpg',
            svKey: 'danggit',
            tripItem: 'Pasalubong: Samar Danggit & Tapa'
          },
          {
            title: 'Samar Tamalos Heritage Pack',
            desc: 'Savory steamed rice cake layered with slow-braised pork and spicy peanut sauce wrapped in fragrant banana leaves.',
            img: '<?php echo $theme_uri; ?>/images/tamalos.jpg',
            svKey: 'tamalos',
            tripItem: 'Food Trail: Samar Tamalos'
          },
          {
            title: 'Maqueda Bay Crabs &amp; Bayfront Catch',
            desc: 'Sweet steamed blue crabs and chilled coastal catch packed at waterfront markets for regional take-home feasts.',
            img: '<?php echo $theme_uri; ?>/images/crabs.jpg',
            svKey: 'crabs',
            tripItem: 'Food Trail: Maqueda Bay Crabs'
          }
        ],
        meta: [
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Buy:</strong> City Tourism Hub &amp; Downtown Market',
          '<strong><i class="fa-solid fa-box-open" style="color:var(--teal-primary)"></i> Contents:</strong> Customizable sweet &amp; savory selections',
          '<strong><i class="fa-solid fa-tag" style="color:var(--teal-primary)"></i> Tip:</strong> Ask vendors for airport-safe double sealing'
        ]
      },
      'shellcraft': {
        tag: 'COASTAL ARTISAN GOODS',
        title: 'Community Shellcraft &amp; D&eacute;cor',
        img: '<?php echo $theme_uri; ?>/images/darahuway.jpg',
        svKey: 'darahuway',
        tripName: 'Shopping: Community Shellcraft',
        body: 'Island artisans craft wind chimes, lampshades, jewelry, and coastal home accents using sustainably gathered shells and natural driftwood.',
        itemsTitle: 'Handcrafted Coastal Items',
        items: [
          {
            title: 'Capiz &amp; Sea Shell Wind Chimes',
            desc: 'Hand-strung coastal chimes and coastal wall mobiles crafted by women-led cooperatives across Darahuway &amp; island barangays.',
            img: '<?php echo $theme_uri; ?>/images/darahuway.jpg',
            svKey: 'darahuway',
            tripItem: 'Shopping: Coastal Shell Wind Chimes'
          },
          {
            title: 'Woven Driftwood &amp; Shell Lamps',
            desc: 'Warm coastal tabletop lamps and decorative trays combining pearlescent shells with natural island fibers.',
            icon: 'fa-solid fa-lightbulb',
            iconBg: '#f0fdf4',
            iconColor: '#16a34a',
            tripItem: 'Shopping: Shellcraft Home Lamps'
          },
          {
            title: 'Island Shell Jewelry &amp; Keepsakes',
            desc: 'Handcrafted pearl-shell bracelets, earrings, and souvenir keychains supporting coastal community livelihoods.',
            icon: 'fa-solid fa-gem',
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            tripItem: 'Shopping: Island Shell Keepsakes'
          }
        ],
        meta: [
          '<strong><i class="fa-solid fa-location-dot" style="color:var(--teal-primary)"></i> Origin:</strong> Catbalogan Island Barangays',
          '<strong><i class="fa-solid fa-recycle" style="color:var(--teal-primary)"></i> Craft Ethos:</strong> Eco-conscious coastal livelihood',
          '<strong><i class="fa-solid fa-gift" style="color:var(--teal-primary)"></i> Items:</strong> Chimes, Woven Accents, Keepsakes'
        ]
      },
      'region': {
        tag: 'EASTERN VISAYAS &bull; REGION VIII',
        title: 'Getting to Catbalogan City',
        img: '<?php echo $theme_uri; ?>/images/hero.jpg',
        tripName: '',
        body: 'Catbalogan City is centrally positioned along western Samar&rsquo;s coast, making it easy to reach by air + land via Calbayog or Tacloban airports.',
        meta: [
          '<strong><i class="fa-solid fa-plane-arrival" style="color:var(--teal-primary)"></i> Nearest Airports:</strong> Calbayog Airport (~1.5 hrs) &amp; Tacloban DZR Airport (~2.5 hrs)',
          '<strong><i class="fa-solid fa-van-shuttle" style="color:var(--teal-primary)"></i> Land Travel:</strong> Regular vans &amp; buses along Pan-Philippine Highway',
          '<strong><i class="fa-solid fa-phone" style="color:var(--teal-primary)"></i> Visitor Assistance:</strong> Catbalogan City Tourism Office, City Hall'
        ]
      }
    };

    function showToast(message) {
      const toast = document.getElementById('toastNotice');
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2800);
    }

    function persistTrips() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTrips));
      } catch (e) {}
    }

    function addToTrip(spotName) {
      if (!savedTrips.includes(spotName)) {
        savedTrips.push(spotName);
        showToast(`Added "${spotName}" to My Trip`);
      } else {
        savedTrips = savedTrips.filter(t => t !== spotName);
        showToast(`Removed "${spotName}" from My Trip`);
      }
      persistTrips();
      updateTripUI();
    }

    function removeTripByIndex(index) {
      const removed = savedTrips.splice(index, 1);
      persistTrips();
      updateTripUI();
      if (removed[0]) showToast(`Removed "${removed[0]}"`);
    }

    function clearAllTrips() {
      if (savedTrips.length === 0) {
        showToast('Your trip list is already empty.');
        return;
      }
      savedTrips = [];
      persistTrips();
      updateTripUI();
      showToast('Cleared all saved trip items.');
    }

    function updateTripUI() {
      const badge = document.getElementById('tripCountBadge');
      if (badge) badge.textContent = savedTrips.length;

      document.querySelectorAll('.btn-add-trip[data-spot], .btn-meet[data-spot]').forEach(btn => {
        const spot = btn.getAttribute('data-spot');
        const isAdded = savedTrips.includes(spot);
        if (btn.classList.contains('btn-add-trip')) {
          btn.classList.toggle('added', isAdded);
          btn.innerHTML = isAdded
            ? '<i class="fa-solid fa-check"></i> Added to Trip'
            : '<i class="fa-solid fa-plus"></i> Add to My Trip';
        } else {
          btn.innerHTML = isAdded
            ? '<i class="fa-solid fa-check"></i> Saved in My Trip'
            : '<i class="fa-solid fa-bookmark"></i> Save to My Trip';
        }
      });

      const list = document.getElementById('savedTripList');
      if (!list) return;

      list.innerHTML = '';
      if (savedTrips.length === 0) {
        const p = document.createElement('p');
        p.style.cssText = 'font-size: 13px; color: #94a3b8; text-align: center; padding: 18px 0;';
        p.textContent = 'No destinations saved yet. Click "Add to My Trip" on any destination!';
        list.appendChild(p);
        return;
      }

      savedTrips.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'saved-trip-item';

        const label = document.createElement('span');
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-location-dot';
        icon.style.cssText = 'color: #008779; margin-right: 8px;';
        label.appendChild(icon);
        label.appendChild(document.createTextNode(item));

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'remove-trip-btn';
        delBtn.title = 'Remove';
        delBtn.innerHTML = '&times;';
        delBtn.addEventListener('click', () => removeTripByIndex(idx));

        row.appendChild(label);
        row.appendChild(delBtn);
        list.appendChild(row);
      });
    }

    function toggleTripDrawer() {
      const drawer = document.getElementById('tripDrawerBackdrop');
      drawer.classList.toggle('open');
    }

    function closeTripDrawerOnOutside(e) {
      if (e.target.id === 'tripDrawerBackdrop') {
        toggleTripDrawer();
      }
    }

    function toggleScheduleModal() {
      const modal = document.getElementById('scheduleModal');
      if (modal) modal.classList.toggle('open');
    }

    function openRegionModal() {
      openDetailModal('region');
    }

    function openDetailModal(key) {
      const data = DETAILS_DATA[key];
      if (!data) return;

      document.getElementById('detailModalTitle').innerHTML = data.title;
      document.getElementById('detailModalTag').innerHTML = data.tag;
      document.getElementById('detailModalBody').innerHTML = data.body;

      const imgEl = document.getElementById('detailModalImg');
      if (data.img) {
        imgEl.src = data.img;
        imgEl.alt = data.title;
        imgEl.style.display = 'block';
      } else {
        imgEl.style.display = 'none';
      }

      const itemsWrap = document.getElementById('detailModalItems');
      if (itemsWrap) {
        itemsWrap.innerHTML = '';
        if (Array.isArray(data.items) && data.items.length > 0) {
          const heading = document.createElement('div');
          heading.className = 'modal-items-heading';
          heading.innerHTML = `<i class="fa-solid fa-basket-shopping"></i> ${data.itemsTitle || 'Included Selections'}`;
          itemsWrap.appendChild(heading);

          const grid = document.createElement('div');
          grid.className = 'modal-items-grid';

          data.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'modal-item-row';

            if (item.img) {
              const thumb = document.createElement('img');
              thumb.className = 'modal-item-thumb';
              thumb.src = item.img;
              thumb.alt = item.title;
              row.appendChild(thumb);
            } else {
              const iconBox = document.createElement('div');
              iconBox.className = 'modal-item-icon';
              iconBox.style.background = item.iconBg || '#eff6ff';
              iconBox.style.color = item.iconColor || 'var(--teal-primary)';
              iconBox.innerHTML = `<i class="${item.icon || 'fa-solid fa-bag-shopping'}"></i>`;
              row.appendChild(iconBox);
            }

            const info = document.createElement('div');
            info.className = 'modal-item-info';

            const titleEl = document.createElement('div');
            titleEl.className = 'modal-item-title';
            titleEl.innerHTML = item.title;
            info.appendChild(titleEl);

            const descEl = document.createElement('p');
            descEl.className = 'modal-item-desc';
            descEl.innerHTML = item.desc;
            info.appendChild(descEl);

            const actions = document.createElement('div');
            actions.className = 'modal-item-actions';

            if (item.tripItem) {
              const tripBtn = document.createElement('button');
              tripBtn.type = 'button';
              const syncBtnState = () => {
                const isAdded = savedTrips.includes(item.tripItem);
                tripBtn.className = 'modal-item-btn' + (isAdded ? ' added' : '');
                tripBtn.innerHTML = isAdded
                  ? '<i class="fa-solid fa-check"></i> Added to Trip'
                  : '<i class="fa-solid fa-plus"></i> Add to Trip';
              };
              syncBtnState();
              tripBtn.addEventListener('click', () => {
                addToTrip(item.tripItem);
                syncBtnState();
              });
              actions.appendChild(tripBtn);
            }

            if (item.svKey) {
              const mapBtn = document.createElement('button');
              mapBtn.type = 'button';
              mapBtn.className = 'modal-item-map-btn';
              mapBtn.innerHTML = '<i class="fa-solid fa-map-pin"></i> Where to Buy / 360&deg;';
              mapBtn.addEventListener('click', () => {
                closeDetailModal();
                openStreetView(item.svKey);
              });
              actions.appendChild(mapBtn);
            }

            info.appendChild(actions);
            row.appendChild(info);
            grid.appendChild(row);
          });

          itemsWrap.appendChild(grid);
          itemsWrap.style.display = 'block';
        } else {
          itemsWrap.style.display = 'none';
        }
      }

      const metaEl = document.getElementById('detailModalMeta');
      metaEl.innerHTML = data.meta.map(line => `<div>${line}</div>`).join('');

      const actionBtn = document.getElementById('detailModalActionBtn');
      if (data.tripName) {
        const isAdded = savedTrips.includes(data.tripName);
        actionBtn.innerHTML = isAdded
          ? '<i class="fa-solid fa-check" style="margin-right:6px;"></i> Already in My Trip (Click to Remove)'
          : '<i class="fa-solid fa-plus" style="margin-right:6px;"></i> Add to My Trip';
        actionBtn.onclick = () => {
          addToTrip(data.tripName);
          closeDetailModal();
        };
      } else {
        actionBtn.innerHTML = '<i class="fa-solid fa-map-location-dot" style="margin-right:6px;"></i> Explore Tourist Spots';
        actionBtn.onclick = () => {
          closeDetailModal();
          exploreCatbalogan();
        };
      }

      document.getElementById('detailModal').classList.add('open');

      const svBtn = document.getElementById('detailModalStreetViewBtn');
      if (svBtn) {
        const svTarget = data.svKey || key;
        const hasSv = STREET_VIEW_TOUR.some(item => item.key === svTarget);
        if (hasSv) {
          svBtn.style.display = 'inline-flex';
          svBtn.onclick = () => {
            closeDetailModal();
            openStreetView(svTarget);
          };
        } else {
          svBtn.style.display = 'none';
        }
      }
    }

    function closeDetailModal() {
      document.getElementById('detailModal')?.classList.remove('open');
    }

    function exploreCatbalogan() {
      resetSpotsFilter();
      document.getElementById('spots')?.scrollIntoView({ behavior: 'smooth' });
    }

    function meetTheCity() {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }

    function discoverCulture() {
      document.getElementById('culture')?.scrollIntoView({ behavior: 'smooth' });
    }

    function submitItineraryInquiry(e) {
      e.preventDefault();
      if (savedTrips.length === 0) {
        showToast('Please add at least one destination to your trip first!');
        return;
      }
      const name = document.getElementById('visitorName').value.trim();
      const email = document.getElementById('visitorEmail').value.trim();
      const date = document.getElementById('visitDate').value;
      if (!name || !email || !date) {
        showToast('Please complete all trip inquiry fields.');
        return;
      }
      const refCode = 'DC-' + Math.floor(100000 + Math.random() * 900000);
      lastInquiry = { name, email, date, refCode };
      try {
        localStorage.setItem(INQUIRY_KEY, JSON.stringify(lastInquiry));
      } catch (err) {}
      const box = document.getElementById('inquirySuccessBox');
      box.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Inquiry Prepared (${refCode})</strong><br>Mabuhay, <strong>${name}</strong>! Your ${savedTrips.length}-item itinerary for <strong>${date}</strong> is ready. You can download your Excel itinerary below.`;
      box.classList.add('show');
      showToast(`Itinerary ready for ${name} (${refCode})!`);
      document.getElementById('tripInquiryForm').reset();
    }

    function escapeXml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }

    function crc32(bytes) {
      let crc = 0xFFFFFFFF;
      for (let i = 0; i < bytes.length; i++) {
        crc ^= bytes[i];
        for (let j = 0; j < 8; j++) {
          crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
        }
      }
      return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    function createZipBlob(files) {
      const encoder = new TextEncoder();
      const localParts = [];
      const centralParts = [];
      let offset = 0;

      files.forEach(file => {
        const nameBytes = encoder.encode(file.name);
        const dataBytes = encoder.encode(file.content);
        const crc = crc32(dataBytes);
        const size = dataBytes.length;

        const local = new Uint8Array(30 + nameBytes.length);
        const lv = new DataView(local.buffer);
        lv.setUint32(0, 0x04034b50, true);
        lv.setUint16(4, 20, true);
        lv.setUint16(6, 0x0800, true);
        lv.setUint16(8, 0, true);
        lv.setUint16(10, 0, true);
        lv.setUint16(12, 0, true);
        lv.setUint32(14, crc, true);
        lv.setUint32(18, size, true);
        lv.setUint32(22, size, true);
        lv.setUint16(26, nameBytes.length, true);
        lv.setUint16(28, 0, true);
        local.set(nameBytes, 30);

        localParts.push(local, dataBytes);

        const central = new Uint8Array(46 + nameBytes.length);
        const cv = new DataView(central.buffer);
        cv.setUint32(0, 0x02014b50, true);
        cv.setUint16(4, 20, true);
        cv.setUint16(6, 20, true);
        cv.setUint16(8, 0x0800, true);
        cv.setUint16(10, 0, true);
        cv.setUint16(12, 0, true);
        cv.setUint16(14, 0, true);
        cv.setUint32(16, crc, true);
        cv.setUint32(20, size, true);
        cv.setUint32(24, size, true);
        cv.setUint16(28, nameBytes.length, true);
        cv.setUint16(30, 0, true);
        cv.setUint16(32, 0, true);
        cv.setUint16(34, 0, true);
        cv.setUint16(36, 0, true);
        cv.setUint32(38, 0, true);
        cv.setUint32(42, offset, true);
        central.set(nameBytes, 46);

        centralParts.push(central);
        offset += local.length + size;
      });

      const centralSize = centralParts.reduce((s, p) => s + p.length, 0);
      const eocd = new Uint8Array(22);
      const ev = new DataView(eocd.buffer);
      ev.setUint32(0, 0x06054b50, true);
      ev.setUint16(4, 0, true);
      ev.setUint16(6, 0, true);
      ev.setUint16(8, files.length, true);
      ev.setUint16(10, files.length, true);
      ev.setUint32(12, centralSize, true);
      ev.setUint32(16, offset, true);
      ev.setUint16(20, 0, true);

      return new Blob([...localParts, ...centralParts, eocd], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
    }

    function getTripMeta(name) {
      const map = {
        'Buri Island Boardwalk': ['Tourist Spot', 'Brgy. Buri, Catbalogan City', '4:00 PM - 6:00 PM (Sunset)'],
        'Bangon Falls': ['Eco-Tourism & Falls', 'Catbalogan / San Jorge Trail', 'Morning (7:00 AM - 11:00 AM)'],
        'The Obelisk': ['Historical & Heritage', 'Samar Provincial Capitol Park', 'Open Daily (Free Entry)'],
        'Pieta Park': ['Historical & Heritage', 'Beside St. Bartholomew Cathedral', 'Open Daily (Downtown Plaza)'],
        'Darahuway Guti Island': ['Island Sanctuary', '20-30 mins boat from Pier', 'March - September (Snorkeling)'],
        'Maqueda Bay Sunset': ['Scenic Bayfront', 'Catbalogan Bayfront Boulevard', '5:00 PM - 6:15 PM'],
        'Manaragat Festival (August)': ['Culture & Festivals', 'Catbalogan City Proper', 'August 1 - 24 (Annual Fiesta)'],
        'Food Trail: Samar Tamalos': ['Food & Delicacies', 'Public Market & Local Kitchens', 'Best served warm for breakfast'],
        'Food Trail: Maqueda Bay Seafood': ['Food & Delicacies', 'Bayfront Grills & Fish Port', 'Fresh morning & sunset catch'],
        'Pasalubong: Samar Danggit & Tapa': ['Food & Pasalubong', 'Catbalogan Dried Fish Stalls', 'Ask for travel-sealed packs'],
        'Pasalubong: Corioso & Pastries': ['Food & Pasalubong', 'Downtown Heritage Bakeshops', 'Pair with native sikwate'],
        'Shopping: Lara Samar Woven Goods': ['Local Products', 'Provincial Trade & Pasalubong Hub', 'Handwoven Tikog mats & bags'],
        'Shopping: Catbalogan Pasalubong Box': ['Local Products', 'City Tourism Hub & Market', 'Customizable gift assortments'],
        'Shopping: Community Shellcraft': ['Local Products', 'Island Barangay Craft Stalls', 'Eco-friendly coastal keepsakes']
      };
      if (map[name]) return map[name];
      if (name.startsWith('Food Trail:')) return ['Food & Delicacies', 'Catbalogan City', 'Local culinary stop'];
      if (name.startsWith('Pasalubong:') || name.startsWith('Shopping:')) return ['Local Products', 'Catbalogan City', 'Souvenir & crafts'];
      return ['Tourist Spot', 'Catbalogan City, Samar', 'Check local hours'];
    }

    function downloadItinerary() {
      if (savedTrips.length === 0) {
        showToast('Add at least one spot before downloading your itinerary.');
        return;
      }

      const formName = document.getElementById('visitorName')?.value.trim();
      const formEmail = document.getElementById('visitorEmail')?.value.trim();
      const formDate = document.getElementById('visitDate')?.value;

      const visitorName = formName || lastInquiry?.name || 'Guest Traveler';
      const visitorContact = formEmail || lastInquiry?.email || 'Not specified';
      const travelDate = formDate || lastInquiry?.date || 'Flexible';
      const refCode = lastInquiry?.refCode || 'DRAFT';
      const statusLabel = lastInquiry ? 'Confirmed' : 'Planned';

      const colLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const makeCell = (colIdx, rowNum, val, styleId, isNum) => {
        const ref = colLetters[colIdx] + rowNum;
        if (isNum) return `<c r="${ref}" s="${styleId}"><v>${Number(val)}</v></c>`;
        return `<c r="${ref}" t="inlineStr" s="${styleId}"><is><t>${escapeXml(val)}</t></is></c>`;
      };

      const rowsXml = [];

      // Row 1: Merged Title Banner (A1:F1)
      rowsXml.push(`<row r="1" ht="34" customHeight="1">${
        colLetters.map((_, c) => makeCell(c, 1, c === 0 ? 'DUNGAW CATBALOGAN - PERSONAL TRIP ITINERARY' : '', 1)).join('')
      }</row>`);

      // Row 2: Merged Subtitle Banner (A2:F2)
      rowsXml.push(`<row r="2" ht="22" customHeight="1">${
        colLetters.map((_, c) => makeCell(c, 2, c === 0 ? 'Gateway to Samar  |  City of Captivating Colors  |  Province of Samar, Philippines' : '', 2)).join('')
      }</row>`);

      // Row 3: Spacer
      rowsXml.push(`<row r="3" ht="10" customHeight="1"></row>`);

      // Row 4: Traveler Summary Row 1 (A4:B4 label, C4:D4 val, E4 label, F4 val)
      rowsXml.push(`<row r="4" ht="22" customHeight="1">${
        makeCell(0, 4, 'Traveler Name', 3) +
        makeCell(1, 4, '', 3) +
        makeCell(2, 4, visitorName, 4) +
        makeCell(3, 4, '', 4) +
        makeCell(4, 4, 'Reference Code', 3) +
        makeCell(5, 4, refCode, 5)
      }</row>`);

      // Row 5: Traveler Summary Row 2 (A5:B5 label, C5:D5 val, E5 label, F5 val)
      rowsXml.push(`<row r="5" ht="22" customHeight="1">${
        makeCell(0, 5, 'Contact Info', 3) +
        makeCell(1, 5, '', 3) +
        makeCell(2, 5, visitorContact, 4) +
        makeCell(3, 5, '', 4) +
        makeCell(4, 5, 'Preferred Date', 3) +
        makeCell(5, 5, travelDate, 4)
      }</row>`);

      // Row 6: Spacer
      rowsXml.push(`<row r="6" ht="12" customHeight="1"></row>`);

      // Row 7: Table Header
      const headers = ['#', 'Destination / Experience', 'Category', 'Location / Highlights', 'Best Time / Travel Tip', 'Status'];
      rowsXml.push(`<row r="7" ht="28" customHeight="1">${
        headers.map((h, c) => makeCell(c, 7, h, (c === 0 || c === 5) ? 7 : 6)).join('')
      }</row>`);

      // Row 8+: Data Rows with Zebra Striping
      savedTrips.forEach((item, idx) => {
        const rNum = 8 + idx;
        const [cat, loc, tip] = getTripMeta(item);
        const isAlt = idx % 2 === 1;
        const numStyle = isAlt ? 10 : 8;
        const txtStyle = isAlt ? 11 : 9;
        const statusStyle = 12;

        rowsXml.push(`<row r="${rNum}" ht="26" customHeight="1">${
          makeCell(0, rNum, idx + 1, numStyle, true) +
          makeCell(1, rNum, item, txtStyle) +
          makeCell(2, rNum, cat, txtStyle) +
          makeCell(3, rNum, loc, txtStyle) +
          makeCell(4, rNum, tip, txtStyle) +
          makeCell(5, rNum, statusLabel, statusStyle)
        }</row>`);
      });

      const lastDataRow = 7 + savedTrips.length;
      const footerRow = lastDataRow + 2;

      // Blank spacer + Footer banner
      rowsXml.push(`<row r="${lastDataRow + 1}" ht="10" customHeight="1"></row>`);
      rowsXml.push(`<row r="${footerRow}" ht="22" customHeight="1">${
        colLetters.map((_, c) => makeCell(c, footerRow, c === 0 ? `Catbalogan City Tourism Office  •  Total Saved Experiences: ${savedTrips.length}  •  Have a safe and memorable trip!` : '', 13)).join('')
      }</row>`);

      const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0" showGridLines="1"/>
  </sheetViews>
  <cols>
    <col min="1" max="1" width="7" customWidth="1"/>
    <col min="2" max="2" width="34" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="34" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
    <col min="6" max="6" width="17" customWidth="1"/>
  </cols>
  <sheetData>${rowsXml.join('')}</sheetData>
  <autoFilter ref="A7:F${lastDataRow}"/>
  <mergeCells count="7">
    <mergeCell ref="A1:F1"/>
    <mergeCell ref="A2:F2"/>
    <mergeCell ref="A4:B4"/>
    <mergeCell ref="C4:D4"/>
    <mergeCell ref="A5:B5"/>
    <mergeCell ref="C5:D5"/>
    <mergeCell ref="A${footerRow}:F${footerRow}"/>
  </mergeCells>
</worksheet>`;

      const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="8">
    <font><sz val="11"/><color rgb="FF1E293B"/><name val="Calibri"/></font>
    <font><b/><sz val="15"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
    <font><b/><sz val="10.5"/><color rgb="FF007366"/><name val="Calibri"/></font>
    <font><b/><sz val="10.5"/><color rgb="FF0C2333"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FF008779"/><name val="Calibri"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>
    <font><b/><sz val="10.5"/><color rgb="FF166534"/><name val="Calibri"/></font>
    <font><i/><sz val="10"/><color rgb="FF64748B"/><name val="Calibri"/></font>
  </fonts>
  <fills count="8">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF0C2333"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE6F4F1"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF1F5F9"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF008779"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF8FAFC"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFDCFCE7"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="FFCBD5E1"/></left>
      <right style="thin"><color rgb="FFCBD5E1"/></right>
      <top style="thin"><color rgb="FFCBD5E1"/></top>
      <bottom style="thin"><color rgb="FFCBD5E1"/></bottom>
    </border>
    <border>
      <left style="thin"><color rgb="FF007366"/></left>
      <right style="thin"><color rgb="FF007366"/></right>
      <top style="thin"><color rgb="FF007366"/></top>
      <bottom style="medium"><color rgb="FF0C2333"/></bottom>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="14">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="5" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="5" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="6" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="7" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
</styleSheet>`;

      const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`;

      const rootRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`;

      const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Catbalogan Itinerary" sheetId="1" r:id="rId1"/></sheets>
</workbook>`;

      const wbRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

      const xlsxBlob = createZipBlob([
        { name: '[Content_Types].xml', content: contentTypesXml },
        { name: '_rels/.rels', content: rootRelsXml },
        { name: 'xl/workbook.xml', content: workbookXml },
        { name: 'xl/_rels/workbook.xml.rels', content: wbRelsXml },
        { name: 'xl/styles.xml', content: stylesXml },
        { name: 'xl/worksheets/sheet1.xml', content: sheetXml }
      ]);

      const url = URL.createObjectURL(xlsxBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'catbalogan-itinerary.xlsx';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Downloaded catbalogan-itinerary.xlsx');
    }

    function applySpotFilters() {
      const query = (document.getElementById('spotsSearchInput')?.value || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.spot-card');
      let visibleCount = 0;

      cards.forEach(c => {
        const cat = c.getAttribute('data-category');
        const text = c.textContent.toLowerCase();
        const matchesCat = (currentCategory === 'all' || cat === currentCategory);
        const matchesSearch = (!query || text.includes(query));
        if (matchesCat && matchesSearch) {
          c.style.display = 'flex';
          visibleCount++;
        } else {
          c.style.display = 'none';
        }
      });

      const emptyMsg = document.getElementById('noSpotsMessage');
      if (emptyMsg) {
        emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    function filterSpots(category, event) {
      currentCategory = category;
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(b => b.classList.remove('active'));
      if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
      } else {
        document.querySelector(`.filter-btn[data-filter="${category}"]`)?.classList.add('active');
      }
      applySpotFilters();
    }

    function searchSpots() {
      applySpotFilters();
    }

    function resetSpotsFilter() {
      const searchEl = document.getElementById('spotsSearchInput');
      if (searchEl) searchEl.value = '';
      filterSpots('all');
    }

    function toggleMobileNav() {
      const nav = document.getElementById('siteNav');
      const icon = document.getElementById('menuToggleIcon');
      if (!nav) return;
      const isOpen = nav.classList.toggle('mobile-open');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    }

    document.querySelectorAll('#siteNav a').forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('siteNav');
        const icon = document.getElementById('menuToggleIcon');
        if (nav) nav.classList.remove('mobile-open');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        const nav = document.getElementById('siteNav');
        const icon = document.getElementById('menuToggleIcon');
        if (nav) nav.classList.remove('mobile-open');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });

    // ========================================================
    // MAP + STREET VIEW / 360 VIEWPOINT EXPLORER CONTROLLER
    // ========================================================
    const STREET_VIEW_TOUR = [
      {
        key: 'capitol',
        category: 'CITY CENTER &amp; HERITAGE',
        title: 'Samar Capitol Plaza',
        subtitle: 'Provincial Capitol Building entrance along Catbalogan City square.',
        img: '<?php echo $theme_uri; ?>/images/hero.jpg',
        mapsQuery: 'Samar+Provincial+Capitol,Catbalogan+City,Samar',
        lat: 11.7750,
        lng: 124.8850,
        heading: 20,
        zoom: 17
      },
      {
        key: 'obelisk',
        category: 'HISTORICAL LANDMARK',
        title: 'The Obelisk (Imelda Park)',
        subtitle: 'Capitol &amp; Imelda Park grounds honoring four Samar historical eras.',
        img: '<?php echo $theme_uri; ?>/images/obelisk.jpg',
        mapsQuery: 'Imelda+Park,Catbalogan+City,Samar',
        lat: 11.7742,
        lng: 124.8861,
        heading: 60,
        zoom: 17
      },
      {
        key: 'pieta',
        category: 'MEMORIAL HERITAGE',
        title: 'Pieta Park &amp; Cathedral Plaza',
        subtitle: 'Downtown plaza beside St. Bartholomew Parish Church.',
        img: '<?php echo $theme_uri; ?>/images/pieta.jpg',
        mapsQuery: 'St.+Bartholomew+Parish+Church,Catbalogan+City,Samar',
        lat: 11.7753,
        lng: 124.8829,
        heading: 120,
        zoom: 17
      },
      {
        key: 'tamalos',
        category: 'FOOD COURT &amp; MARKET',
        title: 'Catbalogan Public Market (Tamalos)',
        subtitle: 'Curry Ave &amp; Public Market food stalls serving warm Samar Tamalos.',
        img: '<?php echo $theme_uri; ?>/images/tamalos.jpg',
        mapsQuery: 'Catbalogan+City+Public+Market,Curry+Avenue,Catbalogan+City,Samar',
        lat: 11.7736,
        lng: 124.8799,
        heading: 90,
        zoom: 17
      },
      {
        key: 'corioso',
        category: 'BAKERY &amp; DELICACY SHOP',
        title: 'Charito&rsquo;s Delights (San Roque St.)',
        subtitle: 'San Roque Street bakeshop famous for Corioso cookies, roscas &amp; pastries.',
        img: '<?php echo $theme_uri; ?>/images/corioso.jpg',
        mapsQuery: 'Charito%27s+Delights,San+Roque+Street,Catbalogan+City,Samar',
        lat: 11.7752,
        lng: 124.8835,
        heading: 180,
        zoom: 17
      },
      {
        key: 'danggit',
        category: 'PASALUBONG &amp; FISH MARKET',
        title: 'Pier 1 Dried Fish &amp; Tapa Stalls',
        subtitle: 'Curry Avenue &amp; Pier 1 market stalls selling sun-dried danggit and tapa.',
        img: '<?php echo $theme_uri; ?>/images/danggit.jpg',
        mapsQuery: 'Catbalogan+Pier+1,Curry+Avenue,Catbalogan+City,Samar',
        lat: 11.7736,
        lng: 124.8799,
        heading: 240,
        zoom: 17
      },
      {
        key: 'crabs',
        category: 'DOWNTOWN FOOD COURTS',
        title: 'Rizal Ave &amp; Bayfront Seafood Grills',
        subtitle: 'Downtown dining strip &amp; food courts for fresh blue crabs and seafood.',
        img: '<?php echo $theme_uri; ?>/images/crabs.jpg',
        mapsQuery: 'Rizal+Avenue,Catbalogan+City,Samar',
        lat: 11.7753,
        lng: 124.8832,
        heading: 270,
        zoom: 17
      },
      {
        key: 'maqueda',
        category: 'SCENIC BAYFRONT',
        title: 'Catbalogan Bayfront Boulevard',
        subtitle: 'Coastal promenade overlooking Maqueda Bay at golden hour.',
        img: '<?php echo $theme_uri; ?>/images/maqueda.jpg',
        mapsQuery: 'Catbalogan+Boulevard,Catbalogan+City,Samar',
        lat: 11.7740,
        lng: 124.8795,
        heading: 260,
        zoom: 16
      },
      {
        key: 'buri',
        category: 'ISLAND BOARDWALK',
        title: 'Buri Baras Beach &amp; Island',
        subtitle: 'Brgy. Buri coastal boardwalk over crystal Samar Sea waters.',
        img: '<?php echo $theme_uri; ?>/images/buri.jpg',
        mapsQuery: 'Buri+Baras+Beach,Catbalogan+City,Samar',
        lat: 11.8100,
        lng: 124.8300,
        heading: 310,
        zoom: 15
      },
      {
        key: 'darahuway',
        category: 'ISLAND SANCTUARY',
        title: 'Darahuway Guti Island',
        subtitle: 'Island barangay off Catbalogan coast with clear snorkeling coves.',
        img: '<?php echo $theme_uri; ?>/images/darahuway.jpg',
        mapsQuery: '11.7490,124.8721',
        lat: 11.7490,
        lng: 124.8721,
        heading: 210,
        zoom: 15
      },
      {
        key: 'bangon',
        category: 'ECO-TOURISM TRAIL',
        title: 'Bangon Falls (Brgy. San Andres)',
        subtitle: 'Multi-tiered jungle cascade in Brgy. Bangon / San Andres, Catbalogan.',
        img: '<?php echo $theme_uri; ?>/images/bangon.jpg',
        mapsQuery: '11.8760,124.8781',
        lat: 11.8760,
        lng: 124.8781,
        heading: 45,
        zoom: 15
      }
    ];

    const svState = {
      index: 0,
      mode: 'split',
      mapType: 'm',
      scale: 1.15,
      panX: 0,
      panY: 0,
      dragging: false,
      startX: 0,
      startY: 0,
      pinchDist: 0,
      pinchStartScale: 1.15
    };

    function svUpdateEmbeds(node) {
      const zoom = node.zoom || 17;
      const mapFrame = document.getElementById('svMapFrame');
      if (mapFrame) {
        mapFrame.src = `https://maps.google.com/maps?q=${node.mapsQuery}&t=${svState.mapType}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
      }
      const gsvFrame = document.getElementById('svGsvFrame');
      if (gsvFrame && (svState.mode === 'street' || svState.mode === 'split')) {
        gsvFrame.src = `https://maps.google.com/maps?layer=c&cbll=${node.lat},${node.lng}&cbp=12,${node.heading},0,0,0&output=svembed`;
      }
    }

    function svSetMode(mode) {
      svState.mode = mode;
      const stage = document.getElementById('svStage');
      const gsvWrap = document.getElementById('svGsvWrap');
      const viewport = document.getElementById('svViewport');

      if (stage) {
        stage.className = 'sv-stage' + (mode !== 'split' ? ' mode-' + mode : '');
      }

      document.querySelectorAll('.sv-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });

      if (mode === 'street') {
        gsvWrap?.classList.add('active');
        viewport?.classList.add('hidden');
      } else {
        gsvWrap?.classList.remove('active');
        viewport?.classList.remove('hidden');
      }

      const node = STREET_VIEW_TOUR[svState.index];
      if (node && mode === 'street') {
        const gsvFrame = document.getElementById('svGsvFrame');
        if (gsvFrame) {
          gsvFrame.src = `https://maps.google.com/maps?layer=c&cbll=${node.lat},${node.lng}&cbp=12,${node.heading},0,0,0&output=svembed`;
        }
      }
    }

    function svToggleMapLayer() {
      svState.mapType = svState.mapType === 'm' ? 'h' : 'm';
      const lbl = document.getElementById('svMapLayerLabel');
      if (lbl) lbl.textContent = svState.mapType === 'm' ? 'Satellite' : 'Road Map';
      const node = STREET_VIEW_TOUR[svState.index];
      if (node) {
        const zoom = node.zoom || 17;
        const mapFrame = document.getElementById('svMapFrame');
        if (mapFrame) {
          mapFrame.src = `https://maps.google.com/maps?q=${node.mapsQuery}&t=${svState.mapType}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
        }
      }
    }

    function svApplyTransform() {
      const img = document.getElementById('svImage');
      const vp = document.getElementById('svViewport');
      if (!img || !vp) return;

      const maxPanX = Math.max(80, (vp.clientWidth * (svState.scale - 0.85)) * 0.48);
      const maxPanY = Math.max(50, (vp.clientHeight * (svState.scale - 0.85)) * 0.45);
      svState.panX = Math.max(-maxPanX, Math.min(maxPanX, svState.panX));
      svState.panY = Math.max(-maxPanY, Math.min(maxPanY, svState.panY));

      img.style.transform = `translate(calc(-50% + ${svState.panX}px), calc(-50% + ${svState.panY}px)) scale(${svState.scale})`;

      const readout = document.getElementById('svZoomReadout');
      if (readout) readout.textContent = svState.scale.toFixed(1) + 'x';

      const needle = document.getElementById('svCompassNeedle');
      if (needle) {
        const headingDeg = (-svState.panX / 6).toFixed(1);
        needle.style.transform = `rotate(${headingDeg}deg)`;
      }
    }

    function svRenderNode(idx) {
      svState.index = Math.max(0, Math.min(STREET_VIEW_TOUR.length - 1, idx));
      const node = STREET_VIEW_TOUR[svState.index];
      const img = document.getElementById('svImage');
      if (img) {
        img.style.opacity = '0.35';
        img.src = node.img;
        img.alt = node.title;
        img.onload = () => { img.style.opacity = '1'; };
      }

      document.getElementById('svCategoryLabel').innerHTML = node.category;
      document.getElementById('svTitle').innerHTML = node.title;
      document.getElementById('svSubtitle').innerHTML = node.subtitle;
      document.getElementById('svStepLabel').textContent = `${svState.index + 1} / ${STREET_VIEW_TOUR.length}`;
      const pinLbl = document.getElementById('svMapPinLabel');
      if (pinLbl) pinLbl.innerHTML = node.title;

      const gLink = document.getElementById('svGoogleMapsLink');
      if (gLink) {
        gLink.href = `https://www.google.com/maps/search/?api=1&query=${node.mapsQuery}`;
      }

      svUpdateEmbeds(node);

      const fwdBtn = document.getElementById('svForwardBtn');
      const backBtn = document.getElementById('svBackBtn');
      if (fwdBtn) fwdBtn.disabled = (svState.index >= STREET_VIEW_TOUR.length - 1);
      if (backBtn) backBtn.disabled = (svState.index <= 0);

      document.querySelectorAll('.sv-thumb').forEach((el, i) => {
        el.classList.toggle('active', i === svState.index);
        if (i === svState.index) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });

      svState.scale = 1.15;
      svState.panX = 0;
      svState.panY = 0;
      svApplyTransform();
    }

    function svBuildStrip() {
      const strip = document.getElementById('svThumbStrip');
      if (!strip || strip.children.length > 0) return;
      STREET_VIEW_TOUR.forEach((node, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sv-thumb';
        btn.innerHTML = `<img src="${node.img}" alt=""><span>${node.title}</span>`;
        btn.addEventListener('click', () => svRenderNode(i));
        strip.appendChild(btn);
      });
    }

    function svToggleTopbarMinimize(forceState) {
      const modal = document.getElementById('streetViewModal');
      const pill = document.getElementById('svTopbarRestorePill');
      const minText = document.getElementById('svMinimizeText');
      const minIcon = document.getElementById('svMinimizeIcon');
      if (!modal) return;
      const shouldMinimize = (typeof forceState === 'boolean')
        ? forceState
        : !modal.classList.contains('topbar-minimized');
      svState.topbarMinimized = shouldMinimize;
      if (shouldMinimize) {
        modal.classList.add('topbar-minimized');
        if (pill) {
          pill.style.display = 'inline-flex';
          const pillTitle = document.getElementById('svPillTitle');
          const node = STREET_VIEW_TOUR[svState.index];
          if (pillTitle && node) pillTitle.textContent = node.title;
        }
        if (minText) minText.textContent = 'Expand';
        if (minIcon) minIcon.className = 'fa-solid fa-expand';
      } else {
        modal.classList.remove('topbar-minimized');
        if (pill) pill.style.display = 'none';
        if (minText) minText.textContent = 'Minimize';
        if (minIcon) minIcon.className = 'fa-solid fa-compress';
      }
      setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 120);
    }

    function openStreetView(key) {
      svBuildStrip();
      svSetMode('split');
      const idx = STREET_VIEW_TOUR.findIndex(item => item.key === key);
      svRenderNode(idx >= 0 ? idx : 0);
      const modal = document.getElementById('streetViewModal');
      modal?.classList.add('open');
      modal?.classList.remove('topbar-minimized');
      const pill = document.getElementById('svTopbarRestorePill');
      if (pill) pill.style.display = 'none';
      const minText = document.getElementById('svMinimizeText');
      const minIcon = document.getElementById('svMinimizeIcon');
      if (minText) minText.textContent = 'Minimize';
      if (minIcon) minIcon.className = 'fa-solid fa-compress';
    }

    function closeStreetView() {
      const modal = document.getElementById('streetViewModal');
      modal?.classList.remove('open');
      modal?.classList.remove('topbar-minimized');
      const pill = document.getElementById('svTopbarRestorePill');
      if (pill) pill.style.display = 'none';
      const minText = document.getElementById('svMinimizeText');
      const minIcon = document.getElementById('svMinimizeIcon');
      if (minText) minText.textContent = 'Minimize';
      if (minIcon) minIcon.className = 'fa-solid fa-compress';
    }

    function svMoveStep(delta) {
      const next = svState.index + delta;
      if (next < 0 || next >= STREET_VIEW_TOUR.length) return;
      svRenderNode(next);
    }

    function svPanBy(dx, dy) {
      svState.panX += dx;
      svState.panY += dy;
      svApplyTransform();
    }

    function svZoom(delta) {
      svState.scale = Math.max(1.0, Math.min(3.5, Number((svState.scale + delta).toFixed(2))));
      svApplyTransform();
    }

    function svResetView() {
      svState.scale = 1.15;
      svState.panX = 0;
      svState.panY = 0;
      svApplyTransform();
    }

    (function initStreetViewControls() {
      const vp = document.getElementById('svViewport');
      if (!vp) return;

      // Mouse drag to pan viewpoint
      vp.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, a, .sv-compass')) return;
        svState.dragging = true;
        svState.startX = e.clientX - svState.panX;
        svState.startY = e.clientY - svState.panY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!svState.dragging) return;
        svState.panX = e.clientX - svState.startX;
        svState.panY = e.clientY - svState.startY;
        svApplyTransform();
      });

      window.addEventListener('mouseup', () => {
        svState.dragging = false;
      });

      // Mouse wheel to zoom viewpoint
      vp.addEventListener('wheel', (e) => {
        e.preventDefault();
        svZoom(e.deltaY < 0 ? 0.18 : -0.18);
      }, { passive: false });

      // Touch drag (1 finger) & Pinch-to-Zoom (2 fingers)
      const getTouchDist = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.hypot(dx, dy);
      };

      vp.addEventListener('touchstart', (e) => {
        if (e.target.closest('button, a, .sv-compass')) return;
        if (e.touches.length === 1) {
          svState.dragging = true;
          svState.startX = e.touches[0].clientX - svState.panX;
          svState.startY = e.touches[0].clientY - svState.panY;
        } else if (e.touches.length === 2) {
          svState.dragging = false;
          svState.pinchDist = getTouchDist(e.touches);
          svState.pinchStartScale = svState.scale;
        }
      }, { passive: true });

      vp.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && svState.dragging) {
          e.preventDefault();
          svState.panX = e.touches[0].clientX - svState.startX;
          svState.panY = e.touches[0].clientY - svState.startY;
          svApplyTransform();
        } else if (e.touches.length === 2 && svState.pinchDist > 0) {
          e.preventDefault();
          const dist = getTouchDist(e.touches);
          const ratio = dist / svState.pinchDist;
          svState.scale = Math.max(1.0, Math.min(3.5, Number((svState.pinchStartScale * ratio).toFixed(2))));
          svApplyTransform();
        }
      }, { passive: false });

      vp.addEventListener('touchend', () => {
        svState.dragging = false;
        svState.pinchDist = 0;
      });
    })();

    document.addEventListener('keydown', (e) => {
      const svOpen = document.getElementById('streetViewModal')?.classList.contains('open');
      if (svOpen) {
        if (e.key === 'ArrowUp') { e.preventDefault(); svMoveStep(1); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); svMoveStep(-1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); svPanBy(90, 0); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); svPanBy(-90, 0); }
        else if (e.key === '+' || e.key === '=') { svZoom(0.25); }
        else if (e.key === '-') { svZoom(-0.25); }
      }

      if (e.key === 'Escape') {
        document.getElementById('tripDrawerBackdrop')?.classList.remove('open');
        document.getElementById('scheduleModal')?.classList.remove('open');
        closeDetailModal();
        closeStreetView();
        const nav = document.getElementById('siteNav');
        const icon = document.getElementById('menuToggleIcon');
        if (nav) nav.classList.remove('mobile-open');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });

    window.addEventListener('scroll', () => {
      const sections = ['home', 'about', 'spots', 'culture', 'food', 'products'];
      const scrollPos = window.scrollY + 120;
      let activeId = 'home';

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        activeId = 'products';
      } else {
        sections.forEach(secId => {
          const sec = document.getElementById(secId);
          if (sec && scrollPos >= sec.offsetTop) {
            activeId = secId;
          }
        });
      }

      document.querySelectorAll('.site-nav a').forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.site-nav a[href="#${activeId}"]`);
      if (activeLink) activeLink.classList.add('active');
    });

    document.addEventListener('DOMContentLoaded', updateTripUI);
  </script>
  <?php wp_footer(); ?>
</body>
</html>

# Dungaw Catbalogan - City Tourism & Virtual Experience Portal

Official tourism portal for **Catbalogan City — The Gateway to Samar & City of Captivating Colors**.

---

## 🌟 Features Included

1. **Dual Brand Header & Navigation**
   - Official Catbalogan Seal + Dungaw Catbalogan branding
   - Sticky navigation with dynamic scroll-spy active indicators:
     - `Home` (`#home`)
     - `About Catbalogan` (`#about` & dedicated `about.html`)
     - `Tourist Spots` (`#spots`)
     - `Culture & Festivals` (`#culture`)
     - `Food & Delicacies` (`#food`)
     - `Local Products` (`#products`)

2. **Hero Showcase**
   - High-resolution Samar Provincial Capitol Building backdrop
   - Framing badge "GATEWAY TO SAMAR"
   - Headline: "DISCOVER THE SOUL OF CATBALOGAN"
   - Quick CTA buttons: *Explore Destinations* & *Discover Our Culture*
   - Floating badge for "EASTERN VISAYAS" + persistent "My Trip" badge counter

3. **Destination Explorer & Filter Engine**
   - Dynamic category filtering: *All Destinations*, *Islands & Beaches*, *Nature & Falls*, *Historical & Heritage*
   - Real-time instant search input
   - Interactive destination cards:
     - Buri Island Boardwalk
     - Bangon Falls
     - The Obelisk (Imelda Park)
     - Pieta Park & Cathedral Plaza
     - Darahuway Guti Island
     - Maqueda Bay Sunset Boulevard

4. **Interactive 360° Viewpoint & Google Maps Explorer Modal**
   - Multi-mode split view:
     - **Map + View**: Split stage featuring live interactive Google Maps and 360° viewpoint canvas
     - **Map Only**: Full-width interactive map with business details, rating, and direct Maps link
     - **Google Street View**: Real Google Street View embed
     - **Photo 360°**: Panoramic canvas with drag-to-look, pinch/scroll zoom, compass, and forward/backward waypoint traversal
   - Carousel strip with fast thumbnail switching between 11 iconic locations

5. **Culture & Festival Feature Banner**
   - Highlight on **Manaragat Festival** (devotion to St. Bartholomew every August)
   - Oceanic street dance costume visual showcase
   - Festival schedule and instant trip save button

6. **Culinary Heritage & Food Stalls**
   - Famous Catbalogan flavors: *Tamalos*, *Maqueda Blue Crabs*, *Samar Danggit & Tapa*, *Corioso & Pastries*
   - Direct modal triggers with tasting locations, market stalls, and 360° street view pins

7. **Lara Samar & Handcrafted Goods**
   - Woven Tikog grass *banig* crafts, modern bags, pasalubong food packs, and sustainable shellcraft
   - Detailed modal previews with local artisan cooperatives

8. **"My Trip Planner" Drawer & Client-Side Excel (.xlsx) Exporter**
   - Save/remove any destination or food experience
   - Persistent `localStorage` trip state
   - Booking / inquiry submission with instant reference code (e.g. `DC-220404`)
   - **Real Excel (.xlsx) Generation**: Generates and downloads styled `.xlsx` spreadsheets complete with branded headers, custom colors, metadata, and status badges without any external backend dependencies.

---

## 🚀 How to Run Locally

### Option 1: One-Click Launch (Windows)
Double-click `start-server.bat`. It will start a local Python HTTP server on port 8080 and immediately open your browser to `http://localhost:8080/index.html`.

### Option 2: Python Command Line
```powershell
python -m http.server 8080
```
Then navigate to: `http://localhost:8080/index.html`

### Option 3: Node / NPX
```powershell
npx serve .
```

### Option 4: WordPress Theme Deployment
A ready-to-use WordPress theme package is available in:
`wordpress-theme/catbalogan-portal`
Copy this folder to `wp-content/themes/` in your WordPress installation and activate it under **Appearance > Themes**.



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
        img: './images/buri.jpg',
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
        img: './images/bangon.jpg',
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
        img: './images/obelisk.jpg',
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
        img: './images/pieta.jpg',
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
        img: './images/darahuway.jpg',
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
        img: './images/maqueda.jpg',
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
        img: './images/obelisk.jpg',
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
        img: './images/buri.jpg',
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
        img: './images/manaragat.jpg',
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
        img: './images/tamalos.jpg',
        tripName: 'Food Trail: Samar Tamalos',
        orderKey: 'tamalos-pack',
        body: 'Inspired by Hispanic-era tamales and perfected by Samar kitchens, Catbalogan Tamalos pairs tender pork belly with rich roasted peanut sauce steamed inside fragrant banana leaves.',
        meta: [
          '<strong><i class="fa-solid fa-tag" style="color:#ea580c"></i> Online Order Price:</strong> &#8369;280 / Heritage Box of 6',
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Try:</strong> Catbalogan Public Market &amp; Heritage Kitchens',
          '<strong><i class="fa-solid fa-bowl-food" style="color:var(--teal-primary)"></i> Key Ingredients:</strong> Pork Belly, Roasted Peanuts, Rice Flour, Annatto',
          '<strong><i class="fa-solid fa-star" style="color:var(--teal-primary)"></i> Tip:</strong> Best enjoyed warm for breakfast or merienda'
        ]
      },
      'crabs': {
        tag: 'FRESH FROM MAQUEDA BAY',
        title: 'Maqueda Blue Crabs',
        img: './images/crabs.jpg',
        tripName: 'Food Trail: Maqueda Bay Seafood',
        orderKey: 'crabs-pack',
        body: 'Catbalogan&rsquo;s coastal waters yield sweet, meaty blue crabs (masag), prawns, and fresh reef fish landed daily by local fishermen.',
        meta: [
          '<strong><i class="fa-solid fa-tag" style="color:#ea580c"></i> Online Order Price:</strong> &#8369;550 / 1kg Steamed Travel Pack',
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Try:</strong> Bayfront Seafood Grills &amp; Morning Fish Port',
          '<strong><i class="fa-solid fa-fire" style="color:var(--teal-primary)"></i> Popular Style:</strong> Steamed with Calamansi or Cooked in Coconut Milk',
          '<strong><i class="fa-solid fa-clock" style="color:var(--teal-primary)"></i> Fresh Catch:</strong> Early morning &amp; sunset markets'
        ]
      },
      'danggit': {
        tag: 'ARTISANAL PASALUBONG',
        title: 'Samar Danggit &amp; Tapa',
        img: './images/danggit.jpg',
        tripName: 'Pasalubong: Samar Danggit &amp; Tapa',
        orderKey: 'danggit-pack',
        body: 'Naturally sun-dried rabbitfish (danggit), boneless squid, and cured tapa prepared by coastal families&mdash;crispy, savory, and vacuum-packed for travel.',
        meta: [
          '<strong><i class="fa-solid fa-tag" style="color:#ea580c"></i> Online Order Price:</strong> &#8369;350 / 250g Vacuum-Sealed Pack',
          '<strong><i class="fa-solid fa-bag-shopping" style="color:var(--teal-primary)"></i> Where to Buy:</strong> Catbalogan Dried Fish Stalls &amp; Pasalubong Center',
          '<strong><i class="fa-solid fa-plane" style="color:var(--teal-primary)"></i> Travel Friendly:</strong> Available sealed for hand-carry or luggage',
          '<strong><i class="fa-solid fa-utensils" style="color:var(--teal-primary)"></i> Pairing:</strong> Serve with spiced vinegar and garlic rice'
        ]
      },
      'corioso': {
        tag: 'LEGACY BAKERY SPECIALTY',
        title: 'Corioso &amp; Local Pastries',
        img: './images/corioso.jpg',
        tripName: 'Pasalubong: Corioso &amp; Pastries',
        orderKey: 'corioso-pack',
        body: 'Crisp, buttery Corioso cookies, roscas, and traditional Samar baked treats passed down by multi-generational Catbalogan family bakeries.',
        meta: [
          '<strong><i class="fa-solid fa-tag" style="color:#ea580c"></i> Online Order Price:</strong> &#8369;220 / Heritage Pastry Box',
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
        orderKey: 'banig-mat',
        body: 'Hand-dyed tikog grass is woven by skilled women artisans into intricate geometric banig mats, structured totes, laptop sleeves, and modern home pieces.',
        itemsTitle: 'Featured Handwoven Tikog Pieces (Available for Online Order)',
        items: [
          {
            title: 'Traditional Samar Banig Mat',
            priceLabel: '&#8369;650 / mat',
            orderKey: 'banig-mat',
            desc: 'Hand-dyed, sun-dried tikog reed mats woven with intricate geometric floral and heritage patterns.',
            icon: 'fa-solid fa-layer-group',
            iconBg: '#fdf2f8',
            iconColor: '#db2777',
            tripItem: 'Shopping: Lara Samar Banig Mat'
          },
          {
            title: 'Banig Designer Totes &amp; Clutches',
            priceLabel: '&#8369;1,250 / bag',
            orderKey: 'banig-bag',
            desc: 'Modern everyday handbags, leather-trimmed totes, and woven evening clutches crafted by Samar women weavers.',
            icon: 'fa-solid fa-bag-shopping',
            iconBg: '#fef3c7',
            iconColor: '#d97706',
            tripItem: 'Shopping: Banig Designer Bag'
          },
          {
            title: 'Tikog Table Runners &amp; Wall Art',
            priceLabel: '&#8369;480 / set',
            orderKey: 'tikog-decor',
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
        img: './images/corioso.jpg',
        svKey: 'corioso',
        tripName: 'Shopping: Catbalogan Pasalubong Box',
        orderKey: 'pasalubong-bundle',
        body: 'Combine Catbalogan&rsquo;s best local foods and delicacies in one travel-ready gift pack &mdash; choose from heritage bakeshop cookies, sun-dried seafood, savory tamalos, and waterfront favorites:',
        itemsTitle: 'Foods &amp; Delicacies Inside Gift Packs (Available for Online Order)',
        items: [
          {
            title: 'Corioso Cookies &amp; Heritage Pastries',
            priceLabel: '&#8369;220 / box',
            orderKey: 'corioso-pack',
            desc: 'Crisp butter Corioso biscuits, sweet roscas, and native cacao tablea rounds baked fresh at downtown family bakeshops.',
            img: './images/corioso.jpg',
            svKey: 'corioso',
            tripItem: 'Pasalubong: Corioso & Pastries'
          },
          {
            title: 'Samar Danggit &amp; Dried Seafood Tapa',
            priceLabel: '&#8369;350 / pack',
            orderKey: 'danggit-pack',
            desc: 'Sun-dried rabbitfish (danggit), dried squid, and cured boneless tapa vacuum-sealed for airport-safe travel.',
            img: './images/danggit.jpg',
            svKey: 'danggit',
            tripItem: 'Pasalubong: Samar Danggit & Tapa'
          },
          {
            title: 'Samar Tamalos Heritage Pack',
            priceLabel: '&#8369;280 / box',
            orderKey: 'tamalos-pack',
            desc: 'Savory steamed rice cake layered with slow-braised pork and spicy peanut sauce wrapped in fragrant banana leaves.',
            img: './images/tamalos.jpg',
            svKey: 'tamalos',
            tripItem: 'Food Trail: Samar Tamalos'
          },
          {
            title: 'Maqueda Bay Crabs &amp; Bayfront Catch',
            priceLabel: '&#8369;550 / pack',
            orderKey: 'crabs-pack',
            desc: 'Sweet steamed blue crabs and chilled coastal catch packed at waterfront markets for regional take-home feasts.',
            img: './images/crabs.jpg',
            svKey: 'crabs',
            tripItem: 'Food Trail: Maqueda Bay Crabs'
          }
        ],
        meta: [
          '<strong><i class="fa-solid fa-store" style="color:var(--teal-primary)"></i> Where to Buy:</strong> City Tourism Hub &amp; Downtown Market',
          '<strong><i class="fa-solid fa-box-open" style="color:var(--teal-primary)"></i> Contents:</strong> Customizable sweet &amp; savory selections (or &#8369;680 All-in-One Gift Box)',
          '<strong><i class="fa-solid fa-tag" style="color:var(--teal-primary)"></i> Tip:</strong> Ask vendors for airport-safe double sealing'
        ]
      },
      'shellcraft': {
        tag: 'COASTAL ARTISAN GOODS',
        title: 'Community Shellcraft &amp; D&eacute;cor',
        img: './images/darahuway.jpg',
        svKey: 'darahuway',
        tripName: 'Shopping: Community Shellcraft',
        orderKey: 'shell-chimes',
        body: 'Island artisans craft wind chimes, lampshades, jewelry, and coastal home accents using sustainably gathered shells and natural driftwood.',
        itemsTitle: 'Handcrafted Coastal Items (Available for Online Order)',
        items: [
          {
            title: 'Capiz &amp; Sea Shell Wind Chimes',
            priceLabel: '&#8369;320 / pc',
            orderKey: 'shell-chimes',
            desc: 'Hand-strung coastal chimes and coastal wall mobiles crafted by women-led cooperatives across Darahuway &amp; island barangays.',
            img: './images/darahuway.jpg',
            svKey: 'darahuway',
            tripItem: 'Shopping: Coastal Shell Wind Chimes'
          },
          {
            title: 'Woven Driftwood &amp; Shell Lamps',
            priceLabel: '&#8369;890 / lamp',
            orderKey: 'shell-lamp',
            desc: 'Warm coastal tabletop lamps and decorative trays combining pearlescent shells with natural island fibers.',
            icon: 'fa-solid fa-lightbulb',
            iconBg: '#f0fdf4',
            iconColor: '#16a34a',
            tripItem: 'Shopping: Shellcraft Home Lamps'
          },
          {
            title: 'Island Shell Jewelry &amp; Keepsakes',
            priceLabel: '&#8369;180 / set',
            orderKey: 'shell-jewelry',
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
        img: './images/hero.jpg',
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
        const emptyWrap = document.createElement('div');
        emptyWrap.style.cssText = 'text-align: center; padding: 14px 8px; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; margin-bottom: 12px;';
        emptyWrap.innerHTML = `
          <p style="font-size: 13px; color: #64748b; margin-bottom: 10px;">No destinations saved yet. Quick-add popular spots to your trip:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;">
            <button type="button" onclick="addToTrip('Buri Island Boardwalk')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ Buri Island</button>
            <button type="button" onclick="addToTrip('Bangon Falls')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ Bangon Falls</button>
            <button type="button" onclick="addToTrip('The Obelisk')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ The Obelisk</button>
            <button type="button" onclick="addToTrip('Darahuway Guti Island')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ Darahuway Guti</button>
            <button type="button" onclick="addToTrip('Pieta Park')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ Pieta Park</button>
            <button type="button" onclick="addToTrip('Maqueda Bay Sunset')" style="padding: 5px 10px; border-radius: 20px; border: 1px solid #0f8b84; background: #fff; color: #0f8b84; font-size: 11.5px; font-weight: 700; cursor: pointer;">+ Sunset Boulevard</button>
          </div>
        `;
        list.appendChild(emptyWrap);
        return;
      }

      savedTrips.forEach((item, idx) => {
        const [cat, loc, vehicle, fare] = getTripMeta(item);
        const row = document.createElement('div');
        row.className = 'saved-trip-item';
        row.style.cssText = 'display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 10px 12px;';

        const infoWrap = document.createElement('div');
        infoWrap.style.cssText = 'display: flex; flex-direction: column; gap: 4px; flex: 1;';

        const label = document.createElement('span');
        label.style.cssText = 'font-weight: 700; color: #0c2333; font-size: 13.5px;';
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-location-dot';
        icon.style.cssText = 'color: #008779; margin-right: 7px;';
        label.appendChild(icon);
        label.appendChild(document.createTextNode(item));

        const transitInfo = document.createElement('div');
        transitInfo.style.cssText = 'display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font-size: 11.5px; color: #475569; margin-left: 18px;';
        transitInfo.innerHTML = `
          <span style="background: #f1f5f9; color: #0f172a; padding: 2px 7px; border-radius: 6px; font-weight: 600;">
            <i class="fa-solid fa-van-shuttle" style="color: #0f8b84; margin-right: 3px;"></i>${vehicle}
          </span>
          <span style="background: #fff7ed; color: #ea580c; border: 1px solid #ffedd5; padding: 2px 7px; border-radius: 6px; font-weight: 700;">
            ${fare}
          </span>
        `;

        infoWrap.appendChild(label);
        infoWrap.appendChild(transitInfo);

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'remove-trip-btn';
        delBtn.title = 'Remove';
        delBtn.innerHTML = '&times;';
        delBtn.addEventListener('click', () => removeTripByIndex(idx));

        row.appendChild(infoWrap);
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
            titleEl.innerHTML = `<span>${item.title}</span>` + (item.priceLabel ? `<span class="modal-item-price">${item.priceLabel}</span>` : '');
            info.appendChild(titleEl);

            const descEl = document.createElement('p');
            descEl.className = 'modal-item-desc';
            descEl.innerHTML = item.desc;
            info.appendChild(descEl);

            const actions = document.createElement('div');
            actions.className = 'modal-item-actions';

            if (item.orderKey) {
              const orderBtn = document.createElement('button');
              orderBtn.type = 'button';
              orderBtn.className = 'modal-item-order-btn';
              orderBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Buy / Order Online';
              orderBtn.addEventListener('click', () => {
                closeDetailModal();
                openOrderModal(item.orderKey);
              });
              actions.appendChild(orderBtn);
            }

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

      const footerEl = document.getElementById('detailModalFooter');
      let orderMainBtn = document.getElementById('detailModalOrderMainBtn');
      if (footerEl && !orderMainBtn) {
        orderMainBtn = document.createElement('button');
        orderMainBtn.type = 'button';
        orderMainBtn.id = 'detailModalOrderMainBtn';
        orderMainBtn.className = 'btn-order-modal-main';
        footerEl.insertBefore(orderMainBtn, footerEl.firstChild);
      }
      if (orderMainBtn) {
        if (data.orderKey) {
          orderMainBtn.style.display = 'inline-flex';
          orderMainBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Order / Buy Online Now';
          orderMainBtn.onclick = () => {
            closeDetailModal();
            openOrderModal(data.orderKey);
          };
        } else {
          orderMainBtn.style.display = 'none';
        }
      }

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

      const transitBtn = document.getElementById('detailModalTransitBtn');
      if (transitBtn) {
        const routeTarget = data.svKey || key;
        transitBtn.style.display = 'inline-flex';
        transitBtn.onclick = () => {
          window.location.href = 'transit.html?to=' + encodeURIComponent(routeTarget);
        };
      }
    }

    function closeDetailModal() {
      document.getElementById('detailModal')?.classList.remove('open');
    }

    /* ==========================================================
       ONLINE PASALUBONG & HANDCRAFTED PRODUCTS ORDER MODAL
       ========================================================== */
    const ONLINE_PRODUCTS_CATALOG = {
      'corioso-pack': {
        name: 'Corioso Cookies & Heritage Pastries Box',
        category: 'Pasalubong Gift Packs',
        seller: 'Catbalogan Downtown Heritage Bakeshops',
        price: 220,
        unit: 'per box (350g)',
        tripItem: 'Pasalubong: Corioso & Pastries'
      },
      'danggit-pack': {
        name: 'Samar Danggit & Dried Seafood Tapa (Vacuum-Sealed)',
        category: 'Pasalubong Gift Packs',
        seller: 'Catbalogan Pier 1 Dried Fish Artisans',
        price: 350,
        unit: 'per 250g pack',
        tripItem: 'Pasalubong: Samar Danggit & Tapa'
      },
      'tamalos-pack': {
        name: 'Samar Tamalos Heritage Pack (Box of 6)',
        category: 'Pasalubong Gift Packs',
        seller: 'Catbalogan Public Market Heritage Kitchens',
        price: 280,
        unit: 'per box of 6',
        tripItem: 'Food Trail: Samar Tamalos'
      },
      'crabs-pack': {
        name: 'Maqueda Bay Steamed Blue Crabs (Travel Cooler Pack)',
        category: 'Pasalubong Gift Packs',
        seller: 'Maqueda Bay Coastal Fisheries',
        price: 550,
        unit: 'per 1kg pack',
        tripItem: 'Food Trail: Maqueda Bay Seafood'
      },
      'pasalubong-bundle': {
        name: 'All-in-One Catbalogan Pasalubong Gift Box (Assorted)',
        category: 'Pasalubong Gift Packs',
        seller: 'Catbalogan City Tourism & Pasalubong Hub',
        price: 680,
        unit: 'per curated box',
        tripItem: 'Shopping: Catbalogan Pasalubong Box'
      },
      'banig-mat': {
        name: 'Traditional Lara Samar Handwoven Tikog Banig Mat',
        category: 'Lara Samar Woven Mats',
        seller: 'Lara Samar Women Weavers Cooperative',
        price: 650,
        unit: 'per woven mat',
        tripItem: 'Shopping: Lara Samar Woven Goods'
      },
      'banig-bag': {
        name: 'Lara Samar Banig Designer Tote & Evening Clutch',
        category: 'Lara Samar Woven Mats',
        seller: 'Lara Samar Women Weavers Cooperative',
        price: 1250,
        unit: 'per designer bag',
        tripItem: 'Shopping: Lara Samar Woven Goods'
      },
      'tikog-decor': {
        name: 'Tikog Woven Table Runner & Placemat Set',
        category: 'Lara Samar Woven Mats',
        seller: 'Lara Samar Women Weavers Cooperative',
        price: 480,
        unit: 'per home decor set',
        tripItem: 'Shopping: Lara Samar Woven Goods'
      },
      'shell-chimes': {
        name: 'Capiz & Sea Shell Coastal Wind Chimes',
        category: 'Community Shellcraft',
        seller: 'Darahuway & Island Barangay Artisan Co-op',
        price: 320,
        unit: 'per piece',
        tripItem: 'Shopping: Community Shellcraft'
      },
      'shell-lamp': {
        name: 'Woven Driftwood & Pearlescent Shell Tabletop Lamp',
        category: 'Community Shellcraft',
        seller: 'Darahuway & Island Barangay Artisan Co-op',
        price: 890,
        unit: 'per handcrafted lamp',
        tripItem: 'Shopping: Community Shellcraft'
      },
      'shell-jewelry': {
        name: 'Island Shell Jewelry & Souvenir Keepsakes Set',
        category: 'Community Shellcraft',
        seller: 'Catbalogan Coastal Livelihood Artisans',
        price: 180,
        unit: 'per gift set',
        tripItem: 'Shopping: Community Shellcraft'
      }
    };

    function ensureOrderModalExists() {
      if (document.getElementById('orderModal')) return;
      const modalHtml = `
      <div class="modal-backdrop" id="orderModal" onclick="if(event.target===this) closeOrderModal()">
        <div class="modal-card" style="max-width: 520px;">
          <div class="drawer-header" style="background: linear-gradient(135deg, #0c2333 0%, #133952 100%); color: #fff;">
            <h3 style="color:#fff; display:flex; align-items:center; gap:8px; font-size:17px;">
              <i class="fa-solid fa-cart-shopping" style="color: #f97316;"></i>
              <span>Order Catbalogan Local Products Online</span>
            </h3>
            <button class="drawer-close-btn" aria-label="Close order modal" onclick="closeOrderModal()" style="color:#fff;">&times;</button>
          </div>
          <div class="drawer-body" id="orderModalBody">
            <form id="onlineOrderForm" class="order-form-grid" onsubmit="submitOnlineOrder(event)">
              <div class="order-field">
                <label for="orderProductSelect">1. Select Product / Pasalubong Item</label>
                <select id="orderProductSelect" onchange="updateOrderCalculation()">
                  <optgroup label="Pasalubong Gift Packs &amp; Delicacies">
                    <option value="corioso-pack">Corioso Cookies &amp; Heritage Pastries Box — &#8369;220</option>
                    <option value="danggit-pack">Samar Danggit &amp; Dried Seafood Tapa (250g) — &#8369;350</option>
                    <option value="tamalos-pack">Samar Tamalos Heritage Pack (Box of 6) — &#8369;280</option>
                    <option value="crabs-pack">Maqueda Bay Steamed Blue Crabs (1kg Pack) — &#8369;550</option>
                    <option value="pasalubong-bundle">All-in-One Catbalogan Pasalubong Gift Box — &#8369;680</option>
                  </optgroup>
                  <optgroup label="Lara Samar Woven Mats &amp; Bags">
                    <option value="banig-mat">Traditional Samar Handwoven Banig Mat — &#8369;650</option>
                    <option value="banig-bag">Banig Designer Tote &amp; Evening Clutch — &#8369;1,250</option>
                    <option value="tikog-decor">Tikog Woven Table Runner &amp; Home Decor — &#8369;480</option>
                  </optgroup>
                  <optgroup label="Community Shellcraft &amp; Coastal Keepsakes">
                    <option value="shell-chimes">Capiz &amp; Sea Shell Coastal Wind Chimes — &#8369;320</option>
                    <option value="shell-lamp">Woven Driftwood &amp; Shell Tabletop Lamp — &#8369;890</option>
                    <option value="shell-jewelry">Island Shell Jewelry &amp; Keepsakes Set — &#8369;180</option>
                  </optgroup>
                </select>
                <div id="orderSellerBadge" style="font-size:11.5px; color:#0f8b84; font-weight:600; margin-top:4px;"></div>
              </div>

              <div class="order-qty-row">
                <div class="order-field">
                  <label for="orderQtyInput">2. Quantity</label>
                  <div class="qty-stepper">
                    <button type="button" onclick="adjustOrderQty(-1)">&minus;</button>
                    <input type="number" id="orderQtyInput" value="1" min="1" max="50" onchange="updateOrderCalculation()" required>
                    <button type="button" onclick="adjustOrderQty(1)">+</button>
                  </div>
                </div>
                <div class="order-field">
                  <label for="orderDeliverySelect">3. Delivery / Pickup Method</label>
                  <select id="orderDeliverySelect" onchange="updateOrderCalculation()">
                    <option value="pickup" data-fee="0">Pasalubong Hub Pickup (FREE)</option>
                    <option value="hotel" data-fee="50">Catbalogan Hotel / Pier Drop-Off (+&#8369;50)</option>
                    <option value="courier" data-fee="150">Nationwide Courier LBC / J&amp;T (+&#8369;150)</option>
                  </select>
                </div>
              </div>

              <div class="order-field">
                <label for="orderPaymentSelect">4. Payment Method</label>
                <select id="orderPaymentSelect">
                  <option value="GCash / Maya e-Wallet">GCash / Maya e-Wallet (Instant Confirmation)</option>
                  <option value="Cash on Delivery / Pickup (COD)">Cash on Delivery / Pay upon Pickup (COD)</option>
                  <option value="Bank Transfer (BDO / LandBank)">Bank Transfer (BDO / LandBank)</option>
                </select>
              </div>

              <div class="order-qty-row">
                <div class="order-field">
                  <label for="orderBuyerName">Your Full Name *</label>
                  <input type="text" id="orderBuyerName" placeholder="e.g. Juan Dela Cruz" required>
                </div>
                <div class="order-field">
                  <label for="orderBuyerContact">Mobile No. / Email *</label>
                  <input type="text" id="orderBuyerContact" placeholder="0917-XXX-XXXX" required>
                </div>
              </div>

              <div class="order-field">
                <label for="orderBuyerAddress">Delivery Address / Hotel Name / Pickup Date *</label>
                <input type="text" id="orderBuyerAddress" placeholder="e.g. Alegro Hotel Room 204 / Pickup Nov 15 at City Hall Hub" required>
              </div>

              <div class="order-summary-box">
                <div class="order-summary-line">
                  <span id="orderSummaryItemLabel">Item Subtotal (1 &times; &#8369;220)</span>
                  <strong id="orderSummarySubtotal">&#8369;220</strong>
                </div>
                <div class="order-summary-line">
                  <span id="orderSummaryDeliveryLabel">Delivery / Pickup Fee</span>
                  <strong id="orderSummaryFee">FREE (&#8369;0)</strong>
                </div>
                <div class="order-summary-total">
                  <span>Total Amount to Pay</span>
                  <span id="orderSummaryTotal">&#8369;220</span>
                </div>
              </div>

              <button type="submit" class="btn-order-modal-main" style="margin-top:6px; margin-bottom:0;">
                <i class="fa-solid fa-bag-shopping"></i> Confirm &amp; Place Online Order
              </button>
            </form>

            <div id="orderConfirmationView" style="display:none; text-align:center; padding: 10px 4px;"></div>
          </div>
        </div>
      </div>`;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    function openOrderModal(defaultProductKey) {
      ensureOrderModalExists();
      const formEl = document.getElementById('onlineOrderForm');
      const confirmEl = document.getElementById('orderConfirmationView');
      if (formEl) formEl.style.display = 'flex';
      if (confirmEl) confirmEl.style.display = 'none';

      const selectEl = document.getElementById('orderProductSelect');
      if (selectEl && defaultProductKey && ONLINE_PRODUCTS_CATALOG[defaultProductKey]) {
        selectEl.value = defaultProductKey;
      }
      const qtyEl = document.getElementById('orderQtyInput');
      if (qtyEl) qtyEl.value = 1;

      updateOrderCalculation();
      document.getElementById('orderModal')?.classList.add('open');
    }

    function closeOrderModal() {
      document.getElementById('orderModal')?.classList.remove('open');
    }

    function adjustOrderQty(delta) {
      const qtyEl = document.getElementById('orderQtyInput');
      if (!qtyEl) return;
      let val = parseInt(qtyEl.value, 10) || 1;
      val = Math.max(1, Math.min(50, val + delta));
      qtyEl.value = val;
      updateOrderCalculation();
    }

    function updateOrderCalculation() {
      const selectEl = document.getElementById('orderProductSelect');
      const qtyEl = document.getElementById('orderQtyInput');
      const delivEl = document.getElementById('orderDeliverySelect');
      if (!selectEl || !qtyEl || !delivEl) return;

      const prod = ONLINE_PRODUCTS_CATALOG[selectEl.value] || ONLINE_PRODUCTS_CATALOG['corioso-pack'];
      const qty = Math.max(1, parseInt(qtyEl.value, 10) || 1);
      const selectedOpt = delivEl.options[delivEl.selectedIndex];
      const fee = parseInt(selectedOpt?.getAttribute('data-fee') || '0', 10);

      const subtotal = prod.price * qty;
      const total = subtotal + fee;

      const sellerBadge = document.getElementById('orderSellerBadge');
      if (sellerBadge) {
        sellerBadge.innerHTML = `<i class="fa-solid fa-store"></i> Official Partner: ${prod.seller} (${prod.unit})`;
      }

      document.getElementById('orderSummaryItemLabel').innerHTML = `Item Subtotal (${qty} &times; &#8369;${prod.price.toLocaleString()})`;
      document.getElementById('orderSummarySubtotal').innerHTML = `&#8369;${subtotal.toLocaleString()}`;
      document.getElementById('orderSummaryFee').innerHTML = fee === 0 ? 'FREE (&#8369;0)' : `&#8369;${fee.toLocaleString()}`;
      document.getElementById('orderSummaryTotal').innerHTML = `&#8369;${total.toLocaleString()}`;
    }

    function submitOnlineOrder(e) {
      e.preventDefault();
      const selectEl = document.getElementById('orderProductSelect');
      const qty = Math.max(1, parseInt(document.getElementById('orderQtyInput')?.value || '1', 10));
      const delivEl = document.getElementById('orderDeliverySelect');
      const payEl = document.getElementById('orderPaymentSelect');
      const name = document.getElementById('orderBuyerName')?.value.trim() || 'Guest Buyer';
      const contact = document.getElementById('orderBuyerContact')?.value.trim() || 'N/A';
      const address = document.getElementById('orderBuyerAddress')?.value.trim() || 'Catbalogan Pasalubong Hub';

      const prod = ONLINE_PRODUCTS_CATALOG[selectEl.value] || ONLINE_PRODUCTS_CATALOG['corioso-pack'];
      const selectedOpt = delivEl.options[delivEl.selectedIndex];
      const fee = parseInt(selectedOpt?.getAttribute('data-fee') || '0', 10);
      const deliveryText = selectedOpt?.text || 'Pasalubong Hub Pickup';
      const paymentText = payEl?.value || 'GCash / Maya e-Wallet';
      const total = prod.price * qty + fee;
      const orderRef = 'ORD-CAT-' + Math.floor(100000 + Math.random() * 900000);

      if (prod.tripItem && !savedTrips.includes(prod.tripItem)) {
        savedTrips.push(prod.tripItem);
        persistTrips();
        updateTripUI();
      }

      const formEl = document.getElementById('onlineOrderForm');
      const confirmEl = document.getElementById('orderConfirmationView');
      if (formEl) formEl.style.display = 'none';
      if (confirmEl) {
        confirmEl.style.display = 'block';
        confirmEl.innerHTML = `
          <div style="width:58px; height:58px; border-radius:50%; background:#dcfce7; color:#16a34a; display:inline-flex; align-items:center; justify-content:center; font-size:26px; margin-bottom:10px;">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h4 style="font-size:19px; color:#0c2333; margin-bottom:4px;">Online Order Confirmed!</h4>
          <p style="font-size:13px; color:#64748b; margin-bottom:14px;">Thank you, <strong>${escapeXml(name)}</strong>! Your order has been sent to <strong>${prod.seller}</strong>.</p>
          <div style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:14px; text-align:left; font-size:13px; line-height:1.65; margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #e2e8f0; padding-bottom:6px; margin-bottom:6px;">
              <span style="color:#64748b;">Order Reference:</span>
              <strong style="color:#ea580c; letter-spacing:0.5px;">${orderRef}</strong>
            </div>
            <div><strong>Item Ordered:</strong> ${prod.name}</div>
            <div><strong>Quantity &amp; Unit Price:</strong> ${qty} &times; &#8369;${prod.price.toLocaleString()}</div>
            <div><strong>Fulfillment:</strong> ${deliveryText}</div>
            <div><strong>Delivery / Pickup Info:</strong> ${escapeXml(address)}</div>
            <div><strong>Payment Method:</strong> ${escapeXml(paymentText)}</div>
            <div style="display:flex; justify-content:space-between; border-top:1px dashed #cbd5e1; padding-top:8px; margin-top:8px; font-size:15px;">
              <strong>Total Amount:</strong>
              <strong style="color:#ea580c;">&#8369;${total.toLocaleString()}</strong>
            </div>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button type="button" class="btn-order-modal-main" style="flex:1; margin:0;" onclick="openOrderModal('${selectEl.value}')">
              <i class="fa-solid fa-plus"></i> Order Another Item
            </button>
            <button type="button" class="btn-download-trip" style="flex:1; margin:0;" onclick="closeOrderModal()">
              Done
            </button>
          </div>
        `;
      }
      showToast('Order ' + orderRef + ' placed! Saved to your trip.');
    }

    function exploreCatbalogan() {
      resetSpotsFilter();
      if (document.getElementById('spots')) { document.getElementById('spots').scrollIntoView({ behavior: 'smooth' }); } else { window.location.href = 'spots.html'; }
    }

    function meetTheCity() {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }

    function discoverCulture() {
      if (document.getElementById('culture')) { document.getElementById('culture').scrollIntoView({ behavior: 'smooth' }); } else { window.location.href = 'culture.html'; }
    }

    /* ==========================================================
       GMAIL ITINERARY GENERATOR & TOP SCREEN NOTIFICATION
       ========================================================== */
    function ensureTopPushNotificationExists() {
      let notif = document.getElementById('topPushNotification');
      if (notif) return notif;

      notif = document.createElement('div');
      notif.id = 'topPushNotification';
      notif.className = 'top-push-notification';
      notif.innerHTML = `
        <div class="push-notif-header">
          <span class="push-notif-badge">
            <span class="push-notif-pulse"></span>
            <i class="fa-brands fa-google"></i>
            <span>GMAIL NOTIFICATION &bull; DUNGAW CATBALOGAN</span>
          </span>
          <span class="push-notif-time" id="pushNotifTime">Just now</span>
        </div>
        <div class="push-notif-content">
          <div class="push-notif-avatar">
            <svg viewBox="0 0 24 24" width="24" height="24" style="display:block;">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>
          <div class="push-notif-text">
            <div class="push-notif-title" id="pushNotifTitle">Itinerary Message Ready!</div>
            <div class="push-notif-desc" id="pushNotifDesc">Your personalized Catbalogan itinerary has been formatted for Gmail with fares and routes.</div>
          </div>
        </div>
        <div class="push-notif-actions">
          <a href="#" id="pushNotifOpenBtn" target="_blank" rel="noopener" class="push-notif-btn-main">
            <i class="fa-solid fa-envelope-open-text"></i> Open in Gmail
          </a>
          <button type="button" class="push-notif-btn-dismiss" onclick="dismissTopScreenNotification()">
            Dismiss
          </button>
        </div>
      `;
      document.body.appendChild(notif);
      return notif;
    }

    function showTopScreenNotification({ title, desc, url, mailtoUrl }) {
      const notif = ensureTopPushNotificationExists();
      const titleEl = document.getElementById('pushNotifTitle');
      const descEl = document.getElementById('pushNotifDesc');
      const timeEl = document.getElementById('pushNotifTime');
      const openBtn = document.getElementById('pushNotifOpenBtn');

      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (timeEl) timeEl.textContent = 'Just now';

      const finalUrl = url || mailtoUrl || 'https://mail.google.com';
      if (openBtn) {
        openBtn.href = finalUrl;
        openBtn.onclick = () => {
          dismissTopScreenNotification();
        };
      }

      // Smooth slide-in animation
      notif.classList.remove('show');
      void notif.offsetWidth; // force reflow
      notif.classList.add('show');

      // Native browser notification if permitted
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          try {
            new Notification(title, {
              body: desc,
              icon: './images/dungaw_logo.png'
            });
          } catch (err) {}
        } else if (Notification.permission === 'default') {
          try {
            Notification.requestPermission();
          } catch (err) {}
        }
      }

      clearTimeout(window._topPushTimer);
      window._topPushTimer = setTimeout(() => {
        dismissTopScreenNotification();
      }, 14000);
    }

    function dismissTopScreenNotification() {
      const notif = document.getElementById('topPushNotification');
      if (notif) notif.classList.remove('show');
    }

    function generateItineraryEmailContent() {
      if (savedTrips.length === 0) {
        savedTrips = ['Buri Island Boardwalk', 'Bangon Falls', 'The Obelisk'];
        persistTrips();
        updateTripUI();
      }

      const formName = document.getElementById('visitorName')?.value.trim();
      const formEmail = document.getElementById('visitorEmail')?.value.trim();
      const formDate = document.getElementById('visitDate')?.value;

      const visitorName = formName || lastInquiry?.name || 'Guest Traveler';
      const visitorContact = formEmail || lastInquiry?.email || '';
      const travelDate = formDate || lastInquiry?.date || 'Flexible Date';
      const refCode = lastInquiry?.refCode || ('DC-' + Math.floor(100000 + Math.random() * 900000));

      let itemsText = '';
      savedTrips.forEach((item, idx) => {
        const [cat, loc, vehicle, fare, tip] = getTripMeta(item);
        itemsText += `\n${idx + 1}. ${item.toUpperCase()}\n   • Category: ${cat}\n   • Location: ${loc}\n   • Vehicle to Ride: ${vehicle}\n   • Estimated Ride Cost (Fare): ${fare}\n   • Best Time / Travel Tip: ${tip}\n`;
      });

      const subject = `Dungaw Catbalogan - Personal Trip Itinerary [${refCode}]`;
      const body = `Mabuhay from Catbalogan City! 🌺

Here is your personal travel itinerary prepared via Dungaw Catbalogan City Tourism Portal:

==================================================
TRAVELER SUMMARY
==================================================
Traveler Name: ${visitorName}
Reference Code: ${refCode}
Preferred Date: ${travelDate}
Total Saved Experiences: ${savedTrips.length}

==================================================
YOUR SAVED DESTINATIONS & COMMUTER GUIDE
==================================================${itemsText}

==================================================
CATBALOGAN TOURISM ASSISTANCE & HOTLINES
==================================================
Catbalogan City Tourism Office
Catbalogan City Hall, Samar, Philippines
Tourism Inquiries & Assistance: tourism@catbalogan.gov.ph
Website: https://snappy-crystal-sitjibf.tmp.now

Have a safe, colorful, and memorable trip to the City of Captivating Colors!`;

      return { visitorName, visitorContact, travelDate, refCode, subject, body };
    }

    function sendItineraryToGmail() {
      const data = generateItineraryEmailContent();
      const recipient = data.visitorContact || '';
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;

      // 1. Show Top Screen Push Notification
      showTopScreenNotification({
        title: `Itinerary Ready for ${data.visitorName}!`,
        desc: `${savedTrips.length} Destinations saved • Ref: ${data.refCode}. Click below to open in Gmail.`,
        url: gmailUrl,
        mailtoUrl: mailtoUrl
      });

      // 2. Open Gmail in a new tab / window
      let winOpened = false;
      try {
        const win = window.open(gmailUrl, '_blank');
        if (win && !win.closed && typeof win.closed !== 'undefined') {
          winOpened = true;
        }
      } catch (err) {}

      if (!winOpened) {
        // Fallback for pop-up blocked environments
        setTimeout(() => {
          if (!document.hidden) {
            window.location.href = mailtoUrl;
          }
        }, 1200);
      }

      showToast(`✉️ Gmail notification sent for ${data.visitorName} (${data.refCode})!`);
    }

    function submitItineraryInquiry(e) {
      e.preventDefault();
      if (savedTrips.length === 0) {
        savedTrips = ['Buri Island Boardwalk', 'Bangon Falls', 'The Obelisk'];
        persistTrips();
        updateTripUI();
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

      const data = generateItineraryEmailContent();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
      const mailtoUrl = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;

      const box = document.getElementById('inquirySuccessBox');
      box.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Inquiry Prepared (${refCode})</strong><br>Mabuhay, <strong>${name}</strong>! Your ${savedTrips.length}-item itinerary for <strong>${date}</strong> is ready.<br><a href="${gmailUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; margin-top:8px; padding:6px 12px; border-radius:20px; background:#ea4335; color:#fff; font-size:12px; font-weight:700; text-decoration:none;"><i class="fa-brands fa-google"></i> Open in Gmail</a>`;
      box.classList.add('show');

      // Top Screen Push Notification
      showTopScreenNotification({
        title: `Gmail Notification: Itinerary Ready for ${name}!`,
        desc: `Ref: ${refCode} • ${savedTrips.length} places saved. Click below to view in Gmail.`,
        url: gmailUrl,
        mailtoUrl: mailtoUrl
      });

      showToast(`Itinerary message prepared for ${name} (${refCode})!`);
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
        'Buri Island Boardwalk': ['Tourist Spot', 'Brgy. Buri, Catbalogan City', 'Tricycle (Special) or Multicab', 'PHP 20 (Multicab) / PHP 100-150 (Special Tricycle)', '4:00 PM - 6:00 PM (Sunset)'],
        'Buri Island Boardwalk & Beach': ['Tourist Spot', 'Brgy. Buri, Catbalogan City', 'Tricycle (Special) or Multicab', 'PHP 20 (Multicab) / PHP 100-150 (Special Tricycle)', '4:00 PM - 6:00 PM (Sunset)'],
        'Bangon Falls': ['Eco-Tourism & Falls', 'Brgy. Bangon / San Andres Trail', 'Habal-habal (Motorcycle Taxi)', 'PHP 150 - 200 (Roundtrip w/ wait)', 'Morning (7:00 AM - 11:00 AM)'],
        'Bangon Falls (Eco-Trail)': ['Eco-Tourism & Falls', 'Brgy. Bangon / San Andres Trail', 'Habal-habal (Motorcycle Taxi)', 'PHP 150 - 200 (Roundtrip w/ wait)', 'Morning (7:00 AM - 11:00 AM)'],
        'The Obelisk': ['Historical & Heritage', 'Samar Provincial Capitol Park', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', 'Open Daily (Free Entry)'],
        'The Obelisk & Imelda Park': ['Historical & Heritage', 'Samar Provincial Capitol Park', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', 'Open Daily (Free Entry)'],
        'Pieta Park': ['Historical & Heritage', 'Beside St. Bartholomew Cathedral', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', 'Open Daily (Downtown Plaza)'],
        'Pieta Park & St. Bartholomew Parish': ['Historical & Heritage', 'Beside St. Bartholomew Cathedral', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', 'Open Daily (Downtown Plaza)'],
        'Darahuway Guti Island': ['Island Sanctuary', '20-30 mins boat from Pier 1', 'Tricycle to Pier 1 + Motorized Banca', 'PHP 65 - 100 / pax (PHP 500-800 charter)', 'March - September (Snorkeling)'],
        'Maqueda Bay Sunset': ['Scenic Bayfront', 'Catbalogan Bayfront Boulevard', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', '5:00 PM - 6:15 PM'],
        'Maqueda Bay Sunset Boulevard': ['Scenic Bayfront', 'Catbalogan Bayfront Boulevard', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', '5:00 PM - 6:15 PM'],
        'Manaragat Festival (August)': ['Culture & Festivals', 'Catbalogan City Proper', 'Walking or Downtown Tricycle', 'FREE (Walk) / PHP 12 - 15 (Tricycle)', 'August 1 - 24 (Annual Fiesta)'],
        'Food Trail: Samar Tamalos': ['Food & Delicacies', 'Public Market & Local Kitchens', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Best served warm for breakfast'],
        'Food Trail: Maqueda Bay Seafood': ['Food & Delicacies', 'Bayfront Grills & Fish Port', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Fresh morning & sunset catch'],
        'Pasalubong: Samar Danggit & Tapa': ['Food & Pasalubong', 'Catbalogan Dried Fish Stalls', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Ask for travel-sealed packs'],
        'Pasalubong: Corioso & Pastries': ['Food & Pasalubong', 'Downtown Heritage Bakeshops', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Pair with native sikwate'],
        'Shopping: Lara Samar Woven Goods': ['Local Products', 'Provincial Trade & Pasalubong Hub', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Handwoven Tikog mats & bags'],
        'Shopping: Catbalogan Pasalubong Box': ['Local Products', 'City Tourism Hub & Market', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Customizable gift assortments'],
        'Shopping: Community Shellcraft': ['Local Products', 'Island Barangay Craft Stalls', 'Tricycle or Banca', 'PHP 15 - 20 (Standard Ride)', 'Eco-friendly coastal keepsakes']
      };
      if (map[name]) return map[name];
      if (name.startsWith('Food Trail:')) return ['Food & Delicacies', 'Catbalogan City Proper', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Local culinary stop'];
      if (name.startsWith('Pasalubong:') || name.startsWith('Shopping:')) return ['Local Products', 'Catbalogan City Proper', 'Walking or Downtown Tricycle', 'PHP 12 - 15 (Standard Tricycle)', 'Souvenir & crafts'];
      return ['Tourist Spot', 'Catbalogan City, Samar', 'Downtown Tricycle', 'PHP 12 - 20 (Standard Fare)', 'Check local hours'];
    }

    function downloadItinerary() {
      if (savedTrips.length === 0) {
        savedTrips = ['Buri Island Boardwalk', 'Bangon Falls', 'The Obelisk'];
        persistTrips();
        updateTripUI();
      }

      const formName = document.getElementById('visitorName')?.value.trim();
      const formEmail = document.getElementById('visitorEmail')?.value.trim();
      const formDate = document.getElementById('visitDate')?.value;

      const visitorName = formName || lastInquiry?.name || 'Guest Traveler';
      const visitorContact = formEmail || lastInquiry?.email || 'Not specified';
      const travelDate = formDate || lastInquiry?.date || 'Flexible';
      const refCode = lastInquiry?.refCode || 'DRAFT';
      const statusLabel = lastInquiry ? 'Confirmed' : 'Planned';

      const colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const makeCell = (colIdx, rowNum, val, styleId, isNum) => {
        const ref = colLetters[colIdx] + rowNum;
        if (isNum) return `<c r="${ref}" s="${styleId}"><v>${Number(val)}</v></c>`;
        return `<c r="${ref}" t="inlineStr" s="${styleId}"><is><t>${escapeXml(val)}</t></is></c>`;
      };

      const rowsXml = [];

      // Row 1: Merged Title Banner (A1:H1)
      rowsXml.push(`<row r="1" ht="34" customHeight="1">${
        colLetters.map((_, c) => makeCell(c, 1, c === 0 ? 'DUNGAW CATBALOGAN - PERSONAL TRIP ITINERARY' : '', 1)).join('')
      }</row>`);

      // Row 2: Merged Subtitle Banner (A2:H2)
      rowsXml.push(`<row r="2" ht="22" customHeight="1">${
        colLetters.map((_, c) => makeCell(c, 2, c === 0 ? 'Gateway to Samar  |  City of Captivating Colors  |  Province of Samar, Philippines' : '', 2)).join('')
      }</row>`);

      // Row 3: Spacer
      rowsXml.push(`<row r="3" ht="10" customHeight="1"></row>`);

      // Row 4: Traveler Summary Row 1 (A4:B4 label, C4:E4 val, F4:G4 label, H4 val)
      rowsXml.push(`<row r="4" ht="22" customHeight="1">${
        makeCell(0, 4, 'Traveler Name', 3) +
        makeCell(1, 4, '', 3) +
        makeCell(2, 4, visitorName, 4) +
        makeCell(3, 4, '', 4) +
        makeCell(4, 4, '', 4) +
        makeCell(5, 4, 'Reference Code', 3) +
        makeCell(6, 4, '', 3) +
        makeCell(7, 4, refCode, 5)
      }</row>`);

      // Row 5: Traveler Summary Row 2 (A5:B5 label, C5:E5 val, F5:G5 label, H5 val)
      rowsXml.push(`<row r="5" ht="22" customHeight="1">${
        makeCell(0, 5, 'Contact Info', 3) +
        makeCell(1, 5, '', 3) +
        makeCell(2, 5, visitorContact, 4) +
        makeCell(3, 5, '', 4) +
        makeCell(4, 5, '', 4) +
        makeCell(5, 5, 'Preferred Date', 3) +
        makeCell(6, 5, '', 3) +
        makeCell(7, 5, travelDate, 4)
      }</row>`);

      // Row 6: Spacer
      rowsXml.push(`<row r="6" ht="12" customHeight="1"></row>`);

      // Row 7: Table Header
      const headers = ['#', 'Destination / Experience', 'Category', 'Location / Highlights', 'Vehicle to Ride', 'Estimated Ride Cost (Fare)', 'Best Time / Travel Tip', 'Status'];
      rowsXml.push(`<row r="7" ht="28" customHeight="1">${
        headers.map((h, c) => makeCell(c, 7, h, (c === 0 || c === 7) ? 7 : 6)).join('')
      }</row>`);

      // Row 8+: Data Rows with Zebra Striping
      savedTrips.forEach((item, idx) => {
        const rNum = 8 + idx;
        const [cat, loc, vehicle, fare, tip] = getTripMeta(item);
        const isAlt = idx % 2 === 1;
        const numStyle = isAlt ? 10 : 8;
        const txtStyle = isAlt ? 11 : 9;
        const statusStyle = 12;

        rowsXml.push(`<row r="${rNum}" ht="26" customHeight="1">${
          makeCell(0, rNum, idx + 1, numStyle, true) +
          makeCell(1, rNum, item, txtStyle) +
          makeCell(2, rNum, cat, txtStyle) +
          makeCell(3, rNum, loc, txtStyle) +
          makeCell(4, rNum, vehicle, txtStyle) +
          makeCell(5, rNum, fare, txtStyle) +
          makeCell(6, rNum, tip, txtStyle) +
          makeCell(7, rNum, statusLabel, statusStyle)
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
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
    <col min="6" max="6" width="36" customWidth="1"/>
    <col min="7" max="7" width="28" customWidth="1"/>
    <col min="8" max="8" width="16" customWidth="1"/>
  </cols>
  <sheetData>${rowsXml.join('')}</sheetData>
  <autoFilter ref="A7:H${lastDataRow}"/>
  <mergeCells count="9">
    <mergeCell ref="A1:H1"/>
    <mergeCell ref="A2:H2"/>
    <mergeCell ref="A4:B4"/>
    <mergeCell ref="C4:E4"/>
    <mergeCell ref="F4:G4"/>
    <mergeCell ref="A5:B5"/>
    <mergeCell ref="C5:E5"/>
    <mergeCell ref="F5:G5"/>
    <mergeCell ref="A${footerRow}:H${footerRow}"/>
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
        pinLabel: 'Samar Provincial Capitol Building (Capitol Plaza, Catbalogan City)',
        storeAddress: 'Capitol Site, Rizal Ave., Downtown Catbalogan City',
        storeHours: 'Open Daily (24 Hours Plaza) • Free Entry',
        transitKey: 'obelisk',
        subtitle: 'Provincial Capitol Building entrance along Catbalogan City square.',
        img: './images/hero.jpg',
        mapsQuery: 'Samar+Provincial+Capitol,Catbalogan+City,Samar',
        lat: 11.7750,
        lng: 124.8850,
        heading: 20,
        zoom: 18
      },
      {
        key: 'obelisk',
        category: 'HISTORICAL LANDMARK',
        title: 'The Obelisk (Imelda Park)',
        pinLabel: 'The Obelisk & Imelda Park (Capitol Grounds, Catbalogan City)',
        storeAddress: 'Imelda Park, Capitol Site, Catbalogan City',
        storeHours: 'Open Daily • Walking or Tricycle (PHP 12 - 15)',
        transitKey: 'obelisk',
        subtitle: 'Capitol &amp; Imelda Park grounds honoring four Samar historical eras.',
        img: './images/obelisk.jpg',
        mapsQuery: 'Imelda+Park,Catbalogan+City,Samar',
        lat: 11.7742,
        lng: 124.8861,
        heading: 60,
        zoom: 18
      },
      {
        key: 'pieta',
        category: 'MEMORIAL HERITAGE',
        title: 'Pieta Park &amp; Cathedral Plaza',
        pinLabel: 'Pieta Park & St. Bartholomew Parish Church (Catbalogan City)',
        storeAddress: 'San Bartholomew St. cor. Rizal Ave., Downtown Catbalogan City',
        storeHours: 'Open Daily • Walking or Tricycle (PHP 12 - 15)',
        transitKey: 'pieta',
        subtitle: 'Downtown plaza beside St. Bartholomew Parish Church.',
        img: './images/pieta.jpg',
        mapsQuery: 'St.+Bartholomew+Parish+Church,Catbalogan+City,Samar',
        lat: 11.7753,
        lng: 124.8829,
        heading: 120,
        zoom: 18
      },
      {
        key: 'tamalos',
        category: 'WHERE TO BUY &bull; FOOD COURT &amp; MARKET',
        title: 'Catbalogan Public Market (Samar Tamalos Stalls)',
        pinLabel: 'BUY TAMALOS HERE: Catbalogan City Public Market (Curry Ave. Delicacy Row)',
        storeAddress: 'Curry Ave. cor. Allen Ave., Catbalogan City Public Market (Ground Floor)',
        storeHours: 'Open Daily 5:30 AM – 6:00 PM • PHP 280 / Heritage Box of 6',
        orderKey: 'tamalos-pack',
        transitKey: 'market',
        subtitle: 'Pinned Location: Curry Ave. Public Market stalls &amp; heritage kitchens where warm Samar Tamalos is sold.',
        img: './images/tamalos.jpg',
        mapsQuery: 'Catbalogan+City+Public+Market,Curry+Avenue,Catbalogan+City,Samar',
        lat: 11.7745,
        lng: 124.8814,
        heading: 110,
        zoom: 18
      },
      {
        key: 'corioso',
        category: 'WHERE TO BUY &bull; HERITAGE BAKESHOP',
        title: 'Andryummiee&rsquo;s &amp; Charito&rsquo;s Delights (San Roque St.)',
        pinLabel: 'BUY CORIOSO HERE: Andryummiee\'s & Charito\'s Bakeshop (San Roque St.)',
        storeAddress: 'San Roque Street, Brgy. San Roque, Downtown Catbalogan City',
        storeHours: 'Open Daily 7:00 AM – 7:30 PM • PHP 220 / Heritage Pastry Box',
        orderKey: 'corioso-pack',
        transitKey: 'market',
        subtitle: 'Pinned Location: Brgy. San Roque Street heritage bakeshops where authentic Corioso cookies &amp; roscas are baked and sold.',
        img: './images/corioso.jpg',
        mapsQuery: 'San+Roque+Street,Catbalogan+City,Samar',
        lat: 11.7758,
        lng: 124.8838,
        heading: 165,
        zoom: 18
      },
      {
        key: 'danggit',
        category: 'WHERE TO BUY &bull; PASALUBONG &amp; DRIED FISH HUB',
        title: 'Pier 1 Dried Fish &amp; Danggit Stalls (Curry Ave.)',
        pinLabel: 'BUY DANGGIT & TAPA HERE: Pier 1 Dried Fish Pasalubong Stalls (Curry Ave.)',
        storeAddress: 'Curry Avenue (Beside Pier 1 Seaport Terminal), Catbalogan City',
        storeHours: 'Open Daily 6:00 AM – 7:00 PM • PHP 350 / 250g Vacuum-Sealed Pack',
        orderKey: 'danggit-pack',
        transitKey: 'pier1',
        subtitle: 'Pinned Location: Curry Avenue &amp; Pier 1 market stalls where sun-dried Samar Danggit, dried squid, and tapa are sold.',
        img: './images/danggit.jpg',
        mapsQuery: 'Catbalogan+Pier+1,Curry+Avenue,Catbalogan+City,Samar',
        lat: 11.7738,
        lng: 124.8806,
        heading: 230,
        zoom: 18
      },
      {
        key: 'crabs',
        category: 'WHERE TO BUY &bull; SEAFOOD GRILLS &amp; PORT MARKET',
        title: 'Rizal Ave. &amp; Bayfront Seafood Grills (Blue Crabs)',
        pinLabel: 'BUY BLUE CRABS HERE: Bayfront Seafood Grills & Fish Market (Rizal Ave.)',
        storeAddress: 'Rizal Avenue & Bayfront Boulevard Strip, Downtown Catbalogan City',
        storeHours: 'Open Daily 6:00 AM – 9:00 PM • PHP 550 / 1kg Steamed Pack',
        orderKey: 'crabs-pack',
        transitKey: 'boulevard',
        subtitle: 'Pinned Location: Downtown Rizal Ave. dining strip &amp; Bayfront Fish Port where fresh Maqueda Blue Crabs are cooked and sold.',
        img: './images/crabs.jpg',
        mapsQuery: 'Rizal+Avenue,Catbalogan+City,Samar',
        lat: 11.7753,
        lng: 124.8832,
        heading: 250,
        zoom: 18
      },
      {
        key: 'maqueda',
        category: 'SCENIC BAYFRONT',
        title: 'Catbalogan Bayfront Boulevard',
        pinLabel: 'Maqueda Bay Sunset Boulevard (Bayfront Promenade, Catbalogan City)',
        storeAddress: 'Curry Ave. & Bayfront Boulevard, Catbalogan City',
        storeHours: 'Best Time: 5:00 PM – 6:30 PM Sunset • Free Entry',
        transitKey: 'boulevard',
        subtitle: 'Coastal promenade overlooking Maqueda Bay at golden hour.',
        img: './images/maqueda.jpg',
        mapsQuery: 'Catbalogan+Boulevard,Catbalogan+City,Samar',
        lat: 11.7740,
        lng: 124.8795,
        heading: 260,
        zoom: 17
      },
      {
        key: 'buri',
        category: 'ISLAND BOARDWALK',
        title: 'Buri Baras Beach &amp; Island',
        pinLabel: 'Buri Island Boardwalk & Beach Resort (Brgy. Buri, Catbalogan City)',
        storeAddress: 'Brgy. Buri Causeway & Coastal Boardwalk, Catbalogan City',
        storeHours: 'Open Daily 6:00 AM – 9:00 PM • Multicab PHP 20 / Special Tricycle PHP 100-150',
        transitKey: 'buri',
        subtitle: 'Brgy. Buri coastal boardwalk over crystal Samar Sea waters.',
        img: './images/buri.jpg',
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
        pinLabel: 'Darahuway Guti Island Sanctuary (Off Catbalogan Coast)',
        storeAddress: 'Brgy. Darahuway Guti (20–30 mins Motorized Banca from Pier 1)',
        storeHours: 'Day Tour 7:00 AM – 5:00 PM • Banca Fare PHP 65 - 100 / pax',
        transitKey: 'darahuway',
        subtitle: 'Island barangay off Catbalogan coast with clear snorkeling coves.',
        img: './images/darahuway.jpg',
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
        pinLabel: 'Bangon Falls Eco-Trail Jump-Off (Brgy. Bangon, Catbalogan City)',
        storeAddress: 'Brgy. Bangon / San Andres Eco-Trail, Catbalogan City',
        storeHours: 'Best Time: 7:00 AM – 3:00 PM • Habal-Habal PHP 150 - 200',
        transitKey: 'bangon',
        subtitle: 'Multi-tiered jungle cascade in Brgy. Bangon / San Andres, Catbalogan.',
        img: './images/bangon.jpg',
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

    function svBuildMapEmbedUrl(node) {
      const zoom = node.zoom || 18;
      const label = node.pinLabel || node.title.replace(/&[a-z]+;/gi, '');
      const pinnedQuery = `${node.lat},${node.lng}+(${encodeURIComponent(label)})`;
      return `https://maps.google.com/maps?q=${pinnedQuery}&hl=en&t=${svState.mapType}&z=${zoom}&ie=UTF8&iwloc=A&output=embed`;
    }

    function svUpdateEmbeds(node) {
      const mapFrame = document.getElementById('svMapFrame');
      if (mapFrame) {
        mapFrame.src = svBuildMapEmbedUrl(node);
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

      if (mode === 'street' || mode === 'split') {
        gsvWrap?.classList.add('active');
        viewport?.classList.add('hidden');
      } else {
        gsvWrap?.classList.remove('active');
        viewport?.classList.remove('hidden');
      }

      const node = STREET_VIEW_TOUR[svState.index];
      if (node && (mode === 'street' || mode === 'split')) {
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
        const mapFrame = document.getElementById('svMapFrame');
        if (mapFrame) {
          mapFrame.src = svBuildMapEmbedUrl(node);
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
      if (pinLbl) {
        pinLbl.innerHTML = `<span style="color:#f97316; font-weight:800;">PINNED STORE / LOCATION:</span> ${node.title}`;
      }

      // Inject or update the Pinned Store Card inside .sv-map-pane
      const mapPane = document.querySelector('.sv-map-pane');
      if (mapPane) {
        let pinCard = document.getElementById('svStorePinCard');
        if (!pinCard) {
          pinCard = document.createElement('div');
          pinCard.id = 'svStorePinCard';
          pinCard.className = 'sv-store-pin-card';
          mapPane.appendChild(pinCard);
        }
        const isFoodOrShop = Boolean(node.orderKey);
        pinCard.innerHTML = `
          <div class="sv-store-pin-header">
            <span class="sv-store-pin-badge">
              <i class="fa-solid fa-location-dot"></i> ${isFoodOrShop ? 'PINNED STORE TO BUY THIS FOOD' : 'PINNED LANDMARK LOCATION'}
            </span>
            <span class="sv-store-pin-coords">GPS: ${node.lat.toFixed(4)}° N, ${node.lng.toFixed(4)}° E</span>
          </div>
          <div class="sv-store-pin-name">${node.title}</div>
          <div class="sv-store-pin-addr">
            <i class="fa-solid fa-map-pin" style="color:#f97316; margin-top:3px;"></i>
            <span><strong>Exact Location:</strong> ${node.storeAddress || node.subtitle}<br><span style="color:#94a3b8;">${node.storeHours || ''}</span></span>
          </div>
          <div class="sv-store-pin-actions">
            ${node.orderKey ? `<button type="button" class="sv-pin-btn-order" onclick="closeStreetView(); openOrderModal('${node.orderKey}')"><i class="fa-solid fa-cart-shopping"></i> Buy / Order Online</button>` : ''}
            <a href="transit.html?to=${encodeURIComponent(node.transitKey || node.key)}" class="sv-pin-btn-route">
              <i class="fa-solid fa-route"></i> How to Ride Here (Route &amp; Fare)
            </a>
          </div>
        `;
      }

      // Inject or update the 360° Street View Top Pin Banner inside #svGsvWrap
      const gsvWrap = document.getElementById('svGsvWrap');
      if (gsvWrap) {
        let gsvBanner = document.getElementById('svGsvPinBanner');
        if (!gsvBanner) {
          gsvBanner = document.createElement('div');
          gsvBanner.id = 'svGsvPinBanner';
          gsvBanner.className = 'sv-gsv-pin-banner';
          gsvWrap.appendChild(gsvBanner);
        }
        gsvBanner.innerHTML = `
          <i class="fa-solid fa-street-view" style="color:#f97316; font-size:16px;"></i>
          <div>
            <div style="font-size:10px; color:#20c4b7; letter-spacing:0.08em; text-transform:uppercase;">360&deg; Street View Storefront Pin</div>
            <div>${node.title} &bull; <span style="font-weight:500; color:#cbd5e1;">${node.storeAddress || ''}</span></div>
          </div>
        `;
      }

      const gLink = document.getElementById('svGoogleMapsLink');
      if (gLink) {
        gLink.href = `https://www.google.com/maps/search/?api=1&query=${node.lat},${node.lng}`;
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

    function openStreetView(key) {
      svBuildStrip();
      svSetMode('split');
      const idx = STREET_VIEW_TOUR.findIndex(item => item.key === key);
      svRenderNode(idx >= 0 ? idx : 0);
      document.getElementById('streetViewModal')?.classList.add('open');
    }

    function closeStreetView() {
      document.getElementById('streetViewModal')?.classList.remove('open');
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
      if (!document.getElementById('home') || !document.getElementById('spots')) return; // sub-pages keep their static active link
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

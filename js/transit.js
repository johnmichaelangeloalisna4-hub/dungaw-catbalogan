/**
 * Dungaw Catbalogan - Commuter Transit & Interactive Route Planner
 * Helps tourists and commuters track where they are, choose destinations,
 * and know exact vehicle types, fares, and travel routes in Catbalogan City.
 */

// 1. LOCATIONS DATABASE
const TRANSIT_LOCATIONS = {
  // ========================================================
  // VEHICLE TERMINALS & TRANSPORTATION HUBS
  // ========================================================
  'bus_terminal': {
    id: 'bus_terminal',    shortLabel: 'Bus Terminal (Diversion)',

    name: 'Catbalogan Integrated Bus Terminal',
    category: 'Provincial Bus Terminal',
    lat: 11.7820,
    lng: 124.8820,
    icon: 'fa-bus',
    type: 'terminal',
    vehicleType: 'Provincial Bus (Philtranco, DLTBCo, Silver Star)',
    routes: 'Tacloban, Calbayog, Ormoc, Matnog, Metro Manila',
    address: 'Diversion Road / North Coastal Highway, Brgy. Muñoz'
  },
  'grand_tours': {
    id: 'grand_tours',    shortLabel: 'Grand Tours Van',

    name: 'Grand Tours Van Terminal',
    category: 'Regional Van Terminal',
    lat: 11.7762,
    lng: 124.8845,
    icon: 'fa-van-shuttle',
    type: 'terminal',
    vehicleType: 'UV Express Passenger Van',
    routes: 'Tacloban, Calbayog, Borongan, Guiuan, Catarman',
    address: 'San Francisco Street corner Del Rosario, City Proper'
  },
  'duptours': {
    id: 'duptours',    shortLabel: 'Duptours Shuttle',

    name: 'Duptours Shuttle Terminal',
    category: 'Regional Van Terminal',
    lat: 11.7758,
    lng: 124.8838,
    icon: 'fa-van-shuttle',
    type: 'terminal',
    vehicleType: 'UV Express Passenger Van',
    routes: 'Tacloban City & Calbayog City Direct Shuttle',
    address: 'Mabini Avenue corner Allen Avenue, Downtown'
  },
  'port': {
    id: 'port',    shortLabel: 'Catbalogan Port (Pier 1)',

    name: 'Catbalogan Port / Pier 1',
    category: 'Ferry Seaport Terminal',
    lat: 11.7736,
    lng: 124.8799,
    icon: 'fa-ship',
    type: 'terminal',
    vehicleType: 'Passenger Ferry & Cargo Shipping',
    routes: 'Cebu City (Roble Shipping, Cokaliong) & Cargo Ports',
    address: 'Curry Avenue Seafront, Port Area'
  },
  'pier_boat_wharf': {
    id: 'pier_boat_wharf',    shortLabel: 'Island Motorboat Wharf',

    name: 'Catbalogan Motorboat & Pumpboat Wharf',
    category: 'Island Pumpboat Terminal',
    lat: 11.7725,
    lng: 124.8785,
    icon: 'fa-sailboat',
    type: 'terminal',
    vehicleType: 'Motorized Outrigger Banca / Pumpboat',
    routes: 'Sierra Island, Darahuway Guti, Buri Island, Daram',
    address: 'Pier Area / Lower Curry Avenue, Seafront'
  },
  'central_tricycle_stand': {
    id: 'central_tricycle_stand',    shortLabel: 'Downtown Tricycle Stand',

    name: 'Central Downtown Tricycle Terminal',
    category: 'City Tricycle Stand',
    lat: 11.7748,
    lng: 124.8835,
    icon: 'fa-motorcycle',
    type: 'terminal',
    vehicleType: 'Downtown Tricycle (TODA Registered)',
    routes: 'All 57 City Barangays, Imelda Park, Seaport, Market, Hotels',
    address: 'Rizal Avenue corner San Bartolome St. (City Plaza)'
  },
  'northbound_tricycle_stand': {
    id: 'northbound_tricycle_stand',    shortLabel: 'Northbound Tricycle Stand',

    name: 'Northbound Tricycle Terminal (Silanga / Buri)',
    category: 'Inter-Barangay Tricycle Stand',
    lat: 11.7770,
    lng: 124.8848,
    icon: 'fa-motorcycle',
    type: 'terminal',
    vehicleType: 'Tricycle & Habal-habal Motorcycle',
    routes: 'Buri Island Boardwalk & Airport, Silanga, Guinsorongan',
    address: 'San Roque Street (North Highway Exit)'
  },
  'southbound_multicab_stand': {
    id: 'southbound_multicab_stand',    shortLabel: 'Southbound Multicab Stand',

    name: 'Southbound Multicab & Jeepney Stand (Payao)',
    category: 'Multicab & Jeepney Stand',
    lat: 11.7730,
    lng: 124.8840,
    icon: 'fa-truck-pickup',
    type: 'terminal',
    vehicleType: 'Public Multicab & Jeepney',
    routes: 'Payao Mangrove Park, Mercedes, Jiabong Boundary',
    address: 'Taft Avenue corner San Bartolome St.'
  },
  'airport': {
    id: 'airport',    shortLabel: 'Buri Airport',

    name: 'Catbalogan Buri Airport Terminal',
    category: 'Airport Terminal',
    lat: 11.8080,
    lng: 124.8320,
    icon: 'fa-plane-departure',
    type: 'terminal',
    vehicleType: 'Community Airport Terminal',
    routes: 'Air Charter & Island Airlink',
    address: 'Buri Island, Catbalogan City'
  },
  'capitol': {
    id: 'capitol',
    name: 'Samar Provincial Capitol & Plaza',
    category: 'Downtown Core Landmark',
    lat: 11.7750,
    lng: 124.8850,
    icon: 'fa-landmark',
    type: 'hub',
    address: 'Arteche Boulevard / Rizal Ave'
  },
  'city_hall': {
    id: 'city_hall',
    name: 'Catbalogan City Hall',
    category: 'City Government Center',
    lat: 11.7745,
    lng: 124.8817,
    icon: 'fa-building-columns',
    type: 'hub',
    address: 'Rizal Avenue, Catbalogan City'
  },

  // Tourist Spots & Destinations
  'buri': {
    id: 'buri',
    name: 'Buri Island Boardwalk & Beach',
    category: 'Coastal Resort & Boardwalk',
    lat: 11.8100,
    lng: 124.8300,
    icon: 'fa-umbrella-beach',
    type: 'spot',
    image: './images/buri.jpg',
    address: 'Barangay Buri (via Buri Causeway)'
  },
  'bangon': {
    id: 'bangon',
    name: 'Bangon Falls (Eco-Trail)',
    category: 'Rainforest Waterfall',
    lat: 11.8760,
    lng: 124.8781,
    icon: 'fa-water',
    type: 'spot',
    image: './images/bangon.jpg',
    address: 'Barangay Bangon / San Andres'
  },
  'obelisk': {
    id: 'obelisk',
    name: 'The Obelisk & Imelda Park',
    category: 'Historical Heritage',
    lat: 11.7742,
    lng: 124.8861,
    icon: 'fa-monument',
    type: 'spot',
    image: './images/obelisk.jpg',
    address: 'Downtown Capitol Grounds'
  },
  'pieta': {
    id: 'pieta',
    name: 'Pieta Park & St. Bartholomew Parish',
    category: 'Religious & Memorial',
    lat: 11.7753,
    lng: 124.8829,
    icon: 'fa-church',
    type: 'spot',
    image: './images/pieta.jpg',
    address: 'Allen Avenue / Poblacion'
  },
  'darahuway': {
    id: 'darahuway',
    name: 'Darahuway Guti Island',
    category: 'Marine Sanctuary',
    lat: 11.7490,
    lng: 124.8721,
    icon: 'fa-water-ladder',
    type: 'spot',
    image: './images/darahuway.jpg',
    address: 'Maqueda Bay Islet (Offshore)'
  },
  'maqueda': {
    id: 'maqueda',
    name: 'Maqueda Bay Sunset Boulevard',
    category: 'Scenic Coastal Promenade',
    lat: 11.7740,
    lng: 124.8795,
    icon: 'fa-cloud-sun',
    type: 'spot',
    image: './images/maqueda.jpg',
    address: 'Catbalogan Seawall Boulevard'
  },
  'tamalos': {
    id: 'tamalos',
    name: 'Catbalogan Public Market (Tamalos Food Hall)',
    category: 'Culinary Market',
    lat: 11.7736,
    lng: 124.8799,
    icon: 'fa-utensils',
    type: 'spot',
    image: './images/tamalos.jpg',
    address: 'Curry Avenue'
  },
  'corioso': {
    id: 'corioso',
    name: 'Charito’s Delights (Corioso Bakery)',
    category: 'Pasalubong Bakeshop',
    lat: 11.7752,
    lng: 124.8835,
    icon: 'fa-cookie-bite',
    type: 'spot',
    image: './images/corioso.jpg',
    address: 'San Roque Street'
  },
  'lara_samar': {
    id: 'lara_samar',
    name: 'Lara Samar Banig & Weaving Center',
    category: 'Handicraft & Souvenir',
    lat: 11.7748,
    lng: 124.8840,
    icon: 'fa-basket-shopping',
    type: 'spot',
    image: './images/hero.jpg',
    address: 'Rizal Avenue Downtown'
  },
  // DOT Accredited Restaurants & Dining Spots
  'resto_157th': {
    id: 'resto_157th',
    name: '157th Street Boutique Hotel',
    category: 'DOT Accredited Restaurant',
    lat: 11.7748,
    lng: 124.8835,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_157th.jpg',
    address: 'San Bartolome Street, City Proper'
  },
  'resto_jrd': {
    id: 'resto_jrd',
    name: 'JRD Hotel & Restaurant',
    category: 'DOT Accredited Restaurant',
    lat: 11.7760,
    lng: 124.8840,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_jrd.jpg',
    address: 'Del Rosario St. cor. Taft Ave.'
  },
  'resto_payao': {
    id: 'resto_payao',
    name: 'Payao Mangroves Grill and Restaurant',
    category: 'DOT Accredited Restaurant',
    lat: 11.7925,
    lng: 124.8765,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_payao.jpg',
    address: 'Maharlika Highway, Brgy. Payao'
  },
  'resto_mgrand': {
    id: 'resto_mgrand',
    name: 'M Grand Royale Resort',
    category: 'DOT Accredited Restaurant',
    lat: 11.7650,
    lng: 124.8920,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_mgrand.jpg',
    address: 'Executive Heights, Brgy. Guinsorongan'
  },
  'resto_mare_monte': {
    id: 'resto_mare_monte',
    name: 'Mare e Monte Restaurant',
    category: 'DOT Accredited Restaurant',
    lat: 11.7735,
    lng: 124.8855,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_mare_monte.jpg',
    address: 'Rizal Avenue Extension (Capitol Area)'
  },
  'resto_ernies': {
    id: 'resto_ernies',
    name: "Ernie's Pizza",
    category: 'DOT Accredited Restaurant',
    lat: 11.7740,
    lng: 124.8850,
    icon: 'fa-pizza-slice',
    type: 'dining',
    image: './images/resto_ernies.jpg',
    address: 'Rizal Avenue Extension'
  },
  'resto_secret_cafe': {
    id: 'resto_secret_cafe',
    name: 'The Secret Cafe',
    category: 'DOT Accredited Restaurant',
    lat: 11.7780,
    lng: 124.8830,
    icon: 'fa-mug-saucer',
    type: 'dining',
    image: './images/resto_secret_cafe.jpg',
    address: '170 Del Rosario Street, Ubanon'
  },
  'resto_city_grill': {
    id: 'resto_city_grill',
    name: 'City Grill',
    category: 'DOT Accredited Restaurant',
    lat: 11.7755,
    lng: 124.8842,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_city_grill.jpg',
    address: 'Del Rosario Street, Poblacion'
  },
  'resto_king_bean': {
    id: 'resto_king_bean',
    name: 'King Bean Cafe',
    category: 'DOT Accredited Restaurant',
    lat: 11.7752,
    lng: 124.8840,
    icon: 'fa-mug-saucer',
    type: 'dining',
    image: './images/resto_king_bean.jpg',
    address: 'Del Rosario St. (in front of BDO)'
  },
  'resto_palabok': {
    id: 'resto_palabok',
    name: 'Palabok House',
    category: 'DOT Accredited Restaurant',
    lat: 11.7746,
    lng: 124.8838,
    icon: 'fa-bowl-food',
    type: 'dining',
    image: './images/resto_palabok.jpg',
    address: 'San Bartolome Street, Poblacion 3'
  },
  'resto_toril': {
    id: 'resto_toril',
    name: 'Toril Grill and Resto Bar',
    category: 'DOT Accredited Restaurant',
    lat: 11.7580,
    lng: 124.8960,
    icon: 'fa-utensils',
    type: 'dining',
    image: './images/resto_toril.jpg',
    address: 'Barangay Socorro (Overlooking)'
  },
  // DOT Accredited Hotels & Accommodations
  'hotel_157th': {
    id: 'hotel_157th',
    name: '157th Street Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7748,
    lng: 124.8835,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_157th.jpg',
    address: 'San Bartolome St. Poblacion 7'
  },
  'hotel_la_sierra': {
    id: 'hotel_la_sierra',
    name: 'La Sierra Island Resort',
    category: 'DOT Accredited Resort',
    lat: 11.7680,
    lng: 124.8450,
    icon: 'fa-umbrella-beach',
    type: 'hotel',
    image: './images/hotel_la_sierra.jpg',
    address: 'Barangay Cinco, Sierra Island'
  },
  'hotel_juvies': {
    id: 'hotel_juvies',
    name: "Juvie's Resort Hotel and Restaurant",
    category: 'DOT Accredited Resort',
    lat: 11.8020,
    lng: 124.8380,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_juvies.jpg',
    address: 'Barangay San Roque, Buri Island'
  },
  'hotel_rosario_hills': {
    id: 'hotel_rosario_hills',
    name: 'Rosario Hills',
    category: 'DOT Accredited Hotel',
    lat: 11.7850,
    lng: 124.8900,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_rosario_hills.jpg',
    address: 'Barangay New Mahayag'
  },
  'hotel_asia_novo': {
    id: 'hotel_asia_novo',
    name: 'Asia Novo Boutique Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7758,
    lng: 124.8845,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_asia_novo.jpg',
    address: 'San Roque Street, City Center'
  },
  'hotel_casa_cristina': {
    id: 'hotel_casa_cristina',
    name: 'Casa Cristina Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7750,
    lng: 124.8848,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_casa_cristina.jpg',
    address: 'San Roque Street, Catbalogan'
  },
  'hotel_san_francisco': {
    id: 'hotel_san_francisco',
    name: 'Hotel San Francisco',
    category: 'DOT Accredited Hotel',
    lat: 11.7765,
    lng: 124.8842,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_san_francisco.jpg',
    address: 'San Francisco Street, City Proper'
  },
  'hotel_lcd': {
    id: 'hotel_lcd',
    name: 'LCD Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7752,
    lng: 124.8825,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_lcd.jpg',
    address: 'Mabini Avenue, Catbalogan City'
  },
  'hotel_our_choice': {
    id: 'hotel_our_choice',
    name: 'Our Choice Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7756,
    lng: 124.8828,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_our_choice.jpg',
    address: 'Mabini Avenue, Catbalogan City'
  },
  'hotel_rolet': {
    id: 'hotel_rolet',
    name: 'Rolet Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7745,
    lng: 124.8845,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_rolet.jpg',
    address: 'San Roque Street, Catbalogan City'
  },
  'hotel_sc': {
    id: 'hotel_sc',
    name: 'SC Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7750,
    lng: 124.8822,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_sc.jpg',
    address: 'Mabini Avenue, Catbalogan City'
  },
  'hotel_vismin_gv': {
    id: 'hotel_vismin_gv',
    name: 'Vismin GV Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7755,
    lng: 124.8835,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_vismin_gv.jpg',
    address: 'Rizal Street, Downtown'
  },
  'hotel_your_choice': {
    id: 'hotel_your_choice',
    name: 'Your Choice Hotel',
    category: 'DOT Accredited Hotel',
    lat: 11.7762,
    lng: 124.8838,
    icon: 'fa-hotel',
    type: 'hotel',
    image: './images/hotel_your_choice.jpg',
    address: 'Del Rosario Street, Catbalogan'
  }
};

// 2. ROUTING KNOWLEDGE BASE
const ROUTE_RULES = {
  // Island routes (Darahuway Guti)
  'darahuway': {
    primaryVehicle: 'Banca',
    tagClass: 'tag-banca',
    iconClass: 'fa-ship',
    fareEstimate: '₱65 – ₱100',
    fareNote: '₱15 Tricycle to Pier 1 + ₱50–85 Boat fare (or ₱500–800 private charter)',
    duration: '25 – 35 mins',
    distanceEst: '4.8 km',
    steps: [
      {
        title: 'Board a Tricycle to Catbalogan Pier 1',
        desc: 'Hail a downtown tricycle and tell the driver: "Pier 1 po / Curry Avenue port".',
        tip: 'Fare is ₱15 minimum within poblacion.',
        waray: 'Pakadto ha Pier 1.'
      },
      {
        title: 'Board Motorized Outrigger Banca at Coastal Terminal',
        desc: 'Proceed to the passenger banca loading ramp bound for Barangay Darahuway Guti.',
        tip: 'Boats depart regularly throughout morning until 3:00 PM. Life vests are provided.',
        waray: 'Pira it plete tabok ha Darahuway Guti?'
      },
      {
        title: 'Arrive at Darahuway Guti Island Pier',
        desc: 'Alight at the village boardwalk. Clear swimming waters and marine reserve are right beside the pier.',
        tip: 'Coordinate with your boat captain for return pickup time (recommended before 4:30 PM sunset).',
        waray: 'Balik kita hit alas kuwatro hit kulop.'
      }
    ]
  },

  // Eco-tourism falls (Bangon Falls)
  'bangon': {
    primaryVehicle: 'Habal-habal',
    tagClass: 'tag-habal',
    iconClass: 'fa-motorcycle',
    fareEstimate: '₱150 – ₱200',
    fareNote: 'Includes two-way motorbike ride + driver waiting time at registration shed',
    duration: '25 – 35 mins',
    distanceEst: '12.5 km',
    steps: [
      {
        title: 'Hail a Habal-habal (Motorcycle Taxi)',
        desc: 'Find habal-habal drivers stationed along San Francisco St. terminal or along Maharlika Highway.',
        tip: 'Confirm roundtrip fare before riding. Negotiate around ₱150–₱200 for up to 2 passengers.',
        waray: 'Pakadto kami ha Bangon Falls, pabalik liwat.'
      },
      {
        title: 'Scenic Northbound Ride along Maharlika Highway',
        desc: 'Ride through Barangay San Andres heading towards the interior mountain trail of Brgy. Bangon.',
        tip: 'Hold firmly onto passenger grab bars as the road transitions into lush forest concrete & gravel paths.',
        waray: 'Hinay-hinay la kuya ha ligid.'
      },
      {
        title: 'Register at Eco-Tourism Desk & 10-Min Nature Walk',
        desc: 'Alight at the tourism registration station, pay small environmental fee (₱20), and follow the shaded jungle brook trail to the tier 1 waterfall.',
        tip: 'Wear non-slip footwear. Local youth guides are available for assistance.',
        waray: 'Maupay nga adlaw, makadto kami hit busay.'
      }
    ]
  },

  // Buri Island Boardwalk & Airport
  'buri': {
    primaryVehicle: 'Tricycle / Multicab',
    tagClass: 'tag-tricycle',
    iconClass: 'fa-motorcycle',
    fareEstimate: '₱20 – ₱120',
    fareNote: '₱20 per head on shared Silanga multicab, or ₱100–₱150 for private special tricycle',
    duration: '15 – 20 mins',
    distanceEst: '6.8 km',
    steps: [
      {
        title: 'Board Buri Multicab or Charter Special Tricycle',
        desc: 'Catch a northbound multicab at Del Rosario St. terminal or hire any tricycle for a direct "Special Trip".',
        tip: 'Special tricycle gives you direct drop-off right at the Baras Beach boardwalk entrance.',
        waray: 'Pakadto ha Buri Island Boardwalk / Baras Beach.'
      },
      {
        title: 'Cross the Scenic Buri Island Causeway Bridge',
        desc: 'Travel along the coastal highway past Brgy. Silanga and cross the bridge connecting Samar mainland to Buri Island.',
        tip: 'Stunning 180-degree ocean views of Samar Sea on both sides of the bridge.',
        waray: 'Lugar la po ha Baras entrance.'
      },
      {
        title: 'Arrive at Buri Island Boardwalk',
        desc: 'Alight at the boardwalk entrance. Cottages, sunset viewing decks, and beach shores are immediately accessible.',
        tip: 'For your return trip, tricycles are usually waiting near the airport road or ask your driver for pick-up.',
        waray: 'Lugar la!'
      }
    ]
  },

  // Downtown walking / close heritage spots
  'downtown_walk': {
    primaryVehicle: 'Walking / Tricycle',
    tagClass: 'tag-walk',
    iconClass: 'fa-person-walking',
    fareEstimate: '₱12 – ₱15',
    fareNote: 'Free if walking (5 mins) or ₱12–₱15 standard city-wide tricycle fare',
    duration: '3 – 8 mins',
    distanceEst: '0.4 – 0.9 km',
    steps: [
      {
        title: 'Short Downtown Walk or Quick Tricycle Hail',
        desc: 'These heritage landmarks are located within the walkable downtown heritage district.',
        tip: 'You can easily walk in 5 minutes! Or flag any passing green/white tricycle for ₱12–₱15.',
        waray: 'Pira it plete? Lugar la po!'
      },
      {
        title: 'Direct Arrival at Landmark Entrance',
        desc: 'Alight right at the entrance gate or park plaza.',
        tip: 'Wide paved pedestrian sidewalks with shade trees.',
        waray: 'Damo nga salamat!'
      }
    ]
  }
};

// 3. TRANSIT PLANNER CONTROLLER
let transitMap = null;
let originMarker = null;
let destMarker = null;
let liveGpsMarker = null;
let routePolyline = null;
let allSpotMarkers = [];

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  populateDropdowns();
  checkUrlParams();
  setupEventListeners();
  calculateRoute(); // Initial calculation
});

function initMap() {
  const mapElem = document.getElementById('mapContainer');
  if (!mapElem) return;

  // Center on Catbalogan City Poblacion
  const catbaloganCoords = [11.7750, 124.8820];
  
  try {
    transitMap = L.map('mapContainer', {
      center: catbaloganCoords,
      zoom: 13,
      zoomControl: true
    });

    // 1. Google Maps Road & Landmarks (Crystal clear, fast, zero watermarks or blocks)
    const googleStreets = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution: 'Map data &copy; Google | Dungaw Catbalogan Transit',
      maxZoom: 20
    });

    // 2. Google Hybrid Satellite + Streets (Real aerial satellite view with street labels)
    const googleHybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      attribution: 'Imagery &copy; Google | Dungaw Catbalogan Transit',
      maxZoom: 20
    });

    // 3. ESRI Topo & Street Map (Alternative high-detail terrain & highway layer)
    const esriStreet = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, DeLorme',
      maxZoom: 19
    });

    // Default active layer
    googleStreets.addTo(transitMap);

    // Layer Switcher Control for Panelists & Commuters
    const baseMaps = {
      'Tourism & Road Map': googleStreets,
      'Satellite + Labels': googleHybrid,
      'Terrain Street Map': esriStreet
    };
    L.control.layers(baseMaps, null, { position: 'topright', collapsed: false }).addTo(transitMap);

    // Plot background landmarks
    plotAllLandmarks();

  } catch (err) {
    console.error('Leaflet initialization fallback:', err);
    mapElem.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #475569;">
        <i class="fa-solid fa-map-location-dot" style="font-size: 48px; color: #0f8b84; margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-serif); color: #0c2333;">Interactive Map Active</h3>
        <p>Route calculation and transit directions are fully functioning below.</p>
      </div>
    `;
  }
}

let currentMapFilter = 'all';

function setMapFilter(filterType) {
  currentMapFilter = filterType;
  document.querySelectorAll('.map-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filterType);
  });
  
  const originId = document.getElementById('originSelect')?.value;
  const destId = document.getElementById('destSelect')?.value;
  plotAllLandmarks([originId, destId]);

  if (filterType === 'terminal') {
    fitAllTerminals();
  }
}

function fitAllTerminals() {
  if (!transitMap || !L) return;
  const terminalLocs = Object.values(TRANSIT_LOCATIONS).filter(l => l.type === 'terminal');
  if (terminalLocs.length === 0) return;
  const bounds = L.latLngBounds(terminalLocs.map(l => [l.lat, l.lng]));
  transitMap.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
}

function plotAllLandmarks(excludeIds = []) {
  if (!transitMap || !L) return;

  allSpotMarkers.forEach(m => transitMap.removeLayer(m));
  allSpotMarkers = [];

  Object.values(TRANSIT_LOCATIONS).forEach(loc => {
    if (excludeIds.includes(loc.id)) return;

    const isTerminal = loc.type === 'terminal';
    const isHub = loc.type === 'hub';
    const isDining = loc.type === 'dining';
    const isHotel = loc.type === 'hotel';
    const isSpot = loc.type === 'spot';

    if (currentMapFilter !== 'all') {
      if (currentMapFilter === 'terminal' && !isTerminal) return;
      if (currentMapFilter === 'spot' && (!isSpot && !isHub)) return;
      if (currentMapFilter === 'hotel' && !isHotel) return;
      if (currentMapFilter === 'dining' && !isDining) return;
    }

    const pinClass = isTerminal ? 'pin-terminal terminal-pulsing-badge' : (isHub ? 'pin-hub' : (isDining ? 'pin-dining' : (isHotel ? 'pin-hotel' : 'pin-spot')));
    const zIndex = isTerminal ? 800 : (isHub ? 400 : 100);
    const pinSize = isTerminal ? 36 : 28;
    const anchor = isTerminal ? 18 : 14;

    const customIcon = L.divIcon({
      className: 'custom-leaflet-div',
      html: `<div class="map-pin-badge ${pinClass}" style="width:${pinSize}px;height:${pinSize}px;font-size:${isTerminal ? '15px' : '12px'};border-width:${isTerminal ? '3px' : '2px'};" title="${loc.name}"><i class="fa-solid ${loc.icon}"></i></div>`,
      iconSize: [pinSize, pinSize],
      iconAnchor: [anchor, anchor],
      popupAnchor: [0, -anchor - 4]
    });

    const marker = L.marker([loc.lat, loc.lng], { icon: customIcon, zIndexOffset: zIndex });

    // Permanent Floating Tooltip for all transportation terminals so they are ALWAYS visible
    if (isTerminal) {
      marker.bindTooltip(`
        <div class="terminal-floating-tooltip">
          <i class="fa-solid ${loc.icon}" style="color: #c084fc;"></i>
          <span>${loc.shortLabel || loc.name}</span>
        </div>
      `, {
        permanent: true,
        direction: 'top',
        className: 'custom-terminal-tooltip',
        offset: [0, -20]
      });
    }

    const popupHtml = `
      <div class="map-terminal-popup" style="min-width: 220px; font-family: var(--font-body); padding: 4px;">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:${isTerminal ? '#7c3aed' : '#0f8b84'};color:#fff;font-size:11px;">
            <i class="fa-solid ${loc.icon}"></i>
          </span>
          <strong style="color: #0c2333; font-size: 14px; line-height: 1.2;">${loc.name}</strong>
        </div>
        <span style="display: inline-block; font-size: 11px; background: ${isTerminal ? '#ede9fe' : '#e0f2fe'}; color: ${isTerminal ? '#6d28d9' : '#0369a1'}; padding: 2px 8px; border-radius: 20px; font-weight: 700; margin-bottom: 8px;">${loc.category}</span>
        ${loc.vehicleType ? `<div style="font-size: 11.5px; color: #475569; margin-bottom: 4px;"><strong>Vehicles:</strong> ${loc.vehicleType}</div>` : ''}
        ${loc.routes ? `<div style="font-size: 11.5px; color: #475569; margin-bottom: 6px;"><strong>Routes:</strong> ${loc.routes}</div>` : ''}
        <p style="font-size: 12px; color: #64748b; margin-bottom: 10px;">${loc.address}</p>
        <div style="display: flex; gap: 6px;">
          <button onclick="setOriginFromMap('${loc.id}')" style="flex: 1; background: #0f8b84; color: #fff; border: none; padding: 6px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; cursor: pointer;">Start Here</button>
          <button onclick="setDestFromMap('${loc.id}')" style="flex: 1; background: ${isTerminal ? '#7c3aed' : '#f97316'}; color: #fff; border: none; padding: 6px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; cursor: pointer;">Route Here &rarr;</button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);
    marker.addTo(transitMap);
    allSpotMarkers.push(marker);
  });
}


function populateDropdowns() {
  const originSelect = document.getElementById('originSelect');
  const destSelect = document.getElementById('destSelect');
  if (!originSelect || !destSelect) return;

  originSelect.innerHTML = '';
  destSelect.innerHTML = '';

  // Origins grouped
  const optGroupTerminals1 = document.createElement('optgroup');
  optGroupTerminals1.label = '— Vehicle & Transport Terminals —';
  const optGroupHubs1 = document.createElement('optgroup');
  optGroupHubs1.label = '— City Landmarks & Government Hubs —';
  const optGroupSpots1 = document.createElement('optgroup');
  optGroupSpots1.label = '— Tourist Spots & Attractions —';
  const optGroupHotels1 = document.createElement('optgroup');
  optGroupHotels1.label = '— DOT Accredited Hotels —';
  const optGroupDining1 = document.createElement('optgroup');
  optGroupDining1.label = '— DOT Accredited Restaurants —';

  // Destinations grouped
  const optGroupSpots2 = document.createElement('optgroup');
  optGroupSpots2.label = '— Tourist Spots & Attractions —';
  const optGroupTerminals2 = document.createElement('optgroup');
  optGroupTerminals2.label = '— Vehicle & Transport Terminals —';
  const optGroupHotels2 = document.createElement('optgroup');
  optGroupHotels2.label = '— DOT Accredited Hotels —';
  const optGroupDining2 = document.createElement('optgroup');
  optGroupDining2.label = '— DOT Accredited Restaurants —';
  const optGroupHubs2 = document.createElement('optgroup');
  optGroupHubs2.label = '— City Landmarks —';

  Object.values(TRANSIT_LOCATIONS).forEach(loc => {
    // For origin
    const opt1 = new Option(loc.name + ' (' + loc.category + ')', loc.id);
    if (loc.type === 'terminal') optGroupTerminals1.appendChild(opt1);
    else if (loc.type === 'hub') optGroupHubs1.appendChild(opt1);
    else if (loc.type === 'hotel') optGroupHotels1.appendChild(opt1);
    else if (loc.type === 'dining') optGroupDining1.appendChild(opt1);
    else optGroupSpots1.appendChild(opt1);

    // For destination
    const opt2 = new Option(loc.name + ' (' + loc.category + ')', loc.id);
    if (loc.type === 'spot') optGroupSpots2.appendChild(opt2);
    else if (loc.type === 'terminal') optGroupTerminals2.appendChild(opt2);
    else if (loc.type === 'hotel') optGroupHotels2.appendChild(opt2);
    else if (loc.type === 'dining') optGroupDining2.appendChild(opt2);
    else optGroupHubs2.appendChild(opt2);
  });

  originSelect.appendChild(optGroupTerminals1);
  originSelect.appendChild(optGroupHubs1);
  originSelect.appendChild(optGroupSpots1);
  originSelect.appendChild(optGroupHotels1);
  originSelect.appendChild(optGroupDining1);

  destSelect.appendChild(optGroupSpots2);
  destSelect.appendChild(optGroupTerminals2);
  destSelect.appendChild(optGroupHotels2);
  destSelect.appendChild(optGroupDining2);
  destSelect.appendChild(optGroupHubs2);

  // Defaults
  originSelect.value = 'port';
  destSelect.value = 'buri';
}

function setupEventListeners() {
  const originSelect = document.getElementById('originSelect');
  const destSelect = document.getElementById('destSelect');
  if (originSelect) originSelect.addEventListener('change', calculateRoute);
  if (destSelect) destSelect.addEventListener('change', calculateRoute);
}

function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const toParam = params.get('to');
  const fromParam = params.get('from');

  if (toParam && TRANSIT_LOCATIONS[toParam]) {
    const destSelect = document.getElementById('destSelect');
    if (destSelect) destSelect.value = toParam;
  }
  if (fromParam && TRANSIT_LOCATIONS[fromParam]) {
    const originSelect = document.getElementById('originSelect');
    if (originSelect) originSelect.value = fromParam;
  }
}

function selectQuickDest(destId) {
  const destSelect = document.getElementById('destSelect');
  if (destSelect && TRANSIT_LOCATIONS[destId]) {
    destSelect.value = destId;
    
    // Highlight chip
    document.querySelectorAll('.chip-dest').forEach(c => c.classList.remove('active'));
    const clickedChip = document.getElementById('chip-' + destId);
    if (clickedChip) clickedChip.classList.add('active');

    calculateRoute();
  }
}

function swapRoutePoints() {
  const originSelect = document.getElementById('originSelect');
  const destSelect = document.getElementById('destSelect');
  if (!originSelect || !destSelect) return;

  const temp = originSelect.value;
  originSelect.value = destSelect.value;
  destSelect.value = temp;

  calculateRoute();
}

function setOriginFromMap(id) {
  const originSelect = document.getElementById('originSelect');
  if (originSelect) {
    originSelect.value = id;
    calculateRoute();
  }
}

function setDestFromMap(id) {
  const destSelect = document.getElementById('destSelect');
  if (destSelect) {
    destSelect.value = id;
    calculateRoute();
  }
}

// Haversine distance in km
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function calculateRoute() {
  const originId = document.getElementById('originSelect')?.value;
  const destId = document.getElementById('destSelect')?.value;

  if (!originId || !destId) return;

  const origin = TRANSIT_LOCATIONS[originId];
  const dest = TRANSIT_LOCATIONS[destId];
  if (!origin || !dest) return;

  const straightDist = calculateDistance(origin.lat, origin.lng, dest.lat, dest.lng);
  const roadDist = (straightDist * 1.25).toFixed(1);

  // Determine transit rules
  let rule = null;
  if (dest.id === 'darahuway' || origin.id === 'darahuway') {
    rule = ROUTE_RULES['darahuway'];
  } else if (dest.id === 'bangon' || origin.id === 'bangon') {
    rule = ROUTE_RULES['bangon'];
  } else if (dest.id === 'buri' || origin.id === 'buri' || dest.id === 'airport' || origin.id === 'airport') {
    rule = ROUTE_RULES['buri'];
  } else {
    rule = ROUTE_RULES['downtown_walk'];
  }

  // Render Route Result Box
  renderResultCard(origin, dest, rule, roadDist);

  // Update Leaflet Map Visuals
  updateMapRoute(origin, dest);
}

function renderResultCard(origin, dest, rule, distanceKm) {
  const container = document.getElementById('routeResultContainer');
  if (!container) return;

  // Dynamic estimate adjustments based on distance
  let dynamicTime = rule.duration;
  let dynamicFare = rule.fareEstimate;
  if (rule === ROUTE_RULES['downtown_walk']) {
    if (parseFloat(distanceKm) > 1.2) {
      dynamicTime = '8 – 12 mins';
      dynamicFare = '₱15 – ₱20';
    } else {
      dynamicTime = '3 – 6 mins';
      dynamicFare = '₱12 – ₱15';
    }
  }

  container.innerHTML = `
    <div class="vehicle-hero-card">
      <div class="vehicle-hero-top">
        <span class="vehicle-type-tag ${rule.tagClass}">
          <i class="fa-solid ${rule.iconClass}"></i>
          <span>${rule.primaryVehicle} Recommended</span>
        </span>
        <span style="font-size: 12px; font-weight: 700; color: #64748b;">
          Direct Commute
        </span>
      </div>

      <div class="trip-metrics-row">
        <div class="metric-col">
          <small>Estimated Fare</small>
          <strong class="fare-highlight">${dynamicFare}</strong>
        </div>
        <div class="metric-col">
          <small>Travel Time</small>
          <strong>${dynamicTime}</strong>
        </div>
        <div class="metric-col">
          <small>Distance</small>
          <strong>${distanceKm} km</strong>
        </div>
      </div>
      
      <div style="margin-top: 10px; font-size: 11.5px; color: #64748b; text-align: center;">
        <i class="fa-solid fa-circle-info" style="color: #0f8b84;"></i> ${rule.fareNote}
      </div>
    </div>

    <!-- Step Timeline -->
    <div style="margin-bottom: 12px;">
      <h4 style="font-size: 14px; font-weight: 800; color: #0c2333; text-transform: uppercase; letter-spacing: 0.5px;">
        <i class="fa-solid fa-route" style="color: #0f8b84; margin-right: 6px;"></i> How to Get There:
      </h4>
    </div>

    <div class="step-timeline">
      ${rule.steps.map((s, idx) => `
        <div class="step-item">
          <div class="step-circle">${idx + 1}</div>
          <div class="step-title">${s.title}</div>
          <div class="step-desc">${s.desc}</div>
          ${s.tip ? `<div class="step-tip"><i class="fa-solid fa-lightbulb"></i> <strong>Tip:</strong> ${s.tip}</div>` : ''}
          ${s.waray ? `<div style="margin-top: 5px; font-size: 12px; color: #0f8b84; font-weight: 600;"><i class="fa-regular fa-comment-dots"></i> <em>Waray phrase to say: "${s.waray}"</em></div>` : ''}
        </div>
      `).join('')}
    </div>

    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 8px;">
      <button onclick="if(typeof addToTrip==='function') addToTrip('${dest.name.replace(/'/g, "\\'")}');" style="width: 100%; padding: 11px; border-radius: 8px; background: #f97316; border: none; color: #ffffff; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <i class="fa-solid fa-bookmark"></i> Save "${dest.name}" to My Trip
      </button>
      <div style="display: flex; gap: 10px;">
        <button onclick="shareRoute()" style="flex: 1; padding: 10px; border-radius: 8px; background: #f8fafc; border: 1px solid #cbd5e1; color: #334155; font-size: 13px; font-weight: 700; cursor: pointer;">
          <i class="fa-solid fa-share-nodes"></i> Share Route
        </button>
        <button onclick="zoomToFullRoute()" style="flex: 1; padding: 10px; border-radius: 8px; background: #0c2333; border: none; color: #ffffff; font-size: 13px; font-weight: 700; cursor: pointer;">
          <i class="fa-solid fa-expand"></i> Fit to Map
        </button>
      </div>
    </div>
  `;
}

let routeCasingLine = null;

function updateMapRoute(origin, dest) {
  if (!transitMap || !L) return;

  // Clear previous route & markers
  if (originMarker) transitMap.removeLayer(originMarker);
  if (destMarker) transitMap.removeLayer(destMarker);
  if (routePolyline) transitMap.removeLayer(routePolyline);
  if (routeCasingLine) transitMap.removeLayer(routeCasingLine);

  // Refresh background pins excluding current origin & destination
  plotAllLandmarks([origin.id, dest.id]);

  // Origin Icon (Teal)
  const originIcon = L.divIcon({
    className: 'custom-leaflet-div',
    html: `<div class="map-pin-badge pin-origin" title="Start: ${origin.name}"><i class="fa-solid fa-location-dot"></i></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -20]
  });

  // Destination Icon (Captivating Orange)
  const destIcon = L.divIcon({
    className: 'custom-leaflet-div',
    html: `<div class="map-pin-badge pin-dest pin-pulse" title="Destination: ${dest.name}"><i class="fa-solid fa-flag-checkered"></i></div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -22]
  });

  originMarker = L.marker([origin.lat, origin.lng], { icon: originIcon, zIndexOffset: 900 }).addTo(transitMap);
  destMarker = L.marker([dest.lat, dest.lng], { icon: destIcon, zIndexOffset: 1000 }).addTo(transitMap);

  originMarker.bindPopup(`<strong>Start:</strong> ${origin.name}<br><small>${origin.address}</small>`);
  destMarker.bindPopup(`<strong>Destination:</strong> ${dest.name}<br><small>${dest.address}</small>`).openPopup();

  // Generate intermediate points along coastline/roadways for realistic curves
  const waypoints = generateRealisticWaypoints(origin, dest);

  // Draw crisp white outline casing + main Teal route polyline
  routeCasingLine = L.polyline(waypoints, {
    color: '#ffffff',
    weight: 9,
    opacity: 0.9,
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(transitMap);

  routePolyline = L.polyline(waypoints, {
    color: '#0f8b84',
    weight: 5,
    opacity: 0.95,
    dashArray: '10, 8',
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(transitMap);

  // Fit bounds to show entire route with comfortable padding
  transitMap.fitBounds(routePolyline.getBounds(), { padding: [55, 55] });
}

// Generate realistic road/sea waypoint approximations
function generateRealisticWaypoints(origin, dest) {
  const points = [[origin.lat, origin.lng]];

  // If to Buri Island (routes through Silanga causeway bridge)
  if (dest.id === 'buri' || origin.id === 'buri' || dest.id === 'airport' || origin.id === 'airport') {
    const mainlandPt = [11.7950, 124.8720]; // North coastal road
    const causewayPt = [11.8050, 124.8450]; // Causeway junction
    if (dest.id === 'buri' || dest.id === 'airport') {
      points.push(mainlandPt);
      points.push(causewayPt);
    } else {
      points.push(causewayPt);
      points.push(mainlandPt);
    }
  }

  // If to Bangon Falls (routes north along Maharlika Highway)
  else if (dest.id === 'bangon' || origin.id === 'bangon') {
    const northHwy1 = [11.7900, 124.8820];
    const northHwy2 = [11.8250, 124.8840];
    const junctionPt = [11.8550, 124.8810];
    if (dest.id === 'bangon') {
      points.push(northHwy1, northHwy2, junctionPt);
    } else {
      points.push(junctionPt, northHwy2, northHwy1);
    }
  }

  // If to Darahuway Guti (routes out of harbor via sea channel)
  else if (dest.id === 'darahuway' || origin.id === 'darahuway') {
    const pierPt = [11.7736, 124.8799];
    const harborExit = [11.7650, 124.8750];
    if (dest.id === 'darahuway') {
      points.push(pierPt, harborExit);
    } else {
      points.push(harborExit, pierPt);
    }
  }

  points.push([dest.lat, dest.lng]);
  return points;
}

function zoomToFullRoute() {
  if (transitMap && routePolyline) {
    transitMap.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });
  }
}

// Live GPS Location Tracker
function trackMyLocation() {
  const btn = document.getElementById('gpsBtn');
  if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Locating...';

  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser. You can select your starting point from the dropdown!');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Use My GPS';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      if (btn) btn.innerHTML = '<i class="fa-solid fa-check"></i> Location Found';

      // Check if user is in/near Samar region (roughly 11.0 to 12.5 lat, 124.0 to 125.5 lng)
      const isInSamar = (userLat >= 11.2 && userLat <= 12.5 && userLng >= 124.0 && userLng <= 125.5);

      if (!isInSamar) {
        // User is currently browsing from elsewhere (e.g. testing from Manila, Cebu, or home)
        alert('Note: You are currently outside Catbalogan City (' + userLat.toFixed(2) + ', ' + userLng.toFixed(2) + '). We will pinpoint your starting hub at Catbalogan Seaport/City Center so you can plan your trip!');
      }

      // Add custom live GPS pulsing marker
      if (liveGpsMarker && transitMap) transitMap.removeLayer(liveGpsMarker);

      const targetLat = isInSamar ? userLat : 11.7745;
      const targetLng = isInSamar ? userLng : 11.7810;

      const liveIcon = L.divIcon({
        className: 'custom-leaflet-div',
        html: `<div class="live-gps-pulse" title="Your Live Location"></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      if (transitMap) {
        liveGpsMarker = L.marker([targetLat, targetLng], { icon: liveIcon }).addTo(transitMap);
        liveGpsMarker.bindPopup('<strong>You Are Here</strong><br>GPS accuracy: within ' + Math.round(position.coords.accuracy) + 'm').openPopup();
        transitMap.setView([targetLat, targetLng], 15);
      }

      // Add custom "My GPS Location" to origin dropdown
      TRANSIT_LOCATIONS['my_gps'] = {
        id: 'my_gps',
        name: 'My Current Location',
        category: 'Live GPS Pin',
        lat: targetLat,
        lng: targetLng,
        icon: 'fa-location-crosshairs',
        type: 'hub',
        address: 'Current Device GPS Position'
      };

      const originSelect = document.getElementById('originSelect');
      if (originSelect) {
        let gpsOpt = originSelect.querySelector('option[value="my_gps"]');
        if (!gpsOpt) {
          gpsOpt = new Option('My Current Location (GPS)', 'my_gps');
          originSelect.prepend(gpsOpt);
        }
        originSelect.value = 'my_gps';
        calculateRoute();
      }
    },
    (error) => {
      console.warn('Geolocation error:', error);
      alert('Unable to access live GPS location (' + error.message + '). Please pick your closest hub like Catbalogan Port, Grand Tours, or Capitol from the dropdown.');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Use My GPS';
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

function shareRoute() {
  const originId = document.getElementById('originSelect')?.value;
  const destId = document.getElementById('destSelect')?.value;
  const shareUrl = window.location.origin + window.location.pathname + '?from=' + originId + '&to=' + destId;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Route link copied to clipboard!\n' + shareUrl);
    });
  } else {
    prompt('Copy this link to share the route:', shareUrl);
  }
}



/* ========================================================
   NEAREST VEHICLE TERMINAL TRACKING & SELECTION
   ======================================================== */
let lastNearestTerminalId = null;

function findNearestTerminal() {
  const originSelect = document.getElementById('originSelect');
  let currentLat = 11.7745;
  let currentLng = 124.8835; // Default downtown City Plaza / Capitol

  // Check if live GPS position exists
  if (liveGpsMarker) {
    const latlng = liveGpsMarker.getLatLng();
    currentLat = latlng.lat;
    currentLng = latlng.lng;
  } else if (originSelect && TRANSIT_LOCATIONS[originSelect.value]) {
    const curLoc = TRANSIT_LOCATIONS[originSelect.value];
    currentLat = curLoc.lat;
    currentLng = curLoc.lng;
  }

  // Calculate distance to all vehicle terminals
  const terminalList = Object.values(TRANSIT_LOCATIONS).filter(loc => loc.type === 'terminal');

  let closest = null;
  let minDistance = Infinity;

  terminalList.forEach(t => {
    const distKm = calculateDistance(currentLat, currentLng, t.lat, t.lng);
    if (distKm < minDistance) {
      minDistance = distKm;
      closest = t;
    }
  });

  if (!closest) return;

  lastNearestTerminalId = closest.id;

  // Show nearest terminal card in UI
  const card = document.getElementById('nearestTerminalCard');
  const nameEl = document.getElementById('nearestTerminalName');
  const descEl = document.getElementById('nearestTerminalDesc');
  const distEl = document.getElementById('nearestTerminalDist');
  const fareEl = document.getElementById('nearestTerminalFare');

  if (card && nameEl) {
    nameEl.innerHTML = '<i class="fa-solid ' + closest.icon + '" style="color: #6366f1; margin-right: 6px;"></i> ' + closest.name;
    if (descEl) descEl.textContent = (closest.routes ? 'Serving: ' + closest.routes : closest.address);
    
    const formattedDist = minDistance < 1 ? Math.round(minDistance * 1000) + ' meters away' : minDistance.toFixed(2) + ' km away';
    if (distEl) distEl.innerHTML = '<i class="fa-solid fa-person-walking"></i> Approx ' + formattedDist;
    if (fareEl) {
      const estFare = minDistance <= 1.2 ? 'PHP 12 - 15 (Standard Tricycle)' : (minDistance <= 3.5 ? 'PHP 15 - 25 (Tricycle)' : 'PHP 30 - 50 (Special Tricycle)');
      fareEl.innerHTML = '<i class="fa-solid fa-coins"></i> ' + estFare;
    }

    card.style.display = 'block';
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Highlight nearest terminal chip
  document.querySelectorAll('.chip-terminal').forEach(c => c.classList.remove('active'));
  const targetChip = document.getElementById('chip-term-' + closest.id);
  if (targetChip) targetChip.classList.add('active');

  // Set destination & calculate route
  selectTerminal(closest.id);
}

function selectTerminal(terminalId) {
  const destSelect = document.getElementById('destSelect');
  if (destSelect && TRANSIT_LOCATIONS[terminalId]) {
    destSelect.value = terminalId;
    
    // Highlight terminal chip
    document.querySelectorAll('.chip-dest').forEach(c => c.classList.remove('active'));
    const clickedChip = document.getElementById('chip-term-' + terminalId);
    if (clickedChip) clickedChip.classList.add('active');

    calculateRoute();
  }
}

function routeToNearestTerminal() {
  if (lastNearestTerminalId) {
    selectTerminal(lastNearestTerminalId);
  } else {
    findNearestTerminal();
  }
}

function setAsOriginNearest() {
  if (lastNearestTerminalId) {
    setOriginFromMap(lastNearestTerminalId);
  }
}

export type Machine = {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  price: number;
  year: number;
  make: string;
  model: string;
  hours?: number;
  separatorHours?: number;
  serialNumber?: string;
  description: string;
  specs: Record<string, string>;
  images: string[];
};

export const machines: Machine[] = [
  {
    slug: '2004-john-deere-9660-sts',
    category: 'Combine Harvesters',
    categorySlug: 'combine-harvesters',
    title: '2004 John Deere 9660 STS',
    price: 13965,
    year: 2004,
    make: 'John Deere',
    model: '9660 STS',
    hours: 4759,
    separatorHours: 3167,
    serialNumber: 'H09660S710860',
    description: `The 2004 John Deere 9660 STS is a powerful and efficient combine harvester designed for high-capacity grain harvesting. Part of John Deere's 60-series, this model is well-regarded for its performance and innovative STS (Single Tine Separation) rotary system.

The machine is powered by a John Deere PowerTech™ 6-cylinder in-line turbocharged diesel engine (8.1L 6081HH or 9.0L 6090HH) producing 305 hp (227 kW) at 2200 rpm, with a Power Boost up to 338 hp (252 kW). Fuel capacity is 250 gallons (945 L).

The STS rotary threshing and separating system features a 30-inch (762 mm) rotor for threshing and 33-inch (838 mm) for separating, with a rotor length of 123 inches (3124 mm) and speed range of 210–1000 rpm. Concave adjustment is electro-mechanical.

The cleaning system offers a total sieve area of 7,097 sq inches (4.58 sq meters) with a 12-blade scroll-type cleaning fan running 500–1200 rpm. Grain tank capacity is 250 bushels standard (optional 300 bu extension), with an unloading rate of 2.2 bushels/second.

Additional features include Contour Master technology, Harvest Monitor, Greenstar Ready precision agriculture integration, fine-cut wide-spread chopper/spreader, and available 2WD or Power Rear Wheel Drive (PRWD). Equipped with 18.4x42 front duals and 18.4x26 rear tires.`,
    specs: {
      Engine: 'John Deere PowerTech™ 6-cyl, 8.1L/9.0L Turbodiesel',
      'Rated Power': '305 hp (227 kW) @ 2200 rpm',
      'Max Power (Boost)': '338 hp (252 kW)',
      'Fuel Capacity': '250 gal (945 L)',
      'Rotor Type': 'STS Single Tine Separation',
      'Rotor Diameter': '30" threshing / 33" separating',
      'Rotor Length': '123 in (3124 mm)',
      'Rotor Speed': '210–1000 rpm',
      'Cleaning Area': '7,097 sq in (4.58 m²)',
      'Grain Tank': '250 bu standard (300 bu optional)',
      'Unloading Rate': '2.2 bu/sec',
      'Engine Hours': '4,759',
      'Separator Hours': '3,167',
      'Serial Number': 'H09660S710860',
    },
    images: Array.from({ length: 11 }, (_, i) => `/inventory/2004-john-deere-9660-sts/${i + 1}.jpg`),
  },
  {
    slug: '2013-john-deere-s680',
    category: 'Combine Harvesters',
    categorySlug: 'combine-harvesters',
    title: '2013 John Deere S680',
    price: 41976,
    year: 2013,
    make: 'John Deere',
    model: 'S680',
    hours: 3891,
    separatorHours: 2639,
    serialNumber: '1H0S680STD0755608',
    description: `The 2013 John Deere S680 combine harvester is a highly advanced and powerful machine designed for maximum efficiency and productivity in large-scale grain harvesting operations. It represents a significant upgrade from earlier models, incorporating advanced technology and increased capacity.

Powered by a John Deere PowerTech PSS 13.5L (824 cu in) 6-cylinder Interim Tier 4 (IT4) compliant diesel engine rated at 473 hp (353 kW) at 2100 rpm. With Power Boost, peak power reaches 540 hp (402 kW). Fuel capacity is 330 gallons (1250 L) for extended field time.

The high-capacity rotary threshing and separating system features a 30-inch rotor diameter, 123-inch rotor length, and speed range of 210–1000 rpm. Concave area is 1705.1 sq inches (1.1 m²) with a separating area of 2387.1 sq inches (1.54 m²). Variable Stream Rotor design ensures consistent material flow.

The S-Series cleaning shoe offers a total cleaning area of 8137.6 sq inches (5.6 m²) with TouchSet in-cab adjustments and a fan speed range of 620–1350 rpm. Grain tank holds 300.9 bushels standard with optional 400-bushel power folding extension. Unloading rate is an impressive 3.3–3.8 bu/sec.

Technology highlights include Touchscreen GS3 CommandCenter (7-inch display), AutoTrac Ready with Harvest Monitor, ProDrive Transmission with Harvest Smart Feedrate Control, Contour Master lateral tilt feederhouse, HID lighting package, and PowerCast Powered Tailboard.`,
    specs: {
      Engine: 'John Deere PowerTech PSS 13.5L 6-cyl IT4',
      'Rated Power': '473 hp (353 kW) @ 2100 rpm',
      'Max Power (Boost)': '540 hp (402 kW)',
      'Fuel Capacity': '330 gal (1250 L)',
      'Rotor Diameter': '30 in (762 mm)',
      'Rotor Length': '123 in (3124 mm)',
      'Rotor Speed': '210–1000 rpm',
      'Cleaning Area': '8,137.6 sq in (5.6 m²)',
      'Grain Tank': '300.9 bu (opt. 400 bu)',
      'Unloading Rate': '3.3–3.8 bu/sec',
      Display: 'GS3 CommandCenter 7"',
      'Engine Hours': '3,891',
      'Separator Hours': '2,639',
      'Serial Number': '1H0S680STD0755608',
    },
    images: Array.from({ length: 27 }, (_, i) => `/inventory/2013-john-deere-s680/${i + 1}.jpg`),
  },
  {
    slug: '2019-john-deere-s770',
    category: 'Combine Harvesters',
    categorySlug: 'combine-harvesters',
    title: '2019 John Deere S770',
    price: 128520,
    year: 2019,
    make: 'John Deere',
    model: 'S770',
    hours: 1154,
    separatorHours: 849,
    serialNumber: '1H0S770SEK0805358',
    description: `The 2019 John Deere S770 combine harvester is a sophisticated machine designed for high-capacity, efficient, and precise grain harvesting. Part of John Deere's S700 series, it focuses on smart farming, automation, and operator comfort.

The engine is a John Deere PowerTech™ PSS 9.0L (548 cu in) 6-cylinder Final Tier 4 (FT4) diesel rated at 391 hp (292 kW) with a Power Boost up to 449 hp (335 kW). Fuel capacity is 250 gallons (950 L).

The TriStream™ Rotor — a hallmark of the S700 series — features a tapered front nose and spiral vanes that reduce growling in heavy crops and improve crop flow. Rotor diameter is 30 inches, length 123 inches, and speed range 210–1000 rpm. Active Concave Isolation improves capacity in tough conditions.

The DynaFlo™ Plus Cleaning Shoe provides high-capacity two-stage pre-cleaning with a total louvered area of 5.1 m² and fan speed range of 620–1350 rpm. Grain tank holds 300 bushels with unloading rates of 3.3–4.2 bu/sec.

Technology package includes Generation 4 CommandCenter™ 4600 (10-inch touchscreen), AutoTrac™ Ready with Harvest Monitor, Combine Advisor™ Package with ActiveVision cameras for automatic settings adjustment, ActiveYield™ System for automatic yield calibration, ProDrive™ with Harvest Smart™ Feedrate Control, JDLink™ telematics, and PowerCast™ Powered Tailboard.`,
    specs: {
      Engine: 'John Deere PowerTech™ PSS 9.0L 6-cyl FT4',
      'Rated Power': '391 hp (292 kW) @ 2200 rpm',
      'Max Power (Boost)': '449 hp (335 kW)',
      'Fuel Capacity': '250 gal (950 L)',
      'Rotor Type': 'TriStream™',
      'Rotor Diameter': '30 in (762 mm)',
      'Rotor Length': '123 in (3124 mm)',
      'Cleaning Shoe': 'DynaFlo™ Plus, 5.1 m²',
      'Grain Tank': '300 bu',
      'Unloading Rate': '3.3–4.2 bu/sec',
      Display: 'Gen 4 CommandCenter™ 4600 10"',
      'Engine Hours': '1,154',
      'Separator Hours': '849',
      'Serial Number': '1H0S770SEK0805358',
    },
    images: Array.from({ length: 10 }, (_, i) => `/inventory/2019-john-deere-s770/${i + 1}.jpg`),
  },
  {
    slug: '2021-john-deere-s790',
    category: 'Combine Harvesters',
    categorySlug: 'combine-harvesters',
    title: '2021 John Deere S790',
    price: 142800,
    year: 2021,
    make: 'John Deere',
    model: 'S790',
    hours: 1964,
    separatorHours: 1290,
    serialNumber: '1H0S790SPMT815633',
    description: `The 2021 John Deere S790 is a top-tier combine harvester in John Deere's S700 series, designed for large-scale, high-performance harvesting with emphasis on automation, efficiency, and operator comfort.

The engine is a John Deere PowerTech™ 13.6L (830 cu in) 6-cylinder Final Tier 4 (FT4) diesel rated at 543 hp (405 kW) at 2000 rpm. Maximum power reaches 617 hp (460 kW) with a 50 hp Power Boost. Fuel capacity is 330 gallons (1250 L).

The TriStream™ Rotor features a tapered front and spiral vanes for smooth, consistent crop flow and reduced growling in heavy crops. Rotor diameter is 30 inches, length 123 inches, speed range 210–1000 rpm. Active Concave Isolation enhances capacity in tough conditions.

The DynaFlo™ Plus Cleaning Shoe is 12% larger than previous models, with a total louvered area of 63.5 sq ft (5.9 m²) and fan speed range of 620–1350 rpm. Grain tank capacity is 400 bushels with power folding covers and a peak unloading rate of 4.2 bu/sec.

The Combine Advisor™ Package is standard, using ActiveVision™ Cameras to monitor grain quality and automatically adjust rotor speed, concave clearance, fan speed, and chaffer/sieve settings. ActiveYield™ System provides automatic yield calibration. ProDrive™ with Harvest Smart™ Feedrate Control, JDLink™ telematics, and Generation 4 CommandCenter™ 4600 (10-inch display) complete the technology suite.`,
    specs: {
      Engine: 'John Deere PowerTech™ 13.6L 6-cyl FT4',
      'Rated Power': '543 hp (405 kW) @ 2000 rpm',
      'Max Power (Boost)': '617 hp (460 kW)',
      'Fuel Capacity': '330 gal (1250 L)',
      'Rotor Type': 'TriStream™',
      'Rotor Diameter': '30 in (762 mm)',
      'Cleaning Shoe': 'DynaFlo™ Plus, 5.9 m²',
      'Grain Tank': '400 bu',
      'Unloading Rate': '4.2 bu/sec',
      Display: 'Gen 4 CommandCenter™ 4600 10"',
      'Engine Hours': '1,964',
      'Separator Hours': '1,290',
      'Serial Number': '1H0S790SPMT815633',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2021-john-deere-s790/${i + 1}.jpg`),
  },
  {
    slug: '2002-case-ih-2388',
    category: 'Combine Harvesters',
    categorySlug: 'combine-harvesters',
    title: '2002 Case IH 2388',
    price: 17360,
    year: 2002,
    make: 'Case IH',
    model: '2388',
    hours: 4576,
    separatorHours: 3300,
    serialNumber: 'JJC0268914',
    description: `The 2002 Case IH 2388 Axial-Flow combine harvester is a widely recognized and popular model known for its simplicity, performance, and the iconic Axial-Flow single-rotor design. Produced from 1998 to 2006, it's a successor to the 2188 and part of Case IH's successful 23-series.

Powered by a Case IH CDC 6TAA-8304 8.3L (505 cu in) 6-cylinder diesel engine — essentially a Cummins design renowned for reliability — rated at 285 hp (212.5 kW) with a Power Boost up to 325 hp (242 kW). Fuel capacity is approximately 180 gallons (680 L).

The Axial-Flow rotary system utilizes a single large longitudinal AFX rotor for both threshing and separating, with a 30-inch (762 mm) diameter, 110-inch (2794 mm) length, and speed range of 250–1125 rpm. This design is known for gentle grain handling and reduced damage.

Total sieve area is 7,947 sq inches (5.127 m²) with a Cross Flow cleaning fan running 450–1250 rpm. Standard grain tank holds 210 bushels with an unloading rate of 1.9 bu/sec.

The 2388 is often praised for its relatively simple design compared to later combines, making it a favorite among operators who prefer mechanical reliability and ease of maintenance. Common tire sizes: 24.5x32 drive tires, 14.9x24 steering tires.`,
    specs: {
      Engine: 'Case IH CDC 8.3L 6-cyl (Cummins)',
      'Rated Power': '285 hp (212.5 kW)',
      'Max Power (Boost)': '325 hp (242 kW)',
      'Fuel Capacity': '180 gal (680 L)',
      'Rotor Type': 'Axial-Flow Single Rotor (AFX)',
      'Rotor Diameter': '30 in (762 mm)',
      'Rotor Length': '110 in (2794 mm)',
      'Rotor Speed': '250–1125 rpm',
      'Cleaning Area': '7,947 sq in (5.13 m²)',
      'Grain Tank': '210 bu',
      'Unloading Rate': '1.9 bu/sec',
      'Engine Hours': '4,576',
      'Separator Hours': '3,300',
      'Serial Number': 'JJC0268914',
    },
    images: Array.from({ length: 6 }, (_, i) => `/inventory/2002-case-ih-2388/${i + 1}.jpg`),
  },
  {
    slug: '2012-brent-2096',
    category: 'Grain Trailers',
    categorySlug: 'grain-trailers',
    title: '2012 Brent 2096',
    price: 36750,
    year: 2012,
    make: 'Brent',
    model: '2096',
    serialNumber: 'B29120139',
    description: `The 2012 Brent 2096 Avalanche grain cart is a high-capacity, high-speed grain handling solution designed to keep pace with modern large-scale combine operations. As part of Brent's 96-series Avalanche lineup, it focuses on efficiency, durability, and operator convenience.

Capacity is a substantial 2,000 bushels (approximately 51 metric tons), making it suitable for handling multiple combine tank loads. Unloading speed reaches an impressive 1,000 bushels per minute (25.4 metric tons/min), minimizing combine downtime and maximizing field efficiency.

The dual-auger system features a 24-inch (60.96 cm) diameter vertical unloading auger and a 20-inch (50.8 cm) horizontal floor auger. The belt-driven horizontal auger and heavy-duty direct-drive 90-degree gearbox deliver industry-leading unloading speeds. The pivoting vertical auger adjusts from 9'7" to 15'3" height and up to 8'5" side reach.

Undercarriage features 42"×148" Equalizer Tracks for excellent flotation and reduced ground pressure in wet or soft conditions. Powered by 1000 RPM PTO requiring 400+ HP tractor.

Equipped with integrated scales (520 or 410 indicator), Weatherguard roll tarp, hydraulic spout control, 4-way downspout, hydraulically cushioned tongue, and optional pistol-grip remote control. Optional cameras available for improved visibility.`,
    specs: {
      Capacity: '2,000 bu (51 metric tons)',
      'Unloading Speed': '1,000 bu/min',
      'Vertical Auger': '24 in diameter',
      'Horizontal Auger': '20 in diameter',
      'Auger Height Range': '9\'7" – 15\'3"',
      'Side Reach': 'Up to 8\'5"',
      Undercarriage: '42"×148" Equalizer Tracks',
      'PTO Speed': '1000 RPM',
      'Min. Tractor HP': '400+ HP',
      Scales: 'Integrated (520/410 indicator)',
      'Serial Number': 'B29120139',
    },
    images: Array.from({ length: 15 }, (_, i) => `/inventory/2012-brent-2096/${i + 1}.jpg`),
  },
  {
    slug: '2021-jm-1412-20t',
    category: 'Grain Trailers',
    categorySlug: 'grain-trailers',
    title: '2021 J&M 1412-20T',
    price: 49700,
    year: 2021,
    make: 'J&M',
    model: '1412-20T',
    serialNumber: '2111158',
    description: `The 2021 J&M 1412-20T is a high-capacity single-auger grain cart from J&M's X-Tended Reach 12 Series, designed to efficiently transfer grain from combines to transport trucks with minimal downtime. The "-20T" designation indicates a 20-inch auger and track undercarriage.

Capacity is 1,400 bushels (approximately 35.6 metric tons). The 20-inch "Bullet" X-Tended Reach auger achieves unloading rates of 600+ bushels per minute. The in-line auger design eliminates U-joints or soft-start connections for direct, efficient grain flow.

The X-Tended Reach design provides greater upward, outward, and forward reach for easier precision loading into semi-trucks. Reinforced flighting at critical wear points features 7/16-inch Max Edge Flighting with 7- or 10-inch pitch at the intake. Hydraulic Side-Shooter spout provides precise grain placement. J&M emphasizes 100% visibility during unloading and auger folding.

The V4 track system features 36"×139" (or 36"×150") self-adjusting tracks with rubber springs and pivoting bogie wheels for reduced vibration and excellent flotation in wet conditions. Oil bath hubs and self-lubricated sleeve bearings minimize daily maintenance.

Monitoring features include iFarm Plus by Agrimatics™ wireless scale system connecting to smartphones/tablets, with optional moisture sensors and auto gate control. Powered by 1000 RPM PTO. Includes Lock-N-Load auger safety feature and Weatherguard roll tarp.`,
    specs: {
      Capacity: '1,400 bu (35.6 metric tons)',
      'Unloading Speed': '600+ bu/min',
      'Auger Diameter': '20 in X-Tended Reach "Bullet"',
      Undercarriage: 'V4 Tracks 36"×139"',
      'Scale System': 'iFarm Plus by Agrimatics™',
      'PTO Speed': '1000 RPM',
      'Safety Feature': 'Lock-N-Load',
      'Spout Control': 'Hydraulic Side-Shooter',
      'Serial Number': '2111158',
    },
    images: Array.from({ length: 12 }, (_, i) => `/inventory/2021-jm-1412-20t/${i + 1}.jpg`),
  },
  {
    slug: '2024-ez-trail-550',
    category: 'Grain Trailers',
    categorySlug: 'grain-trailers',
    title: '2024 E-Z Trail 550',
    price: 13440,
    year: 2024,
    make: 'E-Z Trail',
    model: '550',
    description: `The 2024 E-Z Trail 550 grain cart is a compact and reliable option for farms needing efficient grain transfer without the scale of larger carts. E-Z Trail is known for durable and straightforward designs, and the 550 exemplifies this philosophy.

Capacity is approximately 550 bushels (14 metric tons), ideal for smaller to mid-sized combines or operations preferring more frequent unloading. The 14-inch diameter corner auger provides an unloading rate of approximately 235 bushels per minute with a discharge height of around 12.5 feet — suitable for most semi-trucks and wagons.

Single PTO-driven auger system for simplicity and reliability. The perforated front allows excellent visibility of grain level inside the box when loading on-the-go. An internal sliding flow control door protects the outer auger tube from wear and allows precise control of grain flow for cleanout. Forward-lean 14-inch flighting with optional stainless steel edge for extended wear life.

Built on a single-axle chassis with 23.1-26 R1/R3 tires. Adjustable wheel tread width from 94 to 120 inches. Box dimensions approximately 9'10" wide by 13'6" long with 3-1/4" high-strength spindles.

Available features include Weatherguard roll tarp, tail and work lights, optional hydraulic spout direction control, optional Weigh-Tronix integrated scale, and optional hydraulic drive kit. Available in red, green, or blue.`,
    specs: {
      Capacity: '550 bu (14 metric tons)',
      'Unloading Speed': '~235 bu/min',
      'Auger Diameter': '14 in corner single',
      'Discharge Height': '~12.5 ft',
      Axle: 'Single',
      Tires: '23.1-26 R1/R3',
      'Tread Width': 'Adj. 94"–120"',
      'Box Dimensions': '9\'10" × 13\'6"',
      'PTO Speed': '1000 RPM',
    },
    images: Array.from({ length: 6 }, (_, i) => `/inventory/2024-ez-trail-550/${i + 1}.jpg`),
  },
  {
    slug: '2017-case-ih-rb565',
    category: 'Round Balers',
    categorySlug: 'round-balers',
    title: '2017 Case IH RB565',
    price: 12110,
    year: 2017,
    make: 'Case IH',
    model: 'RB565',
    serialNumber: 'YHN195223',
    description: `The 2017 Case IH RB565 is a robust and versatile round baler designed to handle a wide range of crops, from wet silage to dry hay, straw, and even stalks. Part of the RB5 series, it produces dense, well-formed 5×6 foot bales.

The variable bale chamber produces bales 5 feet wide (61.5 inches) with diameter adjustable from 36 to 72 inches. Bale weight ranges from 500 to 2,500 lbs depending on crop type and density. The 8-belt and 5-roll forming system ensures consistent bale density with dual hydraulic cylinder tensioning featuring in-cab adjustment. Premium laced belts are standard with optional endless belts backed by a 3-year/15,000-bale warranty.

The five-bar premium HD pickup features 160 rubber-mounted tines with a 68-inch standard width (optional 90-inch wide pickup). The overshot feeding system with 20 tines moves crop aggressively from pickup to chamber for consistent mat formation. Full-height pickup dividers and no-tool quick-adjust gauge wheels add to field performance.

Net and twine wrapping are both standard. The front-loading net wrap system uses electrical controls with separate motors for duckbill and net knife operation. Twine capacity holds 6 active balls plus storage for 4 more.

Requires 80–85 PTO HP minimum, with 540 or 1000 RPM PTO options. Heavy-duty drive system with higher torque cutout clutch and larger main gearbox. Optional ISOBUS Class 3 Automation pairs with compatible Case IH tractors for automatic stop/wrap/eject cycles. Optional moisture sensor provides real-time crop moisture data.`,
    specs: {
      'Bale Size': '5×6 ft (36"–72" diameter)',
      'Bale Weight': '500–2,500 lbs',
      'Chamber Type': 'Variable, 8-belt / 5-roll',
      'Pickup Width': '68 in std (90 in opt.)',
      'Pickup Tines': '160 rubber-mounted',
      'Wrap Types': 'Net + Twine',
      'PTO Speed': '540 or 1000 RPM',
      'Min. Tractor HP': '80–85 PTO HP',
      Automation: 'ISOBUS Class 3 (optional)',
      'Serial Number': 'YHN195223',
    },
    images: Array.from({ length: 6 }, (_, i) => `/inventory/2017-case-ih-rb565/${i + 1}.jpg`),
  },
  {
    slug: '2021-john-deere-560m',
    category: 'Round Balers',
    categorySlug: 'round-balers',
    title: '2021 John Deere 560M',
    price: 10150,
    year: 2021,
    make: 'John Deere',
    model: '560M',
    serialNumber: '1E0560MDCMM477308',
    description: `The 2021 John Deere 560M is a popular and versatile round baler known for reliability and efficiency in producing high-quality 5×6 foot bales. Part of John Deere's M-series, it offers a balance of performance, features, and value for a wide range of hay and forage operations.

The variable chamber produces bales 5 feet wide (61.5 inches) with diameter adjustable from 36 to 72 inches. Bale weight typically ranges from 1,000 to over 2,000 lbs depending on crop and moisture. The 8-belt system uses John Deere's exclusive DiamondTough™ triple-weave belts for durability and minimal crop loss. Hydraulic density control allows in-cab adjustment of bale firmness.

The MegaWide™ Plus Pickup features a 71-inch flare width to efficiently gather large, wide, or windblown windrows. MegaTough™ Pickup Teeth provide greater strength at the ends for high-impact loads. A patented self-adjusting Roller Baffle prevents plugging for increased ground speed, while the Spiral Rotor Feed System ensures even crop flow and reduces loading on the rotor. Semi-pneumatic gauge wheels require no air pressure maintenance.

Wrapping options include Surface Wrap Only or Both Twine and Surface Wrap with CoverEdge™ for full bale coverage and reduced spoilage. The BaleTrak™ Pro Monitor-Controller provides in-cab bale shape indicators, density settings, and wrap activation.

Requires 1000 RPM PTO (1-3/8" or 1-3/4" shaft) and approximately 80–90 PTO HP. Optional features include Bale Push Bar, silage high-moisture kit, moisture sensor, and rear light kit.`,
    specs: {
      'Bale Size': '5×6 ft (36"–72" diameter)',
      'Chamber Type': 'Variable, 8 DiamondTough™ belts',
      'Pickup Width': 'MegaWide™ Plus 71 in flare',
      'Wrap Types': 'Surface Wrap + Twine (CoverEdge™)',
      Monitor: 'BaleTrak™ Pro',
      'PTO Speed': '1000 RPM',
      'PTO Shaft': '1-3/8" or 1-3/4"',
      'Min. Tractor HP': '80–90 PTO HP',
      'Serial Number': '1E0560MDCMM477308',
    },
    images: Array.from({ length: 6 }, (_, i) => `/inventory/2021-john-deere-560m/${i + 1}.jpg`),
  },
  {
    slug: '2013-john-deere-616c',
    category: 'Row Crop Headers',
    categorySlug: 'row-crop-headers',
    title: '2013 John Deere 616C',
    price: 30940,
    year: 2013,
    make: 'John Deere',
    model: '616C',
    serialNumber: '1H00618CEDC755275',
    description: `The 2013 John Deere 616C is a high-capacity corn head designed to efficiently harvest corn and deliver it to the combine's feederhouse. Part of the 600C Series introduced around 2012, it offers a 16-row configuration for very high-capacity harvesting matching the capabilities of larger combines.

Standard row spacing is 30 inches (76.2 cm), with configurations available for narrower 22-inch spacing. The StalkMaster™ optional chopping system cuts and shreds cornstalks during harvest for improved residue management and faster decomposition.

Opposed Knife Stalk Rolls feature full-length blades for aggressive stalk processing, improving stalk control and reducing material other than grain (MOG) entering the combine. Austempered Ductile Iron (ADI) construction with dual coating in high-wear zones provides extended service life.

Continuous loop ANSI #80 gathering chains handle higher loads and provide longer life. Dual Auger Strippers significantly reduce crop wrapping around the cross auger. The large 18-inch (45.7 cm) tip diameter cross auger delivers unmatched crop-handling capacity with 26-inch (66 cm) pitch for fast, smooth delivery and faster combine ground speeds. Reversed center flighting reduces ear tossing and prevents crop wrapping.

Optional AutoTrac™ RowSense™ Sensors guide the combine automatically based on row position. Single-Point Hook-up allows quick attachment and detachment. Hydraulic Deck Plates allow in-cab adjustment for different ear sizes. Non-StalkMaster drives feature enclosed gearcases and heavy-duty bearings.`,
    specs: {
      Rows: '16',
      'Row Spacing': '30 in (22 in opt.)',
      'Cross Auger Diameter': '18 in (45.7 cm) tip',
      'Cross Auger Pitch': '26 in (66 cm)',
      'Stalk Rolls': 'Opposed Knife (ADI)',
      'Gathering Chain': 'ANSI #80 continuous loop',
      'Deck Plates': 'Hydraulic in-cab adjust',
      Guidance: 'AutoTrac™ RowSense™ (opt.)',
      'Hook-up': 'Single-Point',
      'Serial Number': '1H00618CEDC755275',
    },
    images: Array.from({ length: 20 }, (_, i) => `/inventory/2013-john-deere-616c/${i + 1}.jpg`),
  },
  {
    slug: '2017-new-holland-980cr',
    category: 'Row Crop Headers',
    categorySlug: 'row-crop-headers',
    title: '2017 New Holland 980CR',
    price: 16240,
    year: 2017,
    make: 'New Holland',
    model: '980CR',
    serialNumber: 'YPH831311',
    description: `The 2017 New Holland 980CR is a rigid corn head designed for high-capacity corn harvesting, engineered to perfectly match the performance of New Holland CR series combines. It emphasizes efficient crop gathering, durable construction, and optimized harvesting in various conditions.

Available in 6, 8, 12, and 16-row configurations with row spacings of 30 inches standard, and 36 or 38 inches for 8-row models. The rigid design provides a stable, straightforward platform for reliable operation.

Stalk rolls feature multiple (often four) knives designed to aggressively pull down stalks of any size for efficient feeding and reduced MOG intake. Remotely Adjusted Deck Plates are standard, allowing operators to adjust the deck plate opening from the cab for varying stalk and cob sizes. Optional integrated stalk choppers with individual row engagement provide fine chopping and superb residue spreading.

The large 26-inch (660.4 mm) diameter feeding auger ensures fast and smooth crop delivery into the combine feederhouse in heavy conditions. A Powered Auger Divider outside the fender efficiently gathers stalks and prevents ear loss. The concave fender shape catches falling ears and transfers them into the header.

Shorter points follow ground contours and protect valuable crop. Flexible polyethylene islands and dividers absorb impact and keep ears inside the header. Points fold up easily for service. Dividers and fenders fold on gas struts for accessibility. Optional AutoFloat™ system maintains consistent stubble height. Optional rotary dividers enhance performance in down corn.`,
    specs: {
      Rows: '6–16 (rigid)',
      'Row Spacing': '30 in (36/38 in opt.)',
      'Feeding Auger': '26 in (660 mm) diameter',
      'Deck Plates': 'Remote cab-adjust (standard)',
      'Stalk Rolls': '4-knife',
      Dividers: 'Flex polyethylene',
      Choppers: 'Optional, individual row engage',
      Guidance: 'AutoFloat™ (optional)',
      'Serial Number': 'YPH831311',
    },
    images: Array.from({ length: 7 }, (_, i) => `/inventory/2017-new-holland-980cr/${i + 1}.jpg`),
  },
  {
    slug: '2019-case-ih-4412',
    category: 'Row Crop Headers',
    categorySlug: 'row-crop-headers',
    title: '2019 Case IH 4412',
    price: 20790,
    year: 2019,
    make: 'Case IH',
    model: '4412',
    serialNumber: 'YKH633861',
    description: `The 2019 Case IH 4412 is a high-performance 12-row corn head designed to maximize efficiency and grain savings during corn harvest, specifically engineered to complement Case IH Axial-Flow combines. It builds on previous models with enhancements focused on durability, speed, and residue management.

Available in 30-inch, 20-inch, and 22-inch row spacings. The folding 4412F configuration allows folding for narrow road transport without detaching from the combine, significantly reducing transport time. Compatible with Case IH Axial-Flow combines including the 10, 20, 230, 240, and 250 series.

Point-to-point knife-type stalk rolls feature four knives per roll for aggressive stalk processing across a wide range of diameters and conditions. Hydraulically Adjusted Deck Plates allow in-cab optimization for different ear sizes and moisture conditions. Optional integrated rotary-knife stalk choppers with separate drivelines handle residue management without additional field passes.

Heavy-duty gathering chains with large open-front sprockets pull in down corn effectively. Patented Corn Louvers™ direct loose kernels and ears back into the head for maximum grain savings. New poly dividers are hinged and floating with gas strut assist for easy one-hand opening and quick cleaning access. The large 15.75-inch (400 mm) cross auger with 19.7-inch (500 mm) pitch provides gentle yet high-capacity feeding.

Optional flip-up tall-corn attachments handle high stands. Lightweight design claims up to 2,000 lbs lighter than competitive models for reduced compaction. Radial pin slip clutch protection on drive lines. Optional AFS RowGuide™ automated row guidance system.`,
    specs: {
      Rows: '12',
      'Row Spacing': '30 in / 20 in / 22 in',
      'Cross Auger': '15.75 in (400 mm) dia, 19.7 in pitch',
      'Stalk Rolls': '4-knife point-to-point',
      'Deck Plates': 'Hydraulic in-cab adjust',
      'Corn Louvers™': 'Standard (patented)',
      Choppers: 'Optional rotary-knife',
      Folding: '4412F fold option available',
      Guidance: 'AFS RowGuide™ (optional)',
      'Serial Number': 'YKH633861',
    },
    images: Array.from({ length: 5 }, (_, i) => `/inventory/2019-case-ih-4412/${i + 1}.jpg`),
  },
  {
    slug: '2007-john-deere-1990ccs',
    category: 'Seed Drills',
    categorySlug: 'seed-drills',
    title: '2007 John Deere 1990CCS',
    price: 18130,
    year: 2007,
    make: 'John Deere',
    model: '1990CCS',
    serialNumber: 'A01990D725126',
    description: `The 2007 John Deere 1990CCS is a highly popular Central Commodity System (CCS) air seeder designed for efficient and precise planting of small grains, soybeans, and other crops, particularly in no-till or minimum-till environments. Known for its high capacity and ability to cover large acres quickly.

The large central bulk seed tank holds approximately 150 bushels (5,285 L), allowing rapid single-point filling and significantly reducing downtime compared to traditional box drills. Seed is metered at the central tank and delivered to individual row units through a hydraulic-fan-powered air delivery system for accurate placement. Oscillating agitation handles crops prone to bridging like barley or rice.

Available working widths include 30 ft, 36 ft, 40 ft, and 42.5 ft. Row spacing options include 7.5 in, 10 in, 15 in, and 20 in, with dual-row configurations (e.g., 10-in/20-in) for corn/soybean rotation flexibility.

ProSeries™ Openers are single-disk no-till openers with excellent penetration in various soil conditions. Active Hydraulic Downforce (165–450 lbs per opener) ensures consistent seed depth from the cab even on uneven terrain. Depth gauging wheels maintain precise depth. 15-degree closing wheels in cast iron or rubber ensure proper seed-to-soil contact. Color-coded meter rollers handle various seed sizes.

Technology includes SeedStar™ 2 monitoring for seed population, fan speed, and blockage detection. Electronic Population Rate Control (EPRC) allows on-the-go seeding rate adjustment. Half-Width Disconnect reduces overlap in irregular fields. GreenStar Ready for integration with AutoTrac™ guidance. Wing-fold design for compact transport.`,
    specs: {
      'Tank Capacity': '~150 bu CCS bulk tank',
      'Air Delivery': 'Hydraulic fan pneumatic',
      'Working Width': '30–42.5 ft',
      'Row Spacing': '7.5 / 10 / 15 / 20 in',
      Openers: 'ProSeries™ single-disk no-till',
      Downforce: 'Active Hydraulic 165–450 lbs/opener',
      Monitor: 'SeedStar™ 2',
      'Rate Control': 'EPRC (on-the-go)',
      'Section Control': 'Half-Width Disconnect',
      Transport: 'Wing-fold',
      'Serial Number': 'A01990D725126',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2007-john-deere-1990ccs/${i + 1}.jpg`),
  },
  {
    slug: '2012-john-deere-1990ccs',
    category: 'Seed Drills',
    categorySlug: 'seed-drills',
    title: '2012 John Deere 1990CCS',
    price: 39144,
    year: 2012,
    make: 'John Deere',
    model: '1990CCS',
    serialNumber: 'A81990D745429',
    description: `The 2012 John Deere 1990CCS (Central Commodity System) air seeder continues John Deere's commitment to high-capacity and precise small grain and row crop planting. As a 2012 model, it benefits from ongoing refinements and updated software compared to earlier versions.

The large central bulk seed tank holds 150–300 bushels (5,285–10,572 L) for rapid single-point filling that dramatically reduces field downtime. Seed is volumetrically metered at the tank and pneumatically conveyed to individual row units by a hydraulic-fan air system ensuring consistent flow and minimal blockage. Continuous oscillation prevents seed bridging for smooth flow even with problematic crops like barley or rice.

Available working widths include 30 ft, 36 ft, 40 ft, and 42.5 ft. Row spacing options include 7.5 in, 10 in, and 15 in, with dual-row configurations for flexible crop rotation.

ProSeries™ Openers feature an 18-inch (45.72 cm) disc diameter for excellent soil penetration and consistent seed depth in a wide range of residue and soil conditions. Active Hydraulic Downforce (165–450 lbs/opener) ensures uniform depth across varying terrain from the cab. 4.5×16-inch depth-gauging wheels on each opener. 15-degree closing wheels in cast iron or rubber. Various color-coded meter rollers optimize metering for different seed types.

Technology includes SeedStar™ 2 CCS Monitor for in-cab seed population, fan speed, and blockage data. EPRC allows on-the-go rate adjustment for variable-rate prescriptions. Half-Width Disconnect reduces overlap and seed waste in irregular fields. Full GreenStar integration with compatible displays and AutoTrac™ steering. Optional Section Control for further overlap reduction. Heavy-duty wing-fold frame with high-flotation tires (31×13.50-15) minimizes soil compaction in no-till environments.`,
    specs: {
      'Tank Capacity': '150–300 bu CCS bulk tank',
      'Air Delivery': 'Hydraulic fan pneumatic',
      'Working Width': '30–42.5 ft',
      'Row Spacing': '7.5 / 10 / 15 in',
      Openers: 'ProSeries™ 18" disc no-till',
      Downforce: 'Active Hydraulic 165–450 lbs/opener',
      Monitor: 'SeedStar™ 2 CCS + GreenStar',
      'Rate Control': 'EPRC (on-the-go)',
      'Section Control': 'Half-Width Disconnect + opt. full SC',
      Tires: '31×13.50-15 high-flotation',
      'Serial Number': 'A81990D745429',
    },
    images: Array.from({ length: 15 }, (_, i) => `/inventory/2012-john-deere-1990ccs/${i + 1}.jpg`),
  },
  {
    slug: '2008-miller-condor-a40',
    category: 'Self Propelled Sprayers',
    categorySlug: 'self-propelled-sprayers',
    title: '2008 Miller Condor A40',
    price: 12572,
    year: 2008,
    make: 'Miller',
    model: 'Condor A40',
    hours: 1929,
    serialNumber: '44.62371',
    description: `The 2008 Miller Condor A40 is a self-propelled sprayer designed for efficient and precise application of agricultural chemicals. Miller sprayers are known for their robust construction, focus on operator comfort, and application accuracy.

Powered by a Cummins QSL 6.7-liter diesel engine rated at 240 hp with a power bulge to 250 hp. The Allison 5-speed automatic transmission with locking torque converter and cruise control provides smooth, efficient power delivery. The mechanical drive train is known for fuel efficiency and reliability. Final drive options include a 42-inch clearance angle drive planetary or 48-inch heavy-duty all-gear drop box, offering different crop clearance levels.

The primary solution tank holds 850 gallons (3,218 L) with an optional 1,000-gallon configuration. A 100-gallon (378 L) rinse tank is included for convenient cleaning. Quick-fills and controls are accessible from ground level near the ladder. Optional stainless steel chemical fill hopper with jug and hopper rinse system.

The 90-foot boom features 5-section control and 20-inch nozzle spacing with 5-way nozzle body options. Built on a C-channel frame of high-strength steel beams allowing 30 degrees of axial twist for ground following. Four air-bags and gas shock absorbers on front and rear axles with trailing arms and anti-sway bars provide a smooth ride and excellent boom stability. Tight 15-foot turning radius. Standard 380/90R46 tires.

The SprayView™ Cab offers AirRide suspension, pressurization, charcoal filtration, and "Wasp Waist" hood design for excellent boom visibility. Ergonomic armrest controls with multi-function joystick. Optional Raven SCS 4400 rate controller and GPS/autosteer guidance.`,
    specs: {
      Engine: 'Cummins QSL 6.7L',
      Power: '240–250 hp',
      Transmission: 'Allison 5-spd Automatic',
      'Solution Tank': '850 gal (3,218 L)',
      'Rinse Tank': '100 gal (378 L)',
      'Boom Width': '90 ft',
      'Boom Sections': '5',
      'Nozzle Spacing': '20 in',
      'Crop Clearance': '42 in / 48 in',
      Tires: '380/90R46',
      'Turning Radius': '15 ft',
      Hours: '1,929',
      'Serial Number': '44.62371',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2008-miller-condor-a40/${i + 1}.jpg`),
  },
  {
    slug: '2009-john-deere-4730',
    category: 'Self Propelled Sprayers',
    categorySlug: 'self-propelled-sprayers',
    title: '2009 John Deere 4730',
    price: 30716,
    year: 2009,
    make: 'John Deere',
    model: '4730',
    hours: 4775,
    serialNumber: 'N04730X005198',
    description: `The 2009 John Deere 4730 is a popular and well-regarded self-propelled sprayer in John Deere's 30-Series lineup, designed for high-speed, high-capacity, and precise application of agricultural chemicals.

Powered by a John Deere PowerTech™ Plus 6.8-liter (414 cu in) 6-cylinder diesel engine rated at 245 hp (183 kW) with a power bulge to 270 hp (201 kW). Hydrostatic 4WD transmission provides smooth, infinitely variable speed control with four speed ranges. Fuel capacity is 133 gallons (503 L).

The 800-gallon (3,028 L) primary solution tank is available in poly or stainless steel. The 120-gallon (454 L) rinse tank includes a stainless steel eductor for safe chemical mixing. Front-fill design with ground-accessible quick-fills.

Boom widths of 80 ft, 90 ft, and 100 ft are available with 5 or 7 sections for precise overlap control. Standard 20-inch nozzle spacing with options for 15-inch. Optional BoomTrac™ Pro auto boom height-sensing system maintains consistent spray height. Hydraulic boom fold and Boom Return to Height feature.

Four-wheel independent air-ride suspension delivers excellent ride comfort and boom stability. Ground clearance is approximately 60 inches (1.52 m) for late-season applications. Hydraulic tread width adjustment from 120 to 152 inches from the cab. Standard 380/90R46 row crop tires.

The CommandView™ Cab features air-ride seat, pressurization, charcoal filtration, and CommandARM™ console. GreenStar Ready with AutoTrac™ activation, StarFire™ receiver, Section Control for automatic boom section management, and SprayStar™ display.`,
    specs: {
      Engine: 'John Deere PowerTech™ Plus 6.8L 6-cyl',
      Power: '245–270 hp',
      Transmission: 'Hydrostatic 4x4',
      'Solution Tank': '800 gal (3,028 L)',
      'Rinse Tank': '120 gal (454 L)',
      'Boom Width': '80 / 90 / 100 ft',
      'Boom Sections': '5–7',
      'Nozzle Spacing': '20 in',
      'Crop Clearance': '60 in',
      Tires: '380/90R46',
      'Tread Adjust': 'Hydraulic 120"–152"',
      Hours: '4,775',
      'Serial Number': 'N04730X005198',
    },
    images: Array.from({ length: 14 }, (_, i) => `/inventory/2009-john-deere-4730/${i + 1}.jpg`),
  },
  {
    slug: '2011-case-ih-patriot-3230',
    category: 'Self Propelled Sprayers',
    categorySlug: 'self-propelled-sprayers',
    title: '2011 Case IH Patriot 3230',
    price: 28840,
    year: 2011,
    make: 'Case IH',
    model: 'Patriot 3230',
    hours: 2510,
    serialNumber: '26255',
    description: `The 2011 Case IH Patriot 3230 self-propelled sprayer features Case IH's signature "cab-forward, rear-engine" design that provides balanced weight distribution and a smooth ride. Designed for efficient and precise application of crop protection products.

Powered by a Case IH FPT 6.7-liter (411 cu in) 6-cylinder Tier 3 diesel rated at approximately 220 hp (164 kW) with a peak of 240 hp (179 kW). Full-time 4WD hydrostatic drive provides infinitely variable speed control. Mechanical power transfer to the wheels delivers fuel efficiency and direct power to the ground. Max transport speed is 30 mph (48 kph).

The standard 800-gallon (3,028 L) solution tank is typically stainless steel for durability and easy cleaning. Convenient front-fill location with chemical eductor system for safe mixing.

The 90-foot boom features 5 or 6 sections with 20-inch nozzle spacing. Parallel-link design provides over 5 feet of motion range for various crop heights from pre-plant to post-tassel. Boom breakaway protection and hydraulic boom leveling.

Cab-forward, rear-engine design maintains 50/50 weight distribution loaded and empty, reducing pitching motion. Full independent suspension on both axles with air bags and shocks — approximately 11 inches total travel. Crop clearance approximately 52 inches. Hydraulic tread width adjustment from 120 to 157 inches from the cab. Standard 380/90R46 tires.

AFS Pro 700 display serves as central control. AFS AccuGuide™ Ready for autosteering. AccuBoom™ Section Control automatically manages boom sections by GPS position. Optional AIM Command/AIM Command Pro for advanced nozzle control. AutoBoom™ Height Control maintains consistent spray height.`,
    specs: {
      Engine: 'Case IH FPT 6.7L 6-cyl Tier 3',
      Power: '220–240 hp',
      Transmission: 'Hydrostatic 4x4',
      'Solution Tank': '800 gal (3,028 L)',
      'Boom Width': '90 ft',
      'Boom Sections': '5–6',
      'Nozzle Spacing': '20 in',
      'Crop Clearance': '52 in',
      Tires: '380/90R46',
      'Tread Adjust': 'Hydraulic 120"–157"',
      Guidance: 'AFS AccuGuide™ Ready',
      'Section Control': 'AccuBoom™',
      Hours: '2,510',
      'Serial Number': '26255',
    },
    images: Array.from({ length: 11 }, (_, i) => `/inventory/2011-case-ih-patriot-3230/${i + 1}.jpg`),
  },
  {
    slug: '2015-case-ih-patriot-4440',
    category: 'Self Propelled Sprayers',
    categorySlug: 'self-propelled-sprayers',
    title: '2015 Case IH Patriot 4440',
    price: 45640,
    year: 2015,
    make: 'Case IH',
    model: 'Patriot 4440',
    hours: 3410,
    serialNumber: 'YET040521',
    description: `The 2015 Case IH Patriot 4440 is a high-horsepower, high-capacity flagship self-propelled sprayer continuing the signature cab-forward, rear-engine design for optimized weight distribution and early field access. This model notably features a Tier 4 Final compliant engine.

Powered by a Case IH FPT 8.7-liter (531 cu in) 6-cylinder Cursor 8 diesel meeting Tier 4B/Final via SCR technology. Rated power is 335 hp (250 kW) with a peak of 374 hp (279 kW) and peak torque of 1,143 ft-lbs (1,550 Nm). Full-time 4WD hydrostatic drive with heavy-duty variable displacement pumps and motors. Fuel capacity is 140 gallons (530 L) diesel plus 21 gallons (79 L) DEF. Max transport speed is 30 mph (48 kph).

The 1,200-gallon (4,542 L) stainless steel solution tank is paired with a 140-gallon (530 L) rinse tank and 4.5-gallon hand wash tank. 3-inch front-fill connection with optional stainless steel chemical eductor.

Boom widths available include 90 ft (5 sections), 100 ft (6 sections), and 120 ft (7 sections). Parallel-link design provides over 5 feet of motion range. 30-degree full boom breakaway plus flexible wingtip breakaways. AutoFold Plus for one-switch boom deployment with 120-ft boom. Boom height adjustable 19 to 84 inches.

Cab-forward, rear-engine maintains 50/50 weight distribution. Four-wheel independent trailing-link suspension with coil springs and shocks. Optional Active Suspension with 11 inches travel. Crop clearance 53 inches. Hydraulic tread adjust 120 to 157 inches. Standard 380/90R46 tires. Tight 24'9" turning radius.

AFS Pro 700 display. AccuBoom™ Section Control standard. AIM Command FLEX up to 36 virtual sections with turn compensation. AFS AccuGuide™ Ready autosteering. AutoBoom™ XRT Height Control with radar sensors and chassis monitoring.`,
    specs: {
      Engine: 'Case IH FPT 8.7L 6-cyl Tier 4B (Cursor 8)',
      Power: '335–374 hp',
      'Peak Torque': '1,143 ft-lbs (1,550 Nm)',
      Transmission: 'Hydrostatic 4x4',
      'Solution Tank': '1,200 gal (4,542 L)',
      'Rinse Tank': '140 gal (530 L)',
      'Boom Width': '90 / 100 / 120 ft',
      'Section Control': 'AccuBoom™ + AIM Command FLEX',
      'Crop Clearance': '53 in',
      Tires: '380/90R46',
      'Tread Adjust': 'Hydraulic 120"–157"',
      Hours: '3,410',
      'Serial Number': 'YET040521',
    },
    images: Array.from({ length: 11 }, (_, i) => `/inventory/2015-case-ih-patriot-4440/${i + 1}.jpg`),
  },
  {
    slug: '1996-case-ih-7230',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '1996 Case IH 7230',
    price: 16500,
    year: 1996,
    make: 'Case IH',
    model: '7230',
    hours: 8108,
    serialNumber: 'JJA0069075',
    description: `The 1996 Case IH 7230 is a model from the highly popular Magnum 7200 Series of agricultural tractors, produced from 1994 to 1996. Known for power, reliability, and comfortable cabs, it was a significant workhorse for tillage, planting, and heavy PTO work.

Powered by a Case IH CDC 8.3-liter (505 cu in) 6-cylinder turbocharged diesel — essentially a Cummins design renowned for durability and strong torque. PTO horsepower is rated at 170 hp (126.8 kW), with Nebraska Tractor Test results showing maximum PTO power of 184.97 hp (137.9 kW) at 1800 RPM. Gross engine horsepower is approximately 188 hp. Fuel capacity is approximately 95 US gallons (359.6 L).

Equipped with an 18-speed full powershift transmission (18 forward, 4 reverse) allowing smooth on-the-go shifting without clutching. Optional 24-speed full powershift with creeper gears available. Electro-hydraulic wet disc clutch.

The closed-center PFC hydraulic system delivers approximately 29 gpm (110 lpm) total flow with 22 gpm (83.3 lpm) SCV flow. Equipped with 2–4 rear remote hydraulic valves. Category III/IIIN rear 3-point hitch with electronic draft sensing. Rear lift capacity approximately 10,875 lbs (4,932 kg). Independent rear PTO with electro-hydraulic wet disc clutch at 1000 RPM (1.75" shaft), with optional 540/1000 RPM dual-speed.

Available in 2WD and MFWD configurations. Hydraulic wet multiple-disc brakes, electric rear differential lock, and hydrostatic power steering. Operating weight ranges from 17,790 to 21,680 lbs ballasted. Common tire sizes: 14.9R28/380/85R28 front (MFWD), 20.8R38 or 18.4R42 rear with duals.

The Magnum cab was highly regarded for spaciousness, excellent visibility, and operator comfort for its era, contributing to reduced fatigue during long working hours.`,
    specs: {
      Engine: 'Case IH CDC 8.3L 6-cyl Turbo (Cummins)',
      'Rated PTO Power': '170 hp (126.8 kW)',
      'Max PTO Power': '184.97 hp @ 1800 rpm',
      'Gross Engine HP': '~188 hp',
      'Fuel Capacity': '95 gal (359.6 L)',
      Transmission: '18-spd Full Powershift',
      'Hydraulic Flow': '29 gpm total / 22 gpm SCV',
      'Rear Lift': '10,875 lbs (4,932 kg)',
      'PTO Speed': '1000 RPM (opt. 540/1000)',
      Drive: '2WD / MFWD',
      Hitch: 'Category III/IIIN 3-pt',
      Hours: '8,108',
      'Serial Number': 'JJA0069075',
    },
    images: Array.from({ length: 14 }, (_, i) => `/inventory/1996-case-ih-7230/${i + 1}.jpg`),
  },
  {
    slug: '2002-john-deere-8220',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2002 John Deere 8220',
    price: 23520,
    year: 2002,
    make: 'John Deere',
    model: '8220',
    hours: 11186,
    serialNumber: 'RW8220P005362',
    description: `The 2002 John Deere 8220 is a powerful and popular row-crop tractor from the 8020 Series, produced from 2002 to 2005. Known for robust performance, advanced technology for its time, and operator comfort, it handles a wide range of demanding farm tasks.

Powered by a John Deere PowerTech™ 8.1-liter (496 cu in) 6-cylinder turbocharged diesel with electronic high-pressure common rail (HPCR) fuel system. PTO horsepower is approximately 190 hp (141.7 kW), with Nebraska Test results showing 222.35 hp (165.8 kW) maximum at 1900 RPM. Gross engine horsepower is approximately 233–256 hp. Fuel capacity is approximately 135 US gallons (511 L).

Transmission options include the 16-Speed PowerShift™ (16 forward, 4 reverse) for smooth on-the-go shifting — the most popular choice — or the optional Infinitely Variable Transmission (IVT™/AutoPowr™) providing stepless speed control from 0.03 mph to 26 mph with automatic RPM optimization.

The closed-center PFC hydraulic system provides 33.5 gpm (126.8 lpm) standard or 42.5 gpm (160.9 lpm) with optional high-flow pump. Equipped with 3–5 mechanical rear SCVs. Category III/IIIN rear 3-point hitch with electronic draft sensing. Standard rear lift capacity of 12,300 lbs (5,579 kg), optional 15,180 lbs (6,885 kg). Independent PTO at 1000 RPM with optional 540/1000 RPM dual-speed.

Available in 2WD and MFWD. Optional Independent Link Suspension (ILS) front axle dramatically improves ride quality, traction, and control at higher speeds. Operating weight ranges from 19,100 to 22,450 lbs. GreenStar™ Ready for AutoTrac™ integration and Implement Management System (IMS) for automated headland sequences.`,
    specs: {
      Engine: 'John Deere PowerTech™ 8.1L 6-cyl HPCR',
      'Rated PTO Power': '~190 hp (141.7 kW)',
      'Max PTO Power': '222.35 hp @ 1900 rpm',
      'Gross Engine HP': '233–256 hp',
      'Fuel Capacity': '135 gal (511 L)',
      Transmission: '16-spd PowerShift™ / IVT™ opt.',
      'Hydraulic Flow': '33.5 gpm std / 42.5 gpm opt.',
      'Rear Lift': '12,300 lbs std / 15,180 lbs opt.',
      'PTO Speed': '1000 RPM (opt. 540/1000)',
      Drive: '2WD / MFWD',
      'Front Suspension': 'ILS (optional)',
      Hours: '11,186',
      'Serial Number': 'RW8220P005362',
    },
    images: Array.from({ length: 18 }, (_, i) => `/inventory/2002-john-deere-8220/${i + 1}.jpg`),
  },
  {
    slug: '2012-john-deere-9560r',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2012 John Deere 9560R',
    price: 100450,
    year: 2012,
    make: 'John Deere',
    model: '9560R',
    hours: 3171,
    serialNumber: '1RW9560RLCP002379',
    description: `The 2012 John Deere 9560R is a high-horsepower articulated 4WD tractor designed for the most demanding agricultural applications, particularly large-scale tillage, planting, and pulling heavy implements. A flagship model in John Deere's R-Series articulated tractors.

Powered by a John Deere PowerTech™ PSX 13.5-liter (824 cu in) 6-cylinder diesel meeting Interim Tier 4 (IT4)/Stage 3b emissions via variable geometry turbocharger and air-to-air aftercooling. Gross engine power is rated at 560 hp (417.6 kW), with Nebraska Test results showing maximum engine power of 552.6 hp at 2100 RPM. Electronic power management provides different power levels by gear to protect the drivetrain. Fuel capacity is approximately 300 gallons (1,135 L).

The 18-speed e18 PowerShift™ with Efficiency Manager offers 18 forward and 6 reverse speeds with seamless on-the-go shifting. Efficiency Manager automatically adjusts engine RPM and gear to maintain set ground speed while optimizing fuel efficiency.

The closed-center PFC hydraulic system delivers 58 gpm (220 lpm) standard, or 78 gpm (295 lpm) with popular High-Flow option — essential for large demanding implements. Equipped with 5 deluxe electro-hydraulic rear SCVs. Independent rear PTO at 1000 RPM (1-3/4" shaft). Heavy-duty Category 5 drawbar standard; 3-point hitch optional.

Articulated 4WD steering bends in the middle for excellent maneuverability. Heavy-duty double-reduction axles (120 mm diameter). Common dual or triple tire configurations in IF800/70R38 or 800/70R38 sizes. Base weight approximately 37,290 lbs.

Premium CommandView™ II Cab with heated leather seat, passenger seat, and CommandArm™ console. Touchscreen GS3 CommandCenter™ 7-inch display. Premium HID lighting. GreenStar Ready with AutoTrac™, StarFire™ receiver, and optional iTEC™ Pro for automated headland management.`,
    specs: {
      Engine: 'John Deere PowerTech™ PSX 13.5L 6-cyl IT4',
      'Gross Power': '560 hp (417.6 kW)',
      'Fuel Capacity': '~300 gal (1,135 L)',
      Transmission: '18-spd e18 PowerShift + Efficiency Mgr',
      'Hydraulic Flow': '58 gpm std / 78 gpm high-flow opt.',
      SCVs: '5 deluxe electro-hydraulic rear',
      'PTO Speed': '1000 RPM (1-3/4" shaft)',
      Drive: 'Articulated 4WD',
      Axles: '120 mm double-reduction',
      'Base Weight': '~37,290 lbs (16,914 kg)',
      Display: 'GS3 CommandCenter™ 7"',
      Hours: '3,171',
      'Serial Number': '1RW9560RLCP002379',
    },
    images: Array.from({ length: 17 }, (_, i) => `/inventory/2012-john-deere-9560r/${i + 1}.jpg`),
  },
  {
    slug: '2015-case-ih-magnum-310',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2015 Case IH Magnum 310',
    price: 47600,
    year: 2015,
    make: 'Case IH',
    model: 'Magnum 310',
    hours: 4349,
    serialNumber: 'ZFRF03444',
    description: `The 2015 Case IH Magnum 310 is a powerful and highly versatile row-crop tractor featuring a Tier 4 Final compliant engine. A key model in Case IH's Magnum series, it delivers high horsepower, advanced technology, and operator comfort for heavy tillage, planting, and transport.

Powered by an FPT 8.7-liter (531 cu in) 6-cylinder Tier 4 Final (T4B) diesel using SCR technology with Diesel Exhaust Fluid (DEF), allowing the engine to be optimized for power and fuel efficiency. Rated engine power is 310 hp (228 kW) at 2000 rpm with a Power Boost up to 380 hp (280 kW). PTO horsepower is 265 hp (198 kW). Fuel capacity is approximately 163 gallons (617 L). DEF tank capacity is approximately 26 gallons (99 L).

Transmission options include the 19-Speed PowerDrive Full Powershift (19 forward, 4 reverse, up to 30 mph) for smooth shifting and consistent power, or the optional CVXDrive Continuously Variable Transmission for infinite speed control and automatic engine RPM optimization.

The closed-center PFC hydraulic system delivers 44 gpm (166 L/min) standard, with optional high-flow pumps up to 75 gpm (282 L/min). Standard 4 electro-hydraulic rear SCVs with options for 5 or 6. Category III/IIIN rear 3-point hitch with approximately 15,900 lbs (7,210 kg) lift capacity. Optional front 3-point hitch (9,426 lbs) and front PTO. Independent rear PTO at 1000 RPM with optional 540/1000 RPM.

Standard MFWD with optional Class 5 suspended front axle for improved ride, traction, and control. Wheelbase 120 inches. Base weight approximately 28,840 lbs. Large tire options including 620/70R42 rear duals.

The spacious Surveyor cab offers 68.5 sq ft glass area, MultiControl Armrest, AFS Pro 700 display, AFS AccuGuide™ autosteering, optional AccuTurn™ headland management, and full ISOBUS compatibility.`,
    specs: {
      Engine: 'FPT 8.7L 6-cyl Tier 4 Final (SCR)',
      'Rated Power': '310 hp (228 kW)',
      'Max Power (Boost)': '380 hp (280 kW)',
      'PTO Power': '265 hp (198 kW)',
      'Fuel Capacity': '163 gal (617 L)',
      Transmission: '19-spd PowerDrive / CVXDrive opt.',
      'Hydraulic Flow': '44 gpm std / up to 75 gpm opt.',
      'Rear Lift': '15,900 lbs (7,210 kg)',
      'PTO Speed': '1000 RPM (opt. 540/1000)',
      Drive: 'MFWD',
      Display: 'AFS Pro 700',
      Hours: '4,349',
      'Serial Number': 'ZFRF03444',
    },
    images: Array.from({ length: 12 }, (_, i) => `/inventory/2015-case-ih-magnum-310/${i + 1}.jpg`),
  },
  {
    slug: '2015-kubota-m7-171-premium',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2015 Kubota M7-171 Premium',
    price: 26880,
    year: 2015,
    make: 'Kubota',
    model: 'M7-171 Premium',
    hours: 3864,
    serialNumber: '10051',
    description: `The 2015 Kubota M7-171 Premium marks Kubota's entry into the higher-horsepower agricultural tractor market. Launched in 2015, the M7 Series was designed with advanced features, comfort, and Tier 4 Final emissions compliance. The "Premium" designation includes a more advanced transmission and technology package.

Powered by a Kubota V6108-CR-TIEF4 6.124-liter (374 cu in) 4-cylinder turbocharged diesel with intercooler and Common Rail System (CRS). Meets Tier 4 Final via DPF and SCR with DEF. Gross power is 168 hp (125 kW) with a Power Boost up to 188 hp total for demanding PTO work or transport. PTO power is approximately 140.1 hp. Max torque is 500.9 lb-ft (679 Nm) at 1400 rpm. Fuel capacity is 87.2 gallons (330 L) with a 10.1-gallon (38 L) DEF tank.

The Premium model offers a 24-speed semi-powershift transmission (24 forward, 24 reverse across 6 ranges) with optional creeper, or the optional KVT (Kubota Variable Transmission/CVT) for infinite stepless speed control — ideal for specialized tasks requiring precise ground speeds. Max travel speed up to 31 mph (50 kph).

The closed-center load-sensing hydraulic system delivers 29.1 gpm (110 L/min). Standard 4 electronic rear remote valves with optional 5th. Category 3/3N rear 3-point hitch with electronic draft control. Rear lift capacity 11,794.8 lbs (5,350 kg). 4-speed live independent PTO with 540, 540E, 1000, and 1000E RPM speeds. Auto PTO links to 3-point hitch position. Optional front 3-point hitch and front PTO.

Standard MFWD with suspended front axle. Operating weight approximately 15,097 lbs (6,848 kg). Turning radius 13.13 ft (4.0 m) without brakes.

The four-pillar cab with no center pillars provides excellent 360-degree visibility. The 12-inch LCD K-Monitor Pro touchscreen is the central control for tractor functions, hydraulics, transmission, ISOBUS implement control, and guidance integration. Fully ISOBUS compatible. Headland Management System automates end-of-row sequences.`,
    specs: {
      Engine: 'Kubota V6108-CR 6.1L 4-cyl Tier 4 Final',
      'Gross Power': '168–188 hp (boost)',
      'PTO Power': '~140 hp',
      'Max Torque': '500.9 lb-ft (679 Nm) @ 1400 rpm',
      'Fuel Capacity': '87.2 gal (330 L)',
      Transmission: '24-spd Powershift / KVT CVT opt.',
      'Hydraulic Flow': '29.1 gpm (110 L/min)',
      'Rear Lift': '11,794.8 lbs (5,350 kg)',
      'PTO Speeds': '540 / 540E / 1000 / 1000E RPM',
      Drive: 'MFWD w/ Suspended Front Axle',
      Monitor: 'K-Monitor Pro 12" LCD Touch',
      Hours: '3,864',
      'Serial Number': '10051',
    },
    images: Array.from({ length: 7 }, (_, i) => `/inventory/2015-kubota-m7-171-premium/${i + 1}.jpg`),
  },
  {
    slug: '2018-new-holland-t8-410',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2018 New Holland T8.410',
    price: 63651,
    year: 2018,
    make: 'New Holland',
    model: 'T8.410',
    hours: 3522,
    description: `The 2018 New Holland T8.410 is a high-horsepower conventional row-crop tractor (MFWD) from New Holland's Genesis T8 series, designed for heavy-duty applications with a blend of power, advanced technology, and operator comfort. Features FPT engines meeting Tier 4B/Stage IV emissions.

Powered by an FPT Cursor 9, 8.7-liter (531 cu in) 6-cylinder diesel with eVGT (electronic Variable Geometry Turbocharger) and New Holland's ECOBlue™ HI-eSCR system with DEF. Rated power is approximately 340 hp (250 kW) at 2000 rpm. Maximum power reaches approximately 374 hp (275 kW) at 1800 rpm. Engine Power Management (EPM) provides up to 409 hp (301 kW) for PTO work, high hydraulic demand, or transport. Rated PTO power is approximately 290 hp (216 kW). Fuel capacity approximately 163–179 gallons. 600-hour engine service interval.

Transmission options: Ultra Command™ Full Powershift with up to 19 forward and 4 reverse speeds (40 or 50 kph) with Ground Speed Management for automatic RPM and gear optimization, or Auto Command™ CVT for infinite stepless speed control (40 or 50 kph) with four points of 100% mechanical efficiency.

The closed-center PFC hydraulic system delivers 59 gpm (224 L/min) standard or 75 gpm (282 L/min) with optional MegaFlow™. Standard 4–6 electronic rear SCVs. Category III/IVN rear 3-point hitch. Rear lift capacity 15,900–19,500 lbs depending on configuration. Optional front 3-point hitch and PTO. Independent rear PTO at 1000 RPM with optional 540/1000 RPM.

Standard MFWD. Optional Terraglide™ suspended front axle for exceptional ride comfort and traction. Optional cab suspension. 120-inch rear bar axle for large dual/triple tire configurations. Optional SmartTrax™ half-track system.

The SideWinder™ II Cab (~68 dBA) features IntelliView™ IV color touchscreen, SideWinder™ II armrest with CommandGrip™ handle, premium air-ride seat, and comprehensive LED lighting. Full PLM integration with IntelliSteer™ autoguidance, IntelliTurn™ headland automation, optional ISOBUS Class 3, and PLM Connect telematics.`,
    specs: {
      Engine: 'FPT Cursor 9 8.7L 6-cyl Tier 4B (eVGT)',
      'Rated Power': '~340 hp (250 kW)',
      'Max EPM Power': '~409 hp (301 kW)',
      'PTO Power': '~290 hp (216 kW)',
      Transmission: '19-spd Ultra Command / Auto Command CVT',
      'Hydraulic Flow': '59 gpm std / 75 gpm MegaFlow™ opt.',
      'Rear Lift': '15,900–19,500 lbs',
      'PTO Speed': '1000 RPM (opt. 540/1000)',
      Drive: 'MFWD',
      'Front Axle': 'Terraglide™ Suspended (opt.)',
      Display: 'IntelliView™ IV',
      Hours: '3,522',
    },
    images: Array.from({ length: 15 }, (_, i) => `/inventory/2018-new-holland-t8-410/${i + 1}.jpg`),
  },
  {
    slug: '2020-john-deere-8r-370',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2020 John Deere 8R 370',
    price: 109550,
    year: 2020,
    make: 'John Deere',
    model: '8R 370',
    hours: 2897,
    serialNumber: '1RW8370DJLC171833',
    description: `The 2020 John Deere 8R 370 is a high-horsepower conventional row-crop tractor (MFWD) standing out for its blend of immense power, cutting-edge technology, and exceptional operator comfort. The 2020 model year features significant advancements in engine emissions and cab design.

Powered by a John Deere PowerTech™ PSS 9.0-liter (549 cu in) 6-cylinder Final Tier 4 (FT4)/Stage V diesel using dual turbochargers, cooled EGR, DOC, DPF, and SCR with DEF. Rated engine power (ECE-R120) is 370 hp (272 kW) at 2100 rpm. Maximum engine power reaches 407 hp (299 kW). Intelligent Power Management (IPM) provides up to 10% power boost (~37 hp) in transport or high PTO/hydraulic demand. Rated PTO power is 310 hp (231 kW). Fuel capacity approximately 192 US gallons (727 L) for e23 or 172 gallons (651 L) for IVT. DEF tank approximately 9.8 US gallons (37.2 L).

Transmission options: e23™ PowerShift with Efficiency Manager (23 forward, 11 reverse, 40 or 50 kph) for seamless clutchless shifting with automatic speed/RPM optimization, or the premium AutoPowr™/IVT™ with CommandPRO™ joystick for infinite stepless speed control from 0.05 km/h to 50 km/h with customizable control over transmission, hydraulics, and implement functions.

The closed-center PFC hydraulic system delivers 60 gpm (227 L/min) standard, or 84 gpm (318 L/min) with optional dual-pump high-flow system. Standard 4 rear electro-hydraulic SCVs with options for 5 or 6, plus an optional 3/4-inch high-flow coupler (42 gpm to single SCV). Category 4N/3 rear 3-point hitch. Standard rear lift capacity 15,000 lbs (6,803 kg), optional heavy-duty 20,000 lbs (9,072 kg). Optional front 3-point hitch (11,464 lbs) and front PTO. Independent rear PTO at 1000 RPM.

Standard MFWD with optional Independent Link Suspension (ILS™) front axle for superior ride comfort and traction. Optional cab suspension. Wheelbase 121.3 inches (MFWD). Base weight approximately 28,000 lbs. Optional Central Tire Inflation System (CTIS).

The CommandView™ III Cab (as low as 67 dBA) features Generation 4 CommandCenter™ 4200 (8.4") or 4600 (10.4") touchscreen displays, CommandARM™ console with multi-function lever or CommandPRO™ joystick, optional ActiveSeat™ II with 90% vibration dampening, massage, heating, and ventilation, plus integrated mini-fridge option. Full John Deere Precision Ag integration: AutoTrac™, JDLink™ Connect telematics, 1-Click-Go AutoSetup, Section Control, and ISOBUS compatibility.`,
    specs: {
      Engine: 'John Deere PowerTech™ PSS 9.0L 6-cyl FT4',
      'Rated Power': '370 hp (272 kW)',
      'Max Power': '407 hp (299 kW)',
      'IPM Boost': '+37 hp transport/PTO',
      'PTO Power': '310 hp (231 kW)',
      Transmission: 'e23™ PowerShift / AutoPowr™ IVT opt.',
      'Hydraulic Flow': '60 gpm std / 84 gpm dual-pump opt.',
      'Rear Lift': '15,000 lbs std / 20,000 lbs opt.',
      'PTO Speed': '1000 RPM',
      Drive: 'MFWD',
      'Front Suspension': 'ILS™ (optional)',
      Display: 'Gen 4 CommandCenter™ 4600 10"',
      Hours: '2,897',
      'Serial Number': '1RW8370DJLC171833',
    },
    images: Array.from({ length: 21 }, (_, i) => `/inventory/2020-john-deere-8r-370/${i + 1}.jpg`),
  },
  {
    slug: '2021-kubota-mx5400',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2021 Kubota MX5400',
    price: 16850,
    year: 2021,
    make: 'Kubota',
    model: 'MX5400',
    hours: 220,
    serialNumber: 'KBUL3BHCJM8M24032',
    description: `The 2021 Kubota MX5400 is a versatile and popular utility tractor from Kubota's MX Series, designed for a wide range of tasks on small to mid-sized farms, hay operations, and property maintenance. Known for reliability, maneuverability, and a balance of power and efficiency.

Powered by a Kubota V2403CR-T 2.434-liter (148.6 cu in) 4-cylinder turbocharged diesel with Common Rail System (CRS) and direct injection, meeting Tier 4 Final emissions standards. Gross engine horsepower (SAE J1995) is 57.0 hp (42.5 kW) and PTO horsepower is 46.5 hp (34.7 kW) — crucial for implements like balers, mowers, and tillers. Rated engine speed is 2700 rpm. Fuel tank capacity is 11.9 US gallons (45 L).

Transmission options include the popular Hydrostatic (HST) 3-range transmission (Low/Medium/High) for smooth, clutchless speed control ideal for loader work, or the 8-forward/8-reverse partially-synchronized gear drive with synchronized shuttle for precise draft-intensive tasks.

The open-center hydraulic system delivers approximately 9.5 gpm (35.8 L/min) total. Maximum 3 optional rear remote hydraulic valves. Category I & II rear 3-point hitch with position control standard. Rear lift capacity 2,310 lbs (1,050 kg). Live independent hydraulic PTO with PTO brake and wet clutch at 540 RPM.

Available in 2WD and 4WD configurations. Hydrostatic power steering. Mechanical wet disc brakes. Rear mechanical differential lock. Standard tire sizes: Front 9.5L-16, Rear 14.9-26. R4 industrial or turf options also common. Turning radius 8.9 ft (2.7 m) with brakes. Operating weight approximately 3,734–4,268 lbs.

ROPS standard (foldable for height restrictions). Optional factory-installed cab with A/C and heater. Wide flat platform, hanging pedals, and high-back suspension seat. Compatible with Kubota LA1065 front loader (2,275 lbs lift) and BH92 backhoe.`,
    specs: {
      Engine: 'Kubota V2403CR-T 2.4L 4-cyl Tier 4 Final',
      'Gross Power': '57.0 hp (42.5 kW)',
      'PTO Power': '46.5 hp (34.7 kW)',
      'Fuel Capacity': '11.9 gal (45 L)',
      Transmission: 'HST 3-range / 8x8 Gear opt.',
      'Hydraulic Flow': '9.5 gpm (35.8 L/min)',
      'Rear Lift': '2,310 lbs (1,050 kg)',
      'PTO Speed': '540 RPM',
      Hitch: 'Category I & II 3-pt',
      Drive: '2WD / 4WD',
      'Turning Radius': '8.9 ft (2.7 m)',
      Hours: '220',
      'Serial Number': 'KBUL3BHCJM8M24032',
    },
    images: Array.from({ length: 17 }, (_, i) => `/inventory/2021-kubota-mx5400/${i + 1}.jpg`),
  },
  {
    slug: '2022-case-ih-farmall-75c',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2022 Case IH Farmall 75C',
    price: 21207,
    year: 2022,
    make: 'Case IH',
    model: 'Farmall 75C',
    hours: 1071,
    serialNumber: 'ELRFC075LMAP01471',
    description: `The 2022 Case IH Farmall 75C is a versatile utility tractor, part of Case IH's popular Farmall C series. Known for maneuverability, comfort, and sufficient power for a wide range of tasks on small to mid-sized farms, livestock operations, and general property maintenance.

Powered by an FPT 3.4-liter (195–207 cu in) 4-cylinder turbocharged diesel with intercooling. Meets Tier 4B/Final (Stage V) emissions using internal Cooled EGR (CEGR) and a Diesel Oxidation Catalyst (DOC) — notably without a DPF or regeneration process, eliminating associated downtime. Gross engine horsepower is approximately 74–76 hp (55–57 kW) with PTO horsepower of 62–65 hp (46–48.5 kW). Electronic high-pressure common rail fuel injection for precise metering and improved throttle response. Fuel capacity approximately 20–23.8 US gallons (75–90 L).

Transmission options include the standard 12x12 Power Shuttle (12 forward, 12 reverse) with electro-hydraulic shuttle for clutchless direction changes — ideal for loader work — or an optional 12x12 Power Shuttle with Creeper for 20x20 total speeds at very slow rates. Max speed approximately 19–25 mph.

The open-center hydraulic system delivers approximately 12.5–12.8 gpm (47.5–48.4 L/min) implement flow. Standard 1–2 rear remote hydraulic valves with mid-mount valve options for loader joystick. Category II rear 3-point hitch. Rear lift capacity approximately 3,664–3,960 lbs (1,662–1,796 kg). Independent rear PTO with wet clutch at 540 RPM, with optional 540/1000 RPM dual-speed.

Available in 2WD and MFWD configurations. Hydrostatic power steering. Hydraulic wet disc brakes. Rear mechanical differential lock. Wheelbase approximately 82.6–84 inches. Operating weight approximately 6,239 lbs with cab. Common tire sizes: 11.2R24 front, 16.9R30 rear.

ROPS standard or optional factory-installed deluxe cab with A/C, heater, sound suppression, air suspension seat, and hi-visibility roof panel for loader work. Compatible with Case IH L620 front loader.`,
    specs: {
      Engine: 'FPT 3.4L 4-cyl Tier 4B (No DPF/Regen)',
      'Gross Power': '74–76 hp (55–57 kW)',
      'PTO Power': '62–65 hp (46–48.5 kW)',
      'Fuel Capacity': '20–23.8 gal (75–90 L)',
      Transmission: '12x12 Power Shuttle / Creeper opt.',
      'Hydraulic Flow': '12.5–12.8 gpm',
      'Rear Lift': '3,664–3,960 lbs',
      'PTO Speed': '540 RPM (opt. 540/1000)',
      Hitch: 'Category II 3-pt',
      Drive: '2WD / MFWD',
      Hours: '1,071',
      'Serial Number': 'ELRFC075LMAP01471',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2022-case-ih-farmall-75c/${i + 1}.jpg`),
  },
  {
    slug: '2022-case-ih-farmall-105a',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2022 Case IH Farmall 105A',
    price: 25900,
    year: 2022,
    make: 'Case IH',
    model: 'Farmall 105A',
    hours: 228,
    serialNumber: 'FR1607216',
    description: `The 2022 Case IH Farmall 105A is a robust and versatile utility tractor from Case IH's A Series, designed for broad tasks on mid-sized farms, hay operations, and large properties. Known for its practical design, fuel efficiency, and good power balance.

Powered by an FPT 3.4-liter (207 cu in) 4-cylinder turbocharged and aftercooled diesel. Meets Tier 4B/Final (Stage V) emissions using only a Diesel Oxidation Catalyst (DOC) and Cooled EGR (CEGR) — no DPF and no regeneration process, reducing maintenance and eliminating downtime. Rated engine horsepower is 112 hp (83.5 kW). PTO horsepower is 92 hp (68.6 kW) — a strong output for this class, capable of running larger balers, mowers, and tillers. Rated engine speed is 2300 RPM. Fuel capacity approximately 29 US gallons (110 L) for cab models. DEF tank approximately 2.9 gallons (11 L).

Transmission options include the standard 12x12 Power Shuttle (12 forward, 12 reverse) with electro-hydraulic wet clutch for smooth clutchless direction changes, or an optional 12x12 Power Shuttle with Creeper for 20x20 total speeds at extremely slow rates for specialty applications. Electrohydraulic MFD engagement. Max speed approximately 25 mph (40 kph).

The open-center hydraulic system delivers 16.9 gpm (64 L/min). Standard 2 rear remote hydraulic valves with option for 3. Category I/II rear 3-point hitch with mechanical draft control and top-link sensing. Rear lift capacity approximately 4,299 lbs (1,950 kg). Independent rear PTO with wet clutch at 540 RPM, with optional 540/540E economy RPM for fuel efficiency during light PTO work.

Available in 2WD and MFWD configurations. Hydrostatic power steering. Hydraulic wet disc brakes. Rear mechanical differential lock. Wheelbase approximately 89 inches (2,260 mm). Operating weight approximately 8,492 lbs with cab. Common tire sizes: 14.9R24 front, 18.4R34 rear.

ROPS standard or optional factory-installed deluxe cab with HVAC, air suspension seat, large glass area, and quiet operation. Compatible with Case IH L575 front loaders (up to 3,174 lbs / 1,440 kg). Optional engine reversing fan available on poultry configurations.`,
    specs: {
      Engine: 'FPT 3.4L 4-cyl Tier 4B (No DPF/Regen)',
      'Rated Power': '112 hp (83.5 kW)',
      'PTO Power': '92 hp (68.6 kW)',
      'Fuel Capacity': '29 gal (110 L)',
      Transmission: '12x12 Power Shuttle / Creeper opt.',
      'Hydraulic Flow': '16.9 gpm (64 L/min)',
      'Rear Lift': '4,299 lbs (1,950 kg)',
      'PTO Speed': '540 RPM (opt. 540/540E)',
      Hitch: 'Category I/II 3-pt',
      Drive: '2WD / MFWD',
      Wheelbase: '89 in (2,260 mm)',
      Hours: '228',
      'Serial Number': 'FR1607216',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2022-case-ih-farmall-105a/${i + 1}.jpg`),
  },
  {
    slug: '2023-kubota-m7060',
    category: 'Tractors',
    categorySlug: 'tractors',
    title: '2023 Kubota M7060',
    price: 25200,
    year: 2023,
    make: 'Kubota',
    model: 'M7060',
    hours: 390,
    serialNumber: '76163',
    description: `The 2023 Kubota M7060 is a popular utility tractor offering a good balance of power, efficiency, and comfort for a variety of tasks on small to mid-sized farms, hay operations, and general property maintenance. Part of Kubota's M60 Series, known for reliability and maneuverability.

Powered by a Kubota V3307-CR-TE4 3.331-liter (203 cu in) 4-cylinder turbocharged diesel with Common Rail System (CRS). Meets Tier 4 Final/Stage V emissions via DPF, DOC, and EGR. Gross engine horsepower is 71 hp (53.0 kW). PTO horsepower is approximately 64 hp (47.7 kW) at 540 rpm. Rated engine speed is 2400 rpm. Fuel tank capacity is 18.5 US gallons (70 L) for ROPS or 23.8 gallons (90 L) for cab models.

Transmission options include 8F/8R Hydraulic Shuttle (HD models) with synchronized gear drive and hydraulic clutchless direction changes, or 12F/12R Hydraulic Shuttle (HD12 models) with more gear choices for varied field speeds and heavy trailer hauling. Optional creeper gear set for very slow speeds. Max speed approximately 19–25 mph.

Open-center hydraulic system delivers approximately 11.0 gpm (41.6 L/min) for F8/R8 models or 16.2 gpm (61.5 L/min) for F12/R12 models. Standard 1 rear remote valve with options for 2 or 3. Category I/II rear 3-point hitch with position and top-link draft sensing. Rear lift capacity approximately 3,307 lbs (1,500 kg). Live independent PTO with electro-hydraulic wet disc clutch and brake. Standard 540 RPM with 540E economy option achieving 540 PTO RPM at lower engine RPM for fuel savings.

Available in 2WD and 4WD configurations. 4WD models feature bevel-gear front axle with increased oscillating angle for uneven terrain. Hydrostatic power steering. Mechanical or hydraulic wet disc brakes (model dependent). Rear mechanical differential lock. Operating weight approximately 5,027–5,248 lbs. Standard tire sizes: 9.5-24 front, 16.9-30 rear. Turning radius 11.8 ft (3.6 m) with brakes.

ROPS standard or optional factory-installed Ultra Grand Cab with HVAC, rounded glass curved upper windshield for enhanced visibility (especially loader work), quiet operation, and radio-ready setup. Ergonomic right-side control layout with electronic dash panel. Compatible with Kubota LA1154A front loader.`,
    specs: {
      Engine: 'Kubota V3307-CR-TE4 3.3L 4-cyl Tier 4 Final',
      'Gross Power': '71 hp (53.0 kW)',
      'PTO Power': '~64 hp @ 540 rpm',
      'Fuel Capacity': '18.5–23.8 gal (70–90 L)',
      Transmission: '8x8 or 12x12 Hydraulic Shuttle',
      'Hydraulic Flow': '11.0–16.2 gpm',
      'Rear Lift': '3,307 lbs (1,500 kg)',
      'PTO Speed': '540 / 540E RPM',
      Hitch: 'Category I/II 3-pt',
      Drive: '2WD / 4WD',
      'Turning Radius': '11.8 ft (3.6 m)',
      Hours: '390',
      'Serial Number': '76163',
    },
    images: Array.from({ length: 13 }, (_, i) => `/inventory/2023-kubota-m7060/${i + 1}.jpg`),
  },
];

export const categories = [
  { name: 'Combine Harvesters', slug: 'combine-harvesters', icon: '🌾' },
  { name: 'Grain Trailers', slug: 'grain-trailers', icon: '🚛' },
  { name: 'Round Balers', slug: 'round-balers', icon: '🔵' },
  { name: 'Row Crop Headers', slug: 'row-crop-headers', icon: '🌽' },
  { name: 'Seed Drills', slug: 'seed-drills', icon: '🌱' },
  {
    name: 'Self Propelled Sprayers',
    slug: 'self-propelled-sprayers',
    icon: '💧',
  },
  { name: 'Tractors', slug: 'tractors', icon: '🚜' },
] as const;

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((machine) => machine.slug === slug);
}

export function getMachinesByCategory(categorySlug: string): Machine[] {
  return machines.filter((machine) => machine.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}
export type Product = {
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  description: string;
  howItsMade: string;
  materials: string[];
  images: string[];
  featured?: boolean;
  customisable?: string[];
  detail?: string;
};

// Category values must be one of: 'Bags' | 'Cap' | 'Raw Materials' | 'Customisable Pens' | 'Jewellery Boxes'
// If category is 'Bags', subCategory can be one of:
// 'Shopping Bag' | 'Office Bags' | 'Laptop Bag' | 'School Bags' | 'Geometry Pouches' |
// 'Shagun/Potli' | 'Gym Bags' | 'Waist Bags' | 'Ladies Bag'

const TOTE_CUSTOMISATION = ['Colour', 'Handles', 'Logo Print', 'Stitching'];
const JUTE_CUSTOMISATION = ['Colour', 'Handles', 'Logo Print', 'Trim'];
const PEN_CUSTOMISATION = ['Colour', 'Engraving', 'Logo Print'];
const LEATHER_TOTE_CUSTOMISATION = ['Colour', 'Leather Strap Tone', 'Logo Print', 'Stitching']; 
const GYM_BAG_CUSTOMISATION = ['Colour', 'Strap', 'Logo Print', 'Zipper Colour'];
const OFFICE_BAG_CUSTOMISATION = ['Colour', 'Handles', 'Logo Print', 'Lining'];
const SCHOOL_BAG_CUSTOMISATION = ['Colour', 'Print', 'Logo Print', 'Strap'];
const POTLI_CUSTOMISATION = ['Colour', 'Drawstring Cord', 'Logo Print'];
const CAP_CUSTOMISATION = ['Colour', 'Embroidery', 'Logo Print'];





export const products: Product[] = [
  {
    slug: 'aurora-shopping-bag',
    name: 'Aurora Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A sleek black canvas shopping bag finished with a minimalist gold emblem — clean, modern, and built for premium retail branding.',
    howItsMade:
      'Crafted from sturdy black cotton canvas with reinforced stitched handles and a screen-printed gold logo for a refined, long-lasting finish.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/Aurora.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'azure-jute-shopping-bag',
    name: 'Azure Jute Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A compact, vivid blue jute bag with a zip closure — practical, eco-friendly, and perfect for everyday carry or gifting.',
    howItsMade:
      'Woven from natural jute fibre, dyed a rich blue, and finished with a sturdy zip and contrast handle for durability.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/BlueJute.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'wings-of-hope-shopping-bag',
    name: 'Wings of Hope Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'An artistic cream canvas tote featuring a hand-illustrated monarch butterfly and an uplifting "Be Kind, Be You" message.',
    howItsMade:
      'Made from natural cotton canvas with a detailed digital print and long, comfortable shoulder handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/butterfly.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'monarch-bloom-shopping-bag',
    name: 'Monarch Bloom Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A beige jute tote adorned with a delicate butterfly-and-floral print, blending rustic texture with artistic detail.',
    howItsMade:
      'Natural jute base with a fine floral-butterfly print and reinforced black stitched handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/ChineseButterfly.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'coffee-and-cake-shopping-bag',
    name: 'Coffee & Cake Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A café-branded canvas bag in white and black, ideal for bakeries and coffee shops looking for a cozy, artisanal look.',
    howItsMade:
      'Sturdy cotton canvas with a two-tone black side panel and a hand-drawn-style logo print.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/coffeeAndCake.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'craftico-shopping-bag',
    name: 'Craftico Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A rustic burlap-style jute bag with an earthy, handmade feel — great for artisanal and craft brands.',
    howItsMade:
      'Woven from natural burlap jute with tan handles and a bold printed wordmark.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/Craftico.jpg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'signature-custom-shopping-bag',
    name: 'Signature Custom Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A clean, off-white canvas shopping bag designed as a blank canvas for your brand — simple, versatile, and ready to customise.',
    howItsMade:
      'Made from natural cotton canvas with sturdy black handles, left minimal for easy logo placement.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/CustomBag.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'daily-goodness-shopping-bag',
    name: 'Daily Goodness Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'An earthy cream tote with a bold "Daily Goodness" print — perfect for organic, wellness, or grocery brands.',
    howItsMade:
      'Cotton canvas base with a green tonal print and reinforced black handles for everyday use.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/DailyGoodness.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'wildwood-deli-shopping-bag',
    name: 'Wildwood Deli Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A warm, natural jute bag with an ornate deli-style emblem — rustic and food-brand friendly.',
    howItsMade:
      'Natural jute weave with a detailed screen-printed crest and sturdy black handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/DeliShoppingBag.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'double-tone-shopping-bag',
    name: 'Double Tone Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A striking blue-and-natural jute bag with a clean colour-block design and tan handles.',
    howItsMade:
      'Two-tone jute construction combining a dyed blue panel with natural jute base and tan handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/doubletone.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'elegant-monogram-shopping-bag',
    name: 'Elegant Monogram Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A rich maroon jute bag finished with a gold foil monogram — a premium option for boutique and gifting brands.',
    howItsMade:
      'Dyed jute fabric with a gold foil-printed monogram crest and matching maroon handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/ElegentShoppingBag.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'elevate-shopping-bag',
    name: 'Elevate Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A refined cream canvas tote with a tan contrast base and a minimal monogram — subtle and versatile for everyday branding.',
    howItsMade:
      'Cotton canvas body with a tan fabric base panel and tan handles, finished with a small printed logo.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/Elevate.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'femina-lifestyle-shopping-bag',
    name: 'Femina Lifestyle Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A crisp white canvas tote featuring a bold, illustrative silhouette design — expressive and fashion-forward.',
    howItsMade:
      'Natural cotton canvas with a detailed black line-art print and sturdy white handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/femina.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'ikat-weave-shopping-bag',
    name: 'Ikat Weave Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A statement bag in a traditional dark ikat print — richly patterned and rooted in Indian textile heritage.',
    howItsMade:
      'Heavyweight printed fabric with an all-over ikat/diamond motif and matching fabric handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/FemininePattern.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'shraddha-floral-shopping-bag',
    name: 'Shraddha Floral Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A natural jute bag hand-finished with a delicate white floral print and personalised script — elegant and gift-ready.',
    howItsMade:
      'Natural jute base with a soft floral print and custom script text, finished with black handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/flower.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'lotus-bloom-shopping-bag',
    name: 'Lotus Bloom Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A vibrant canvas bag with a hand-painted-style lotus and leaf print — colourful and eye-catching for lifestyle brands.',
    howItsMade:
      'Cotton canvas with a full-panel lotus flower print and a secure zip closure.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/flowerpattern.png'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'green-haven-shopping-bag',
    name: 'Green Haven Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A classic boat-tote style bag in cream with deep green trim — structured, durable, and ideal for organic/lifestyle brands.',
    howItsMade:
      'Heavy cotton canvas with contrast green base and handles, built for a structured boat-bag silhouette.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/GreenHeaven.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'lavinda-shopping-bag',
    name: 'Lavinda Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A soft, botanical-print canvas tote in lavender tones — dreamy and elegant, perfect for beauty and wellness brands.',
    howItsMade:
      'Cotton canvas with a fine lavender line-art print and coordinating grey-blue handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/Lavinda.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'leather-strap-shopping-bag',
    name: 'Leather Strap Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A clean, minimal canvas bag elevated with genuine leather strap handles — understated luxury for premium retail.',
    howItsMade:
      'Natural cotton canvas body paired with stitched leather handles for a refined, durable finish.',
    materials: ['Cotton Canvas', 'Leather Handles'],
    images: ['/products/bags/shopping-bags/LeatherStrapShoppingBag.png'],
    customisable: LEATHER_TOTE_CUSTOMISATION,
  },
  {
    slug: 'naturae-shopping-bag',
    name: 'Naturae Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A nature-inspired cream tote with a botanical logo and forest-green handles — fresh and earthy for organic brands.',
    howItsMade:
      'Cotton canvas with a printed leaf emblem and contrast green handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/Naturae.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'paws-and-peace-shopping-bag',
    name: 'Paws & Peace Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A playful cream canvas tote featuring a charming pet-themed illustration — ideal for pet brands and animal shelters.',
    howItsMade:
      'Natural cotton canvas with a whimsical printed pet illustration and sturdy black handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/PawAndPeace.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'pcj-radiance-shopping-bag',
    name: 'PCJ Radiance Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A glossy blush-pink bag with metallic gold handles — glamorous and premium, made for jewellery and luxury retail.',
    howItsMade:
      'Finished in a high-shine pink faux-leather material with gold-tone handles and a foil-printed logo.',
    materials: ['Faux Leather (PU)'],
    images: ['/products/bags/shopping-bags/PcjShoppingBag.png'],
    customisable: ['Colour', 'Handle Tone', 'Logo Print'],
  },
  {
    slug: 'polo-heritage-shopping-bag',
    name: 'Polo Heritage Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A deep forest-green canvas tote with leather handles and a classic heritage crest — timeless and preppy.',
    howItsMade:
      'Heavyweight canvas dyed forest green, paired with tan leather handles and a detailed heritage-style print.',
    materials: ['Cotton Canvas', 'Leather Handles'],
    images: ['/products/bags/shopping-bags/polarHeritage.png'],
    customisable: LEATHER_TOTE_CUSTOMISATION,
  },
  {
    slug: 'north-and-co-shopping-bag',
    name: 'North & Co. Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A sleek all-black shopping bag with a subtle wordmark — minimal, modern, and suited to premium fashion retail.',
    howItsMade:
      'Durable black non-woven fabric with a subtle tonal texture and a clean printed wordmark.',
    materials: ['Non-woven Fabric'],
    images: ['/products/bags/shopping-bags/PureBlack.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'bloom-and-ride-shopping-bag',
    name: 'Bloom & Ride Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A soft pastel tote featuring a charming bicycle illustration and floral accents — light, cheerful, and gift-friendly.',
    howItsMade:
      'Cotton canvas with a watercolour-style printed illustration and a contrast green handle.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/Ride.jpg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'thank-you-shopping-bag',
    name: 'Thank You Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A heartfelt cream tote with a "Thank You for Supporting Small" message — perfect for small businesses and packaging.',
    howItsMade:
      'Natural cotton canvas with a circular badge-style print and reinforced black handles.',
    materials: ['Cotton Canvas'],
    images: ['/products/bags/shopping-bags/supportBag.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'tata-eco-shopping-bag',
    name: 'Tata Eco Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A corporate sustainability-themed tote with a bold green iconographic pattern and QR code — designed for CSR and eco campaigns.',
    howItsMade:
      'Cotton canvas printed with a grid of sustainability icons on both front and back panels, with sturdy handles.',
    materials: ['Cotton Canvas'],
    images: [
      '/products/bags/shopping-bags/TataFront.png',
      '/products/bags/shopping-bags/tataback.png',
    ],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'terralis-shopping-bag',
    name: 'Terralis Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'An earthy cream tote with a leather waist strap detail and "Dream Big" wordmark — grounded, motivational styling.',
    howItsMade:
      'Cotton canvas body with a stitched leather strap accent, tan handles, and a printed wordmark.',
    materials: ['Cotton Canvas', 'Leather Trim'],
    images: ['/products/bags/shopping-bags/Terralis.jpg'],
    customisable: LEATHER_TOTE_CUSTOMISATION,
  },
  {
    slug: 'mandala-craft-shopping-bag',
    name: 'Mandala Craft Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    description:
      'A tan jute bag featuring an intricate hand-drawn mandala print — artisanal and rich in detail for craft and heritage brands.',
    howItsMade:
      'Natural jute base with a detailed screen-printed mandala pattern and sturdy black handles.',
    materials: ['Jute'],
    images: ['/products/bags/shopping-bags/UniquePatternShoppingBga.png'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'marvel-jewellery-bag',
    name: 'Marvel Jewellery Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Water-resistant canvas / Padded interior',
    description: 'A slim, protective carry bag built for daily commutes.',
    howItsMade: 'Reinforced corners and a padded sleeve, sewn on heavy-duty canvas.',
    materials: ['Water-resistant canvas', 'Foam padding', 'YKK zippers'],
    images: ['/products/bags/shopping-bags/marvel.jpeg'],
    customisable: TOTE_CUSTOMISATION,
    featured: true,
  },

  // ── Corporate / institutional bags ──
  {
    slug: 'an-enterprise-shopping-bag',
    name: 'A&N Enterprise Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Cream canvas / Illustrated skyline print',
    description: 'A cream canvas tote for A&N Enterprise, printed with a colourful illustrated city skyline.',
    howItsMade: 'Cut and stitched on natural canvas with a full-colour skyline print and cotton webbing handles.',
    materials: ['Cotton canvas', 'Cotton webbing handles'],
    images: ['/products/bags/shopping-bags/A&N-enterprise.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'bhakti-vedanta-shopping-bag',
    name: 'Bhakti Vedanta Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Natural jute / Royal blue trim',
    description: 'A natural jute bag for Bhakti Vedanta Hospital & Research Institute, finished with royal blue trim and rolled handles, printed with the lotus emblem.',
    howItsMade: 'Woven jute body edged in blue cotton trim, with padded rolled handles and a screen-printed logo.',
    materials: ['Natural jute', 'Cotton trim', 'Rolled cotton handles'],
    images: ['/products/bags/shopping-bags/BhaktiVedanta.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'borosil-office-bag',
    name: 'Borosil Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Purple non-woven / Doodle print',
    description: 'A purple non-woven tote for Borosil Scientific, printed with a playful line-art doodle pattern and "Enabling the Future of Science" tagline.',
    howItsMade: 'Heat-sealed non-woven fabric with an all-over doodle screen print and white webbing handles.',
    materials: ['Non-woven polypropylene', 'Webbing handles'],
    images: ['/products/bags/shopping-bags/BoroSil.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'calat-story-ladies-bag',
    name: 'Calat Story Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Grey structured tote / Woven pattern',
    description: 'A structured grey tote with a subtle woven geometric texture, finished with a small metal logo tag.',
    howItsMade: 'Stiffened non-woven fabric with a printed textile pattern, structured base, and matching grey handles.',
    materials: ['Non-woven polypropylene', 'Metal logo tag', 'Structured base'],
    images: ['/products/bags/shopping-bags/CalatStory.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'clearship-group-office-bag',
    name: 'ClearShip Group Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Off-white canvas / Mascot logo print',
    description: 'An off-white canvas tote for ClearShip Group, printed with their blue mascot logo and "Since 1970" tagline.',
    howItsMade: 'Cut and stitched on natural canvas with a single-colour logo print and cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/ClearShipGroup.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'dabur-shopping-bag',
    name: 'Dabur Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Cream canvas / Gold foil print',
    description: 'A cream canvas tote for Dabur, printed with a gold "Dabur 1884" wordmark and botanical line-art.',
    howItsMade: 'Cut and stitched on natural canvas with a gold-tone print and matching cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Dabur.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'interem-office-bag',
    name: 'Interem Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Natural jute / Maroon panel',
    description: 'A two-tone jute bag for Interem, pairing a maroon front panel with natural jute sides and the logo printed in gold.',
    howItsMade: 'Jute panels stitched in a contrast colourway with a screen-printed logo and jute handles.',
    materials: ['Natural jute', 'Dyed jute panel'],
    images: ['/products/bags/shopping-bags/interem.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'lilavati-jewellers-shopping-bag',
    name: 'Lilavati Jewellers Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Natural jute / Brown handles',
    description: 'A natural jute bag for Lilavati Jewellers, printed with the logo and contact details in brown, with matching brown handles.',
    howItsMade: 'Woven jute body with a screen-printed logo panel and stitched brown cotton handles.',
    materials: ['Natural jute', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Lilavati-jewellers.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'mental-cloth-shopping-bag',
    name: 'Mental Cloth Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Natural jute / Woven trim border',
    description: 'A natural jute bag for Mental Cloth, finished with a decorative woven trim border along the top and brown handles.',
    howItsMade: 'Woven jute body with a printed logo, an embroidered-look trim band, and stitched brown handles.',
    materials: ['Natural jute', 'Woven trim', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Mental-Cloth.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'milap-jewellers-ladies-bag',
    name: 'Milap Jewellers Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Charcoal canvas / White floral print',
    description: 'A charcoal canvas bag for Milap Jewellers, printed with a white floral motif and the logo in Hindi.',
    howItsMade: 'Cut and stitched on dyed canvas with a white floral screen print and black webbing handles.',
    materials: ['Cotton canvas', 'Webbing handles'],
    images: ['/products/bags/shopping-bags/Milap-jewellers.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'oberoi-international-school-bag',
    name: 'Oberoi International School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    detail: 'Cream canvas / Green tree logo',
    description: 'A cream canvas tote for Oberoi International School, printed with a green circular tree emblem.',
    howItsMade: 'Cut and stitched on natural canvas with a single-colour logo print and matching cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Oberoi-international-school.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'pouch-bag',
    name: 'Embroidered Geometry Pouch',
    category: 'Bags',
    subCategory: 'Geometry Pouches',
    detail: 'Quilted fabric / Floral embroidery',
    description: 'A compact quilted pouch in blue with an all-over floral embroidery pattern and zip closure — ideal for stationery, gifting, or smaller retail items.',
    howItsMade: 'Quilted fabric panels embroidered with a floral pattern, assembled with a zip-top closure.',
    materials: ['Quilted fabric', 'Embroidery thread', 'Zip closure'],
    images: ['/products/bags/shopping-bags/Pouch-bag.jpeg'],
    customisable: ['Colour', 'Embroidery Pattern', 'Logo Print'],
  },
  {
    slug: 'unity-hands-shopping-bag',
    name: 'Unity Hands Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Orange non-woven / Multicolour print',
    description: 'A bright orange non-woven bag printed with a colourful raised-hands illustration, themed around unity and diversity.',
    howItsMade: 'Heat-sealed non-woven fabric with a multicolour screen print and matching orange handles.',
    materials: ['Non-woven polypropylene', 'Webbing handles'],
    images: ['/products/bags/shopping-bags/Product1.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'maroon-paisley-potli-bag',
    name: 'Maroon Paisley Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    detail: 'Maroon & cream / Paisley print',
    description: 'A two-tone gifting bag pairing a maroon paisley-print panel with a plain cream panel, finished with white handles and a gift tag — suited to shagun and festive gifting.',
    howItsMade: 'Two contrasting fabric panels stitched together, one printed in a paisley pattern, with white cotton handles.',
    materials: ['Cotton fabric', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Product2.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'sky-blue-woven-ladies-bag',
    name: 'Sky Blue Woven Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Sky blue & cream / Woven pattern',
    description: 'A two-tone woven bag in sky blue and cream with a subtle diamond weave texture, finished with cream handles and a gift tag.',
    howItsMade: 'Two woven-texture panels stitched together with a zip closure and cream cotton handles.',
    materials: ['Woven cotton blend', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Product3.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'pink-diamond-potli-bag',
    name: 'Pink Diamond Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    detail: 'Cream & pink / Diamond print lining',
    description: 'A cream structured gifting bag with a pink diamond-pattern interior lining visible at the opening, finished with cream handles and a gift tag.',
    howItsMade: 'Structured cream fabric body with a printed pink lining panel and stitched cream handles.',
    materials: ['Cotton canvas', 'Printed lining fabric', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Product4.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'prohance-office-bag',
    name: 'Prohance Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Cream canvas / Monument print',
    description: 'A cream canvas tote for Prohance, printed with a black-line illustration of a heritage building.',
    howItsMade: 'Cut and stitched on natural canvas with a single-colour illustrated print and matching cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Prohance.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'quantum-quest-office-bag',
    name: 'Quantum Quest Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Cream woven / Branded hang tags',
    description: 'A cream woven bag with a fold-tab handle closure, finished with branded hang tags at the front.',
    howItsMade: 'Woven fabric body with a stitched handle tab and printed brand tags attached at the seam.',
    materials: ['Woven fabric', 'Cotton handles', 'Printed hang tags'],
    images: ['/products/bags/shopping-bags/QuantumQuest.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'radhika-balanced-body-gym-bag',
    name: 'Radhika Balanced Body Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    detail: 'Cream canvas / Green logo print',
    description: 'A cream canvas gym tote for Radhika\u2019s Balanced Body, printed with the leaf logo and "Life Happens. Pilates Helps." tagline.',
    howItsMade: 'Cut and stitched on natural canvas with a two-colour logo print and matching cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Radhika-balanced-body.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'raiyaraj-jewellers-ladies-bag',
    name: 'Raiyaraj Jewellers Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Blush pink canvas / Gold print',
    description: 'A blush pink structured pouch-style bag for Raiyaraj Jewellers, printed with the logo in gold.',
    howItsMade: 'Cut and stitched on dyed canvas with a gold-tone logo print and cream cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Raiyaraj-jewellers.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'saanvi-ladies-bag',
    name: 'Saanvi Ladies Bag',
    category: 'Bags',
    subCategory: 'Ladies Bag',
    detail: 'Cream & black / Polka dot print',
    description: 'A two-tone bag for Saanvi, pairing a plain cream top with a black polka-dot patterned base and the logo in script.',
    howItsMade: 'Two contrasting fabric panels stitched together with a zip closure and cream handles.',
    materials: ['Cotton fabric', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Saanvi.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'sbi-office-bag',
    name: 'SBI Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Beige woven / Fold-tab handle',
    description: 'A beige striped woven bag for SBI, printed with the bank\u2019s logo and "The Banker to every Indian" tagline, finished with a fold-tab handle closure.',
    howItsMade: 'Woven striped fabric body with a stitched handle tab and a single-colour logo print.',
    materials: ['Woven fabric', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/SBI.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'schott-office-bag',
    name: 'Schott Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'Cream canvas / Blue logo print',
    description: 'A cream canvas tote for Schott, printed with the logo in blue and supporting certification marks below.',
    howItsMade: 'Cut and stitched on natural canvas with a single-colour logo print and matching cotton handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Schott.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },
  {
    slug: 'shri-dev-narayan-jewellers-shopping-bag',
    name: 'Shri Dev Narayan Jewellers Shopping Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Natural jute-look / Brown trim',
    description: 'A jute-look bag for Shri Dev Narayan Jewellers, edged in brown trim and printed with the logo in Hindi.',
    howItsMade: 'Woven fabric body edged in brown trim, with a screen-printed logo panel and matching handles.',
    materials: ['Jute-blend fabric', 'Brown trim', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/Shri-dev-narayan-jewellers.jpeg'],
    customisable: JUTE_CUSTOMISATION,
  },
  {
    slug: 'the-schwan-india-office-bag',
    name: 'The Schwan India Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    detail: 'White canvas / Navy swan logo',
    description: 'A white canvas tote for The Schwan India, printed with the navy swan emblem.',
    howItsMade: 'Cut and stitched on natural canvas with a single-colour logo print and matching white handles.',
    materials: ['Cotton canvas', 'Cotton handles'],
    images: ['/products/bags/shopping-bags/TheSchwanIndia.jpeg'],
    customisable: TOTE_CUSTOMISATION,
  },

  // ── Customisable pens ──
  {
    slug: '777-checks-ballpoint-set',
    name: '777 Checks Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Black & gold checkered finish',
    description: 'A boxed set of three black ballpoint pens with a fine checkered/plaid barrel pattern and gold-tone trim.',
    howItsMade: 'Precision-turned metal barrels finished in a checkered pattern with gold-tone clip and cap trim, boxed as a set of three.',
    materials: ['Metal alloy body', 'Gold-tone plating', 'Refill: ballpoint'],
    images: ['/products/pens/777CheckBp.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: '777-mbk-sp-ballpoint-set',
    name: '777 MBK SP Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Matte black & gold finish',
    description: 'A boxed set of three matte black ballpoint pens with gold-tone clip and cap band trim.',
    howItsMade: 'Precision-turned metal barrels finished in matte black with gold-tone plated trim, boxed as a set of three.',
    materials: ['Metal alloy body', 'Gold-tone plating', 'Refill: ballpoint'],
    images: ['/products/pens/777MBKSPBP.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'dcb-bank-executive-pen',
    name: 'DCB Bank Executive Pen',
    category: 'Customisable Pens',
    detail: 'Chrome finish / Branded corporate pen',
    description: 'A silver chrome-finished executive pen made to order for DCB Bank, engraved with the bank\u2019s branding along the barrel.',
    howItsMade: 'Precision-turned chrome-plated metal body, engraved or printed with the client\u2019s logo along the barrel.',
    materials: ['Chrome-plated metal body', 'Refill: ballpoint'],
    images: ['/products/pens/DCBbankBest.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'tri-colour-clip-ballpoint-set',
    name: 'Tri-Colour Clip Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Black, blue & red with silver clip',
    description: 'A three-pen ballpoint set in black, blue, and red barrel finishes, each with a matching silver spring clip.',
    howItsMade: 'Precision-turned metal barrels finished in three colourways with silver-tone clips, boxed as a set.',
    materials: ['Metal alloy body', 'Refill: ballpoint'],
    images: ['/products/pens/pen1.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'gunmetal-loop-clip-ballpoint-set',
    name: 'Gunmetal Loop-Clip Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Gunmetal finish with loop clip',
    description: 'A three-pen ballpoint set finished entirely in gunmetal grey, with a distinctive looped clip design.',
    howItsMade: 'Precision-turned metal barrels finished in gunmetal grey with a signature loop-style clip, boxed as a set.',
    materials: ['Metal alloy body', 'Refill: ballpoint'],
    images: ['/products/pens/pen2.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'gold-trim-ballpoint-set',
    name: 'Gold Trim Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Black & gold, one pearlescent cap',
    description: 'A three-pen ballpoint set in black with gold-tone trim, one pen featuring a pearlescent cap accent.',
    howItsMade: 'Precision-turned metal barrels finished with gold-tone plated trim, boxed as a set of three.',
    materials: ['Metal alloy body', 'Gold-tone plating', 'Refill: ballpoint'],
    images: ['/products/pens/pen4.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'matte-tri-colour-ballpoint-set',
    name: 'Matte Tri-Colour Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Blue, black & red matte finish',
    description: 'A three-pen ballpoint set in blue, black, and red with a soft matte barrel finish and white spring clip.',
    howItsMade: 'Precision-turned metal barrels finished in a matte coating across three colourways, boxed as a set.',
    materials: ['Metal alloy body', 'Matte coating', 'Refill: ballpoint'],
    images: ['/products/pens/pen5.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'glossy-tri-colour-ballpoint-set',
    name: 'Glossy Tri-Colour Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 3 / Blue, gunmetal & red glossy finish',
    description: 'A three-pen ballpoint set in blue, gunmetal, and red with a glossy barrel finish and silver clip.',
    howItsMade: 'Precision-turned metal barrels finished in a glossy coating across three colourways, boxed as a set.',
    materials: ['Metal alloy body', 'Refill: ballpoint'],
    images: ['/products/pens/pen6best.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'sunshine-yellow-pen',
    name: 'Sunshine Yellow Pen',
    category: 'Customisable Pens',
    description:
      'A classic click-action pen in bright yellow with a black clip and trim — bold, visible branding ideal for corporate giveaways and promotional merchandise.',
    howItsMade:
      'Durable plastic body in vibrant yellow with a black spring-action clip, matte black grip, and vertical logo printing along the barrel.',
    materials: ['Plastic'],
    images: ['/products/pens/Core-Crete.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'classic-fountain-pen',
    name: 'Classic Fountain Pen',
    category: 'Customisable Pens',
    detail: 'Single pen / Glossy black with silver band',
    description: 'A single fountain-style pen with a glossy black barrel and a silver cap band accent.',
    howItsMade: 'Precision-turned barrel finished in glossy black with a silver-tone cap band and clip.',
    materials: ['Metal alloy body', 'Refill: fountain'],
    images: ['/products/pens/pen7.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },
  {
    slug: 'touch-colour-ballpoint-set',
    name: 'Touch Colour Ballpoint Set',
    category: 'Customisable Pens',
    detail: 'Set of 4 / White, blue, red & black soft-touch',
    description: 'A four-pen ballpoint set with a soft-touch rubberised finish in white, blue, red, and black.',
    howItsMade: 'Precision-turned metal barrels finished with a soft-touch rubberised coating, boxed as a set of four.',
    materials: ['Metal alloy body', 'Soft-touch coating', 'Refill: ballpoint'],
    images: ['/products/pens/Touch-colour.jpeg'],
    customisable: PEN_CUSTOMISATION,
  },


  //Gym Bags Start Here





  {
    slug: 'heritage-leather-gym-bag',
    name: 'Heritage Leather Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A vintage-inspired olive canvas duffel with rich tan leather trim and a front flap pocket — rugged, classic, and built for travel as much as the gym.',
    howItsMade:
      'Heavy-duty canvas body paired with genuine leather trim, top handle, and buckle detailing, finished with a durable zip closure.',
    materials: ['Canvas', 'Leather Trim'],
    images: ['/products/bags/gym-bags/GymBag1.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'navy-voyager-gym-bag',
    name: 'Navy Voyager Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A clean navy blue duffel with black trim and a structured silhouette — versatile enough for the gym, travel, or everyday use.',
    howItsMade:
      'Durable polyester construction with a reinforced base, padded top handle, and adjustable shoulder strap.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag2.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'slate-sport-gym-bag',
    name: 'Slate Sport Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A sporty grey and black duffel with bold diagonal stripe detailing and a front zip pocket — built for an active, on-the-go lifestyle.',
    howItsMade:
      'Lightweight polyester shell with contrast stripe panels, a padded shoulder strap, and a spacious main compartment.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag3.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'storm-trail-gym-bag',
    name: 'Storm Trail Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A structured grey and navy duffel with striking yellow zip accents — technical, sporty styling with a padded shoulder strap.',
    howItsMade:
      'Multi-panel polyester construction with contrast yellow zippers, a reinforced base, and a wide adjustable strap.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag4.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'regal-purple-gym-bag',
    name: 'Regal Purple Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A bold plum-purple duffel with a structured, boxy silhouette and multiple compartments — striking colour with practical everyday utility.',
    howItsMade:
      'Durable polyester body with a rigid base, black trim, padded handles, and a detachable shoulder strap.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag5.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'teal-trekker-gym-bag',
    name: 'Teal Trekker Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A deep teal duffel with a front organiser pocket and black webbing straps — practical and understated for daily gym or travel use.',
    howItsMade:
      'Heathered polyester fabric with a structured front pocket, padded handles, and an adjustable cross-body strap.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag6.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'sunset-teal-gym-bag',
    name: 'Sunset Teal Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A vibrant teal duffel with diagonal stitched detailing and a pop of orange on the zippers — energetic styling for an active lifestyle.',
    howItsMade:
      'Textured polyester shell with contrast orange zip pulls, a structured base, and a padded adjustable strap.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag7.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },
  {
    slug: 'ivory-cylinder-gym-bag',
    name: 'Ivory Cylinder Gym Bag',
    category: 'Bags',
    subCategory: 'Gym Bags',
    description:
      'A classic cylindrical duffel in soft ivory with black webbing handles — a timeless roll-bag silhouette with a clean, minimal look.',
    howItsMade:
      'Round barrel-shaped polyester construction with reinforced end caps, black webbing handles, and a full-length zip opening.',
    materials: ['Polyester'],
    images: ['/products/bags/gym-bags/GymBag8.jpg'],
    customisable: GYM_BAG_CUSTOMISATION,
  },




  //Office Bags Start Here




  {
    slug: 'executive-black-office-bag',
    name: 'Executive Black Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    description:
      'A structured black briefcase with a padded top handle, front organiser pocket, and detachable shoulder strap — sharp, professional, and built for daily commuting.',
    howItsMade:
      'Durable faux-leather exterior over a reinforced frame, with a padded laptop compartment, multiple zip pockets, and an adjustable shoulder strap.',
    materials: ['Faux Leather', 'Polyester Lining'],
    images: ['/products/bags/office-bags/Office1.jpg'],
    customisable: OFFICE_BAG_CUSTOMISATION,
  },
  {
    slug: 'slate-commuter-office-bag',
    name: 'Slate Commuter Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    description:
      'A sleek grey laptop bag with a slim, minimal profile and front zip pocket — designed for the modern commuter who values function over bulk.',
    howItsMade:
      'Lightweight heathered fabric shell with a padded laptop sleeve, top carry handle, and an adjustable shoulder strap.',
    materials: ['Polyester', 'Padded Lining'],
    images: ['/products/bags/office-bags/Office2.jpg'],
    customisable: OFFICE_BAG_CUSTOMISATION,
  },
  {
    slug: 'tan-trim-office-bag',
    name: 'Tan Trim Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    description:
      'A refined grey canvas tote-briefcase with warm tan leather handles and trim — a stylish, softer take on the classic office bag.',
    howItsMade:
      'Cotton canvas body with stitched genuine leather handles and trim, a front zip pocket, and a structured base.',
    materials: ['Cotton Canvas', 'Leather Trim'],
    images: ['/products/bags/office-bags/Office3.jpg'],
    customisable: OFFICE_BAG_CUSTOMISATION,
  },
  {
    slug: 'heritage-tan-office-bag',
    name: 'Heritage Tan Office Bag',
    category: 'Bags',
    subCategory: 'Office Bags',
    description:
      'A structured black canvas briefcase with tan leather handles and a front slip pocket — a classic silhouette with a heritage-inspired finish.',
    howItsMade:
      'Sturdy canvas construction with stitched leather top handles, a front utility pocket, and a durable zip closure.',
    materials: ['Cotton Canvas', 'Leather Handles'],
    images: ['/products/bags/office-bags/Office4.jpg'],
    customisable: OFFICE_BAG_CUSTOMISATION,
  },


  //School Bags Start Here



  {
    slug: 'midnight-doodle-school-bag',
    name: 'Midnight Doodle School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A sleek black backpack covered in a subtle allover doodle print — playful yet understated, perfect for everyday school use.',
    howItsMade:
      'Durable polyester body with a fine tonal print, padded shoulder straps, and multiple zip compartments.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School1.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'constellation-school-bag',
    name: 'Constellation School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A navy backpack scattered with a delicate star and constellation print — a calm, cosmic look for young explorers.',
    howItsMade:
      'Polyester shell with a printed star pattern, padded back panel, and adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School2.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'orange-bolt-school-bag',
    name: 'Orange Bolt School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A bold navy backpack with a dynamic orange diagonal stripe and geometric line detailing — energetic and sporty.',
    howItsMade:
      'Polyester construction with contrast orange panel stitching, a padded back, and reinforced zip pulls.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School3.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'teal-zigzag-school-bag',
    name: 'Teal Zigzag School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A deep teal backpack with a vibrant zigzag pattern along the base — striking colour contrast with a sporty edge.',
    howItsMade:
      'Polyester body with a printed zigzag base panel, teal piping, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School4.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'sky-and-sand-school-bag',
    name: 'Sky & Sand School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A soft color-block backpack in sky blue and sand tones — gentle, clean styling for a relaxed everyday look.',
    howItsMade:
      'Polyester construction with a two-tone color-block design, padded straps, and a structured top handle.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School5.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'ivory-geo-school-bag',
    name: 'Ivory Geo School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'An ivory backpack with an abstract geometric print panel and gold branding — artistic and stylish for older students.',
    howItsMade:
      'Polyester shell with a printed geometric side panel, gold-tone logo, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School6.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'teal-swoosh-school-bag',
    name: 'Teal Swoosh School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A vibrant teal backpack with a sweeping gold accent line and black base panel — modern and eye-catching.',
    howItsMade:
      'Polyester body with a contrast black base, gold swoosh stitching, and a side utility pocket.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School7.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'classic-black-school-bag',
    name: 'Classic Black School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A no-fuss, all-black backpack with a clean silhouette — a timeless, versatile choice for everyday school or college use.',
    howItsMade:
      'Durable polyester construction with a padded back panel, reinforced straps, and a minimal logo print.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School8.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'confetti-bloom-school-bag',
    name: 'Confetti Bloom School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A playful lavender backpack covered in a colourful confetti print, with a handy side water bottle holder — fun and functional.',
    howItsMade:
      'Lightweight polyester with an allover confetti print, a mesh side pocket, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School9.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'lavender-petal-school-bag',
    name: 'Lavender Petal School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A soft lilac backpack with a delicate floral print and pink straps — sweet, feminine styling for younger students.',
    howItsMade:
      'Polyester shell with a fine floral print, contrast pink straps, and a padded back panel.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School10.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'ember-trim-school-bag',
    name: 'Ember Trim School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A sleek black backpack with a subtle orange trim stripe and side mesh pocket — understated with a sporty accent.',
    howItsMade:
      'Polyester construction with a contrast orange trim line, mesh side pocket, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School11.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'charcoal-minimal-school-bag',
    name: 'Charcoal Minimal School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A minimal charcoal backpack with a subtle gold logo — clean, mature styling suited for teens and young adults.',
    howItsMade:
      'Polyester body with a smooth matte finish, a gold-tone logo print, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School12.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'mint-floral-school-bag',
    name: 'Mint Floral School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A fresh mint-green backpack with a pretty floral and butterfly print — cheerful and vibrant for younger students.',
    howItsMade:
      'Polyester shell with an allover floral print, mint trim, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School13.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'dotted-trail-school-bag',
    name: 'Dotted Trail School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A navy and grey backpack with a playful polka-dot panel and diagonal yellow stripe — fun, graphic, and easy to spot in a crowd.',
    howItsMade:
      'Polyester construction with a printed polka-dot side panel, contrast yellow stripe, and padded straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School14.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'crimson-sport-school-bag',
    name: 'Crimson Sport School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A bold red and black backpack with a sweeping white diagonal stripe — athletic styling with a strong colour statement.',
    howItsMade:
      'Polyester body with contrast black paneling, a printed white stripe, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School15.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },
  {
    slug: 'navy-prism-school-bag',
    name: 'Navy Prism School Bag',
    category: 'Bags',
    subCategory: 'School Bags',
    description:
      'A rich navy backpack with a faceted teal geometric panel — modern and sleek with a subtle pop of colour.',
    howItsMade:
      'Polyester shell with a printed prism-style side panel, teal trim, and padded adjustable straps.',
    materials: ['Polyester'],
    images: ['/products/bags/school-bags/School16.jpg'],
    customisable: SCHOOL_BAG_CUSTOMISATION,
  },




  //Potli Bags Start Here



  {
    slug: 'ruby-silk-potli-bag',
    name: 'Ruby Silk Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A vibrant magenta satin potli with a gold drawstring cord — rich, festive, and perfect for shagun, weddings, or gifting.',
    howItsMade:
      'Crafted from smooth satin fabric with a gold braided drawstring closure and a printed gold logo.',
    materials: ['Satin'],
    images: ['/products/bags/potli/Potli1.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'rustic-jute-potli-bag',
    name: 'Rustic Jute Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A compact, earthy jute potli with a natural rope drawstring and hang tag — simple, rustic, and eco-friendly for small gifting needs.',
    howItsMade:
      'Woven natural jute fabric with a twisted rope drawstring closure and a printed logo.',
    materials: ['Jute'],
    images: ['/products/bags/potli/Potli2.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'ivory-cotton-potli-bag',
    name: 'Ivory Cotton Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A generously sized cream cotton potli with black drawstrings — clean and versatile for gifting, favours, or everyday pouches.',
    howItsMade:
      'Sturdy cotton fabric with double black drawstring cords and a printed logo.',
    materials: ['Cotton'],
    images: ['/products/bags/potli/Potli3.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'royal-purple-potli-bag',
    name: 'Royal Purple Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A regal purple fabric potli with a golden drawstring cord — bold and festive, ideal for weddings and celebrations.',
    howItsMade:
      'Woven fabric dyed a deep purple, finished with a gold braided drawstring and printed logo.',
    materials: ['Fabric'],
    images: ['/products/bags/potli/Potli4.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'golden-shimmer-potli-bag',
    name: 'Golden Shimmer Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A luxurious gold satin potli with a matching shimmer drawstring — glamorous and celebratory, perfect for festive gifting.',
    howItsMade:
      'High-shine satin fabric with a braided gold drawstring closure and a printed logo.',
    materials: ['Satin'],
    images: ['/products/bags/potli/Potli5.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'teal-brush-potli-bag',
    name: 'Teal Brush Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A sporty white drawstring backpack-style potli with a bold teal brushstroke design — playful and functional for casual carry.',
    howItsMade:
      'Durable fabric construction with a printed teal brushstroke design and reinforced drawstring straps for backpack-style wear.',
    materials: ['Polyester'],
    images: ['/products/bags/potli/Potli6.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'midnight-black-potli-bag',
    name: 'Midnight Black Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A sleek black satin potli with a matching drawstring cord — elegant and versatile for gifting or personal use.',
    howItsMade:
      'Smooth satin fabric with a black braided drawstring closure and a printed logo.',
    materials: ['Satin'],
    images: ['/products/bags/potli/Potli7.png'],
    customisable: POTLI_CUSTOMISATION,
  },
  {
    slug: 'silver-sport-potli-bag',
    name: 'Silver Sport Potli Bag',
    category: 'Bags',
    subCategory: 'Shagun/Potli',
    description:
      'A sleek metallic silver drawstring backpack with black straps — sporty and modern, great for gyms, events, or everyday carry.',
    howItsMade:
      'Durable metallic-finish fabric with reinforced black drawstring straps built for backpack-style wear and a printed logo.',
    materials: ['Polyester'],
    images: ['/products/bags/potli/Potli8.png'],
    customisable: POTLI_CUSTOMISATION,
  },



  //Cap start here



  {
    slug: 'classic-black-cap',
    name: 'Classic Black Cap',
    category: 'Cap',
    description:
      'A structured black cap with clean embroidered branding — a go-to choice for corporate merchandise and everyday wear.',
    howItsMade:
      'Cotton twill construction with a curved brim, adjustable back strap, and precision embroidery.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap1.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'sport-stripe-cap',
    name: 'Sport Stripe Cap',
    category: 'Cap',
    description:
      'A black cap with bold contrast embroidery and white piping detail — sporty styling suited for team or brand merchandise.',
    howItsMade:
      'Cotton twill cap with contrast-thread embroidered emblem, white piping trim, and an adjustable back closure.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap2.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'monogram-black-cap',
    name: 'Monogram Black Cap',
    category: 'Cap',
    description:
      'An elegant black cap with a refined side monogram — a great pick for weddings, personalised gifting, or premium branding.',
    howItsMade:
      'Cotton twill cap with fine embroidered monogram detailing on the side panel and an adjustable strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap3.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'contrast-stitch-cap',
    name: 'Contrast Stitch Cap',
    category: 'Cap',
    description:
      'A black cap with crisp white contrast stitching and a clean minimal logo — modern and versatile for everyday or brand use.',
    howItsMade:
      'Cotton twill cap with bold white contrast stitching detail, embroidered logo, and an adjustable back strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap4.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'classic-red-cap',
    name: 'Classic Red Cap',
    category: 'Cap',
    description:
      'A vibrant red cap with bold embroidered lettering — eye-catching branding for retail, food, or event merchandise.',
    howItsMade:
      'Cotton twill construction dyed a rich red, with bold embroidered text and an adjustable back closure.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap5.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'wolf-emblem-cap',
    name: 'Wolf Emblem Cap',
    category: 'Cap',
    description:
      'A sleek black cap featuring a detailed wolf-head emblem — striking, illustrative branding with a premium finish.',
    howItsMade:
      'Cotton twill cap with a high-detail embroidered/printed emblem and an adjustable back strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap6.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'classic-white-cap',
    name: 'Classic White Cap',
    category: 'Cap',
    description:
      'A crisp white dad-style cap with a soft, unstructured crown — clean and minimal, ideal for lifestyle and wellness branding.',
    howItsMade:
      'Soft cotton twill in an unstructured silhouette with a curved brim, embroidered logo, and adjustable strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap7.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'bold-text-cap',
    name: 'Bold Text Cap',
    category: 'Cap',
    description:
      'A structured black cap with a bold, statement wordmark — sharp and confident branding for modern businesses.',
    howItsMade:
      'Cotton twill construction with large embroidered lettering across the front panel and an adjustable back strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap8.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'vibrant-red-cap',
    name: 'Vibrant Red Cap',
    category: 'Cap',
    description:
      'A bright red cap with a bold rectangular logo patch and a contrasting yellow underbrim — punchy and vivid for standout branding.',
    howItsMade:
      'Cotton twill cap dyed vivid red, with an embroidered logo patch, yellow underbrim detail, and adjustable strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap9.png'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'custom-script-cap',
    name: 'Custom Script Cap',
    category: 'Cap',
    description:
      'A black cap featuring elegant cursive script embroidery — perfect for personalised names, gifting, or bridal party merchandise.',
    howItsMade:
      'Cotton twill cap with fine cursive-script embroidery and an adjustable back closure.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap10.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'two-tone-purple-cap',
    name: 'Two-Tone Purple Cap',
    category: 'Cap',
    description:
      'A playful white and purple two-tone cap with a fun character patch — cheerful styling suited for kids or casual lifestyle brands.',
    howItsMade:
      'Cotton twill cap with a contrast purple brim and crown panel, plus an embroidered character patch.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap11.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'navy-crest-cap',
    name: 'Navy Crest Cap',
    category: 'Cap',
    description:
      'A classic navy cap with a detailed gold crest emblem — heritage-inspired styling for institutional or formal branding.',
    howItsMade:
      'Cotton twill cap dyed navy, with a detailed embroidered crest badge and an adjustable back strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap12.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'checkmark-accent-cap',
    name: 'Checkmark Accent Cap',
    category: 'Cap',
    description:
      'A black cap with a bold checkmark emblem and a pop of orange on the underbrim — sporty and confident branding.',
    howItsMade:
      'Cotton twill cap with an embroidered checkmark logo, contrast orange underbrim, and adjustable strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap13.jpeg'],
    customisable: CAP_CUSTOMISATION,
  },
  {
    slug: 'shield-patch-cap',
    name: 'Shield Patch Cap',
    category: 'Cap',
    description:
      'A black cap featuring a detailed multicolour shield patch — rugged, outdoorsy styling with a badge-like emblem.',
    howItsMade:
      'Cotton twill cap with a woven shield-style patch, side text embroidery, and an adjustable back strap.',
    materials: ['Cotton Twill'],
    images: ['/products/caps/cap14.png'],
    customisable: CAP_CUSTOMISATION,
  },
];
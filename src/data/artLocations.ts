import type { ArtLocation } from "../types/art";

/**
 * Curated dataset of locations significant to Indian art history.
 *
 * Accuracy notes
 * - Coordinates are approximate public geographic positions of the sites.
 * - Historical dates follow mainstream scholarship (UNESCO / ASI summaries);
 *   uncertain attributions use cautious wording ("attributed", "c.").
 * - Where individual artists are unrecorded, that is stated explicitly
 *   rather than inventing names.
 * - Images are openly licensed / public-domain files served by Wikimedia
 *   Commons; each carries a credit line. The UI falls back gracefully if a
 *   remote image ever fails to load.
 */
export const ART_LOCATIONS: ArtLocation[] = [
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    region: "Central India",
    latitude: 22.937,
    longitude: 77.61,
    period: "Mesolithic period onwards, spanning many millennia BCE into historic times",
    periodGroup: "Ancient",
    categories: ["Ancient Indian Art", "Tribal Art"],
    mediums: ["Painting"],
    artForms: ["Prehistoric rock painting", "Pictographs", "Hunting and dance scenes"],
    description:
      "A cluster of sandstone rock shelters at the foot of the Vindhya hills containing some of the oldest known evidence of human artistic activity on the Indian subcontinent.",
    historicalContext:
      "Declared a UNESCO World Heritage Site in 2003, the shelters preserve hundreds of painted walls in which hunting scenes, dances, animals and ritual figures overlap across many millennia. The earliest layers are generally associated with Mesolithic hunter-gatherer communities, while later layers continue into early historic times, making Bhimbetka a continuous record rather than a single moment. Precise dating of individual paintings remains an open research question.",
    artists: [
      "Unrecorded prehistoric hunter-gatherer communities — no individual painters are identifiable",
      "Later village communities who repainted shelter walls over generations",
    ],
    artworks: [
      { name: "Rock Shelter 3 (Auditorium Cave)", detail: "Large assembly space with dense painted ceilings" },
      { name: "Rock Shelter 8", detail: "Well-known procession and animal panels" },
      { name: "Zoo Rock Shelter", detail: "Layered animal figures" },
      { name: "Dance and communal gathering scenes" },
    ],
    significance:
      "Bhimbetka pushes the story of Indian art back before written history and provides the deep-time starting point for any geographic map of artistic practice in India.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rock_Shelter_8%2C_Bhimbetka_02.jpg/960px-Rock_Shelter_8%2C_Bhimbetka_02.jpg",
    imageAlt: "Painted interior of Rock Shelter 8 at the Bhimbetka rock shelters in Madhya Pradesh",
    imageCredit: "Wikimedia Commons — Rock Shelter 8, Bhimbetka (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/925/",
  },
  {
    id: "ajanta",
    name: "Ajanta Caves",
    state: "Maharashtra",
    region: "West India",
    latitude: 20.5522,
    longitude: 75.7033,
    period: "c. 2nd century BCE – c. 6th century CE (two excavations phases)",
    periodGroup: "Ancient",
    categories: ["Buddhist Art", "Ancient Indian Art"],
    mediums: ["Painting", "Sculpture", "Architecture"],
    artForms: ["Rock-cut cave architecture", "Tempera murals", "Buddhist narrative sculpture"],
    description:
      "Thirty rock-cut Buddhist caves cut into a horseshoe gorge of the Waghora river, home to the finest surviving corpus of ancient Indian mural painting.",
    historicalContext:
      "The caves were excavated in two waves: under the Satavahana dynasty around the 2nd–1st centuries BCE, and under the Vakataka king Harishena around 460–480 CE. Work stopped abruptly when Vakataka patronage collapsed, preserving unfinished evidence of workshop method alongside finished masterpieces. The murals were painted in tempera on prepared ground and were rediscovered by British officers in 1819. UNESCO World Heritage Site since 1983.",
    artists: [
      "Many Ajanta murals were created by skilled workshop traditions whose individual painters are not recorded",
      "Inscriptions name donors such as the minister Varahadeva and the monk Buddhabhadra rather than the artists themselves",
    ],
    artworks: [
      { name: "Cave 1 — Bodhisattva Padmapani mural" },
      { name: "Cave 1 — Bodhisattva Vajrapani mural" },
      { name: "Cave 16 — 'Dying Princess' panel" },
      { name: "Caves 19 & 26 — chaitya prayer halls with carved facades" },
    ],
    significance:
      "Ajanta is the classical reference point for ancient Indian painting; its flowing line, modelling and narrative composition influenced Buddhist art across Asia for centuries.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/960px-Ajanta_%2863%29.jpg",
    imageAlt: "View of the horseshoe-shaped rock face with the Ajanta cave openings above the Waghora river gorge",
    imageCredit: "Wikimedia Commons — Ajanta Caves (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/242/",
  },
  {
    id: "ellora",
    name: "Ellora Caves",
    state: "Maharashtra",
    region: "West India",
    latitude: 20.0268,
    longitude: 75.1777,
    period: "c. 6th – 10th centuries CE",
    periodGroup: "Medieval",
    categories: ["Hindu Temple Art", "Jain Art", "Buddhist Art", "Medieval Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: [
      "Monolithic rock-cut temple",
      "Multi-faith cave complexes",
      "Monumental relief sculpture",
    ],
    description:
      "Thirty-four excavations along a basalt escarpment where Buddhist, Hindu and Jain monuments stand side by side — including the astonishing monolithic Kailasa temple.",
    historicalContext:
      "Excavated under Kalachuri, Rashtrakuta and Yadava patronage, Ellora demonstrates nearly five centuries of overlapping multi-faith patronage along a trade route. Cave 16, the Kailasa temple, was carved top-down from a single rock cliff during the reign of Rashtrakuta ruler Krishna I, removing an estimated hundreds of thousands of tonnes of stone. UNESCO World Heritage Site since 1983.",
    artists: [
      "Anonymous guilds of stone-cutters and sculptors worked here across generations",
      "Inscriptions record royal patrons such as Krishna I but leave the makers unnamed",
    ],
    artworks: [
      { name: "Kailasa temple (Cave 16)", detail: "World's largest monolithic excavation" },
      { name: "'Ravana shaking Mount Kailasa' panel", detail: "Tour-de-force of depth carving" },
      { name: "Vishvakarma cave ('Carpenter's Cave')", detail: "Buddhist chaitya with ribbed ceiling" },
      { name: "Jain caves 30–34 (Indra Sabha complex)" },
    ],
    significance:
      "Ellora is a unique testimony to religious coexistence in medieval India and represents the technical apex of rock-cut architecture anywhere in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ellora_Caves%2C_India%2C_Kailasa_Temple.jpg/960px-Ellora_Caves%2C_India%2C_Kailasa_Temple.jpg",
    imageAlt: "Columned courtyard of the monolithic Kailasa temple at Ellora carved entirely from living rock",
    imageCredit: "Wikimedia Commons — Kailasa Temple, Ellora (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/243/",
  },
  {
    id: "mumbai",
    name: "Mumbai — Fort & Kala Ghoda Quarter",
    state: "Maharashtra",
    region: "West India",
    latitude: 18.933,
    longitude: 72.8347,
    period: "1857 (Sir J.J. School of Art) – present",
    periodGroup: "Modern",
    categories: ["Modern Indian Art", "Contemporary Indian Art"],
    mediums: ["Painting", "Architecture"],
    artForms: [
      "Progressive modernism",
      "Victorian Gothic & Indo-Deco architecture",
      "Contemporary gallery culture",
    ],
    description:
      "India's commercial capital and, since Independence, one of its principal engine rooms of modern and contemporary art, centred on the Fort and Kala Ghoda precinct.",
    historicalContext:
      "The Sir J.J. School of Art, founded in 1857, trained generations of artists including M.F. Husain. In December 1947 six young artists — F.N. Souza, S.H. Raza, M.F. Husain, K.H. Ara, H.A. Gade and S.K. Bakre — founded the Progressive Artists' Group, rejecting academic naturalism in favour of international modernism with Indian subject matter. The Kala Ghoda area anchors the gallery scene today, while Chhatrapati Shivaji Maharaj Terminus (1888) is a UNESCO-listed masterpiece of Victorian Gothic revival.",
    artists: [
      "F.N. Souza (1924–2002), founder of the Progressives",
      "S.H. Raza (1922–2016), later celebrated for the Bindu series",
      "M.F. Husain (1915–2011), J.J. School alumnus",
      "Tyeb Mehta (1925–2009) and V.S. Gaitonde (1924–2001), associated with the group",
    ],
    artworks: [
      { name: "Chhatrapati Shivaji Maharaj Terminus (1888)", detail: "UNESCO World Heritage Site" },
      { name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (1905–14)", detail: "City's principal museum" },
      { name: "Jehangir Art Gallery (1952)", detail: "Long-running exhibition venue at Kala Ghoda" },
      { name: "Progressive Artists' Group founding exhibitions (from 1947)" },
    ],
    significance:
      "Mumbai is where post-Independence Indian modernism consolidated its identity and where contemporary Indian art still meets the global market and public.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Chhatrapati_shivaji_terminus%2C_esterno_01.jpg/960px-Chhatrapati_shivaji_terminus%2C_esterno_01.jpg",
    imageAlt: "Ornate Victorian Gothic facade and dome of Chhatrapati Shivaji Maharaj Terminus railway station in Mumbai",
    imageCredit: "Wikimedia Commons — Chhatrapati Shivaji Terminus (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/945/",
  },
  {
    id: "sanchi",
    name: "Sanchi",
    state: "Madhya Pradesh",
    region: "Central India",
    latitude: 23.485,
    longitude: 77.738,
    period: "c. 3rd century BCE – c. 12th century CE",
    periodGroup: "Ancient",
    categories: ["Buddhist Art", "Ancient Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: ["Stupa architecture", "Carved gateway (torana) sculpture", "Narrative Jataka reliefs"],
    description:
      "Site of the Great Stupa begun under Emperor Ashoka, crowned by the richest surviving gateways of early Buddhist narrative sculpture.",
    historicalContext:
      "Stupa 1 was commissioned in the 3rd century BCE under Ashoka, enlarged under the Sungas, and given its four famous carved gateways around the 1st century BCE under Satavahana rule. An inscription records that ivory carvers of nearby Vidisha contributed to the gateways — rare documentary evidence of specialist craft networks. Buddhist activity at Sanchi continued until about the 12th century. UNESCO World Heritage Site since 1989.",
    artists: [
      "Anonymous stonemason guilds executed the stupas and gateways",
      "An inscription credits ivory carvers (dantakaras) of Vidisha with work on the toranas",
    ],
    artworks: [
      { name: "Great Stupa (Stupa 1)" },
      { name: "Four toranas at Stupa 1", detail: "Jataka narratives, Queen Maya's dream, war of the relics" },
      { name: "Stupa 2 railing medallions" },
      { name: "Ashokan pillar and polished sandstone lion capital" },
    ],
    significance:
      "Sanchi is the foundational monument of Buddhist architecture, and its reliefs are among the most important visual sources for everyday life in early India.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG/960px-East_Gateway_-_Stupa_1_-_Sanchi_Hill_2013-02-21_4398.JPG",
    imageAlt: "Carved stone gateway covered in narrative reliefs rising before the hemispheric Great Stupa at Sanchi",
    imageCredit: "Wikimedia Commons — East Gateway, Sanchi (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/524/",
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples",
    state: "Madhya Pradesh",
    region: "Central India",
    latitude: 24.8525,
    longitude: 79.92,
    period: "Built c. 950 – 1050 CE",
    periodGroup: "Medieval",
    categories: ["Hindu Temple Art", "Jain Art", "Medieval Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: ["Nagara temple architecture", "Devotional and surasundari sculpture"],
    description:
      "Capital of the Chandella dynasty, whose temple city once held some 85 temples — around 25 survive as the densest grouping of medieval north Indian temple architecture.",
    historicalContext:
      "The temples were built roughly between 950 and 1050 CE under Chandella patronage and inscribed on the UNESCO list in 1986. The western group includes the Lakshmana and Kandariya Mahadeva temples; an eastern group of Jain temples testifies to parallel Jain patronage. Khajuraho's sculptural programmes — graceful surasundaris and celebrated erotic imagery — are read by scholars within tantric and kama frameworks as well as devotional ones.",
    artists: [
      "Chandella court workshops created the temples; individual sculptors are not recorded by name",
    ],
    artworks: [
      { name: "Kandariya Mahadeva Temple (c. 1030)", detail: "Peak expression of the nagara shikhara" },
      { name: "Lakshmana Temple (c. 954)" },
      { name: "Vishvanatha Temple" },
      { name: "Parshvanatha Jain Temple", detail: "Eastern group" },
    ],
    significance:
      "Khajuraho represents the mature climax of the north Indian temple style, integrating religion, kingship and human experience into unified architectural sculpture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/1_Khajuraho.jpg/960px-1_Khajuraho.jpg",
    imageAlt: "Cluster of sandstone Khajuraho temple spires rising above trees at sunset",
    imageCredit: "Wikimedia Commons — Khajuraho Group of Monuments (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/240/",
  },
  {
    id: "bhopal",
    name: "Bhopal — Gond Art & Bharat Bhavan",
    state: "Madhya Pradesh",
    region: "Central India",
    latitude: 23.2599,
    longitude: 77.4126,
    period: "Gond painting on paper and canvas from the early 1980s",
    periodGroup: "Contemporary",
    categories: ["Tribal Art", "Contemporary Indian Art"],
    mediums: ["Painting"],
    artForms: ["Gond dot-and-line painting", "Bhil painting", "Adivasi museum practice"],
    description:
      "Home of Bharat Bhavan (1982), the multidisciplinary arts complex where Gond painting moved from house walls and floors to paper, canvas and the international art world.",
    historicalContext:
      "Bharat Bhavan's Roopankar museum, founded under artist J. Swaminathan, deliberately brought Adivasi artists into urban view. Jangarh Singh Shyam (1961–2001), a young Pardhan Gond artist from Patangarh village, pioneered what became known as the Jangarh Kalam — translating ritual wall and floor traditions into ink-and-acrylic images. His success created a movement carried forward by family members and other Gond and Bhil artists.",
    artists: [
      "Jangarh Singh Shyam (1961–2001), pioneer of Gond painting on canvas",
      "Venkat Raman Singh Shyam, painter and memoirist",
      "Bhajju Shyam, author-artist of 'The London Jungle Book'",
      "Durga Bai Vyam, award-winning Gond artist",
    ],
    artworks: [
      { name: "Jangarh Singh Shyam's early Bharat Bhavan works" },
      { name: "Bhajju Shyam, 'The London Jungle Book' (2004)" },
      { name: "Roopankar collection of Adivasi art" },
    ],
    significance:
      "Bhopal shows how contemporary institutions can amplify living tribal traditions rather than freeze them — Gond painting is now among India's most recognised contemporary idioms.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/JSS_at_BB.jpeg/960px-JSS_at_BB.jpeg",
    imageAlt: "Photograph of artist Jangarh Singh Shyam working at Bharat Bhavan, Bhopal",
    imageCredit: "Wikimedia Commons — Jangarh Singh Shyam at Bharat Bhavan (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Jangarh_Singh_Shyam",
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North India",
    latitude: 25.3176,
    longitude: 82.9739,
    period: "Living tradition — major temple and riverfront fabric developed especially c. 1700–1900",
    periodGroup: "Ancient",
    categories: ["Hindu Temple Art", "Ancient Indian Art"],
    mediums: ["Architecture", "Crafts"],
    artForms: ["Temple architecture", "Banarasi silk brocade weaving", "Ritual ghat culture"],
    description:
      "One of the world's oldest continuously inhabited cities and a living centre of temple art, ritual performance and silk weaving on the Ganges.",
    historicalContext:
      "Sacred to Shiva as Vishwanath, the city's present Kashi Vishwanath temple was rebuilt in 1780 by Ahilyabai Holkar after earlier destruction. Its celebrated ghats were commissioned largely by Maratha and other patrons between the 17th and 19th centuries, creating an iconic architectural riverfront. The Bharat Kala Bhavan museum (founded 1920 by Rai Krishnadasa) preserves important collections, while hereditary weaver families sustain Banarasi brocade.",
    artists: [
      "Anonymous hereditary Muslim weaver households producing Banarasi brocade for centuries",
      "Rai Krishnadasa (1895–1973), pioneering art historian and founder of Bharat Kala Bhavan",
    ],
    artworks: [
      { name: "Kashi Vishwanath Temple (rebuilt 1780)" },
      { name: "Dashashwamedh and Manikarnika ghat architecture" },
      { name: "Banarasi silk brocades", detail: "GI-tagged handloom tradition" },
      { name: "Bharat Kala Bhavan collections" },
    ],
    significance:
      "Varanasi demonstrates how art, ritual and urban fabric remain fused in an unbroken living tradition — a counterpoint to the archaeological sites elsewhere on this map.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dasaswamedh_ghat-varanasi_india-andres_larin.jpg/960px-Dasaswamedh_ghat-varanasi_india-andres_larin.jpg",
    imageAlt: "Stone steps of Dashashwamedh Ghat in Varanasi descending to boats moored on the Ganges river",
    imageCredit: "Wikimedia Commons — Dashashwamedh Ghat, photo Andres Larin (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Varanasi",
  },
  {
    id: "madhubani",
    name: "Madhubani / Mithila Region",
    state: "Bihar",
    region: "East India",
    latitude: 26.3535,
    longitude: 86.131,
    period: "Roots in older domestic wall customs; nationally recognised after the 1934 Bihar–Nepal earthquake",
    periodGroup: "Modern",
    categories: ["Folk Art"],
    mediums: ["Painting"],
    artForms: ["Mithila painting (kohbar, aripan)", "Godna tattoo-inspired motifs", "Paper-based folk painting"],
    description:
      "The women-led painting tradition of the Mithila region, transformed from wedding-chamber walls to museum walls worldwide within a single lifetime.",
    historicalContext:
      "Traditionally painted by women on freshly plastered mud walls for marriages and rituals, Mithila painting came to wider attention when civil servant William G. Archer documented wall paintings after the 1934 earthquake. In the late 1960s the All India Handicrafts Board encouraged painting on paper during a drought-relief initiative, bringing artists such as Sita Devi and Ganga Devi national recognition. Distinct caste-based styles (Kayastha, Brahmin, Dusadh) developed in parallel.",
    artists: [
      "Sita Devi (d. 2005), among the first nationally honoured Mithila artists",
      "Ganga Devi (d. 1991), celebrated for narrative paper works",
      "Mahasundari Devi and Baua Devi, award-winning practitioners",
      "Bharti Dayal, contemporary Mithila painter",
    ],
    artworks: [
      { name: "Kohbar (wedding chamber) compositions" },
      { name: "Ramayana narrative cycles on paper" },
      { name: "Tantric diagrams and lotus-fish auspicious imagery" },
    ],
    significance:
      "Madhubani is among the most successful examples anywhere of a regional women's art entering museums worldwide while sustaining living local practice.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Madhubani_Mahavidyas.jpg",
    imageAlt: "Madhubani-style painting depicting the ten Mahavidya goddesses in dense multicoloured line work",
    imageCredit: "Wikimedia Commons — Madhubani Mahavidyas painting (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Madhubani_art",
  },
  {
    id: "puri",
    name: "Puri — Jagannath Temple & Pattachitra",
    state: "Odisha",
    region: "East India",
    latitude: 19.805,
    longitude: 85.818,
    period: "Temple begun 12th century CE; pattachitra continues to the present",
    periodGroup: "Medieval",
    categories: ["Hindu Temple Art", "Folk Art", "Medieval Indian Art"],
    mediums: ["Architecture", "Painting", "Crafts"],
    artForms: ["Jagannath cult iconography", "Pattachitra cloth painting", "Palm-leaf etching (pothi)"],
    description:
      "Seat of the great Jagannath temple, whose deity images, festival crafts and hereditary painter families anchor Odisha's devotional art traditions.",
    historicalContext:
      "The temple was initiated by Eastern Ganga king Anantavarman Chodaganga in the 12th century and completed under Anangabhima Deva III. Puri's chitrakara families paint pattachitra cloth icons of the Jagannath triad using mineral and earth pigments, and etch palm-leaf pothi manuscripts; the nearby village of Raghurajpur is a recognised heritage crafts village. The annual Rath Yatra mobilises enormous ritual craft effort each year.",
    artists: [
      "Hereditary chitrakar (painter) families of Puri and Raghurajpur, largely unrecorded by name until recent decades",
    ],
    artworks: [
      { name: "Jagannath Temple (12th century onward)" },
      { name: "Pattachitra icons of Jagannath, Balabhadra and Subhadra" },
      { name: "Palm-leaf pothi manuscripts" },
      { name: "Rath Yatra chariot decoration" },
    ],
    significance:
      "Puri models how temple ritual can sustain entire craft ecosystems continuously across nearly a millennium.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Shri_Jagannath_temple.jpg/960px-Shri_Jagannath_temple.jpg",
    imageAlt: "Towering sculpted shikhara of the Jagannath temple at Puri seen across surrounding rooftops",
    imageCredit: "Wikimedia Commons — Jagannath Temple, Puri (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri",
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    state: "Odisha",
    region: "East India",
    latitude: 19.8876,
    longitude: 86.0945,
    period: "Built c. 1250 CE",
    periodGroup: "Medieval",
    categories: ["Hindu Temple Art", "Medieval Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: ["Odishan deul architecture", "Monumental stone chariot", "Narrative sculpture"],
    description:
      "The Sun God's colossal stone chariot — the architectural and sculptural climax of Odishan temple building under the Eastern Ganga dynasty.",
    historicalContext:
      "Built by King Narasimhadeva I (r. c. 1238–1264), the temple was conceived as the sun god's chariot on twenty-four carved wheels drawn by seven horses. Its halls carry sophisticated sculpture spanning deities, musicians, dancers, court life and erotic imagery; the wheels double as functioning sundials. Partially ruined — probably through structural failure and later events — it was inscribed on the UNESCO list in 1984.",
    artists: [
      "Eastern Ganga royal workshops built the temple; the architects (silpins) are unnamed in surviving records",
    ],
    artworks: [
      { name: "Twenty-four carved chariot wheels", detail: "Including usable sundials" },
      { name: "Nata Mandir (dance hall) musician panels" },
      { name: "Guardian deities and colossal war elephants" },
      { name: "Navagraha (nine planets) pediment" },
    ],
    significance:
      "Konark synthesises engineering ambition with an encyclopaedic sculptural programme — a benchmark of 13th-century Indian monumental art.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/960px-Konarka_Temple.jpg",
    imageAlt: "Pyramidal jagamohana hall of Konark Sun Temple against a blue sky",
    imageCredit: "Wikimedia Commons — Konark Sun Temple (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/246/",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East India",
    latitude: 22.5726,
    longitude: 88.3639,
    period: "Late 17th century – present; Bengal School flourished c. 1900–1940s",
    periodGroup: "Colonial",
    categories: ["Bengal School", "Modern Indian Art", "Folk Art"],
    mediums: ["Painting"],
    artForms: ["Kalighat pat painting", "Company School watercolours", "Bengal School revivalism"],
    description:
      "Colonial capital and birthplace both of the satirical Kalighat painting trade and of the swadeshi Bengal School of art.",
    historicalContext:
      "As the seat of British power, Calcutta generated 'Company Painting' for European patrons while patua painters near the Kalighat temple invented fast, satirical brush idioms sold to pilgrims. Around 1905–07, E.B. Havell and Abanindranath Tagore articulated the Bengal School through the Government College of Art and the Indian Society of Oriental Art, promoting Mughal, Ajanta and pan-Asian sources against colonial academies; Abanindranath's 'Bharat Mata' (1905) became an icon of the movement. Jamini Roy later turned to Bengali folk models.",
    artists: [
      "Abanindranath Tagore (1871–1951), founder figure of the Bengal School",
      "E.B. Havell, revivalist administrator of the Government College of Art",
      "Jamini Roy (1887–1972), modernist rooted in Bengali folk painting",
      "Anonymous Kalighat patua painter families",
    ],
    artworks: [
      { name: "Abanindranath Tagore, 'Bharat Mata' (1905)" },
      { name: "Kalighat pat paintings", detail: "Watercolour on paper sold near the Kali temple" },
      { name: "Indian Museum, Kolkata (1814)", detail: "One of Asia's oldest museums" },
      { name: "Government College of Art & Craft (1854)" },
    ],
    significance:
      "Kolkata is the crucible where Indian artists first formulated a self-conscious modern identity in dialogue — and argument — with colonial institutions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/960px-Victoria_Memorial_situated_in_Kolkata.jpg",
    imageAlt: "White marble Victoria Memorial hall reflected in its surrounding pool in Kolkata",
    imageCredit: "Wikimedia Commons — Victoria Memorial, Kolkata (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Bengal_School_of_Art",
  },
  {
    id: "shantiniketan",
    name: "Shantiniketan — Kala Bhavana",
    state: "West Bengal",
    region: "East India",
    latitude: 23.68,
    longitude: 87.6829,
    period: "Ashram founded 1863; Kala Bhavana established 1919",
    periodGroup: "Modern",
    categories: ["Bengal School", "Modern Indian Art"],
    mediums: ["Painting", "Sculpture", "Crafts"],
    artForms: ["Santiniketan school of art", "Site murals", "Batik and leather craft"],
    description:
      "Rabindranath Tagore's university town, where the Kala Bhavana art school shaped a humanist, nature-immersed modernism distinct from both academies and nationalism.",
    historicalContext:
      "Nandalal Bose led Kala Bhavana from 1922, training artists who drew equally on folk, Far-Eastern and European sources. Benode Behari Mukherjee's landmark murals and Ramkinkar Baij's open-air modern sculptures — 'Santhal Family' (1938) and 'Mill Call' — broke academic norms on campus itself. Rabindranath Tagore took up painting late in life (1928–41), producing a powerful expressionist body of work. UNESCO inscribed Santiniketan on the World Heritage List in 2023.",
    artists: [
      "Rabindranath Tagore (1861–1941), poet-painter and university founder",
      "Nandalal Bose (1882–1966), head of Kala Bhavana",
      "Benode Behari Mukherjee (1904–1980), muralist",
      "Ramkinkar Baij (1906–1980), sculptor",
      "K.G. Subramanyan (1924–2016), student who became teacher and theorist",
    ],
    artworks: [
      { name: "Ramkinkar Baij, 'Santhal Family' (1938)" },
      { name: "Benode Behari Mukherjee, Hindi Bhavana murals (1942)" },
      { name: "Nandalal Bose, Haripura posters (1938)" },
      { name: "Rabindranath Tagore's late ink drawings" },
    ],
    significance:
      "Shantiniketan remains India's most influential model of art education — fusing pedagogy, community life and environment into practice.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Shantiniketan_Bari_of_Rabindranath_Tagore.jpg/960px-Shantiniketan_Bari_of_Rabindranath_Tagore.jpg",
    imageAlt: "Traditional mud-walled building with curved roof at Shantiniketan associated with Rabindranath Tagore",
    imageCredit: "Wikimedia Commons — Shantiniketan, Rabindranath Tagore's Bari (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/1675/",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    latitude: 26.9124,
    longitude: 75.7873,
    period: "City founded 1727; Kachhwaha court painting flourished 18th–19th centuries",
    periodGroup: "Mughal & Rajput",
    categories: ["Rajput Art"],
    mediums: ["Painting", "Architecture", "Crafts"],
    artForms: ["Jaipur court miniatures", "Observatory instrument design", "Block-print textiles"],
    description:
      "India's planned 'Pink City', where grid-plan urbanism, astronomical instruments, Rajput court painting and living craft bazaars form one designed whole.",
    historicalContext:
      "Founded in 1727 by Sawai Jai Singh II — astronomer-king and builder of the Jantar Mantar observatories — Jaipur's court atelier absorbed Mughal naturalism into a Rajput idiom; named masters such as Sahibram appear in early court records. Landmarks include the Hawa Mahal (1799), the City Palace museums and Amer Fort (part of Rajasthan's UNESCO Hill Forts listing, 2013); Jantar Mantar is separately inscribed (2010).",
    artists: [
      "Early Jaipur masters recorded in court archives, including Sahibram",
      "Hereditary block-printing, blue-pottery and jewellery workshops of the old city",
    ],
    artworks: [
      { name: "Jaipur Ragamala and court portrait series" },
      { name: "Hawa Mahal (1799)" },
      { name: "Jantar Mantar observatory (1734)", detail: "UNESCO World Heritage Site" },
      { name: "Amer Fort and City Palace collections" },
    ],
    significance:
      "Jaipur shows court art embedded in functioning urban design — a case study in planned patronage rather than accretion.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/960px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    imageAlt: "Pink sandstone facade of Hawa Mahal in Jaipur with its tiers of small lattice windows",
    imageCredit: "Wikimedia Commons — Hawa Mahal east facade (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/1338/",
  },
  {
    id: "udaipur",
    name: "Udaipur — Mewar School",
    state: "Rajasthan",
    region: "North India",
    latitude: 24.5854,
    longitude: 73.7125,
    period: "Capital founded 1559; Mewar painting peaked 17th–19th centuries",
    periodGroup: "Mughal & Rajput",
    categories: ["Rajput Art"],
    mediums: ["Painting", "Architecture"],
    artForms: ["Mewar miniatures", "Palace chamber murals", "Ragamala painting"],
    description:
      "Lakeside capital of Mewar, whose courts produced boldly coloured narrative painting even while long resisting Mughal political control.",
    historicalContext:
      "After Chittor fell in 1568, Udai Singh II established Udaipur as the Sisodia capital. The royal suratkhana (painting office) produced large-format durbar scenes and beloved series: Sahibdin's mid-17th-century Ragamala and Bhagavata Purana sets, and Ghasi's panoramic early-19th-century court pictures. The City Palace grew cumulatively over four centuries along Lake Pichola.",
    artists: [
      "Sahibdin, leading Mewar master active mid-17th century",
      "Ghasi, court artist of the early 19th century",
      "Workshops of the Mewar suratkhana, largely anonymous",
    ],
    artworks: [
      { name: "Sahibdin's Ragamala series" },
      { name: "Ghasi's durbar and festival panoramas" },
      { name: "City Palace, Udaipur" },
      { name: "Mor Chowk peacock glass mosaics" },
      { name: "Jag Niwas (Lake Palace, 1746)" },
    ],
    significance:
      "Udaipur preserves the distinctly Rajput aesthetic — flat luminous colour, clear narrative — that persisted beside and against Mughal taste.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Udaipur_City_Palace.jpg/960px-Udaipur_City_Palace.jpg",
    imageAlt: "White and ochre facades of Udaipur's City Palace rising above Lake Pichola",
    imageCredit: "Wikimedia Commons — City Palace, Udaipur (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/City_Palace,_Udaipur",
  },
  {
    id: "kangra",
    name: "Kangra Valley — Pahari Painting",
    state: "Himachal Pradesh",
    region: "North India",
    latitude: 32.099,
    longitude: 76.275,
    period: "Flourished c. 1780 – 1820s",
    periodGroup: "Mughal & Rajput",
    categories: ["Pahari Art", "Rajput Art"],
    mediums: ["Painting"],
    artForms: ["Kangra kalam miniatures", "Guler–Kangra atelier lineage", "Illustrated poetry series"],
    description:
      "Valley courts of the Punjab Hills where the delicate 'Kangra kalam' brought Indian miniature painting to its lyrical summit.",
    historicalContext:
      "Pahari painting evolved from bold Basohli towards refined naturalism at Guler, where the family workshop of Pandit Seu — sons Manaku and Nainsukh — set a new standard. Under Raja Sansar Chand (r. c. 1775–1823), Kangra became the centre of prolific illustrated series of Jayadeva's Gita Govinda, the Bhagavata Purana and the Baramasa. Scholarly attribution of individual sheets remains an active field of debate.",
    artists: [
      "Manaku of Guler, active c. 1730–1760s",
      "Nainsukh of Guler (c. 1710–1778), famed portraitist of Raja Balwant Singh of Jasrota",
      "Descendants of the Seu family workshop, active at Kangra",
    ],
    artworks: [
      { name: "Gita Govinda series (c. 1780)", detail: "Celebrated Kangra illustration of Jayadeva's poem" },
      { name: "Baramasa and Ragamala series" },
      { name: "Nainsukh's portraits of Raja Balwant Singh of Jasrota" },
    ],
    significance:
      "Kangra painting is widely regarded as the poetic high point of Indian miniature art — tender line, misted distance and idealised devotion.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Attributed_to_Khushala%2C_Indian%2C_active_late_18th_century_-_The_Gods_Sing_and_Dance_for_Shiva_and_Parvati_-_Google_Art_Project.jpg/960px-Attributed_to_Khushala%2C_Indian%2C_active_late_18th_century_-_The_Gods_Sing_and_Dance_for_Shiva_and_Parvati_-_Google_Art_Project.jpg",
    imageAlt: "Kangra miniature painting of gods singing and dancing before Shiva and Parvati, attributed to Khushala",
    imageCredit: "Wikimedia Commons — Kangra painting attributed to Khushala (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Kangra_painting",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West India",
    latitude: 23.0225,
    longitude: 72.5714,
    period: "Founded 1411; Jain manuscript painting 14th–16th centuries onward; modern design era from 1950s",
    periodGroup: "Medieval",
    categories: ["Jain Art", "Medieval Indian Art", "Modern Indian Art"],
    mediums: ["Painting", "Architecture", "Crafts"],
    artForms: ["Western Indian Jain manuscript illumination", "Gujarati Sultanate architecture", "Textile design"],
    description:
      "Textile metropolis where illuminated Jain manuscripts, Sultanate mosques and twentieth-century modernist architecture layer into one city.",
    historicalContext:
      "Founded by Ahmad Shah I in 1411, Ahmedabad boasts the Jama Masjid (1424) and the Sidi Saiyyed Mosque's celebrated stone jali (1572–73). Wealthy Śvetāmbara merchant guilds financed illuminated Kalpasutra and Kalakacharya manuscripts in the distinctive western-Indian style with profile eyes. In the twentieth century mill wealth attracted Le Corbusier and Louis Kahn, and nurtured the National Institute of Design (1961) and architect B.V. Doshi's Pritzker-winning practice.",
    artists: [
      "Anonymous Jain scribe-painters patronised by merchant guilds",
      "Balkrishna Doshi (1927–2023), Pritzker Prize laureate, Ahmedabad-based",
      "Le Corbusier and Louis Kahn, builders of landmark modern buildings in the city",
    ],
    artworks: [
      { name: "Kalpasutra manuscript illuminations" },
      { name: "Sidi Saiyyed Mosque jali (1572–73)", detail: "Iconic 'tree of life' lattice" },
      { name: "Jama Masjid, Ahmedabad (1424)" },
      { name: "Calico Museum of Textiles (1949)" },
      { name: "Mill Owners' Association Building (1954)" },
    ],
    significance:
      "Ahmedabad uniquely connects manuscript-atelier traditions to modern design education — continuity of craft across half a millennium.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sidi_Saiyyed_Mosque%2C_Ahmedabad.jpg/960px-Sidi_Saiyyed_Mosque%2C_Ahmedabad.jpg",
    imageAlt: "Arched stone facade of the Sidi Saiyyed Mosque in Ahmedabad with intricate pierced jali screens",
    imageCredit: "Wikimedia Commons — Sidi Saiyyed Mosque, Ahmedabad (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Ahmedabad",
  },
  {
    id: "vadodara",
    name: "Vadodara (Baroda) — Faculty of Fine Arts",
    state: "Gujarat",
    region: "West India",
    latitude: 22.3072,
    longitude: 73.1812,
    period: "Faculty of Fine Arts founded 1950",
    periodGroup: "Modern",
    categories: ["Modern Indian Art", "Contemporary Indian Art"],
    mediums: ["Painting", "Sculpture"],
    artForms: ["Baroda School narrative figuration", "Printmaking", "Art criticism and theory"],
    description:
      "University city whose MSU Faculty of Fine Arts seeded the influential 'Baroda School' of post-Independence Indian art.",
    historicalContext:
      "Established in 1950 under painter N.S. Bendre, the faculty paired studio rigour with theory and writing. Teachers and alumni — K.G. Subramanyam, Gulammohammed Sheikh, Jeram Patel, and the self-taught Bhupen Khakhar — reshaped Indian figuration, narrative painting and printmaking. Baroda also pioneered serious art criticism within an Indian art school, and the Gaekwad-era Maharaja Fateh Singh Museum preserves royal collections including Raja Ravi Varma oils.",
    artists: [
      "N.S. Bendre (1910–1992), founding dean",
      "K.G. Subramanyan (1924–2016), painter-theorist",
      "Gulammohammed Sheikh (b. 1937), narrative painter",
      "Bhupen Khakhar (1934–2003), barbershop-to-canvas chronicler of ordinary life",
      "Jeram Patel (1930–2016), abstraction and ink drawing",
    ],
    artworks: [
      { name: "Bhupen Khakhar's early popular-culture paintings" },
      { name: "Gulammohammed Sheikh's cityscape narratives" },
      { name: "MSU printmaking studio projects" },
      { name: "Maharaja Fateh Singh Museum collection" },
    ],
    significance:
      "Baroda proved that modern Indian art could be taught, argued and theorised locally — producing artists who still shape discourse today.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lakshmi_Vilas_Palace%2C_Vadodara.jpg/960px-Lakshmi_Vilas_Palace%2C_Vadodara.jpg",
    imageAlt: "Grand domed facade of Lakshmi Vilas Palace in Vadodara amid gardens",
    imageCredit: "Wikimedia Commons — Lakshmi Vilas Palace, Vadodara (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Maharaja_Sayajirao_University_of_Baroda",
  },
  {
    id: "thanjavur",
    name: "Thanjavur (Tanjore)",
    state: "Tamil Nadu",
    region: "South India",
    latitude: 10.787,
    longitude: 79.1378,
    period: "Brihadisvara consecrated 1010 CE; Tanjore painting 17th–19th centuries",
    periodGroup: "Medieval",
    categories: ["South Indian Art", "Hindu Temple Art", "Medieval Indian Art"],
    mediums: ["Sculpture", "Architecture", "Painting"],
    artForms: ["Chola bronze casting (lost wax)", "Dravida vimana architecture", "Gesso-gold Tanjore painting"],
    description:
      "Imperial Chola capital holding the Brihadisvara temple and the world-renowned tradition of Chola bronze casting.",
    historicalContext:
      "Rajaraja I consecrated the Brihadisvara temple in 1010 CE; its 66-metre vimana was inscribed by UNESCO in 1987 as part of the Great Living Chola Temples. Endowment inscriptions record dozens of bronze images gifted to the shrine, and Chola panchaloha bronzes — above all the Nataraja — set canonical ideals of Indian sculpture. Under Maratha rule (1674–1855), gesso-gold Tanjore painting of deities and court portraits flourished, notably under Serfoji II.",
    artists: [
      "Anonymous sthapatis (master casters) of the Chola imperial bronze workshops",
      "Maratha-period devotional painters of Thanjavur, largely unrecorded by name",
    ],
    artworks: [
      { name: "Brihadisvara Temple (1010)", detail: "UNESCO World Heritage Site" },
      { name: "Chola Nataraja bronzes" },
      { name: "Monolithic Nandi bull of the temple" },
      { name: "Thanjavur Maratha Palace and Sarasvati Mahal library" },
      { name: "Tanjore gilded panel paintings" },
    ],
    significance:
      "Thanjavur defines what 'classical South Indian art' means across sculpture, architecture and painting simultaneously.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg/960px-Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg",
    imageAlt: "Towering granite vimana of the Brihadisvara temple in Thanjavur lit at dusk",
    imageCredit: "Wikimedia Commons — Brihadisvara Temple, Thanjavur (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/250/",
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram (Mamallapuram)",
    state: "Tamil Nadu",
    region: "South India",
    latitude: 12.6208,
    longitude: 80.1946,
    period: "c. 630 – 728 CE",
    periodGroup: "Ancient",
    categories: ["South Indian Art", "Hindu Temple Art", "Ancient Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: ["Pallava rock-cut rathas", "Open-air relief carving", "Structural shore temple"],
    description:
      "Pallava port city of open-air rock reliefs and monolithic rathas — effectively an open-air laboratory of seventh-century stone experimentation.",
    historicalContext:
      "Under Mahendravarman I and Narasimhavarman I Mamalla, Pallava carvers progressed from cave shrines to free-standing monoliths and finally structural temples. 'Arjuna's Penance' (Descent of the Ganges) ranks among the largest open-air reliefs in the world, while the Shore Temple presages later Dravidian building. UNESCO World Heritage Site since 1984; local shilpi lineages still carve granite nearby today.",
    artists: [
      "Pallava royal ateliers — individual sculptors unnamed in surviving records",
      "Hereditary stone-carving families of Mamallapuram continuing the tradition",
    ],
    artworks: [
      { name: "Descent of the Ganges / Arjuna's Penance relief" },
      { name: "Pancha Rathas", detail: "Five monolithic temple prototypes" },
      { name: "Shore Temple" },
      { name: "Krishna Mandapa and Mahishasuramardini cave" },
    ],
    significance:
      "Mahabalipuram captures the experimental moment when south Indian architecture leapt from cave to structure — evolution frozen in granite.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Shore_Temple_-Mamallapuram_-Tamil_Nadu_-N-TN-C55.jpg/960px-Shore_Temple_-Mamallapuram_-Tamil_Nadu_-N-TN-C55.jpg",
    imageAlt: "Tiered granite towers of the Shore Temple at Mahabalipuram beside green lawns",
    imageCredit: "Wikimedia Commons — Shore Temple, Mamallapuram (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/249/",
  },
  {
    id: "chennai",
    name: "Chennai — Madras Movement",
    state: "Tamil Nadu",
    region: "South India",
    latitude: 13.0827,
    longitude: 80.2707,
    period: "Fort St. George 1644; Madras School of Art 1850; Cholamandal Artists' Village 1966",
    periodGroup: "Colonial",
    categories: ["Modern Indian Art", "South Indian Art"],
    mediums: ["Painting", "Sculpture"],
    artForms: ["Madras Movement modernism", "Cholamandal commune practice", "Bronze scholarship"],
    description:
      "First major British settlement on the Coromandel coast and home of the Madras Movement and India's longest-running artists' commune.",
    historicalContext:
      "The Government Museum, Madras (1851) holds an outstanding collection of Amaravati sculptures and Chola bronzes that shaped art-historical teaching in the south. The Government College of Arts & Crafts (est. 1850) nurtured K.C.S. Paniker, who in 1966 founded the Cholamandal Artists' Village on the city's edge — an experiment in artist-run living and exhibiting that continues today.",
    artists: [
      "K.C.S. Paniker (1911–1977), leader of the Madras Movement",
      "S. Dhanapal, sculptor and educator",
      "Cholamandal Artists' Village community",
    ],
    artworks: [
      { name: "Paniker's 'Words and Symbols' series" },
      { name: "Government Museum bronze gallery", detail: "Chola & Amaravati holdings" },
      { name: "Fort St. George (1644)" },
      { name: "Cholamandal open-air sculpture garden" },
    ],
    significance:
      "Chennai bridges colonial-era museums and autonomous modern art — south India's institutional hinge.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fort_St._George%2C_Chennai_2.jpg/960px-Fort_St._George%2C_Chennai_2.jpg",
    imageAlt: "White classical columned facade of Fort St. George in Chennai under a clear sky",
    imageCredit: "Wikimedia Commons — Fort St. George, Chennai (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Cholamandal_Artists%27_Village",
  },
  {
    id: "hampi",
    name: "Hampi — Vijayanagara",
    state: "Karnataka",
    region: "South India",
    latitude: 15.335,
    longitude: 76.461,
    period: "Imperial capital c. 1336 – 1565 CE",
    periodGroup: "Medieval",
    categories: ["Hindu Temple Art", "Medieval Indian Art", "South Indian Art"],
    mediums: ["Architecture", "Sculpture"],
    artForms: ["Vijayanagara Dravida temples", "Royal bazaar planning", "Court relief carving"],
    description:
      "Ruins of Vijayanagara — once among the world's largest cities — scattered across a surreal boulder-strewn landscape on the Tungabhadra.",
    historicalContext:
      "Capital of the Vijayanagara empire founded in 1336, Hampi peaked under Krishnadevaraya (r. 1509–1529) before the catastrophic defeat of 1565. The Virupaksha temple has remained in continuous worship; the Vittala temple complex adds the famous stone chariot and musical pillars. Sixteenth-century travellers such as Domingo Paes described its wealth and scale. UNESCO World Heritage Site since 1986.",
    artists: [
      "Imperial workshop system under the Sangama, Saluva and Tuluva dynasties — craftsmen anonymous",
    ],
    artworks: [
      { name: "Vittala Temple and stone chariot" },
      { name: "Virupaksha Temple", detail: "In continuous worship since foundation" },
      { name: "Hazara Rama Temple royal reliefs" },
      { name: "Elephant Stables and Lotus Mahal", detail: "Royal centre's Indo-Islamic hybrid buildings" },
    ],
    significance:
      "Hampi is the grandest surviving imperial urban plan of medieval south India, integrating sacred, royal and commercial space.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/960px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg",
    imageAlt: "Tall gopuram tower of the Virupaksha temple at Hampi against a bright sky",
    imageCredit: "Wikimedia Commons — Virupaksha Temple gopuram, Hampi (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/241/",
  },
  {
    id: "mysore",
    name: "Mysore",
    state: "Karnataka",
    region: "South India",
    latitude: 12.2958,
    longitude: 76.6394,
    period: "Wodeyar painting tradition 17th–19th centuries (revived early 1800s)",
    periodGroup: "Mughal & Rajput",
    categories: ["South Indian Art", "Hindu Temple Art"],
    mediums: ["Painting", "Architecture"],
    artForms: ["Mysore gesso-gold painting", "Dasara pageantry", "Iconographic codification"],
    description:
      "Wodeyar royal seat preserving the delicate Mysore school of gesso-gold devotional painting and the annual Dasara arts festival.",
    historicalContext:
      "Mysore painting descends from Vijayanagara artist lineages dispersed after 1565 and was revived under Krishnaraja Wodeyar III (1799–1868), whose illustrated compendium Sritattvanidhi codified deity iconography for painters. Works combine natural pigments with low-relief gesso lifted by gold leaf. The Amba Vilas Palace (rebuilt 1897–1912) stages the Dasara festival, which continues royal artistic patronage in public form.",
    artists: [
      "Hereditary artists descended from Vijayanagara lineages",
      "Krishnaraja Wodeyar III, patron-editor of the Sritattvanidhi manual",
      "K. Venkatappa (1887–1967), Mysore-born painter and veena virtuoso",
    ],
    artworks: [
      { name: "Sritattvanidhi illustrated compendium" },
      { name: "Mysore gesso panel paintings of deities" },
      { name: "Amba Vilas (Mysore) Palace" },
      { name: "Venkatappa Art Gallery collection" },
    ],
    significance:
      "Mysore kept court painting alive as continuous household practice — its iconography literally written down by the crown for artists to follow.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/960px-Mysore_Palace_Morning.jpg",
    imageAlt: "Silver-domed Mysore Palace with ornate arches photographed in morning light",
    imageCredit: "Wikimedia Commons — Mysore Palace Morning (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Mysore_painting",
  },
  {
    id: "shravanabelagola",
    name: "Shravanabelagola",
    state: "Karnataka",
    region: "South India",
    latitude: 12.8529,
    longitude: 76.488,
    period: "Gommata statue consecrated c. 981 CE",
    periodGroup: "Medieval",
    categories: ["Jain Art", "South Indian Art", "Medieval Indian Art"],
    mediums: ["Sculpture", "Architecture"],
    artForms: ["Jain monolithic sculpture", "Basti temple architecture", "Mahamastakabhisheka ritual"],
    description:
      "Jain pilgrimage hill town crowned by the seventeen-metre monolithic Gommateshwara (Bahubali) statue, carved directly from a granite outcrop.",
    historicalContext:
      "The statue was commissioned in 981 CE by the Western Ganga general-minister Chavundaraya and remains one of the largest free-standing monolithic figures in the world. Chandragiri hill is associated by tradition with Bhadrabahu, teacher of Chandragupta Maurya, and bears inscriptions spanning a millennium. Every twelve years the Mahamastakabhisheka anointing ceremony draws pilgrims worldwide.",
    artists: [
      "Commissioned by Chavundaraya; the sculptors' names are unrecorded",
    ],
    artworks: [
      { name: "Gommateshwara Bahubali monolith (981)" },
      { name: "Chandragiri hill bastis and inscriptions" },
      { name: "Vindhyagiri temple complex" },
      { name: "Mahamastakabhisheka festival imagery" },
    ],
    significance:
      "Shravanabelagola is the emblematic monument of Jain art in southern India — ascetic serenity achieved at monumental scale.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shravanabelagola_Hillview.jpg/960px-Shravanabelagola_Hillview.jpg",
    imageAlt: "View of the rocky hill and temple complex of Shravanabelagola with surrounding town and lake",
    imageCredit: "Wikimedia Commons — Shravanabelagola Hillview (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Shravanabelagola",
  },
  {
    id: "kochi",
    name: "Kochi — Mattancherry Palace Murals",
    state: "Kerala",
    region: "South India",
    latitude: 9.959,
    longitude: 76.258,
    period: "Palace murals c. 16th century; Kerala mural lineage continues today",
    periodGroup: "Medieval",
    categories: ["South Indian Art", "Hindu Temple Art", "Medieval Indian Art"],
    mediums: ["Painting", "Architecture"],
    artForms: ["Kerala temple murals", "Ramayana cycles", "Biennale-era contemporary practice"],
    description:
      "Portuguese-era palace housing Kerala's finest surviving mural cycle — in a harbour city that now hosts India's leading contemporary art biennale.",
    historicalContext:
      "Mattancherry Palace, presented to local rulers by the Portuguese in the mid-16th century, preserves extensive Ramayana murals in the characteristic Kerala style — sinuous contour, mineral pigment and theatre-like staging rooted in temple practice described in medieval shilpa texts. Kerala-born Raja Ravi Varma (1848–1906) later fused Indian subjects with European academic realism. Since 2012 the Kochi-Muziris Biennale has made the port a contemporary hub.",
    artists: [
      "Anonymous temple-painting lineages following medieval Kerala shilpa conventions",
      "Raja Ravi Varma (1848–1906), born Kilimanoor, Kerala",
      "Bose Krishnamachari, founding president of the Kochi-Muziris Biennale",
    ],
    artworks: [
      { name: "Mattancherry Ramayana mural cycle" },
      { name: "Comparable murals at Padmanabhapuram Palace" },
      { name: "Ravi Varma oils, e.g. 'Shakuntala' (1870s)" },
      { name: "Kochi-Muziris Biennale editions (since 2012)" },
    ],
    significance:
      "Kochi links a medieval mural idiom to academic realism and to India's foremost contemporary art event — three eras in one harbour.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Mattancherry_Palace_DSC_0899.JPG/960px-Mattancherry_Palace_DSC_0899.JPG",
    imageAlt: "Sloped tiled roof and white walls of Mattancherry Palace in Kochi framed by palms",
    imageCredit: "Wikimedia Commons — Mattancherry Palace, Kochi (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Mattancherry_Palace",
  },
  {
    id: "hyderabad",
    name: "Hyderabad — Deccani Painting",
    state: "Telangana",
    region: "South India",
    latitude: 17.385,
    longitude: 78.4867,
    period: "Qutb Shahi rule 1512–1687; Deccani painting 16th–17th centuries",
    periodGroup: "Mughal & Rajput",
    categories: ["Medieval Indian Art", "Contemporary Indian Art"],
    mediums: ["Painting", "Architecture"],
    artForms: ["Deccani miniature painting", "Qutb Shahi architecture", "Modern Telangana figuration"],
    description:
      "Pearl city of the Deccan, whose Golconda and Asaf Jahi courts evolved a sensuous, dreamlike school of miniature painting distinct from Mughal classicism.",
    historicalContext:
      "Muhammad Quli Qutb Shah founded Hyderabad around the Charminar in 1591. Golconda painting favoured luminous colour, gold skies and lyrical landscapes, absorbing Persian and African (Habshi) connections of the Deccan courts; several signed Deccani masters remain only partially identified. Later Nizamic collections now fill the Salar Jung Museum — one of India's largest single-collector museums — while contemporary Telangana identity appears in Thota Vaikuntam's villagers.",
    artists: [
      "Deccani atelier masters, several anonymous or partially identified",
      "Thota Vaikuntam (b. 1942), painter of rural Telangana figures",
    ],
    artworks: [
      { name: "Charminar (1591)" },
      { name: "Golconda court portraits and night-scene miniatures" },
      { name: "Salar Jung Museum collections" },
      { name: "Chowmahalla Palace" },
      { name: "Qutb Shahi Tombs complex" },
    ],
    significance:
      "Hyderabad proves that court art in India was plural: the Deccan equalled the Mughal north in invention while following its own aesthetic logic.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/960px-Charminar_Hyderabad_1.jpg",
    imageAlt: "Four minarets and arches of the Charminar monument in central Hyderabad",
    imageCredit: "Wikimedia Commons — Charminar, Hyderabad (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Deccan_painting",
  },
  {
    id: "amaravati",
    name: "Amaravati Mahachaitya",
    state: "Andhra Pradesh",
    region: "South India",
    latitude: 16.54,
    longitude: 80.36,
    period: "Enlarged c. 2nd century BCE – 3rd century CE",
    periodGroup: "Ancient",
    categories: ["Buddhist Art", "Ancient Indian Art", "South Indian Art"],
    mediums: ["Sculpture", "Architecture"],
    artForms: ["Stupa drum friezes", "White limestone narrative relief", "Railings and ayaka platforms"],
    description:
      "Great stupa of the Andhra country, famed for flowing white-limestone carvings that narrate the Buddha's life story in motion-filled relief.",
    historicalContext:
      "The Mahachaitya was enlarged under Satavahana rule; its drum slabs and railings move from aniconic symbols toward direct narrative depiction of the Buddha. Surveyed by Colonel Colin Mackenzie in 1797, the monument was quarried and dispersed over the 19th century — major holdings now sit in Chennai, London and elsewhere, which complicates full reconstruction and makes Amaravati a key case in provenance studies.",
    artists: [
      "Satavahana workshop carvers — anonymous, though their style is unmistakably regional",
      "Recorded in 1797 by surveyor Colin Mackenzie, beginning its modern recovery history",
    ],
    artworks: [
      { name: "Great Departure drum slab" },
      { name: "Rail coping with worshippers around stupas" },
      { name: "Life-of-Buddha narrative panels" },
      { name: "Reconstruction models at Chennai Government Museum and the British Museum" },
    ],
    significance:
      "Amaravati is the southern counterpart to Sanchi — and its diaspora collections teach essential lessons about how heritage moves and is lost.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/British_Museum_Asia_14.jpg/960px-British_Museum_Asia_14.jpg",
    imageAlt: "Carved limestone Amaravati railing slab with lotus medallions displayed in a museum case",
    imageCredit: "Wikimedia Commons — Amaravati sculpture, British Museum (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Amaravati_Stupa",
  },
  {
    id: "agra",
    name: "Agra — Taj Mahal & Mughal Agra",
    state: "Uttar Pradesh",
    region: "North India",
    latitude: 27.1751,
    longitude: 78.0421,
    period: "Mughal zenith 1556 – 1658",
    periodGroup: "Mughal & Rajput",
    categories: ["Mughal Art"],
    mediums: ["Architecture"],
    artForms: ["Mughal funerary architecture", "Pietre dura inlay", "Charbagh garden design"],
    description:
      "Imperial Mughal capital between Akbar and Shah Jahan, holding the Taj Mahal — the most recognised monument in India.",
    historicalContext:
      "Akbar rebuilt Agra Fort (1565–73) in red sandstone; Jahangir's era produced the exquisite tomb of Itimad-ud-Daulah (1622–28), which introduced pietre dura. Shah Jahan's Taj Mahal (1632–48) perfected the charbagh funerary form in white marble; contemporary sources attribute overall design leadership to Ustad Ahmad Lahauri. Agra's imperial kitabkhana fed the same visual culture into manuscript painting.",
    artists: [
      "Ustad Ahmad Lahauri, chief architect attributed for the Taj Mahal",
      "Mir Sayyid Ali and Abd al-Samad, leaders of the early imperial painting atelier",
      "Countless named and unnamed craftsmen recorded in Mughal administrative documents",
    ],
    artworks: [
      { name: "Taj Mahal (1632–48)", detail: "UNESCO World Heritage Site" },
      { name: "Agra Fort (UNESCO)" },
      { name: "Itimad-ud-Daulah tomb ('Baby Taj')" },
      { name: "Fatehpur Sikri (nearby, 1571–85, UNESCO)" },
    ],
    significance:
      "Agra defines the Mughal synthesis — Persian, Timurid and Indic craft resolved at maximum polish, and still the global emblem of Indian art.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/960px-Taj_Mahal_%28Edited%29.jpeg",
    imageAlt: "White marble dome and minarets of the Taj Mahal reflected in the long garden water channel",
    imageCredit: "Wikimedia Commons — Taj Mahal (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/252/",
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi (NCT)",
    region: "North India",
    latitude: 28.6129,
    longitude: 77.2295,
    period: "Sultanate 1206–1526; Shahjahanabad 1639–48; Lutyens' New Delhi inaugurated 1931",
    periodGroup: "Mughal & Rajput",
    categories: ["Mughal Art", "Modern Indian Art"],
    mediums: ["Architecture", "Painting"],
    artForms: ["Sultanate and Mughal architecture", "Imperial atelier painting", "Colonial city planning"],
    description:
      "Successive imperial capitals layered from the Delhi Sultanate through the Mughals to Lutyens' New Delhi — nearly every period on this map leaves a landmark here.",
    historicalContext:
      "The Qutb Minar was begun in 1199; Humayun's Tomb (commissioned 1565 by his widow Bega Begum) provided the prototype for the Taj Mahal; Shah Jahan's Red Fort and Jama Masjid crown Shahjahanabad. New Delhi was designed by Edwin Lutyens and Herbert Baker and inaugurated in 1931. Today the National Museum (1949) and NGMA (1954) hold survey collections spanning Company painting to Amrita Sher-Gil.",
    artists: [
      "Edwin Lutyens and Herbert Baker, planners of New Delhi",
      "Imperial Mughal ateliers of the Shah Jahan era",
      "Amrita Sher-Gil (1913–41), represented prominently in NGMA collections",
    ],
    artworks: [
      { name: "Qutb Minar complex (1199 onward)", detail: "UNESCO World Heritage Site" },
      { name: "Humayun's Tomb (UNESCO, 1993)" },
      { name: "Red Fort (UNESCO, 2007)" },
      { name: "National Museum & NGMA collections" },
      { name: "Rashtrapati Bhavan (1929)" },
    ],
    significance:
      "Delhi is the pan-Indian crossroads — a single city where Sultanate, Mughal, colonial and modern art histories visibly stack upon one another.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tomb_of_Humayun%2C_Delhi.jpg/960px-Tomb_of_Humayun%2C_Delhi.jpg",
    imageAlt: "Red sandstone and white marble terraces of Humayun's Tomb in Delhi with formal gardens",
    imageCredit: "Wikimedia Commons — Tomb of Humayun, Delhi (openly licensed)",
    learnMoreUrl: "https://whc.unesco.org/en/list/232/",
  },
  {
    id: "alchi",
    name: "Alchi Monastery — Ladakh",
    state: "Ladakh (UT)",
    region: "North India",
    latitude: 34.227,
    longitude: 76.199,
    period: "Wall paintings c. 11th – 12th centuries CE",
    periodGroup: "Medieval",
    categories: ["Buddhist Art", "Medieval Indian Art"],
    mediums: ["Painting", "Sculpture", "Architecture"],
    artForms: ["Kashmiri-influenced Buddhist murals", "Clay and stucco sculpture", "Chorten architecture"],
    description:
      "Himalayan monastery complex on the Indus preserving Kashmir-influenced Indo-Buddhist murals unlike anything else surviving in India.",
    historicalContext:
      "Tradition links Alchi's foundations to the great translator Rinchen Zangpo (c. 958–1055). Its Sumtsek and Dukhang retain eleventh–twelfth-century wall paintings blending Kashmiri, Central Asian and Tibetan styles, alongside rare dated inscriptions. At roughly 3,100 metres in Ladakh, Alchi marks the northernmost reach of Indian artistic influence mapped by this project.",
    artists: [
      "Monastic painters trained in Kashmiri idioms — names unrecorded",
      "Foundation traditionally attributed to lotsava Rinchen Zangpo",
    ],
    artworks: [
      { name: "Sumtsek three-storey chapel murals" },
      { name: "Dukhang assembly hall paintings" },
      { name: "Clay bodhisattva sculptures" },
      { name: "Carved wooden porch elements" },
    ],
    significance:
      "Alchi demonstrates that Indian art radiated across the Himalaya — its murals preserve Kashmiri classicism largely lost in the Kashmir Valley itself.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alchi_Monastery_01.jpg/960px-Alchi_Monastery_01.jpg",
    imageAlt: "Whitewashed Himalayan chapel with painted wooden balcony at Alchi monastery in Ladakh",
    imageCredit: "Wikimedia Commons — Alchi Monastery (openly licensed)",
    learnMoreUrl: "https://en.wikipedia.org/wiki/Alchi",
  },
];

/** Defensive guard: drop malformed entries so one bad row cannot crash the map. */
export function getValidLocations(): ArtLocation[] {
  return ART_LOCATIONS.filter(
    (l) =>
      Number.isFinite(l.latitude) &&
      Number.isFinite(l.longitude) &&
      Math.abs(l.latitude) <= 90 &&
      Math.abs(l.longitude) <= 180 &&
      Boolean(l.id && l.name)
  );
}

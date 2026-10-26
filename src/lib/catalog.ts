/**
 * Product catalog for /products.
 *
 * Domains and products for the Radiora concept. Partner brand names are fictional. Descriptions stay
 * at the level of what each product is for and its headline features. Availability is always "on request".
 */

export type ArtKind =
  | "calibrator"
  | "uptake"
  | "lift"
  | "mask"
  | "board"
  | "oral"
  | "vial"
  | "kit"
  | "dosimeter"
  | "survey"
  | "beacon"
  | "probe"
  | "reader"
  | "cards"
  | "tank"
  | "array"
  | "software"
  | "chamber"
  | "cylinder"
  | "mammo"
  | "nm"
  | "flood"
  | "capsule"
  | "ipg"
  | "lead";

export type ModelKind = "calibrator" | "immobilization" | "molecule" | "dosimetry" | "phantom" | "source" | "neuro";

export interface CatalogProduct {
  id: string;
  name: string;
  brand: string;
  sub: string;
  summary: string;
  points: string[];
  art: ArtKind;
  /** Short text printed on the illustration (a screen readout or label). */
  tag?: string;
}

export interface CatalogDomain {
  id: string;
  name: string;
  /** One-line positioning for the domain header. */
  lead: string;
  summary: string;
  brands: string[];
  model: ModelKind;
  modelLabel: string;
  subs: string[];
  products: CatalogProduct[];
}

export const CATALOG: CatalogDomain[] = [
  {
    id: "nuclear-medicine",
    name: "Nuclear Medicine",
    lead: "Measure every dose before it reaches the patient.",
    summary:
      "Dose calibrators, well counters and thyroid uptake systems from Calvatec for hot labs and nuclear medicine departments.",
    brands: ["Calvatec"],
    model: "calibrator",
    modelLabel: "Dose calibrator well chamber",
    subs: ["Dose calibrators", "Thyroid uptake", "Accessories"],
    products: [
      {
        id: "crc-55tr",
        name: "CRC-55tR Dose Calibrator",
        brand: "Calvatec",
        sub: "Dose calibrators",
        summary:
          "Dose calibrator with a high-pressure ion chamber and a menu-driven colour touch-screen for measuring radiopharmaceutical activity.",
        points: ["Colour touch-screen interface", "Automated quality-control tests and self-diagnostics", "Reference sources decay-corrected automatically"],
        art: "calibrator",
        tag: "CRC-55tR",
      },
      {
        id: "crc-55tw",
        name: "CRC-55tW Dose Calibrator & Well Counter",
        brand: "Calvatec",
        sub: "Dose calibrators",
        summary:
          "The CRC-55tR combined with a drilled-well sodium iodide detector for low-activity counting such as wipe tests.",
        points: ["High-sensitivity NaI well counter", "256-channel MCA for spectrum identification", "Searchable, archived wipe-test reports"],
        art: "calibrator",
        tag: "CRC-55tW",
      },
      {
        id: "captus-4000e",
        name: "Captus 4000e Thyroid Uptake System",
        brand: "Calvatec",
        sub: "Thyroid uptake",
        summary:
          "PC-based thyroid uptake system on a mobile stand, with an adjustable articulating collimator arm and a large touch-screen.",
        points: ["Thyroid uptake and bioassay modules", "1024-channel MCA with automated QA", "Optional well counter and DICOM interface"],
        art: "uptake",
      },
      {
        id: "cap-lift",
        name: "CAP-LIFT & Copper Liner",
        brand: "Calvatec",
        sub: "Accessories",
        summary:
          "Dose calibrator accessories: a hands-free dose lift for lowering samples into the chamber, and a copper liner for I-123 measurements.",
        points: ["Hands-free dose measurement", "Copper liner steadies I-123 readings"],
        art: "lift",
      },
    ],
  },
  {
    id: "radiotherapy",
    name: "Radiotherapy",
    lead: "Hold every patient in exactly the same place, fraction after fraction.",
    summary:
      "Thermoplastic masks, positioning boards and oral devices from Orvane and Kynex for immobilization during external beam radiotherapy.",
    brands: ["Orvane", "Kynex"],
    model: "immobilization",
    modelLabel: "Thermoplastic mask on a positioning board",
    subs: ["Thermoplastic masks", "Positioning systems", "Oral devices"],
    products: [
      {
        id: "efficast",
        name: "Efficast Thermoplastic Masks",
        brand: "Orvane",
        sub: "Thermoplastic masks",
        summary:
          "Thermoplastic masks for head, head & neck and head-neck-shoulder immobilization, including hybrid and pediatric configurations.",
        points: ["Head, neck and shoulder versions", "Hybrid masks for added accuracy", "Pediatric configurations"],
        art: "mask",
        tag: "Efficast",
      },
      {
        id: "embrace",
        name: "Embrace Thermoplastic",
        brand: "Kynex",
        sub: "Thermoplastic masks",
        summary:
          "Low-melt thermoplastic for custom head and neck immobilization, supplied on U-frames, VersaBoard and S-type frames and as sheets.",
        points: ["Low-melt material", "U-frame, VersaBoard and S-type frames", "Thermoplastic sheets"],
        art: "mask",
        tag: "Embrace",
      },
      {
        id: "aio-3",
        name: "AIO Solution 3.0",
        brand: "Orvane",
        sub: "Positioning systems",
        summary:
          "Modular all-in-one positioning system that pairs Orvane masks with head supports and high-precision hardware.",
        points: ["Adapts to each centre's workflow", "Head supports with cranial stop", "Reproducible across treatment techniques"],
        art: "board",
        tag: "AIO 3.0",
      },
      {
        id: "orvane-body",
        name: "SRS, SBRT & Body Solutions",
        brand: "Orvane",
        sub: "Positioning systems",
        summary:
          "Orvane immobilization for SRS, SBRT, supine and prone breast, pelvic and abdominal treatments and extremities.",
        points: ["SRS and SBRT", "Breast, pelvis and abdomen", "Extremities"],
        art: "board",
        tag: "SBRT",
      },
      {
        id: "versaboard-ultra",
        name: "VersaBoard Ultra",
        brand: "Kynex",
        sub: "Positioning systems",
        summary: "Head, neck and brain positioning board built for IMRT, IGRT, SRT and SRS treatments.",
        points: ["Head, neck and brain", "IMRT, IGRT, SRT and SRS"],
        art: "board",
        tag: "VersaBoard",
      },
      {
        id: "omni-v",
        name: "Omni V SBRT Positioning System",
        brand: "Kynex",
        sub: "Positioning systems",
        summary:
          "SBRT body positioning that accounts for respiratory motion and patient comfort, with a Breath Hold accessory for lung and upper-abdomen treatments.",
        points: ["Designed around respiratory motion", "Components bought as needed", "Breath Hold accessory"],
        art: "board",
        tag: "Omni V",
      },
      {
        id: "truguard",
        name: "TruGuard Oral Positioning Device",
        brand: "Kynex",
        sub: "Oral devices",
        summary:
          "Custom oral device that positions the tongue and jaw reproducibly, separating healthy tissue during head and neck external beam therapy.",
        points: ["Reproducible tongue and jaw position", "Spares sensitive healthy tissue"],
        art: "oral",
      },
    ],
  },
  {
    id: "pet-tracers",
    name: "PET Tracers",
    lead: "The starting materials of every PET scan.",
    summary:
      "Oxygen-18 enriched water, FDG precursor and reagent kits from Jinhe Isotopes, Hikari Isogas and QRX for cyclotron and radiochemistry sites.",
    brands: ["Jinhe Isotopes", "Hikari Isogas", "QRX"],
    model: "molecule",
    modelLabel: "Oxygen-18 water and tracer molecule",
    subs: ["Enriched water", "Precursors & reagent kits"],
    products: [
      {
        id: "jinhe-o18",
        name: "Oxygen-18 Enriched Water",
        brand: "Jinhe Isotopes",
        sub: "Enriched water",
        summary:
          "Oxygen-18 water from a specialist manufacturer of stable isotopes for radiopharmaceutical synthesis.",
        points: ["Target material for fluorine-18 production", "From a dedicated Oxygen-18 producer"],
        art: "vial",
        tag: "H₂¹⁸O",
      },
      {
        id: "tns-o18-98",
        name: "Water-18O, 98 atom%",
        brand: "Hikari Isogas",
        sub: "Enriched water",
        summary: "Highly enriched Water-18O, resold by Radiora International for Hikari Isogas in Pakistan.",
        points: ["98 atom% Oxygen-18", "Resold in Pakistan"],
        art: "vial",
        tag: "98%",
      },
      {
        id: "tns-o18-10",
        name: "Water-18O, 10 atom%",
        brand: "Hikari Isogas",
        sub: "Enriched water",
        summary: "Water-18O at 10 atom% enrichment, resold by Radiora International for Hikari Isogas in Pakistan.",
        points: ["10 atom% Oxygen-18", "Resold in Pakistan"],
        art: "vial",
        tag: "10%",
      },
      {
        id: "qrx-mannose",
        name: "Mannose Triflate FDG Precursor",
        brand: "QRX",
        sub: "Precursors & reagent kits",
        summary: "GMP mannose triflate, the precursor used to synthesise [18F]FDG.",
        points: ["Precursor for [18F]FDG", "GMP grade"],
        art: "vial",
        tag: "FDG",
      },
      {
        id: "qrx-kits",
        name: "Tracer Production Kits",
        brand: "QRX",
        sub: "Precursors & reagent kits",
        summary:
          "Reagent kits for PET tracer production, covering FDG and other tracers such as F-DOPA, FLT and FES.",
        points: ["FDG reagent kits", "F-DOPA, FLT and FES"],
        art: "kit",
        tag: "QRX",
      },
      {
        id: "jinhe-kits",
        name: "Reagent Kits & Accessories",
        brand: "Jinhe Isotopes",
        sub: "Precursors & reagent kits",
        summary: "Reagent kits and accessories for radiochemistry, alongside Jinhe's Oxygen-18 water.",
        points: ["Reagent kits", "Related accessories"],
        art: "kit",
        tag: "HIC",
      },
    ],
  },
  {
    id: "health-physics",
    name: "Health Physics",
    lead: "Know the dose your people and rooms receive.",
    summary:
      "Personal dosemeters, dose rate meters, warning units, contamination monitors and TLD dosimetry from VELTZ and RayGuard International.",
    brands: ["VELTZ", "RayGuard International"],
    model: "dosimetry",
    modelLabel: "Personal dosemeter",
    subs: ["Personal dosemeters", "Dose rate & identification", "Area & contamination", "TLD dosimetry"],
    products: [
      {
        id: "gpd150",
        name: "GPD150G Personal Dosemeter",
        brand: "VELTZ",
        sub: "Personal dosemeters",
        summary: "Personal alarm dosemeter that radiation workers wear for individual protection.",
        points: ["Worn by staff", "Audible dose alarm"],
        art: "dosimeter",
        tag: "GPD150",
      },
      {
        id: "ed150",
        name: "ED150 Electronic Dosemeter",
        brand: "VELTZ",
        sub: "Personal dosemeters",
        summary: "Compact electronic dosemeter for personal radiation monitoring.",
        points: ["Electronic dose reading", "Compact, wearable"],
        art: "dosimeter",
        tag: "ED150",
      },
      {
        id: "x5c",
        name: "X5C Dose Rate Meter",
        brand: "VELTZ",
        sub: "Dose rate & identification",
        summary: "Portable dose rate meter series for surveying radiation fields.",
        points: ["Portable survey", "Dose rate measurement"],
        art: "survey",
        tag: "X5C",
      },
      {
        id: "radxplore",
        name: "RadXplore-ident Radionuclide Identifier",
        brand: "VELTZ",
        sub: "Dose rate & identification",
        summary: "Handheld instrument that identifies radionuclides as well as measuring radiation.",
        points: ["Radionuclide identification", "Handheld"],
        art: "survey",
        tag: "ident",
      },
      {
        id: "gammaflash",
        name: "GammaFlash Dose Rate Warning Lamp",
        brand: "VELTZ",
        sub: "Area & contamination",
        summary: "Dose rate warning lamp that signals elevated radiation in an area at a glance.",
        points: ["Visual area warning", "Dose rate alarm"],
        art: "beacon",
      },
      {
        id: "como170",
        name: "CoMo170F Contamination Monitor",
        brand: "VELTZ",
        sub: "Area & contamination",
        summary: "Contamination monitor for checking surfaces, hands and equipment.",
        points: ["Surface contamination checks", "Handheld probe"],
        art: "probe",
        tag: "CoMo",
      },
      {
        id: "rados-re2000",
        name: "RADOS RE-2000 TLD Reader",
        brand: "RayGuard International",
        sub: "TLD dosimetry",
        summary: "TLD reader for passive dosimetry services, supplied worldwide by RayGuard International.",
        points: ["Thermoluminescent dosemeter readout", "For dosimetry services"],
        art: "reader",
        tag: "RE-2000",
      },
      {
        id: "rayguard-tld",
        name: "TLD & OSL Dosimetry Materials",
        brand: "RayGuard International",
        sub: "TLD dosimetry",
        summary: "TLD and OSL dosemeter materials for passive personal and environmental dosimetry.",
        points: ["TLD and OSL materials", "Passive dosimetry"],
        art: "cards",
      },
      {
        id: "rayguard-survey",
        name: "Survey Meters & Ionization Chambers",
        brand: "RayGuard International",
        sub: "Dose rate & identification",
        summary: "Survey meters and ionization chambers for radiation protection measurements.",
        points: ["Survey meters", "Ionization chambers"],
        art: "survey",
        tag: "RayGuard",
      },
    ],
  },
  {
    id: "radiology-qa",
    name: "Radiology QA",
    lead: "Prove every machine does what it says.",
    summary:
      "Water phantoms, detector arrays, ionization chambers and imaging phantoms from Kelda Dosimetry, Solmark Nuclear and Opti-Phantom for radiotherapy and diagnostic QA.",
    brands: ["Kelda Dosimetry", "Solmark Nuclear", "Opti-Phantom"],
    model: "phantom",
    modelLabel: "3D water phantom with scanning detector",
    subs: ["Machine commissioning", "Patient-specific QA", "Detectors & electrometers", "Diagnostic imaging QA", "QA software"],
    products: [
      {
        id: "blue-phantom2",
        name: "Blue Phantom² 3D Water Phantom",
        brand: "Kelda Dosimetry",
        sub: "Machine commissioning",
        summary: "3D water phantom system for complete linac commissioning and QA, supplied with myQA Accept.",
        points: ["Machine commissioning and QA", "myQA Accept included", "Optional SMARTSCAN automated scanning"],
        art: "tank",
      },
      {
        id: "matrixx-resolution",
        name: "MatriXX Resolution",
        brand: "Kelda Dosimetry",
        sub: "Patient-specific QA",
        summary: "2D detector array for verifying patient treatment plans before delivery.",
        points: ["Patient-specific plan QA", "2D ionization chamber array"],
        art: "array",
        tag: "MatriXX",
      },
      {
        id: "razor",
        name: "RAZOR Detectors",
        brand: "Kelda Dosimetry",
        sub: "Detectors & electrometers",
        summary:
          "Small-field detector family: RAZOR Chamber, RAZOR Detector and RAZOR Nano Chamber, suited to robotic linacs such as CyberKnife.",
        points: ["Small-field dosimetry", "Chamber, diode and Nano versions"],
        art: "chamber",
        tag: "RAZOR",
      },
      {
        id: "cc13",
        name: "CC13 Ionization Chamber",
        brand: "Kelda Dosimetry",
        sub: "Detectors & electrometers",
        summary: "Standard compact ionization chamber for routine clinical dosimetry.",
        points: ["Clinical reference measurements", "Compact thimble chamber"],
        art: "chamber",
        tag: "CC13",
      },
      {
        id: "dose-x",
        name: "DOSE-X Reference Electrometer",
        brand: "Kelda Dosimetry",
        sub: "Detectors & electrometers",
        summary: "Reference-class electrometer that reads ionization chambers for absolute dosimetry.",
        points: ["Reference class", "Pairs with Kelda chambers"],
        art: "reader",
        tag: "DOSE-X",
      },
      {
        id: "myqa",
        name: "myQA Platform",
        brand: "Kelda Dosimetry",
        sub: "QA software",
        summary: "Software platform that connects Kelda QA devices, with myQA Machines for protocol-based machine QA and a Cockpit for QA data.",
        points: ["Protocol-based machine QA", "One place for QA data"],
        art: "software",
        tag: "myQA",
      },
      {
        id: "ct-acr-464",
        name: "CT ACR 464 Phantom",
        brand: "Solmark Nuclear",
        sub: "Diagnostic imaging QA",
        summary:
          "The ACR-required CT phantom for CT number accuracy, slice thickness, low-contrast detectability, uniformity and spatial resolution.",
        points: ["Required for ACR CT accreditation", "Zero-HU Solid Water body", "RapidCHECK analysis software"],
        art: "cylinder",
        tag: "ACR 464",
      },
      {
        id: "sun-mammo",
        name: "Mammography Phantoms",
        brand: "Solmark Nuclear",
        sub: "Diagnostic imaging QA",
        summary: "Mammography QA phantoms including Mammo FFDM, Mammo 156 and 156D, CESM and tomosynthesis QC phantoms.",
        points: ["FFDM and Mammo 156", "CESM and DBT QC"],
        art: "mammo",
        tag: "Mammo",
      },
      {
        id: "pro-ct",
        name: "Pro-CT mk II Kits",
        brand: "Opti-Phantom",
        sub: "Diagnostic imaging QA",
        summary:
          "Phantom and software sets for CT constancy testing: noise, homogeneity, spatial resolution, slice thickness and alignment.",
        points: ["BASIC and PRO kits", "IEC 61223 and AAPM aligned"],
        art: "cylinder",
        tag: "Pro-CT",
      },
      {
        id: "pro-digimam",
        name: "Pro-DigiMAM Kits",
        brand: "Opti-Phantom",
        sub: "Diagnostic imaging QA",
        summary: "Phantoms and software for constancy and acceptance testing of mammography units.",
        points: ["Resolution and CNR modules", "ACR accreditation module"],
        art: "mammo",
        tag: "DigiMAM",
      },
      {
        id: "pro-nm",
        name: "Pro-NM Phantoms",
        brand: "Opti-Phantom",
        sub: "Diagnostic imaging QA",
        summary: "Nuclear medicine QC phantoms, including performance, flood and NEMA NU2 phantoms and a linear source module.",
        points: ["Gamma camera and PET QC", "NEMA NU2 phantom"],
        art: "nm",
        tag: "Pro-NM",
      },
      {
        id: "pro-dent",
        name: "Pro-Dent Phantoms",
        brand: "Opti-Phantom",
        sub: "Diagnostic imaging QA",
        summary: "QC phantoms for dental radiography and dental CT.",
        points: ["Intraoral and panoramic", "Dental CT versions"],
        art: "cylinder",
        tag: "Pro-Dent",
      },
      {
        id: "pro-control",
        name: "Pro-Control.online",
        brand: "Opti-Phantom",
        sub: "QA software",
        summary: "Software that brings imaging quality control results together on one platform.",
        points: ["One QC platform", "Works with Opti-Phantom kits"],
        art: "software",
        tag: "Pro-Control",
      },
    ],
  },
  {
    id: "radioactive-sources",
    name: "Radioactive Sources",
    lead: "Sealed, certified sources for calibration and imaging QA.",
    summary:
      "Flood, imaging, reference and industrial sources from Holt & Brenner, and radioactive sources supplied for Whitford Medical.",
    brands: ["Holt & Brenner", "Whitford Medical"],
    model: "source",
    modelLabel: "Sealed source capsule",
    subs: ["Imaging sources", "Reference & calibration", "Industrial sources"],
    products: [
      {
        id: "co57-flood",
        name: "Co-57 Flood Sources",
        brand: "Holt & Brenner",
        sub: "Imaging sources",
        summary:
          "Cobalt-57 dispersed in sealed epoxy, matching the photon energy of Tc-99m for gamma camera uniformity testing.",
        points: ["Featherlite, Perflexion and C-Thru models", "Each source scanned across the field of view"],
        art: "flood",
        tag: "Co-57",
      },
      {
        id: "ez-imaging",
        name: "PET & SPECT Imaging Sources",
        brand: "Holt & Brenner",
        sub: "Imaging sources",
        summary: "PET sources and specialised SPECT sources for imaging system QA.",
        points: ["PET sources", "Specialised SPECT sources"],
        art: "capsule",
        tag: "PET",
      },
      {
        id: "isotrak",
        name: "Isotrak Reference & Calibration Sources",
        brand: "Holt & Brenner",
        sub: "Reference & calibration",
        summary: "Reference and calibration sources and solutions from Holt & Brenner's Isotrak range.",
        points: ["Reference sources", "Calibration solutions"],
        art: "capsule",
        tag: "Isotrak",
      },
      {
        id: "ez-industrial",
        name: "Industrial Sources",
        brand: "Holt & Brenner",
        sub: "Industrial sources",
        summary: "Radioactive sources for industrial use.",
        points: ["Industrial applications"],
        art: "capsule",
        tag: "IND",
      },
      {
        id: "whitford",
        name: "Radioactive Sources",
        brand: "Whitford Medical",
        sub: "Reference & calibration",
        summary: "Radioactive sources supplied for Whitford Medical. Ask us for the current range.",
        points: ["Supplied by Radiora International"],
        art: "capsule",
        tag: "SM",
      },
    ],
  },
  {
    id: "deep-brain-stimulation",
    name: "Deep Brain Stimulation",
    lead: "Precise neuromodulation, distributed in Pakistan.",
    summary: "Deep brain stimulation systems from Lumora Medical: pulse generators, directional leads and extensions.",
    brands: ["Lumora Medical"],
    model: "neuro",
    modelLabel: "Pulse generator and directional lead",
    subs: ["Pulse generators", "Leads & extensions"],
    products: [
      {
        id: "lumora-ipg-r",
        name: "Rechargeable Dual-Channel Pulse Generator",
        brand: "Lumora Medical",
        sub: "Pulse generators",
        summary: "Rechargeable implantable pulse generator that powers both sides of a DBS system.",
        points: ["Dual channel", "Rechargeable"],
        art: "ipg",
        tag: "R",
      },
      {
        id: "lumora-ipg",
        name: "Dual-Channel Pulse Generator",
        brand: "Lumora Medical",
        sub: "Pulse generators",
        summary: "Non-rechargeable implantable pulse generator for dual-channel deep brain stimulation.",
        points: ["Dual channel", "Primary cell"],
        art: "ipg",
      },
      {
        id: "lumora-lead",
        name: "Directional DBS Leads",
        brand: "Lumora Medical",
        sub: "Leads & extensions",
        summary:
          "Directional electrode leads that stimulate specific sub-regions of the target nucleus, approved in China in 2024.",
        points: ["Directional stimulation", "For subthalamic or pallidal targets"],
        art: "lead",
      },
      {
        id: "lumora-extension",
        name: "Extension Leads",
        brand: "Lumora Medical",
        sub: "Leads & extensions",
        summary: "Extension leads that connect the DBS electrodes to the implanted pulse generator.",
        points: ["Connects lead to generator"],
        art: "lead",
        tag: "EXT",
      },
    ],
  },
];

export const ALL_PRODUCTS = CATALOG.flatMap((d) => d.products.map((p) => ({ ...p, domain: d.id })));

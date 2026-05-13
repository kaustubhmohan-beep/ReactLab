// =============================================
// COMPLETE NAMED REACTIONS DATA
// =============================================
const REACTIONS = [{
  id: "aldol-condensation",
  name: "Aldol Condensation",
  category: "condensation",
  summary: "Enolizable carbonyl compounds react via an enolate to form a beta-hydroxy carbonyl product, which can dehydrate to give an alpha,beta-unsaturated carbonyl compound.",
  discovered: "Charles-Adolphe Wurtz, 1872",
  reactionType: "Condensation / Elimination",
  equation: "2 CH3CHO  -> [NaOH]  CH3CH(OH)CH2CHO  -> [-H2O]  CH3CH=CHCHO",
  catalyst: "NaOH (base) or H+ (acid)",
  applications: [
  "Synthesis of cinnamaldehyde (flavoring & fragrance industry)",
  "Industrial production of 2-ethyl-1-hexanol (plasticizer intermediate)",
  "Manufacturing beta-ionone, used in vitamin A synthesis",
  "Preparation of alpha,beta-unsaturated ketones for pharmaceutical intermediates",
  "Food additive synthesis (e.g., diacetyl, acetoin flavorings)"
  ],
  tags: ["carbonyl", "enolate", "base-catalyzed"],
  steps: [
  {
  title: "Deprotonation (Enolate Formation)",
  content: "The base (NaOH) abstracts the alpha-hydrogen from acetaldehyde, generating a resonance-stabilized enolate ion. This is the nucleophilic species.",
  formula: "CH3CHO + OH-  ->  -CH2CHO + H2O"
  },
  {
  title: "Nucleophilic Addition",
  content: "The enolate carbon attacks the carbonyl carbon of a second aldehyde molecule (the electrophile). This forms a new C-C bond, giving an alkoxide intermediate.",
  formula: "-CH2CHO + CH3CHO  ->  -O-CH(CH3)-CH2CHO"
  },
  {
  title: "Protonation",
  content: "The alkoxide intermediate is protonated by water to give the beta-hydroxy aldehyde (aldol product).",
  formula: "-O-CH(CH3)-CH2CHO + H2O  ->  HOCH(CH3)CH2CHO + OH-"
  },
  {
  title: "Dehydration (Condensation Step)",
  content: "Upon heating, the aldol product undergoes elimination of water. The alpha-hydrogen and beta-hydroxyl group are lost to form a conjugated enone (alpha,beta-unsaturated carbonyl).",
  formula: "HOCH(CH3)CH2CHO  -> [Heat]  CH3CH=CHCHO + H2O"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low (below 25degC)", effect: "Reaction is very slow. Enolate formation is disfavored. The aldol product may form but dehydration does not occur, leaving beta-hydroxy aldehyde.", type: "negative" },
  medium: { label: "Room Temp (~25degC)", effect: "Optimal for forming the aldol (beta-hydroxy aldehyde) product. Reaction is balanced and the thermodynamic product accumulates.", type: "neutral" },
  high: { label: "High (above 60degC)", effect: "Dehydration is promoted strongly. Equilibrium shifts toward the conjugated enone product. Yield of condensation product increases.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Minimal effect on this liquid-phase reaction. Evaporation of solvent may occur at very low pressures.", type: "neutral" },
  medium: { label: "Atmospheric Pressure", effect: "Standard conditions. No significant pressure effect observed.", type: "neutral" },
  high: { label: "High Pressure", effect: "Can slightly favor the reaction since bond formation decreases volume. Rarely used in practice.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute Solution", effect: "Intramolecular reactions are favored; inter-molecular aldol condensation is slowed down.", type: "negative" },
  medium: { label: "Moderate Concentration", effect: "Standard lab conditions; intermolecular aldol proceeds well.", type: "positive" },
  high: { label: "High Concentration", effect: "Rate increases but multiple condensations and cross-reactions may become side issues.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 0.2, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.2, y: -1.0, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0.2, y: -1.0, z: -0.5 },
  { symbol: "H", color: "#aaaaaa", x: 1.2, y: 0.5, z: 0 },
  ],
  bonds: [[0,1],[0,2],[0,3],[3,4],[3,5],[3,6]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: -1.0, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4],[3,5]]
  }
  },
  {
  id: "diels-alder",
  name: "Diels-Alder Reaction",
  category: "addition",
  summary: "A conjugated diene reacts with a dienophile in a concerted [4+2] cycloaddition to form a six-membered ring. One of the most powerful methods in organic synthesis.",
  discovered: "Otto Diels & Kurt Alder, 1928 (Nobel Prize 1950)",
  reactionType: "Cycloaddition [4+2]",
  equation: "Diene + Dienophile  -> [heat or Lewis acid]  Cyclohexene derivative",
  catalyst: "Heat or Lewis acid (e.g., AlCl3, BF3)",
  applications: [
  "Total synthesis of complex natural products (terpenes, steroids, alkaloids)",
  "Production of HHPA (hexahydrophthalic anhydride) used in epoxy resins",
  "Synthesis of insecticides like Aldrin and Dieldrin",
  "Preparation of cyclohexene derivatives for fragrance chemicals",
  "Key step in synthesis of vitamin D and cortisone precursors"
  ],
  tags: ["cycloaddition", "pericyclic", "stereospecific"],
  steps: [
  {
  title: "Orbital Alignment",
  content: "The diene must adopt the s-cis conformation (both double bonds on the same side). The diene's HOMO and the dienophile's LUMO must overlap for the reaction to proceed.",
  formula: "Diene (s-cis) + CH2=CH-EWG (dienophile)"
  },
  {
  title: "Concerted [4+2] Cycloaddition",
  content: "In a single, concerted step, the two terminal carbons of the diene simultaneously form new sigma bonds with both carbons of the dienophile. No intermediates are formed.",
  formula: "C1=C2-C3=C4 + C5=C6  ->  six-membered ring"
  },
  {
  title: "Product Formation",
  content: "A six-membered ring cyclohexene is formed. The reaction is stereospecific: endo approach is kinetically preferred (endo rule). Substituents retain their relative stereochemistry.",
  formula: " ->  Cyclohexene product (with stereochemistry preserved)"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction is very slow due to orbital energy barriers. May require Lewis acid catalyst as substitute.", type: "negative" },
  medium: { label: "Medium (~100-150degC)", effect: "Typical reaction temperature. Drives the [4+2] cycloaddition efficiently without decomposition.", type: "positive" },
  high: { label: "High (>200degC)", effect: "The reaction can become reversible (retro-Diels-Alder). Product may crack back into starting materials.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Mild effect. The cycloaddition naturally has a negative volume of activation, so pressure is beneficial.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions. Works fine for activated systems.", type: "positive" },
  high: { label: "High Pressure (>5 kbar)", effect: "Dramatically accelerates the reaction, especially for deactivated or bulky systems. Improves both yield and stereoselectivity.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slows bimolecular reaction. Not preferred.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yield. Standard lab protocol.", type: "positive" },
  high: { label: "High Concentration", effect: "Accelerates the reaction. May favor polymerization as a side reaction.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 1.3, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: -0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.2, y: 0.5, z: 0 },
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 1.1, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.3, z: 0 },
  { symbol: "C", color: "#555555", x: -1.1, y: -0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.1, y: -0.9, z: 0.5 },
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,0],[2,5]]
  }
  },
  {
  id: "grignard",
  name: "Grignard Reaction",
  category: "addition",
  summary: "An organomagnesium halide (Grignard reagent, R-MgX) acts as a strong nucleophile and reacts with carbonyl compounds to form alcohols after hydrolysis.",
  discovered: "Victor Grignard, 1900 (Nobel Prize 1912)",
  reactionType: "Nucleophilic Addition",
  equation: "R-X + Mg  -> [Et2O]  R-MgX  +  R'CHO  ->  R-CH(OH)-R'",
  catalyst: "Magnesium metal, anhydrous ether",
  applications: [
  "Synthesis of primary, secondary and tertiary alcohols for pharmaceuticals",
  "Production of vitamin A (retinol) via Grignard addition",
  "Manufacturing of ibuprofen and other NSAID intermediates",
  "Synthesis of tamoxifen (breast cancer drug) key intermediate",
  "Industrial production of fragrances and flavors via alcohol synthesis"
  ],
  
  tags: ["organometallic", "nucleophilic addition", "alcohol synthesis"],
  steps: [
  {
  title: "Grignard Reagent Formation",
  content: "Alkyl or aryl halide reacts with magnesium metal in dry diethyl ether. The C-X bond inserts into the Mg metal, forming R-MgX. Moisture must be strictly excluded.",
  formula: "R-X + Mg  ->  R-MgX (in dry ether)"
  },
  {
  title: "Nucleophilic Addition to Carbonyl",
  content: "The carbanion-like carbon of R-MgX attacks the electrophilic carbonyl carbon. A six-membered cyclic transition state forms via coordination with magnesium.",
  formula: "R-MgX + R'CHO  ->  R-CH(OMgX)-R'"
  },
  {
  title: "Hydrolysis (Workup)",
  content: "The magnesium alkoxide intermediate is protonated by aqueous NH4Cl or dilute HCl during workup, releasing the alcohol product and magnesium salts.",
  formula: "R-CH(OMgX)-R' + H2O  ->  R-CH(OH)-R' + Mg(OH)X"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low / Room Temp", effect: "Grignard reaction is typically exothermic and runs at room temperature or with slight cooling to control exothermicity.", type: "positive" },
  medium: { label: "Slight heating", effect: "May be needed to initiate the reaction with Mg. Once started, control is important.", type: "neutral" },
  high: { label: "High Temperature", effect: "Not recommended. Grignard reagent can decompose. Side reactions like Wurtz coupling increase.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Minimal effect but the ether solvent may evaporate.", type: "negative" },
  medium: { label: "Atmospheric", effect: "Standard conditions. Reaction flask is typically sealed under inert gas (N2 or Ar).", type: "positive" },
  high: { label: "High Pressure", effect: "No significant benefit. Reaction proceeds efficiently at atmospheric pressure.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slows the bimolecular addition. Longer reaction times needed.", type: "negative" },
  medium: { label: "Moderate (0.1-1 M)", effect: "Standard for lab-scale synthesis. Good reactivity.", type: "positive" },
  high: { label: "Concentrated", effect: "Viscosity increases; mixing becomes difficult. Risk of dimerization reactions.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "Mg", color: "#00cc88", x: 0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.6, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: -0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.5, y: 0, z: 1.0 },
  ],
  bonds: [[0,1],[1,2],[0,3],[0,4],[0,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -0.8, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: 1.6, z: 0 },
  ],
  productBonds: [[0,1],[1,2],[2,4],[1,3]]
  }
  },
  {
  id: "friedel-crafts",
  name: "Friedel-Crafts Alkylation",
  category: "substitution",
  summary: "An alkyl group is attached to an aromatic ring using an alkyl halide and a Lewis acid catalyst (AlCl3). An electrophilic aromatic substitution reaction.",
  discovered: "Charles Friedel & James Crafts, 1877",
  reactionType: "Electrophilic Aromatic Substitution (EAS)",
  equation: "ArH + R-Cl  -> [AlCl3]  Ar-R + HCl",
  catalyst: "AlCl3 (Lewis acid)",
  applications: [
  "Synthesis of ethylbenzene (styrene precursor for plastics)",
  "Production of cumene (phenol and acetone manufacturing)",
  "Synthesis of detergents (linear alkylbenzene sulfonates)",
  "Pharmaceutical intermediates - alkylation of aromatic rings",
  "Acylation variant (Friedel-Crafts acylation) used in dye industry"
  ],
  tags: ["aromatic", "EAS", "alkylation", "carbocation"],
  steps: [
  {
  title: "Electrophile Generation",
  content: "AlCl3 acts as a Lewis acid and complexes with the alkyl halide (R-Cl). This either forms a discrete carbocation (R+) or a highly polarized activated complex (R+-Cl-AlCl3).",
  formula: "R-Cl + AlCl3  ->  R+ + AlCl4-"
  },
  {
  title: "Electrophilic Attack (sigma-complex Formation)",
  content: "The carbocation electrophile attacks the aromatic ring. The pi electrons of the ring attack the carbocation, forming a resonance-stabilized arenium ion (Wheland intermediate / sigma-complex).",
  formula: "ArH + R+  ->  [Ar(H)(R)]+ (sigma-complex)"
  },
  {
  title: "Deprotonation (Rearomatization)",
  content: "AlCl4- (or another base) deprotonates the sigma-complex. The proton is lost from the sp3 carbon bearing R, restoring the aromatic ring and regenerating HCl + AlCl3.",
  formula: "[Ar(H)(R)]+ + AlCl4-  ->  Ar-R + HCl + AlCl3"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slower electrophile generation. Reaction may not initiate without activation. Used for sensitive aromatics to avoid polyalkylation.", type: "neutral" },
  medium: { label: "Room Temp to mild warming", effect: "Optimal for most Friedel-Crafts reactions. Good conversion with minimal side products.", type: "positive" },
  high: { label: "High Temperature", effect: "Increases rate but promotes polyalkylation. Dealkylation can occur when temperature is very high (200degC+), acting as reverse reaction.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCl gas may escape, driving equilibrium forward slightly.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions. HCl produced as gas is released.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains HCl in solution; can suppress the reaction slightly.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute Conditions", effect: "Reduces polyalkylation side reactions. Used for monoalkylation.", type: "positive" },
  medium: { label: "Moderate", effect: "Good conversion. Common preparative conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Polyalkylation becomes dominant. Multiple R groups added to the ring.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 2.4, z: 0 },
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#777777", x: 0, y: 2.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.8, y: 3.4, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -0.8, y: 3.4, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 2.8, z: 1.0 },
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,7],[6,8],[6,9]]
  }
  },
  {
  id: "sn2",
  name: "SN2 Reaction",
  category: "substitution",
  summary: "Bimolecular nucleophilic substitution: a nucleophile attacks a carbon bearing a leaving group from the back side, leading to a concerted one-step mechanism with inversion of configuration (Walden inversion).",
  discovered: "Sir Christopher Ingold & colleagues, 1935",
  reactionType: "Bimolecular Nucleophilic Substitution",
  equation: "Nu:- + R-LG  ->  Nu-R + LG-",
  catalyst: "No catalyst; polar aprotic solvent (DMSO, acetone)",
  applications: [
  "Synthesis of ethers (Williamson ether synthesis uses SN2)",
  "Production of amino acids via alkylation of glycine derivatives",
  "Drug synthesis - introduction of functional groups with defined stereochemistry",
  "Manufacture of methyl iodide and other alkyl halides for reagent use",
  "Industrial synthesis of quaternary ammonium salts (surfactants, disinfectants)"
  ],
  tags: ["substitution", "nucleophile", "Walden inversion", "backside attack"],
  steps: [
  {
  title: "Nucleophile Approach (Back-Side Attack)",
  content: "The nucleophile approaches the electrophilic carbon from the side opposite the leaving group (180deg). This backside trajectory is required by orbital symmetry (attack on sigma* C-LG).",
  formula: "Nu:- + R3C-LG  ->  [transition state]"
  },
  {
  title: "Transition State Formation",
  content: "A single trigonal bipyramidal transition state forms. The carbon is simultaneously bonded to both the nucleophile and the leaving group in a pentacoordinate arrangement. Bonds are partially formed and broken.",
  formula: "[Nu---C---LG]- (trigonal bipyramidal TS)"
  },
  {
  title: "Bond Cleavage and Inversion",
  content: "The C-LG bond breaks as the C-Nu bond completes. The three substituents 'umbrella flip' to give the product with inverted stereochemistry (if chiral, R  ->  S or S  ->  R).",
  formula: "Nu-CR3 + LG- (inverted configuration)"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction slows down. Less energy available to overcome activation barrier. Used when product side reactions are a concern.", type: "negative" },
  medium: { label: "Room Temp (~25degC)", effect: "Ideal for many SN2 reactions with reactive substrates. Good balance of rate and selectivity.", type: "positive" },
  high: { label: "High Temperature", effect: "Accelerates SN2 but also promotes elimination (E2) as a competing reaction. High temperature favors elimination products.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect on this solution-phase reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions for SN2.", type: "positive" },
  high: { label: "High Pressure", effect: "SN2 involves a negative volume of activation (TS is more compact), so high pressure accelerates the reaction.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute Nucleophile", effect: "Slows the reaction significantly (rate = k[Nu][R-LG]). SN1 may compete.", type: "negative" },
  medium: { label: "Moderate [Nu]", effect: "Good SN2 rate. Second-order kinetics confirmed.", type: "positive" },
  high: { label: "High [Nu]", effect: "Maximizes SN2 rate and suppresses SN1 pathway. Used for primary and secondary substrates.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.9, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 1.1, z: 0.6 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.1, z: 0.6 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0, z: -1.1 },
  { symbol: "O", color: "#ff4444", x: -2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -3.2, y: 0.6, z: 0 },
  ],
  bonds: [[0,1],[0,2],[0,3],[0,4],[5,6],[5,0]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 1.1, z: -0.6 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.1, z: -0.6 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0, z: 1.1 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.6, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4],[1,5]]
  }
  },
  {
  id: "wittig",
  name: "Wittig Reaction",
  category: "substitution",
  summary: "A phosphorus ylide (Ph3P=CHR) reacts with an aldehyde or ketone to form an alkene. The reaction replaces the C=O with a C=C bond with high stereoselectivity.",
  discovered: "Georg Wittig, 1954 (Nobel Prize 1979)",
  reactionType: "Olefination",
  equation: "Ph3P=CHR + R'CHO  ->  R'CH=CHR + Ph3P=O",
  catalyst: "Strong base (n-BuLi) for ylide preparation",
  applications: [
  "Synthesis of vitamin A (retinol) - key industrial step",
  "Production of carotenoids and lycopene (food colorants)",
  "Synthesis of pheromones for pest control",
  "Assembly of complex polyene natural products (macrolide antibiotics)",
  "Total synthesis of tamoxifen and other drug molecules with C=C bonds"
  ],
  tags: ["ylide", "olefination", "phosphorus", "stereoselectivity"],
  steps: [
  {
  title: "Ylide Formation",
  content: "Triphenylphosphine reacts with an alkyl halide (R-CH2X) to form a phosphonium salt. Strong base (n-BuLi) then deprotonates it to give the stabilized ylide (Ph3P=CHR).",
  formula: "Ph3P + RCH2X  ->  Ph3P+-CHR2X-  -> [n-BuLi] Ph3P=CHR"
  },
  {
  title: "[2+2] Cycloaddition  ->  Oxaphosphetane",
  content: "The ylide carbon acts as a nucleophile and attacks the carbonyl carbon. Simultaneously or in the next step, oxygen attacks phosphorus to form a 4-membered ring called an oxaphosphetane.",
  formula: "Ph3P=CHR + R'CHO  ->  oxaphosphetane (4-membered ring)"
  },
  {
  title: "Retro-[2+2] Elimination",
  content: "The oxaphosphetane undergoes a retro-[2+2] cycloelimination. The P-C bond and O-C bond break simultaneously, forming the alkene (C=C) and a very stable phosphine oxide byproduct (Ph3P=O).",
  formula: "Oxaphosphetane  ->  R'CH=CHR + Ph3P=O"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-78degC for ylide)", effect: "Essential for reactive ylide generation. Kinetic (Z)-selectivity is favored at very low temperatures.", type: "positive" },
  medium: { label: "Room Temp (reaction)", effect: "Oxaphosphetane formation and breakdown proceed at room temperature.", type: "positive" },
  high: { label: "High Temperature", effect: "Promotes decomposition of ylide and reduces stereoselectivity. Avoid unless using stabilized ylides.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect. Normal lab conditions apply.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Minimal benefit for Wittig. Reaction is not pressure sensitive.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Decreases rate; good for controlling exothermicity in reactive systems.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard preparative scale. Good yields.",  type: "positive" },
  high: { label: "Concentrated", effect: "Faster but Betaine intermediates may precipitate, complicating workup.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "P", color: "#ffaa00", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: -0.8, z: 0 },
  ],
  bonds: [[0,1],[1,2],[1,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.7, y: -0.8, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "hofmann-rearrangement",
  name: "Hofmann Rearrangement",
  category: "rearrangement",
  summary: "An amide reacts with an oxidative base (Br2/NaOH) to form a primary amine with one fewer carbon atom. A nitrene intermediate migrates from the carbonyl carbon.",
  discovered: "August Wilhelm von Hofmann, 1881",
  reactionType: "Rearrangement",
  equation: "RCONH2 + Br2 + 4NaOH  ->  RNH2 + Na2CO3 + 2NaBr + 2H2O",
  catalyst: "Br2, NaOH (aqueous)",
  applications: [
  "Synthesis of primary amines from amides (one carbon shorter chain)",
  "Production of anthranilic acid from phthalamide (dye/pharmaceutical precursor)",
  "Degradation of polypeptides for amino acid sequence analysis",
  "Synthesis of amino acids & amino sugars",
  "Preparation of isocyanates used in polyurethane foam manufacturing"
  ],
  tags: ["rearrangement", "nitrene", "nitrogen", "carbon loss"],
  steps: [
  {
  title: "N-Bromination",
  content: "Bromine reacts with the amide nitrogen (N-H) in base to give an N-bromoamide. The nitrogen lone pair is electron-rich and susceptible to electrophilic halogenation.",
  formula: "RCONH2 + Br2 + NaOH  ->  RCONHB + NaBr + H2O"
  },
  {
  title: "Deprotonation to N-Haloamide Anion",
  content: "Sodium hydroxide removes the remaining N-H proton to generate the N-bromo amide anion. The nitrogen becomes a better electron pusher for the next step.",
  formula: "RCONHBr + NaOH  ->  RCONBr- + H2O"
  },
  {
  title: "1,2-Migration (Nitrene Formation & Rearrangement)",
  content: "The R group migrates from the carbonyl carbon to the electron-deficient nitrogen simultaneously with loss of bromide. An isocyanate (R-N=C=O) is the key intermediate.",
  formula: "RCONBr-  ->  R-N=C=O (isocyanate) + Br-"
  },
  {
  title: "Hydrolysis",
  content: "Water (from the basic solution) attacks the electrophilic carbonyl of the isocyanate to give a carbamic acid, which spontaneously decarboxylates to give the primary amine.",
  formula: "R-N=C=O + H2O  ->  RNH-COOH  ->  RNH2 + CO2"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "N-bromination can occur at low temperature. Isocyanate hydrolysis is slower. Allows some selectivity.", type: "neutral" },
  medium: { label: "Warm (~50-80degC)", effect: "Optimal for complete hydrolysis of isocyanate to amine. Full conversion achieved.", type: "positive" },
  high: { label: "High Temp", effect: "Product amine can react further. Over-oxidation and other side products may form.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Minimal effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No significant benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaOH", effect: "Less efficient deprotonation. Brominated amide may accumulate.", type: "negative" },
  medium: { label: "Moderate NaOH", effect: "Efficient rearrangement. Good yields of primary amine.", type: "positive" },
  high: { label: "Concentrated NaOH", effect: "Fast deprotonation but amine product may be over-alkylated if N-halogens remain.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 1.2, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.2, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.8, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.8, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  ],
  bonds: [[0,1],[0,2],[2,3],[2,4],[0,5]],
  products: [
  { symbol: "N", color: "#4488ff", x: -1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.1, y: 0.8, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[0,3],[3,4]]
  }
  },
  {
  id: "beckmann",
  name: "Beckmann Rearrangement",
  category: "rearrangement",
  summary: "An oxime (derived from a ketone) is treated with acid to rearrange to an amide. The group anti to the hydroxyl migrates from C to N, resulting in ring expansion when a cyclic ketone oxime is used.",
  discovered: "Ernst Otto Beckmann, 1886",
  reactionType: "Rearrangement",
  equation: "R-C(=NOH)-R'  -> [H+]  R-CO-NH-R' (amide)",
  catalyst: "H2SO4, PCl5, BF3, or polyphosphoric acid",
  applications: [
  "Industrial synthesis of caprolactam - monomer for Nylon-6 (world-scale process)",
  "Production of lactams for pharmaceutical intermediates",
  "Ring expansion of cyclic ketones to lactams",
  "Synthesis of amino acids via ring-opening of lactams",
  "Manufacture of valerolactam (Nylon-5 precursor)"
  ],
  tags: ["rearrangement", "oxime", "amide", "ring expansion"],
  steps: [
  {
  title: "Protonation of Oxime Hydroxyl",
  content: "The acid protonates the oxime's N-OH group, converting it into a good leaving group (water). The nitrogen lone pair is now ready to assist migration.",
  formula: "R-C(=NOH)-R' + H+  ->  R-C(=N+OH2)-R'"
  },
  {
  title: "1,2-Migration (anti to OH)",
  content: "The group anti to the leaving group migrates from carbon to nitrogen with simultaneous loss of water. This forms a nitrilium-like cation. Migration is concerted and stereospecific.",
  formula: "[R migrates]  ->  R-C-N+-R' + H2O"
  },
  {
  title: "Water Attack and Tautomerism",
  content: "Water attacks the electrophilic carbonyl-like carbon of the nitrilium ion. Proton transfers complete the conversion to give the amide product.",
  formula: "R-C-N+-R' + H2O  ->  RC(=O)NHR' (amide)"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow rearrangement. Protonation is fine but migration of the anti group is endothermic.", type: "negative" },
  medium: { label: "Moderate (~80-120degC)", effect: "Optimal for concerted migration. Industrial use (caprolactam synthesis) uses 80-130degC.", type: "positive" },
  high: { label: "High Temp", effect: "Can cause multiple rearrangements, hydrolysis of product amide, or dehydration.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Little effect on liquid-phase rearrangement.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not typically required.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute Acid", effect: "Slower protonation. Migration is rate-determining.", type: "negative" },
  medium: { label: "Moderate H2SO4", effect: "Efficient rearrangement. Industrial standard.", type: "positive" },
  high: { label: "Concentrated Acid", effect: "Very fast but hydrolysis/sulfation of product may occur.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 1.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 2.0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.8, y: 1.5, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.5, z: 0 },
  ],
  bonds: [[0,1],[1,2],[2,3],[0,4],[0,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 1.2, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.2, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.8, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: -0.3, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[2,3],[2,4]]
  }
  },
  {
  id: "cannizzaro",
  name: "Cannizzaro Reaction",
  category: "organic",
  summary: "Non-enolizable aldehydes (no alpha-hydrogen) undergo disproportionation in strong base. One molecule is oxidized to a carboxylate and another is reduced to an alcohol.",
  discovered: "Stanislao Cannizzaro, 1853",
  reactionType: "Disproportionation (Redox)",
  equation: "2 RCHO  -> [NaOH]  RCOONa + RCH2OH",
  catalyst: "Concentrated NaOH",
  applications: [
  "Industrial preparation of benzyl alcohol from benzaldehyde",
  "Synthesis of methanol and formate from formaldehyde (crossed Cannizzaro)",
  "Production of sodium benzoate (food preservative)",
  "Preparative synthesis of trityl alcohol (triphenylmethanol)",
  "Used in silver mirror test to detect aldehydes (Tollens' variation)"
  ],
  tags: ["disproportionation", "redox", "aldehyde", "no alpha-H"],
  steps: [
  {
  title: "Hydride-Ion Transfer via Nucleophilic Addition",
  content: "OH- attacks the aldehyde carbonyl, generating a tetrahedral alkoxide intermediate. This intermediate transfers a hydride ion (H-) to the carbonyl of a second aldehyde molecule.",
  formula: "RCHO + OH-  ->  RCH(OH)O-"
  },
  {
  title: "Intermolecular Hydride Transfer",
  content: "The hydride (H-) transfers from the gem-diol/alkoxide to the carbonyl carbon of another aldehyde molecule. This is the key step - it is a concerted or semi-concerted transfer in the transition state.",
  formula: "RCH(OH)O- + RCHO  ->  RCOO- + RCH2O-"
  },
  {
  title: "Final Products",
  content: "Protonation of the alkoxide gives the primary alcohol. The carboxylate remains as the sodium carboxylate salt. Overall: one aldehyde oxidized, one reduced.",
  formula: "RCOO- (carboxylate) + RCH2OH (primary alcohol)"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slower hydride transfer. Reaction is feasible but sluggish. Long reaction times needed.", type: "negative" },
  medium: { label: "Room to 50degC", effect: "Standard conditions. Reaction proceeds well in concentrated NaOH.", type: "positive" },
  high: { label: "High Temp", effect: "Faster reaction but may lead to aldol-type side reactions even with non-enolizable aldehydes under harsh conditions.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard. No special pressure needed.", type: "positive" },
  high: { label: "High Pressure", effect: "Not beneficial. Minimal effect on liquid-phase reaction.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaOH", effect: "Slow hydroxide addition to C=O. Poor conversion.", type: "negative" },
  medium: { label: "Moderate (2-4 M NaOH)", effect: "Good rate and selectivity. Typical preparative conditions.", type: "positive" },
  high: { label: "Concentrated NaOH (>6M)", effect: "Very fast reaction, excellent conversion. May cause saponification of ester products if formed.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.6, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.6, y: -0.5, z: 0 },
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: -3.0, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.8, y: 1.6, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.0, y: -1.1, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 2.0, y: -1.1, z: -0.5 },
  ],
  productBonds: [[0,1],[0,2],[3,4],[4,5],[3,6],[3,7]]
  }
  },
  {
  id: "e2-elimination",
  name: "E2 Elimination",
  category: "elimination",
  summary: "A concerted bimolecular elimination: base abstracts a beta-hydrogen as the leaving group departs, forming a double bond in a single step. Requires anti-periplanar geometry.",
  discovered: "Sir Christopher Ingold, 1930s",
  reactionType: "Bimolecular Elimination",
  equation: "Base + H-C-C-LG  ->  Base.H + C=C + LG-",
  catalyst: "Strong bulky base (e.g., KOt-Bu, NaOEt)",
  applications: [
  "Industrial synthesis of alkenes (ethylene, propylene) from haloalkanes",
  "Synthesis of conjugated dienes for rubber and polymer production",
  "Dehydrohalogenation step in steroid synthesis",
  "Production of vinyl monomers for plastics manufacturing",
  "Pharmaceutical synthesis - generating double bonds in bioactive molecules"
  ],
  tags: ["elimination", "anti-periplanar", "Zaitsev", "Hofmann"],
  steps: [
  {
  title: "Anti-periplanar Alignment",
  content: "The beta-hydrogen and the leaving group must be oriented 180deg apart (anti-periplanar) in the Newman projection. This geometry maximizes orbital overlap in the transition state.",
  formula: "Confirm H-Cbeta-Calpha-LG dihedral angle = 180deg"
  },
  {
  title: "Concerted E2 Transition State",
  content: "The base simultaneously abstracts the beta-H while the C-LG bond breaks. A single transition state with partial bonds to H, Cbeta, and LG is formed. No intermediate exists.",
  formula: "[Base---H---Cbeta=Calpha---LG]- (E2 transition state)"
  },
  {
  title: "Alkene Formation",
  content: "The double bond forms between Calpha and Cbeta. Zaitsev's rule predicts that the more substituted (more stable) alkene is the major product unless a bulky base forces Hofmann elimination.",
  formula: "Cbeta=Calpha + Base-H + LG-"
  }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "E2 may be outcompeted by SN2 at room temperature or below. Elimination requires higher temperature relative to substitution.", type: "negative" },
  medium: { label: "Moderate heating 50-80degC", effect: "E2 is favored over SN2. Standard elimination conditions.", type: "positive" },
  high: { label: "High Temp (>100degC)", effect: "Strongly favors elimination. Can drive reaction to completion even with difficult substrates.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Boiling point of solvent drops - may evaporate. Little effect on E2 mechanism.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard. No pressure dependence for this reaction.", type: "positive" },
  high: { label: "High Pressure", effect: "May suppress E2 since TS involves more freedom than starting material. Slight disfavor.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute Base", effect: "Less E2, more SN1 may compete. If tertiary substrate, SN1 dominates.", type: "negative" },
  medium: { label: "Moderate [Base]", effect: "E2 proceeds well. Second-order kinetics confirmed.", type: "positive" },
  high: { label: "Concentrated Base", effect: "E2 strongly favored, especially with bulky base to give Hofmann product.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.8, y: -0.9, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.5, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -0.7, y: -1.0, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: -0.7, y: -1.0, z: -0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0.7, y: 1.0, z: 0.5 },
  ],
  bonds: [[0,1],[1,2],[0,3],[0,4],[0,5],[1,6]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: -0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.4, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.4, y: -0.8, z: 0 },
  ],
  productBonds: [[0,1],[0,2],[0,3],[1,4],[1,5]]
  }
  },
  {
  id: "suzuki-coupling",
  name: "Suzuki Coupling",
  category: "substitution",
  summary: "A palladium-catalyzed cross-coupling reaction between an organoboron compound (boronic acid/ester) and an organic halide or triflate to form a new C-C bond.",
  discovered: "Akira Suzuki, 1979 (Nobel Prize 2010)",
  reactionType: "Cross-Coupling",
  equation: "R-B(OH)2 + R'-X  -> [Pd(0), base] R-R' + B(OH)3 + HX",
  catalyst: "Pd(PPh3)4 or Pd(OAc)2, base (K2CO3)",
  applications: [
  "Synthesis of biaryl units in pharmaceuticals (losartan, valsartan)",
  "Manufacturing of OLED and LCD display materials",
  "Production of agrochemicals such as boscalid fungicide",
  "Polymer synthesis for conducting polymers and organic semiconductors",
  "Key step in total synthesis of natural products like vancomycin"
  ],
  tags: ["palladium", "cross-coupling", "biaryl", "organoboron"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) inserts into the C-X bond of the aryl halide, forming a Pd(II) complex. This is often the rate-determining step.", formula: "R'-X + Pd(0)  ->  R'-Pd(II)-X" },
  { title: "Transmetalation", content: "The boronic acid, activated by base, transfers its organic group to the palladium center, replacing the halide.", formula: "R'-Pd(II)-X + R-B(OH)3-  ->  R'-Pd(II)-R + X-B(OH)3-" },
  { title: "Reductive Elimination", content: "The two organic groups on palladium couple together, forming the new C-C bond and regenerating the Pd(0) catalyst.", formula: "R'-Pd(II)-R  ->  R'-R + Pd(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction is sluggish. Oxidative addition is slow, especially with less reactive aryl chlorides.", type: "negative" },
  medium: { label: "60-80degC", effect: "Optimal for most substrates. Good balance of rate and selectivity.", type: "positive" },
  high: { label: "High (>100degC)", effect: "Faster but may cause protodeboronation side reaction and catalyst decomposition.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect on solution-phase reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions. Inert atmosphere (N2/Ar) required to protect Pd(0).", type: "positive" },
  high: { label: "High Pressure", effect: "Not typically used. No significant benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction but may reduce homocoupling side products.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard conditions with good yields.", type: "positive" },
  high: { label: "Concentrated", effect: "Risk of Pd aggregation and catalyst deactivation.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "B", color: "#ffcc00", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 4.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[1,3],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.4, y: -0.8, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "heck-reaction",
  name: "Heck Reaction",
  category: "substitution",
  summary: "A palladium-catalyzed coupling of an aryl or vinyl halide with an alkene to form a substituted alkene. One of the foundational cross-coupling reactions.",
  discovered: "Richard Heck, 1972 (Nobel Prize 2010)",
  reactionType: "Cross-Coupling (C=C formation)",
  equation: "R-X + CH2=CHR'  -> [Pd(0), base] R-CH=CHR' + HX",
  catalyst: "Pd(OAc)2, PPh3, base (Et3N or K2CO3)",
  applications: [
  "Synthesis of naproxen (anti-inflammatory drug) industrial process",
  "Production of cinnamate esters for sunscreen UV filters",
  "Manufacturing of fine chemicals and agrochemicals",
  "Synthesis of stilbene derivatives for optical materials",
  "Key step in total synthesis of taxol and other anticancer agents"
  ],
  tags: ["palladium", "cross-coupling", "alkene", "vinylic"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) inserts into the C-X bond of the aryl halide to form an aryl-Pd(II) complex.", formula: "Ar-X + Pd(0)  ->  Ar-Pd(II)-X" },
  { title: "Syn-Migratory Insertion", content: "The alkene coordinates to Pd, then inserts into the Pd-C bond in a syn fashion, forming a new C-C bond.", formula: "Ar-Pd-X + CH2=CHR'  ->  Ar-CH2-CHR'-Pd-X" },
  { title: "beta-Hydride Elimination", content: "A beta-hydrogen on the carbon adjacent to Pd is eliminated along with Pd, forming the product alkene and a Pd(II)-H species.", formula: "Ar-CH2-CHR'-Pd-X  ->  Ar-CH=CHR' + H-Pd-X" },
  { title: "Catalyst Regeneration", content: "Base removes HX from the Pd-H species, regenerating catalytic Pd(0).", formula: "H-Pd-X + Base  ->  Pd(0) + Base.HX" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Oxidative addition is too slow for practical use.", type: "negative" },
  medium: { label: "80-120degC", effect: "Standard conditions. Efficient catalytic turnover.", type: "positive" },
  high: { label: "High (>140degC)", effect: "May cause isomerization and double-bond migration in product.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard. Inert atmosphere preferred.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower but fewer side products.", type: "neutral" },
  medium: { label: "Moderate", effect: "Optimal yield and selectivity.", type: "positive" },
  high: { label: "Concentrated", effect: "Pd black formation and catalyst deactivation.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -3.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.7, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "claisen-rearrangement",
  name: "Claisen Rearrangement",
  category: "rearrangement",
  summary: "A [3,3]-sigmatropic rearrangement of allyl vinyl ethers to give gamma,delta-unsaturated carbonyl compounds. A concerted, pericyclic reaction with a chair-like transition state.",
  discovered: "Ludwig Claisen, 1912",
  reactionType: "Sigmatropic Rearrangement [3,3]",
  equation: "Allyl vinyl ether  -> [heat] gamma,delta-unsaturated carbonyl",
  catalyst: "Heat (thermal, 150-250degC) or Lewis acid catalyst",
  applications: [
  "Synthesis of prostaglandins and terpene natural products",
  "Industrial production of allyl phenols from allyl aryl ethers",
  "Key step in synthesis of vitamin E (tocopherol)",
  "Aromatic Claisen variant used in flavoring agent synthesis",
  "Ireland-Claisen variant for stereocontrolled synthesis of carboxylic acids"
  ],
  tags: ["pericyclic", "sigmatropic", "thermal", "concerted"],
  steps: [
  { title: "Conformational Alignment", content: "The allyl vinyl ether adopts a chair-like conformation where the allyl and vinyl groups are positioned for suprafacial [3,3] migration.", formula: "Chair-like TS alignment" },
  { title: "Concerted [3,3] Shift", content: "Six electrons reorganize simultaneously through a cyclic transition state. The C-O bond breaks while a new C-C bond forms, all in one concerted step.", formula: "Allyl vinyl ether  ->  [TS]  ->  gamma,delta-unsaturated carbonyl" },
  { title: "Product Formation", content: "The resulting enol tautomerizes to the more stable carbonyl form, giving the gamma,delta-unsaturated aldehyde or ketone.", formula: "Enol  ->  gamma,delta-unsaturated carbonyl (keto form)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction does not proceed. High activation energy barrier for the pericyclic process.", type: "negative" },
  medium: { label: "150-200degC", effect: "Standard thermal conditions. Reaction proceeds cleanly.", type: "positive" },
  high: { label: ">250degC", effect: "Very fast but competing decomposition and polymerization may occur.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect on this unimolecular reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Can accelerate the reaction due to negative volume of activation.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute / Neat", effect: "Unimolecular reaction - concentration has minimal effect on rate.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "May lead to oligomerization at high temperatures.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "O", color: "#ff4444", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: -2.2, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.2, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 3.2, y: 0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4]]
  }
  },
  {
  id: "fischer-esterification",
  name: "Fischer Esterification",
  category: "condensation",
  summary: "A carboxylic acid reacts with an alcohol in the presence of an acid catalyst to form an ester and water. A classic equilibrium-driven condensation reaction.",
  discovered: "Emil Fischer & Arthur Speier, 1895",
  reactionType: "Condensation (Esterification)",
  equation: "RCOOH + R'OH  <=> [H+] RCOOR' + H2O",
  catalyst: "H2SO4 or p-TsOH (acid catalyst)",
  applications: [
  "Industrial production of ethyl acetate (solvent, nail polish remover)",
  "Manufacture of polyester fibers (PET) and plastics",
  "Synthesis of aspirin (acetylsalicylic acid) via esterification",
  "Production of fruit-flavored esters for food industry (isoamyl acetate - banana)",
  "Biodiesel production via transesterification of triglycerides"
  ],
  tags: ["ester", "equilibrium", "acid-catalyzed", "condensation"],
  steps: [
  { title: "Protonation of Carbonyl", content: "The acid catalyst protonates the carbonyl oxygen of the carboxylic acid, activating the carbonyl carbon as a stronger electrophile.", formula: "RCOOH + H+  ->  RC(=OH+)OH" },
  { title: "Nucleophilic Addition of Alcohol", content: "The alcohol oxygen attacks the activated carbonyl carbon, forming a tetrahedral intermediate.", formula: "RC(=OH+)OH + R'OH  ->  RC(OH)2(OR')+" },
  { title: "Proton Transfer & Water Loss", content: "An internal proton transfer converts one hydroxyl into a good leaving group (water). Water departs to restore the carbonyl.", formula: "RC(OH)2(OR')+  ->  RCOOR' + H2O + H+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Equilibrium is slow to establish. Very low conversion.", type: "negative" },
  medium: { label: "Reflux (~60-80degC)", effect: "Standard conditions. Dean-Stark trap can remove water to shift equilibrium.", type: "positive" },
  high: { label: "High (>120degC)", effect: "Faster but may decompose acid-sensitive substrates.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Helps remove water by distillation, driving equilibrium to product.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard. Use Dean-Stark apparatus for water removal.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains water; shifts equilibrium back to reactants.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Equilibrium favors hydrolysis. Low ester yield.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yields with excess alcohol to drive equilibrium.", type: "positive" },
  high: { label: "Excess Alcohol", effect: "Le Chatelier's principle drives equilibrium toward ester product.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.6, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: -0.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 4.0, y: 0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3]]
  }
  },
  {
  id: "michael-addition",
  name: "Michael Addition",
  category: "addition",
  summary: "A conjugate (1,4-) addition of a stabilized carbanion (Michael donor) to an alpha,beta-unsaturated carbonyl compound (Michael acceptor). Forms a new C-C bond at the beta-position.",
  discovered: "Arthur Michael, 1887",
  reactionType: "Conjugate Addition (1,4-Addition)",
  equation: "R-CH2-EWG + CH2=CH-COR'  -> [base] R-CH(EWG)-CH2CH2-COR'",
  catalyst: "Base (NaOEt, DBU) or organocatalyst",
  applications: [
  "Synthesis of warfarin (anticoagulant drug) - key C-C bond-forming step",
  "Robinson annulation (Michael + Aldol) for steroid ring synthesis",
  "Production of glutaric acid derivatives for polymer intermediates",
  "Asymmetric Michael reactions in chiral drug synthesis",
  "Industrial synthesis of 1,5-dicarbonyl compounds for fragrances"
  ],
  tags: ["conjugate addition", "1,4-addition", "enolate", "carbon nucleophile"],
  steps: [
  { title: "Enolate Formation (Donor Activation)", content: "Base deprotonates the alpha-carbon of the Michael donor (e.g., malonate), forming a stabilized carbanion/enolate.", formula: "CH2(COOR)2 + Base  ->  -CH(COOR)2" },
  { title: "1,4-Conjugate Addition", content: "The enolate nucleophile attacks the beta-carbon of the Michael acceptor (alpha,beta-unsaturated carbonyl), rather than the carbonyl carbon (1,2-addition).", formula: "-CH(COOR)2 + CH2=CHCOR'  ->  product enolate" },
  { title: "Protonation", content: "The resulting enolate is protonated by solvent or acid to give the 1,5-dicarbonyl product.", formula: "Product enolate + H+  ->  1,5-dicarbonyl product" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Kinetic control. Favors 1,4-addition over 1,2-addition. Higher selectivity.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard conditions. Thermodynamic product (1,4-adduct) dominates.", type: "positive" },
  high: { label: "High Temp", effect: "May promote retro-Michael or elimination side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Minimal effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No significant benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Good reactivity and selectivity.", type: "positive" },
  high: { label: "Concentrated", effect: "Can lead to double Michael addition.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 3.0, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 4.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.5, y: 1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[0,3],[2,4]]
  }
  },
  {
  id: "birch-reduction",
  name: "Birch Reduction",
  category: "organic",
  summary: "Aromatic rings are partially reduced by dissolving metal (Na or Li) in liquid ammonia with an alcohol co-solvent, producing 1,4-cyclohexadienes.",
  discovered: "Arthur Birch, 1944",
  reactionType: "Dissolving Metal Reduction",
  equation: "ArH + 2Na + 2ROH  -> [NH3(l)] 1,4-cyclohexadiene + 2NaOR",
  catalyst: "Na or Li in liquid NH3, t-BuOH",
  applications: [
  "Partial reduction of aromatic steroids in hormone synthesis",
  "Synthesis of 1,4-cyclohexadiene intermediates for terpene total synthesis",
  "Production of dihydrobenzoic acids for pharmaceutical intermediates",
  "Key step in synthesis of morphine and related alkaloids",
  "Industrial production of cyclohexene derivatives for polymer precursors"
  ],
  tags: ["reduction", "dissolving metal", "aromatic", "ammonia"],
  steps: [
  { title: "Electron Transfer", content: "Solvated electrons (from Na dissolving in NH3) add to the aromatic ring, forming a radical anion. The blue solution indicates solvated electrons.", formula: "Na  -> [NH3] Na+ + e-(solv); ArH + e-  ->  ArH--" },
  { title: "Protonation", content: "The radical anion is protonated by the alcohol (t-BuOH), generating a radical.", formula: "ArH-- + t-BuOH  ->  ArH2- + t-BuO-" },
  { title: "Second Electron Transfer & Protonation", content: "A second electron adds to form a carbanion, which is protonated again to give the 1,4-cyclohexadiene product.", formula: "ArH2- + e-  ->  ArH2-; ArH2- + t-BuOH  ->  1,4-diene" }
  ],
  conditions: {
  temperature: {
  low: { label: "-33degC (liquid NH3)", effect: "Required temperature - NH3 is liquid at -33degC. Standard Birch conditions.", type: "positive" },
  medium: { label: "Around -33degC", effect: "Optimal. Reaction proceeds smoothly in liquid ammonia.", type: "positive" },
  high: { label: "Above -33degC", effect: "NH3 boils. Reaction cannot proceed without liquid ammonia as solvent.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "NH3 may evaporate. Must maintain liquid state.", type: "negative" },
  medium: { label: "Atmospheric", effect: "Standard at -33degC. NH3 remains liquid.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed under normal conditions.", type: "neutral" }
  },
  concentration: {
  low: { label: "Low Na", effect: "Incomplete reduction. Starting material recovered.", type: "negative" },
  medium: { label: "2 equiv Na", effect: "Stoichiometric amount for full 1,4-diene formation.", type: "positive" },
  high: { label: "Excess Na", effect: "Over-reduction to cyclohexane may occur.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 2.4, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -2.4, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[3,7]]
  }
  },
  {
  id: "wolff-kishner",
  name: "Wolff-Kishner Reduction",
  category: "organic",
  summary: "Reduction of a ketone or aldehyde to a methylene group (C=O  ->  CH2) using hydrazine and strong base at high temperature. Complementary to Clemmensen reduction.",
  discovered: "Nikolai Kishner (1911) & Ludwig Wolff (1912)",
  reactionType: "Reduction (Deoxygenation)",
  equation: "RCOR' + N2H4  -> [KOH, heat/high temp] RCH2R' + N2 + H2O",
  catalyst: "KOH or NaOH, ethylene glycol solvent",
  applications: [
  "Reduction of carbonyl groups in steroid synthesis",
  "Synthesis of hydrocarbons from ketones in natural product chemistry",
  "Huang-Minlon modification used industrially for large-scale reductions",
  "Deoxygenation of aryl ketones in pharmaceutical intermediates",
  "Complementary method to Clemmensen for base-stable substrates"
  ],
  tags: ["reduction", "deoxygenation", "hydrazone", "base"],
  steps: [
  { title: "Hydrazone Formation", content: "Hydrazine reacts with the carbonyl to form a hydrazone via nucleophilic addition-elimination.", formula: "RCOR' + N2H4  ->  RC(=NNH2)R' + H2O" },
  { title: "Deprotonation", content: "Strong base (KOH) deprotonates the hydrazone N-H, generating a highly basic carbanion-like species.", formula: "RC(=NNH2)R' + OH-  ->  RC(=NNH-)R'" },
  { title: "N2 Elimination", content: "Proton shifts and N2 gas is lost as the C-N bond breaks. The resulting carbanion is protonated by solvent to give the methylene product.", formula: "RC(=NNH-)R'  ->  RCH2R' + N2 -> " }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Only hydrazone forms. Reduction does not proceed without high temperature.", type: "negative" },
  medium: { label: "~100degC", effect: "Hydrazone formation occurs but elimination of N2 is very slow.", type: "neutral" },
  high: { label: "180-230degC", effect: "Essential for the reduction step. Ethylene glycol as high-boiling solvent.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 gas escapes, driving reaction forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions. N2 evolves naturally.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains N2, may slow the elimination step.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute Base", effect: "Incomplete deprotonation. Low conversion.", type: "negative" },
  medium: { label: "Moderate KOH", effect: "Standard conditions. Good yields.", type: "positive" },
  high: { label: "Excess KOH", effect: "Drives reaction to completion. Industrial standard.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0.8, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0.8, z: -0.5 },
  { symbol: "C", color: "#555555", x: -1.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4]]
  }
  },
  {
  id: "baeyer-villiger",
  name: "Baeyer-Villiger Oxidation",
  category: "organic",
  summary: "A ketone is converted to an ester (or a cyclic ketone to a lactone) by insertion of an oxygen atom adjacent to the carbonyl using a peracid oxidant.",
  discovered: "Adolf von Baeyer & Victor Villiger, 1899",
  reactionType: "Oxidation (O-insertion)",
  equation: "RCOR' + mCPBA  ->  RCOOR' (ester)",
  catalyst: "mCPBA, CF3CO3H, or H2O2/acid",
  applications: [
  "Synthesis of caprolactone from cyclohexanone (monomer for biodegradable polymers)",
  "Production of lactones for fragrance industry (gamma-butyrolactone)",
  "Key step in steroid modification for pharmaceutical synthesis",
  "Industrial manufacture of epsilon-caprolactone for polyurethane precursors",
  "Enzymatic Baeyer-Villiger using BVMO enzymes in green chemistry"
  ],
  tags: ["oxidation", "peracid", "lactone", "oxygen insertion"],
  steps: [
  { title: "Nucleophilic Addition of Peracid", content: "The peracid oxygen attacks the electrophilic carbonyl carbon, forming a tetrahedral Criegee intermediate.", formula: "RCOR' + ArCO3H  ->  Criegee intermediate" },
  { title: "1,2-Migration (Oxygen Insertion)", content: "The group with greater migratory aptitude migrates from carbon to the oxygen of the departing carboxylate, inserting oxygen into the C-C bond.", formula: "Criegee intermediate  ->  RCOOR' + ArCOOH" },
  { title: "Product Formation", content: "The ester (or lactone from cyclic ketones) is formed. Migratory aptitude: tert > sec > aryl > primary > methyl.", formula: "Ketone  ->  Ester (O inserted next to more substituted group)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0degC", effect: "Controlled conditions to avoid over-oxidation. Good for sensitive substrates.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard conditions. Most substrates react efficiently.", type: "positive" },
  high: { label: "High Temp", effect: "Over-oxidation and epoxidation of alkenes may compete.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not required.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower but more selective.", type: "neutral" },
  medium: { label: "1.1-1.5 equiv mCPBA", effect: "Standard stoichiometry. Good yields.", type: "positive" },
  high: { label: "Excess Peracid", effect: "Double oxidation or epoxidation side reactions.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: -0.3, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3]]
  }
  },
  {
  id: "swern-oxidation",
  name: "Swern Oxidation",
  category: "organic",
  summary: "A mild oxidation of primary and secondary alcohols to aldehydes and ketones using oxalyl chloride, DMSO, and a base (Et3N). Avoids over-oxidation to carboxylic acids.",
  discovered: "Daniel Swern, 1978",
  reactionType: "Oxidation (Alcohol  ->  Aldehyde/Ketone)",
  equation: "RCH2OH + (COCl)2/DMSO  -> [Et3N] RCHO + CO2 + CO + Me2S + HCl",
  catalyst: "Oxalyl chloride, DMSO, Et3N (stoichiometric)",
  applications: [
  "Selective oxidation of primary alcohols to aldehydes without over-oxidation",
  "Key step in total synthesis of erythromycin and other macrolide antibiotics",
  "Pharmaceutical synthesis where chromium-free oxidation is needed (no toxic Cr waste)",
  "Synthesis of sensitive aldehydes that would decompose under harsher conditions",
  "Large-scale industrial aldehyde synthesis with mild conditions"
  ],
  tags: ["oxidation", "mild", "DMSO", "aldehyde synthesis"],
  steps: [
  { title: "Activation of DMSO", content: "Oxalyl chloride reacts with DMSO at -78degC to form a chlorosulfonium ion, the active oxidant. CO and CO2 are released.", formula: "(COCl)2 + DMSO  ->  [Me2S+-Cl] + CO + CO2" },
  { title: "Alcohol Attack", content: "The alcohol oxygen displaces chloride from the sulfonium ion, forming an alkoxysulfonium intermediate.", formula: "RCH2OH + [Me2S+-Cl]  ->  RCH2-O-S+Me2 + HCl" },
  { title: "Intramolecular Elimination", content: "Triethylamine deprotonates the alpha-carbon. An intramolecular E2 elimination gives the carbonyl product and dimethyl sulfide.", formula: "RCH2-O-S+Me2 + Et3N  ->  RCHO + Me2S + Et3NH+Cl-" }
  ],
  conditions: {
  temperature: {
  low: { label: "-78degC", effect: "Critical for selectivity. Prevents Pummerer rearrangement side reaction. Must start cold.", type: "positive" },
  medium: { label: "-78degC  ->  RT", effect: "Warm to room temperature after base addition for completion.", type: "positive" },
  high: { label: "Above 0degC initially", effect: "Uncontrolled reaction, side products dominate. Pummerer rearrangement occurs.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Gases (CO, CO2) escape faster. Slightly faster activation.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains gaseous byproducts. Not recommended.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower but cleaner reaction.", type: "neutral" },
  medium: { label: "0.1-0.5 M", effect: "Standard preparative concentration.", type: "positive" },
  high: { label: "Concentrated", effect: "Exothermic activation may be difficult to control.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.9, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.6, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.6, y: -0.8, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3],[0,4]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -0.9, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "cope-rearrangement",
  name: "Cope Rearrangement",
  category: "rearrangement",
  summary: "A thermal [3,3]-sigmatropic rearrangement of 1,5-dienes. The oxy-Cope variant (with a hydroxyl group) is particularly useful after treatment with base.",
  discovered: "Arthur C. Cope, 1940",
  reactionType: "Sigmatropic Rearrangement [3,3]",
  equation: "1,5-diene  -> [heat] isomeric 1,5-diene",
  catalyst: "Heat (200-300degC) or KH for oxy-Cope",
  applications: [
  "Oxy-Cope variant used extensively in natural product total synthesis",
  "Synthesis of medium-ring compounds and macrocycles",
  "Construction of complex carbon skeletons in terpene synthesis",
  "Anionic oxy-Cope accelerated 101-deg-101-. times with KH base",
  "Synthesis of bridged bicyclic systems in alkaloid chemistry"
  ],
  tags: ["pericyclic", "sigmatropic", "thermal", "1,5-diene"],
  steps: [
  { title: "Chair-like Transition State", content: "The 1,5-diene adopts a chair-like conformation for the [3,3]-sigmatropic shift. Both termini of the diene are positioned for bond reorganization.", formula: "1,5-diene  ->  chair-like TS" },
  { title: "Concerted Bond Reorganization", content: "The sigma-bond between C3-C4 breaks while a new sigma-bond forms between C1-C6. Simultaneously, the pi-bonds shift position.", formula: "[3,3] shift: C1-C2=C3-C4=C5-C6  ->  C1=C2-C3=C4-C5=C6" },
  { title: "Product Diene", content: "An isomeric 1,5-diene is produced. In the oxy-Cope variant, the product enol tautomerizes to a ketone.", formula: "Product: isomeric 1,5-diene (or ketone for oxy-Cope)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Room Temp", effect: "Thermal Cope does not proceed. Oxy-Cope with KH can work at RT.", type: "neutral" },
  medium: { label: "200-250degC", effect: "Standard for thermal Cope. Clean rearrangement.", type: "positive" },
  high: { label: ">300degC", effect: "Competing retro-Diels-Alder and decomposition.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect on unimolecular reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Accelerates due to negative 'V .", type: "positive" }
  },
  concentration: {
  low: { label: "Neat/Dilute", effect: "Unimolecular - no concentration dependence.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard.", type: "positive" },
  high: { label: "High", effect: "Intermolecular side reactions possible at high temp.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: -1.0, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 3.0, y: -0.2, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: -0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 3.0, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5]]
  }
  },
  {
  id: "pinacol-rearrangement",
  name: "Pinacol Rearrangement",
  category: "rearrangement",
  summary: "A 1,2-diol (pinacol) undergoes acid-catalyzed dehydration and 1,2-alkyl/aryl migration to form a ketone (pinacolone). A classic example of a 1,2-shift.",
  discovered: "Wilhelm Rudolph Fittig, 1860",
  reactionType: "1,2-Rearrangement",
  equation: "(CH3)2C(OH)-C(OH)(CH3)2  -> [H+] (CH3)3C-CO-CH3 + H2O",
  catalyst: "H2SO4 or BF3.Et2O",
  applications: [
  "Synthesis of pinacolone (3,3-dimethyl-2-butanone) industrially",
  "Ring contraction reactions in terpene chemistry",
  "Stereoselective synthesis of quaternary carbon centers",
  "Synthesis of spiro compounds via pinacol-type rearrangements",
  "Key step in synthesis of certain steroid frameworks"
  ],
  tags: ["rearrangement", "1,2-shift", "carbocation", "diol"],
  steps: [
  { title: "Protonation of Hydroxyl", content: "Acid protonates one of the two hydroxyl groups, converting it into a good leaving group (water).", formula: "(CH3)2C(OH)-C(OH)(CH3)2 + H+  ->  (CH3)2C(OH2+)-C(OH)(CH3)2" },
  { title: "Water Loss & Carbocation Formation", content: "Water departs, forming a carbocation adjacent to the remaining hydroxyl group.", formula: "(CH3)2C+-C(OH)(CH3)2 + H2O" },
  { title: "1,2-Methyl Migration", content: "A methyl group migrates from the carbon bearing OH to the carbocation center, forming a more stable oxocarbenium ion that collapses to a ketone.", formula: "(CH3)2C+-C(OH)(CH3)2  ->  (CH3)3C-CO-CH3" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Protonation occurs but migration is slow.", type: "negative" },
  medium: { label: "Room Temp to 60degC", effect: "Optimal for most pinacol rearrangements.", type: "positive" },
  high: { label: "High Temp", effect: "May cause elimination instead of rearrangement.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No significant benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute Acid", effect: "Slow protonation. Incomplete reaction.", type: "negative" },
  medium: { label: "Moderate H2SO4", effect: "Clean rearrangement with good yields.", type: "positive" },
  high: { label: "Concentrated Acid", effect: "Very fast but dehydration to diene may compete.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 1.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 1.3, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.3, y: 1.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.3, y: 1.8, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3],[2,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[0,3]]
  }
  },
  {
  id: "williamson-ether",
  name: "Williamson Ether Synthesis",
  category: "substitution",
  summary: "An alkoxide ion (formed by deprotonating an alcohol with a strong base) undergoes SN2 reaction with a primary alkyl halide to form an ether.",
  discovered: "Alexander William Williamson, 1850",
  reactionType: "SN2 Substitution",
  equation: "R-O- + R'-X  ->  R-O-R' + X-",
  catalyst: "NaH or NaOH (for alkoxide formation)",
  applications: [
  "Industrial synthesis of diethyl ether and MTBE (fuel additive)",
  "Synthesis of crown ethers for phase-transfer catalysis",
  "Production of anisole and other aryl ethers for fragrance industry",
  "Synthesis of polyethylene glycol (PEG) ethers for pharmaceuticals",
  "Preparation of chiral ethers for asymmetric synthesis"
  ],
  tags: ["ether", "SN2", "alkoxide", "substitution"],
  steps: [
  { title: "Alkoxide Formation", content: "A strong base (NaH) deprotonates the alcohol to generate the alkoxide nucleophile.", formula: "ROH + NaH  ->  RO-Na+ + H2 -> " },
  { title: "SN2 Displacement", content: "The alkoxide attacks the primary alkyl halide in backside fashion, displacing the halide leaving group.", formula: "RO- + R'-CH2-X  ->  R-O-CH2-R' + X-" },
  { title: "Ether Product", content: "The unsymmetrical or symmetrical ether is formed. Primary halides are required to avoid E2 elimination.", formula: "Product: R-O-R' (ether)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "SN2 is slower but may be needed for very reactive substrates.", type: "neutral" },
  medium: { label: "Room Temp to 60degC", effect: "Standard conditions. Good SN2 rate.", type: "positive" },
  high: { label: "High Temp", effect: "E2 elimination competes, forming alkene instead of ether.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Slightly favors SN2 over E2.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower SN2. Longer reaction times.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yields with efficient conversion.", type: "positive" },
  high: { label: "Concentrated", effect: "Fast reaction but may see dialkylation.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 3.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[1,2]]
  }
  },
  {
  id: "sandmeyer-reaction",
  name: "Sandmeyer Reaction",
  category: "substitution",
  summary: "An aryl diazonium salt is converted to an aryl halide (Cl, Br) or cyanide using a copper(I) catalyst. A versatile method for aromatic C-X bond formation.",
  discovered: "Traugott Sandmeyer, 1884",
  reactionType: "Radical Substitution via Diazonium",
  equation: "ArN2+ + CuX  ->  ArX + N2 ->  + Cu2+",
  catalyst: "CuCl, CuBr, or CuCN",
  applications: [
  "Introduction of Cl, Br, CN groups onto aromatic rings in dye synthesis",
  "Manufacturing of chlorobenzene and bromobenzene for agrochemicals",
  "Synthesis of aryl nitriles - precursors to carboxylic acids and amines",
  "Production of pharmaceutical intermediates with specific halogen patterns",
  "Combinatorial chemistry for generating halogenated aromatic libraries"
  ],
  tags: ["diazonium", "copper", "halogenation", "aromatic"],
  steps: [
  { title: "Diazotization", content: "Primary aromatic amine is treated with NaNO2 and HCl at 0-5degC to form the diazonium salt.", formula: "ArNH2 + NaNO2 + 2HCl  ->  ArN2+Cl- + NaCl + 2H2O" },
  { title: "Radical Transfer with Cu(I)", content: "Cu(I) donates an electron to the diazonium ion, generating an aryl radical and N2 gas. Cu(I) is oxidized to Cu(II).", formula: "ArN2+ + CuX  ->  Ar- + N2 + CuX2" },
  { title: "Halide Capture", content: "The aryl radical abstracts X from CuX2 to form the aryl halide product and regenerate Cu(I).", formula: "Ar- + CuX2  ->  ArX + CuX" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Essential for diazotization. Diazonium salts decompose above ~10degC.", type: "positive" },
  medium: { label: "Room Temp", effect: "Sandmeyer step with CuX can proceed at RT after diazonium formation.", type: "positive" },
  high: { label: "High Temp", effect: "Diazonium decomposes to phenol. Yield drops dramatically.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes, driving reaction forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow reaction with CuX.", type: "negative" },
  medium: { label: "Moderate", effect: "Good conversion.", type: "positive" },
  high: { label: "Concentrated", effect: "Fast but diazonium may decompose before reacting with Cu.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.3, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.3, y: 0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.8, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "kolbe-schmitt",
  name: "Kolbe-Schmitt Reaction",
  category: "addition",
  summary: "Sodium phenoxide reacts with CO2 under pressure and heat to introduce a carboxyl group ortho to the phenol, forming salicylic acid (aspirin precursor).",
  discovered: "Hermann Kolbe (1860) & Rudolf Schmitt (1885)",
  reactionType: "Carboxylation (Electrophilic Addition)",
  equation: "C6H5ONa + CO2  -> [125degC, pressure] o-HOC6H4COONa",
  catalyst: "Heat and pressure (no metal catalyst)",
  applications: [
  "Industrial synthesis of salicylic acid - precursor to aspirin (acetylsalicylic acid)",
  "Production of 2-hydroxynaphthoic acid for dye synthesis (Tobias acid)",
  "Manufacturing of para-hydroxybenzoic acid (PHBA) for paraben preservatives",
  "Synthesis of herbicide precursors (2,4-D related compounds)",
  "Foundation of modern aspirin industry - one of the most important industrial reactions"
  ],
  tags: ["carboxylation", "phenol", "CO2", "salicylic acid"],
  steps: [
  { title: "CO2 Coordination", content: "CO2 acts as a weak electrophile and coordinates with the electron-rich aromatic ring of sodium phenoxide.", formula: "C6H5O-Na+ + CO2  ->  intermediate complex" },
  { title: "Electrophilic Carboxylation", content: "CO2 attacks the ortho position of the phenoxide ring in a concerted electrophilic aromatic substitution mechanism.", formula: "Complex  ->  o-carboxylated cyclohexadienone sodium salt" },
  { title: "Tautomerization & Acidification", content: "The intermediate rearranges to form sodium salicylate. Acid treatment gives salicylic acid.", formula: "Na salt + HCl  ->  salicylic acid (o-HOC6H4COOH)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "CO2 does not have enough energy to carboxylate the ring.", type: "negative" },
  medium: { label: "125degC (Na salt)", effect: "Ortho product (salicylic acid) forms selectively with Na.", type: "positive" },
  high: { label: "150-200degC (K salt)", effect: "Para product forms with potassium phenoxide.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Insufficient CO2 concentration for reaction.", type: "negative" },
  medium: { label: "5-7 atm CO2", effect: "Standard industrial conditions.", type: "positive" },
  high: { label: "100+ atm", effect: "Higher conversion but equipment cost increases.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Low yield. CO2 must be in excess.", type: "negative" },
  medium: { label: "Moderate", effect: "Good conversion to salicylate.", type: "positive" },
  high: { label: "Dry Solid + CO2", effect: "Solid-state reaction used industrially. Best yields.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.6, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.6, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: 1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.4, y: 2.6, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.5, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,7],[7,8],[7,9]]
  }
  },
  {
  id: "curtius-rearrangement",
  name: "Curtius Rearrangement",
  category: "rearrangement",
  summary: "An acyl azide is thermally or photolytically decomposed to an isocyanate via loss of N2. The isocyanate can be trapped to give amines, carbamates, or ureas.",
  discovered: "Theodor Curtius, 1890",
  reactionType: "Rearrangement (Acyl Azide  ->  Isocyanate)",
  equation: "RCON3  -> [heat] R-N=C=O + N2 -> ",
  catalyst: "Heat or UV light (no catalyst needed)",
  applications: [
  "Synthesis of primary amines from carboxylic acids (with one fewer step than Hofmann)",
  "Production of Boc-protected amines for peptide synthesis",
  "Synthesis of carbamates (urethanes) for polyurethane chemistry",
  "Industrial production of isocyanates for coatings and adhesives",
  "Key step in synthesis of beta-lactam antibiotics"
  ],
  tags: ["rearrangement", "azide", "isocyanate", "nitrogen"],
  steps: [
  { title: "Acyl Azide Formation", content: "Carboxylic acid is converted to an acid chloride, then treated with NaN3 to form the acyl azide.", formula: "RCOCl + NaN3  ->  RCON3 + NaCl" },
  { title: "Thermal Decomposition & Migration", content: "Heating the acyl azide causes loss of N2 and simultaneous 1,2-migration of R from C to N, forming the isocyanate.", formula: "RCON3  -> [heat] R-N=C=O + N2 -> " },
  { title: "Trapping the Isocyanate", content: "Water gives amine (via carbamic acid). Alcohol gives carbamate. The isocyanate is the key branching intermediate.", formula: "R-N=C=O + H2O  ->  RNH2 + CO2" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Acyl azide is stable. No rearrangement occurs.", type: "negative" },
  medium: { label: "60-80degC", effect: "Standard for thermal Curtius. Clean N2 loss.", type: "positive" },
  high: { label: ">120degC", effect: "Very fast but isocyanate may react further or trimerize.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Facilitates N2 escape.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains N2, may slow reaction.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Unimolecular - no concentration dependence. Safer for azides.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Safety hazard - azides can be explosive at high concentration.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.3, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.3, y: 0.3, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.3, y: 0.6, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.3, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "henry-reaction",
  name: "Henry Reaction (Nitroaldol)",
  category: "addition",
  summary: "A nitroalkane reacts with an aldehyde or ketone in the presence of base to form a beta-nitro alcohol. The nitro group can be further transformed to amines, carboxylic acids, or alkenes.",
  discovered: "Louis Henry, 1895",
  reactionType: "Nucleophilic Addition (Nitroaldol)",
  equation: "RCH2NO2 + R'CHO  -> [base] R'CH(OH)CH(R)NO2",
  catalyst: "Base (NaOH, K2CO3, or organocatalyst)",
  applications: [
  "Synthesis of amino alcohols (via reduction of nitro group) for drug synthesis",
  "Asymmetric Henry reaction for chiral beta-nitro alcohols in pharmaceutical synthesis",
  "Production of nitroalkene intermediates via dehydration (Nef reaction precursors)",
  "Synthesis of chloramphenicol (antibiotic) key intermediate",
  "Preparation of alpha-amino acids via nitroaldol then reduction"
  ],
  tags: ["nitroalkane", "aldol-type", "base-catalyzed", "amino alcohol"],
  steps: [
  { title: "Deprotonation of Nitroalkane", content: "Base removes the alpha-hydrogen from the nitroalkane. The resulting nitronate anion is stabilized by resonance with the nitro group.", formula: "RCH2NO2 + B-  ->  RCH-NO2 (nitronate)" },
  { title: "Nucleophilic Addition", content: "The nitronate carbon attacks the electrophilic carbonyl carbon of the aldehyde, forming a new C-C bond.", formula: "RCH-NO2 + R'CHO  ->  R'CH(O-)CH(R)NO2" },
  { title: "Protonation", content: "The alkoxide is protonated to give the beta-nitro alcohol product.", formula: "Alkoxide + H2O  ->  beta-nitro alcohol + OH-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-20degC)", effect: "Better stereoselectivity. Used in asymmetric Henry reactions.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard conditions for racemic Henry reaction.", type: "positive" },
  high: { label: "High Temp", effect: "Retro-Henry and elimination (Nef reaction) may occur.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yields.", type: "positive" },
  high: { label: "Concentrated", effect: "May give bis-addition or polymerization.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.6, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2],[1,3],[4,5],[4,6]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 1.2, z: 0 },
  { symbol: "N", color: "#4488ff", x: -2.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.3, y: 1.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[0,3],[2,4]]
  }
  },
  {
  id: "mannich-reaction",
  name: "Mannich Reaction",
  category: "condensation",
  summary: "A three-component condensation between a non-enolizable aldehyde (formaldehyde), a primary or secondary amine, and a CH-acidic compound to form a beta-amino carbonyl (Mannich base).",
  discovered: "Carl Mannich, 1912",
  reactionType: "Three-Component Condensation",
  equation: "HCHO + R2NH + R'COCH3  ->  R'COCH2CH2NR2 + H2O",
  catalyst: "Acid (HCl) or proline organocatalyst",
  applications: [
  "Synthesis of tramadol (painkiller) and other pharmaceutical amines",
  "Production of Gramine alkaloid from indole",
  "Synthesis of Robinson's tropinone (classic biomimetic synthesis)",
  "Manufacturing of Mannich bases used as fuel and lubricant additives",
  "Asymmetric Mannich reactions for chiral amine drug synthesis"
  ],
  tags: ["multicomponent", "amine", "iminium", "condensation"],
  steps: [
  { title: "Iminium Ion Formation", content: "The amine reacts with formaldehyde to form an iminium ion, which is the key electrophilic species.", formula: "HCHO + R2NH  -> [H+] R2N+=CH2 + H2O" },
  { title: "Enolization of CH-acidic compound", content: "The ketone (or other CH-acidic compound) forms its enol or enolate under reaction conditions.", formula: "R'COCH3  <=>  R'C(OH)=CH2" },
  { title: "Mannich Addition", content: "The enol attacks the iminium ion electrophile, forming the new C-C bond and giving the beta-amino ketone product.", formula: "Enol + R2N+=CH2  ->  R'COCH2CH2NR2 (Mannich base)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow iminium formation. Used for asymmetric variants with organocatalysts.", type: "neutral" },
  medium: { label: "Room Temp to 60degC", effect: "Standard conditions. Good conversion.", type: "positive" },
  high: { label: "High Temp", effect: "Retro-Mannich and elimination to enone may occur.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Three-component reaction is very slow when dilute.", type: "negative" },
  medium: { label: "Moderate", effect: "Good balance. Standard preparative conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Faster but bis-Mannich products may form.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.5, y: 1.2, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0.8, z: 0.5 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 }
  ],
  bonds: [[0,1],[2,3],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4]]
  }
  },
  {
  id: "reformatsky-reaction",
  name: "Reformatsky Reaction",
  category: "addition",
  summary: "An alpha-halo ester reacts with zinc metal to form an organozinc species, which then adds to an aldehyde or ketone to give a beta-hydroxy ester.",
  discovered: "Sergei Reformatsky, 1887",
  reactionType: "Organozinc Addition",
  equation: "BrCH2COOR + Zn + R'CHO  ->  R'CH(OH)CH2COOR",
  catalyst: "Zinc metal in THF or diethyl ether",
  applications: [
  "Synthesis of beta-hydroxy esters for pharmaceutical intermediates",
  "Production of beta-lactams (antibiotics) via cyclization of Reformatsky products",
  "Synthesis of statins (cholesterol-lowering drugs) intermediates",
  "Alternative to Grignard when ester group must be preserved",
  "Intramolecular Reformatsky for macrolide antibiotic synthesis"
  ],
  tags: ["organozinc", "addition", "beta-hydroxy ester", "zinc"],
  steps: [
  { title: "Zinc Insertion", content: "Zinc metal inserts into the C-Br bond of the alpha-bromo ester, forming the Reformatsky reagent (organozinc enolate).", formula: "BrCH2COOR + Zn  ->  BrZnCH2COOR" },
  { title: "Nucleophilic Addition to Carbonyl", content: "The zinc enolate adds to the aldehyde/ketone carbonyl carbon, forming a zinc alkoxide.", formula: "BrZnCH2COOR + R'CHO  ->  R'CH(OZnBr)CH2COOR" },
  { title: "Hydrolysis", content: "Aqueous acid workup protonates the alkoxide to give the beta-hydroxy ester product.", formula: "Zinc alkoxide + H3O+  ->  R'CH(OH)CH2COOR + ZnBr(OH)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Zinc insertion is slow. May need sonication or activation.", type: "negative" },
  medium: { label: "Reflux in THF (~65degC)", effect: "Standard conditions for zinc insertion and addition.", type: "positive" },
  high: { label: "High Temp", effect: "Ester group may hydrolyze or compete with Claisen condensation.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard under inert atmosphere.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "May lead to Claisen-type self-condensation.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Br", color: "#aa4400", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.8, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.8, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[2,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.3, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.1, y: 1.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4],[1,5]]
  }
  },
  {
  id: "sharpless-epoxidation",
  name: "Sharpless Asymmetric Epoxidation",
  category: "addition",
  summary: "Enantioselective epoxidation of allylic alcohols using titanium(IV) isopropoxide, diethyl tartrate (chiral ligand), and tert-butyl hydroperoxide (TBHP) as oxidant.",
  discovered: "K. Barry Sharpless, 1980 (Nobel Prize 2001)",
  reactionType: "Asymmetric Epoxidation",
  equation: "Allylic alcohol + TBHP  -> [Ti(OiPr)4, DET] chiral epoxy alcohol",
  catalyst: "Ti(OiPr)4, (+) or (-)-DET, TBHP",
  applications: [
  "Enantioselective synthesis of chiral epoxides for drug manufacturing",
  "Key step in synthesis of the Taxol side chain",
  "Production of disparlure (gypsy moth pheromone) for pest control",
  "Synthesis of glycidol - building block for many chiral pharmaceuticals",
  "Introduction of chirality in total synthesis of natural products"
  ],
  tags: ["asymmetric", "epoxidation", "titanium", "chiral"],
  steps: [
  { title: "Catalyst Assembly", content: "Ti(OiPr)4 binds with diethyl tartrate (DET) to form a chiral titanium-tartrate complex. This complex provides the chiral environment.", formula: "Ti(OiPr)4 + DET  ->  Ti-tartrate complex" },
  { title: "Substrate & Oxidant Binding", content: "The allylic alcohol and TBHP coordinate to the titanium center. The chirality of the tartrate controls which face of the alkene is exposed.", formula: "Ti complex + allylic alcohol + TBHP  ->  loaded complex" },
  { title: "Enantioselective Oxygen Transfer", content: "TBHP delivers oxygen to one face of the alkene in a stereochemically controlled manner. The epoxide forms with >90% ee.", formula: "Loaded complex  ->  chiral epoxy alcohol + t-BuOH" }
  ],
  conditions: {
  temperature: {
  low: { label: "-20degC", effect: "Optimal for enantioselectivity. Standard Sharpless conditions.", type: "positive" },
  medium: { label: "0degC", effect: "Faster but slightly reduced ee.", type: "neutral" },
  high: { label: "Room Temp", effect: "Fast but poor enantioselectivity. Not recommended.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "5-10 mol% Ti catalyst is standard. Dilute conditions are fine.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard. 4- molecular sieves needed to keep anhydrous.", type: "positive" },
  high: { label: "Concentrated", effect: "Non-productive Ti complexes form. Lower ee.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0.3, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.1, y: -0.3, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0.3, z: 0 },
  { symbol: "C", color: "#555555", x: 0.3, y: 0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.3, y: 1.3, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0.3, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.1, y: -0.3, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,2],[1,3],[3,4],[4,5]]
  }
  },
  {
  id: "stetter-reaction",
  name: "Stetter Reaction",
  category: "addition",
  summary: "An umpolung reaction where an aldehyde is converted to an acyl anion equivalent using a thiazolium NHC catalyst, which then adds 1,4- to a Michael acceptor.",
  discovered: "Hermann Stetter, 1976",
  reactionType: "Umpolung 1,4-Addition",
  equation: "RCHO + CH2=CH-EWG  -> [NHC catalyst] RCO-CH2CH2-EWG",
  catalyst: "Thiazolium salt (NHC catalyst), base",
  applications: [
  "Synthesis of 1,4-dicarbonyl compounds - difficult by conventional means",
  "Key step in intramolecular Stetter for chromanone natural products",
  "Asymmetric Stetter reaction for chiral 1,4-diketones in drug synthesis",
  "Construction of complex heterocycles via intramolecular cyclization",
  "Synthesis of keto-esters and keto-nitriles for pharmaceutical intermediates"
  ],
  tags: ["umpolung", "NHC", "acyl anion", "1,4-addition"],
  steps: [
  { title: "Breslow Intermediate Formation", content: "The NHC catalyst attacks the aldehyde. After proton transfer, the Breslow intermediate forms - an acyl anion equivalent with reversed polarity (umpolung).", formula: "RCHO + NHC  ->  Breslow intermediate (acyl anion equivalent)" },
  { title: "1,4-Conjugate Addition", content: "The nucleophilic Breslow intermediate attacks the beta-carbon of the Michael acceptor in a 1,4-fashion.", formula: "Breslow + CH2=CH-EWG  ->  1,4-adduct-NHC" },
  { title: "Catalyst Release", content: "The NHC catalyst is released from the product, regenerating the free carbene for another catalytic cycle.", formula: "Adduct-NHC  ->  RCO-CH2CH2-EWG + NHC (regenerated)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow catalytic turnover. Used for asymmetric variants for better ee.", type: "neutral" },
  medium: { label: "Room Temp to 60degC", effect: "Standard conditions for intermolecular Stetter.", type: "positive" },
  high: { label: "High Temp", effect: "NHC catalyst may decompose. Retro-Stetter possible.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Favors intramolecular Stetter cyclization.", type: "neutral" },
  medium: { label: "Moderate", effect: "Good for intermolecular reaction.", type: "positive" },
  high: { label: "Concentrated", effect: "Benzoin condensation (self-coupling) may compete.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0.3, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.5, y: 0.2, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -0.3, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4]]
  }
  },
  {
  id: "clemmensen-reduction",
  name: "Clemmensen Reduction",
  category: "organic",
  summary: "Reduction of ketones and aldehydes to methylene groups (C=O  ->  CH2) using zinc amalgam (Zn/Hg) and concentrated hydrochloric acid. Complementary to Wolff-Kishner (acidic vs basic conditions).",
  discovered: "Erik Christian Clemmensen, 1913",
  reactionType: "Reduction (Deoxygenation)",
  equation: "RCOR' + Zn(Hg)/HCl  ->  RCH2R' + H2O",
  catalyst: "Zn(Hg) amalgam, conc. HCl",
  applications: [
  "Reduction of aryl ketones to alkylbenzenes in aromatic chemistry",
  "Complementary to Wolff-Kishner for acid-stable, base-sensitive substrates",
  "Synthesis of hydrocarbons from Friedel-Crafts acylation products",
  "Industrial preparation of alkyl aromatics from aryl ketones",
  "Total synthesis of steroids and terpenes - deoxygenation step"
  ],
  tags: ["reduction", "zinc", "deoxygenation", "acidic"],
  steps: [
  { title: "Surface Adsorption", content: "The ketone adsorbs onto the zinc-mercury amalgam surface. The zinc surface provides electrons for the reduction.", formula: "RCOR' + Zn(Hg) surface  ->  adsorbed complex" },
  { title: "Stepwise Reduction", content: "Electrons from zinc reduce the carbonyl in a stepwise manner through alcohol and/or carbene intermediates on the metal surface.", formula: "C=O  -> [Zn/H+] C(OH)H  -> [Zn/H+] CH2" },
  { title: "Desorption", content: "The reduced hydrocarbon is released from the metal surface. ZnCl2 forms as the byproduct.", formula: "RCOR' + Zn + 2HCl  ->  RCH2R' + ZnCl2 + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction is too slow on the zinc surface.", type: "negative" },
  medium: { label: "Reflux (~100degC)", effect: "Standard conditions. Conc. HCl at reflux drives reduction.", type: "positive" },
  high: { label: "Vigorous Reflux", effect: "Faster but zinc dissolves rapidly, shortening useful reaction time.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCl may evaporate. Not recommended.", type: "negative" },
  medium: { label: "Atmospheric", effect: "Standard. Must use reflux condenser.", type: "positive" },
  high: { label: "High Pressure", effect: "Not standard.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute HCl", effect: "Insufficient proton source. Poor reduction.", type: "negative" },
  medium: { label: "Concentrated HCl", effect: "Standard conditions. Excess HCl maintains acidity.", type: "positive" },
  high: { label: "Very Concentrated", effect: "Fast dissolution of Zn. Need excess Zn(Hg).", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0.8, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0.8, z: -0.5 },
  { symbol: "C", color: "#555555", x: -1.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4]]
  }
  },
  {
  id: "knoevenagel-condensation",
  name: "Knoevenagel Condensation",
  category: "condensation",
  summary: "An active methylene compound (with two electron-withdrawing groups) condenses with an aldehyde or ketone in the presence of a weak base to form an alpha,beta-unsaturated product with loss of water.",
  discovered: "Emil Knoevenagel, 1898",
  reactionType: "Condensation (C=C formation)",
  equation: "RCHO + CH2(EWG)2  -> [base] RCH=C(EWG)2 + H2O",
  catalyst: "Piperidine, pyridine, or amino acid catalyst",
  applications: [
  "Synthesis of coumarin (fragrance and pharmaceutical) from salicylaldehyde",
  "Production of cinnamic acid derivatives for sunscreen chemicals",
  "Synthesis of leflunomide (rheumatoid arthritis drug) intermediate",
  "Manufacturing of laser dyes and optical brighteners",
  "Key step in Doebner modification for alpha,beta-unsaturated acid synthesis"
  ],
  tags: ["condensation", "active methylene", "dehydration", "alkene"],
  steps: [
  { title: "Deprotonation of Active Methylene", content: "The weak base deprotonates CH2(EWG)2 to form the stabilized carbanion. Two EWGs make the alpha-hydrogens very acidic.", formula: "CH2(EWG)2 + Base  ->  -CH(EWG)2 + Base.H+" },
  { title: "Aldol-like Addition", content: "The carbanion attacks the aldehyde carbonyl carbon, forming a beta-hydroxy intermediate (aldol-type product).", formula: "-CH(EWG)2 + RCHO  ->  RCH(O-)CH(EWG)2" },
  { title: "Dehydration", content: "Water is eliminated from the beta-hydroxy intermediate. The conjugated product is strongly stabilized by the two EWGs.", formula: "RCH(OH)CH(EWG)2  ->  RCH=C(EWG)2 + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow condensation. Aldol intermediate may accumulate.", type: "negative" },
  medium: { label: "Room Temp to 80degC", effect: "Optimal for most substrates. Dehydration proceeds readily.", type: "positive" },
  high: { label: "High Temp", effect: "Complete conversion. May cause decarboxylation (Doebner modification).", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Helps remove water, improving yield.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains water, may lower yield.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yields.", type: "positive" },
  high: { label: "Concentrated", effect: "Faster but self-condensation of aldehyde may compete.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: -0.6, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.0, y: -0.6, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.2, y: -0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.7, y: -0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[1,3]]
  }
  },
  {
  id: "reimer-tiemann",
  name: "Reimer-Tiemann Reaction",
  category: "substitution",
  summary: "Phenol reacts with chloroform and aqueous NaOH to introduce a formyl group (-CHO) at the ortho position, producing salicylaldehyde.",
  discovered: "Karl Reimer & Ferdinand Tiemann, 1876",
  reactionType: "Electrophilic Aromatic Substitution (EAS)",
  equation: "C6H5OH + CHCl3 + 3NaOH  ->  o-HOC6H4CHO + 3NaCl + 2H2O",
  catalyst: "CHCl3 / NaOH (aqueous)",
  applications: [
  "Industrial synthesis of salicylaldehyde - precursor to perfumes and dyes",
  "Production of coumarin (fragrance) via salicylaldehyde",
  "Synthesis of agrochemicals and pharmaceutical chelating agents",
  "Manufacture of flavoring agents like vanillin (via related pathways)",
  "Preparation of precursors for Schiff base ligands in coordination chemistry"
  ],
  tags: ["carbene", "formylation", "phenol", "ortho-selectivity"],
  steps: [
  { title: "Dichlorocarbene Formation", content: "Chloroform reacts with NaOH to form dichlorocarbene (:CCl2), a highly reactive electrophile.", formula: "CHCl3 + OH-  ->  :CCl2 + H2O + Cl-" },
  { title: "Electrophilic Attack", content: "The dichlorocarbene attacks the phenoxide ion at the ortho position, forming a dichloromethyl intermediate.", formula: "C6H5O- + :CCl2  ->  ortho-intermediate" },
  { title: "Hydrolysis & Tautomerization", content: "The dichloromethyl group is hydrolyzed by NaOH to an aldehyde group, followed by acidification to give salicylaldehyde.", formula: "Ar-CHCl2 + 2OH-  ->  Ar-CHO + 2Cl- + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Carbene formation is slow. Poor yield.", type: "negative" },
  medium: { label: "60-70degC", effect: "Optimal for carbene generation and substitution.", type: "positive" },
  high: { label: "High Temp", effect: "Chloroform may evaporate; side reactions increase.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Slightly increases yield by keeping CHCl3 in solution.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow reaction rate for carbene attack.", type: "negative" },
  medium: { label: "Moderate (3M NaOH)", effect: "Good balance of rate and selectivity.", type: "positive" },
  high: { label: "Concentrated", effect: "Increases rate but para-isomer may increase.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 2.3, y: 0.8, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 2.3, y: -0.8, z: 0 }
  ],
  bonds: [[0,1],[2,3],[2,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: -1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[0,3]]
  }
  },
  {
  id: "gattermann-koch",
  name: "Gattermann-Koch Reaction",
  category: "substitution",
  summary: "Benzene or alkylbenzenes react with carbon monoxide and hydrogen chloride in the presence of AlCl3/CuCl to form benzaldehyde derivatives.",
  discovered: "Ludwig Gattermann & Julius Arnold Koch, 1897",
  reactionType: "Electrophilic Aromatic Substitution (EAS)",
  equation: "C6H6 + CO + HCl  -> [AlCl3, CuCl] C6H5CHO + HCl",
  catalyst: "AlCl3, CuCl (co-catalyst)",
  applications: [
  "Industrial preparation of benzaldehyde from benzene",
  "Synthesis of p-tolualdehyde from toluene",
  "Production of pharmaceutical intermediates (aldehydes)",
  "Manufacturing of flavoring and fragrance components",
  "Preparation of precursors for polymer resins"
  ],
  tags: ["formylation", "carbon monoxide", "Lewis acid", "aromatic"],
  steps: [
  { title: "Formyl Cation Activation", content: "CO and HCl react in the presence of AlCl3 and CuCl to form a formyl cation equivalent (CHO+).", formula: "CO + HCl + AlCl3  ->  [HCO+][AlCl4-]" },
  { title: "Electrophilic Attack", content: "The formyl species attacks the aromatic ring to form a sigma-complex.", formula: "C6H6 + [HCO]+  ->  [C6H6CHO]+" },
  { title: "Rearomatization", content: "Loss of a proton restores the aromatic ring, yielding the benzaldehyde product and regenerating HCl.", formula: "[C6H6CHO]+  ->  C6H5CHO + H+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow electrophile generation.", type: "negative" },
  medium: { label: "30-50degC", effect: "Optimal for benzaldehyde synthesis.", type: "positive" },
  high: { label: "High Temp", effect: "May lead to side reactions and polymer formation.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Insufficient CO dissolution.", type: "negative" },
  medium: { label: "Atmospheric", effect: "Requires continuous CO/HCl flow.", type: "neutral" },
  high: { label: "High Pressure (20-40 atm)", effect: "Significantly increases yield and reaction rate.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard lab conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Fast conversion but difficult to control exotherm.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 3.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 4.2, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,7]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.3, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.3, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,6],[6,7]]
  }
  },
  {
  id: "rosenmund-reduction",
  name: "Rosenmund Reduction",
  category: "organic",
  summary: "Selective reduction of acid chlorides to aldehydes using hydrogen gas and a poisoned palladium-on-barium sulfate catalyst.",
  discovered: "Karl Wilhelm Rosenmund, 1918",
  reactionType: "Catalytic Hydrogenation",
  equation: "RCOCl + H2  -> [Pd/BaSO4, quinoline] RCHO + HCl",
  catalyst: "Pd/BaSO4 (poisoned with quinoline or sulfur)",
  applications: [
  "Laboratory synthesis of aromatic and aliphatic aldehydes",
  "Production of fragrance chemicals and flavoring compounds",
  "Intermediate step in pharmaceutical synthesis",
  "Selective reduction where other functional groups must be preserved",
  "Manufacturing of fine chemicals requiring high purity aldehydes"
  ],
  tags: ["reduction", "poisoned catalyst", "acid chloride", "aldehyde synthesis"],
  steps: [
  { title: "Surface Adsorption", content: "Hydrogen gas and acid chloride adsorb onto the palladium catalyst surface. The catalyst is 'poisoned' to lower its activity.", formula: "H2 + RCOCl + Pd  ->  adsorbed species" },
  { title: "Hydrogen Transfer", content: "Hydrogen is transferred to the carbonyl carbon and the chlorine atom, forming the aldehyde and HCl.", formula: "RCOCl + 2H.(Pd)  ->  RCHO + HCl" },
  { title: "Selective Desorption", content: "The aldehyde product desorbs from the catalyst. The poison prevents further reduction to a primary alcohol.", formula: "RCHO (adsorbed)  ->  RCHO (gas/soln)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction is slow or fails to initiate.", type: "negative" },
  medium: { label: "Boiling Xylene (110-140degC)", effect: "Standard conditions to ensure HCl removal by refluxing.", type: "positive" },
  high: { label: "High Temp", effect: "Increased risk of over-reduction despite poisoning.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Slower reduction rate.", type: "negative" },
  medium: { label: "Atmospheric (H2 flow)", effect: "Standard procedure using a continuous stream of H2.", type: "positive" },
  high: { label: "High Pressure", effect: "Accelerates reaction but increases risk of over-reduction.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Clean reaction but longer time required.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard for preparative scale.", type: "positive" },
  high: { label: "Concentrated", effect: "Risk of side products like acid anhydrides.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 0.8, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: -1.8, y: -0.7, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: -1.8, y: -0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "stephen-reduction",
  name: "Stephen Reduction",
  category: "organic",
  summary: "Conversion of nitriles to aldehydes using tin(II) chloride (SnCl2) and hydrogen chloride, followed by the hydrolysis of the resulting iminium salt.",
  discovered: "Henry Stephen, 1925",
  reactionType: "Reduction (Nitrile  ->  Aldehyde)",
  equation: "RCN + SnCl2 + HCl  -> [H2O] RCHO + NH4Cl + SnCl4",
  catalyst: "SnCl2 (reducing agent), HCl",
  applications: [
  "Laboratory preparation of aliphatic and aromatic aldehydes from nitriles",
  "Synthesis of specialty chemicals in fine organic synthesis",
  "Pharmaceutical intermediates containing aldehyde groups",
  "Alternative to DIBAL-H for specific nitrile reductions",
  "Preparation of precursors for medicinal chemistry"
  ],
  tags: ["reduction", "nitrile", "tin chloride", "aldehyde synthesis"],
  steps: [
  { title: "Iminium Formation", content: "The nitrile is reduced by SnCl2 in HCl to form an aldimine stannichloride salt.", formula: "RCN + SnCl2 + 2HCl  ->  [RCH=NH2]2SnCl6" },
  { title: "Stannichloride Complex", content: "The intermediate complex is stable under anhydrous conditions. It involves a coordinated iminium cation.", formula: "Iminium salt intermediate" },
  { title: "Hydrolysis", content: "The complex is hydrolyzed with warm water to release the aldehyde product.", formula: "RCH=NH + H2O  ->  RCHO + NH3" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (Room)", effect: "Nitrile reduction initiates; complex forms slowly.", type: "neutral" },
  medium: { label: "Mild Warm (40-60degC)", effect: "Optimizes iminium formation.", type: "positive" },
  high: { label: "Reflux during hydrolysis", effect: "Ensures complete breakdown of stannichloride salt.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not beneficial.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Saturated HCl", effect: "Required for efficient iminium formation.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.1, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -2.3, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 1.0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: -1.8, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "etard-reaction",
  name: "Etard Reaction",
  category: "organic",
  summary: "Partial oxidation of aromatic methyl groups to aldehydes using chromyl chloride (CrO2Cl2). Oxidation stops at the aldehyde stage due to the formation of a stable complex.",
  discovered: "Alexandre Leon -tard, 1880",
  reactionType: "Oxidation (Aromatic Side Chain)",
  equation: "ArCH3 + 2CrO2Cl2  -> [CS2, H2O] ArCHO",
  catalyst: "CrO2Cl2 (Etard's reagent), CS2 solvent",
  applications: [
  "Selective synthesis of benzaldehyde from toluene",
  "Production of substituted benzaldehydes in specialty chemicals",
  "Synthesis of pharmaceutical intermediates via side-chain oxidation",
  "Industrial preparation of aromatic aldehydes where over-oxidation is a risk",
  "Analytical method for aromatic hydrocarbons"
  ],
  tags: ["oxidation", "chromyl chloride", "selective", "aromatic"],
  steps: [
  { title: "Complex Formation", content: "Chromyl chloride reacts with the methyl group in CS2 to form a brown precipitate (Etard complex).", formula: "ArCH3 + 2CrO2Cl2  ->  ArCH3.2CrO2Cl2 (precipitate)" },
  { title: "Etard Complex Structure", content: "The complex is an adduct where the chromium atoms are bonded to the methyl carbon.", formula: "Complex: ArCH(OCrCl2OH)2" },
  { title: "Decomposition (Hydrolysis)", content: "Treatment with water decomposes the complex, releasing the aromatic aldehyde and regenerating chromium salts.", formula: "Complex + H2O  ->  ArCHO + Cr(III) salts" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0-20degC)", effect: "Recommended for complex formation to avoid side reactions.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard lab procedure.", type: "neutral" },
  high: { label: "High Temp", effect: "Over-oxidation to carboxylic acids and resinification occurs.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not beneficial.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute in CS2", effect: "Essential for controlled complex formation.", type: "positive" },
  medium: { label: "Moderate", effect: "Reaction may become violent.", type: "negative" },
  high: { label: "Concentrated", effect: "Hazardous; explosive side products possible.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.3, y: 1.1, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.3, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.3, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,6],[6,7]]
  }
  },
  {
  id: "hvz-reaction",
  name: "Hell-Volhard-Zelinsky Reaction",
  category: "substitution",
  summary: "Halogenation of carboxylic acids at the alpha-position using bromine or chlorine in the presence of a catalytic amount of red phosphorus.",
  discovered: "Carl Magnus von Hell, Jacob Volhard, & Nikolay Zelinsky, 1881-1887",
  reactionType: "alpha-Halogenation",
  equation: "R-CH2-COOH + X2  -> [P(red)] R-CHX-COOH + HX",
  catalyst: "P(red) / PCl3 / PBr3",
  applications: [
  "Synthesis of alpha-amino acids via amination of alpha-halo acids",
  "Production of alpha-hydroxy acids via hydrolysis of alpha-halo acids",
  "Manufacture of chloroacetic acid used in herbicide production",
  "Intermediate step in pharmaceutical synthesis",
  "Preparation of malonic acid from acetic acid"
  ],
  tags: ["halogenation", "carboxylic acid", "alpha-substitution", "phosphorus"],
  steps: [
  { title: "Acid Halide Formation", content: "Red phosphorus reacts with bromine to form PBr3, which converts a small amount of the carboxylic acid to its acid bromide.", formula: "COOH + PBr3  ->  COBr" },
  { title: "Enolization & Halogenation", content: "The acid bromide enolizes and reacts with Br2 at the alpha-position. Alpha hydrogen is displaced by bromine.", formula: "COBr (enol) + Br2  ->  RCHBrCOBr" },
  { title: "Exchange Reaction", content: "The alpha-bromo acid bromide reacts with another molecule of the parent carboxylic acid, yielding the alpha-bromo acid product and regenerating the acid bromide.", formula: "RCHBrCOBr + RCH2COOH  ->  RCHBrCOOH + RCH2COBr" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow halogenation rate.", type: "negative" },
  medium: { label: "Reflux (~60-100degC)", effect: "Standard for efficient alpha-substitution.", type: "positive" },
  high: { label: "High Temp", effect: "May lead to decomposition or polyhalogenation.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute P", effect: "Halogenation is slow since acid bromide pool is low.", type: "negative" },
  medium: { label: "5-10% Red P", effect: "Sufficient catalytic amount for full conversion.", type: "positive" },
  high: { label: "Excess X2", effect: "Leads to alpha,alpha-dihalogenation.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.2, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.2, y: -1.0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 1.0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[1,3],[0,4],[0,5]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.2, y: 0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.2, y: -0.8, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -1.3, y: 0.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.1, z: 0.5 }
  ],
  productBonds: [[0,1],[1,2],[1,3],[0,4],[0,5]]
  }
  },
  {
  id: "gabriel-phthalimide",
  name: "Gabriel Phthalimide Synthesis",
  category: "substitution",
  summary: "Selective synthesis of primary amines by alkylating potassium phthalimide with a primary alkyl halide, followed by hydrolysis or hydrazinolysis.",
  discovered: "Siegmund Gabriel, 1887",
  reactionType: "SN2 Substitution / Amine Synthesis",
  equation: "C8H5NO2K + R-X  -> [H2O/OH-] R-NH2",
  catalyst: "KOH (for salt formation), Hydrazine (for workup)",
  applications: [
  "Pure primary amine synthesis without secondary/tertiary amine pollution",
  "Synthesis of amino acids from alpha-halo esters",
  "Production of tagged biological molecules (amines)",
  "Manufacturing of pharmaceutical intermediates containing primary amines",
  "Total synthesis of natural products (alkaloids)"
  ],
  tags: ["amine synthesis", "primary amine", "phthalimide", "SN2"],
  steps: [
  { title: "Salt Formation", content: "Phthalimide reacts with KOH to form potassium phthalimide, which is a strong nucleophile.", formula: "C6H4(CO)2NH + KOH  ->  C6H4(CO)2NK + H2O" },
  { title: "N-Alkylation", content: "Potassium phthalimide undergoes SN2 reaction with a primary alkyl halide to form N-alkylphthalimide.", formula: "NK + R-X  ->  N-R + KX" },
  { title: "Hydrazinolysis (Ing-Manske)", content: "N-alkylphthalimide is treated with hydrazine (N2H4) to release the primary amine and phthalhydrazide.", formula: "N-R + N2H4  ->  RNH2 + C8H6N2O2" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "SN2 alkylation is sluggish.", type: "negative" },
  medium: { label: "Room Temp to 100degC", effect: "Efficient for alkylation in DMF or DMSO.", type: "positive" },
  high: { label: "Reflux for workup", effect: "Necessary if using base/acid hydrolysis instead of hydrazine.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute in DMF", effect: "Good for solubility; SN2 proceeds well.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard laboratory practice.", type: "positive" },
  high: { label: "Concentrated", effect: "Risk of side products or incomplete hydrazinolysis.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -0.5, y: 0, z: 0 },
  { symbol: "K", color: "#9900cc", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 3.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "N", color: "#4488ff", x: -0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.2, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.2, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "carbylamine-reaction",
  name: "Carbylamine Reaction",
  category: "substitution",
  summary: "Primary amines react with chloroform and alcoholic KOH to form foul-smelling isocyanides (carbylamines). Used as a test for primary amines.",
  discovered: "A. W. von Hofmann, 1867",
  reactionType: "Isocyanide Synthesis / Qualitative Test",
  equation: "R-NH2 + CHCl3 + 3KOH(alc)  ->  R-NC + 3KCl + 3H2O",
  catalyst: "CHCl3 / KOH (alcoholic)",
  applications: [
  "Qualitative test for detecting primary amines (aliphatic and aromatic)",
  "Synthesis of isocyanides as reactive intermediates in organic chemistry",
  "Production of starting materials for Ugi and Passerini reactions",
  "Historical method for identifying aniline and benzylamine",
  "Preparation of specialty polymers containing isocyanide groups"
  ],
  tags: ["isocyanide", "qualitative test", "primary amine", "carbene"],
  steps: [
  { title: "Dichlorocarbene Formation", content: "Chloroform reacts with alcoholic KOH to generate dichlorocarbene (:CCl2).", formula: "CHCl3 + OH-  ->  :CCl2 + Cl- + H2O" },
  { title: "Amine Attack", content: "The primary amine nucleophile attacks the electrophilic dichlorocarbene.", formula: "RNH2 + :CCl2  ->  intermediate" },
  { title: "Dehydrohalogenation", content: "Successive loss of two HCl molecules (as KCl/H2O) results in the formation of the isocyanide.", formula: "Ar-NH-CHCl2 - 2HCl  ->  R-NC" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow carbene generation; test is less sensitive.", type: "negative" },
  medium: { label: "Warm (40-60degC)", effect: "Speeds up isocyanide formation and release of foul odor.", type: "positive" },
  high: { label: "High Temp", effect: "Foul odor becomes overwhelming; alcohol solvent evaporates.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute Amine", effect: "Test is still positive due to high odor intensity.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard test tube conditions.", type: "positive" },
  high: { label: "Concentrated Amine", effect: "Vigorous reaction; significant heat evolution.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.6, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.6, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.8, y: 1.0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.8, y: -1.0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "N", color: "#4488ff", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -1.3, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "friedel-crafts-acylation",
  name: "Friedel-Crafts Acylation",
  category: "substitution",
  summary: "Introduction of an acyl group (RCO-) into an aromatic ring using an acid chloride/anhydride and a strong Lewis acid catalyst (AlCl3). Avoids rearrangements and polyacylation.",
  discovered: "Charles Friedel & James Crafts, 1877",
  reactionType: "Electrophilic Aromatic Substitution (EAS)",
  equation: "ArH + RCOCl  -> [AlCl3] Ar-COR + HCl",
  catalyst: "AlCl3 (stoichiometric amounts actually required)",
  applications: [
  "Industrial synthesis of acetophenone (solvent and resin precursor)",
  "Synthesis of benzophenone for UV absorbers and fragrances",
  "Production of aromatic ketones for fine chemicals and dyes",
  "Intermediate step in pharmaceutical production",
  "Preparation of starting materials for Clemmensen/Wolff-Kishner reductions"
  ],
  tags: ["acylation", "aromatic", "Lewis acid", "EAS"],
  steps: [
  { title: "Acylium Ion Formation", content: "AlCl3 complexes with the acid chloride to generate the resonance-stabilized acylium ion (R-C+=O).", formula: "RCOCl + AlCl3  ->  R-C+=O + AlCl4-" },
  { title: "Electrophilic Attack", content: "The acylium ion attacks the aromatic ring, forming a sigma-complex. Rearrangements do not occur here.", formula: "ArH + R-C+=O  ->  [Ar(H)COR]+" },
  { title: "Deprotonation & Complexation", content: "Loss of a proton restores aromaticity. The resulting ketone forms a stable secondary complex with AlCl3.", formula: "[Ar(H)COR]+ + AlCl4-  ->  Ar-COR.AlCl3 + HCl" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC (Addition)", effect: "Control exotherm during catalyst addition.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for most acylation reactions.", type: "positive" },
  high: { label: "80degC (Reflux)", effect: "Necessary for deactivated aromatic rings.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCl gas escape drives reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not recommended.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Difficult to handle the thick AlCl3 complex.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.3, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.3, y: 2.3, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 3.5, y: 1.1, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,7],[6,8]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.3, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.3, y: 2.3, z: 0 },
  { symbol: "C", color: "#555555", x: 3.4, y: 0.4, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,6],[6,7],[6,8]]
  }
  },
  {
  id: "perkin-reaction",
  name: "Perkin Reaction",
  category: "condensation",
  summary: "Synthesis of alpha,beta-unsaturated aromatic acids by the condensation of an aromatic aldehyde and an acid anhydride in the presence of the sodium salt of the acid.",
  discovered: "William Henry Perkin, 1868",
  reactionType: "Aldol-like Condensation",
  equation: "ArCHO + (CH3CO)2O  -> [CH3COONa] ArCH=CHCOOH + CH3COOH",
  catalyst: "Sodium acetate (salt of the anhydride-derived acid)",
  applications: [
  "Commercial synthesis of cinnamic acid and its derivatives",
  "Production of UV absorbers and flavoring agents",
  "Synthesis of coumarin precursors in fragrance industry",
  "Manufacture of pharmaceutical intermediates with conjugated systems",
  "Preparation of starting materials for amino acid synthesis"
  ],
  tags: ["condensation", "cinnamic acid", "anhydride", "base-catalyzed"],
  steps: [
  { title: "Enolate Formation", content: "The sodium acetate base deprotonates the acid anhydride to form an enolate nucleophile.", formula: "(CH3CO)2O + CH3COO-  ->  [CH2CO-O-COCH3]-" },
  { title: "Aldol Addition", content: "The enolate attacks the aromatic aldehyde, followed by the formation of a beta-acyloxy intermediate.", formula: "Enolate + ArCHO  ->  aldol-type intermediate" },
  { title: "Elimination & Hydrolysis", content: "Elimination of an acetic acid molecule followed by hydrolysis gives the cinnamic acid product.", formula: "Intermediate  ->  ArCH=CHCO-O-COCH3  ->  ArCH=CHCOOH" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Reaction fails to occur.", type: "negative" },
  medium: { label: "170-180degC", effect: "Required to drive the sluggish condensation and elimination.", type: "positive" },
  high: { label: "High Temp (>200degC)", effect: "Increased coloring and polymer side products.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Incomplete reaction due to low enol concentration.", type: "negative" },
  medium: { label: "Neat / High Conc", effect: "Standard industrial practice for the Perkin reaction.", type: "positive" },
  high: { label: "Excess Anhydride", effect: "Used to drive equilibrium toward product.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -1.0, y: -0.7, z: 0 }
  ],
  bonds: [[0,1],[2,3],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "benzilic-acid-rearrangement",
  name: "Benzilic Acid Rearrangement",
  category: "rearrangement",
  summary: "1,2-Diketones (like benzil) react with hydroxide base to form alpha-hydroxy carboxylic acids (like benzilic acid) via a 1,2-phenyl shift.",
  discovered: "Justus von Liebig, 1838",
  reactionType: "1,2-Rearrangement",
  equation: "C6H5-CO-CO-C6H5 + KOH  ->  (C6H5)2C(OH)COOK",
  catalyst: "KOH or NaOH (base-catalyzed)",
  applications: [
  "Laboratory synthesis of benzilic acid from benzil",
  "Production of phenytoin (anti-epileptic drug)",
  "Synthesis of specialty polyhydroxy acids",
  "Rearrangement used in the synthesis of certain natural products",
  "Model reaction for studying 1,2-shifts and carbanion stability"
  ],
  tags: ["rearrangement", "1,2-shift", "diketone", "hydroxy acid"],
  steps: [
  { title: "Hydroxide Attack", content: "Hydroxide ion attacks one of the carbonyl carbons of the 1,2-diketone to form a tetrahedral intermediate.", formula: "ArCOCOAr + OH-  ->  Ar-C(O-)(OH)-CO-Ar" },
  { title: "1,2-Aryl Shift", content: "The electron pair on the oxyanion reform the C=O bond, triggering the 1,2-migration of an aryl group to the adjacent carbonyl carbon.", formula: "Intermediate  ->  (Ar)2C(OH)-COO-" },
  { title: "Proton Transfer", content: "Rapid proton transfer occurs to form the stable alpha-hydroxy carboxylate salt.", formula: "Alkoxide-acid  ->  Hydroxy-carboxylate" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow migration; intermediate may be stable.", type: "negative" },
  medium: { label: "Reflux in EtOH (70-80degC)", effect: "Standard for efficient rearrangement of benzil.", type: "positive" },
  high: { label: "High Temp", effect: "May lead to oxidative cleavage products.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction.", type: "negative" },
  medium: { label: "Moderate (2M KOH)", effect: "Good balance of rate and solubility.", type: "positive" },
  high: { label: "Concentrated", effect: "Fast but dark-colored byproducts may form.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 1.2, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.3, y: -0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: -1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[1,3],[0,4]]
  }
  },
  {
  id: "favorskii-rearrangement",
  name: "Favorskii Rearrangement",
  category: "rearrangement",
  summary: "Rearrangement of alpha-halo ketones in the presence of base (alkoxide or hydroxide) to form carboxylic acid derivatives (esters or acids) with a skeletal contraction of cyclic systems.",
  discovered: "Alexey Favorskii, 1894",
  reactionType: "Rearrangement (via Cyclopropanone)",
  equation: "alpha-halo ketone + OR-  ->  ester / carboxylic acid",
  catalyst: "NaOR / NaOH / NH3",
  applications: [
  "Preparation of branched carboxylic acids and esters",
  "Ring contraction of cyclic alpha-halo ketones in steroid synthesis",
  "Synthesis of cubane and other highly strained hydrocarbons",
  "Construction of complex carbocyclic frameworks in total synthesis",
  "Production of non-steroidal anti-inflammatory drugs (NSAIDs)"
  ],
  tags: ["rearrangement", "cyclopropanone", "alpha-halo ketone", "ring contraction"],
  steps: [
  { title: "Enolate Formation", content: "Base deprotonates the alpha'-carbon (opposite to the halogen) to form an enolate ion.", formula: "R-CH(X)-CO-CH2-R' + B-  ->  R-CH(X)-CO-CH--R'" },
  { title: "Cyclopropanone Formation", content: "The enolate oxygen or carbon displaces the halide via intramolecular SN2, forming a cyclopropanone intermediate.", formula: "Enolate  ->  cyclopropanone + X-" },
  { title: "Ring Opening", content: "Nucleophilic attack of base on the cyclopropanone carbonyl followed by ring opening to the more stable carbanion.", formula: "Cyclopropanone + OR-  ->  ester enolate" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Better control of regioselectivity in ring opening.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for most Favorskii rearrangements.", type: "positive" },
  high: { label: "Reflux", effect: "May lead to elimination over rearrangement.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not beneficial.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow reaction.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard.", type: "positive" },
  high: { label: "Concentrated Base", effect: "Vigorous reaction; potential for side products like enolates.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: -2.0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3],[1,4]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.1, y: -0.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[2,4]]
  }
  },
  {
  id: "dakin-reaction",
  name: "Dakin Reaction",
  category: "organic",
  summary: "Oxidation of ortho- or para-hydroxylated benzaldehydes or ketones to phenols (dihydroxybenzenes) using hydrogen peroxide and base.",
  discovered: "Henry Drysdale Dakin, 1909",
  reactionType: "Oxidation / Baeyer-Villiger Variant",
  equation: "o/p-HOC6H4CHO + H2O2  -> [NaOH] o/p-HOC6H4OH + HCOOH",
  catalyst: "H2O2 / NaOH (aqueous)",
  applications: [
  "Laboratory synthesis of catechol and hydroquinone from salicylaldehyde/p-hydroxybenzaldehyde",
  "Production of pharmaceutical intermediates (catecholamines)",
  "Synthesis of antioxidants for food and polymer industry",
  "Transformation of lignin-derived aromatic aldehydes to phenols",
  "Preparation of precursors for dye synthesis"
  ],
  tags: ["oxidation", "phenol", "hydrogen peroxide", "Baeyer-Villiger"],
  steps: [
  { title: "Hydroperoxide Addition", content: "Hydrogen peroxide ion (HOO-) attacks the carbonyl carbon to form a tetrahedral intermediate.", formula: "ArCHO + HOO-  ->  Ar-C(O-)(H)-O-OH" },
  { title: "Aryl Migration", content: "The aryl group migrates from carbon to oxygen, displacing hydroxide. This is similar to the Baeyer-Villiger rearrangement.", formula: "Intermediate  ->  Ar-O-CH(O-)OH" },
  { title: "Hydrolysis", content: "The resulting formate ester is rapidly hydrolyzed by the basic medium to the phenol and formate salt.", formula: "Ar-O-CHO + OH-  ->  Ar-OH + HCOO-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Recommended for safety; H2O2 is less prone to decomposition.", type: "positive" },
  medium: { label: "Room Temp (25degC)", effect: "Standard for Dakin reaction. Good rate.", type: "positive" },
  high: { label: "High Temp (>50degC)", effect: "Violent decomposition of H2O2; yield drops.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute H2O2", effect: "Slower reaction.", type: "neutral" },
  medium: { label: "3-6% H2O2", effect: "Optimal and safe concentrations.", type: "positive" },
  high: { label: "Concentrated H2O2", effect: "Hazardous; explosive potential.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 2.0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "hunsdiecker-reaction",
  name: "Hunsdiecker Reaction",
  category: "substitution",
  summary: "Silver salts of carboxylic acids react with bromine in carbon tetrachloride to form alkyl bromides with the loss of CO2.",
  discovered: "Heinz & Claere Hunsdiecker, 1930s",
  reactionType: "Radical Decarboxylative Bromination",
  equation: "RCOOAg + Br2  -> [CCl4] R-Br + CO2 + AgBr",
  catalyst: "Br2 / CCl4 (solvent)",
  applications: [
  "Preparation of primary, secondary, and tertiary alkyl bromides",
  "Synthesis of long-chain fatty acid bromides",
  "Decarboxylation method in natural product synthesis",
  "Production of specialty halogenated building blocks",
  "Transformation of carboxylic acids to halides for further functionalization"
  ],
  tags: ["radical", "decarboxylation", "silver salt", "bromination"],
  steps: [
  { title: "Acyl Hypobromite Formation", content: "The silver salt reacts with bromine to form a highly reactive acyl hypobromite intermediate and silver bromide.", formula: "RCOOAg + Br2  ->  RCO-O-Br + AgBr" },
  { title: "Homolytic Cleavage", content: "The O-Br bond undergoes homolytic cleavage to generate an acyl radical and a bromine atom.", formula: "RCO-O-Br  ->  R-CO-O. + Br." },
  { title: "Decarboxylation & Recombination", content: "The acyl radical loses CO2 to form an alkyl radical, which then reacts with the bromine atom or hypobromite to give the alkyl bromide.", formula: "R-CO-O.  ->  R. + CO2; R. + Br.  ->  R-Br" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Initiation of radical process might be slow.", type: "neutral" },
  medium: { label: "Reflux in CCl4 (~77degC)", effect: "Standard for driving decarboxylation.", type: "positive" },
  high: { label: "High Temp", effect: "Risk of excessive radical side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "CO2 escapes faster; drives equilibrium.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not recommended.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute in CCl4", effect: "Helpful for safety; avoids rapid CO2 evolution.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "Concentrated", effect: "Vigorous gas evolution; can blow out stoppers.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 0.5, z: 0 },
  { symbol: "Ag", color: "#c0c0c0", x: 2.2, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: -1.2, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -2.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: -1.2, z: 0 }
  ],
  productBonds: [[0,1],[2,3],[2,4]]
  }
  },
  {
  id: "tishchenko-reaction",
  name: "Tishchenko Reaction",
  category: "condensation",
  summary: "Disproportionation of non-enolizable aldehydes (like benzaldehyde or formaldehyde) to their corresponding ester using an aluminum alkoxide catalyst.",
  discovered: "Vyacheslav Tishchenko, 1906",
  reactionType: "Redox Condensation",
  equation: "2 RCHO  -> [Al(OR)3] RCOOCH2R",
  catalyst: "Aluminum isopropoxide / Aluminum ethoxide",
  applications: [
  "Industrial preparation of ethyl acetate from acetaldehyde",
  "Synthesis of specialty esters where acid-catalyzed esterification is difficult",
  "Production of benzyl benzoate (topical treatment and perfume solvent)",
  "Manufacturing of monomers for specific polymer resins",
  "Atom-efficient synthesis of esters from cheap aldehydes"
  ],
  tags: ["redox", "ester", "aluminum", "atom-efficient"],
  steps: [
  { title: "Coordination", content: "Two molecules of aldehyde coordinate with the aluminum center of the catalyst.", formula: "2RCHO + Al(OR)3  ->  Al complex" },
  { title: "Hydride Transfer", content: "A hydride shift occurs from one aldehyde carbon to the other within the coordination sphere (reminiscent of Cannizzaro).", formula: "R-C(H)O-Al...O=C(H)R  ->  R-C(O)-O-CH2R-Al" },
  { title: "Catalyst Regeneration", content: "The ester product is released and the catalyst is regenerated for the next cycle.", formula: "Complex-Ester  ->  RCOOCH2R + Catalyst" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0-20degC)", effect: "Slower rate; better for volatile aldehydes.", type: "neutral" },
  medium: { label: "Room Temp to 50degC", effect: "Standard for aluminum isopropoxide catalyzed Tishchenko.", type: "positive" },
  high: { label: "High Temp", effect: "Side reactions like aldol or Meerwein-Ponndorf-Verley can compete.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Reaction becomes too slow for industrial utility.", type: "negative" },
  medium: { label: "Neat / High Conc", effect: "Standard practice - maximized throughput and rate.", type: "positive" },
  high: { label: "5-10 mol% Al", effect: "Sufficient catalytic amount.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 1.2, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.9, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3]]
  }
  },
  {
  id: "oppenauer-oxidation",
  name: "Oppenauer Oxidation",
  category: "organic",
  summary: "Oxidation of secondary alcohols to ketones using an excess of a ketone (like acetone) and an aluminum alkoxide catalyst. The reverse of MPV reduction.",
  discovered: "Rupert Viktor Oppenauer, 1937",
  reactionType: "Oxidation (Redox Equilibrium)",
  equation: "Sec-alcohol + excess ketone  <=> [Al(OiPr)3] Ketone + alcohol",
  catalyst: "Aluminum isopropoxide / Aluminum t-butoxide",
  applications: [
  "Large-scale oxidation of steroids to ketones (e.g., in cortisone synthesis)",
  "Synthesis of flavors and fragrances by oxidizing alcohols",
  "Preparation of industrial solvents (ketones)",
  "Mild oxidation where acid-sensitive groups are present",
  "Regioselective oxidation in multi-hydroxy compounds"
  ],
  tags: ["oxidation", "aluminum", "equilibrium", "redox"],
  steps: [
  { title: "Alkoxide Exchange", content: "The secondary alcohol reacts with the aluminum catalyst to form an aluminum alkoxide complex.", formula: "R2CHOH + Al(OiPr)3  <=>  R2CHO-Al + iPrOH" },
  { title: "Coordination of Ketone", content: "The excess ketone (acetone) coordinates to the aluminum center.", formula: "Complex + Acetone  <=>  complex-adduct" },
  { title: "Hydride Shift", content: "A concerted hydride transfer occurs from the alpha-carbon of the alcohol to the carbonyl carbon of the acetone.", formula: "R2C(H)-O-Al...O=CMe2  <=>  R2C=O...Al-O-CHMe2" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow equilibrium; reaction does not proceed.", type: "negative" },
  medium: { label: "Reflux (60-100degC)", effect: "Standard to reach equilibrium quickly.", type: "positive" },
  high: { label: "High Temp", effect: "May cause polymerization of acetone or side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not beneficial.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow rate.", type: "negative" },
  medium: { label: "Excess Acetone", effect: "Critical for driving the equilibrium toward the ketone product.", type: "positive" },
  high: { label: "Moderate Al catalyst", effect: "Standard for conversion.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 2.2, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 2.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.0, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[2,3],[2,4]]
  }
  },
  {
  id: "mpv-reduction",
  name: "Meerwein-Ponndorf-Verley Reduction",
  category: "organic",
  summary: "Reduction of aldehydes or ketones to their corresponding alcohols using isopropanol and an aluminum isopropoxide catalyst. Reverse of Oppenauer oxidation.",
  discovered: "Hans Meerwein, Wolfgang Ponndorf, & Albert Verley, 1925",
  reactionType: "Reduction (Redox Equilibrium)",
  equation: "Ketone + iPrOH  <=> [Al(OiPr)3] Alcohol + acetone  -> ",
  catalyst: "Aluminum isopropoxide",
  applications: [
  "Selective reduction of aldehydes and ketones in the presence of alkenes",
  "Synthesis of chiral alcohols using chiral catalysts (asymmetric MPV)",
  "Production of fragrance and flavor alcohols on an industrial scale",
  "Mild reduction for acid/base sensitive molecules",
  "Reductive step in natural product total synthesis"
  ],
  tags: ["reduction", "aluminum", "equilibrium", "selective"],
  steps: [
  { title: "Coordination", content: "The ketone substrate and isopropanol coordinate to the aluminum catalyst center.", formula: "Ketone + iPrOH + Al(OiPr)3  ->  complex" },
  { title: "Hydride Transfer", content: "A hydride ion is transferred from the isopropanol alpha-carbon to the carbonyl carbon of the ketone via a 6-membered transition state.", formula: "Concerted [1,3]-hydride shift" },
  { title: "Acetone Escape", content: "The resulting acetone is often removed by distillation to drive the equilibrium toward the alcohol product.", formula: "Equilibrium shift by removing acetone" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow rate.", type: "negative" },
  medium: { label: "Reflux (82degC)", effect: "Standard; corresponds to boiling point of isopropanol.", type: "positive" },
  high: { label: "High Temp", effect: "Possible side reactions; not usually required.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Helps remove byproduct acetone, driving the reaction forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute in iPrOH", effect: "Excess isopropanol is necessary to drive equilibrium.", type: "positive" },
  medium: { label: "Moderate catalyst", effect: "5-20% Al is typical.", type: "positive" },
  high: { label: "Concentrated", effect: "Difficult to remove acetone byproduct efficiently.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 2.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.0, y: 0.5, z: 0 }
  ],
  bonds: [[0,1],[2,3],[2,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 2.2, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[3,4]]
  }
  },
  {
  id: "arndt-eistert-synthesis",
  name: "Arndt-Eistert Synthesis",
  category: "rearrangement",
  summary: "Homologation of carboxylic acids to their next higher homologs (one additional methylene group) via an acid chloride and a diazoketone intermediate.",
  discovered: "Fritz Arndt & Bernd Eistert, 1935",
  reactionType: "Homologation (via Wolff Rearrangement)",
  equation: "RCOOH  ->  RCOCl  ->  RCOCHN2  ->  RCH2COOH",
  catalyst: "CH2N2 / Ag2O (for Wolff step)",
  applications: [
  "Preparation of beta-amino acids from alpha-amino acids",
  "Synthesis of complex natural products (total synthesis)",
  "Preparation of higher chain fatty acids",
  "Pharmaceutical intermediates requiring specific chain lengths",
  "Introduction of a single carbon in the middle of a skeletal framework"
  ],
  tags: ["homologation", "diazoketone", "Wolff rearrangement", "silver catalyst"],
  steps: [
  { title: "Acid Chloride & Diazoketone", content: "Carboxylic acid is converted to acid chloride, then treated with diazomethane to form a diazoketone.", formula: "RCOCl + 2CH2N2  ->  RCOCHN2 + CH3Cl + N2" },
  { title: "Wolff Rearrangement", content: "The diazoketone is treated with Ag2O (or light) causing loss of N2 and rearrangement of R to the alpha carbon, forming a ketene.", formula: "RCOCHN2  -> [Ag2O] R-CH=C=O + N2" },
  { title: "Trapping the Ketene", content: "The ketene reacts with water, alcohol, or amine to give the homologated acid, ester, or amide.", formula: "RCH=C=O + H2O  ->  RCH2COOH" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-20degC)", effect: "Handling of explosive diazomethane requires cold conditions.", type: "positive" },
  medium: { label: "Room Temp", effect: "Wolff rearrangement with Ag2O occurs at RT.", type: "positive" },
  high: { label: "Heat / Reflux", effect: "Hazardous due to diazomethane/intermediate decomposition.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes faster; aids Wolff step.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Safety hazard; retains N2 and increases explosion risk.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute in Ether", effect: "Critical for safety when using diazomethane.", type: "positive" },
  medium: { label: "Moderate", effect: "Incomplete reaction or explosion risk.", type: "neutral" },
  high: { label: "Concentrated", effect: "Extremely dangerous; never use diazomethane concentrated.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -0.8, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: -0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[1,3]]
  }
  },
  {
  id: "bucherer-reaction",
  name: "Bucherer Reaction",
  category: "substitution",
  summary: "Reversible interconversion of naphthols and naphthylamines in the presence of aqueous sodium bisulfite.",
  discovered: "Hans Theodor Bucherer, 1904",
  reactionType: "Nucleophilic Aromatic Substitution (via Bisulfite Adduct)",
  equation: "ArOH + NH3  <=> [NaHSO3] ArNH2 + H2O",
  catalyst: "NaHSO3 / (NH4)2SO3 (aqueous)",
  applications: [
  "Industrial preparation of 1- and 2-naphthylamine from naphthols",
  "Synthesis of intermediates for azo dyes and pigments",
  "Production of pharmaceutical naphthyl derivatives",
  "Method for purifying naphthols via their amine salts",
  "Classical example of aromatic substitution via saturated intermediates"
  ],
  tags: ["substitution", "naphthol", "naphthylamine", "bisulfite"],
  steps: [
  { title: "Bisulfite Adduct Formation", content: "The naphthol tautomerizes to a keto form, which then reacts with bisulfite to form a stable tetralone-sulfonate adduct.", formula: "Naphthol + HSO3-  ->  Bisulfite adduct" },
  { title: "Amine Replacement", content: "Ammonia (or an amine) displaces the hydroxyl group on the adduct via nucleophilic substitution.", formula: "Adduct-OH + NH3  ->  Adduct-NH2 + H2O" },
  { title: "Elimination of Bisulfite", content: "Loss of bisulfite restores the aromatic ring, yielding the naphthylamine product.", formula: "Adduct-NH2  ->  Naphthylamine + HSO3-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Equilibrium is too slow to reach.", type: "negative" },
  medium: { label: "150-180degC", effect: "Standard industrial conditions using an autoclave.", type: "positive" },
  high: { label: "High Temp (>200degC)", effect: "Side reactions and decomposition increase.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "NH3 gas escapes; reaction fails.", type: "negative" },
  medium: { label: "Autoclave Pressure (10-20 atm)", effect: "Necessary to keep ammonia in solution at high temp.", type: "positive" },
  high: { label: "High Pressure", effect: "Favorable for conversion.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute NH3", effect: "Very slow reaction rate.", type: "negative" },
  medium: { label: "Moderate NaHSO3", effect: "Critical for adduct formation.", type: "positive" },
  high: { label: "Saturated NH3", effect: "Optimal for industrial amine synthesis.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 }
  ],
  bonds: [[0,1]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.3, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "skraup-synthesis",
  name: "Skraup Synthesis",
  category: "condensation",
  summary: "Formation of quinolines by heating aniline with glycerol, sulfuric acid, and an oxidizing agent (often nitrobenzene).",
  discovered: "Zdenko Hans Skraup, 1880",
  reactionType: "Heterocycle Synthesis",
  equation: "Aniline + Glycerol  -> [H2SO4, [O]] Quinoline",
  catalyst: "H2SO4 (acid & dehydrating agent), Nitrobenzene (oxidizing agent)",
  applications: [
  "Vast industrial synthesis of quinoline and substituted quinolines",
  "Production of anti-malarial drugs (quinine, chloroquine analogs)",
  "Synthesis of analytical reagents such as 8-hydroxyquinoline",
  "Manufacture of dyes (cyanines) and polymer additives",
  "Building block for many natural product syntheses"
  ],
  tags: ["quinoline", "heterocycle", "aniline", "glycerol"],
  steps: [
  { title: "Acrolein Formation", content: "Sulfuric acid dehydrates glycerol to form acrolein (propenal), which is the active electrophile.", formula: "C3H8O3  -> [H2SO4] CH2=CHCHO + 2H2O" },
  { title: "Michael Addition & Cyclization", content: "Aniline adds to acrolein (Michael addition), followed by acid-catalyzed cyclization onto the ortho position of the aromatic ring.", formula: "Aniline + Acrolein  ->  Dihydroquinoline intermediate" },
  { title: "Oxidation", content: "Nitrobenzene (or other oxidant) oxidizes the dihydroquinoline to the aromatic quinoline product.", formula: "Dihydroquinoline + [O]  ->  Quinoline + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Incomplete dehydration and cyclization.", type: "negative" },
  medium: { label: "130-150degC", effect: "Standard for Skraup synthesis. Often very exothermic (needs FeSO4 to control).", type: "positive" },
  high: { label: "High Temp (>160degC)", effect: "Violent reaction; potential for 'boil-over'.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute Acid", effect: "Glycerol dehydration is slow; poor yield.", type: "negative" },
  medium: { label: "70-80% H2SO4", effect: "Standard for controlled dehydration and cyclization.", type: "positive" },
  high: { label: "Conc H2SO4", effect: "Extremely violent; charring and decomposition.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 2.6, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: -0.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,6],[6,7],[2,7]]
  }
  },
  {
  id: "wurtz-reaction",
  name: "Wurtz Reaction",
  category: "substitution",
  summary: "Two alkyl halides react with sodium metal in dry ether to form a symmetrical higher alkane via an organosodium intermediate. One of the earliest C-C bond forming reactions in organic chemistry.",
  discovered: "Charles-Adolphe Wurtz, 1855",
  reactionType: "C-C Bond Formation",
  equation: "2 R-X + 2Na  -> [dry Et2O]  R-R + 2NaX",
  catalyst: "Na metal, dry diethyl ether",
  applications: [
  "Synthesis of symmetrical higher alkanes from alkyl halides",
  "Historical route to pure long-chain hydrocarbons for research",
  "Organosilicon chemistry uses Wurtz-type Si-Si coupling reactions",
  "Preparation of cycloalkanes via intramolecular Wurtz cyclization",
  "Teaching model for organometallic C-C bond formation"
  ],
  tags: ["alkane synthesis", "sodium metal", "C-C bond"],
  steps: [
  { title: "Organosodium Formation", content: "Each alkyl halide reacts with sodium metal to form an organosodium (R-Na), a highly reactive carbanion-like nucleophile.", formula: "R-X + Na  ->  R-Na + NaX" },
  { title: "Nucleophilic Coupling", content: "The organosodium attacks a second molecule of alkyl halide in an SN2-like fashion, forming a new C-C bond and releasing NaX.", formula: "R-Na + R-X  ->  R-R + NaX" },
  { title: "Alkane Product", content: "A symmetrical alkane is formed. Mixing two different halides gives three alkanes (statistical mixture), making pure unsymmetrical alkane synthesis difficult.", formula: "2 R-X + 2Na  ->  R-R + 2NaX" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow initiation; sodium reacts sluggishly with alkyl halide.", type: "negative" },
  medium: { label: "Et2O Reflux (~35degC)", effect: "Optimal. Good yield of symmetrical alkane product.", type: "positive" },
  high: { label: "High Temp", effect: "Elimination and Wurtz-Fittig type side reactions increase.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Ether may evaporate. Keep flask sealed.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions under inert atmosphere.", type: "positive" },
  high: { label: "High Pressure", effect: "No significant benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow bimolecular coupling; incomplete conversion.", type: "negative" },
  medium: { label: "Moderate", effect: "Efficient coupling; good alkane yield.", type: "positive" },
  high: { label: "Concentrated / Excess Na", effect: "Violent exotherm; fire risk with excess Na.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.8, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.5, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "wurtz-fittig",
  name: "Wurtz-Fittig Reaction",
  category: "substitution",
  summary: "A mixed coupling of an aryl halide and an alkyl halide with sodium metal forms an alkylbenzene. Combines features of both the Wurtz (alkyl) and Fittig (aryl) reactions.",
  discovered: "Rudolf Fittig & Charles Wurtz, 1864",
  reactionType: "Mixed C-C Bond Formation",
  equation: "Ar-X + R-X + 2Na  -> [Et2O]  Ar-R + 2NaX",
  catalyst: "Na metal, dry diethyl ether",
  applications: [
  "Synthesis of alkylbenzenes (toluene, ethylbenzene, cumene) from aryl halides",
  "Production of diphenylmethane and bibenzyl-type structures",
  "Preparation of substituted aromatic hydrocarbons for fine chemicals",
  "Alternative to Friedel-Crafts alkylation when rearrangement is problematic",
  "Historical route to aromatic hydrocarbons in petroleum chemistry"
  ],
  tags: ["arylalkane synthesis", "sodium metal", "mixed coupling"],
  steps: [
  { title: "Organosodium Formation", content: "Both aryl halide and alkyl halide react individually with sodium to form their respective organosodium compounds (ArNa and RNa).", formula: "ArX + Na  ->  ArNa; R-X + Na  ->  R-Na" },
  { title: "Cross-Coupling", content: "The more reactive organosodium (ArNa) preferentially reacts with the alkyl halide in an SN2 fashion to give the mixed arylalkane as the major product.", formula: "ArNa + R-X  ->  Ar-R + NaX" },
  { title: "Mixed Product", content: "The arylalkane (Ar-R) is the desired product. Symmetric byproducts (Ar-Ar and R-R from Fittig and Wurtz reactions) also form and must be separated.", formula: "Major: Ar-R; Minor: Ar-Ar + R-R" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow initiation for both organosodium species.", type: "negative" },
  medium: { label: "Et2O Reflux (~35degC)", effect: "Standard. Good yield of mixed arylalkane product.", type: "positive" },
  high: { label: "High Temp", effect: "More symmetric byproducts form; selectivity drops.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Minimal effect; preserve ether solvent.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Incomplete coupling reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Good yield of arylalkane.", type: "positive" },
  high: { label: "Concentrated", effect: "Vigorous sodium side reactions; hard to control.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 0, y: 2.8, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#777777", x: 0, y: 2.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.8, y: 3.4, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,7]]
  }
  },
  {
  id: "fittig-reaction",
  name: "Fittig Reaction",
  category: "substitution",
  summary: "Two aryl halides react with sodium metal in dry ether to couple and form a symmetrical biaryl compound. An aryl analog of the Wurtz reaction.",
  discovered: "Rudolf Fittig, 1862",
  reactionType: "C-C Bond Formation (Biaryl)",
  equation: "2 Ar-X + 2Na  -> [Et2O]  Ar-Ar + 2NaX",
  catalyst: "Na metal, dry diethyl ether",
  applications: [
  "Synthesis of biphenyl from bromobenzene (classic demonstration)",
  "Preparation of symmetric biaryls for material science research",
  "Historical importance in establishing aryl-aryl bond formation",
  "Synthesis of sterically hindered biaryls before transition-metal catalysis",
  "Academic reference reaction for organosodium chemistry"
  ],
  tags: ["biaryl synthesis", "sodium metal", "C-C bond"],
  steps: [
  { title: "Arylsodium Formation", content: "Aryl halides react with sodium metal to form arylsodium (Ar-Na) species, highly reactive carbanion-like nucleophiles.", formula: "2 Ar-X + 2Na  ->  2 Ar-Na + 2 NaX (initial step)" },
  { title: "Biaryl Coupling", content: "One arylsodium species attacks the second aryl halide in an SN2-like mechanism, forming the biaryl C-C bond.", formula: "Ar-Na + Ar-X  ->  Ar-Ar + NaX" },
  { title: "Biphenyl Product", content: "The symmetrical biaryl (e.g., biphenyl from iodobenzene) is isolated from NaX salts.", formula: "2 PhX + 2Na  ->  Ph-Ph + 2NaX" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow initiation with aryl halides.", type: "negative" },
  medium: { label: "Et2O Reflux (~35degC)", effect: "Good yield of biaryl product.", type: "positive" },
  high: { label: "High Temp", effect: "Thermal side reactions; yield decreases.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow coupling; arylsodium may be consumed by side reactions.", type: "negative" },
  medium: { label: "Moderate", effect: "Efficient biaryl formation.", type: "positive" },
  high: { label: "Concentrated", effect: "Risk of polymerization and polyarylation.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -2.4, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "gattermann-reaction",
  name: "Gattermann Reaction",
  category: "substitution",
  summary: "A modification of the Sandmeyer reaction where aryl diazonium salts are converted to aryl halides using copper powder and HX instead of Cu(I) salts. Also refers to formylation of activated aromatics using HCN/HCl/AlCl3.",
  discovered: "Ludwig Gattermann, 1890",
  reactionType: "Radical Substitution / Formylation",
  equation: "ArN2+Cl- + Cu(powder) + HX  ->  ArX + N2 + CuX",
  catalyst: "Cu powder + HCl or HBr",
  applications: [
  "Introduction of Cl or Br onto aromatic rings via diazonium chemistry",
  "Synthesis of aryl halides when CuX salts are unavailable",
  "Gattermann aldehyde synthesis for electron-rich aromatic rings",
  "Production of substituted aniline derivatives in pharmaceutical synthesis",
  "Historical industrial preparation of chlorobenzene and bromobenzene"
  ],
  tags: ["diazonium", "copper", "aromatic halogenation"],
  steps: [
  { title: "Diazonium Salt Preparation", content: "Primary aromatic amine is diazotized with NaNO2/HCl at 0-5degC to form the aryl diazonium salt.", formula: "ArNH2 + NaNO2 + HCl  ->  ArN2+Cl- + NaCl + 2H2O" },
  { title: "Copper-Mediated Radical Decomposition", content: "Fresh copper powder (unlike CuX salt in Sandmeyer) serves as the electron donor, generating an aryl radical and N2 gas.", formula: "ArN2+ + Cu  ->  Ar- + N2 + Cu+" },
  { title: "Halide Capture", content: "The aryl radical abstracts halide from the acidic medium or copper complex, forming the aryl halide product.", formula: "Ar- + HX (or CuX)  ->  ArX + (H- or Cu)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC (Diazotization)", effect: "Necessary to stabilize diazonium salt. Diazonium decomposes above ~10degC.", type: "positive" },
  medium: { label: "Room Temp (Gattermann step)", effect: "Cu powder activates the diazonium at room temperature.", type: "positive" },
  high: { label: "High Temp", effect: "Diazonium decomposes to phenol; yield drops dramatically.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes; drives reaction forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow copper-diazonium interaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Good conversion rate.", type: "positive" },
  high: { label: "Concentrated", effect: "Diazonium may decompose before reacting with Cu.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.3, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.7, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "kolbe-reaction",
  name: "Kolbe Electrolysis (Kolbe Reaction)",
  category: "organic",
  summary: "Electrolysis of an aqueous solution of carboxylate salts produces alkanes (or alkenes) via decarboxylation and radical coupling. Each carboxylate loses CO2 and one electron at the anode to form an alkyl radical, which then couples.",
  discovered: "Hermann Kolbe, 1848",
  reactionType: "Electrochemical Decarboxylation",
  equation: "2 RCOO-  -> [electrolysis] R-R + 2CO2 + 2e-",
  catalyst: "Electrolytic oxidation (anode), Pt electrode",
  applications: [
  "Synthesis of longer-chain symmetrical alkanes from fatty acid salts",
  "Industrial preparation of C10-C20 hydrocarbons for lubricants",
  "Synthesis of diols and diesters from half-esters of dicarboxylic acids",
  "Production of fluorinated hydrocarbons from fluorinated carboxylates",
  "Green chemistry: electrochemical synthesis avoiding stoichiometric oxidants"
  ],
  tags: ["electrochemistry", "radical", "decarboxylation"],
  steps: [
  { title: "Anodic Oxidation", content: "The carboxylate anion (RCOO-) is oxidized at the anode by loss of one electron to form an acyloxy radical.", formula: "RCOO-  ->  RCOO- + e-" },
  { title: "Decarboxylation", content: "The unstable acyloxy radical immediately loses CO2 to generate an alkyl radical.", formula: "RCO2-  ->  R- + CO2 -> " },
  { title: "Radical Coupling", content: "Two alkyl radicals combine at the electrode surface to form the symmetrical alkane product.", formula: "2 R-  ->  R-R" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (~0-20degC)", effect: "Slower electrolysis; radical lifetime increases, may improve yield.", type: "neutral" },
  medium: { label: "Room Temp (~25degC)", effect: "Standard electrolysis conditions. Good Kolbe efficiency.", type: "positive" },
  high: { label: "High Temp", effect: "Increased side reactions (alcohol, ester formation); efficiency drops.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "CO2 escapes easily, driving decarboxylation forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Normal electrolysis conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains CO2; may impede decarboxylation step.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute Salt", effect: "Low current density; inefficient electrolysis.", type: "negative" },
  medium: { label: "Concentrated (>0.5 M)", effect: "Efficient radical generation and coupling.", type: "positive" },
  high: { label: "Saturated", effect: "Optimal conductivity; best Kolbe current efficiency.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: -0.8, z: 0 },
  { symbol: "C", color: "#555555", x: -2.3, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.8, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.5, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "haloform-reaction",
  name: "Haloform Reaction",
  category: "substitution",
  summary: "Methyl ketones (or acetaldehyde) react with excess halogen (Cl2, Br2, or I2) in alkaline conditions to form a haloform (CHX3) and a carboxylate salt. Used as a qualitative test for methyl ketones.",
  discovered: "Justus von Liebig, 1832",
  reactionType: "Halogenation / Hydrolysis",
  equation: "RCOCH3 + 3X2 + 4NaOH  ->  RCOONa + CHX3 + 3NaX + 3H2O",
  catalyst: "NaOH (aqueous), X2 (Cl2, Br2, or I2)",
  applications: [
  "Iodoform (CHI3) test for detecting methyl ketones and ethanol - gives yellow precipitate",
  "Industrial production of chloroform (CHCl3) from acetone",
  "Historical production of iodoform (antiseptic) from ethanol",
  "Conversion of methyl ketones to carboxylic acids (one carbon shorter)",
  "Identification and differentiation of acetyl groups in organic molecules"
  ],
  tags: ["halogenation", "methyl ketone", "iodoform test"],
  steps: [
  { title: "Base-Promoted alpha-Halogenation", content: "Base generates the enolate from the methyl ketone. The enolate attacks Br2/Cl2/I2. This sequence repeats three times to give the trihalo ketone.", formula: "RCOCH3 + 3X2/NaOH  ->  RCOCX3 + 3HX" },
  { title: "Nucleophilic Attack by OH-", content: "Hydroxide attacks the carbonyl of the trihaloketone (now highly electrophilic due to three halogens), forming a tetrahedral intermediate.", formula: "RCOCX3 + OH-  ->  RC(OH)(O-)CX3" },
  { title: "Bond Cleavage & Haloform Release", content: "The CX3 carbanion (trihalomethyl) is excellent leaving group. It leaves as CX3-, which is protonated by water to give the haloform CHX3. The carboxylate is also formed.", formula: "RC(OH)(O-)CX3  ->  RCOO- + HCX3+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow halogenation; incomplete trihalogenation.", type: "negative" },
  medium: { label: "Room Temp to 60degC", effect: "Standard conditions. All three halogenations proceed cleanly.", type: "positive" },
  high: { label: "High Temp", effect: "Reaction is faster but degradation of haloform product may occur.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect on this aqueous reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaOH", effect: "Insufficient base for all three halogenation steps.", type: "negative" },
  medium: { label: "Excess NaOH + excess X2", effect: "Ensures complete trihalogenation and hydrolysis.", type: "positive" },
  high: { label: "Very Concentrated", effect: "May cause further hydrolysis or side reactions.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -1.0, z: 0.5 }
  ],
  bonds: [[0,1],[0,2],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 2.5, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[3,4]]
  }
  },
  {
  id: "finkelstein-reaction",
  name: "Finkelstein Reaction",
  category: "substitution",
  summary: "Exchange of halides in alkyl halides by treating with NaI in acetone. NaCl or NaBr precipitate drives the equilibrium to produce alkyl iodides. A classic example of Le Chatelier's principle in SN2 chemistry.",
  discovered: "Hans Finkelstein, 1910",
  reactionType: "Halide Exchange (SN2)",
  equation: "R-Cl (or R-Br) + NaI  -> [acetone]  R-I + NaCl (or NaBr)",
  catalyst: "NaI in dry acetone (solvent drives equilibrium)",
  applications: [
  "Preparation of alkyl iodides from less reactive alkyl chlorides or bromides",
  "Synthesis of 13C or 14C labeled iodide compounds for tracer studies",
  "Conversion of primary alkyl chlorides to iodides for further reaction",
  "Production of geminal diiodides from gem-dichlorides",
  "Industrial synthesis of methyl iodide (methylating agent) from methyl chloride"
  ],
  tags: ["halide exchange", "SN2", "iodide synthesis"],
  steps: [
  { title: "SN2 Displacement", content: "Iodide ion (from NaI, which is soluble in acetone) attacks the carbon of the alkyl chloride/bromide in a backside SN2 mechanism.", formula: "I- + R-Cl  ->  [I---C---Cl]-  ->  R-I + Cl-" },
  { title: "Precipitation Drives Equilibrium", content: "NaCl and NaBr are insoluble in acetone and precipitate out of solution. This removes the product halide, driving the equilibrium toward alkyl iodide formation (Le Chatelier).", formula: "NaCl + (precipitates from acetone)" },
  { title: "Alkyl Iodide Product", content: "The more reactive alkyl iodide is formed in essentially quantitative yield due to the coupled precipitation equilibrium.", formula: "R-Cl + NaI  ->  R-I + NaCl+ (complete)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slower SN2 rate; incomplete exchange.", type: "negative" },
  medium: { label: "Reflux Acetone (~56degC)", effect: "Standard conditions. Rapid and complete halide exchange.", type: "positive" },
  high: { label: "High Temp", effect: "Elimination may compete if secondary/tertiary substrate used.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Acetone may boil off; not recommended.", type: "negative" },
  medium: { label: "Atmospheric", effect: "Standard lab conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit for this SN2 reaction.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaI", effect: "Equilibrium not fully driven; incomplete conversion.", type: "negative" },
  medium: { label: "Slight Excess NaI", effect: "Complete conversion; excellent yield of alkyl iodide.", type: "positive" },
  high: { label: "Large Excess NaI", effect: "Drives equilibrium fully to product. Used for difficult substrates.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 1.0, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.0, z: 0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0, z: -1.0 }
  ],
  bonds: [[0,1],[0,2],[0,3],[0,4]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "I", color: "#7700aa", x: 2.1, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 1.0, z: -0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: -1.0, z: -0.5 },
  { symbol: "H", color: "#aaaaaa", x: 0, y: 0, z: 1.0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4]]
  }
  },
  {
  id: "swarts-reaction",
  name: "Swarts Reaction",
  category: "substitution",
  summary: "Halide exchange reaction where alkyl chlorides or bromides are converted to alkyl fluorides by treatment with a metal fluoride catalyst (SbF3, AgF, or HgF2). The first method for introducing fluorine into organic compounds.",
  discovered: "Frederic Swarts, 1892",
  reactionType: "Nucleophilic Halide Exchange (Fluorination)",
  equation: "R-Cl + SbF3  -> [heat]  R-F + SbF2Cl",
  catalyst: "SbF3 (antimony trifluoride), SbF5, or AgF",
  applications: [
  "Synthesis of Freons (chlorofluorocarbons) for refrigerants and propellants",
  "Historical production of R-12 (CCl2F2) and R-11 for air conditioning",
  "Preparation of fluorinated anesthetics (halothane, isoflurane)",
  "Industrial synthesis of fluorinated polymers (PTFE precursors)",
  "Preparation of organofluorine compounds for agrochemicals"
  ],
  tags: ["fluorination", "halide exchange", "organofluorine"],
  steps: [
  { title: "Fluoride Transfer", content: "The metal fluoride (SbF3) acts as fluoride source. SbF3 is a Lewis acid; its F- nucleophilically displaces the chloride/bromide in the alkyl halide.", formula: "R-CCl3 + SbF3  ->  R-CCl2F + SbF2Cl" },
  { title: "Sequential Exchange", content: "Additional fluorines can be exchanged by heating with more SbF3. Each exchange replaces one Cl for one F, proceeding stepwise to the perfluorinated compound.", formula: "R-CCl2F + SbF3  ->  R-CClF2  ->  R-CF3" },
  { title: "Product Isolation", content: "The alkyl fluoride product is more volatile than the starting chloride and can be distilled off. SbCl3 byproduct is recycled to SbF3 using HF.", formula: "R-CF3 + SbCl3 (recycled with HF  ->  SbF3)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow fluoride transfer. SbF3 barely reactive at room temp.", type: "negative" },
  medium: { label: "100-150degC", effect: "Optimal for fluorination. Metal fluoride becomes reactive enough.", type: "positive" },
  high: { label: "High Temp (>200degC)", effect: "Higher conversion; multiple fluorine exchange possible. May lead to over-fluorination.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Volatile fluoride product escapes; drives reaction.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions in sealed reactor.", type: "positive" },
  high: { label: "High Pressure", effect: "Forces more conversions; used industrially.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute SbF3", effect: "Incomplete fluorine exchange.", type: "negative" },
  medium: { label: "Equimolar or slight SbF3 excess", effect: "Good monofluorination yield.", type: "positive" },
  high: { label: "Large Excess SbF3", effect: "Drives multiple fluorine exchanges to perfluorocarbon.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.7, y: 0.5, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.7, y: -0.5, z: 0.8 },
  { symbol: "Cl", color: "#33bb33", x: -1.2, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "F", color: "#00aaff", x: 1.4, y: 0.5, z: 0 },
  { symbol: "F", color: "#00aaff", x: 1.4, y: -0.5, z: 0.8 },
  { symbol: "F", color: "#00aaff", x: -1.2, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "schotten-baumann",
  name: "Schotten-Baumann Reaction",
  category: "substitution",
  summary: "Acylation of amines or alcohols using an acid chloride or anhydride in the presence of aqueous NaOH base. The two-phase system prevents over-acylation and neutralizes HCl in situ.",
  discovered: "Carl Schotten & Eugen Baumann, 1884",
  reactionType: "Acylation (Two-Phase)",
  equation: "R-NH2 + R'COCl + NaOH  ->  R-NH-COR' + NaCl + H2O",
  catalyst: "NaOH (aqueous), no metal catalyst needed",
  applications: [
  "Preparation of amides and esters on preparative scale without anhydrous conditions",
  "Protection of amines as amides in peptide synthesis",
  "Synthesis of anilides used in pharmaceutical industry",
  "Industrial production of surfactants via acylation of fatty amines",
  "Synthesis of polyamides (nylon-like polymers) from diacid chlorides and diamines"
  ],
  tags: ["acylation", "two-phase", "amide synthesis"],
  steps: [
  { title: "Two-Phase Setup", content: "The amine or alcohol (in aqueous NaOH) is mixed with the acid chloride (in organic phase or added dropwise). NaOH acts as base and keeps the amine nucleophilic.", formula: "Amine (aq NaOH) + RCOCl (organic)  ->  Two-phase system" },
  { title: "Acylation", content: "The nucleophilic amine attacks the electrophilic carbonyl of the acid chloride at the interface, forming a tetrahedral intermediate that collapses to the amide.", formula: "R-NH2 + R'COCl  ->  R-NH-COR' + HCl" },
  { title: "HCl Neutralization", content: "Generated HCl is immediately neutralized by aqueous NaOH, preventing protonation of the amine and allowing the reaction to go to completion without over-acylation.", formula: "HCl + NaOH  ->  NaCl + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Controlled acylation; reduces hydrolysis of acid chloride.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard conditions. Excellent for most amine acylations.", type: "positive" },
  high: { label: "High Temp", effect: "Hydrolysis of acid chloride competes with acylation.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaOH", effect: "Insufficient base; HCl protonates amine, slowing acylation.", type: "negative" },
  medium: { label: "10% NaOH (excess)", effect: "Efficient neutralization; clean amide formation.", type: "positive" },
  high: { label: "Concentrated NaOH", effect: "Rapid neutralization; risk of acid chloride saponification.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -2.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.5, y: 1.2, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 3.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "N", color: "#4488ff", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[0,3]]
  }
  },
  {
  id: "diazotization-reaction",
  name: "Diazotization Reaction",
  category: "substitution",
  summary: "Primary aromatic amines react with nitrous acid (HNO2, generated in situ from NaNO2 + HCl) at 0-5degC to form diazonium salts (ArN2+). Key intermediate for Sandmeyer, Gattermann, and azo coupling reactions.",
  discovered: "Peter Griess, 1858",
  reactionType: "Diazonium Salt Formation",
  equation: "ArNH2 + NaNO2 + 2HCl  -> [0-5degC]  ArN2+Cl- + NaCl + 2H2O",
  catalyst: "NaNO2 / HCl (or H2SO4) at 0-5degC",
  applications: [
  "Synthesis of diazonium salts - versatile intermediates for diverse functional groups",
  "Precursor for Sandmeyer, Gattermann, Balz-Schiemann reactions",
  "Azo dye synthesis via electrophilic coupling with activated aromatics",
  "Replacement of amino group with F, Cl, Br, CN, OH, NO2 groups",
  "Pharmaceutical synthesis - introduction of diverse aromatic substituents"
  ],
  tags: ["diazonium", "aromatic amine", "NaNO2"],
  steps: [
  { title: "HNO2 Generation", content: "NaNO2 reacts with HCl to generate nitrous acid (HNO2) in situ. This must be done at 0-5degC to prevent decomposition.", formula: "NaNO2 + HCl  ->  HNO2 + NaCl" },
  { title: "Nitrosation of Amine", content: "HNO2 reacts with the primary aromatic amine, first forming an N-nitrosammonium species, which rearranges.", formula: "ArNH2 + HNO2  ->  ArNH-N=O + H2O (nitrosamine intermediate)" },
  { title: "Diazonium Salt Formation", content: "Protonation and water loss give the diazonium cation (ArN2+), which is stabilized by resonance with the aromatic ring. Must be used immediately (low temp).", formula: "ArNHNO  ->  ArN2+ + OH- (or in acid: + H2O loss)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Critical - diazonium salts are stable only at low temp. Standard condition.", type: "positive" },
  medium: { label: "5-15degC", effect: "Marginal stability. Some decomposition to phenol occurs.", type: "neutral" },
  high: { label: ">10degC", effect: "Diazonium decomposes rapidly to phenol + N2. Reaction fails.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 evolution drives reaction; no issue.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not used.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute HCl", effect: "Insufficient acidity; incomplete diazotization.", type: "negative" },
  medium: { label: "2-3 M HCl + 1 eq NaNO2", effect: "Efficient and complete diazotization.", type: "positive" },
  high: { label: "Excess NaNO2", effect: "May cause N-nitrosation of product - avoid excess.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -1.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "N", color: "#4488ff", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.9, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -1.8, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "claisen-condensation",
  name: "Claisen Condensation",
  category: "condensation",
  summary: "Two ester molecules react in the presence of a strong base (NaOEt) to form a beta-ketoester and an alcohol. An enolate from one ester attacks the carbonyl of another.",
  discovered: "Ludwig Claisen, 1887",
  reactionType: "Condensation (Nucleophilic Acyl Substitution)",
  equation: "2 CH3COOC2H5  -> [NaOEt] CH3COCH2COOC2H5 + C2H5OH",
  catalyst: "NaOEt (or NaOMe), 1 equiv",
  applications: [
  "Synthesis of ethyl acetoacetate (acetoacetic ester) - key synthetic building block",
  "Production of beta-ketoesters for pharmaceutical and flavor chemistry",
  "Preparation of 1,3-dicarbonyl compounds for metal chelation",
  "Dieckmann cyclization (intramolecular Claisen) for making cyclic beta-ketoesters",
  "Construction of polyketide natural products via iterative Claisen condensations"
  ],
  tags: ["ester", "beta-ketoester", "enolate"],
  steps: [
  { title: "Enolate Formation", content: "NaOEt deprotonates the alpha-carbon of one ester molecule, generating a stabilized enolate nucleophile.", formula: "CH3COOR + NaOEt  ->  -CH2COOR + EtOH" },
  { title: "Nucleophilic Addition", content: "The enolate attacks the carbonyl carbon of a second ester molecule, forming a tetrahedral intermediate.", formula: "-CH2COOR + CH3COOR  ->  tetrahedral intermediate" },
  { title: "Elimination & Product", content: "Alkoxide (EtO-) leaves, regenerating the carbonyl. The beta-ketoester product is more acidic than the reactant, so it is deprotonated and isolated as its sodium enolate, then acidified.", formula: "Intermediate  ->  beta-ketoester + ROH" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow enolate formation and addition.", type: "negative" },
  medium: { label: "Room Temp to 50degC", effect: "Standard conditions. Good beta-ketoester yield.", type: "positive" },
  high: { label: "High Temp", effect: "Retro-Claisen and over-alkylation may occur.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate (excess NaOEt)", effect: "Good conversion; the thermodynamic product (beta-ketoester enolate) drives the equilibrium.", type: "positive" },
  high: { label: "Concentrated", effect: "Multiple condensation products may form.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.8, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.2, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.3, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.3, y: 1.2, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[3,4]]
  }
  },
  {
  id: "claisen-schmidt-condensation",
  name: "Claisen-Schmidt Condensation",
  category: "condensation",
  summary: "A cross-aldol condensation between an aromatic aldehyde (no alpha-H) and a methyl ketone or acetaldehyde in the presence of base to form an alpha,beta-unsaturated ketone (chalcone). Irreversible due to lack of alpha-H in the aldehyde.",
  discovered: "Ludwig Claisen & J. G. Schmidt, 1881",
  reactionType: "Cross-Aldol Condensation",
  equation: "ArCHO + CH3COR  -> [NaOH]  ArCH=CHCOR + H2O",
  catalyst: "NaOH (aqueous or ethanolic)",
  applications: [
  "Industrial synthesis of chalcones (aromatic enones) for pharmaceutical agents",
  "Production of flavonoid precursors (quercetin, kaempferol skeleton)",
  "Synthesis of antimicrobial and anti-inflammatory chalcone compounds",
  "Production of natural-product-inspired fragrance aldehydes",
  "Asymmetric Claisen-Schmidt for chiral active pharmaceutical ingredients"
  ],
  tags: ["cross-aldol", "chalcone", "alpha,beta-unsaturated ketone"],
  steps: [
  { title: "Enolate Formation", content: "NaOH deprotonates the alpha-carbon of the methyl ketone (acetophenone or acetone) to form the enolate nucleophile.", formula: "CH3COR + NaOH  ->  -CH2COR (enolate)" },
  { title: "Nucleophilic Addition to Aldehyde", content: "The enolate attacks the carbonyl of the aromatic aldehyde (no alpha-H, so no competing self-aldol), forming a beta-hydroxy ketone intermediate.", formula: "-CH2COR + ArCHO  ->  ArCH(OH)CH2COR" },
  { title: "Dehydration to Chalcone", content: "Base-promoted elimination of water (E1cb) from the beta-hydroxy ketone gives the conjugated chalcone product.", formula: "ArCH(OH)CH2COR  -> [-H2O] ArCH=CHCOR (chalcone)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow condensation; aldol product may not dehydrate.", type: "negative" },
  medium: { label: "40-60degC", effect: "Standard conditions. Good chalcone yield with dehydration.", type: "positive" },
  high: { label: "High Temp", effect: "Faster but multiple condensation products may form.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Helps remove water to drive equilibrium.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains water; may lower yield.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower bimolecular reaction.", type: "negative" },
  medium: { label: "Moderate", effect: "Standard conditions for efficient chalcone synthesis.", type: "positive" },
  high: { label: "Concentrated", effect: "Self-condensation of ketone as side reaction.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -3.2, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.5, y: 1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "benzoin-condensation",
  name: "Benzoin Condensation",
  category: "condensation",
  summary: "Two molecules of benzaldehyde (or other aromatic aldehydes) condense in the presence of cyanide ion or thiamine (vitamin B1/NHC) catalyst to form benzoin (a alpha-hydroxy ketone). The first umpolung reaction.",
  discovered: "Woehler & Liebig (1832); CN- mechanism by Lapworth (1903)",
  reactionType: "Umpolung Condensation",
  equation: "2 C6H5CHO  -> [CN- or thiamine] C6H5CH(OH)COC6H5 (benzoin)",
  catalyst: "KCN or NaCN (cat.) / Thiamine-HCl / NHC catalyst",
  applications: [
  "Synthesis of benzoin (pharmaceutical, fragrance, and UV stabilizer)",
  "Production of benzil (from further oxidation of benzoin)",
  "Synthesis of alpha-hydroxy ketones as chiral drug precursors",
  "Model reaction for NHC umpolung catalysis (thiamine mimics)",
  "Preparation of starting materials for anti-epileptic drug phenytoin"
  ],
  tags: ["umpolung", "acyl anion", "cyanide catalysis"],
  steps: [
  { title: "CN- Addition (Umpolung)", content: "Cyanide ion attacks the electrophilic aldehyde carbonyl to form a cyanohydrin anion, which reverses the polarity of the carbonyl carbon (acyl anion equivalent).", formula: "PhCHO + CN-  ->  Ph-CH(OH)-CN  ->  Ph-C-(OH)-CN (acyl anion)" },
  { title: "Nucleophilic Addition to Second Aldehyde", content: "The acyl anion equivalent (nucleophilic at what was the carbonyl carbon) attacks a second benzaldehyde molecule.", formula: "Ph-C-(OH)-CN + PhCHO  ->  Ph-CH(OH)-C(OH)(Ph)-CN" },
  { title: "CN- Elimination & Product", content: "Cyanide is expelled as CN-, regenerating the catalyst, and the intermediate tautomerizes to give benzoin.", formula: "Intermediate  ->  Ph-CH(OH)-CO-Ph (benzoin) + CN-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow CN- addition; acceptable for asymmetric variants.", type: "neutral" },
  medium: { label: "Room Temp to 60degC", effect: "Standard. Good benzoin yield with KCN catalyst.", type: "positive" },
  high: { label: "High Temp", effect: "Benzoin may oxidize to benzil; side products form.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Low CN-", effect: "Slow catalytic cycle; poor conversion.", type: "negative" },
  medium: { label: "5-10 mol% CN-", effect: "Efficient catalytic turnover at standard scale.", type: "positive" },
  high: { label: "Excess CN-", effect: "Benzoin may react further (cyanohydrin formation).", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -3.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.3, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 1.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[1,4]]
  }
  },
  {
  id: "dieckmann-condensation",
  name: "Dieckmann Condensation",
  category: "condensation",
  summary: "Intramolecular Claisen condensation of a diester to form a cyclic beta-ketoester. Particularly useful for forming 5- and 6-membered rings, widely used in synthesis of cyclopentanone and cyclohexanone derivatives.",
  discovered: "Walter Dieckmann, 1894",
  reactionType: "Intramolecular Claisen Condensation",
  equation: "ROOC-(CH2)n-COOR  -> [NaOEt]  Cyclic beta-ketoester + ROH",
  catalyst: "NaOEt (sodium ethoxide), 1 equiv",
  applications: [
  "Synthesis of cyclopentanone and cyclohexanone beta-ketoesters (Hagemann's ester)",
  "Key step in Hantzsch pyridine synthesis",
  "Synthesis of steroid ring frameworks via Dieckmann cyclization",
  "Production of cyclic natural product skeletons in total synthesis",
  "Industrial synthesis of tropinone precursors (alkaloid chemistry)"
  ],
  tags: ["intramolecular", "ring formation", "beta-ketoester"],
  steps: [
  { title: "Enolate Formation", content: "NaOEt deprotonates one alpha-carbon of the diester to form the intramolecular enolate.", formula: "ROOC-CH2-(CH2)n-COOR + NaOEt  ->  enolate" },
  { title: "Intramolecular Acyl Substitution", content: "The enolate attacks the ester carbonyl of the same molecule intramolecularly, forming an alkoxide intermediate in a ring.", formula: "Enolate attacks internal ester  ->  cyclic tetrahedral intermediate" },
  { title: "Ring Closure & Decarboxylation", content: "EtO- leaves and the cyclic beta-ketoester product is deprotonated (thermodynamic sink). Acid workup gives the beta-ketoester.", formula: "Intermediate  ->  cyclic beta-ketoester + EtO-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow intramolecular reaction.", type: "negative" },
  medium: { label: "Room Temp to 70degC", effect: "Standard. Ring closure proceeds cleanly.", type: "positive" },
  high: { label: "High Temp", effect: "Retro-Claisen and polymerization side reactions possible.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute (for macrocycles)", effect: "Favors intramolecular reaction over intermolecular for larger rings.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard for 5- and 6-membered ring formation.", type: "positive" },
  high: { label: "Concentrated", effect: "Intermolecular Claisen competes; oligomers form.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.8, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.2, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3],[3,4],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 1.0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 1.0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: -1.0, y: -0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 2.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,0],[0,4]]
  }
  },
  {
  id: "robinson-annulation",
  name: "Robinson Annulation",
  category: "condensation",
  summary: "A tandem Michael addition followed by intramolecular aldol condensation to form a 6-membered ring enone. Key strategy in steroid and terpene synthesis. Named after Sir Robert Robinson.",
  discovered: "Robert Robinson, 1935 (Nobel Prize 1947)",
  reactionType: "Tandem Michael + Aldol Condensation",
  equation: "Ketone + methyl vinyl ketone  -> [base] cyclohexenone (via Michael then aldol)",
  catalyst: "NaOH, NaOEt, or proline (asymmetric variant)",
  applications: [
  "Synthesis of the Hajos-Parrish and Wieland-Miescher ketones (steroid precursors)",
  "Construction of six-membered carbocyclic rings in terpene natural product synthesis",
  "Synthesis of cyclohexenone cores in prostaglandin chemistry",
  "Total synthesis of steroids (cortisone, testosterone) ring formation",
  "Asymmetric Robinson annulation using proline organocatalyst"
  ],
  tags: ["ring formation", "Michael plus aldol", "cyclohexenone"],
  steps: [
  { title: "Michael Addition (Step 1)", content: "The enolate of the ketone adds in a 1,4-conjugate fashion to methyl vinyl ketone (MVK), forming a 1,5-diketone intermediate.", formula: "Ketone enolate + CH2=CHCOCH3  ->  1,5-diketone" },
  { title: "Intramolecular Aldol Condensation (Step 2)", content: "The 1,5-diketone undergoes intramolecular base-mediated aldol condensation between the two ketone groups, forming a beta-hydroxy ketone ring.", formula: "1,5-diketone + base  ->  beta-hydroxy cyclic ketone" },
  { title: "Dehydration to Cyclohexenone", content: "Elimination of water from the beta-hydroxy ketone gives the thermodynamically stable cyclohexenone (six-membered ring enone).", formula: "beta-hydroxy ketone  -> [-H2O] cyclohexenone" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow Michael addition; aldol step does not proceed.", type: "negative" },
  medium: { label: "Room Temp to 80degC", effect: "Both Michael and aldol steps proceed cleanly.", type: "positive" },
  high: { label: "High Temp", effect: "Retro-Michael and retro-aldol possible. Enone may polymerize.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Negligible effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow Michael addition; poor yield.", type: "negative" },
  medium: { label: "Moderate", effect: "Good conversion to cyclohexenone.", type: "positive" },
  high: { label: "Concentrated", effect: "Polyalkylation and oligomerization may compete.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 3.0, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 4.0, y: 0.2, z: 0 }
  ],
  bonds: [[0,1],[2,3],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 1.0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 1.0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.1, y: -0.4, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.1, y: -0.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 2.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5]]
  }
  },
  {
  id: "schmidt-reaction",
  name: "Schmidt Reaction",
  category: "rearrangement",
  summary: "Carboxylic acids, aldehydes, or ketones react with hydrazoic acid (HN3) in the presence of a strong acid to form amines, nitriles, or amides respectively, via a nitrene-like intermediate and 1,2-migration.",
  discovered: "Karl Friedrich Schmidt, 1924",
  reactionType: "1,2-Migration (Rearrangement via Nitrene)",
  equation: "RCOOH + HN3  -> [H2SO4] RNH2 + CO2 + N2",
  catalyst: "H2SO4 or BF3 (strong acid), HN3 (hydrazoic acid)",
  applications: [
  "One-step synthesis of primary amines from carboxylic acids",
  "Industrial route to caprolactam from cyclohexanone (alternative to Beckmann)",
  "Ring expansion of cyclic ketones to lactams (pharmaceutical intermediates)",
  "Synthesis of isocyanates from carboxylic acids",
  "Production of amides from aldehydes via Schmidt reaction pathway"
  ],
  tags: ["nitrogen insertion", "1,2-migration", "amine synthesis"],
  steps: [
  { title: "Protonation & HN3 Attack", content: "Strong acid protonates the carboxylic acid hydroxyl. HN3 attacks the activated carbonyl, forming an azidoformic acid intermediate.", formula: "RCOOH + HN3 + H+  ->  R-CO-N3 + H2O (acyl azide)" },
  { title: "1,2-Alkyl Migration & N2 Loss", content: "The acyl azide loses N2 spontaneously (or under mild heat), and the R group migrates from C to N simultaneously, forming an isocyanate.", formula: "R-CO-N3+  ->  R-N=C=O + N2 -> " },
  { title: "Hydrolysis to Amine", content: "The isocyanate is hydrolyzed by water to give carbamic acid, which decarboxylates spontaneously to the primary amine.", formula: "R-N=C=O + H2O  ->  RNH-COOH  ->  RNH2 + CO2" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow HN3 addition and migration. Product yield is poor.", type: "negative" },
  medium: { label: "0-25degC", effect: "Controlled conditions critical to prevent HN3 hazard.", type: "positive" },
  high: { label: "High Temp", effect: "Uncontrolled explosive decomposition of HN3. Hazardous.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes; drives reaction forward.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard with safety precautions.", type: "positive" },
  high: { label: "High Pressure", effect: "Dangerous with HN3; never use high pressure.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute HN3", effect: "Poor conversion; slow attack on activated carbonyl.", type: "negative" },
  medium: { label: "1.2 equiv HN3 in H2SO4", effect: "Complete, selective conversion to amine or amide.", type: "positive" },
  high: { label: "Excess HN3", effect: "Safety hazard; HN3 is highly toxic and explosive.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 3.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3]],
  products: [
  { symbol: "N", color: "#4488ff", x: -0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "fries-rearrangement",
  name: "Fries Rearrangement",
  category: "rearrangement",
  summary: "Aryl esters rearrange upon treatment with a Lewis acid (AlCl3) to give ortho- and para-hydroxyaryl ketones (acylphenols). Controlled by temperature: low temp favors para, high temp favors ortho.",
  discovered: "Karl Theophil Fries, 1908",
  reactionType: "Lewis Acid-Catalyzed Rearrangement",
  equation: "ArOCOR  -> [AlCl3] o-HO-Ar-COR + p-HO-Ar-COR",
  catalyst: "AlCl3 (Lewis acid), or BF3.Et2O",
  applications: [
  "Synthesis of o- and p-hydroxyacetophenone for pharmaceutical intermediates",
  "Industrial preparation of 4'-hydroxyacetophenone (paracetamol precursor)",
  "Production of 2-hydroxybenzophenone as UV absorber for plastics",
  "Synthesis of natural phenols with acyl side chains (propolis compounds)",
  "Photo-Fries rearrangement variant useful for polymer photochemistry"
  ],
  tags: ["rearrangement", "Lewis acid", "hydroxyaryl ketone"],
  steps: [
  { title: "Acylium Ion Formation", content: "AlCl3 complexes with the aryl ester oxygen and promotes ionization to form an acylium ion (or tight ion pair) and a phenoxide.", formula: "ArOCOR + AlCl3  ->  [ArO-][RCCO+.AlCl3]" },
  { title: "Intramolecular Friedel-Crafts Acylation", content: "The acylium ion attacks the aromatic ring of the phenoxide intramolecularly at the ortho or para position, forming a cyclohexadienyl cation.", formula: "Acylium attacks Ar ring  ->  sigma-complex at ortho or para" },
  { title: "Rearomatization & Product", content: "Loss of a proton restores the aromatic ring, and acidic workup releases the hydroxyaryl ketone product.", formula: "sigma-complex  ->  o-HO-Ar-COR and p-HO-Ar-COR + HCl" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0-25degC)", effect: "Para-isomer favored (thermodynamic control; less hindered).", type: "positive" },
  medium: { label: "100-150degC", effect: "Mixture; both ortho and para isomers form.", type: "neutral" },
  high: { label: "High Temp (>150degC)", effect: "Ortho-isomer favored (kinetic/chelation control via AlCl3).", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "No benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow rearrangement.", type: "negative" },
  medium: { label: "1 equiv AlCl3 in solvent", effect: "Standard; good para/ortho ratio control.", type: "positive" },
  high: { label: "Excess AlCl3", effect: "Multiple acylations may occur.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 3.9, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 4.7, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[6,7],[7,8]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.7, z: 0 },
  { symbol: "C", color: "#555555", x: 2.4, y: 1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.4, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[1,7],[7,8]]
  }
  },
  {
  id: "demjanov-rearrangement",
  name: "Demjanov Rearrangement",
  category: "rearrangement",
  summary: "Primary aliphatic amines with a ring system are diazotized to give diazonium ions, which then undergo 1,2-carbon or 1,2-hydride shifts to give ring-expanded or ring-contracted alcohols and alkenes.",
  discovered: "Nikolai Demjanov, 1903",
  reactionType: "Ring Expansion/Contraction via Carbocation",
  equation: "Cyclopropylamine + HNO2  ->  cycloproyl-diazonium  ->  ring-expanded/contracted products",
  catalyst: "HNO2 (NaNO2/HCl) at low temperature",
  applications: [
  "Ring expansion of cyclopropylamine to cyclobutanol and cyclobutanone",
  "Ring contraction of cyclobutylamine to cyclopropane derivatives",
  "Access to ring-expanded or contracted cyclic compounds not easily made otherwise",
  "Synthesis of medium-sized ring hydrocarbons in natural product chemistry",
  "Mechanistic studies of carbocation 1,2-shifts and carbon skeletal changes"
  ],
  tags: ["ring expansion", "diazonium", "1,2-shift"],
  steps: [
  { title: "Diazotization of Amine", content: "The primary aliphatic amine (cycloalkylamine) is diazotized with NaNO2/HCl at 0-5degC to form the diazonium ion.", formula: "RCH2NH2 + HNO2  ->  RCH2N2+ + H2O" },
  { title: "N2 Loss & Carbocation Formation", content: "The unstable alkyl diazonium ion rapidly loses N2 to form a primary carbocation (with ring strain relief from neighboring group participation).", formula: "RCH2N2+  ->  RCH2+ + N2 (carbocation)" },
  { title: "1,2-Shift & Product", content: "The primary carbocation undergoes 1,2-hydride or 1,2-carbon shift (ring expansion or contraction), followed by capture by water to give the alcohol product.", formula: "RCH2+  ->  ring-rearranged cation  ->  ROH (Demjanov product)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Required for diazonium stability. Rearrangement is fast even at low temp.", type: "positive" },
  medium: { label: "Room Temp", effect: "The diazonium decomposes and rearranges spontaneously.", type: "positive" },
  high: { label: "High Temp", effect: "Explosive decomposition of diazonium; multiple products.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes; drives reaction.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Dangerous; not used.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute HNO2", effect: "Slow diazotization; partial conversion.", type: "negative" },
  medium: { label: "1 equiv NaNO2/HCl", effect: "Clean diazotization and rearrangement.", type: "positive" },
  high: { label: "Excess HNO2", effect: "N-nitrosation side products may form.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0.8, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: -0.4, z: 0 },
  { symbol: "C", color: "#555555", x: -0.7, y: -0.4, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 0.8, z: 1.5 }
  ],
  bonds: [[0,1],[1,2],[2,0],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.2, z: 0 },
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.2, z: 1.4 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,0],[0,4]]
  }
  },
  {
  id: "strecker-synthesis",
  name: "Strecker Synthesis",
  category: "addition",
  summary: "An aldehyde reacts with ammonia (or amine) and hydrogen cyanide to form an alpha-amino nitrile, which is hydrolyzed to an alpha-amino acid. One of the oldest methods for amino acid synthesis.",
  discovered: "Adolph Strecker, 1850",
  reactionType: "Multi-Component Addition / Amino Acid Synthesis",
  equation: "RCHO + NH3 + HCN  ->  RCH(NH2)CN  -> [H2O/H+] RCH(NH2)COOH",
  catalyst: "NH4Cl or Lewis acid for activation; dilute acid for hydrolysis",
  applications: [
  "Industrial synthesis of amino acids (DL-alanine, DL-phenylalanine)",
  "Production of amino acids for food additives and pharmaceutical APIs",
  "Asymmetric Strecker synthesis using chiral catalysts for L-amino acids",
  "Synthesis of N-substituted amino acids using primary amines instead of NH3",
  "Prebiotic chemistry model - may explain origin of amino acids in early Earth"
  ],
  tags: ["amino acid synthesis", "HCN", "multi-component"],
  steps: [
  { title: "Imine (Schiff Base) Formation", content: "The aldehyde condenses with ammonia to form an imine (aldimine/Schiff base) after loss of water.", formula: "RCHO + NH3  ->  RCH=NH + H2O (imine)" },
  { title: "HCN Addition (Strecker Step)", content: "HCN adds to the imine in a nucleophilic addition. The cyano group is the nucleophile attacking the electrophilic imine carbon.", formula: "RCH=NH + HCN  ->  RCH(NH2)CN (alpha-amino nitrile)" },
  { title: "Hydrolysis to Amino Acid", content: "The nitrile group is hydrolyzed under acid (or base) conditions, first to an amide, and then to the alpha-amino acid.", formula: "RCH(NH2)CN + H2O  ->  RCH(NH2)COOH (amino acid)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Slow imine and nitrile formation. Long reaction time.", type: "negative" },
  medium: { label: "Room Temp to 60degC", effect: "Efficient imine formation and HCN addition.", type: "positive" },
  high: { label: "Reflux (acid hydrolysis)", effect: "Necessary for nitrile to amino acid hydrolysis step.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCN may evaporate (highly toxic hazard). Keep sealed.", type: "negative" },
  medium: { label: "Atmospheric (sealed)", effect: "Standard. Sealed vessel required for safety.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed; dangerous with HCN.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow three-component reaction.", type: "negative" },
  medium: { label: "Equimolar components", effect: "Efficient synthesis of alpha-aminonitrile.", type: "positive" },
  high: { label: "Excess NH3", effect: "Drives imine formation equilibrium; improves yield.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: -0.5, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.2, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3]]
  }
  },
  {
  id: "transesterification",
  name: "Transesterification",
  category: "condensation",
  summary: "An ester reacts with an alcohol (or another ester) to exchange the alkyl group on the ester, forming a new ester. Catalyzed by acid or base, and an equilibrium reaction where excess alcohol drives conversion.",
  discovered: "Known since antiquity; formalized in the 19th century",
  reactionType: "Ester Interchange (Equilibrium)",
  equation: "RCOOR' + R''OH  <=> [H+ or B-] RCOOR'' + R'OH",
  catalyst: "H2SO4 / p-TsOH (acid) or NaOMe / NaOH (base)",
  applications: [
  "Biodiesel production: transesterification of vegetable oil triglycerides with methanol",
  "Polyester synthesis (PET): transesterification of dimethyl terephthalate with ethylene glycol",
  "Production of acrylic esters by exchange from methyl acrylate",
  "Synthesis of wax esters for cosmetics from fatty acid esters and long-chain alcohols",
  "Polymer recycling (glycolysis of PET using ethylene glycol)"
  ],
  tags: ["ester exchange", "equilibrium", "biodiesel"],
  steps: [
  { title: "Activation of Ester", content: "Acid catalyst protonates the ester carbonyl oxygen, activating the carbonyl carbon toward nucleophilic attack by the new alcohol.", formula: "RCOOR' + H+  ->  RC(=OH+)OR'" },
  { title: "Tetrahedral Intermediate", content: "The new alcohol (R''OH) attacks the activated carbonyl to form a tetrahedral intermediate bearing both alkoxy groups.", formula: "RC(=OH+)OR' + R''OH  ->  RC(OH)(OR')(OR'')+" },
  { title: "Alcohol Elimination & New Ester", content: "One of the alkoxy groups (R'O-) leaves as the old alcohol, and the proton is lost to regenerate catalyst, forming the new ester.", formula: "Intermediate  ->  RCOOR'' + R'OH + H+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow equilibrium; incomplete conversion.", type: "negative" },
  medium: { label: "Reflux (~60-100degC)", effect: "Standard conditions. Equilibrium reached; excess alcohol drives conversion.", type: "positive" },
  high: { label: "High Temp", effect: "Faster but thermal decomposition of sensitive products may occur.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Removes the exchange alcohol by distillation - drives equilibrium to product.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard. Excess alcohol drives equilibrium.", type: "positive" },
  high: { label: "High Pressure", effect: "Retains alcohol; may inhibit equilibrium shift to product.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Poor conversion at equilibrium.", type: "negative" },
  medium: { label: "Excess Alcohol (3-5 equiv)", effect: "Drives Le Chatelier equilibrium to new ester.", type: "positive" },
  high: { label: "Large excess alcohol", effect: "Best industrial conversion; used in biodiesel production.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 4.2, y: 0.6, z: 0 }
  ],
  bonds: [[0,1],[0,2],[2,3],[4,5]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.3, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: -0.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.5, y: -1.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.2, y: -2.1, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[2,3],[4,5],[3,4]]
  }
  },
  {
  id: "azo-coupling",
  name: "Azo Coupling Reaction",
  category: "substitution",
  summary: "An aryl diazonium salt (electrophile) couples with an activated aromatic compound (phenol or amine, the coupling component) to form a brilliantly colored azo compound (Ar-N=N-Ar). The basis of azo dye synthesis.",
  discovered: "Peter Griess, 1858",
  reactionType: "Electrophilic Aromatic Substitution (EAS)",
  equation: "ArN2+ + Ar'-OH (or Ar'-NH2)  ->  Ar-N=N-Ar' (azo dye) + H+",
  catalyst: "No catalyst; pH control critical (slightly acidic for phenols, neutral for amines)",
  applications: [
  "Industrial synthesis of azo dyes for textiles (>3000 azo dyes in commercial use)",
  "Production of food colorants (tartrazine, sunset yellow)",
  "Synthesis of pH indicators (methyl orange, Congo red)",
  "Biological staining reagents for histology and microscopy",
  "Synthesis of azo compounds for nonlinear optical materials"
  ],
  tags: ["azo dye", "diazonium", "electrophilic aromatic substitution"],
  steps: [
  { title: "Diazonium Salt Formation", content: "The primary aromatic amine is diazotized with NaNO2/HCl at 0-5degC to form the reactive diazonium salt.", formula: "ArNH2 + NaNO2/HCl  ->  ArN2+Cl- + H2O" },
  { title: "Electrophilic Attack on Activated Aromatic", content: "The diazonium cation (a weak electrophile) attacks the highly activated para position (preferred) of the coupling component (phenol/amine).", formula: "ArN2+ + Ar'OH  ->  [Ar-N=N-C6H4OH]sigma-complex" },
  { title: "Deprotonation & Azo Product", content: "Loss of H+ restores aromaticity and gives the intensely colored azo compound.", formula: "sigma-complex  ->  Ar-N=N-Ar' + H+ (azo dye)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Essential for diazonium stability. Azo coupling itself occurs readily at this temperature.", type: "positive" },
  medium: { label: "Room Temp", effect: "Only for stable diazonium salts; most hydrolyze to phenol above 10degC.", type: "neutral" },
  high: { label: "High Temp", effect: "Diazonium decomposes; no coupling. Yield is zero.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute (Basic pH for amines)", effect: "Slow coupling; neutral phenol reactive though.", type: "negative" },
  medium: { label: "Slightly acidic (pH 5-7)", effect: "Optimal: phenol nucleophile active, diazonium stable.", type: "positive" },
  high: { label: "Alkaline (pH > 9)", effect: "Diazonium converts to diazohydroxide; coupling fails.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -1.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -2.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.3, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.7, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.3, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4]]
  }
  },
  {
  id: "sonogashira-coupling",
  name: "Sonogashira Coupling",
  category: "substitution",
  summary: "Pd/Cu-catalyzed cross-coupling of terminal alkynes with aryl or vinyl halides to form arylalkynes (internal alkynes). A cornerstone of modern medicinal chemistry and material science.",
  discovered: "Kenkichi Sonogashira, Nobue Tohda & Nobue Hagihara, 1975",
  reactionType: "Pd/Cu Cross-Coupling",
  equation: "Ar-X + HC-CR'  -> [Pd/PPh3, CuI, amine base]  Ar-C-C-R' + HX",
  catalyst: "Pd(PPh3)2Cl2, CuI, amine base (Et3N or iPr2NH)",
  applications: [
  "Synthesis of conjugated diynes and enediynes (anti-tumor enediyne antibiotics)",
  "Production of arylacetylenes for nonlinear optical materials",
  "Pharmaceutical synthesis: building blocks for kinase inhibitors and antifungals",
  "Construction of carbon-rich molecular wires and nanomaterials",
  "Synthesis of OLED and conducting polymer precursors"
  ],
  tags: ["alkyne coupling", "palladium", "copper cocatalyst"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) inserts into the C-X bond of the aryl halide via oxidative addition to form the Ar-Pd(II)-X complex.", formula: "Pd(0) + Ar-X  ->  Ar-Pd(II)-X" },
  { title: "Copper-Mediated Alkyne Activation", content: "CuI forms a copper acetylide with the terminal alkyne (in the presence of base), which is the actual nucleophile.", formula: "R-C-CH + CuI + base  ->  R-C-C-Cu + HBase+" },
  { title: "Transmetalation & Reductive Elimination", content: "The copper acetylide transmetalates with Ar-Pd(II)-X, and reductive elimination delivers the arylalkyne product, regenerating Pd(0).", formula: "Ar-Pd-X + R-C-C-Cu  ->  Ar-Pd-C-CR  ->  Ar-C-C-R + Pd(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (RT)", effect: "Slow oxidative addition for aryl chlorides; good for activated substrates.", type: "neutral" },
  medium: { label: "50-80degC", effect: "Standard for most aryl bromides. Good yield of arylalkyne.", type: "positive" },
  high: { label: "High Temp (>100degC)", effect: "Required for aryl chlorides. Higher temperatures needed for less reactive substrates.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed for standard Sonogashira.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower coupling; may require more catalyst.", type: "negative" },
  medium: { label: "1-3 mol% Pd/Cu", effect: "Efficient catalytic cycle. Good homocoupling control.", type: "positive" },
  high: { label: "Concentrated", effect: "Glaser homocoupling of alkyne can compete under aerobic conditions.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#777777", x: 2.0, y: 0, z: 0 },
  { symbol: "C", color: "#777777", x: 3.3, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 4.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#777777", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#777777", x: 0.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "stille-coupling",
  name: "Stille Coupling",
  category: "substitution",
  summary: "Pd-catalyzed cross-coupling of organotin (organostannane) reagents with organic electrophiles (aryl/vinyl halides or triflates) to form C-C bonds. Highly versatile but requires toxic tin reagents.",
  discovered: "John Kenneth Stille, 1978",
  reactionType: "Pd Cross-Coupling (Transmetalation with Sn)",
  equation: "R-SnBu3 + R'-X  -> [Pd(0)]  R-R' + Bu3SnX",
  catalyst: "Pd(PPh3)4 or Pd2(dba)3/ligand, no base usually needed",
  applications: [
  "Total synthesis of complex natural products (taxol, epothilone side chains)",
  "Synthesis of polyenes via iterative Stille coupling",
  "Coupling of sensitive functional groups not tolerated by other methods",
  "Construction of biaryl pharmaceutical intermediates",
  "Synthesis of conducting polymers (polythiophene via Stille polymerization)"
  ],
  tags: ["organotin", "palladium", "C-C bond formation"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) inserts into the C-X bond of the electrophile (aryl or vinyl halide/triflate), forming a Pd(II) complex.", formula: "Pd(0) + R'-X  ->  R'-Pd(II)-X" },
  { title: "Transmetalation with Organostannane", content: "The tin reagent (R-SnBu3) transmetalates with the Pd(II) complex: R transfers from Sn to Pd, giving R-Pd(II)-R'.", formula: "R'-Pd-X + R-SnBu3  ->  R'-Pd-R + Bu3SnX" },
  { title: "Reductive Elimination", content: "The two organic groups on Pd(II) undergo C-C bond forming reductive elimination, releasing the coupled product and regenerating Pd(0).", formula: "R'-Pd(II)-R  ->  R'-R + Pd(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Room Temp", effect: "Works for activated electrophiles (vinyl triflates).", type: "neutral" },
  medium: { label: "60-100degC", effect: "Standard for most aryl bromides. Good yield.", type: "positive" },
  high: { label: "High Temp (>100degC)", effect: "Required for aryl chlorides. Tin decomposition possible.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower catalysis.", type: "negative" },
  medium: { label: "1-5 mol% Pd", effect: "Efficient coupling without competing homocoupling.", type: "positive" },
  high: { label: "Concentrated", effect: "Homocoupling side products from organotin may form.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.5, y: 0, z: 0 },
  { symbol: "Sn", color: "#888888", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "negishi-coupling",
  name: "Negishi Coupling",
  category: "substitution",
  summary: "Pd-catalyzed cross-coupling of organozinc reagents with aryl or vinyl halides/triflates. Highly versatile and functional group tolerant, used extensively in pharmaceutical synthesis. Nobel Prize 2010 (shared with Heck and Suzuki).",
  discovered: "Ei-ichi Negishi, 1977 (Nobel Prize 2010)",
  reactionType: "Pd Cross-Coupling (with Organozinc)",
  equation: "R-ZnX + R'-X'  -> [Pd(0)]  R-R' + ZnXX'",
  catalyst: "Pd(PPh3)4 or Pd(dba)2/ligand",
  applications: [
  "Complex pharmaceutical synthesis (requires high functional group tolerance)",
  "Synthesis of natural products (discodermolide, amphidinolide)",
  "Industrial synthesis of vitamin A and related terpenoids",
  "Synthesis of biaryl compounds for agrochemicals",
  "Construction of branched and stereodefined carbon skeletons"
  ],
  tags: ["organozinc", "palladium", "Nobel Prize"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) catalyst inserts into the C-X bond of the electrophilic coupling partner (aryl or vinyl halide).", formula: "R'-X + Pd(0)  ->  R'-Pd(II)-X" },
  { title: "Transmetalation with Organozinc", content: "The organozinc reagent (R-ZnX) transfers R to palladium, displacing zinc halide, giving the diorgano-Pd(II) complex.", formula: "R'-Pd-X + R-ZnX  ->  R'-Pd-R + ZnX2" },
  { title: "Reductive Elimination", content: "The two organic groups on Pd undergo reductive elimination to give the coupled product and regenerate Pd(0).", formula: "R'-Pd-R  ->  R'-R + Pd(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Room Temp", effect: "Works for reactive electrophiles (vinyl iodides).", type: "neutral" },
  medium: { label: "50-80degC", effect: "Standard for aryl bromides. Excellent functional group tolerance.", type: "positive" },
  high: { label: "100degC+", effect: "For aryl chlorides. More forcing conditions with bulky phosphine ligands.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction.", type: "negative" },
  medium: { label: "0.5-5 mol% Pd", effect: "Standard catalytic loading.", type: "positive" },
  high: { label: "Concentrated", effect: "Mostly fine; can use concentrated conditions.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "Zn", color: "#aaaaaa", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 0.8, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "kumada-coupling",
  name: "Kumada Coupling",
  category: "substitution",
  summary: "Pd- or Ni-catalyzed cross-coupling of Grignard reagents with aryl or vinyl halides. The first Pd-catalyzed cross-coupling reaction discovered. Less functional group tolerant but uses inexpensive Grignard reagents.",
  discovered: "Makoto Kumada & Robert Corriu, 1972",
  reactionType: "Pd/Ni Cross-Coupling (with Grignard)",
  equation: "R-MgX + R'-X'  -> [Pd or Ni cat.]  R-R' + MgXX'",
  catalyst: "NiCl2(dppp) or Pd(PPh3)4",
  applications: [
  "Synthesis of biaryl compounds with Ni catalysis (cheaper than Pd)",
  "Large-scale production of aryl-alkyl and biaryl targets in pilot plants",
  "Synthesis of polyphenylene conducting polymers via Kumada polymerization",
  "Asymmetric Kumada coupling for chiral biaryl atropisomers",
  "Preparation of pharmaceutical intermediates where Grignard is accessible"
  ],
  tags: ["Grignard", "nickel", "palladium"],
  steps: [
  { title: "Oxidative Addition", content: "Ni(0) or Pd(0) inserts into the C-X bond of the aryl halide electrophile.", formula: "Ar-X + Ni(0)  ->  Ar-Ni(II)-X" },
  { title: "Transmetalation with Grignard", content: "The Grignard reagent (R-MgX) transfers R to the metal, displacing MgX2 and giving the diorgano-Ni complex.", formula: "Ar-Ni-X + R-MgX  ->  Ar-Ni-R + MgX2" },
  { title: "Reductive Elimination", content: "C-C bond forming reductive elimination releases the coupled product and regenerates the active Ni(0) or Pd(0) catalyst.", formula: "Ar-Ni-R  ->  Ar-R + Ni(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0-RT)", effect: "Grignard is reactive; low temp helps functional group tolerance.", type: "positive" },
  medium: { label: "Room Temp to 80degC", effect: "Standard for most Kumada couplings.", type: "positive" },
  high: { label: "High Temp", effect: "Grignard side reactions (beta-hydride elimination) may compete.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect on this reaction.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow coupling.", type: "negative" },
  medium: { label: "1-3 mol% Ni/Pd", effect: "Good catalytic efficiency.", type: "positive" },
  high: { label: "Concentrated Grignard", effect: "Risk of homo-coupling; Grignard addition to ester/ketone groups.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "Mg", color: "#00aa44", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 0.8, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "ullmann-reaction",
  name: "Ullmann Reaction",
  category: "substitution",
  summary: "Copper-mediated coupling of aryl halides to form symmetric biaryls (classic Ullmann) or, in the Ullmann ether synthesis, coupling of aryl halides with phenols/amines to give diaryl ethers or diarylamines.",
  discovered: "Fritz Ullmann, 1901",
  reactionType: "Cu-Mediated C-C or C-O Bond Formation",
  equation: "2 Ar-X + Cu  -> [high temp]  Ar-Ar + CuX2",
  catalyst: "Cu powder or CuI, high temperature (200-300degC) or catalyst ligand (modern)",
  applications: [
  "Synthesis of symmetric biaryls (biphenyl, binaphthyl) for chiral ligands",
  "Production of carbazole and phenanthridine ring systems for dyes",
  "Ullmann ether and amine synthesis for pharmaceutical drug candidates",
  "Modern copper-catalyzed arylation of amines and alcohols (Chan-Lam variant)",
  "Historical industrial route to phenothiazines (antipsychotic drugs)"
  ],
  tags: ["copper", "biaryl", "C-C or C-O coupling"],
  steps: [
  { title: "Oxidative Addition to Cu", content: "Copper metal inserts into the C-X bond of the aryl halide to form an arylcopper(I) or arylcopper(II) species under heating.", formula: "2 Ar-X + Cu  ->  Ar-Cu-X + Ar-Cu or [ArCu]" },
  { title: "Transmetalation or Radical Coupling", content: "Two arylcopper species (or one organocopper + aryl halide) combine via a radical or copper-mediated mechanism to form the biaryl bond.", formula: "2 Ar-Cu  ->  Ar-Ar + 2 Cu" },
  { title: "Biaryl Product & Copper Regeneration", content: "The symmetrical biaryl is released as product and Cu is regenerated (in catalytic variants). CuX2 byproduct requires high dilution.", formula: "Biaryl + Cu (catalyst regeneration)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "No reaction. Classical Ullmann requires 200-300degC for activation.", type: "negative" },
  medium: { label: "150-200degC (modern catalytic)", effect: "Modern copper-catalyzed with ligands: 80-120degC suffices.", type: "positive" },
  high: { label: "200-300degC (classic)", effect: "Classic stoichiometric Ullmann conditions. Standard for symmetric biaryl.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard for classical Ullmann.", type: "positive" },
  high: { label: "High Pressure", effect: "Used in sealed autoclave for modern catalytic Cu variants.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow reaction; incomplete.", type: "negative" },
  medium: { label: "Neat or high concentration + excess Cu", effect: "Standard conditions for classic Ullmann.", type: "positive" },
  high: { label: "High Cu loading", effect: "Faster conversion; essential for classical method.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 0.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "buchwald-hartwig",
  name: "Buchwald-Hartwig Amination",
  category: "substitution",
  summary: "Pd-catalyzed C-N bond formation between aryl halides (or triflates) and amines (primary, secondary, or ammonia equivalents). Revolutionized synthesis of aryl amines, key structural motifs in drugs.",
  discovered: "John Hartwig & Stephen Buchwald, 1994",
  reactionType: "Pd Cross-Coupling (C-N Bond Formation)",
  equation: "Ar-X + HNR2  -> [Pd/ligand, base]  Ar-NR2 + HX",
  catalyst: "Pd2(dba)3 / BINAP or Ad-BIPPAM ligand, Cs2CO3 or K3PO4 base",
  applications: [
  "Synthesis of diarylamine drugs (atorvastatin, gefitinib, imatinib side chains)",
  "Preparation of carbazole and phenoxazine heterocycles for OLEDs",
  "Synthesis of aryl amines as pharmaceutical intermediates globally",
  "Introduction of nitrogen into biologically active arene systems",
  "Production of N-aryl-substituted amino acid derivatives"
  ],
  tags: ["C-N bond", "palladium", "aryl amine synthesis"],
  steps: [
  { title: "Oxidative Addition", content: "Pd(0) inserts into the C-X bond of the aryl halide, forming the Ar-Pd(II)-X complex.", formula: "Ar-X + Pd(0)  ->  Ar-Pd(II)-X" },
  { title: "Amine Coordination & Deprotonation", content: "The amine coordinates to palladium, and base deprotonates to give the amide-Pd complex.", formula: "Ar-Pd-X + H2NR + base  ->  Ar-Pd-NHR + BH+X-" },
  { title: "Reductive Elimination", content: "C-N bond forming reductive elimination from Ar-Pd(II)-NR2 releases the aryl amine and regenerates Pd(0).", formula: "Ar-Pd-NR2  ->  Ar-NR2 + Pd(0)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Room Temp", effect: "Works for activated aryl iodides with excellent ligands.", type: "neutral" },
  medium: { label: "80-110degC", effect: "Standard conditions for most aryl bromides.", type: "positive" },
  high: { label: "120degC+", effect: "Required for aryl chlorides; bulky, electron-rich phosphine needed.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric (inert gas)", effect: "Standard conditions under N2 or Ar atmosphere.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower catalysis.", type: "negative" },
  medium: { label: "0.5-5 mol% Pd", effect: "Standard. Good amine selectivity with right ligand.", type: "positive" },
  high: { label: "Excess base", effect: "Critical to neutralize HX byproduct and maintain catalyst activity.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: -0.7, z: 0 }
  ],
  bonds: [[0,1],[2,3],[2,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.7, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2]]
  }
  },
  {
  id: "mitsunobu-reaction",
  name: "Mitsunobu Reaction",
  category: "substitution",
  summary: "Inversion of configuration of an alcohol by reaction with a pronucleophile (pKa < 13, e.g., carboxylic acid, phthalimide) using DEAD (diethyl azodicarboxylate) and PPh3. Net SN2 with retention at the mitsunobu by-product.",
  discovered: "Oyo Mitsunobu, 1967",
  reactionType: "Stereochemical Inversion (SN2-like)",
  equation: "R-OH + Nu-H  -> [DEAD, PPh3]  R-Nu + Ph3P=O + DEAD-H2",
  catalyst: "PPh3 (1 equiv) + DEAD or DIAD (1 equiv), no metal needed",
  applications: [
  "Inversion of configuration of secondary alcohols in natural product synthesis",
  "Gabriel amine synthesis via phthalimide as pronucleophile",
  "Synthesis of aryl ethers and esters with inversion",
  "Introduction of azides (as pronucleophile) for click chemistry precursors",
  "Preparation of inverted pharmaceutical chiral centers without protecting groups"
  ],
  tags: ["inversion of configuration", "PPh3/DEAD", "alcohol activation"],
  steps: [
  { title: "DEAD Activation of PPh3", content: "DEAD reacts with PPh3 to form a highly reactive betaine intermediate, which is the actual alcohol activator.", formula: "PPh3 + DEAD  ->  Ph3P+-N(CO2Et)-N-(CO2Et) (betaine)" },
  { title: "Alcohol Activation", content: "The betaine protonates the pronucleophile, and the resulting phosphonium alkoxide forms a highly reactive electrophilic oxyphosphonium species.", formula: "Betaine + ROH  ->  R-O-PPh3+ (oxyphosphonium) + DEAD-H-" },
  { title: "SN2 Inversion", content: "The deprotonated pronucleophile (Nu-) attacks the oxyphosphonium carbon in an SN2 manner, giving the product with inversion and Ph3P=O as byproduct.", formula: "Nu- + R-O-PPh3+  ->  Nu-R (inversion) + Ph3P=O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Controls the exotherm of DEAD/PPh3 reagent mixing; useful for sensitive substrates.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for most Mitsunobu reactions. Excellent stereoselectivity.", type: "positive" },
  high: { label: "High Temp", effect: "Side reactions including racemization of the product.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower but cleaner reaction.", type: "neutral" },
  medium: { label: "Moderate (1.5 equiv PPh3/DEAD)", effect: "Complete inversion; standard stoichiometry.", type: "positive" },
  high: { label: "Concentrated", effect: "PPh3=O byproduct hard to remove at high concentration.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.3, y: 1.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.0, y: 1.0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "corey-house-reaction",
  name: "Corey-House Reaction",
  category: "substitution",
  summary: "Gilman organocuprate reagents (R2CuLi, lithium dialkylcuprates) react with alkyl halides, epoxides, or alpha,beta-unsaturated carbonyls to form C-C bonds. Excellent for 1,4-conjugate addition and C-C coupling.",
  discovered: "E. J. Corey & Herbert O. House, 1967",
  reactionType: "Organocuprate Substitution / 1,4-Addition",
  equation: "R2CuLi + R'-X  ->  R-R' + RCuLi + LiX",
  catalyst: "Formed from RLi + CuI; no external catalyst needed",
  applications: [
  "1,4-Conjugate addition to enones (soft-soft interaction; prevents 1,2-addition)",
  "Synthesis of ketones from acid chlorides via organocuprate",
  "Coupling of primary alkyl halides for carbon chain elongation",
  "Opening of epoxides with inversion at the more substituted carbon",
  "Synthesis of trans-alkenes via cuprate-mediated vinyl epoxide opening"
  ],
  tags: ["organocuprate", "Gilman reagent", "1,4-addition"],
  steps: [
  { title: "Gilman Reagent Formation", content: "Two equivalents of organolithium (RLi) react with CuI to form the Gilman reagent (R2CuLi, a lithium dialkylcuprate).", formula: "2 RLi + CuI  ->  R2CuLi + LiI" },
  { title: "SN2 Attack or Conjugate Addition", content: "The cuprate acts as a soft carbon nucleophile. With alkyl halides, it displaces X- by SN2. With enones, it adds 1,4 (conjugate) not 1,2.", formula: "R2CuLi + R'CH2X  ->  R-CH2R' + RCuLi + LiX" },
  { title: "Product & Copper Byproduct", content: "After protonation (aqueous workup), the coupled product is obtained. RCuLi byproduct can further react with another equivalent of substrate.", formula: "R-R' (coupled product) + H2O workup" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-78degC to -20degC)", effect: "Essential for Gilman formation and selective SN2/1,4-addition over Grignard-like 1,2-addition.", type: "positive" },
  medium: { label: "0degC to Room Temp", effect: "Warming for some coupling reactions. Controlled step-up allows selectivity.", type: "positive" },
  high: { label: "High Temp", effect: "Decomposition of cuprate; beta-hydride elimination and side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric (inert gas)", effect: "Essential: Gilman reagent is air and moisture sensitive.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute in Et2O/THF", effect: "Good solubility of cuprate; slow but selective.", type: "neutral" },
  medium: { label: "1 equiv R2CuLi per 1 equiv halide", effect: "Efficient coupling with minimal homo-coupling.", type: "positive" },
  high: { label: "Excess cuprate", effect: "Ensures complete consumption of halide; standard.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0.5, z: 0 },
  { symbol: "C", color: "#555555", x: -2.0, y: -0.5, z: 0 },
  { symbol: "Cu", color: "#cc7700", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 3.3, y: 0, z: 0 }
  ],
  bonds: [[0,2],[1,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "chichibabin-reaction",
  name: "Chichibabin Reaction",
  category: "substitution",
  summary: "Direct amination of pyridine (and related heterocycles) at the 2-position using sodium amide (NaNH2). One of very few methods for introduction of an amino group directly into an electron-deficient aromatic heterocycle.",
  discovered: "Aleksei Chichibabin, 1914",
  reactionType: "Nucleophilic Aromatic Substitution (SNAr)",
  equation: "Pyridine + NaNH2  -> [liq. NH3 or toluene, 100degC]  2-aminopyridine + NaH",
  catalyst: "NaNH2 (sodium amide), heat",
  applications: [
  "Industrial synthesis of 2-aminopyridine (pharmacophore in many drugs)",
  "Preparation of diaminopyridines for antimalarial and antibacterial agents",
  "Synthesis of pyridine-based agrochemicals and crop protection agents",
  "Amination of pyrimidines, quinolines, and isoquinolines for drug design",
  "Model reaction for understanding SNAr mechanisms in electron-poor heterocycles"
  ],
  tags: ["nucleophilic aromatic substitution", "pyridine", "NaNH2"],
  steps: [
  { title: "Amide Attack on Pyridine", content: "The amide ion (NH2-) from NaNH2 attacks the electron-deficient C-2 (or C-4) position of pyridine in an SNAr-like fashion.", formula: "Pyridine + NH2-  ->  C-2 adduct (Meisenheimer-like complex)" },
  { title: "Hydride Elimination", content: "NaH is eliminated as the ring re-aromatizes. This H- is then captured by excess NH3 (or another proton source) to generate H2.", formula: "C-2 adduct  ->  2-aminopyridinate Na+ + H- ( ->  NaH)" },
  { title: "Protonation to Product", content: "Aqueous workup protonates the 2-aminopyridinate sodium salt to give 2-aminopyridine.", formula: "2-aminopyridinate + H2O  ->  2-aminopyridine + NaOH" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "No reaction; amide attack too slow at room temperature.", type: "negative" },
  medium: { label: "100-120degC", effect: "Standard conditions. Reaction in mineral oil or toluene.", type: "positive" },
  high: { label: "High Temp (>150degC)", effect: "Side reactions; ring degradation and polyamination possible.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions with exclusion of moisture.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute NaNH2", effect: "Incomplete amination.", type: "negative" },
  medium: { label: "1.5-2 equiv NaNH2", effect: "Good yield of 2-aminopyridine.", type: "positive" },
  high: { label: "Excess NaNH2", effect: "Disamination to 2,6-diaminopyridine possible.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0, y: 2.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]]
  }
  },
  {
  id: "hydroboration-oxidation",
  name: "Hydroboration-Oxidation",
  category: "addition",
  summary: "Borane (BH3.THF) adds to alkenes in a syn and anti-Markovnikov fashion (via 4-membered TS), followed by oxidation with H2O2/NaOH to convert C-B to C-OH. Overall: anti-Markovnikov hydration of alkenes with syn selectivity.",
  discovered: "Herbert C. Brown, 1956 (Nobel Prize 1979)",
  reactionType: "Electrophilic Addition / Oxidation",
  equation: "RCH=CH2 + BH3  ->  R-CH2-CH2-B(OH)2  -> [H2O2/NaOH] R-CH2-CH2-OH",
  catalyst: "BH3.THF or 9-BBN; H2O2/NaOH for oxidation step",
  applications: [
  "Anti-Markovnikov addition of OH to terminal alkenes (complementary to acid-catalyzed hydration)",
  "Synthesis of primary alcohols from terminal alkenes with high regioselectivity",
  "Asymmetric hydroboration with chiral boranes (Ipc-BH2) for chiral alcohols",
  "Synthesis of boronic acids and esters from alkenes for Suzuki coupling",
  "Reduction of carbonyl and other functional groups using borane"
  ],
  tags: ["anti-Markovnikov", "borane", "alcohol synthesis"],
  steps: [
  { title: "Syn Hydroboration", content: "BH3 adds to the alkene in a concerted 4-membered cyclic transition state: boron bonds to the less substituted (terminal) carbon, H to the internal carbon. Syn addition.", formula: "RCH=CH2 + BH3  ->  RCH2-CH2-BH2 (syn addition, anti-Markovnikov)" },
  { title: "Sequential Hydroboration", content: "BH2 and BH can react with additional alkene equivalents to give dialkyl- and trialkylborane respectively.", formula: "Trialkylborane (R3B) typically forms from excess alkene" },
  { title: "Oxidation to Alcohol", content: "Alkaline H2O2 converts C-B to C-OH via migration of C to electrophilic O, with retention of configuration. NaOH regenerates HO2-.", formula: "R3B + H2O2/NaOH  ->  3 R-OH + B(OH)3" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (0degC)", effect: "Slows subsequent hydroboration; useful for mono-selectivity.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for hydroboration step. Complete within 2 h.", type: "positive" },
  high: { label: "High Temp", effect: "Isomerization of B migrates to terminal position; generally undesirable.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute BH3", effect: "Incomplete addition; monohydroboration product may dominate.", type: "neutral" },
  medium: { label: "1/3 equiv BH3 per alkene", effect: "Standard for trialkylborane formation.", type: "positive" },
  high: { label: "Excess H2O2", effect: "Necessary for complete oxidation of all C-B bonds to C-OH.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.7, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.7, y: -0.7, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3],[1,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.3, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.3, y: 1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "ozonolysis",
  name: "Ozonolysis",
  category: "organic",
  summary: "Alkenes (and alkynes) react with ozone (O3) to form a molozonide, which rearranges to a carbonyl oxide and aldehyde/ketone through a Criegee mechanism, giving carbonyl fragments after workup.",
  discovered: "Christian Friedrich Schoenbein (ozone, 1839); Harries (ozonolysis, 1903); Criegee (mechanism, 1953)",
  reactionType: "Oxidative Cleavage",
  equation: "RCH=CHR' + O3  -> [1. O3; 2. reductive workup] RCHO + R'CHO (aldehydes)",
  catalyst: "O3 (no catalyst); Zn/AcOH or Me2S (reductive workup); or H2O2 (oxidative)",
  applications: [
  "Determination of alkene double bond position by analysis of carbonyl fragments",
  "Synthesis of aldehydes and ketones from alkenes (oxidative cleavage)",
  "Industrial production of azelaic acid and pelargonic acid from oleic acid",
  "Synthesis of vanillin from eugenol via ozonolysis",
  "Construction of 1,2-diketones from cyclic alkenes (ring-opening)"
  ],
  tags: ["oxidative cleavage", "ozone", "Criegee mechanism"],
  steps: [
  { title: "Molozonide Formation", content: "Ozone adds to the alkene in a [3+2] cycloaddition to form an unstable 5-membered molozonide (1,2,3-trioxolane) ring.", formula: "RCH=CHR' + O3  ->  molozonide (1,2,3-trioxolane)" },
  { title: "Molozonide Rearrangement (Criegee)", content: "The molozonide fragments into an aldehyde/ketone and a carbonyl oxide (Criegee intermediate), which then recombine to form the ozonide (1,2,4-trioxolane).", formula: "Molozonide  ->  RCHO + R'CHO (Criegee oxide)  ->  ozonide" },
  { title: "Workup to Carbonyls", content: "Reductive workup (Zn/AcOH or Me2S) gives aldehydes; oxidative workup (H2O2) gives carboxylic acids from RHC< and ketones from RC< fragments.", formula: "Ozonide + Me2S  ->  RCHO + R'CHO + Me2S=O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-78degC)", effect: "Essential for safe ozonolysis; prevents explosive decomposition of ozonide.", type: "positive" },
  medium: { label: "0degC to -20degC", effect: "Standard conditions. Safe and efficient.", type: "positive" },
  high: { label: "Room Temp", effect: "Ozonide may decompose explosively; dangerous.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "O3 generation may be reduced; normal ozone flow needed.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard ozone bubbling through solution.", type: "positive" },
  high: { label: "High Pressure", effect: "Hazardous with ozonide intermediates.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute alkene", effect: "Safer; minimizes ozonide buildup.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard scale for preparative ozonolysis.", type: "positive" },
  high: { label: "Concentrated", effect: "Risk of ozonide accumulation and explosive decomposition.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.7, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.8, y: -0.5, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.8, y: -0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[3,4],[3,5]]
  }
  },
  {
  id: "barton-reaction",
  name: "Barton Reaction",
  category: "organic",
  summary: "Photolysis of a nitrite ester at a delta-C-H bond produces an delta-nitroso compound via a 1,5-HAT (hydrogen atom transfer) radical mechanism, which tautomerizes to the delta-oxime. Key for steroid and terpenoid functionalization.",
  discovered: "Derek H. R. Barton, 1960 (Nobel Prize 1969)",
  reactionType: "Radical Photochemistry (1,5-HAT)",
  equation: "R-ONO  -> [hnu]  delta-nitroso compound  ->  delta-oxime",
  catalyst: "hnu (UV light), no other catalyst",
  applications: [
  "Remote functionalization of unreactive C-H bonds (delta-position)",
  "Total synthesis of aldosterone (key step in Barton's synthesis, 1960)",
  "Introduction of an oxime at a delta-carbon in steroid chemistry",
  "Synthesis of complex terpenoid natural products with specific remote OH groups",
  "Model reaction for radical 1,5-HAT in C-H activation chemistry"
  ],
  tags: ["photochemistry", "radical", "1,5-HAT"],
  steps: [
  { title: "Nitrite Ester Photolysis", content: "UV photolysis cleaves the O-N bond of the alkyl nitrite homolytically to generate an alkoxy radical and nitrogen monoxide (NO).", formula: "R-O-NO  -> [hnu] R-O- + NO" },
  { title: "1,5-Hydrogen Atom Transfer (HAT)", content: "The alkoxy radical abstracts a hydrogen atom from the delta-carbon through a favored 6-membered transition state, generating a new delta-carbon radical.", formula: "R-O-  ->  [6-membered TS]  ->  delta-C radical + R-OH" },
  { title: "Nitroso Formation & Tautomerization", content: "The delta-carbon radical combines with the NO to form a delta-nitroso compound, which rapidly tautomerizes to the more stable delta-oxime.", formula: "delta-C- + NO  ->  delta-nitroso  ->  delta-oxime" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slower radical processes; photolysis still occurs.", type: "neutral" },
  medium: { label: "Room Temp or Reflux", effect: "Standard photolysis conditions. Good oxime yield.", type: "positive" },
  high: { label: "High Temp", effect: "Thermal side reactions and radical fragmentation compete.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Reduces radical quenching and improves selectivity.", type: "positive" },
  medium: { label: "Moderate", effect: "Good conversion to delta-oxime.", type: "positive" },
  high: { label: "Concentrated", effect: "Radical-radical termination competes; yield drops.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.8, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: 1.2, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "barton-mccombie",
  name: "Barton-McCombie Deoxygenation",
  category: "organic",
  summary: "Secondary or tertiary alcohols are converted to deoxygenated compounds (alkanes) via a xanthate ester intermediate, followed by radical chain deoxygenation with tri-n-butyltin hydride (Bu3SnH) and AIBN initiator.",
  discovered: "Derek H. R. Barton & Stuart McCombie, 1975",
  reactionType: "Radical Deoxygenation",
  equation: "R-OH  ->  R-OC(=S)SMe  -> [Bu3SnH, AIBN] R-H + Bu3SnSC(=S)SMe",
  catalyst: "Bu3SnH (tributyltin hydride), AIBN initiator, heat or hnu",
  applications: [
  "Selective deoxygenation of secondary hydroxyl groups in carbohydrate chemistry",
  "Removal of hydroxyl groups in total synthesis of natural products",
  "Synthesis of deoxy sugars for antibiotic and glycoside chemistry",
  "Deoxygenation reactions in steroid and terpene natural product synthesis",
  "Alternative: Barton-McCombie with Barton esters or silane radical reductants (environmentally greener)"
  ],
  tags: ["radical deoxygenation", "xanthate", "Bu3SnH"],
  steps: [
  { title: "Xanthate Ester Formation", content: "The alcohol is first esterified with CS2 and methyl iodide to give the O-methyl xanthate ester, the substrate for radical deoxygenation.", formula: "R-OH + CS2 + MeI  ->  R-OC(=S)SMe (xanthate)" },
  { title: "Radical Initiation & Sn Radical Formation", content: "AIBN thermally decomposes to give carbon radicals that abstract H from Bu3SnH to generate the Bu3Sn- radical.", formula: "AIBN  -> [heat] 2 R'- + N2; R'- + Bu3SnH  ->  R'H + Bu3Sn-" },
  { title: "Radical Chain Deoxygenation", content: "Bu3Sn- attacks the sulfur of the xanthate, generating an alkyl radical R-, which abstracts H from Bu3SnH to give R-H (deoxygenated product) and regenerates the chain.", formula: "Bu3Sn- + xanthate  ->  R- + Bu3SnSC(=S)SMe; R- + Bu3SnH  ->  R-H + Bu3Sn-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "AIBN decomposition is slow; initiation fails.", type: "negative" },
  medium: { label: "80degC (Toluene reflux)", effect: "Standard conditions. Complete deoxygenation in 1-2 h.", type: "positive" },
  high: { label: "High Temp", effect: "Radical fragmentation side reactions; tin byproduct decomposition.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute (syringe pump addition)", effect: "Low [Bu3SnH] suppresses radical reduction competition; drives fragmentation.", type: "positive" },
  medium: { label: "Moderate", effect: "Good balance of rate and selectivity.", type: "positive" },
  high: { label: "Concentrated Bu3SnH", effect: "Fast H-abstraction; may not allow radical chain to fragment xanthate.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 },
  { symbol: "S", color: "#cccc00", x: 1.0, y: 1.3, z: 0 },
  { symbol: "S", color: "#cccc00", x: 2.3, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[2,4]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.2, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "elbs-oxidation",
  name: "Elbs Persulfate Oxidation",
  category: "organic",
  summary: "Phenols are hydroxylated at the para position by treatment with potassium persulfate (K2S2O8) in alkaline conditions. Complementary to Fries and Dakin reactions; a preparative route to para-hydroxyphenols (dihydroxybenzenes).",
  discovered: "Karl Elbs, 1893",
  reactionType: "Nucleophilic Aromatic Oxidation",
  equation: "ArOH + K2S2O8  -> [NaOH] p-HO-Ar-OH + K2SO4",
  catalyst: "K2S2O8 (potassium persulfate), NaOH aqueous",
  applications: [
  "Synthesis of hydroquinone from phenol (para-hydroxylation)",
  "Preparation of catechol (ortho-diol) from phenol at higher temperatures",
  "Production of 4-hydroxyphenol derivatives for photographic developer chemicals",
  "Synthesis of tyrosine analogs via para-hydroxylation of phenylalanine derivatives",
  "Green hydroxylation method using inorganic oxidant without transition metals"
  ],
  tags: ["para-hydroxylation", "persulfate", "phenol oxidation"],
  steps: [
  { title: "Phenolate Formation", content: "NaOH deprotonates phenol to give the more reactive phenolate anion, which is a stronger nucleophile.", formula: "ArOH + NaOH  ->  ArO-Na+ + H2O" },
  { title: "Nucleophilic Attack on Persulfate", content: "The phenolate oxygen attacks the electrophilic S-O bond of persulfate, generating an aryl sulfate ester intermediate at the para position via an SNAr-like path.", formula: "p-C(ArO-) + S2O82-  ->  p-ArO-SO3- + SO42-" },
  { title: "Hydrolysis to Para-Diol", content: "Acid workup hydrolyzes the aryl sulfate to liberate the para-hydroxyphenol (catechol or hydroquinone) as the final product.", formula: "p-ArO-SO3H + H2O  ->  p-HO-Ar-OH + H2SO4" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Very slow reaction. Persulfate does not activate the phenolate effectively.", type: "negative" },
  medium: { label: "0-20degC", effect: "Standard conditions for para selectivity. Good yield.", type: "positive" },
  high: { label: "High Temp (>50degC)", effect: "Persulfate decomposes non-productively and ortho-diol (catechol) forms preferentially.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute K2S2O8", effect: "Incomplete hydroxylation; poor yield.", type: "negative" },
  medium: { label: "1.2-2 equiv K2S2O8 in NaOH", effect: "Good para selectivity and yield.", type: "positive" },
  high: { label: "Large excess", effect: "Over-oxidation and quinone formation possible.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.7, z: 0 }
  ],
  bonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: -1.2, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 2.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: -2.7, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,6],[3,7]]
  }
  },
  {
  id: "carius-reaction",
  name: "Carius Reaction",
  category: "organic",
  summary: "A method for quantitative determination of halogens, sulfur, and phosphorus in organic compounds by complete oxidation with fuming nitric acid in a sealed tube. The element is converted to the corresponding inorganic anion measured gravimetrically.",
  discovered: "Georg Ludwig Carius, 1860",
  reactionType: "Analytical Combustion / Oxidation",
  equation: "Org-X + fuming HNO3  -> [sealed tube, 200degC] AgX' (gravimetric) + CO2 + H2O",
  catalyst: "Fuming HNO3, 200degC, sealed Carius tube (pressure vessel)",
  applications: [
  "Classical elemental organic analysis: determination of Cl, Br, I, S, and P content",
  "Quality control and purity testing of new organic compounds",
  "Precursor to modern CHN analyzers for elemental analysis",
  "Characterization of organosulfur compounds by conversion to BaSO4",
  "Teaching instrument for quantitative organic elemental analysis"
  ],
  tags: ["elemental analysis", "quantitative", "combustion"],
  steps: [
  { title: "Loading and Sealing", content: "A small amount of the organic compound and fuming nitric acid (or H2O2/H2SO4) are placed in a sealed thick-walled glass tube (Carius tube).", formula: "Organic compound + fuming HNO3  ->  sealed Carius tube" },
  { title: "Oxidative Combustion", content: "Heating to 200-300degC in a furnace causes complete oxidation of the organic compound. Halogens become HX, sulfur becomes H2SO4, phosphorus becomes H3PO4.", formula: "Organic-X + HNO3  ->  HX + CO2 + H2O + NO2" },
  { title: "Precipitation & Gravimetric Analysis", content: "For halogens: AgNO3 is added to precipitate AgX. Weighing AgX gives X content. For S: BaCl2 precipitates BaSO4.", formula: "HX + AgNO3  ->  AgX + HNO3 (gravimetric)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Incomplete oxidation; inaccurate elemental analysis.", type: "negative" },
  medium: { label: "200-300degC", effect: "Complete combustion and accurate determination.", type: "positive" },
  high: { label: "Very High Temp", effect: "Risk of tube explosion. Pressure builds up in sealed tube.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "Sealed tube maintains elevated pressure. Essential.", type: "positive" },
  medium: { label: "Internal (autogenous)", effect: "Internal pressure from sealed tube drives complete oxidation.", type: "positive" },
  high: { label: "External High Pressure", effect: "Not applied externally; tube creates own pressure.", type: "neutral" }
  },
  concentration: {
  low: { label: "Small sample size (mg scale)", effect: "Standard for Carius analysis. Safety and accuracy.", type: "positive" },
  medium: { label: "Excess fuming HNO3", effect: "Ensures complete oxidation of all heteroatoms.", type: "positive" },
  high: { label: "Large sample / concentrated", effect: "Explosive; danger of tube rupture.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "S", color: "#cccc00", x: 0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 3.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 4.0, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "S", color: "#cccc00", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: -0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4]]
  }
  },
  {
  id: "hofmann-elimination",
  name: "Hofmann Elimination",
  category: "elimination",
  summary: "Exhaustive methylation of an amine followed by elimination of the quaternary ammonium salt with silver hydroxide/heat gives the less substituted alkene. Hofmann's rule: elimination occurs toward the LESS substituted carbon (anti-Markovnikov alkene).",
  discovered: "August Wilhelm von Hofmann, 1851",
  reactionType: "E2 Elimination of Quaternary Ammonium Salt",
  equation: "R3N + CH3I (x-3)  ->  R3N+(CH3) I-  -> [Ag2O, H2O] alkene (Hofmann) + N(CH3)3",
  catalyst: "CH3I (methylating agent), AgOH as base (for elimination)",
  applications: [
  "Structural determination of amines: Hofmann degradation reveals carbon skeleton",
  "Synthesis of less substituted alkenes unavailable by other elimination methods",
  "Preparation of trimethylamine byproduct (useful ligand)",
  "Historical method for sequencing alkaloid structures before NMR",
  "Synthesis of specific alkenes in natural product degradation studies"
  ],
  tags: ["elimination", "quaternary ammonium", "Hofmann's rule"],
  steps: [
  { title: "Exhaustive Methylation", content: "Repeated treatment with methyl iodide converts the amine to the nitrogen-saturated quaternary ammonium iodide salt.", formula: "R-NH2 + 3 CH3I  ->  R-N+(CH3)3 I-" },
  { title: "Hydroxide Exchange", content: "The iodide salt is treated with Ag2O/H2O to exchange I- for OH- (as AgI+), giving the quaternary ammonium hydroxide.", formula: "R-N+(CH3)3 I- + Ag2O + H2O  ->  R-N+(CH3)3 OH- + AgI+" },
  { title: "Hoffmann E2 Elimination", content: "Heating causes E2 elimination. OH- abstracts a proton from the least hindered beta-carbon (Hofmann product), giving the less substituted alkene + trimethylamine.", formula: "R-CH2-C(CH3)2-N+(CH3)3 OH-  -> [heat] RCH=C(CH3)2 + N(CH3)3 + H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "No elimination. Quaternary salt is stable.", type: "negative" },
  medium: { label: "100-150degC", effect: "Standard elimination conditions. Hofmann alkene formed.", type: "positive" },
  high: { label: "High Temp (>200degC)", effect: "Excess elimination; retro reactions and decomposition.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect on E2 elimination.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow elimination.", type: "negative" },
  medium: { label: "Neat or moderate concentration", effect: "Standard preparative scale.", type: "positive" },
  high: { label: "Concentrated AgOH", effect: "Faster but side reactions with excess base.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.3, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.5, y: 1.0, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 3.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "hwe-reaction",
  name: "Horner-Wadsworth-Emmons Reaction",
  category: "organic",
  summary: "A modification of the Wittig reaction using stabilized phosphonate carbanions (instead of phosphonium ylides) to react with aldehydes/ketones, giving predominantly E-alkenes with greater reactivity and functional group tolerance.",
  discovered: "Leopold Horner (1958); W. S. Wadsworth & W. D. Emmons (1961)",
  reactionType: "Olefination / E-Alkene Synthesis",
  equation: "(RO)2P(O)-CH2-R' + RCHO  -> [base] RCH=CHR' (E) + (RO)2P(O)O-",
  catalyst: "NaH, LDA, or K2CO3 as base",
  applications: [
  "Synthesis of E-alkenes (often >95:5 E:Z) with high stereoselectivity",
  "Total synthesis of terpenoids and carotenoids (vitamin A, beta-carotene precursors)",
  "Preparation of alpha,beta-unsaturated carbonyl compounds (acrylates, vinyl ketones)",
  "Industrial synthesis of pharmaceuticals requiring trans-alkene motifs",
  "Combinatorial synthesis of diverse alkene libraries for drug discovery"
  ],
  tags: ["olefination", "phosphonate", "E-alkene"],
  steps: [
  { title: "Phosphonate Carbanion Formation", content: "Strong base (NaH or LDA) deprotonates the alpha-carbon of the phosphonate ester to form the stabilized carbanion (phosphonate ylide equivalent).", formula: "(RO)2P(O)-CH2-R' + NaH  ->  (RO)2P(O)-CH--R' + H2" },
  { title: "Addition to Aldehyde", content: "The carbanion adds to the aldehyde carbonyl to form a betaine (oxyanion) with a new C-C bond. A 4-membered oxaphosphetane intermediate forms.", formula: "Carbanion + RCHO  ->  oxaphosphetane" },
  { title: "Retro [2+2] & Alkene Release", content: "The oxaphosphetane undergoes a four-membered retro-cycloaddition, breaking C-O and P-C bonds to release the E-alkene and the water-soluble dialkylphosphate byproduct.", formula: "Oxaphosphetane  ->  E-RCH=CHR' + (RO)2PO2-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (-78deg to 0degC)", effect: "Higher E selectivity. Still-Gennari variant for Z-selectivity uses low temp.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard conditions for most HWE olefinations.", type: "positive" },
  high: { label: "High Temp", effect: "Selectivity may decrease; retro reactions possible.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slower reaction but cleaner.", type: "neutral" },
  medium: { label: "Moderate (1.1-1.5 equiv phosphonate)", effect: "Complete and selective olefination.", type: "positive" },
  high: { label: "Concentrated", effect: "Side reactions of highly reactive phosphonate carbanion.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "P", color: "#ff8800", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -2.0, y: 1.3, z: 0 },
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.2, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.2, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "leuckart-reaction",
  name: "Leuckart Reaction",
  category: "organic",
  summary: "Reductive amination of carbonyl compounds using ammonium formate or formamide as both nitrogen and hydride source. Gives N-formyl amines initially, which are hydrolyzed to primary or secondary amines.",
  discovered: "Rudolf Leuckart, 1885",
  reactionType: "Reductive Amination (Meerwein-Ponndorf-Verley type)",
  equation: "RCHO + HCO2NH4  -> [150-200degC]  RCH2NHCHO  -> [HCl, H2O] RCH2NH2",
  catalyst: "Ammonium formate or formamide as combined N and H source; no metal catalyst",
  applications: [
  "Industrial synthesis of primary amines from aldehydes and ketones without H2",
  "Synthesis of secondary amines using primary amines as nucleophile",
  "Production of racemic amphetamine and related phenethylamines (historical)",
  "Preparation of formamide-protected amines for further chemistry",
  "Efficient atom-economic reductive amination without hydrogenation catalyst"
  ],
  tags: ["reductive amination", "formamide", "amine synthesis"],
  steps: [
  { title: "Imine/Iminium Formation", content: "The carbonyl compound condenses with ammonia (from ammonium formate) or the amine to form an imine (Schiff base) or iminium ion, with loss of water.", formula: "RCHO + NH4+  ->  RCH=NH2+ + H2O (iminium)" },
  { title: "Hydride Transfer from Formate", content: "The formate anion (HCO2-) acts as a hydride donor, transferring a hydride to the iminium carbon (like a MPV-type reduction), reducing C=N to C-N.", formula: "RCH=NH + HCO2-  ->  RCH2NHCHO (N-formyl amine) + CO2" },
  { title: "N-formyl Hydrolysis", content: "The formyl group (CHO) on nitrogen is hydrolyzed under acidic conditions (HCl/H2O) to release the free primary amine.", formula: "RCH2NHCHO + HCl + H2O  ->  RCH2NH2.HCl + HCOOH" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "No reaction. Leuckart requires high temperature for rate.", type: "negative" },
  medium: { label: "150-200degC (neat)", effect: "Standard conditions. Ammonium formate decomposes slowly.", type: "positive" },
  high: { label: "High Temp (>220degC)", effect: "Decomposition of formate too fast; incomplete reduction.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "CO2 escapes from formate decomposition; drives reaction.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "CO2 retention; may slow hydride transfer equilibrium.", type: "negative" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Poor rate at this high temperature.", type: "negative" },
  medium: { label: "Neat or slight excess formamide", effect: "Standard Leuckart conditions. Efficient N-formylation and reduction.", type: "positive" },
  high: { label: "Large excess NH4OOCh", effect: "Drives amination equilibrium; used for less reactive ketones.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.3, y: -0.5, z: 0 },
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.7, y: -0.7, z: 0 },
  { symbol: "N", color: "#4488ff", x: 0.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.2, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[3,4]]
  }
  },
  {
  id: "gomberg-bachmann",
  name: "Gomberg-Bachmann Reaction",
  category: "substitution",
  summary: "Free radical arylation of aromatic rings using diazonium salts in alkaline solution (Gomberg-Bachmann) to form unsymmetric biaryls. A complement to Ullmann coupling. The diazonium generates an aryl radical that attacks the aromatic ring.",
  discovered: "Moses Gomberg & Werner Bachmann, 1924",
  reactionType: "Radical Electrophilic Aromatic Substitution",
  equation: "ArN2+ + Ar'H  -> [NaOH] Ar-Ar' + N2 + H+",
  catalyst: "NaOH (base to generate ArN2-), no metal needed",
  applications: [
  "Synthesis of unsymmetric biaryls without palladium catalysis",
  "Preparation of fluorene, dibenzofuran, and related fused ring systems",
  "Industrial route to certain biaryl dyes and pigments",
  "Synthesis of polychlorinated biphenyls in historical environmental chemistry",
  "Model reaction for studying aryl radical chemistry"
  ],
  tags: ["radical", "biaryl", "diazonium", "arylation"],
  steps: [
  { title: "Diazonium Salt Formation", content: "Aromatic amine is diazotized with NaNO2/HCl at 0-5degC to form ArN2+Cl-.", formula: "ArNH2 + HNO2  ->  ArN2+Cl- + H2O" },
  { title: "Aryl Radical Generation", content: "In alkaline conditions, the diazonium couples with hydroxide to form diazohydroxide, which fragments homolytically to give the aryl radical and N2.", formula: "ArN2+ + OH-  ->  ArN2OH  ->  Ar- + N2 + OH-" },
  { title: "Radical Attack & Biaryl Formation", content: "The aryl radical Ar- attacks the aromatic ring Ar'H, forming a radical sigma-complex that loses H- to give the biaryl product.", formula: "Ar- + Ar'H  ->  Ar-Ar'H-  ->  Ar-Ar' + H-" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Required for diazonium stability before coupling.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for the coupling step. Radical generation is fast.", type: "positive" },
  high: { label: "High Temp", effect: "Diazonium decomposes unproductively; radical side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "N2 escapes; drives reaction.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow radical substitution; low biaryl yield.", type: "negative" },
  medium: { label: "Moderate (alkaline pH)", effect: "Optimal. Good biaryl yield.", type: "positive" },
  high: { label: "Concentrated", effect: "Homocoupling (Ar-Ar) competes with cross-coupling.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -1.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -2.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "hinsberg-reaction",
  name: "Hinsberg Reaction",
  category: "substitution",
  summary: "A test and preparative method to distinguish primary, secondary, and tertiary amines using benzenesulfonyl chloride. Primary amines give sulfonamides soluble in base; secondary give insoluble sulfonamides; tertiary don't react.",
  discovered: "Oscar Hinsberg, 1890",
  reactionType: "Nucleophilic Acyl (Sulfonyl) Substitution",
  equation: "RNH2 + PhSO2Cl  -> [NaOH] PhSO2NHR (soluble in NaOH)  ->  test for 1deg",
  catalyst: "NaOH (base), PhSO2Cl (benzenesulfonyl chloride)",
  applications: [
  "Qualitative identification of primary, secondary, and tertiary amines",
  "Separation and purification of amine mixtures via differential solubility",
  "Preparation of sulfonamide drugs (sulfanilamide precursor synthesis)",
  "Protection of primary amines as sulfonamides in synthesis",
  "Teaching classical qualitative organic analysis"
  ],
  tags: ["sulfonamide", "amine identification", "qualitative test"],
  steps: [
  { title: "Sulfonyl Chloride Addition", content: "Benzenesulfonyl chloride reacts with the amine. Primary and secondary amines react; tertiary don't (no N-H).", formula: "R-NH2 + PhSO2Cl  ->  PhSO2NHR + HCl (1deg amine)" },
  { title: "NaOH Treatment", content: "NaOH is added. Primary sulfonamide (PhSO2NHR) still has an acidic N-H, dissolves in NaOH. Secondary sulfonamide (PhSO2NR2) has no N-H, stays insoluble.", formula: "PhSO2NHR + NaOH  ->  PhSO2N-R Na+ (soluble) - primary" },
  { title: "Interpretation", content: "Clear solution = primary amine; precipitate = secondary amine; no reaction with sulfonyl chloride = tertiary amine.", formula: "1deg  ->  soluble sulfonamide salt; 2deg  ->  insoluble; 3deg  ->  no reaction" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slower sulfonation; incomplete for 2deg amines.", type: "negative" },
  medium: { label: "Room Temp", effect: "Standard test conditions. Rapid for 1deg and 2deg.", type: "positive" },
  high: { label: "High Temp", effect: "Hydrolysis of sulfonyl chloride itself competes.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow test; may give ambiguous results.", type: "negative" },
  medium: { label: "Equimolar + excess NaOH", effect: "Clear differentiation of 1deg, 2deg, 3deg amines.", type: "positive" },
  high: { label: "Excess sulfonyl chloride", effect: "Hydrolysis competes; wastes reagent.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: 2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.2, y: -0.7, z: 0 },
  { symbol: "S", color: "#cccc00", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.3, z: 0 },
  { symbol: "Cl", color: "#00aa00", x: -1.8, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4],[3,5]],
  products: [
  { symbol: "S", color: "#cccc00", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.3, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.7, y: 0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "hoesch-reaction",
  name: "Hoesch Reaction",
  category: "substitution",
  summary: "Nitriles react with polyhydric phenols (resorcinol, phloroglucinol) in the presence of HCl/ZnCl2 (Lewis acid) to form ketimine intermediates, which hydrolyze to aryl ketones. Similar to Gattermann but uses nitriles as acylating agents.",
  discovered: "Kurt Hoesch, 1915",
  reactionType: "Electrophilic Aromatic Acylation (via Nitrile)",
  equation: "Ar-OH + R-CN  -> [HCl, ZnCl2] Ar-C(=NH)-R  -> [H2O] Ar-CO-R",
  catalyst: "HCl gas, ZnCl2 (Lewis acid)",
  applications: [
  "Synthesis of polyhydroxyaryl ketones (phloroacetophenone from resorcinol)",
  "Preparation of natural product precursors in flavonoid synthesis",
  "Acylation of activated phenols not reactive enough for Friedel-Crafts",
  "Synthesis of chalcone and flavone precursors in pharmaceutical chemistry",
  "Preparation of dyes based on hydroxyaryl ketone scaffolds"
  ],
  tags: ["nitrile", "Lewis acid", "aryl ketone"],
  steps: [
  { title: "Iminochloride Formation", content: "HCl adds to the nitrile forming a highly reactive iminochloride (R-C(=NH)-Cl), the actual electrophile.", formula: "R-CN + HCl  ->  R-C(=NH)-Cl (iminochloride)" },
  { title: "Electrophilic Attack on Activated Phenol", content: "The iminochloride acts as the acylating electrophile, attacking the activated aromatic ring of the polyhydric phenol (EAS).", formula: "Ar-OH + R-C(=NH)-Cl  -> [ZnCl2] [Ar-C(=NH)R]+ sigma-complex" },
  { title: "Hydrolysis to Aryl Ketone", content: "The ketimine intermediate is hydrolyzed with water to give the aryl ketone product.", formula: "Ar-C(=NH)-R + H2O  ->  Ar-CO-R + NH3" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Low temp required for HCl saturation. Ketimine forms at low temp.", type: "positive" },
  medium: { label: "Room Temp", effect: "Hydrolysis step done at RT. Good yield with activated phenols.", type: "positive" },
  high: { label: "High Temp", effect: "Unwanted nitrile hydrolysis and side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCl gas pressure needed.", type: "negative" },
  medium: { label: "Atmospheric with HCl gas", effect: "Standard conditions.", type: "positive" },
  high: { label: "High Pressure HCl", effect: "Increases iminochloride formation rate.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute ZnCl2", effect: "Incomplete activation; poor yield.", type: "negative" },
  medium: { label: "Excess HCl, cat. ZnCl2", effect: "Good electrophilic acylation of polyhydric phenol.", type: "positive" },
  high: { label: "Excess reagents", effect: "Multiple acylation of phenol may occur.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.2, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 1.3, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "nenitzescu-reaction",
  name: "Nenitzescu Reaction",
  category: "addition",
  summary: "Indoles are synthesized from p-benzoquinones and enamines (or beta-amino carbonyl compounds) in a one-pot [4+2] cycloaddition-aromatization sequence. One of the most efficient routes to substituted 5-hydroxyindoles.",
  discovered: "Constantin Nenitzescu, 1929",
  reactionType: "Multi-Component Cyclization / Indole Synthesis",
  equation: "p-Benzoquinone + enamine  -> [AcOH] 5-hydroxyindole derivative",
  catalyst: "Acetic acid or protic acid (mild)",
  applications: [
  "Synthesis of 5-hydroxyindole natural products and pharmaceuticals",
  "Preparation of mitomycin analogs (antitumor agents)",
  "Synthesis of indole alkaloid precursors in total synthesis",
  "Preparation of substituted indoles not accessible by Fischer indole synthesis",
  "Green multi-component synthesis of complex indole scaffolds"
  ],
  tags: ["indole synthesis", "benzoquinone", "multi-component"],
  steps: [
  { title: "Michael Addition (Enamine to Quinone)", content: "The enamine adds to p-benzoquinone in a Michael (1,4) fashion at the electron-deficient quinone carbon, forming a zwitterionic intermediate.", formula: "Enamine + p-benzoquinone  ->  Michael adduct (zwitterion)" },
  { title: "Cyclization", content: "The amino group of the enamine-derived zwitterion attacks the quinone carbonyl intramolecularly, forming a 5-membered ring dihydroindole intermediate.", formula: "Zwitterion  ->  cyclized 3H-indolin-5-ol" },
  { title: "Aromatization to 5-Hydroxyindole", content: "Oxidative aromatization (by another equiv. of quinone or O2) converts the dihydro intermediate to the aromatic 5-hydroxyindole.", formula: "Dihydro intermediate  -> [oxidation] 5-hydroxyindole" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slow Michael addition; incomplete cyclization.", type: "negative" },
  medium: { label: "Room Temp to 50degC", effect: "Standard. Good 5-hydroxyindole yield in AcOH.", type: "positive" },
  high: { label: "High Temp", effect: "Quinone decomposition and polymerization side reactions.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "No significant effect.", type: "neutral" },
  medium: { label: "Atmospheric", effect: "Standard.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow multi-component reaction.", type: "negative" },
  medium: { label: "Equimolar in AcOH", effect: "Good yield of 5-hydroxyindole. AcOH solvent/catalyst.", type: "positive" },
  high: { label: "Concentrated", effect: "Quinone self-polymerization competes.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 1.0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.0, y: 1.0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 2.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: -1.0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 1.4, z: 0 },
  { symbol: "N", color: "#4488ff", x: 1.2, y: 0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 1.2, y: -0.7, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: -1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.4, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3],[3,0],[0,4]]
  }
  },
  {
  id: "pinner-reaction",
  name: "Pinner Reaction",
  category: "substitution",
  summary: "Nitriles react with alcohols in the presence of dry HCl gas to form imino ethers (Pinner salts), which can be hydrolyzed to esters, or reacted with amines to form amidines, or with hydroxylamine to form amidoximes.",
  discovered: "Adolf Pinner, 1877",
  reactionType: "Nucleophilic Addition to Nitrile",
  equation: "R-CN + R'OH  -> [HCl dry] R-C(=NH)-OR'.HCl (Pinner salt)  -> [H2O] R-COOR' + NH4Cl",
  catalyst: "Dry HCl gas (stoichiometric)",
  applications: [
  "Synthesis of imino ethers (Pinner salts) as versatile intermediates",
  "Preparation of esters from nitriles via Pinner hydrolysis",
  "Synthesis of amidines (R-C(=NH)-NH2) - key pharmacophore in drugs",
  "Preparation of amidoximes for antimicrobial prodrugs",
  "Synthesis of heterocycles (triazines, oxadiazoles) from amidines"
  ],
  tags: ["nitrile", "imino ether", "amidine"],
  steps: [
  { title: "Protonation of Nitrile", content: "Dry HCl protonates the nitrile nitrogen to form an activated nitrilium ion, making the carbon highly electrophilic.", formula: "R-C-N + HCl  ->  R-C-N+H Cl- (nitrilium)" },
  { title: "Alcohol Attack (Pinner Salt Formation)", content: "The alcohol (R'OH) attacks the electrophilic nitrile carbon, and the pinner salt (imino ether hydrochloride) precipitates from solution.", formula: "R-CN + R'OH + HCl  ->  [R-C(=NH)-OR']+Cl- (Pinner salt)" },
  { title: "Hydrolysis or Aminolysis", content: "Aqueous hydrolysis gives the ester + NH4Cl. Treatment with an amine gives an amidine. With NH2OH, an amidoxime forms.", formula: "Pinner salt + H2O  ->  R-COOR' + NH4Cl (ester)" }
  ],
  conditions: {
  temperature: {
  low: { label: "0-5degC", effect: "Required for dry HCl saturation and Pinner salt precipitation.", type: "positive" },
  medium: { label: "Room Temp", effect: "Standard for aminolysis and hydrolysis steps.", type: "positive" },
  high: { label: "High Temp", effect: "Pinner salt decomposes; hydrolysis proceeds too fast.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "HCl gas pressure needed for saturation.", type: "negative" },
  medium: { label: "HCl atmosphere", effect: "Standard: dry HCl bubbled through nitrile/alcohol solution.", type: "positive" },
  high: { label: "High HCl pressure", effect: "Faster Pinner salt formation; used industrially.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute", effect: "Slow protonation; incomplete Pinner salt.", type: "negative" },
  medium: { label: "Excess alcohol + HCl", effect: "Complete and selective formation of Pinner salt.", type: "positive" },
  high: { label: "Excess HCl", effect: "Drives equilibrium to Pinner salt; standard.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.2, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.3, y: 0.5, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.5, y: 1.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -0.5, y: 2.2, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "ziegler-natta",
  name: "Ziegler-Natta Polymerization",
  category: "industrial",
  summary: "Coordination polymerization of alkenes (ethylene, propylene) using a transition metal catalyst (TiCl4) and an organoaluminium cocatalyst (AlEt3). Produces stereoregular polymers (isotactic/syndiotactic) with controlled properties.",
  discovered: "Karl Ziegler & Giulio Natta, 1953 (Nobel Prize 1963)",
  reactionType: "Coordination Insertion Polymerization",
  equation: "n CH2=CH2  -> [TiCl4/AlEt3] -(CH2-CH2)n- (polyethylene)",
  catalyst: "TiCl4 / AlEt3 (Ziegler-Natta), or metallocenes (2nd gen)",
  applications: [
  "Industrial production of polyethylene (HDPE, LLDPE) - 100+ million tons/year",
  "Manufacture of isotactic polypropylene for packaging, automotive, textiles",
  "Production of EPDM rubber for automotive seals and roofing",
  "Synthesis of polybutadiene and polystyrene for rubber products",
  "Second-generation metallocene catalysts for single-site polymerization"
  ],
  tags: ["polymerization", "catalyst", "polymer"],
  steps: [
  { title: "Catalyst Activation", content: "TiCl4 reacts with AlEt3 to form an active Ti(III) species on the catalyst surface. The Al-alkyl acts as a cocatalyst and reduces Ti(IV) to Ti(III).", formula: "TiCl4 + AlEt3  ->  active Ti(III) site + EtCl" },
  { title: "Chain Initiation (Coordination & Insertion)", content: "The monomer (e.g., ethylene) coordinates to the vacant site on Ti, then inserts into the Ti-C bond in a migratory insertion step.", formula: "Ti-CH2CH3 + CH2=CH2  ->  Ti-CH2CH2-CH2CH3 (first insertion)" },
  { title: "Chain Propagation & Termination", content: "Repeated 1,2-insertions build the polymer chain. Chain termination by beta-hydride elimination or chain transfer to AlEt3 releases the polymer.", formula: "Ti-(CH2CH2)n-R  ->  polymer + Ti-H (beta-H elimination)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 50degC)", effect: "Higher stereoselectivity; isotactic polypropylene preferred.", type: "positive" },
  medium: { label: "60-90degC", effect: "Standard industrial conditions for HDPE/PP production.", type: "positive" },
  high: { label: "High Temp (> 100degC)", effect: "Lower stereoselectivity; catalyst deactivation.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure (1-5 bar)", effect: "Slurry process. Moderate MW polymer.", type: "neutral" },
  medium: { label: "Moderate (5-50 bar)", effect: "Standard. Good molecular weight control.", type: "positive" },
  high: { label: "High Pressure (> 50 bar)", effect: "Gas-phase process (Unipol). Higher production rate.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute monomer", effect: "Low molecular weight; incomplete polymerization.", type: "negative" },
  medium: { label: "Moderate catalyst loading", effect: "High activity (millions of g polymer per g Ti).", type: "positive" },
  high: { label: "High catalyst", effect: "Cost-effective; modern catalysts are highly efficient.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.2, y: 0.7, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.7, y: 0.7, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3]],
  products: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "fischer-tropsch",
  name: "Fischer-Tropsch Process",
  category: "industrial",
  summary: "Synthesis gas (CO + H2) is converted over Fe or Co catalysts into liquid hydrocarbons (alkanes, alkenes, alcohols). Key process for coal-to-liquids (CTL) and gas-to-liquids (GTL) fuel production.",
  discovered: "Franz Fischer & Hans Tropsch, 1925",
  reactionType: "Heterogeneous Catalytic Hydrocarbon Synthesis",
  equation: "CO + 2H2  -> [Fe or Co, 150-300degC] -CH2- + H2O (hydrocarbon chain growth)",
  catalyst: "Fe (LTFT/HTFT) or Co (LTFT); promoted with K2O, SiO2",
  applications: [
  "Synthetic fuels from coal (SASOL, South Africa) during oil embargoes",
  "Gas-to-liquids (Shell Pearl GTL) for clean diesel from natural gas",
  "Production of waxes (Paraflint) and lubricants from syngas",
  "Biomass-to-liquids (BTL) - renewable aviation fuel production",
  "Production of alpha-olefins for detergent alcohol synthesis"
  ],
  tags: ["syngas", "fuel synthesis", "heterogeneous catalysis"],
  steps: [
  { title: "CO Adsorption & Dissociation", content: "CO adsorbs onto the Fe/Co catalyst surface and dissociates to give surface carbon (C*) and oxygen (O*), which is removed as water.", formula: "CO + H2  ->  C* + H2O (surface dissociation)" },
  { title: "Chain Initiation & Growth", content: "Surface carbon is hydrogenated stepwise to CH2* species (methylene), which inserts into growing alkyl chains (Anderson-Schulz-Flory distribution).", formula: "C* + 2H*  ->  CH2* (methylene); CH2* inserts into chain" },
  { title: "Chain Termination & Desorption", content: "Termination by beta-hydride elimination yields 1-alkenes; H-addition gives alkanes. Longer chains become waxes; water-gas shift generates CO2.", formula: "CH3(CH2)nCH2*  ->  1-alkene + H* or alkane desorbs" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (150-250degC)", effect: "LTFT: waxy products, high MW alkanes and 1-alkenes.", type: "positive" },
  medium: { label: "250-350degC", effect: "HTFT: gasoline range products; Fe catalyst preferred.", type: "positive" },
  high: { label: "High Temp (> 350degC)", effect: "Methane becomes dominant; catalyst sintering.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure (1-5 bar)", effect: "Low conversion; commercial operation not viable.", type: "negative" },
  medium: { label: "20-40 bar", effect: "Standard industrial pressure. Good productivity.", type: "positive" },
  high: { label: "High Pressure (> 50 bar)", effect: "Higher selectivity to liquid products; used in LTFT.", type: "positive" }
  },
  concentration: {
  low: { label: "H2/CO < 1", effect: "CO-rich: wax and oxygenate formation preferred.", type: "neutral" },
  medium: { label: "H2/CO = 2", effect: "Standard syngas ratio for balanced hydrocarbon product.", type: "positive" },
  high: { label: "H2/CO > 3", effect: "Methane-rich products; less chain growth.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: 0.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "C", color: "#555555", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 1.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 3.0, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[1,2],[2,3]]
  }
  },
  {
  id: "haber-process",
  name: "Haber Process",
  category: "industrial",
  summary: "Atmospheric nitrogen (N2) is combined with hydrogen (H2) over an iron catalyst at high temperature and pressure to produce ammonia (NH3). The world's most important industrial reaction - feeds ~half of the global population via fertilizers.",
  discovered: "Fritz Haber (1909) & Carl Bosch (industrial scale, 1913) - Nobel Prizes 1918 & 1931",
  reactionType: "Heterogeneous Catalytic Nitrogen Fixation",
  equation: "N2 + 3H2  <=> [Fe/K2O/Al2O3, 400-500degC, 200 atm] 2NH3 + heat (Delta H = -92 kJ/mol)",
  catalyst: "alpha-Fe (promoted with K2O and Al2O3)",
  applications: [
  "Production of 180+ million tons of NH3 per year globally",
  "Manufacture of nitrogen fertilizers (urea, ammonium nitrate, NPK)",
  "Synthesis of nitric acid (via Ostwald process) for explosives",
  "Production of nylon-6,6 and other polyamides via adipic acid",
  "Synthesis of hydrazine rocket propellant from ammonia"
  ],
  tags: ["nitrogen fixation", "ammonia", "Le Chatelier"],
  steps: [
  { title: "N2 Chemisorption & Dissociation", content: "N2 (the rate-determining step) adsorbs onto the Fe catalyst surface and dissociates into atomic nitrogen (N*). This is the slowest step.", formula: "N2 + 2Fe*  ->  2N*-Fe (surface N atoms)" },
  { title: "Stepwise Hydrogenation of N*", content: "Adsorbed N* is hydrogenated stepwise through NH*, NH2* intermediates to form NH3 on the surface.", formula: "N* + H*  ->  NH*; NH* + H*  ->  NH2*; NH2* + H*  ->  NH3*" },
  { title: "NH3 Desorption & Recycle", content: "NH3 desorbs from the catalyst surface. Unreacted N2/H2 is recycled. Ammonia is condensed and removed from the loop.", formula: "NH3*  ->  NH3(g) + Fe* (catalyst regenerated)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 350degC)", effect: "Equilibrium favors NH3 but rate is too slow. Low conversion rate.", type: "negative" },
  medium: { label: "400-500degC", effect: "Optimal compromise: acceptable rate and ~15-25% conversion.", type: "positive" },
  high: { label: "High Temp (> 600degC)", effect: "Fast rate but equilibrium strongly disfavors NH3 (Le Chatelier).", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure (< 50 atm)", effect: "Equilibrium disfavors NH3 (fewer moles on right). Low yield.", type: "negative" },
  medium: { label: "150-200 atm", effect: "Standard industrial. Good conversion (~20%) with recycle.", type: "positive" },
  high: { label: "High Pressure (> 300 atm)", effect: "Better conversion but high capital/maintenance cost.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute H2", effect: "Insufficient reductant; low NH3 yield.", type: "negative" },
  medium: { label: "H2:N2 = 3:1 (stoichiometric)", effect: "Optimal feed ratio. Standard Haber process.", type: "positive" },
  high: { label: "Excess H2", effect: "Marginal improvement; equilibrium dominated by pressure.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -2.0, y: 0, z: 0 },
  { symbol: "N", color: "#4488ff", x: -0.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: 0.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 2.5, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.5, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[2,3],[3,4]],
  products: [
  { symbol: "N", color: "#4488ff", x: 0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.0, y: -0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.0, y: 0, z: 0.8 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "contact-process",
  name: "Contact Process",
  category: "industrial",
  summary: "Industrial production of sulfuric acid by oxidizing SO2 to SO3 over a V2O5 catalyst, then absorbing SO3 in concentrated H2SO4 (oleum). Sulfuric acid is the world's most-produced industrial chemical (~260 million tons/year).",
  discovered: "Peregrine Phillips, 1831 (commercial scale by BASF, 1890s)",
  reactionType: "Heterogeneous Catalytic Oxidation",
  equation: "2SO2 + O2  <=> [V2O5, 450degC] 2SO3; SO3 + H2SO4  ->  H2S2O7  -> [H2O] 2H2SO4",
  catalyst: "V2O5 (vanadium pentoxide) on SiO2 support, promoted with K2SO4",
  applications: [
  "Manufacture of fertilizers (superphosphate, ammonium sulfate) - main use",
  "Production of hydrochloric acid, nitric acid (lead chamber process predecessor)",
  "Petroleum refining: alkylation and treating processes",
  "Steel pickling and metal surface treatment",
  "Production of dyes, detergents, pharmaceuticals, and explosives"
  ],
  tags: ["sulfuric acid", "SO2 oxidation", "vanadium catalyst"],
  steps: [
  { title: "SO2 Production", content: "Sulfur is burned in air to produce SO2, or SO2 is recovered from roasting metal sulfide ores.", formula: "S + O2  ->  SO2 (or FeS2 + O2  ->  Fe2O3 + SO2)" },
  { title: "Catalytic SO2 Oxidation", content: "SO2 is oxidized to SO3 over V2O5 catalyst at 450-600degC in a double absorption contact process. Conversion ~98-99.5%.", formula: "2SO2 + O2  <=> [V2O5] 2SO3 (Delta H = -197 kJ/mol)" },
  { title: "SO3 Absorption & H2SO4 Production", content: "SO3 is absorbed in 98% H2SO4 to form oleum (H2S2O7), which is diluted with water to give the product acid.", formula: "SO3 + H2SO4  ->  H2S2O7; H2S2O7 + H2O  ->  2H2SO4" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 400degC)", effect: "Catalyst inactive below 400degC; no SO2 -> SO3 conversion.", type: "negative" },
  medium: { label: "450-600degC", effect: "Optimal. Good conversion rate (exothermic equilibrium managed by inter-bed cooling).", type: "positive" },
  high: { label: "High Temp (> 650degC)", effect: "Equilibrium turns unfavorable; V2O5 catalyst sinters.", type: "negative" }
  },
  pressure: {
  low: { label: "Atmospheric", effect: "Standard in most contact plants; pressure gives modest improvement.", type: "positive" },
  medium: { label: "Slight overpressure", effect: "Some plants use moderate pressure to boost SO3 yield.", type: "positive" },
  high: { label: "High Pressure", effect: "Not used industrially; capital cost outweighs modest yield gain.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute SO2", effect: "Low productivity; poor economics.", type: "negative" },
  medium: { label: "8-10% SO2 in air", effect: "Standard feed. Optimal for V2O5 catalyst activity.", type: "positive" },
  high: { label: "High SO2 (> 12%)", effect: "Catalyst overheating; runaway exotherm risk.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "S", color: "#cccc00", x: -1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 1.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.2, y: -0.6, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.2, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2],[3,4]],
  products: [
  { symbol: "S", color: "#cccc00", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0, y: 1.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: -0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.2, y: -0.7, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3]]
  }
  },
  {
  id: "ostwald-process",
  name: "Ostwald Process",
  category: "industrial",
  summary: "Industrial production of nitric acid from ammonia by catalytic oxidation over Pt/Rh gauze at 900degC. Three-stage: NH3 -> NO, NO -> NO2, NO2 -> HNO3. World production ~60 million tons/year.",
  discovered: "Wilhelm Ostwald, 1902 (Nobel Prize 1909)",
  reactionType: "Heterogeneous Catalytic Oxidation",
  equation: "4NH3 + 5O2  -> [Pt/Rh, 900degC] 4NO + 6H2O; 4NO + 3O2 + 2H2O  ->  4HNO3",
  catalyst: "Pt-Rh alloy gauze (Pt:Rh = 90:10)",
  applications: [
  "Production of nitric acid for fertilizer manufacture (ammonium nitrate)",
  "Synthesis of explosives (TNT, RDX, nitroglycerin) via nitration",
  "Production of nylon-6,6 via adipic acid nitration",
  "Metal surface treatment and etching (aqua regia, nitric acid)",
  "Pharmaceutical synthesis requiring nitration reactions"
  ],
  tags: ["nitric acid", "ammonia oxidation", "platinum catalysis"],
  steps: [
  { title: "Catalytic Oxidation of NH3 to NO", content: "NH3 and air pass over Pt/Rh gauze at 850-950degC. Selectivity for NO is ~95%. Reaction is extremely fast (milliseconds contact time).", formula: "4NH3 + 5O2  -> [Pt/Rh, 900degC] 4NO + 6H2O" },
  { title: "Oxidation of NO to NO2", content: "NO is cooled and oxidized by remaining O2 in the gas phase (homogeneous, slow step) to give brown NO2 gas.", formula: "2NO + O2  ->  2NO2 (brown gas, non-catalytic)" },
  { title: "Absorption of NO2 in Water", content: "NO2 is absorbed in water in absorption towers to give dilute nitric acid (50-65%) which can be concentrated.", formula: "3NO2 + H2O  ->  2HNO3 + NO (NO is recycled)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 700degC)", effect: "N2O becomes the major product rather than NO; poor selectivity.", type: "negative" },
  medium: { label: "850-950degC", effect: "Optimal. ~95% NO selectivity. Standard Pt/Rh operation.", type: "positive" },
  high: { label: "High Temp (> 1000degC)", effect: "Pt catalyst evaporates; catalyst losses become prohibitive.", type: "negative" }
  },
  pressure: {
  low: { label: "Atmospheric (0.1 MPa)", effect: "Higher NO selectivity but larger reactor volume needed.", type: "positive" },
  medium: { label: "4-10 bar", effect: "Standard for combined pressure plants. Good economy.", type: "positive" },
  high: { label: "High Pressure (> 10 bar)", effect: "Lower NO selectivity; higher NH3 needed.", type: "negative" }
  },
  concentration: {
  low: { label: "< 9% NH3 in air", effect: "Below stoichiometric; low productivity.", type: "negative" },
  medium: { label: "9-11% NH3", effect: "Optimal (below flammability limit). Standard.", type: "positive" },
  high: { label: "> 13% NH3", effect: "Explosive mixture risk. Never used commercially.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "N", color: "#4488ff", x: -1.0, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.0, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.1, y: -0.6, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -2.1, y: -0.6, z: 0 }
  ],
  bonds: [[0,1],[0,2],[0,3]],
  products: [
  { symbol: "N", color: "#4488ff", x: -0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "solvay-process",
  name: "Solvay Process",
  category: "industrial",
  summary: "Industrial production of sodium carbonate (soda ash, Na2CO3) from brine (NaCl) and limestone (CaCO3) via ammonia as an intermediate carrier. Replaced the older Leblanc process and produces ~50 million tons/year.",
  discovered: "Ernest Solvay, 1861 (commercialized 1863)",
  reactionType: "Industrial Salt Carbonation",
  equation: "NaCl + NH3 + CO2 + H2O  ->  NaHCO3' + NH4Cl; 2NaHCO3  -> [heat] Na2CO3 + H2O + CO2",
  catalyst: "NH3 (recycled), CO2 (from CaCO3 calcination)",
  applications: [
  "Glass manufacturing (largest use of soda ash)",
  "Production of sodium hydroxide (NaOH) via causticization",
  "Pulp and paper manufacturing (kraft process chemicals)",
  "Water softening and detergent formulation",
  "Production of sodium bicarbonate (baking soda) as byproduct"
  ],
  tags: ["soda ash", "ammonia", "brine"],
  steps: [
  { title: "Brine Saturation with Ammonia & CO2", content: "Purified brine (NaCl solution) is saturated with NH3, then CO2 is bubbled through. NaHCO3 precipitates (less soluble than NH4Cl).", formula: "NaCl + NH3 + CO2 + H2O  ->  NaHCO3 + NH4Cl" },
  { title: "NaHCO3 Calcination", content: "The sodium bicarbonate precipitate is filtered and heated in rotary calciners to convert to Na2CO3, releasing CO2 (recycled) and steam.", formula: "2NaHCO3  -> [160degC] Na2CO3 + H2O + CO2 -> " },
  { title: "Ammonia Recovery", content: "NH4Cl filtrate is treated with Ca(OH)2 (from CaCO3 calcination) to recover NH3 gas (recycled). CaCl2 is a byproduct.", formula: "2NH4Cl + Ca(OH)2  ->  CaCl2 + 2NH3 ->  + 2H2O" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 10degC)", effect: "NaHCO3 precipitates more effectively at lower temperature.", type: "positive" },
  medium: { label: "15-30degC (carbonation)", effect: "Standard carbonation temperature. Optimal NaHCO3 yield.", type: "positive" },
  high: { label: "160degC (calcination)", effect: "Required for NaHCO3  ->  Na2CO3 conversion step.", type: "positive" }
  },
  pressure: {
  low: { label: "Low Pressure", effect: "CO2 back-pressure needed; atmospheric not efficient.", type: "negative" },
  medium: { label: "1-4 bar CO2", effect: "Standard overpressure for carbonation towers.", type: "positive" },
  high: { label: "High Pressure", effect: "Not needed; energy-intensive without benefit.", type: "neutral" }
  },
  concentration: {
  low: { label: "Dilute brine", effect: "Low NaHCO3 precipitation; poor efficiency.", type: "negative" },
  medium: { label: "Saturated NaCl brine", effect: "Standard. Maximum NaHCO3 precipitation.", type: "positive" },
  high: { label: "Excess NH3", effect: "Improves CO2 absorption; NH3 is fully recovered.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Na", color: "#ffaa00", x: -2.0, y: 0, z: 0 },
  { symbol: "Cl", color: "#00aa00", x: -0.5, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.2, y: 0, z: 0 }
  ],
  bonds: [[0,1],[2,3]],
  products: [
  { symbol: "Na", color: "#ffaa00", x: -2.0, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: 0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.7, y: -0.7, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.5, y: 0, z: 0 }
  ],
  productBonds: [[0,4],[1,2],[1,3],[1,4]]
  }
  },
  {
  id: "mond-process",
  name: "Mond Process",
  category: "industrial",
  summary: "Purification of nickel by forming volatile nickel tetracarbonyl Ni(CO)4 with CO at 50-60degC, then decomposing it at 230degC to deposit pure nickel. Produces 99.99% pure nickel.",
  discovered: "Ludwig Mond, 1890",
  reactionType: "Carbonyl Complex Formation & Decomposition",
  equation: "Ni(impure) + 4CO  -> [50-60degC] Ni(CO)4(g)  -> [230degC] Ni(pure) + 4CO",
  catalyst: "CO gas; no additional catalyst needed",
  applications: [
  "Production of ultra-pure nickel for electronics and aerospace alloys",
  "Nickel carbonyl as feedstock for nickel-on-alumina hydrogenation catalysts",
  "Thin-film nickel deposition for semiconductors via CVD",
  "Nickel powder production for batteries (NiMH, NiCd)",
  "Separation of nickel from copper, cobalt, iron in smelter residues"
  ],
  tags: ["nickel purification", "metal carbonyl", "CVD"],
  steps: [
  { title: "CO Exposure & Ni(CO)4 Formation", content: "Impure nickel is treated with CO gas at 50-60degC. Nickel uniquely forms volatile Ni(CO)4 under these conditions; impurities (Cu, Fe, Co) don't react.", formula: "Ni + 4CO  -> [50degC] Ni(CO)4 (gas, bp 43degC)" },
  { title: "Transport & Separation", content: "Volatile Ni(CO)4 gas is transported away from impurities at 50-60degC and directed to the decomposition chamber.", formula: "Ni(CO)4(g)  ->  separated from Cu, Fe, Co impurities" },
  { title: "Thermal Decomposition to Pure Ni", content: "At 230degC, Ni(CO)4 decomposes on nickel 'seed' pellets or walls, depositing 99.99% pure nickel. CO is recycled.", formula: "Ni(CO)4  -> [230degC] Ni(pure) + 4CO (recycled)" }
  ],
  conditions: {
  temperature: {
  low: { label: "50-60degC (formation)", effect: "Optimal for Ni(CO)4 formation. Other metals unreactive.", type: "positive" },
  medium: { label: "230degC (decomposition)", effect: "Ni(CO)4 decomposes to pure Ni; CO recycled.", type: "positive" },
  high: { label: "Very High Temp", effect: "Ni(CO)4 thermally stable above 300degC; decomposition complete.", type: "neutral" }
  },
  pressure: {
  low: { label: "Low CO Pressure", effect: "Slow Ni(CO)4 formation; incomplete extraction.", type: "negative" },
  medium: { label: "Atmospheric CO", effect: "Standard for formation step.", type: "positive" },
  high: { label: "High CO Pressure", effect: "Accelerates Ni(CO)4 formation; used in high-pressure variants.", type: "positive" }
  },
  concentration: {
  low: { label: "Low CO (Dilute)", effect: "Insufficient; Ni(CO)4 equilibrium not reached.", type: "negative" },
  medium: { label: "Pure CO stream", effect: "Standard. Efficient extraction of Ni.", type: "positive" },
  high: { label: "Excess CO", effect: "Fully drives equilibrium to Ni(CO)4; recycled after decomposition.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Ni", color: "#aaaaff", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 2.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.2, y: 0, z: 0 }
  ],
  bonds: [[1,2]],
  products: [
  { symbol: "Ni", color: "#aaaaff", x: 0, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 1.5, y: 1.5, z: 1.5 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 2.5, z: 2.5 }
  ],
  productBonds: [[1,2]]
  }
  },
  {
  id: "hall-heroult-process",
  name: "Hall-Heroult Process",
  category: "industrial",
  summary: "The major industrial process for smelting aluminum. It involves dissolving aluminum oxide (alumina) in molten cryolite and electrolyzing the molten salt bath to yield pure aluminum metal.",
  discovered: "Charles Martin Hall & Paul Heroult, 1886",
  reactionType: "Electrolytic Reduction",
  equation: "2Al2O3 + 3C -> 4Al + 3CO2",
  catalyst: "Molten Cryolite (Na3AlF6) as solvent",
  applications: [
  "Primary production of aluminum metal worldwide",
  "Manufacturing of lightweight alloys for aerospace and automotive industries",
  "Production of aluminum foil and packaging materials",
  "Electrical transmission lines (aluminum's high conductivity)",
  "Construction industry (window frames, structural components)"
  ],
  tags: ["aluminum", "electrolysis", "smelting", "cryolite"],
  steps: [
  { title: "Alumina Dissolution", content: "Alumina (Al2O3) is dissolved in a molten bath of cryolite at ~950degC to lower its melting point and increase conductivity.", formula: "Al2O3 (solid) -> Al2O3 (dissolved in Na3AlF6)" },
  { title: "Electrolytic Reduction", content: "At the cathode, Al3+ ions are reduced to molten aluminum metal, which sinks to the bottom of the cell.", formula: "Al3+ + 3e- -> Al (liquid)" },
  { title: "Anodic Oxidation", content: "Oxygen ions react with the carbon anode to form CO2 gas, gradually consuming the anode.", formula: "2O2- + C -> CO2 + 4e-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 900degC)", effect: "Bath solidifies; electrolysis stops. Very difficult to restart.", type: "negative" },
  medium: { label: "940-980degC", effect: "Optimal. Balanced between alumina solubility and energy efficiency.", type: "positive" },
  high: { label: "High Temp (> 1000degC)", effect: "Excessive energy loss; increased corrosion of cell lining.", type: "negative" }
  },
  pressure: {
  medium: { label: "Atmospheric", effect: "Standard open cell operation.", type: "positive" }
  },
  concentration: {
  low: { label: "Low Alumina (< 2%)", effect: "Anode effect occurs; voltage spikes; fluorine gas released.", type: "negative" },
  medium: { label: "2-5% Alumina", effect: "Standard operating window for stable electrolysis.", type: "positive" },
  high: { label: "High Alumina (> 8%)", effect: "Sludge formation at the bottom; reduces current efficiency.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Al", color: "#aaaaaa", x: -0.8, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 2.0, y: 0, z: 0 }
  ],
  bonds: [[0,1]],
  products: [
  { symbol: "Al", color: "#aaaaaa", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.2, y: 0.5, z: 0 }
  ],
  productBonds: [[1,2]]
  }
  },
  {
  id: "bessemer-process",
  name: "Bessemer Process",
  category: "industrial",
  summary: "The first inexpensive industrial process for mass-producing steel from pig iron by blowing air through molten iron to oxidize impurities (C, Si, Mn). Revolutionized the steel industry in the mid-19th century.",
  discovered: "Henry Bessemer, 1856",
  reactionType: "Oxidative Refining of Molten Iron",
  equation: "C(in pig iron) + O2 ->[blown air] CO2; Si + O2 -> SiO2; Mn + O2 -> MnO",
  catalyst: "Air (O2 as oxidant); no catalyst - exothermic combustion of impurities",
  applications: [
  "Mass production of structural steel for railways (19th century industrialization)",
  "Bridge construction (Brooklyn Bridge used Bessemer steel)",
  "Building construction and architectural steel frames",
  "Evolved into modern Basic Oxygen Furnace (BOF) steel process",
  "Production of steel wire, rails, and plates for ships"
  ],
  tags: ["steel", "pig iron refining", "oxidation"],
  steps: [
  { title: "Molten Pig Iron Loading", content: "Molten pig iron (~4% C, 1-3% Si, 1-2% Mn) is charged into the Bessemer converter vessel.", formula: "Pig iron: ~94% Fe + 4% C + 1% Si + 1% Mn + trace P, S" },
  { title: "Air Blow & Impurity Oxidation", content: "Air is blown through the bottom tuyeres into the molten iron. O2 reacts with C, Si, Mn impurities in a highly exothermic reaction. Temperature rises to ~1700degC.", formula: "C + O2 -> CO2; Si + O2 -> SiO2(slag); Mn + O2 -> MnO(slag)" },
  { title: "Blow Completion & Steel Tapping", content: "When C drops to ~0.1-1% (depending on steel grade), blowing stops. Ferromanganese is added to deoxidize and re-carbonate. Steel is tapped.", formula: "Fe + ~0.1-0.4% C (carbon steel) + slag removal" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp (< 1400C)", effect: "Pig iron doesn't melt fully; blowing inefficient.", type: "negative" },
  medium: { label: "1500-1700C", effect: "Standard. Exothermic reactions raise temperature during blow.", type: "positive" },
  high: { label: "High Temp (> 1700C)", effect: "Excessive wear on converter lining; phosphorus removal issues.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Air Pressure", effect: "Insufficient O2 flow; impurities not removed.", type: "negative" },
  medium: { label: "2-3 bar air blast", effect: "Standard. Complete removal of C, Si, Mn in ~20 minutes.", type: "positive" },
  high: { label: "High Air Pressure", effect: "Faster blow; risk of overblowing (excess O2 in steel).", type: "negative" }
  },
  concentration: {
  low: { label: "Low O2 (dilute air)", effect: "Slow oxidation; incomplete impurity removal.", type: "negative" },
  medium: { label: "Air (21% O2)", effect: "Standard Bessemer. Modern BOF uses pure O2 for faster, cleaner steel.", type: "positive" },
  high: { label: "Pure O2 (BOF)", effect: "Modern improvement: lower N2 pickup, faster blow, better steel quality.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Fe", color: "#888888", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 0.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: -0.4, z: 0 }
  ],
  bonds: [[2,3]],
  products: [
  { symbol: "Fe", color: "#888888", x: -1.5, y: 0, z: 0 },
  { symbol: "C", color: "#333333", x: 1.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.8, y: 0.4, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.8, y: -0.4, z: 0 }
  ],
  productBonds: [[1,2],[1,3]]
  }
  },
  {
  id: "dow-process",
  name: "Dow Process",
  category: "industrial",
  summary: "Electrolytic extraction of bromine (and later magnesium) from seawater and brine by oxidation of Br- with Cl2. Founded by Herbert H. Dow in 1897; basis of much of the bromine industry today.",
  discovered: "Herbert Henry Dow, 1897",
  reactionType: "Electrolytic/Chemical Halogen Displacement",
  equation: "2Br- + Cl2 -> Br2 + 2Cl- (Cl2 displaces Br- from brine); Br2 stripped with air",
  catalyst: "Cl2 (chemical oxidant displacing Br-), steam/air stripping",
  applications: [
  "Production of bromine from seawater and natural brine wells",
  "Synthesis of organobromides: flame retardants (TBBPA, HBCD)",
  "Production of silver bromide for photography and X-ray films",
  "Extraction of magnesium metal from seawater (Dow Mg process variant)",
  "Bromine-based drilling fluids for oil and gas well completion"
  ],
  tags: ["bromine extraction", "seawater", "electrolysis"],
  steps: [
  { title: "Cl2 Oxidation of Br- (Displacement)", content: "Cl2 gas is bubbled through acidified brine. Being a stronger oxidant, Cl2 displaces Br- to give free Br2 in solution (halogen displacement).", formula: "Cl2 + 2Br- -> Br2 + 2Cl- (in acidified brine, pH 3.5)" },
  { title: "Air/Steam Stripping of Br2", content: "Br2 is sparingly volatile and is stripped from solution with hot air or steam, concentrating it in the gas phase.", formula: "Br2(aq) + air/steam -> Br2(g) + H2O" },
  { title: "Absorption & Recovery of Br2", content: "Br2 vapor is absorbed in NaOH or SO2/water to give sodium bromide or HBr, then re-oxidized with Cl2 to obtain pure liquid Br2.", formula: "Br2 + SO2 + 2H2O -> 2HBr + H2SO4; 2HBr + Cl2 -> Br2 + 2HCl" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Br2 stays dissolved; poor stripping efficiency.", type: "negative" },
  medium: { label: "80-100C", effect: "Standard for steam stripping. Efficient Br2 volatilization.", type: "positive" },
  high: { label: "High Temp", effect: "Increased corrosion; Br2 recovery infrastructure stress.", type: "negative" }
  },
  pressure: {
  low: { label: "Low Pressure (vacuum)", effect: "Aids Br2 stripping from solution at lower temp.", type: "positive" },
  medium: { label: "Atmospheric", effect: "Standard with steam stripping column.", type: "positive" },
  high: { label: "High Pressure", effect: "Keeps Br2 dissolved; counterproductive for stripping.", type: "negative" }
  },
  concentration: {
  low: { label: "Seawater (~65 ppm Br-)", effect: "Dilute; large volumes needed. Economical only for Mg extraction.", type: "negative" },
  medium: { label: "Natural brine (2000-4000 ppm Br-)", effect: "Standard for bromine production. Economic and efficient.", type: "positive" },
  high: { label: "Dead Sea brine (> 10,000 ppm)", effect: "Highest efficiency; major Br2 production source.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "Cl", color: "#00aa00", x: -1.0, y: 0, z: 0 },
  { symbol: "Cl", color: "#00aa00", x: 0.3, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 2.5, y: 0.4, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 2.5, y: -0.4, z: 0 }
  ],
  bonds: [[0,1]],
  products: [
  { symbol: "Br", color: "#aa4400", x: -0.7, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 0.7, y: 0, z: 0 },
  { symbol: "Cl", color: "#00aa00", x: 2.5, y: 0.4, z: 0 },
  { symbol: "Cl", color: "#00aa00", x: 2.5, y: -0.4, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "sn1-reaction",
  name: "SN1 Reaction",
  category: "substitution",
  summary: "Unimolecular nucleophilic substitution occurs in two steps via a carbocation intermediate. Rate depends only on substrate concentration. Favored by tertiary substrates and polar protic solvents.",
  discovered: "Christopher Ingold, 1930s",
  reactionType: "Nucleophilic Substitution (Unimolecular)",
  equation: "R-X -> R+ + X-  ->[Nu-]  R-Nu",
  catalyst: "Polar protic solvent (H2O, EtOH)",
  applications: [
  "Synthesis of tertiary alcohols",
  "Solvolysis reactions in organic synthesis",
  "Preparation of tert-butyl derivatives",
  "Drug molecule modification"
  ],
  tags: ["substitution", "carbocation", "two-step", "racemization"],
  steps: [
  { title: "Carbocation Formation (RDS)", content: "The leaving group leaves with its electrons, forming a planar carbocation. This is the slow, rate-determining step.", formula: "(CH3)3C-Br -> (CH3)3C+ + Br-" },
  { title: "Nucleophilic Attack", content: "The nucleophile attacks the planar carbocation from either side, potentially leading to racemization.", formula: "(CH3)3C+ + H2O -> (CH3)3C-OH2+" },
  { title: "Final Deprotonation", content: "Water or another base removes a proton to yield the neutral product.", formula: "R-OH2+ + H2O -> R-OH + H3O+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Slows carbocation formation. Reaction is sluggish.", type: "negative" },
  medium: { label: "Room Temp", effect: "Optimal for stable carbocations in good solvents.", type: "positive" },
  high: { label: "High Temp", effect: "Forces reaction but increases competing E1 elimination.", type: "neutral" }
  },
  concentration: {
  low: { label: "Low [Nu]", effect: "No effect on rate, but may limit product yield.", type: "neutral" },
  medium: { label: "Moderate", effect: "Standard conditions.", type: "positive" },
  high: { label: "High [Nu]", effect: "May promote competing SN2 if substrate allows.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.8, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.8, y: 1.2, z: 0.5 },
  { symbol: "C", color: "#555555", x: -0.8, y: -1.2, z: 0.5 },
  { symbol: "C", color: "#555555", x: -0.8, y: 0, z: -1.2 }
  ],
  bonds: [[0,1],[0,2],[0,3],[0,4]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.4, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: -0.8, y: 1.2, z: 0.5 },
  { symbol: "C", color: "#555555", x: -0.8, y: -1.2, z: 0.5 },
  { symbol: "C", color: "#555555", x: -0.8, y: 0, z: -1.2 },
  { symbol: "H", color: "#aaaaaa", x: 1.9, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[0,4],[1,5]]
  }
  },
  {
  id: "e1-elimination-reaction",
  name: "E1 Elimination",
  category: "elimination",
  summary: "Unimolecular elimination occurs in two steps via a carbocation intermediate. The second step is the loss of a beta-proton to form a double bond. Favored by high temperature.",
  discovered: "Christopher Ingold, 1930s",
  reactionType: "Unimolecular Elimination",
  equation: "R-X -> R+ + X-  ->[Base]  Alkene + HB+",
  catalyst: "Heat, Weak base/solvent",
  applications: [
  "Dehydration of secondary and tertiary alcohols to alkenes",
  "Industrial production of specialty alkenes",
  "Formation of thermodynamic products (Zaitsev rule)",
  "Mechanism studies of competitive pathways"
  ],
  tags: ["elimination", "carbocation", "two-step", "Zaitsev rule"],
  steps: [
  { title: "Carbocation Formation", content: "The leaving group (X) departs, creating a tertiary or secondary carbocation intermediate. RDS step.", formula: "R-X -> R+ + X-" },
  { title: "Deprotonation (Beta-Hydrogen Loss)", content: "A weak base or solvent molecule abstracts a proton from a beta-carbon, forming a pi-bond between C-alpha and C-beta.", formula: "R+ + B: -> Alkene + BH+" }
  ],
  conditions: {
  temperature: {
  low: { label: "Low Temp", effect: "Favors SN1 over E1. Elimination requires higher activation energy.", type: "negative" },
  medium: { label: "Room Temp", effect: "Slow elimination; mixture of SN1 and E1 often formed.", type: "neutral" },
  high: { label: "High Temp (>60 C)", effect: "Strongly favors elimination over substitution due to entropic factors.", type: "positive" }
  },
  concentration: {
  low: { label: "Dilute Base", effect: "Allows carbocation formation; E1 proceeds.", type: "positive" },
  medium: { label: "Moderate", effect: "Standard.", type: "neutral" },
  high: { label: "Strong Base", effect: "Sifts mechanism towards E2 elimination.", type: "negative" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "Br", color: "#aa4400", x: 1.8, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -0.7, y: 1.1, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: -0.5, z: 0 }
  ],
  bonds: [[0,1],[1,2],[0,3],[0,4]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: 0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: -1.4, y: -0.8, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.4, y: 0.8, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[0,3],[1,4]]
  }
  },
  {
  id: "e1cb-elimination",
  name: "E1cB Elimination",
  category: "elimination",
  summary: "Elimination Unimolecular conjugate Base occurs when a substrate has an acidic proton and a poor leaving group. Base forms a carbanion intermediate, which then loses the leaving group.",
  discovered: "Sidney Alexander, 1968 (mechanistic study)",
  reactionType: "Unimolecular Elimination (Conjugate Base)",
  equation: "Base + H-C-C-LG -> [B-H + -C-C-LG] -> C=C + LG-",
  catalyst: "Strong base",
  applications: [
  "Dehydration of beta-hydroxy carbonyls (aldol condensation second step)",
  "Synthesis of specialty fluoroalkenes",
  "Biological reactions like enolase mechanism",
  "Synthetic organic transformations involving specific base catalysis"
  ],
  tags: ["elimination", "carbanion", "conjugate base", "aldol"],
  steps: [
  { title: "Proton Abstraction", content: "A strong base abstracts an acidic proton from the beta-carbon, forming a resonance-stabilized carbanion.", formula: "B: + H-C-C-LG -> B-H+ + -C-C-LG" },
  { title: "Leaving Group Departure", content: "The carbanion electrons shift to form a double bond, expelling the poor leaving group. This is the RDS for E1cB-step.", formula: "-C-C-LG -> C=C + LG-" }
  ],
  conditions: {
  temperature: {
  medium: { label: "Room Temp", effect: "Feasible if proton is sufficiently acidic (e.g., alpha to carbonyl).", type: "positive" },
  high: { label: "High Temp", effect: "Drives elimination of poor leaving groups (like OH-).", type: "positive" }
  },
  concentration: {
  high: { label: "High [Base]", effect: "Essential to ensure complete deprotonation to the conjugate base.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0.2, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: -0.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.8, y: -0.5, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.2, y: 0.5, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.7, y: 1.4, z: 0 }
  ],
  bonds: [[0,1],[0,2],[1,3],[0,4]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.8, y: -0.4, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.4, y: 0.6, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[1,3]]
  }
  },
  {
  id: "lucas-test",
  name: "Lucas Test",
  category: "organic",
  summary: "A rapid test to distinguish between primary, secondary, and tertiary alcohols using Lucas reagent (conc. HCl + anhydrous ZnCl2). It operates via a carbocation mechanism.",
  discovered: "Howard Lucas, 1930",
  reactionType: "Analytical Test / Substitution",
  equation: "R-OH + HCl ->[ZnCl2]  R-Cl + H2O",
  catalyst: "Anhydrous ZnCl2",
  applications: [
  "Distinguishing 1, 2, and 3 alcohols in undergraduate labs",
  "Qualitative analysis of unknown alcohol samples",
  "Process control in bulk alcohol processing",
  "Identification of allylic and benzylic alcohols"
  ],
  tags: ["test", "alcohol", "analytical", "carbocation"],
  steps: [
  { title: "Coordination", content: "Zinc chloride (Lewis acid) coordinates with the oxygen of the alcohol, making it a better leaving group.", formula: "R-OH + ZnCl2 -> R-O(ZnCl2)H+" },
  { title: "C-O Bond Cleavage", content: "The C-O bond breaks to form a carbocation. 3 alcohols form stable carbocations instantly.", formula: "R-O(ZnCl2)H+ -> R+ + [HOZnCl2]-" },
  { title: "Nucleophilic Attack", content: "Chloride ion (from HCl) attacks the carbocation to form the alkyl chloride, which is insoluble and causes turbidity.", formula: "R+ + Cl- -> R-Cl (turbidity)" }
  ],
  conditions: {
  temperature: {
  low: { label: "Room Temp (25 C)", effect: "3 alcohols react instantly; 2 in 5-10 mins; 1 no reaction.", type: "positive" },
  high: { label: "Heating", effect: "Required for 1 alcohols to show any reaction; can lead to side products.", type: "neutral" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: 1.2, y: 0, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 1.6, y: 0.8, z: 0 }
  ],
  bonds: [[0,1],[1,2]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "Cl", color: "#33bb33", x: 1.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  },
  {
  id: "tollens-test",
  name: "Tollen's Test",
  category: "organic",
  summary: "Used to detect aldehydes. Ammoniacal silver nitrate (Tollen's reagent) oxidizes aldehydes to carboxylates while silver ions are reduced to metallic silver, forming a silver mirror.",
  discovered: "Bernhard Tollens, 1882",
  reactionType: "Oxidation-Reduction (Redox)",
  equation: "RCHO + 2[Ag(NH3)2]+ + 3OH- -> RCOO- + 2Ag + 4NH3 + 2H2O",
  catalyst: "Ammoniacal Silver Nitrate",
  applications: [
  "Distinguishing aldehydes from ketones",
  "Detection of reducing sugars (carbohydrate chemistry)",
  "Forming silvered surfaces on glass mirrors",
  "Analysis of hemiacetals and alpha-hydroxy ketones"
  ],
  tags: ["test", "aldehyde", "redox", "silver mirror"],
  steps: [
  { title: "Coordination", content: "The aldehyde carbonyl oxygen interacts with the silver-ammine complex in basic medium.", formula: "RCHO + OH- -> R-CH(OH)O-" },
  { title: "Electron Transfer", content: "Silver (I) ions accept electrons from the aldehyde, reducing to metallic Ag(0) which deposits on the glass.", formula: "Ag+ + e- -> Ag(s)" },
  { title: "Oxidation", content: "The aldehyde is oxidized to the corresponding carboxylate salt.", formula: "RCHO -> RCOO-" }
  ],
  conditions: {
  temperature: {
  low: { label: "Cold/Room Temp", effect: "Slow development of silver mirror. May require gentle warming.", type: "neutral" },
  medium: { label: "Gentle Heating (Water Bath)", effect: "Ideal for rapid and clean silver mirror formation.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.2, z: 0 },
  { symbol: "H", color: "#aaaaaa", x: 0.5, y: -0.5, z: 0 },
  { symbol: "Ag", color: "#c0c0c0", x: 2.0, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -0.5, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -0.5, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.5, y: -0.8, z: 0 },
  { symbol: "Ag", color: "#c0c0c0", x: 2.5, y: 0.5, z: 0 }
  ],
  productBonds: [[0,1],[0,2]]
  }
  },
  {
  id: "fehlings-test",
  name: "Fehling's Test",
  category: "organic",
  summary: "Used to detect aliphatic aldehydes and reducing sugars. Cu(II) ions in a basic tartrate solution are reduced to a brick-red precipitate of copper(I) oxide (Cu2O).",
  discovered: "Hermann von Fehling, 1849",
  reactionType: "Redox",
  equation: "RCHO + 2Cu2+ + 5OH- -> RCOO- + Cu2O + 3H2O",
  catalyst: "Fehling's A & B (CuSO4 + NaK Tartrate)",
  applications: [
  "Detection of glucose in urine (medical diagnostics)",
  "Distinguishing aliphatic from aromatic aldehydes",
  "Sugar analysis in food industry",
  "Qualitative test for reducing properties of chemicals"
  ],
  tags: ["test", "sugar", "redox", "copper"],
  steps: [
  { title: "Hydration", content: "In the basic Fehling solution, the aldehyde is hydrated or converted to an alkoxide intermediate.", formula: "RCHO + OH- -> RCH(OH)O-" },
  { title: "Cu(II) Reduction", content: "Copper (II) ions, stabilized by tartrate complexes, gain electrons from the aldehyde and reduce to Cu(I).", formula: "2Cu2+ + 2e- + 2OH- -> Cu2O + H2O" },
  { title: "Precipitation", content: "Brick-red Cu2O precipitate forms as the aldehyde is oxidized to carboxylate.", formula: "Cu2O (brick-red precipitate)" }
  ],
  conditions: {
  temperature: {
  high: { label: "Boiling", effect: "Necessary to overcome activation energy for the redox process and form the precipitate.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.2, z: 0 },
  { symbol: "Cu", color: "#e06633", x: 1.5, y: 0, z: 0 }
  ],
  bonds: [[0,1]],
  products: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.1, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.2, y: -0.6, z: 0 },
  { symbol: "Cu", color: "#e06633", x: 1.8, y: 0, z: 0 },
  { symbol: "Cu", color: "#e06633", x: 2.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[0,2],[3,4]]
  }
  },
  {
  id: "kolbe-electrolysis",
  name: "Kolbe's Electrolysis",
  category: "organic",
  summary: "Electrolysis of sodium or potassium salts of carboxylic acids to form alkanes at the anode. The reaction involves radical intermediates.",
  discovered: "Hermann Kolbe, 1849",
  reactionType: "Electrochemical / Radical",
  equation: "2RCOONa + 2H2O -> R-R + 2CO2 + H2 + 2NaOH",
  catalyst: "Electrical current, Graphite/Pt electrodes",
  applications: [
  "Preparation of symmetrical alkanes",
  "Industrial synthesis of sebacic acid from adipic acid",
  "Green synthesis of hydrocarbons using renewable electricity",
  "Formation of complex poly-ene structures"
  ],
  tags: ["electrolysis", "radical", "alkane", "anode"],
  steps: [
  { title: "Anodic Oxidation", content: "The carboxylate anion (RCOO-) loses an electron at the anode to form a carboxyl radical.", formula: "RCOO- -> RCOO. + e-" },
  { title: "Decarboxylation", content: "The carboxyl radical loses CO2 to form a highly reactive alkyl radical (R.).", formula: "RCOO. -> R. + CO2" },
  { title: "Dimerization", content: "Two alkyl radicals combine to form the balanced alkane product (R-R).", formula: "2R. -> R-R" }
  ],
  conditions: {
  concentration: {
  high: { label: "Concentrated Salt", effect: "Provides sufficient current density and high radical concentration for dimerization.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: -1.0, y: 0.2, z: 0 },
  { symbol: "O", color: "#ff4444", x: -1.0, y: 1.3, z: 0 },
  { symbol: "O", color: "#ff4444", x: 0.2, y: -0.5, z: 0 },
  { symbol: "Na", color: "#aa44cc", x: 1.8, y: 0, z: 0 }
  ],
  bonds: [[0,1],[0,2]],
  products: [
  { symbol: "C", color: "#555555", x: -0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 0.7, y: 0, z: 0 },
  { symbol: "C", color: "#555555", x: 2.5, y: 0.8, z: 0 },
  { symbol: "O", color: "#ff4444", x: 2.5, y: 1.9, z: 0 },
  { symbol: "O", color: "#ff4444", x: 3.5, y: 0, z: 0 }
  ],
  productBonds: [[0,1],[2,3],[2,4]]
  }
  },
  {
  id: "balz-schiemann-reaction",
  name: "Balz-Schiemann Reaction",
  category: "substitution",
  summary: "Thermal decomposition of aryl diazonium tetrafluoroborates to yield aryl fluorides. It is the best method to introduce fluorine into an aromatic ring.",
  discovered: "Gunther Schiemann & Gunther Balz, 1927",
  reactionType: "Aromatic Substitution",
  equation: "ArN2+Cl- + HBF4 -> ArN2+BF4- ->[heat] ArF + N2 + BF3",
  catalyst: "HBF4 (Fluoboric acid), Heat",
  applications: [
  "Synthesis of fluorinated pharmaceuticals (e.g., antidepressants)",
  "Production of fluorinated agrochemicals",
  "Preparation of specialty electronic materials",
  "Starting point for fluorine-18 labeling in PET imaging"
  ],
  tags: ["fluorine", "aromatic", "diazonium", "thermal decomposition"],
  steps: [
  { title: "Salt Formation", content: "Aryl diazonium chloride reacts with fluoroboric acid to precipitate the stable, dry aryl diazonium tetrafluoroborate salt.", formula: "ArN2+Cl- + HBF4 -> ArN2+BF4- + HCl" },
  { title: "Thermal Decomposition", content: "The dry salt is heated, leading to the evolution of N2 and BF3 gas, leaving the aryl fluoride.", formula: "ArN2+BF4- -> ArF + N2 + BF3" }
  ],
  conditions: {
  temperature: {
  high: { label: "Controlled Heating", effect: "Slowly decomposes the diazonium salt to produce aryl fluoride and gases.", type: "positive" }
  }
  },
  molecule3d: {
  reactants: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "N", color: "#3366ff", x: 1.3, y: 0, z: 0 },
  { symbol: "N", color: "#3366ff", x: 2.5, y: 0.1, z: 0 },
  { symbol: "B", color: "#ffcc00", x: 0, y: 2.0, z: 0 },
  { symbol: "F", color: "#66ffcc", x: 1.0, y: 2.8, z: 0 }
  ],
  bonds: [[0,1],[1,2],[3,4]],
  products: [
  { symbol: "C", color: "#555555", x: 0, y: 0, z: 0 },
  { symbol: "F", color: "#66ffcc", x: 1.2, y: 0, z: 0 }
  ],
  productBonds: [[0,1]]
  }
  }];

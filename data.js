const questionSets = {
    principles: {
        "biochemistry": [
        {
            question: "What is the rate limiting enzyme in Kreb's cycle?",
            options: {
                A: "Isocitrate dehydrogenase",
                B: "Citrate synthase",
                C: "Succinate dehydrogenase",
                D: "Malate dehydrogenase",
                E: "Pyruvate dehydrogenase"
            },
            correctAnswer: "A",
            explanation: "..."
        }
        ],
        "pathology": [
        {
            question: "Which type of necrosis is a mixture of coagulative and liquefactive?",
            options: {
                A: "Fat necrosis",
                B: "Fibrinoid necrosis",
                C: "Pancreatic necrosis",
                D: "Gangrene"
            },
            correctAnswer: "C",
            explanation: "sera sera"
        }
    ]
        
    },
    respiratory: {
        "anatomy": [
            {
                question: "A patient had a thyroidectomy last week and now has a hoarse voice. Which one of the following structures is likely to be injured?",
                options: {
                    A: "Basal ganglia",
                    B: "Phrenic nerve",
                    C: "Recurrent laryngeal nerve",
                    D: "Wernicke’s area",
                    E: "Glossopharyngeal nerve"
                },
                correctAnswer: "C",
                explanation: "Unilateral trauma to the recurrent laryngeal nerve during neck surgeries can cause ipsilateral vocal cord paralysis. The paralysed vocal cord lies in an abducted position, which commonly results in hoarseness or a weak voice. This nerve provides motor innervation to all intrinsic muscles of the larynx except the cricothyroid."
            },
            {
                question: "At which vertebral level does the trachea bifurcate into the left and right main bronchi?",
                options: {
                    A: "T2",
                    B: "T4/T5",
                    C: "T8",
                    D: "T10",
                    E: "T12"
                },
                correctAnswer: "B",
                explanation: "The trachea begins at the C6 vertebral level and descends into the thorax. It typically ends at the sternal angle, which corresponds to the T4/T5 vertebral level. At this specific anatomical landmark, the trachea bifurcates into the left and right main bronchi."
            },
            {
                question: "How many functional bronchopulmonary segments are typically found in the right lung?",
                options: {
                    A: "2",
                    B: "3",
                    C: "8",
                    D: "10",
                    E: "12"
                },
                correctAnswer: "D",
                explanation: "The right lung is anatomically divided into superior, middle, and inferior lobes. These lobes are further subdivided into functional respiratory units called bronchopulmonary segments. There are typically ten distinct bronchopulmonary segments found within the right lung."
            },
            {
                question: "Which of the following cartilages of the larynx is an unpaired 'leading' cartilage?",
                options: {
                    A: "Arytenoid cartilage",
                    B: "Cuneiform cartilage",
                    C: "Corniculate cartilage",
                    D: "Triticeal cartilage",
                    E: "Cricoid cartilage"
                },
                correctAnswer: "E",
                explanation: "The cartilaginous skeleton of the larynx consists of several distinct cartilaginous structures. Among these are the three unpaired or \"leading\" cartilages, which include the thyroid, cricoid, and epiglottic cartilages. The cricoid cartilage forms a complete ring around the airway and serves as a crucial foundation."
            },
            {
                question: "Which lymph nodes receive most of the superficial lymphatic drainage from the visceral pleura and superficial lung tissue?",
                options: {
                    A: "Bronchopulmonary (hilar) lymph nodes",
                    B: "Parasternal nodes",
                    C: "Axillary nodes",
                    D: "Clavicular lymph nodes",
                    E: "Superior deep cervical lymph nodes"
                },
                correctAnswer: "A",
                explanation: "The lymphatic drainage of the lungs is divided into superficial and deep plexuses. The superficial lymphatic vessels drain the visceral pleura and superficial lung tissue. These vessels eventually course towards the hilum and drain into the bronchopulmonary or hilar lymph nodes."
            },
            {
                question: "Which layer of the pleura directly covers the lobes and the root of the lung?",
                options: {
                    A: "Parietal pleura",
                    B: "Costal pleura",
                    C: "Visceral pleura",
                    D: "Diaphragmatic pleura",
                    E: "Cervical parietal pleura"
                },
                correctAnswer: "C",
                explanation: "The lungs are enclosed within a pleural cavity defined by two layers of mesoderm-derived pleura. The parietal pleura lines the thoracic wall, while the visceral pleura directly covers the surface of the lungs. This visceral layer intimately adheres to the lobes and the root of the lung."
            },
            {
                question: "The trachea is reinforced with C-shaped hyaline cartilages. What type of epithelium lines the lumen of the trachea?",
                options: {
                    A: "Simple squamous epithelium",
                    B: "Stratified squamous epithelium",
                    C: "Pseudostratified columnar epithelium",
                    D: "Transitional epithelium",
                    E: "Simple cuboidal epithelium"
                },
                correctAnswer: "C",
                explanation: "The trachea connects the larynx with the bronchi and is reinforced with C-shaped hyaline cartilages. Its inner lumen is lined with a specialized respiratory mucosa. This mucosa primarily consists of a pseudostratified columnar epithelium equipped with cilia to sweep away debris."
            }
        ],
        "physiology": [
            {
                question: "Which peripheral chemoreceptors respond primarily to decreases in arterial PaO2?",
                options: {
                    A: "Medullary chemoreceptors",
                    B: "Carotid bodies and aortic arch",
                    C: "Stretch receptors in the bronchi",
                    D: "Juxtacapillary (J) receptors",
                    E: "Central chemosensitive area"
                },
                correctAnswer: "B",
                explanation: "The body's respiratory drive is regulated by both central and peripheral chemoreceptors. Peripheral chemoreceptors are anatomically located in the carotid bodies and the aortic arch. These specific receptors respond primarily to significant decreases in arterial oxygen partial pressure."
            },
            {
                question: "During a normal, quiet expiration, which of the following mechanical processes occurs?",
                options: {
                    A: "The diaphragm contracts and flattens",
                    B: "The external intercostal muscles contract",
                    C: "The diaphragm relaxes and returns to its dome shape",
                    D: "The rectus abdominis forcefully contracts",
                    E: "The volume of the chest cavity actively increases"
                },
                correctAnswer: "C",
                explanation: "Inspiration is an active process that requires the contraction of the diaphragm and external intercostal muscles. During a normal, quiet expiration, this process is reversed passively. The diaphragm simply relaxes, ascending back to its dome shape and reducing the thoracic volume."
            },
            {
                question: "A patient with a pulmonary obstruction has an arterial blood gas showing pH 7.33, pCO2 7.7 kPa, and HCO3- 30 mmol/L. What is the correct interpretation of these results?",
                options: {
                    A: "Uncompensated respiratory acidosis",
                    B: "Partially compensated respiratory acidosis",
                    C: "Fully compensated respiratory acidosis",
                    D: "Metabolic alkalosis",
                    E: "Metabolic acidosis"
                },
                correctAnswer: "B",
                explanation: "An arterial pH of 7.33 indicates acidaemia, while the elevated pCO2 of 7.7 kPa reveals a primary respiratory acidosis. In response, the kidneys retain bicarbonate, leading to an elevated HCO3- level of 30 mmol/L. Because the pH has not yet returned to the normal range, this state is classified as a partially compensated respiratory acidosis."
            },
            {
                question: "What is the primary buffer system responsible for maintaining pH balance in the blood plasma and extracellular fluid (ECF)?",
                options: {
                    A: "Phosphate buffer system",
                    B: "Protein buffer system",
                    C: "Bicarbonate buffer system",
                    D: "Ammonia buffer system",
                    E: "Haemoglobin buffer system"
                },
                correctAnswer: "C",
                explanation: "The body utilizes several buffer systems as the first line of defense against pH shifts. The bicarbonate buffer system is the primary mechanism responsible for maintaining pH balance in the blood plasma and extracellular fluid. It works by allowing basic bicarbonate ions to bind with excess hydrogen ions to form carbonic acid."
            },
            {
                question: "Under normal resting conditions, what is the ideal global Ventilation to Perfusion (V/Q) ratio in the lungs?",
                options: {
                    A: "0.4",
                    B: "0.8",
                    C: "1.0",
                    D: "1.2",
                    E: "2.0"
                },
                correctAnswer: "B",
                explanation: "Normal pulmonary function requires a delicate balance between ventilation and blood flow. Typically, about 4 liters of air enter the respiratory tract while 5 liters of blood pass through the capillaries per minute. This balanced matching results in an ideal global Ventilation to Perfusion (V/Q) ratio of 0.8."
            },
            {
                question: "Which of the following conditions is characterized by hypoxaemia with an elevated A-a (Alveolar-arterial) gradient?",
                options: {
                    A: "High altitude exposure",
                    B: "Hypoventilation from opiate overdose",
                    C: "Pneumonia",
                    D: "Breathing a hypoxic gas mixture",
                    E: "Neuromuscular weakness"
                },
                correctAnswer: "C",
                explanation: "Hypoxaemia can be caused by alveolar hypoventilation, shunts, or ventilation-perfusion mismatching. Pneumonia causes fluid and exudate to fill the alveoli, severely impairing local gas exchange. This localized V/Q mismatch leads to hypoxaemia characterized by an abnormally elevated Alveolar-arterial (A-a) gradient."
            },
            {
                question: "The central chemosensitive area of the brainstem responds primarily to changes in which molecule to drive respiratory rate?",
                options: {
                    A: "Oxygen (O2)",
                    B: "Bicarbonate (HCO3-)",
                    C: "Hydrogen ions (H+) from CO2",
                    D: "Nitric oxide (NO)",
                    E: "Carbon monoxide (CO)"
                },
                correctAnswer: "C",
                explanation: "The central chemosensitive area in the brainstem continuously monitors the composition of cerebrospinal fluid. Carbon dioxide diffuses freely across the blood-brain barrier and reacts with water to form carbonic acid, which dissociates. The resulting increase in hydrogen ions (H+) directly stimulates the central chemoreceptors to drive the respiratory rate."
            }
        ],
        "obstructive_lung_disease": [
            {
                question: "A 24-year-old woman presents with episodic bouts of breathlessness and wheeze. Which pathophysiological feature is the hallmark of her likely condition?",
                options: {
                    A: "Irreversible alveolar wall destruction",
                    B: "Reversible airway obstruction",
                    C: "Permanent dilation of the bronchi",
                    D: "Caseating granulomatous inflammation",
                    E: "Fibroblastic foci formation"
                },
                correctAnswer: "B",
                explanation: "Asthma is a chronic inflammatory disorder of the bronchial tree. It is classically defined by episodes of airway obstruction that are typically reversible. This reversible bronchoconstriction occurs in response to various environmental allergens or triggers."
            },
            {
                question: "A 67-year-old smoker presents with increasing breathlessness. Spirometry reveals an FEV1/FVC ratio of 0.65. Which of the following conditions is most likely?",
                options: {
                    A: "Pulmonary fibrosis",
                    B: "Sarcoidosis",
                    C: "Chronic Obstructive Pulmonary Disease (COPD)",
                    D: "Community acquired pneumonia",
                    E: "Pulmonary embolism"
                },
                correctAnswer: "C",
                explanation: "Chronic Obstructive Pulmonary Disease (COPD) is strongly associated with a significant history of cigarette smoking. The hallmark of this condition is an irreversible or partially reversible airflow obstruction. A post-bronchodilator FEV1/FVC ratio of less than 0.70 on spirometry confirms the presence of this obstructive defect."
            },
            {
                question: "A 27-year-old non-smoker presents with a 4-month history of wheezing. Fractional exhaled Nitric Oxide (FeNO) is elevated at 95 ppb. What is the best next step to confirm the diagnosis?",
                options: {
                    A: "Send for spirometry with bronchodilator reversibility testing",
                    B: "Start a salbutamol inhaler for as and when required",
                    C: "Request an urgent CT scan of the thorax",
                    D: "Prescribe a course of oral antibiotics",
                    E: "Arrange a transbronchial biopsy"
                },
                correctAnswer: "A",
                explanation: "A Fractional exhaled Nitric Oxide (FeNO) level of 95 ppb strongly suggests underlying eosinophilic airway inflammation. While this is highly indicative of an asthma diagnosis, further objective confirmation is necessary. The most appropriate next step is to arrange spirometry with bronchodilator reversibility testing to confirm variable airflow obstruction."
            },
            {
                question: "According to the GOLD 2024 classification, a COPD patient in Group E (2 or more moderate exacerbations leading to hospitalisation) should be started on which initial pharmacological therapy?",
                options: {
                    A: "Short-acting muscarinic antagonist (SAMA) only",
                    B: "Inhaled corticosteroid (ICS) monotherapy",
                    C: "LABA + LAMA combination inhaler",
                    D: "Oral theophylline",
                    E: "Long-term oral corticosteroids"
                },
                correctAnswer: "C",
                explanation: "The GOLD 2024 classification uses the ABE assessment tool to guide pharmacological management in COPD. Group E includes patients who suffer from two or more moderate exacerbations leading to hospitalisation. For these high-risk patients, the recommended initial therapy is a combination inhaler containing a LABA and a LAMA."
            },
            {
                question: "Which of the following is a characteristic microscopic sputum finding in a patient with bronchial asthma?",
                options: {
                    A: "Caseous necrosis",
                    B: "Curschmann spirals",
                    C: "Asbestos bodies",
                    D: "Fibrinoid necrosis",
                    E: "Russell bodies"
                },
                correctAnswer: "B",
                explanation: "The microscopic examination of sputum from an asthmatic patient often reveals distinct pathological hallmarks. These characteristic features are classically remembered as the \"Three Cs\" of asthma sputum. Among these, Curschmann spirals represent whorls of shed epithelium and condensed mucus formed within the obstructed airways."
            },
            {
                question: "Which genetic deficiency is a known predisposing factor for the early development of panacinar or panlobular emphysema?",
                options: {
                    A: "Cystic fibrosis transmembrane conductance regulator (CFTR) mutation",
                    B: "Alpha-1 antitrypsin deficiency",
                    C: "Surfactant protein C (SFTPC) polymorphism",
                    D: "Hypoxanthine-guanine phosphoribosyltransferase defect",
                    E: "Phenylalanine hydroxylase deficiency"
                },
                correctAnswer: "B",
                explanation: "The pathogenesis of emphysema typically involves a protease-antiprotease imbalance leading to alveolar wall destruction. A known genetic predisposing factor is the congenital deficiency of alpha-1 antitrypsin. This specific enzyme deficiency is classically associated with the development of panacinar emphysema, often affecting the lower lung lobes."
            },
            {
                question: "How is chronic bronchitis clinically defined?",
                options: {
                    A: "Reversible bronchoconstriction in response to stimuli",
                    B: "Permanent dilation of bronchi and bronchioles",
                    C: "Productive cough for at least 3 months for 2 consecutive years",
                    D: "Alveolar wall destruction and overinflation",
                    E: "Patchy consolidation of the lower lung lobes"
                },
                correctAnswer: "C",
                explanation: "Chronic bronchitis is fundamentally a clinical diagnosis rather than a purely pathological one. It is characterized by airway inflammation leading to a persistent, productive cough. Specifically, this is defined as a productive cough lasting for at least three months over two consecutive years."
            }
        ],
        "restrictive_lung_disease": [
            {
                question: "A 70-year-old man presents with a 6-month history of dry cough and exertional breathlessness. What pattern is expected on spirometry if he has Interstitial Lung Disease?",
                options: {
                    A: "Reduced FVC and FEV1/FVC ratio < 0.7",
                    B: "Reduced FVC and FEV1/FVC ratio > 0.8",
                    C: "Normal FVC and reduced FEV1",
                    D: "Increased FVC and FEV1/FVC ratio < 0.5",
                    E: "Normal FVC and normal FEV1/FVC ratio with isolated reduced TLCO"
                },
                correctAnswer: "B",
                explanation: "Interstitial lung diseases cause increased lung stiffness and decreased overall lung compliance. This physiological change restricts the lungs from expanding fully, resulting in a significantly reduced Forced Vital Capacity (FVC). Because both FEV1 and FVC are reduced proportionally, the FEV1/FVC ratio typically remains normal or even elevated above 0.8."
            },
            {
                question: "What is the typical High Resolution Computed Tomography (HRCT) 'UIP pattern' finding in Idiopathic Pulmonary Fibrosis (IPF)?",
                options: {
                    A: "Widespread ground-glass opacities sparing the bases",
                    B: "Subpleural honeycombing in a basal distribution",
                    C: "Bilateral hilar lymphadenopathy",
                    D: "Large cavitating upper lobe lesions",
                    E: "Patchy lobar consolidation with air bronchograms"
                },
                correctAnswer: "B",
                explanation: "Idiopathic Pulmonary Fibrosis (IPF) presents with a classic Usual Interstitial Pneumonia (UIP) pattern on high-resolution CT scans. This radiological pattern is hallmark for advanced fibrotic changes in the lung parenchyma. It is specifically characterized by subpleural honeycombing and reticular opacities that are predominantly distributed at the lung bases."
            },
            {
                question: "A 28-year-old woman presents with a dry cough, bilateral hilar lymphadenopathy on X-ray, and erythema nodosum. Biopsy shows non-caseating granulomas. What is the most likely diagnosis?",
                options: {
                    A: "Tuberculosis",
                    B: "Lung cancer",
                    C: "Sarcoidosis",
                    D: "Idiopathic pulmonary fibrosis",
                    E: "Pneumoconiosis"
                },
                correctAnswer: "C",
                explanation: "Sarcoidosis is a systemic disease characterized by the formation of non-caseating granulomas in affected organs. Patients frequently present with respiratory symptoms accompanied by bilateral hilar lymphadenopathy on imaging. The presence of erythema nodosum alongside these biopsy findings makes sarcoidosis the most likely diagnosis."
            },
            {
                question: "A 75-year-old man who previously worked cutting asbestos sheeting presents with breathlessness and dullness to percussion on the left side. What is the most likely spirometry finding?",
                options: {
                    A: "A normal FEV1 and increased FVC",
                    B: "A low FEV1 and increased FVC",
                    C: "A normal FEV1 and low FVC",
                    D: "A low FEV1 and low FVC (restrictive pattern)",
                    E: "An increased FEV1 and increased FVC"
                },
                correctAnswer: "D",
                explanation: "Occupational exposure to asbestos fibers can lead to widespread pleural thickening and pulmonary fibrosis. These fibrotic changes restrict lung expansion, creating a classic restrictive ventilatory defect. On spirometry, this manifests as a proportionally low FEV1 and a low FVC."
            },
            {
                question: "Which of the following medications is an antifibrotic agent currently used to slow disease progression in Idiopathic Pulmonary Fibrosis (IPF)?",
                options: {
                    A: "Amoxicillin",
                    B: "Pirfenidone",
                    C: "Salbutamol",
                    D: "Isoniazid",
                    E: "Montelukast"
                },
                correctAnswer: "B",
                explanation: "The pathogenesis of Idiopathic Pulmonary Fibrosis involves cycles of epithelial cell injury and dysregulated, fibrotic repair. Standard asthma or COPD medications are ineffective at halting this specific scarring process. Pirfenidone is an approved antifibrotic agent that slows disease progression by inhibiting these fibrotic pathways."
            },
            {
                question: "Idiopathic pulmonary fibrosis (IPF) belongs to a broader category of lung disorders. It is the most common form of which of the following?",
                options: {
                    A: "Obstructive ventilatory defects",
                    B: "Idiopathic interstitial pneumonias (IIPs)",
                    C: "Granulomatous lung diseases",
                    D: "Occupational pneumoconioses",
                    E: "Connective tissue diseases"
                },
                correctAnswer: "B",
                explanation: "Interstitial lung diseases encompass a wide, heterogeneous group of disorders affecting the lung parenchyma. Within this broad category, idiopathic pulmonary fibrosis (IPF) is classified under the idiopathic interstitial pneumonias (IIPs). It specifically corresponds to the pathologic pattern known as usual interstitial pneumonia (UIP)."
            }
        ],
        "infectious_lung_disease": [
            {
                question: "What is the most common bacterial pathogen causing Community-Acquired Pneumonia (CAP), accounting for up to 40% of cases?",
                options: {
                    A: "Staphylococcus aureus",
                    B: "Klebsiella pneumoniae",
                    C: "Streptococcus pneumoniae",
                    D: "Pseudomonas aeruginosa",
                    E: "Haemophilus influenzae"
                },
                correctAnswer: "C",
                explanation: "Community-acquired pneumonia (CAP) is a common lower respiratory tract infection with various potential causative organisms. However, a single bacterial species dominates the epidemiological profile of this disease. Streptococcus pneumoniae accounts for up to 40% of all CAP cases encountered in clinical practice."
            },
            {
                question: "A 20-year-old student presents with a dry, paroxysmal cough, headache, and myalgia. Sputum culture is negative for standard bacteria. Which of the following is the most likely atypical cause?",
                options: {
                    A: "Mycoplasma pneumoniae",
                    B: "Legionella pneumophila",
                    C: "Coxiella burnetii",
                    D: "Streptococcus pyogenes",
                    E: "Mycobacterium tuberculosis"
                },
                correctAnswer: "A",
                explanation: "Atypical pneumonias often present with constitutional symptoms like headache, myalgia, and a persistent dry cough. They are frequently caused by intracellular organisms that do not grow on standard bacterial cultures. Mycoplasma pneumoniae is the most common atypical cause, particularly prevalent among young adults and students."
            },
            {
                question: "During which pathological phase of lobar pneumonia is the lung solid, dry, and characterized by an intra-alveolar exudate rich in RBCs, neutrophils, and fibrin?",
                options: {
                    A: "Congestion",
                    B: "Red hepatization",
                    C: "Gray hepatization",
                    D: "Resolution",
                    E: "Organization"
                },
                correctAnswer: "B",
                explanation: "The pathological progression of lobar pneumonia occurs in four distinct inflammatory stages. The second stage is known as red hepatization, which typically occurs two to four days into the illness. During this phase, the lung becomes solid and dry due to an intra-alveolar exudate heavily rich in red blood cells, neutrophils, and fibrin."
            },
            {
                question: "A post-mortem specimen of a patient who died from suspected tuberculosis is examined. Which type of necrosis is most characteristic of TB infection?",
                options: {
                    A: "Coagulative necrosis",
                    B: "Liquefactive necrosis",
                    C: "Fibrinoid necrosis",
                    D: "Caseous necrosis",
                    E: "Fat necrosis"
                },
                correctAnswer: "D",
                explanation: "Infection with Mycobacterium tuberculosis triggers a specific, cell-mediated immune response in the host tissue. This robust immune reaction leads to the formation of specialized structures called granulomas. Within the center of these granulomas, a distinct form of cell death known as caseous necrosis characteristically occurs."
            },
            {
                question: "Which combination of drugs represents the standard initial 2-month intensive phase treatment for active, fully-sensitive pulmonary tuberculosis?",
                options: {
                    A: "Isoniazid and Rifampicin only",
                    B: "Amoxicillin, Clarithromycin, and Doxycycline",
                    C: "Isoniazid, Rifampicin, Pyrazinamide, and Ethambutol",
                    D: "Levofloxacin, Bedaquiline, and Linezolid",
                    E: "Ceftriaxone, Azithromycin, and Pyrazinamide"
                },
                correctAnswer: "C",
                explanation: "Active pulmonary tuberculosis requires a prolonged, multi-drug treatment regimen to ensure eradication and prevent resistance. The standard intensive phase typically lasts for the first two months of therapy. This initial phase utilizes a combination of four drugs, which are Isoniazid, Rifampicin, Pyrazinamide, and Ethambutol."
            },
            {
                question: "A 9-month-old child develops a cough, wheeze, and fever in November. What is the most likely viral pathogen causing this episode of bronchiolitis?",
                options: {
                    A: "Influenza A",
                    B: "Rhinovirus",
                    C: "Adenovirus",
                    D: "Respiratory syncytial virus (RSV)",
                    E: "Epstein-Barr virus (EBV)"
                },
                correctAnswer: "D",
                explanation: "Bronchiolitis is a common lower respiratory tract infection affecting infants, characterized by inflammation and mucus buildup in the bronchioles. It presents with symptoms such as fever, cough, and wheezing, often peaking in the winter months. Respiratory syncytial virus (RSV) is overwhelmingly the most common causative viral pathogen."
            },
            {
                question: "A 3-year-old child presents with a barking cough and stridor, indicative of laryngotracheobronchitis. What is the clinical name for this presentation?",
                options: {
                    A: "Epiglottitis",
                    B: "Bronchiolitis",
                    C: "Croup",
                    D: "Whooping cough",
                    E: "Pneumonia"
                },
                correctAnswer: "C",
                explanation: "Croup is an upper airway infection that frequently affects young children. The hallmark clinical signs include a distinctive barking cough and inspiratory stridor. The clinical and anatomical term for this condition is laryngotracheobronchitis, reflecting the swelling around the larynx, trachea, and bronchi."
            },
            {
                question: "Which scoring system is routinely used in primary and secondary care to assess mortality risk and guide hospital admission for a patient with Community-Acquired Pneumonia?",
                options: {
                    A: "Wells Score",
                    B: "Glasgow Coma Scale",
                    C: "CURB-65 / CRB-65",
                    D: "GOLD criteria",
                    E: "RAPID score"
                },
                correctAnswer: "C",
                explanation: "Assessing the severity of Community-Acquired Pneumonia (CAP) is critical for determining whether a patient needs hospital admission. The CURB-65 score is a widely validated clinical tool used for this exact risk stratification. It evaluates Confusion, Urea, Respiratory rate, Blood pressure, and age over 65 to predict mortality risk."
            }
        ],
        "pharmacology": [
            {
                question: "By which mechanism does salbutamol cause rapid bronchodilation during an acute asthma attack?",
                options: {
                    A: "Activation of Muscarinic (M3) receptors",
                    B: "Activation of Beta-2 adrenergic receptors",
                    C: "Inhibition of 5-lipoxygenase",
                    D: "Blockade of histamine H1 receptors",
                    E: "Inhibition of phosphodiesterase"
                },
                correctAnswer: "B",
                explanation: "Salbutamol is a short-acting bronchodilator frequently used as a reliever medication in acute asthma attacks. It functions by selectively binding to and activating Beta-2 adrenergic receptors located in the lungs. This targeted activation induces rapid relaxation of bronchial smooth muscle, thereby reversing acute bronchoconstriction."
            },
            {
                question: "Which of the following inhaled drugs acts as a competitive antagonist of endogenous acetylcholine at M3 receptors, relaxing bronchial smooth muscle?",
                options: {
                    A: "Salmeterol",
                    B: "Formoterol",
                    C: "Ipratropium bromide",
                    D: "Beclomethasone",
                    E: "Montelukast"
                },
                correctAnswer: "C",
                explanation: "Bronchial smooth muscle tone is heavily influenced by parasympathetic innervation via the vagus nerve. Acetylcholine binds to M3 muscarinic receptors to promote airway constriction and mucus secretion. Ipratropium bromide acts as a competitive antagonist at these M3 receptors, effectively blocking acetylcholine and promoting bronchodilation."
            },
            {
                question: "Montelukast is used as an add-on therapy in asthma management. What is its pharmacological class?",
                options: {
                    A: "Short-acting Beta-2 agonist (SABA)",
                    B: "Inhaled corticosteroid (ICS)",
                    C: "Long-acting muscarinic antagonist (LAMA)",
                    D: "Leukotriene receptor antagonist (LTRA)",
                    E: "Mast cell stabilizer"
                },
                correctAnswer: "D",
                explanation: "Leukotrienes are potent inflammatory mediators released from mast cells and eosinophils during an asthma attack. They powerfully drive bronchoconstriction, mucus production, and airway inflammation. Montelukast is a leukotriene receptor antagonist (LTRA) that blocks these effects and serves as an effective add-on maintenance therapy."
            },
            {
                question: "A patient with chronic asthma who is prescribed atenolol experiences shortness of breath and wheezing. What is the most likely mechanism explaining this adverse drug reaction?",
                options: {
                    A: "Idiosyncratic immunologically mediated hypersensitivity",
                    B: "Pharmacokinetic interaction altering metabolism",
                    C: "Predictable reaction made more likely by comorbidity (Beta-2 blockade)",
                    D: "Pharmacodynamic synergy with inhaled corticosteroids",
                    E: "Type IV delayed hypersensitivity"
                },
                correctAnswer: "C",
                explanation: "Beta-2 adrenergic receptors in the respiratory tract are crucial for maintaining bronchodilation. Beta-blockers, such as atenolol, can inadvertently antagonize these receptors, causing dangerous bronchoconstriction. In patients with a known comorbidity of chronic asthma, this represents a predictable and potentially severe adverse drug reaction."
            },
            {
                question: "Which of the following medications is a commonly prescribed low-dose inhaled corticosteroid (ICS) used as a regular preventer in asthma?",
                options: {
                    A: "Salbutamol",
                    B: "Tiotropium",
                    C: "Beclomethasone",
                    D: "Aminophylline",
                    E: "Ipratropium"
                },
                correctAnswer: "C",
                explanation: "The underlying pathophysiology of asthma involves chronic inflammation of the bronchial mucosa. Glucocorticosteroids effectively reduce this inflammation by altering immune cell recruitment and decreasing the release of inflammatory mediators. Beclomethasone is a commonly prescribed inhaled corticosteroid used regularly to prevent asthma exacerbations."
            },
            {
                question: "What is the agent of choice for providing immediate relief of bronchospasm in an acute asthma exacerbation?",
                options: {
                    A: "Inhaled fluticasone",
                    B: "Oral montelukast",
                    C: "Short-acting Beta-2 agonist (SABA)",
                    D: "Long-acting Beta-2 agonist (LABA)",
                    E: "Intravenous magnesium sulphate"
                },
                correctAnswer: "C",
                explanation: "During an acute asthma exacerbation, rapid reversal of bronchospasm is the most immediate clinical priority. Short-acting Beta-2 agonists (SABAs) provide swift and highly effective smooth muscle relaxation. Therefore, a SABA like salbutamol remains the primary pharmacological agent of choice for providing immediate symptom relief."
            }
        ],
        "pathology": [
            {
                question: "Microscopically, what characterizes the lung tissue in a patient with severe emphysema?",
                options: {
                    A: "Thickened basement membrane and eosinophil infiltration",
                    B: "Enlarged air spaces with incomplete, 'floating', club-shaped alveolar septa",
                    C: "Dense proliferations of fibroblasts and myofibroblasts",
                    D: "Caseating granulomas surrounded by lymphocytes",
                    E: "Alveoli filled with a neutrophil-rich exudate"
                },
                correctAnswer: "B",
                explanation: "Emphysema is defined by the destruction of alveolar walls and subsequent overinflation of the air spaces. Upon high-power microscopic examination, this destruction is clearly visible in the affected lung tissue. The defining histological features are vastly enlarged air spaces featuring incomplete, characteristic \"floating\" or club-shaped alveolar septa."
            },
            {
                question: "Which condition is defined pathologically as the permanent dilation of the bronchi and bronchioles caused by destruction of smooth muscle and supporting elastic tissue?",
                options: {
                    A: "Chronic bronchitis",
                    B: "Asthma",
                    C: "Bronchiectasis",
                    D: "Pneumothorax",
                    E: "Emphysema"
                },
                correctAnswer: "C",
                explanation: "Bronchiectasis is a debilitating condition that occurs secondary to persistent respiratory infections or airway obstructions. The chronic necrotizing inflammatory process severely damages the structural components of the airways. This results in the permanent dilation of the bronchi and bronchioles due to the destruction of smooth muscle and elastic tissue."
            },
            {
                question: "A patient develops a lung abscess following the aspiration of gastric contents. Which group of organisms is most commonly responsible for this pathology?",
                options: {
                    A: "Mycobacteria",
                    B: "Anaerobic bacteria (e.g., Prevotella, Fusobacterium)",
                    C: "Atypical bacteria (e.g., Mycoplasma)",
                    D: "Fungi (e.g., Aspergillus)",
                    E: "Viruses (e.g., Cytomegalovirus)"
                },
                correctAnswer: "B",
                explanation: "A lung abscess is a localized collection of pus within the lung parenchyma that often follows an aspiration event. The aspirated material frequently carries a heavy load of bacteria directly from the oropharynx. Consequently, anaerobic bacteria, such as Prevotella and Fusobacterium, are the most common causative organisms responsible for this destructive pathology."
            },
            {
                question: "Mr. Singh has a lung biopsy which demonstrates malignant epithelial cells with individual cell keratinisation. What sort of lung cancer does he have?",
                options: {
                    A: "Carcinoid tumour",
                    B: "Squamous cell carcinoma",
                    C: "Adenocarcinoma",
                    D: "Small cell carcinoma",
                    E: "Large cell carcinoma"
                },
                correctAnswer: "B",
                explanation: "Lung cancers are pathologically classified based on their cellular origin and distinct microscopic features. A biopsy demonstrating malignant epithelial cells strongly points toward a carcinoma rather than a neuroendocrine tumor. The specific presence of individual cell keratinisation is the definitive histological hallmark of a squamous cell carcinoma."
            }
        ],
        "clinical_presentations": [
            {
                question: "A 21-year-old smoker presents with acute right-sided pleuritic chest pain. The chest X-ray demonstrates a large right-sided pneumothorax. Which of the following are the most likely clinical examination findings?",
                options: {
                    A: "Reduced expansion and dullness to percussion on the right side",
                    B: "Reduced expansion and hyper-resonance to percussion on the left side",
                    C: "Bronchial breathing at the right base",
                    D: "Reduced expansion and hyper-resonance to percussion on the right side",
                    E: "Prolonged wheeze over the right lung"
                },
                correctAnswer: "D",
                explanation: "A pneumothorax occurs when air accumulates inappropriately within the pleural space. This trapped air physically compresses the underlying lung tissue and limits normal chest wall movement. Clinically, this manifests on the affected side as noticeably reduced chest expansion and a distinctly hyper-resonant note upon percussion."
            },
            {
                question: "A 67-year-old man has a pleural effusion. Pleural fluid analysis demonstrates a protein level divided by serum protein > 0.5, and a fluid LDH divided by serum LDH > 0.6. According to Light's criteria, how is this fluid classified?",
                options: {
                    A: "Transudate",
                    B: "Exudate",
                    C: "Chylothorax",
                    D: "Haemothorax",
                    E: "Empyema"
                },
                correctAnswer: "B",
                explanation: "Light's criteria are utilized to correctly classify pleural effusions as either transudative or exudative based on fluid analysis. An effusion is deemed an exudate if the pleural fluid to serum protein ratio is greater than 0.5. Additionally, an exudative classification is supported if the fluid LDH to serum LDH ratio exceeds 0.6."
            },
            {
                question: "A patient presents to the emergency department. Arterial blood gas shows a PaO2 of 5.8 kPa and a PaCO2 of 3.9 kPa. What is the most accurate classification of this respiratory state?",
                options: {
                    A: "Type 1 (Hypoxaemic) Respiratory Failure",
                    B: "Type 2 (Hypercapnic) Respiratory Failure",
                    C: "Metabolic acidosis with respiratory compensation",
                    D: "Normal baseline for a COPD patient",
                    E: "Acute hyperventilation syndrome"
                },
                correctAnswer: "A",
                explanation: "Respiratory failure is broadly categorized into two types based on arterial blood gas findings. Type 1 respiratory failure is fundamentally characterized by dangerous hypoxaemia where the PaO2 drops below 8 kPa. Because alveolar ventilation is generally maintained or increased, the PaCO2 level typically remains normal or falls below normal limits."
            },
            {
                question: "Longstanding chronic bronchitis and COPD can lead to pulmonary hypertension and subsequent right-sided heart failure. What is the medical term for this cardiac complication?",
                options: {
                    A: "Left ventricular hypertrophy",
                    B: "Cor pulmonale",
                    C: "Cardiac tamponade",
                    D: "Restrictive cardiomyopathy",
                    E: "Aortic stenosis"
                },
                correctAnswer: "B",
                explanation: "Long-standing respiratory conditions like COPD frequently cause chronic hypoxia within the pulmonary circulation. This hypoxia induces widespread pulmonary arterial vasoconstriction, which eventually leads to severe pulmonary hypertension. The resulting increased workload on the right ventricle can precipitate a specific form of right-sided heart failure known as cor pulmonale."
            },
            {
                question: "On a chest X-ray, the elimination of the normal lung/soft tissue interface caused by the loss of normal lung aeration (such as in consolidation) is known as what radiological sign?",
                options: {
                    A: "Air bronchogram sign",
                    B: "Sail sign",
                    C: "Bat's wing sign",
                    D: "Silhouette sign",
                    E: "Kerley B lines"
                },
                correctAnswer: "D",
                explanation: "Interpreting an abnormal chest X-ray relies on identifying the borders between different tissues of varying densities. Normally, the air-filled lung creates a sharp interface against adjacent soft tissues like the heart border. The pathological elimination of this normal interface, often caused by fluid or consolidation, is radiologically termed the silhouette sign."
            }
        ]
    },

        nephrology: [
        {
            question: "Which of the followign will present with decreased serum complement?",
            options: {
                A: "Membranous nephropathy",
                B: "Diabetic nephropathy",
                C: "Minimal change disease",
                D: "Focal segmental glomerulonephropathy",
                E: "All of the above"
            },
            correctAnswer: "A"
        },
        {
            question: "Which of the following is true about nephritic syndromes?",
            options: {
                A: "Membranous nephropathy",
                B: "Diabetic nephropathy",
                C: "Minimal change disease",
                D: "Focal segmental glomerulonephropathy",
                E: "They all invlove immune complex deposition"
            },
            correctAnswer: "E"
        }
        ],

        musculoskeletal: {
"Physiology": [
    {
        question: "Which nerve root primarily innervates the deltoid muscle?",
        options: {
            A: "C4",
            B: "C5",
            C: "C6",
            D: "C7",
            E: "C8"
        },
        correctAnswer: "B",
        explanation: "The deltoid is innervated by the axillary nerve (C5, C6), with C5 being the primary root. It originates from the lateral third of the clavicle, acromion, and spine of the scapula, and inserts into the deltoid tuberosity of the humerus. Its primary action is abduction of the shoulder (beyond the first 15° initiated by supraspinatus)."
    },
    {
        question: "A patient cannot flex their elbow against resistance. Which nerve root is most likely affected?",
        options: {
            A: "C4",
            B: "C5",
            C: "C6",
            D: "C7",
            E: "T1"
        },
        correctAnswer: "C",
        explanation: "Elbow flexion is primarily a C5–C6 action, but C6 is the dominant root tested by the biceps reflex and flexion against resistance. Biceps brachii originates from the supraglenoid tubercle (long head) and coracoid process (short head), inserts into the radial tuberosity, and is innervated by the musculocutaneous nerve (C5–C6)."
    },
    {
        question: "The brachioradialis muscle is tested by asking the patient to flex the forearm with the forearm in mid-pronation. Which nerve innervates this muscle?",
        options: {
            A: "Musculocutaneous nerve",
            B: "Median nerve",
            C: "Ulnar nerve",
            D: "Radial nerve",
            E: "Axillary nerve"
        },
        correctAnswer: "D",
        explanation: "Brachioradialis is innervated by the radial nerve (C5–C6). It is notable as the only forearm flexor innervated by the radial nerve (which otherwise innervates extensors). It originates from the lateral supracondylar ridge of the humerus and inserts into the styloid process of the radius."
    },
    {
        question: "Which muscle is the primary wrist extensor tested at the C7 root level?",
        options: {
            A: "Flexor carpi radialis",
            B: "Extensor carpi ulnaris",
            C: "Extensor carpi radialis longus",
            D: "Palmaris longus",
            E: "Extensor digitorum"
        },
        correctAnswer: "C",
        explanation: "Extensor carpi radialis longus (ECRL) is innervated by the radial nerve (C6–C7) and is the primary wrist extensor tested at the C7 level. It originates from the lateral supracondylar ridge and inserts into the base of the 2nd metacarpal. The C7 root is classically tested by wrist extension against resistance."
    },
    {
        question: "A patient presents with weakness of finger extension and wrist drop. Which nerve is most likely injured?",
        options: {
            A: "Median nerve",
            B: "Ulnar nerve",
            C: "Radial nerve",
            D: "Axillary nerve",
            E: "Musculocutaneous nerve"
        },
        correctAnswer: "C",
        explanation: "Wrist drop with finger extension weakness is the classic presentation of radial nerve injury (C7–C8). The posterior interosseous nerve (deep branch of the radial nerve) innervates extensor digitorum, extensor digiti minimi, and extensor carpi ulnaris. Origin: lateral epicondyle region; insertion: extensor expansions of digits 2–5."
    },
    {
        question: "Which muscle abducts the little finger and is used to test the ulnar nerve at T1?",
        options: {
            A: "Opponens digiti minimi",
            B: "Flexor digiti minimi",
            C: "Abductor digiti minimi",
            D: "Palmar interosseous",
            E: "Dorsal interosseous"
        },
        correctAnswer: "C",
        explanation: "Abductor digiti minimi is innervated by the deep branch of the ulnar nerve (C8–T1) and is the standard muscle used to test ulnar nerve/T1 function clinically. It originates from the pisiform and inserts into the medial base of the proximal phalanx of the little finger."
    },
    {
        question: "The opponens pollicis is a key muscle for testing the median nerve. Which nerve root primarily supplies it?",
        options: {
            A: "C6",
            B: "C7",
            C: "C8",
            D: "T1",
            E: "C5"
        },
        correctAnswer: "D",
        explanation: "Opponens pollicis is innervated by the recurrent branch of the median nerve (C8–T1), with T1 being the dominant root. It originates from the flexor retinaculum and trapezium tubercle, inserts into the radial aspect of the 1st metacarpal, and performs opposition of the thumb — bringing it across the palm to meet the other digits."
    },
    {
        question: "Which of the following muscles is NOT innervated by the musculocutaneous nerve?",
        options: {
            A: "Biceps brachii",
            B: "Brachialis",
            C: "Coracobrachialis",
            D: "Brachioradialis",
            E: "All of the above are innervated by the musculocutaneous nerve"
        },
        correctAnswer: "D",
        explanation: "Brachioradialis is innervated by the radial nerve (C5–C6), not the musculocutaneous nerve. The musculocutaneous nerve (C5–C7) supplies biceps brachii, brachialis, and coracobrachialis — all anterior compartment muscles of the arm. This distinction is commonly tested because brachioradialis flexes the elbow but arises from the lateral epicondyle region."
    },
    {
        question: "A patient cannot extend the hip against gravity. Which nerve root is most likely impaired?",
        options: {
            A: "L2",
            B: "L3",
            C: "L4",
            D: "L5",
            E: "S1"
        },
        correctAnswer: "E",
        explanation: "Hip extension is primarily an S1 (and S2) function mediated by the gluteus maximus, which is innervated by the inferior gluteal nerve (L5–S2). The primary root for the ankle jerk and hip extension is S1. Gluteus maximus originates from the posterior ilium, sacrum, and coccyx, inserting into the gluteal tuberosity and iliotibial tract."
    },
    {
        question: "Which root level is primarily responsible for knee extension, and what is the key muscle tested?",
        options: {
            A: "L2 — iliopsoas",
            B: "L3 — rectus femoris",
            C: "L4 — quadriceps femoris (knee jerk reflex)",
            D: "L5 — tibialis anterior",
            E: "S1 — gastrocnemius"
        },
        correctAnswer: "C",
        explanation: "Knee extension and the patellar tendon (knee jerk) reflex are primarily L3–L4, with L4 being the dominant root. Quadriceps femoris (rectus femoris, vastus medialis, lateralis, intermedius) is innervated by the femoral nerve (L2–L4). The muscles originate from the pelvis/anterior femur and insert via the patellar tendon into the tibial tuberosity."
    },
    {
        question: "Tibialis anterior is tested by asking the patient to dorsiflex the foot. Which nerve and root supplies this muscle?",
        options: {
            A: "Superficial peroneal nerve, L5–S1",
            B: "Deep peroneal nerve, L4–L5",
            C: "Tibial nerve, L4–L5",
            D: "Sural nerve, S1–S2",
            E: "Saphenous nerve, L3–L4"
        },
        correctAnswer: "B",
        explanation: "Tibialis anterior is innervated by the deep peroneal (fibular) nerve (L4–L5). It originates from the lateral tibia and interosseous membrane, inserts into the medial cuneiform and base of the 1st metatarsal, and performs dorsiflexion and inversion of the foot. It is the primary muscle for testing the L4 root."
    },
    {
        question: "Extensor hallucis longus (EHL) is the clinical marker for which nerve root?",
        options: {
            A: "L3",
            B: "L4",
            C: "L5",
            D: "S1",
            E: "S2"
        },
        correctAnswer: "C",
        explanation: "EHL extension (great toe extension) is the classic test for the L5 root. EHL is innervated by the deep peroneal nerve (L4–L5, predominantly L5). It originates from the middle fibula and interosseous membrane, and inserts into the distal phalanx of the hallux. Weakness here is a key sign in L5 disc prolapse (L4/5 disc)."
    },
    {
        question: "The ankle jerk reflex is mediated by which root and muscle?",
        options: {
            A: "L4 — tibialis anterior",
            B: "L5 — extensor hallucis longus",
            C: "S1 — gastrocnemius/soleus",
            D: "S2 — flexor hallucis longus",
            E: "L3 — quadriceps"
        },
        correctAnswer: "C",
        explanation: "The ankle jerk (Achilles) reflex is an S1 (and S2) reflex mediated by gastrocnemius and soleus (the triceps surae), both innervated by the tibial nerve (S1–S2). Gastrocnemius originates from the femoral condyles; soleus from the posterior tibia/fibula. Both insert via the Achilles tendon into the calcaneus, performing plantarflexion."
    },
    {
        question: "Which nerve innervates the supraspinatus and infraspinatus muscles?",
        options: {
            A: "Axillary nerve",
            B: "Long thoracic nerve",
            C: "Suprascapular nerve",
            D: "Thoracodorsal nerve",
            E: "Subscapular nerve"
        },
        correctAnswer: "C",
        explanation: "Both supraspinatus and infraspinatus are innervated by the suprascapular nerve (C5–C6). Supraspinatus (origin: supraspinous fossa; insertion: greater tubercle) initiates shoulder abduction (0–15°). Infraspinatus (origin: infraspinous fossa; insertion: greater tubercle) externally rotates the shoulder. Both are key rotator cuff muscles."
    },
    {
        question: "Winging of the scapula on arm elevation most likely indicates injury to which nerve?",
        options: {
            A: "Suprascapular nerve",
            B: "Long thoracic nerve",
            C: "Axillary nerve",
            D: "Dorsal scapular nerve",
            E: "Spinal accessory nerve"
        },
        correctAnswer: "B",
        explanation: "Serratus anterior (innervated by the long thoracic nerve, C5–C7) holds the scapula against the thoracic wall. Injury produces medial 'winging' visible when pushing against a wall. Serratus anterior originates from the lateral surfaces of ribs 1–8 and inserts into the costal (medial) border of the scapula."
    },
    {
        question: "Which muscle internally rotates the humerus and is innervated by the lower subscapular nerve?",
        options: {
            A: "Subscapularis",
            B: "Teres minor",
            C: "Infraspinatus",
            D: "Teres major",
            E: "Pectoralis major"
        },
        correctAnswer: "A",
        explanation: "Subscapularis is innervated by the upper (C5–C6) and lower (C5–C6) subscapular nerves, arising from the posterior cord. It originates from the subscapular fossa and inserts into the lesser tubercle of the humerus, performing internal rotation and adduction of the shoulder. It is the only rotator cuff muscle that internally rotates."
    },
    {
        question: "A patient has weakness of shoulder abduction and lateral rotation, with loss of sensation over the regimental badge area. Which nerve is injured?",
        options: {
            A: "Musculocutaneous nerve",
            B: "Suprascapular nerve",
            C: "Axillary nerve",
            D: "Radial nerve",
            E: "Long thoracic nerve"
        },
        correctAnswer: "C",
        explanation: "The axillary nerve (C5–C6) innervates deltoid (abduction) and teres minor (lateral rotation). Its cutaneous branch supplies the 'regimental badge' area over the lateral deltoid. It passes through the quadrangular space and is commonly injured in anterior shoulder dislocations or proximal humeral fractures."
    },
    {
        question: "The rhomboids are tested by asking the patient to brace their shoulders back. Which nerve innervates them?",
        options: {
            A: "Long thoracic nerve (C5–C7)",
            B: "Dorsal scapular nerve (C4–C5)",
            C: "Accessory nerve (CN XI)",
            D: "Suprascapular nerve (C5–C6)",
            E: "Lateral pectoral nerve (C5–C7)"
        },
        correctAnswer: "B",
        explanation: "Rhomboid major and minor are innervated by the dorsal scapular nerve (C4–C5). They originate from the spinous processes of C7–T5 and insert into the medial border of the scapula. Their action is retraction and elevation of the scapula. The dorsal scapular nerve also innervates levator scapulae."
    },
    {
        question: "Which root level and nerve innervates the latissimus dorsi?",
        options: {
            A: "C5–C6, suprascapular nerve",
            B: "C6–C8, thoracodorsal nerve",
            C: "C7–T1, medial pectoral nerve",
            D: "C5–C7, axillary nerve",
            E: "C8–T1, long thoracic nerve"
        },
        correctAnswer: "B",
        explanation: "Latissimus dorsi is innervated by the thoracodorsal nerve (C6–C8), arising from the posterior cord of the brachial plexus. It originates from the spinous processes of T7–L5, iliac crest, and lower ribs, inserting into the intertubercular groove of the humerus. Its primary actions are extension, adduction, and medial rotation of the humerus."
    },
    {
        question: "The 'prayer sign' and inability to make an 'OK' sign suggest weakness of which muscle group?",
        options: {
            A: "Ulnar nerve intrinsics (interossei)",
            B: "Radial nerve extensors",
            C: "Median nerve — flexor pollicis longus and flexor digitorum profundus to index finger (anterior interosseous nerve)",
            D: "Musculocutaneous nerve — biceps and brachialis",
            E: "Axillary nerve — deltoid and teres minor"
        },
        correctAnswer: "C",
        explanation: "Inability to make an 'OK' sign (with a pinch deformity) indicates anterior interosseous nerve syndrome — a branch of the median nerve supplying flexor pollicis longus, pronator quadratus, and FDP to digits 2–3. The 'prayer sign' (inability to appose fingers flat) is a classical finding. These muscles originate from the anterior radius/ulna and interosseous membrane."
    },
    {
        question: "Which muscle is responsible for pronation of the forearm and is tested to assess the C8 root?",
        options: {
            A: "Supinator",
            B: "Pronator teres",
            C: "Pronator quadratus",
            D: "Flexor digitorum profundus",
            E: "Flexor carpi ulnaris"
        },
        correctAnswer: "C",
        explanation: "Pronator quadratus (median nerve, C8–T1) is the primary pronator and is used to assess C8 root integrity. It originates from the anterior distal ulna and inserts into the anterior distal radius. Pronator teres (C6–C7) also pronates but is a C6/C7 marker. Paralysis of pronator quadratus leaves a weak pronation, especially against resistance."
    },
    {
        question: "The interossei muscles are tested by asking the patient to abduct and adduct fingers. Which nerve supplies all dorsal and palmar interossei?",
        options: {
            A: "Median nerve",
            B: "Radial nerve",
            C: "Ulnar nerve",
            D: "Musculocutaneous nerve",
            E: "Median and ulnar nerves equally"
        },
        correctAnswer: "C",
        explanation: "All seven interossei (4 dorsal + 3 palmar) are innervated by the deep branch of the ulnar nerve (C8–T1). Dorsal interossei abduct (DAB) and palmar interossei adduct (PAD). They originate from the metacarpal shafts and insert into the bases of the proximal phalanges and extensor expansions. Wasting of the dorsal web spaces is a key sign of ulnar nerve palsy."
    },
    {
        question: "Which myotome does the biceps reflex primarily test?",
        options: {
            A: "C4",
            B: "C5",
            C: "C6",
            D: "C7",
            E: "C8"
        },
        correctAnswer: "B",
        explanation: "The biceps jerk primarily tests the C5 (and C6) root via the musculocutaneous nerve. The reflex arc involves biceps brachii. In clinical practice, C5 is the dominant root for this reflex, and loss of the biceps jerk with maintained brachioradialis jerk points to a C5 lesion."
    },
    {
        question: "Which myotome does the supinator (brachioradialis) jerk primarily test?",
        options: {
            A: "C4",
            B: "C5",
            C: "C6",
            D: "C7",
            E: "C8"
        },
        correctAnswer: "C",
        explanation: "The supinator (brachioradialis) jerk tests the C6 root via the radial nerve. Tapping the radial styloid elicits a reflex via brachioradialis. An inverted supinator jerk (finger flexion without brachioradialis contraction) suggests a lesion at C6 with an intact C7–C8."
    },
    {
        question: "Which myotome does the triceps jerk primarily test?",
        options: {
            A: "C5",
            B: "C6",
            C: "C7",
            D: "C8",
            E: "T1"
        },
        correctAnswer: "C",
        explanation: "The triceps jerk tests the C7 root (and C6) via the radial nerve. Triceps brachii (long, medial, and lateral heads) originates from the infraglenoid tubercle and posterior humerus, inserting into the olecranon. Its primary action is elbow extension. Loss of the triceps jerk is a key sign in C7 disc prolapse (C6/7 level)."
    },
    {
        question: "Iliopsoas is the primary hip flexor. Which nerve and roots supply it?",
        options: {
            A: "Femoral nerve (L1–L3)",
            B: "Obturator nerve (L2–L4)",
            C: "Femoral nerve for iliacus (L2–L3) and direct lumbar branches for psoas (L1–L4)",
            D: "Superior gluteal nerve (L4–S1)",
            E: "Inferior gluteal nerve (L5–S2)"
        },
        correctAnswer: "C",
        explanation: "Iliopsoas has two components: iliacus (innervated by the femoral nerve, L2–L3) and psoas major (innervated by direct branches of the lumbar plexus, L1–L4). Iliacus originates from the iliac fossa; psoas from the lumbar vertebral bodies. Both insert into the lesser trochanter of the femur. Hip flexion weakness is an L2–L3 clinical marker."
    },
    {
        question: "Which muscle adducts the hip and is innervated by the obturator nerve (L2–L4)?",
        options: {
            A: "Gluteus medius",
            B: "Tensor fasciae latae",
            C: "Adductor longus",
            D: "Piriformis",
            E: "Sartorius"
        },
        correctAnswer: "C",
        explanation: "Adductor longus is one of the primary hip adductors innervated by the obturator nerve (L2–L4). It originates from the pubic body and inserts into the linea aspera of the femur. Other obturator-innervated adductors include adductor brevis, adductor magnus (in part), gracilis, and pectineus (partially)."
    },
    {
        question: "Gluteus medius and minimus abduct the hip. Which nerve innervates them and at which roots?",
        options: {
            A: "Inferior gluteal nerve (L5–S2)",
            B: "Superior gluteal nerve (L4–S1)",
            C: "Obturator nerve (L2–L4)",
            D: "Sciatic nerve (L4–S3)",
            E: "Femoral nerve (L2–L4)"
        },
        correctAnswer: "B",
        explanation: "Gluteus medius and minimus are innervated by the superior gluteal nerve (L4–S1). They originate from the outer ilium and insert into the greater trochanter. Their primary function is hip abduction and medial rotation, and they stabilise the pelvis during walking (Trendelenburg sign when weak). Tensor fasciae latae is also innervated by the superior gluteal nerve."
    },
    {
        question: "Sartorius is the longest muscle in the body and performs hip flexion, abduction, and lateral rotation plus knee flexion. Which nerve innervates it?",
        options: {
            A: "Obturator nerve",
            B: "Lateral femoral cutaneous nerve",
            C: "Femoral nerve",
            D: "Sciatic nerve",
            E: "Superior gluteal nerve"
        },
        correctAnswer: "C",
        explanation: "Sartorius is innervated by the femoral nerve (L2–L3). It originates from the anterior superior iliac spine (ASIS) and inserts into the pes anserinus (medial proximal tibia). It is the only muscle that crosses both the hip and knee producing the cross-legged ('tailor's') position and forms the lateral border of the femoral triangle."
    },
    {
        question: "The hamstrings (biceps femoris long head, semimembranosus, semitendinosus) are innervated by which nerve?",
        options: {
            A: "Femoral nerve",
            B: "Obturator nerve",
            C: "Tibial division of the sciatic nerve",
            D: "Common peroneal division of the sciatic nerve",
            E: "Superior gluteal nerve"
        },
        correctAnswer: "C",
        explanation: "The hamstrings are predominantly innervated by the tibial division of the sciatic nerve (L5–S2). Biceps femoris short head is the exception — it is innervated by the common peroneal division (L5–S2). The hamstrings originate from the ischial tuberosity (long head of biceps from here; short head from the linea aspera) and insert below the knee, performing hip extension and knee flexion."
    },
    {
        question: "Which muscle is the main plantarflexor and is used to test the S1 root clinically (e.g., standing on tiptoe)?",
        options: {
            A: "Tibialis posterior",
            B: "Peroneus longus",
            C: "Gastrocnemius",
            D: "Extensor hallucis longus",
            E: "Tibialis anterior"
        },
        correctAnswer: "C",
        explanation: "Gastrocnemius (with soleus) is the primary plantarflexor, innervated by the tibial nerve (S1–S2). Gastrocnemius originates from the posterior femoral condyles; soleus from the posterior tibia and fibula. Both insert via the Achilles tendon into the calcaneus. Standing on tiptoe is the classic clinical test for S1 and the Achilles reflex (ankle jerk)."
    },
    {
        question: "Foot drop (inability to dorsiflex and evert the foot) most commonly results from injury to which nerve?",
        options: {
            A: "Tibial nerve",
            B: "Sural nerve",
            C: "Common peroneal nerve",
            D: "Obturator nerve",
            E: "Superior gluteal nerve"
        },
        correctAnswer: "C",
        explanation: "The common peroneal (fibular) nerve divides into the deep peroneal nerve (dorsiflexion via tibialis anterior) and superficial peroneal nerve (eversion via peroneus longus and brevis). Injury — commonly at the fibular neck — results in foot drop with loss of dorsiflexion and eversion. Walking produces a high-stepping, slapping gait."
    },
    {
        question: "Peroneus (fibularis) longus and brevis evert the foot. Which nerve innervates them?",
        options: {
            A: "Deep peroneal nerve (L4–L5)",
            B: "Superficial peroneal nerve (L5–S1)",
            C: "Tibial nerve (S1–S2)",
            D: "Sural nerve (S1–S2)",
            E: "Saphenous nerve (L3–L4)"
        },
        correctAnswer: "B",
        explanation: "Peroneus longus and brevis are innervated by the superficial peroneal nerve (L5–S1). Peroneus longus originates from the lateral fibula and inserts on the medial cuneiform and 1st metatarsal base (supporting the transverse arch). Peroneus brevis originates from the lower fibula and inserts on the 5th metatarsal base. Both evert and plantarflex the foot."
    },
    {
        question: "Tibialis posterior inverts and plantarflexes the foot. Which nerve innervates it?",
        options: {
            A: "Deep peroneal nerve",
            B: "Superficial peroneal nerve",
            C: "Tibial nerve",
            D: "Sural nerve",
            E: "Saphenous nerve"
        },
        correctAnswer: "C",
        explanation: "Tibialis posterior is innervated by the tibial nerve (L4–L5). It originates from the posterior tibia, fibula, and interosseous membrane, passes behind the medial malleolus, and inserts into the navicular with slips to the cuneiforms and metatarsals. It is the primary invertor of the foot and supports the medial longitudinal arch. Dysfunction causes a flat foot."
    },
    {
        question: "Flexor hallucis longus flexes the great toe and assists plantarflexion. Which nerve innervates it?",
        options: {
            A: "Deep peroneal nerve (L5)",
            B: "Tibial nerve (S2–S3)",
            C: "Superficial peroneal nerve (L5–S1)",
            D: "Sural nerve (S1–S2)",
            E: "Medial plantar nerve (L4–L5)"
        },
        correctAnswer: "B",
        explanation: "Flexor hallucis longus (FHL) is innervated by the tibial nerve (S2–S3). It originates from the posterior fibula and inserts into the distal phalanx of the hallux. It is a key plantarflexor during the propulsive phase of gait ('toe-off'). In dancers, FHL tendinopathy is common. It also stabilises the medial longitudinal arch."
    },
    {
        question: "Which nerve innervates the intrinsic muscles of the foot (lumbrical and interossei) via its deep branch?",
        options: {
            A: "Medial plantar nerve",
            B: "Lateral plantar nerve",
            C: "Sural nerve",
            D: "Deep peroneal nerve",
            E: "Saphenous nerve"
        },
        correctAnswer: "B",
        explanation: "The lateral plantar nerve (S1–S3), the larger terminal branch of the tibial nerve, supplies the majority of intrinsic foot muscles via its deep branch, including the interossei, lateral three lumbricals, adductor hallucis, and flexor digiti minimi. The medial plantar nerve supplies abductor hallucis, flexor hallucis brevis, flexor digitorum brevis, and the first lumbrical."
    },
    {
        question: "A patient cannot shrug their shoulders on one side and has wasting of the trapezius. Which nerve is damaged?",
        options: {
            A: "Dorsal scapular nerve (C4–C5)",
            B: "Long thoracic nerve (C5–C7)",
            C: "Spinal accessory nerve (CN XI)",
            D: "Phrenic nerve (C3–C5)",
            E: "Suprascapular nerve (C5–C6)"
        },
        correctAnswer: "C",
        explanation: "Trapezius is innervated by the spinal accessory nerve (CN XI) with proprioceptive input from C3–C4. Upper trapezius elevates (shrugs) the shoulder; middle and lower trapezius retract and depress the scapula. Origin: occipital bone, nuchal ligament, spinous processes C7–T12; insertion: clavicle, acromion, and scapular spine. Damage causes drooping of the shoulder and lateral winging."
    },
    {
        question: "Sternocleidomastoid (SCM) contraction turns the head to the contralateral side. Which nerve innervates it?",
        options: {
            A: "Facial nerve (CN VII)",
            B: "Hypoglossal nerve (CN XII)",
            C: "Spinal accessory nerve (CN XI)",
            D: "Vagus nerve (CN X)",
            E: "Ansa cervicalis (C1–C3)"
        },
        correctAnswer: "C",
        explanation: "SCM is innervated by the spinal accessory nerve (CN XI) with proprioceptive C2–C3 input. Origin: sternal head from the manubrium, clavicular head from the medial clavicle; insertion: mastoid process and superior nuchal line. Bilateral contraction flexes the neck; unilateral contraction rotates the head contralaterally and tilts it ipsilaterally (torticollis when contracted)."
    },
    {
        question: "Pectoralis major performs adduction and medial rotation of the humerus. Which nerves innervate it?",
        options: {
            A: "Lateral pectoral nerve only (C5–C7)",
            B: "Medial pectoral nerve only (C8–T1)",
            C: "Both lateral (C5–C7) and medial (C8–T1) pectoral nerves",
            D: "Thoracodorsal nerve (C6–C8)",
            E: "Long thoracic nerve (C5–C7)"
        },
        correctAnswer: "C",
        explanation: "Pectoralis major is innervated by both the lateral pectoral nerve (C5–C7, supplying the clavicular head) and the medial pectoral nerve (C8–T1, supplying the sternocostal head). Origin: medial clavicle, sternum, and costal cartilages 1–6; insertion: lateral lip of the intertubercular groove. Its actions include adduction, medial rotation, and flexion (clavicular head) of the humerus."
    },
    {
        question: "The quadriceps femoris consists of four muscles. Which component also crosses the hip joint?",
        options: {
            A: "Vastus medialis",
            B: "Vastus lateralis",
            C: "Vastus intermedius",
            D: "Rectus femoris",
            E: "All four cross the hip joint"
        },
        correctAnswer: "D",
        explanation: "Only rectus femoris crosses the hip joint (originating from the anterior inferior iliac spine — AIIS), making it a hip flexor in addition to a knee extensor. The three vasti originate from the femoral shaft only. All four insert via the quadriceps tendon into the patella and then the tibial tuberosity via the patellar tendon. All are innervated by the femoral nerve (L2–L4)."
    },
    {
        question: "Which muscle abducts and laterally rotates the arm and is part of the rotator cuff?",
        options: {
            A: "Subscapularis",
            B: "Supraspinatus",
            C: "Teres major",
            D: "Teres minor",
            E: "Coracobrachialis"
        },
        correctAnswer: "D",
        explanation: "Teres minor is a rotator cuff muscle that laterally rotates and adducts the arm. It is innervated by the axillary nerve (C5–C6). Origin: lateral border of the scapula; insertion: inferior facet of the greater tubercle of the humerus. It is one of the four rotator cuff muscles (SITS: supraspinatus, infraspinatus, teres minor, subscapularis)."
    },
    {
        question: "The piriformis muscle is a key external rotator of the hip. Which nerve innervates it and where does it exit the pelvis?",
        options: {
            A: "Obturator nerve; exits through obturator foramen",
            B: "Inferior gluteal nerve; exits through lesser sciatic foramen",
            C: "Nerve to piriformis (S1–S2); exits through greater sciatic foramen above piriformis",
            D: "Superior gluteal nerve; exits through greater sciatic foramen below piriformis",
            E: "Sciatic nerve; runs through the belly of piriformis"
        },
        correctAnswer: "C",
        explanation: "Piriformis is innervated by the nerve to piriformis (S1–S2 ventral rami). It originates from the anterior sacrum and exits the greater sciatic foramen above the piriformis tendon, inserting into the superior aspect of the greater trochanter. It laterally rotates and abducts the flexed hip, and acts as an abductor in extension. Piriformis syndrome may compress the sciatic nerve."
    },
    {
        question: "The obturator internus and gemelli muscles are deep hip external rotators. Which nerve innervates them?",
        options: {
            A: "Obturator nerve (L2–L4)",
            B: "Nerve to obturator internus (L5–S2)",
            C: "Nerve to quadratus femoris (L4–S1)",
            D: "Inferior gluteal nerve (L5–S2)",
            E: "Superior gluteal nerve (L4–S1)"
        },
        correctAnswer: "B",
        explanation: "Obturator internus and the two gemelli (superior and inferior) form a functional unit innervated by the nerve to obturator internus (L5–S2). Obturator internus originates from the internal surface of the obturator membrane and exits through the lesser sciatic foramen, inserting into the medial greater trochanter. All deep external rotators of the hip are innervated by branches of the sacral plexus."
    },
    {
        question: "Which muscle flexes and medially rotates the knee, as well as flexing the hip, and is part of the pes anserinus?",
        options: {
            A: "Biceps femoris",
            B: "Semitendinosus",
            C: "Gracilis",
            D: "Sartorius",
            E: "Semimembranosus"
        },
        correctAnswer: "C",
        explanation: "Gracilis is innervated by the obturator nerve (L2–L3). It originates from the inferior pubic ramus and inserts into the pes anserinus (medial proximal tibia, alongside semitendinosus and sartorius). It adducts the hip, flexes the knee, and medially rotates the knee when flexed. It is commonly harvested as a tendon graft in ligament reconstruction surgery."
    },
    {
        question: "Popliteus unlocks the knee from full extension. Which nerve and root innervates it?",
        options: {
            A: "Common peroneal nerve (L4–L5)",
            B: "Tibial nerve (L4–S1)",
            C: "Sural nerve (S1–S2)",
            D: "Femoral nerve (L2–L4)",
            E: "Obturator nerve (L2–L4)"
        },
        correctAnswer: "B",
        explanation: "Popliteus is innervated by the tibial nerve (L4–S1). It originates from the lateral femoral condyle and the lateral meniscus, inserting into the posterior tibia. By rotating the femur laterally on the fixed tibia, it 'unlocks' the knee from full extension. It is sometimes called the 'key of the knee' and is also a dynamic stabiliser of the posterior capsule."
    },
    {
        question: "Which muscle dorsiflexes and inverts the foot and is the primary tibial nerve-innervated muscle at L4?",
        options: {
            A: "Extensor digitorum longus",
            B: "Peroneus tertius",
            C: "Tibialis anterior",
            D: "Extensor hallucis longus",
            E: "Tibialis posterior"
        },
        correctAnswer: "C",
        explanation: "Tibialis anterior (deep peroneal nerve, L4–L5) dorsiflexes and inverts the foot. It is the primary L4 marker. Tibialis posterior (tibial nerve, L4–L5) also inverts but plantarflexes. The distinction is important in root localisation: tibialis anterior weakness (dorsiflexion + inversion) favours deep peroneal/L4, while inversion weakness alone with preserved dorsiflexion favours tibialis posterior/tibial nerve."
    },
    {
        question: "Which muscle protrudes the tongue and is innervated by the hypoglossal nerve (CN XII)?",
        options: {
            A: "Styloglossus",
            B: "Hyoglossus",
            C: "Genioglossus",
            D: "Palatoglossus",
            E: "Mylohyoid"
        },
        correctAnswer: "C",
        explanation: "Genioglossus is the primary tongue protrusor and is innervated by the hypoglossal nerve (CN XII). It originates from the superior mental spine of the mandible and fans into the tongue and hyoid. Unilateral genioglossus paralysis causes the tongue to deviate toward the weak side on protrusion (towards the lesion). It also forms the bulk of the tongue's inferior surface."
    },
    {
        question: "The diaphragm is the primary muscle of inspiration. Which nerve innervates it?",
        options: {
            A: "Vagus nerve (CN X)",
            B: "Phrenic nerve (C3–C5)",
            C: "Intercostal nerves (T1–T6)",
            D: "Thoracodorsal nerve (C6–C8)",
            E: "Long thoracic nerve (C5–C7)"
        },
        correctAnswer: "B",
        explanation: "The diaphragm is innervated by the phrenic nerve (C3–C5, predominantly C4). The mnemonic is 'C3, 4, 5 keeps the diaphragm alive'. The motor fibres arise from the anterior horn cells of C3–C5 in the cervical spinal cord; the phrenic nerve descends through the thorax to the diaphragm. High cervical cord lesions (C3 and above) abolish spontaneous breathing, requiring ventilator support."
    },
    {
        question: "Which muscle inserts into the radial tuberosity and performs forearm supination, and is the primary muscle tested in the biceps jerk?",
        options: {
            A: "Brachialis",
            B: "Brachioradialis",
            C: "Biceps brachii",
            D: "Supinator",
            E: "Pronator teres"
        },
        correctAnswer: "C",
        explanation: "Biceps brachii inserts into the radial tuberosity (supination) and the bicipital aponeurosis (flexion). It is innervated by the musculocutaneous nerve (C5–C6). The biceps jerk tests C5–C6. Its short head originates from the coracoid process and long head from the supraglenoid tubercle. Biceps is most powerful as a supinator when the elbow is flexed at 90°."
    },
    {
        question: "The first dorsal interosseous muscle abducts the index finger. Which nerve innervates it and what is its origin and insertion?",
        options: {
            A: "Median nerve; originates from the 1st metacarpal, inserts into the index proximal phalanx (radial side)",
            B: "Ulnar nerve; originates from the 1st and 2nd metacarpals, inserts into the index proximal phalanx (radial side)",
            C: "Radial nerve; originates from the 2nd metacarpal, inserts into the extensor expansion",
            D: "Musculocutaneous nerve; originates from the 1st metacarpal, inserts into the lateral band",
            E: "Median nerve; originates from the carpal bones, inserts into the 2nd proximal phalanx"
        },
        correctAnswer: "B",
        explanation: "The first dorsal interosseous is innervated by the deep branch of the ulnar nerve (C8–T1). It originates from the adjacent sides of the 1st and 2nd metacarpals (bipennate) and inserts into the radial base of the index finger's proximal phalanx and extensor expansion. It is the most visible interosseous and is often tested clinically to assess ulnar nerve function — wasting is readily visible in the 1st web space."
    },
    {
        question: "Which muscle extends and adducts the wrist and is the only wrist muscle innervated by the ulnar nerve?",
        options: {
            A: "Extensor carpi radialis longus",
            B: "Extensor carpi radialis brevis",
            C: "Extensor carpi ulnaris",
            D: "Flexor carpi ulnaris",
            E: "Palmaris longus"
        },
        correctAnswer: "C",
        explanation: "Extensor carpi ulnaris (ECU) is innervated by the posterior interosseous nerve (deep radial nerve, C7–C8). It originates from the lateral epicondyle and posterior ulna, inserting into the base of the 5th metacarpal. It extends and adducts (ulnar deviates) the wrist. Note: it is innervated by the radial nerve, not ulnar — flexor carpi ulnaris is the ulnar nerve's wrist muscle."
    },
    {
        question: "A patient has weakness of elbow extension, wrist extension, and finger extension with the triceps jerk absent. What is the most likely level of the lesion?",
        options: {
            A: "C5 root lesion",
            B: "C6 root lesion",
            C: "C7 root lesion",
            D: "C8 root lesion",
            E: "T1 root lesion"
        },
        correctAnswer: "C",
        explanation: "C7 root lesion classically causes weakness of elbow extension (triceps), wrist extension (extensor carpi radialis), and finger extension (extensor digitorum), with loss of the triceps jerk. The C7 root is the most commonly involved root in cervical disc prolapse (at C6/7 level). Sensory loss is in the middle finger dermatomal distribution."
    },
    {
        question: "Which muscle is responsible for fine, independent movements of the fingers (via the flexor digitorum profundus) and is tested in assessing C8 root integrity?",
        options: {
            A: "Flexor digitorum superficialis — median nerve, C7–C8",
            B: "Flexor digitorum profundus (digits 2–3) — anterior interosseous nerve (C8–T1) and (digits 4–5) — ulnar nerve (C8–T1)",
            C: "Extensor digitorum — posterior interosseous nerve (C7–C8)",
            D: "Flexor pollicis longus — anterior interosseous nerve (C8–T1)",
            E: "Lumbricals — median and ulnar nerve (C8–T1)"
        },
        correctAnswer: "B",
        explanation: "Flexor digitorum profundus (FDP) flexes the distal interphalangeal (DIP) joints and is the primary C8 marker for finger flexion. The radial half (digits 2–3) is innervated by the anterior interosseous nerve (median); the ulnar half (digits 4–5) by the ulnar nerve. Both divisions originate from the anterior ulna and interosseous membrane, inserting into the distal phalanges. Independent DIP flexion is tested to isolate FDP."
    },
    {
        question: "Which muscle abducts the thumb in the plane of the palm (abducts perpendicular to the palm), and what innervates it?",
        options: {
            A: "Abductor pollicis longus — posterior interosseous nerve (C7–C8)",
            B: "Abductor pollicis brevis — median nerve (C8–T1)",
            C: "Flexor pollicis brevis — median and ulnar nerve",
            D: "Opponens pollicis — median nerve (T1)",
            E: "Adductor pollicis — ulnar nerve (C8–T1)"
        },
        correctAnswer: "B",
        explanation: "Abductor pollicis brevis (APB) abducts the thumb perpendicular to the palm (palmar abduction) and is the most reliable muscle to test for median nerve integrity at the wrist (T1). It originates from the flexor retinaculum, scaphoid, and trapezium, inserting into the lateral base of the thumb's proximal phalanx. Wasting of the thenar eminence with impaired APB is the hallmark of carpal tunnel syndrome."
    }
],
"Upper Limb Pathology": [
    {
        question: "A 60-year-old right-hand dominant man presents with right shoulder pain and progressively worsening arm weakness. Symptoms worsen when working above shoulder height. On examination there is no muscle atrophy, adduction is 5/5 but abduction strength when raising the arm above the head is 1/5. Passive range of motion is intact. Which of the following is the most likely diagnosis?",
        options: {
            A: "Adhesive capsulitis",
            B: "Glenohumeral subluxation",
            C: "Rotator cuff tear",
            D: "Subacromial bursitis",
            E: "Supraspinatus tendonitis"
        },
        correctAnswer: "C",
        explanation: "A full-thickness rotator cuff tear characteristically presents with marked active weakness (1/5) but preserved passive range of motion — the examiner can move the arm through its full arc without resistance. The gross discrepancy between active and passive movement is the key differentiator. Subacromial bursitis and tendinopathy typically have painful but not profoundly weak active movement. Adhesive capsulitis restricts both active and passive range of motion. The age, dominant arm, overhead work history, and severity of weakness all point to a large cuff tear, most commonly involving supraspinatus ± infraspinatus."
    },
    {
        question: "A 45-year-old painter presents with a 3-month history of right shoulder pain that is worst between 60° and 120° of active arm elevation. He reports no pain at rest or with overhead reaching beyond 120°. There is no weakness. Which is the most likely diagnosis?",
        options: {
            A: "Full-thickness supraspinatus tear",
            B: "Adhesive capsulitis",
            C: "Acromioclavicular joint osteoarthritis",
            D: "Subacromial impingement syndrome",
            E: "Long head of biceps tendinopathy"
        },
        correctAnswer: "D",
        explanation: "The painful arc (60°–120° of abduction) is the hallmark of subacromial impingement syndrome, where the supraspinatus tendon is compressed between the humeral head and the coracoacromial arch. Pain resolves beyond 120° as the tendon clears the arch. Painters are classically at risk due to repetitive overhead work. A full tear would cause weakness; adhesive capsulitis restricts motion throughout the arc; AC joint arthritis produces pain at the very end of the arc (>170°)."
    },
    {
        question: "A 35-year-old female presents following a minor fall onto an outstretched hand. She has significant pain at the base of the thumb with swelling over the anatomical snuffbox. Plain radiographs are reported as normal. What is the next most appropriate step in management?",
        options: {
            A: "Discharge with analgesia and reassure the patient the X-ray is normal",
            B: "Organise physiotherapy for wrist sprain",
            C: "Immobilise in a thumb spica and arrange MRI or CT within 72 hours",
            D: "Apply a broad arm sling and review in 6 weeks",
            E: "Arrange urgent nerve conduction studies"
        },
        correctAnswer: "C",
        explanation: "Anatomical snuffbox tenderness after a FOOSH is a scaphoid fracture until proven otherwise. Up to 20% of scaphoid fractures are radiographically occult on initial plain films. The risk of avascular necrosis of the proximal pole (due to its retrograde blood supply from the distal pole) mandates immobilisation in a thumb spica cast. MRI is the gold standard for early detection; CT is a good alternative. Failure to treat can result in non-union, avascular necrosis, and subsequent wrist arthritis — a missed diagnosis with serious medico-legal consequences."
    },
    {
        question: "A 28-year-old rock climber presents with pain and clicking in the shoulder during overhead movements. He describes a sense of the shoulder 'slipping out'. On examination, the anterior apprehension test is positive and is relieved by posterior pressure on the humeral head. Which structure is most likely to be primarily damaged?",
        options: {
            A: "Supraspinatus tendon",
            B: "Subscapularis tendon",
            C: "Inferior glenohumeral ligament and anterior labrum (Bankart lesion)",
            D: "Superior labrum (SLAP tear)",
            E: "Coracohumeral ligament"
        },
        correctAnswer: "C",
        explanation: "Anterior glenohumeral instability in a young athlete is most commonly caused by a Bankart lesion — detachment of the anteroinferior labrum from the glenoid rim along with injury to the inferior glenohumeral ligament (IGHL). The anterior apprehension test (shoulder placed in 90° abduction and external rotation) reproduces the feeling of instability; the Jobe relocation test (posterior pressure on the humeral head) relieves it. This clinical triad is highly specific for anterior instability. The bony variant (bony Bankart) involves a glenoid rim fracture."
    },
    {
        question: "A 55-year-old woman presents with a 6-month history of insidious shoulder pain and stiffness. She cannot reach behind her back to fasten her bra and reports her shoulder is 'stuck'. Examination reveals global restriction of both active and passive movement, with external rotation the most affected. There is no muscle wasting. Which diagnosis fits best?",
        options: {
            A: "Rotator cuff tear",
            B: "Subacromial bursitis",
            C: "Glenohumeral osteoarthritis",
            D: "Adhesive capsulitis (frozen shoulder)",
            E: "Posterior shoulder dislocation"
        },
        correctAnswer: "D",
        explanation: "Adhesive capsulitis (frozen shoulder) presents with progressive global restriction of both active and passive glenohumeral movement, with external rotation disproportionately affected due to thickening and contracture of the rotator interval and coracohumeral ligament. It is most common in women aged 40–60, those with diabetes, and hypothyroid patients. The three classic phases are freezing (painful), frozen (stiff but less painful), and thawing (gradual resolution). Full recovery may take 1–3 years. Unlike a cuff tear, passive movement is equally restricted."
    },
    {
        question: "A 22-year-old cricket bowler develops lateral elbow pain after a season of intensive training. The pain is reproduced by resisted wrist extension and by pressing over the lateral epicondyle. Grip strength is reduced. There is no neurological deficit. What is the underlying pathological process?",
        options: {
            A: "Collateral ligament rupture",
            B: "Radial nerve entrapment in the radial tunnel",
            C: "Degenerative tendinopathy of the common extensor origin (lateral epicondylosis)",
            D: "Posterolateral rotatory instability",
            E: "Osteochondritis dissecans of the capitellum"
        },
        correctAnswer: "C",
        explanation: "Lateral epicondylosis (commonly called tennis elbow) is characterised by degenerative angiofibroblastic tendinopathy — not acute inflammation — at the common extensor origin, predominantly involving extensor carpi radialis brevis. It is provoked by resisted wrist extension and point tenderness over the lateral epicondyle. The condition is most common in those aged 35–55 with repetitive forearm use. Radial tunnel syndrome (posterior interosseous nerve entrapment) can coexist and mimics the pain location but is reproduced by resisted middle finger extension and is located 4–5 cm distal to the epicondyle."
    },
    {
        question: "A 50-year-old golfer presents with medial elbow pain that is worst with resisted wrist flexion and forearm pronation. The pain began insidiously. Neurological examination is entirely normal. Which diagnosis is most likely?",
        options: {
            A: "Ulnar collateral ligament tear",
            B: "Cubital tunnel syndrome",
            C: "Medial epicondylosis (golfer's elbow)",
            D: "Pronator teres syndrome",
            E: "Medial epicondyle avulsion fracture"
        },
        correctAnswer: "C",
        explanation: "Medial epicondylosis (medial epicondylitis or 'golfer's elbow') involves degenerative tendinopathy of the common flexor origin — primarily flexor carpi radialis and pronator teres. It presents with medial elbow pain reproduced by resisted wrist flexion and forearm pronation. It is far less common than lateral epicondylosis. Cubital tunnel syndrome involves ulnar nerve compression and would produce ring/little finger paraesthesia and interosseous wasting. UCL tear is associated with a valgus stress mechanism in throwing athletes."
    },
    {
        question: "A 40-year-old man presents with progressive numbness and tingling in his little and ring fingers, worse at night when sleeping with the elbow flexed. He works as a desk-bound accountant who rests his elbow on his chair arm constantly. On examination there is weakness of abductor digiti minimi and wasting of the first dorsal web space. Which diagnosis best explains the findings?",
        options: {
            A: "Carpal tunnel syndrome",
            B: "C8 radiculopathy",
            C: "Thoracic outlet syndrome",
            D: "Cubital tunnel syndrome (ulnar nerve entrapment at the elbow)",
            E: "Guyon's canal syndrome"
        },
        correctAnswer: "D",
        explanation: "Cubital tunnel syndrome is the second most common upper limb nerve entrapment. The ulnar nerve (C8–T1) is compressed at the medial elbow as it passes through the cubital tunnel posterior to the medial epicondyle. Sustained elbow flexion increases pressure within the tunnel by up to 6-fold. It produces ring and little finger paraesthesia, hypothenar and interosseous wasting, and weakness of intrinsic hand muscles (abductor digiti minimi, interossei). Guyon's canal syndrome affects only the wrist/hand without forearm sensory loss. Carpal tunnel syndrome spares the little finger (median nerve territory)."
    },
    {
        question: "A 38-year-old woman who spends hours daily typing presents with pain and paraesthesia in her thumb, index, and middle fingers. Symptoms are worst at night and wake her from sleep. Shaking the hand ('flick sign') brings temporary relief. On examination, Phalen's test is positive at 45 seconds. Which structure is compressed?",
        options: {
            A: "Ulnar nerve at the wrist",
            B: "Median nerve at the wrist",
            C: "Radial nerve at the elbow",
            D: "Anterior interosseous nerve",
            E: "Median nerve at the elbow (pronator teres)"
        },
        correctAnswer: "B",
        explanation: "Carpal tunnel syndrome (CTS) is caused by compression of the median nerve beneath the flexor retinaculum at the wrist. The classic presentation is nocturnal paraesthesia in the median nerve territory (thumb, index, middle, and radial half of ring finger), the 'wake and shake' flick sign, and a positive Phalen's test (sustained wrist flexion for 60 seconds reproducing symptoms). The anterior interosseous nerve is a motor-only branch — no sensory symptoms. Pronator teres syndrome (high median compression) would spare nocturnal predominance and affect the palm (palmar cutaneous branch)."
    },
    {
        question: "A 67-year-old man with longstanding rheumatoid arthritis develops progressive inability to extend the ring and little fingers at the MCP joints. There is no pain and no sensory loss. The fingers can be passively extended normally. On inspection the extensor tendons appear to have ruptured at the wrist level over the ulnar side. Which eponymous syndrome is this?",
        options: {
            A: "Boutonnière deformity",
            B: "Vaughan-Jackson syndrome",
            C: "Swan-neck deformity",
            D: "Mallet finger",
            E: "Jersey finger"
        },
        correctAnswer: "B",
        explanation: "Vaughan-Jackson syndrome describes sequential rupture of the extensor tendons on the ulnar side of the wrist in patients with rheumatoid arthritis, caused by attrition of the tendons over a prominent, eroded distal ulna. Ruptures begin with the little finger extensor and progress radially (EDM → EDC of 5th → 4th → 3rd). There is isolated loss of active MCP extension with preserved passive extension and no neurological signs. It is distinct from posterior interosseous nerve palsy (which also causes extensor lag) by the absence of any wrist drop and the palpable tendon defect."
    },
    {
        question: "A 30-year-old woman presents with pain over the radial aspect of the wrist and base of the thumb. The pain began after she started caring for a newborn. On examination, there is tenderness over the radial styloid and the Finkelstein test is positive. Which structure is most likely affected?",
        options: {
            A: "Extensor pollicis longus tendon (3rd compartment)",
            B: "Flexor carpi radialis tendon",
            C: "Abductor pollicis longus and extensor pollicis brevis (1st dorsal compartment)",
            D: "Extensor carpi radialis longus (2nd compartment)",
            E: "Scaphoid fracture"
        },
        correctAnswer: "C",
        explanation: "De Quervain's tenosynovitis involves stenotic inflammation of the first dorsal extensor compartment, affecting the tendons of abductor pollicis longus (APL) and extensor pollicis brevis (EPB) as they pass through a tight fibro-osseous tunnel at the radial styloid. The Finkelstein test (passive ulnar deviation of the wrist with the thumb held in the fist) reproduces the pain. It is classically associated with new mothers due to the altered grip mechanics of holding an infant — the 'new mum's wrist'. The anatomical snuffbox is adjacent but scaphoid tenderness is more distal."
    },
    {
        question: "A 24-year-old rugby player is tackled and lands on his shoulder. In the emergency department he is supporting his arm at the side and resists any movement. Inspection reveals a visible deformity at the acromioclavicular joint with the clavicle appearing elevated. The coracoclavicular distance on X-ray is doubled compared to the other side. Which ligaments are most likely disrupted?",
        options: {
            A: "Acromioclavicular ligament alone",
            B: "Acromioclavicular and coracoclavicular ligaments",
            C: "Glenohumeral capsule and inferior glenohumeral ligament",
            D: "Coracoclavicular and coracohumeral ligaments",
            E: "Transverse humeral ligament and biceps pulley"
        },
        correctAnswer: "B",
        explanation: "AC joint injuries are graded by the Rockwood classification. A doubled coracoclavicular distance (>25mm or >100% side-to-side difference) indicates a Grade IV–V injury with rupture of both the acromioclavicular ligament AND the coracoclavicular ligaments (trapezoid and conoid). Grade I affects only the AC ligament; Grade II adds partial CC ligament disruption without significant vertical displacement. Grades IV–VI involve the clavicle displacing into the trapezius, posteriorly, or beneath the coracoid, respectively. Grades IV–VI typically require surgical stabilisation."
    },
    {
        question: "A 19-year-old gymnast presents with anterior shoulder pain that is worse with overhead activities. She describes a catching sensation. The O'Brien active compression test is positive (pain with resisted arm elevation in adduction and internal rotation, relieved by external rotation), but the rotator cuff is fully intact. What is the most likely diagnosis?",
        options: {
            A: "Anterior instability (Bankart lesion)",
            B: "Superior labrum anterior to posterior (SLAP) tear",
            C: "Subacromial impingement syndrome",
            D: "Long head of biceps tendinopathy",
            E: "Posterior capsular contracture"
        },
        correctAnswer: "B",
        explanation: "A SLAP (Superior Labrum Anterior to Posterior) tear involves detachment of the superior labrum at the biceps anchor. It is common in overhead athletes (gymnasts, swimmers, throwers) due to repetitive traction on the biceps anchor. The O'Brien test is the most widely used clinical test for SLAP tears — positive when pain is reproduced in the 'down' position (internal rotation, pronation) and relieved in the 'up' position (external rotation, supination). A Bankart lesion involves the anteroinferior labrum and presents with instability, not catching."
    },
    {
        question: "A 70-year-old woman with known osteoporosis trips and puts her hand out to break her fall. She presents with a dorsally angulated wrist fracture. On examination there is a visible 'dinner fork' deformity. Which fracture pattern does this describe?",
        options: {
            A: "Monteggia fracture",
            B: "Galeazzi fracture",
            C: "Smith's fracture",
            D: "Colles' fracture",
            E: "Chauffeur's (Hutchinson's) fracture"
        },
        correctAnswer: "D",
        explanation: "A Colles' fracture is a fracture of the distal radius with dorsal displacement and angulation of the distal fragment, producing the classic 'dinner fork' deformity. It is the most common fracture in postmenopausal women following a FOOSH. Key features: dorsal angulation (apex volar), radial shortening, and radial displacement. Smith's fracture is the reverse — volar displacement, producing a 'garden spade' deformity. A Monteggia fracture is a proximal ulna fracture with radial head dislocation; a Galeazzi fracture is a distal radius fracture with distal radioulnar joint disruption."
    },
    {
        question: "A 55-year-old butcher presents with painless weakness developing in his hand over 3 months. On examination he has wasting of the hypothenar muscles and all the interossei, with clawing most marked in the ring and little fingers. Sensation is reduced over the little finger and ulnar half of the ring finger but the palm is spared. What is the most likely diagnosis?",
        options: {
            A: "Cubital tunnel syndrome",
            B: "C8/T1 radiculopathy",
            C: "Ulnar nerve compression at Guyon's canal (wrist)",
            D: "Thoracic outlet syndrome",
            E: "Pancoast tumour"
        },
        correctAnswer: "C",
        explanation: "Guyon's canal syndrome describes ulnar nerve compression at the wrist level. The key distinguishing feature from cubital tunnel syndrome is that the palmar cutaneous branch of the ulnar nerve (which arises proximal to Guyon's canal) is spared — so palm sensation is intact while the dorsum sensation may also be spared depending on the zone of compression. Hypothenar and interosseous wasting with clawing and preserved palmar sensation localises the lesion to the wrist. A ganglion cyst or hook of hamate fracture are common causes in manual workers."
    },
    {
        question: "A 25-year-old swimmer notices pain and weakness when performing the freestyle stroke. The pain is felt deep in the shoulder during the recovery phase of the stroke. Examination reveals weakness of shoulder abduction initiation (empty can test positive) but strength improves as the arm is raised further. There is no sensory loss. Which tendon is most commonly implicated?",
        options: {
            A: "Infraspinatus",
            B: "Subscapularis",
            C: "Supraspinatus",
            D: "Long head of biceps",
            E: "Teres minor"
        },
        correctAnswer: "C",
        explanation: "Supraspinatus is the most commonly torn and injured rotator cuff tendon, responsible for the first 15° of shoulder abduction and critical for stabilisation through the full arc. The empty can test (Jobe test — arm at 90° abduction, 30° forward flexion, internally rotated with thumb pointing down) specifically stresses the supraspinatus. In swimmers, repetitive overhead loading leads to intrinsic degeneration and impingement. The improvement in strength beyond the initial arc occurs as deltoid compensates. The suprascapular nerve (C5–C6) supplies supraspinatus."
    },
    {
        question: "A 48-year-old patient presents after a posterior shoulder dislocation sustained during a seizure. Initial radiographs were reported as normal by the on-call junior doctor. The patient's arm is held in internal rotation and cannot be externally rotated. A 'trough line' sign is noted on the AP film. Which injury best explains the radiographic finding?",
        options: {
            A: "Hill-Sachs lesion — posterolateral humeral head impaction",
            B: "Reverse Hill-Sachs (McLaughlin lesion) — anteromedial humeral head impaction",
            C: "Bony Bankart lesion — anteroinferior glenoid fracture",
            D: "Greater tuberosity avulsion fracture",
            E: "Humeral neck fracture"
        },
        correctAnswer: "B",
        explanation: "Posterior shoulder dislocation is the classic 'missed diagnosis' — the humeral head impacts against the posterior glenoid rim, creating an anteromedial humeral head compression fracture called the reverse Hill-Sachs lesion (or McLaughlin lesion). On AP radiograph this appears as a vertical density medial to the articular surface (the 'trough sign'). The arm is held in fixed internal rotation. Posterior dislocations classically occur with seizures, electrocution, or hypoglycaemia — all producing violent internal rotator muscle contraction. The Hill-Sachs lesion affects the posterolateral head and is seen in anterior dislocations."
    },
    {
        question: "A 33-year-old weightlifter develops sudden sharp pain in the front of the shoulder while performing a heavy bicep curl. He notices a visible 'Popeye' deformity in the lower arm and a palpable gap in the antecubital fossa. Elbow flexion is still possible but supination is markedly weak. Which structure has most likely ruptured?",
        options: {
            A: "Long head of biceps brachii at the proximal attachment",
            B: "Distal biceps brachii tendon at the radial tuberosity",
            C: "Brachialis muscle belly",
            D: "Bicipital aponeurosis (lacertus fibrosus)",
            E: "Common flexor tendon at the medial epicondyle"
        },
        correctAnswer: "B",
        explanation: "Distal biceps tendon rupture presents with sudden anterior elbow pain during a forceful eccentric load (e.g. heavy curl). The muscle belly retracts proximally, producing the 'Popeye' sign in the lower arm (rather than upper arm as in a proximal rupture). A palpable gap in the antecubital fossa is pathognomonic. Supination is disproportionately weak because the distal biceps is the primary supinator (it inserts into the radial tuberosity). Elbow flexion is partially maintained by brachialis and brachioradialis. Early surgical repair is recommended to restore supination strength."
    },
    {
        question: "A 65-year-old right-hand dominant woman presents with progressive difficulty pinching objects between her thumb and index finger. She cannot flex the distal phalanx of her thumb or the index finger individually. She has no sensory loss and no pain. An MRI shows a mass compressing the median nerve just proximal to the carpal tunnel. What syndrome does this represent?",
        options: {
            A: "Carpal tunnel syndrome",
            B: "Pronator syndrome",
            C: "Anterior interosseous nerve syndrome",
            D: "Posterior interosseous nerve syndrome",
            E: "Cubital tunnel syndrome"
        },
        correctAnswer: "C",
        explanation: "Anterior interosseous nerve (AIN) syndrome presents with isolated motor weakness — specifically weakness of flexor pollicis longus, pronator quadratus, and the lateral half of FDP (digits 2–3). There is NO sensory loss (the AIN is a purely motor nerve). The patient cannot make the 'OK sign' and holds the thumb and index finger in extension (the 'pinch deformity'). Causes include a space-occupying lesion, anomalous muscle band, or Parsonage-Turner syndrome. Pronator syndrome involves the main median nerve trunk (with sensory loss); CTS is at the wrist level."
    },
    {
        question: "A 40-year-old manual labourer presents with lateral elbow and forearm pain. Unlike typical lateral epicondylosis, the pain is specifically reproduced by resisted extension of the middle finger and by compression 4 cm distal to the lateral epicondyle, not at the epicondyle itself. There is no wrist drop. Which diagnosis should be considered?",
        options: {
            A: "Lateral epicondylosis (tennis elbow)",
            B: "Radial tunnel syndrome (posterior interosseous nerve entrapment)",
            C: "Posterior interosseous nerve palsy",
            D: "Lateral collateral ligament injury",
            E: "Osteochondritis dissecans of the capitellum"
        },
        correctAnswer: "B",
        explanation: "Radial tunnel syndrome involves compression of the posterior interosseous nerve (PIN) as it enters the radial tunnel, passing through the arcade of Frohse (the proximal edge of supinator). Unlike complete PIN palsy there is NO motor deficit — just pain. The key distinguishing features from lateral epicondylosis are: point tenderness 4 cm distal to the lateral epicondyle (over the radial tunnel), reproduction by resisted middle finger extension (which stresses ECRB directly over the nerve), and absence of point tenderness at the epicondyle. The two conditions can coexist, which complicates diagnosis."
    },
    {
        question: "A 57-year-old woman presents with pain and swelling at the base of the thumb that has worsened over several years. She notices difficulty gripping jars and turning keys. On examination, the thumb metacarpal base is prominent and there is crepitus with circumduction of the thumb. Pinch grip is reduced. X-ray shows joint space narrowing and osteophytes. Which joint is affected?",
        options: {
            A: "1st metacarpophalangeal joint",
            B: "Scaphotrapezoid joint",
            C: "1st carpometacarpal joint (trapeziometacarpal joint)",
            D: "Scaphotrapezial joint",
            E: "Interphalangeal joint of the thumb"
        },
        correctAnswer: "C",
        explanation: "Trapeziometacarpal (1st CMC) osteoarthritis — 'basal thumb arthritis' — is the most common arthritis of the hand in postmenopausal women. The saddle-shaped 1st CMC joint allows the wide range of thumb motion necessary for opposition, but this mobility predisposes it to cartilage wear. Key signs include the grind test (axial compression with circumduction producing crepitus and pain) and a prominent squared appearance of the thumb base. Conservative management includes splinting, steroid injection, or surgery (trapeziectomy ± ligament reconstruction)."
    },
    {
        question: "A 26-year-old male is involved in a high-speed motor vehicle accident. Post-crash his arm is found hanging by the side, internally rotated, with the elbow extended — a 'waiter's tip' posture. He cannot abduct the shoulder, flex the elbow, or externally rotate the arm. Sensation is lost over the lateral arm. Which nerve roots are injured?",
        options: {
            A: "C8–T1",
            B: "C7–C8",
            C: "C5–C6",
            D: "C4–C5",
            E: "C6–C7"
        },
        correctAnswer: "C",
        explanation: "Erb's palsy (Erb-Duchenne palsy) is an upper brachial plexus injury involving C5 and C6 roots, classically from violent downward traction on the head and neck or upward traction on the arm. The 'waiter's tip' posture arises from paralysis of: deltoid (abduction), biceps (flexion and supination), supraspinatus (initiation of abduction), and infraspinatus (external rotation). Medial rotation and adduction from the intact lower trunk muscles go unopposed. Klumpke's palsy (C8–T1) produces a claw hand with Horner's syndrome. Lateral arm sensory loss localises to the axillary nerve territory (C5)."
    },
    {
        question: "A 72-year-old woman presents with sudden-onset weakness and a flail arm following a routine shoulder MUA procedure under general anaesthesia. On examination she cannot extend the wrist, the thumb, or the MCP joints of any finger. Sensation is reduced in a strip over the dorsum of the hand and lateral forearm. Elbow extension is preserved. Where is the nerve lesion most likely localised?",
        options: {
            A: "Posterior cord of the brachial plexus",
            B: "Radial nerve in the axilla",
            C: "Radial nerve in the radial groove (spiral groove of humerus)",
            D: "Posterior interosseous nerve (PIN) at the radial tunnel",
            E: "C7 nerve root"
        },
        correctAnswer: "C",
        explanation: "Radial nerve palsy in the spiral groove (radial groove) produces the classic triad of wrist drop (loss of wrist extension), finger drop (loss of MCP extension via extensor digitorum), and loss of dorsal hand and lateral forearm sensation. Crucially, triceps (elbow extension) is SPARED because the branches to triceps arise proximal to the radial groove. This distinguishes it from a high radial nerve lesion in the axilla (where triceps is also affected). The radial groove is the classic site of injury in humeral shaft fractures and 'Saturday night palsy' (prolonged arm compression over a chair)."
    },
    {
        question: "A 52-year-old woman presents with pain and tenderness directly over the bicipital groove, aggravated by lifting objects and reaching forward. Speed's test (resisted shoulder flexion with elbow extended and forearm supinated) and Yergason's test (resisted supination with elbow at 90°) are both positive. Rotator cuff strength is intact. Which structure is most likely involved?",
        options: {
            A: "Short head of biceps brachii",
            B: "Long head of biceps brachii tendon",
            C: "Supraspinatus tendon",
            D: "Coracobrachialis",
            E: "Superior glenohumeral ligament"
        },
        correctAnswer: "B",
        explanation: "Long head of biceps (LHB) tendinopathy produces anterior shoulder pain localised to the bicipital groove, aggravated by overhead and forward flexion activities. Speed's test stresses the LHB by maximally loading the tendon in the groove. Yergason's test loads the tendon with resisted supination. Both tests are relatively sensitive but non-specific; they are most useful when both are positive together. The LHB runs through the bicipital groove where it is vulnerable to frictional wear, synovitis (in rheumatoid arthritis), and rupture. It is commonly associated with concomitant rotator cuff pathology."
    },
    {
        question: "A 16-year-old male javelin thrower presents with medial elbow pain after a throw. He reports a 'pop' and sudden valgus instability. On examination the milking manoeuvre (valgus stress applied with elbow at 70° flexion and supinated) reproduces pain and a sense of opening. X-ray shows no fracture. What is the most likely diagnosis?",
        options: {
            A: "Medial epicondyle avulsion fracture",
            B: "Ulnar collateral ligament (UCL) tear",
            C: "Medial epicondylosis",
            D: "Cubital tunnel syndrome",
            E: "Ulnar nerve subluxation"
        },
        correctAnswer: "B",
        explanation: "The ulnar collateral ligament (UCL) — also called the medial collateral ligament — is the primary stabiliser against valgus stress at the elbow. It is the most commonly injured structure in overhead throwing athletes. A pop followed by medial elbow pain and valgus instability is classic for UCL rupture. The anterior band of the UCL (from medial epicondyle to coronoid process) is the most important component. The milking manoeuvre and the moving valgus stress test are the most sensitive clinical tests. Treatment in high-level throwers often involves UCL reconstruction (Tommy John surgery)."
    },
    {
        question: "A 44-year-old female secretary presents with pain and a non-tender swelling over the dorsum of her wrist that transilluminates on penlight examination. The lump has been present for 3 months and is firmer when the wrist is flexed. There is no neurological deficit. Which is the most likely diagnosis?",
        options: {
            A: "Lipoma",
            B: "Epidermoid cyst",
            C: "Ganglion cyst",
            D: "Extensor tenosynovitis",
            E: "Intersection syndrome"
        },
        correctAnswer: "C",
        explanation: "A ganglion cyst is the most common soft tissue swelling of the hand and wrist, accounting for 60–70% of cases. It arises from a mucinous degeneration and herniation of synovial tissue from a joint capsule or tendon sheath. The dorsal scapholunate ligament is the most common origin. Characteristic features: smooth, tense, transilluminable, and becoming more prominent with wrist flexion (which increases intra-articular pressure). Most are asymptomatic; symptomatic cysts may be aspirated or excised. Recurrence rates are lower with surgical excision (~10%) than aspiration (~50%)."
    },
    {
        question: "A 68-year-old man with a history of gout presents with a red, hot, extremely tender 1st MCP joint. He cannot tolerate even the weight of a bed sheet on the joint. Serum uric acid is elevated. Aspiration of the joint reveals negatively birefringent, needle-shaped crystals under polarised light. Which finding on X-ray would be expected in established disease?",
        options: {
            A: "Periarticular osteopaenia and erosions at the joint margins",
            B: "Chondrocalcinosis (calcium deposits in cartilage)",
            C: "Punched-out bony erosions with overhanging edges and preserved joint space",
            D: "Subchondral sclerosis and osteophyte formation",
            E: "Soft tissue calcification with normal bone"
        },
        correctAnswer: "C",
        explanation: "Established gout on X-ray classically shows punched-out, well-defined bony erosions with 'overhanging edges' (the Martel hook sign) with a preserved joint space — in contrast to rheumatoid arthritis where the joint space is narrowed and erosions are periarticular. Soft tissue tophi may also be visible as radiodense masses. Periarticular osteopaenia is the hallmark of rheumatoid arthritis, not gout. Chondrocalcinosis is the radiographic finding of calcium pyrophosphate deposition disease (pseudogout), where crystals are positively birefringent and rhomboid in shape."
    },
    {
        question: "A 35-year-old construction worker falls from a height and presents with his arm held against his chest in adduction and internal rotation. He is in severe pain. Examination reveals flattening of the deltoid contour and a palpable void beneath the acromion. He cannot initiate any shoulder movement. What type of shoulder dislocation is this?",
        options: {
            A: "Posterior glenohumeral dislocation",
            B: "Inferior glenohumeral dislocation (luxatio erecta)",
            C: "Anterior glenohumeral dislocation — subglenoid type",
            D: "Anterior glenohumeral dislocation — subcoracoid type",
            E: "Acromioclavicular joint dislocation"
        },
        correctAnswer: "D",
        explanation: "Anterior shoulder dislocation accounts for 95% of all shoulder dislocations; the subcoracoid type (humeral head displaced anteriorly and inferiorly to the coracoid process) is the most common. Loss of the normal deltoid contour (squared-off appearance), a palpable fullness anteriorly, and inability to initiate movement are characteristic. Patients typically hold the arm slightly abducted and internally rotated. Key complications include axillary nerve injury (test deltoid sensation and function), rotator cuff tear (especially in patients over 40), and Hill-Sachs lesion. Inferior dislocation (luxatio erecta) presents with the arm held overhead — not adducted."
    },
    {
        question: "A 62-year-old man presents with painless progressive weakness and wasting beginning in the small muscles of one hand, spreading to the forearm. He also notices fasciculations in the same limb. He is referred to neurology. Which diagnosis must be urgently considered given this clinical picture?",
        options: {
            A: "Ulnar nerve entrapment at the elbow",
            B: "C8/T1 radiculopathy from cervical spondylosis",
            C: "Motor neurone disease (amyotrophic lateral sclerosis)",
            D: "Multifocal motor neuropathy",
            E: "Syringomyelia"
        },
        correctAnswer: "C",
        explanation: "Upper limb muscle wasting with fasciculations — particularly beginning in the intrinsic hand muscles — in the absence of sensory loss is a red flag for motor neurone disease (MND/ALS). The combination of lower motor neurone signs (wasting, fasciculations) with upper motor neurone signs elsewhere (hyperreflexia, extensor plantars) makes MND the primary differential. Peripheral nerve entrapments spare the UMN tracts and do not cause fasciculations outside the relevant muscle territory. Syringomyelia causes dissociated sensory loss (pain and temperature) in a 'cape' distribution and is also important to exclude by MRI."
    },
    {
        question: "A 48-year-old woman presents with a 2-year history of pain and clicking in the wrist. She recalls an old wrist injury playing volleyball in her twenties. MRI reveals disruption of a ligament between the carpal bones associated with a step-off at the proximal carpal row. Which ligament is most commonly injured in this scenario?",
        options: {
            A: "Lunotriquetral interosseous ligament",
            B: "Radioulnar ligament",
            C: "Scapholunate interosseous ligament",
            D: "Palmar radiocarpal ligament",
            E: "Pisotoriquetral ligament"
        },
        correctAnswer: "C",
        explanation: "The scapholunate interosseous ligament (SLIL) is the most commonly injured intrinsic carpal ligament. Rupture leads to scapholunate dissociation — the scaphoid flexes while the lunate extends, creating the dorsal intercalated segment instability (DISI) pattern visible on lateral wrist X-ray. A widened scapholunate interval (>3mm — the 'Terry Thomas sign' on PA X-ray) confirms the diagnosis. Chronic instability leads to scapholunate advanced collapse (SLAC wrist) arthritis. The Watson scaphoid shift test (dorsal pressure on the scaphoid tuberosity during wrist ulnar deviation) is the key clinical test."
    },
    {
        question: "An 18-year-old female gymnast presents with pain over the dorsoradial aspect of the wrist. Pain is reproduced at the intersection of the 1st and 2nd dorsal extensor compartments, approximately 4–6 cm proximal to the wrist joint. She describes a creaking sensation (crepitus) in this area with thumb and wrist movement. Which diagnosis is most likely?",
        options: {
            A: "De Quervain's tenosynovitis",
            B: "Scaphoid fracture",
            C: "Intersection syndrome",
            D: "Wartenberg's syndrome",
            E: "Extensor pollicis longus rupture"
        },
        correctAnswer: "C",
        explanation: "Intersection syndrome involves inflammation at the crossing point of the 1st dorsal compartment tendons (APL and EPB) over the 2nd dorsal compartment tendons (ECRL and ECRB), typically 4–6 cm proximal to the Lister tubercle. It presents with dorsoradial forearm pain and characteristic crepitus (sometimes audible — 'squeaking') at this intersection. It is common in rowers, skiers, and gymnasts. De Quervain's affects the 1st dorsal compartment at the radial styloid; intersection syndrome is more proximal. Finkelstein's test may be positive in both, making location of maximal tenderness the key distinguishing feature."
    },
    {
        question: "A 55-year-old retired professional boxer presents with chronic instability and pain in the dominant wrist. He recalls multiple minor wrist injuries over his career. On examination there is tenderness over the ulnar aspect of the wrist. The piano key test (dorsal pressure on the ulnar head causing painful displacement) is positive. Which structure is most likely disrupted?",
        options: {
            A: "Ulnar collateral ligament of the wrist",
            B: "Lunotriquetral ligament",
            C: "Triangular fibrocartilage complex (TFCC)",
            D: "Extensor carpi ulnaris tendon sheath",
            E: "Pisotriquetral joint"
        },
        correctAnswer: "C",
        explanation: "The triangular fibrocartilage complex (TFCC) is the primary stabiliser of the distal radioulnar joint (DRUJ) and the ulnocarpal articulation. TFCC tears cause ulnar-sided wrist pain, clicking, and DRUJ instability. The 'piano key test' — dorsal subluxation of the ulnar head with volar pressure on the dorsal ulna — demonstrates DRUJ instability. TFCC injuries are classified by the Palmer system (Type 1: traumatic; Type 2: degenerative). Diagnosis is confirmed by MRI arthrography or wrist arthroscopy, which also allows debridement or repair. ECU tendon instability also causes ulnar wrist pain but lacks DRUJ instability."
    },
    {
        question: "A 42-year-old woman presents following blunt trauma to the thumb. She cannot oppose the thumb and has a weak key pinch. On examination there is instability of the thumb MCP joint with radial deviation stress. X-ray shows a small avulsion fragment at the ulnar base of the proximal phalanx. What is the diagnosis and what is the critical complication that determines surgical management?",
        options: {
            A: "Bennett's fracture — proximal migration of the 1st metacarpal base",
            B: "Gamekeeper's (Skier's) thumb — UCL rupture; Stener lesion requires surgery",
            C: "Rolando fracture — comminuted 1st metacarpal base fracture",
            D: "Mallet thumb — extensor pollicis longus avulsion",
            E: "Jersey finger — FPL avulsion from the distal phalanx"
        },
        correctAnswer: "B",
        explanation: "Gamekeeper's thumb (acute 'skier's thumb') involves rupture of the ulnar collateral ligament (UCL) of the thumb MCP joint from forced radial deviation. An avulsion fragment from the proximal phalanx base indicates bony UCL rupture. The critical complication is the Stener lesion — where the torn UCL end becomes folded back and lies superficial to the adductor pollicis aponeurosis, preventing spontaneous healing and mandating surgical repair. Without intervention, chronic instability leads to pinch grip weakness. Clinical suspicion: MCP joint radial instability >30° compared to the other thumb; ultrasound or MRI confirm the Stener lesion."
    },
    {
        question: "A 30-year-old rugby player presents with an acutely flexed ring finger that he cannot actively extend. He reports grasping an opponent's jersey before the injury. There is tenderness over the flexor aspect of the proximal and middle phalanges. X-ray is normal. Which injury has occurred?",
        options: {
            A: "Boutonnière deformity",
            B: "Central slip rupture",
            C: "Mallet finger",
            D: "Jersey finger (FDP avulsion)",
            E: "Sagittal band rupture"
        },
        correctAnswer: "D",
        explanation: "Jersey finger is avulsion of the flexor digitorum profundus (FDP) tendon from its insertion on the distal phalanx, caused by forced extension of an actively flexed DIP joint — classically when a player grasps a jersey and the finger is pulled into extension. The ring finger is most commonly affected (its FDP has a separate musculotendinous unit making it more vulnerable). The patient cannot actively flex the DIP joint; the tendon retracts to varying levels. X-ray may be normal (purely tendinous avulsion) or show a bony fragment. Surgical reattachment is required — ideally within days to prevent tendon retraction and contracture."
    },
    {
        question: "A 27-year-old footballer jams his finger against a ball. He presents with a swollen, painful middle finger PIP joint, held in 30° of flexion. He can actively extend the PIP joint but not fully. On examination there is a subtle flexion deformity at the PIP joint and hyperextension at the DIP. X-ray is normal. What is the diagnosis?",
        options: {
            A: "Volar plate injury",
            B: "Central slip rupture (incomplete — early boutonnière)",
            C: "Collateral ligament tear of the PIP joint",
            D: "FDS rupture",
            E: "Mallet finger — extensor mechanism avulsion at DIP"
        },
        correctAnswer: "B",
        explanation: "A boutonnière deformity results from rupture of the central slip of the extensor mechanism at the PIP joint, allowing the lateral bands to migrate volarly and producing PIP flexion with DIP hyperextension. In the acute phase, the deformity may be subtle — just PIP flexion lag with early DIP hyperextension. The Elson test (resisted PIP extension with the finger held at 90° flexion over a table edge — DIP rigidity indicates central slip rupture) is the key clinical test. If missed and untreated (splinting in PIP extension), a fixed boutonnière deformity results within weeks."
    },
    {
        question: "A 50-year-old woman develops sudden weakness when extending the thumb after recovering from a distal radius fracture treated conservatively in a cast. The EPL tendon cannot be palpated. There is no sign of infection. Which complication has most likely occurred?",
        options: {
            A: "Posterior interosseous nerve injury",
            B: "Extensor pollicis longus tendon rupture",
            C: "Carpal tunnel syndrome secondary to cast compression",
            D: "Scaphoid non-union",
            E: "Complex regional pain syndrome (CRPS)"
        },
        correctAnswer: "B",
        explanation: "Rupture of the extensor pollicis longus (EPL) tendon is a well-recognised delayed complication of distal radius fractures — even minimally displaced ones. EPL ruptures at Lister's tubercle (3rd dorsal extensor compartment) where the tendon changes direction and may be affected by haematoma, oedema-induced ischaemia, or mechanical attrition against displaced bone fragments. It typically presents 4–12 weeks post-injury. The patient cannot extend the thumb IP joint or retropulse (extend) the thumb. Surgical management requires EIP (extensor indicis proprius) tendon transfer — direct repair is usually not possible due to tendon degeneration."
    },
    {
        question: "A 19-year-old falls onto his outstretched arm with the elbow extended. He presents with the elbow locked in extension and a visible deformity posteriorly. Neurovascular examination reveals reduced sensation in the little finger and ring finger, and weakness of interosseous muscles. Which associated injury must be urgently excluded?",
        options: {
            A: "Anterior interosseous nerve injury",
            B: "Median nerve injury",
            C: "Ulnar nerve injury",
            D: "Radial nerve injury",
            E: "Musculocutaneous nerve injury"
        },
        correctAnswer: "C",
        explanation: "Posterior elbow dislocation — the most common elbow dislocation — can injure all three major forearm nerves. However, the ulnar nerve is most frequently injured due to its proximity to the medial epicondyle. Sensory loss in the ring and little fingers with interosseous weakness is the classic ulnar nerve pattern. The median nerve (particularly the AIN) is the second most commonly affected. Any neurovascular deficit mandates urgent reduction under adequate analgesia/sedation. Post-reduction neurological assessment is essential — most neurapraxic injuries resolve spontaneously but persistent deficit may require surgical exploration."
    },
    {
        question: "A 74-year-old woman presents 6 weeks after a Colles' fracture. She complains of burning pain, swelling, and marked allodynia (pain from non-noxious stimuli) of her entire hand and wrist. The hand appears shiny, mottled, and warm compared to the other side. She refuses to move the hand. Which diagnosis should be suspected?",
        options: {
            A: "Deep vein thrombosis of the upper limb",
            B: "Infected non-union of the distal radius",
            C: "Complex regional pain syndrome type 1 (CRPS I)",
            D: "Peripheral vascular disease",
            E: "Carpal tunnel syndrome secondary to oedema"
        },
        correctAnswer: "C",
        explanation: "CRPS type 1 (formerly reflex sympathetic dystrophy) is a recognised complication of distal radius fractures, occurring in approximately 5–10% of cases. It is characterised by disproportionate pain, autonomic dysregulation (skin colour and temperature changes), trophic changes (shiny skin, hair loss), allodynia/hyperalgesia, and movement restriction — all exceeding what would be expected from the original injury. There is no identifiable nerve lesion (distinguishing it from CRPS type 2/causalgia). Diagnosis uses the Budapest criteria. Early mobilisation, physiotherapy, and pain management (including vitamin C prophylaxis post-fracture) are key."
    },
    {
        question: "A 14-year-old male presents with acute anterior elbow pain following a FOOSH during football. On examination there is tenderness over the medial epicondyle with local swelling. X-ray reveals the medial epicondyle apophysis is no longer visible in its normal position — it appears displaced into the joint. What is the key concern with this injury?",
        options: {
            A: "The apophysis may be trapped within the elbow joint following a spontaneously reduced dislocation",
            B: "This represents a standard Salter-Harris II fracture requiring cast immobilisation",
            C: "The brachialis attachment has avulsed the coronoid process",
            D: "The radial head has fractured — the Milch classification applies",
            E: "This is most likely a normal variant seen in adolescents"
        },
        correctAnswer: "A",
        explanation: "Medial epicondyle avulsion in a skeletally immature patient is commonly associated with elbow dislocation. When the elbow spontaneously reduces, the medial epicondyle apophysis (which appears between 4–6 years and fuses by ~14 years) can become trapped within the joint — an incarcerated medial epicondyle. This is a surgical emergency: if missed on X-ray (the absent epicondyle is the clue — 'look for the missing ossification centre'), the trapped fragment causes pain, locking, and ulnar nerve injury. The mnemonic for elbow ossification order is CRITOE (Capitellum, Radial head, Internal/medial epicondyle, Trochlea, Olecranon, External/lateral epicondyle)."
    },
    {
        question: "A 45-year-old competitive climber develops progressive inability to fully flex the ring finger. He notices the finger pulley 'pops' during a crimp hold. There is a palpable bowstringing of the flexor tendon when he tries to flex the finger, with a visible and palpable cord when the finger is flexed against resistance. Which structure is most likely injured?",
        options: {
            A: "A1 pulley — causing trigger finger",
            B: "A2 or A4 pulley — causing flexor tendon bowstringing",
            C: "FDP tendon — jersey finger equivalent",
            D: "Intrinsic tendon — lateral band",
            E: "Sagittal band — causing extensor tendon subluxation"
        },
        correctAnswer: "B",
        explanation: "Flexor tendon pulley injuries are the most common finger injury in rock climbers, particularly affecting the A2 and A4 pulleys of the ring and middle fingers. The annular pulleys (A1–A5) hold the flexor tendons close to the phalanges — injury causes bowstringing (the tendon takes a straight-line path rather than following the curve of the finger). An audible/palpable 'pop' during crimping is characteristic. Diagnosis is confirmed by ultrasound. Partial ruptures are managed conservatively with ring-shaped 'H-taping'; complete A2 ruptures may require surgical reconstruction with a retinaculum graft."
    },
    {
        question: "A 60-year-old woman with a 5-year history of rheumatoid arthritis develops a 'trigger finger'. On examination, the ring finger MCP joint catches on active flexion and extension, requiring passive extension. There is a palpable nodule over the A1 pulley in the palm. Which underlying pathological process causes this?",
        options: {
            A: "De Quervain's tenosynovitis spreading distally",
            B: "Rheumatoid nodule on the FDP tendon causing impingement within the fibro-osseous canal at the A1 pulley",
            C: "Subluxation of the MCP joint causing mechanical locking",
            D: "Central slip fibrosis causing PIP joint triggering",
            E: "Lumbrical plus deformity from intrinsic tightness"
        },
        correctAnswer: "B",
        explanation: "Trigger finger (stenosing tenosynovitis) results from a mismatch between the flexor tendon/surrounding tenosynovium and the fibro-osseous canal at the A1 pulley. In rheumatoid arthritis, synovial proliferation (tenosynovitis) and the formation of rheumatoid nodules on the FDP or FDS tendon create a bulky segment that catches as it passes through the A1 pulley during flexion. The 'triggering' represents the nodule or swollen tendon snapping through the constriction. Treatment options include corticosteroid injection into the tendon sheath (often highly effective in RA), or surgical A1 pulley release."
    },
    {
        question: "A 28-year-old female presents with sudden-onset weakness and severe pain in the arm and shoulder that developed 2 weeks after a viral illness. The pain has now mostly resolved but she has profound weakness — she cannot abduct the shoulder, and has weakness of elbow flexion and wrist extension. There is no sensory loss. EMG shows widespread denervation across multiple nerve territories. Which diagnosis is most likely?",
        options: {
            A: "Cervical disc herniation at C5/6",
            B: "Multifocal motor neuropathy",
            C: "Parsonage-Turner syndrome (neuralgic amyotrophy)",
            D: "Multiple sclerosis relapse",
            E: "Pancoast tumour"
        },
        correctAnswer: "C",
        explanation: "Parsonage-Turner syndrome (neuralgic amyotrophy, brachial neuritis) classically presents with acute-onset severe shoulder/arm pain (often described as the worst pain ever experienced), followed by rapid pain resolution and then progressive multi-territorial weakness and wasting that does not correspond to a single nerve or root distribution. It is often triggered by viral illness, immunisation, or surgery. EMG shows widespread denervation across multiple nerves (suprascapular, long thoracic, AIN are commonly affected). Recovery occurs over months to years. The combination of post-viral onset, severe pain→weakness sequence, and multi-territorial weakness without sensory loss is pathognomonic."
    },
    {
        question: "A 38-year-old builder develops pain in the index finger when pushing with the hand. On examination, the middle segment of the index finger is held in flexion at the PIP joint with hyperextension at both the MCP and DIP. He cannot actively straighten the PIP joint. There is no history of trauma. Which deformity is this?",
        options: {
            A: "Boutonnière deformity",
            B: "Swan-neck deformity",
            C: "Mallet deformity",
            D: "Lumbrical plus deformity",
            E: "Intrinsic tightness deformity"
        },
        correctAnswer: "A",
        explanation: "A boutonnière deformity is characterised by PIP flexion + DIP hyperextension, caused by disruption of the central slip of the extensor mechanism. This allows the lateral bands to migrate volarly, converting them into PIP flexors rather than extensors. The head of the proximal phalanx 'buttonholes' through the split extensor mechanism. In contrast, swan-neck deformity is the opposite — PIP hyperextension and DIP flexion, due to volar plate attenuation at the PIP joint. In inflammatory arthritis, both deformities can occur; identifying which joint is flexed and which is extended is the key distinguishing step."
    },
    {
        question: "A 65-year-old man with longstanding type 2 diabetes mellitus presents with painful tingling in both hands, worse distally and at night, affecting all fingers equally. On examination, there is reduced light touch and pin-prick sensation in a glove distribution, with slightly reduced grip strength bilaterally. Reflexes are diminished globally. Nerve conduction studies show reduced amplitudes and velocities affecting both motor and sensory nerves. Which is the most likely underlying diagnosis?",
        options: {
            A: "Bilateral carpal tunnel syndrome",
            B: "Bilateral cubital tunnel syndrome",
            C: "C8–T1 myelopathy",
            D: "Diabetic peripheral polyneuropathy",
            E: "Vasculitic neuropathy"
        },
        correctAnswer: "D",
        explanation: "Diabetic peripheral polyneuropathy is the most common cause of peripheral neuropathy in the developed world. It produces a length-dependent, symmetrical, sensorimotor neuropathy with the characteristic 'glove and stocking' distribution. All modalities are affected (large fibre: vibration, proprioception; small fibre: pain, temperature) with global hyporeflexia. NCS shows reduced amplitudes and conduction velocities in a diffuse pattern. Bilateral CTS would produce a median nerve distribution deficit; bilateral cubital tunnel would spare the median territory. Myelopathy would cause upper motor neurone signs (hyperreflexia, clonus) rather than hyporeflexia."
    },
    {
        question: "A 55-year-old woman presents with a 3-month history of aching over the radial aspect of the wrist, aggravated by pinching and gripping. On examination there is marked tenderness directly over the scaphoid and subtle swelling. X-ray shows no acute fracture. An MRI demonstrates avascular necrosis of the scaphoid proximal pole without evidence of acute fracture. Which condition does this represent?",
        options: {
            A: "Preiser's disease",
            B: "Kienböck's disease",
            C: "Freiberg's infraction",
            D: "Panner's disease",
            E: "Köhler's disease"
        },
        correctAnswer: "A",
        explanation: "Preiser's disease is avascular necrosis of the scaphoid occurring in the absence of fracture. It is a rare but important condition, most commonly affecting middle-aged women, and may be associated with corticosteroid use or systemic lupus erythematosus. MRI demonstrates characteristic signal changes in the proximal pole. Kienböck's disease is AVN of the lunate (not scaphoid) and is associated with ulnar negative variance. Panner's disease is AVN of the capitellum in children. Freiberg's affects the metatarsal heads. Correct identification requires knowing the bones affected by the eponymous AVN conditions."
    },
    {
        question: "A 32-year-old woman presents with wrist pain and swelling following a fall. X-ray reveals a fracture of the base of the 5th metacarpal with apex dorsal angulation. Which fracture is this, and what angulation is typically acceptable for conservative management?",
        options: {
            A: "Bennett's fracture — intra-articular; always requires surgery",
            B: "Boxer's fracture — extra-articular 5th metacarpal neck fracture; up to 40° angulation is acceptable",
            C: "Rolando fracture — comminuted; angulation is irrelevant",
            D: "Reverse Bennett's fracture — requires ORIF",
            E: "Spiral metacarpal shaft fracture — rotational deformity is the concern, not angulation"
        },
        correctAnswer: "B",
        explanation: "A Boxer's fracture is a fracture of the 5th (or 4th) metacarpal neck with apex dorsal (volar) angulation — the classic result of a punch with a clenched fist. The 5th metacarpal CMC joint has 20° of native mobility, compensating for up to 40° of neck angulation without functional deficit. Greater angulation requires reduction (often with a Jahss manoeuvre). Rotational deformity must always be corrected — even 5° of rotation causes the finger to overlap its neighbour on flexion. Bennett's fracture (intra-articular 1st metacarpal base) and Rolando fracture (comminuted version) involve the thumb, not the 5th ray."
    },
    {
        question: "A 70-year-old male presents with progressive difficulty buttoning shirts and using cutlery. On examination he has bilateral hand weakness, reduced grip, hyperreflexia in the upper limbs, and bilateral extensor plantar responses (positive Babinski). He has mild sensory loss affecting proprioception in both hands. MRI of the cervical spine reveals a prolapsed disc at C5/6 with cord signal change. What is the diagnosis?",
        options: {
            A: "Bilateral carpal tunnel syndrome",
            B: "Amyotrophic lateral sclerosis (motor neurone disease)",
            C: "Cervical spondylotic myelopathy",
            D: "Syringomyelia",
            E: "Multiple sclerosis"
        },
        correctAnswer: "C",
        explanation: "Cervical spondylotic myelopathy (CSM) is the most common cause of acquired spinal cord dysfunction in adults over 55. Progressive cord compression by degenerative disc disease, osteophytes, and ligamentum flavum hypertrophy produces a mixed picture: lower motor neurone signs at the level of compression (weakness, wasting, reduced reflexes at C5/6 in this case) AND upper motor neurone signs below (hyperreflexia, Babinski, gait ataxia, bladder dysfunction). Fine motor difficulty (buttons, keys, cutlery — 'myelopathic hand') is a hallmark. MRI with cord signal change (T2 myelomalacia) confirms compression. Surgical decompression is usually indicated."
    },
    {
        question: "A 45-year-old woman presents with bilateral arm pain and weakness that is worse in the morning and improves after warming up. On examination she has bilateral shoulder tenderness, symmetrical loss of external rotation and abduction, and raised inflammatory markers (CRP 35 mg/L, ESR 78 mm/hr). She is 46 years old. Which is the most likely diagnosis?",
        options: {
            A: "Bilateral rotator cuff tears",
            B: "Bilateral adhesive capsulitis",
            C: "Polymyalgia rheumatica",
            D: "Bilateral subacromial impingement",
            E: "Seronegative rheumatoid arthritis affecting the shoulders"
        },
        correctAnswer: "C",
        explanation: "Polymyalgia rheumatica (PMR) is a clinical diagnosis defined by bilateral shoulder and/or hip girdle pain with morning stiffness lasting >45 minutes in patients over 50, accompanied by raised ESR and CRP. It is exquisitely steroid-responsive — dramatic improvement within 48–72 hours of prednisolone is diagnostic. It is the most common inflammatory rheumatic disease in older adults, affecting women twice as frequently as men. The key features here — bilateral, morning stiffness improves with activity, raised inflammatory markers — distinguish it from bilateral mechanical pathology. Giant cell arteritis coexists in ~15% (risk of blindness)."
    },
    {
        question: "A 25-year-old nurse presents with pain and paraesthesia in the arm and hand that is worse when working with the arms raised (e.g., hanging IV bags). She reports numbness in the little and ring fingers and medial forearm. On examination, the Adson manoeuvre (neck extension and rotation to the affected side with deep inspiration) obliterates the radial pulse. A cervical rib is seen on chest X-ray. Which diagnosis does this suggest?",
        options: {
            A: "Cubital tunnel syndrome",
            B: "Cervical disc prolapse at C8/T1",
            C: "Thoracic outlet syndrome (neurogenic and vascular)",
            D: "Ulnar nerve injury at the wrist",
            E: "Pancoast tumour"
        },
        correctAnswer: "C",
        explanation: "Thoracic outlet syndrome (TOS) results from compression of the neurovascular bundle (brachial plexus, subclavian artery and vein) at the thoracic outlet — between the clavicle, 1st rib, and scalene muscles. A cervical rib (accessory rib arising from C7) is present in ~1% of the population and is the most common anatomical cause. Neurogenic TOS (C8–T1 territory) causes medial hand, ring and little finger, and medial forearm paraesthesia with intrinsic wasting. Vascular TOS causes pulse obliteration with provocative manoeuvres. Adson's test is one of several provocative tests; it has high sensitivity but lower specificity."
    },
    {
        question: "A 52-year-old man with chronic renal failure on long-term haemodialysis via an AV fistula presents with pain and tingling in his hand that is worse during dialysis sessions. He develops digital ischaemia and finger pallor during dialysis. Which complication of the fistula best explains this?",
        options: {
            A: "Venous hypertension causing hand oedema",
            B: "Steal syndrome — fistula diverts blood away from the distal hand",
            C: "Carpal tunnel syndrome from uraemic neuropathy",
            D: "Pseudoaneurysm of the AV fistula",
            E: "Thoracic outlet syndrome from needle trauma"
        },
        correctAnswer: "B",
        explanation: "Haemodialysis access-related steal syndrome occurs when the AV fistula creates a low-resistance shunt that preferentially diverts arterial blood flow away from the distal hand (retrograde flow through the palmar arch). Symptoms include hand pain, coldness, paraesthesia, and digital ischaemia — classically worsening during dialysis (when flow through the fistula is maximal). Pallor and pain during dialysis sessions is the diagnostic clue. Treatment options include DRIL procedure (distal revascularisation and interval ligation), banding, or fistula ligation if limb viability is threatened."
    },
    {
        question: "A 67-year-old man presents with inability to fully straighten his ring and little fingers. The fingers have been curling into the palm progressively for 3 years. On examination there are palpable fibrous cords in the palm, and puckering of the palmar skin. He is a heavy smoker with type 2 diabetes mellitus. There is no pain. Which is the most likely diagnosis?",
        options: {
            A: "Trigger finger (stenosing tenosynovitis)",
            B: "Intrinsic contracture from previous crush injury",
            C: "Dupuytren's contracture",
            D: "Ulnar nerve palsy causing clawing",
            E: "Volkmann's ischaemic contracture"
        },
        correctAnswer: "C",
        explanation: "Dupuytren's contracture is a fibroproliferative disease of the palmar fascia, causing progressive thickening into fibrous cords that contract the MCP and PIP joints into fixed flexion. The ring and little fingers are most commonly affected. Risk factors include northern European ancestry, male sex, increasing age, diabetes, alcohol excess, smoking, and epilepsy (phenytoin). Key clinical features: palpable cords (not tendons), skin pitting/puckering. Unlike ulnar nerve clawing, there is no sensory loss and the deformity is fixed (cannot be passively corrected). Treatment: needle fasciotomy, collagenase injection (Xiapex), or surgical fasciectomy for severe contracture (>30° MCP or any PIP joint flexion — Hueston tabletop test)."
    },
    {
        question: "A 16-year-old elite baseball pitcher develops progressive lateral elbow pain over a season. He reports a loss of throwing velocity. On examination there is lateral elbow tenderness and reduced elbow extension. MRI reveals subchondral changes and a loose body within the capitellum. What is the most likely diagnosis in this age group?",
        options: {
            A: "Lateral epicondylosis",
            B: "Radial head fracture",
            C: "Osteochondritis dissecans of the capitellum",
            D: "Panner's disease",
            E: "Radial tunnel syndrome"
        },
        correctAnswer: "C",
        explanation: "Osteochondritis dissecans (OCD) of the capitellum affects adolescent overhead throwing athletes and gymnasts due to repetitive valgus compression loading of the radiocapitellar joint. It involves avascular necrosis of a segment of articular cartilage and subchondral bone that may remain in situ, become partially detached, or become a loose body causing mechanical locking and extension loss. MRI is the investigation of choice. Panner's disease is AVN of the entire capitellum in younger children (<10 years) — a different, usually self-limiting condition. Stable OCD may be managed conservatively; unstable lesions or loose bodies require arthroscopic intervention."
    }
],

"Lower Limb Pathology": [
    {
        question: "A 72-year-old woman presents to her GP with a 6-month history of progressive right groin pain that radiates to the knee. The pain is worse after prolonged walking and eases with rest. On examination, internal rotation of the hip is the first and most restricted movement, and causes significant pain. She has a mild antalgic gait. What is the most likely diagnosis?",
        options: {
            A: "Trochanteric bursitis",
            B: "Iliopsoas tendinopathy",
            C: "L3 radiculopathy",
            D: "Hip osteoarthritis",
            E: "Meralgia paraesthetica"
        },
        correctAnswer: "D",
        explanation: "Hip osteoarthritis is the most common cause of progressive groin pain in older adults. The hallmark on examination is loss of internal rotation before other movements — the first capsular pattern sign. Pain radiating to the knee reflects the shared L3 nerve supply between the hip and the medial knee, which is why hip pathology classically presents as knee pain in children (slipped femoral epiphysis, Perthes') and adults alike. Trochanteric bursitis causes lateral hip pain worse on lying on the affected side; iliopsoas tendinopathy causes anterior groin pain with hip flexion. X-ray findings include joint space narrowing, subchondral sclerosis, osteophytes, and subchondral cysts."
    },
    {
        question: "An 8-year-old boy is brought to his GP by his parents with a 3-week history of a painless limp. He is afebrile and systemically well. Hip movements are globally restricted and X-ray reveals increased density and flattening of the left femoral head. Blood tests including CRP and WCC are normal. What is the most likely diagnosis and what is the underlying pathological process?",
        options: {
            A: "Septic arthritis — bacterial seeding of the joint space",
            B: "Transient synovitis — self-limiting synovial inflammation",
            C: "Perthes' disease — avascular necrosis of the femoral epiphysis",
            D: "Slipped capital femoral epiphysis — Salter-Harris type I fracture through the growth plate",
            E: "Developmental dysplasia of the hip — failed acetabular coverage"
        },
        correctAnswer: "C",
        explanation: "Perthes' disease (Legg-Calvé-Perthes) is idiopathic avascular necrosis of the capital femoral epiphysis, most commonly affecting boys aged 4–10. The femoral head loses its blood supply, leading to infarction, collapse, and eventual revascularisation and remodelling. It presents insidiously with a painless (or mildly painful) limp, normal inflammatory markers, and characteristic X-ray changes — increased density, fragmentation, and flattening of the femoral head. Septic arthritis is a medical emergency with fever and markedly elevated CRP. SCFE affects heavier, older children (10–14 years) and produces a different X-ray pattern. The Catterall, Herring, and Stulberg classifications guide prognosis."
    },
    {
        question: "A 13-year-old obese boy presents with left knee pain of 2 months' duration. His GP notes that the pain actually appears to be originating from the hip on examination. X-ray of the hip reveals the 'ice cream falling off the cone' sign. Which is the most important next step in management?",
        options: {
            A: "Reassure, advise weight loss, and review in 6 weeks",
            B: "Prescribe NSAIDs and arrange physiotherapy",
            C: "Urgent orthopaedic referral for surgical fixation — weight-bearing must be restricted",
            D: "MRI of the lumbar spine to exclude referred pain",
            E: "Blood tests including ESR and CRP to exclude infection"
        },
        correctAnswer: "C",
        explanation: "Slipped capital femoral epiphysis (SCFE) is the most common hip disorder in adolescents, particularly in overweight boys aged 10–15. The femoral epiphysis slips posteriorly and inferiorly through the hypertrophic zone of the growth plate (Salter-Harris type I equivalent). The 'ice cream falling off the cone' sign on AP X-ray shows medial displacement of the epiphysis relative to the metaphysis. Knee pain is the classic referred pain presentation — the rule is to X-ray the hip in any adolescent with knee pain. Management is urgent in-situ surgical fixation with a single cannulated screw. Continued weight-bearing risks completing the slip with subsequent avascular necrosis — the child must be made non-weight-bearing immediately."
    },
    {
        question: "A 25-year-old female runner presents with anterior knee pain that is worse when descending stairs, sitting for prolonged periods ('theatre sign'), and squatting. On examination there is tenderness on medial facet palpation of the patella and a positive Clarke's test. There is no joint effusion. Which structure is most likely the source of her pain?",
        options: {
            A: "Medial collateral ligament",
            B: "Anterior cruciate ligament",
            C: "Patellofemoral joint",
            D: "Medial meniscus",
            E: "Infrapatellar fat pad"
        },
        correctAnswer: "C",
        explanation: "Patellofemoral pain syndrome (PFPS) is the most common cause of anterior knee pain in active young women. The patellofemoral joint is stressed by descending stairs (up to 3.3× body weight transmitted through the joint), squatting, and sustained knee flexion (the 'theatre sign' or 'movie sign'). Patellar facet tenderness and a positive Clarke's test (pain on resisted knee extension while pressing the patella proximally) confirm the diagnosis. Risk factors include a wider pelvis (increased Q-angle), weak hip abductors, and excessive foot pronation. It is a clinical diagnosis — imaging is usually not required. Management focuses on quadriceps and hip strengthening, and patellar taping."
    },
    {
        question: "A 30-year-old footballer suddenly collapses during a match after pivoting on a planted foot. He hears a 'pop' and cannot continue playing. Within 2 hours his knee has a large haemarthrosis. On examination the next day, the Lachman test is positive with a soft end-point. Which ligament is most likely injured and what is the mechanism?",
        options: {
            A: "Posterior cruciate ligament — hyperextension injury",
            B: "Medial collateral ligament — valgus stress",
            C: "Anterior cruciate ligament — sudden deceleration and tibial internal rotation on a fixed foot",
            D: "Lateral collateral ligament — varus stress",
            E: "Posterolateral corner — hyperextension with external rotation"
        },
        correctAnswer: "C",
        explanation: "ACL rupture is the most common significant knee ligament injury, classically caused by a non-contact deceleration/pivot mechanism with the foot planted and the knee in slight flexion and valgus. The combination of a 'pop', immediate haemarthrosis (haemarthrosis within 2 hours is ACL rupture until proven otherwise — ~70% of acute haemarthroses are ACL tears), and a positive Lachman test (the most sensitive clinical test at ~85%) is diagnostic. The Lachman test — assessing anterior tibial translation at 20–30° of knee flexion — is more sensitive than the anterior drawer test. MRI confirms the diagnosis and identifies concomitant meniscal and other ligament injuries."
    },
    {
        question: "Following an ACL rupture confirmed on MRI, a 28-year-old elite footballer is counselled about management options. He wishes to return to competitive football. His surgeon recommends ACL reconstruction. Which of the following best describes the advantage of hamstring tendon autograft over bone-patellar tendon-bone (BPTB) autograft?",
        options: {
            A: "BPTB grafts are weaker and have a longer biological integration time",
            B: "Hamstring grafts have no donor site morbidity, whereas BPTB grafts risk anterior knee pain and patellar fracture",
            C: "Hamstring grafts are associated with faster return to sport",
            D: "BPTB grafts carry a higher re-rupture rate",
            E: "There is no difference — graft choice is purely based on surgeon preference"
        },
        correctAnswer: "B",
        explanation: "Both hamstring tendon (gracilis and semitendinosus — 'four-strand') and BPTB grafts are widely used in ACL reconstruction with broadly similar outcomes. The key difference is donor site morbidity: BPTB grafts are associated with anterior knee pain (from patellar tendon harvesting), patellar fracture risk, and patella baja — problematic in patients who kneel (e.g. religious practice, manual workers). Hamstring grafts cause less anterior knee pain but may cause hamstring weakness and are sometimes associated with slightly longer biologic graft maturation ('ligamentisation'). BPTB grafts have bone-to-bone healing (faster integration at the tunnel), which is why some surgeons prefer them for high-demand athletes. Overall re-rupture rates are similar."
    },
    {
        question: "A 55-year-old woman presents with medial knee pain and a clicking sensation when squatting. The McMurray test reproduces medial joint line pain with a palpable click on external rotation and valgus stress. There is no instability. MRI reveals a horizontal cleavage tear of the posterior horn of the medial meniscus. Which of the following statements about meniscal tears is correct?",
        options: {
            A: "All meniscal tears should be surgically repaired to prevent cartilage damage",
            B: "The outer one-third of the meniscus (red zone) is avascular and has poor healing potential",
            C: "Horizontal cleavage tears in older patients are degenerative and respond well to conservative management first-line",
            D: "Partial meniscectomy is always superior to conservative management regardless of tear type",
            E: "The medial meniscus is more mobile than the lateral and therefore more prone to degenerative tears"
        },
        correctAnswer: "C",
        explanation: "Meniscal tears should be categorised before deciding management. Degenerative horizontal cleavage tears in middle-aged to elderly patients — particularly those associated with knee OA — respond well to conservative management (physiotherapy, analgesia, activity modification) and the evidence for arthroscopic partial meniscectomy in this group is weak (FIDELITY and METEOR trials show no benefit over physiotherapy alone). The outer red zone (peripheral third) is vascular and heals well — suitable for repair. The inner white zone is avascular. The medial meniscus is LESS mobile (attached to MCL and joint capsule) and therefore more vulnerable to tearing than the highly mobile lateral meniscus."
    },
    {
        question: "A 65-year-old man with severe bilateral knee osteoarthritis is listed for total knee replacement (TKR). Preoperatively, he asks his surgeon about the most common serious complication of TKR. Which of the following is the leading cause of 90-day mortality following TKR?",
        options: {
            A: "Periprosthetic joint infection",
            B: "Aseptic loosening of the prosthesis",
            C: "Venous thromboembolism (DVT and pulmonary embolism)",
            D: "Patella clunk syndrome",
            E: "Periprosthetic fracture"
        },
        correctAnswer: "C",
        explanation: "Venous thromboembolism (VTE) — specifically pulmonary embolism — is the leading cause of 90-day mortality following total knee replacement. The combination of venous stasis, endothelial injury (surgical dissection and tourniquet use), and a hypercoagulable post-operative state (Virchow's triad) creates very high VTE risk. Without prophylaxis, DVT occurs in 40–80% of TKR patients (though most are subclinical). All TKR patients receive VTE prophylaxis (LMWH, aspirin, or a DOAC). Other common complications include infection (1–2%), aseptic loosening (leading cause of revision at >5 years), and stiffness. Patellar clunk syndrome is a specific complication from fibrous tissue catching on the prosthesis."
    },
    {
        question: "A 17-year-old male basketball player presents with anterior knee pain over the tibial tuberosity that has been worsening over 4 months of intensive training. The pain is worse after activity and there is a prominent, tender tibial tuberosity. X-ray shows fragmentation of the tibial tuberosity apophysis. Which diagnosis fits and what is the underlying mechanism?",
        options: {
            A: "Sinding-Larsen-Johansson syndrome — traction apophysitis of the inferior patellar pole",
            B: "Osgood-Schlatter disease — traction apophysitis of the tibial tuberosity",
            C: "Hoffa's (fat pad) syndrome — impingement of the infrapatellar fat pad",
            D: "Patellofemoral pain syndrome — maltracking of the patella",
            E: "Patellar tendinopathy — degenerative change at the tendon origin"
        },
        correctAnswer: "B",
        explanation: "Osgood-Schlatter disease is a traction apophysitis of the tibial tuberosity, caused by repetitive tensile stress from the patellar tendon on the immature apophysis during periods of rapid growth. It affects active adolescents (10–15 years), particularly boys, during growth spurts. The patellar tendon attaches to the tibial tuberosity apophysis — repetitive quadriceps contraction during jumping, sprinting, and landing causes micro-avulsion and inflammation at this attachment. X-ray may show apophyseal fragmentation. Management is conservative: relative rest, quadriceps stretching, and ice. The condition is entirely self-limiting at skeletal maturity (growth plate closure). Sinding-Larsen affects the inferior pole of the patella rather than the tibial tuberosity."
    },
    {
        question: "A 45-year-old female teacher presents with pain directly behind the kneecap that is worse going upstairs and after sitting for long periods. A separate patient, a 22-year-old male long-distance runner, presents with pain at the inferior pole of the patella that is worse jumping and is point tender on palpation below the patella. Which of the following correctly distinguishes these two conditions?",
        options: {
            A: "Both are patellar tendinopathy; they differ only in the severity of the tendon damage",
            B: "The teacher has patellofemoral pain syndrome (retropatellar); the runner has patellar tendinopathy (inferior pole) — distinguished by pain location and aggravating activities",
            C: "Both are managed identically with quadriceps strengthening",
            D: "The runner's condition is more likely to require surgical intervention",
            E: "The teacher's condition is caused by tendon degeneration; the runner's is caused by cartilage wear"
        },
        correctAnswer: "B",
        explanation: "These are two distinct conditions with different anatomical locations and mechanisms. Patellofemoral pain syndrome produces retropatellar pain aggravated by loading the PFJ in flexion (stairs, sitting — 'theatre sign'). Patellar tendinopathy ('jumper's knee') produces pain at the inferior pole of the patella — the tendon origin — aggravated by jumping and sprinting activities that load the tendon under tension. Clinically: PFPS has tenderness on medial/lateral patellar facet palpation; patellar tendinopathy has point tenderness precisely at the inferior patellar pole. Both are managed with load management and progressive strengthening (eccentric loading/heavy slow resistance being the cornerstone of tendinopathy treatment), but the specific exercise approach differs."
    },
    {
        question: "A 70-year-old man with known knee osteoarthritis presents with sudden onset of a hot, acutely swollen, extremely painful right knee. His temperature is 37.4°C. He is on no new medications. Joint aspiration yields turbid fluid containing rhomboid-shaped crystals that are weakly positively birefringent under polarised light microscopy. Which diagnosis does this represent?",
        options: {
            A: "Septic arthritis — gram-positive cocci infection",
            B: "Gout — monosodium urate crystals",
            C: "Calcium pyrophosphate deposition disease (pseudogout)",
            D: "Reactive arthritis following recent infection",
            E: "Haemarthrosis from ACL rupture"
        },
        correctAnswer: "C",
        explanation: "Calcium pyrophosphate deposition (CPPD) disease — 'pseudogout' — presents with an acute inflammatory monoarthritis, most commonly in the knee. Crystals are calcium pyrophosphate dihydrate (CPPD), which appear rhomboid-shaped and weakly positively birefringent under polarised light (as opposed to gout crystals which are needle-shaped and negatively birefringent). Chondrocalcinosis (calcification of cartilage) is the classic X-ray finding. CPPD is associated with OA, haemochromatosis, hyperparathyroidism, and hypomagnesaemia. Management of the acute attack mirrors gout: NSAIDs, colchicine, or intra-articular steroid. Septic arthritis must always be excluded when joint aspiration reveals turbid fluid — send for MC&S."
    },
    {
        question: "A 60-year-old woman presents with a 4-month history of medial knee pain and swelling. She describes pain at the medial joint line and reports that her knee sometimes 'gives way'. On MRI there is a complex tear of the medial meniscus and early medial compartment cartilage loss with varus deformity of the knee. Which factor most determines whether she would benefit from a high tibial osteotomy (HTO) rather than total knee replacement?",
        options: {
            A: "Her age",
            B: "The presence of a meniscal tear",
            C: "The severity of symptoms",
            D: "Isolated medial compartment disease with preserved lateral compartment and young, active patient",
            E: "The presence of varus deformity alone"
        },
        correctAnswer: "D",
        explanation: "High tibial osteotomy (HTO) realigns the mechanical axis of the lower limb to offload the diseased medial compartment — it is joint-preserving surgery. The ideal candidate has unicompartmental (medial) OA, a varus deformity, is younger and active (< ~60 years), has a good range of motion, and an intact lateral compartment and ACL. In older, less active patients with bicompartmental or tricompartmental disease, TKR is more appropriate. HTO preserves the native joint and delays or avoids arthroplasty. Unicompartmental knee replacement (UKR) is another option for isolated medial disease in older, lower-demand patients. Age alone does not determine choice — functional demand and disease distribution are more important."
    },
    {
        question: "A 19-year-old female netball player twists her knee landing awkwardly. She continues playing but develops diffuse medial knee swelling and pain over the following days. On examination the medial collateral ligament is tender along its entire length and there is valgus laxity at 30° of flexion but not at full extension. The ACL is intact. How should this injury be managed?",
        options: {
            A: "Urgent MRI followed by immediate surgical repair",
            B: "Knee aspiration, immobilisation in a full-length plaster cast for 6 weeks",
            C: "Conservative management — functional rehabilitation with a hinged brace; surgery is rarely needed for isolated MCL injuries",
            D: "Immediate arthroscopy to assess the menisci",
            E: "Cross-referral to vascular surgery to exclude a popliteal artery injury"
        },
        correctAnswer: "C",
        explanation: "Isolated medial collateral ligament (MCL) injuries are the most common knee ligament injury and almost universally respond to conservative management, regardless of grade. The MCL has excellent healing potential due to its robust blood supply. The findings here — tenderness along the MCL, valgus laxity at 30° (indicating MCL injury) but stability at full extension (indicating an intact posterior capsule and cruciate ligaments) — describe a Grade II MCL tear. Management is functional: hinged brace for comfort and protection, early weight-bearing, and progressive physiotherapy. Surgery is reserved for combined ligament injuries (e.g., ACL + MCL) or the rare complete Grade III with gross instability that fails conservative treatment."
    },
    {
        question: "A 50-year-old man presents with posterior knee pain and swelling. On examination there is a smooth, non-tender, transilluminable cystic swelling in the popliteal fossa, which is most prominent when the knee is extended and becomes less palpable in flexion. He has no locking or giving way. What is the underlying cause and how should it be managed?",
        options: {
            A: "Popliteal artery aneurysm — urgent vascular referral required",
            B: "Sarcoma — urgent MRI and oncology referral",
            C: "Baker's (popliteal) cyst — a synovial fluid-filled cyst secondary to intra-articular pathology; treat the underlying cause",
            D: "Deep vein thrombosis — lower limb Doppler ultrasound required urgently",
            E: "Semimembranosus bursa — aspiration and steroid injection are curative"
        },
        correctAnswer: "C",
        explanation: "A Baker's cyst (popliteal cyst) is a fluid-filled synovial cyst arising from the gastrocnemio-semimembranosus bursa, which communicates with the knee joint via a one-way valve mechanism. Raised intra-articular pressure (from effusion caused by meniscal tear, OA, or inflammatory arthritis) forces synovial fluid posteriorly. Key features: smooth, fluctuant, transilluminable, located in the medial popliteal fossa, less prominent in flexion. Crucially, treatment is directed at the underlying intra-articular pathology — not the cyst itself. Rupture of a Baker's cyst can mimic a DVT ('pseudothrombophlebitis' — calf pain and swelling). Ultrasound is the investigation of choice to confirm the diagnosis and exclude DVT."
    },
    {
        question: "A 35-year-old marathon runner presents with lateral knee pain that comes on consistently at around 8km into each run and resolves quickly with rest. The pain is sharp and located over the lateral femoral epicondyle. He has no joint effusion and full range of motion. The Noble compression test is positive. What is the pathological structure involved?",
        options: {
            A: "Lateral collateral ligament",
            B: "Biceps femoris tendon",
            C: "Iliotibial band",
            D: "Lateral meniscus",
            E: "Common peroneal nerve"
        },
        correctAnswer: "C",
        explanation: "Iliotibial band syndrome (ITBS) is the most common cause of lateral knee pain in runners. As the knee flexes and extends around 30° (typically occurring at approximately 8km — hence the consistent onset distance), the iliotibial band repetitively crosses over the lateral femoral epicondyle, generating friction and compression against the underlying fat pad. The Noble compression test (firm pressure over the lateral epicondyle at 30° knee flexion) reproduces the pain. The ITB is a thickening of the iliotibial tract — a sheet of dense fascia extending from the iliac crest to Gerdy's tubercle on the tibia. Risk factors include a high weekly training volume, downhill running, and hip abductor weakness."
    },
    {
        question: "A 78-year-old woman sustains a fall in her garden. She is brought to the emergency department unable to weight-bear. On examination, the right leg is shortened, externally rotated, and abducted. X-ray confirms an intracapsular neck of femur fracture. Her Garden classification is Grade III. She is medically fit for surgery. What is the most appropriate surgical management?",
        options: {
            A: "Dynamic hip screw fixation",
            B: "Total hip replacement",
            C: "Hemiarthroplasty (cemented)",
            D: "Intramedullary nail fixation",
            E: "Conservative management with traction and bed rest"
        },
        correctAnswer: "C",
        explanation: "In elderly patients with displaced intracapsular neck of femur fractures (Garden III–IV), the disrupted blood supply to the femoral head (via the medial femoral circumflex artery) means internal fixation has unacceptably high rates of avascular necrosis and fixation failure. Hemiarthroplasty (replacing the femoral head but not the acetabulum) is the standard of care for the majority of displaced intracapsular fractures in older patients. Cemented hemiarthroplasty is preferred in most elderly patients — it allows immediate full weight-bearing. Total hip replacement is considered in patients who were mobile and independently active pre-injury with no significant cognitive impairment (NICE guidance). Dynamic hip screw is used for extracapsular (intertrochanteric/subtrochanteric) fractures."
    },
    {
        question: "A 55-year-old woman is recovering from a total hip replacement performed 2 years ago. She presents with new onset of groin pain and stiffness that is gradually worsening. She has no fever and inflammatory markers are normal. X-ray shows a radiolucent line around the femoral stem with evidence of bone resorption. Which complication has most likely occurred?",
        options: {
            A: "Periprosthetic joint infection",
            B: "Aseptic loosening of the prosthesis",
            C: "Stress fracture of the femoral stem",
            D: "Iliopsoas impingement on the acetabular cup",
            E: "Heterotopic ossification"
        },
        correctAnswer: "B",
        explanation: "Aseptic loosening is the most common cause of late total hip replacement failure (>5 years post-operatively) and the leading indication for revision hip surgery. It results from an inflammatory response to wear debris (polyethylene, metal, or ceramic particles) from the bearing surface, triggering osteoclast-mediated periprosthetic bone resorption (osteolysis). This weakens the bone-implant interface, causing mechanical loosening. X-ray shows a radiolucent line (>2mm) around the implant, osteolysis, and component migration. In contrast, periprosthetic infection typically presents with raised CRP/ESR, fever, and pain from early post-operatively. Isotope bone scan and aspiration under image guidance help differentiate the two."
    },
    {
        question: "A 40-year-old male cyclist presents with a 3-month history of pain and swelling over the lateral aspect of the ankle following a sprint training incident. The pain is reproduced by resisted eversion of the foot. On ultrasound, there is thickening and hypoechogenicity of a tendon running posterior to the lateral malleolus. Which tendon is involved?",
        options: {
            A: "Tibialis posterior tendon",
            B: "Flexor hallucis longus tendon",
            C: "Peroneus brevis tendon",
            D: "Extensor digitorum longus tendon",
            E: "Achilles tendon"
        },
        correctAnswer: "C",
        explanation: "Peroneus brevis tendinopathy presents with posterolateral ankle pain, reproduced by resisted eversion. Peroneus brevis runs posterior to the lateral malleolus (within the peroneal groove) and inserts into the base of the 5th metatarsal. It is stabilised by the superior peroneal retinaculum. Chronic injury or sudden inversion trauma can cause longitudinal splitting of the tendon as it is compressed against the fibula by the retinaculum — a 'peroneal split tear'. Tibialis posterior runs medially (behind the medial malleolus); FHL is deep and medial; Achilles is posterior and central. Peroneal pathology is commonly misdiagnosed as chronic 'ankle sprain'."
    },
    {
        question: "A 62-year-old woman with a BMI of 34 presents with a 2-year history of bilateral heel pain that is worst with the first steps in the morning and after prolonged sitting. The pain eases after walking for 10 minutes but returns with extended activity. On examination there is point tenderness over the medial calcaneal tubercle. Which is the most likely diagnosis and what is first-line management?",
        options: {
            A: "Achilles tendinopathy — eccentric calf strengthening programme",
            B: "Retrocalcaneal bursitis — aspiration and steroid injection",
            C: "Plantar fasciitis — stretching exercises, insoles, and activity modification",
            D: "Calcaneal stress fracture — rest and non-weight-bearing for 6 weeks",
            E: "Tarsal tunnel syndrome — nerve conduction studies and orthotics"
        },
        correctAnswer: "C",
        explanation: "Plantar fasciitis is the most common cause of heel pain, affecting approximately 10% of the population at some point. The classic history is start-up pain (worst with the first steps of the day after a period of rest), which eases with walking but returns with prolonged activity. Point tenderness at the medial calcaneal tubercle (the origin of the plantar fascia) is pathognomonic. Risk factors include obesity, prolonged standing, flat feet (pes planus), and tight calf muscles. First-line management is conservative: plantar fascia and calf stretching, cushioned insoles, and activity modification. The vast majority (90%) resolve within 12 months. Second-line options include steroid injection, shock wave therapy, and (rarely) surgical fasciotomy."
    },
    {
        question: "A 25-year-old male falls while playing basketball and lands awkwardly on the lateral aspect of his ankle. He presents with significant lateral ankle swelling, bruising, and inability to weight-bear. The anterior drawer test of the ankle is significantly positive. X-ray shows no fracture. Which ligament is most commonly injured in this mechanism, and what clinical tool determines whether an X-ray is necessary?",
        options: {
            A: "Calcaneofibular ligament; X-ray always required for ankle injuries",
            B: "Anterior talofibular ligament; Ottawa ankle rules determine need for X-ray",
            C: "Posterior talofibular ligament; X-ray required if there is any swelling",
            D: "Deltoid ligament; clinical examination alone is sufficient",
            E: "Bifurcate ligament; the Simmonds test determines severity"
        },
        correctAnswer: "B",
        explanation: "The anterior talofibular ligament (ATFL) is the weakest and most commonly injured ankle ligament, torn in inversion + plantarflexion injuries. The lateral ligament complex consists of ATFL (most commonly injured), calcaneofibular ligament (CFL), and posterior talofibular ligament (PTFL — rarely injured). The anterior drawer test specifically tests ATFL integrity. The Ottawa ankle rules are the validated clinical decision tool: X-ray is needed if there is bony tenderness over the posterior distal 6cm of the fibula or tibia, or at the navicular or base of 5th metatarsal, OR inability to weight-bear 4 steps both in the ED and at the time of injury. These rules have ~98% sensitivity for excluding ankle fractures."
    },
    {
        question: "A 48-year-old woman presents with a 6-month history of progressive medial ankle pain and swelling. She notices her medial arch has dropped on the affected side compared to the other. She cannot perform a single-leg heel rise on the affected side. On examination the 'too many toes' sign is positive on the affected side when viewing from behind. Which structure is most likely the primary cause?",
        options: {
            A: "Deltoid ligament rupture",
            B: "Spring (plantar calcaneonavicular) ligament tear",
            C: "Tibialis posterior tendon dysfunction",
            D: "Plantar fascia rupture",
            E: "Flexor digitorum longus tendinopathy"
        },
        correctAnswer: "C",
        explanation: "Tibialis posterior tendon dysfunction (TPTD) is the most common cause of adult-acquired flatfoot deformity. Tibialis posterior (innervated by the tibial nerve, L4–L5) is the primary dynamic stabiliser of the medial longitudinal arch. Progressive tendon degeneration leads to inability to invert and plantarflex the foot, collapse of the medial arch, hindfoot valgus, and forefoot abduction. The 'too many toes' sign (more than two toes visible lateral to the leg when viewed from behind — due to forefoot abduction) and inability to perform a single-leg heel rise are classic findings. The Johnson and Strom classification guides management from conservative (orthoses) through tendon transfer to arthrodesis."
    },
    {
        question: "A 35-year-old male recreational runner presents with mid-portion Achilles pain that is worse after running and stiff in the morning. He has no history of steroid injections or fluoroquinolone use. On examination there is a fusiform swelling at the mid-portion of the tendon (2–6cm above the insertion), which is tender. The Simmonds (Thompson) test is negative. What is the most appropriate first-line management?",
        options: {
            A: "MRI Achilles tendon followed by surgical debridement",
            B: "Corticosteroid injection into the tendon sheath",
            C: "Heavy slow resistance (HSR) or eccentric calf loading programme",
            D: "Complete rest in a CAM boot for 12 weeks",
            E: "Extracorporeal shock wave therapy as first-line treatment"
        },
        correctAnswer: "C",
        explanation: "Mid-portion Achilles tendinopathy is a clinical diagnosis characterised by localised mid-tendon pain (2–6cm above insertion), morning stiffness, and a fusiform swelling. A negative Simmonds test confirms the tendon is intact. The cornerstone of evidence-based management is progressive tendon loading — initially eccentric calf loading (the Alfredson protocol) and increasingly heavy slow resistance (HSR) training, which has superior evidence. Both programmes mechanically stimulate collagen remodelling in the degenerative tendon. Corticosteroid injections around the Achilles carry a risk of tendon rupture and should be avoided in mid-portion tendinopathy. Shock wave therapy is a second-line option after failed loading programmes."
    },
    {
        question: "A 55-year-old woman hears a loud 'pop' while lunging in a tennis match. She feels immediate pain above the heel and cannot plantarflex against resistance. On examination there is a palpable gap above the heel, and the Simmonds test is positive (absence of plantarflexion when the calf is squeezed in prone position). What is the most appropriate management for an active, healthy adult?",
        options: {
            A: "Immediate surgical repair is always required regardless of patient factors",
            B: "Conservative management in a CAM boot in equinus followed by graduated rehabilitation is equivalent to surgery in terms of re-rupture rates when using functional bracing protocols",
            C: "Aspiration of the haematoma and corticosteroid injection to reduce inflammation",
            D: "Immediate full weight-bearing as tolerated to stimulate healing",
            E: "MRI is required before any management decision"
        },
        correctAnswer: "B",
        explanation: "Achilles tendon rupture management has historically been debated (surgery vs. conservative), but high-quality evidence — including the UKSTAR RCT — demonstrates that functional rehabilitation using a CAM boot with early weight-bearing produces re-rupture rates equivalent to surgery (~3%), with less surgical complication risk (wound dehiscence, infection, nerve injury). Surgery may offer a slightly faster return to function for elite athletes. Current NICE guidance supports either approach, with shared decision-making. The key advancement is the modern functional bracing protocol (progressive weight-bearing within days, not prolonged immobilisation) — this significantly improved conservative outcomes compared to historical cast-only protocols."
    },
    {
        question: "A 16-year-old male presents to his GP with a 6-month history of anterior knee pain. He is a competitive footballer. On examination there is a tender lump at the inferior pole of the patella rather than at the tibial tuberosity. X-ray shows calcification at the inferior patellar pole. What is the diagnosis?",
        options: {
            A: "Osgood-Schlatter disease",
            B: "Patellofemoral pain syndrome",
            C: "Sinding-Larsen-Johansson syndrome",
            D: "Patellar tendinopathy",
            E: "Bipartite patella"
        },
        correctAnswer: "C",
        explanation: "Sinding-Larsen-Johansson (SLJ) syndrome is a traction apophysitis at the inferior pole of the patella — the proximal attachment of the patellar tendon to the patella itself. It occurs in active adolescents aged 10–14 years during growth spurts, due to repetitive traction from the patellar tendon. The key distinguishing feature from Osgood-Schlatter (which affects the tibial tuberosity apophysis distally) is the location of tenderness — at the inferior patellar pole rather than the tuberosity. Both are entirely self-limiting conditions managed conservatively with relative rest, stretching, and activity modification until skeletal maturity. Calcification or ossicle formation at the inferior pole may be visible on X-ray."
    },
    {
        question: "A 30-year-old female long-distance runner presents with insidious onset of shin pain that has progressively worsened over 4 weeks of increased training. The pain is now present with walking and at rest. On examination there is exquisite point tenderness over the mid-shaft of the tibia. X-ray is normal. What is the most important investigation and what would you expect to find?",
        options: {
            A: "Nerve conduction studies — to exclude common peroneal nerve compression",
            B: "Compartment pressure measurement — elevated pressures confirm the diagnosis",
            C: "MRI of the tibia — periosteal oedema and cortical stress reaction or fracture line confirms a stress fracture",
            D: "Blood tests including ALP and PTH — to exclude Paget's disease",
            E: "Bone scan — it has superior specificity to MRI in this scenario"
        },
        correctAnswer: "C",
        explanation: "A tibial stress fracture should be suspected in any runner with point-tender shin pain that is worsening and now present at rest — this represents a progression from stress reaction to stress fracture. X-rays are often normal in early stress fractures (sensitivity ~50%). MRI is the gold standard investigation — it detects periosteal oedema, endosteal marrow oedema, and the fracture line itself, and allows grading of severity (Fredericson/MRI grading). High-grade tibial stress fractures ('dreaded black line' on the anterior cortex — a tension-side fracture) carry a risk of complete fracture and may require intramedullary nailing. Management ranges from activity modification to surgical fixation depending on grade and location."
    },
    {
        question: "A 58-year-old man with a history of gout presents with an acutely swollen, hot, red first metatarsophalangeal joint. He is on allopurinol. His serum urate is within the normal range. He is unable to weight-bear. How should this acute attack be managed?",
        options: {
            A: "Stop allopurinol immediately — it is causing the flare",
            B: "Increase the allopurinol dose to lower urate further",
            C: "Treat the acute attack with an NSAID, colchicine, or corticosteroid; continue allopurinol unchanged",
            D: "Joint aspiration and culture — this presentation must be septic arthritis",
            E: "Arrange urgent urate-lowering therapy with febuxostat as first-line in an acute attack"
        },
        correctAnswer: "C",
        explanation: "A common and important clinical mistake is stopping allopurinol during an acute gout flare. Current BSR and EULAR guidelines are clear: allopurinol should be continued at its current dose during acute gout attacks — stopping it causes fluctuations in serum urate that can prolong or worsen the attack by mobilising urate crystals from joints. The normal serum urate during a flare is also not reassuring — urate levels fall acutely during inflammation. Acute attacks are treated with NSAIDs (e.g. naproxen), colchicine, or prednisolone — whichever is most appropriate given the patient's comorbidities (NSAIDs cautiously in renal disease). Urate-lowering therapy adjustments should wait until the acute attack has fully settled."
    },
    {
        question: "A 45-year-old woman presents with lateral hip pain that is worse when lying on the affected side at night and when walking up stairs. There is no groin pain. On examination there is marked tenderness directly over the greater trochanter. Hip range of motion is full and painless. FABER and FADIR tests are negative. What is the most likely diagnosis?",
        options: {
            A: "Hip osteoarthritis",
            B: "L4 radiculopathy",
            C: "Gluteal tendinopathy / Greater trochanteric pain syndrome",
            D: "Meralgia paraesthetica",
            E: "Avascular necrosis of the femoral head"
        },
        correctAnswer: "C",
        explanation: "Greater trochanteric pain syndrome (GTPS) — previously called trochanteric bursitis — encompasses gluteal tendinopathy and trochanteric bursitis. It is the most common cause of lateral hip pain, predominantly affecting middle-aged women. Key features: point tenderness over the greater trochanter, pain on lying on the affected side, aggravation by stairs and prolonged walking, and critically — full, painless hip range of motion (distinguishing it from OA and intra-articular pathology). Current understanding emphasises gluteus medius and minimus tendinopathy as the primary pathology (compressive loading at the greater trochanter is the mechanism), with bursitis being secondary. Management: load management, gluteal strengthening, avoiding compressive postures (crossing legs, hip adduction)."
    },
    {
        question: "A 70-year-old man presents with severe bilateral leg pain that comes on after walking 200m and is relieved completely by sitting down or leaning forwards (e.g. pushing a shopping trolley). Neurological examination at rest is normal. Which diagnosis best explains the postural dependence of his symptoms?",
        options: {
            A: "Peripheral arterial disease — intermittent claudication",
            B: "Bilateral hip osteoarthritis causing referred leg pain",
            C: "Lumbar spinal stenosis — neurogenic claudication",
            D: "Bilateral popliteal artery entrapment",
            E: "Diabetic peripheral neuropathy"
        },
        correctAnswer: "C",
        explanation: "Neurogenic claudication from lumbar spinal stenosis is distinguished from vascular claudication by its postural dependence. Lumbar extension (upright walking) reduces the cross-sectional area of the spinal canal and foramina, compressing the cauda equina and causing bilateral leg pain, heaviness, and paraesthesia. Flexion (sitting, leaning forward, uphill walking, pushing a trolley) increases the canal diameter and relieves symptoms. Vascular claudication is purely distance-dependent, is not relieved by posture, resolves rapidly with standing still, and is associated with reduced ankle-brachial pressure index and absent pulses. MRI lumbar spine is the investigation of choice. Management options include physiotherapy, epidural steroid injection, or surgical decompression."
    },
    {
        question: "A 68-year-old woman falls from standing and presents with a painful, swollen ankle. X-ray shows a spiral fracture of the distal fibula at the level of the ankle mortise with medial clear space widening on the mortise view. According to the Lauge-Hansen classification, which injury mechanism does this describe?",
        options: {
            A: "Supination-adduction — a vertical medial malleolus fracture",
            B: "Pronation-abduction — high fibula fracture with deltoid rupture",
            C: "Supination-external rotation — the most common ankle fracture pattern",
            D: "Pronation-external rotation — Maisonneuve fracture",
            E: "Direct axial load — pilon fracture of the tibial plafond"
        },
        correctAnswer: "C",
        explanation: "The Lauge-Hansen classification describes ankle fracture patterns based on foot position and deforming force. Supination-external rotation (SER) is the most common mechanism, accounting for ~60% of ankle fractures. Stage I: ATFL injury; Stage II: fibula fracture at the level of the mortise (oblique/spiral); Stage III: posterior malleolus fracture; Stage IV: medial malleolus fracture or deltoid rupture. Medial clear space widening (>4mm on mortise view) indicates deltoid ligament rupture or medial malleolus fracture and implies an unstable bimallleolar equivalent injury requiring surgical fixation. The Weber classification (A/B/C) describes fibula fracture level relative to the syndesmosis, which has implications for stability and management."
    },
    {
        question: "A 20-year-old female gymnast presents with anterior hip pain that clicks and catches with hip flexion and internal rotation. She reports the hip 'jamming' at end-range. MRI reveals a cam-type morphology of the femoral head-neck junction and a labral tear at the anterosuperior acetabulum. Which diagnosis does this represent?",
        options: {
            A: "Developmental dysplasia of the hip",
            B: "Iliopsoas snapping hip (coxa saltans)",
            C: "Femoroacetabular impingement (FAI) syndrome",
            D: "Hip flexor strain",
            E: "Avascular necrosis of the femoral head"
        },
        correctAnswer: "C",
        explanation: "Femoroacetabular impingement (FAI) syndrome is caused by abnormal contact between the femoral head-neck junction and the acetabular rim during hip flexion, internal rotation, and adduction. There are two morphological types: cam impingement (non-spherical femoral head — 'pistol grip' deformity, common in young athletic males) and pincer impingement (over-coverage of the acetabulum, common in middle-aged females). Cam FAI generates shear stress on the anterosuperior labrum and cartilage, leading to labral tears and early OA if untreated. The FADIR test (Flexion, ADduction, Internal Rotation) is the primary provocation test. Management: physiotherapy initially; arthroscopic cam resection and labral repair for those failing conservative treatment."
    },
    {
        question: "A 65-year-old male diabetic presents with a swollen, red, warm foot with no pain despite significant deformity. The foot appears to have a 'rocker bottom' deformity. He has reduced vibration sense and absent ankle reflexes. X-ray shows fragmentation, dislocation, and new bone formation affecting the midfoot joints. Which diagnosis accounts for this presentation?",
        options: {
            A: "Septic arthritis of the midfoot",
            B: "Osteomyelitis with abscess formation",
            C: "Charcot neuropathic arthropathy (Charcot joint)",
            D: "Gout affecting the midfoot",
            E: "Avascular necrosis of the navicular"
        },
        correctAnswer: "C",
        explanation: "Charcot neuropathic arthropathy (Charcot joint) is a progressive, destructive arthropathy occurring in patients with peripheral neuropathy — most commonly diabetic neuropathy. The loss of protective pain sensation allows repetitive micro-trauma to accumulate, leading to inflammatory bone destruction, fracture, dislocation, and deformity. The midfoot (Lisfranc joints) is most commonly affected in diabetic Charcot. Critically, the foot is swollen, warm, and red but PAINLESS — due to absent nociception. X-ray shows the '5Ds': Distension, Density change, Debris (loose bodies), Disorganisation, and Dislocation. Differentiating from osteomyelitis is critical — both present with a hot foot in a diabetic. MRI, white cell scans, or bone biopsy may be needed."
    },
    {
        question: "A 52-year-old woman undergoes total hip replacement via a posterior approach. On the first post-operative day she is found on the floor having slipped whilst transferring to the commode. Her hip is painful and her leg appears shortened and internally rotated. X-ray confirms prosthetic dislocation. Which approach to TKR carries the lowest risk of post-operative dislocation?",
        options: {
            A: "Posterior approach — soft tissue repair reduces but does not eliminate risk",
            B: "Anterolateral (Hardinge) approach — preserves the posterior capsule",
            C: "Direct anterior approach — preserves both the posterior capsule and external rotators, the lowest dislocation risk",
            D: "Lateral (Trochanteric flip) approach",
            E: "All approaches carry identical dislocation risk"
        },
        correctAnswer: "C",
        explanation: "Post-operative hip dislocation occurs in approximately 1–4% of primary THRs via the posterior approach (historically higher before routine posterior capsular repair). The direct anterior approach (DAA) preserves the posterior capsule and short external rotator muscles entirely — the structures that restrain posterior dislocation — giving the lowest theoretical dislocation risk. The anterolateral (Hardinge) approach splits and repairs the gluteus medius and minimus, preserving the posterior structures. The posterior approach divides the short external rotators (piriformis, obturator internus, gemelli) and posterior capsule to access the joint, which — even with repair — leaves the joint relatively vulnerable posteriorly. Post-operative dislocation precautions (no hip flexion >90°, no internal rotation, no adduction) are most critical following the posterior approach."
    },
    {
        question: "A 10-year-old boy presents with a 2-week history of fever, right knee pain, and refusal to weight-bear. His temperature is 38.7°C. Blood tests show WCC 18 × 10⁹/L and CRP 145 mg/L. Ultrasound shows an effusion in the knee joint. The Kocher criteria are being applied. Which of the following is NOT one of the four Kocher criteria for predicting septic arthritis in children?",
        options: {
            A: "Fever above 38.5°C",
            B: "Non-weight-bearing",
            C: "ESR > 40 mm/hr",
            D: "WCC > 12 × 10⁹/L",
            E: "CRP > 20 mg/L"
        },
        correctAnswer: "E",
        explanation: "The four original Kocher criteria for predicting septic arthritis in children are: (1) fever >38.5°C, (2) non-weight-bearing, (3) ESR >40mm/hr, and (4) WCC >12 × 10⁹/L. CRP >20 mg/L was later added as a fifth predictor by Caird et al., increasing the model's sensitivity. The probability of septic arthritis increases with the number of criteria met: 1 criterion ~3%, 2 criteria ~40%, 3 criteria ~93%, 4 criteria ~99%. Septic arthritis is a surgical emergency requiring urgent joint washout and IV antibiotics to prevent articular cartilage destruction by bacterial proteases and inflammatory mediators. Transient synovitis (the most common differential) is typically afebrile with normal or mildly elevated inflammatory markers."
    },
    {
        question: "A 30-year-old male recreational footballer tears his ACL. He opts for conservative management. His physiotherapist advises him on the risk of developing knee osteoarthritis. Which statement best reflects the evidence on long-term outcomes following ACL rupture?",
        options: {
            A: "ACL reconstruction eliminates the risk of developing knee OA",
            B: "Conservative management is associated with a significantly higher rate of OA than surgical reconstruction",
            C: "Both ACL reconstruction and conservative management are associated with increased rates of knee OA at 10–15 years compared to uninjured knees, regardless of treatment choice",
            D: "The development of OA is determined primarily by whether a meniscal injury occurred at the time of the ACL tear",
            E: "Knee OA after ACL injury only develops if a second injury occurs"
        },
        correctAnswer: "C",
        explanation: "This is an important and nuanced evidence-based point. Long-term studies (including the KANON trial and systematic reviews) consistently show that ACL rupture itself — regardless of whether it is managed surgically or conservatively — is associated with a significantly increased risk of tibiofemoral OA at 10–20 years (approximately 50% develop OA). ACL reconstruction does not prevent OA development. The index injury (with associated chondral damage and haemarthrosis) and any concomitant meniscal injury are the primary drivers of OA risk, not the management strategy. This evidence should be incorporated into shared decision-making about surgical reconstruction — the primary goals of surgery are joint stability and return to sport, not OA prevention."
    },
    {
        question: "A 60-year-old woman presents with severe pain, swelling, and bruising around the knee following a trivial twist. X-ray reveals a comminuted distal femur fracture extending into the knee joint. She has diabetes and osteoporosis. Which principle is most important when deciding on surgical versus conservative management?",
        options: {
            A: "Age is the primary determinant — patients over 60 should always be managed conservatively",
            B: "Conservative management in a cast is appropriate for non-displaced fractures; surgical fixation is required for displaced or articular fractures to restore anatomy and allow early mobilisation",
            C: "Osteoporosis is a contraindication to surgical fixation",
            D: "Intra-articular extension is not a significant factor in management decisions",
            E: "Diabetes is an absolute contraindication to knee surgery"
        },
        correctAnswer: "B",
        explanation: "The management of distal femur fractures (and most articular fractures) follows the AO principle: anatomical reduction of articular surfaces, stable internal fixation, and early mobilisation. Intra-articular (condylar) fractures require anatomical reduction to restore joint congruity — even 2mm of articular step-off significantly increases the risk of post-traumatic OA. Prolonged immobilisation in a cast (non-operative management) for displaced intra-articular fractures results in malunion, joint stiffness, and poor functional outcomes. Locking plate systems now allow secure fixation even in osteoporotic bone. Diabetes and osteoporosis increase surgical risk and complicate healing but are not contraindications. The goal is to get the patient mobile as soon as possible to reduce VTE risk and preserve function."
    },
    {
        question: "A 22-year-old female sprinter develops medial shin pain during a training block. She describes a diffuse, dull ache along the inner border of the tibia that begins after running and takes hours to resolve. Unlike a stress fracture, the pain is diffuse rather than point-specific, and X-ray and MRI show no cortical abnormality but bilateral periosteal oedema. Which diagnosis best fits?",
        options: {
            A: "Tibial stress fracture",
            B: "Chronic exertional compartment syndrome",
            C: "Medial tibial stress syndrome (shin splints)",
            D: "Tibial periostitis from vitamin D deficiency",
            E: "Deep vein thrombosis of the posterior tibial vein"
        },
        correctAnswer: "C",
        explanation: "Medial tibial stress syndrome (MTSS) — 'shin splints' — is a diagnosis of exclusion in runners, characterised by diffuse pain along the posteromedial tibial border that is aggravated by exercise. Unlike a stress fracture, tenderness spans a broad area (>5cm) rather than being focal, and MRI shows periosteal reaction without cortical involvement. The pathophysiology involves traction stress on the periosteum from the soleus and deep flexor muscles at their tibial origin, causing periosteal inflammation. Risk factors include foot pronation, training errors, and female sex (female athlete triad). Management: relative rest, correction of training errors, footwear assessment, and gradual return to running. Chronic exertional compartment syndrome causes pain that resolves immediately with rest and is confirmed by compartment pressure measurement."
    },
    {
        question: "A 75-year-old woman on long-term bisphosphonate therapy presents with a low-energy fracture of the femoral shaft. X-ray shows a simple, transverse fracture with cortical thickening and a 'beak' of periosteal reaction on the lateral cortex. Contralateral X-ray shows early similar changes. Which fracture type does this represent and what is the implication for the contralateral side?",
        options: {
            A: "Pathological fracture from metastatic bone disease — requires staging CT scan",
            B: "Atypical femoral fracture from bisphosphonate therapy — prophylactic nailing of the contralateral femur should be considered",
            C: "Paget's disease-related fracture — bone biopsy required",
            D: "Insufficiency fracture from osteoporosis — continue bisphosphonates",
            E: "Stress fracture from excessive exercise — stop bisphosphonates and investigate for osteoporosis"
        },
        correctAnswer: "B",
        explanation: "Atypical femoral fractures (AFFs) are a well-recognised complication of long-term bisphosphonate therapy (typically >5 years). Bisphosphonates suppress bone remodelling — with prolonged use, accumulated micro-damage cannot be repaired, leading to stress fracture progression. Characteristic features: subtrochanteric or diaphyseal location, transverse or short oblique pattern, lateral cortical thickening and 'beaking', minimal trauma, and often bilateral. The contralateral femur is at high risk and must be X-rayed — if prodromal pain or imaging changes are present, prophylactic intramedullary nailing should be considered. Bisphosphonates should be stopped ('drug holiday'). AFF management: surgical nailing for complete fractures, as conservative management has very high failure rates."
    },
    {
        question: "A 50-year-old man presents with pain and swelling at the back of his heel, worse when wearing rigid shoes. He has a prominent bony lump at the posterosuperior aspect of the calcaneum. On examination the pain is reproduced by squeezing the heel from both sides and by placing the shoe counter against the heel. The Achilles tendon itself is pain-free to palpation. Which diagnosis fits?",
        options: {
            A: "Mid-portion Achilles tendinopathy",
            B: "Insertional Achilles tendinopathy",
            C: "Haglund's deformity with retrocalcaneal bursitis",
            D: "Sever's disease",
            E: "Calcaneal stress fracture"
        },
        correctAnswer: "C",
        explanation: "Haglund's deformity is a prominent posterosuperior calcaneal bony prominence that causes impingement of the retrocalcaneal bursa (between the calcaneum and the Achilles tendon). Rigid shoe counter pressure aggravates it — hence the name 'pump bump' in women who wear court shoes. Pain is at the back of the heel on the bony prominence, NOT in the midsubstance tendon. The 'two-finger squeeze' test (lateral compression of the retrocalcaneal space) reproduces the pain. Insertional Achilles tendinopathy involves pain at the tendon-bone insertion itself (not the bursa). Management: heel lifts, open-backed footwear, physiotherapy. Refractory cases may require surgical calcaneal osteoplasty (resection of the prominence) with bursectomy."
    },
    {
        question: "A 42-year-old woman presents with numbness and tingling on the plantar surface of the foot, particularly the 3rd and 4th toes. The pain radiates into the toes and is worse in tight shoes and with prolonged standing. Mulder's click test is positive. Which is the most likely diagnosis?",
        options: {
            A: "Plantar fasciitis",
            B: "Tarsal tunnel syndrome",
            C: "Morton's neuroma",
            D: "Metatarsal stress fracture",
            E: "Intermetatarsal bursitis"
        },
        correctAnswer: "C",
        explanation: "Morton's neuroma is a perineural fibrosis of a common digital plantar nerve, most commonly affecting the 3rd web space (between 3rd and 4th metatarsal heads). Patients describe burning or electric pain radiating into adjacent toes, worsened by tight shoes (forefoot compression) and weight-bearing. Mulder's click — palpating the interspace from the plantar surface while laterally compressing the forefoot — produces a palpable/audible click and reproduces the pain, and is the most reliable clinical test. Management: wide-toed footwear and metatarsal dome pads first-line; ultrasound-guided steroid injection; sclerosant (alcohol) injection; or surgical excision for refractory cases."
    },
    {
        question: "A 55-year-old man with obesity, type 2 diabetes, and known knee OA presents asking about knee replacement surgery. He has tried physiotherapy and analgesia with limited benefit. His BMI is 42. Which statement correctly reflects the guidance on BMI and knee arthroplasty?",
        options: {
            A: "Morbid obesity (BMI >40) is an absolute contraindication to knee replacement",
            B: "There is no relationship between BMI and outcomes following knee replacement",
            C: "Weight loss prior to surgery reduces complication risk and improves outcomes; surgery should ideally be deferred until BMI <40 where possible, though BMI alone should not deny access to surgery",
            D: "Patients with a BMI >40 should proceed directly to surgery without delay as weight loss is unlikely",
            E: "Total knee replacement is ineffective in obese patients — only partial (unicompartmental) replacement should be offered"
        },
        correctAnswer: "C",
        explanation: "Obesity significantly increases the risk of complications following knee replacement: higher rates of surgical site infection, VTE, implant failure, aseptic loosening, and poorer functional outcomes. Multiple guidelines (NICE, BOA) recommend that patients with BMI >40 should be offered weight loss support before arthroplasty where feasible, and surgery should ideally be deferred until BMI <40. However, BMI alone should not be used to deny access to surgery — significant clinical judgement is required, and individual patient factors (frailty, comorbidities, quality of life impact) must be considered. The clinical evidence shows that functional improvements from TKR are achieved even in obese patients, but with higher complication rates. Shared decision-making with realistic expectations is key."
    },
    {
        question: "A 28-year-old male sustains a knee injury during a football match. He describes the knee 'popping out' to the side and immediately returning. On examination the next day his knee is very swollen, and examination reveals a positive valgus stress test, a positive anterior drawer test, and a positive dial test at 30°. Which combination of structures has most likely been injured?",
        options: {
            A: "ACL and medial collateral ligament (anteromedial rotatory instability)",
            B: "PCL and posterolateral corner structures",
            C: "ACL and posterolateral corner structures",
            D: "ACL, MCL, and medial meniscus (the 'unhappy triad')",
            E: "PCL and medial collateral ligament"
        },
        correctAnswer: "D",
        explanation: "The 'unhappy triad' (O'Donoghue's triad) classically describes combined injury to the ACL, MCL, and medial meniscus following a valgus force with knee flexion and external rotation — a common mechanism in contact sports. A positive anterior drawer (ACL), positive valgus stress test (MCL), and medial joint line tenderness (medial meniscus) form the clinical triad. The dial test at 30° (external rotation of both tibias compared side-to-side at 30° flexion) tests the posterolateral corner — isolated increase at 30° indicates PLC injury; increase at both 30° AND 90° indicates combined PCL + PLC injury. Note: modern studies suggest the lateral meniscus is actually more commonly injured than the medial meniscus in ACL tears, so 'unhappy triad' is now a somewhat historical construct."
    },
    {
        question: "A 67-year-old woman presents with sudden-onset severe hip pain following a minor trip. She is unable to weight-bear. X-ray shows no obvious fracture. MRI reveals a linear hypointense line through the femoral neck with surrounding marrow oedema. She is on long-term corticosteroid therapy for rheumatoid arthritis. What is the most likely diagnosis and why does this patient group carry higher risk?",
        options: {
            A: "Avascular necrosis — corticosteroids cause fat embolism to the femoral head vessels",
            B: "Occult femoral neck fracture — osteoporosis secondary to corticosteroid use reduces bone mineral density",
            C: "Paget's disease of the hip — corticosteroid use accelerates bone turnover",
            D: "Bone metastasis — corticosteroid use is associated with malignancy",
            E: "Transient osteoporosis of the hip — a self-limiting condition more common in corticosteroid users"
        },
        correctAnswer: "B",
        explanation: "Occult femoral neck fractures — not visible on plain X-ray — are detected by MRI (sensitivity ~98%) or isotope bone scan. Corticosteroid use is one of the leading secondary causes of osteoporosis: glucocorticoids suppress osteoblast activity, promote osteoclast survival, reduce intestinal calcium absorption, and increase renal calcium excretion, all reducing bone mineral density. Even low-dose prednisolone (≥5mg/day for ≥3 months) significantly elevates fracture risk. These patients should receive bone protection with bisphosphonates, calcium, and vitamin D supplementation per FRAX/NICE guidelines. Avascular necrosis of the femoral head is also a genuine risk in corticosteroid users (via microvascular occlusion) but presents differently — with groin pain that progresses over weeks and characteristic MRI changes in the femoral head rather than a fracture line."
    },
    {
        question: "A 38-year-old female triathlete develops medial knee pain after increasing her cycling training. The pain is localised to the pes anserinus region (below the medial joint line) and is reproduced by resisted knee flexion and internal rotation. There is no joint effusion. Which structure is the source of the pain?",
        options: {
            A: "Medial collateral ligament",
            B: "Medial meniscus",
            C: "Pes anserinus bursa — between the conjoined tendon of sartorius, gracilis, and semitendinosus and the tibial periosteum",
            D: "Semimembranosus tendon",
            E: "Medial retinaculum"
        },
        correctAnswer: "C",
        explanation: "Pes anserinus bursitis involves inflammation of the bursa lying between the pes anserinus (the conjoined insertion of sartorius, gracilis, and semitendinosus — 'SGT') and the medial tibial periosteum, approximately 5cm below the medial joint line. It is common in cyclists due to repetitive knee flexion and internal rotation, as well as in obese patients with OA. Pain is below the joint line — distinguishing it from MCL injury (at joint line) or meniscal pathology. The mnemonic 'Say Grace before Tea' (Sartorius, Gracilis, Semitendinosus) recalls the three muscles of the pes anserinus. Management is conservative: activity modification, ice, NSAIDs, and ultrasound-guided steroid injection if needed."
    },
    {
        question: "A 55-year-old man has progressive knee osteoarthritis and is considering all non-surgical options before committing to knee replacement. He asks specifically about intra-articular injections. Which of the following statements most accurately reflects the current evidence for intra-articular therapies?",
        options: {
            A: "Platelet-rich plasma (PRP) has the strongest evidence base of all intra-articular therapies and should be offered first",
            B: "Intra-articular corticosteroid injections provide short-term pain relief (up to 4–6 weeks) but have no proven long-term benefit; evidence for PRP and hyaluronic acid remains inconclusive",
            C: "Hyaluronic acid injections are NICE-recommended as a standard treatment for knee OA",
            D: "Repeated intra-articular corticosteroid injections carry no risk of cartilage damage",
            E: "Stem cell therapy is currently recommended by NICE for knee OA management"
        },
        correctAnswer: "B",
        explanation: "This is an evidence-based question. Intra-articular corticosteroid injections (IACS) are the best-evidenced intra-articular therapy for knee OA: they provide significant short-term pain relief (4–6 weeks) with well-documented effects, but long-term benefit is not established, and repeated injections may accelerate cartilage loss. NICE does not recommend hyaluronic acid injections for knee OA (withdrawn from guidelines in 2022 due to insufficient evidence). PRP evidence is growing but remains inconsistent across trials — it is not currently NICE-recommended. Stem cell therapy is experimental. The key clinical message: IACS are appropriate for short-term pain relief, particularly pre-operatively or when surgery is being deferred, but are not a substitute for physiotherapy and weight management as the cornerstone of knee OA management."
    },
    {
        question: "A 16-year-old female gymnast presents with low back pain radiating to the buttock. Pain is worse with hyperextension of the lumbar spine and is relieved by sitting. Plain X-ray and a subsequent SPECT-CT reveal a defect in the pars interarticularis of L5 with anterior slip of L5 on S1. Which diagnosis does this represent?",
        options: {
            A: "Lumbar disc prolapse at L4/5",
            B: "Spondylolysis with spondylolisthesis",
            C: "Sacroiliac joint dysfunction",
            D: "Scheuermann's disease",
            E: "Lumbar facet joint arthropathy"
        },
        correctAnswer: "B",
        explanation: "Spondylolysis is a stress fracture of the pars interarticularis, most common at L5, caused by repetitive hyperextension loading — classic in gymnasts, fast bowlers, and rowers. When bilateral spondylolysis allows the vertebral body to slip anteriorly on the one below, it becomes spondylolisthesis. L5 on S1 is the most common level. The 'scotty dog' sign on oblique X-ray (or 'collar on the scotty dog' at the pars) is the classical X-ray finding. SPECT-CT is highly sensitive for active stress reactions. Young active patients with a fresh pars defect may be treated with activity restriction and a brace in an attempt to promote bony healing; established defects (non-union) with slippage may require surgical fusion if symptoms are disabling."
    },
    {
        question: "A 32-year-old male sustains a PCL injury in a road traffic accident (dashboard injury). Which clinical test is most specific for posterior cruciate ligament rupture, and how is it performed?",
        options: {
            A: "Anterior drawer test at 90° — tibia pulled anteriorly with the knee at 90° flexion",
            B: "Posterior drawer test at 90° — tibia pushed posteriorly with the knee at 90° flexion",
            C: "Lachman test at 20° — anterior tibial translation assessed at 20–30° flexion",
            D: "Pivot shift test — internal rotation and valgus applied during knee extension",
            E: "McMurray's test — external rotation and valgus stress during knee extension"
        },
        correctAnswer: "B",
        explanation: "The posterior drawer test is the most sensitive and specific clinical test for PCL rupture. With the patient supine, knee at 90° flexion, and foot stabilised, the tibia is pushed posteriorly — a positive test shows posterior translation (the 'sag' sign). A related finding is the posterior sag sign: with both knees flexed at 90°, the tibia visibly drops posteriorly relative to the contralateral side in a PCL-deficient knee. The PCL is the strongest knee ligament and is most commonly injured by a direct blow to the anterior tibia with the knee flexed (dashboard injury). Isolated PCL tears are often managed conservatively with good outcomes; combined injuries (PCL + PLC, PCL + MCL) usually require surgical reconstruction."
    },
    {
        question: "A 40-year-old woman presents with a painful bunion (hallux valgus). She is keen to understand what factors contribute to its development. Which of the following is the most accurate explanation of the pathophysiology of hallux valgus?",
        options: {
            A: "Hallux valgus is caused exclusively by wearing narrow, pointed footwear",
            B: "It is a purely cosmetic deformity with no functional consequences",
            C: "Hallux valgus involves lateral deviation of the great toe with medial deviation of the 1st metatarsal, destabilising the first ray and progressively disrupting the sesamoid apparatus and plantar plate",
            D: "It results from rupture of the flexor hallucis longus tendon at the 1st MTP joint",
            E: "It is caused by gout-related destruction of the 1st MTP joint"
        },
        correctAnswer: "C",
        explanation: "Hallux valgus is a complex deformity of the first ray. The hallux deviates laterally (valgus) while the 1st metatarsal deviates medially (varus), increasing the intermetatarsal angle and creating the medial eminence ('bunion'). As the deformity progresses: the extensor hallucis longus and flexor hallucis longus tendons bowstring laterally, acting as deforming forces; the sesamoids sublux laterally; the medial capsule and abductor hallucis attenuate; and the lateral capsule and adductor hallucis tighten. These changes can lead to transfer metatarsalgia, plantar plate disruption, and 2nd toe deformity. Risk factors include female sex, family history, and footwear, but it is not caused by footwear alone — genetic predisposition to 1st ray hypermobility is key."
    },
    {
        question: "A 45-year-old woman with a BMI of 28 presents with bilateral knee pain. She has no specific history of injury. Examination reveals bilateral medial joint line tenderness with a varus deformity. X-ray shows moderate medial compartment joint space narrowing bilaterally. She asks whether there is anything she can do herself to slow the progression of her arthritis. What is the most evidence-based lifestyle modification to recommend?",
        options: {
            A: "Complete rest from all physical activity to reduce cartilage loading",
            B: "A low-carbohydrate diet to reduce systemic inflammation",
            C: "Weight loss and supervised exercise — every 1kg of weight loss reduces knee joint load by approximately 4kg",
            D: "High-impact aerobic exercise to stimulate cartilage regeneration",
            E: "Dietary glucosamine and chondroitin supplementation as per NICE recommendation"
        },
        correctAnswer: "C",
        explanation: "Weight loss is the single most impactful lifestyle modification for knee OA. The knee joint experiences a force approximately 4–6 times body weight during walking — so a 5kg weight loss reduces the dynamic compressive load on the knee by up to 20–30kg per step. The ADAPT trial demonstrated that combined weight loss and exercise is superior to either alone for pain and function in obese patients with knee OA. Exercise (particularly strengthening of the quadriceps and hip abductors) reduces pain and improves function without accelerating cartilage loss. NICE does not recommend glucosamine or chondroitin — the GAIT trial showed no significant benefit over placebo. Rest worsens muscle atrophy and joint health."
    },
    {
        question: "A 58-year-old woman presents with a 1-year history of pain, swelling, and stiffness in both knees, worse in the mornings for over an hour. Examination reveals warm, swollen joints with synovitis bilaterally. Blood tests show positive rheumatoid factor, anti-CCP antibodies, raised CRP, and normocytic anaemia. X-rays show periarticular osteopaenia and small erosions at the joint margins. Which of the following is the correct first-line disease-modifying treatment?",
        options: {
            A: "Oral prednisolone as long-term therapy",
            B: "NSAIDs alone for pain management",
            C: "Methotrexate (with folic acid supplementation) as anchor DMARD",
            D: "Adalimumab (anti-TNF biologic) as first-line treatment",
            E: "Hydroxychloroquine monotherapy"
        },
        correctAnswer: "C",
        explanation: "Methotrexate is the anchor DMARD (disease-modifying anti-rheumatic drug) for rheumatoid arthritis and should be started promptly in newly diagnosed RA. It is the most commonly used and best-tolerated first-line DMARD with a 60–70% response rate. Folic acid 5mg once weekly (not on the same day as methotrexate) is co-prescribed to reduce side effects (mouth ulcers, nausea, hepatotoxicity). Biologics (anti-TNF agents such as adalimumab) are reserved for patients who fail two conventional DMARDs, per NICE TA criteria. Steroids are used as bridging therapy during the lag phase of DMARD initiation but are not suitable for long-term monotherapy. NSAIDs treat symptoms but do not modify disease progression."
    },
    {
        question: "A 25-year-old male presents following a high-energy road traffic accident. On assessment his right leg is shortened and externally rotated with the hip held in flexion. He has reduced sensation over the dorsum of the foot. X-ray confirms posterior dislocation of the hip with no associated fracture. Which complication does the neurological finding indicate, and what is the time-critical management priority?",
        options: {
            A: "Sciatic nerve injury — urgent closed reduction within 6 hours to reduce the risk of avascular necrosis and limit sciatic nerve traction injury",
            B: "Femoral nerve injury — surgical exploration and nerve repair within 24 hours",
            C: "Common peroneal nerve injury — the hip can be reduced electively within 24 hours",
            D: "Obturator nerve injury — conservative management is appropriate",
            E: "L5 nerve root avulsion — MRI of the lumbar spine takes priority over hip reduction"
        },
        correctAnswer: "A",
        explanation: "Posterior hip dislocation is a major orthopaedic emergency. The hip flexion, adduction, and internal rotation posture (opposite to an anterior dislocation) and shortened limb are characteristic. The sciatic nerve (L4–S3) runs posterior to the hip joint and is tethered with the limb in this position — the peroneal division is most vulnerable, causing foot drop and reduced dorsal foot sensation. The critical management principle is urgent closed reduction, ideally within 6 hours. The blood supply to the femoral head (via the medial femoral circumflex artery through the retinacular vessels) is compromised by the dislocation — delay beyond 6 hours dramatically increases the risk of avascular necrosis of the femoral head (risk rises from ~5% at <6 hours to >50% at >24 hours). Associated fractures are excluded by CT post-reduction."
    },
    {
        question: "A 17-year-old male is referred with a 3-month history of knee pain and an X-ray showing a well-defined radiolucent lesion with a sclerotic rim at the distal femoral epiphysis. MRI reveals a fragment of articular cartilage with underlying subchondral bone showing avascular changes. The lesion is stable with no loose body. Which is the most likely diagnosis and what is the first-line management?",
        options: {
            A: "Osteosarcoma — urgent biopsy and oncology referral required",
            B: "Simple bone cyst — observation as it will resolve spontaneously",
            C: "Osteochondritis dissecans (OCD) — activity modification and physiotherapy for stable lesions; surgical intervention for unstable lesions",
            D: "Giant cell tumour of bone — surgical curettage and cement infill",
            E: "Chondroblastoma — radiotherapy and resection"
        },
        correctAnswer: "C",
        explanation: "Osteochondritis dissecans (OCD) of the knee most commonly affects the lateral aspect of the medial femoral condyle in adolescents. The exact aetiology is debated but repetitive micro-trauma and local ischaemia lead to separation of a fragment of articular cartilage and underlying bone. The classic X-ray finding is a well-defined radiolucent lesion with a sclerotic rim. MRI is essential to assess stability (presence of fluid behind the fragment = unstable; intact cartilage = stable). Stable lesions in skeletally immature patients have significant healing potential with conservative management (activity restriction, unloading). Unstable lesions or those with loose bodies in older adolescents (near skeletal maturity) require arthroscopic intervention — drilling, fixation, or bone grafting. Red flag features (aggressive periosteal reaction, cortical destruction, soft tissue mass) would suggest a bone tumour."
    }
]
},
            rheumatology: {
"Vasculitides": [
    {
            question: "A 48-year-old man with a history of severe asthma presents with worsening breathlessness, sinusitis, peripheral neuropathy, and a purpuric rash. Blood tests demonstrate marked eosinophilia and positive p-ANCA antibodies. He is diagnosed with eosinophilic granulomatosis with polyangiitis (EGPA).\n\nWhich of the following best describes this condition?",
            options: {
                A: "Small vessel immune complex-mediated vasculitis",
                B: "Small vessel pauci-immune vasculitis",
                C: "Medium vessel vasculitis",
                D: "Large vessel vasculitis",
                E: "Variable vessel vasculitis"
        },
        correctAnswer: "B",
        explanation: 'EGPA is classified as an ANCA-associated vasculitis and therefore belongs to the group of small vessel pauci-immune vasculitides. "Pauci-immune" refers to the relative absence of immune complex deposition within affected vessels on immunofluorescence. Along with asthma, eosinophilia, and granulomatous inflammation, this distinguishes EGPA from immune complex-mediated vasculitides such as IgA vasculitis and cryoglobulinemic vasculitis.',
        image: "lectureImages/rheumatology/vasculitides/vasculitis slide 16.PNG"
    },
{
    question: "A rheumatology registrar is reviewing the Chapel Hill Consensus Conference classification of vasculitides.\n\nWhich of the following is classified as a large vessel vasculitis?",
    options: {
        A: "Polyarteritis nodosa",
        B: "Microscopic polyangiitis",
        C: "Kawasaki disease",
        D: "IgA vasculitis",
        E: "Giant cell arteritis"
    },
    correctAnswer: "E",
    explanation: "Giant cell arteritis (GCA) is classified as a large vessel vasculitis alongside Takayasu arteritis, predominantly affecting the aorta and its major branches. Polyarteritis nodosa and Kawasaki disease are both medium vessel vasculitides — Kawasaki disease predominantly affects the coronary arteries in children. Microscopic polyangiitis is a small vessel ANCA-associated vasculitis, and IgA vasculitis is a small vessel immune complex-mediated vasculitis. Knowing the vessel size classification of each vasculitis is fundamental to the Chapel Hill framework.",
    image: "lectureImages/rheumatology/vasculitides/vasculitis slide 16.PNG"
},


// 24 Vasculitis Questions — 4 dual-concept questions split into 2 each
// Correct answers distributed evenly across A-E
// Image references point to: lectureImages/rheumatology/vasculitides/

// Q1 — correct answer: A
{
    question: "A pathology student is reviewing the definition of vasculitis.\n\nWhich of the following best describes the primary consequence of luminal narrowing in vasculitis?",
    options: {
        A: "Ischaemia of the tissues supplied by the affected vessel",
        B: "Haemorrhage into surrounding tissues",
        C: "Aneurysm formation at the site of inflammation",
        D: "Increased blood flow distal to the lesion",
        E: "Thrombocytopenia due to platelet consumption"
    },
    correctAnswer: "A",
    explanation: "Vasculitis is a heterogeneous group of disorders characterised by inflammation and damage of blood vessels. The lumen of the involved vessel is usually narrowed, and this narrowing may lead to ischaemia of the tissues supplied by the affected vessel \u2014 this is the primary pathological consequence of luminal compromise in vasculitis.",
    image: "lectureImages/rheumatology/vasculitides/slide_04_labelled.jpg"
},

// Q2 — correct answer: D
{
    question: "A lecturer describes the immunological mechanisms underlying systemic vasculitis.\n\nWhich of the following is NOT listed as a recognised immune mechanism in the pathogenesis of systemic vasculitides?",
    options: {
        A: "Deposition of circulating antigen-antibody complexes",
        B: "Antibody directed against a fixed tissue antigen",
        C: "Delayed type hypersensitivity",
        D: "Direct complement activation without immune complex formation",
        E: "All of the above are recognised mechanisms"
    },
    correctAnswer: "D",
    explanation: "The three recognised immune mechanisms underlying most systemic vasculitides are: deposition of circulating antigen-antibody (Ag-Ab) complexes, antibody directed against a fixed tissue antigen, and delayed type hypersensitivity. Direct complement activation without immune complex formation is not listed as one of the primary mechanisms in this classification.",
    image: "lectureImages/rheumatology/vasculitides/slide_05_labelled.jpg"
},

// Q3 — correct answer: E
{
    question: "A 34-year-old man develops features of vasculitis two weeks after a viral illness. His blood cultures are negative and no organisms are identified in the vessel wall on biopsy.\n\nWhich of the following best explains how infection can indirectly cause noninfectious vasculitis?",
    options: {
        A: "Direct invasion of the vessel wall by the pathogen",
        B: "Endotoxin-mediated destruction of the vascular endothelium",
        C: "Antibiotic-induced hypersensitivity reaction",
        D: "Septic embolisation to the vasa vasorum",
        E: "Generation of immune complexes or triggering of cross-reactivity"
    },
    correctAnswer: "E",
    explanation: "Infections can indirectly induce noninfectious vasculitis by generating immune complexes (which deposit in vessel walls and trigger inflammation) or by triggering cross-reactivity (where antibodies directed against microbial antigens cross-react with host vessel components). This explains how a post-infectious vasculitis can occur in the absence of direct microbial invasion of the vessel wall.",
    image: "lectureImages/rheumatology/vasculitides/slide_08_labelled.jpg"
},

// Q4 — correct answer: E
{
    question: "A rheumatologist is explaining the general characteristics of vasculitis to a group of medical students.\n\nWhich of the following statements about the distribution of vasculitis is correct?",
    options: {
        A: "All vasculitides are systemic by definition",
        B: "Vasculitides are always localised to a single organ",
        C: "Local vasculitis always progresses to systemic disease",
        D: "Vasculitis only affects vessels in the skin and kidneys",
        E: "Vasculitides may be either local or systemic"
    },
    correctAnswer: "E",
    explanation: "Vasculitides may be local or systemic in their distribution. This is an important general characteristic \u2014 some forms are confined to a single organ or region, while others involve multiple organ systems simultaneously. Most systemic vasculitides are related to immune mechanisms.",
    image: "lectureImages/rheumatology/vasculitides/slide_05_labelled.jpg"
},

// Q5 — correct answer: C
{
    question: "A 67-year-old woman presents with a 3-week history of headache, jaw claudication, and scalp tenderness. Her ESR is markedly elevated.\n\nWhich of the following best describes the vessel size and patient demographic typically affected in this condition?",
    options: {
        A: "Small vessel vasculitis affecting adults over 30",
        B: "Medium vessel vasculitis affecting children under 10",
        C: "Medium and large vessel vasculitis affecting adults over 50",
        D: "Large vessel vasculitis exclusively affecting the aorta in adults over 60",
        E: "Small and medium vessel vasculitis affecting adults of any age"
    },
    correctAnswer: "C",
    explanation: "Giant cell arteritis (GCA) is a vasculitis of medium and large vessels which preferentially affects the head and neck arteries. Most patients are adults aged over 50 years. It presents over weeks or months with fever, anorexia, and weight loss, and involvement of the temporal artery causes the classic symptoms of headache, scalp tenderness, and jaw claudication.",
    image: "lectureImages/rheumatology/vasculitides/slide_23_labelled.jpg"
},

// Q6 — correct answer: A
{
    question: "A 74-year-old man with confirmed giant cell arteritis .\n\nWhich vessel territory is most likely effected?",
    options: {
        A: "Ocular vessels \u2014 causing ischaemic optic neuropathy and blindness",
        B: "Mesenteric artery \u2014 causing visceral ischaemia",
        C: "Coronary artery \u2014 causing silent myocardial ischaemia",
        D: "Renal artery \u2014 causing ischaemic nephropathy",
        E: "Pulmonary arteries \u2014 causing pulmonary hypertension"
    },
    correctAnswer: "A",
    explanation: "In GCA, involvement of the ocular vessels \u2014 particularly the posterior ciliary arteries supplying the optic nerve \u2014 can cause ischaemic optic neuropathy, which presents as sudden painless visual loss and is one of the most feared and irreversible complications of GCA. This is why prompt high-dose corticosteroid treatment is essential on clinical suspicion of GCA, without waiting for biopsy confirmation.",
    image: "lectureImages/rheumatology/vasculitides/slide_23_labelled.jpg"
},

// Q7 — correct answer: B
{
    question: "A 68-year-old woman with a 3-year history of giant cell arteritis is referred for a surveillance CT scan. Imaging reveals a 5.2cm dilatation of the thoracic aorta.\n\nIn what proportion of GCA patients does aortic involvement occur, and what is the consequence?",
    options: {
        A: "Less than 5% of cases \u2014 aortic involvement is extremely rare in GCA",
        B: "Approximately 25% of cases \u2014 potentially leading to thoracic or abdominal aortic aneurysm formation",
        C: "Approximately 10% of cases \u2014 leading to renal artery stenosis",
        D: "Approximately 50% of cases \u2014 causing aortic valve regurgitation",
        E: "Approximately 75% of cases \u2014 causing aortic dissection"
    },
    correctAnswer: "B",
    explanation: "Aortic involvement occurs in approximately 25% of GCA cases and may lead to thoracic or abdominal aortic aneurysm formation. This is an important and underrecognised complication that can develop years after the initial diagnosis, making long-term surveillance with imaging appropriate in patients with GCA. It is distinct from the cranial manifestations of the disease.",
    image: "lectureImages/rheumatology/vasculitides/slide_23_labelled.jpg"
},

// Q8 — correct answer: D
{
    question: "A temporal artery biopsy is performed in a patient with suspected GCA. The result is reported as negative.\n\nWhich of the following statements about temporal artery biopsy in GCA is correct?",
    options: {
        A: "A negative biopsy excludes GCA with certainty",
        B: "All patients with GCA will have a positive biopsy",
        C: "Biopsy typically shows neutrophilic infiltration of the intima",
        D: "Only 60% of patients with clinical GCA show biopsy evidence of arteritis due to focal involvement",
        E: "Giant cells are never seen on biopsy in GCA"
    },
    correctAnswer: "D",
    explanation: "Only 60% of patients with clinical evidence of GCA show biopsy evidence of arteritis. This is because the pattern of involvement may be focal \u2014 a phenomenon known as 'skip lesions' \u2014 meaning a negative biopsy does not exclude the diagnosis. Positive biopsies show a lymphohistiocytic infiltrate with disruption of the media, and a giant cell reaction is often present.",
    image: "lectureImages/rheumatology/vasculitides/slide_23_labelled.jpg"
},

// Q9 — correct answer: A
{
    question: "A 26-year-old woman is investigated for unequal arm blood pressures and reduced vision. She is diagnosed with Takayasu arteritis.\n\nWhich of the following vessel groups are most commonly involved in Takayasu arteritis?",
    options: {
        A: "Vertebral and ophthalmic arteries and the aorta",
        B: "Renal arteries and mesenteric vessels exclusively",
        C: "Coronary arteries and pulmonary vasculature",
        D: "Small vessels including capillaries and venules",
        E: "Temporal arteries and external carotid branches"
    },
    correctAnswer: "A",
    explanation: "In Takayasu arteritis, the vertebral and ophthalmic arteries and the aorta are often involved. This accounts for the characteristic symptoms of visual disturbance, unequal arm blood pressures, and absent peripheral pulses. Microscopically, there is vessel wall thickening and variable inflammation ranging from a mononuclear adventitial infiltrate to medial necrosis with granulomas, with inner media granulomas in classic cases.",
    image: "lectureImages/rheumatology/vasculitides/slide_28_labelled.jpg"
},

// Q10 — correct answer: C
{
    question: "A 30-year-old woman with Takayasu arteritis has ongoing active inflammation despite initial management. Her rheumatologist is reviewing her treatment options.\n\nWhich of the following correctly describes the treatment approach for Takayasu arteritis?",
    options: {
        A: "Aspirin and statins ",
        B: "Rituximab monotherapy ",
        C: "Steroids and anti-TNF therapy",
        D: "Prostacyclin analogues ",
        E: "Colchicine "
    },
    correctAnswer: "C",
    explanation: "Treatment of Takayasu arteritis is with steroids and anti-TNF therapy. Corticosteroids are the mainstay of initial treatment, with anti-TNF agents (such as infliximab or tocilizumab) used in refractory or relapsing disease. The goal of treatment is to suppress vascular inflammation, prevent further vessel damage, and preserve end-organ function.",
    image: "lectureImages/rheumatology/vasculitides/slide_28_labelled.jpg"
},

// Q11 — correct answer: C
{
    question: "A pathologist is reviewing the histological features of a large vessel biopsy from a young woman with Takayasu arteritis.\n\nWhich of the following microscopic findings is most characteristic of classic Takayasu arteritis?",
    options: {
        A: "Fibrinoid necrosis of the intima with neutrophilic infiltration",
        B: "Eosinophilic infiltration of all vessel wall layers",
        C: "Inner media granulomas with vessel wall thickening",
        D: "Purely intimal fibrosis with no inflammatory infiltrate",
        E: "Transmural neutrophilic abscesses with thrombus formation"
    },
    correctAnswer: "C",
    explanation: "The classic microscopic finding in Takayasu arteritis is inner media granulomas. There is also vessel wall thickening and variable inflammation, which can range from a mononuclear adventitial infiltrate to medial necrosis with granulomas. These granulomatous changes in the media are the hallmark histological feature of this large vessel vasculitis.",
    image: "lectureImages/rheumatology/vasculitides/slide_28_labelled.jpg"
},

// Q12 — correct answer: B
{
    question: "A 5-year-old boy presents with fever, conjunctival injection, cervical lymphadenopathy, and a strawberry tongue. He is diagnosed with Kawasaki disease.\n\nWhich of the following statements about Kawasaki disease is correct?",
    options: {
        A: "It predominantly affects elderly adults",
        B: "Cardiovascular sequelae from coronary artery involvement can be prevented with immunoglobulin therapy",
        C: "Pulmonary involvement is a major feature of the disease",
        D: "It has no association with viral infection",
        E: "Renal artery involvement is the most common cause of death"
    },
    correctAnswer: "B",
    explanation: "Kawasaki disease presents with mucocutaneous symptoms and cervical lymph node enlargement in children. Involvement of the coronary arteries leads to cardiovascular sequelae, which can be circumvented with immunoglobulin therapy \u2014 making early diagnosis critical. The disease has an association with hepatitis B virus. Pulmonary involvement is actually rare, and the clinical course involves episodic nonspecific symptoms including low-grade fever.",
    image: "lectureImages/rheumatology/vasculitides/slide_31_labelled.jpg"
},

// Q13 — correct answer: E
{
    question: "A pathologist examines a vessel biopsy from a child diagnosed with Kawasaki disease.\n\nWhich of the following best describes the characteristic microscopic finding in Kawasaki disease?",
    options: {
        A: "Intimal fibrosis only with no active inflammation",
        B: "Granulomatous medial necrosis with giant cells",
        C: "Fibrinoid necrosis confined to the intima",
        D: "Leucocytoclastic vasculitis with nuclear dust",
        E: "Transmural vascular inflammation involving the full thickness of the vessel wall"
    },
    correctAnswer: "E",
    explanation: "The characteristic microscopic finding in Kawasaki disease is transmural vascular inflammation \u2014 inflammation involving the full thickness of the vessel wall (intima, media, and adventitia). This distinguishes Kawasaki disease histologically from other vasculitides where inflammation may be confined to specific layers. The transmural inflammation predisposes to aneurysm formation, particularly in the coronary arteries.",
    image: "lectureImages/rheumatology/vasculitides/slide_31_labelled.jpg"
},

// Q14 — correct answer: C
{
    question: "A paediatric cardiologist is counselling the family of a child with Kawasaki disease about the risk of serious vascular complications.\n\nWhich vascular territory carries the highest risk of fatal involvement in Kawasaki disease?",
    options: {
        A: "Cerebral arteries ",
        B: "Pulmonary arteries ",
        C: "Renal arteries ",
        D: "Mesenteric arteries",
        E: "Aorta "
    },
    correctAnswer: "C",
    explanation: "Renal artery involvement in Kawasaki disease can be fatal. While coronary artery aneurysms are the most well-known complication, renal artery involvement represents a serious and potentially lethal manifestation. Immunosuppressive therapy can achieve remission in most cases, and immunoglobulin therapy is specifically used to reduce coronary artery sequelae when given early in the disease course.",
    image: "lectureImages/rheumatology/vasculitides/slide_31_labelled.jpg"
},

// Q15 — correct answer: D
{
    question: "A 45-year-old man is diagnosed with polyarteritis nodosa (PAN).\n\nWhich of the following best describes the vessel involvement in PAN?",
    options: {
        A: "Large vessel vasculitis involving the aorta and its major branches",
        B: "Small vessel vasculitis exclusively affecting capillaries and venules",
        C: "Medium vessel vasculitis predominantly affecting the coronary arteries",
        D: "Small or medium-sized muscular artery vasculitis involving renal and visceral vessels",
        E: "Variable vessel vasculitis affecting both small and large vessels equally"
    },
    correctAnswer: "D",
    explanation: "Polyarteritis nodosa (PAN) is a systemic vasculitis of small- or medium-sized muscular arteries. It typically involves the renal and visceral vessels. A key distinguishing feature is that it spares the pulmonary circulation \u2014 this helps differentiate PAN from other vasculitides that affect the lungs.",
    image: "lectureImages/rheumatology/vasculitides/slide_34_labelled.jpg"
},

// Q16 — correct answer: A
{
    question: "A 55-year-old woman presents with acute renal failure and haemoptysis. Renal biopsy shows focal segmental necrotising glomerulonephritis with crescents. Blood tests show p-ANCA positivity.\n\nWhich diagnosis best fits this presentation?",
    options: {
        A: "Microscopic polyangiitis",
        B: "Giant cell arteritis",
        C: "Polyarteritis nodosa",
        D: "Granulomatosis with polyangiitis",
        E: "IgA vasculitis"
    },
    correctAnswer: "A",
    explanation: "Microscopic polyangiitis (MPA) is a systemic small vessel vasculitis characterised by dominant renal and lung involvement and p-ANCA positivity. Most patients are adults with a median age of 55. It presents with acute renal failure and pulmonary symptoms. Renal biopsies show a focal segmental necrotising glomerulonephritis with crescents, and lung biopsies show marked alveolar haemorrhage and necrotising capillaritis. Aggressive immunosuppression is needed to prevent mortality.",
    image: "lectureImages/rheumatology/vasculitides/slide_49_labelled.jpg"
},

// Q17 — correct answer: A
{
    question: "A 42-year-old man presents with nasal symptoms, haemoptysis, and haematuria. Investigations reveal c-ANCA positivity. Lung biopsy shows large geographical areas of necrotising granulomatous inflammation.\n\nWhich organ involvement is characteristic of this condition?",
    options: {
        A: "Upper respiratory tract, lungs, and kidneys",
        B: "Kidneys, skin, and joints",
        C: "Lungs, heart, and liver",
        D: "Coronary arteries, kidneys, and skin",
        E: "Upper respiratory tract"
    },
    correctAnswer: "A",
    explanation: "Granulomatosis with polyangiitis (GPA, formerly Wegener's granulomatosis) is a systemic small vessel vasculitis characterised by dominant upper respiratory tract, lung, and renal involvement, and c-ANCA positivity. Renal biopsies show focal segmental necrotising glomerulonephritis with crescent formation (identical to microscopic polyangiitis), and lung biopsies show large geographical areas of necrotising granulomatous inflammation and a necrotising vasculitis. Aggressive immunosuppression is needed to prevent mortality.",
    image: "lectureImages/rheumatology/vasculitides/slide_52_labelled.jpg"
},


// Q19 — correct answer: B
{
    question: "A 50-year-old man is investigated for a systemic vasculitis. He has renal failure and pulmonary haemorrhage but no upper respiratory tract symptoms. His ANCA result is positive.\n\nWhich ANCA pattern would be expected in microscopic polyangiitis compared to GPA?",
    options: {
        A: "Both conditions are c-ANCA positive",
        B: "MPA is p-ANCA positive; GPA is c-ANCA positive",
        C: "Both conditions are p-ANCA positive",
        D: "MPA is c-ANCA positive; GPA is p-ANCA positive",
        E: "Neither condition is ANCA positive"
    },
    correctAnswer: "B",
    explanation: "Microscopic polyangiitis (MPA) is characterised by p-ANCA (perinuclear ANCA, typically anti-MPO) positivity, whilst granulomatosis with polyangiitis (GPA) is characterised by c-ANCA (cytoplasmic ANCA, typically anti-PR3) positivity. This ANCA distinction is one of the key laboratory features differentiating these two ANCA-associated vasculitides, alongside their clinical phenotypes.",
    image: "lectureImages/rheumatology/vasculitides/slide_49_labelled.jpg"
},



// Q21 — correct answer: D
{
    question: "A medical student is revising the Chapel Hill classification of vasculitis by vessel size.\n\nWhich of the following correctly pairs a condition with its vessel size classification?",
    options: {
        A: "Kawasaki disease \u2014 large vessel vasculitis",
        B: "Takayasu arteritis \u2014 medium vessel vasculitis",
        C: "Granulomatosis with polyangiitis \u2014 large vessel vasculitis",
        D: "Polyarteritis nodosa \u2014 medium vessel vasculitis",
        E: "Giant cell arteritis \u2014 small vessel vasculitis"
    },
    correctAnswer: "D",
    explanation: "Polyarteritis nodosa (PAN) is classified as a medium vessel vasculitis, alongside Kawasaki disease. Large vessel vasculitides include Giant cell arteritis and Takayasu arteritis. Small vessel vasculitides include Granulomatosis with polyangiitis (GPA), Eosinophilic granulomatosis with polyangiitis (EGPA/Churg-Strauss), Microscopic polyangiitis, and drug-induced vasculitis.",
    image: "lectureImages/rheumatology/vasculitides/slide_20_labelled.jpg"
},

// Q22 — correct answer: B
{
    question: "A lung biopsy is performed in a patient with microscopic polyangiitis who presented with haemoptysis and hypoxia.\n\nWhich of the following findings would be expected on lung biopsy?",
    options: {
        A: "Large geographical areas of necrotising granulomatous inflammation",
        B: "Marked alveolar haemorrhage and necrotising capillaritis within alveolar septa",
        C: "Eosinophilic infiltration with granuloma formation",
        D: "Transmural inflammation of the pulmonary arteries with giant cells",
        E: "Non-caseating granulomas"
    },
    correctAnswer: "B",
    explanation: "In microscopic polyangiitis, lung biopsies show marked alveolar haemorrhage and a necrotising capillaritis within the alveolar septa. This is distinct from GPA, where lung biopsies show large geographical areas of necrotising granulomatous inflammation. The presence of alveolar haemorrhage reflects the small vessel (capillary) involvement that is characteristic of MPA.",
    image: "lectureImages/rheumatology/vasculitides/slide_49_labelled.jpg"
},

// Q23 — correct answer: E
{
    question: "A 25-year-old woman presents to her GP and is subsequently diagnosed with Takayasu arteritis.\n\nWhich of the following best describes the most common presentation of Takayasu arteritis?",
    options: {
        A: "Aortic dissection",
        B: "Hypertension",
        C: "Jaw claudication and scalp tenderness",
        D: "Asymptomatic and self limiting",
        E: "Fatigue"
    },
    correctAnswer: "E",
    explanation: "Takayasu arteritis has a variable clinical course. Initial symptoms may be non-specific \u2014 such as fatigue \u2014 but the disease can progress to more severe manifestations including blindness and involvement of the aortic arch. The vertebral and ophthalmic arteries and aorta are often involved. Treatment is with steroids and anti-TNF therapy.",
    image: "lectureImages/rheumatology/vasculitides/slide_28_labelled.jpg"
},

// Q24 — correct answer: C
{
    question: "A patient is newly diagnosed with granulomatosis with polyangiitis (GPA) with renal and pulmonary involvement.\n\nWhich of the following best describes the treatment approach required?",
    options: {
        A: "Observation and watchful waitings",
        B: "Antibiotic therapy ",
        C: "Immunosuppression ",
        D: "Surgical resection ",
        E: "Anticoagulation"
    },
    correctAnswer: "C",
    explanation: "For both granulomatosis with polyangiitis (GPA) and microscopic polyangiitis (MPA), aggressive immunosuppression is needed to prevent mortality. Without treatment, these ANCA-associated vasculitides carry a very high mortality due to progressive renal failure and pulmonary haemorrhage. Standard induction therapy typically involves high-dose corticosteroids combined with cyclophosphamide or rituximab.",
    image: "lectureImages/rheumatology/vasculitides/slide_52_labelled.jpg"
}
],
        "Osteoarthritis": [
    // Q1 — correct: D  (slide 4)
    {
        question: "A medical student is studying the normal function of articular cartilage.\n\nWhich of the following best describes the role of articular cartilage together with synovial fluid?",
        options: {
            A: "Acts as a reservoir for calcium and phosphate to support bone mineralisation",
            B: "Produces synovial fluid and secretes lubricating glycoproteins",
            C: "Transmits nerve signals between adjacent bones and prevents joint dislocation",
            D: "Provides virtually friction-free movement and spreads load across the joint surface to allow shock absorption",
            E: "Provides tensile strength to resist shear forces during rotational joint movement only"
        },
        correctAnswer: "D",
        explanation: "Along with synovial fluid, articular cartilage provides virtually friction-free movement within the joint. It also spreads the load across the joint surface in a manner that allows the underlying bones to absorb shock and weight. These two functions \u2014 lubrication and load distribution \u2014 are the central roles of normal articular cartilage.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_04_labelled.jpg"
    },
    // Q2 — correct: B  (slide 5)
    {
        question: "A pathology demonstrator is teaching students about the general features shared across different arthropathies.\n\nWhich of the following statements about hyaline cartilage loss is correct?",
        options: {
            A: "Loss of hyaline cartilage is specific to inflammatory arthropathies and does not occur in non-inflammatory joint disease",
            B: "Loss of hyaline cartilage is a common finding in most arthropathies, whether inflammatory or non-inflammatory",
            C: "Hyaline cartilage is only lost in primary arthropathies, not secondary forms",
            D: "Loss of hyaline cartilage causes increased joint space on radiograph due to compensatory synovial proliferation",
            E: "Hyaline cartilage loss is limited to weight-bearing joints and does not affect the upper limb"
        },
        correctAnswer: "B",
        explanation: "Hyaline cartilage lines the articular surfaces and is critical for proper joint function. Its loss is a common finding in most arthropathies, whether non-inflammatory or inflammatory \u2014 this is a key shared feature across the spectrum of joint disease. Arthropathies may be primary or secondary, but cartilage loss is not restricted to any one subgroup.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_05_labelled.jpg"
    },
    // Q3 — correct: B  (slide 5)
    {
        question: "A radiologist notes that only one articular surface on one side of the joint is affected on imaging.\n\nWhat does this distribution suggest about the underlying disease process?",
        options: {
            A: "The findings are consistent with a primary inflammatory arthropathy",
            B: "The disease process is unlikely to be a primary arthropathy",
            C: "Unilateral single-surface involvement is the hallmark of rheumatoid arthritis",
            D: "This pattern confirms a secondary arthropathy due to crystal deposition",
            E: "The distribution indicates that both sides of the joint will be affected symmetrically over time"
        },
        correctAnswer: "B",
        explanation: "Primary arthropathies are joint-centred processes that typically affect articular surfaces on both sides of a joint. If only one surface of the bone on one side of the joint is affected, the disease process is unlikely to be a primary arthropathy. This asymmetric, single-surface pattern should prompt consideration of a secondary or localised cause.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_05_labelled.jpg"
    },
    // Q4 — correct: E  (slide 6)
    {
        question: "A pathologist is examining a gross specimen from a patient with long-standing joint disease. The articular surfaces are denuded and the exposed bone appears polished and ivory-like.\n\nWhat is the term for this gross finding, and what does it correspond to on radiograph?",
        options: {
            A: "Chondrocalcinosis; seen as calcification within the cartilage on radiograph",
            B: "Pannus formation; seen as periarticular erosions on radiograph",
            C: "Tophus deposition; seen as soft tissue calcification on radiograph",
            D: "Fibrillation; seen as joint space widening on radiograph",
            E: "Eburnation; seen as subchondral new bone formation on radiograph"
        },
        correctAnswer: "E",
        explanation: "With loss of cartilage, the denuded ends of the bones rub against one another, leading to new bone formation. This process is termed eburnation when described grossly, and is seen as subchondral new bone formation on radiographs. Osteophytes also form as a response to abnormal stresses across the joint. On radiograph, cartilage loss is seen as reduction in joint space.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_06_labelled.jpg"
    },
    // Q5 — correct: C  (slide 7)
    {
        question: "A 68-year-old man presents with progressive knee pain worsened by activity. He has a long history of manual labour.\n\nWhich of the following best defines the underlying pathological process?",
        options: {
            A: "An autoimmune synovitis driven by anti-citrullinated protein antibodies causing cartilage destruction",
            B: "A suppurative inflammatory arthropathy caused by crystal deposition in the synovial space",
            C: "A nonneoplastic disorder of progressive erosion of articular cartilage associated with aging, trauma or occupational injury",
            D: "A neoplastic proliferation of chondrocytes leading to cartilage overgrowth and joint deformity",
            E: "An infectious process causing direct bacterial invasion of the articular cartilage and subchondral bone"
        },
        correctAnswer: "C",
        explanation: "Osteoarthritis is defined as a nonneoplastic disorder of progressive erosion of articular cartilage associated with aging, trauma, or occupational injury. The nonneoplastic qualifier distinguishes it from cartilage tumours, and the three associated factors \u2014 age, trauma, and occupation \u2014 reflect the main risk categories. This patient's age and history of manual labour are consistent with this definition.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_07_labelled.jpg"
    },
    // Q6 — correct: D  (slide 10)
    {
        question: "A researcher is studying the pathophysiology of osteoarthritis at the molecular level.\n\nWhich of the following best explains the mechanism by which cartilage is lost in osteoarthritis?",
        options: {
            A: "Calcium pyrophosphate crystals deposit in the matrix and mechanically disrupt collagen fibrils",
            B: "Autoantibodies against type II collagen activate complement, causing direct cartilage lysis",
            C: "Synovial fibroblasts invade and physically erode cartilage through pannus formation",
            D: "An increase in matrix-degrading enzymes shifts the balance away from synthesis, causing loss of collagen and proteoglycans",
            E: "Chondrocytes undergo apoptosis due to hypoxia, leaving the matrix intact but cell-depleted"
        },
        correctAnswer: "D",
        explanation: "Cartilage has an extracellular matrix composed predominantly of type II collagen and proteoglycans. Normally this matrix is maintained by a dynamic remodelling process in which degradative and synthetic enzyme activities are balanced. In osteoarthritis, there is an increase in matrix-degrading enzymes which shifts this balance, causing degeneration and loss of collagen and proteoglycans from the matrix.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_10_labelled.jpg"
    },
    // Q7 — correct: E  (slide 16)
    {
        question: "A 72-year-old woman with bilateral knee pain undergoes plain radiographs. Findings are consistent with osteoarthritis.\n\nWhich of the following combinations of radiological features is characteristic of osteoarthritis?",
        options: {
            A: "Diffuse osteopenia, vertebral crush fractures, and cortical thinning",
            B: "Periarticular osteopenia, soft tissue swelling, and marginal erosions without osteophytes",
            C: "Chondrocalcinosis, joint space widening, and soft tissue calcification",
            D: "Periosteal reaction, cortical destruction, and aggressive bone lesions",
            E: "Joint space narrowing, sclerosis, osteophytosis, and subchondral cysts"
        },
        correctAnswer: "E",
        explanation: "The characteristic radiological features of osteoarthritis are joint space narrowing, sclerosis, osteophytosis, joint erosions, and subchondral cysts. Joint space narrowing reflects cartilage loss, sclerosis represents subchondral new bone formation (eburnation), and osteophytes form in response to abnormal joint stresses. The combination of these features distinguishes osteoarthritis from inflammatory arthropathies, which classically show periarticular osteopenia and marginal erosions.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_16_labelled.jpg"
    },
    // Q8 — correct: C  (slide 27)
    {
        question: "A pathologist is examining a histological slide from a patient with osteoarthritis. The articular surface shows a characteristic frayed appearance.\n\nWhat is the term for this histological finding?",
        options: {
            A: "Tophaceous deposits within the cartilage matrix",
            B: "Pannus formation over the articular cartilage",
            C: "Fibrillation of the articular surface",
            D: "Necrosis of chondrocytes in the deep zone",
            E: "Amyloid deposition in the pericellular matrix"
        },
        correctAnswer: "C",
        explanation: "The characteristic histological finding in osteoarthritis is fibrillation of the articular surface, which refers to the fraying and splitting of cartilage. On gross examination, the eburnated articular surface exposes subchondral bone, and subchondral cysts and residual articular cartilage may also be identified. Fibrillation is distinct from the erosive and inflammatory changes seen in rheumatoid arthritis.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_27_labelled.jpg"
    },
    // Q9 — correct: A  (slide 29)
    {
        question: "A 45-year-old woman with symmetrical small joint arthritis is found to have extra-articular features including skin nodules and pulmonary involvement.\n\nWhich of the following best describes the underlying pathological process in rheumatoid arthritis?",
        options: {
            A: "A nonsuppurative proliferative synovitis that frequently progresses to destroy articular cartilage and underlying bone",
            B: "A suppurative bacterial arthritis caused by haematogenous seeding of the synovium",
            C: "A crystal-induced arthropathy causing acute neutrophilic inflammation of the joint space",
            D: "A degenerative non-inflammatory erosion of cartilage driven by mechanical overload",
            E: "An autoimmune vasculitis restricted to the synovial blood vessels without cartilage involvement"
        },
        correctAnswer: "A",
        explanation: "Rheumatoid arthritis causes a nonsuppurative proliferative synovitis that frequently progresses to destroy articular cartilage and underlying bone. When extra-articular involvement develops \u2014 for example of the skin, heart, blood vessels, muscles, and lungs \u2014 RA may resemble lupus or scleroderma. The nonsuppurative nature distinguishes it from septic arthritis, and the proliferative synovitis distinguishes it from the non-inflammatory process of osteoarthritis.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_29_labelled.jpg"
    },
    // Q10 — correct: A  (slide 6)
    {
        question: "A 65-year-old man with osteoarthritis of the hip has complete loss of articular cartilage on imaging.\n\nWhich of the following best describes what happens at the joint surface once cartilage is fully lost?",
        options: {
            A: "The denuded ends of the bones rub against one another, leading to new bone formation",
            B: "The synovial membrane hypertrophies and fills the joint space with fibrous tissue",
            C: "Periosteal new bone forms at the joint margin, bridging the two bones and causing ankylosis",
            D: "The subchondral bone undergoes avascular necrosis due to loss of cartilage nutrition",
            E: "Osteoclasts resorb the exposed subchondral bone, causing joint space widening on radiograph"
        },
        correctAnswer: "A",
        explanation: "With loss of cartilage, the denuded ends of the bones that make up the joint rub against one another, leading to new bone formation. This process is termed eburnation when described grossly. Radiographically, the initial loss of cartilage is seen as reduction in joint space, followed by subchondral sclerosis as new bone forms at the exposed surfaces.",
        image: "lectureImages/rheumatology/osteoarthritis/slide_06_labelled.jpg"
    },
],
"Rheumatoid Arthritis": [
    // Q1 — correct: D  (slide 2)
    {
        question: "A medical student is asked to define rheumatoid arthritis.\n\nWhich of the following best describes the characteristic pattern of joint involvement in rheumatoid arthritis?",
        options: {
            A: "Migratory arthritis triggered by recent gastrointestinal or urogenital infection",
            B: "Asymmetric degenerative arthritis affecting weight-bearing joints in older adults",
            C: "Monoarthritis caused by crystal deposition in a single large joint",
            D: "Symmetric inflammatory arthritis associated with autoantibodies to IgG and citrullinated proteins",
            E: "Symmetric arthritis associated exclusively with HLA-B27 and axial involvement"
        },
        correctAnswer: "D",
        explanation: "Rheumatoid arthritis is a chronic inflammatory joint disease resulting from environmental insult in the genetically susceptible, leading to breakdown of immune tolerance and synovial inflammation in a characteristic symmetric pattern. It is associated with autoantibodies to immunoglobulin G (rheumatoid factor) and citrullinated proteins (ACPAs). The other options describe gout, osteoarthritis, reactive arthritis, and spondyloarthritis respectively.<br><br><em>Slide 2 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_02_labelled.jpg"
    },
    // Q2 — correct: C  (slide 4)
    {
        question: "An epidemiologist is reviewing the burden of inflammatory arthritis in the general population.\n\nWhich statement about the incidence and prevalence of rheumatoid arthritis is correct?",
        options: {
            A: "RA affects approximately 0.1% of the population and is a rare autoimmune condition",
            B: "RA affects approximately 5% of the population and is the second commonest inflammatory arthritis",
            C: "RA affects approximately 1% of the population and is the commonest inflammatory arthritis",
            D: "RA affects approximately 10% of the population, predominantly in the elderly",
            E: "RA affects approximately 1% of the population but osteoarthritis is more common as an inflammatory condition"
        },
        correctAnswer: "C",
        explanation: "Rheumatoid arthritis affects approximately 1% of the population and is the commonest inflammatory arthritis. This distinguishes it from other less prevalent inflammatory arthritides. Osteoarthritis is more common overall but is primarily a degenerative rather than inflammatory condition.<br><br><em>Slide 4 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_04_labelled.jpg"
    },
    // Q3 — correct: B  (slide 5)
    {
        question: "A pathology student is studying the structure of a healthy synovium.\n\nWhich of the following best describes a key structural feature of the healthy synovial intimal lining?",
        options: {
            A: "It has a continuous basement membrane that forms a tight barrier against cellular trafficking",
            B: "It lacks a basement membrane and tight junctions, making it leaky and permeable to cells and proteins",
            C: "It is composed exclusively of fibroblasts arranged in a monolayer",
            D: "It is lined by columnar epithelium with goblet cells producing lubricating mucus",
            E: "It contains abundant plasma cells producing immunoglobulin into the synovial fluid"
        },
        correctAnswer: "B",
        explanation: "A healthy synovium is a fairly delicate structure with an intimal lining composed of macrophage-like synoviocytes and fibroblast-like synoviocytes (FLS), with fibroblasts, adipocytes, blood vessels, and scattered immune cells. Critically, the intimal lining is not a barrier in the traditional sense because it lacks a basement membrane and tight junctions \u2014 it is leaky and allows relatively free trafficking of cells and proteins into the synovial fluid.<br><br><em>Slide 5 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_05_labelled.jpg"
    },
    // Q4 — correct: E  (slide 6)
    {
        question: "A geneticist is counselling a patient whose identical twin has been diagnosed with rheumatoid arthritis.\n\nWhat is the approximate concordance rate for RA in identical twins, and what is the best-defined environmental risk factor?",
        options: {
            A: "30 to 40% concordance; alcohol consumption is the best-defined environmental risk factor",
            B: "50% concordance; silica dust exposure is the best-defined environmental risk factor",
            C: "80% concordance; smoking is the best-defined environmental risk factor",
            D: "12 to 15% concordance; periodontal disease is the best-defined environmental risk factor",
            E: "12 to 15% concordance; smoking is the best-defined environmental risk factor"
        },
        correctAnswer: "E",
        explanation: "The concordance rate for identical twins in RA is only 12 to 15%, which highlights the important role of environmental factors alongside genetic susceptibility. Of the environmental stimuli that contribute, the best-defined is smoking, which can interact with genes to increase susceptibility up to 20- to 40-fold. The low twin concordance underscores that genetic background alone is insufficient to cause RA.<br><br><em>Slide 6 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_06_labelled.jpg"
    },
    // Q5 — correct: D  (slide 9)
    {
        question: "A researcher is investigating how cigarette smoking contributes to rheumatoid arthritis pathogenesis.\n\nWhich of the following best describes the mechanism by which smoking promotes ACPA production?",
        options: {
            A: "Smoking reduces mucosal IgA, allowing citrullinated bacteria to translocate into the systemic circulation",
            B: "Smoking directly activates B cells in bronchial lymph nodes to produce rheumatoid factor",
            C: "Smoking upregulates HLA-DRB1 expression on alveolar macrophages, increasing antigen presentation",
            D: "Smoking induces PAD expression in alveolar macrophages, converting arginine to citrulline and creating neoantigens that trigger ACPA production",
            E: "Smoking activates complement via the lectin pathway, depositing immune complexes in the synovium"
        },
        correctAnswer: "D",
        explanation: "Cigarette smoking is strongly associated with RA and induces peptidyl arginine deiminase (PAD) expression in alveolar macrophages. These enzymes convert arginine to citrulline in the airway, creating neoantigens (modified self-epitopes) recognised by the adaptive immune system. This leads to production of anti-citrullinated protein antibodies (ACPAs), which can initiate inflammation by fixing complement in the tissues.<br><br><em>Slide 9 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_09_labelled.jpg"
    },
    // Q6 — correct: B  (slide 13)
    {
        question: "A rheumatologist describes the sequence of immunological events that lead to synovitis in RA.\n\nWhich of the following correctly orders the early pathogenic steps in rheumatoid arthritis?",
        options: {
            A: "B cell activation \u2192 autoantibody production \u2192 complement fixation \u2192 innate immune activation \u2192 T cell recruitment",
            B: "Activation of innate immunity \u2192 citrullination \u2192 APC loading with autoantigens \u2192 migration to lymphoid organs \u2192 T cell activation \u2192 B cell activation \u2192 return to synovium",
            C: "T cell activation in the synovium \u2192 cytokine release \u2192 APC migration \u2192 citrullination at mucosal surfaces",
            D: "Citrullination \u2192 innate immune activation \u2192 direct osteoclast activation \u2192 bone erosion without lymphoid involvement",
            E: "APC presentation in synovium \u2192 T cell clonal expansion \u2192 migration to mucosal surfaces \u2192 ACPA production"
        },
        correctAnswer: "B",
        explanation: "Activation of innate immunity is probably the earliest process in RA, followed by citrullination or carbamylation, and loading of antigen-presenting cells (APCs) with autoantigens in the joint. APCs then migrate to central lymphoid organs, where they present antigens to T cells, which can activate B cells and/or migrate back to the synovium. This sequence explains the transition from mucosal immune activation to established synovitis.<br><br><em>Slide 13 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_13_labelled.jpg"
    },
    // Q7 — correct: A  (slide 15)
    {
        question: "A laboratory scientist is explaining the detection of ACPAs in rheumatoid arthritis.\n\nApproximately what proportion of RA patients test positive for anti-CCP2, and what assay method is used?",
        options: {
            A: "Up to 70%, detected by ELISA using citrullinated peptides",
            B: "Up to 90%, detected by immunofluorescence on Hep-2 cells",
            C: "Up to 50%, detected by agglutination assay",
            D: "Up to 30%, detected by western blot for citrullinated vimentin",
            E: "Up to 70%, detected by flow cytometry for B cell surface markers"
        },
        correctAnswer: "A",
        explanation: "ACPAs are present in the earliest stages of disease in almost 70% of rheumatoid patients. They are typically detected by a commercial enzyme-linked immunosorbent assay (ELISA) kit using a set of citrullinated peptides (CCP2). Up to 70% of patients with RA are anti-CCP2-positive, with high specificity for the diagnosis. B cell precursors for ACPAs are present in both RA patients and healthy controls.<br><br><em>Slide 15 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_15_labelled.jpg"
    },
    // Q8 — correct: B  (slide 16)
    {
        question: "A medical student asks about rheumatoid factors in RA.\n\nWhich of the following best describes rheumatoid factor?",
        options: {
            A: "IgG autoantibodies directed against citrullinated proteins in the synovium",
            B: "IgM immunoglobulins reactive against epitopes on the Fc portion of IgG",
            C: "IgA antibodies reactive against double-stranded DNA",
            D: "IgE immunoglobulins reactive against HLA-DR antigens on antigen-presenting cells",
            E: "IgM antibodies directed against the Fab portion of IgA"
        },
        correctAnswer: "B",
        explanation: "Rheumatoid factors are immunoglobulins (IgM) reactive against epitopes on the Fc portion of IgG. Like ACPAs, rheumatoid factors can precede the development of clinical disease in RA. They are distinct from ACPAs, which target citrullinated proteins, and from ANA or anti-dsDNA antibodies, which are associated with systemic lupus erythematosus.<br><br><em>Slide 16 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_16_labelled.jpg"
    },
    // Q9 — correct: C  (slide 19)
    {
        question: "A periodontist refers a patient with severe periodontal disease to rheumatology, noting a possible link with RA.\n\nWhich bacterium associated with periodontal disease has its own PAD enzyme, enabling it to citrullinate peptides in the mouth?",
        options: {
            A: "Aggregatibacter actinomycetemcomitans",
            B: "Prevotella copri",
            C: "Porphyromonas gingivalis",
            D: "Streptococcus mutans",
            E: "Fusobacterium nucleatum"
        },
        correctAnswer: "C",
        explanation: "Porphyromonas gingivalis, found in periodontal disease, expresses its own PAD enzyme, enabling it to citrullinate peptides in the oral mucosa. Aggregatibacter actinomycetemcomitans, another gingivitis-associated pathogen, produces a toxin that induces hypercitrullination of proteins in neutrophils by a different mechanism. The gut microbiome is also altered in early RA, with a preponderance of Prevotella species, but Prevotella does not possess a PAD enzyme.<br><br><em>Slide 19 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_19_labelled.jpg"
    },
    // Q10 — correct: E  (slide 25)
    {
        question: "A rheumatologist is reviewing environmental risk factors for rheumatoid arthritis with a group of trainees.\n\nWhich environmental exposure, other than smoking, is identified as a risk factor for RA?",
        options: {
            A: "Air pollution from nitrogen dioxide",
            B: "High dietary sodium intake",
            C: "Ultraviolet radiation",
            D: "Chronic alcohol consumption",
            E: "Silica dust exposure"
        },
        correctAnswer: "E",
        explanation: "Silica exposure is an identified environmental risk factor for RA. A study of firefighters and other emergency responders exposed to dust at the site of the 2001 World Trade Center collapse \u2014 which contained pulverised cement, silica, asbestos, and glass fibres \u2014 found an increased risk of systemic autoimmune diseases including RA. Like autoantibodies, levels of multiple cytokines gradually increase in the years before RA symptoms occur.<br><br><em>Slide 25 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_25_labelled.jpg"
    },
    // Q11 — correct: C  (slide 26)
    {
        question: "A genetics lecturer explains the contribution of HLA genes to rheumatoid arthritis susceptibility.\n\nWhich HLA alleles carry the shared epitope most strongly associated with RA risk?",
        options: {
            A: "HLA-DQ2 and HLA-DQ8",
            B: "HLA-B27 and HLA-B51",
            C: "HLA-DRB1*01 and HLA-DRB1*04",
            D: "HLA-A3 and HLA-B8",
            E: "HLA-DR3 and HLA-DR7"
        },
        correctAnswer: "C",
        explanation: "There are over 100 gene polymorphisms associated with RA, but the most important are in the class II MHC, particularly HLA-DR. The shared epitope is a specific amino acid motif encoded by certain alleles of the HLA-DRB1 locus \u2014 especially HLA-DRB1*01 and HLA-DRB1*04 \u2014 which are significantly associated with RA risk. Most individual gene polymorphisms have limited contribution with odds ratios of only 1.05\u20131.2.<br><br><em>Slide 26 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_26_labelled.jpg"
    },
    // Q12 — correct: D  (slide 28)
    {
        question: "A student asks how HLA-DR molecules contribute to RA pathogenesis at the cellular level.\n\nWhich of the following correctly describes the function of HLA class II molecules in RA?",
        options: {
            A: "They activate natural killer cells by presenting citrullinated peptides on the cell surface",
            B: "They present intracellular peptides to CD8+ cytotoxic T cells, triggering direct synoviocyte destruction",
            C: "They cross-link B cell receptors to drive plasma cell differentiation and rheumatoid factor production",
            D: "They bind peptides from endocytic processing and present them to CD4+ T cells, which produce cytokines to regulate other immune cells",
            E: "They bind complement fragments to initiate the membrane attack complex in the synovial fluid"
        },
        correctAnswer: "D",
        explanation: "HLA proteins have peptide-binding domains expressed at the cell surface, enabling peptides to be presented for inspection by T cells via clonally diverse \u03b1\u03b2 T cell receptors (TCRs). HLA class II molecules bind peptides derived from endocytic processing \u2014 often after uptake from outside the cell \u2014 and present them to CD4+ T cells, which then produce cytokines to regulate other immune cells. This is distinct from HLA class I, which presents to CD8+ cytotoxic T cells.<br><br><em>Slide 28 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_28_labelled.jpg"
    },
    // Q13 — correct: A  (slide 29)
    {
        question: "A rheumatologist is explaining the genetic risk contribution of the shared epitope in RA to a trainee.\n\nApproximately what proportion of genetic risk in ACPA-positive RA is explained by shared epitope-containing HLA-DRB1 alleles?",
        options: {
            A: "Approximately 20%",
            B: "Approximately 5%",
            C: "Approximately 50%",
            D: "Approximately 80%",
            E: "Approximately 1%"
        },
        correctAnswer: "A",
        explanation: "For ACPA-positive RA, the contribution of shared epitope-containing HLA-DRB1 alleles explains approximately 20% of the genetic risk. However, it accounts for only a small percentage of the genetic risk of ACPA-negative RA. Mothers who carry an SE-containing HLA-DRB1 allele may pass increased RA risk to their children, suggesting a maternal genetic effect.<br><br><em>Slide 29 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_29_labelled.jpg"
    },
    // Q14 — correct: C  (slide 33)
    {
        question: "A researcher compares the mechanisms by which smoking and gingivitis both contribute to protein citrullination in RA.\n\nWhich statement correctly distinguishes the PAD-mediated mechanisms in the lung versus the oral cavity?",
        options: {
            A: "Both smoking and gingivitis use only host PAD enzymes; bacterial PAD does not contribute to citrullination",
            B: "Smoking activates bacterial PAD enzymes colonising the airway; P. gingivalis upregulates host PAD in gum tissue",
            C: "Smoking upregulates host PAD enzymes in the lungs; P. gingivalis has its own bacterial PAD enzyme in the gums",
            D: "Smoking activates PAD via IL-17; gingivitis activates PAD via TNF-alpha",
            E: "Both smoking and P. gingivalis act by carbamylation rather than citrullination of proteins"
        },
        correctAnswer: "C",
        explanation: "Both smoking and gingivitis induce protein citrullination, a post-translational modification of arginine to citrulline catalysed by PADs. Smoking-induced inflammation upregulates host PAD enzymes in the lungs. In contrast, Porphyromonas gingivalis has its own PAD enzyme in the oral cavity, while Aggregatibacter actinomycetemcomitans produces a toxin that induces hypercitrullination in neutrophils. This dual mechanism underlines how multiple mucosal sites can trigger RA-predisposing immune responses.<br><br><em>Slide 33 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_33_labelled.jpg"
    },
    // Q15 — correct: E  (slide 34)
    {
        question: "A rheumatologist explains why not everyone with ACPAs develops clinical RA.\n\nWhich of the following additional factors is likely required to convert ACPA positivity into clinical synovitis?",
        options: {
            A: "Spontaneous resolution of the gut dysbiosis that initiated ACPA production",
            B: "A second episode of heavy smoking sufficient to double the ACPA titre",
            C: "Acquisition of HLA-DRB1*04 by somatic mutation in synoviocytes",
            D: "Loss of regulatory T cells due to prolonged corticosteroid use",
            E: "An additional hit such as immune complex formation, complement activation, or microvascular insult"
        },
        correctAnswer: "E",
        explanation: "The presence of ACPAs alone is not sufficient to cause synovitis. An additional hit \u2014 such as immune complex formation, complement activation, or microvascular insult \u2014 is likely required to initiate clinical synovitis characterised by increased vascular permeability and influx of inflammatory cells into the synovium. For maximal T cell responses, second signals via co-stimulatory molecules such as CD28 and CD40 ligand are also generally required.<br><br><em>Slide 34 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_34_labelled.jpg"
    },
    // Q16 — correct: C  (slide 35)
    {
        question: "An immunologist explains why antigen presentation alone is insufficient to fully activate T cells in autoimmune disease.\n\nWhat happens when antigen is presented to a T cell without co-stimulatory signals?",
        options: {
            A: "The T cell produces more IL-17 to compensate for the missing co-stimulatory signal",
            B: "The T cell differentiates into a regulatory T cell and suppresses the immune response",
            C: "The T cell undergoes anergy and death due to insufficient activation",
            D: "The T cell activates B cells directly via CD40-CD40L interaction without further signals",
            E: "The T cell migrates to the synovium and initiates pannus formation independently"
        },
        correctAnswer: "C",
        explanation: "Presentation of antigen to T cells by antigen-presenting cells without co-stimulation by receptor/coreceptors (such as CD28/CD80, CD86) leads to anergy and death of insufficiently activated T cells. When co-stimulatory signals are provided, self-perpetuating cycles of T cell proliferation sufficient to sustain autoimmunity may occur. Subsequent increases in vascular leakage provide access to the joint and permit complement fixation, recruitment of immune cells, and inflammation.<br><br><em>Slide 35 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_35_labelled.jpg"
    },
    // Q17 — correct: A  (slide 39)
    {
        question: "A pharmacologist is explaining the rationale for anti-TNF therapy in rheumatoid arthritis.\n\nWhich of the following effects of TNF on the synovium makes it a key therapeutic target in RA?",
        options: {
            A: "TNF induces expression of collagenase and metalloproteinases by synovial cells and enhances T and B cell proliferation",
            B: "TNF directly activates osteoblasts to lay down new bone at sites of inflammation",
            C: "TNF suppresses IL-6 production, reducing the acute phase response in RA",
            D: "TNF acts exclusively on endothelial cells to reduce vascular permeability",
            E: "TNF promotes regulatory T cell function, limiting autoimmune progression"
        },
        correctAnswer: "A",
        explanation: "TNF is a key cytokine in a subset of RA patients. It generates expression of collagenase, stromelysin (MMP-3), and prostaglandins by synovial cells; enhances proliferation of T cells; increases proliferation and differentiation of B cells; and induces expression of adhesion molecules on endothelium. It may also interfere with the suppressive effects of regulatory T cells. These broad pro-inflammatory effects make it a pivotal therapeutic target.<br><br><em>Slide 39 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_39_labelled.jpg"
    },
    // Q18 — correct: D  (slide 40)
    {
        question: "A trainee asks how JAK inhibitors work in rheumatoid arthritis.\n\nWhich of the following correctly describes the JAK-STAT signalling pathway in RA?",
        options: {
            A: "JAK enzymes activate the Wnt pathway to promote osteoblast bone formation",
            B: "Cytokines signal via JAK enzymes that directly cleave TNF receptors from the cell surface",
            C: "JAK isoforms phosphorylate RANKL, preventing osteoclast differentiation",
            D: "Cytokines signal via JAK isoforms (JAK1, 2, 3, Tyk2), which phosphorylate STAT transcription factors",
            E: "JAK1 and JAK2 produce IL-6 by activating the NF-kB transcription factor in synoviocytes"
        },
        correctAnswer: "D",
        explanation: "Many \u2014 but not all \u2014 of the cytokines implicated in RA signal via the Janus kinases (JAKs). The system includes four isoforms: JAK1, JAK2, JAK3, and Tyk2, which then phosphorylate the signal transducers and activators of transcription (STATs). JAK inhibitors (tofacitinib, baricitinib, upadacitinib) block this pathway, interrupting the downstream inflammatory signalling of multiple cytokines simultaneously.<br><br><em>Slide 40 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_40_labelled.jpg"
    },
    // Q19 — correct: E  (slide 42)
    {
        question: "A pathologist is explaining how synovial thickening in RA leads to new blood vessel formation.\n\nWhat is the mechanism by which synovial hypoxaemia drives angiogenesis in RA?",
        options: {
            A: "Hypoxaemia activates the complement cascade, depositing C3b on synovial capillaries",
            B: "Hypoxaemia activates osteoclasts via RANKL upregulation, leading to subchondral bone erosion",
            C: "Hypoxaemia triggers PAD enzyme activity, increasing citrullination of synovial proteins",
            D: "Hypoxaemia suppresses FLS proliferation, reducing pannus tissue volume",
            E: "Hypoxaemia induces transcription of VEGF, promoting new vessel formation with fluid transudation and lymphocyte transmigration"
        },
        correctAnswer: "E",
        explanation: "The thickening of the synovium in RA causes hypoxaemia of the cells, which results in transcription of genes fundamental to angiogenesis \u2014 including vascular endothelium growth factor (VEGF). This encourages new vessel formation, which is accompanied by transudation of fluid and transmigration of both lymphocytes into the synovium and polymorphonuclear leukocytes into the synovial fluid, perpetuating inflammation.<br><br><em>Slide 42 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_42_labelled.jpg"
    },
    // Q20 — correct: A  (slide 43)
    {
        question: "A histopathologist describes the rheumatoid synovium as resembling a locally invasive malignancy.\n\nWhich of the following features of fibroblast-like synoviocytes (FLS) is most prominently responsible for tissue destruction in RA?",
        options: {
            A: "Production of large amounts of matrix metalloproteinases (MMPs) and small-molecule mediators such as prostaglandins and leukotrienes",
            B: "Production of large amounts of ACPAs that fix complement within cartilage",
            C: "Differentiation into osteoclasts that directly resorb subchondral bone",
            D: "Production of VEGF that drives angiogenesis and pannus expansion",
            E: "Migration to lymph nodes where they present autoantigens to na\u00efve T cells"
        },
        correctAnswer: "A",
        explanation: "Once inflammatory synovitis is established, the rheumatoid synovium organises into invasive tissue resembling a locally invasive malignancy. FLS can migrate from joint to joint, possibly accounting for the symmetric distribution of RA. Although FLS express IL-6, their most prominent feature is production of prodigious amounts of MMPs and small-molecule mediators such as prostaglandins and leukotrienes. The destruction of cartilage, bone, and tendons in RA is initiated largely by these metalloproteinases.<br><br><em>Slide 43 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_43_labelled.jpg"
    },
    // Q21 — correct: E  (slide 44)
    {
        question: "A rheumatologist explains the mechanism of periarticular bone loss in rheumatoid arthritis.\n\nWhich cells produce RANKL, and what is its role in RA bone destruction?",
        options: {
            A: "Neutrophils produce RANKL, which activates mast cells to release histamine in the synovium",
            B: "Fibroblast-like synoviocytes produce RANKL, which activates osteoblasts to lay down new bone",
            C: "Macrophages produce RANKL, which stimulates complement deposition on bone surfaces",
            D: "B cells produce RANKL, which crosslinks ACPAs to enhance cartilage erosion",
            E: "Activated T cells and bone marrow stromal cells produce RANKL, which is essential for osteoclast differentiation, activation, and survival"
        },
        correctAnswer: "E",
        explanation: "In RA, the destruction of cartilage, bone, and tendons is initiated largely by metalloproteinases. Simultaneously, osteoclasts are activated by synovial cytokines including RANKL and cathepsins B, K, and L. Activated T cells and bone marrow stromal cells produce receptor activator of nuclear factor \u03baB ligand (RANKL), which is essential for the differentiation, activation, and survival of osteoclasts that then destroy bone.<br><br><em>Slide 44 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_44_labelled.jpg"
    },
    // Q22 — correct: B  (slide 45)
    {
        question: "A rheumatologist compares the pattern of bone pathology in rheumatoid arthritis with that seen in ankylosing spondylitis.\n\nWhich statement correctly distinguishes bone pathology in RA from that in ankylosing spondylitis?",
        options: {
            A: "RA shows new bone formation leading to fusion; ankylosing spondylitis shows pure bone resorption without repair",
            B: "RA shows progressive bone resorption without repair; ankylosing spondylitis is characterised by new bone formation even as joint destruction progresses",
            C: "Both RA and ankylosing spondylitis show a balance of bone resorption and repair",
            D: "RA involves only cartilage destruction with no subchondral bone involvement",
            E: "Ankylosing spondylitis shows subchondral cyst formation identical to the pattern seen in RA"
        },
        correctAnswer: "B",
        explanation: "The course of joint pathology in RA is one of progressive bone and joint destruction with the absence of any sign of bone repair. At sites of active RA, local bone resorption outweighs bone formation. This contrasts dramatically with ankylosing spondylitis and psoriatic arthritis, which are characterised by new bone formation (syndesmophytes) even as joint destruction progresses.<br><br><em>Slide 45 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_45_labelled.jpg"
    },
    // Q23 — correct: B  (slide 46)
    {
        question: "A rheumatologist is explaining how TNF contributes to bone destruction in rheumatoid arthritis.\n\nWhich of the following best describes TNF's effect on bone cells in RA?",
        options: {
            A: "TNF activates the Wnt pathway, promoting osteoblast differentiation and new bone formation",
            B: "TNF increases the number of osteoclasts and decreases the number of osteoblasts at the site of inflammation",
            C: "TNF inhibits RANKL production by T cells, limiting osteoclast-mediated erosion",
            D: "TNF activates cathepsin K in osteoblasts, driving periosteal new bone formation",
            E: "TNF promotes DKK-1 expression, which boosts Wnt signalling and osteoblast activity"
        },
        correctAnswer: "B",
        explanation: "TNF promotes the destruction of bone in RA by increasing the number of osteoclasts and decreasing the number of osteoblasts at the site of inflammation. RANK ligand regulates osteoclast-mediated destruction; denosumab (an anti-RANKL antibody) inhibits erosions in RA, confirming the pivotal role of this pathway. The Wnt signalling pathway normally boosts bone formation, but in RA, DKK-1 inhibits Wnt signalling, impairing osteoblast activity and further tipping the balance toward resorption.<br><br><em>Slide 46 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_46_labelled.jpg"
    },
    // Q24 — correct: A  (slide 55)
    {
        question: "A trainee rheumatologist asks about the three major advances responsible for improved outcomes in RA.\n\nWhich combination best describes these advances?",
        options: {
            A: "Optimal use of methotrexate, early diagnosis with prompt therapy initiation, and introduction of biological agents",
            B: "Introduction of corticosteroids, HLA typing for disease prediction, and rituximab monotherapy",
            C: "JAK inhibitor development, T cell depletion protocols, and anti-IL-6 therapy",
            D: "Silica exposure avoidance, smoking cessation programmes, and dietary interventions",
            E: "Anti-CCP2 screening programmes, synovectomy, and NSAID optimisation"
        },
        correctAnswer: "A",
        explanation: "The dramatic improvement in RA outcomes results from three key advances: first, rheumatologists learned how to use methotrexate optimally, making it the therapeutic anchor for managing RA; second, early diagnosis and prompt initiation of effective therapy replaced earlier tardy approaches; and third, biological agents entered the field, providing their best effectiveness in combination with methotrexate.<br><br><em>Slide 55 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_55_labelled.jpg"
    },
    // Q25 — correct: A  (slide 60)
    {
        question: "A GP asks a rheumatologist which disease-modifying anti-rheumatic drugs (DMARDs) are used in rheumatoid arthritis.\n\nWhich of the following lists the conventional synthetic DMARDs used in RA?",
        options: {
            A: "Methotrexate, sulfasalazine, hydroxychloroquine, and leflunomide",
            B: "Etanercept, infliximab, adalimumab, and certolizumab",
            C: "Tofacitinib, baricitinib, and upadacitinib",
            D: "Rituximab, tocilizumab, and abatacept",
            E: "Paracetamol, codeine, and NSAIDs"
        },
        correctAnswer: "A",
        explanation: "The conventional synthetic DMARDs used in RA are methotrexate (the therapeutic anchor), sulfasalazine, hydroxychloroquine, and leflunomide. Etanercept, infliximab, adalimumab, and certolizumab are biological anti-TNF agents. Tofacitinib, baricitinib, and upadacitinib are JAK inhibitors. Rituximab, tocilizumab, and abatacept are biological DMARDs targeting B cells, IL-6, and T cell co-stimulation respectively. Paracetamol, codeine, and NSAIDs are symptomatic agents, not disease-modifying.<br><br><em>Slide 60 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_60_labelled.jpg"
    },
    // Q26 — correct: D  (slide 61)
    {
        question: "A rheumatology trainee is revising the biological agents used in rheumatoid arthritis.\n\nWhich biological agent specifically targets B cells in RA?",
        options: {
            A: "Etanercept",
            B: "Tocilizumab",
            C: "Abatacept",
            D: "Rituximab",
            E: "Tofacitinib"
        },
        correctAnswer: "D",
        explanation: "In RA, several classes of biological agents are used. Anti-TNF agents include etanercept, infliximab, adalimumab, certolizumab, and golimumab. Rituximab is the anti-B cell agent. Tocilizumab targets IL-6. Abatacept targets T cell co-stimulation (anti-T cell). JAK inhibitors (tofacitinib, baricitinib, upadacitinib) are small-molecule targeted synthetic DMARDs rather than biologicals. Rituximab is the specific B cell-depleting agent.<br><br><em>Slide 61 \u2014 Rheumatoid Arthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/rheumatoid_arthritis/slide_61_labelled.jpg"
    },
],
    "Spondyloarthritis": [
    // Q1 — correct: D  (slide 2)
    {
        question: "A medical student asks about the conditions grouped under the term spondyloarthritis (SpA).\n\nWhich of the following is NOT included within the spondyloarthritis family of diseases?",
        options: {
            A: "Psoriatic arthritis",
            B: "Ankylosing spondylitis",
            C: "Reactive arthritis",
            D: "Rheumatoid arthritis",
            E: "Arthritis associated with inflammatory bowel disease"
        },
        correctAnswer: "D",
        explanation: "Spondyloarthritis refers to a family of diseases that includes ankylosing spondylitis, undifferentiated SpA, reactive arthritis, psoriatic arthritis, juvenile SpA, and arthritis/spondylitis associated with IBD (Crohn disease and ulcerative colitis). Rheumatoid arthritis is a distinct condition and is not part of the SpA family. SpA can affect the spine, peripheral joints, eyes, gut, and skin in both adults and children.<br><br><em>Slide 2 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_02_labelled.jpg"
    },
    // Q2 — correct: C  (slide 4)
    {
        question: "A 30-year-old man is diagnosed with spondyloarthritis. His rheumatologist explains the genetic and immunological basis of the disease.\n\nWhich cytokines are identified as the major inflammatory mediators in spondyloarthritis?",
        options: {
            A: "IL-6 and IL-10",
            B: "IL-4 and IL-13",
            C: "TNF-alpha and IL-17A",
            D: "Interferon-gamma and IL-2",
            E: "IL-1 and IL-12"
        },
        correctAnswer: "C",
        explanation: "The major mediators in spondyloarthritis are tumour necrosis factor (TNF)-alpha and interleukin (IL)-17A. The largest single genetic contribution comes from the HLA-B27 gene. The pathogenesis involves a particular genetic background interacting with the gut microbiome, innate-like lymphoid cells, and mechanical stress at entheses. The other cytokine pairs listed are not identified as the major mediators in SpA.<br><br><em>Slide 4 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_04_labelled.jpg"
    },
    // Q3 — correct: B  (slide 4)
    {
        question: "A researcher is studying the genetic basis of spondyloarthritis.\n\nWhich gene makes the largest single genetic contribution to spondyloarthritis?",
        options: {
            A: "HLA-DR4",
            B: "HLA-B27",
            C: "BRCA1",
            D: "HLA-B51",
            E: "TNF gene promoter polymorphism"
        },
        correctAnswer: "B",
        explanation: "The largest single genetic contribution to spondyloarthritis is from the gene for human leukocyte antigen (HLA)-B27. This association was first recognised in 1973 and HLA-B27 is present in approximately 90% of patients with ankylosing spondylitis in most ethnic groups, compared with around 10% of the general UK population. At least 100 subtypes of HLA-B27 have been characterised.<br><br><em>Slide 4 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_04_labelled.jpg"
    },
    // Q4 — correct: D  (slide 5)
    {
        question: "A rheumatology registrar is comparing the pathological sites of inflammation in rheumatoid arthritis and spondyloarthritis.\n\nWhich of the following correctly identifies the primary site of inflammation in skeletal spondyloarthritis?",
        options: {
            A: "The subchondral bone marrow",
            B: "The synovium",
            C: "The articular cartilage",
            D: "The enthesis",
            E: "The joint capsule"
        },
        correctAnswer: "D",
        explanation: "In skeletal spondyloarthritis, the primary site of inflammation is the enthesis \u2014 the interface between ligaments, tendons, bone, and cartilage. This distinguishes SpA from rheumatoid arthritis, where the primary site of inflammation is the synovium. In axial SpA the enthesitis predominantly affects the spine, while in peripheral SpA it affects the peripheral skeleton.<br><br><em>Slide 5 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_05_labelled.jpg"
    },
    // Q5 — correct: D  (slide 6)
    {
        question: "A student asks what entheses are during a rheumatology tutorial on spondyloarthritis.\n\nWhich of the following best describes an enthesis?",
        options: {
            A: "The periosteum overlying long bones",
            B: "The synovial lining of a diarthrodial joint",
            C: "The fibrocartilaginous disc between vertebral bodies",
            D: "The interface between ligaments, tendons, bone, and cartilage",
            E: "The vascular supply entering the epiphysis"
        },
        correctAnswer: "D",
        explanation: "Entheses are the major areas of skeletal inflammation in SpA and refer to the interface between ligaments, tendons, bone, and cartilage. In axial SpA, enthesitis occurs at the spine, and in peripheral SpA it occurs at the peripheral skeleton. This is distinct from the synovium, disc, periosteum, and vascular structures, which are not the primary entheseal structures.<br><br><em>Slide 6 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_06_labelled.jpg"
    },
    // Q6 — correct: B  (slide 7)
    {
        question: "A patient with long-standing ankylosing spondylitis develops complete rigidity of his vertebral column.\n\nWhich combination of pathological processes at entheses leads to this outcome?",
        options: {
            A: "Synovial hyperplasia and pannus formation",
            B: "Osteoclastic bone destruction and osteoblastic new bone formation",
            C: "Chondrocyte apoptosis and fibrocartilage degeneration",
            D: "Periosteal elevation and cortical thinning",
            E: "Subchondral cyst formation and articular collapse"
        },
        correctAnswer: "B",
        explanation: "At entheses in SpA, two processes occur simultaneously: osteoclastic inflammation causing bone destruction, and osteoblastic new bone formation leading to syndesmophytes. At its worst, new bone formation can convert the entire vertebral column into a rigid bamboo spine \u2014 the hallmark of severe ankylosing spondylitis. Synovial pannus is the mechanism in rheumatoid arthritis, not SpA.<br><br><em>Slide 7 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_07_labelled.jpg"
    },
    // Q7 — correct: A  (slide 11)
    {
        question: "A researcher is studying the role of interleukin-17 in protecting the gut epithelium.\n\nWhat is the normal function of IL-17 acting in synergy with IL-22 at the gut barrier?",
        options: {
            A: "Guarding the integrity of the gut epithelium by inducing anti-microbial peptides",
            B: "Promoting tolerance to commensal bacteria by suppressing neutrophil recruitment",
            C: "Stimulating IgA secretion across the intestinal lumen",
            D: "Driving regulatory T-cell expansion in Peyer's patches",
            E: "Maintaining the mucus layer by upregulating goblet cell mucin production"
        },
        correctAnswer: "A",
        explanation: "IL-17, acting in synergy with IL-22, is the first line of cytokine defence against microbes. It guards the integrity of the gut epithelium by inducing the generation of anti-microbial peptides. When the gut epithelial and vascular barriers are compromised, microbes become capable of initiating a systemic immune response and their metabolites can enter the submucosa and systemic circulation, contributing to SpA pathogenesis.<br><br><em>Slide 11 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_11_labelled.jpg"
    },
    // Q8 — correct: C  (slide 12)
    {
        question: "A pathologist is studying the link between gut inflammation and joint disease in spondyloarthritis.\n\nWhich cytokine is responsible for the bone-erosive process when innate-like immune cells from the gut migrate to entheses?",
        options: {
            A: "IL-10",
            B: "IL-4",
            C: "IL-17",
            D: "Interferon-gamma",
            E: "IL-6"
        },
        correctAnswer: "C",
        explanation: "Innate-like immune cells activated in the gut migrate to entheses and joints, causing an inflammatory process in which TNF-alpha also participates. It is specifically IL-17 that drives the bone-erosive process at these sites. This gut-to-enthesis migration is a key mechanism linking intestinal inflammation to the skeletal manifestations of SpA.<br><br><em>Slide 12 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_12_labelled.jpg"
    },
    // Q9 — correct: B  (slide 13)
    {
        question: "A rheumatology lecturer describes the dual role of IL-17 in the gut.\n\nWhich statement best describes IL-17 behaviour in the context of chronic inflammatory bowel disease?",
        options: {
            A: "IL-17 is downregulated, leading to increased microbial translocation and sepsis",
            B: "IL-17 becomes pathogenic, recruiting excessive neutrophils, driving fibrosis and contributing to mucosal damage",
            C: "IL-17 switches to an anti-inflammatory role by expanding regulatory T cells",
            D: "IL-17 enhances the epithelial barrier by upregulating tight junction proteins",
            E: "IL-17 is protective throughout, maintaining intestinal integrity regardless of disease state"
        },
        correctAnswer: "B",
        explanation: "IL-17 has a dual role in the gut. Under healthy conditions it is protective, maintaining intestinal mucosal barrier integrity. However, in chronic inflammation such as IBD, IL-17 becomes pathogenic: it recruits excessive neutrophils, drives fibrosis, and contributes to chronic inflammation, leading to mucosal damage, ulceration, and disease progression. Its function is therefore context-dependent rather than uniformly protective.<br><br><em>Slide 13 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_13_labelled.jpg"
    },
    // Q10 — correct: C  (slide 14)
    {
        question: "A clinical immunologist is reviewing the cytokine network in spondyloarthritis.\n\nWhat is the primary role of IL-23 in the pathogenesis of SpA?",
        options: {
            A: "Suppressing TNF-alpha production to limit systemic inflammation",
            B: "Directly inducing bone erosion at entheses by activating osteoclasts",
            C: "Maintaining and expanding Th17 cells, which are the main producers of IL-17 and IL-22",
            D: "Providing the first line of mucosal defence against gut microbes",
            E: "Stimulating HLA-B27 expression on antigen-presenting cells"
        },
        correctAnswer: "C",
        explanation: "IL-23 is a pro-inflammatory cytokine primarily produced by dendritic cells and macrophages. Its central role is to maintain and expand T helper 17 (Th17) cells, which are the main producers of IL-17 and IL-22. This IL-23/IL-17 axis is pathologically overactive in SpA, leading to excessive IL-17 production and its downstream consequences at entheses and in bone.<br><br><em>Slide 14 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_14_labelled.jpg"
    },
    // Q11 — correct: B  (slide 15)
    {
        question: "A gastroenterologist asks how frequently subclinical gut inflammation is found in patients with spondyloarthritis on ileocolonoscopy.\n\nWhich of the following best represents this prevalence?",
        options: {
            A: "Approximately one-quarter of patients",
            B: "Approximately two-thirds of patients",
            C: "Approximately one-half of patients",
            D: "Almost all patients (greater than 90%)",
            E: "Fewer than one in ten patients"
        },
        correctAnswer: "B",
        explanation: "Ileocolonoscopy demonstrates subclinical acute or chronic intestinal inflammation in approximately two-thirds of patients with SpA. Additionally, ankylosing spondylitis is present in 4 to 10% of patients with ulcerative colitis and Crohn disease, and sacroiliitis can be found on plain radiographs in a significant proportion of patients with Crohn disease, many of whom have no symptoms of inflammatory back pain.<br><br><em>Slide 15 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_15_labelled.jpg"
    },
    // Q12 — correct: E  (slide 16)
    {
        question: "A 28-year-old man with ankylosing spondylitis is being counselled about the genetic marker associated with his condition.\n\nApproximately what proportion of patients with ankylosing spondylitis carry HLA-B27, compared with the general UK population?",
        options: {
            A: "99% of AS patients versus approximately 30% of the general UK population",
            B: "50% of AS patients versus approximately 5% of the general UK population",
            C: "75% of AS patients versus approximately 25% of the general UK population",
            D: "60% of AS patients versus approximately 1% of the general UK population",
            E: "90% of AS patients versus approximately 10% of the general UK population"
        },
        correctAnswer: "E",
        explanation: "HLA-B27 is present in approximately 90% of patients with ankylosing spondylitis in most ethnic groups, compared with approximately 10% of the general UK population. This association was recognised in 1973 and represents the strongest genetic association with the disease. At least 100 subtypes of HLA-B27 have been characterised.<br><br><em>Slide 16 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_16_labelled.jpg"
    },
    // Q13 — correct: D  (slide 17)
    {
        question: "A molecular biologist is studying how HLA-B27 contributes to SpA pathogenesis.\n\nWhich of the following best describes the mechanism by which HLA-B27 misfolding promotes SpA inflammation?",
        options: {
            A: "Misfolding reduces HLA-B27 surface expression, impairing CD8+ T cell surveillance",
            B: "Misfolding exposes cryptic peptides that trigger autoantibody formation against joint cartilage",
            C: "Misfolding leads to complement activation and deposition of immune complexes at entheses",
            D: "Misfolding in the endoplasmic reticulum causes ER stress, which dramatically increases IL-23 production",
            E: "Misfolding causes TNF-alpha receptor upregulation on osteoclasts"
        },
        correctAnswer: "D",
        explanation: "The HLA-B27 heavy chain is prone to slow folding and misfolding inside the endoplasmic reticulum (ER). This misfolding triggers a cellular alarm signal called ER stress, which dramatically increases the production of pro-inflammatory cytokines, particularly IL-23. IL-23 is the key upstream cytokine that drives the IL-23/IL-17 axis central to SpA inflammation.<br><br><em>Slide 17 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_17_labelled.jpg"
    },
    // Q14 — correct: E  (slide 19)
    {
        question: "A 35-year-old man with known ankylosing spondylitis presents to the eye clinic with acute unilateral pain, photophobia, and blurred vision.\n\nWhich of the following statements about uveitis in spondyloarthritis is correct?",
        options: {
            A: "Uveitis in SpA is most commonly posterior rather than anterior",
            B: "Uveitis in SpA is typically bilateral and chronic",
            C: "Uveitis frequency in SpA is approximately 5 to 10 percent",
            D: "The severity of articular disease predicts the risk of uveitis relapse",
            E: "The activity of eye disease is not correlated with the activity of articular disease"
        },
        correctAnswer: "E",
        explanation: "The frequency of uveitis in SpA is approximately 25 to 35%. Uveitis typically presents as acute unilateral pain, photophobia, and blurring of vision \u2014 not bilateral or posterior. Critically, the activity and severity of the eye disease are not correlated with the activity and severity of the articular disease. Approximately 50% of patients with acute recurrent unilateral anterior uveitis have a form of SpA.<br><br><em>Slide 19 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_19_labelled.jpg"
    },
    // Q15 — correct: C  (slide 23)
    {
        question: "A rheumatologist discusses the classification of axial spondyloarthritis introduced by the ASAS group in 2009.\n\nWhich two subtypes of axial spondyloarthritis are recognised under this classification?",
        options: {
            A: "Psoriatic spondylitis and enteropathic spondylitis",
            B: "Ankylosing spondylitis and reactive arthritis",
            C: "Ankylosing spondylitis and nonradiographic axSpA",
            D: "Radiographic SpA and undifferentiated SpA",
            E: "Juvenile SpA and adult-onset SpA"
        },
        correctAnswer: "C",
        explanation: "The term 'axial spondyloarthritis' became standard nomenclature in 2009 based on a multinational ASAS study. Two subtypes of axSpA are recognised: ankylosing spondylitis (AS), where radiographic abnormalities consistent with sacroiliitis are present, and nonradiographic axSpA (nr-axSpA), where such plain radiographic findings are absent or minimal. SpA with predominantly peripheral involvement (typically psoriatic and enteropathic arthritis) is designated peripheral SpA.<br><br><em>Slide 23 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_23_labelled.jpg"
    },
    // Q16 — correct: E  (slide 26)
    {
        question: "A 26-year-old woman presents with back pain. Her rheumatologist considers whether the pain is inflammatory in nature.\n\nWhich of the following is one of the five features used to define inflammatory back pain in spondyloarthritis?",
        options: {
            A: "Unilateral radiation to the buttock",
            B: "Age of onset over 50 years",
            C: "Worsening pain with exercise",
            D: "Morning stiffness lasting less than 30 minutes",
            E: "Good response to NSAIDs"
        },
        correctAnswer: "E",
        explanation: "Inflammatory back pain in SpA typically exhibits at least four of five features: age of onset under 40 years; improvement with exercise; no improvement with rest; pain at night with improvement on arising; and a good response to NSAIDs. Back pain that does not fulfil these criteria is designated mechanical low back pain. Age of onset over 50 years and worsening with exercise are features against inflammatory back pain.<br><br><em>Slide 26 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_26_labelled.jpg"
    },
    // Q17 — correct: A  (slide 29)
    {
        question: "A final-year medical student lists the major musculoskeletal features of spondyloarthritis from lecture notes.\n\nWhich of the following is NOT listed among the major musculoskeletal features of axial SpA?",
        options: {
            A: "Rotator cuff degeneration",
            B: "SI joint and spinal involvement",
            C: "Dactylitis",
            D: "Peripheral arthritis",
            E: "Inflammation of extraspinal entheses"
        },
        correctAnswer: "A",
        explanation: "The major musculoskeletal features of SpA include SI joint and spinal involvement, hip and shoulder involvement, peripheral arthritis, costovertebral and manubriosternal inflammation, inflammation of extraspinal entheses, and dactylitis. Rotator cuff degeneration is a degenerative rather than inflammatory condition and is not listed among the SpA features.<br><br><em>Slide 29 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_29_labelled.jpg"
    },
    // Q18 — correct: C  (slide 30)
    {
        question: "A patient with long-standing ankylosing spondylitis is reviewed in clinic. His rheumatologist notes a characteristic postural abnormality.\n\nWhich postural change is specifically associated with advanced ankylosing spondylitis?",
        options: {
            A: "Lateral scoliosis",
            B: "Hyperlordosis of the lumbar spine",
            C: "Hyperkyphosis (hunchback)",
            D: "Flattening of the thoracic spine",
            E: "Cervical lordosis reversal"
        },
        correctAnswer: "C",
        explanation: "Among the clinical features of SpA, postural abnormalities \u2014 especially hyperkyphosis (hunchback) \u2014 are specifically listed. This results from progressive fusion of the spine in a flexed position, the hallmark of severe ankylosing spondylitis. The other postural changes are not specifically identified as characteristic of SpA in this lecture.<br><br><em>Slide 30 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_30_labelled.jpg"
    },
    // Q19 — correct: A  (slide 39)
    {
        question: "A radiologist is reporting the sacroiliac joints of a patient with suspected axial SpA. She identifies moderate erosions, sclerosis, and partial joint-space widening without total ankylosis.\n\nWhich grade of sacroiliitis does this finding represent?",
        options: {
            A: "Grade 3",
            B: "Grade 1",
            C: "Grade 2",
            D: "Grade 4",
            E: "Grade 0"
        },
        correctAnswer: "A",
        explanation: "The SI joint grading system in AS is: Grade 0 \u2014 normal; Grade 1 \u2014 suspicious but not definite changes; Grade 2 \u2014 minimal abnormality (small localised erosions or sclerosis without alteration in joint width); Grade 3 \u2014 unequivocal abnormality, moderate or advanced sacroiliitis with erosions, sclerosis, joint-space widening or narrowing, or partial ankylosis; Grade 4 \u2014 total ankylosis. The findings described (moderate erosions, sclerosis, partial widening) fit Grade 3.<br><br><em>Slide 39 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_39_labelled.jpg"
    },
    // Q20 — correct: C  (slide 42)
    {
        question: "A rheumatologist explains the difference between ankylosing spondylitis and nonradiographic axial SpA to a trainee.\n\nWhat distinguishes ankylosing spondylitis from nonradiographic axial SpA (nr-axSpA)?",
        options: {
            A: "AS affects only the peripheral skeleton; nr-axSpA affects only the spine",
            B: "AS is seronegative for HLA-B27 whereas nr-axSpA is HLA-B27 positive",
            C: "AS exhibits radiographic sacroiliitis on plain radiography; nr-axSpA does not",
            D: "AS is exclusively a disease of women; nr-axSpA affects both sexes equally",
            E: "AS responds to IL-17 inhibitors; nr-axSpA does not respond to any biological therapy"
        },
        correctAnswer: "C",
        explanation: "The two subtypes of axSpA are ankylosing spondylitis (AS) and nonradiographic axSpA (nr-axSpA). Patients with AS exhibit radiographic abnormalities consistent with sacroiliitis on plain radiography, but such findings are absent or minimal in nr-axSpA. It is unclear whether these represent distinct disorders or different points along a single disease spectrum. Both subtypes may share similar HLA-B27 status, symptoms, and treatment options.<br><br><em>Slide 42 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_42_labelled.jpg"
    },
    // Q21 — correct: E  (slide 43)
    {
        question: "A 40-year-old HLA-B27 positive male smoker with pre-existing radiographic damage is counselled about his prognosis in ankylosing spondylitis.\n\nWhich of the following factors is associated with faster radiographic progression in AS?",
        options: {
            A: "Elevated CRP and negative HLA-B27",
            B: "Female gender, negative HLA-B27, and long disease duration",
            C: "Older age at diagnosis and absence of peripheral arthritis",
            D: "Use of NSAIDs and physical inactivity",
            E: "Male gender, positive HLA-B27, pre-existing radiographic damage, and history of smoking"
        },
        correctAnswer: "E",
        explanation: "Over a 12-year period, approximately one quarter of AS patients show no radiographic progression. Factors that correlate with faster progression are male gender, pre-existing radiographic damage, positive HLA-B27 testing, and a history of smoking. Female gender and HLA-B27 negativity are not associated with faster progression.<br><br><em>Slide 43 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_43_labelled.jpg"
    },
    // Q22 — correct: A  (slide 46)
    {
        question: "A patient with ankylosing spondylitis sustains a vertebral fracture following minor trauma.\n\nHow much more common are vertebral fragility fractures from trauma in AS compared with non-AS controls?",
        options: {
            A: "At least twice as common",
            B: "Five times as common",
            C: "Eleven times as common",
            D: "No more common than in the general population",
            E: "Three times as common only in women"
        },
        correctAnswer: "A",
        explanation: "Vertebral fragility fractures from trauma are at least twice as common in AS compared with non-AS controls, although the risks of forearm or hip fractures are not similarly elevated. Notably, spinal cord injury is 11 times more common in AS \u2014 this is a distinct statistic from the fracture risk itself. Recognising this elevated fracture risk is important in the assessment and management of AS patients after trauma.<br><br><em>Slide 46 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_46_labelled.jpg"
    },
    // Q23 — correct: E  (slide 48)
    {
        question: "A radiologist reviews the MRI spine of a patient with advanced ankylosing spondylitis.\n\nWhich MRI signal characteristics are associated with active inflammatory spinal lesions in AS?",
        options: {
            A: "Absence of signal change \u2014 MRI is normal in all AS spinal lesions",
            B: "Low signal on all sequences indicating cortical bone sclerosis",
            C: "Bright signal on T1-weighted sequences with gadolinium enhancement only",
            D: "Diffuse hypointensity on T2 with susceptibility artefact",
            E: "Bright signal on STIR or T2-weighted sequences with fat suppression (bone marrow oedema)"
        },
        correctAnswer: "E",
        explanation: "The spinal lesions of anterior/posterior spondylitis in AS appear as bone marrow oedema (BME), seen as bright signal on STIR or T2-weighted sequences with fat suppression, or as areas of fatty deposition shown as bright signal on T1-weighted sequences. The endpoint of radiographic progression is a bamboo spine \u2014 total fusion resulting from bridging syndesmophytes across vertebrae.<br><br><em>Slide 48 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_48_labelled.jpg"
    },
    // Q24 — correct: B  (slide 49)
    {
        question: "A radiologist is asked why MRI is particularly important in nonradiographic axial SpA (nr-axSpA).\n\nWhich of the following best explains the value of MRI over plain radiography in nr-axSpA?",
        options: {
            A: "MRI quantifies bone density more accurately than dual-energy X-ray absorptiometry",
            B: "MRI can reveal inflammatory changes, fatty changes, and subtle structural abnormalities not visible on plain radiographs",
            C: "MRI is the only modality that can confirm the HLA-B27 genotype",
            D: "Plain radiographs show more detail of soft tissue enthesitis than MRI",
            E: "MRI is used only to exclude malignancy, not to assess disease activity in nr-axSpA"
        },
        correctAnswer: "B",
        explanation: "MRI can reveal inflammatory changes, fatty changes, and subtle structural abnormalities that plain radiography cannot detect. This is especially important in nr-axSpA because radiographs in nr-axSpA are by definition normal or equivocal. However, not all patients with nr-axSpA have abnormal MRI findings, and false-positive MRI findings may occur in healthy individuals without axSpA.<br><br><em>Slide 49 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_49_labelled.jpg"
    },
    // Q25 — correct: B  (slide 52)
    {
        question: "A patient with axial SpA has failed NSAIDs and requires biological therapy. Her IBD is also active.\n\nWhich DMARD is specifically indicated for patients with SpA and concurrent inflammatory bowel disease?",
        options: {
            A: "Methotrexate",
            B: "Sulfasalazine",
            C: "Leflunomide",
            D: "Hydroxychloroquine",
            E: "Azathioprine"
        },
        correctAnswer: "B",
        explanation: "The treatment of SpA includes a stepwise approach from NSAIDs and paracetamol through to biologics. Methotrexate is specifically indicated for peripheral SpA, while sulfasalazine is the DMARD of choice when IBD is also present. Biologics used in SpA include anti-TNF agents, JAK inhibitors, anti-IL-23 (ustekinumab), and anti-IL-17 agents (secukinumab, ixekizumab, saralimumab).<br><br><em>Slide 52 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_52_labelled.jpg"
    },
    // Q26 — correct: D  (slide 53)
    {
        question: "A rheumatologist is deciding whether a patient with ankylosing spondylitis meets criteria for TNF inhibitor therapy.\n\nWhat BASDAI score threshold is used to define high disease activity in AS?",
        options: {
            A: "8.0 or above",
            B: "2.0 or above",
            C: "6.0 or above",
            D: "4.0 or above",
            E: "3.0 or above"
        },
        correctAnswer: "D",
        explanation: "High disease activity in ankylosing spondylitis is defined as a Bath Ankylosing Spondylitis Disease Activity Index (BASDAI) of 4.0 or above. The TNF inhibitors approved for both AS and nonradiographic axSpA are etanercept, infliximab, adalimumab, golimumab, and certolizumab pegol. A BASDAI threshold of 4.0 is used in clinical criteria to guide escalation to biological therapy.<br><br><em>Slide 53 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_53_labelled.jpg"
    },
    // Q27 — correct: A  (slide 54)
    {
        question: "A rheumatologist is reviewing a patient's suitability for TNF inhibitor therapy for ankylosing spondylitis.\n\nWhich of the following is a contraindication to TNF inhibitor use in SpA?",
        options: {
            A: "Demyelinating disease such as multiple sclerosis or optic neuritis",
            B: "Osteoporosis",
            C: "Controlled hypertension",
            D: "Mild renal impairment",
            E: "Hypothyroidism on thyroxine replacement"
        },
        correctAnswer: "A",
        explanation: "The contraindications to TNF inhibitor use in SpA are the same as in other diseases such as rheumatoid arthritis, and include: active infection, latent (untreated) tuberculosis, demyelinating disease (e.g. multiple sclerosis or optic neuritis), heart failure, and malignancy. Osteoporosis, controlled hypertension, mild renal impairment, and hypothyroidism are not contraindications.<br><br><em>Slide 54 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_54_labelled.jpg"
    },
    // Q28 — correct: A  (slide 55)
    {
        question: "A pharmacist asks why secukinumab (an IL-17A inhibitor) is effective in spondyloarthritis.\n\nWhich of the following best describes the role of IL-17A in SpA pathogenesis?",
        options: {
            A: "IL-17A drives inflammation in the spine and peripheral joints, enthesitis, and new bone formation (syndesmophytes)",
            B: "IL-17A exclusively suppresses osteoclast activity, preventing bone erosion",
            C: "IL-17A is the primary cytokine responsible for synovial pannus formation in SpA",
            D: "IL-17A promotes regulatory T cell expansion, limiting systemic inflammation",
            E: "IL-17A's role is limited to mucosal immunity and does not affect joints or entheses"
        },
        correctAnswer: "A",
        explanation: "IL-17A is a key driver of inflammation in SpA, found in high levels in affected joints and tissues of patients with AS and PsA. Its contributions include maintaining inflammation in the spine and peripheral joints, enthesitis (inflammation at tendon/ligament insertions), and new bone formation (syndesmophytes) leading to the fusion and stiffness of advanced AS. IL-17 production is primarily regulated by the pathologically overactive IL-23/IL-17 axis in SpA.<br><br><em>Slide 55 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_55_labelled.jpg"
    },
    // Q29 — correct: D  (slide 57)
    {
        question: "A spinal surgeon is consulted regarding a patient with ankylosing spondylitis.\n\nWhich of the following is a recognised surgical indication in spondyloarthritis?",
        options: {
            A: "Grade 2 sacroiliitis on plain radiography",
            B: "BASDAI score above 4.0 despite two NSAIDs",
            C: "Persistent elevation of CRP despite anti-TNF therapy",
            D: "Atlantoaxial subluxation with neurological impairment",
            E: "Recurrent anterior uveitis unresponsive to topical steroids"
        },
        correctAnswer: "D",
        explanation: "Surgical indications in spondyloarthritis include severe hip involvement with persistent pain or severe limitation in mobility and quality of life, atlantoaxial subluxation with neurological impairment, and severe flexion deformities impairing the ability to look forward. BASDAI score, CRP, or sacroiliitis grade alone are not surgical indications. Uveitis management is the domain of ophthalmology, not orthopaedic surgery.<br><br><em>Slide 57 \u2014 Spondyloarthritis, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/spondyloarthritis/slide_57_labelled.jpg"
    },
],
"Crystallopathies": [
    // Q1 — correct: A  (slide 2)
    {
        question: "A medical student asks for a definition of crystallopathy.\n\nWhich of the following best defines crystallopathy?",
        options: {
            A: "Disease that involves crystal-like particulate matter in the pathogenesis of tissue injury",
            B: "Disease caused by abnormal calcium metabolism leading to hypercalcaemia",
            C: "Disease characterised by deposition of amyloid fibrils in connective tissues",
            D: "Disease caused by immune complex deposition in small vessel walls",
            E: "Disease involving dysregulated uric acid excretion exclusively at the renal tubule"
        },
        correctAnswer: "A",
        explanation: "A crystallopathy is defined as a disease that involves crystal-like particulate matter in the pathogenesis of tissue injury. While physiologically organisms use crystal formation to build complex structures such as bones and teeth, pathologically the same process can be injurious \u2014 for example, calcifications of vascular walls or tendons.<br><br><em>Slide 2 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_02_labelled.jpg"
    },
    // Q2 — correct: C  (slide 4)
    {
        question: "A pathologist is explaining the mechanism by which crystals in the wrong anatomical location cause tissue damage.\n\nWhich term describes the self-amplifying loop of crystal-induced cytotoxicity, inflammation, and inflammation-driven cell necrosis?",
        options: {
            A: "Autoinflammation",
            B: "Pyroptosis",
            C: "Necroinflammation",
            D: "Immunothrombosis",
            E: "Ferroptosis"
        },
        correctAnswer: "C",
        explanation: "Crystals in the wrong places elicit direct cytotoxic effects, inflammation, and inflammation-driven cell necrosis in an autoamplifying loop referred to as necroinflammation. This leads to the crescendo of painful swelling or organ dysfunction during the first hours after crystal exposure. Cell death occurs via multiple mechanisms including apoptosis, necroptosis, ferroptosis, and pyroptosis.<br><br><em>Slide 4 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_04_labelled.jpg"
    },
    // Q3 — correct: C  (slide 5)
    {
        question: "A researcher is studying the different forms of cell death triggered by crystal deposition.\n\nWhich of the following best defines ferroptosis?",
        options: {
            A: "A form of programmed cell death characterised by DNA fragmentation and membrane blebbing without release of cytosolic contents",
            B: "A caspase-1-dependent form of cell death resulting in release of IL-1 beta and pore formation by gasdermin D",
            C: "An iron-dependent form of regulated necrosis involving impaired glutathione peroxidase 4 generation, promoting lipid peroxidation-driven cell death",
            D: "A neutrophil-specific form of death involving release of chromatin and granule proteins as extracellular traps",
            E: "A complement-mediated form of cell lysis driven by membrane attack complex formation on crystal surfaces"
        },
        correctAnswer: "C",
        explanation: "Ferroptosis is specifically defined as an iron-dependent form of regulated necrosis involving impaired glutathione peroxidase 4 (GPX4) generation, which promotes lipid peroxidation-driven cell death. This distinguishes it from pyroptosis (caspase-1-dependent, gasdermin D pore formation), apoptosis (programmed, without cytosolic release), NETosis (neutrophil-specific), and complement-mediated lysis.<br><br><em>Slide 5 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_05_labelled.jpg"
    },
    // Q4 — correct: B  (slide 6)
    {
        question: "A clinical immunologist explains how crystals trigger a systemic inflammatory response in gout.\n\nWhich cytokine, released following inflammasome activation, is responsible for inducing fever and systemic inflammatory response syndrome (SIRS) in crystal-induced disease?",
        options: {
            A: "Tumour necrosis factor-alpha",
            B: "Interleukin-1 beta",
            C: "Interleukin-6",
            D: "Interleukin-17A",
            E: "Interferon-gamma"
        },
        correctAnswer: "B",
        explanation: "Crystals induce generation of inflammasomes (inflammation factories) and interleukin-1-dependent inflammation in dendritic cells and macrophages. Systemic release of IL-1 beta specifically induces fever and a systemic inflammatory response syndrome (SIRS). Inflammasome activation is a key mechanism shared between gout and CPPD disease.<br><br><em>Slide 6 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_06_labelled.jpg"
    },
    // Q5 — correct: D  (slide 13)
    {
        question: "A GP is explaining to a patient why their elevated urate level has caused joint problems.\n\nAt what serum urate level is hyperuricaemia defined, and what does it lead to in gout?",
        options: {
            A: "Greater than 7 mg/dL (420 \u00b5mol/L), leading to calcium oxalate nephrolithiasis",
            B: "Greater than 5 mg/dL (300 \u00b5mol/L), leading to calcium pyrophosphate crystal deposition",
            C: "Greater than 10 mg/dL (600 \u00b5mol/L), leading to tophus formation exclusively",
            D: "Greater than 7 mg/dL (420 \u00b5mol/L), leading to formation and deposition of monosodium urate crystals",
            E: "Greater than 3 mg/dL (180 \u00b5mol/L), leading to uric acid nephropathy"
        },
        correctAnswer: "D",
        explanation: "Gout is caused by hyperuricaemia, defined as serum urate levels greater than 7 mg/dL (420 \u00b5mol/L), leading to the formation and deposition of monosodium urate (MSU) crystals. It is these MSU crystals \u2014 not elevated urate alone \u2014 that trigger the inflammatory response. Calcium pyrophosphate deposition is a separate crystallopathy with different crystals and pathogenesis.<br><br><em>Slide 13 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_13_labelled.jpg"
    },
    // Q6 — correct: E  (slide 15)
    {
        question: "A pharmacologist explains the biochemical pathway targeted by allopurinol in gout.\n\nWhich enzyme catalyses the conversion of xanthine to urate in purine catabolism?",
        options: {
            A: "Glutathione peroxidase 4",
            B: "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)",
            C: "Adenosine deaminase",
            D: "Uricase",
            E: "Xanthine oxidase"
        },
        correctAnswer: "E",
        explanation: "Uric acid is a degradation product of purine catabolism. Purine bases are converted first into xanthine and then into urate for excretion, with xanthine oxidase catalysing two steps in this process \u2014 including the final conversion to urate. Allopurinol and febuxostat both act as xanthine oxidase inhibitors to reduce uric acid production. HGPRT salvages purines, and uricase (absent in humans) would further degrade urate.<br><br><em>Slide 15 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_15_labelled.jpg"
    },
    // Q7 — correct: C  (slide 16)
    {
        question: "A student asks why humans are uniquely susceptible to gout among primates.\n\nWhich enzyme do humans uniquely lack compared with other primates, contributing to their susceptibility to hyperuricaemia?",
        options: {
            A: "Adenosine deaminase",
            B: "Xanthine oxidase",
            C: "Uricase",
            D: "Hypoxanthine-guanine phosphoribosyltransferase",
            E: "Glutathione peroxidase 4"
        },
        correctAnswer: "C",
        explanation: "Man is the only primate not to have uricase. Uricase would further degrade urate to allantoin (a more soluble compound), and its absence means urate accumulates in humans to levels that risk crystallisation. Xanthine oxidase is present in humans and is the enzyme inhibited by allopurinol. HGPRT deficiency causes Lesch-Nyhan syndrome, a distinct condition.<br><br><em>Slide 16 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_16_labelled.jpg"
    },
    // Q8 — correct: B  (slide 17)
    {
        question: "A rheumatologist lists the clinical manifestations of gout to a group of medical students.\n\nWhich of the following is NOT listed as a clinical manifestation of gout?",
        options: {
            A: "Acute recurrent attacks of inflammatory arthritis",
            B: "Sacroiliitis with inflammatory back pain",
            C: "Chronic tophaceous gout with soft tissue deposits",
            D: "Uric acid nephrolithiasis",
            E: "Nephropathy"
        },
        correctAnswer: "B",
        explanation: "The clinical manifestations of gout include acute recurrent attacks of inflammatory arthritis, chronic tophaceous gout with accumulation of urate crystals in soft tissues, uric acid nephrolithiasis, and nephropathy (most often due to comorbid states in gouty patients). Sacroiliitis and inflammatory back pain are features of spondyloarthritis, not gout.<br><br><em>Slide 17 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_17_labelled.jpg"
    },
    // Q9 — correct: C  (slide 18)
    {
        question: "A patient with a first acute gout attack asks what will happen if they leave the condition untreated.\n\nWhich of the following best describes the natural progression of untreated gout?",
        options: {
            A: "Progressive renal failure as the dominant complication, with minimal joint destruction",
            B: "Spontaneous resolution without recurrence in the majority of patients",
            C: "Progression to tophus formation, recurrent attacks affecting multiple joints, and progressive joint destruction",
            D: "Transition to a seronegative symmetrical polyarthritis resembling rheumatoid arthritis",
            E: "Rapid progression to bamboo spine due to syndesmophyte formation"
        },
        correctAnswer: "C",
        explanation: "Clinically, gout is characterised by acute episodes of joint inflammation, usually affecting a single joint, interspersed with symptom-free periods. If untreated, gout typically progresses to the formation of urate deposits (tophi) in soft tissues, recurrent attacks affecting multiple joints, and progressive joint destruction. Spontaneous resolution of individual attacks occurs, but the disease as a whole is progressive without treatment.<br><br><em>Slide 18 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_18_labelled.jpg"
    },
    // Q10 — correct: B  (slide 21)
    {
        question: "A rheumatologist describes the histological composition of a gouty tophus.\n\nWhich of the following best describes the structure of a tophus?",
        options: {
            A: "Collections of calcium pyrophosphate crystals within hyaline cartilage surrounded by neutrophils",
            B: "Deposits of MSU crystals surrounded by granulomatous inflammation, involving both innate and adaptive immunity",
            C: "Deposits of amyloid fibrils in periarticular soft tissue with surrounding plasma cell infiltrate",
            D: "Collections of urate crystals within synovial membrane without any inflammatory response",
            E: "Calcium oxalate crystals in the renal medulla surrounded by fibrous tissue"
        },
        correctAnswer: "B",
        explanation: "Tophi are deposits of monosodium urate (MSU) crystals surrounded by granulomatous inflammation. The tophus is a complex but organised and dynamic chronic inflammatory tissue response to MSU crystal deposition, in which both innate immunity and adaptive immunity participate. Uncommonly, tophi may be found in parenchymal organs as well as soft tissues.<br><br><em>Slide 21 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_21_labelled.jpg"
    },
    // Q11 — correct: D  (slide 26)
    {
        question: "A researcher is studying inflammasome biology in gout.\n\nWhy does inflammasome activation require two prerequisite signals rather than one?",
        options: {
            A: "Two signals are required because MSU crystals can only activate NLRP3 in the presence of prior complement fixation",
            B: "Two signals are needed to overcome the anti-inflammatory effect of IL-10 produced by regulatory macrophages",
            C: "The first signal activates caspase-1 directly, and the second signal is needed only to produce gasdermin D",
            D: "Reliance on two signals increases specificity of the response while avoiding inappropriate pathway firing",
            E: "The first signal produces IL-1 beta and the second signal is needed to export it across the cell membrane"
        },
        correctAnswer: "D",
        explanation: "Inflammasome engagement can be dissected into two prerequisite steps: priming and activation. Reliance on two signals is a key feature of most inflammasomes and increases the specificity of the response while avoiding inappropriate firing of the pathway. Signal 1 (priming) is provided by hyperuricaemia, which controls expression of all NLRP3 inflammasome components. Signal 2 (activation) is provided by MSU crystals themselves, triggering inflammasome assembly.<br><br><em>Slide 26 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_26_labelled.jpg"
    },
    // Q12 — correct: C  (slide 28)
    {
        question: "A student is revising the two-signal model of NLRP3 inflammasome activation in gout.\n\nWhich of the following correctly pairs Signal 1 and Signal 2 in NLRP3 inflammasome activation?",
        options: {
            A: "Signal 1: IL-18 (priming); Signal 2: hyperuricaemia (activation)",
            B: "Signal 1: MSU crystals (priming); Signal 2: IL-1 beta (activation)",
            C: "Signal 1: hyperuricaemia (priming); Signal 2: MSU crystals (activation)",
            D: "Signal 1: caspase-1 (priming); Signal 2: MSU crystals (activation)",
            E: "Signal 1: gasdermin D (priming); Signal 2: RANKL (activation)"
        },
        correctAnswer: "C",
        explanation: "In the two-signal model of NLRP3 inflammasome activation in gout, Signal 1 is provided by hyperuricaemia, which controls the expression of all components required for NLRP3 inflammasome assembly and contributes to expression of the precursor proteins that are substrates of inflammatory caspases. Signal 2 is provided by monosodium urate (MSU) crystals themselves, which trigger assembly of the inflammasome.<br><br><em>Slide 28 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_28_labelled.jpg"
    },
    // Q13 — correct: D  (slide 29)
    {
        question: "A pathologist explains how inflammasome activation leads to pyroptosis in gout.\n\nWhich of the following correctly describes the role of gasdermin D in this process?",
        options: {
            A: "Gasdermin D inhibits IL-1 beta release by sealing the cell membrane during pyroptosis",
            B: "Gasdermin D activates caspase-1 by removing its pro-domain, enabling IL-1 beta cleavage",
            C: "Gasdermin D binds MSU crystals on the cell surface, triggering signal 2 of NLRP3 activation",
            D: "Caspase-1 and caspase-11 cleave gasdermin D, creating cytotoxic pores that alter cellular integrity and cause pyroptosis",
            E: "Gasdermin D promotes NET formation by translocating to the neutrophil nucleus"
        },
        correctAnswer: "D",
        explanation: "Caspase-1 activates the pro-inflammatory cytokines IL-1 beta and IL-18 by cleaving their precursor proteins. Caspase-1 and caspase-11 can also cleave gasdermin D, which creates cytotoxic pores in the cell membrane. These pores alter cellular integrity and result in cell death by pyroptosis, releasing a plethora of pro-inflammatory mediators. Pyroptosis thereby amplifies the inflammatory response and facilitates further IL-1 beta release.<br><br><em>Slide 29 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_29_labelled.jpg"
    },
    // Q14 — correct: B  (slide 34)
    {
        question: "A researcher investigates why acute gout attacks eventually self-resolve despite continued crystal presence.\n\nWhat is the mechanism by which resolution of acute gouty inflammation is mediated?",
        options: {
            A: "Upregulation of IL-10 by regulatory macrophages suppresses NLRP3 inflammasome activity",
            B: "Massive NETosis releases proteases that digest all cytokines and chemokines, creating immune anergy",
            C: "Crystal dissolution due to rising intra-articular pH during the acute attack",
            D: "Neutrophil apoptosis with release of anti-inflammatory lipoxins from apoptotic bodies",
            E: "Complement depletion within the joint space limiting further opsonisation of crystals"
        },
        correctAnswer: "B",
        explanation: "The resolution phase of acute gouty inflammation is mediated by aggregated neutrophil extracellular trap (NET) structures. Tophus formation involves large numbers of neutrophils undergoing NETosis \u2014 a form of neutrophil death associated with NET formation \u2014 but without release of pro-inflammatory cytokines. The massive NETosis results in release of large amounts of proteases that digest all cytokines and chemokines, producing immune anergy. The same mechanism may contribute to spontaneous resolution of acute attacks.<br><br><em>Slide 34 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_34_labelled.jpg"
    },
    // Q15 — correct: B  (slide 37)
    {
        question: "A 55-year-old man presents with an acutely hot, swollen knee, fever, and leukocytosis.\n\nWhich of the following statements about the differential diagnosis of acute monoarthritis is correct?",
        options: {
            A: "Fever and leukocytosis reliably exclude gout and confirm a diagnosis of septic arthritis",
            B: "Monoarticular gout can be clinically indistinguishable from acute septic arthritis, and both may rarely coexist",
            C: "Septic arthritis always affects multiple joints simultaneously, distinguishing it from gout",
            D: "A raised ESR is specific for septic arthritis and excludes crystal-induced arthritis",
            E: "Acute gout never presents with fever, making it easily distinguishable from infection"
        },
        correctAnswer: "B",
        explanation: "Acute monoarthritis should be regarded as infectious until proved otherwise. Monoarticular gouty arthritis can give a clinical picture indistinguishable from acute septic arthritis, including fever, leukocytosis, and elevated ESR. On rare occasions, acute gout and septic arthritis may even coexist. This is why joint aspiration with Gram stain, culture, and polarised light microscopy is essential to distinguish these conditions.<br><br><em>Slide 37 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_37_labelled.jpg"
    },
    // Q16 — correct: E  (slide 38)
    {
        question: "A registrar is managing a patient with an acutely swollen joint and needs to determine whether it is gout or infection.\n\nWhat is the recommended approach to definitively distinguish gout from septic arthritis?",
        options: {
            A: "Clinical response to a single dose of colchicine within 24 hours",
            B: "Serum urate measurement, with levels above 7 mg/dL confirming gout",
            C: "Plain radiograph of the affected joint to identify erosions or chondrocalcinosis",
            D: "MRI of the joint to identify bone marrow oedema consistent with infection",
            E: "Joint aspiration with Gram stain, culture, and polarised light microscopy of the synovial fluid"
        },
        correctAnswer: "E",
        explanation: "Aspiration of synovial fluid from the affected joint with analysis by Gram stain, culture, and polarised light microscopy permits gout and septic arthritis to be distinguished in the great majority of instances. Synovial fluid should be sent in two pots \u2014 one to microbiology for MC&S and one to histopathology for crystal analysis. Serum urate can be normal during acute attacks, and clinical response to colchicine is not sufficiently specific for diagnosis.<br><br><em>Slide 38 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_38_labelled.jpg"
    },
    // Q17 — correct: A  (slide 40)
    {
        question: "A GP is counselling a patient on the lifestyle risk factors for developing gout.\n\nWhich of the following is NOT listed as a risk factor for gout?",
        options: {
            A: "Regular low-impact exercise",
            B: "Obesity",
            C: "High ethanol use",
            D: "Diets rich in animal-based purines",
            E: "Sugar-sweetened drinks"
        },
        correctAnswer: "A",
        explanation: "The risk factors for gout include hypertension, obesity, diabetes, hyperlipidaemia, atherosclerosis, unbalanced diets rich in animal-based purines, sugar-sweetened drinks, and high ethanol use. Regular low-impact exercise is not listed as a risk factor and may in fact form part of a healthy lifestyle strategy to reduce metabolic risk. This list reflects the strong metabolic and dietary associations of gout.<br><br><em>Slide 40 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_40_labelled.jpg"
    },
    // Q18 — correct: D  (slide 41)
    {
        question: "A student asks why gout typically affects peripheral joints such as the first metatarsophalangeal joint rather than central joints.\n\nWhich of the following best explains this distribution?",
        options: {
            A: "Peripheral joints produce more PAD enzymes, increasing local citrullination and urate deposition",
            B: "Peripheral joints have thinner synovial lining, making them more susceptible to crystal-induced inflammation",
            C: "Blood flow is reduced in peripheral joints, increasing the residence time of urate",
            D: "Uric acid is less soluble in the cooler peripheral tissues, favouring crystal deposition at distal sites",
            E: "The first MTP joint has lower pH than central joints, converting soluble urate to insoluble crystals"
        },
        correctAnswer: "D",
        explanation: "Uric acid is less soluble in the cooler peripheries, which is why gout preferentially affects distal joints such as the first metatarsophalangeal joint. This temperature-dependent solubility explains the peripheral distribution of MSU crystal deposition. The differential diagnosis at these peripheral sites also includes osteoarthritis.<br><br><em>Slide 41 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_41_labelled.jpg"
    },
    // Q19 — correct: A  (slide 46)
    {
        question: "A patient with known gout asks what can trigger an acute attack.\n\nWhich of the following is listed as a recognised trigger for acute gout?",
        options: {
            A: "Starting allopurinol or uricosuric agents",
            B: "Initiating low-dose aspirin for cardiovascular prophylaxis",
            C: "Starting hydroxychloroquine for a concurrent autoimmune condition",
            D: "Beginning methotrexate therapy for psoriatic arthritis",
            E: "Commencing a high-fibre vegetable-based diet"
        },
        correctAnswer: "A",
        explanation: "Recognised triggers for acute gout attacks include trauma, surgery, starvation, alcohol ingestion, dietary overindulgence, and ingestion of drugs that affect serum urate concentrations \u2014 including allopurinol and uricosuric agents themselves. This paradoxical triggering at the start of urate-lowering therapy is important clinically, as prophylactic colchicine is often co-prescribed when initiating these treatments.<br><br><em>Slide 46 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_46_labelled.jpg"
    },
    // Q20 — correct: E  (slide 48)
    {
        question: "A rheumatologist is deciding whether to start urate-lowering therapy in a patient with gout.\n\nWhich of the following is a recognised indication for pharmacological urate-lowering therapy in gout?",
        options: {
            A: "Elevated serum urate above 5 mg/dL in a patient on diuretics",
            B: "A single first attack of gout in a young man with no comorbidities",
            C: "Asymptomatic hyperuricaemia without any history of gout attacks",
            D: "Radiographic chondrocalcinosis in the absence of acute flares",
            E: "Tophaceous deposits in soft tissues or subchondral bone"
        },
        correctAnswer: "E",
        explanation: "The main indications for pharmacological urate-lowering therapy in gout are: frequent or disabling gout flares; clinical or radiographic signs of structural joint damage such as gouty bone erosion or gouty arthropathy; and tophaceous deposits in soft tissues or subchondral bone. Asymptomatic hyperuricaemia without clinical gout and a single uncomplicated first attack are not in themselves indications for pharmacological urate-lowering therapy.<br><br><em>Slide 48 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_48_labelled.jpg"
    },
    // Q21 — correct: B  (slide 54)
    {
        question: "A trainee asks how colchicine reduces the frequency of recurrent gout attacks.\n\nWhich of the following best describes the prophylactic mechanism of colchicine in gout?",
        options: {
            A: "Inhibition of xanthine oxidase, reducing uric acid production",
            B: "Suppression of chemotactic factor release by synovial lining cells",
            C: "Promotion of renal tubular excretion of urate",
            D: "Direct dissolution of MSU crystals within the joint space",
            E: "Blockade of IL-1 receptor type 1, preventing IL-1 beta signalling"
        },
        correctAnswer: "B",
        explanation: "Suppression of chemotactic factor release by synovial lining cells appears to underlie the prophylactic action of colchicine. Oral colchicine (500 mcg twice daily) reduces the frequency of recurrent acute gouty arthritis. Colchicine is an especially important adjunct early in the course of antihyperuricaemic drug administration, when patients appear to be at increased risk of gouty attacks. It does not lower urate levels.<br><br><em>Slide 54 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_54_labelled.jpg"
    },
    // Q22 — correct: C  (slide 55)
    {
        question: "A patient with acute gout has contraindications to both NSAIDs and colchicine.\n\nWhich statement about steroid use in acute gout is correct?",
        options: {
            A: "Intravenous methylprednisolone is the only steroid formulation effective in acute gout",
            B: "Oral steroids should be continued at full dose for four weeks to prevent rebound",
            C: "Intraarticular steroid injection is preferable to oral steroids if diagnosis is secure and infection excluded",
            D: "Steroids are contraindicated in gout as they elevate serum urate and worsen attacks",
            E: "Oral prednisone must be combined with colchicine to prevent rebound attacks"
        },
        correctAnswer: "C",
        explanation: "If the diagnosis of acute gouty arthritis is secure and infection is ruled out, an intraarticular steroid injection is preferable to oral steroids. Oral prednisone (30 mg for one to two days, then tapered over seven to ten days) can also reduce gouty inflammation, but withdrawal may be attended by a rebound attack \u2014 making the taper important. Steroids are not contraindicated in gout itself, provided infection is excluded.<br><br><em>Slide 55 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_55_labelled.jpg"
    },
    // Q23 — correct: A  (slide 56)
    {
        question: "A pharmacology student asks about the development and mechanism of action of allopurinol.\n\nWhich of the following correctly describes allopurinol's mechanism of action?",
        options: {
            A: "Allopurinol is an inhibitor of xanthine oxidase, the enzyme that catalyses the biosynthesis of uric acid",
            B: "Allopurinol promotes renal tubular excretion of urate by inhibiting post-secretory reabsorption",
            C: "Allopurinol blocks IL-1 receptor type 1, reducing crystal-induced inflammation",
            D: "Allopurinol degrades urate to the more soluble allantoin using a recombinant uricase enzyme",
            E: "Allopurinol inhibits purine synthesis de novo by blocking phosphoribosyl pyrophosphate amidotransferase"
        },
        correctAnswer: "A",
        explanation: "Allopurinol was designed to be an inhibitor of xanthine oxidase, the enzyme that catalyses the biosynthesis of uric acid. Originally developed in 1942 during a search for antineoplastic agents, its first clinical trial in gout was in 1963. Both allopurinol and febuxostat provide competition for xanthine oxidase, thereby lowering uric acid production. Uricosurics work differently, by promoting renal clearance of urate.<br><br><em>Slide 56 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_56_labelled.jpg"
    },
    // Q24 — correct: E  (slide 60)
    {
        question: "A patient on allopurinol develops a widespread skin rash.\n\nWhat is the correct management, and what is the potential severity of this reaction?",
        options: {
            A: "Perform skin biopsy before stopping allopurinol, as rashes are usually coincidental",
            B: "Reduce the allopurinol dose by half and add antihistamines; reactions are rarely serious",
            C: "Switch to febuxostat immediately without stopping allopurinol to avoid a rebound rise in urate",
            D: "Continue allopurinol and treat the rash with topical corticosteroids; hypersensitivity is usually mild",
            E: "Stop allopurinol immediately; severe cutaneous reactions can occur with mortality approaching 25%"
        },
        correctAnswer: "E",
        explanation: "In patients on allopurinol who develop a rash or other evidence of hypersensitivity, the drug should be stopped immediately. Severe cutaneous reactions can occur and mortality can approach 25%. This underscores the importance of prompt recognition and cessation of the drug. Febuxostat is an alternative xanthine oxidase inhibitor, but it should not be introduced until the acute reaction has resolved.<br><br><em>Slide 60 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_60_labelled.jpg"
    },
    // Q25 — correct: D  (slide 61)
    {
        question: "A rheumatologist is considering uricosuric therapy for a patient with gout.\n\nIn which patient group should uricosuric agents be avoided?",
        options: {
            A: "Elderly patients with mild renal impairment on low-dose diuretics",
            B: "Patients with hypertension who are taking ACE inhibitors",
            C: "Patients with a history of a single gout attack without tophi",
            D: "Patients with urolithiasis and those who are overproducers of urate",
            E: "Patients who have previously failed allopurinol due to gastrointestinal intolerance"
        },
        correctAnswer: "D",
        explanation: "Uricosuric drugs promote renal clearance of uric acid by inhibiting renal tubular reabsorption, predominantly at a post-secretory site. Examples include probenecid, sulfinpyrazone, and benzbromarone (in Europe). Uricosuric agents should be avoided in patients with urolithiasis \u2014 due to the risk of uric acid nephropathy \u2014 and are less effective in patients who are overproducers of urate, as the increased filtered load worsens stone risk.<br><br><em>Slide 61 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_61_labelled.jpg"
    },
    // Q26 — correct: D  (slide 64)
    {
        question: "A nephrologist is reviewing the renal complications of abnormal uric acid metabolism.\n\nWhich of the following lists the three types of renal disease induced by abnormal uric acid metabolism?",
        options: {
            A: "Uric acid nephrolithiasis, renal amyloidosis, and mesangioproliferative nephritis",
            B: "Membranous nephropathy, IgA nephropathy, and focal segmental glomerulosclerosis",
            C: "Renal papillary necrosis, obstructive uropathy, and hyperuricaemic tubular necrosis",
            D: "Uric acid nephrolithiasis, chronic urate nephropathy, and acute uric acid nephropathy",
            E: "Acute tubular necrosis, interstitial nephritis, and uric acid nephrolithiasis"
        },
        correctAnswer: "D",
        explanation: "There are three types of renal disease induced by abnormal uric acid metabolism: uric acid nephrolithiasis; chronic urate nephropathy; and acute uric acid nephropathy (e.g. tumour lysis syndrome). Patients with gout are at increased risk of uric acid stones, which are not radio-opaque unless mixed with calcium. Renal impairment in chronic gout usually reflects comorbid conditions such as hypertension, diabetes, and atherosclerosis rather than direct urate toxicity.<br><br><em>Slide 64 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_64_labelled.jpg"
    },
    // Q27 — correct: A  (slide 68)
    {
        question: "A rheumatology trainee asks about the terminology surrounding calcium pyrophosphate crystal deposition disease.\n\nWhich of the following traditional names accurately describes acute attacks of CPPD-induced synovitis that resemble acute gout?",
        options: {
            A: "Pseudogout",
            B: "Chondrocalcinosis",
            C: "Pyrophosphate arthropathy",
            D: "Hydroxyapatite deposition disease",
            E: "Milwaukee shoulder syndrome"
        },
        correctAnswer: "A",
        explanation: "Precipitation of calcium pyrophosphate dihydrate (CPPD) crystals in connective tissues may be asymptomatic or associated with several clinical syndromes. The traditional names include pseudogout, chondrocalcinosis, and pyrophosphate arthropathy. Pseudogout accurately describes acute attacks of CPPD-induced synovitis that clinically resemble acute urate gout. Chondrocalcinosis refers specifically to radiographic calcification in hyaline and/or fibrocartilage.<br><br><em>Slide 68 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_68_labelled.jpg"
    },
    // Q28 — correct: D  (slide 70)
    {
        question: "A geriatrician is reviewing the prevalence of radiographic calcium pyrophosphate deposition in elderly patients.\n\nApproximately what proportion of patients over 84 years of age show radiographic evidence of chondrocalcinosis?",
        options: {
            A: "Almost 80 percent",
            B: "Approximately 15 percent",
            C: "Approximately 36 percent",
            D: "Almost 50 percent",
            E: "Fewer than 5 percent"
        },
        correctAnswer: "D",
        explanation: "The prevalence of radiographic calcium pyrophosphate deposition increases markedly with age. Among 100 consecutive patients admitted to an acute geriatric unit: 65 to 74 years \u2014 15%; 75 to 84 years \u2014 36%; over 84 years \u2014 almost 50%. This progressive increase with age reflects the age-dependent accumulation of CPPD crystals in cartilage, and chondrocalcinosis is an important incidental finding in elderly patients.<br><br><em>Slide 70 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_70_labelled.jpg"
    },
    // Q29 — correct: A  (slide 72)
    {
        question: "A rheumatologist is comparing the joint distribution of CPPD disease and urate gout.\n\nWhich of the following correctly pairs the most commonly affected joint in acute CPP crystal arthritis with that in acute urate gout?",
        options: {
            A: "Knee (CPP crystal arthritis) versus first metatarsophalangeal joint (urate gout)",
            B: "First metatarsophalangeal joint (CPP crystal arthritis) versus knee (urate gout)",
            C: "Wrist (CPP crystal arthritis) versus ankle (urate gout)",
            D: "Hip (CPP crystal arthritis) versus first MTP joint (urate gout)",
            E: "Knee (CPP crystal arthritis) versus wrist (urate gout)"
        },
        correctAnswer: "A",
        explanation: "The knee is affected in over 50% of all acute attacks of CPP crystal arthritis, making it the most commonly affected joint in CPPD disease. In contrast, the first metatarsophalangeal (MTP) joint is the most frequently affected in acute urate gout \u2014 the classic podagra presentation. Trauma, surgery, or severe medical illness often provoke acute attacks of CPP crystal arthritis.<br><br><em>Slide 72 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_72_labelled.jpg"
    },
    // Q30 — correct: E  (slide 73)
    {
        question: "A laboratory scientist is examining synovial fluid from a patient with suspected CPPD disease under polarised light microscopy.\n\nWhich of the following correctly describes the appearance of CPP crystals compared with monosodium urate crystals?",
        options: {
            A: "CPP crystals are radio-opaque on plain radiography whereas MSU crystals are not",
            B: "CPP crystals are larger, strongly negatively birefringent, and needle-shaped like MSU crystals",
            C: "CPP crystals are identical in appearance to MSU crystals and cannot be distinguished microscopically",
            D: "CPP crystals are always rhomboidal and strongly positively birefringent",
            E: "CPP crystals are smaller, weakly positively birefringent, and more polymorphic than MSU crystals"
        },
        correctAnswer: "E",
        explanation: "The most salient finding in CPPD disease on synovial fluid analysis is positively birefringent CPP crystals under compensated polarised light microscopy. CPP crystals are more difficult to detect than MSU crystals because they are smaller (0.5 to 10 microns), weakly positively birefringent or not birefringent at all, and more polymorphic \u2014 with rod-shaped and cuboid crystals in addition to the usual rhomboidal form. MSU crystals are negatively birefringent and needle-shaped.<br><br><em>Slide 73 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_73_labelled.jpg"
    },
    // Q31 — correct: E  (slide 77)
    {
        question: "A rheumatologist diagnoses CPPD disease in a 55-year-old woman and suspects an underlying metabolic cause.\n\nWhich of the following serum investigations is recommended as a screening study for disorders associated with CPPD?",
        options: {
            A: "Glucose, HbA1c, lipid profile, urate, and insulin levels",
            B: "Uric acid, ESR, CRP, full blood count, and rheumatoid factor",
            C: "HLA-B27, ANA, anti-dsDNA, ANCA, and complement levels",
            D: "Thyroid function, cortisol, PTHrP, vitamin D, and ACTH",
            E: "Calcium, phosphorus, magnesium, alkaline phosphatase, and ferritin"
        },
        correctAnswer: "E",
        explanation: "CPPD disease is associated with disorders including haemochromatosis, hyperparathyroidism, hypomagnesaemia, hypophosphatasia, and familial hypocalciuric hypercalcaemia. Screening serum studies recommended for patients diagnosed with CPPD include calcium, phosphorus, magnesium, alkaline phosphatase, and ferritin. These targeted tests reflect the specific metabolic disorders associated with abnormal pyrophosphate metabolism.<br><br><em>Slide 77 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_77_labelled.jpg"
    },
    // Q32 — correct: C  (slide 78)
    {
        question: "A researcher is comparing the pathophysiological mechanisms of gout and CPPD disease.\n\nWhich inflammasome is activated by both MSU crystals in gout and CPP crystals in CPPD disease?",
        options: {
            A: "NLRC4 inflammasome",
            B: "AIM2 inflammasome",
            C: "NLRP3 inflammasome",
            D: "Pyrin inflammasome",
            E: "NLRP1 inflammasome"
        },
        correctAnswer: "C",
        explanation: "There are striking similarities in the pathophysiological mechanisms of gout and CPPD disease. Both crystal types share the capacity to induce NLRP3 (NALP3)-dependent inflammasome assembly and activation in synovial mononuclear phagocytes and neutrophils. Activation of the NLRP3 inflammasome activates latent caspase-1, resulting in IL-1 precursor processing and release of IL-1 beta. CPP crystals also induce neutrophil extracellular traps (NETs) that contribute to the inflammation in acute CPP crystal arthritis.<br><br><em>Slide 78 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_78_labelled.jpg"
    },
    // Q33 — correct: A  (slide 80)
    {
        question: "An 82-year-old woman presents with an acutely swollen knee. She has CKD stage 3 and peptic ulcer disease. Joint aspiration confirms CPP crystals.\n\nWhich treatment option is specifically noted as potentially contraindicated in older adults with acute CPP crystal arthritis?",
        options: {
            A: "NSAIDs",
            B: "Colchicine",
            C: "Intraarticular glucocorticoid injection",
            D: "Oral glucocorticoids",
            E: "IL-1 inhibitors"
        },
        correctAnswer: "A",
        explanation: "The treatment options for acute CPP crystal arthritis include joint aspiration with intraarticular glucocorticoid injection, NSAIDs, colchicine, and glucocorticoids. However, NSAIDs may be contraindicated in older adults \u2014 the population especially susceptible to acute attacks of pseudogout \u2014 due to risks of renal impairment and gastrointestinal complications. Colchicine is particularly useful if a low-dose regimen is initiated within hours of attack onset.<br><br><em>Slide 80 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_80_labelled.jpg"
    },
    // Q34 — correct: B  (slide 82)
    {
        question: "A rheumatologist wishes to prescribe prophylaxis against recurrent CPP crystal arthritis attacks.\n\nWhich drug and dose is recommended for prophylaxis of acute CPP crystal arthritis?",
        options: {
            A: "Allopurinol 300 mg once daily",
            B: "Colchicine 500 mcg twice daily",
            C: "Naproxen 500 mg twice daily",
            D: "Prednisolone 5 mg once daily",
            E: "Febuxostat 80 mg once daily"
        },
        correctAnswer: "B",
        explanation: "Prophylaxis for acute CPP crystal arthritis can be achieved with colchicine 500 mcg twice daily. This is the same regimen used for prophylaxis of recurrent acute gout attacks. Allopurinol and febuxostat are xanthine oxidase inhibitors used to lower urate in gout, not in CPPD disease. There is currently no equivalent urate-lowering strategy for CPPD, as no drug reduces pyrophosphate levels in clinical practice.<br><br><em>Slide 82 \u2014 Crystallopathies, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/crystallopathies/slide_82_labelled.jpg"
    },
],
"miscellaneous": [
    // Q1 — correct: E  (slide 4)
    {
        question: "A rheumatology consultant is describing the broad impact of chronic disease on a patient's life to medical students.\n\nWhich of the following is listed as a consequence of chronic disease beyond physical symptoms?",
        options: {
            A: "Increased stamina due to compensatory lifestyle adaptation",
            B: "Permanent cure achievable through early pharmacological intervention",
            C: "Improvement in resilience and exercise tolerance over time",
            D: "Reduction in anxiety as patients adjust to their diagnosis",
            E: "Altered family and social dynamics, financial difficulties, and dependency"
        },
        correctAnswer: "E",
        explanation: "Chronic disease produces a broad range of consequences beyond physical symptoms, including pain, fatigue, reduced resilience, reduced exercise tolerance, deconditioning, and reduced stamina. It also alters the dynamics of family, spousal, friendship, and work relationships, and leads to dependency, frustration, anxieties, and financial difficulties. All of these require adjustment in order to cope.<br><br><em>Slide 4 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_04_labelled.jpg"
    },
    // Q2 — correct: B  (slide 10)
    {
        question: "A rheumatologist is explaining to students why two patients with identical diagnoses can have vastly different functional outcomes.\n\nAccording to the lecture, what is the key determinant of how a patient copes with chronic disease?",
        options: {
            A: "The specific pharmacological treatment received in the first year of diagnosis",
            B: "Early personality traits shaped by upbringing, which persist throughout life and directly affect coping with adversity",
            C: "The severity of objective disease markers such as inflammatory indices",
            D: "The patient's age at diagnosis, with younger patients consistently coping better",
            E: "Access to specialist physiotherapy within six months of symptom onset"
        },
        correctAnswer: "B",
        explanation: "Abilities to cope with difficulty may be very different between patients. Early personality traits \u2014 shaped by experiences such as encouragement versus criticism, reward versus disappointment, stability versus instability \u2014 persist throughout life and have a direct impact on how a patient will cope with adversity such as disease. These pre-existing coping frameworks explain why patients with identical diagnoses can have very different functional outcomes.<br><br><em>Slide 10 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_10_labelled.jpg"
    },
    // Q3 — correct: A  (slide 12)
    {
        question: "A medical student asks about the spectrum of patient coping strategies in rheumatology.\n\nWhich of the following best describes the consequence of poor coping strategies in patients with chronic pain?",
        options: {
            A: "Symptom magnification",
            B: "Accelerated disease remission through increased help-seeking behaviour",
            C: "Enhanced engagement with graded exercise programmes",
            D: "Reduced healthcare utilisation due to patient self-reliance",
            E: "Improved sleep quality as a compensatory response to fatigue"
        },
        correctAnswer: "A",
        explanation: "Patients with good coping strategies are resilient \u2014 they bounce. Patients who cope poorly are easily overwhelmed \u2014 they splat. Good coping strategies help reduce symptoms, allow patients to carry on, work around problems, and involve support from others. Poor coping, by contrast, is associated with symptom magnification, which perpetuates suffering and reduces functioning.<br><br><em>Slide 12 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_12_labelled.jpg"
    },
    // Q4 — correct: D  (slide 13)
    {
        question: "A lecturer discusses how patients who cope poorly with chronic symptoms have historically been given a series of different labels.\n\nWhich of the following labels is listed as a historical term applied to this group of patients?",
        options: {
            A: "Reactive arthritis",
            B: "Spondyloarthropathy",
            C: "Polymyalgia rheumatica",
            D: "Neurasthenia",
            E: "Ankylosing spondylitis"
        },
        correctAnswer: "D",
        explanation: "Historically, patients that cope poorly have been given different labels across different eras, including hysteria, lack of moral fibre, asthenia, neurasthenia, fibrositis, Royal Free disease, chronic fatigue syndrome, seronegative lupus, chronic Lyme, medically unexplained symptoms, chronic widespread pain, and regional pain syndromes \u2014 as well as the more recent fibromyalgia, ME/CFS, and Ehlers-Danlos type 3. These represent the same underlying phenomenon described in different terminology.<br><br><em>Slide 13 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_13_labelled.jpg"
    },
    // Q5 — correct: B  (slide 14)
    {
        question: "A student asks why large numbers of soldiers have been diagnosed with medically unexplained conditions throughout military history.\n\nWhich of the following best explains these diagnoses according to the lecture?",
        options: {
            A: "They result from exposure to specific toxic chemicals unique to each conflict",
            B: "They are somatic manifestations of psychological distress caused by stress",
            C: "They are caused by infections endemic to the theatres of war",
            D: "They represent malingering in soldiers seeking discharge from military service",
            E: "They are due to nutritional deficiencies from inadequate field rations"
        },
        correctAnswer: "B",
        explanation: "In the military, large numbers of soldiers have been diagnosed with mystery conditions recognised to be stress-related \u2014 that is, somatic manifestations of psychological distress. Examples include soldiers' heart, shellshock, Gulf War syndrome, and post-traumatic stress disorder. This illustrates that with enough stress, anyone can break down, and these conditions are not unique to a particular conflict or exposure.<br><br><em>Slide 14 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_14_labelled.jpg"
    },
    // Q6 — correct: C  (slide 15)
    {
        question: "A rheumatologist explains why patients with psychosocial distress can present to almost any medical specialty.\n\nWhich of the following best describes the body's symptom repertoire in the context of psychosocial distress?",
        options: {
            A: "It consists exclusively of musculoskeletal symptoms, explaining why rheumatology sees the majority of cases",
            B: "It is specific to one organ system, allowing straightforward identification of the underlying specialty",
            C: "It is limited, comprising pain, fatigue, anxiety, sleep disturbance, and mood symptoms that manifest across many specialties",
            D: "It is unlimited and unique to each patient, making pattern recognition impossible",
            E: "It is confined to neurological symptoms, reflecting the central nervous system origin of distress"
        },
        correctAnswer: "C",
        explanation: "The body has a limited symptom repertoire, comprising pain, anxiety, fatigue, upset, disturbing memories or flashbacks, abdominal pain, lack of pleasure, disturbed sleep, irritability, depression, and anger. Patients with this repertoire can appear in almost any department \u2014 presenting with headache, chronic back pain, chest pain, abdominal pain, irritable bowel syndrome, chronic pelvic pain, depression, anxiety, joint pain, or functional neurological syndromes. The same limited repertoire manifests across diverse medical contexts.<br><br><em>Slide 15 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_15_labelled.jpg"
    },
    // Q7 — correct: D  (slide 17)
    {
        question: "A rheumatology consultant describes a fundamental concept relevant to patients with medically unexplained symptoms.\n\nWhich of the following statements best captures this concept?",
        options: {
            A: "Investigations should be repeated until a disease is identified to account for symptoms",
            B: "Absence of objective findings confirms the patient is not genuinely suffering",
            C: "Symptoms without a diagnosis always resolve spontaneously within six months",
            D: "You do not need disease to feel ill",
            E: "Patients whose investigations are normal have no medical needs requiring attention"
        },
        correctAnswer: "D",
        explanation: "After investigations exclude disease, the doctor can conclude there is no disease present to account for the patient's symptoms. This touches on a fundamental truth: you do not need disease to feel ill. Patients with medically unexplained symptoms are genuinely distressed and suffering, even in the absence of identifiable pathology. Recognising this is essential for delivering compassionate and appropriate care.<br><br><em>Slide 17 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_17_labelled.jpg"
    },
    // Q8 — correct: E  (slide 24)
    {
        question: "A rheumatologist reflects on clinical experience with disability across different rheumatological conditions.\n\nAccording to the lecture, what is described as the strongest correlate of disability across diseases?",
        options: {
            A: "Number of joints affected at presentation",
            B: "Severity of objective inflammatory markers",
            C: "Degree of radiographic joint damage",
            D: "Duration of symptoms before diagnosis",
            E: "Attitude"
        },
        correctAnswer: "E",
        explanation: "There are few diseases where objective factors correlate well with disability. According to the lecturer's clinical experience, the strongest correlate of disability is attitude. This reflects the central importance of psychological factors and coping strategies in determining functional outcomes, independent of the objective severity of the underlying condition.<br><br><em>Slide 24 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_24_labelled.jpg"
    },
    // Q9 — correct: B  (slide 30)
    {
        question: "A consultant is preparing students for the challenge of communicating normal investigation results to a patient who has been symptomatic for two years.\n\nWhich of the following is listed as a potential consequence of telling a patient there is no evidence of disease?",
        options: {
            A: "It reliably produces immediate relief as patients are grateful for reassurance",
            B: "It can undermine and invalidate the patient's role and bring their lifestyle and beliefs into question",
            C: "It eliminates the risk of complaint as patients are satisfied to have a clear answer",
            D: "It allows patients to immediately re-engage with employment without further support",
            E: "It resolves anxiety universally by removing the fear of serious underlying disease"
        },
        correctAnswer: "B",
        explanation: "Telling patients there is no evidence of disease can relieve considerable anxiety and lift heavy burdens. However, it can also make them appear fraudulent in front of family, spouses, and employers. It can undermine and invalidate their role over the previous months or years, bringing into question their lifestyle values and beliefs. This can cause confusion and misinterpretation, and it always creates a reaction \u2014 sometimes including complaints.<br><br><em>Slide 30 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_30_labelled.jpg"
    },
    // Q10 — correct: C  (slide 34)
    {
        question: "Dr Byrne offers his own working description of fibromyalgia to medical students.\n\nWhich of the following best captures his characterisation of fibromyalgia?",
        options: {
            A: "A degenerative condition of fibrous tissue leading to progressive tendon calcification",
            B: "A well-defined inflammatory joint disease characterised by symmetric synovitis",
            C: "Pain as the manifestation of psychosocial distress, typically diffuse from head to toe",
            D: "An autoimmune disorder mediated by anti-citrullinated protein antibodies",
            E: "A channelopathy affecting pain-sensing neurones in the dorsal root ganglion"
        },
        correctAnswer: "C",
        explanation: "Fibromyalgia is variably defined, but in essence it represents pain as the manifestation of psychosocial distress. Characteristically the pain is diffuse \u2014 from head to toe \u2014 and patients often have difficulty knowing where to start when describing their symptoms. Byrne's rule of rheumatology states: the more diffuse the symptoms, the less likely they are to be organic.<br><br><em>Slide 34 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_34_labelled.jpg"
    },
    // Q11 — correct: E  (slide 36)
    {
        question: "A student asks for the formal diagnostic criteria for fibromyalgia.\n\nWhich combination of features is required by the definition of fibromyalgia?",
        options: {
            A: "Chronic fatigue lasting more than 6 months with post-exertional malaise and lymphadenopathy",
            B: "Widespread pain lasting more than 6 weeks with elevated CRP and a positive ANA",
            C: "Pain in at least 11 of 18 tender points with normal inflammatory markers and no synovitis",
            D: "Diffuse pain with hyperuricaemia and radiographic erosions at peripheral joints",
            E: "Persistent chronic widespread pain (greater than 3 months) with troublesome fatigue, waking unrefreshed, cognitive symptoms, headache, lower abdominal pain, and depression"
        },
        correctAnswer: "E",
        explanation: "Fibromyalgia is a disorder characterised by persistent (more than 3 months) chronic widespread pain accompanied by troublesome fatigue, waking unrefreshed, cognitive symptoms, headache, lower abdominal pain, and depression. This constellation distinguishes fibromyalgia from other pain conditions. Inflammatory markers and autoantibodies are not part of the definition and are typically normal.<br><br><em>Slide 36 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_36_labelled.jpg"
    },
    // Q12 — correct: D  (slide 40)
    {
        question: "A rheumatologist discusses the practical value of applying the fibromyalgia label in clinical practice.\n\nWhich of the following best describes how the fibromyalgia label functions in clinical practice according to the lecture?",
        options: {
            A: "It is a diagnosis of exclusion that mandates referral to psychiatry",
            B: "It triggers an intensive investigation pathway to exclude rare systemic diseases",
            C: "It provides a basis for long-term opioid prescribing to manage refractory pain",
            D: "It serves as a code to avoid over-investigation, discourage surgery, and guide towards a biopsychosocial rehabilitation model",
            E: "It prompts surgical referral for decompression of sensitised pain pathways"
        },
        correctAnswer: "D",
        explanation: "The fibromyalgia label is described as a useful label to give patients. It has become code for: do not over-investigate; treat the multiplicity of symptoms with a degree of scepticism; do not operate \u2014 this cannot be fixed with surgery. The appropriate approach is to employ a biopsychosocial model of rehabilitation. Long-term opioids should be specifically avoided.<br><br><em>Slide 40 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_40_labelled.jpg"
    },
    // Q13 — correct: C  (slide 41)
    {
        question: "A rheumatologist is reviewing the differential diagnosis of a patient presenting with widespread pain and fatigue.\n\nWhich of the following is listed in the differential diagnosis of fibromyalgia?",
        options: {
            A: "Gout",
            B: "Ankylosing spondylitis",
            C: "Polymyalgia rheumatica",
            D: "Rheumatoid arthritis",
            E: "Reactive arthritis"
        },
        correctAnswer: "C",
        explanation: "The differential diagnosis of fibromyalgia includes polymyalgia rheumatica, hypothyroidism, primary muscle disease, malingering, hypochondriasis, anxiety syndrome, depression, drug abuse, SLE, Lyme disease, compensationitis, and osteomalacia. These must be actively excluded before applying a fibromyalgia diagnosis, as several (particularly polymyalgia rheumatica and hypothyroidism) are treatable organic conditions.<br><br><em>Slide 41 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_41_labelled.jpg"
    },
    // Q14 — correct: A  (slide 42)
    {
        question: "A pain specialist uses the concept of 'yellow flags' when assessing a patient with chronic widespread pain.\n\nWhich of the following is listed as a yellow flag associated with poor functioning in fibromyalgia and chronic pain?",
        options: {
            A: "Litigation stress and disability stress",
            B: "High aerobic fitness and low BMI",
            C: "Recent commencement of graded exercise therapy",
            D: "Family history of inflammatory arthritis",
            E: "Positive anti-CCP2 antibodies"
        },
        correctAnswer: "A",
        explanation: "Yellow flags in chronic pain include victimisation, trauma, psychological distress, psychiatric disorders, litigation stress, disability stress, medication side effects, iatrogenic factors, poor job satisfaction, and poor life satisfaction \u2014 all associated with poor functioning. Other pain syndromes are also listed. These factors can be both initiating and perpetuating, and addressing them is central to rehabilitation.<br><br><em>Slide 42 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_42_labelled.jpg"
    },
    // Q15 — correct: C  (slide 43)
    {
        question: "A rheumatologist is explaining to a patient why their pain is real despite normal investigations.\n\nWhich of the following best describes the pathophysiological explanation offered to patients with fibromyalgia?",
        options: {
            A: "Pain results from subclinical synovitis that is too mild to be detected on standard imaging",
            B: "Pain is produced by microscopic crystal deposition in muscle fibres causing direct tissue damage",
            C: "Pain messages are received in the brain with the volume control set too loud due to amplification in pain pathways",
            D: "Pain is generated by autoantibodies cross-reacting with pain receptors in peripheral nerves",
            E: "Pain arises from demyelination of sensory neurones in the dorsal columns of the spinal cord"
        },
        correctAnswer: "C",
        explanation: "The explanation offered to patients is that pain is not in their head \u2014 it is in their pathways. Pain messages are received in the brain with the volume control set far too loud because of amplification in the pain pathways. This amplification sends signals to the emotional centres ('ouch that hurts') and cognitive centres ('what was it?'). The constant signals are unpleasant \u2014 like noise \u2014 causing fatigue, sleep disturbance, memory problems, and mood disturbance, because the same neurotransmitters are involved.<br><br><em>Slide 43 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_43_labelled.jpg"
    },
    // Q16 — correct: A  (slide 47)
    {
        question: "A GP is managing a patient with fibromyalgia and asks about the evidence base for treatment.\n\nWhich of the following statements about fibromyalgia treatment is correct according to the lecture?",
        options: {
            A: "Non-pharmacological treatments (education, CBT, graded exercise) have grade 1A evidence and are more important than pharmacological treatments",
            B: "Long-term opioids are the mainstay of treatment for refractory fibromyalgia pain",
            C: "Pregabalin alone is sufficient treatment without the need for any non-pharmacological intervention",
            D: "Surgical decompression of spinal pain pathways provides the most durable benefit",
            E: "Corticosteroids are first-line treatment due to the underlying inflammatory mechanism"
        },
        correctAnswer: "A",
        explanation: "All fibromyalgia treatments with grade 1A evidence are listed, including non-pharmacological approaches (education, CBT, graded exercise) and pharmacological options (duloxetine/SNRIs, pregabalin/gabapentinoids, amitriptyline). Crucially, there is no role for long-term opioids \u2014 these should be actively avoided. The role of non-pharmacological treatment is described as more important than pharmacological treatment. If a patient is not improving, the non-pharmacological approach should be intensified.<br><br><em>Slide 47 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_47_labelled.jpg"
    },
    // Q17 — correct: D  (slide 59)
    {
        question: "A rheumatologist reflects on the dual consequences of giving a patient a fibromyalgia diagnosis.\n\nWhich of the following best describes a potential harmful consequence of applying the fibromyalgia label?",
        options: {
            A: "The label leads patients to demand anti-TNF therapy inappropriately",
            B: "The label reliably causes patients to seek unnecessary surgical intervention",
            C: "The label triggers excessive investigation by other specialties, increasing healthcare costs",
            D: "The label can validate illness behaviour and be used by some patients as a reason to disengage from work and society",
            E: "The label universally increases patient anxiety by implying a progressive neurological condition"
        },
        correctAnswer: "D",
        explanation: "Giving a label for a patient can both help and burden. On the positive side, it can relieve anxiety and validate the patient's suffering. However, diagnoses can also validate illness behaviour \u2014 some patients use the label as a reason to disengage from work and society. Newly diagnosed patients may read negative accounts of fibromyalgia online and develop an inaccurate and unhelpful impression of the condition, entrenching abnormal sickness behaviour.<br><br><em>Slide 59 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_59_labelled.jpg"
    },
    // Q18 — correct: B  (slide 61)
    {
        question: "A medical student is confused by the rheumatological terminology used in clinic letters.\n\nWhich of the following correctly defines spondylolisthesis?",
        options: {
            A: "Inflammation of the vertebral endplates leading to syndesmophyte formation",
            B: "Slippage of one vertebra on another, usually the upper vertebra slipping forward on the lower",
            C: "Degenerative change of the intervertebral disc with loss of disc height",
            D: "Lateral curvature of the spine due to asymmetric vertebral growth",
            E: "Fracture of the pars interarticularis without vertebral displacement"
        },
        correctAnswer: "B",
        explanation: "Spondylolisthesis means slippage of one vertebra on another. Usually the upper vertebra slips forward on the lower. Occasionally the upper vertebra can slip backwards \u2014 this type is called retrolisthesis. Other important rheumatological terms include: arthralgia (joint pain \u2014 a symptom); arthritis (joint inflammation); spondylosis (spinal osteoarthritis); and spondyloarthritis (inflammation of the spine).<br><br><em>Slide 61 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_61_labelled.jpg"
    },
    // Q19 — correct: B  (slide 61)
    {
        question: "A student encounters the term 'podagra' in a clinical letter about a patient with gout.\n\nWhich of the following correctly defines podagra?",
        options: {
            A: "Pain at the heel due to Achilles tendon enthesitis",
            B: "Pain at the first metatarsophalangeal joint",
            C: "Inflammation of the great toe nail bed",
            D: "Swelling of the entire foot due to dactylitis",
            E: "Urate crystal deposition in the Achilles tendon"
        },
        correctAnswer: "B",
        explanation: "Podagra is defined as pain at the first metatarsophalangeal (MTP) joint. Other key rheumatological terms from the lecture include: lumbago (back pain); rheumatism (aches and pains without disease being present); arthralgia (joint pain as a symptom); synovitis (inflammation of the synovium); and synovial hypertrophy (the response to previous chronic inflammation).<br><br><em>Slide 61 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_61_labelled.jpg"
    },
    // Q20 — correct: A  (slide 62)
    {
        question: "A rheumatology lecturer summarises the relationship between society and individual coping with illness.\n\nWhich of the following best reflects the lecture's view on why some patients cope poorly with illness?",
        options: {
            A: "Illness reduces resilience and ability to cope, and some patients have never developed robust coping strategies",
            B: "Poor coping is exclusively due to secondary gain from welfare systems",
            C: "Poor coping is a fixed genetic trait uninfluenced by environment or upbringing",
            D: "Poor coping only occurs in patients with formally diagnosed psychiatric disorders",
            E: "Poor coping is reliably predicted by low socioeconomic status alone"
        },
        correctAnswer: "A",
        explanation: "Society always produces differences in how people adapt to living in it. Part of successful adaptation is being resilient enough to cope with bad times, including illness. Illness itself reduces resilience and ability to cope. Some patients are poor at coping \u2014 not necessarily because of secondary gain, but because societal messages about coping change over time and individual coping capacity is shaped by a lifetime of experiences.<br><br><em>Slide 62 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_62_labelled.jpg"
    },
    // Q21 — correct: A  (slide 63)
    {
        question: "A consultant summarises the place of fibromyalgia and CFS in rheumatological practice.\n\nWhich statement best describes the appropriate management approach once a diagnosis of fibromyalgia is established?",
        options: {
            A: "No further diagnostic testing is needed; instead a rehabilitative approach to improve functioning is indicated",
            B: "Regular repeat serological testing is required to detect conversion to systemic lupus erythematosus",
            C: "Escalating pharmacological therapy should be the primary focus, targeting the pain amplification pathway",
            D: "Patients should be referred for surgical opinion to address structural causes of pain amplification",
            E: "Psychological referral should be the first and only step, as rheumatologists have no further role"
        },
        correctAnswer: "A",
        explanation: "In rheumatology, symptom magnification and poor coping are found in fibromyalgia and CFS. Such patients are genuinely distressed and deserve a sympathetic approach. Once the diagnosis is made, they do not need further diagnostic testing. Instead, a rehabilitative role to improve functioning is appropriate \u2014 focusing on education, graded exercise, CBT, sleep hygiene, and addressing yellow flag psychosocial factors.<br><br><em>Slide 63 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_63_labelled.jpg"
    },
    // Q22 — correct: E  (slide 64)
    {
        question: "A rheumatologist reflects on the decision of whether to give a patient a diagnostic label.\n\nWhich of the following best describes the approach to labelling outlined in the lecture?",
        options: {
            A: "Labels should only be used once all possible organic diagnoses have been tested in a tertiary centre",
            B: "A label should always be given immediately to validate the patient's experience and avoid any delay",
            C: "A label should be withheld indefinitely to prevent entrenchment of illness behaviour in all patients",
            D: "The decision to label should be made by the patient's GP rather than the specialist",
            E: "Before delivering a label, the clinician should consider whether it will relieve suffering or burden the patient with further entrenchment of sickness behaviour"
        },
        correctAnswer: "E",
        explanation: "Labelling patients can validate their illness behaviour. For some patients a label relieves anxiety. For others, it entrenches abnormal sickness behaviour. The lecture advocates a considered approach: before delivering the label, the clinician should decide whether it will help relieve suffering or burden the patient. This individualised judgement is part of the skill of good communication in rheumatology.<br><br><em>Slide 64 \u2014 Miscellaneous, Dr Paul Byrne</em>",
        image: "lectureImages/rheumatology/miscellaneous/slide_64_labelled.jpg"
    },
]

},
            haematology: {
"Leukaemia": [
        {
        question: "A 5-year-old boy presents with fatigue, recurrent infections, and easy bruising. Examination reveals hepatosplenomegaly and generalized lymphadenopathy. Blood tests show anemia, thrombocytopenia, and circulating lymphoblasts.\n\nWhich of the following is the most likely diagnosis?",
        options: {
            A: "Acute myeloid leukemia",
            B: "Acute lymphoblastic leukemia",
            C: "Chronic myeloid leukemia",
            D: "Chronic lymphocytic leukemia",
            E: "Hairy cell leukemia"
        },
        correctAnswer: "B",
        explanation: "Acute lymphoblastic leukemia (ALL) is the most common childhood malignancy and typically presents between ages 2–5 years. Bone marrow failure leads to anemia, infections, and thrombocytopenia, while infiltration causes hepatosplenomegaly and lymphadenopathy. AML is less common in children and often presents with myeloid features rather than generalized lymphadenopathy."
    },
    {
        question: "A 68-year-old man is found to have a white blood cell count of 55 × 10⁹/L during routine testing. He feels well. Blood film shows numerous mature-appearing lymphocytes and smudge cells.\n\nWhich of the following is the most likely diagnosis?",
        options: {
            A: "Chronic lymphocytic leukemia",
            B: "Acute lymphoblastic leukemia",
            C: "Acute myeloid leukemia",
            D: "Chronic myeloid leukemia",
            E: "Multiple myeloma"
        },
        correctAnswer: "A",
        explanation: "CLL is the most common leukemia in adults and is often discovered incidentally. Smudge cells and mature lymphocytosis are classic findings. Many patients are asymptomatic at diagnosis and may initially require observation rather than treatment."
    },
    {
        question: "A 56-year-old woman presents with fatigue and gingival bleeding. Bone marrow biopsy demonstrates myeloblasts containing Auer rods.\n\nWhich of the following is the most likely diagnosis?",
        options: {
            A: "Chronic myeloid leukemia",
            B: "Acute lymphoblastic leukemia",
            C: "Acute myeloid leukemia",
            D: "Chronic lymphocytic leukemia",
            E: "Hairy cell leukemia"
        },
        correctAnswer: "C",
        explanation: "Auer rods are needle-shaped cytoplasmic inclusions composed of fused primary granules and are characteristic of AML. Gingival hypertrophy and bleeding are common manifestations. The presence of Auer rods strongly supports a myeloid rather than lymphoid malignancy."
    },
    {
        question: "A 45-year-old man presents with fatigue and early satiety. Examination reveals marked splenomegaly. Laboratory testing shows a markedly elevated white blood cell count with granulocytes at various stages of maturation. Cytogenetic analysis reveals t(9;22).\n\nWhich of the following proteins is produced by this translocation?",
        options: {
            A: "MYC",
            B: "BCL2",
            C: "JAK2",
            D: "BCR-ABL",
            E: "PML-RARA"
        },
        correctAnswer: "D",
        explanation: "The Philadelphia chromosome t(9;22) creates the BCR-ABL fusion gene. This produces a constitutively active tyrosine kinase that drives uncontrolled proliferation. It is the hallmark genetic abnormality of CML."
    },
    {
        question: "A child with acute lymphoblastic leukemia undergoes flow cytometry.\n\nWhich of the following markers is most commonly expressed by B-cell ALL?",
        options: {
            A: "CD3",
            B: "CD16",
            C: "CD10",
            D: "CD56",
            E: "CD138"
        },
        correctAnswer: "C",
        explanation: "CD10 (CALLA) is a classic marker of precursor B-cell ALL. Most childhood ALL cases arise from B-cell precursors. CD3 is a T-cell marker, while CD138 is associated with plasma cells."
    },
    {
        question: "A 70-year-old man with chronic lymphocytic leukemia develops fatigue and jaundice. Laboratory tests show elevated bilirubin, elevated LDH, and a positive direct Coombs test.\n\nWhich complication has most likely occurred?",
        options: {
            A: "Disseminated intravascular coagulation",
            B: "Autoimmune hemolytic anemia",
            C: "Tumor lysis syndrome",
            D: "Myelofibrosis",
            E: "Hemophagocytic syndrome"
        },
        correctAnswer: "B",
        explanation: "Autoimmune hemolytic anemia is a recognized complication of CLL. The positive direct Coombs test indicates antibody-mediated destruction of red blood cells. Patients often present with jaundice, anemia, and elevated markers of hemolysis."
    },
    {
        question: "A patient with AML is found to have the t(15;17) translocation.\n\nWhich of the following treatments specifically targets the molecular defect?",
        options: {
            A: "Rituximab",
            B: "Imatinib",
            C: "Hydroxyurea",
            D: "All-trans retinoic acid",
            E: "Methotrexate"
        },
        correctAnswer: "D",
        explanation: "t(15;17) produces the PML-RARA fusion protein, causing acute promyelocytic leukemia (APL). All-trans retinoic acid (ATRA) promotes differentiation of malignant promyelocytes. This therapy has dramatically improved survival in APL."
    },
    {
        question: "A patient with CML begins treatment with imatinib.\n\nWhat is the mechanism of action of this medication?",
        options: {
            A: "DNA alkylation",
            B: "Tyrosine kinase inhibition",
            C: "Topoisomerase inhibition",
            D: "Antifolate activity",
            E: "Microtubule disruption"
        },
        correctAnswer: "B",
        explanation: "Imatinib selectively inhibits the BCR-ABL tyrosine kinase. Blocking this signaling pathway suppresses proliferation of leukemic cells. It transformed CML from a fatal disease into a highly manageable condition."
    },
    {
        question: "A 4-year-old child develops a mediastinal mass and is diagnosed with T-cell ALL.\n\nWhich symptom is most likely to result directly from the mediastinal mass?",
        options: {
            A: "Hematuria",
            B: "Visual loss",
            C: "Superior vena cava obstruction",
            D: "Hemarthrosis",
            E: "Melena"
        },
        correctAnswer: "C",
        explanation: "T-cell ALL often originates in the thymus and may present with a mediastinal mass. Compression of the superior vena cava can cause facial swelling, dyspnea, and venous distension. This presentation is much less common in B-cell ALL."
    },
    {
        question: "A patient with leukemia develops hyperuricemia, hyperkalemia, hyperphosphatemia, and acute kidney injury shortly after chemotherapy.\n\nWhich condition is the most likely explanation?",
        options: {
            A: "Hemolytic anemia",
            B: "Leukostasis",
            C: "Tumor lysis syndrome",
            D: "Disseminated intravascular coagulation",
            E: "Drug-induced nephritis"
        },
        correctAnswer: "C",
        explanation: "Tumor lysis syndrome results from rapid destruction of malignant cells following treatment. Release of intracellular contents leads to hyperuricemia, hyperkalemia, and hyperphosphatemia. Acute kidney injury is a potentially life-threatening complication."
    },
    {
        question: "A 7-year-old boy is diagnosed with B-cell ALL. Cytogenetic analysis reveals t(12;21).\n\nWhich of the following is most strongly associated with this finding?",
        options: {
            A: "Poor response to chemotherapy",
            B: "Favorable prognosis",
            C: "Transformation to AML",
            D: "Increased risk of CNS hemorrhage",
            E: "Resistance to corticosteroids"
        },
        correctAnswer: "B",
        explanation: "t(12;21) creates the ETV6-RUNX1 fusion gene and is one of the most favorable cytogenetic abnormalities in childhood ALL. Patients generally respond well to chemotherapy and have excellent long-term survival rates. It is associated with lower relapse rates than many other ALL subtypes."
    },
    {
        question: "A patient presents with fatigue and recurrent infections. Blood film shows numerous mature lymphocytes and smudge cells.\n\nWhich cellular property is responsible for the formation of smudge cells?",
        options: {
            A: "Excessive platelet adhesion",
            B: "Increased membrane fragility",
            C: "Defective hemoglobin synthesis",
            D: "Increased neutrophil granulation",
            E: "Decreased erythrocyte deformability"
        },
        correctAnswer: "B",
        explanation: "Smudge cells result from the fragility of leukemic lymphocytes during slide preparation. These disrupted cells appear as smeared nuclear remnants on blood film. They are a classic feature of CLL."
    },
    {
        question: "A 62-year-old man with newly diagnosed AML develops severe bleeding and widespread bruising. Laboratory tests reveal prolonged PT, prolonged aPTT, low fibrinogen, and elevated D-dimer levels.\n\nWhich AML subtype is most commonly associated with this complication?",
        options: {
            A: "Acute megakaryoblastic leukemia",
            B: "Acute erythroid leukemia",
            C: "Acute promyelocytic leukemia",
            D: "Acute monocytic leukemia",
            E: "Acute myelomonocytic leukemia"
        },
        correctAnswer: "C",
        explanation: "Acute promyelocytic leukemia (APL) is strongly associated with disseminated intravascular coagulation (DIC). Malignant promyelocytes release procoagulant substances that activate the coagulation cascade. Early recognition and treatment with ATRA are critical."
    },
    {
        question: "A patient with CML undergoes bone marrow biopsy.\n\nWhich finding is most likely?",
        options: {
            A: "Hypocellular marrow with fat replacement",
            B: "Hypercellular marrow with granulocytic proliferation",
            C: "Predominantly plasma cells",
            D: "Extensive fibrosis with tear-drop cells only",
            E: "Lymphoid follicle formation"
        },
        correctAnswer: "B",
        explanation: "CML is characterized by marked hypercellularity due to proliferation of granulocytic precursors. The marrow contains cells at all stages of myeloid maturation. This contrasts with acute leukemias, which show predominance of blasts."
    },
    {
        question: "A 30-year-old woman is diagnosed with AML. Flow cytometry demonstrates expression of CD13 and CD33.\n\nThese markers are most characteristic of which lineage?",
        options: {
            A: "B lymphocyte",
            B: "T lymphocyte",
            C: "Plasma cell",
            D: "Myeloid cell",
            E: "Natural killer cell"
        },
        correctAnswer: "D",
        explanation: "CD13 and CD33 are classic myeloid markers and support a diagnosis of AML. Flow cytometry is frequently used to determine lineage in acute leukemias. Myeloid markers help distinguish AML from ALL."
    },
    {
        question: "A 55-year-old patient with CML develops worsening anemia and increasing numbers of blasts in the peripheral blood despite therapy.\n\nWhich phase of disease has most likely developed?",
        options: {
            A: "Chronic phase",
            B: "Accelerated phase",
            C: "Blast crisis",
            D: "Remission phase",
            E: "Aplastic phase"
        },
        correctAnswer: "C",
        explanation: "Blast crisis is defined by a marked increase in blasts and behaves similarly to an acute leukemia. Patients often develop worsening constitutional symptoms and bone marrow failure. Prognosis becomes significantly worse at this stage."
    },
    {
        question: "A child with ALL undergoes lumbar puncture as part of treatment planning despite having no neurological symptoms.\n\nWhat is the primary reason for this procedure?",
        options: {
            A: "Detect bone metastases",
            B: "Measure intracranial pressure",
            C: "Assess CNS involvement",
            D: "Diagnose meningitis",
            E: "Evaluate platelet function"
        },
        correctAnswer: "C",
        explanation: "ALL commonly involves the central nervous system, even when symptoms are absent. Lumbar puncture allows assessment for leukemic infiltration of the cerebrospinal fluid. CNS-directed therapy is an important component of treatment."
    },
    {
        question: "A patient with AML is found to have a mutation in FLT3.\n\nWhich statement regarding this mutation is most accurate?",
        options: {
            A: "It is associated with excellent prognosis",
            B: "It predicts resistance to ATRA therapy",
            C: "It is associated with more aggressive disease",
            D: "It is diagnostic of CML",
            E: "It prevents blast formation"
        },
        correctAnswer: "C",
        explanation: "FLT3 mutations are associated with increased proliferation of leukemic cells and poorer outcomes. They are considered adverse prognostic markers in AML. Targeted FLT3 inhibitors have been developed to improve outcomes."
    },
    {
        question: "A 67-year-old man with longstanding CLL develops rapidly enlarging lymph nodes, fever, night sweats, and weight loss.\n\nWhich complication should be suspected?",
        options: {
            A: "Polycythemia vera",
            B: "Richter transformation",
            C: "Essential thrombocythemia",
            D: "Hairy cell leukemia",
            E: "Myelodysplastic syndrome"
        },
        correctAnswer: "B",
        explanation: "Richter transformation refers to the development of an aggressive lymphoma, most commonly diffuse large B-cell lymphoma, in patients with CLL. Patients present with rapidly enlarging lymph nodes and constitutional symptoms. Prognosis is substantially worse than for typical CLL."
    },
    {
        question: "A 5-year-old child is diagnosed with ALL. Cytogenetic analysis demonstrates hyperdiploidy.\n\nWhich of the following best describes the prognostic significance?",
        options: {
            A: "Very poor prognosis",
            B: "High risk of DIC",
            C: "Poor response to chemotherapy",
            D: "Favorable prognosis",
            E: "Indicates transformation to AML"
        },
        correctAnswer: "D",
        explanation: "Hyperdiploidy is one of the most favorable cytogenetic abnormalities in childhood ALL. These patients tend to respond well to therapy and achieve high cure rates. It is therefore considered a good prognostic feature."
    },
    {
        question: "A 14-year-old boy presents with fever, fatigue, and a mediastinal mass. Bone marrow biopsy confirms T-cell ALL.\n\nWhich immunophenotypic marker is most likely to be positive?",
        options: {
            A: "CD3",
            B: "CD20",
            C: "CD33",
            D: "CD138",
            E: "MPO"
        },
        correctAnswer: "A",
        explanation: "CD3 is a pan-T-cell marker and is characteristic of T-cell ALL. These patients often present with a thymic mass causing mediastinal widening. CD20 is a B-cell marker, while CD33 and MPO are associated with myeloid lineage."
    },
    {
        question: "A 58-year-old man with CML is treated with imatinib. Six months later, his disease progresses despite adherence to therapy. Molecular testing demonstrates a mutation in the BCR-ABL kinase domain.\n\nWhat is the most likely mechanism of treatment failure?",
        options: {
            A: "Increased folate synthesis",
            B: "Secondary resistance due to kinase mutation",
            C: "Loss of CD20 expression",
            D: "Development of PML-RARA fusion protein",
            E: "Increased erythropoietin production"
        },
        correctAnswer: "B",
        explanation: "Mutations within the BCR-ABL kinase domain can prevent imatinib binding and cause resistance. This is a classic mechanism of secondary resistance in CML. Newer tyrosine kinase inhibitors may overcome some resistant mutations."
    },
    {
        question: "A patient with AML develops severe leukocytosis with a white blood cell count of 180 × 10⁹/L. He complains of headache, visual disturbances, and shortness of breath.\n\nWhich complication is most likely responsible?",
        options: {
            A: "Autoimmune hemolysis",
            B: "Tumor lysis syndrome",
            C: "Leukostasis",
            D: "DIC",
            E: "Hyperviscosity from paraproteins"
        },
        correctAnswer: "C",
        explanation: "Leukostasis occurs when extremely high blast counts impair microvascular blood flow. Neurological and respiratory symptoms are particularly common. It represents an oncologic emergency requiring rapid cytoreduction."
    },
    {
        question: "A patient with newly diagnosed AML is found to have a mutation in NPM1 without a FLT3 mutation.\n\nWhich of the following best describes the prognostic significance?",
        options: {
            A: "Favourable prognosis",
            B: "Extremely poor prognosis",
            C: "Diagnostic of blast crisis",
            D: "Indicates CNS involvement",
            E: "Predicts resistance to chemotherapy"
        },
        correctAnswer: "A",
        explanation: "NPM1-mutated AML without FLT3 mutations is generally associated with a favourable prognosis. Such patients often respond well to induction chemotherapy. Molecular classification has become increasingly important in AML risk stratification."
    },
    {
        question: "A 65-year-old man with CLL develops recurrent infections. Laboratory studies reveal markedly reduced immunoglobulin levels.\n\nWhich mechanism best explains this finding?",
        options: {
            A: "Splenic sequestration of antibodies",
            B: "Autoimmune destruction of plasma cells",
            C: "Hypogammaglobulinaemia due to dysfunctional B cells",
            D: "Reduced hepatic protein synthesis",
            E: "Increased renal immunoglobulin loss"
        },
        correctAnswer: "C",
        explanation: "Leukemic B cells in CLL are functionally ineffective and suppress normal antibody production. Hypogammaglobulinaemia contributes significantly to recurrent bacterial infections. Infection is a major cause of morbidity and mortality in CLL."
    },
    {
        question: "A bone marrow aspirate from a patient with acute leukemia demonstrates 30% blasts.\n\nWhich of the following best explains why this finding supports a diagnosis of acute leukemia?",
        options: {
            A: "Acute leukemias require >5% blasts",
            B: "Acute leukemias require >10% blasts",
            C: "Acute leukemias require >15% blasts",
            D: "Acute leukemias require >20% blasts",
            E: "Acute leukemias require >50% blasts"
        },
        correctAnswer: "D",
        explanation: "The WHO classification generally defines acute leukemia by the presence of ≥20% blasts in the bone marrow or peripheral blood. This threshold helps distinguish acute leukemias from chronic myeloid neoplasms. Certain genetic abnormalities can establish AML even if blast percentages are lower."
    },
    {
        question: "A 72-year-old man presents with splenomegaly and pancytopenia. Bone marrow aspiration results in a 'dry tap.' Peripheral blood smear demonstrates lymphocytes with cytoplasmic projections.\n\nWhich diagnosis is most likely?",
        options: {
            A: "CML",
            B: "AML",
            C: "Hairy cell leukemia",
            D: "ALL",
            E: "CLL"
        },
        correctAnswer: "C",
        explanation: "Hairy cell leukemia is a mature B-cell neoplasm characterized by cells with hair-like cytoplasmic projections. Bone marrow fibrosis frequently causes a dry tap during aspiration. Massive splenomegaly and pancytopenia are common findings."
    },
    {
        question: "A patient with hairy cell leukemia is treated with cladribine.\n\nWhat is the primary mechanism of action of this drug?",
        options: {
            A: "Tyrosine kinase inhibition",
            B: "Purine analogue causing DNA damage",
            C: "Anti-CD20 monoclonal antibody",
            D: "Topoisomerase inhibition",
            E: "Folate antagonism"
        },
        correctAnswer: "B",
        explanation: "Cladribine is a purine analogue that interferes with DNA synthesis and repair. It is highly effective in hairy cell leukemia and can induce prolonged remissions. Many patients require only a single treatment course."
    },
    {
        question: "A patient with ALL is found to carry the Philadelphia chromosome.\n\nCompared with Philadelphia-negative ALL, this finding is generally associated with:",
        options: {
            A: "Better prognosis",
            B: "Increased cure rates without treatment",
            C: "More aggressive disease biology",
            D: "Reduced relapse risk",
            E: "Lower requirement for chemotherapy"
        },
        correctAnswer: "C",
        explanation: "Philadelphia chromosome-positive ALL historically carried a poorer prognosis than other forms of ALL. The introduction of tyrosine kinase inhibitors has improved outcomes substantially. Nevertheless, it remains an important high-risk molecular subtype."
    },
    {
        question: "A patient with AML receives induction chemotherapy and subsequently develops fever while neutropenic.\n\nWhich organism class is most likely to cause life-threatening infection during this period?",
        options: {
            A: "Helminths",
            B: "Gram-negative bacteria",
            C: "Protozoa",
            D: "Mycobacteria",
            E: "Prions"
        },
        correctAnswer: "B",
        explanation: "Chemotherapy-induced neutropenia significantly increases susceptibility to bacterial infections, particularly Gram-negative organisms such as Pseudomonas. Neutropenic fever is treated as a medical emergency. Prompt broad-spectrum antibiotics are essential."
    },
    {
        question: "A 63-year-old man presents with fatigue, weight loss, and massive splenomegaly. His white blood cell count is 120 × 10⁹/L. Blood film demonstrates neutrophils, metamyelocytes, myelocytes, and occasional blasts. The leukocyte alkaline phosphatase (LAP) score is low.\n\nWhich diagnosis is most likely?",
        options: {
            A: "Leukemoid reaction",
            B: "Chronic myeloid leukemia",
            C: "Acute myeloid leukemia",
            D: "Chronic lymphocytic leukemia",
            E: "Primary myelofibrosis"
        },
        correctAnswer: "B",
        explanation: "A low LAP score is a classic feature of CML and helps distinguish it from a leukemoid reaction, which has a high LAP score. The presence of granulocytes at multiple stages of maturation is characteristic. Splenomegaly results from extramedullary hematopoiesis."
    },
    {
        question: "A 48-year-old woman is diagnosed with AML. Cytogenetic analysis reveals inv(16).\n\nWhich prognostic category is most appropriate?",
        options: {
            A: "Very poor prognosis",
            B: "Poor prognosis",
            C: "Intermediate prognosis",
            D: "Favourable prognosis",
            E: "Terminal disease"
        },
        correctAnswer: "D",
        explanation: "inv(16) is one of the favourable-risk cytogenetic abnormalities in AML. Patients generally respond well to induction chemotherapy. It is often grouped with t(8;21) and t(15;17) as good-risk lesions."
    },
    {
        question: "A patient with suspected AML undergoes cytochemical staining.\n\nWhich stain is most useful for demonstrating myeloid differentiation?",
        options: {
            A: "Periodic acid-Schiff (PAS)",
            B: "Congo red",
            C: "Myeloperoxidase (MPO)",
            D: "Sudan black negative stain",
            E: "Crystal violet"
        },
        correctAnswer: "C",
        explanation: "Myeloperoxidase is present in primary granules of myeloid cells and is typically positive in AML. It helps distinguish AML from ALL. Auer rods are also usually MPO-positive."
    },
    {
        question: "A 70-year-old man presents with lymphocytosis. Flow cytometry demonstrates CD5+, CD19+, and CD23+ cells.\n\nWhich diagnosis is most likely?",
        options: {
            A: "Hairy cell leukemia",
            B: "Acute lymphoblastic leukemia",
            C: "Mantle cell lymphoma",
            D: "Chronic lymphocytic leukemia",
            E: "Multiple myeloma"
        },
        correctAnswer: "D",
        explanation: "CLL characteristically expresses CD5 and CD23 despite being a B-cell malignancy. This unusual immunophenotype is highly testable. Mantle cell lymphoma is usually CD5 positive but CD23 negative."
    },
    {
        question: "A 60-year-old patient with CML is switched from imatinib to dasatinib after developing resistance.\n\nBoth drugs primarily target which abnormality?",
        options: {
            A: "JAK2 mutation",
            B: "BCL2 overexpression",
            C: "BCR-ABL tyrosine kinase",
            D: "PML-RARA fusion protein",
            E: "MYC amplification"
        },
        correctAnswer: "C",
        explanation: "Both imatinib and dasatinib inhibit the BCR-ABL fusion protein produced by the Philadelphia chromosome. Dasatinib has activity against some imatinib-resistant mutations. These drugs specifically target the molecular driver of CML."
    },
    {
        question: "A patient with AML develops severe bone pain, gingival hypertrophy, and skin infiltration by leukemic cells.\n\nWhich AML subtype is most strongly associated with these findings?",
        options: {
            A: "Acute monocytic leukemia",
            B: "Acute promyelocytic leukemia",
            C: "Acute erythroid leukemia",
            D: "Acute megakaryoblastic leukemia",
            E: "Acute basophilic leukemia"
        },
        correctAnswer: "A",
        explanation: "Monocytic AML frequently infiltrates extramedullary tissues, particularly the gums and skin. Gingival hypertrophy is a classic clue. These manifestations are much less common in other AML subtypes."
    },
    {
        question: "A 4-year-old child is diagnosed with ALL. Immunophenotyping demonstrates TdT positivity.\n\nWhat does TdT positivity indicate?",
        options: {
            A: "Mature B-cell origin",
            B: "Mature T-cell origin",
            C: "Immature lymphoid precursor origin",
            D: "Monocytic differentiation",
            E: "Granulocytic differentiation"
        },
        correctAnswer: "C",
        explanation: "Terminal deoxynucleotidyl transferase (TdT) is expressed in immature lymphoid precursors. It is commonly positive in ALL. Mature lymphoid neoplasms such as CLL are generally TdT negative."
    },
    {
        question: "A patient with CML develops increasing fatigue and a rising blast count of 25%.\n\nAccording to WHO criteria, this patient has entered:",
        options: {
            A: "Chronic phase",
            B: "Remission",
            C: "Accelerated phase",
            D: "Blast crisis",
            E: "Aplastic crisis"
        },
        correctAnswer: "D",
        explanation: "Blast crisis is defined by ≥20% blasts and resembles an acute leukemia clinically and biologically. It represents progression of CML and is associated with a poor prognosis. Rapid intervention is required."
    },
    {
        question: "A 55-year-old woman presents with pancytopenia. Bone marrow biopsy reveals numerous cells with 'fried-egg' appearing cytoplasm. TRAP staining is positive.\n\nWhich diagnosis is most likely?",
        options: {
            A: "CLL",
            B: "AML",
            C: "Hairy cell leukemia",
            D: "ALL",
            E: "CML"
        },
        correctAnswer: "C",
        explanation: "Hairy cell leukemia classically demonstrates TRAP positivity and characteristic cells with abundant pale cytoplasm. Bone marrow fibrosis often leads to a dry tap. Splenomegaly and pancytopenia are common."
    },
    {
        question: "A patient with AML receives induction chemotherapy. Bone marrow examination four weeks later demonstrates fewer than 5% blasts with recovery of normal hematopoiesis.\n\nWhich term best describes this response?",
        options: {
            A: "Relapse",
            B: "Blast crisis",
            C: "Transformation",
            D: "Complete remission",
            E: "Minimal residual disease"
        },
        correctAnswer: "D",
        explanation: "Complete remission in AML generally requires fewer than 5% marrow blasts and restoration of normal blood cell production. It does not necessarily mean cure, as residual leukemic cells may remain. Additional therapy is usually required to reduce relapse risk."
    },
    {
        question: "A 6-year-old boy presents with fever, bruising, and bone pain. Blood film shows lymphoblasts. Cytogenetics reveal t(9;22).\n\nWhich is the most appropriate next step in targeted therapy?",
        options: {
            A: "Rituximab",
            B: "Imatinib",
            C: "Hydroxyurea",
            D: "ATRA",
            E: "Interferon-alpha only"
        },
        correctAnswer: "B",
        explanation: "t(9;22) produces the BCR-ABL fusion protein, which encodes a constitutively active tyrosine kinase. Imatinib inhibits this abnormal kinase and is used in Philadelphia chromosome-positive ALL. This subtype has a poorer prognosis than standard ALL."
    },
    {
        question: "A 69-year-old man presents with fatigue and night sweats. Examination shows lymphadenopathy. Blood film shows lymphocytosis with smudge cells. Flow cytometry shows CD5+, CD19+, CD23+ cells.\n\nWhich of the following is the most appropriate initial management if the patient is asymptomatic?",
        options: {
            A: "Immediate chemotherapy",
            B: "Bone marrow transplant",
            C: "Watchful waiting",
            D: "Radiotherapy",
            E: "High-dose steroids"
        },
        correctAnswer: "C",
        explanation: "Early-stage CLL is often managed with observation only. Treatment is initiated only when symptoms develop or there is evidence of disease progression. Many patients remain stable for years without therapy."
    },
    {
        question: "A patient with AML is found to have PML-RARA fusion protein. He is started on all-trans retinoic acid (ATRA).\n\nWhat is the primary mechanism of action of ATRA in this condition?",
        options: {
            A: "Induces apoptosis via BCL2 inhibition",
            B: "Promotes differentiation of promyelocytes",
            C: "Inhibits tyrosine kinase activity",
            D: "Cross-links DNA",
            E: "Inhibits folate metabolism"
        },
        correctAnswer: "B",
        explanation: "ATRA promotes maturation of abnormal promyelocytes into mature granulocytes. This reverses the differentiation block caused by the PML-RARA fusion protein. It is life-saving in acute promyelocytic leukemia due to its association with DIC."
    },
    {
        question: "A 58-year-old man presents with splenomegaly and leukocytosis. Bone marrow shows hypercellularity with granulocytic proliferation. Cytogenetics reveal BCR-ABL positivity.\n\nWhich of the following best describes the pathophysiology of his disease?",
        options: {
            A: "Increased antibody production",
            B: "Constitutive tyrosine kinase signalling",
            C: "Decreased erythropoietin secretion",
            D: "Defective DNA mismatch repair",
            E: "Autoimmune destruction of neutrophils"
        },
        correctAnswer: "B",
        explanation: "The BCR-ABL fusion protein leads to continuous activation of tyrosine kinase signalling pathways. This drives uncontrolled myeloid proliferation. It is the hallmark of CML."
    },
    {
        question: "A 5-year-old child is diagnosed with ALL. The leukemic cells are TdT positive and express CD10.\n\nWhich additional finding is most likely?",
        options: {
            A: "Auer rods",
            B: "Philadelphia chromosome",
            C: "Hyperdiploidy",
            D: "TRAP positivity",
            E: "CD138 expression"
        },
        correctAnswer: "C",
        explanation: "Hyperdiploidy is a favourable cytogenetic abnormality in childhood ALL. CD10 positivity indicates B-cell lineage. Auer rods and TRAP positivity are seen in myeloid or hairy cell leukemias respectively."
    },
    {
        question: "A patient with AML develops gum swelling and bleeding. Peripheral blood shows monocytic blasts.\n\nWhich AML subtype is most likely?",
        options: {
            A: "M0",
            B: "M2",
            C: "M4/M5",
            D: "M6",
            E: "M7"
        },
        correctAnswer: "C",
        explanation: "AML M4 (myelomonocytic) and M5 (monocytic) are strongly associated with tissue infiltration, including gums and skin. Gingival hypertrophy is a classic clinical clue. These subtypes may present with extramedullary disease."
    },
    {
        question: "A patient undergoing chemotherapy for leukemia develops fever and is found to have neutropenia.\n\nWhich intervention is most appropriate immediately?",
        options: {
            A: "Oral antivirals",
            B: "Broad-spectrum IV antibiotics",
            C: "Delay treatment until cultures return",
            D: "Oral antifungals only",
            E: "Observation"
        },
        correctAnswer: "B",
        explanation: "Febrile neutropenia is a medical emergency requiring immediate empiric broad-spectrum IV antibiotics. Gram-negative organisms such as Pseudomonas are particularly dangerous. Delay in treatment significantly increases mortality."
    },
    {
        question: "A 60-year-old man with CLL develops rapidly enlarging lymph nodes and B symptoms. Biopsy shows diffuse large B-cell lymphoma.\n\nWhat is this transformation called?",
        options: {
            A: "Richter transformation",
            B: "Blast crisis",
            C: "Leukemoid reaction",
            D: "Marrow aplasia",
            E: "Paraneoplastic syndrome"
        },
        correctAnswer: "A",
        explanation: "Richter transformation is the progression of CLL into an aggressive lymphoma, usually diffuse large B-cell lymphoma. It presents with rapidly enlarging lymph nodes and systemic symptoms. Prognosis is poor compared with typical CLL."
    },
    {
        question: "A patient with AML has leukocytosis and is found to have Auer rods on blood film.\n\nWhich structure do Auer rods represent?",
        options: {
            A: "Aggregated DNA",
            B: "Lipid inclusions",
            C: "Immunoglobulin deposits",
            D: "Fused primary granules",
            E: "Mitochondrial remnants"
        },
        correctAnswer: "D",
        explanation: "Auer rods are composed of fused azurophilic granules in myeloid blasts. They are highly specific for AML. Their presence strongly supports myeloid lineage differentiation."
    },
    {
        question: "A 55-year-old patient with CML is being monitored.\n\nWhich laboratory finding is most useful for assessing disease burden and response to therapy?",
        options: {
            A: "Serum calcium",
            B: "BCR-ABL transcript levels (PCR)",
            C: "ESR",
            D: "Serum ferritin",
            E: "Coagulation profile"
        },
        correctAnswer: "B",
        explanation: "Quantitative PCR for BCR-ABL transcripts is used to monitor minimal residual disease in CML. It is highly sensitive and allows detection of molecular remission. This is more sensitive than WBC count alone."
    }
]
},

            microbiology: {
 "Bacteriology Staining": [
            {
                question: "Which of the following is a Gram-positive, catalase-positive coccus that characteristically arranges in grape-like clusters?",
                options: {
                    A: "Streptococcus pyogenes",
                    B: "Staphylococcus aureus",
                    C: "Enterococcus faecalis",
                    D: "Neisseria gonorrhoeae",
                    E: "Streptococcus pneumoniae"
                },
                correctAnswer: "B",
                explanation: "Staphylococcus aureus is a Gram-positive coccus that divides in multiple planes, producing characteristic grape-like clusters. It produces catalase, which differentiates it from all Streptococcus and Enterococcus species (both catalase-negative). Its coagulase positivity further distinguishes it from other staphylococci. These combined features — Gram-positive clusters, catalase-positive, coagulase-positive — are the defining characteristics used in laboratory identification."
            },
            {
                question: "What property of Mycobacterium tuberculosis explains why it retains carbol-fuchsin dye despite acid-alcohol decolourisation in the Ziehl-Neelsen stain?",
                options: {
                    A: "It possesses an unusually thick peptidoglycan cell wall",
                    B: "Its cell wall is rich in mycolic acids, conferring acid-fastness",
                    C: "It produces a polysaccharide capsule that physically traps the dye",
                    D: "It has a very high cytoplasmic pH that chemically binds the stain",
                    E: "It lacks an outer membrane, increasing dye penetration and retention"
                },
                correctAnswer: "B",
                explanation: "Mycobacterium tuberculosis has a uniquely waxy cell wall composed of long-chain mycolic acids — branched, high-molecular-weight fatty acids. These lipids create an extremely hydrophobic, impermeable barrier. Once heated carbol-fuchsin penetrates this wall, the mycolic acids retain the dye so strongly that even vigorous acid-alcohol decolourisation cannot remove it. This property, termed acid-fastness, is the mechanistic basis of the Ziehl-Neelsen stain and is shared by all mycobacteria and Nocardia species."
            },
            {
                question: "In the Gram staining procedure, what is the specific role of Gram's iodine?",
                options: {
                    A: "It acts as the primary stain, colouring all bacteria purple",
                    B: "It is the counterstain that colours Gram-negative bacteria pink",
                    C: "It forms a crystal violet-iodine complex acting as a mordant",
                    D: "It disrupts the outer membrane of Gram-negative bacteria",
                    E: "It is the decolourising agent that differentiates organisms"
                },
                correctAnswer: "C",
                explanation: "After crystal violet is applied, Gram's iodine is added as a mordant. Iodine reacts with crystal violet to form a large, insoluble crystal violet-iodine (CV-I) complex within the bacterial cell. This complex is too large to pass through the thick, dehydrated peptidoglycan of Gram-positive bacteria during decolourisation. In Gram-negative bacteria, the acetone-alcohol dissolves the lipid outer membrane, creating channels through which the smaller spaces in the thin peptidoglycan allow the CV-I complex to wash out freely."
            },
            {
                question: "Which of the following organisms would appear pink/red after a correctly performed Gram stain?",
                options: {
                    A: "Staphylococcus epidermidis",
                    B: "Clostridium perfringens",
                    C: "Bacillus anthracis",
                    D: "Escherichia coli",
                    E: "Streptococcus agalactiae"
                },
                correctAnswer: "D",
                explanation: "Escherichia coli is a Gram-negative bacterium. During the decolourisation step, acetone-alcohol dissolves the lipid-rich outer membrane of Gram-negative bacteria, allowing the crystal violet-iodine complex to wash out of the thin peptidoglycan layer. After decolourisation, the now-colourless bacteria take up the safranin counterstain, appearing pink to red under microscopy. All other organisms listed — Staphylococcus epidermidis, Clostridium perfringens, Bacillus anthracis, and Streptococcus agalactiae — are Gram-positive and would retain crystal violet, appearing purple."
            },
            {
                question: "What is the correct sequence of reagents in the Gram staining procedure?",
                options: {
                    A: "Crystal violet → Gram's iodine → Acetone-alcohol → Safranin",
                    B: "Safranin → Crystal violet → Gram's iodine → Acetone-alcohol",
                    C: "Crystal violet → Acetone-alcohol → Gram's iodine → Safranin",
                    D: "Carbol-fuchsin → Acid-alcohol → Methylene blue",
                    E: "Malachite green → Heat → Safranin"
                },
                correctAnswer: "A",
                explanation: "The Gram staining procedure follows a strict, invariable sequence: (1) Crystal violet, the primary stain, is applied for approximately 1 minute, staining all bacteria purple; (2) Gram's iodine, the mordant, is applied for 1 minute to fix the crystal violet-iodine complex; (3) Acetone-alcohol, the decolouriser, is applied briefly until the eluent runs clear, differentiating Gram-positive from Gram-negative organisms; and (4) Safranin, the counterstain, is applied for 1 minute. Option D describes the Ziehl-Neelsen stain, and option E describes the Schaeffer-Fulton spore stain."
            },
            {
                question: "Which staining technique is used to demonstrate bacterial endospores, and what colour do the spores appear?",
                options: {
                    A: "Gram stain — spores appear purple",
                    B: "Ziehl-Neelsen stain — spores appear red",
                    C: "Schaeffer-Fulton stain — spores appear green against red vegetative cells",
                    D: "Albert's stain — spores appear dark blue-black",
                    E: "India ink — spores appear as clear halos"
                },
                correctAnswer: "C",
                explanation: "The Schaeffer-Fulton method is the standard technique for demonstrating endospores. Malachite green is applied and heated to drive the stain into the metabolically inert, impermeable spore. After decolourisation with water, spores retain the green stain while vegetative cells are counterstained red with safranin. This creates a clear colour contrast that allows identification of spore position — terminal (as in Clostridium tetani, giving a 'drumstick' appearance), subterminal, or central — and whether the spore distends the cell body."
            },
            {
                question: "Albert's stain reveals dark blue-black metachromatic granules within club-shaped Gram-positive rods arranged in 'Chinese letter' formation. Which organism does this describe?",
                options: {
                    A: "Bacillus anthracis",
                    B: "Listeria monocytogenes",
                    C: "Corynebacterium diphtheriae",
                    D: "Actinomyces israelii",
                    E: "Clostridium tetani"
                },
                correctAnswer: "C",
                explanation: "Corynebacterium diphtheriae contains volutin granules — accumulations of polyphosphate also called metachromatic granules or Babes-Ernst bodies. Albert's stain, a mixture of toluidine blue and malachite green, stains the bacterial cytoplasm green while these granules stain dark blue-black due to metachromasia (the property of staining a different colour from the dye used). The organisms themselves are arranged in characteristic 'Chinese letter' or palisade formations due to their snapping division pattern. These combined features — metachromatic granules in club-shaped diphtheroid rods — are diagnostic."
            },
            {
                question: "A patient with HIV presents with cryptococcal meningitis. Which technique is used at the bedside to directly visualise the polysaccharide capsule in CSF?",
                options: {
                    A: "Gram stain",
                    B: "Ziehl-Neelsen stain",
                    C: "India ink (negative stain) preparation",
                    D: "Giemsa stain",
                    E: "Calcofluor white fluorescence"
                },
                correctAnswer: "C",
                explanation: "India ink is a negative staining technique. The carbon ink particles are physically excluded by the large polysaccharide capsule of Cryptococcus neoformans, creating a clear unstained halo around the dark-staining budding yeast cell against the black ink background. The capsule itself is not stained — its presence is inferred from the excluded ink. This rapid preparation is performed directly on unspun or centrifuged CSF. The Cryptococcal Antigen Lateral Flow Assay has largely replaced it in well-resourced settings, but India ink remains clinically important."
            },
            {
                question: "Which fluorescent staining method is used as a rapid, sensitive screening test for acid-fast bacilli, with positive results confirmed by Ziehl-Neelsen?",
                options: {
                    A: "Calcofluor white",
                    B: "Auramine-rhodamine",
                    C: "Acridine orange",
                    D: "DAPI",
                    E: "Thioflavin T"
                },
                correctAnswer: "B",
                explanation: "Auramine-rhodamine is a fluorochrome stain in which auramine O (and rhodamine B) binds to mycolic acids in mycobacterial cell walls. Under UV or blue-violet light, acid-fast bacilli fluoresce bright yellow-orange against a dark background. Its key advantage over conventional Ziehl-Neelsen is sensitivity — because the fluorescent organisms are so bright, smears can be screened at lower magnification (×25 or ×40 objective), meaning a much greater area of the smear is examined in the same time. All positive auramine results are then confirmed with ZN staining."
            },
            {
                question: "Which organism stains poorly on routine Gram stain due to complete absence of a cell wall?",
                options: {
                    A: "Haemophilus influenzae",
                    B: "Mycoplasma pneumoniae",
                    C: "Neisseria meningitidis",
                    D: "Pseudomonas aeruginosa",
                    E: "Klebsiella pneumoniae"
                },
                correctAnswer: "B",
                explanation: "Mycoplasma pneumoniae is unique among bacterial respiratory pathogens in having no cell wall whatsoever. The Gram stain relies entirely on differentiating cell wall architecture — thick peptidoglycan (Gram-positive) versus thin peptidoglycan with outer membrane (Gram-negative). Without any peptidoglycan, Mycoplasma neither retains crystal violet nor takes up safranin effectively, rendering it virtually invisible on Gram staining. Clinically, this is significant because Mycoplasma is also intrinsically resistant to all beta-lactam antibiotics, which target cell wall synthesis."
            },
            {
                question: "Spirochaetes such as Treponema pallidum cannot be visualised on standard Gram stain. Which technique allows direct visualisation of living organisms from a syphilitic chancre?",
                options: {
                    A: "Ziehl-Neelsen stain",
                    B: "Dark-field microscopy",
                    C: "Giemsa stain",
                    D: "Periodic acid-Schiff stain",
                    E: "Gram stain with oil immersion at ×1000"
                },
                correctAnswer: "B",
                explanation: "Treponema pallidum is too narrow (0.1–0.2 μm) to be resolved by standard light microscopy and stains poorly with conventional dyes. Dark-field microscopy illuminates the specimen from an oblique angle, causing organisms to appear bright against a completely black background. This technique allows visualisation of the characteristic tightly coiled corkscrew morphology and corkscrew motility of living T. pallidum in exudate from a primary syphilitic chancre or condylomata lata. The organisms must be examined immediately, as motility is lost rapidly."
            },
            {
                question: "A Gram stain from a urethral discharge shows Gram-negative diplococci within the cytoplasm of neutrophils. Which organism is this most consistent with?",
                options: {
                    A: "Chlamydia trachomatis",
                    B: "Trichomonas vaginalis",
                    C: "Neisseria gonorrhoeae",
                    D: "Haemophilus ducreyi",
                    E: "Treponema pallidum"
                },
                correctAnswer: "C",
                explanation: "Neisseria gonorrhoeae is a Gram-negative diplococcus with classically described coffee-bean or kidney-shaped paired cocci. In symptomatic male urethritis, the Gram stain is highly sensitive (>95%) and specific, demonstrating intracellular Gram-negative diplococci (IGND) — organisms engulfed within the cytoplasm of polymorphonuclear neutrophils. The finding of IGND in a urethral smear from a male patient is diagnostic of gonorrhoea and may permit immediate treatment without awaiting culture. Chlamydia is invisible on Gram stain."
            },
            {
                question: "The Giemsa stain is best used to visualise which group of pathogens?",
                options: {
                    A: "Fungi with thick polysaccharide capsules",
                    B: "Acid-fast mycobacteria in sputum",
                    C: "Gram-negative enteric rods",
                    D: "Intracellular bacteria including Rickettsia and Chlamydia",
                    E: "Spore-forming anaerobic bacteria"
                },
                correctAnswer: "D",
                explanation: "Giemsa stain is a Romanowsky-type polychrome stain composed of a mixture of methylene blue, azure, and eosin. It differentially stains cellular components: nuclei purple-blue, cytoplasm pink-blue. It is particularly suited to visualising intracellular pathogens such as Rickettsia (which stain red-purple within host cell cytoplasm), Chlamydia (intracytoplasmic inclusions), Ehrlichia and Anaplasma (morulae within leucocytes), and blood parasites including Plasmodium, Trypanosoma, and Leishmania. It is the standard stain for thick and thin blood films."
            },
            {
                question: "A Gram stain from a throat swab reveals long, thin, branching Gram-positive filaments that resemble fungal hyphae. Which bacterial genus does this morphology suggest?",
                options: {
                    A: "Streptococcus",
                    B: "Bacteroides",
                    C: "Actinomyces",
                    D: "Clostridium",
                    E: "Lactobacillus"
                },
                correctAnswer: "C",
                explanation: "Actinomyces israelii is a Gram-positive, non-spore-forming, anaerobic rod that forms long, branching filamentous structures, giving it a striking morphological resemblance to fungi on Gram stain. This 'fungus-like' bacterial morphology is a key diagnostic clue. Actinomyces is part of the normal oral, gastrointestinal, and female genital tract flora. It causes actinomycosis — cervicofacial disease ('lumpy jaw'), thoracic, or abdominal infection — typically after trauma or dental procedures, producing characteristic 'sulphur granules' in pus that represent bacterial microcolonies."
            },
            {
                question: "On a Gram stain of a high-quality sputum sample, which finding indicates an adequate specimen rather than salivary contamination?",
                options: {
                    A: "Greater than 25 squamous epithelial cells per low-power field",
                    B: "Fewer than 10 leucocytes per low-power field",
                    C: "Greater than 25 polymorphonuclear leucocytes and fewer than 10 squamous cells per low-power field",
                    D: "Presence of Gram-positive cocci only",
                    E: "Absence of any bacteria"
                },
                correctAnswer: "C",
                explanation: "The Murray-Washington criteria are used to assess sputum quality before processing. An adequate sample — representing material from the lower respiratory tract — should contain more than 25 polymorphonuclear leucocytes (reflecting infection or inflammation) and fewer than 10 squamous epithelial cells per low-power field (×100 magnification). Squamous epithelial cells originate from the oropharynx and their excess indicates salivary contamination. Samples with more than 25 squamous epithelial cells per lpf are rejected or reported as unsuitable, as culture results would reflect upper airway commensals rather than true pulmonary pathogens."
            },
            {
                question: "Nocardia species are described as 'partially acid-fast'. Which modification to the standard Ziehl-Neelsen technique renders Nocardia positive?",
                options: {
                    A: "Using a weaker decolouriser (1% sulphuric acid) instead of strong acid-alcohol",
                    B: "Increasing carbol-fuchsin concentration to 10%",
                    C: "Heating to a higher temperature during staining",
                    D: "Using acid-alcohol for three times the standard duration",
                    E: "Replacing safranin counterstain with methylene blue"
                },
                correctAnswer: "A",
                explanation: "Standard Ziehl-Neelsen uses strong acid-alcohol (3% HCl in 95% ethanol) as the decolouriser, which fully removes carbol-fuchsin from all non-mycobacterial organisms. Nocardia species contain shorter, fewer mycolic acids than Mycobacterium, giving them weaker acid-fastness. The modified Kinyoun technique uses 1% sulphuric acid (or 0.5–1% H2SO4 in water) as the decolouriser — a much weaker acid that is insufficient to remove carbol-fuchsin from Nocardia, rendering them positive (pink-red). This distinguishes Nocardia from true Actinomyces species, which are non-acid-fast."
            },
            {
                question: "A CSF Gram stain from an elderly immunocompromised patient shows Gram-positive diplococci with a lancet (flame) shape. Which organism is most likely?",
                options: {
                    A: "Neisseria meningitidis",
                    B: "Haemophilus influenzae",
                    C: "Streptococcus pneumoniae",
                    D: "Listeria monocytogenes",
                    E: "Staphylococcus aureus"
                },
                correctAnswer: "C",
                explanation: "Streptococcus pneumoniae is a Gram-positive coccus that characteristically occurs in pairs (diplococci) with adjacent sides flattened and opposite sides pointed, creating a distinctive lancet, flame, or teardrop shape. It possesses a large polysaccharide capsule. In CSF, identifying lancet-shaped Gram-positive diplococci is a classic presentation of pneumococcal meningitis, particularly common in the elderly, asplenic patients, and those with complement deficiency. The quellung reaction with type-specific antisera confirms capsular serotype and can be performed directly on CSF."
            },
            {
                question: "Which of the following correctly describes why old or dead Gram-positive bacteria may falsely appear Gram-negative?",
                options: {
                    A: "They produce enzymes that chemically degrade crystal violet",
                    B: "Autolysis and cell wall degradation thin the peptidoglycan, preventing CV-I complex retention",
                    C: "Dead bacteria acquire outer membrane components from Gram-negative organisms",
                    D: "Safranin preferentially binds to dead Gram-positive bacterial membranes",
                    E: "Fixation by heat causes loss of the teichoic acid layer"
                },
                correctAnswer: "B",
                explanation: "As bacteria age or die, their own autolysin enzymes continue to degrade the peptidoglycan cell wall. In old cultures, clinical specimens stored too long, or overly fixed preparations, the peptidoglycan layer becomes sufficiently thinned or disrupted that it can no longer retain the crystal violet-iodine complex after decolourisation — the organism takes up safranin and falsely appears Gram-negative. This is a significant practical pitfall. For this reason, Gram stains should always be performed on fresh specimens, recently prepared smears, and cultures within the optimal growth phase."
            },
            {
                question: "Which staining technique is specifically used to demonstrate the polysaccharide capsule of Streptococcus pneumoniae in histological sections?",
                options: {
                    A: "Ziehl-Neelsen stain",
                    B: "Gram stain",
                    C: "Mucicarmine stain",
                    D: "Giemsa stain",
                    E: "Schaeffer-Fulton stain"
                },
                correctAnswer: "C",
                explanation: "Mucicarmine stains acidic mucopolysaccharides (mucins) rose-red. The polysaccharide capsule of encapsulated organisms — including Streptococcus pneumoniae and Cryptococcus neoformans — is mucicarmine-positive. In histological sections, mucicarmine highlights the capsule as a distinct red zone surrounding the organisms. For Cryptococcus specifically, mucicarmine positivity is highly specific and diagnostically important. By contrast, most other bacteria and fungi are mucicarmine-negative, making it a useful differential stain in tissue pathology."
            },
            {
                question: "Calcofluor white stain is most commonly used in clinical microbiology to detect which group of microorganisms?",
                options: {
                    A: "Acid-fast mycobacteria",
                    B: "Gram-positive bacteria",
                    C: "Fungi and Acanthamoeba cysts",
                    D: "Intracellular bacteria such as Rickettsia",
                    E: "Spirochaetes"
                },
                correctAnswer: "C",
                explanation: "Calcofluor white is a fluorochrome that binds non-specifically to chitin (the structural polysaccharide of fungal cell walls) and cellulose (in Acanthamoeba cysts and some plant material). Under UV fluorescence microscopy, bound organisms fluoresce bright blue-white or apple-green. It is significantly more sensitive than KOH preparations for detecting sparse fungal elements — particularly hyphae and conidia — in respiratory samples, skin scrapings, and corneal scrapings. It is the investigation of choice for diagnosing Acanthamoeba keratitis from corneal scrapes."
            },
            {
                question: "A Gram stain of vaginal discharge shows squamous epithelial cells with their surface so heavily coated with small coccobacilli that the cell margin is obscured. What is this finding called and what does it indicate?",
                options: {
                    A: "Polymorphonuclear infiltrate — gonococcal cervicitis",
                    B: "Clue cells — bacterial vaginosis",
                    C: "Target cells — Trichomonas vaginalis infection",
                    D: "Ghost cells — severe atrophic vaginitis",
                    E: "Halo cells — human papillomavirus infection"
                },
                correctAnswer: "B",
                explanation: "Clue cells are the pathognomonic microscopic finding of bacterial vaginosis (BV). They are vaginal squamous epithelial cells so densely coated with Gram-variable coccobacilli — predominantly Gardnerella vaginalis along with other BV-associated anaerobes — that the cell border appears granular, stippled, and indistinct. Their presence is one of the four Amsel criteria for BV diagnosis (along with vaginal pH >4.5, thin homogeneous discharge, and positive whiff test with 10% KOH). More than 20% clue cells on a wet preparation is considered a positive finding."
            },
            {
                question: "The periodic acid-Schiff (PAS) stain is primarily used in microbiology to detect which type of organism?",
                options: {
                    A: "Acid-fast mycobacteria in sputum",
                    B: "Gram-negative bacteria in blood cultures",
                    C: "Fungi, due to polysaccharides in their cell walls",
                    D: "Intracellular bacteria including Rickettsia",
                    E: "Spirochaetes in tissue sections"
                },
                correctAnswer: "C",
                explanation: "The PAS reaction oxidises 1,2-diol groups in polysaccharides and glycoproteins to aldehydes, which then react with Schiff reagent to produce an insoluble magenta-coloured product. Fungal cell walls are rich in polysaccharides — including glucans, chitin, and mannans — making fungi intensely PAS-positive (magenta/red-purple). This allows clear visualisation of fungal hyphae, yeasts, and spores in tissue sections. PAS is widely used to detect Aspergillus, Candida, Histoplasma, and Pneumocystis jirovecii in histopathological specimens."
            },
            {
                question: "Which of the following bacteria is Gram-positive, catalase-negative, and demonstrates characteristic motility at room temperature but not at body temperature?",
                options: {
                    A: "Bacillus cereus",
                    B: "Listeria monocytogenes",
                    C: "Clostridium tetani",
                    D: "Staphylococcus aureus",
                    E: "Corynebacterium diphtheriae"
                },
                correctAnswer: "B",
                explanation: "Listeria monocytogenes is a small Gram-positive rod that is catalase-positive (not catalase-negative — this is a key distinguishing feature from Streptococci). It demonstrates characteristic 'tumbling' motility at room temperature (20–25°C) due to peritrichous flagella, but flagella expression is downregulated at 37°C, reducing motility. This temperature-dependent motility is visible as an 'umbrella-shaped' zone of growth just below the surface of a semi-solid agar. L. monocytogenes also uniquely propels itself intracellularly through actin polymerisation ('actin rockets'), visible as a comet-tail on immunofluorescence."
            },
            {
                question: "A Gram stain from a blood culture taken from a febrile child shows small, pleomorphic Gram-negative coccobacilli. The child is unvaccinated and has signs of meningitis. Which organism is most likely?",
                options: {
                    A: "Neisseria meningitidis",
                    B: "Haemophilus influenzae type b",
                    C: "Streptococcus pneumoniae",
                    D: "Listeria monocytogenes",
                    E: "Group B Streptococcus"
                },
                correctAnswer: "B",
                explanation: "Haemophilus influenzae is a small, pleomorphic Gram-negative coccobacillus — a short rod that can appear coccoid. The word 'coccobacillus' is the morphological hallmark. Haemophilus influenzae type b (Hib) was the leading cause of bacterial meningitis in children under 5 years before introduction of the conjugate Hib vaccine. In an unvaccinated child with meningitis and a blood culture showing pleomorphic Gram-negative coccobacilli, Hib is the most likely diagnosis. The organism requires both X factor (haemin) and V factor (NAD) for growth — the 'satellite phenomenon' around Staphylococcus on blood agar is a classical demonstration."
            },
            {
                question: "Which of the following statements correctly describes the structural basis of Gram-negative staining?",
                options: {
                    A: "Gram-negative bacteria retain crystal violet because of their additional outer membrane",
                    B: "Gram-negative bacteria lose crystal violet because acetone-alcohol dissolves their outer membrane, allowing the CV-I complex to wash out through thin peptidoglycan",
                    C: "Gram-negative bacteria stain pink because safranin has a higher affinity for their outer membrane than crystal violet",
                    D: "Gram-negative bacteria lack peptidoglycan entirely, preventing any dye binding",
                    E: "Gram-negative bacteria produce bleaching enzymes that actively remove crystal violet"
                },
                correctAnswer: "B",
                explanation: "The structural basis of Gram-negative staining lies in the organisation of the cell envelope. Gram-negative bacteria have a thin peptidoglycan layer (2–7 nm) sandwiched between an inner cytoplasmic membrane and a lipid-rich outer membrane. During decolourisation, acetone-alcohol dissolves the lipids of the outer membrane, creating large gaps. The crystal violet-iodine complex, which cannot be retained in the thin peptidoglycan layer, flows freely out through these gaps. The now-colourless bacteria take up the safranin counterstain, appearing pink. By contrast, Gram-positive bacteria lack an outer membrane and have thick peptidoglycan (20–80 nm) that dehydrates and closes pores during decolourisation."
            },
            {
                question: "Which silver impregnation staining technique is used to visualise Helicobacter pylori in gastric biopsy tissue sections?",
                options: {
                    A: "Ziehl-Neelsen stain",
                    B: "Gram stain",
                    C: "Warthin-Starry silver stain",
                    D: "Schaeffer-Fulton stain",
                    E: "Albert's stain"
                },
                correctAnswer: "C",
                explanation: "Helicobacter pylori is a small, curved Gram-negative rod that is difficult to identify on routine haematoxylin and eosin staining of gastric biopsies. The Warthin-Starry silver stain deposits metallic silver onto the surface of the organisms, rendering them dark black against a yellow-brown background. Other silver impregnation methods (Dieterle, Genta) are also used. Giemsa and modified Giemsa stains are popular alternatives. The organisms are found in the mucus layer overlying gastric surface epithelial cells and within gastric pits, and their identification is central to diagnosing H. pylori-associated gastritis and peptic ulcer disease."
            },
            {
                question: "A Gram stain shows Gram-positive cocci arranged in pairs (diplococci) and short chains. The organism is catalase-negative and optochin-sensitive. Which organism is this?",
                options: {
                    A: "Staphylococcus aureus",
                    B: "Enterococcus faecalis",
                    C: "Streptococcus pneumoniae",
                    D: "Streptococcus pyogenes",
                    E: "Streptococcus agalactiae"
                },
                correctAnswer: "C",
                explanation: "Streptococcus pneumoniae is a Gram-positive coccus occurring as diplococci (pairs) or short chains. Like all Streptococcus species, it is catalase-negative — a key distinction from Staphylococci. Its specific identifying features are optochin (ethylhydrocupreine) sensitivity — it is inhibited by optochin discs, unlike other alpha-haemolytic streptococci (viridans group) which are resistant — and bile solubility (autolysis in 2% sodium deoxycholate). These properties, combined with the lancet-shaped diplococcal morphology on Gram stain, allow definitive laboratory identification."
            },
            {
                question: "The Dieterle silver impregnation stain is used to detect which organism in lung tissue from patients with atypical pneumonia?",
                options: {
                    A: "Mycobacterium tuberculosis",
                    B: "Streptococcus pneumoniae",
                    C: "Legionella pneumophila",
                    D: "Pneumocystis jirovecii",
                    E: "Aspergillus fumigatus"
                },
                correctAnswer: "C",
                explanation: "Legionella pneumophila is a Gram-negative rod that stains extremely poorly — almost invisibly — on routine Gram stain. In lung tissue from post-mortem or open biopsy specimens, the Dieterle silver impregnation stain (or Warthin-Starry silver) deposits silver on the bacterial cell walls, rendering the organisms visible as small, dark black rods. Practically, Legionella pneumonia is diagnosed by urinary antigen testing (detects serogroup 1) or PCR. Silver staining on tissue has largely a historical and forensic role. Direct fluorescent antibody (DFA) staining on respiratory specimens is another confirmatory method."
            },
            {
                question: "Which of the following is true of the Gram stain appearance of Clostridium perfringens in clinical specimens?",
                options: {
                    A: "It is a Gram-negative rod that commonly loses staining in old cultures",
                    B: "It is a large Gram-positive rod that rarely shows spores in clinical material",
                    C: "It is a Gram-positive coccus arranged in chains",
                    D: "It is Gram-variable with characteristic terminal spores",
                    E: "It is acid-fast in the modified Kinyoun technique"
                },
                correctAnswer: "B",
                explanation: "Clostridium perfringens is a large, brick-shaped (boxcar) Gram-positive rod. A notable and somewhat atypical feature is that it rarely produces visible spores in clinical specimens or on routine culture media — unlike many other Clostridium species. Spores can be induced by nutrient-poor media or heat shock. Its identification therefore relies on colony morphology, double zone of haemolysis (alpha and theta toxins) on blood agar, the Nagler reaction (lecithinase activity), and increasingly on MALDI-TOF mass spectrometry. The absence of spores in a Gram-positive anaerobic rod should not exclude Clostridium."
            },
            {
                question: "Acridine orange stain is particularly valuable for detecting bacteria in which clinical scenario?",
                options: {
                    A: "Detecting fungi in high-volume respiratory samples",
                    B: "Confirming acid-fastness of mycobacteria",
                    C: "Detecting low numbers of bacteria in blood cultures and CSF",
                    D: "Visualising spore-forming bacteria specifically",
                    E: "Differentiating Gram-positive from Gram-negative bacteria"
                },
                correctAnswer: "C",
                explanation: "Acridine orange is a fluorescent nucleic acid intercalating dye that stains double-stranded DNA green and single-stranded RNA orange-red. Under fluorescence microscopy, bacteria fluoresce bright orange against a dark background, allowing detection even at very low organism densities. It is particularly valuable when a Gram stain is negative but infection is clinically suspected — for example, in partially treated bacterial meningitis with low organism count in CSF, or in bacteraemic blood cultures with few organisms. Because it stains nucleic acids regardless of cell wall structure, it detects organisms invisible to Gram staining."
            },
            {
                question: "A Gram stain shows Gram-positive cocci in groups of four (tetrads). Which genus characteristically displays this arrangement?",
                options: {
                    A: "Staphylococcus",
                    B: "Streptococcus",
                    C: "Micrococcus",
                    D: "Enterococcus",
                    E: "Aerococcus"
                },
                correctAnswer: "C",
                explanation: "Micrococcus species divide in two successive perpendicular planes, producing characteristic tetrads (groups of four cells in a square arrangement) or, less commonly, cuboidal packets of eight. This contrasts with Staphylococci, which divide in multiple planes to form irregular grape-like clusters, and Streptococci, which divide in one plane to form chains. Micrococcus species are catalase-positive, Gram-positive cocci that are coagulase-negative and generally non-pathogenic, existing as normal skin flora. They are occasionally implicated in infections in severely immunocompromised patients."
            },
            {
                question: "The Gomori methenamine silver (GMS) stain demonstrates dark-staining cyst walls resembling 'crushed ping-pong balls' in bronchoalveolar lavage from an HIV-positive patient. Which organism does this describe?",
                options: {
                    A: "Mycobacterium avium complex",
                    B: "Pneumocystis jirovecii",
                    C: "Legionella pneumophila",
                    D: "Streptococcus pneumoniae",
                    E: "Histoplasma capsulatum"
                },
                correctAnswer: "B",
                explanation: "Pneumocystis jirovecii (formerly classified as P. carinii) is a fungus with a polysaccharide-containing cell wall. In the GMS stain, silver is deposited onto the cyst walls (ascus forms), which appear as dark black, circular to cup-shaped structures — classically described as resembling crushed or folded ping-pong balls — against a pale green background. The trophic forms are not stained by GMS. Toluidine blue O and calcofluor white also stain the cyst walls. GMS is the gold-standard histological stain for Pneumocystis jirovecii pneumonia (PCP) in BAL or transbronchial biopsy specimens."
            },
            {
                question: "A Gram stain from a wound shows a Gram-positive rod with a round terminal spore that distends the cell, creating a 'drumstick' or 'tennis racquet' appearance. Which organism does this describe?",
                options: {
                    A: "Bacillus cereus",
                    B: "Clostridium tetani",
                    C: "Clostridium perfringens",
                    D: "Clostridium botulinum",
                    E: "Bacillus subtilis"
                },
                correctAnswer: "B",
                explanation: "Clostridium tetani produces a characteristically round, terminal spore that is significantly wider than the vegetative cell body. Because the spore distends the end of the bacillus, the overall shape resembles a drumstick or tennis racquet — one of the most recognisable morphological descriptions in bacteriology. This contrasts with other Clostridium species: C. botulinum has oval subterminal spores, and C. perfringens rarely sporulates in clinical material at all. The drumstick spore morphology on Gram stain, combined with strict anaerobic growth and positive neurotoxin detection, confirms C. tetani."
            },
            {
                question: "A modified ZN preparation of stool from an HIV-positive patient with chronic diarrhoea shows small (4–6 μm) pink-red oval oocysts against a blue background. Which pathogen is responsible?",
                options: {
                    A: "Giardia lamblia",
                    B: "Cryptosporidium parvum",
                    C: "Entamoeba histolytica",
                    D: "Isospora belli",
                    E: "Microsporidium species"
                },
                correctAnswer: "B",
                explanation: "Cryptosporidium parvum oocysts are acid-fast and appear as pink to deep red, round to oval structures measuring 4–6 μm on modified ZN preparation (or auramine-rhodamine). Because they are small, lack distinctive internal features on wet mounts, and are present in small numbers, modified ZN is the standard diagnostic technique. Isospora belli (now Cystoisospora belli) oocysts are also acid-fast but are much larger (23–33 μm) and oval. Giardia cysts and Entamoeba cysts are not acid-fast. Microsporidia require modified trichrome or calcofluor staining."
            },
            {
                question: "The Warthin-Starry stain on a lymph node biopsy from a patient with cat-scratch disease reveals small black pleomorphic rods within necrotic foci. Which organism is identified?",
                options: {
                    A: "Bartonella henselae",
                    B: "Rickettsia prowazekii",
                    C: "Coxiella burnetii",
                    D: "Brucella abortus",
                    E: "Francisella tularensis"
                },
                correctAnswer: "A",
                explanation: "Bartonella henselae, the causative agent of cat-scratch disease, is a small, pleomorphic, Gram-negative rod that is extremely difficult to visualise on routine Gram stain. In lymph node biopsies showing granulomatous inflammation with stellate (star-shaped) necrosis — the hallmark histology of cat-scratch disease — Warthin-Starry silver staining deposits metallic silver on the organisms, revealing clusters of small black rods within the necrotic areas. Because of Bartonella's fastidious nature and slow growth, silver staining on tissue combined with serology and PCR are the main diagnostic tools."
            },
            {
                question: "Loeffler's methylene blue staining of a smear from a patient with a draining bubo reveals Gram-negative rods with striking bipolar ('safety pin') staining. Combined with rodent contact, which organism is responsible?",
                options: {
                    A: "Francisella tularensis",
                    B: "Yersinia pestis",
                    C: "Brucella melitensis",
                    D: "Burkholderia pseudomallei",
                    E: "Pasteurella multocida"
                },
                correctAnswer: "B",
                explanation: "Yersinia pestis, the causative agent of plague, demonstrates characteristic bipolar staining with Wayson's stain or Loeffler's methylene blue. The organism stains more intensely at both poles while the central portion remains lighter, creating a 'closed safety pin' appearance. This is due to the distribution of cytoplasmic contents within the rod. The clinical context is critical — inguinal lymphadenopathy (bubo) following flea bite in a rodent-endemic area with associated systemic illness is the classic presentation of bubonic plague. Y. pestis is a Category A bioterrorism agent."
            },
            {
                question: "Which of the following Gram-positive organisms is notable for being catalase-positive and capable of growing at 4°C in refrigerated foods, making it a concern in ready-to-eat products?",
                options: {
                    A: "Streptococcus pyogenes",
                    B: "Enterococcus faecalis",
                    C: "Listeria monocytogenes",
                    D: "Clostridium perfringens",
                    E: "Bacillus cereus"
                },
                correctAnswer: "C",
                explanation: "Listeria monocytogenes is unique among foodborne bacterial pathogens for its ability to grow at refrigeration temperatures (2–4°C) — a property called psychrotrophism. This is clinically significant because standard refrigeration does not prevent Listeria growth in contaminated ready-to-eat foods such as soft cheeses, deli meats, and smoked fish. L. monocytogenes is a Gram-positive rod that is catalase-positive and beta-haemolytic on blood agar. It causes listeriosis — particularly dangerous in pregnant women, neonates, the elderly, and immunocompromised individuals — manifesting as meningitis, septicaemia, or neonatal disease."
            },
            {
                question: "A tissue section from the small intestine of a patient with Whipple's disease shows PAS-positive macrophages packed in the lamina propria. Which organism is responsible, and why is PAS positive?",
                options: {
                    A: "Mycobacterium avium complex — because mycobacteria are weakly PAS-positive",
                    B: "Tropheryma whipplei — because the organism's glycoprotein-rich cell wall is PAS-positive",
                    C: "Yersinia enterocolitica — because of lipopolysaccharide in the outer membrane",
                    D: "Histoplasma capsulatum — because fungal cell walls are PAS-positive",
                    E: "Salmonella typhi — because of typhoid granuloma glycoproteins"
                },
                correctAnswer: "B",
                explanation: "Tropheryma whipplei is a Gram-positive actinobacterium that causes Whipple's disease, a rare multisystem infectious disease. The organism cannot be cultured on conventional media. It accumulates within macrophages in the intestinal lamina propria (and other organs), and its cell wall contains PAS-positive glycoproteins that stain magenta with the PAS reaction. Crucially, the Ziehl-Neelsen stain is negative, distinguishing Whipple's from Mycobacterium avium complex infection, which can cause a histologically similar picture in immunocompromised patients. Electron microscopy and PCR of jejunal biopsy are confirmatory."
            },
            {
                question: "The Wade-Fite modification of the Ziehl-Neelsen stain is specifically used to demonstrate which organism in tissue sections?",
                options: {
                    A: "Mycobacterium tuberculosis in sputum",
                    B: "Mycobacterium leprae in skin and nerve biopsies",
                    C: "Nocardia asteroides in brain abscess tissue",
                    D: "Cryptosporidium in intestinal biopsies",
                    E: "Actinomyces in cervicofacial lesions"
                },
                correctAnswer: "B",
                explanation: "Mycobacterium leprae is acid-fast but the standard ZN technique includes a xylene deparaffinisation step that removes too much carbol-fuchsin from M. leprae in tissue sections. The Wade-Fite modification replaces xylene with a peanut oil-xylene mixture (or omits the harsh deparaffinisation step), preserving the lipid content of the mycobacterial cell wall and maintaining acid-fastness. This allows visualisation of M. leprae as red rods within Schwann cells of peripheral nerves and within macrophages (Virchow cells) in the dermis of skin biopsies — crucial for classifying leprosy type and monitoring treatment."
            },
            {
                question: "Which staining method uses a fluorochrome that binds to chitin in fungal cell walls, causing them to fluoresce bright white under UV microscopy, and is particularly used for corneal scrapings?",
                options: {
                    A: "Auramine-rhodamine",
                    B: "Acridine orange",
                    C: "Calcofluor white",
                    D: "DAPI",
                    E: "Congo red"
                },
                correctAnswer: "C",
                explanation: "Calcofluor white is a fluorescent brightener that binds to beta-1,3 and beta-1,4 polysaccharide linkages — specifically to chitin in fungal cell walls and cellulose in plant material and Acanthamoeba cysts. When excited by UV light (around 365 nm), bound calcofluor emits bright blue-white or apple-green fluorescence. In clinical microbiology, it is used for rapid screening of corneal scrapings for fungal keratitis and Acanthamoeba keratitis, skin and nail scrapings for dermatophytes, and respiratory samples for fungal pneumonia. It is significantly more sensitive than standard KOH preparations."
            },
            {
                question: "Gardnerella vaginalis is described as 'Gram-variable'. What explains this inconsistent staining behaviour?",
                options: {
                    A: "It alternates between Gram-positive and Gram-negative phases during its lifecycle",
                    B: "It has a thin, atypical cell wall that lacks a conventional outer membrane but also has minimal peptidoglycan",
                    C: "It actively secretes enzymes that degrade crystal violet",
                    D: "It is an intracellular organism that takes up host cell staining characteristics",
                    E: "The Gram-variable staining is caused by its thick polysaccharide capsule"
                },
                correctAnswer: "B",
                explanation: "Gardnerella vaginalis stains inconsistently on Gram stain — ranging from Gram-positive through Gram-variable to weakly Gram-negative — depending on culture age, preparation technique, and decolourisation duration. Phylogenetically it is classified among Gram-positive organisms (class Actinobacteria), but its cell wall is atypical: it lacks a conventional Gram-negative outer membrane but also has a thin, easily disrupted peptidoglycan layer. This structural ambiguity means the crystal violet-iodine complex is variably retained. Its presence as Gram-variable coccobacilli coating vaginal epithelial cells (clue cells) is diagnostically important for bacterial vaginosis."
            },
            {
                question: "The Leifson flagella stain is used to visualise bacterial flagella. Why is a mordant used in this technique?",
                options: {
                    A: "To fix the crystal violet before decolourisation",
                    B: "To precipitate tannic acid around the flagella, increasing their diameter to a light-microscopically visible size",
                    C: "To solubilise the outer membrane of Gram-negative bacteria",
                    D: "To stain the flagella a different colour from the cell body",
                    E: "To prevent background staining from non-specific dye binding"
                },
                correctAnswer: "B",
                explanation: "Bacterial flagella measure approximately 12–25 nm in diameter — far below the resolution limit of standard light microscopy (~200 nm). The Leifson flagella staining technique uses a mordant (typically tannic acid or a related compound) that precipitates around the flagella, increasing their effective diameter to approximately 150–250 nm, making them resolvable by light microscopy. A dye such as pararosaniline or basic fuchsin then stains the thickened flagella. This technique allows determination of flagellar arrangement — monotrichous, lophotrichous, amphitrichous, or peritrichous — which has both taxonomic and pathogenicity implications."
            },
            {
                question: "A Gram stain from an abscess shows Gram-positive cocci in clusters that are catalase-positive and coagulase-negative. A satellite phenomenon is not observed. Which organism should be considered?",
                options: {
                    A: "Staphylococcus aureus",
                    B: "Streptococcus pyogenes",
                    C: "Staphylococcus epidermidis",
                    D: "Enterococcus faecalis",
                    E: "Micrococcus luteus"
                },
                correctAnswer: "C",
                explanation: "Staphylococcus epidermidis is a Gram-positive coccus that forms irregular clusters (coagulase-negative staphylococcus, CoNS). Like all staphylococci, it is catalase-positive, distinguishing it from streptococci and enterococci. Unlike Staphylococcus aureus, it is coagulase-negative, DNase-negative, and does not produce the characteristic golden pigment. S. epidermidis is an important cause of healthcare-associated infections, particularly in patients with prosthetic devices, indwelling catheters, and implants, where its ability to form biofilms is its primary virulence mechanism."
            },
            {
                question: "Which of the following describes the staining characteristics of Gram-positive bacteria on a correctly performed Gram stain?",
                options: {
                    A: "Pink/red due to safranin binding the thin peptidoglycan layer",
                    B: "Colourless until counterstained with malachite green",
                    C: "Purple/violet due to crystal violet-iodine complex retention in thick peptidoglycan",
                    D: "Dark red due to carbol-fuchsin binding to mycolic acids",
                    E: "Bright yellow under standard light microscopy due to autofluorescence"
                },
                correctAnswer: "C",
                explanation: "Gram-positive bacteria appear purple to violet after Gram staining because their thick peptidoglycan cell wall (20–80 nm) retains the crystal violet-iodine (CV-I) complex after decolourisation. During the decolourisation step with acetone-alcohol, the thick peptidoglycan dehydrates and contracts, effectively closing pores and trapping the large, insoluble CV-I complex within the cell. Because the primary stain is already purple, the safranin counterstain cannot penetrate or appreciably change the colour of Gram-positive cells. The resulting purple colour is therefore the retained primary stain, not the counterstain."
            },
            {
                question: "A laboratory identification card from a clinical isolate shows: Gram-negative rod, oxidase-positive, non-fermenter, with grape-like odour. Which organism is most consistent?",
                options: {
                    A: "Escherichia coli",
                    B: "Klebsiella pneumoniae",
                    C: "Pseudomonas aeruginosa",
                    D: "Enterobacter cloacae",
                    E: "Proteus mirabilis"
                },
                correctAnswer: "C",
                explanation: "Pseudomonas aeruginosa is a Gram-negative rod that is oxidase-positive — an important distinguishing feature, as most Enterobacteriaceae (E. coli, Klebsiella, Enterobacter, Proteus) are oxidase-negative. It is an obligate aerobe and non-fermenter of glucose. It produces distinctive pigments — pyocyanin (blue-green) and pyoverdin (fluorescent yellow-green) — and has a characteristic fruity, grape-like or corn tortilla odour due to 2-aminoacetophenone production. These combined features (Gram-negative rod, oxidase-positive, non-fermenter, characteristic smell, pigment) are classic for Pseudomonas on routine microbiology."
            },
            {
                question: "Chlamydia trachomatis cannot be detected on routine Gram staining. Which staining method demonstrates the characteristic intracytoplasmic inclusions in epithelial cells?",
                options: {
                    A: "Ziehl-Neelsen stain",
                    B: "Schaeffer-Fulton spore stain",
                    C: "Giemsa stain or direct immunofluorescence",
                    D: "Gram stain at ×1000 oil immersion",
                    E: "India ink preparation"
                },
                correctAnswer: "C",
                explanation: "Chlamydia trachomatis is an obligate intracellular bacterium with an atypical cell wall — it has no peptidoglycan in the conventional sense, making it invisible on Gram stain. It cannot be cultured on cell-free media. Giemsa stain can demonstrate the intracytoplasmic inclusions (reticulate bodies and elementary bodies) as blue-purple structures within the cytoplasm of conjunctival or genital epithelial cells. Direct immunofluorescence (DIF) using fluorescein-labelled monoclonal antibodies is more sensitive and specific. Practically, nucleic acid amplification tests (NAATs) are now the gold standard for diagnosis."
            },
            {
                question: "A Gram stain of a positive blood culture shows Gram-positive cocci in chains that are catalase-negative and beta-haemolytic, with a Lancefield group B typing result. Which organism is this?",
                options: {
                    A: "Streptococcus pyogenes",
                    B: "Streptococcus agalactiae",
                    C: "Streptococcus pneumoniae",
                    D: "Enterococcus faecalis",
                    E: "Streptococcus bovis"
                },
                correctAnswer: "B",
                explanation: "Streptococcus agalactiae is the Lancefield group B Streptococcus (GBS). It is a Gram-positive coccus forming chains, catalase-negative, and produces narrow zones of beta-haemolysis on blood agar. Key identifying features in the laboratory include the CAMP test (where it produces an arrowhead-shaped zone of enhanced haemolysis adjacent to Staphylococcus aureus), hippurate hydrolysis, and Lancefield group B antigen typing. GBS is the most common cause of neonatal septicaemia and meningitis, as well as invasive disease in pregnant women and elderly adults."
            },
            {
                question: "In a skin biopsy stained with the Wade-Fite method, macrophages are found packed with numerous acid-fast rods in a parallel 'cigarette bundle' arrangement. This finding is most characteristic of which form of leprosy?",
                options: {
                    A: "Tuberculoid leprosy",
                    B: "Indeterminate leprosy",
                    C: "Borderline tuberculoid leprosy",
                    D: "Lepromatous leprosy",
                    E: "Borderline lepromatous leprosy"
                },
                correctAnswer: "D",
                explanation: "In lepromatous leprosy (LL), the immune response is anergic — cell-mediated immunity is profoundly suppressed, allowing unrestricted bacterial multiplication. Skin biopsies show the dermis packed with foamy macrophages (Virchow cells or lepra cells) containing enormous numbers of Mycobacterium leprae. On Wade-Fite stain, the organisms appear as red acid-fast rods arranged in characteristic parallel bundles resembling 'cigarette bundles' or 'globi'. This very high bacterial index (BI 5–6+) contrasts with tuberculoid leprosy, where organisms are extremely sparse or absent (paucibacillary disease with strong cell-mediated immunity)."
            },
            {
                question: "A positive catalase test combined with Gram-positive cocci in clusters is sufficient to exclude all Streptococcus species. What additional test differentiates Staphylococcus aureus from all other staphylococci?",
                options: {
                    A: "Oxidase test",
                    B: "Coagulase test",
                    C: "Urease test",
                    D: "Indole production",
                    E: "Beta-haemolysis on blood agar"
                },
                correctAnswer: "B",
                explanation: "The coagulase test is the key differentiating test between Staphylococcus aureus (coagulase-positive) and all other clinically significant staphylococci (coagulase-negative, collectively termed 'CoNS' — including S. epidermidis, S. saprophyticus, S. haemolyticus). Coagulase converts fibrinogen to fibrin, allowing S. aureus to clot plasma. The slide coagulase test detects bound coagulase (clumping factor); the tube coagulase test detects free coagulase and is the definitive test. This single biochemical property, combined with Gram stain morphology, provides rapid, reliable identification of S. aureus — the most virulent staphylococcal species."
            },
            {
                question: "The Wheatley trichrome stain is applied to a preserved faecal smear. Which microorganisms is it specifically designed to identify?",
                options: {
                    A: "Acid-fast oocysts including Cryptosporidium",
                    B: "Intestinal protozoa including Entamoeba, Giardia, and Dientamoeba",
                    C: "Blood-borne parasites including Plasmodium and Trypanosoma",
                    D: "Spore-forming bacteria including Clostridium and Bacillus",
                    E: "Helminth eggs and larvae in stool specimens"
                },
                correctAnswer: "B",
                explanation: "Wheatley trichrome stain is a permanent staining technique applied to formalin-fixed or PVA-preserved stool smears for the identification of intestinal protozoa. The stain produces characteristic colouration: cytoplasm stains blue-green to purple, nuclei and chromatoid bars stain red-purple, and the background stains green. This allows morphological identification of Entamoeba histolytica/dispar (including nuclear morphology and chromatoid bodies), Giardia lamblia (median bodies and nuclei), Dientamoeba fragilis, and Balantidium coli. It is superior to wet preparations for identifying subtle morphological features required for speciation."
            },
            {
                question: "A Gram stain from a brain abscess in an immunocompromised patient shows thin, branching Gram-positive filaments that are weakly acid-fast on modified ZN. Which organism is most likely?",
                options: {
                    A: "Actinomyces israelii",
                    B: "Aspergillus fumigatus",
                    C: "Nocardia asteroides",
                    D: "Streptomyces species",
                    E: "Mucor species"
                },
                correctAnswer: "C",
                explanation: "Nocardia asteroides is a Gram-positive, aerobic actinobacterium that forms thin, branching filaments on Gram stain — resembling fungi but being bacteria. Its critical distinguishing feature from Actinomyces is partial (weak) acid-fastness on modified ZN (using 1% H2SO4 as decolouriser) — Actinomyces is entirely non-acid-fast. Nocardia causes pulmonary, cutaneous, or disseminated infection in immunocompromised patients, with CNS involvement (brain abscess) occurring in up to 44% of disseminated cases. The modified ZN positivity in a branching Gram-positive filamentous organism in an immunocompromised host is essentially diagnostic of Nocardia."
            },
            {
                question: "When Gram staining a clinical smear, which step — if prolonged — would result in all bacteria (both Gram-positive and Gram-negative) appearing pink?",
                options: {
                    A: "Prolonged crystal violet application",
                    B: "Prolonged Gram's iodine application",
                    C: "Prolonged acetone-alcohol decolourisation",
                    D: "Prolonged safranin counterstaining",
                    E: "Prolonged heat fixation of the smear"
                },
                correctAnswer: "C",
                explanation: "Over-decolourisation is the most critical technical error in Gram staining. If acetone-alcohol is applied for too long, even the thick peptidoglycan of Gram-positive bacteria becomes sufficiently disrupted — the cell wall dehydrates too strongly, ultimately allowing the crystal violet-iodine complex to wash out. The result is that all bacteria, regardless of Gram classification, are decolourised and take up the safranin counterstain, appearing pink. This can lead to Gram-positive organisms being falsely reported as Gram-negative. Under-decolourisation has the opposite effect — Gram-negative organisms falsely appear purple."
            },
            {
                question: "A sputum Gram stain from a patient with cystic fibrosis shows mucoid Gram-negative rods with a distinctive green pigmentation in the culture. Which organism is responsible?",
                options: {
                    A: "Haemophilus influenzae",
                    B: "Stenotrophomonas maltophilia",
                    C: "Pseudomonas aeruginosa",
                    D: "Burkholderia cepacia complex",
                    E: "Achromobacter xylosoxidans"
                },
                correctAnswer: "C",
                explanation: "Pseudomonas aeruginosa is one of the most important pathogens in cystic fibrosis lung disease. In cystic fibrosis patients, it commonly adopts a mucoid phenotype due to overproduction of alginate exopolysaccharide, which helps it evade host immune defences and establish a chronic biofilm infection. On Gram stain, it appears as Gram-negative rods. Cultures characteristically produce the blue-green pigment pyocyanin (and the yellow-green fluorescent siderophore pyoverdin), which gives colonies and surrounding agar a distinctive green colouration visible to the naked eye. Chronic mucoid P. aeruginosa infection is associated with progressive lung function decline."
            },
            {
                question: "A Gram stain from pleural fluid in a patient with empyema shows Gram-positive cocci in pairs and short chains. The organism is catalase-negative, beta-haemolytic, and Lancefield group A. Which organism is responsible?",
                options: {
                    A: "Streptococcus agalactiae",
                    B: "Streptococcus pneumoniae",
                    C: "Streptococcus pyogenes",
                    D: "Enterococcus faecalis",
                    E: "Staphylococcus aureus"
                },
                correctAnswer: "C",
                explanation: "Streptococcus pyogenes (Group A Streptococcus, GAS) is a Gram-positive coccus forming chains, catalase-negative (all streptococci), and produces wide zones of beta-haemolysis on blood agar. It is Lancefield group A and is inhibited by the bacitracin disc (0.04 units) — a key diagnostic test. GAS is the causative agent of streptococcal pharyngitis, scarlet fever, erysipelas, necrotising fasciitis, streptococcal toxic shock syndrome, and post-streptococcal complications including rheumatic fever and post-streptococcal glomerulonephritis. Empyema thoracis is a recognised complication."
            },
            {
                question: "Which of the following correctly explains why Mycobacterium species require heating during the Ziehl-Neelsen staining procedure?",
                options: {
                    A: "Heat kills the organisms, making them safe to handle",
                    B: "Heat fixes the smear to the slide more effectively than chemical fixation",
                    C: "Heat is required to drive carbol-fuchsin through the waxy mycolic acid-rich cell wall",
                    D: "Heat denatures enzymes that would otherwise degrade the crystal violet",
                    E: "Heat activates the iodine mordant to form the CV-I complex"
                },
                correctAnswer: "C",
                explanation: "The mycolic acid-rich cell wall of Mycobacterium species is so hydrophobic and impermeable that aqueous stains cannot penetrate it at room temperature. Heating the carbol-fuchsin-flooded slide to near-boiling (steam is visible) for 3–5 minutes expands the lipid components of the cell wall, temporarily increasing its permeability and allowing the hydrophobic fuchsin dye to penetrate and bind to the mycolic acids. Once the slide cools, the mycolic acids contract around the dye, trapping it irreversibly. The Kinyoun ('cold') method uses a higher concentration of carbol-fuchsin and detergent (Tergitol) to achieve penetration without heating."
            },
            {
                question: "A Gram stain from a CSF sample collected from a neonate shows short, Gram-positive rods singly and in pairs. The organism grows on blood agar with narrow zones of beta-haemolysis and is CAMP-test positive. Which organism is this?",
                options: {
                    A: "Listeria monocytogenes",
                    B: "Clostridium perfringens",
                    C: "Bacillus cereus",
                    D: "Corynebacterium jeikeium",
                    E: "Erysipelothrix rhusiopathiae"
                },
                correctAnswer: "A",
                explanation: "Listeria monocytogenes appears as short Gram-positive rods (sometimes appearing coccobacillary or even diphtheroids) on Gram stain, particularly in CSF. It produces narrow zones of beta-haemolysis on blood agar. The CAMP test is positive — Listeria produces a synergistic haemolytic reaction with Staphylococcus aureus, producing a rectangular (rather than the triangular arrow-head of Group B Streptococcus) enhanced haemolysis zone. In the context of neonatal meningitis, a Gram-positive rod in CSF should immediately raise suspicion for Listeria, particularly in the first month of life or in immunocompromised adults."
            },
            {
                question: "The 'quellung reaction' (capsule swelling reaction) is used to serotype encapsulated bacteria. Which organisms is this classically used for?",
                options: {
                    A: "Staphylococcus aureus and Streptococcus pyogenes",
                    B: "Streptococcus pneumoniae, Haemophilus influenzae, and Neisseria meningitidis",
                    C: "Mycobacterium tuberculosis and Nocardia asteroides",
                    D: "Clostridium perfringens and Bacillus anthracis",
                    E: "Escherichia coli and Klebsiella pneumoniae"
                },
                correctAnswer: "B",
                explanation: "The quellung reaction (German: 'Quellung' = swelling) involves mixing the organism with type-specific capsular antibody and observing under the microscope. When the antibody binds to the polysaccharide capsule, the capsule appears to swell and becomes sharply refractile — visible as a prominent halo. This swelling is actually the antibody-capsule complex becoming more visible rather than true enlargement. It is classically used to serotype Streptococcus pneumoniae (90+ serotypes), Haemophilus influenzae (types a–f), and Neisseria meningitidis (serogroups A, B, C, W, Y, X). The technique can be performed directly on clinical specimens such as CSF."
            },
            {
                question: "A microbiologist reports a Gram stain result as 'Gram-negative coccobacilli — suggest sending paired specimen.' The sample is from a patient with undulant fever following consumption of unpasteurised goat's cheese. Which organism is most likely?",
                options: {
                    A: "Yersinia enterocolitica",
                    B: "Brucella melitensis",
                    C: "Campylobacter jejuni",
                    D: "Listeria monocytogenes",
                    E: "Francisella tularensis"
                },
                correctAnswer: "B",
                explanation: "Brucella melitensis is a tiny, Gram-negative coccobacillus responsible for brucellosis, the most common zoonosis globally. Transmission occurs through consumption of unpasteurised dairy products (particularly from goats and sheep), direct animal contact, or laboratory exposure. The clinical presentation of undulant (relapsing) fever, night sweats, and arthralgia in someone with epidemiological exposure to goat dairy products is characteristic. Brucella is a significant laboratory hazard and must be handled in a Class 2 cabinet. The microbiologist's caution regarding 'paired specimen' reflects the need for serology (Rose Bengal agglutination, SAT) alongside culture."
            },
            {
                question: "In the Ziehl-Neelsen stain, what is the counterstain used and what does it stain?",
                options: {
                    A: "Safranin — stains the background and non-acid-fast organisms pink",
                    B: "Methylene blue — stains the background and non-acid-fast organisms blue",
                    C: "Crystal violet — stains the background purple",
                    D: "Malachite green — stains vegetative bacterial cells red",
                    E: "Eosin — stains host cells and non-acid-fast organisms pink"
                },
                correctAnswer: "B",
                explanation: "In the Ziehl-Neelsen staining procedure, methylene blue (or occasionally malachite green) is used as the counterstain. After the carbol-fuchsin primary stain is applied and the acid-fast organisms have fixed the dye, the non-acid-fast organisms and background cellular material are decolourised with acid-alcohol. Methylene blue is then applied to stain these decolourised structures blue, providing contrast against the red acid-fast bacilli. The result is a preparation showing bright red-pink AFB against a pale to medium blue background of non-acid-fast bacteria, inflammatory cells, and cellular debris."
            }
        ]
        
        
    },

// Questions extracted from uploaded PowerPoint files
// Organised by subtopic — paste each array into your questionSets object
    prepWeek: {
"medical_ethics": [
    {
        question: "A concerned family call the GP of their 76-year-old mother, diagnosed with dementia 5 years ago. The car is the only means of transport for her frail husband. She is taking hours for short journeys and there are scratches and dents on the car with no explanation.\n\nWhat is the best course of action?",
        options: {
            A: "Decline to speak with them due to confidentiality",
            B: "Meet with the patient and seek their understanding",
            C: "Inform the DVLA as soon as possible",
            D: "Seek a court order to ban them from driving",
            E: "Ask the patient to stop driving immediately"
        },
        correctAnswer: "B",
        explanation: "The first step is to meet with the patient and explore their insight into the situation. Patients with conditions such as dementia have an obligation to inform the DVLA, and the doctor may need to do so if the patient declines \u2014 but this should follow an attempt to engage with the patient directly. Informing the DVLA immediately or seeking a court order would be premature without first discussing the situation with the patient."
    },
    {
        question: "Which case has been instrumental to the development of case law around informed consent?\n\nWhich of the following is the correct answer?",
        options: {
            A: "Glasgow Health Board v Doogan and Wood 2014",
            B: "Montgomery vs Lanarkshire Health Board 2015",
            C: "ABC vs St Georges Healthcare 2017",
            D: "CPA vs Criminal Injuries Compensation Board 2005",
            E: "Smith vs Cambridge University Trust 2018"
        },
        correctAnswer: "B",
        explanation: "The Montgomery case (2015) established that clinicians have a legal obligation to ensure patients are made aware of all material risks associated with their proposed treatment. A material risk is any risk that a reasonable person in the patient's position would attach significance to. This replaced the previous Bolam standard for consent and transformed informed consent law in the UK."
    },
    {
        question: "A medical student is asked about the meaning of justice in ethical terms.\n\nWhich of the following best describes the ethical principle of justice?",
        options: {
            A: "Making sure that people are punished for wrongdoing and ensuring the fair distribution of resources",
            B: "Treating people equally and making sure that people are punished for wrongdoing",
            C: "Ensuring that resources go to those in greatest need",
            D: "Making sure that resources are distributed so the worst off get the greatest amount",
            E: "Treating people equally and ensuring the fair distribution of resources"
        },
        correctAnswer: "E",
        explanation: "Justice in biomedical ethics refers to fairness \u2014 treating people equally and ensuring the fair distribution of resources. It is one of the four pillars of medical ethics (alongside autonomy, beneficence, and non-maleficence). It does not primarily concern punishment for wrongdoing, which falls within the domain of legal justice rather than medical ethics."
    },
    {
        question: "What change did the Organ Donation (Deemed Consent) Act 2020 make in England?\n\nWhich of the following correctly describes the change introduced?",
        options: {
            A: "Consent for organ donation is now presumed \u2014 an opt-out system",
            B: "Consent for organ donation is now an opt-in system",
            C: "There was no change",
            D: "Individuals need to make their wishes known and sign up to the organ donation register",
            E: "Families are excluded from decisions about organ donation"
        },
        correctAnswer: "A",
        explanation: "The Organ Donation (Deemed Consent) Act 2020 introduced a soft opt-out system in England. Consent for organ donation is now presumed unless the individual has registered an objection. Families are still consulted and can raise objections on behalf of the deceased. This mirrors similar legislation already in place in Wales and Scotland."
    },
    {
        question: "An 85-year-old man with end-stage COPD is admitted with pneumonia. The team believes CPR would not be appropriate due to multi-organ failure. He does not have decision-making capacity due to delirium.\n\nWhat is the most appropriate action?",
        options: {
            A: "Apply for a court ruling",
            B: "Wait for the patient to regain capacity",
            C: "Proceed with CPR regardless of prognosis",
            D: "Make a DNACPR decision based on best interests and discuss with family",
            E: "Withhold CPR and inform the family after the fact"
        },
        correctAnswer: "D",
        explanation: "When a patient lacks capacity, DNACPR decisions should be made by the medical team based on best interests \u2014 not by the family (who are consulted, not decision-makers). The Tracy and Winspear cases established that patients and families have a right to be consulted about DNACPR decisions. The decision must be documented. Withholding CPR without informing the family, or applying for a court order, would not be appropriate in this context."
    },
    {
        question: "A 72-year-old man with mild dementia refuses a blood test that his doctor thinks is necessary. He understands the information, can explain the risks, and communicates a clear decision.\n\nWhat is the most appropriate next step?",
        options: {
            A: "Proceed with the blood test in his best interests",
            B: "Assess capacity again because the decision is unwise",
            C: "Seek a court order",
            D: "Respect the patient's decision",
            E: "Ask family members to consent on his behalf"
        },
        correctAnswer: "D",
        explanation: "Under the Mental Capacity Act (2005), Principle 3 states that a person must not be treated as lacking capacity merely because they make an unwise decision. This patient has demonstrated all four elements of capacity: understanding, retention, weighing up, and communicating his decision. His mild dementia alone does not negate capacity. An unwise decision by a capacitous patient must be respected."
    },
    {
        question: "A 45-year-old woman is admitted after a paracetamol overdose and refuses treatment. She can repeat information about treatment but is unable to compare risks and benefits or explain her reasoning. There is evidence of acute emotional distress affecting her thinking.\n\nAccording to the MCA, which element of the capacity assessment is impaired?",
        options: {
            A: "Weighing information",
            B: "Retention",
            C: "Understanding",
            D: "Communication",
            E: "Presumption of capacity"
        },
        correctAnswer: "A",
        explanation: "The four functional elements of capacity under the MCA (2005) are: understanding information, retaining it, weighing it up (using it to arrive at a decision), and communicating a decision. This patient can understand and retain the information (she can repeat it), but she cannot weigh up the risks and benefits. The impaired element is therefore 'weighing information.' Emotional distress can specifically impair this element of the capacity assessment."
    },
    {
        question: "Mr Alibi is admitted having fallen and has pain in his right hip. He is refusing to have an X-ray. He is known to have dementia.\n\nWhich of the following best describes the 'causative nexus' in this situation?",
        options: {
            A: "The patient's refusal of a necessary medical investigation",
            B: "The diagnosis of dementia",
            C: "The link between the patient's dementia and his inability to weigh up the information",
            D: "The fact that the patient's decision appears unwise to the clinical team",
            E: "The patient's inability to communicate his decision clearly to the staff"
        },
        correctAnswer: "C",
        explanation: "The causative nexus is the link connecting the diagnostic test (does the person have an impairment of the mind or brain?) and the functional test (is the person unable to make the decision?). It must be established that the inability to make the decision is caused by the identified impairment. In this case, the causative nexus is the link between the patient's dementia and his inability to weigh up the information \u2014 not simply the diagnosis itself, nor the refusal alone."
    },
    {
        question: "A 54-year-old woman with severe osteoarthritis of the knee is offered total knee replacement. Recovery may take several months. She says her main concern is being able to kneel in her garden and remain independent at home.\n\nWhat is the most appropriate next step?",
        options: {
            A: "Recommend surgery because evidence shows it is the most effective treatment for pain relief",
            B: "Explain that patient preferences should not override evidence-based recommendations",
            C: "Explore how the available treatment options align with her personal goals and priorities",
            D: "Advise her to delay treatment until she accepts the recommended surgical plan",
            E: "Refer her for psychological assessment because she appears reluctant to accept treatment"
        },
        correctAnswer: "C",
        explanation: "Shared decision-making, underpinned by the Montgomery ruling, requires clinicians to explore the patient's individual goals, values, and priorities before recommending a treatment plan. This patient has expressed specific functional priorities that may or may not align with the outcomes of surgery. The next step is to explore how the treatment options \u2014 including surgery and non-surgical alternatives \u2014 match her goals, rather than simply recommending the most clinically effective option."
    },
],

"endocrinology": [
    {
        question: "A 42-year-old woman presents with palpitations, weight loss, and heat intolerance.\n\nWhich of the following thyroid hormone concentrations are seen in primary hyperthyroidism?",
        options: {
            A: "Undetectable TSH, High T4 and High T3",
            B: "High TSH, High T4 and High T3",
            C: "Undetectable TSH, Normal T4 and High T3",
            D: "Low TSH, Normal T4 and Normal T3",
            E: "Low TSH, Low T4 and Low T3"
        },
        correctAnswer: "A",
        explanation: "In primary hyperthyroidism, the thyroid gland itself is overactive, producing excess T4 and T3. This excess thyroid hormone exerts negative feedback on the pituitary, suppressing TSH to undetectable levels. Low TSH with normal T4/T3 suggests subclinical hyperthyroidism. High TSH with high T4/T3 suggests a TSH-secreting pituitary adenoma (TSHoma). Undetectable TSH with normal T4 and high T3 only suggests T3 toxicosis."
    },
    {
        question: "A patient with hyperthyroidism undergoes a radionuclide thyroid scan.\n\nWhat condition causes homogeneous radionuclide uptake throughout the thyroid gland?",
        options: {
            A: "Thyroiditis",
            B: "Graves' thyrotoxicosis",
            C: "Thyroid cancer",
            D: "Toxic nodule",
            E: "Multinodular toxic goitre"
        },
        correctAnswer: "B",
        explanation: "Graves' disease causes diffuse, homogeneous radionuclide uptake because TSH receptor antibodies stimulate the entire thyroid gland uniformly. Thyroiditis shows low or absent uptake (destroyed follicles cannot concentrate iodine). A toxic nodule shows a discrete 'hot' area. Thyroid cancer typically shows a 'cold' nodule. Multinodular toxic goitre shows multiple discrete areas of uptake."
    },
    {
        question: "A medical student is revising the anatomy of the pituitary gland.\n\nWhich of the following hormones are stored in the posterior pituitary gland?",
        options: {
            A: "ACTH",
            B: "Oxytocin",
            C: "Prolactin",
            D: "TSH",
            E: "GH"
        },
        correctAnswer: "B",
        explanation: "The posterior pituitary (neurohypophysis) stores and releases oxytocin and antidiuretic hormone (ADH/vasopressin). These are synthesised in the hypothalamus and transported along axons to the posterior pituitary for storage. ACTH, prolactin, TSH, and GH are all produced and secreted by the anterior pituitary (adenohypophysis)."
    },
    {
        question: "A 45-year-old man presents with enlarging hands and feet, excessive sweating, and headaches. He is diagnosed with acromegaly.\n\nWhat symptom is NOT a feature of acromegaly?",
        options: {
            A: "Sweating",
            B: "Headaches",
            C: "Interdental separation",
            D: "Increased shoe or ring size",
            E: "Thinning of skin"
        },
        correctAnswer: "E",
        explanation: "Thinning of skin is a feature of Cushing's syndrome (excess cortisol), not acromegaly. Acromegaly (excess GH/IGF-1) causes thickening of skin, sweating, headaches, coarsening of facial features, macroglossia, prognathism, interdental separation, and acral enlargement. Carpal tunnel syndrome and sleep apnoea are also associated features."
    },
    {
        question: "A 35-year-old woman presents with fatigue, weight loss, postural hypotension, and hyperpigmentation of the skin creases. Investigations confirm Addison's disease.\n\nWhich of the following are laboratory features of Addison's disease?",
        options: {
            A: "Hypokalaemia",
            B: "Hypocalcaemia",
            C: "Hyponatraemia",
            D: "Hypernatraemia",
            E: "Neutropenia"
        },
        correctAnswer: "C",
        explanation: "Hyponatraemia is present in approximately 90% of cases of Addison's disease at diagnosis, caused by aldosterone deficiency leading to sodium wasting by the kidneys. Other characteristic findings include hyperkalaemia (65% of cases), mild hypercalcaemia (occasionally), and eosinophilia. Hypernatraemia and hypokalaemia would be expected in excess mineralocorticoid states such as Conn's syndrome."
    },
    {
        question: "A 28-year-old woman presents with irregular periods, weight gain, and acne. Blood tests are taken as part of a PCOS workup.\n\nWhich of the following is NOT a laboratory feature of PCOS?",
        options: {
            A: "High LH",
            B: "High testosterone",
            C: "High androgens",
            D: "Low SHBG",
            E: "Low insulin"
        },
        correctAnswer: "E",
        explanation: "Approximately 70% of women with PCOS are insulin resistant, resulting in hyperinsulinaemia (high insulin), not low insulin. Hyperinsulinaemia contributes to increased androgen production by the theca cells. Other characteristic laboratory features include elevated testosterone, elevated androgens, low SHBG, and a raised LH:FSH ratio."
    },
    {
        question: "A 72-year-old man with type 2 diabetes is admitted with confusion and a blood glucose of 42 mmol/L. He is not ketotic.\n\nWhat is NOT a feature of hyperosmolar hyperglycaemic syndrome (HHS)?",
        options: {
            A: "Hyperglycaemia",
            B: "Hypernatraemia",
            C: "Blood ketones",
            D: "Uraemia",
            E: "Glycosuria"
        },
        correctAnswer: "C",
        explanation: "Significant ketonaemia is a feature of DKA, not HHS. HHS occurs predominantly in type 2 diabetes where sufficient endogenous insulin remains to prevent ketogenesis but not hyperglycaemia. Features of HHS include marked hyperglycaemia, hyperosmolality, dehydration, uraemia, corrected hypernatraemia, and glycosuria. The absence of significant ketosis distinguishes it from DKA."
    },
    {
        question: "A patient is found to have hypercalcaemia on routine bloods.\n\nWhich of the following scenarios is a feature of primary hyperparathyroidism?",
        options: {
            A: "High PTH, high serum calcium, high urine calcium",
            B: "Low PTH, high serum calcium, high urine calcium",
            C: "High PTH, high serum calcium, low urine calcium",
            D: "Normal PTH, normal serum calcium, normal urine calcium",
            E: "Normal PTH, high serum calcium, low urine calcium"
        },
        correctAnswer: "A",
        explanation: "Primary hyperparathyroidism is characterised by autonomous PTH secretion. PTH elevates serum calcium by increasing bone resorption, renal tubular calcium reabsorption, and intestinal absorption via vitamin D activation. However, the hypercalcaemia overwhelms renal reabsorptive capacity, leading to hypercalciuria. Low PTH with high calcium suggests malignancy. Low urine calcium with high PTH and high calcium suggests familial hypocalciuric hypercalcaemia."
    },
    {
        question: "During a pharmacology tutorial, a student is asked about parathyroid hormone actions.\n\nWhat is NOT an action of parathyroid hormone?",
        options: {
            A: "Decreased calcium reabsorption",
            B: "Increased calcium absorption",
            C: "Increased renal tubular calcium reabsorption",
            D: "Increased vitamin D hydroxylation",
            E: "Increased bone turnover"
        },
        correctAnswer: "A",
        explanation: "PTH increases renal tubular calcium reabsorption (Option C), not decreases it. PTH acts on the thick ascending limb and distal convoluted tubule to promote calcium reabsorption. Other actions include stimulating osteoclastic bone resorption, increasing renal 1-alpha hydroxylation of vitamin D, and increasing phosphaturia. Option B \u2014 decreased calcium reabsorption \u2014 is the opposite of what PTH does."
    },
    {
        question: "A 30-year-old woman with gestational diabetes is being counselled about blood glucose targets.\n\nWhich of the following are the plasma glucose (mmol/L) targets for diabetes in pregnancy?",
        options: {
            A: "Fasting <7.8, 2hr post-prandial <11.1",
            B: "Fasting <5.6, 2hr post-prandial <7.8",
            C: "Fasting <6, 2hr post-prandial <8",
            D: "Fasting <7, 2hr post-prandial <6",
            E: "Fasting <5, 2hr post-prandial <7"
        },
        correctAnswer: "B",
        explanation: "Glucose targets in diabetes in pregnancy are much stricter than outside of pregnancy due to risks of macrosomia, stillbirth, and neonatal hypoglycaemia. The NICE targets are fasting glucose <5.3 mmol/L and 2-hour post-meal glucose <7.8 mmol/L. A useful mnemonic from the lecture is '5, 6, 7, 8'. Option A describes non-pregnant diagnostic thresholds for gestational diabetes screening."
    },
    {
        question: "A 25-year-old man presents with polyuria and polydipsia. His urine osmolality remains low after a water deprivation test, and there is no significant rise after desmopressin.\n\nWhich of the following is the underlying problem in neurogenic (central) diabetes insipidus?",
        options: {
            A: "Lack of prolactin",
            B: "Excess of vasopressin",
            C: "Excess of oxytocin",
            D: "Lack of vasopressin",
            E: "Excess of prolactin"
        },
        correctAnswer: "D",
        explanation: "Central (neurogenic) diabetes insipidus results from a deficiency of ADH/vasopressin, produced in the hypothalamus and stored in the posterior pituitary. Without ADH, the collecting ducts cannot reabsorb water, leading to massive dilute polyuria. In this case, the failure to concentrate urine after desmopressin (synthetic ADH) suggests nephrogenic DI (receptor resistance), while a positive response would confirm central DI."
    },
    {
        question: "A couple presents to a fertility clinic after 18 months of trying to conceive.\n\nWhich of the following is NOT part of a first-line couple's fertility assessment?",
        options: {
            A: "Pelvic ultrasound",
            B: "Male sperm testing",
            C: "Female day 21 blood tests for progesterone",
            D: "Male blood tests",
            E: "HyCoSy (tubal patency test)"
        },
        correctAnswer: "D",
        explanation: "In the initial fertility assessment, the only test required from the male partner in the first instance is a semen analysis (sperm testing). Male blood tests (FSH, LH, testosterone) are only ordered as second-line investigations if the semen analysis is abnormal. Female investigations include pelvic USS, day 21 progesterone (to confirm ovulation), and tubal patency assessment. Male blood tests are therefore NOT part of the first-line workup."
    },
],

"pharmacology": [
    {
        question: "A 54-year-old man has a history of severe anaphylactic reaction to penicillin. He requires antibiotic treatment for sepsis of uncertain cause.\n\nWhich antibiotic is most likely to be safe in severe penicillin allergy?",
        options: {
            A: "Ciprofloxacin",
            B: "Cefotaxime",
            C: "Co-amoxiclav",
            D: "Ertapenem",
            E: "Tazobactam"
        },
        correctAnswer: "A",
        explanation: "Ciprofloxacin is a fluoroquinolone with no structural similarity to penicillins and is safe in severe penicillin allergy. Cefotaxime (cephalosporin), co-amoxiclav (penicillin + beta-lactamase inhibitor), ertapenem (carbapenem), and tazobactam (beta-lactamase inhibitor combined with piperacillin, a penicillin) all belong to the beta-lactam family and carry cross-reactivity risk in severe anaphylaxis."
    },
    {
        question: "A 4-year-old boy is found to have pneumonia requiring antibiotic treatment.\n\nWhich antibiotic is contraindicated at this age?",
        options: {
            A: "Amoxicillin",
            B: "Doxycycline",
            C: "Clarithromycin",
            D: "Co-amoxiclav",
            E: "Cefotaxime"
        },
        correctAnswer: "B",
        explanation: "Tetracyclines (including doxycycline) are contraindicated in children under 12 years because they chelate calcium and deposit in developing teeth and bone, causing permanent tooth discolouration and potential effects on bone growth. They are also contraindicated in pregnancy. Amoxicillin, cefotaxime, clarithromycin, and co-amoxiclav are all appropriate for use in children when clinically indicated."
    },
    {
        question: "A 29-year-old man has been prescribed antibiotics and asks if he can drink alcohol during his treatment.\n\nWhich antibiotic should NOT be taken with alcohol?",
        options: {
            A: "Amoxicillin",
            B: "Clarithromycin",
            C: "Co-amoxiclav",
            D: "Trimethoprim",
            E: "Metronidazole"
        },
        correctAnswer: "E",
        explanation: "Metronidazole inhibits acetaldehyde dehydrogenase, causing accumulation of acetaldehyde when alcohol is consumed. This produces a disulfiram-like reaction: flushing, nausea, vomiting, tachycardia, and hypotension. Patients must be advised to avoid all alcohol during treatment and for 48 hours after the course. The same interaction occurs with tinidazole."
    },
    {
        question: "A 47-year-old woman is being treated with once-daily gentamicin for pyelonephritis. Her first dose was given 21 hours ago.\n\nWhich test should be performed 18-24 hours after the first dose of gentamicin?",
        options: {
            A: "Audiometry",
            B: "C-reactive protein concentration",
            C: "Estimated glomerular filtration rate",
            D: "Serum gentamicin concentration",
            E: "Serum creatinine concentration"
        },
        correctAnswer: "D",
        explanation: "For once-daily gentamicin dosing, a serum gentamicin concentration measured 18-24 hours after the first dose is used to guide further dosing. The result is plotted on a Hartford nomogram to determine whether the dosing interval should be adjusted. Gentamicin has a narrow therapeutic index with nephrotoxicity and ototoxicity as major risks. Audiometry may be used in long-term monitoring but is not required at this early stage."
    },
    {
        question: "A 63-year-old woman with rheumatoid arthritis develops pancytopenia, mucositis, and new renal and liver impairment. Her drug chart shows methotrexate prescribed daily instead of weekly.\n\nWhat is the most appropriate immediate treatment for her methotrexate toxicity?",
        options: {
            A: "Activated charcoal",
            B: "Folinic acid",
            C: "Folic acid",
            D: "Granulocyte colony stimulating factor",
            E: "Haemodialysis"
        },
        correctAnswer: "B",
        explanation: "Folinic acid (leucovorin) is the specific antidote for methotrexate toxicity. Unlike folic acid, folinic acid bypasses the dihydrofolate reductase (DHFR) enzyme that methotrexate inhibits, directly replenishing the cellular folate pool and rescuing normal cells. Folic acid cannot bypass the inhibited enzyme and is ineffective in acute toxicity. G-CSF may be used for severe neutropenia but is not the primary antidote."
    },
    {
        question: "A 66-year-old woman with chronic pain takes amitriptyline, ibuprofen, morphine, omeprazole, and senna.\n\nWhich of these medications acts by inhibiting a synthetic enzyme?",
        options: {
            A: "Amitriptyline",
            B: "Senna",
            C: "Morphine",
            D: "Omeprazole",
            E: "Ibuprofen"
        },
        correctAnswer: "E",
        explanation: "Ibuprofen (NSAID) inhibits cyclo-oxygenase (COX-1 and COX-2) enzymes involved in prostaglandin synthesis. Omeprazole (PPI) inhibits H+/K+ ATPase, the enzyme responsible for gastric acid production. Both act by inhibiting enzyme function. Amitriptyline blocks monoamine reuptake transporters, morphine is an opioid receptor agonist, and senna is a stimulant laxative acting on colonic motility."
    },
    {
        question: "A 73-year-old woman is prescribed oxybutynin for urinary urgency and urge incontinence.\n\nWhat is the mechanism by which oxybutynin improves her symptoms?",
        options: {
            A: "Antagonism at the muscarinic M3 receptor",
            B: "Antagonism at the alpha-1 adrenoceptor",
            C: "Agonism of the beta-2 adrenoceptor",
            D: "Antagonism at the nicotinic acetylcholine receptor",
            E: "Inhibition of 5-alpha reductase"
        },
        correctAnswer: "A",
        explanation: "The bladder detrusor muscle contracts via muscarinic M3 receptors stimulated by acetylcholine. Oxybutynin is an antimuscarinic that competitively antagonises M3 receptors in the bladder, reducing detrusor overactivity and increasing bladder capacity. M3 receptor blockade also causes anticholinergic side effects: dry mouth, constipation, blurred vision, and urinary retention."
    },
    {
        question: "A 48-year-old man post-NSTEMI on aspirin, clopidogrel, atorvastatin, bisoprolol, and ramipril is found to be hyperkalaemic.\n\nWhich drug is most likely causing the hyperkalaemia?",
        options: {
            A: "Aspirin",
            B: "Atorvastatin",
            C: "Bisoprolol",
            D: "Clopidogrel",
            E: "Ramipril"
        },
        correctAnswer: "E",
        explanation: "ACE inhibitors such as ramipril commonly cause hyperkalaemia by reducing angiotensin II production, which reduces aldosterone secretion, decreasing renal potassium excretion. This can be clinically significant, particularly in renal impairment or with other potassium-sparing drugs. Statins and clopidogrel do not cause hyperkalaemia. Beta-blockers and aspirin can mildly increase potassium but this is rarely significant."
    },
    {
        question: "A 61-year-old man with benign prostatic enlargement is started on tamsulosin.\n\nWhat side effect is most likely to occur when starting this drug?",
        options: {
            A: "Bronchospasm",
            B: "Gynaecomastia",
            C: "Erectile dysfunction",
            D: "Postural hypotension",
            E: "Prostate cancer"
        },
        correctAnswer: "D",
        explanation: "Tamsulosin is a selective alpha-1 adrenoceptor antagonist. By blocking alpha-1 receptors in the bladder neck and prostate, it relaxes smooth muscle and improves urinary flow. However, alpha-1 receptors are also present in vascular smooth muscle, and their blockade causes vasodilation \u2014 leading to postural (orthostatic) hypotension, particularly on the first dose. Patients should be warned to rise slowly."
    },
    {
        question: "A 33-year-old man with severe renal impairment requires antibiotic treatment for sepsis.\n\nWhich antibiotic can generally be used without dose reduction in severe renal impairment?",
        options: {
            A: "Benzylpenicillin",
            B: "Co-amoxiclav",
            C: "Gentamicin",
            D: "Metronidazole",
            E: "Vancomycin"
        },
        correctAnswer: "D",
        explanation: "Metronidazole is predominantly hepatically metabolised and can generally be given without dose reduction in renal impairment. Gentamicin, vancomycin, benzylpenicillin, and co-amoxiclav are all renally excreted and require dose reduction or extended dosing intervals in renal impairment to avoid accumulation and toxicity."
    },
    {
        question: "A 56-year-old woman with type 2 diabetes and poor glycaemic control has a BMI of 27 kg/m2 and normal renal function. Her GP wants to start pharmacological therapy.\n\nWhich drug would be most appropriate initial therapy?",
        options: {
            A: "Acarbose",
            B: "Gliclazide",
            C: "Insulin",
            D: "Metformin",
            E: "Sitagliptin"
        },
        correctAnswer: "D",
        explanation: "Metformin is the first-line pharmacological treatment for type 2 diabetes per NICE guidelines unless contraindicated. It is weight-neutral or causes mild weight loss, does not cause hypoglycaemia as monotherapy, and has a favourable cardiovascular risk profile. Her normal renal function and BMI make metformin an ideal choice. Gliclazide (sulphonylurea) carries hypoglycaemia risk; insulin is not first-line in type 2 diabetes."
    },
    {
        question: "A 45-year-old man with type 2 diabetes is taking metformin.\n\nWhat is the main mechanism by which metformin lowers blood glucose concentration?",
        options: {
            A: "Increased pancreatic insulin secretion",
            B: "Increased peripheral insulin sensitivity",
            C: "Reduced hepatic glucose output",
            D: "Increased urinary glucose excretion",
            E: "Reduced intestinal glucose absorption"
        },
        correctAnswer: "C",
        explanation: "Metformin's primary mechanism is inhibition of hepatic gluconeogenesis \u2014 it activates AMPK in the liver, which suppresses hepatic glucose output. This reduces fasting blood glucose without stimulating insulin secretion (no hypoglycaemia risk). SGLT2 inhibitors increase urinary glucose excretion; alpha-glucosidase inhibitors reduce intestinal glucose absorption; thiazolidinediones increase peripheral insulin sensitivity."
    },
    {
        question: "A 78-year-old man is admitted with loss of consciousness and blood glucose of 1.2 mmol/L. His medications include bendroflumethiazide, bisoprolol, gliclazide, metformin, and prednisolone.\n\nWhich drug is most likely to have caused his hypoglycaemia?",
        options: {
            A: "Bendroflumethiazide",
            B: "Bisoprolol",
            C: "Gliclazide",
            D: "Metformin",
            E: "Prednisolone"
        },
        correctAnswer: "C",
        explanation: "Gliclazide is a sulphonylurea that stimulates insulin secretion from pancreatic beta cells independently of blood glucose levels. This makes it commonly associated with hypoglycaemia, particularly in elderly patients or those who miss meals. Metformin does not cause hypoglycaemia as monotherapy. Prednisolone typically raises blood glucose. Bisoprolol can mask hypoglycaemia symptoms but does not cause it."
    },
    {
        question: "A 50-year-old man with type 2 diabetes on metformin 1g twice daily has an eGFR of 44 mL/min/1.73m2.\n\nWhat complication is more likely if metformin is continued in the context of renal impairment?",
        options: {
            A: "Lactic acidosis",
            B: "Hypersensitivity reaction",
            C: "Diabetic ketoacidosis",
            D: "Megaloblastic anaemia",
            E: "Respiratory alkalosis"
        },
        correctAnswer: "A",
        explanation: "Metformin is renally cleared. In renal impairment, metformin accumulates, inhibiting mitochondrial complex I and impairing aerobic glucose metabolism, leading to lactic acidosis \u2014 a rare but potentially fatal complication. NICE advises dose reduction when eGFR falls to 30-45 mL/min and stopping metformin when eGFR <30 mL/min. This patient's eGFR of 44 warrants dose review."
    },
    {
        question: "A patient prescribed aspirin develops epigastric pain and takes antacids, raising the stomach pH.\n\nWhat will happen to the rate of aspirin absorption?",
        options: {
            A: "The rate of absorption will increase",
            B: "Absorption is unaffected by gastric pH",
            C: "The rate of absorption will not change",
            D: "The rate of absorption will decrease"
        },
        correctAnswer: "D",
        explanation: "Aspirin is a weak acid. In the acidic stomach (pH ~2), aspirin remains predominantly non-ionised (lipid-soluble) and is readily absorbed. When antacids raise stomach pH, more aspirin becomes ionised (charged) \u2014 the ionised form cannot cross the lipid membrane. Therefore gastric absorption decreases. This is an important pharmacokinetic principle based on Henderson-Hasselbalch: weak acids are better absorbed in acidic environments."
    },
    {
        question: "Two drugs are prescribed at the same dose. Drug A has 95% first-pass metabolism. Drug B has 5% first-pass metabolism.\n\nWhich drug will have the higher bioavailability?",
        options: {
            A: "Drug A \u2014 5% bioavailability",
            B: "Drug B \u2014 95% bioavailability",
            C: "Drug B \u2014 5% bioavailability",
            D: "Drug A \u2014 95% bioavailability"
        },
        correctAnswer: "B",
        explanation: "First-pass (hepatic) metabolism refers to the proportion of an orally administered drug that is metabolised by the liver before reaching the systemic circulation. Drug A has 95% first-pass metabolism \u2014 only 5% of the dose reaches systemic circulation (bioavailability = 5%). Drug B has only 5% first-pass metabolism \u2014 95% reaches systemic circulation. High first-pass metabolism explains why drugs like morphine and GTN require much higher oral doses than parenteral doses."
    },
    {
        question: "A 43-year-old man with hepatic cancer is prescribed oral morphine. His twin brother with lung cancer and normal liver function is prescribed the same drug.\n\nHow should the dose differ?",
        options: {
            A: "Prescribe the hepatic cancer patient a higher dose",
            B: "Prescribe the hepatic cancer patient a lower dose",
            C: "Prescribe both patients the same dose",
            D: "Prescribe the hepatic cancer patient a non-oral route only"
        },
        correctAnswer: "B",
        explanation: "Morphine undergoes extensive first-pass hepatic metabolism. In a patient with hepatic cancer and impaired liver function, less morphine will be metabolised during first pass, so more of the administered dose reaches systemic circulation. This increases bioavailability and systemic drug levels. Since morphine has a narrow therapeutic index, higher systemic levels risk respiratory depression. The dose should therefore be reduced in hepatic impairment."
    },
    {
        question: "A 52-year-old man with stable angina visits his GP.\n\nWhich treatment would most likely prevent further episodes of chest pain on exertion?",
        options: {
            A: "Aspirin",
            B: "Glyceryl trinitrate",
            C: "Bisoprolol",
            D: "Ramipril",
            E: "Simvastatin"
        },
        correctAnswer: "C",
        explanation: "Beta-blockers such as bisoprolol are the first-choice drugs for preventing stable angina. By antagonising beta-1 adrenoceptors, they reduce heart rate and myocardial contractility, decreasing myocardial oxygen demand and preventing ischaemia on exertion. GTN is used to treat acute attacks but does not prevent them. Aspirin and statins are important for secondary cardiovascular prevention but do not directly prevent angina episodes."
    },
    {
        question: "A 68-year-old man post-NSTEMI takes aspirin, clopidogrel, bisoprolol, and atorvastatin. He is looking for an additional drug to reduce his risk of further cardiovascular events.\n\nWhich drug is most appropriate?",
        options: {
            A: "Amiloride",
            B: "Digoxin",
            C: "Glyceryl trinitrate",
            D: "Ramipril",
            E: "Warfarin"
        },
        correctAnswer: "D",
        explanation: "ACE inhibitors such as ramipril have robust evidence for reducing mortality and recurrent cardiovascular events post-MI. They reduce afterload, attenuate ventricular remodelling, and have anti-fibrotic effects. NICE recommends ACE inhibitors as part of the standard post-MI regimen alongside antiplatelets, beta-blockers, and statins. Warfarin, digoxin, GTN, and amiloride have no role in post-MI secondary prevention."
    },
    {
        question: "A 76-year-old man with AF, hypertension, and heart failure has a ventricular rate of ~120 bpm. He is taking furosemide, ramipril, and simvastatin.\n\nWhich drug is most appropriate for ventricular rate control?",
        options: {
            A: "Amiodarone",
            B: "Bisoprolol",
            C: "Digoxin",
            D: "Doxazosin",
            E: "Verapamil"
        },
        correctAnswer: "B",
        explanation: "The ideal agents for ventricular rate control in AF are beta-blockers (e.g. bisoprolol) or non-dihydropyridine calcium channel blockers (e.g. verapamil, diltiazem). In this patient with heart failure, bisoprolol is the preferred choice \u2014 beta-blockers improve prognosis in heart failure. Verapamil and diltiazem are contraindicated in heart failure as they are negatively inotropic. Digoxin is less effective for rate control during physical activity and more toxic."
    },
    {
        question: "A 54-year-old man with supraventricular tachycardia is treated with metoprolol.\n\nWhat is the main receptor target of metoprolol?",
        options: {
            A: "Alpha-1 adrenoceptor",
            B: "Alpha-2 adrenoceptor",
            C: "Beta-1 adrenoceptor",
            D: "Beta-2 adrenoceptor",
            E: "Beta-3 adrenoceptor"
        },
        correctAnswer: "C",
        explanation: "Metoprolol is a cardioselective beta-blocker with relative selectivity for the beta-1 adrenoceptor (predominantly in the heart). Blockade reduces myocardial contractility and slows AV nodal conduction, which can terminate some SVTs and control ventricular rate in AF. Beta-2 receptors are in bronchial and vascular smooth muscle \u2014 beta-1 selective agents have fewer bronchoconstriction effects than non-selective beta-blockers."
    },
    {
        question: "A 12-year-old boy is reviewed post-asthma hospitalisation. He has fully recovered and is now asymptomatic.\n\nWhich treatment is most appropriate to prevent future asthma attacks?",
        options: {
            A: "Beclomethasone",
            B: "Formoterol",
            C: "Chlorphenamine",
            D: "Ipratropium",
            E: "Salbutamol"
        },
        correctAnswer: "A",
        explanation: "Inhaled corticosteroids such as beclomethasone are the mainstay of preventive treatment for asthma, suppressing airway inflammation and reducing exacerbation frequency. Salbutamol (SABA) and ipratropium are for acute symptom relief. Formoterol (LABA) must not be used without an inhaled corticosteroid. Antihistamines do not control airway inflammation in asthma."
    },
    {
        question: "A 62-year-old man with COPD taking aminophylline, fluticasone, salbutamol, salmeterol, and tiotropium complains of a dry mouth.\n\nWhich drug is most likely responsible?",
        options: {
            A: "Tiotropium",
            B: "Fluticasone",
            C: "Salbutamol",
            D: "Salmeterol",
            E: "Aminophylline"
        },
        correctAnswer: "A",
        explanation: "Tiotropium is a long-acting muscarinic antagonist (LAMA). Blocking M3 muscarinic receptors in bronchial smooth muscle produces long-acting bronchodilation but also inhibits parasympathetic stimulation of salivary glands, causing dry mouth \u2014 the most common side effect. Fluticasone (inhaled corticosteroid) can cause oral candidiasis but not dry mouth. Salbutamol and salmeterol (beta-2 agonists) do not cause dry mouth."
    },
    {
        question: "A 56-year-old man presents with intermittent palpitations and chest pain. An ECG is normal over 2 hours. The doctor wants to administer a drug with a very short half-life that produces a sense of 'impending doom'.\n\nWhich drug is used to diagnose supraventricular tachycardia?",
        options: {
            A: "Verapamil",
            B: "Amiodarone",
            C: "Bisoprolol",
            D: "GTN",
            E: "Adenosine"
        },
        correctAnswer: "E",
        explanation: "Adenosine is used to diagnose and treat paroxysmal SVT. It acts on A1 receptors in the AV node, briefly stopping conduction and revealing the underlying rhythm, causing a 5-20 second cardiac pause. Its extremely short half-life (~10 seconds) means effects are transient. Common side effects include a sense of 'impending doom', flushing, and chest tightness. It is contraindicated in asthma and Wolff-Parkinson-White syndrome."
    },
    {
        question: "A student is asked to identify the least accurate statement about antihypertensive drugs.\n\nWhich of the following statements about antihypertensives is LEAST accurate?",
        options: {
            A: "ACE inhibitors may cause a continuous dry cough",
            B: "Beta-adrenoceptor antagonists are a first-line therapy for hypertension",
            C: "Angiotensin II receptor antagonists selectively block AT1 receptors",
            D: "Blood pressure is not always adequately lowered by a single drug",
            E: "The 'pine' calcium channel blockers cause vasodilation"
        },
        correctAnswer: "B",
        explanation: "Beta-blockers are no longer recommended as first-line agents for hypertension in current UK guidelines. They are less effective than other drug classes at reducing the risk of MI and stroke. First-line options are typically ACE inhibitors/ARBs (under 55) or calcium channel blockers/thiazide-like diuretics (over 55 or African/Caribbean). Beta-blockers remain important in specific indications such as heart failure and post-MI."
    },
    {
        question: "A student is asked about the mechanism of action of furosemide.\n\nWhich of the following best describes the mechanism of action of furosemide?",
        options: {
            A: "Blockade of the Na+/K+/Cl- symporter",
            B: "Blockade of a selective Na+ channel",
            C: "Blockade of the Na+/Cl- symporter",
            D: "Blockade of the Na+/H+ antiporter",
            E: "Blockade of aquaporins"
        },
        correctAnswer: "A",
        explanation: "Furosemide is a loop diuretic that competitively inhibits the Na+/K+/2Cl- (NKCC2) symporter on the apical membrane of the thick ascending limb of the Loop of Henle. By blocking this cotransporter, sodium and water remain in the tubular lumen and are excreted. Blockade of the Na+/Cl- symporter describes thiazide diuretics (DCT). Amiloride blocks epithelial sodium channels in the collecting duct."
    },
    {
        question: "A pharmacologist describes a drug that blocks the Na+/Cl- symporter on the apical membrane of the distal convoluted tubule.\n\nWhich of the following drugs has this mechanism of action?",
        options: {
            A: "Aldosterone",
            B: "Amiloride",
            C: "Indapamide",
            D: "Furosemide",
            E: "Spironolactone"
        },
        correctAnswer: "C",
        explanation: "Indapamide is a thiazide-like diuretic that inhibits the Na+/Cl- symporter (NCC) on the apical membrane of the distal convoluted tubule, reducing sodium and water reabsorption. Furosemide blocks the NKCC2 symporter in the thick ascending Loop of Henle. Amiloride blocks epithelial sodium channels (ENaC) in the collecting duct. Spironolactone and aldosterone act on mineralocorticoid receptors."
    },
    {
        question: "A woman presents to A&E with bradycardia of 40 bpm. She was taking bendroflumethiazide and amiloride, and her lisinopril dose was recently increased.\n\nAn increase in which ion species is most likely causing her bradycardia?",
        options: {
            A: "Calcium",
            B: "Magnesium",
            C: "Sodium",
            D: "Potassium"
        },
        correctAnswer: "D",
        explanation: "The combination of a potassium-sparing diuretic (amiloride, which blocks ENaC) and an ACE inhibitor (lisinopril, which reduces aldosterone) creates a powerful hyperkalaemic drug interaction. Hyperkalaemia depolarises the resting membrane potential of cardiac myocytes, impairing action potential generation and causing bradyarrhythmias. Bendroflumethiazide is kaliuretic but its potassium-lowering effect is overridden here."
    },
    {
        question: "A 72-year-old man with hypertension, COPD, and IBS takes amlodipine, doxazosin, fluticasone, hyoscine butylbromide, ipratropium, and salmeterol.\n\nWhich receptor is activated (not blocked) by this treatment regimen?",
        options: {
            A: "Alpha-1 adrenoceptor",
            B: "Alpha-2 adrenoceptor",
            C: "Beta-2 adrenoceptor",
            D: "Beta-1 adrenoceptor",
            E: "Muscarinic receptor"
        },
        correctAnswer: "C",
        explanation: "Salmeterol is a long-acting beta-2 adrenoceptor agonist (LABA) \u2014 it activates beta-2 receptors, causing bronchial smooth muscle relaxation. All other drugs are antagonists or a steroid: amlodipine blocks calcium channels, doxazosin blocks alpha-1 receptors, hyoscine and ipratropium block muscarinic receptors, and fluticasone is a corticosteroid. Antagonists block receptors; agonists activate them."
    },
],
"pharmacology AI questions in Lockey's style": [
    {
        question: "A 34-year-old woman with a urinary tract infection is prescribed trimethoprim.\n\nWhat is the mechanism of action of trimethoprim?",
        options: {
            A: "Inhibition of bacterial cell wall synthesis",
            B: "Inhibition of dihydrofolate reductase",
            C: "Inhibition of DNA gyrase",
            D: "Inhibition of RNA polymerase",
            E: "Disruption of bacterial cell membrane"
        },
        correctAnswer: "B",
        explanation: "Trimethoprim inhibits bacterial dihydrofolate reductase (DHFR), the enzyme that converts dihydrofolate to tetrahydrofolate. Tetrahydrofolate is essential for purine and thymidine synthesis — without it, bacterial DNA synthesis is impaired. Trimethoprim has high selectivity for bacterial over human DHFR. It is often combined with sulfamethoxazole (co-trimoxazole), which inhibits the earlier step of dihydropteroate synthase, producing synergistic blockade of the folate pathway."
    },
    {
        question: "A 28-year-old pregnant woman at 10 weeks gestation is found to have a DVT.\n\nWhich anticoagulant is most appropriate for treatment?",
        options: {
            A: "Warfarin",
            B: "Rivaroxaban",
            C: "Dabigatran",
            D: "Low molecular weight heparin",
            E: "Aspirin"
        },
        correctAnswer: "D",
        explanation: "Low molecular weight heparin (LMWH, e.g. enoxaparin) is the anticoagulant of choice in pregnancy. It does not cross the placenta and has no teratogenic effects. Warfarin crosses the placenta and causes warfarin embryopathy (nasal hypoplasia, stippled epiphyses) in the first trimester, and fetal haemorrhage later in pregnancy. Direct oral anticoagulants (rivaroxaban, dabigatran) are contraindicated in pregnancy due to insufficient safety data and known teratogenicity in animal studies."
    },
    {
        question: "A 67-year-old man with atrial fibrillation is started on warfarin. His INR target is 2.5.\n\nWhat is the mechanism by which warfarin exerts its anticoagulant effect?",
        options: {
            A: "Direct inhibition of thrombin",
            B: "Inhibition of vitamin K epoxide reductase",
            C: "Activation of antithrombin III",
            D: "Inhibition of factor Xa",
            E: "Blockade of platelet glycoprotein IIb/IIIa receptors"
        },
        correctAnswer: "B",
        explanation: "Warfarin inhibits vitamin K epoxide reductase, the enzyme that recycles vitamin K from its inactive epoxide form back to its active hydroquinone form. Active vitamin K is required for gamma-carboxylation of the clotting factors II, VII, IX, and X, as well as protein C and S. Without carboxylation these factors are non-functional. Factor VII has the shortest half-life, so the PT/INR rises first. Full anticoagulation takes several days as existing factors are cleared."
    },
    {
        question: "A 71-year-old woman taking warfarin for AF is started on clarithromycin for a chest infection. Her INR rises to 6.2 and she has no bleeding.\n\nWhy did her INR rise?",
        options: {
            A: "Clarithromycin displaces warfarin from plasma proteins",
            B: "Clarithromycin inhibits CYP450 enzymes reducing warfarin metabolism",
            C: "Clarithromycin activates vitamin K epoxide reductase",
            D: "Clarithromycin reduces gut bacteria that produce vitamin K",
            E: "Clarithromycin increases warfarin absorption from the gut"
        },
        correctAnswer: "B",
        explanation: "Clarithromycin is a potent inhibitor of CYP3A4, one of the hepatic cytochrome P450 enzymes responsible for warfarin metabolism. By inhibiting warfarin's breakdown, clarithromycin causes warfarin to accumulate, raising plasma levels and therefore the INR. This is one of the most clinically important drug interactions in practice. Many antibiotics interact with warfarin — patients should be counselled to have their INR checked when starting any new medication."
    },
    {
        question: "A 58-year-old man with hypertension is started on ramipril. Two weeks later he develops a persistent dry cough.\n\nWhat is the mechanism underlying this side effect?",
        options: {
            A: "Increased bradykinin accumulation in the airways",
            B: "Angiotensin II-mediated bronchospasm",
            C: "Direct irritation of the pharyngeal mucosa",
            D: "Increased histamine release",
            E: "Reduced prostaglandin synthesis"
        },
        correctAnswer: "A",
        explanation: "ACE (angiotensin-converting enzyme) normally degrades bradykinin in addition to converting angiotensin I to angiotensin II. When ACE is inhibited by ramipril, bradykinin accumulates in the airways, stimulating sensory C-fibres and triggering a dry, persistent cough. This affects up to 15% of patients and is more common in women and people of Asian ethnicity. The cough resolves on stopping the drug. Angiotensin receptor blockers (ARBs) do not inhibit ACE and therefore do not cause this side effect — making them the alternative in intolerant patients."
    },
    {
        question: "A 44-year-old woman with rheumatoid arthritis is started on methotrexate. She is also prescribed folic acid.\n\nWhy is folic acid prescribed alongside methotrexate in this context?",
        options: {
            A: "Folic acid enhances the anti-inflammatory effect of methotrexate",
            B: "Folic acid reduces methotrexate absorption preventing toxicity",
            C: "Folic acid reduces side effects by partially replenishing folate stores",
            D: "Folic acid acts as a direct antidote to methotrexate",
            E: "Folic acid prevents renal excretion of methotrexate"
        },
        correctAnswer: "C",
        explanation: "At the low doses used in rheumatoid arthritis, methotrexate partially inhibits dihydrofolate reductase. Supplemental folic acid provides additional substrate to partially replenish the depleted folate pool, reducing the incidence of side effects such as mucositis, nausea, and hepatotoxicity — without significantly blunting the anti-inflammatory effect. This is distinct from folinic acid (leucovorin), which is used as a direct antidote in methotrexate toxicity and bypasses DHFR entirely."
    },
    {
        question: "A 55-year-old man with gout is started on allopurinol.\n\nWhat is the mechanism of action of allopurinol?",
        options: {
            A: "Inhibition of phospholipase A2",
            B: "Inhibition of xanthine oxidase",
            C: "Increased renal uric acid excretion",
            D: "Blockade of uric acid renal tubular reabsorption",
            E: "Inhibition of cyclo-oxygenase"
        },
        correctAnswer: "B",
        explanation: "Allopurinol is a xanthine oxidase inhibitor. Xanthine oxidase is the enzyme responsible for the final steps of purine catabolism — converting hypoxanthine to xanthine, and xanthine to uric acid. By inhibiting this enzyme, allopurinol reduces uric acid production and lowers serum urate levels, preventing crystal deposition in joints and soft tissues. It is used for long-term prevention, not acute attacks. Probenecid increases renal urate excretion; colchicine and NSAIDs treat acute attacks."
    },
    {
        question: "A 70-year-old woman is admitted with acute severe colitis on a background of long-term prednisolone use. The surgical team plan an emergency laparotomy.\n\nWhat additional treatment must be given perioperatively and why?",
        options: {
            A: "High-dose insulin — to prevent steroid-induced hyperglycaemia",
            B: "Hydrocortisone — to prevent an Addisonian crisis due to adrenal suppression",
            C: "Fludrocortisone — to replace mineralocorticoid activity",
            D: "Dexamethasone — to reduce surgical site inflammation",
            E: "Spironolactone — to counteract steroid-induced fluid retention"
        },
        correctAnswer: "B",
        explanation: "Long-term exogenous corticosteroid use suppresses the hypothalamic-pituitary-adrenal (HPA) axis via negative feedback, causing adrenal atrophy. The adrenal glands become unable to mount the normal cortisol stress response to surgery. Without supplemental steroid cover, the patient may develop an Addisonian crisis — severe hypotension, electrolyte disturbance, and cardiovascular collapse. Intravenous hydrocortisone is given perioperatively. This is known as 'steroid cover' and is essential in any patient on long-term steroids undergoing significant physiological stress."
    },
    {
        question: "A 61-year-old man with type 2 diabetes is started on an SGLT2 inhibitor.\n\nWhich of the following best describes the mechanism of action of SGLT2 inhibitors?",
        options: {
            A: "Stimulation of pancreatic insulin secretion",
            B: "Inhibition of renal glucose reabsorption in the proximal convoluted tubule",
            C: "Activation of AMPK reducing hepatic gluconeogenesis",
            D: "Blockade of intestinal glucose absorption",
            E: "Increased peripheral insulin sensitivity via PPAR-gamma activation"
        },
        correctAnswer: "B",
        explanation: "SGLT2 (sodium-glucose cotransporter 2) inhibitors such as dapagliflozin and empagliflozin block the SGLT2 transporter in the proximal convoluted tubule, which is responsible for ~90% of filtered glucose reabsorption. By inhibiting this transporter, glucose is excreted in the urine (glucosuria), lowering blood glucose independently of insulin. Additional benefits include weight loss, blood pressure reduction, and cardioprotective and nephroprotective effects. Key risks include genital thrush, UTIs, and euglycaemic diabetic ketoacidosis."
    },
    {
        question: "A 38-year-old woman with epilepsy is well-controlled on sodium valproate. She wishes to start trying for a pregnancy.\n\nWhat is the primary concern with continuing sodium valproate in pregnancy?",
        options: {
            A: "It is a potent teratogen causing neural tube defects and neurodevelopmental harm",
            B: "It causes fetal bradycardia via sodium channel blockade",
            C: "It crosses the placenta and causes neonatal seizures on withdrawal",
            D: "It reduces folic acid absorption increasing miscarriage risk",
            E: "It causes fetal renal toxicity via accumulation"
        },
        correctAnswer: "A",
        explanation: "Sodium valproate is one of the most teratogenic drugs in clinical use. It is associated with neural tube defects (spina bifida), cardiac defects, cleft palate, and — most significantly — fetal valproate syndrome causing lasting neurodevelopmental impairment (lower IQ, autism spectrum disorder, developmental delay). The MHRA has issued strict guidance (the Prevent programme) requiring valproate to not be used in women of childbearing potential unless there is a pregnancy prevention programme in place. Women wishing to conceive should be switched to an alternative antiepileptic with specialist input."
    },
    {
        question: "A 45-year-old man is started on simvastatin for hypercholesterolaemia. He also takes clarithromycin for a chest infection.\n\nWhat is the most serious risk of this drug combination?",
        options: {
            A: "Hepatotoxicity due to additive liver injury",
            B: "QT prolongation and ventricular arrhythmia",
            C: "Rhabdomyolysis due to elevated statin levels",
            D: "Hypoglycaemia due to impaired glucose metabolism",
            E: "Renal failure due to combined nephrotoxicity"
        },
        correctAnswer: "C",
        explanation: "Simvastatin is metabolised extensively by CYP3A4. Clarithromycin is a potent CYP3A4 inhibitor, dramatically increasing simvastatin plasma concentrations. Elevated statin levels cause myopathy and, in severe cases, rhabdomyolysis — massive skeletal muscle breakdown releasing myoglobin into the circulation, which can cause acute kidney injury and hyperkalaemia. Simvastatin should be temporarily stopped during clarithromycin courses. Atorvastatin is less susceptible to this interaction; pravastatin is not metabolised by CYP3A4 at all."
    },
    {
        question: "A 25-year-old woman with myasthenia gravis is treated with pyridostigmine.\n\nWhat is the mechanism of action of pyridostigmine?",
        options: {
            A: "Agonism at nicotinic acetylcholine receptors at the neuromuscular junction",
            B: "Inhibition of acetylcholinesterase increasing synaptic acetylcholine",
            C: "Blockade of voltage-gated calcium channels reducing acetylcholine release",
            D: "Antagonism of muscarinic receptors reducing cholinergic side effects",
            E: "Inhibition of choline reuptake into the presynaptic terminal"
        },
        correctAnswer: "B",
        explanation: "Myasthenia gravis involves autoantibodies against nicotinic acetylcholine receptors (nAChRs) at the neuromuscular junction, reducing available receptors. Pyridostigmine is a reversible acetylcholinesterase inhibitor — it inhibits the enzyme that breaks down acetylcholine in the synapse, allowing ACh to accumulate and compete more effectively for the remaining receptors. Side effects reflect cholinergic excess: increased secretions, miosis, bradycardia, and diarrhoea. It treats symptoms but does not modify the underlying autoimmune disease."
    },
    {
        question: "A 32-year-old man presents with opioid overdose following heroin use. He is unconscious with a respiratory rate of 4 breaths per minute and pinpoint pupils.\n\nWhat is the most appropriate immediate pharmacological treatment?",
        options: {
            A: "Flumazenil intravenously",
            B: "Naloxone intravenously",
            C: "Activated charcoal orally",
            D: "N-acetylcysteine intravenously",
            E: "Naltrexone orally"
        },
        correctAnswer: "B",
        explanation: "Naloxone is a competitive opioid receptor antagonist with high affinity for mu-opioid receptors. It rapidly reverses opioid-induced respiratory depression, sedation, and miosis. It has a shorter half-life (~60–90 minutes) than most opioids, so repeated doses or an infusion may be required. Flumazenil reverses benzodiazepine overdose. N-acetylcysteine is used in paracetamol overdose. Naltrexone is an oral opioid antagonist used in relapse prevention, not acute reversal. Activated charcoal is used in certain oral overdoses but not after opioid injection."
    },
    {
        question: "A 19-year-old woman takes the combined oral contraceptive pill and is prescribed rifampicin for tuberculosis.\n\nWhat advice should be given regarding her contraception?",
        options: {
            A: "No action needed — rifampicin does not affect contraceptive efficacy",
            B: "Use additional barrier contraception and continue for 4 weeks after rifampicin",
            C: "Switch to a progesterone-only pill which is not affected",
            D: "Double the dose of the combined pill during treatment",
            E: "Stop the combined pill and use condoms only during the course"
        },
        correctAnswer: "B",
        explanation: "Rifampicin is a potent inducer of CYP450 enzymes, particularly CYP3A4, which metabolises oestrogen and progesterone in the combined oral contraceptive pill. Enzyme induction dramatically increases breakdown of these hormones, reducing plasma levels and rendering the pill ineffective — with risk of unintended pregnancy. Additional barrier contraception (e.g. condoms) should be used during rifampicin treatment and for 4 weeks after stopping. This applies to progesterone-only pills too. Long-acting reversible contraceptives (IUD, implant) are not affected."
    },
    {
        question: "A 66-year-old woman with osteoporosis is prescribed alendronic acid.\n\nWhat is the mechanism of action of bisphosphonates?",
        options: {
            A: "Activation of osteoblasts to increase bone formation",
            B: "Inhibition of osteoclast activity reducing bone resorption",
            C: "Antagonism of parathyroid hormone receptors",
            D: "Increased renal calcium reabsorption",
            E: "Competitive inhibition of vitamin D receptors"
        },
        correctAnswer: "B",
        explanation: "Bisphosphonates such as alendronic acid are incorporated into bone matrix at sites of active resorption, where they are taken up by osteoclasts. Inside the osteoclast, they inhibit farnesyl pyrophosphate synthase — an enzyme in the mevalonate pathway — disrupting intracellular signalling, impairing osteoclast function, and inducing apoptosis. The net effect is reduced bone resorption. Key counselling points include taking the tablet on an empty stomach with a full glass of water, remaining upright for 30 minutes to reduce oesophageal irritation, and taking it once weekly."
    },
    {
        question: "A 73-year-old man with heart failure is admitted with worsening dyspnoea. His medications include digoxin. His digoxin level is found to be toxic.\n\nWhich electrolyte abnormality most potentiates digoxin toxicity?",
        options: {
            A: "Hypernatraemia",
            B: "Hyperkalaemia",
            C: "Hypokalaemia",
            D: "Hypermagnesaemia",
            E: "Hypercalcaemia"
        },
        correctAnswer: "C",
        explanation: "Digoxin inhibits the Na+/K+ ATPase pump on cardiac myocytes. Potassium competes with digoxin for binding at this pump — in hypokalaemia, there is less potassium to compete, so digoxin binds more avidly and its inhibitory effect is potentiated. This lowers the toxic threshold significantly. Hypokalaemia is commonly caused by loop and thiazide diuretics, which are often co-prescribed in heart failure — making this a particularly dangerous combination. Signs of digoxin toxicity include nausea, xanthopsia (yellow-green visual disturbance), bradycardia, and arrhythmias."
    },
    {
        question: "A 53-year-old woman with a pulmonary embolism is commenced on heparin.\n\nWhat is the mechanism of action of unfractionated heparin?",
        options: {
            A: "Direct inhibition of thrombin and factor Xa",
            B: "Potentiation of antithrombin III, accelerating inhibition of thrombin and factor Xa",
            C: "Inhibition of vitamin K-dependent clotting factor synthesis",
            D: "Blockade of platelet ADP receptors",
            E: "Activation of tissue plasminogen activator"
        },
        correctAnswer: "B",
        explanation: "Heparin binds to and dramatically potentiates antithrombin III (AT-III), a naturally occurring serine protease inhibitor. The heparin-AT-III complex accelerates inhibition of thrombin (factor IIa) and factor Xa — and to a lesser extent IXa, XIa, and XIIa — by approximately 1000-fold. Unfractionated heparin inhibits both thrombin and Xa. Low molecular weight heparins (LMWH) preferentially inhibit factor Xa. Direct oral anticoagulants (e.g. rivaroxaban, dabigatran) directly inhibit Xa and thrombin respectively without requiring AT-III."
    },
    {
        question: "A 29-year-old man with schizophrenia is started on haloperidol and develops muscle rigidity, hyperthermia, autonomic instability, and reduced consciousness over 48 hours.\n\nWhat is the most likely diagnosis and its mechanism?",
        options: {
            A: "Serotonin syndrome — excess serotonergic activity",
            B: "Neuroleptic malignant syndrome — dopamine D2 receptor blockade in the hypothalamus and basal ganglia",
            C: "Anticholinergic toxicity — muscarinic receptor blockade",
            D: "Malignant hyperthermia — uncontrolled skeletal muscle calcium release",
            E: "Extrapyramidal side effects — nigrostriatal dopamine blockade"
        },
        correctAnswer: "B",
        explanation: "Neuroleptic malignant syndrome (NMS) is a rare but life-threatening reaction to antipsychotic drugs. It is caused by dopamine D2 receptor blockade, particularly in the hypothalamus (dysregulating temperature control) and basal ganglia (causing rigidity). The classic tetrad is hyperthermia, severe muscle rigidity, autonomic instability (labile BP, tachycardia, diaphoresis), and altered consciousness. CK is markedly elevated. Treatment involves stopping the antipsychotic, supportive care, and dantrolene or bromocriptine in severe cases. It differs from serotonin syndrome, which causes clonus and hyperreflexia rather than lead-pipe rigidity."
    },
    {
        question: "A 68-year-old man with Parkinson's disease is taking levodopa combined with carbidopa.\n\nWhy is carbidopa combined with levodopa?",
        options: {
            A: "Carbidopa enhances the central conversion of levodopa to dopamine",
            B: "Carbidopa inhibits peripheral dopa decarboxylase reducing systemic side effects",
            C: "Carbidopa prevents the renal excretion of levodopa",
            D: "Carbidopa blocks dopamine receptors in the chemoreceptor trigger zone",
            E: "Carbidopa increases levodopa absorption from the gastrointestinal tract"
        },
        correctAnswer: "B",
        explanation: "Levodopa is converted to dopamine by dopa decarboxylase, an enzyme present both peripherally and centrally. Without carbidopa, most levodopa is converted to dopamine in the periphery before reaching the brain — causing significant side effects (nausea, vomiting, postural hypotension) without therapeutic benefit. Carbidopa is a peripheral dopa decarboxylase inhibitor that does not cross the blood-brain barrier. It reduces peripheral conversion, allowing more levodopa to reach the brain, improving efficacy and reducing peripheral side effects. This allows a lower total dose of levodopa to be used."
    },
    {
        question: "A 40-year-old man with HIV is started on antiretroviral therapy including a protease inhibitor. His lipid profile worsens significantly.\n\nWhich class of antiretroviral is most associated with metabolic complications including dyslipidaemia and lipodystrophy?",
        options: {
            A: "Nucleoside reverse transcriptase inhibitors (NRTIs)",
            B: "Non-nucleoside reverse transcriptase inhibitors (NNRTIs)",
            C: "Protease inhibitors",
            D: "Integrase inhibitors",
            E: "CCR5 antagonists"
        },
        correctAnswer: "C",
        explanation: "Protease inhibitors (e.g. ritonavir, lopinavir) are associated with significant metabolic side effects including dyslipidaemia (raised triglycerides and LDL), insulin resistance, and lipodystrophy (peripheral fat loss with central fat accumulation). These effects are thought to result from inhibition of lipid metabolism enzymes with structural similarity to HIV protease. They are also potent CYP3A4 inhibitors, leading to numerous drug interactions. Newer antiretroviral classes such as integrase inhibitors have more favourable metabolic profiles."
    },
    {
        question: "A 77-year-old woman is prescribed morphine for cancer pain. She develops confusion, myoclonus, and worsening pain despite dose escalation.\n\nWhat is the most likely cause?",
        options: {
            A: "Opioid tolerance requiring a higher dose",
            B: "Opioid-induced hyperalgesia and toxicity from morphine-6-glucuronide accumulation",
            C: "Disease progression unrelated to the opioid",
            D: "Serotonin syndrome from opioid-antidepressant interaction",
            E: "Paradoxical opioid antagonism at high doses"
        },
        correctAnswer: "B",
        explanation: "Morphine is hepatically metabolised to morphine-6-glucuronide (M6G) and morphine-3-glucuronide (M3G), both renally excreted. M6G is an active metabolite with potent opioid activity; M3G has neuroexcitatory properties and is thought to contribute to myoclonus, confusion, and paradoxical hyperalgesia. In renal impairment — common in elderly patients — these metabolites accumulate, causing toxicity. Management involves opioid rotation (e.g. to oxycodone or fentanyl, which have less problematic metabolites) with dose reduction, and ensuring adequate hydration."
    },
    {
        question: "A 35-year-old woman presents with a severe migraine. She is given sumatriptan.\n\nWhat is the mechanism of action of triptans?",
        options: {
            A: "Antagonism of CGRP receptors reducing neurogenic inflammation",
            B: "Agonism at 5-HT1B/1D receptors causing cranial vasoconstriction and inhibiting trigeminal nerve activation",
            C: "Blockade of voltage-gated sodium channels stabilising neuronal membranes",
            D: "Inhibition of cyclo-oxygenase reducing prostaglandin-mediated sensitisation",
            E: "Antagonism of dopamine D2 receptors in the chemoreceptor trigger zone"
        },
        correctAnswer: "B",
        explanation: "Triptans are selective serotonin 5-HT1B/1D receptor agonists. 5-HT1B receptors on cranial blood vessels mediate vasoconstriction, countering the vasodilation that contributes to migraine pain. 5-HT1D receptors on trigeminal nerve terminals inhibit the release of pro-inflammatory neuropeptides including CGRP and substance P, reducing neurogenic inflammation around meningeal vessels. Triptans are contraindicated in ischaemic heart disease and uncontrolled hypertension due to their vasoconstrictive properties. CGRP receptor antagonists (gepants) are a newer class that avoid this vasoconstrictive effect."
    },
    {
        question: "A 50-year-old man with alcohol dependence is started on disulfiram to support abstinence.\n\nWhat is the mechanism by which disulfiram deters alcohol consumption?",
        options: {
            A: "It blocks mu-opioid receptors reducing the rewarding effects of alcohol",
            B: "It inhibits aldehyde dehydrogenase causing acetaldehyde accumulation when alcohol is consumed",
            C: "It reduces alcohol absorption from the gastrointestinal tract",
            D: "It competitively antagonises GABA-A receptors reducing alcohol's sedative effect",
            E: "It induces aversion by stimulating the chemoreceptor trigger zone directly"
        },
        correctAnswer: "B",
        explanation: "Alcohol is metabolised first to acetaldehyde by alcohol dehydrogenase, then to acetate by aldehyde dehydrogenase (ALDH). Disulfiram irreversibly inhibits ALDH, causing acetaldehyde to accumulate when alcohol is consumed. Acetaldehyde is toxic and produces a highly unpleasant reaction: flushing, nausea, vomiting, tachycardia, hypotension, and headache. This aversive consequence acts as a deterrent to drinking. Naltrexone (opioid antagonist) reduces craving via a different mechanism and can be used alongside or instead of disulfiram."
    },
    {
        question: "A 62-year-old woman with breast cancer is commenced on tamoxifen.\n\nWhat is the mechanism of action of tamoxifen?",
        options: {
            A: "Inhibition of aromatase reducing peripheral oestrogen synthesis",
            B: "Selective oestrogen receptor modulation — antagonism in breast tissue",
            C: "Downregulation of HER2 receptors on tumour cells",
            D: "Inhibition of VEGF reducing tumour angiogenesis",
            E: "Direct cytotoxic alkylation of tumour cell DNA"
        },
        correctAnswer: "B",
        explanation: "Tamoxifen is a selective oestrogen receptor modulator (SERM). In breast tissue, it acts as an oestrogen receptor antagonist — binding the receptor but blocking transcription of oestrogen-responsive genes that drive tumour proliferation. It is used in oestrogen receptor-positive (ER+) breast cancer. Importantly, tamoxifen has partial agonist activity in other tissues: it is agonistic in the endometrium (increasing risk of endometrial cancer) and bone (protective effect). Aromatase inhibitors (e.g. letrozole) reduce oestrogen synthesis and are an alternative in postmenopausal women."
    },
    {
        question: "A 48-year-old man with severe rheumatoid arthritis failing methotrexate is started on a TNF-alpha inhibitor.\n\nWhich of the following is an important contraindication to anti-TNF therapy?",
        options: {
            A: "Mild renal impairment",
            B: "Latent tuberculosis",
            C: "Hypertension",
            D: "Type 2 diabetes",
            E: "Previous penicillin allergy"
        },
        correctAnswer: "B",
        explanation: "TNF-alpha is a key cytokine in granuloma formation, which is the mechanism by which the immune system contains latent tuberculosis. Anti-TNF therapy (e.g. adalimumab, etanercept, infliximab) significantly impairs this containment, carrying a high risk of reactivating latent TB into active, potentially life-threatening disease. All patients must be screened for latent TB (with IGRA/Mantoux testing and chest X-ray) before starting anti-TNF therapy and treated with prophylactic isoniazid if latent TB is identified. Other important contraindications include active infections, moderate-to-severe heart failure, and demyelinating disease."
    },
    {
        question: "A 30-year-old woman is treated with lithium for bipolar disorder. She becomes dehydrated after a bout of gastroenteritis.\n\nWhy does dehydration increase the risk of lithium toxicity?",
        options: {
            A: "Dehydration reduces hepatic metabolism of lithium",
            B: "Lithium is reabsorbed with sodium in the proximal tubule — dehydration increases sodium and lithium reabsorption",
            C: "Dehydration increases lithium absorption from the gastrointestinal tract",
            D: "Dehydration causes protein binding of lithium increasing its CNS penetration",
            E: "Dehydration reduces glomerular filtration, trapping lithium in plasma"
        },
        correctAnswer: "B",
        explanation: "Lithium is not protein-bound and is freely filtered at the glomerulus. In the proximal convoluted tubule, lithium is reabsorbed alongside sodium — the kidney cannot distinguish between them. In states of sodium depletion or dehydration, the kidney upregulates sodium (and therefore lithium) reabsorption in the PCT as a compensatory mechanism, causing lithium to accumulate. This is why lithium toxicity is precipitated by dehydration, diarrhoea, vomiting, sodium restriction, and diuretics. Lithium has a very narrow therapeutic index (0.6–1.0 mmol/L), making regular monitoring essential."
    },
    {
        question: "A medical student is asked about zero-order kinetics in pharmacology.\n\nWhich of the following drugs is most likely to follow zero-order kinetics at therapeutic doses?",
        options: {
            A: "Amoxicillin",
            B: "Phenytoin",
            C: "Atenolol",
            D: "Furosemide",
            E: "Salbutamol"
        },
        correctAnswer: "B",
        explanation: "Most drugs follow first-order kinetics — a constant proportion of drug is eliminated per unit time, so elimination rate is proportional to plasma concentration. Phenytoin is the classic exception: it saturates hepatic CYP2C9 enzymes at therapeutic doses, meaning elimination becomes capacity-limited (zero-order) — a constant amount is eliminated per unit time regardless of concentration. This makes dose titration unpredictable and dangerous: small dose increases can cause disproportionate rises in plasma concentration and toxicity. Alcohol is another clinically important example of zero-order kinetics."
    },
    {
        question: "A 58-year-old man with chronic kidney disease stage 4 requires analgesia for osteoarthritis.\n\nWhich analgesic should be used with the most caution in this patient?",
        options: {
            A: "Paracetamol",
            B: "Codeine",
            C: "Ibuprofen",
            D: "Low-dose tramadol",
            E: "Topical diclofenac"
        },
        correctAnswer: "C",
        explanation: "NSAIDs such as ibuprofen are particularly hazardous in renal impairment and should generally be avoided. They inhibit COX-mediated prostaglandin synthesis, and prostaglandins are essential for maintaining afferent arteriolar vasodilation in states of reduced renal perfusion. By removing this compensatory mechanism, NSAIDs reduce GFR, worsen renal impairment, and can precipitate acute-on-chronic kidney injury. They also cause sodium and water retention and hyperkalaemia. Paracetamol remains the safest first-line analgesic in CKD. Opioids require dose adjustment but can be used cautiously."
    },
    {
        question: "A 45-year-old woman is prescribed prednisolone 40 mg daily for six weeks for an acute flare of inflammatory bowel disease.\n\nWhich of the following side effects is most likely to develop with this course of treatment?",
        options: {
            A: "Adrenocortical insufficiency requiring permanent replacement therapy",
            B: "Hyperglycaemia due to increased hepatic gluconeogenesis and peripheral insulin resistance",
            C: "Hypokalaemia due to direct aldosterone receptor agonism",
            D: "Osteoporosis causing a fragility fracture",
            E: "Cataracts forming within the first week"
        },
        correctAnswer: "B",
        explanation: "Corticosteroids promote hepatic gluconeogenesis and reduce peripheral glucose uptake by impairing insulin signalling, commonly causing steroid-induced hyperglycaemia. This can unmask latent diabetes or worsen established diabetes and should be monitored with blood glucose. Adrenal suppression occurs with longer-term use but rarely causes permanent insufficiency after a 6-week course. Osteoporosis and cataracts are long-term complications of prolonged use. Hypokalaemia can occur through mineralocorticoid activity but is more pronounced with higher-potency mineralocorticoids such as fludrocortisone."
    },
    {
        question: "A 66-year-old man is commenced on amiodarone for persistent atrial fibrillation. He returns six months later with fatigue and weight gain.\n\nWhich thyroid abnormality is most commonly associated with long-term amiodarone use?",
        options: {
            A: "Hypothyroidism",
            B: "Hyperthyroidism",
            C: "Thyroid cancer",
            D: "Subacute thyroiditis",
            E: "Central hypothyroidism"
        },
        correctAnswer: "A",
        explanation: "Amiodarone is approximately 37% iodine by weight and has a very long half-life (40–55 days). It causes thyroid dysfunction in up to 15–20% of patients. Hypothyroidism is more common in iodine-sufficient populations (such as the UK) and results from iodine-induced inhibition of thyroid hormone synthesis (Wolff-Chaikoff effect) which the thyroid fails to escape. Amiodarone-induced thyrotoxicosis (AIT) also occurs, particularly in iodine-deficient areas. Thyroid function must be checked before starting and every 6 months during treatment. Amiodarone also causes pulmonary toxicity, hepatotoxicity, corneal microdeposits, and photosensitivity."
    }
],

"spondyloarthritis": [
    {
        question: "A 28-year-old man has lower back pain that is worse in the morning and improves with exercise. He is HLA-B27 positive.\n\nWhich of the following is NOT a feature of inflammatory back pain?",
        options: {
            A: "Age of onset under 40 years",
            B: "Improvement with exercise",
            C: "No improvement with rest",
            D: "Pain worse with movement and better with rest",
            E: "Good response to NSAIDs"
        },
        correctAnswer: "D",
        explanation: "Inflammatory back pain characteristically improves with exercise and does not improve with rest \u2014 the opposite of mechanical back pain. The ASAS criteria for inflammatory back pain require at least 4 of 5 features: age of onset <40 years, insidious onset, improvement with exercise, no improvement with rest, and nocturnal pain improving on arising. Good NSAID response is also characteristic. Pain worsening with movement describes mechanical pain."
    },
    {
        question: "A 24-year-old man is diagnosed with ankylosing spondylitis.\n\nAt which anatomical structure does the primary skeletal inflammation occur in spondyloarthritis?",
        options: {
            A: "Synovium",
            B: "Enthesis",
            C: "Periosteum",
            D: "Subchondral bone",
            E: "Joint capsule"
        },
        correctAnswer: "B",
        explanation: "The hallmark of spondyloarthritis is enthesitis \u2014 inflammation at the enthesis, the site where tendons, ligaments, or joint capsules attach to bone. This distinguishes SpA from rheumatoid arthritis, where the primary site of inflammation is the synovium. In axial SpA, enthesitis predominantly affects the spine and sacroiliac joints; in peripheral SpA, it affects the peripheral skeleton such as the Achilles tendon."
    },
    {
        question: "A 22-year-old male has lower back stiffness and develops a red, painful eye with photophobia and blurred vision. Which eye condition is the most common extraarticular manifestation of spondyloarthritis?\n\nWhich of the following is most likely?",
        options: {
            A: "Acute anterior uveitis",
            B: "Scleritis",
            C: "Posterior uveitis",
            D: "Episcleritis",
            E: "Optic neuritis"
        },
        correctAnswer: "A",
        explanation: "Acute anterior uveitis (iritis) is the most common extraarticular manifestation of spondyloarthritis, occurring in 25-35% of patients. It classically presents as acute unilateral pain, photophobia, and blurring of vision. Uveitis may be the first clinical manifestation of SpA. Approximately 50% of patients with acute recurrent unilateral anterior uveitis have an underlying form of SpA. Importantly, the activity of uveitis does not correlate with joint disease activity."
    },
    {
        question: "A 35-year-old man with ankylosing spondylitis has a BASDAI score of 5.2 and has failed two NSAIDs.\n\nWhich of the following is a contraindication to starting anti-TNF therapy?",
        options: {
            A: "HLA-B27 positivity",
            B: "A BASDAI score above 4",
            C: "Previous NSAID use",
            D: "Elevated CRP",
            E: "Active infection"
        },
        correctAnswer: "E",
        explanation: "Active infection is a contraindication to TNF inhibitor therapy because anti-TNF agents suppress the immune response, potentially allowing an existing infection to disseminate and become life-threatening. Other contraindications include latent (untreated) tuberculosis, demyelinating disease, heart failure, and malignancy. A BASDAI \u22654 is an indication for anti-TNF therapy, not a contraindication. HLA-B27 positivity is an eligibility marker."
    },
    {
        question: "A 30-year-old woman with ankylosing spondylitis asks about the role of cytokines in her condition.\n\nWhich cytokine is the key upstream regulator of the IL-23/IL-17 axis central to SpA inflammation?",
        options: {
            A: "IL-23",
            B: "IL-6",
            C: "TNF-alpha",
            D: "IL-17A",
            E: "IL-1"
        },
        correctAnswer: "A",
        explanation: "IL-23 is the key upstream cytokine that drives the IL-23/IL-17 axis in spondyloarthritis. IL-23, produced by dendritic cells and macrophages, maintains and expands Th17 cells, which in turn produce IL-17A and IL-22. In SpA, HLA-B27 misfolding triggers ER stress, dramatically increasing IL-23 production. IL-17A then drives inflammation, enthesitis, and osteoproliferative changes. IL-23 and IL-17 inhibitors are effective treatments."
    },
    {
        question: "A 40-year-old man with ankylosing spondylitis has sacroiliac joint X-rays showing erosions with sclerosis, partial ankylosis, and areas of joint space widening and narrowing.\n\nWhich grade of sacroiliitis does this represent?",
        options: {
            A: "Grade 0 \u2014 Normal",
            B: "Grade 3 \u2014 Unequivocal abnormality with erosions, sclerosis, and partial ankylosis",
            C: "Grade 2 \u2014 Small localised erosions without joint width alteration",
            D: "Grade 1 \u2014 Suspicious changes only",
            E: "Grade 4 \u2014 Total ankylosis"
        },
        correctAnswer: "B",
        explanation: "The Modified New York criteria for sacroiliitis: Grade 0 = normal; Grade 1 = suspicious but not definite changes; Grade 2 = small localised erosions or sclerosis without joint width change; Grade 3 = unequivocal abnormality with erosions, sclerosis, joint space widening/narrowing, or partial ankylosis; Grade 4 = total ankylosis. A diagnosis of AS requires Grade 2 bilaterally or Grade 3-4 unilaterally plus at least one clinical criterion."
    },
    {
        question: "A rheumatologist explains the dual skeletal processes occurring at entheses in SpA.\n\nWhich of the following best explains why new bone formation occurs alongside erosion?",
        options: {
            A: "Inflammation causes only osteoclastic bone erosion with no new bone formation",
            B: "New bone formation and erosion occur sequentially \u2014 never simultaneously",
            C: "Both osteoclastic bone destruction and osteoblastic new bone formation (syndesmophytes) occur, potentially leading to bamboo spine",
            D: "Bone formation only occurs in the peripheral skeleton, not the spine",
            E: "The new bone formation is a repair response to erosion and prevents further joint damage"
        },
        correctAnswer: "C",
        explanation: "In SpA enthesitis, two simultaneous processes occur: an osteoclastic process causing bone erosion, and an osteoblastic process causing new bone formation (syndesmophytes \u2014 bony bridges across disc spaces). At its most severe, this converts the vertebral column into a rigid 'bamboo spine', the hallmark of severe ankylosing spondylitis. IL-17 is particularly associated with the bone-erosive process, while Wnt and BMP signalling drives the osteoblastic pathway."
    },
],

"renal": [
    {
        question: "A 68-year-old presents with flank pain and oliguria. Their creatinine is elevated. A bladder scan shows 100 mL of residual urine.\n\nWhat is the most likely cause of this AKI?",
        options: {
            A: "Acute tubular necrosis",
            B: "Glomerulonephritis",
            C: "Renal artery stenosis",
            D: "Ureteric obstruction",
            E: "Rhabdomyolysis"
        },
        correctAnswer: "D",
        explanation: "The combination of flank pain, oliguria, raised creatinine, and significant post-void residual on bladder scan points to a postrenal (obstructive) cause of AKI. Ureteric obstruction (e.g. from a stone, stricture, or malignancy) causes hydronephrosis and raised intratubular pressure, reducing GFR. The bladder scan finding supports obstruction as the primary cause rather than a renal parenchymal process."
    },
    {
        question: "A patient presents with suspected postrenal AKI.\n\nWhich of the following is the most appropriate first investigation?",
        options: {
            A: "Renal biopsy",
            B: "CT with contrast",
            C: "KUB ultrasound",
            D: "Creatine kinase",
            E: "24-hour urine collection"
        },
        correctAnswer: "C",
        explanation: "Renal ultrasound (KUB) is the first-line investigation for suspected postrenal (obstructive) AKI. It is rapid, non-invasive, readily available, and does not require contrast \u2014 important given the existing renal impairment. It can identify hydronephrosis, hydroureter, bladder distension, and renal size. CT with contrast carries nephrotoxic risk. Renal biopsy is for parenchymal disease, not initial AKI workup."
    },
    {
        question: "A 6-year-old girl presents with swollen eyelids and 'bubbly' urine. Examination is normal except for leukonychia.\n\nWhich initial investigation would be most appropriate?",
        options: {
            A: "Abdominal ultrasound",
            B: "Bloods for U+E",
            C: "Capillary glucose",
            D: "Urine dipstick",
            E: "Corneal swab for MC+S"
        },
        correctAnswer: "D",
        explanation: "The presentation of periorbital oedema, frothy urine, and leukonychia in a child is highly suggestive of nephrotic syndrome (the triad: proteinuria >3.5g/24h, oedema, hypoalbuminaemia). Urine dipstick is the most appropriate initial investigation \u2014 it will rapidly demonstrate heavy proteinuria. Periorbital oedema is often the first sign in children as the periorbital tissues have low oncotic support. Subsequent investigations include U+E and USS, but the dipstick comes first."
    },
    {
        question: "A 25-year-old male presents with fever, sore throat, lethargy, a rash on the backs of his legs, and urinalysis showing 2+ protein and 2+ blood.\n\nWhich test will confirm the most likely diagnosis?",
        options: {
            A: "Urine microscopy",
            B: "Renal biopsy",
            C: "Bloods for U+E",
            D: "Cystoscopy",
            E: "Kidney ultrasound"
        },
        correctAnswer: "B",
        explanation: "The clinical picture \u2014 sore throat preceding haematuria (synpharyngetic), purpuric rash on extensor surfaces of the lower limbs, abdominal pain, and haematuria with proteinuria \u2014 is classical for IgA vasculitis (HSP) or IgA nephropathy. Renal biopsy (showing mesangial IgA deposits on immunofluorescence) is the gold standard for confirming glomerulonephritis. Urine microscopy supports the diagnosis but cannot confirm the aetiology."
    },
    {
        question: "A 45-year-old woman returns from holiday with 2 days of D&V, dry mucous membranes, BP 98/67 mmHg, and dark urine. You suspect AKI.\n\nWhich of the following is diagnostic for AKI?",
        options: {
            A: "Increase in creatinine >26.5 micromol/L above baseline within 48 hours",
            B: "Urine culture confirming E.coli UTI",
            C: "Renal ultrasound showing loss of cortical differentiation",
            D: "eGFR <60",
            E: "Urine output 20 mL/kg/hr"
        },
        correctAnswer: "A",
        explanation: "AKI is defined by KDIGO criteria as: rise in serum creatinine \u226526.5 \u00b5mol/L within 48 hours; or rise to \u22651.5x baseline within 7 days; or urine output <0.5 mL/kg/hr for \u22656 hours. This patient has prerenal AKI from dehydration. eGFR <60 defines CKD (not AKI). Urine output 20 mL/kg/hr is above the oliguria threshold. Ultrasound findings support obstruction, not AKI diagnosis itself."
    },
    {
        question: "A patient presents with AKI, high blood pressure, a non-blanching rash, and 3+ blood on urinalysis. Rapidly progressive glomerulonephritis is suspected.\n\nWhich blood test would be most diagnostic?",
        options: {
            A: "ANA",
            B: "Anti-PLA2R",
            C: "ANCA",
            D: "IL-6",
            E: "HEp-2"
        },
        correctAnswer: "C",
        explanation: "ANCA testing is the most important blood test in suspected rapidly progressive glomerulonephritis (RPGN). ANCA-associated vasculitides (GPA, MPA, EGPA) are the most common cause of RPGN with pauci-immune crescentic glomerulonephritis. c-ANCA (anti-PR3) is associated with GPA; p-ANCA (anti-MPO) with MPA. ANA is associated with SLE/lupus nephritis; anti-PLA2R is specific for membranous nephropathy."
    },
    {
        question: "A 78-year-old male presents with nocturia, difficulty initiating urination, prolonged time to empty, and urge incontinence. He finds it easier to urinate sitting down.\n\nWhich part of the urinary tract is the likely cause?",
        options: {
            A: "Urethra",
            B: "Prostate",
            C: "Bladder",
            D: "External sphincter",
            E: "Meatus"
        },
        correctAnswer: "B",
        explanation: "The combination of voiding symptoms (hesitancy, poor stream, prolonged urination) and storage symptoms (nocturia, urge incontinence) in an elderly male is classic for benign prostatic hyperplasia (BPH). The enlarged prostate compresses the prostatic urethra, causing outflow obstruction, incomplete bladder emptying, detrusor overactivity, and eventually overflow incontinence. Finding it easier to urinate sitting down is a recognised symptom of significant prostatic obstruction."
    },
    {
        question: "A 20-year-old man presents with polyuria and polydipsia. Plasma osmolality is 305 mOsm/kg and urine osmolality is 90 mOsm/kg. After desmopressin, urine osmolality does not rise significantly.\n\nWhich receptor is most likely not functioning correctly?",
        options: {
            A: "ADH V2 receptor in the collecting duct",
            B: "ADH V1 receptor in vascular smooth muscle",
            C: "Aldosterone receptor in the distal convoluted tubule",
            D: "Angiotensin II AT1 receptor",
            E: "Aquaporin-1 channel in the proximal tubule"
        },
        correctAnswer: "A",
        explanation: "This presentation \u2014 dilute polyuria, raised plasma osmolality, and failure to concentrate urine despite desmopressin (synthetic ADH) \u2014 is diagnostic of nephrogenic diabetes insipidus (NDI). In NDI, ADH is produced normally but the kidney does not respond to it. The defect lies in the V2 receptor (or downstream aquaporin-2 channels) in the principal cells of the collecting duct. Failure to respond to desmopressin confirms receptor or post-receptor dysfunction."
    },
    {
        question: "A 65-year-old man with osteoarthritis regularly takes ibuprofen.\n\nWhich of the following best explains how NSAIDs can reduce GFR?",
        options: {
            A: "Constriction of the efferent arteriole by blocking angiotensin II",
            B: "Blockade of sodium reabsorption in the proximal tubule",
            C: "Dilation of the efferent arteriole by increasing nitric oxide",
            D: "Increased sympathetic outflow to the kidneys",
            E: "Constriction of the afferent arteriole by blocking prostaglandins"
        },
        correctAnswer: "E",
        explanation: "In states of renal hypoperfusion, prostaglandins (PGE2, PGI2) dilate the afferent arteriole to maintain GFR. NSAIDs inhibit COX enzymes, blocking prostaglandin synthesis. Without prostaglandin-mediated afferent vasodilation, the afferent arteriole constricts, glomerular hydrostatic pressure falls, and GFR is reduced \u2014 potentially precipitating AKI. This explains why NSAIDs are nephrotoxic in at-risk patients: elderly, dehydrated, CKD, heart failure, or on concurrent ACEi/ARB."
    },
],
"AI Stanton Phillips Qs": [
// 50 MSK questions written in the style of Mr Staton Phillips
// Topics: histology, anatomy, pathophysiology, clinical signs, imaging,
// management, pharmacology, embryology, paediatric MSK, tumours, spine,
// vasculitis, systemic MSK, crystal arthropathy, soft tissue, fractures

    // Q01 — correct: A
    {
        question: "A biopsy from healthy cortical bone shows parallel lamellae arranged concentrically around a central canal, with osteocytes in lacunae.\n\nWhich structural unit does this describe?",
        options: {
            A: "Haversian system",
            B: "Volkmann's canal",
            C: "Trabecular unit",
            D: "Periosteal layer",
            E: "Endosteal surface"
        },
        correctAnswer: "A",
        explanation: "The Haversian system (osteon) is the basic structural unit of cortical bone. Concentric lamellae of mineralised collagen surround a central Haversian canal containing a blood vessel and nerve. Osteocytes in lacunae communicate via canaliculi, providing both mechanical strength and a means to sustain metabolic activity throughout bone."
    },
    // Q02 — correct: D
    {
        question: "Osteoclasts are derived from haematopoietic precursors and are uniquely adapted for bone resorption.\n\nWhich cellular structure is essential for osteoclast function?",
        options: {
            A: "Rough endoplasmic reticulum",
            B: "Tight junctions",
            C: "Primary cilia",
            D: "Ruffled border",
            E: "Pinocytic vesicles"
        },
        correctAnswer: "D",
        explanation: "The ruffled border is the highly infolded apical plasma membrane of the osteoclast facing the bone surface. It creates a sealed resorption lacuna into which hydrochloric acid (via V-ATPase) and lysosomal enzymes (cathepsin K) are secreted to dissolve bone mineral and matrix. This specialised membrane dramatically increases the surface area available for resorption."
    },
    // Q03 — correct: E
    {
        question: "A researcher examines the zone of provisional calcification in a developing long bone.\n\nIn which zone of the growth plate does endochondral ossification primarily occur?",
        options: {
            A: "Resting zone",
            B: "Proliferating zone",
            C: "Remodelling zone",
            D: "Calcification zone",
            E: "Hypertrophic zone"
        },
        correctAnswer: "E",
        explanation: "In the hypertrophic zone, chondrocytes enlarge dramatically, release matrix vesicles that initiate mineralisation, and undergo apoptosis. This creates a scaffold of calcified cartilage that is invaded by blood vessels and replaced by woven bone. Disruption of this zone \u2014 as in rickets \u2014 causes unmineralised osteoid accumulation and a widened growth plate on X-ray."
    },
    // Q04 — correct: B
    {
        question: "A patient with Paget's disease of bone has markedly elevated alkaline phosphatase. Biopsy shows a chaotic mosaic pattern of lamellar bone.\n\nWhich abnormality of bone remodelling best explains this histological appearance?",
        options: {
            A: "Absent osteoclast activity",
            B: "Excessive and disorganised osteoclast and osteoblast activity",
            C: "Pure osteoblastic new bone formation",
            D: "Failure of mineralisation",
            E: "Cortical thinning from osteoclast activity alone"
        },
        correctAnswer: "B",
        explanation: "Paget's disease is characterised by markedly increased but disorganised bone turnover. Excessive osteoclastic resorption is followed by rapid, poorly organised osteoblastic bone formation, producing the hallmark mosaic pattern of irregular cement lines on histology. The resulting bone is enlarged but structurally weak, predisposing to deformity, fracture, and \u2014 rarely \u2014 osteosarcoma."
    },
    // Q05 — correct: E
    {
        question: "During normal gait, the hip abductor mechanism must prevent pelvic drop on the contralateral side.\n\nWhich muscle group primarily provides this stabilising force?",
        options: {
            A: "Hip flexors",
            B: "Hip adductors",
            C: "Gluteus maximus",
            D: "Piriformis",
            E: "Gluteus medius and minimus"
        },
        correctAnswer: "E",
        explanation: "Gluteus medius and minimus (superior gluteal nerve, L4\u2013S1) are the primary hip abductors that stabilise the pelvis during the single-limb stance phase of gait. Weakness \u2014 from superior gluteal nerve injury, hip OA, or hip replacement complications \u2014 produces a Trendelenburg gait, where the pelvis drops on the unsupported side during stance."
    },
    // Q06 — correct: A
    {
        question: "The glenoid labrum deepens the glenoid cavity and contributes to shoulder stability.\n\nWhich structure forms the primary static anterior restraint of the glenohumeral joint?",
        options: {
            A: "Inferior glenohumeral ligament",
            B: "Coracoacromial ligament",
            C: "Coracohumeral ligament",
            D: "Transverse humeral ligament",
            E: "Superior glenohumeral ligament"
        },
        correctAnswer: "A",
        explanation: "The inferior glenohumeral ligament (IGHL) \u2014 particularly its anterior band \u2014 is the primary static restraint against anterior glenohumeral translation in abduction and external rotation. The IGHL is torn or avulsed (Bankart lesion) in the majority of anterior shoulder dislocations. The coracohumeral ligament limits inferior translation and external rotation in adduction."
    },
    // Q07 — correct: B
    {
        question: "A patient presents with wrist drop following a humeral shaft fracture. Sensation is reduced over the dorsum of the hand.\n\nAt which site is the radial nerve most vulnerable to injury in this fracture?",
        options: {
            A: "Posterior cord of the brachial plexus",
            B: "Radial groove of the humerus",
            C: "Quadrangular space",
            D: "Lateral epicondyle",
            E: "Arcade of Frohse"
        },
        correctAnswer: "B",
        explanation: "The radial nerve runs in the spiral (radial) groove of the humerus, closely applied to the posterior diaphysis. Mid-shaft humeral fractures here produce the classic wrist drop with sensory loss over the dorsum of the hand. Branches to triceps arise proximal to the groove, so elbow extension is preserved \u2014 distinguishing a spiral groove lesion from a more proximal injury at the posterior cord."
    },
    // Q08 — correct: E
    {
        question: "During a muscle contraction, thin and thick filaments slide past each other.\n\nWhich band of the sarcomere remains constant in length during contraction?",
        options: {
            A: "I band",
            B: "H zone",
            C: "Z line spacing",
            D: "Sarcomere length overall",
            E: "A band"
        },
        correctAnswer: "E",
        explanation: "The A band represents the full length of the thick (myosin) filaments and remains constant during contraction because the myosin filaments do not shorten \u2014 they are stationary relative to each other. The I band (thin filaments only) and H zone (thick filaments only, no overlap) both shorten as thin filaments slide inward. This is key evidence for the sliding filament theory."
    },
    // Q09 — correct: E
    {
        question: "A patient is prescribed pyridostigmine for myasthenia gravis.\n\nWhat is the mechanism by which this drug improves muscle strength?",
        options: {
            A: "Increases acetylcholine synthesis at the presynaptic terminal",
            B: "Blocks autoantibodies against acetylcholine receptors",
            C: "Enhances calcium release from the sarcoplasmic reticulum",
            D: "Directly stimulates postsynaptic nicotinic receptors",
            E: "Prevents breakdown of acetylcholine in the synaptic cleft"
        },
        correctAnswer: "E",
        explanation: "Pyridostigmine competitively inhibits acetylcholinesterase, prolonging the presence of acetylcholine in the synaptic cleft. This allows repeated binding to the reduced number of available receptors, increasing the probability of achieving a suprathreshold end-plate potential. It treats symptoms only \u2014 the underlying autoimmune process requires immunosuppression (steroids, azathioprine) for disease modification."
    },
    // Q10 — correct: B
    {
        question: "A patient with suspected myasthenia gravis undergoes repetitive nerve stimulation.\n\nWhich electromyographic finding is characteristic of this condition?",
        options: {
            A: "Increased amplitude with repetitive stimulation",
            B: "Decremental response with repetitive stimulation",
            C: "Normal amplitude throughout testing",
            D: "Spontaneous fibrillation potentials at rest",
            E: "Fasciculation potentials throughout the muscle"
        },
        correctAnswer: "B",
        explanation: "In myasthenia gravis, autoantibodies against acetylcholine receptors reduce the number of functional receptors at the neuromuscular junction. With repetitive nerve stimulation, successive action potentials release progressively less acetylcholine (normal physiology), but with fewer receptors available the end-plate potential falls below threshold \u2014 producing a decremental (falling amplitude) response. Lambert-Eaton syndrome, by contrast, shows a facilitating incremental response due to presynaptic calcium channel antibodies."
    },
    // Q11 — correct: B
    {
        question: "A 45-year-old woman with seropositive rheumatoid arthritis presents with ulnar deviation and swan-neck deformities.\n\nWhich pathological process primarily drives joint destruction in rheumatoid arthritis?",
        options: {
            A: "Urate crystal deposition in the synovial fluid",
            B: "Pannus erosion of articular cartilage and subchondral bone",
            C: "Periarticular osteoporosis from disuse",
            D: "Calcium pyrophosphate crystal formation",
            E: "Fibrocartilage degeneration from mechanical load"
        },
        correctAnswer: "B",
        explanation: "Chronic synovial inflammation in RA leads to pannus formation \u2014 an invasive layer of fibroblast-like synoviocytes and macrophages that secretes matrix metalloproteinases and pro-inflammatory cytokines (TNF, IL-1, IL-6). These directly erode articular cartilage and subchondral bone at the joint margins, producing characteristic marginal erosions on X-ray and explaining the progressive joint destruction seen in untreated disease."
    },
    // Q12 — correct: B
    {
        question: "A patient with rheumatoid arthritis has a DAS28 score of 5.1 on methotrexate monotherapy.\n\nWhat does this score indicate about current disease status?",
        options: {
            A: "Low disease activity \u2014 continue current therapy",
            B: "High disease activity \u2014 escalate treatment",
            C: "Moderate disease activity \u2014 optimise methotrexate dose",
            D: "Remission \u2014 consider cautious de-escalation",
            E: "Normal result \u2014 no action required"
        },
        correctAnswer: "B",
        explanation: "The DAS28 incorporates tender and swollen joint count (28 joints), CRP or ESR, and patient global assessment. Score: <2.6 = remission; 2.6\u20133.2 = low; 3.2\u20135.1 = moderate; >5.1 = high disease activity. A score of 5.1 indicates high disease activity and NICE/BSR guidelines recommend treatment escalation \u2014 adding a second conventional DMARD or initiating a biologic agent (e.g. anti-TNF)."
    },
    // Q13 — correct: C
    {
        question: "A patient with rheumatoid arthritis develops bilateral basal crackles and a restrictive pattern on pulmonary function testing.\n\nWhich extra-articular complication most likely explains these findings?",
        options: {
            A: "Pleural effusion from pleuritis",
            B: "Pulmonary hypertension from systemic vasculitis",
            C: "Interstitial lung disease",
            D: "Pulmonary rheumatoid nodules",
            E: "Drug-induced pneumonitis from hydroxychloroquine"
        },
        correctAnswer: "C",
        explanation: "Interstitial lung disease (ILD) is the most clinically significant pulmonary extra-articular manifestation of RA, occurring in approximately 10% of patients. HRCT shows UIP or NSIP patterns with bilateral reticular shadowing. PFTs show a restrictive pattern with reduced TLCO. Risk factors include male sex, smoking, high-titre RF/anti-CCP, and methotrexate use \u2014 making methotrexate-induced pneumonitis an important differential that must always be considered."
    },
    // Q14 — correct: D
    {
        question: "A 52-year-old man on thiazide diuretics presents with an acutely swollen, red, hot first metatarsophalangeal joint. Joint aspiration is performed.\n\nWhat would polarised light microscopy of the aspirate most likely demonstrate?",
        options: {
            A: "Weakly positively birefringent rhomboid crystals",
            B: "Positively birefringent rectangular crystals",
            C: "Weakly negatively birefringent needle-shaped crystals",
            D: "Strongly negatively birefringent needle-shaped crystals",
            E: "Non-birefringent amorphous debris"
        },
        correctAnswer: "D",
        explanation: "Gout is characterised by monosodium urate (MSU) crystals that are needle-shaped and strongly negatively birefringent \u2014 appearing yellow when aligned parallel to the slow vibration direction of the compensator. CPPD crystals in pseudogout are rhomboid-shaped and weakly positively birefringent (appear blue). The first MTP joint (podagra) is the classic site of acute gout; thiazide diuretics precipitate attacks by reducing renal urate excretion."
    },
    // Q15 — correct: E
    {
        question: "A 65-year-old woman with recurrent gout is started on allopurinol for long-term urate reduction.\n\nWhat is the mechanism of action of allopurinol?",
        options: {
            A: "Increases renal excretion of uric acid",
            B: "Blocks the URAT1 urate transporter in the renal tubule",
            C: "Chelates urate crystals in synovial fluid",
            D: "Promotes enzymatic conversion of urate to allantoin",
            E: "Inhibits xanthine oxidase, reducing uric acid synthesis"
        },
        correctAnswer: "E",
        explanation: "Allopurinol is a structural analogue of hypoxanthine that competitively inhibits xanthine oxidase, the enzyme catalysing the final two steps of purine catabolism (hypoxanthine \u2192 xanthine \u2192 uric acid). This reduces uric acid production. Febuxostat is a non-purine selective xanthine oxidase inhibitor. Probenecid and lesinurad are uricosuric agents that block the URAT1 transporter. Rasburicase is recombinant uricase used in tumour lysis syndrome."
    },
    // Q16 — correct: D
    {
        question: "A 70-year-old man with hip osteoarthritis describes groin pain spreading to the anterior thigh and knee. Examination reproduces the pain with passive hip internal rotation.\n\nWhich feature most strongly supports hip osteoarthritis rather than lumbar spine pathology?",
        options: {
            A: "Pain radiating below the knee",
            B: "Paraesthesia in the L4 dermatome",
            C: "Bilateral leg pain on exertion",
            D: "Pain reproduced by passive internal rotation of the hip",
            E: "Pain aggravated by coughing or sneezing"
        },
        correctAnswer: "D",
        explanation: "Loss of internal rotation is the earliest and most sensitive physical sign of hip osteoarthritis. Passive internal rotation in the supine position compresses the hip joint capsule, reproducing the patient's groin pain. Pain radiating below the knee, dermatomal paraesthesia, and Valsalva provocation suggest lumbar nerve root involvement rather than hip pathology. The hip examination finding is more discriminating than the referred pain pattern alone."
    },
    // Q17 — correct: A
    {
        question: "On examination of a patient with knee osteoarthritis, bony swellings are palpated at the distal interphalangeal joints of both hands.\n\nWhat is the clinical name for this finding?",
        options: {
            A: "Heberden's nodes",
            B: "Bouchard's nodes",
            C: "Tophi",
            D: "Rheumatoid nodules",
            E: "Gottron's papules"
        },
        correctAnswer: "A",
        explanation: "Heberden's nodes are bony osteophytes at the distal interphalangeal (DIP) joints and are a classic sign of generalised osteoarthritis, representing subchondral bone proliferation in response to cartilage degeneration. Bouchard's nodes are the equivalent finding at the PIP joints. Tophi are monosodium urate deposits in gout. Rheumatoid nodules occur over extensor surfaces. Gottron's papules are violaceous plaques over the knuckles in dermatomyositis."
    },
    // Q18 — correct: E
    {
        question: "A 26-year-old HLA-B27 positive man presents with 6 months of inflammatory back pain. MRI of the sacroiliac joints shows bilateral bone marrow oedema.\n\nWhich classification criterion does this most directly fulfil?",
        options: {
            A: "EULAR criteria for Takayasu arteritis",
            B: "Modified New York criteria for ankylosing spondylitis",
            C: "CASPAR criteria for psoriatic arthritis",
            D: "ACR/EULAR criteria for rheumatoid arthritis",
            E: "ASAS axial SpA \u2014 imaging arm"
        },
        correctAnswer: "E",
        explanation: "The ASAS criteria for axial SpA have two arms: the imaging arm (sacroiliitis on MRI or X-ray plus at least one SpA feature) and the clinical arm (HLA-B27 positive plus at least two SpA features). MRI showing active bone marrow oedema in a young patient with inflammatory back pain fulfils the imaging arm. MRI-positive but X-ray-negative disease is non-radiographic axSpA (nr-axSpA) \u2014 distinct from AS, which requires radiographic sacroiliitis by the Modified New York Criteria."
    },
    // Q19 — correct: A
    {
        question: "A patient with ankylosing spondylitis sustains a cervical spine fracture after a minor fall in the bathroom.\n\nWhy are patients with ankylosing spondylitis particularly vulnerable to spinal fracture from low-energy trauma?",
        options: {
            A: "The fused rigid spine acts as a long lever arm, concentrating force at a brittle fixed segment",
            B: "Osteoporosis from long-term corticosteroid use",
            C: "Ligamentous laxity from chronic inflammation",
            D: "Inflammatory osteolysis weakening vertebral bodies",
            E: "Severe muscle atrophy from cachexia"
        },
        correctAnswer: "A",
        explanation: "In advanced AS, the entire spine may be fused into a rigid unit ('bamboo spine'), eliminating the normal shock-absorbing capacity of intervertebral discs and facet joints. A low-energy force is therefore concentrated at a single rigid level, generating enormous stress. The resulting fractures are typically unstable, carry a high risk of spinal cord injury, and can be extremely difficult to see on plain X-ray \u2014 always requiring CT or MRI."
    },
    // Q20 — correct: A
    {
        question: "A 12-year-old overweight boy presents with a painful limp. The affected hip lies in external rotation with obligate external rotation on flexion.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Slipped capital femoral epiphysis",
            B: "Transient synovitis",
            C: "Septic arthritis of the hip",
            D: "Perthes' disease",
            E: "Developmental dysplasia of the hip"
        },
        correctAnswer: "A",
        explanation: "SCFE classically presents in overweight adolescents (10\u201315 years), more commonly boys. The leg lies in external rotation with obligate external rotation on hip flexion \u2014 a pathognomonic sign. Knee pain is a common referred symptom and a classic examination trap. X-ray shows posterior and inferior displacement of the femoral epiphysis ('ice cream falling off the cone' sign). Urgent orthopaedic referral for in-situ screw fixation is required to prevent avascular necrosis."
    },
    // Q21 — correct: D
    {
        question: "A 4-year-old boy presents with sudden refusal to use his left arm after being lifted by his wrist. The arm hangs limply with the forearm pronated.\n\nWhich injury has most likely occurred?",
        options: {
            A: "Supracondylar fracture of the humerus",
            B: "Radial head fracture",
            C: "Fracture of the clavicle",
            D: "Nursemaid's elbow (pulled elbow)",
            E: "Distal radius buckle fracture"
        },
        correctAnswer: "D",
        explanation: "Nursemaid's elbow (radial head subluxation) is the most common elbow injury in young children (1\u20135 years). Longitudinal traction on the forearm (e.g. lifting by the wrist) causes the annular ligament to slip over the radial head and become interposed in the radiocapitellar joint. The child holds the arm limply in pronation and refuses to use it. Reduction by supination combined with elbow flexion typically produces an immediate return of movement."
    },
    // Q22 — correct: D
    {
        question: "A 9-year-old child is found to have a 35-degree scoliotic curve on standing X-ray. No underlying cause is identified.\n\nHow is idiopathic scoliosis most commonly classified?",
        options: {
            A: "Congenital, acquired, or neuromuscular",
            B: "Structural or non-structural (postural)",
            C: "By curve magnitude \u2014 mild, moderate, or severe",
            D: "By age of onset \u2014 infantile, juvenile, or adolescent",
            E: "By vertebral rotation \u2014 Cobb grade I, II, or III"
        },
        correctAnswer: "D",
        explanation: "Idiopathic scoliosis is classified by age of onset: infantile (0\u20133 years), juvenile (3\u201310 years), and adolescent (>10 years). Adolescent idiopathic scoliosis (AIS) is the most common form, predominantly affecting girls. Management is guided by curve magnitude: <25\u00b0 \u2014 observe; 25\u201345\u00b0 in growing patients \u2014 brace; >45\u00b0 \u2014 surgical correction. Non-structural scoliosis corrects fully on forward flexion, distinguishing it from structural scoliosis."
    },
    // Q23 — correct: D
    {
        question: "A 75-year-old woman falls onto her outstretched hand. X-ray shows a distal radius fracture with dorsal angulation and radial shortening.\n\nWhich eponymous fracture does this describe?",
        options: {
            A: "Smith's fracture",
            B: "Chauffeur's fracture",
            C: "Barton's fracture",
            D: "Colles' fracture",
            E: "Monteggia fracture"
        },
        correctAnswer: "D",
        explanation: "A Colles' fracture is a transverse fracture of the distal radius within 2 cm of the radiocarpal joint with dorsal displacement and angulation, producing the classic 'dinner fork' deformity. It is the most common fracture in postmenopausal women. Smith's fracture involves volar angulation ('garden spade' deformity). A Barton's fracture involves the articular surface of the distal radius. Both Colles' and Smith's fractures often result from a FOOSH mechanism."
    },
    // Q24 — correct: D
    {
        question: "A 35-year-old motorcyclist sustains a mid-shaft femur fracture and is haemodynamically compromised.\n\nApproximately how much blood can be lost into a closed mid-shaft femur fracture?",
        options: {
            A: "100\u2013200 mL",
            B: "200\u2013500 mL",
            C: "500 mL to 1 litre",
            D: "1 to 2 litres",
            E: "2 to 3 litres"
        },
        correctAnswer: "D",
        explanation: "A closed femoral shaft fracture can accommodate 1\u20132 litres of blood within the thigh compartment, representing Class II haemorrhagic shock (15\u201330% blood volume loss). This explains the tachycardia and relative hypotension. Temporary stabilisation with a traction splint tamponades the fracture haematoma and reduces ongoing blood loss. Recognition of occult haemorrhage in long bone fractures is critical during the ATLS primary survey."
    },
    // Q25 — correct: B
    {
        question: "An X-ray of a 7-year-old child's distal radius following a fall shows widening and irregularity of the growth plate without displacement of the epiphysis.\n\nAccording to the Salter-Harris classification, what type of fracture is this?",
        options: {
            A: "Salter-Harris type II",
            B: "Salter-Harris type I",
            C: "Salter-Harris type III",
            D: "Salter-Harris type IV",
            E: "Salter-Harris type V"
        },
        correctAnswer: "B",
        explanation: "The Salter-Harris classification describes growth plate (physeal) fractures. Type I involves the physis alone \u2014 widening or irregularity without a visible fracture line through metaphysis or epiphysis. Type II (most common, 75%) involves physis and metaphysis. Type III involves physis and epiphysis. Type IV crosses all three zones. Type V is a crush injury. Types III\u2013V have the worst prognosis as they involve the germinal layer or epiphysis, risking growth disturbance."
    },
    // Q26 — correct: A
    {
        question: "A 28-year-old rugby player hears a 'pop' in his knee after a valgus-external rotation injury. The knee develops an immediate tense haemarthrosis. The Lachman test is positive.\n\nWhich ligament is most likely injured?",
        options: {
            A: "Anterior cruciate ligament",
            B: "Lateral collateral ligament",
            C: "Medial collateral ligament",
            D: "Posterior cruciate ligament",
            E: "Arcuate ligament complex"
        },
        correctAnswer: "A",
        explanation: "ACL rupture classically presents with a 'pop', immediate haemarthrosis (up to 80% of acute haemarthroses are ACL tears due to its intrasynovial blood supply), and instability. The Lachman test (anterior tibial translation at 20\u201330\u00b0 flexion) is the most sensitive clinical test (85%). MCL injury causes medial joint line tenderness and pain on valgus stress but does not typically produce haemarthrosis."
    },
    // Q27 — correct: D
    {
        question: "An MRI shows a horizontal cleavage tear of the posterior horn of the medial meniscus in a 35-year-old runner.\n\nWhich part of the meniscus is most likely to heal without surgical intervention?",
        options: {
            A: "The avascular inner white zone",
            B: "The anterior horn attachment",
            C: "The mid-substance grey zone",
            D: "The highly vascular outer red zone",
            E: "The meniscocapsular junction"
        },
        correctAnswer: "D",
        explanation: "The outer third (red zone) of the meniscus receives direct vascular supply from the perimeniscal capillary plexus and has healing potential, making primary repair appropriate. The inner two-thirds (white zone) is avascular, receiving nutrition by diffusion from synovial fluid \u2014 it has poor healing potential and tears typically require partial meniscectomy if symptomatic. This vascular anatomy is fundamental to surgical decision-making in meniscal pathology."
    },
    // Q28 — correct: A
    {
        question: "A 40-year-old recreational tennis player presents with gradual onset lateral elbow pain reproduced by resisted wrist extension and gripping.\n\nWhich tendon is primarily affected in lateral epicondylitis?",
        options: {
            A: "Extensor carpi radialis brevis at the lateral epicondyle",
            B: "Biceps tendon at the radial tuberosity",
            C: "Common flexor tendon at the medial epicondyle",
            D: "Extensor digitorum communis",
            E: "Anconeus"
        },
        correctAnswer: "A",
        explanation: "Lateral epicondylitis primarily involves degenerative tendinosis of the extensor carpi radialis brevis (ECRB) at its origin on the lateral epicondyle. Its angular origin and high mechanical demands during wrist extension and forearm pronation make it most vulnerable. Histologically, the lesion shows angiofibroblastic tendinosis \u2014 collagen disorganisation, neovascularisation, no inflammatory infiltrate \u2014 confirming a degenerative rather than inflammatory process, and explaining why 'tendinosis' is the more accurate term."
    },
    // Q29 — correct: C
    {
        question: "A 17-year-old boy presents with worsening pain and swelling around the distal femur. X-ray shows a 'sunburst' periosteal reaction and Codman's triangle. MRI shows soft tissue extension.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Ewing's sarcoma",
            B: "Giant cell tumour of bone",
            C: "Osteosarcoma",
            D: "Chondrosarcoma",
            E: "Osteoblastoma"
        },
        correctAnswer: "C",
        explanation: "Osteosarcoma is the most common primary malignant bone tumour in adolescents (peak 10\u201320 years). Classic X-ray features are a 'sunburst' periosteal reaction and Codman's triangle (periosteal elevation at the tumour margin). The distal femur and proximal tibia account for 50% of cases. MRI defines medullary and soft tissue extent. Treatment is neo-adjuvant chemotherapy followed by wide surgical resection. Ewing's sarcoma produces an 'onion skin' periosteal reaction."
    },
    // Q30 — correct: C
    {
        question: "A 55-year-old man presents with a lytic epiphyseal lesion in the distal femur. Biopsy shows giant cells scattered among mononuclear stromal cells. No primary tumour is identified elsewhere.\n\nWhich tumour does this most likely represent?",
        options: {
            A: "Osteosarcoma",
            B: "Chondrosarcoma",
            C: "Giant cell tumour of bone",
            D: "Ewing's sarcoma",
            E: "Metastatic renal cell carcinoma"
        },
        correctAnswer: "C",
        explanation: "Giant cell tumour of bone (GCTB) is a locally aggressive but histologically benign tumour characterised by abundant osteoclast-like multinucleated giant cells within a mononuclear stromal cell background. It typically occurs at the epiphysis of long bones in skeletally mature adults (20\u201345 years), most commonly around the knee. X-ray shows a lytic, eccentric, epiphyseal lesion extending to the articular surface. Denosumab (anti-RANKL) is used for unresectable cases."
    },
    // Q31 — correct: B
    {
        question: "A 60-year-old woman with known breast cancer presents with sudden thoracic back pain. X-ray shows a collapsed vertebral body. Bone scan shows multiple areas of increased uptake.\n\nWhich type of bone lesion is most characteristic of breast cancer metastases?",
        options: {
            A: "Purely lytic",
            B: "Mixed lytic and sclerotic",
            C: "Purely sclerotic",
            D: "Expansile with soap-bubble appearance",
            E: "Periosteal reaction only"
        },
        correctAnswer: "B",
        explanation: "Breast cancer metastases classically produce mixed lytic and sclerotic bone lesions. Purely lytic metastases are seen with renal cell carcinoma, thyroid cancer, and myeloma. Purely sclerotic metastases are characteristic of prostate cancer. Myeloma can produce false-negative bone scans because there is no osteoblastic response to its purely lytic lesions. Vertebral collapse always requires urgent assessment for spinal cord compression."
    },
    // Q32 — correct: B
    {
        question: "A 42-year-old man presents with left-sided sciatica. Straight leg raise is positive at 40 degrees on the left. MRI shows a posterolateral disc prolapse at L4/L5.\n\nWhich nerve root is most likely compressed?",
        options: {
            A: "L3 nerve root",
            B: "L5 nerve root",
            C: "L4 nerve root",
            D: "S1 nerve root",
            E: "S2 nerve root"
        },
        correctAnswer: "B",
        explanation: "A posterolateral disc prolapse at L4/L5 compresses the traversing L5 nerve root. L5 root compression causes weakness of ankle dorsiflexion and great toe extension (extensor hallucis longus), and sensory loss over the dorsum of the foot and lateral leg. S1 compression (from an L5/S1 disc) causes ankle jerk reduction and weakness of plantarflexion. This distinction is critical for clinical nerve root localisation."
    },
    // Q33 — correct: C
    {
        question: "A 68-year-old woman has bilateral leg pain and heaviness coming on after walking 200 metres, relieved by sitting or leaning forward.\n\nWhat is the most likely diagnosis and its underlying mechanism?",
        options: {
            A: "Peripheral arterial disease \u2014 reduced blood flow to lower limb muscles on exertion",
            B: "L4/L5 disc prolapse \u2014 repetitive disc compression during walking",
            C: "Lumbar spinal stenosis \u2014 extension during walking narrows the spinal canal, compressing the cauda equina",
            D: "Diabetic peripheral neuropathy \u2014 symptoms worsened by physical activity",
            E: "Deep venous obstruction \u2014 venous hypertension on exertion"
        },
        correctAnswer: "C",
        explanation: "Neurogenic claudication from lumbar spinal stenosis is the classic diagnosis in this age group. Lumbar extension reduces the cross-sectional area of the spinal canal, compressing the cauda equina. Flexion (sitting, leaning forward on a shopping trolley) opens the canal and relieves symptoms. This postural component distinguishes neurogenic from vascular claudication \u2014 vascular claudication is not postural and resolves with standing still, not specifically with spinal flexion."
    },
    // Q34 — correct: E
    {
        question: "A patient with back pain attends the emergency department. You identify a symptom requiring urgent assessment.\n\nWhich feature represents a red flag requiring urgent assessment for cauda equina syndrome?",
        options: {
            A: "Unilateral sciatica radiating below the knee",
            B: "Localised lumbar tenderness on palpation",
            C: "Morning stiffness lasting 30 minutes",
            D: "Mechanical back pain worse with activity",
            E: "Saddle area numbness"
        },
        correctAnswer: "E",
        explanation: "Saddle anaesthesia (numbness over the perineum, inner thighs, and genitalia) is a cardinal red flag for cauda equina syndrome \u2014 indicating compression of the sacral nerve roots (S3\u2013S5) supplying the perineum. Other red flags include bilateral leg weakness, bladder/bowel dysfunction, and urinary retention with overflow. Suspected cauda equina syndrome requires urgent MRI of the lumbar spine and same-day surgical assessment to prevent permanent sphincteric dysfunction."
    },
    // Q35 — correct: D
    {
        question: "A patient on long-term prednisolone for polymyalgia rheumatica develops a vertebral compression fracture.\n\nWhich mechanism best explains why glucocorticoids increase fracture risk?",
        options: {
            A: "Increased calcium absorption from the gut",
            B: "Stimulation of osteoblast differentiation",
            C: "Reduced renal calcium excretion",
            D: "Inhibition of osteoblast function and promotion of osteoclast activity",
            E: "Increased vitamin D hydroxylation in the kidney"
        },
        correctAnswer: "D",
        explanation: "Glucocorticoids impair bone formation by inhibiting osteoblast differentiation and inducing osteoblast apoptosis, while promoting osteoclast survival and reducing intestinal calcium absorption (raising PTH). The greatest bone loss occurs in the first 3\u20136 months of steroid use. NICE recommends bisphosphonates with calcium and vitamin D supplementation in all patients starting prednisolone \u22657.5 mg/day for \u22653 months."
    },
    // Q36 — correct: E
    {
        question: "A patient with active rheumatoid arthritis is about to start adalimumab. A tuberculin skin test is strongly positive.\n\nWhat is the most appropriate management before initiating biologic therapy?",
        options: {
            A: "Proceed with adalimumab \u2014 the tuberculin result is irrelevant",
            B: "Start adalimumab immediately alongside anti-TB therapy",
            C: "Complete a full course of anti-TB treatment before any biologic",
            D: "Abandon biologic therapy entirely and use methotrexate only",
            E: "Start latent TB treatment and defer adalimumab until treatment is established"
        },
        correctAnswer: "E",
        explanation: "TNF-alpha is critical for granuloma formation and containment of latent Mycobacterium tuberculosis. Anti-TNF therapy carries significant risk of reactivating latent TB. Standard protocol: treat with isoniazid for 6 months (or isoniazid + rifampicin for 3 months) and defer the biologic until at least 1\u20132 months of anti-TB treatment have been completed. All patients require baseline chest X-ray, Mantoux/IGRA, and hepatitis B/C/HIV screening before starting biologics."
    },
    // Q37 — correct: C
    {
        question: "A 55-year-old man with gout is started on febuxostat after failing allopurinol due to hypersensitivity.\n\nHow does febuxostat differ mechanistically from allopurinol?",
        options: {
            A: "It is a uricosuric agent acting on the URAT1 transporter",
            B: "It promotes enzymatic conversion of urate to allantoin",
            C: "It is a non-purine selective inhibitor of xanthine oxidase",
            D: "It blocks renal tubular secretion of urate",
            E: "It chelates urate crystals directly in synovial tissue"
        },
        correctAnswer: "C",
        explanation: "Both allopurinol and febuxostat inhibit xanthine oxidase, but by different mechanisms. Allopurinol is a purine analogue metabolised to oxypurinol. Febuxostat is a non-purine, selective, competitive inhibitor that does not require metabolic activation and does not cross-react with allopurinol hypersensitivity (often HLA-B*5801 mediated). Uricosuric agents (probenecid, lesinurad) block the URAT1 transporter. Rasburicase is recombinant uricase."
    },
    // Q38 — correct: C
    {
        question: "An 80-year-old woman with osteoporosis is started on an oral bisphosphonate.\n\nWhy must oral bisphosphonates be taken fasting with a full glass of water, remaining upright for at least 30 minutes?",
        options: {
            A: "To maximise absorption through the gastric mucosa",
            B: "To reduce nephrotoxicity by diluting the drug in the tubules",
            C: "To prevent oesophageal ulceration and improve bioavailability",
            D: "To ensure the drug reaches the small intestine before gastric acid degrades it",
            E: "To avoid drug interactions with breakfast foods"
        },
        correctAnswer: "C",
        explanation: "Oral bisphosphonates (e.g. alendronate, risedronate) have very poor oral bioavailability (~1%) due to poor GI absorption and degradation by food. They are also directly irritant to the oesophageal mucosa, causing severe oesophagitis and ulceration if not washed fully into the stomach \u2014 hence fasting administration, a large glass of water, and remaining upright for 30 minutes. Patients with oesophageal disorders should be considered for IV bisphosphonate (zoledronic acid) or denosumab instead."
    },
    // Q39 — correct: C
    {
        question: "A 68-year-old woman presents with new onset severe headache, scalp tenderness, jaw pain on chewing, and sudden painless loss of vision in one eye.\n\nWhich is the most appropriate initial management?",
        options: {
            A: "CT head to exclude subarachnoid haemorrhage first",
            B: "Temporal artery biopsy before commencing any treatment",
            C: "Commence high-dose corticosteroids immediately; arrange temporal artery biopsy within 2 weeks",
            D: "Carotid Doppler to exclude arterial occlusion",
            E: "Ophthalmology review and visual field testing alone"
        },
        correctAnswer: "C",
        explanation: "Giant cell arteritis (GCA) with anterior ischaemic optic neuropathy is a medical emergency. High-dose prednisolone (60\u201380 mg/day, or IV methylprednisolone if visual loss is recent) must be started immediately on clinical suspicion \u2014 before biopsy \u2014 because the risk of bilateral blindness is high. GCA histological changes persist for up to 2 weeks after starting steroids, so biopsy can be safely deferred. This 'treat first, confirm second' principle is unique to GCA and a classic exam scenario."
    },
    // Q40 — correct: C
    {
        question: "A 38-year-old man presents with haemoptysis, haematuria, and sinusitis. Bloods show c-ANCA positivity and creatinine of 280 \u00b5mol/L.\n\nWhich triad of organ involvement is characteristic of this condition?",
        options: {
            A: "Lung, skin, and peripheral joints",
            B: "Kidney, liver, and spleen",
            C: "Upper respiratory tract, lung, and kidney",
            D: "Skin, gut, and kidney",
            E: "Heart, lung, and nervous system"
        },
        correctAnswer: "C",
        explanation: "The triad described is granulomatosis with polyangiitis (GPA, formerly Wegener's): sinusitis (upper respiratory tract), haemoptysis (lower respiratory tract), and haematuria with rising creatinine (glomerulonephritis). c-ANCA (anti-PR3) positivity supports this diagnosis. Renal biopsy shows focal segmental necrotising pauci-immune glomerulonephritis with crescents \u2014 requiring urgent treatment with cyclophosphamide and high-dose steroids to prevent end-stage renal failure."
    },
    // Q41 — correct: A
    {
        question: "A 55-year-old woman presents with skin thickening extending to the elbows, dysphagia, and positive anti-Scl-70 antibodies.\n\nWhich diagnosis does this most likely represent?",
        options: {
            A: "Diffuse cutaneous systemic sclerosis",
            B: "Dermatomyositis",
            C: "Systemic lupus erythematosus",
            D: "Sj\u00f6gren's syndrome",
            E: "Mixed connective tissue disease"
        },
        correctAnswer: "A",
        explanation: "Diffuse cutaneous systemic sclerosis (dcSSc) is characterised by skin thickening extending proximal to the elbows or knees. Anti-Scl-70 (anti-topoisomerase I) is associated with dcSSc and interstitial lung disease. Limited cutaneous SSc is confined to the face and distal extremities and is associated with anti-centromere antibody and pulmonary arterial hypertension. Oesophageal dysmotility causing dysphagia is the most common GI manifestation of systemic sclerosis."
    },
    // Q42 — correct: E
    {
        question: "A 45-year-old woman presents with 4 months of proximal muscle weakness affecting the shoulder and hip girdle, a CK of 4500 U/L, and myopathic EMG changes.\n\nWhich investigation is most useful for confirming the diagnosis?",
        options: {
            A: "Nerve conduction studies",
            B: "Serum uric acid",
            C: "Anti-nuclear antibody titre",
            D: "Plain X-ray of the shoulder girdle",
            E: "Muscle biopsy"
        },
        correctAnswer: "E",
        explanation: "Inflammatory myopathy (polymyositis or dermatomyositis) presents with proximal symmetrical muscle weakness, elevated CK, and myopathic EMG changes. Muscle biopsy is the definitive investigation: in polymyositis, CD8+ T-cells infiltrate within muscle fascicles (endomysial inflammation); in dermatomyositis, CD4+ T-cells cluster around blood vessels with perifascicular atrophy. Biopsy also excludes inclusion body myositis (rimmed vacuoles) and metabolic myopathies. MRI can guide biopsy to sites of active inflammation."
    },
    // Q43 — correct: B
    {
        question: "A 32-year-old woman with long-standing Raynaud's phenomenon develops finger ulcers and raised right ventricular pressure on echocardiography.\n\nWhich antibody is most strongly associated with pulmonary arterial hypertension in connective tissue disease?",
        options: {
            A: "Anti-dsDNA",
            B: "Anti-centromere",
            C: "Anti-Scl-70",
            D: "Anti-Jo-1",
            E: "Anti-Ro/SSA"
        },
        correctAnswer: "B",
        explanation: "Anti-centromere antibody (ACA) is strongly associated with limited cutaneous systemic sclerosis (formerly CREST syndrome) and specifically with pulmonary arterial hypertension (PAH) as a complication. PAH in limited SSc has an insidious onset and poor prognosis if untreated \u2014 patients should be screened annually with echocardiography and PFTs. Anti-Scl-70 is associated with diffuse SSc and ILD. Anti-Jo-1 is associated with antisynthetase syndrome. Anti-dsDNA is specific for SLE."
    },
    // Q44 — correct: D
    {
        question: "A 25-year-old gymnast falls and has clinical suspicion of a scaphoid fracture. The initial X-ray is normal.\n\nWhich investigation is most appropriate if clinical suspicion remains high?",
        options: {
            A: "Repeat X-ray in 2 weeks",
            B: "Bone scan at 72 hours",
            C: "Urgent MRI of the wrist",
            D: "CT scan of the wrist within 72 hours",
            E: "Ultrasound of the wrist"
        },
        correctAnswer: "D",
        explanation: "Scaphoid fractures are frequently radiographically occult on initial films (up to 20% of cases). The scaphoid's retrograde blood supply means even undisplaced fractures risk avascular necrosis of the proximal pole if not immobilised. NICE/BOA guidelines recommend CT within 72 hours for suspected scaphoid fractures with normal X-rays \u2014 CT has high sensitivity for cortical disruption and is more readily available and faster than MRI in most clinical settings."
    },
    // Q45 — correct: E
    {
        question: "A DEXA scan reports a T-score of -2.8 at the lumbar spine in a 65-year-old woman.\n\nWhat does this T-score indicate?",
        options: {
            A: "Normal bone density",
            B: "Osteopaenia",
            C: "Paget's disease of bone",
            D: "Severe osteoporosis with fragility fracture",
            E: "Osteoporosis"
        },
        correctAnswer: "E",
        explanation: "WHO DEXA T-score criteria compare the patient's BMD to the mean peak bone mass of a young adult reference population: \u2265-1.0 = normal; -1.0 to -2.5 = osteopaenia; \u2264-2.5 = osteoporosis; \u2264-2.5 with fragility fracture = severe osteoporosis. A T-score of -2.8 meets the threshold for osteoporosis. The FRAX tool calculates 10-year fracture risk and, alongside the T-score, guides decisions about pharmacological treatment."
    },
    // Q46 — correct: A
    {
        question: "An independently mobile 80-year-old woman sustains a displaced intracapsular femoral neck fracture. She has no cognitive impairment.\n\nWhich surgical option is most appropriate?",
        options: {
            A: "Total hip replacement",
            B: "Hemiarthroplasty",
            C: "Dynamic hip screw fixation",
            D: "Intramedullary nailing",
            E: "Conservative management with bed rest"
        },
        correctAnswer: "A",
        explanation: "NICE (NG38, 2017) recommends total hip replacement for displaced intracapsular neck of femur fractures in patients who were independently mobile before injury, are not cognitively impaired, and are medically fit. THR has better functional outcomes and lower revision rates than hemiarthroplasty in this group. Hemiarthroplasty is preferred for less mobile or cognitively impaired patients. Dynamic hip screw is for extracapsular (intertrochanteric) fractures. Intramedullary nailing is for subtrochanteric fractures."
    },
    // Q47 — correct: C
    {
        question: "A patient listed for total knee replacement asks about the most serious postoperative risk.\n\nWhat is the most common cause of death within 90 days of total knee replacement?",
        options: {
            A: "Periprosthetic joint infection",
            B: "Anaesthetic complications",
            C: "Pulmonary embolism",
            D: "Stroke",
            E: "Myocardial infarction"
        },
        correctAnswer: "C",
        explanation: "Venous thromboembolism (DVT and pulmonary embolism) is the leading cause of mortality within 90 days of total knee replacement. Venous stasis from tourniquet use and immobility, endothelial injury from surgery, and a postoperative hypercoagulable state create Virchow's triad. Without prophylaxis, DVT rates exceed 50%. NICE recommends VTE prophylaxis (LMWH, rivaroxaban, or aspirin depending on risk) for all patients undergoing lower limb joint replacement. Early mobilisation further reduces risk."
    },
    // Q48 — correct: B
    {
        question: "A 10-year-old child sustains a supracondylar humeral fracture. The hand is pale and pulseless.\n\nWhat is the most appropriate immediate management?",
        options: {
            A: "Urgent MRI to define fracture anatomy before any reduction",
            B: "Urgent closed reduction and percutaneous stabilisation with monitoring for vascular recovery",
            C: "Apply an above-elbow cast and observe overnight",
            D: "Nerve conduction studies to assess median nerve injury",
            E: "Apply a long arm splint and admit for 24-hour neurovascular monitoring"
        },
        correctAnswer: "B",
        explanation: "A supracondylar humerus fracture with vascular compromise (pulseless pale hand) is an orthopaedic emergency. Urgent closed reduction and K-wire stabilisation must be performed immediately with post-reduction pulse assessment. A pulseless ischaemic hand that does not recover after reduction requires immediate exploration. Delay risks Volkmann's ischaemic contracture \u2014 irreversible forearm compartment syndrome causing permanent flexion contracture. The anterior interosseous nerve is most commonly injured, causing weakness of thumb and index finger flexion."
    },
    // Q49 — correct: C
    {
        question: "A 38-year-old woman presents with 8 months of widespread musculoskeletal pain, fatigue, non-restorative sleep, and cognitive difficulties. All blood tests and imaging are normal.\n\nWhat is the current understanding of the underlying mechanism in fibromyalgia?",
        options: {
            A: "Autoimmune destruction of muscle fibres",
            B: "Occult seronegative inflammatory arthritis",
            C: "Central sensitisation with altered pain processing in the central nervous system",
            D: "Peripheral small-fibre neuropathy",
            E: "Mitochondrial myopathy causing fatigue and pain"
        },
        correctAnswer: "C",
        explanation: "Fibromyalgia is now understood as a central sensitisation syndrome \u2014 a disorder of pain processing rather than peripheral tissue damage or inflammation. Neuroimaging demonstrates amplified pain responses to stimuli and altered descending inhibitory pathways, explaining widespread pain, allodynia, and hyperalgesia. Treatment targets central sensitisation: aerobic exercise (strongest evidence base), cognitive behavioural therapy, and low-dose tricyclic antidepressants or duloxetine. NSAIDs and opioids are largely ineffective."
    },
    // Q50 — correct: A
    {
        question: "During limb development, the zone of polarising activity (ZPA) is located at the posterior margin of the limb bud.\n\nWhich signalling molecule produced by the ZPA specifies digit identity along the anteroposterior axis?",
        options: {
            A: "Sonic hedgehog (SHH)",
            B: "Bone morphogenetic protein (BMP)",
            C: "Fibroblast growth factor (FGF)",
            D: "Wnt3a",
            E: "Notch ligand delta"
        },
        correctAnswer: "A",
        explanation: "Sonic hedgehog (SHH) is the key morphogen produced by the ZPA that specifies digit identity along the anteroposterior (thumb-to-little finger) axis. High SHH corresponds to ulnar (posterior) digits. The apical ectodermal ridge (AER) produces FGFs to drive proximodistal limb outgrowth. BMPs regulate interdigital apoptosis. Mutations in SHH signalling pathways cause polydactyly, syndactyly, and a variety of limb defects."
    }
],
"pathology": [
    {
        question: "A 70-year-old woman with a previous history of cancer presents to her GP with a 5-week history of back pain. CT scan shows a sclerotic (bone-forming) metastatic lesion.\n\nWhat is the most likely primary cancer in this female patient?",
        options: {
            A: "Breast cancer",
            B: "Colorectal adenocarcinoma",
            C: "Pancreatic adenocarcinoma",
            D: "Osteosarcoma",
            E: "Giant cell tumour of bone"
        },
        correctAnswer: "A",
        explanation: "Sclerotic (bone-forming) metastases result from tumours that stimulate osteoblastic activity. The classic mnemonic is 'B&P' — Breast and Prostate are the most common causes of sclerotic bone metastases. In a female patient, breast cancer is the most likely primary. Breast metastases can actually be mixed (both sclerotic and osteolytic). Colorectal, pancreatic, and most other adenocarcinomas typically produce osteolytic (bone-destroying) metastases. Osteosarcoma and giant cell tumour are primary bone tumours, not metastatic primaries."
    },
    {
        question: "A 70-year-old man with a previous history of cancer presents to his GP with a 5-week history of back pain. CT scan shows a sclerotic (bone-forming) metastatic lesion.\n\nWhat is the most likely primary cancer in this male patient?",
        options: {
            A: "Prostatic adenocarcinoma",
            B: "Colorectal adenocarcinoma",
            C: "Pancreatic adenocarcinoma",
            D: "Osteosarcoma",
            E: "Giant cell tumour of bone"
        },
        correctAnswer: "A",
        explanation: "Prostatic adenocarcinoma is the most common cause of sclerotic bone metastases in men. The mnemonic 'B&P' (Breast and Prostate) captures the two most important causes. Prostate cancer characteristically spreads to the axial skeleton — lumbar spine, pelvis, and ribs — producing dense, sclerotic lesions due to osteoblastic stimulation. Colorectal and pancreatic adenocarcinomas typically produce osteolytic metastases. Osteosarcoma and giant cell tumour of bone are primary bone tumours, not sources of metastatic disease."
    },
    {
        question: "A 15-year-old male presents to his GP with pain around his knee that intensifies at night. The pain reliably improves with NSAIDs.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Osteosarcoma",
            B: "Osteoid osteoma",
            C: "Osteoma",
            D: "Ewing sarcoma",
            E: "Chondrosarcoma"
        },
        correctAnswer: "B",
        explanation: "Osteoid osteoma classically presents in young males with nocturnal bone pain that is dramatically relieved by NSAIDs. The pain is caused by production of prostaglandin E2 within the nidus (the central vascular core of the lesion), and by nerve fibres in the surrounding reactive zone — explaining why NSAIDs are so effective. It most commonly affects the long bones, particularly around the knee and hip. Osteosarcoma also affects this age group but does not respond to NSAIDs and carries a worse prognosis. Ewing sarcoma typically presents with a systemic inflammatory picture."
    },
    {
        question: "A 15-year-old male breaks his tibia during a football match.\n\nWhich cell type is primarily responsible for bone resorption?",
        options: {
            A: "Osteoblasts",
            B: "Osteoclasts",
            C: "Osteocytes",
            D: "Endothelial cells",
            E: "Fibroblasts"
        },
        correctAnswer: "B",
        explanation: "Osteoclasts are large, multinucleated cells derived from the monocyte-macrophage lineage that are responsible for bone resorption. A useful mnemonic is 'C for Cut' (osteoclasts) versus 'B for Build' (osteoblasts). Osteoclasts resorb bone by secreting acid and proteolytic enzymes at the ruffled border, dissolving the mineral matrix. This is essential for both normal bone remodelling and fracture healing. Osteoblasts synthesise new bone matrix; osteocytes are mature bone cells embedded in lacunae that act as mechanosensors."
    },
    {
        question: "A 16-year-old male breaks his tibia during a football match.\n\nWhat is the very first stage of fracture healing?",
        options: {
            A: "Haematoma formation",
            B: "Fibrocartilage formation",
            C: "Callus formation",
            D: "Ossification",
            E: "Consolidation"
        },
        correctAnswer: "A",
        explanation: "Fracture healing follows a sequential series of stages. The first response to fracture is haematoma formation — bleeding from damaged vessels creates a haematoma at the fracture site, which acts as a scaffold and source of growth factors. The stages can be remembered with the mnemonic 'He Fell Cracking Occiput and Cried for Rescue': (1) Haematoma formation, (2) Fibrocartilage formation, (3) Callus formation, (4) Ossification, (5) Consolidation, (6) Remodelling. Each stage is dependent on the previous one, and disruption of any stage (e.g. infection, movement, poor blood supply) can lead to delayed union or non-union."
    },
    {
        question: "A 14-year-old boy presents with knee pain and swelling. Imaging shows a periosteal reaction.\n\nWhat are the most characteristic radiological findings of osteosarcoma?",
        options: {
            A: "Onion skin appearance only",
            B: "Sunburst pattern and Codman triangle",
            C: "Soft tissue extension only",
            D: "Fluid-fluid levels",
            E: "Rings, arcs, and popcorn calcifications"
        },
        correctAnswer: "B",
        explanation: "Osteosarcoma produces two classic radiological signs due to aggressive periosteal reaction: (1) the Sunburst pattern — spiculated new bone radiating outward perpendicular to the cortex; and (2) Codman triangle — a triangular area of new bone at the periphery of the tumour where the periosteum is lifted from the cortex. These reflect the tumour's rapid growth outpacing periosteal containment. Rings, arcs, and popcorn calcifications are characteristic of cartilaginous tumours (chondrosarcoma). The onion skin periosteal reaction is classically associated with Ewing sarcoma."
    },
    {
        question: "A 70-year-old man with a known history of Paget's disease of bone develops a large painful bony mass. Histology shows lace-like osteoid production.\n\nWhat is the most common malignant neoplasm arising secondary to Paget's disease of bone?",
        options: {
            A: "Osteosarcoma",
            B: "Chondrosarcoma",
            C: "Chondroma",
            D: "Giant cell tumour of bone",
            E: "Osteoma"
        },
        correctAnswer: "A",
        explanation: "Osteosarcoma is the most feared and most common malignant complication of Paget's disease of bone. Pagetoid bone undergoes disorganised, chaotic remodelling — the chronically dysregulated osteoblast and osteoclast activity predisposes to malignant transformation. Secondary osteosarcoma in Paget's disease carries an extremely poor prognosis and typically occurs in older patients (unlike primary osteosarcoma, which peaks in adolescence). Lace-like osteoid production on histology is a hallmark of osteosarcoma. Giant cell tumour can also occur in Paget's disease but is less common."
    },
    {
        question: "A pathologist describes a bone tumour as a 'small blue cell tumour' on histological examination.\n\nWhich bone tumour is correctly described by this term?",
        options: {
            A: "Osteosarcoma",
            B: "Chondrosarcoma",
            C: "Osteoid osteoma",
            D: "Giant cell tumour of bone",
            E: "Ewing sarcoma"
        },
        correctAnswer: "E",
        explanation: "Ewing sarcoma is classified as a small round blue cell tumour — a group of malignant neoplasms characterised histologically by sheets of small, undifferentiated cells with round nuclei and scant cytoplasm that stain blue with haematoxylin. Other members of this group include neuroblastoma, rhabdomyosarcoma, and small cell lymphoma. Ewing sarcoma is associated with the t(11;22) translocation producing the EWS-FLI1 fusion protein. It classically presents in the diaphysis of long bones in adolescents with systemic symptoms (fever, elevated ESR) and an onion skin periosteal reaction on imaging."
    },
    {
        question: "A patient develops a dramatic lion-like facial deformity due to bony expansion of the facial skeleton.\n\nWith which condition is leontiasis ossea most associated?",
        options: {
            A: "Paget's disease of bone",
            B: "Rheumatoid arthritis",
            C: "Gout",
            D: "Achondroplasia",
            E: "Myositis ossificans"
        },
        correctAnswer: "A",
        explanation: "Leontiasis ossea ('lion face') refers to gross bony enlargement and distortion of the facial skeleton and skull, producing a lion-like facial appearance. It is a rare but recognised complication of Paget's disease of bone, in which dysregulated bone remodelling leads to progressive bony expansion. The skull is the second most commonly affected site in Paget's disease (after the pelvis), and involvement can cause cranial nerve compression, hearing loss, and hydrocephalus in addition to the leonine appearance. Rheumatoid arthritis and gout affect joints, not bone architecture in this way."
    },
    {
        question: "An elderly patient presents to his GP with a severe unilateral temporal headache. Biopsy of the temporal artery shows vasculitis with giant cells.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Atherosclerosis",
            B: "Giant cell arteritis",
            C: "Granulomatous angiitis",
            D: "Kawasaki disease",
            E: "Systemic lupus erythematosus"
        },
        correctAnswer: "B",
        explanation: "Giant cell arteritis (GCA, also known as temporal arteritis) is the most common primary vasculitis in adults over 50, predominantly affecting women. It classically causes severe unilateral temporal headache, scalp tenderness, jaw claudication, and — critically — can cause sudden irreversible blindness due to ischaemic optic neuropathy. Biopsy of the temporal artery shows transmural granulomatous inflammation with multinucleated giant cells. ESR and CRP are markedly elevated. Treatment with high-dose prednisolone must be started immediately on clinical suspicion without waiting for biopsy, to prevent visual loss. Kawasaki disease affects young children."
    },
    {
        question: "A 45-year-old man presents with a brown invasive lesion in his eye.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Mucosal melanoma",
            B: "Retinoblastoma",
            C: "Neuroblastoma",
            D: "Squamous cell carcinoma",
            E: "Adenocarcinoma"
        },
        correctAnswer: "A",
        explanation: "Mucosal melanoma can arise from any mucosal surface containing melanocytes, including the conjunctiva and uveal tract of the eye. It presents as a pigmented, invasive lesion and carries a poor prognosis due to its aggressive behaviour and tendency for late presentation. Uveal melanoma is the most common primary intraocular malignancy in adults. Retinoblastoma is the classic intraocular malignancy of childhood (presenting with leukocoria), not adults. Squamous cell carcinoma and adenocarcinoma are not typically pigmented lesions. Neuroblastoma is a childhood tumour arising from neural crest cells, not the eye primarily."
    },
    {
        question: "A 33-year-old woman was diagnosed with leukocoria at 18 months of age and treated for an eye condition. She has now developed a new malignant lesion in her femur.\n\nWhat are the two neoplasms this patient has had?",
        options: {
            A: "Retinoblastoma and osteosarcoma",
            B: "Retinoblastoma and chondrosarcoma",
            C: "Retinoblastoma and osteoma",
            D: "Retinoblastoma and chondroma",
            E: "Chordoma and chondroma"
        },
        correctAnswer: "A",
        explanation: "This question illustrates the link between retinoblastoma and osteosarcoma — both are associated with mutations in the RB1 tumour suppressor gene located on chromosome 13q14. Retinoblastoma classically presents in young children with leukocoria (white pupillary reflex). Patients with hereditary retinoblastoma carry a germline RB1 mutation (Knudson's 'two-hit hypothesis') and are at significantly increased risk of developing secondary malignancies, most commonly osteosarcoma. This is an important genetic association to remember: RB gene links Retinoblastoma and the bone tumour (R13 — chromosome 13)."
    },
    {
        question: "A 2-year-old male develops a testicular lesion with markedly elevated alpha-fetoprotein. Histology of the orchidectomy specimen shows Schiller-Duval bodies.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Seminoma",
            B: "Teratoma",
            C: "Yolk sac tumour",
            D: "Embryonal carcinoma",
            E: "Lymphoma"
        },
        correctAnswer: "C",
        explanation: "Yolk sac tumour (endodermal sinus tumour) is the most common testicular germ cell tumour in children under 3 years. It produces alpha-fetoprotein (AFP) — a highly useful tumour marker for monitoring. The pathognomonic histological feature is the Schiller-Duval body: a glomeruloid structure consisting of a central vessel surrounded by tumour cells within a space — resembling the yolk sac of the embryo. In adults, yolk sac tumour more commonly occurs as a component of a mixed germ cell tumour. Seminomas do not produce AFP. Embryonal carcinoma produces both AFP and hCG but lacks Schiller-Duval bodies."
    },
    {
        question: "A 30-year-old male develops a testicular mass. Histology shows large polygonal cells with square nuclei among a lymphocytic infiltrate. The patient achieves near-complete cure following treatment.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Seminoma",
            B: "Teratoma",
            C: "Yolk sac tumour",
            D: "Embryonal carcinoma",
            E: "Lymphoma"
        },
        correctAnswer: "A",
        explanation: "Seminoma is the most common testicular germ cell tumour in adults, peaking in the 30s. It is highly radiosensitive and chemosensitive, with a cure rate approaching 98–99% even in metastatic disease — making it one of the most curable solid malignancies. Histologically, it shows sheets of large polygonal cells with clear cytoplasm, prominent central nuclei, and a characteristic lymphocytic stromal infiltrate. AFP is not elevated (if AFP is raised, the tumour is not a pure seminoma). hCG may be mildly elevated. The excellent prognosis makes histological identification crucial for appropriate de-escalation of treatment."
    },
    {
        question: "A 20-year-old male develops a testicular mass with elevated LDH. Histology shows large pleomorphic cells with no lymphocytic infiltrate, no Schiller-Duval bodies, and no adnexal structures.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Seminoma",
            B: "Teratoma",
            C: "Yolk sac tumour",
            D: "Embryonal carcinoma",
            E: "Lymphoma"
        },
        correctAnswer: "D",
        explanation: "Embryonal carcinoma is an aggressive non-seminomatous germ cell tumour that peaks in the 20s. Histology shows large, poorly differentiated pleomorphic cells without the lymphocytic stroma of seminoma, without Schiller-Duval bodies (yolk sac tumour), and without differentiated adnexal structures (teratoma). LDH is elevated and it can produce both AFP and hCG. It frequently occurs as a component of mixed germ cell tumours. It is more aggressive than seminoma and less chemosensitive, requiring BEP chemotherapy (bleomycin, etoposide, cisplatin). Pure embryonal carcinoma is rare; mixed tumours are more common."
    },
    {
        question: "A 25-year-old woman presents with a painless, movable 3-cm nodule beneath the skin of the left lateral neck, just above the level of the thyroid cartilage. Fine-needle aspiration shows granular and keratinaceous cellular debris.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Branchial cleft cyst",
            B: "Metastatic thyroid carcinoma",
            C: "Mucocele",
            D: "Mucoepidermoid tumour",
            E: "Thyroglossal duct cyst"
        },
        correctAnswer: "A",
        explanation: "Branchial cleft cysts arise from incomplete obliteration of the branchial clefts during embryological development. They classically present as painless, fluctuant lateral neck masses anterior to the sternocleidomastoid muscle, typically in young adults. FNA characteristically shows keratinaceous (keratin-rich) and granular debris with squamous cells, reflecting the cyst's squamous lining. A thyroglossal duct cyst also presents as a neck cyst but classically in the midline, moves on tongue protrusion, and is lined by respiratory epithelium. Metastatic thyroid carcinoma would show malignant follicular cells. The lateral position and keratinaceous content are the key clues here."
    },
    {
        question: "A 45-year-old woman has a 3-year history of a slowly enlarging, nontender, mobile mass on the left face, anterior to the ear. Histology shows ductal epithelial cells in a myxoid stroma containing islands of chondroid-like tissue and bone.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Acinic cell tumour",
            B: "Mucoepidermoid carcinoma",
            C: "Pleomorphic adenoma",
            D: "Warthin tumour",
            E: "Squamous cell carcinoma"
        },
        correctAnswer: "C",
        explanation: "Pleomorphic adenoma (mixed tumour) is the most common salivary gland tumour, most frequently arising in the parotid gland. It classically presents as a slowly growing, painless, mobile mass in the parotid region. The histological hallmark is its biphasic appearance: epithelial/ductal cells admixed with a mesenchymal-like stroma containing myxoid, chondroid, and sometimes osseous tissue — explaining the 'pleomorphic' (many-formed) name. Despite being benign, incomplete excision leads to high recurrence rates, and malignant transformation (carcinoma ex pleomorphic adenoma) occurs in approximately 5% if left untreated. Warthin tumour (papillary cystadenoma lymphomatosum) occurs almost exclusively in the parotid but shows a bilayered oncocytic epithelium with lymphoid stroma."
    },
    {
        question: "A 68-year-old woman with a 60-pack-year smoking history presents with white plaques on the buccal mucosa, tongue, and floor of the mouth. Biopsy shows severe epithelial dysplasia.\n\nWhich neoplasm is she at highest risk of developing?",
        options: {
            A: "Adenoid cystic carcinoma",
            B: "Mucoepidermoid carcinoma",
            C: "Nasopharyngeal carcinoma",
            D: "Papilloma",
            E: "Squamous cell carcinoma"
        },
        correctAnswer: "E",
        explanation: "Leukoplakia (white oral mucosal plaques that cannot be scraped off) with epithelial dysplasia on biopsy is a premalignant condition with significant risk of progression to squamous cell carcinoma (SCC) — the most common oral malignancy. Tobacco and alcohol are the principal risk factors and act synergistically. Severe dysplasia confers higher transformation risk than mild dysplasia. SCC of the oral cavity arises from the mucosal squamous epithelium that undergoes dysplastic change. Adenoid cystic carcinoma and mucoepidermoid carcinoma are salivary gland tumours. Nasopharyngeal carcinoma is strongly associated with EBV, not smoking-related leukoplakia."
    },
    {
        question: "A 46-year-old man is found to have a palpable thyroid mass on routine examination. Biopsy confirms medullary carcinoma of the thyroid.\n\nWhich histological feature is most characteristic of this tumour?",
        options: {
            A: "Tumour cells with nuclear grooves and nuclear inclusions",
            B: "Psammoma bodies",
            C: "Tumour cells embedded in an amyloid-laden stroma",
            D: "Lymphocytic infiltrates with germinal centre formation",
            E: "Replacement of the thyroid with fibrous tissue"
        },
        correctAnswer: "C",
        explanation: "Medullary thyroid carcinoma (MTC) arises from parafollicular C cells, which normally secrete calcitonin. Calcitonin is both a diagnostic tumour marker and an important component of the tumour stroma — it deposits as amyloid, giving the characteristic histological appearance of tumour cells embedded in an amyloid-rich stroma. MTC is associated with MEN2A and MEN2B syndromes (RET proto-oncogene mutation). Nuclear grooves and inclusions are features of papillary thyroid carcinoma; psammoma bodies are also seen in papillary carcinoma and meningioma. Lymphocytic infiltrate with germinal centres is characteristic of Hashimoto's thyroiditis. Fibrous replacement describes Riedel's thyroiditis."
    },
    {
        question: "A 6-year-old boy is monitored by his GP after developing signs of precocious puberty over 6 months, including pubic hair and penile enlargement.\n\nWhich morphological change is most likely present in his adrenal glands?",
        options: {
            A: "Cortical atrophy",
            B: "Cortical hyperplasia",
            C: "Cortical nodule",
            D: "Medullary atrophy",
            E: "Medullary hyperplasia"
        },
        correctAnswer: "B",
        explanation: "Precocious puberty in a young boy with signs of androgen excess (pubic hair, penile enlargement) points to congenital adrenal hyperplasia (CAH) — most commonly 21-hydroxylase deficiency. The enzymatic block prevents cortisol synthesis; the resulting loss of negative feedback causes ACTH to rise, driving continuous adrenocortical stimulation. The morphological consequence is bilateral adrenocortical hyperplasia. Excess androgens (DHEA, androstenedione) accumulate and cause virilisation. In girls, CAH causes ambiguous genitalia. Cortical atrophy would suggest adrenal insufficiency (e.g. Addison's disease). Medullary changes are not implicated in sex hormone excess."
    },
    {
        question: "A 44-year-old man presents with progressive hoarseness, dyspnoea, and stridor over 3 weeks. CT shows a large thyroid mass extending into the mediastinum. FNA shows large pleomorphic spindle cells. Lymph node and pulmonary metastases are present.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Anaplastic carcinoma",
            B: "Follicular carcinoma",
            C: "Medullary carcinoma",
            D: "Non-Hodgkin lymphoma",
            E: "Papillary carcinoma"
        },
        correctAnswer: "A",
        explanation: "Anaplastic (undifferentiated) thyroid carcinoma is one of the most aggressive human malignancies, with a median survival of approximately 3–6 months. It typically presents in elderly patients with a rapidly enlarging thyroid mass causing compressive symptoms (dyspnoea, dysphagia, hoarseness) and early invasion into adjacent structures including the trachea and mediastinum. Histology shows large, pleomorphic and spindle cells with high mitotic activity — reflecting complete loss of thyroid differentiation. It frequently arises from pre-existing differentiated thyroid carcinoma (papillary or follicular). Follicular and papillary carcinomas are well-differentiated and carry an excellent prognosis. Medullary carcinoma shows amyloid stroma."
    },
    {
        question: "A 70-year-old woman has noticed increasing numbers of darker brown patches on the dorsum of both hands over 15 years. They are non-pruritic, non-tender, and do not change with sun exposure. Examination shows 0.5–1 cm lightly pigmented lesions.\n\nWhat is the most likely microscopic finding?",
        options: {
            A: "Confluent and atypical melanocytic proliferation",
            B: "Benign dermal melanocytic naevus cells",
            C: "Loss of melanin in surrounding skin",
            D: "Mast cell proliferation",
            E: "Pigmented fungal hyphae"
        },
        correctAnswer: "B",
        explanation: "The clinical description of slowly accumulating, stable, lightly pigmented lesions on the dorsum of the hands in an elderly woman describes acquired melanocytic naevi (common moles) or seborrhoeic keratoses — the most common benign pigmented lesions in older adults. The key here is their stability over many years, lack of itching, and non-progressive nature, ruling out melanoma (which shows change in size, colour, border, or symptoms). Benign dermal naevus cells on microscopy confirm a benign melanocytic proliferation contained within the dermis. Confluent atypical melanocytic proliferation would raise concern for melanoma. Loss of melanin in surrounding skin would suggest vitiligo. Mast cell proliferation describes urticaria pigmentosa."
    },
    {
        question: "A 39-year-old woman has a 2.1-cm pigmented lesion with irregular borders on her back. Excisional biopsy shows malignant melanoma composed of epithelioid cells extending 2 mm into the reticular dermis, with a band of lymphocytes beneath.\n\nWhat is the single most important determinant of prognosis?",
        options: {
            A: "Age at diagnosis",
            B: "Depth of the lesion",
            C: "Degree of cellular atypia",
            D: "Presence of inflammatory response",
            E: "Location on the skin"
        },
        correctAnswer: "B",
        explanation: "The Breslow thickness (depth of invasion measured in millimetres from the granular layer of the epidermis to the deepest tumour cell) is the single most important prognostic factor in malignant melanoma. Greater depth correlates with increased risk of lymph node involvement, distant metastasis, and death. The tumour-infiltrating lymphocyte (TIL) response (the band of lymphocytes described) is a favourable prognostic sign but is not the primary determinant. Clark's level (anatomical depth through skin layers) is also used but Breslow thickness is more reproducible and clinically significant. The AJCC staging system is primarily based on Breslow thickness, ulceration, and mitotic rate."
    },
    {
        question: "A middle-aged woman presents with multiple oozing, crusted lesions on both hands. Histology shows intra-epidermal spongiosis with occasional lympho-histiocytic collections within the epidermis and mild chronic inflammatory infiltrate in the dermis.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Porphyria",
            B: "Pemphigus vulgaris",
            C: "Herpes simplex",
            D: "Eczema",
            E: "Erythema multiforme"
        },
        correctAnswer: "D",
        explanation: "Eczema (dermatitis) is characterised histologically by spongiosis — intercellular oedema between keratinocytes that widens the intercellular spaces — along with a lympho-histiocytic infiltrate within the epidermis (exocytosis) and a perivascular chronic inflammatory infiltrate in the dermis. Clinically it presents with pruritic, erythematous, oozing, and crusted lesions. Pemphigus vulgaris also shows intraepidermal changes but with acantholysis (loss of cell-cell adhesion) rather than spongiosis. Herpes simplex causes viral cytopathic changes and multinucleated giant cells. Erythema multiforme shows interface dermatitis with subepidermal blistering and targetoid lesions."
    },
    {
        question: "A middle-aged man presents with well-defined erythematous plaques with silvery white scales on the scalp and elbows, with associated nail changes (onycholysis). Biopsy shows epidermal hyperplasia, parakeratosis, collections of neutrophils, and elongation of dermal papillae.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Lichen planus",
            B: "Lichen sclerosus",
            C: "Psoriasis",
            D: "Interface dermatitis",
            E: "Drug reaction"
        },
        correctAnswer: "C",
        explanation: "Psoriasis is a chronic inflammatory skin condition with a characteristic histological picture: epidermal hyperplasia (acanthosis), parakeratosis (retained nuclei in the stratum corneum), elongated rete ridges with thinning of suprapapillary plates, and collections of neutrophils within the epidermis (Munro microabscesses). Clinically, the well-defined silvery-scaled plaques on extensor surfaces and scalp, combined with nail changes (onycholysis, pitting, thickening), are typical. Lichen planus classically shows a saw-tooth rete ridge pattern with a band-like lymphocytic infiltrate at the dermoepidermal junction (interface dermatitis) — a useful histological distinction from psoriasis."
    },
    {
        question: "A 66-year-old man presents with hoarseness of voice. Endoscopy confirms a fungating laryngeal squamous cell carcinoma. The resection specimen is being staged.\n\nWhich criterion is included in the TNM staging of this tumour?",
        options: {
            A: "Tumour size",
            B: "Presence of vascular invasion",
            C: "Involvement of the trachea",
            D: "Macroscopic involvement of margins",
            E: "Presence of capsular invasion"
        },
        correctAnswer: "A",
        explanation: "The TNM (Tumour, Node, Metastasis) staging system classifies tumours based on: T — the size and local extent of the primary tumour; N — regional lymph node involvement; M — presence of distant metastases. For laryngeal SCC, the T category incorporates tumour size and extent of local invasion (e.g. involvement of adjacent structures such as the thyroid, cricoid, or trachea contribute to staging). Surgical margin status, vascular invasion, and perineural invasion are important pathological prognostic factors reported separately but are not part of the TNM system itself. Capsular invasion relates to lymph node extracapsular spread, which is prognostically relevant but classified under N."
    },
    {
        question: "A 30-year-old woman undergoes total thyroidectomy for a pressure-causing goitre. Microscopy shows numerous lymphoid follicles with germinal centres, follicular atrophy, colloid depletion, and multifocal Hurthle cell change.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Graves' disease",
            B: "Hashimoto's thyroiditis",
            C: "De Quervain's thyroiditis",
            D: "Palpation thyroiditis",
            E: "Riedel's thyroiditis"
        },
        correctAnswer: "B",
        explanation: "Hashimoto's thyroiditis (chronic lymphocytic thyroiditis) is an autoimmune condition and the most common cause of hypothyroidism in iodine-sufficient countries. The hallmark histological features are: dense lymphocytic infiltrate with reactive germinal centre formation, progressive follicular atrophy and colloid depletion, and Hurthle cell (oxyphilic) metaplasia of follicular epithelium. Antibodies against thyroid peroxidase (anti-TPO) and thyroglobulin are typically positive. Graves' disease shows follicular hyperplasia with scalloped colloid and lymphocytic infiltrate but without the degree of follicular destruction. De Quervain's (granulomatous) thyroiditis is associated with granulomas and giant cells following viral infection. Riedel's thyroiditis produces dense fibrosis replacing thyroid tissue."
    },
    {
        question: "A 72-year-old man on long-term steroids presents with right hip pain. X-ray shows sclerosis of the acetabulum. Histology of the hip replacement specimen shows empty lacunae in cortical bone with marrow space sclerosis.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Avascular necrosis",
            B: "Gout",
            C: "Osteoarthritis",
            D: "Rheumatoid arthritis",
            E: "Septic arthritis"
        },
        correctAnswer: "A",
        explanation: "Avascular necrosis (osteonecrosis) results from disruption of blood supply to bone, leading to ischaemic death of osteocytes. Histologically, the hallmark is empty lacunae — the spaces normally occupied by viable osteocytes are devoid of cells, indicating cell death. Surrounding sclerosis represents the host's reactive attempt to contain the necrotic bone. Long-term corticosteroid use is one of the most important risk causes, alongside alcohol excess, trauma (especially femoral neck fractures), sickle cell disease, and decompression sickness. The femoral head is the most commonly affected site, and long-term steroid use in this context is a classic association to recognise."
    },
    {
        question: "A 68-year-old man presents with a hot, swollen left knee. Aspiration reveals neutrophils and elongated negatively birefringent crystals on polarised light. A nodule on his foot shows granulomatous inflammation with central refractile material.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Avascular necrosis",
            B: "Gout",
            C: "Osteoarthritis",
            D: "Rheumatoid arthritis",
            E: "Septic arthritis"
        },
        correctAnswer: "B",
        explanation: "Gout is caused by deposition of monosodium urate (MSU) crystals in joints and soft tissues, driven by hyperuricaemia. The key diagnostic features in this case are: (1) negatively birefringent needle-shaped crystals on polarised light microscopy — MSU crystals appear yellow when parallel to the polariser axis (opposite to pseudogout/CPPD crystals, which are positively birefringent and rhomboid-shaped); and (2) the foot nodule represents a tophus — a granulomatous reaction to deposited urate crystals with central refractile material. Pseudogout (calcium pyrophosphate deposition) affects larger joints and shows rhomboid positively birefringent crystals. Septic arthritis shows neutrophils but no crystals and requires urgent antibiotic treatment."
    },
    {
        question: "A 42-year-old woman presents with acute renal failure and pulmonary haemorrhage. Renal biopsy shows glomerular crescents and linear deposition of IgG and C3 along the glomerular basement membrane on immunofluorescence.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Systemic lupus erythematosus",
            B: "Churg-Strauss syndrome",
            C: "Henoch-Schönlein purpura",
            D: "Goodpasture syndrome",
            E: "HIV-associated nephropathy"
        },
        correctAnswer: "D",
        explanation: "Goodpasture syndrome is caused by autoantibodies against type IV collagen in the glomerular and alveolar basement membranes, producing the pulmonary-renal syndrome: rapidly progressive glomerulonephritis combined with pulmonary haemorrhage. The diagnostic hallmark on immunofluorescence is linear (not granular) IgG and C3 deposition along the GBM — reflecting direct antibody binding to basement membrane antigen. Glomerular crescents form from proliferating parietal epithelial cells and indicate rapidly progressive GN. SLE produces granular 'full-house' immunofluorescence. HSP shows IgA-dominant mesangial deposition. ANCA-associated vasculitis (Churg-Strauss) typically produces pauci-immune (no immunoglobulin) staining."
    },
    {
        question: "A 34-year-old man presents with nephrotic syndrome — proteinuria (4g/day), hypoalbuminaemia, and hyperlipidaemia. Renal biopsy shows diffuse thickening of glomerular capillary walls, and silver staining reveals characteristic spikes within the glomerular basement membrane.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Diabetic glomerulosclerosis",
            B: "Membranous glomerulonephritis",
            C: "Minimal change glomerulonephritis",
            D: "Membranoproliferative glomerulonephritis",
            E: "Acute proliferative glomerulonephritis"
        },
        correctAnswer: "B",
        explanation: "Membranous glomerulonephritis (membranous nephropathy) is the most common cause of nephrotic syndrome in adults. The key histological features are: diffuse thickening of the GBM due to subepithelial immune complex deposition, and — on silver staining — characteristic 'spikes' of basement membrane material projecting between the deposits (giving a spike-and-dome appearance on electron microscopy). Immunofluorescence shows granular IgG and C4 along capillary walls. It is most commonly primary (anti-PLA2R antibodies) but can be secondary to malignancy, SLE, hepatitis B, or drugs. Minimal change disease causes nephrotic syndrome but shows normal light microscopy. Membranoproliferative GN shows mesangial interposition and tram-track appearance."
    },
    {
        question: "A 21-year-old male develops acute renal failure. Biopsy shows cortical necrosis, fibrinoid material in glomerular capillaries and arterioles, endocapillary proliferation, and crescent formation.\n\nWhich organism is most likely to have triggered this condition?",
        options: {
            A: "Streptococcus",
            B: "Treponema pallidum (syphilis)",
            C: "Escherichia coli",
            D: "Mycobacterium tuberculosis",
            E: "Plasmodium (malaria)"
        },
        correctAnswer: "A",
        explanation: "Post-streptococcal glomerulonephritis (PSGN) is caused by nephritogenic strains of group A beta-haemolytic Streptococcus (Streptococcus pyogenes), typically following a throat or skin infection. It presents 1–3 weeks after infection with haematuria, proteinuria, hypertension, and oliguria. Severe cases show the histological features described: endocapillary proliferation (hypercellular glomeruli), fibrinoid necrosis, crescent formation, and cortical ischaemia. Complement (C3) is consumed — a low serum C3 in the context of nephritis strongly supports PSGN. Anti-streptolysin O (ASOT) titres confirm recent streptococcal infection. Immunofluorescence shows a 'starry sky' pattern of granular IgG and C3 deposits."
    },
    {
        question: "A 22-year-old man presents with a 3-cm testicular mass. Orchidectomy specimen shows round to polyhedral cells with clear cytoplasm and central nuclei with prominent nucleoli, arranged in nests separated by vascular stroma containing lymphocytes.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Yolk sac tumour",
            B: "Seminoma",
            C: "Teratoma",
            D: "Embryonal carcinoma",
            E: "Sertoli cell tumour"
        },
        correctAnswer: "B",
        explanation: "The histological description is classic for seminoma: sheets or nests of large, uniform polygonal cells with abundant clear cytoplasm (due to glycogen) and round central nuclei with prominent nucleoli, separated by delicate fibrovascular septa infiltrated by lymphocytes. This lymphocytic stroma is a hallmark that distinguishes seminoma from embryonal carcinoma, which shows more pleomorphism and lacks the lymphocytic response. Seminoma is the most common testicular GCT, peaks in the 30s, does not elevate AFP, and is exquisitely radiosensitive. Yolk sac tumour shows Schiller-Duval bodies. Teratoma contains differentiated elements from multiple germ cell layers."
    },
    {
        question: "A 13-year-old boy presents to A&E with sudden onset, constant, agonising scrotal pain following a fall from his bike. The left testicle is congested on examination.\n\nWhat would emergency surgical exploration most likely reveal?",
        options: {
            A: "Infarcted testicular tumour",
            B: "Mumps orchitis",
            C: "Hydrocele",
            D: "Strangulated inguinal hernia",
            E: "Testicular torsion"
        },
        correctAnswer: "E",
        explanation: "Testicular torsion is a urological emergency requiring surgical exploration within 6 hours to salvage the testicle. It occurs when the testicle rotates on the spermatic cord, occluding venous and then arterial blood flow, leading to progressive ischaemia and infarction. It classically presents in adolescent males with sudden onset severe scrotal pain, often associated with nausea and vomiting. The testis is high-riding with a horizontal lie. Colour Doppler ultrasound can confirm absent blood flow, but if clinical suspicion is high, surgical exploration should not be delayed. The 'bell clapper' deformity (high investment of the tunica vaginalis) is a predisposing anatomical variant, often bilateral."
    },
    {
        question: "A 21-year-old woman presents with progressive nasal obstruction over 2 months. Examination reveals bilateral translucent polypoid masses in the nasal cavity. Histology shows respiratory mucosa overlying oedematous stroma with scattered plasma cells and eosinophils.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Meningioma",
            B: "Angiofibroma",
            C: "Rhinosporidiosis",
            D: "Sinonasal papilloma",
            E: "Bilateral allergic polyps"
        },
        correctAnswer: "E",
        explanation: "Allergic nasal polyps (inflammatory polyps) are the most common benign nasal masses. They arise from chronically inflamed sinonasal mucosa — typically in the setting of allergic rhinitis, asthma, or aspirin sensitivity. The histological hallmark is oedematous stroma with a mixed inflammatory infiltrate rich in eosinophils and plasma cells, covered by respiratory (pseudostratified ciliated columnar) epithelium. The bilateral distribution supports an allergic/systemic aetiology. Angiofibroma is a benign but locally aggressive tumour affecting adolescent males in the nasopharynx (not bilateral nasal polyps). Rhinosporidiosis is a rare fungal infection. Meningiomas rarely present as nasal masses."
    },
    {
        question: "A 37-year-old woman presents with a left thyroid lump and cervical lymphadenopathy. Total thyroidectomy shows a non-encapsulated follicular-patterned lesion with round/oval nuclei, chromatin clearing, and numerous nuclear pseudoinclusions.\n\nWhich mutation is most strongly associated with this tumour?",
        options: {
            A: "BRAF V600E",
            B: "cKIT D816V",
            C: "No genetic association",
            D: "VHL",
            E: "JAK2"
        },
        correctAnswer: "A",
        explanation: "The histological description — non-encapsulated tumour with follicular architecture, nuclear clearing ('Orphan Annie eyes'), nuclear grooves, and nuclear pseudoinclusions — is classic for papillary thyroid carcinoma (PTC). BRAF V600E is the most common somatic mutation in PTC, found in approximately 45–60% of cases, and is particularly associated with the classic and tall cell variants. It leads to constitutive activation of the MAPK/ERK signalling pathway, promoting tumour proliferation. BRAF V600E positivity also correlates with more aggressive behaviour, lymph node metastases, and resistance to radioiodine. RET/PTC rearrangements are the other major genetic alteration in PTC. VHL mutations are associated with renal cell carcinoma and haemangioblastoma."
    },
    {
        question: "A 65-year-old woman presents with a large, variably pigmented, irregular lesion on her left leg. Excision biopsy confirms nodular malignant melanoma with a Breslow thickness of 4.5mm and a mitotic rate of 10 mitoses/mm².\n\nWhich mutation is the oncologist most interested in testing for, to guide systemic therapy?",
        options: {
            A: "BRAF V600E",
            B: "cKIT D816V",
            C: "RET M918T",
            D: "VHL",
            E: "JAK2"
        },
        correctAnswer: "A",
        explanation: "BRAF V600E is mutated in approximately 40–50% of cutaneous malignant melanomas and is the key therapeutic target in metastatic disease. BRAF inhibitors (vemurafenib, dabrafenib), often combined with MEK inhibitors (trametinib, cobimetinib), have transformed the treatment of BRAF-mutant metastatic melanoma, producing significant improvements in overall survival. All patients with metastatic or high-risk melanoma should have tumour tissue tested for BRAF mutation status before systemic therapy is chosen. RET M918T is associated with MEN2B and medullary thyroid carcinoma. cKIT mutations are relevant in mucosal and acral melanomas. VHL is associated with clear cell renal cell carcinoma and haemangioblastoma."
    },
    {
        question: "A 13-year-old boy presents with a pink nodular pigmented lesion on his left cheek. Excision biopsy shows a dome-shaped compound melanocytic proliferation with clefted junctional melanocytes, Kamino bodies, dermal maturation, and no dermal mitoses. The lesion is completely excised with clear margins.\n\nWhat is the correct diagnosis?",
        options: {
            A: "Malignant melanoma",
            B: "Compound melanocytic naevus",
            C: "Spitz naevus",
            D: "Squamous cell carcinoma",
            E: "Basal cell carcinoma"
        },
        correctAnswer: "C",
        explanation: "Spitz naevus (spindle and epithelioid cell naevus) is a benign melanocytic lesion typically occurring in children and young adults. The classic histological features include: dome-shaped architecture, clefting between junctional melanocyte nests and surrounding keratinocytes, Kamino bodies (eosinophilic PAS-positive globules at the dermoepidermal junction), and importantly — dermal maturation (melanocytes becoming smaller with depth) with no or very rare dermal mitoses. These features distinguish it from malignant melanoma, which shows significant atypia, pagetoid spread, and dermal mitoses. Spitz naevi can be histologically challenging and may require expert dermatopathological opinion. Complete excision with clear margins, as here, is the appropriate management."
    },
    {
        question: "A 63-year-old man presents with a well-defined, pink, nodular lesion at the nasolabial fold. Excision biopsy shows a nodular tumour connected to the epidermis, composed of hyperchromatic basaloid cells with peripheral palisading and multiple mitotic figures. The tumour is completely excised.\n\nWhat is the most likely behaviour of this tumour?",
        options: {
            A: "Locally malignant (basal cell carcinoma)",
            B: "Widely metastatic malignant tumour",
            C: "Benign tumour",
            D: "Will spread to local lymph nodes",
            E: "Will spread to the lung"
        },
        correctAnswer: "A",
        explanation: "Basal cell carcinoma (BCC) is the most common skin tumour overall and is characterised as a locally malignant neoplasm — it invades and destroys local tissue but very rarely metastasises (<0.1% of cases). The histological hallmark is islands of basaloid cells with peripheral nuclear palisading (cells at the edge of the tumour nests arranged in a parallel row), connected to the overlying epidermis. It occurs predominantly on sun-exposed areas of the face (nose, nasolabial fold, periorbital region). Despite its low metastatic potential, local destruction can be extensive if untreated, particularly around the eye or nose. Complete surgical excision with adequate margins, as described, is the primary treatment."
    }
],
// 50 Pathology SBA Questions — Dr Engy Style
// Answer distribution: A×10, B×10, C×10, D×10, E×10

"pathology Engy style AI": [

    // ─── BONE & MUSCULOSKELETAL ───────────────────────────────────────────────

    {
        question: "A 12-year-old boy presents with a 3-month history of progressive pain and swelling in the distal femur. X-ray shows a destructive lesion arising in the metaphysis with an aggressive periosteal reaction. Histology reveals highly pleomorphic spindle cells producing lace-like osteoid directly from malignant cells.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Osteosarcoma",
            B: "Osteoid osteoma",
            C: "Chondrosarcoma",
            D: "Ewing sarcoma",
            E: "Giant cell tumour of bone",
        },
        correctAnswer: "A",
        explanation: "Osteosarcoma is the most common primary malignant bone tumour in children and adolescents, with a peak incidence in the second decade. It arises in the metaphysis of long bones — most commonly the distal femur and proximal tibia ('around the knee'). The histological hallmark is direct production of malignant osteoid (lace-like pink matrix) by pleomorphic tumour cells — this distinguishes it from chondrosarcoma, which produces cartilaginous matrix. Radiologically it shows a sunburst periosteal pattern and Codman triangle. Ewing sarcoma is also a bone tumour of adolescence but shows small round blue cells and an onion-skin periosteal reaction. Giant cell tumour arises in the epiphysis of skeletally mature patients."
    },

    {
        question: "A 35-year-old woman presents with a painless swelling at the distal femur. X-ray shows a well-defined lytic lesion at the epiphysis with a soap bubble appearance. Histology shows numerous multinucleated giant cells evenly distributed among ovoid mononuclear stromal cells.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Non-ossifying fibroma",
            B: "Giant cell tumour of bone",
            C: "Aneurysmal bone cyst",
            D: "Chondromyxoid fibroma",
            E: "Osteoblastoma",
        },
        correctAnswer: "B",
        explanation: "Giant cell tumour of bone (osteoclastoma) classically arises in the epiphysis of long bones in skeletally mature young adults (20–40 years), most commonly around the knee. Radiologically it shows a lytic, soap-bubble, eccentric lesion extending to the subchondral plate. Histologically it is characterised by abundant multinucleated osteoclast-like giant cells uniformly distributed among oval to spindle-shaped mononuclear stromal cells. It is locally aggressive and can recur after curettage. Aneurysmal bone cysts contain blood-filled spaces with fibrous septa. Non-ossifying fibroma occurs in the metaphysis of younger patients and shows storiform fibroblasts with scattered giant cells. Osteoblastoma resembles osteoid osteoma but is larger (>2cm)."
    },

    {
        question: "A 17-year-old male presents with a 6-week history of fever, bone pain, and swelling in the mid-shaft of the femur. ESR is markedly elevated. X-ray shows a permeative lytic lesion in the diaphysis with an onion-skin periosteal reaction. Histology shows sheets of small round blue cells with PAS-positive cytoplasmic glycogen.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Osteomyelitis",
            B: "Osteosarcoma",
            C: "Ewing sarcoma",
            D: "Lymphoma of bone",
            E: "Langerhans cell histiocytosis",
        },
        correctAnswer: "C",
        explanation: "Ewing sarcoma classically affects the diaphysis of long bones in adolescent males and is associated with systemic features (fever, elevated ESR, leucocytosis) that can mimic osteomyelitis. The periosteal reaction produces the classic onion-skin layering on X-ray. Histologically it belongs to the small round blue cell tumour family — sheets of uniform, small cells with scant cytoplasm, round nuclei, and glycogen-rich cytoplasm (PAS-positive). The pathognomonic genetic alteration is t(11;22), producing the EWS-FLI1 fusion oncogene. Osteosarcoma shows malignant osteoid production, not small round cells. Lymphoma of bone shows larger cells with irregular nuclei. Osteomyelitis lacks the malignant cellular features."
    },

    {
        question: "A 55-year-old man presents with bone pain, an elevated alkaline phosphatase, and a markedly elevated serum calcium. Skull X-ray shows areas of osteolysis alternating with sclerosis and a 'cotton wool' appearance. Bone scan shows markedly increased uptake throughout the axial skeleton.\n\nWhat is the underlying pathological process in Paget's disease that leads to these findings?",
        options: {
            A: "Vitamin D deficiency impairing mineralisation",
            B: "Malignant infiltration of bone marrow by plasma cells",
            C: "Autoimmune destruction of osteoblasts",
            D: "Disorganised and excessive osteoclast and osteoblast activity producing chaotic woven bone",
            E: "Metastatic deposits stimulating osteoblastic reaction",
        },
        correctAnswer: "D",
        explanation: "Paget's disease of bone is characterised by abnormal, excessive, and disorganised bone remodelling driven by dysfunctional osteoclasts (which are large and abnormally active) followed by compensatory but chaotic osteoblastic activity. The resulting bone is structurally weak, enlarged, and highly vascular — made of disorganised woven bone rather than ordered lamellar bone, giving the characteristic mosaic or jigsaw pattern on histology with prominent cement lines. This disorganised bone is mechanically inferior, predisposing to deformity, pathological fracture, nerve compression, and — in a small percentage — malignant transformation to osteosarcoma. The cotton-wool skull appearance and mixed lytic/sclerotic lesions reflect the competing phases of resorption and deposition."
    },

    {
        question: "A 65-year-old woman on long-term corticosteroids for polymyalgia rheumatica presents with sudden onset left groin pain. X-ray initially appears normal, but MRI shows subchondral signal change in the left femoral head. She undergoes hip replacement and histology shows empty lacunae in cortical bone, viable-appearing marrow peripherally, and a zone of reactive new bone formation.\n\nWhich finding on histology is the specific hallmark of this condition?",
        options: {
            A: "Neutrophilic infiltrate in marrow spaces",
            B: "Reactive new bone formation",
            C: "Peripheral viable marrow",
            D: "Fibrotic marrow replacement",
            E: "Empty lacunae indicating osteocyte death",
        },
        correctAnswer: "E",
        explanation: "The hallmark histological finding of avascular necrosis (osteonecrosis) is empty lacunae — the spaces within the bone matrix that are normally occupied by viable osteocytes are devoid of cells, signifying ischaemic cell death. This contrasts with normal bone where lacunae contain osteocyte nuclei. The surrounding reactive zone of new bone formation and peripheral viable marrow represent the host's response to the necrotic segment. Long-term corticosteroid use is the most common non-traumatic cause of avascular necrosis, likely due to fat emboli, impaired vascular perfusion, and osteocyte apoptosis. Other causes include alcohol, sickle cell disease, decompression sickness, and femoral neck fractures."
    },

    {
        question: "A 40-year-old woman presents with symmetrical joint pain and swelling affecting the metacarpophalangeal and proximal interphalangeal joints bilaterally, with morning stiffness lasting more than one hour. X-ray shows juxta-articular osteoporosis and periarticular erosions. Synovial biopsy shows pannus formation with villous hypertrophy.\n\nWhich of the following histological findings is most characteristic of this condition?",
        options: {
            A: "Pannus — a destructive layer of proliferating synoviocytes and granulation tissue eroding cartilage and bone",
            B: "Dense fibrous replacement of the synovium",
            C: "Chondrocalcinosis with calcium pyrophosphate deposits",
            D: "Urate crystal deposition with surrounding granulomatous inflammation",
            E: "Fibrinoid necrosis of vessel walls with neutrophilic infiltrate",
        },
        correctAnswer: "A",
        explanation: "Rheumatoid arthritis is a chronic autoimmune synovitis driven by T-cell and B-cell dysregulation with production of rheumatoid factor (anti-IgG) and anti-CCP antibodies. The histological hallmark is pannus formation — an aggressive layer of proliferating synoviocytes, fibroblasts, and inflammatory granulation tissue that invades and destroys articular cartilage and underlying bone at the joint margins, causing the characteristic periarticular erosions seen on X-ray. The synovium shows villous hypertrophy, lymphocytic and plasma cell infiltration, and neovascularisation. Urate crystals with granulomas describe gout tophi. Calcium pyrophosphate deposits describe pseudogout. Fibrous replacement describes burnt-out disease."
    },

    {
        question: "A 25-year-old man presents with acute onset severe pain and swelling of the right first metatarsophalangeal joint. He drinks heavily. Serum uric acid is elevated. Joint aspiration reveals negatively birefringent needle-shaped crystals under polarised light.\n\nWhat is the mechanism of joint inflammation in this condition?",
        options: {
            A: "Autoantibody-mediated complement activation destroying articular cartilage",
            B: "Deposition of monosodium urate crystals triggering neutrophil activation and IL-1 mediated inflammation",
            C: "Calcium pyrophosphate crystal deposition activating the synoviocytes",
            D: "Direct bacterial invasion of the joint space causing septic arthritis",
            E: "T-lymphocyte mediated destruction of the synovial membrane",
        },
        correctAnswer: "B",
        explanation: "Gout results from deposition of monosodium urate (MSU) crystals in joints when serum uric acid exceeds its solubility threshold. MSU crystals are taken up by resident macrophages and synoviocytes, activating the NLRP3 inflammasome, which drives IL-1β release and a powerful acute neutrophilic inflammatory response — producing the cardinal features of an acute attack: intense pain, warmth, erythema, and swelling. MSU crystals are needle-shaped and negatively birefringent (yellow when parallel to the polariser axis). The first MTP joint (podagra) is the classic site. Chronic deposits form tophi — nodules of urate surrounded by granulomatous inflammation. Calcium pyrophosphate produces positively birefringent rhomboid crystals (pseudogout)."
    },

    {
        question: "A 70-year-old man is referred with a 2-year history of low back pain, increasing hat size, and bilateral hearing loss. Serum alkaline phosphatase is markedly elevated. X-ray of the skull shows enlargement and a cotton-wool appearance. Bone biopsy shows a mosaic pattern of lamellar bone with prominent cement lines and numerous enlarged, irregularly shaped osteoclasts.\n\nWhich complication is this patient most at risk of developing from his underlying condition?",
        options: {
            A: "Metastatic carcinoma",
            B: "Giant cell tumour",
            C: "Secondary osteosarcoma",
            D: "Multiple myeloma",
            E: "Chondrosarcoma",
        },
        correctAnswer: "C",
        explanation: "Paget's disease of bone carries a small but significant risk (approximately 1%) of malignant transformation, most commonly to secondary osteosarcoma. This typically occurs in elderly patients with long-standing polyostotic disease and presents as sudden worsening pain, a new soft tissue mass, or pathological fracture superimposed on existing Paget's disease. The prognosis of Paget's-associated osteosarcoma is extremely poor — worse than primary osteosarcoma — with median survival of less than one year. The mosaic pattern of cement lines on histology is the pathological hallmark of Paget's disease, reflecting the chaotic, alternating phases of resorption and new bone deposition. Multiple myeloma and chondrosarcoma are not the primary malignant complications."
    },

    {
        question: "A 6-year-old boy is brought to his GP with a 4-week history of right thigh pain and a limp. His mother says he had a sore throat 3 weeks ago. X-ray of the hip is normal. Aspiration of the hip joint reveals turbid fluid with 80,000 white cells/mm³ (predominantly neutrophils). Culture is pending.\n\nWhich organism is the most common cause of this presentation in this age group?",
        options: {
            A: "Haemophilus influenzae",
            B: "Escherichia coli",
            C: "Neisseria gonorrhoeae",
            D: "Staphylococcus aureus",
            E: "Streptococcus pyogenes",
        },
        correctAnswer: "D",
        explanation: "Septic arthritis is a medical emergency that requires urgent joint washout and antibiotics to prevent permanent cartilage destruction. Staphylococcus aureus is the most common causative organism across all age groups, including children, and accounts for approximately 40–50% of cases. It reaches the joint via haematogenous spread (most common in children), direct inoculation, or contiguous spread. The extremely high neutrophil count (>50,000 cells/mm³) in the aspirate is characteristic of septic arthritis. Streptococcus pyogenes is a less common but important cause — the preceding sore throat here is a red herring pointing to post-streptococcal reactive arthritis, but the high cell count indicates true infection. Neisseria gonorrhoeae is the most common cause in sexually active young adults. H. influenzae was historically important pre-vaccination."
    },

    {
        question: "A 16-year-old female presents with a 6-month history of progressive right knee pain. X-ray shows an eccentric, well-defined lytic lesion in the proximal tibial metaphysis with a thin sclerotic rim and no periosteal reaction. Histology shows benign fibrous tissue arranged in a storiform pattern with scattered osteoclast-like giant cells and haemosiderin-laden macrophages.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Simple bone cyst",
            B: "Chondromyxoid fibroma",
            C: "Giant cell tumour of bone",
            D: "Aneurysmal bone cyst",
            E: "Non-ossifying fibroma",
        },
        correctAnswer: "E",
        explanation: "Non-ossifying fibroma (fibrous cortical defect) is the most common benign bone lesion in children and adolescents. It is typically an incidental finding or presents with mild local pain. Radiologically, it shows a well-defined, eccentric, cortical lytic lesion with a sclerotic rim in the metaphysis of long bones — classically around the knee. Histologically, it contains spindle fibroblasts in a storiform (cartwheel) pattern, scattered osteoclast-type giant cells, and haemosiderin-laden macrophages — reflecting prior microhaemorrhage. Most involute spontaneously with skeletal maturity and require no treatment. Giant cell tumour affects skeletally mature epiphyseal bone. Aneurysmal bone cyst shows blood-filled spaces. Simple bone cysts are centrally located and contain clear fluid."
    },

        // ─── RENAL ────────────────────────────────────────────────────────────────

    {
        question: "A 28-year-old man presents 2 weeks after a sore throat with haematuria, periorbital oedema, and hypertension. Urine dipstick shows blood and protein. Complement C3 is low. Renal biopsy shows hypercellular glomeruli with endocapillary proliferation and neutrophil infiltration. Immunofluorescence shows coarse granular IgG and C3 deposits in a 'starry sky' pattern.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Post-infectious glomerulonephritis",
            B: "Membranous nephropathy",
            C: "Focal segmental glomerulosclerosis",
            D: "IgA nephropathy",
            E: "Minimal change disease",
        },
        correctAnswer: "A",
        explanation: "Post-infectious (post-streptococcal) glomerulonephritis classically presents 1–3 weeks after a pharyngeal or skin infection with group A beta-haemolytic Streptococcus, presenting as a nephritic syndrome: haematuria, hypertension, oliguria, and mild proteinuria. C3 is consumed (low) but C4 is typically normal, reflecting alternative pathway activation. The 'starry sky' granular immunofluorescence pattern of IgG and C3 reflects immune complex deposition in the subepithelial and mesangial regions (humps on electron microscopy). Anti-streptolysin O (ASOT) titres confirm recent infection. IgA nephropathy presents with haematuria concurrent with, not weeks after, infection. Membranous nephropathy causes nephrotic syndrome with subepithelial deposits. Minimal change disease shows no light microscopic changes."
    },

    {
        question: "A 6-year-old boy presents with periorbital oedema, frothy urine, and weight gain. Urine shows heavy proteinuria (protein:creatinine ratio markedly elevated) but no haematuria. Serum albumin is low. Complement levels are normal. Renal biopsy on light microscopy appears completely normal. Electron microscopy shows diffuse effacement of podocyte foot processes.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Focal segmental glomerulosclerosis",
            B: "Minimal change disease",
            C: "Membranous nephropathy",
            D: "IgA nephropathy",
            E: "Lupus nephritis",
        },
        correctAnswer: "B",
        explanation: "Minimal change disease is the most common cause of nephrotic syndrome in children (80% of cases). The hallmark is that light microscopy appears entirely normal — the diagnosis is only confirmed on electron microscopy, which reveals diffuse effacement (fusion) of the podocyte foot processes. Immunofluorescence is negative. It is thought to result from a circulating lymphokine that disrupts podocyte function, causing loss of the glomerular charge barrier and massive proteinuria. It responds excellently to corticosteroids (>90% remission rate in children). Focal segmental glomerulosclerosis shows segmental scarring on light microscopy and is more common in adults and in secondary causes (HIV, obesity, heroin). Membranous nephropathy is the most common cause of nephrotic syndrome in adults and shows subepithelial deposits."
    },

    {
        question: "A 55-year-old woman with a 20-year history of type 2 diabetes presents with slowly progressive proteinuria and declining renal function. Renal biopsy shows diffuse mesangial expansion with increased mesangial matrix, thickening of the glomerular basement membrane, and nodular deposits of acellular material in the glomeruli.\n\nWhat are the nodular deposits in this condition called?",
        options: {
            A: "Fibrin caps",
            B: "Wire loop lesions",
            C: "Kimmelstiel-Wilson nodules",
            D: "Crescent formations",
            E: "Hyaline thrombi",
        },
        correctAnswer: "C",
        explanation: "Diabetic nephropathy is the most common cause of end-stage renal disease in the developed world. The pathological hallmark of advanced diabetic glomerulosclerosis is the Kimmelstiel-Wilson nodule — acellular, ovoid deposits of laminated basement membrane material in the periphery of the mesangium, compressing the surrounding capillary loops. These nodules are pathognomonic of diabetic nephropathy. Alongside them, diffuse mesangial expansion and GBM thickening occur earlier in the disease course. Wire loop lesions are characteristic of lupus nephritis (class III/IV), reflecting subendothelial immune complex deposits. Fibrin caps and hyaline thrombi are also described in lupus. Crescents indicate rapidly progressive GN."
    },

    {
        question: "A 65-year-old man presents with haematuria, loin pain, and a palpable flank mass. CT shows a heterogeneous renal mass with areas of necrosis and haemorrhage. The tumour is resected, and histology shows clear cells with abundant cytoplasm arranged in nests separated by a rich capillary network, with areas of haemorrhage and necrosis.\n\nWhich genetic alteration is most commonly associated with this tumour?",
        options: {
            A: "BRAF V600E mutation",
            B: "RET proto-oncogene rearrangement",
            C: "RB1 tumour suppressor gene mutation",
            D: "VHL tumour suppressor gene inactivation",
            E: "TP53 mutation",
        },
        correctAnswer: "D",
        explanation: "Clear cell renal cell carcinoma (ccRCC) is the most common renal malignancy in adults, accounting for approximately 75% of renal cancers. It classically presents with the triad of haematuria, flank pain, and a palpable mass (though now more often an incidental CT finding). Histologically, the clear cytoplasm results from accumulation of glycogen and lipid. The VHL (von Hippel-Lindau) tumour suppressor gene on chromosome 3p is inactivated in the majority of sporadic ccRCC cases — VHL protein normally targets HIF-alpha for degradation; its loss leads to constitutive HIF activity, driving VEGF and erythropoietin overproduction (explaining the paraneoplastic polycythaemia and susceptibility to anti-VEGF therapies). BRAF V600E is associated with melanoma and papillary thyroid carcinoma."
    },

    {
        question: "A 19-year-old man develops rapidly progressive renal failure and haemoptysis over 3 weeks. Renal biopsy shows crescentic glomerulonephritis. Immunofluorescence shows a linear pattern of IgG deposition along the glomerular basement membrane. His anti-GBM antibody titre is markedly elevated.\n\nWhat do the glomerular crescents consist of?",
        options: {
            A: "Mesangial cell proliferation expanding into the urinary space",
            B: "Neutrophil-rich exudate filling the Bowman space",
            C: "Amyloid deposits compressing the glomerular tuft",
            D: "Malignant epithelial cells proliferating within the Bowman space",
            E: "Fibrin and proliferating parietal epithelial cells (podocytes of Bowman's capsule) obliterating the urinary space",
        },
        correctAnswer: "E",
        explanation: "Glomerular crescents are a histological marker of severe glomerular injury and represent a pathological response to rupture of the glomerular capillary wall. They are formed by proliferation of parietal epithelial cells lining Bowman's capsule, along with infiltrating macrophages and fibrin — filling and obliterating the urinary space (Bowman's space), compressing the glomerular tuft. Crescents indicate rapidly progressive glomerulonephritis (RPGN), which can result from anti-GBM disease (Goodpasture syndrome, as here), ANCA-associated vasculitis, or immune complex disease. Anti-GBM antibodies target the NC1 domain of type IV collagen alpha-3 chain, present in both glomerular and alveolar basement membranes — explaining the pulmonary-renal syndrome."
    },

        // ─── SKIN & DERMATOLOGY ──────────────────────────────────────────────────

    {
        question: "A 72-year-old man with a 50-pack-year smoking history and outdoor occupation presents with a 1.5-cm crusted, hyperkeratotic, ulcerated lesion on the lower lip. Excision biopsy shows invasive nests of pleomorphic squamous cells with intercellular bridges and keratin pearls breaching the basement membrane into the dermis.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Squamous cell carcinoma",
            B: "Actinic keratosis",
            C: "Mucoepidermoid carcinoma",
            D: "Basal cell carcinoma",
            E: "Keratoacanthoma",
        },
        correctAnswer: "A",
        explanation: "Squamous cell carcinoma (SCC) is the second most common skin malignancy and arises from keratinocytes of the epidermis. It is strongly associated with UV radiation, smoking (particularly lip SCC), chronic scarring, and immunosuppression. Histologically, SCC shows invasive nests and cords of atypical squamous cells with intercellular bridges, pleomorphism, and — in well-differentiated tumours — keratin pearls (whorls of keratinising cells) breaching the basement membrane. Unlike BCC, SCC carries a meaningful risk of lymph node and distant metastasis, particularly on the lip, ear, and in immunosuppressed patients. Actinic keratosis is the in-situ precursor. Keratoacanthoma is a rapidly growing but typically self-resolving lesion that histologically resembles SCC."
    },

    {
        question: "A 45-year-old woman presents with a pruritic rash on her wrists, ankles, and oral mucosa of 3 months duration. Examination shows violaceous, flat-topped polygonal papules with fine white lacy lines on the surface. Biopsy shows a saw-tooth pattern of rete ridges, a band-like lymphocytic infiltrate at the dermoepidermal junction, and necrotic keratinocytes (Civatte bodies) at the basal layer.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Eczema",
            B: "Lichen planus",
            C: "Pemphigus vulgaris",
            D: "Dermatitis herpetiformis",
            E: "Psoriasis",
        },
        correctAnswer: "B",
        explanation: "Lichen planus is a chronic inflammatory dermatosis characterised clinically by the '6 Ps': Pruritic, Purple (violaceous), Polygonal, Planar (flat-topped) Papules and Plaques — with Wickham's striae (fine white lacy surface lines). It affects the flexural wrists, ankles, and oral mucosa. Histologically the hallmarks are: (1) a saw-tooth rete ridge pattern; (2) a dense band-like ('lichenoid') lymphocytic infiltrate hugging the dermoepidermal junction; and (3) Civatte bodies (colloid bodies) — necrotic basal keratinocytes. This interface dermatitis pattern distinguishes it from psoriasis (which shows parakeratosis and neutrophilic microabscesses) and eczema (which shows spongiosis). Oral lichen planus is a known premalignant condition with small risk of transformation to SCC."
    },

    {
        question: "A 30-year-old woman presents with blistering lesions in the mouth and on the trunk. Nikolsky's sign is positive. Biopsy shows intraepidermal acantholysis with suprabasal blister formation. Direct immunofluorescence shows IgG in a 'fishnet' (intercellular) pattern throughout the epidermis.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Dermatitis herpetiformis",
            B: "Epidermolysis bullosa",
            C: "Pemphigus vulgaris",
            D: "Erythema multiforme",
            E: "Bullous pemphigoid",
        },
        correctAnswer: "C",
        explanation: "Pemphigus vulgaris is a potentially fatal autoimmune blistering disorder caused by IgG autoantibodies against desmoglein-1 and desmoglein-3 — desmosomal glycoproteins mediating keratinocyte-keratinocyte adhesion. Loss of adhesion causes acantholysis (separation of keratinocytes) within the epidermis, producing suprabasal blisters. Oral involvement is characteristic and often precedes skin lesions. Nikolsky's sign is positive (lateral pressure causes blistering). The direct immunofluorescence 'fishnet' pattern of intercellular IgG deposition is pathognomonic. Bullous pemphigoid (subepidermal blistering) is distinguished by linear IgG at the BMZ and a negative Nikolsky's sign. Dermatitis herpetiformis shows IgA at dermal papillae. Bullous pemphigoid is more common in the elderly."
    },

    {
        question: "A 55-year-old man presents with a pearly, translucent, nodular lesion with overlying telangiectasia and a rolled edge on his nose. He works outdoors. Biopsy shows islands of basaloid cells with peripheral nuclear palisading and retraction artefact between the tumour nests and surrounding stroma.\n\nWhat is the most common subtype of this tumour?",
        options: {
            A: "Pigmented basal cell carcinoma",
            B: "Infiltrating basal cell carcinoma",
            C: "Morphoeic (sclerosing) basal cell carcinoma",
            D: "Nodular basal cell carcinoma",
            E: "Superficial basal cell carcinoma",
        },
        correctAnswer: "D",
        explanation: "Basal cell carcinoma (BCC) is the most common skin cancer and most common cancer in humans. The nodular subtype is by far the most common (approximately 60–70% of BCCs), presenting as a pearly, dome-shaped nodule with surface telangiectasia, a rolled ('pearly') border, and sometimes central ulceration ('rodent ulcer'). Histologically, nodular BCC shows rounded islands of basaloid cells with peripheral palisading and a characteristic retraction artefact (artifactual clefting between tumour nests and the fibromyxoid stroma). UV radiation is the primary risk factor. Morphoeic BCC is the most aggressive subtype, presenting as an indurated plaque with poorly defined margins, mimicking a scar — it has infiltrating strands of cells embedded in a dense desmoplastic stroma and carries a high recurrence risk."
    },

    {
        question: "A 68-year-old man with a long history of sun exposure presents with an irregularly pigmented lesion on his upper back. Dermoscopy shows irregular streaks and multiple colours. Excision shows malignant melanocytes displaying pagetoid spread (single melanocytes migrating upward through the epidermis) and a lentiginous junctional growth pattern, with invasion into the papillary dermis. Breslow thickness is 0.7mm.\n\nWhich subtype of melanoma does this most likely represent?",
        options: {
            A: "Lentigo maligna melanoma",
            B: "Desmoplastic melanoma",
            C: "Nodular melanoma",
            D: "Acral lentiginous melanoma",
            E: "Superficial spreading melanoma",
        },
        correctAnswer: "E",
        explanation: "Superficial spreading melanoma is the most common subtype of melanoma, accounting for approximately 70% of cases. It typically presents in middle-aged adults on the upper back (men) or legs (women) as an irregularly pigmented lesion with ABCDE features (Asymmetry, Border irregularity, Colour variation, Diameter >6mm, Evolution). Histologically, the hallmark is pagetoid spread — atypical melanocytes migrating upward through the epidermis as single cells and small nests. Lentigo maligna melanoma arises on chronically sun-damaged facial skin in elderly patients and shows a lentiginous (single-cell) growth pattern without prominent pagetoid spread. Nodular melanoma has no horizontal (radial) growth phase — it invades vertically from the outset, making it the most aggressive subtype despite often lacking obvious surface irregularity. Acral lentiginous melanoma affects palms, soles, and nail beds."
    },

    {
        question: "A 14-year-old boy is brought to his GP with a rash on his trunk and face. He has multiple café-au-lait spots, axillary freckling, and numerous soft skin-coloured nodules on his trunk. Biopsy of a nodule shows proliferating Schwann cells and fibroblasts in a loosely textured matrix.\n\nWhat is the most likely underlying diagnosis?",
        options: {
            A: "Neurofibromatosis type 1",
            B: "Sturge-Weber syndrome",
            C: "Tuberous sclerosis",
            D: "Von Hippel-Lindau disease",
            E: "Multiple endocrine neoplasia type 1",
        },
        correctAnswer: "A",
        explanation: "Neurofibromatosis type 1 (NF1, von Recklinghausen disease) is an autosomal dominant condition caused by mutations in the NF1 gene on chromosome 17 encoding neurofibromin, a tumour suppressor. The clinical features include: ≥6 café-au-lait macules (>1.5cm), axillary/inguinal freckling (Crowe's sign), multiple neurofibromas (benign peripheral nerve sheath tumours), Lisch nodules (iris hamartomas), and optic gliomas. Neurofibromas histologically show a proliferation of Schwann cells, fibroblasts, and perineurial cells in a myxoid collagenous matrix. Complications include plexiform neurofibromas (risk of malignant transformation to MPNST), learning difficulties, and scoliosis. Tuberous sclerosis causes angiofibromas (adenoma sebaceum), shagreen patches, and ash-leaf macules. VHL causes haemangioblastomas and ccRCC."
    },

    {
        question: "A 32-year-old woman presents with anxiety, weight loss, heat intolerance, palpitations, and a smooth diffuse goitre. She has a fine tremor and exophthalmos. TSH is undetectable and free T4 is markedly elevated. Thyroid biopsy shows follicular hyperplasia with scalloped colloid and a lymphocytic infiltrate.\n\nWhat is the pathophysiological mechanism of her hyperthyroidism?",
        options: {
            A: "TSH-secreting pituitary adenoma causing secondary hyperthyroidism",
            B: "IgG autoantibodies stimulating the TSH receptor causing autonomous thyroid hormone production",
            C: "Autonomous nodule producing thyroid hormone independently of TSH",
            D: "Destructive release of pre-formed thyroid hormones due to viral thyroiditis",
            E: "Ectopic thyroid hormone production by an ovarian teratoma",
        },
        correctAnswer: "B",
        explanation: "Graves' disease is the most common cause of hyperthyroidism and is caused by TSH receptor-stimulating antibodies (TRAb) — IgG autoantibodies that bind and constitutively activate the TSH receptor, mimicking TSH and driving autonomous, unregulated thyroid hormone production. It is associated with HLA-DR3 and affects women far more than men. Exophthalmos (proptosis) results from autoimmune inflammation and glycosaminoglycan deposition in the orbital tissues and is specific to Graves' disease among causes of hyperthyroidism. Histologically, the thyroid shows columnar follicular epithelium with papillary infoldings, scalloped (moth-eaten) colloid indicating active resorption, and lymphocytic infiltration. De Quervain's thyroiditis causes transient hyperthyroidism by destructive release, but presents with pain and tenderness and shows granulomatous inflammation."
    },

        // ─── THYROID & ENDOCRINE ─────────────────────────────────────────────────

    {
        question: "A 50-year-old woman presents with a solitary thyroid nodule. Fine-needle aspiration cytology shows follicular cells arranged in microfollicles. The nodule is excised and histology shows capsular and vascular invasion.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Papillary thyroid carcinoma",
            B: "Follicular adenoma",
            C: "Follicular carcinoma",
            D: "Anaplastic carcinoma",
            E: "Medullary carcinoma",
        },
        correctAnswer: "C",
        explanation: "Follicular carcinoma of the thyroid cannot be distinguished from follicular adenoma on FNA cytology alone — both show similar follicular architecture. The critical distinction is made only on histological examination of the entire excised specimen: follicular carcinoma is defined by the presence of capsular invasion (tumour breaching the fibrous capsule) and/or vascular invasion (tumour cells within vessels), whereas follicular adenoma is completely encapsulated with no invasion. Follicular carcinoma spreads haematogenously (to lung and bone) rather than via lymphatics — unlike papillary thyroid carcinoma, which spreads to cervical lymph nodes. Nuclear features of papillary carcinoma (ground glass nuclei, nuclear grooves, pseudoinclusions) are absent. This is why follicular adenoma/carcinoma requires surgical excision for definitive diagnosis."
    },

    {
        question: "A 45-year-old man with a known family history of phaeochromocytoma and medullary thyroid carcinoma presents for screening. Genetic testing reveals a germline RET proto-oncogene mutation. He undergoes prophylactic thyroidectomy and the specimen shows C-cell hyperplasia with early microcarcinoma foci.\n\nWith which syndrome is this genetic mutation most associated?",
        options: {
            A: "Neurofibromatosis type 2",
            B: "Carney complex",
            C: "Multiple endocrine neoplasia type 1 (MEN1)",
            D: "Multiple endocrine neoplasia type 2A (MEN2A)",
            E: "Von Hippel-Lindau syndrome",
        },
        correctAnswer: "D",
        explanation: "Multiple endocrine neoplasia type 2A (MEN2A, Sipple syndrome) is caused by germline activating mutations in the RET proto-oncogene and is characterised by the triad of: (1) medullary thyroid carcinoma (MTC) — arising from calcitonin-secreting C cells; (2) phaeochromocytoma; and (3) primary hyperparathyroidism. MTC is the most penetrant feature and the leading cause of death in MEN2A — prophylactic thyroidectomy is recommended in RET mutation carriers. MEN2B (also RET mutation) causes MTC, phaeochromocytoma, mucosal neuromas, and marfanoid habitus, but not hyperparathyroidism. MEN1 (menin gene mutation, chromosome 11) causes parathyroid hyperplasia, pancreatic neuroendocrine tumours, and pituitary adenomas — the '3 Ps'. VHL syndrome causes haemangioblastoma, ccRCC, and phaeochromocytoma."
    },

    {
        question: "A 62-year-old woman presents with symptoms of hypercalcaemia — constipation, polyuria, and depression. Parathyroid hormone is markedly elevated. Imaging identifies a single enlarged parathyroid gland. The gland is excised and histology shows a hypercellular gland composed predominantly of chief cells with loss of stromal fat.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Parathyroid hyperplasia",
            B: "Parathyroid carcinoma",
            C: "Secondary hyperparathyroidism",
            D: "Tertiary hyperparathyroidism",
            E: "Parathyroid adenoma",
        },
        correctAnswer: "E",
        explanation: "Parathyroid adenoma is the most common cause of primary hyperparathyroidism (80–85% of cases), typically involving a single gland. It presents with hypercalcaemia (elevated calcium, elevated PTH, low phosphate) and its consequences: renal stones, bone disease (osteitis fibrosa cystica), abdominal symptoms, and neuropsychiatric effects ('bones, stones, groans, and moans'). Histologically, the adenoma is hypercellular with chief cells and loss of normal stromal fat. The three remaining glands are normal (distinguishing it from hyperplasia, which involves all four glands). Secondary hyperparathyroidism occurs in chronic renal failure (hypocalcaemia drives all four glands to hyperplasia). Tertiary hyperparathyroidism is autonomous PTH secretion developing after long-standing secondary hyperparathyroidism. Carcinoma is rare and presents with very high calcium."
    },

    {
        question: "A 38-year-old woman presents with episodic headaches, sweating, palpitations, and hypertension. 24-hour urinary catecholamines and metanephrines are markedly elevated. CT shows a 4-cm right adrenal mass. The mass is excised and histology shows polygonal cells with granular cytoplasm arranged in a 'Zellballen' (ball-like) nesting pattern, surrounded by a rich vascular network.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Phaeochromocytoma",
            B: "Adrenocortical adenoma",
            C: "Adrenocortical carcinoma",
            D: "Metastatic carcinoma to the adrenal",
            E: "Neuroblastoma",
        },
        correctAnswer: "A",
        explanation: "Phaeochromocytoma is a catecholamine-secreting tumour of chromaffin cells of the adrenal medulla, causing episodic (or sustained) hypertension with the triad of headache, sweating, and palpitations. The rule of 10s: 10% bilateral, 10% extra-adrenal (paraganglioma), 10% malignant, 10% in children, 10% familial (associated with MEN2A/2B, VHL, NF1, SDH mutations). The Zellballen pattern — polygonal cells arranged in discrete nests surrounded by sustentacular cells and a rich capillary network — is the pathological hallmark. Diagnosis is biochemical (elevated urinary catecholamines and metanephrines). Adrenocortical tumours produce steroid hormones (cortisol, aldosterone, androgens), not catecholamines. Neuroblastoma arises in children from immature neuroblasts and also shows elevated catecholamines but lacks the Zellballen pattern of mature chromaffin cells."
    },

    {
        question: "A 55-year-old man presents with haematuria and dysuria. Cystoscopy shows a papillary lesion on the posterior wall of the bladder. Biopsy shows a papillary tumour with a fibrovascular core lined by transitional epithelium showing loss of polarity, nuclear pleomorphism, and frequent mitoses, confined to the urothelium without breach of the basement membrane.\n\nWhat is the stage of this tumour?",
        options: {
            A: "T0 — no evidence of primary tumour",
            B: "Ta — non-invasive papillary carcinoma",
            C: "T1 — invasion into subepithelial connective tissue",
            D: "T2 — invasion into muscularis propria",
            E: "T3 — invasion through muscularis propria into perivesical fat",
        },
        correctAnswer: "B",
        explanation: "Bladder carcinoma is staged using the TNM system. The description shows a papillary urothelial carcinoma confined to the urothelium — the epithelium lining the bladder — without breaching the basement membrane. This is classified as Ta (non-invasive papillary carcinoma), which is the most common presentation of low-grade bladder cancer. Ta tumours are treated with TURBT (transurethral resection) and cystoscopic surveillance. T1 tumours invade the lamina propria (subepithelial connective tissue) below the basement membrane. T2 tumours invade the muscularis propria — a critical threshold, as T2+ disease requires radical cystectomy or radical radiotherapy. Transitional cell (urothelial) carcinoma is the most common bladder cancer and is strongly associated with smoking and aromatic amine exposure."
    },

        // ─── UROLOGY & TESTICULAR ────────────────────────────────────────────────

    {
        question: "A 3-year-old boy is brought to his GP with a painless abdominal mass. His mother noticed it during bathing. CT shows a large heterogeneous mass arising from the left kidney with areas of haemorrhage. Histology shows a triphasic tumour consisting of blastemal cells, stromal elements, and epithelial tubular structures.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Neuroblastoma",
            B: "Renal cell carcinoma",
            C: "Wilms tumour (nephroblastoma)",
            D: "Angiomyolipoma",
            E: "Oncocytoma",
        },
        correctAnswer: "C",
        explanation: "Wilms tumour (nephroblastoma) is the most common renal malignancy in children, with a peak incidence between 3–4 years of age. It classically presents as a unilateral, painless abdominal mass discovered incidentally. The pathognomonic histological feature is its triphasic composition: (1) blastemal cells — small, primitive, blue cells in sheets; (2) epithelial elements — tubular and glomeruloid structures; and (3) stromal elements — spindle cells and fibrous tissue. WAGR syndrome (Wilms, Aniridia, Genitourinary anomalies, intellectual disability — caused by WT1 deletion on chromosome 11p13) is an important association. Neuroblastoma also presents as an abdominal mass in children but arises from the adrenal medulla/sympathetic chain, not the kidney, and shows rosette formations. RCC is rare in children."
    },

    {
        question: "A 60-year-old man presents with lower urinary tract symptoms, elevated PSA (18 ng/mL), and a hard, irregular prostate on digital rectal examination. Prostate biopsy shows malignant glands with loss of the normal two-cell layer (absent basal cell layer), prominent nucleoli, and perineural invasion. The Gleason score is 4+4=8.\n\nWhat does a high Gleason score indicate?",
        options: {
            A: "The tumour is of transitional cell rather than acinar origin",
            B: "The tumour is confined to the prostate capsule",
            C: "The tumour is highly differentiated and likely indolent",
            D: "The tumour is poorly differentiated with high architectural disorder and carries a worse prognosis",
            E: "The tumour has already metastasised to bone",
        },
        correctAnswer: "D",
        explanation: "The Gleason scoring system grades prostatic adenocarcinoma based on architectural pattern (not cytological atypia). Each of the two most prevalent patterns is graded 1–5 (1=most differentiated, 5=least differentiated, with completely lost glandular architecture). The two grades are added to give a combined Gleason score of 2–10. A score of 8–10 (Gleason grade group 4–5) indicates poorly differentiated carcinoma with sheets of cells, cribriform patterns, or comedonecrosis, and carries the worst prognosis with high risk of extraprostatic extension and metastasis. An absent basal cell layer is a histological hallmark of malignancy in the prostate (benign glands have a basal cell layer). Perineural invasion, while not included in staging, is an adverse histological feature. The absent basal cell layer is confirmed with immunohistochemistry (CK5/6, p63 negative in carcinoma)."
    },

    {
        question: "A 25-year-old man presents with a painless testicular swelling. Serum hCG is markedly elevated. Orchidectomy is performed and histology shows large, pleomorphic cells with hyperchromatic nuclei arranged in sheets and cords, with areas of haemorrhage and necrosis. No glandular or organoid structures are seen. No lymphocytic infiltrate is present.\n\nWhich tumour marker is most specifically elevated in this type of germ cell tumour?",
        options: {
            A: "CA-125",
            B: "CEA",
            C: "Alpha-fetoprotein (AFP)",
            D: "LDH",
            E: "Human chorionic gonadotrophin (hCG)",
        },
        correctAnswer: "E",
        explanation: "The histological description — large pleomorphic cells without glandular structures, no lymphocytic stroma, areas of haemorrhage and necrosis — combined with markedly elevated hCG points to embryonal carcinoma or, given the markedly elevated hCG specifically, choriocarcinoma (the most hCG-producing germ cell tumour). Pure choriocarcinoma is characterised by cytotrophoblasts and syncytiotrophoblasts (which produce hCG) and shows extensive haemorrhage and necrosis. HCG is the most specifically elevated marker. AFP is produced by yolk sac tumours (and to a lesser extent embryonal carcinoma). LDH is a non-specific marker of tumour bulk elevated in seminoma. If AFP is elevated, the tumour cannot be pure choriocarcinoma or pure seminoma. CA-125 and CEA are not testicular GCT markers."
    },

    {
        question: "A 45-year-old man presents with a 6-month history of worsening urinary stream, nocturia, and incomplete bladder emptying. Digital rectal examination shows a smoothly enlarged, non-tender, rubbery prostate. PSA is 3.2 ng/mL. A biopsy is taken from an incidentally noted area and shows glandular hyperplasia of both epithelial and stromal components, with no atypia or basal cell layer loss.\n\nWhat zone of the prostate is most commonly affected in this condition?",
        options: {
            A: "Transition zone",
            B: "Anterior fibromuscular stroma",
            C: "Periurethral zone",
            D: "Peripheral zone",
            E: "Central zone",
        },
        correctAnswer: "A",
        explanation: "Benign prostatic hyperplasia (BPH) characteristically affects the transition zone — the inner periurethral zone of the prostate — causing compression of the prostatic urethra and producing the obstructive lower urinary tract symptoms described. Histologically, BPH shows nodular hyperplasia of both glandular (epithelial) and stromal elements, with normal glandular architecture and an intact two-cell layer (basal cells present). The peripheral zone is where approximately 70% of prostatic carcinomas arise — and this is why DRE (which samples the posterior peripheral zone) can detect suspicious irregular areas of carcinoma. The central zone surrounds the ejaculatory ducts and is less commonly involved in either BPH or carcinoma. Understanding zonal anatomy is critical to interpreting prostatic pathology."
    },

    {
        question: "A 60-year-old male smoker presents with a unilateral parotid mass. The mass is excised and histology shows a biphasic tumour composed of epidermoid (squamous) cells, mucous cells, and intermediate cells arranged in sheets and glands. Mucin staining is positive in the glandular component.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Warthin tumour",
            B: "Mucoepidermoid carcinoma",
            C: "Adenoid cystic carcinoma",
            D: "Acinic cell carcinoma",
            E: "Pleomorphic adenoma",
        },
        correctAnswer: "B",
        explanation: "Mucoepidermoid carcinoma is the most common malignant salivary gland tumour, most frequently arising in the parotid gland. It is strongly associated with prior radiation exposure and — as in this case — smoking. The hallmark is its mixed cellular composition: squamous (epidermoid) cells, mucus-secreting cells, and intermediate cells — reflecting differentiation towards both epidermoid and mucous cell lineages. It is graded as low, intermediate, or high based on the proportion of mucous cells, cystic spaces, and mitotic activity. Low-grade tumours behave relatively indolently; high-grade tumours are aggressive with high recurrence and metastatic potential. Warthin tumour (papillary cystadenoma lymphomatosum) shows a bilayered oncocytic epithelium with lymphoid stroma. Adenoid cystic carcinoma shows cribriform cylinders and is notorious for perineural invasion."
    },

        // ─── HEAD & NECK / SALIVARY GLANDS ──────────────────────────────────────

    {
        question: "A 55-year-old woman presents with a slowly enlarging parotid mass associated with facial nerve weakness. Biopsy shows a tumour with a cribriform (Swiss cheese) pattern of small uniform cells surrounding cylindrical spaces filled with basement membrane-like material. Perineural invasion is prominent.\n\nWhat is the most likely diagnosis, and what is its most characteristic behaviour?",
        options: {
            A: "Pleomorphic adenoma — risks malignant transformation",
            B: "Mucoepidermoid carcinoma — spreads to cervical lymph nodes early",
            C: "Adenoid cystic carcinoma — notorious for perineural spread and late distant metastases",
            D: "Warthin tumour — bilateral in 10% of cases",
            E: "Acinic cell carcinoma — low grade with excellent prognosis",
        },
        correctAnswer: "C",
        explanation: "Adenoid cystic carcinoma (ACC) is the second most common malignant salivary gland tumour and is particularly notorious for two clinical behaviours: (1) perineural invasion — it spreads along nerve sheaths, causing facial nerve palsy and pain, and accounting for late local recurrences along nerve paths even after resection; and (2) late haematogenous metastases — particularly to the lung, occurring years or even decades after initial treatment, giving a deceptively prolonged but ultimately poor prognosis. The cribriform (Swiss cheese) growth pattern is the classic histological appearance, with cylinders of basement membrane material filling pseudoglandular spaces. Mucoepidermoid carcinoma is the most common malignant salivary tumour but lacks the perineural tropism. Pleomorphic adenoma is benign but can undergo malignant transformation (carcinoma ex pleomorphic adenoma)."
    },

    {
        question: "A 65-year-old man presents with a right-sided neck mass that has been present for 3 months. He has no parotid or oral symptoms. FNA of the neck mass shows metastatic squamous cell carcinoma. Panendoscopy and biopsy of the right tonsil reveals a small primary SCC.\n\nWhich virus is most strongly associated with oropharyngeal squamous cell carcinoma in non-smokers?",
        options: {
            A: "Human herpesvirus 8",
            B: "Epstein-Barr virus",
            C: "Herpes simplex virus type 1",
            D: "Human papillomavirus (HPV) 16 and 18",
            E: "Cytomegalovirus",
        },
        correctAnswer: "D",
        explanation: "Human papillomavirus (HPV), particularly high-risk subtypes 16 and 18, is a major cause of oropharyngeal squamous cell carcinoma (OPSCC), particularly in non-smokers and younger patients. HPV-positive OPSCC most commonly arises in the tonsils and base of tongue, tends to present with a small primary and a relatively large cervical lymph node metastasis (as in this case), and paradoxically carries a significantly better prognosis than HPV-negative (smoking-related) OPSCC. HPV oncoproteins E6 and E7 inactivate p53 and RB1 respectively, driving carcinogenesis. Epstein-Barr virus is associated with nasopharyngeal carcinoma (NPC) — a distinct entity arising in the nasopharynx, more common in Southeast Asian populations. HHV-8 causes Kaposi's sarcoma."
    },

    {
        question: "A 50-year-old man from Southeast Asia presents with epistaxis, nasal obstruction, and a right-sided neck mass. Nasopharyngoscopy shows a mass in the nasopharyngeal vault. Biopsy shows poorly differentiated carcinoma cells with prominent nucleoli growing in sheets, with a dense lymphocytic infiltrate in the stroma. EBV-encoded RNA (EBER) in-situ hybridisation is strongly positive.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Angiofibroma",
            B: "Sinonasal undifferentiated carcinoma",
            C: "Olfactory neuroblastoma",
            D: "Non-Hodgkin lymphoma",
            E: "Nasopharyngeal carcinoma",
        },
        correctAnswer: "E",
        explanation: "Nasopharyngeal carcinoma (NPC) is a distinct form of head and neck squamous cell carcinoma with a striking geographical distribution — highly prevalent in Southeast Asia, North Africa, and parts of the Middle East. It has a near-universal association with Epstein-Barr virus (EBV), confirmed by EBER in-situ hybridisation (as here) or EBV serology. NPC classically presents with epistaxis, nasal obstruction, serous otitis media (Eustachian tube obstruction), and cervical lymphadenopathy — often with a large node and a clinically occult primary. The WHO type III (undifferentiated) NPC shows sheets of undifferentiated carcinoma cells with prominent nucleoli and a characteristic dense lymphocytic infiltrate (giving the old name 'lymphoepithelioma'). It is highly radiosensitive. Sinonasal undifferentiated carcinoma lacks EBV association."
    },

    {
        question: "A 4-year-old boy presents with a midline neck swelling that moves upward on swallowing and on tongue protrusion. Ultrasound shows a cystic structure adjacent to the hyoid bone. The cyst is excised along with the central portion of the hyoid bone (Sistrunk procedure). Histology shows a cyst lined by respiratory and stratified squamous epithelium surrounded by thyroid follicles.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Thyroglossal duct cyst",
            B: "Lymphangioma",
            C: "Cervical thymic cyst",
            D: "Branchial cleft cyst",
            E: "Dermoid cyst",
        },
        correctAnswer: "A",
        explanation: "Thyroglossal duct cyst is the most common midline neck mass in children. During embryological development, the thyroid gland descends from the foramen caecum at the base of the tongue to its final position in the neck, leaving behind the thyroglossal duct. Failure of this duct to involute results in a cyst anywhere along this descent pathway, most commonly at or just below the hyoid bone. The pathognomonic clinical feature is upward movement on tongue protrusion (the duct is attached to the tongue base). Histologically, the cyst is lined by pseudostratified columnar (respiratory) and stratified squamous epithelium, with thyroid follicles in the wall. The Sistrunk procedure (excision with the central hyoid body) reduces recurrence. Branchial cleft cysts are lateral neck masses. Dermoid cysts are midline but do not move with tongue protrusion and lack thyroid follicles."
    },

    {
        question: "A 2-year-old girl is brought to the GP after her mother notices a white pupillary reflex (leukocoria) in photographs. Ophthalmological examination shows a white mass in the posterior segment. Histology of the enucleated eye shows undifferentiated neuroblastic cells forming Flexner-Wintersteiner rosettes and fleurettes.\n\nWhat is the underlying genetic mechanism in the hereditary form of this tumour?",
        options: {
            A: "Amplification of the MYCN oncogene",
            B: "Germline inactivation of both copies of the RB1 tumour suppressor gene (Knudson two-hit hypothesis)",
            C: "Translocation t(11;22) producing EWS-FLI1 fusion",
            D: "Loss of VHL tumour suppressor on chromosome 3p",
            E: "Gain-of-function mutation in BRAF oncogene",
        },
        correctAnswer: "B",
        explanation: "Retinoblastoma is the most common primary intraocular malignancy of childhood and is the prototype tumour illustrating Knudson's two-hit hypothesis of tumour suppressor gene inactivation. In the hereditary form (40% of cases), a germline inactivating mutation in one copy of the RB1 gene is inherited — every cell in the body carries this first 'hit'. A somatic mutation inactivating the second allele in a retinal cell provides the second 'hit', triggering tumorigenesis. This explains why hereditary cases are often bilateral and multifocal. Flexner-Wintersteiner rosettes (tumour cells arranged around a central lumen) and fleurettes (flower-like arrangements of differentiated photoreceptor elements) are the pathological hallmarks. Hereditary retinoblastoma patients are also at increased risk of secondary osteosarcoma, as RB1 is a critical cell cycle regulator in many tissues."
    },

    {
        question: "A 70-year-old man presents with painless, progressive loss of central vision in his right eye. Fundoscopy shows a grey-green subretinal mass with overlying retinal detachment. Histology of the enucleated eye shows spindle-shaped cells with bland nuclei (spindle A and spindle B cells) arranged in fascicles.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Choroidal metastasis",
            B: "Choroidal haemangioma",
            C: "Uveal melanoma",
            D: "Retinal detachment without tumour",
            E: "Retinoblastoma",
        },
        correctAnswer: "C",
        explanation: "Uveal melanoma is the most common primary intraocular malignancy in adults, arising from melanocytes of the uveal tract (iris, ciliary body, choroid). It typically presents in older adults with painless visual disturbance, metamorphopsia, or is found incidentally. Fundoscopy shows a pigmented (or occasionally amelanotic) subretinal mass, often with an overlying orange lipofuscin 'flea-bitten' appearance and retinal detachment. Histological classification: spindle cell type (spindle A and B — most favourable prognosis), epithelioid cell type (worst prognosis), and mixed. Metastasis occurs haematogenously to the liver in approximately 50% of patients. Unlike cutaneous melanoma, BRAF mutations are uncommon in uveal melanoma (GNA11 and GNAQ mutations are more characteristic). Choroidal metastasis from breast or lung cancer is actually the most common intraocular tumour overall, but is secondary, not primary."
    },

        // ─── EYE ─────────────────────────────────────────────────────────────────

    {
        question: "A 10-year-old boy presents with a purpuric rash on his buttocks and lower limbs, colicky abdominal pain, arthralgia, and haematuria. Renal biopsy shows mesangial IgA deposition on immunofluorescence with mild mesangial hypercellularity on light microscopy.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Systemic lupus erythematosus",
            B: "Microscopic polyangiitis",
            C: "Kawasaki disease",
            D: "Henoch-Schönlein purpura",
            E: "Polyarteritis nodosa",
        },
        correctAnswer: "D",
        explanation: "Henoch-Schönlein purpura (IgA vasculitis) is the most common systemic vasculitis in children and is caused by IgA immune complex deposition in small vessel walls. The classic tetrad is: (1) palpable purpura — characteristically on the lower limbs and buttocks in a gravity-dependent distribution; (2) arthralgia/arthritis; (3) abdominal pain (due to gut wall vasculitis); and (4) renal involvement — ranging from microscopic haematuria to nephritis. The key immunofluorescence finding is mesangial IgA deposition — identical to IgA nephropathy (Berger's disease), which is considered the isolated renal manifestation of the same condition. It is often preceded by an upper respiratory tract infection. The condition is usually self-limiting in children but can cause chronic renal disease. Kawasaki disease affects medium vessels and causes coronary aneurysms."
    },

    {
        question: "A 55-year-old man presents with sinusitis, haemoptysis, and haematuria. CXR shows bilateral cavitating lung nodules. Serum c-ANCA (PR3-ANCA) is strongly positive. Renal biopsy shows focal necrotising glomerulonephritis with crescents and pauci-immune staining (minimal immunoglobulin deposition) on immunofluorescence.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Microscopic polyangiitis",
            B: "Churg-Strauss syndrome (eosinophilic granulomatosis with polyangiitis)",
            C: "Polyarteritis nodosa",
            D: "Goodpasture syndrome",
            E: "Granulomatosis with polyangiitis (Wegener's)",
        },
        correctAnswer: "E",
        explanation: "Granulomatosis with polyangiitis (GPA, formerly Wegener's granulomatosis) is an ANCA-associated small vessel vasculitis classically affecting the upper respiratory tract (sinusitis, epistaxis, saddle-nose deformity), lower respiratory tract (cavitating nodules, haemoptysis), and kidneys (rapidly progressive GN). The serological hallmark is c-ANCA, with antibodies directed against proteinase-3 (PR3-ANCA). Renal biopsy characteristically shows pauci-immune crescentic GN — severe crescentic injury with minimal or no immunoglobulin staining on immunofluorescence (distinguishing it from Goodpasture syndrome, which shows linear IgG). Histologically, the lung shows necrotising granulomatous inflammation. Microscopic polyangiitis is p-ANCA/MPO-positive and lacks granulomas. Churg-Strauss is associated with asthma and eosinophilia."
    },

        // ─── VASCULITIS ──────────────────────────────────────────────────────────

    {
        question: "A 35-year-old woman of Asian descent presents with arm claudication and a markedly reduced right radial pulse. CT angiography shows irregular narrowing and wall thickening of the aorta and its major branches. ESR is elevated at 90 mm/hr. Biopsy shows granulomatous inflammation of the vessel wall with giant cells involving the full thickness (panarteritis).\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Takayasu arteritis",
            B: "Kawasaki disease",
            C: "Buerger disease",
            D: "Giant cell arteritis",
            E: "Polyarteritis nodosa",
        },
        correctAnswer: "A",
        explanation: "Takayasu arteritis ('pulseless disease') is a large vessel granulomatous vasculitis affecting the aorta and its major branches, predominantly in young women of Asian descent (under 40). The inflammatory destruction of the vessel wall leads to stenosis, occlusion, or aneurysm formation. Clinical features reflect ischaemia in affected territories: arm claudication, reduced/absent pulses (hence 'pulseless disease'), blood pressure discrepancy between arms, bruits, and constitutional symptoms. Histology shows granulomatous panarteritis with giant cells and lymphocytic infiltration — identical to GCA histologically. Giant cell arteritis (temporal arteritis) is distinguished by its older patient age (>50), predominant temporal artery involvement, and risk of blindness. Polyarteritis nodosa affects medium vessels with a necrotising (not granulomatous) vasculitis and spares the pulmonary arteries. Buerger disease affects small/medium vessels in young male smokers."
    },

    {
        question: "A 5-year-old boy presents with a 7-day history of persistent fever, a generalised erythematous rash, bilateral conjunctival injection, a strawberry tongue, and swelling and erythema of the palms and soles. ECG shows sinus tachycardia. Echocardiogram shows dilatation of the right coronary artery.\n\nWhat is the most serious complication of this condition?",
        options: {
            A: "Renal failure due to immune complex deposition",
            B: "Coronary artery aneurysm formation leading to thrombosis and myocardial infarction",
            C: "Pulmonary hypertension due to pulmonary vasculitis",
            D: "Peripheral gangrene due to digital artery occlusion",
            E: "Aortic dissection due to weakening of the aortic wall",
        },
        correctAnswer: "B",
        explanation: "Kawasaki disease is an acute febrile vasculitis of medium-sized vessels predominantly affecting children under 5, of unknown aetiology (thought to involve an abnormal immune response to an infectious trigger). The diagnostic criteria require fever ≥5 days plus four of: conjunctival injection, rash, oral changes (strawberry tongue, cracked lips), peripheral extremity changes (erythema/oedema of hands and feet, later desquamation), and cervical lymphadenopathy. The most serious and feared complication is coronary artery aneurysm formation — occurring in approximately 15–25% of untreated children — which can lead to coronary thrombosis, myocardial infarction, and sudden death. Treatment with high-dose aspirin and IV immunoglobulin reduces aneurysm formation to <5%. Echocardiography is essential for monitoring. Kawasaki disease is now the leading cause of acquired heart disease in children in developed countries."
    },

    {
        question: "A 14-year-old boy presents with progressive unilateral nasal obstruction and recurrent epistaxis. Examination shows a pinkish-red mass in the nasopharynx. CT shows a vascular mass centred at the sphenopalatine foramen with bony erosion. Biopsy is avoided due to bleeding risk. The mass is excised and histology shows irregular vascular channels in a fibrous stroma with stellate stromal cells.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Inverted papilloma",
            B: "Bilateral allergic polyp",
            C: "Angiofibroma",
            D: "Olfactory neuroblastoma",
            E: "Sinonasal undifferentiated carcinoma",
        },
        correctAnswer: "C",
        explanation: "Juvenile nasopharyngeal angiofibroma (JNA) is a benign but locally aggressive vascular tumour occurring almost exclusively in adolescent males. It arises from the sphenopalatine foramen region and presents with progressive unilateral nasal obstruction and recurrent, often severe, epistaxis. CT characteristically shows a highly vascular mass with bony erosion and enhancement. Biopsy is contraindicated due to the extreme vascularity — diagnosis is clinical and radiological. Histologically, JNA shows irregular, staghorn vascular channels lacking smooth muscle in a fibrous stroma with stellate and spindle cells. Pre-operative embolisation is used to reduce intraoperative bleeding before surgical excision. Angiofibroma never occurs in females — if a female presents with a similar lesion, an alternative diagnosis should be sought. Inverted papilloma also causes unilateral nasal symptoms but shows an endophytic papillary architecture and has malignant potential."
    },

    {
        question: "A 50-year-old man presents with a 1-year history of unilateral nasal obstruction, epistaxis, and facial pressure. Endoscopy shows a grey, fleshy mass in the right nasal cavity. Biopsy shows an endophytic (inverted) papillary growth of squamous and respiratory epithelium growing into the underlying stroma.\n\nWhat is the most important reason to excise this lesion completely?",
        options: {
            A: "It will cause irreversible bone destruction leading to orbital invasion",
            B: "It will inevitably cause fatal intracranial extension if left untreated",
            C: "It is a malignant tumour that spreads to cervical lymph nodes",
            D: "It has a significant risk of recurrence after incomplete excision and approximately 10% risk of associated or subsequent squamous cell carcinoma",
            E: "It causes systemic immunosuppression predisposing to opportunistic infection",
        },
        correctAnswer: "D",
        explanation: "Sinonasal inverted papilloma (Schneiderian papilloma) is a benign but clinically important lesion characterised by its endophytic (inverted into the stroma) growth pattern of squamous and respiratory epithelium. It is almost always unilateral. There are two critical clinical concerns: (1) high recurrence rate after incomplete excision — due to its burrowing growth pattern, simple polypectomy is inadequate; lateral rhinotomy or endoscopic en-bloc excision is required; and (2) malignant transformation — approximately 10% of inverted papillomas are associated with synchronous or metachronous squamous cell carcinoma, making thorough histological sampling essential. HPV has been implicated in some cases. Unlike nasal polyps, inverted papilloma is almost never bilateral and does not respond to steroids."
    },

        // ─── NASAL / UPPER RESPIRATORY ──────────────────────────────────────────

    {
        question: "A 35-year-old woman presents with a 2-cm pigmented lesion on her right lower leg. Excision reveals a malignant melanoma with a Breslow thickness of 1.8mm, no ulceration, and 1 mitosis per mm². Sentinel lymph node biopsy is positive for micrometastasis.\n\nAccording to the staging, what does a positive sentinel lymph node indicate?",
        options: {
            A: "Stage IV disease — distant organ metastasis",
            B: "Stage 0 — in-situ melanoma",
            C: "Stage I disease — tumour confined to the skin",
            D: "Stage II disease — high-risk primary without nodal involvement",
            E: "Stage III disease — regional lymph node involvement",
        },
        correctAnswer: "E",
        explanation: "Melanoma staging follows the AJCC TNM system. Stage I and II refer to localised disease (primary tumour without regional or distant spread), with substaging based on Breslow thickness, ulceration status, and mitotic rate. Stage III indicates regional metastasis — defined as involvement of regional lymph nodes (including micrometastasis on SLNB), in-transit metastases, or satellite nodules. Stage IV indicates distant metastasis (lung, liver, brain, bone). A positive sentinel lymph node biopsy, even a micrometastasis, upstages the disease to at least Stage IIIA, which significantly changes prognosis and treatment — patients with Stage III disease may be candidates for adjuvant immunotherapy (anti-PD1 agents: pembrolizumab, nivolumab) or targeted therapy (BRAF/MEK inhibitors if BRAF V600E positive). Breslow thickness remains the most important T-stage determinant."
    },

    {
        question: "A 60-year-old woman presents with persistent itching of the vulva. Examination shows white, atrophic, parchment-like skin with loss of the normal architecture of the labia. Biopsy shows epidermal atrophy, homogenisation of the superficial dermis, and a band-like lymphocytic infiltrate below the zone of homogenisation.\n\nWhat is the most likely diagnosis, and what is the principal clinical concern?",
        options: {
            A: "Lichen sclerosus — small but significant risk of vulval squamous cell carcinoma",
            B: "Vulval intraepithelial neoplasia — inevitable progression to invasive carcinoma",
            C: "Candidal vulvitis — risk of ascending pelvic infection",
            D: "Psoriasis of the vulva — risk of systemic psoriatic arthritis",
            E: "Lichen simplex chronicus — risk of secondary infection",
        },
        correctAnswer: "A",
        explanation: "Lichen sclerosus is a chronic inflammatory dermatosis of unknown aetiology (likely autoimmune) that predominantly affects the anogenital skin of postmenopausal women. Clinically, it produces intense pruritus with progressive atrophy and whitening of the vulvar skin, loss of labial architecture, and potential stenosis of the introitus. The histological hallmarks are: epidermal atrophy with loss of rete ridges, hyalinisation/homogenisation of the superficial dermis (giving the parchment-like appearance), and a band-like lymphocytic infiltrate below this homogenised zone. The key clinical concern is a small but significant risk (approximately 4–5%) of progression to vulval squamous cell carcinoma over the long term — requiring regular surveillance. Treatment with potent topical corticosteroids (clobetasol) controls symptoms and may reduce malignant transformation risk."
    },

        // ─── ADDITIONAL SYSTEMS ────────────────────────────────────────────────

    {
        question: "A 40-year-old man presents with rectal bleeding and a change in bowel habit. Colonoscopy reveals a 4-cm polypoid mass in the sigmoid colon. Histology shows irregular malignant glands with mucin secretion invading through the muscularis propria into the pericolorectal fat. Immunohistochemistry shows loss of MLH1 and PMS2 protein expression.\n\nWhat does loss of MLH1 and PMS2 expression indicate?",
        options: {
            A: "KRAS mutation predicting resistance to anti-EGFR therapy",
            B: "Deficient mismatch repair (dMMR) causing microsatellite instability",
            C: "APC gene mutation indicating familial adenomatous polyposis",
            D: "BRAF V600E mutation associated with sessile serrated lesions",
            E: "TP53 mutation indicating high-grade dysplasia",
        },
        correctAnswer: "B",
        explanation: "MLH1 and PMS2 are mismatch repair (MMR) proteins that normally form a heterodimer and repair errors in DNA replication. Loss of their expression by immunohistochemistry indicates deficient mismatch repair (dMMR), which results in microsatellite instability (MSI) — the accumulation of mutations in repetitive DNA sequences (microsatellites). dMMR colorectal cancers arise via the serrated pathway and account for approximately 15% of sporadic CRCs (often due to MLH1 promoter methylation) and virtually all Lynch syndrome cancers (hereditary MMR gene mutations). Crucially, dMMR/MSI-high tumours respond dramatically to PD-1 immune checkpoint inhibitors (pembrolizumab), making IHC testing of all colorectal cancers essential. They also have a paradoxically better stage-for-stage prognosis than MMR-proficient tumours. KRAS mutation testing guides anti-EGFR therapy selection."
    },

    {
        question: "A 55-year-old woman presents with fatigue, weight loss, and a palpable left supraclavicular lymph node (Virchow's node). Upper GI endoscopy reveals an ulcerating mass in the gastric antrum. Biopsy shows signet ring cells with abundant intracytoplasmic mucin displacing the nucleus to the periphery, diffusely infiltrating the gastric wall without forming glandular structures.\n\nWhat histological type and growth pattern does this represent?",
        options: {
            A: "Carcinoid tumour of the stomach — associated with hypergastrinaemia",
            B: "Intestinal-type gastric adenocarcinoma — associated with H. pylori intestinal metaplasia",
            C: "Diffuse-type gastric adenocarcinoma with linitis plastica pattern",
            D: "Gastrointestinal stromal tumour (GIST) — associated with c-KIT mutation",
            E: "Primary gastric lymphoma — associated with H. pylori MALT",
        },
        correctAnswer: "C",
        explanation: "Diffuse-type gastric adenocarcinoma (Lauren classification) is characterised by signet ring cells — malignant cells with abundant intracytoplasmic mucin (secreted but not exported) that compresses and displaces the nucleus to the cell periphery, creating the signet ring appearance. Unlike intestinal-type adenocarcinoma (which forms glands and is associated with H. pylori-driven intestinal metaplasia), diffuse-type infiltrates individual cells through the gastric wall without gland formation, causing marked desmoplasia and fibrosis — producing the 'leather bottle stomach' or linitis plastica appearance. It is associated with E-cadherin (CDH1) loss and familial cases carry CDH1 germline mutations (hereditary diffuse gastric cancer). It metastasises early and carries a poor prognosis. A left supraclavicular node (Troisier's/Virchow's node) suggests spread via the thoracic duct — a sinister sign."
    },

    {
        question: "A 45-year-old woman presents with episodic flushing, diarrhoea, and wheezing. Urine 5-HIAA (5-hydroxyindoleacetic acid) is markedly elevated. CT shows a 2.5-cm ileal mass with extensive liver metastases. Histology shows uniform small cells with salt-and-pepper chromatin arranged in trabeculae and glandular nests, with positive chromogranin A staining.\n\nWhy does carcinoid syndrome only develop when liver metastases are present?",
        options: {
            A: "Serotonin from the primary tumour cannot enter the portal circulation",
            B: "The liver is the primary site of carcinoid tumour origin",
            C: "Liver metastases produce more serotonin than the primary tumour",
            D: "The liver normally inactivates serotonin via first-pass metabolism; metastases release serotonin directly into the hepatic veins bypassing this inactivation",
            E: "Liver metastases stimulate the systemic immune response to serotonin",
        },
        correctAnswer: "D",
        explanation: "Carcinoid syndrome — comprising episodic flushing, diarrhoea, bronchospasm, and right-sided cardiac valve disease — is caused by tumour secretion of serotonin (5-HT) and other vasoactive mediators. The liver acts as a first-pass inactivator of serotonin released from gastrointestinal (hindgut) carcinoid tumours via the portal circulation — most serotonin is metabolised to 5-HIAA before reaching the systemic circulation. Therefore, carcinoid syndrome only develops when tumour products can bypass hepatic metabolism — either via liver metastases (which drain directly into the hepatic veins and then systemic circulation) or with primary tumours that drain outside the portal system (e.g. bronchial, ovarian carcinoids). Chromogranin A is a sensitive neuroendocrine marker. Right-sided cardiac disease (tricuspid regurgitation, pulmonary stenosis) occurs because the right heart is exposed to serotonin before it reaches the lungs (which inactivate it)."
    },

    {
        question: "A 50-year-old woman presents with a painless lump in the right breast. Mammogram shows a spiculated mass with microcalcifications. Core biopsy shows malignant ductal cells filling and distending the ducts with central necrosis. No stromal invasion is seen. Immunohistochemistry shows ER-positive, HER2-negative cells.\n\nWhat is the correct classification of this lesion?",
        options: {
            A: "Phyllodes tumour",
            B: "Fibroadenoma",
            C: "Invasive ductal carcinoma of no special type",
            D: "Lobular carcinoma in situ",
            E: "Ductal carcinoma in situ (DCIS)",
        },
        correctAnswer: "E",
        explanation: "Ductal carcinoma in situ (DCIS) is a non-invasive malignancy in which malignant ductal epithelial cells proliferate within the breast ducts but have not breached the basement membrane — hence 'in situ'. High-grade DCIS classically shows comedo-type necrosis — central necrosis within distended ducts, which calcifies and produces the characteristic comedo microcalcifications on mammography. By definition, there is no stromal invasion, and therefore no risk of lymph node spread. DCIS is a precursor to invasive ductal carcinoma but not all cases progress. Treatment includes wide local excision with adjuvant radiotherapy and, for ER-positive disease, endocrine therapy. Lobular carcinoma in situ shows discohesive cells in lobular units (related to E-cadherin loss) and is considered a risk marker rather than a direct precursor. Invasive ductal carcinoma shows stromal invasion."
    }

],

"physiology": [

    {
        question: "Which of the following statements is correct with reference to a healthy 20-year old female?",
        options: {
            A: "Oestrogen acts on intracellular receptors",
            B: "Gonadotrophin releasing hormone is released by the anterior pituitary",
            C: "Luteinising hormone stimulates granulosa cell proliferation",
            D: "Theca cells catalyse the conversion of pre-androgens to oestrogens",
            E: "The follicular phase of the menstrual cycle is associated with high progesterone levels"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "Urea reabsorption is under the control of which hormone?",
        options: {
            A: "Vasopressin",
            B: "Aldosterone",
            C: "Angiotensin II",
            D: "Parathyroid hormone",
            E: "Atrial natriuretic peptide"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "Which of the following organs is able to use ketone bodies as a fuel source?",
        options: {
            A: "Liver",
            B: "Adipose",
            C: "Kidney",
            D: "Brain",
            E: "Pancreas"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A patient with diabetic ketoacidosis has hyperkalaemia. Which hormone drives potassium into cells?",
        options: {
            A: "Glucagon",
            B: "Insulin",
            C: "Cortisol",
            D: "Aldosterone",
            E: "Testosterone"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        // NOTE: The question text for this slide was not visible in the source document.
        // Only the answer options and correct answer are available.
        question: "[Question text missing from source] — Options relate to GFR/NFP changes in a given clinical scenario.",
        options: {
            A: "It will be higher",
            B: "It will be lower",
            C: "It will be the same",
            D: "It will increase initially then fall",
            E: "Cannot be determined without urine analysis"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "A compound which is used to estimate glomerular filtration rate (GFR) must have what properties?",
        options: {
            A: "Filtered at the glomerulus and partially reabsorbed",
            B: "Not filtered at the glomerulus and secreted into the tubule",
            C: "Filtered at the glomerulus and not reabsorbed or secreted",
            D: "Filtered at the glomerulus, secreted into the tubule, and reabsorbed",
            E: "Not filtered at the glomerulus, secreted into the tubule and partially reabsorbed"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "The ST segment of an ECG represents which phase of the cardiac action potential in a ventricular cardiomyocyte?",
        options: {
            A: "Phase 0",
            B: "Phase 1",
            C: "Phase 2",
            D: "Phase 3",
            E: "Phase 4"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "Which of the following best describes the physiology of thyroid function?",
        options: {
            A: "Thyroxine is produced from the combination of two diiodotyrosine molecules",
            B: "Most T3 is produced in the thyroid gland",
            C: "Calcitonin is produced by chief cells",
            D: "T3 results from the iodination of T4",
            E: "T4 has a chronotropic effect on the heart"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "A premature infant born at 30 weeks gestation is in respiratory distress. What is the primary role of pulmonary surfactant in this context?",
        options: {
            A: "Increases alveolar surface tension to aid gas exchange",
            B: "Promotes fluid accumulation in alveoli for better diffusion",
            C: "Reduces alveolar surface tension to prevent collapse",
            D: "Stimulates type I pneumocytes to secrete mucus",
            E: "Inhibits β₂ receptors to slow alveolar expansion"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "Which of the following statements about the menstrual cycle is correct with reference to a healthy 20-year-old woman?",
        options: {
            A: "During the follicular phase, LH levels are higher than FSH levels",
            B: "During the ovulatory phase, LH causes the follicle to release proteolytic enzymes",
            C: "Progesterone levels gradually rise during the follicular phase",
            D: "During the luteal phase, the corpus luteum mainly secretes oestrogen",
            E: "Generation of the corpus luteum is driven by FSH"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "Cholera toxin triggers watery diarrhoea by overactivating which luminal channel?",
        options: {
            A: "CFTR",
            B: "NKCC2",
            C: "NKCC1",
            D: "SGLT1",
            E: "ENaC"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "Which of the following hormones has hyperglycaemic and immune suppressing functions?",
        options: {
            A: "Aldosterone",
            B: "Cortisol",
            C: "Testosterone",
            D: "Oestrogen",
            E: "Adrenaline"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "A drug that selectively inhibits SERCA2 would most directly impair which phase of muscle function?",
        options: {
            A: "Depolarization of the sarcolemma",
            B: "Release of calcium from the sarcoplasmic reticulum",
            C: "Actin-myosin cross-bridge formation",
            D: "Reuptake of calcium and muscle relaxation",
            E: "Binding of calcium to troponin"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which neurotransmitter is released by postganglionic parasympathetic neurons?",
        options: {
            A: "Noradrenaline",
            B: "Acetylcholine",
            C: "Dopamine",
            D: "Serotonin",
            E: "Adrenaline"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "A patient has hypocalcemia due to a genetic defect in the calcium-sensing receptor. What hormonal response is most likely impaired?",
        options: {
            A: "Increased calcitonin secretion",
            B: "Decreased aldosterone release",
            C: "Decreased vitamin D synthesis",
            D: "Secretion of parathyroid hormone",
            E: "Release of growth hormone"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A patient given oral glucose shows a higher insulin response than when given IV glucose. What mechanism explains this?",
        options: {
            A: "Direct liver uptake",
            B: "Cephalic phase reflex",
            C: "Incretin effect",
            D: "Renal glucose absorption",
            E: "GLUT-4 expression"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "An 18 month of child undergoes genetic testing. A loss of function mutation is located in the POMC gene. What phenotype would be expected?",
        options: {
            A: "Brown hair",
            B: "Increased bone density",
            C: "Learning difficulty",
            D: "Elevated thyroid function",
            E: "Obesity"
        },
        correctAnswer: "E",
        explanation: ""
    },
    {
        // NOTE: The question text for this slide was not visible in the source document.
        // Only the answer options and correct answer are available.
        question: "[Question text missing from source] — Options relate to changes in GFR and net filtration pressure (NFP).",
        options: {
            A: "Both GFR and NFP increase",
            B: "GFR increases; NFP decreases",
            C: "GFR and NFP remain unchanged",
            D: "Both GFR and NFP decrease",
            E: "GFR decreases; NFP increases"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which process best explains ketone body formation in untreated type 1 diabetes?",
        options: {
            A: "Increased insulin-stimulated glycolysis",
            B: "Glucagon-induced FFA mobilisation and liver ketogenesis",
            C: "Excess glucose uptake in muscle",
            D: "Direct hepatic conversion of lactic acid",
            E: "Glucose transport via GLUT-4"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "Raised intracranial pressure can result in unsymmetrical pupil responses due to compression of which nerve?",
        options: {
            A: "Oculomotor",
            B: "Abducens",
            C: "Optic",
            D: "Trigeminal",
            E: "Trochlear"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "How do loop diuretics like furosemide reduce medullary osmolarity?",
        options: {
            A: "Block aquaporins in the collecting duct",
            B: "Inhibit NKCC2 in the thick ascending limb",
            C: "Stimulate ADH release",
            D: "Enhance urea reabsorption",
            E: "Block Na⁺/H⁺ exchangers in the PCT"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "A tumour in chromaffin cells is likely to cause which of the following?",
        options: {
            A: "Bradycardia and weight loss",
            B: "Hypertension and heat intolerance",
            C: "Hypoglycaemia and diarrhoea",
            D: "Hyperkalaemia and hypotension",
            E: "Increased ACTH secretion"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "What is the primary method by which carbon dioxide is transported in the blood?",
        options: {
            A: "Dissolved directly in plasma",
            B: "Bound to albumin",
            C: "As carbaminohaemoglobin",
            D: "Converted to bicarbonate in red blood cells",
            E: "Stored in lymphatic fluid"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A patient presents with ptosis, miosis, and anhidrosis on the left side of the face. Which part of the nervous system is most likely affected?",
        options: {
            A: "Parasympathetic fibres to the eye",
            B: "Optic nerve",
            C: "Sympathetic innervation to the head",
            D: "Somatic motor fibres of the oculomotor nerve",
            E: "Edinger-Westphal nucleus"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "A 35 year old man rapidly gains 2.5kg of weight. Which of the following physiological changes would occur as a result?",
        options: {
            A: "Decreased respiratory rate",
            B: "Elevated resting heart rate",
            C: "Decreased skin temperature",
            D: "Increased hunger",
            E: "Decreased circulating leptin levels"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "A 25-week-old baby is diagnosed with Bartter syndrome, a rare genetic condition associated with mutations in the NKCC2 gene.\n\nWhich of the following would you expect to find?",
        options: {
            A: "Hydronephrosis",
            B: "Polyuria",
            C: "Hyperkalaemia",
            D: "Hypertension",
            E: "Metabolic acidosis"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        // NOTE: The question text for this slide was not visible in the source document.
        // Only the answer options and correct answer are available.
        question: "[Question text missing from source] — Options relate to investigation of thyroid function.",
        options: {
            A: "Serum T4 only",
            B: "Serum TRH levels",
            C: "Serum TSH and T4 measured together",
            D: "Thyroglobulin gene expression",
            E: "Radioiodine uptake scan"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "After a meal, insulin stimulates which hepatic pathway?",
        options: {
            A: "Glycogenolysis",
            B: "Gluconeogenesis",
            C: "Glycogenesis",
            D: "Lipolysis",
            E: "Proteolysis"
        },
        correctAnswer: "C",
        explanation: ""
    }

],
"ENT Qs": [

    // ─── PODCAST: FACIAL NERVE ───────────────────────────────────────────────

    {
        question: "What kind of nerve is the facial nerve?",
        options: {
            A: "Sensory",
            B: "Mixed: sensory and motor",
            C: "Motor",
            D: "Autonomic",
            E: "Parasympathetic"
        },
        correctAnswer: "B",
        explanation: ""
    },
    {
        question: "Which of the following will result in a left-sided lower motor neurone lesion?",
        options: {
            A: "Left cerebral infarct",
            B: "Right cerebral infarct",
            C: "Right Ramsay-Hunt syndrome",
            D: "Left Bell's palsy",
            E: "Pseudobulbar palsy"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which nerves are involved in the stapedial reflex?",
        options: {
            A: "CN VII, CN V",
            B: "CN VIII, CN III, CN VI",
            C: "CN VII only",
            D: "CN VII, CN VIII",
            E: "CN VIII only"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which ganglion gives rise to the greater petrosal nerve and where does it lie?",
        options: {
            A: "Geniculate ganglion, mastoid tip",
            B: "Sphenopalatine ganglion, 2nd genu of CN VII",
            C: "Pterygopalatine ganglion, 1st genu of CN VII",
            D: "Geniculate ganglion, 1st genu of CN VII",
            E: "Submandibular ganglion, internal acoustic meatus"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which branch of the facial nerve is involved with taste sensation of the anterior two-thirds of the tongue?",
        options: {
            A: "Greater petrosal nerve",
            B: "Nerve to stapedius",
            C: "Zygomatic nerve",
            D: "Buccal nerve",
            E: "Chorda tympani"
        },
        correctAnswer: "E",
        explanation: ""
    },
    {
        question: "Which of these does NOT give rise to a lower motor neurone palsy of the facial nerve?",
        options: {
            A: "Parotid gland malignancy",
            B: "Cholesteatoma",
            C: "Temporal bone fracture",
            D: "Acute otitis media",
            E: "Cerebrovascular accident"
        },
        correctAnswer: "E",
        explanation: ""
    },

    // ─── PODCAST: OLFACTION & ANOSMIA ────────────────────────────────────────

    {
        question: "The olfactory nerve exits the skull via which of the following skull base foramina?",
        options: {
            A: "Superior orbital fissure",
            B: "Jugular foramen",
            C: "Foramen spinosum",
            D: "Cribriform plate",
            E: "Foramen lacerum"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which of the following best represents the group of cranial nerves that are involved in gustation?",
        options: {
            A: "CN I, CN II, CN III",
            B: "CN I, CN VI, CN VII",
            C: "CN I, CN V, CN VII, CN IX, CN X",
            D: "CN I, CN VII",
            E: "CN VII"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "A 45 y.o. woman describes the scent of rotten meat when she sniffs freshly ground coffee. Which term most accurately describes this phenomenon?",
        options: {
            A: "Anosmia",
            B: "Hyposmia",
            C: "Phantosmia",
            D: "Hyperosmia",
            E: "Parosmia"
        },
        correctAnswer: "E",
        explanation: ""
    },
    {
        question: "A 25 y.o. man presents with hyposmia and symptoms suggestive of rhinitis. What is the best initial therapy for him?",
        options: {
            A: "Oral macrolides for 1 week",
            B: "A long-term decongestant such as xylometazoline",
            C: "A long-term topical steroid such as mometasone furoate",
            D: "Oral prednisolone for 2 weeks",
            E: "Reduction of the inferior turbinates"
        },
        correctAnswer: "C",
        explanation: ""
    },
    {
        question: "A 56 y.o diabetic completely loses his sense of smell after contracting COVID-19. During the recovery period, he smells burning when no one else can. What is he describing?",
        options: {
            A: "Anosmia followed by phantosmia",
            B: "Hyposmia followed by parosmia",
            C: "Phantosmia followed by anosmia",
            D: "Anosmia followed by hyposmia",
            E: "Hyposmia followed by phantosmia"
        },
        correctAnswer: "A",
        explanation: ""
    },

    // ─── PODCAST: OTITIS EXTERNA ─────────────────────────────────────────────

    {
        question: "Which of the following organisms is NOT a common cause of otitis externa?",
        options: {
            A: "Staphylococcus aureus",
            B: "Pseudomonas aeruginosa",
            C: "Candida albicans",
            D: "Streptococcus pneumonia",
            E: "Aspergillus niger"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "Which of the following should be used as a first line therapy for a fungal otitis externa?",
        options: {
            A: "Ciprofloxacin drops",
            B: "Oral penicillin",
            C: "Oral fluconazole",
            D: "Clotrimazole drops",
            E: "Gentamicin drops"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A 40 y.o. woman develops swimmer's ear while swimming in a pool on holiday. She was prescribed a topical aminoglycoside which has not helped, and she continues to complain of a discharge and increasing pain. A swab of her ear canal has since shown heavy growth of Pseudomonas aeruginosa sensitive to quinolones. What is the next best course of action after microsuctioning her ear?",
        options: {
            A: "An oral course of ciprofloxacin",
            B: "Systemic levofloxacin",
            C: "Topical ofloxacin",
            D: "Topical ciprofloxacin and dexamethasone",
            E: "Topical gentamicin and cortisone"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A 64 y.o. diabetic presents with a discharging ear for the last 4 weeks associated with deep otalgia and a weakness of his face. Otoscopy reveals a discharge of the ear and polyps within the ear canal.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Squamous cell carcinoma of the temporal bone",
            B: "Cholesteatoma",
            C: "Parotid malignancy with extension to the external auditory canal",
            D: "Severe uncomplicated otitis externa with early perichondritis of the pinna",
            E: "Necrotising otitis externa secondary to skull base osteomyelitis"
        },
        correctAnswer: "E",
        explanation: ""
    },
    {
        question: "A 64 y.o. diabetic presents with a discharging ear for the last 4 weeks associated with deep otalgia and a weakness of his face. Otoscopy reveals a discharge of the ear and polyps within the ear canal.\n\nWhat is the next best course of action?",
        options: {
            A: "Biopsy the polyp and start both topical and systemic quinolones",
            B: "Consent patient for tympanomastoidectomy and facial nerve decompression",
            C: "Refer to oncology for chemoradiotherapy",
            D: "Start topical gentamicin and cortisone and follow up in 1 week",
            E: "Start oral prednisolone for 1 week to rescue the facial nerve"
        },
        correctAnswer: "A",
        explanation: ""
    },

    // ─── PODCAST: OTITIS MEDIA ───────────────────────────────────────────────

    {
        question: "Which organism is NOT a common cause of acute otitis media?",
        options: {
            A: "Staphylococcus aureus",
            B: "Streptococcus pneumoniae",
            C: "Haemophilus influenzae",
            D: "Moraxella catarrhalis",
            E: "Respiratory syncytial virus"
        },
        correctAnswer: "A",
        explanation: ""
    },
    {
        question: "Which of the following middle ear pathologies best fits the classification chronic active mucosal otitis media?",
        options: {
            A: "A cholesteatoma",
            B: "A retracted tympanic membrane",
            C: "A dry perforated tympanic membrane",
            D: "A discharging perforated tympanic membrane",
            E: "Tympanic membrane scarring (tympanosclerosis)"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "What is the definitive treatment for a cholesteatoma of the middle ear?",
        options: {
            A: "Topical antibiotics",
            B: "Simple repair of the eardrum (tympanoplasty)",
            C: "Insertion of a ventilation tube (grommet)",
            D: "Tympanomastoidectomy",
            E: "Oral penicillin"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A 2 y.o. girl presents to A&E with a high fever and is tugging her right ear. She has been ill for the past 24 hours. Otoscopy shows a bulging, red tympanic membrane. What is the best next course of action?",
        options: {
            A: "Attempt myringotomy (incision of the ear drum) under a local anaesthetic to drain pus from the middle ear",
            B: "Start topical aminoglycosides three times daily for a week and urgent review with ENT",
            C: "Advise on ibuprofen and plenty fluids and review in another 24 hours",
            D: "Start amoxicillin immediately for 1 week",
            E: "Admit for IV penicillin against pneumococcus"
        },
        correctAnswer: "D",
        explanation: ""
    },
    {
        question: "A 5 y.o. boy has been referred to ENT for hearing difficulties at school and at home for the last 3 months. He is otherwise well. On examination, his ear drums are dull and slightly retracted. An audiological assessment reveals that he has a moderate bilateral conductive hearing loss and flat tympanograms.\n\nWhat is the most likely diagnosis?",
        options: {
            A: "Acute otitis media",
            B: "Obliterative otitis externa",
            C: "Congenital ossicular chain fixation",
            D: "Tympanosclerosis",
            E: "Otitis media with effusion (glue ear)"
        },
        correctAnswer: "E",
        explanation: ""
    },
    {
        question: "A 5 y.o. boy has been referred to ENT for hearing difficulties at school and at home for the last 3 months. He is otherwise well. On examination, his ear drums are dull and slightly retracted. An audiological assessment reveals that he has a moderate bilateral conductive hearing loss and flat tympanograms.\n\nWhat is the next best course of action in this child?",
        options: {
            A: "Observation for 3 months and review; try an Otovent device in the interim",
            B: "Grommets",
            C: "Hearing aids",
            D: "Ossiculoplasty",
            E: "12 weeks of low-dose amoxicillin"
        },
        correctAnswer: "A",
        explanation: ""
    }

]

}
};
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
        
        
    }

};
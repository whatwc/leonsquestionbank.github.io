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
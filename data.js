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
            correctAnswer: "A"
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
            correctAnswer: "C"
        }
    ]
        
    },

    respiratory: {
        "Anatomy": [
            {
                question: "A patient had a thyroidectomy last week and now has a hoarse voice. Which one of the following structures is likely to be injured?",
                options: {
                    A: "Basal ganglia",
                    B: "Phrenic nerve",
                    C: "Recurrent laryngeal nerve",
                    D: "Wernicke’s area",
                    E: "Glossopharyngeal nerve"
                },
                correctAnswer: "C"
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
                correctAnswer: "B"
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
                correctAnswer: "D"
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
                correctAnswer: "E"
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
                correctAnswer: "A"
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
                correctAnswer: "C"
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
                correctAnswer: "C"
            }
        ],
        "Physiology": [
            {
                question: "Which peripheral chemoreceptors respond primarily to decreases in arterial PaO2?",
                options: {
                    A: "Medullary chemoreceptors",
                    B: "Carotid bodies and aortic arch",
                    C: "Stretch receptors in the bronchi",
                    D: "Juxtacapillary (J) receptors",
                    E: "Central chemosensitive area"
                },
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "C"
            }
        ],
        "Obstructive lung disease": [
            {
                question: "A 24-year-old woman presents with episodic bouts of breathlessness and wheeze. Which pathophysiological feature is the hallmark of her likely condition?",
                options: {
                    A: "Irreversible alveolar wall destruction",
                    B: "Reversible airway obstruction",
                    C: "Permanent dilation of the bronchi",
                    D: "Caseating granulomatous inflammation",
                    E: "Fibroblastic foci formation"
                },
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "A"
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
                correctAnswer: "C"
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
                correctAnswer: "B"
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
                correctAnswer: "B"
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
                correctAnswer: "C"
            }
        ],
        "Restrictive lung disease": [
            {
                question: "A 70-year-old man presents with a 6-month history of dry cough and exertional breathlessness. What pattern is expected on spirometry if he has Interstitial Lung Disease?",
                options: {
                    A: "Reduced FVC and FEV1/FVC ratio < 0.7",
                    B: "Reduced FVC and FEV1/FVC ratio > 0.8",
                    C: "Normal FVC and reduced FEV1",
                    D: "Increased FVC and FEV1/FVC ratio < 0.5",
                    E: "Normal FVC and normal FEV1/FVC ratio with isolated reduced TLCO"
                },
                correctAnswer: "B"
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
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "D"
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
                correctAnswer: "B"
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
                correctAnswer: "B"
            }
        ],
        "Infectious lung disease": [
            {
                question: "What is the most common bacterial pathogen causing Community-Acquired Pneumonia (CAP), accounting for up to 40% of cases?",
                options: {
                    A: "Staphylococcus aureus",
                    B: "Klebsiella pneumoniae",
                    C: "Streptococcus pneumoniae",
                    D: "Pseudomonas aeruginosa",
                    E: "Haemophilus influenzae"
                },
                correctAnswer: "C"
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
                correctAnswer: "A"
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
                correctAnswer: "B"
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
                correctAnswer: "D"
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
                correctAnswer: "C"
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
                correctAnswer: "D"
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
                correctAnswer: "C"
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
                correctAnswer: "C"
            }
        ],
        "Pharmacology": [
            {
                question: "By which mechanism does salbutamol cause rapid bronchodilation during an acute asthma attack?",
                options: {
                    A: "Activation of Muscarinic (M3) receptors",
                    B: "Activation of Beta-2 adrenergic receptors",
                    C: "Inhibition of 5-lipoxygenase",
                    D: "Blockade of histamine H1 receptors",
                    E: "Inhibition of phosphodiesterase"
                },
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "D"
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
                correctAnswer: "C"
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
                correctAnswer: "C"
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
                correctAnswer: "C"
            }
        ],
        "Pathology": [
            {
                question: "Microscopically, what characterizes the lung tissue in a patient with severe emphysema?",
                options: {
                    A: "Thickened basement membrane and eosinophil infiltration",
                    B: "Enlarged air spaces with incomplete, 'floating', club-shaped alveolar septa",
                    C: "Dense proliferations of fibroblasts and myofibroblasts",
                    D: "Caseating granulomas surrounded by lymphocytes",
                    E: "Alveoli filled with a neutrophil-rich exudate"
                },
                correctAnswer: "B"
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
                correctAnswer: "C"
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
                correctAnswer: "B"
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
                correctAnswer: "B"
            }
        ],
        "Clinical presentations": [
            {
                question: "A 21-year-old smoker presents with acute right-sided pleuritic chest pain. The chest X-ray demonstrates a large right-sided pneumothorax. Which of the following are the most likely clinical examination findings?",
                options: {
                    A: "Reduced expansion and dullness to percussion on the right side",
                    B: "Reduced expansion and hyper-resonance to percussion on the left side",
                    C: "Bronchial breathing at the right base",
                    D: "Reduced expansion and hyper-resonance to percussion on the right side",
                    E: "Prolonged wheeze over the right lung"
                },
                correctAnswer: "D"
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
                correctAnswer: "B"
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
                correctAnswer: "A"
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
                correctAnswer: "B"
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
                correctAnswer: "D"
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
        ]
};
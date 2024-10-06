document.addEventListener("DOMContentLoaded", function() {
    const treeData = {
        name: "AI Agent Capabilities",
        description: "An overview of the development and progression of AI agent capabilities over time.",
        dangers: [
            "Risk of AI systems being misaligned with human values and intentions.",
            "Potential for unintended consequences due to autonomous decision-making.",
            "Challenges in ensuring transparency and interpretability of AI models.",
            "Possibility of rapid capability gains leading to loss of human control.",
            "Security vulnerabilities that could be exploited by malicious actors.",
            "Environmental concerns from the resource demands of large AI models."
        ],
        facts: [
            "Advancements in AI have accelerated rapidly since 2018.",
            "Large Language Models (LLMs) have transformed natural language processing tasks."
        ],
        children: [
            {
                name: "First Generation LLM",
                year: "2018",
                description: "The emergence of early large-scale language models that marked a significant leap in NLP.",
                dangers: [
                    "Potential for generating plausible but incorrect or harmful content without understanding.",
                    "Amplification of existing biases present in training data leading to unfair outcomes."
                ],
                facts: [
                    "Introduction of GPT-2 by OpenAI showcased advanced text generation.",
                    "Highlighted concerns about uncontrolled dissemination of powerful AI models."
                ],
                capabilities: [
                    "Basic Text Generation: Generated coherent sentences and paragraphs mimicking human writing styles.",
                    "Pattern Recognition in Language: Learned statistical patterns from large corpora of text.",
                    "Zero-Shot Generalization: Performed tasks without explicit task-specific training.",
                    "Short-Term Context Awareness: Maintained coherence over short passages."
                ],
                subcategories: [
                    {
                        name: "Generative Language Modeling",
                        description: "Models capable of generating human-like text based on learned patterns from data.",
                        dangers: [
                            "Risk of being used to create disinformation at scale, affecting public discourse.",
                            "Challenges in distinguishing AI-generated content from human-created text."
                        ],
                        facts: [
                            "GPT-2 was released in 2019 with 1.5 billion parameters.",
                            "Initially withheld due to concerns over misuse potential."
                        ],
                        details: "Introduction of GPT-2 in 2019 by OpenAI, demonstrating potential for generating coherent text.",
                        capabilities: [
                            "Text Generation: Produced human-like text enabling more interactive applications.",
                            "Language Modeling: Predicted next words in a sequence based on training data."
                        ],
                        concerns: [
                            "Dual-Use Potential: Raised alarms about potential misuse for generating disinformation or malicious content.",
                            "Amplification of Misinformation: Ability to generate convincing text could be exploited to spread false information."
                        ]
                    },
                    {
                        name: "Zero-Shot Learning",
                        description: "Ability of a model to perform tasks it wasn't explicitly trained on using broad training data.",
                        dangers: [
                            "Unpredictable behavior when handling tasks without explicit guidance.",
                            "Difficulty in controlling outputs for safety without task-specific training."
                        ],
                        facts: [
                            "Enabled models to generalize across different tasks.",
                            "Used in applications like AI Dungeon for interactive storytelling."
                        ],
                        details: "Demonstrated the ability to perform tasks it wasn't explicitly trained on, using its broad training data.",
                        capabilities: [
                            "Task Generalization: Tackled diverse tasks such as translation and summarization without specific training.",
                            "Contextual Understanding: Leveraged large-scale training data to infer task requirements from prompts."
                        ],
                        limitations: "Struggled with specific tasks due to limited context understanding.",
                        applications: "AI Dungeon: An interactive text-based adventure game utilizing GPT-2."
                    },
                    {
                        name: "Short-Term Context Retention",
                        description: "Capability to maintain context within short text passages.",
                        dangers: [
                            "Limited understanding leading to incoherent or contextually inappropriate responses.",
                            "Vulnerability to prompt manipulation resulting in undesired outputs."
                        ],
                        facts: [
                            "Early models had limited context windows.",
                            "Improvements led to better conversational AI."
                        ],
                        capabilities: [
                            "Coherence Over Sentences: Maintained logical flow in immediate responses.",
                            "Response Consistency: Provided relevant answers based on the recent input."
                        ],
                        limitations: [
                            "Struggled with context retention over long passages."
                        ]
                    }
                ]
            },
            {
                name: "Second Generation LLM",
                year: "2020",
                description: "Advanced language models with significantly increased parameters enhancing capabilities.",
                dangers: [
                    "Enhanced ability to generate highly convincing but false or manipulative content.",
                    "Increased difficulty in ensuring alignment with human values at greater model scales.",
                    "Emergent behaviors that are not well understood, posing control challenges.",
                    "Environmental impact due to substantial computational resources required for training."
                ],
                facts: [
                    "GPT-3 was introduced with 175 billion parameters.",
                    "Marked a substantial improvement in language understanding."
                ],
                capabilities: [
                    "Advanced Language Comprehension: Understood and generated text across a wide range of topics.",
                    "Few-Shot and Zero-Shot Learning: Demonstrated strong performance with minimal task-specific examples.",
                    "Longer Context Handling: Maintained coherence over extended text inputs.",
                    "Commonsense Reasoning: Showed rudimentary reasoning abilities in certain contexts."
                ],
                subcategories: [
                    {
                        name: "Large-Scale Language Modeling",
                        description: "Utilizing massive datasets and parameters to improve language understanding.",
                        dangers: [
                            "Scaling laws leading to unpredictable capabilities and behaviors.",
                            "Greater risk of overfitting societal biases present in large datasets."
                        ],
                        facts: [
                            "GPT-3's scale enabled unprecedented performance on NLP tasks.",
                            "Became the foundation for many AI applications."
                        ],
                        details: "Introduction of GPT-3 in June 2020 with 175 billion parameters.",
                        capabilities: [
                            "High-Fidelity Text Generation: Produced highly coherent and contextually appropriate text.",
                            "Diverse Topic Handling: Covered a vast array of subjects with nuanced understanding."
                        ]
                    },
                    {
                        name: "Few-Shot Learning",
                        description: "Models learning new tasks from minimal examples provided in prompts.",
                        dangers: [
                            "Possibility of misuse in tailoring the model to perform harmful tasks with minimal input.",
                            "Challenges in preventing the model from learning undesirable behaviors."
                        ],
                        facts: [
                            "Few-shot learning reduced the need for large task-specific datasets.",
                            "Enabled rapid adaptation to new tasks."
                        ],
                        capabilities: [
                            "Prompt-Based Learning: Adapted to new tasks through example prompts without weight updates.",
                            "Versatile Task Execution: Performed translation, question-answering, and more with few examples."
                        ],
                        applications: "OpenAI's API: Allowed developers to integrate GPT-3 into applications."
                    },
                    {
                        name: "Enhanced Context Understanding",
                        description: "Improved ability to maintain context over longer passages of text.",
                        dangers: [
                            "Long-range dependencies may lead to the propagation of errors or harmful content.",
                            "Difficulty in tracking and interpreting model reasoning over extended contexts."
                        ],
                        facts: [
                            "Models could handle longer inputs due to increased context windows.",
                            "Still faced limitations with complex logical reasoning."
                        ],
                        capabilities: [
                            "Extended Coherence: Maintained thematic and contextual consistency over longer text.",
                            "Contextual Referencing: Recalled and utilized earlier conversation points."
                        ],
                        details: "Better at maintaining context over longer passages compared to GPT-2.",
                        limitations: "Still struggled with complex logical reasoning and could produce incorrect answers confidently."
                    }
                ]
            },
            {
                name: "Versatility",
                year: "2021",
                description: "AI models became capable of performing a diverse range of language tasks.",
                dangers: [
                    "Complexity in monitoring and controlling a wide array of capabilities.",
                    "Potential for unintended uses that were not anticipated by developers."
                ],
                facts: [
                    "Models like GPT-3 were used for translation, summarization, and question-answering.",
                    "AI-powered tools became prevalent in various industries."
                ],
                capabilities: [
                    "Multitask Proficiency: Handled tasks like translation, summarization, code generation, and more.",
                    "Language Understanding Across Domains: Adapted to different styles and terminologies.",
                    "Interactive Applications: Enabled the creation of chatbots, virtual assistants, and content generation tools."
                ]
            },
            {
                name: "Advanced Conversational Capabilities",
                year: "2022",
                description: "AI models improved significantly in maintaining conversations and understanding instructions.",
                dangers: [
                    "Increased risk of users forming emotional attachments to AI without understanding its limitations.",
                    "Enhanced potential for persuasive AI to influence human decisions negatively."
                ],
                facts: [
                    "ChatGPT was launched, showcasing advanced conversational abilities.",
                    "Used widely for customer service and educational purposes."
                ],
                capabilities: [
                    "Contextual Dialogue Management: Maintained context over multiple exchanges.",
                    "Instruction Comprehension: Understood and executed detailed user instructions.",
                    "Natural Language Interaction: Engaged in conversations that felt more fluid and human-like."
                ],
                subcategories: [
                    {
                        name: "Enhanced Conversational Context",
                        description: "Better maintenance of conversation flow over multiple exchanges.",
                        dangers: [
                            "Possibility of AI providing overconfident yet incorrect information over prolonged interactions.",
                            "Challenges in preventing the AI from exhibiting manipulative or biased communication."
                        ],
                        capabilities: [
                            "Multi-Turn Dialogue: Sustained conversations over many turns while retaining context.",
                            "Discourse Coherence: Responded appropriately to previous messages, including corrections and clarifications."
                        ],
                        applications: "Used by students for learning assistance."
                    },
                    {
                        name: "Instruction Following",
                        description: "Improved comprehension and execution of user instructions.",
                        dangers: [
                            "Risk of executing harmful instructions if not properly constrained.",
                            "Difficulty in filtering and moderating vast ranges of possible user inputs."
                        ],
                        capabilities: [
                            "Task Execution: Performed tasks as specified by the user's instructions.",
                            "Clarification Seeking: Asked for additional information when instructions were ambiguous."
                        ]
                    },
                    {
                        name: "Multi-Turn Reasoning",
                        description: "Handling complex queries requiring reasoning over several conversational turns.",
                        dangers: [
                            "Potential for reasoning errors leading to incorrect conclusions.",
                            "Increased difficulty in auditing the AI's reasoning processes."
                        ],
                        capabilities: [
                            "Logical Inference: Drew conclusions based on information provided over multiple turns.",
                            "Problem-Solving: Assisted users with complex tasks requiring step-by-step reasoning."
                        ]
                    }
                ]
            },
            {
                name: "Multimodal Capabilities",
                year: "2022",
                description: "AI models extended beyond text to process and generate multiple forms of data.",
                dangers: [
                    "Creation of realistic synthetic media that could facilitate deepfakes.",
                    "Challenges in detecting AI-generated content, impacting trust and security."
                ],
                facts: [
                    "Models like DALL-E 2 could generate images from text descriptions.",
                    "Advancements in audio processing improved speech recognition."
                ],
                capabilities: [
                    "Cross-Modal Understanding: Interpreted and generated data across different modalities (text, image, audio).",
                    "Image and Audio Generation: Created synthetic images and audio based on textual prompts.",
                    "Multimedia Content Creation: Enabled new forms of artistic and design applications."
                ],
                subcategories: [
                    {
                        name: "Image Generation",
                        description: "AI models generating high-quality images from textual input.",
                        dangers: [
                            "Potential misuse in generating misleading or harmful visual content.",
                            "Ethical concerns over the use of AI in creative industries."
                        ],
                        examples: ["DALL-E 2", "Midjourney", "Stable Diffusion"],
                        details: "AI models capable of generating high-quality images from text descriptions.",
                        capabilities: [
                            "Text-to-Image Synthesis: Converted textual descriptions into corresponding images.",
                            "Artistic Style Transfer: Applied styles from one image to another.",
                            "Image Manipulation: Edited images based on textual instructions."
                        ]
                    },
                    {
                        name: "Visual Understanding",
                        description: "Enhanced ability to interpret and analyze visual data.",
                        dangers: [
                            "Privacy risks due to surveillance capabilities in recognizing individuals.",
                            "Biases in visual data leading to discriminatory outcomes."
                        ],
                        capabilities: [
                            "Image Recognition: Identified objects, scenes, and activities within images.",
                            "Object Detection: Located and classified multiple objects in complex scenes.",
                            "Visual Question Answering: Answered questions about image content."
                        ]
                    },
                    {
                        name: "Audio Processing",
                        description: "Advanced processing of audio data including speech and music.",
                        dangers: [
                            "Misuse in voice cloning and impersonation.",
                            "Unauthorized replication of creative works."
                        ],
                        capabilities: [
                            "Speech Recognition: Converted spoken language into text.",
                            "Speech Synthesis: Generated human-like speech from text.",
                            "Music Generation: Composed original musical pieces in various styles."
                        ]
                    }
                ]
            },
            {
                name: "Autonomous Agent Capabilities",
                year: "2023",
                description: "AI agents capable of performing tasks autonomously with minimal human intervention.",
                dangers: [
                    "Risk of AI agents acting in ways that are misaligned with human intentions.",
                    "Difficulty in predicting and controlling complex agent behaviors."
                ],
                facts: [
                    "Development of agents that can plan and execute complex tasks.",
                    "Advancements in adaptability and learning from interactions."
                ],
                capabilities: [
                    "Autonomous Task Execution: Performed tasks without continuous human oversight.",
                    "Adaptive Learning: Adjusted strategies based on environmental feedback.",
                    "Decision-Making: Made choices to achieve objectives under uncertainty."
                ],
                subcategories: [
                    {
                        name: "Task Planning and Execution",
                        description: "Breaking down complex tasks into manageable steps and executing them.",
                        dangers: [
                            "Agents may develop sub-goals that conflict with ethical guidelines.",
                            "Challenges in ensuring compliance with human values during autonomous operations."
                        ],
                        capabilities: [
                            "Strategic Planning: Devised multi-step plans to accomplish complex goals.",
                            "Resource Management: Allocated resources efficiently to optimize outcomes.",
                            "Real-Time Adjustment: Modified plans in response to changing conditions."
                        ]
                    },
                    {
                        name: "Self-Improvement",
                        description: "Ability to learn from experiences and improve performance autonomously.",
                        dangers: [
                            "Unsupervised self-modification could lead to unintended capabilities.",
                            "Risk of recursive self-improvement surpassing human control mechanisms."
                        ],
                        capabilities: [
                            "Experience-Based Learning: Enhanced performance through accumulated experiences.",
                            "Algorithmic Optimization: Refined internal processes for greater efficiency.",
                            "Anomaly Detection: Identified and corrected errors in operations autonomously."
                        ],
                        details: "Ability to learn from interactions and improve performance over time."
                    },
                    {
                        name: "Multi-Agent Collaboration",
                        description: "Coordination between multiple AI agents to achieve common goals.",
                        dangers: [
                            "Emergence of collective behaviors that are unpredictable or unsafe.",
                            "Complexity of multi-agent interactions leading to security vulnerabilities."
                        ],
                        capabilities: [
                            "Communication Protocols: Exchanged information with other agents effectively.",
                            "Cooperative Planning: Coordinated actions to optimize group performance.",
                            "Task Allocation: Distributed tasks among agents based on capabilities."
                        ]
                    }
                ]
            },
            {
                name: "Advanced Tool-Using Capabilities",
                year: "2023",
                description: "AI models integrating with tools and systems to extend their functionality.",
                dangers: [
                    "Potential for AI to manipulate or exploit integrated systems.",
                    "Security risks associated with granting AI access to external tools and data.",
                    "Difficulty in monitoring AI actions across diverse platforms."
                ],
                facts: [
                    "Introduction of plugins and frameworks like OpenAI Plugins and LangChain.",
                    "Enhanced the ability of AI to interact with external data and services."
                ],
                capabilities: [
                    "Tool Integration: Interacted with external software and services via APIs.",
                    "Dynamic Data Access: Retrieved and processed real-time data from various sources.",
                    "Automated Code Execution: Generated and executed code to perform tasks.",
                    "System Control: Managed and configured software systems as needed."
                ],
                subcategories: [
                    {
                        name: "Advanced Tool Use",
                        description: "LLM agents equipped with tool integration capabilities.",
                        dangers: [
                            "AI could perform unintended operations affecting critical systems.",
                            "Challenges in ensuring appropriate use of tools with AI autonomy."
                        ],
                        capabilities: [
                            "Plugin Utilization: Leveraged plugins to extend functionalities.",
                            "API Interactions: Communicated with web services to gather information.",
                            "Automated Workflows: Orchestrated sequences of tool actions to achieve objectives."
                        ],
                        details: "LLM Agents with Tool Integration."
                    },
                    {
                        name: "Dynamic Adaptation",
                        description: "Adjusting to new tasks and environments efficiently.",
                        dangers: [
                            "Adaptation may lead to behaviors that deviate from intended guidelines.",
                            "Complexity in predicting AI responses in unfamiliar contexts."
                        ],
                        capabilities: [
                            "Environmental Sensing: Monitored context to adjust behaviors.",
                            "Flexible Strategy Selection: Switched between methods based on effectiveness.",
                            "Minimal Human Intervention: Operated independently with little oversight."
                        ],
                        limitations: []
                    },
                    {
                        name: "Scalability",
                        description: "Handling large-scale operations and processing vast amounts of data.",
                        dangers: [
                            "Resource demands may exacerbate environmental and economic costs.",
                            "Scaling may amplify any existing misalignment or safety issues."
                        ],
                        capabilities: [
                            "High-Throughput Processing: Managed large volumes of data efficiently.",
                            "Distributed Computing: Leveraged multiple systems to enhance performance.",
                            "Load Balancing: Optimized resource usage across tasks and systems."
                        ]
                    }
                ]
            },
            {
                name: "Future Capabilities",
                year: "Beyond 2023",
                description: "Speculative advancements in AI agent capabilities that could emerge in the future.",
                dangers: [
                    "Existential risks if superintelligent AI systems are not aligned with human values.",
                    "Significant ethical and societal challenges arising from transformative technologies.",
                    "Potential for AI systems to develop or discover novel strategies that humans cannot anticipate.",
                    "Security concerns with integrating advanced technologies that could be exploited."
                ],
                facts: [
                    "Research is ongoing in areas like quantum computing and brain-computer interfaces.",
                    "Collaboration across disciplines is critical for responsible AI development."
                ],
                capabilities: [
                    "Superhuman Problem-Solving: Solving complex problems beyond human capability.",
                    "Advanced Creativity: Generating novel ideas, designs, and innovations.",
                    "Unified Multimodal Understanding: Seamlessly integrating data from all sensory modalities."
                ],
                subcategories: [
                    {
                        name: "Quantum-Enhanced Capabilities",
                        description: "Utilizing quantum computing to exponentially increase AI processing power.",
                        dangers: [
                            "Quantum systems may lead to rapid AI capability gains beyond current control methods.",
                            "Breaking encryption could undermine global security infrastructures."
                        ],
                        capabilities: [
                            "Quantum Computing Utilization: Leveraged quantum processors for complex computations.",
                            "Accelerated Machine Learning: Enhanced training speeds and model performances.",
                            "Complex System Simulation: Modeled intricate systems at unprecedented scales."
                        ],
                        details: "Potential to revolutionize AI capabilities with quantum computing."
                    },
                    {
                        name: "Collaborative Multi-Agent Capabilities",
                        description: "Advanced coordination among AI agents for complex problem-solving.",
                        dangers: [
                            "Unintended emergent behaviors from complex agent interactions.",
                            "Difficulty in ensuring alignment across multiple autonomous systems."
                        ],
                        capabilities: [
                            "Global Coordination: Collaborated across networks for large-scale tasks.",
                            "Collective Intelligence: Shared knowledge bases and learning experiences.",
                            "Self-Organizing Systems: Formed structures without centralized control."
                        ],
                        applications: [
                            "Disaster Response.",
                            "Global Research Projects."
                        ]
                    },
                    {
                        name: "Advanced Sensory Processing",
                        description: "AI systems interpreting and processing complex sensory data.",
                        dangers: [
                            "Enhanced surveillance capabilities infringing on privacy rights.",
                            "Misapplication of sensory data leading to harmful decisions."
                        ],
                        capabilities: [
                            "Multi-Sensory Integration: Combined data from touch, smell, taste, sight, and hearing.",
                            "Sensory Augmentation: Extended beyond human sensory limitations.",
                            "Real-Time Environmental Modeling: Created detailed models of surroundings."
                        ],
                        subcategories: [
                            {
                                name: "Tactile Sensation Interpretation",
                                description: "Processing touch and physical sensation data.",
                                dangers: [
                                    "Robotics operations causing unintended harm due to misinterpreted data.",
                                    "Challenges in ensuring safe physical interactions with humans."
                                ],
                                capabilities: [
                                    "Haptic Feedback: Provided touch-based responses.",
                                    "Material Recognition: Identified substances through tactile data.",
                                    "Pressure Sensitivity: Adjusted force in interactions."
                                ],
                                applications: [
                                    "Prosthetics.",
                                    "Robotics."
                                ]
                            },
                            {
                                name: "Olfactory Data Analysis",
                                description: "Analyzing scent and chemical composition data.",
                                dangers: [
                                    "Dependence on AI for critical detection leading to over-reliance.",
                                    "False positives or negatives in hazardous environments."
                                ],
                                capabilities: [
                                    "Chemical Sensing: Detected and analyzed airborne compounds.",
                                    "Pattern Recognition: Identified complex scent profiles.",
                                    "Environmental Monitoring: Detected pollutants or hazardous gases."
                                ],
                                applications: [
                                    "Fragrance Industry.",
                                    "Medical Diagnostics."
                                ]
                            },
                            {
                                name: "Gustatory Information Processing",
                                description: "Interpreting taste data and flavor profiles.",
                                dangers: [
                                    "Errors in taste analysis affecting food safety.",
                                    "Potential health risks from misclassification of substances."
                                ],
                                capabilities: [
                                    "Flavor Profiling: Analyzed taste components chemically.",
                                    "Quality Control: Assessed food and beverage safety.",
                                    "Novel Recipe Development: Created new flavor combinations."
                                ],
                                applications: [
                                    "Food Industry.",
                                    "Beverage Industry."
                                ]
                            }
                        ]
                    },
                    {
                        name: "Brain-Computer Interfaces",
                        description: "Direct communication pathways between neural systems and external devices.",
                        dangers: [
                            "Risks to mental privacy and autonomy due to direct neural access.",
                            "Possibility of manipulation or coercion through neural interfaces."
                        ],
                        capabilities: [
                            "Neural Signal Interpretation: Decoded brain activity patterns.",
                            "Thought-Based Control: Allowed users to interact with devices using neural signals.",
                            "Cognitive Enhancement: Potential to augment human cognitive abilities."
                        ],
                        applications: [
                            "Medical Treatment for neurological conditions.",
                            "Enhanced AI Interaction through thought commands."
                        ]
                    },
                    {
                        name: "Emotion and Intent Recognition",
                        description: "AI understanding and interpreting human emotions and intentions.",
                        dangers: [
                            "Invasive monitoring leading to loss of personal privacy.",
                            "Exploitation of emotional data for manipulation or coercion."
                        ],
                        capabilities: [
                            "Affective Computing: Detected and responded to emotional states.",
                            "Intent Prediction: Anticipated user needs and actions.",
                            "Empathetic Interactions: Adjusted responses based on emotional cues."
                        ],
                        applications: [
                            "Customer Service with empathetic responses.",
                            "Automotive Safety through driver monitoring."
                        ]
                    },
                    {
                        name: "Advanced Robotic Integration",
                        description: "Seamless integration of AI into robotic systems for enhanced physical interaction.",
                        dangers: [
                            "Physical risks due to unpredictable robot actions.",
                            "Mass displacement of jobs leading to socioeconomic challenges."
                        ],
                        capabilities: [
                            "Precision Manipulation: Performed delicate tasks with high accuracy.",
                            "Autonomous Navigation: Moved safely in dynamic environments.",
                            "Human-Robot Collaboration: Worked alongside humans efficiently."
                        ],
                        applications: [
                            "Warehouse Automation improving efficiency.",
                            "Surgical Robotics enhancing precision."
                        ]
                    }
                ]
            }
        ]
    };
    

    function createTimeline(data) {
        const timeline = document.getElementById("timeline");
        timeline.innerHTML = '';
        data.forEach((item, index) => {
            const timelineItem = document.createElement("div");
            timelineItem.className = "timeline-item";
            
            const yearDot = document.createElement("div");
            yearDot.className = "year-dot";
            yearDot.textContent = item.year;
            
            const yearLabel = document.createElement("div");
            yearLabel.className = "year-label";
            yearLabel.textContent = item.year;

            const nameLabel = document.createElement("div");
            nameLabel.className = "name-label";
            nameLabel.textContent = item.name;

            const subcategoriesContainer = document.createElement("div");
            subcategoriesContainer.className = "subcategories-container";
            subcategoriesContainer.style.display = "none";

            if (item.subcategories && item.subcategories.length > 0) {
                const subcategoryLine = document.createElement("div");
                subcategoryLine.className = "subcategory-line";
                subcategoriesContainer.appendChild(subcategoryLine);

                item.subcategories.forEach(sub => {
                    const subCategory = document.createElement("div");
                    subCategory.className = "subcategory";
                    subCategory.textContent = sub.name;
                    subCategory.onclick = (e) => {
                        e.stopPropagation();
                        document.querySelectorAll('.subcategory').forEach(el => el.classList.remove('active'));
                        subCategory.classList.add('active');
                        displayDetails(sub, item, e.currentTarget);
                    };
                    subcategoriesContainer.appendChild(subCategory);
                });
            }

            timelineItem.appendChild(yearDot);
            timelineItem.appendChild(yearLabel);
            timelineItem.appendChild(nameLabel);
            timelineItem.appendChild(subcategoriesContainer);
            
            timelineItem.onclick = (event) => {
                document.querySelectorAll('.timeline-item').forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.subcategories-container').style.display = "none";
                });
                timelineItem.classList.add('active');
                subcategoriesContainer.style.display = "flex";
                displayCategoryInfo(item, event.currentTarget);
            };

            timeline.appendChild(timelineItem);
        });
    }

    function displayCategoryInfo(item, clickedItem) {
        const detailsPanel = document.getElementById("details-panel");
        const detailsContent = document.getElementById("details-content");
        
        if (!detailsPanel || !detailsContent) {
            console.error("Details panel or content not found in the DOM");
            return;
        }

        detailsContent.innerHTML = `
            <h2>${item.name} (${item.year})</h2>
            ${item.description ? `<p>${item.description}</p>` : '<p class="no-description">No description available.</p>'}
        `;
        
        if (item.dangers && item.dangers.length > 0) {
            const dangersSection = document.createElement('div');
            dangersSection.className = 'dangers-section';
            dangersSection.innerHTML = `
                <h3>Dangers</h3>
                <ul>
                    ${item.dangers.map(danger => `<li>${danger}</li>`).join('')}
                </ul>
            `;
            detailsContent.appendChild(dangersSection);
        }
        
        if (item.challenges && item.challenges.length > 0) {
            const challengesSection = document.createElement('div');
            challengesSection.className = 'challenges-section';
            challengesSection.innerHTML = `
                <h3>Challenges</h3>
                <ul>
                    ${item.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
            `;
            detailsContent.appendChild(challengesSection);
        }
        
        positionDetailsPanel(detailsPanel, clickedItem);
        detailsPanel.style.display = "block";
    }

    function displayDetails(subcategory, category, clickedItem) {
        const detailsPanel = document.getElementById("details-panel");
        const detailsContent = document.getElementById("details-content");
        
        if (!detailsPanel || !detailsContent) {
            console.error("Details panel or content not found in the DOM");
            return;
        }

        detailsContent.innerHTML = `
            <h2>${category.name} (${category.year})</h2>
            <h3>${subcategory.name}</h3>
            ${subcategory.description ? `<p>${subcategory.description}</p>` : '<p class="no-description">No description available.</p>'}
        `;
        
        if (subcategory.dangers && subcategory.dangers.length > 0) {
            const dangersSection = document.createElement('div');
            dangersSection.className = 'dangers-section';
            dangersSection.innerHTML = `
                <h4>Dangers</h4>
                <ul>
                    ${subcategory.dangers.map(danger => `<li>${danger}</li>`).join('')}
                </ul>
            `;
            detailsContent.appendChild(dangersSection);
        }

        if (subcategory.capabilities) {
            const capabilitiesSection = document.createElement('div');
            capabilitiesSection.className = 'capabilities-section';
            capabilitiesSection.innerHTML = `
                <h4>Capabilities</h4>
                <ul>
                    ${subcategory.capabilities.map(cap => `<li>${cap}</li>`).join('')}
                </ul>
            `;
            detailsContent.appendChild(capabilitiesSection);
        }
        
        positionDetailsPanel(detailsPanel, clickedItem);
        detailsPanel.style.display = "block";
    }

    function positionDetailsPanel(detailsPanel, clickedItem) {
        const rect = clickedItem.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Position horizontally
        if (rect.right + 320 < viewportWidth) { // 320px is the panel width + some margin
            detailsPanel.style.left = `${rect.right + 10}px`;
            detailsPanel.style.right = 'auto';
        } else {
            detailsPanel.style.right = `${viewportWidth - rect.left + 10}px`;
            detailsPanel.style.left = 'auto';
        }
        
        // Position vertically
        const panelHeight = Math.min(detailsPanel.scrollHeight, viewportHeight * 0.8); // Limit to 80% of viewport height
        if (rect.top + panelHeight > viewportHeight) {
            detailsPanel.style.bottom = '10px';
            detailsPanel.style.top = 'auto';
        } else {
            detailsPanel.style.top = `${rect.top}px`;
            detailsPanel.style.bottom = 'auto';
        }
        
        detailsPanel.style.maxHeight = `${panelHeight}px`;

        // Ensure the close button is always visible
        const closeButton = detailsPanel.querySelector('[data-action="close-panel"]');
        if (closeButton) {
            closeButton.style.position = 'sticky';
            closeButton.style.top = '0';
            closeButton.style.right = '0';
            closeButton.style.zIndex = '1001';
        }
    }

    // Call this function when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        const detailsPanel = document.getElementById('details-panel');
        const closeButton = document.getElementById('close-details');

        function closePanel() {
            if (detailsPanel) {
                detailsPanel.style.display = 'none';
                console.log('Panel closed');
            }
        }

        // Method 1: Direct event listener
        if (closeButton) {
            closeButton.addEventListener('click', function(event) {
                event.stopPropagation();
                closePanel();
            });
        }

        // Method 2: Event delegation
        document.body.addEventListener('click', function(event) {
            if (event.target.id === 'close-details' || event.target.classList.contains('close-button')) {
                event.stopPropagation();
                closePanel();
            }
        });

        // Method 3: Inline onclick attribute (add this to the button in HTML)
        // <button id="close-details" class="close-button" aria-label="Close details" onclick="this.parentNode.style.display='none';">×</button>

        // Prevent clicks inside the panel from closing it
        if (detailsPanel) {
            detailsPanel.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }

        // Close panel when clicking outside
        document.addEventListener('click', function() {
            closePanel();
        });

        // Log for debugging
        console.log('Event listeners attached');
    });

    createTimeline(treeData.children);
});
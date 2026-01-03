// quiz/subjects/ml/questions.js
const mlQuestions = {
    1: [ // Unit 1: Neural Networks and Deep Learning (20 questions)
        {
            question: "What is the primary purpose of the activation function in neural networks?",
            options: ["Data normalization", "Introduce non-linearity", "Reduce dimensionality", "Handle missing data"],
            correct: 1
        },
        {
            question: "Which optimization algorithm is most commonly used in deep learning?",
            options: ["Gradient Descent", "Adam", "Genetic Algorithm", "Simulated Annealing"],
            correct: 1
        },
        {
            question: "What does 'backpropagation' do in neural networks?",
            options: ["Forward pass", "Compute gradients", "Initialize weights", "Normalize inputs"],
            correct: 1
        },
        {
            question: "Which activation function is preferred for hidden layers in deep networks?",
            options: ["Sigmoid", "Tanh", "ReLU", "Step function"],
            correct: 2
        },
        {
            question: "What is the vanishing gradient problem?",
            options: ["Weights become zero", "Gradients become very small", "Network becomes too deep", "Overfitting occurs"],
            correct: 1
        },
        {
            question: "Which regularization technique adds penalty to loss function?",
            options: ["Dropout", "Batch Normalization", "L1/L2 Regularization", "Data Augmentation"],
            correct: 2
        },
        {
            question: "What is batch normalization used for?",
            options: ["Speed up training", "Reduce overfitting", "Handle imbalanced data", "Feature selection"],
            correct: 0
        },
        {
            question: "Which deep learning architecture is best for sequence data?",
            options: ["CNN", "RNN", "Autoencoder", "GAN"],
            correct: 1
        },
        {
            question: "What is the purpose of dropout in neural networks?",
            options: ["Speed up training", "Prevent overfitting", "Reduce parameters", "Handle missing values"],
            correct: 1
        },
        {
            question: "Which loss function is used for binary classification?",
            options: ["MSE", "Cross-entropy", "MAE", "Huber loss"],
            correct: 1
        },
        {
            question: "What is a convolutional neural network primarily used for?",
            options: ["Text processing", "Image processing", "Time series", "Tabular data"],
            correct: 1
        },
        {
            question: "Which optimizer adapts learning rate for each parameter?",
            options: ["SGD", "Adam", "Momentum", "RMSProp"],
            correct: 1
        },
        {
            question: "What is transfer learning?",
            options: ["Moving data between servers", "Using pre-trained models", "Converting data formats", "Parallel training"],
            correct: 1
        },
        {
            question: "Which activation function can cause dying neurons?",
            options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
            correct: 0
        },
        {
            question: "What is the exploding gradient problem?",
            options: ["Gradients become zero", "Gradients become very large", "Weights oscillate", "Loss increases"],
            correct: 1
        },
        {
            question: "Which technique helps with vanishing gradients?",
            options: ["Residual connections", "Dropout", "Batch normalization", "Weight initialization"],
            correct: 0
        },
        {
            question: "What is an autoencoder used for?",
            options: ["Classification", "Dimensionality reduction", "Regression", "Clustering"],
            correct: 1
        },
        {
            question: "Which deep learning model generates new data?",
            options: ["CNN", "RNN", "GAN", "Transformer"],
            correct: 2
        },
        {
            question: "What is the purpose of attention mechanism?",
            options: ["Focus on important parts", "Normalize inputs", "Reduce parameters", "Speed up training"],
            correct: 0
        },
        {
            question: "Which regularization prevents co-adaptation of neurons?",
            options: ["L2 regularization", "Dropout", "Early stopping", "Data augmentation"],
            correct: 1
        }
    ],
    2: [ // Unit 2: Computer Vision (25 questions)
        {
            question: "What is the primary operation in convolutional layers?",
            options: ["Matrix multiplication", "Element-wise multiplication", "Sliding window operation", "Dot product"],
            correct: 2
        },
        {
            question: "Which CNN layer reduces spatial dimensions?",
            options: ["Convolutional", "Pooling", "Fully connected", "Activation"],
            correct: 1
        },
        {
            question: "What is the purpose of padding in CNNs?",
            options: ["Increase channels", "Preserve spatial size", "Add non-linearity", "Reduce parameters"],
            correct: 1
        },
        {
            question: "Which technique helps CNNs handle different input sizes?",
            options: ["Global pooling", "Adaptive pooling", "Spatial pooling", "Max pooling"],
            correct: 1
        },
        {
            question: "What is object detection in computer vision?",
            options: ["Classify images", "Locate and classify objects", "Segment images", "Generate images"],
            correct: 1
        },
        {
            question: "Which architecture is commonly used for object detection?",
            options: ["AlexNet", "VGG", "R-CNN", "LeNet"],
            correct: 2
        },
        {
            question: "What is image segmentation?",
            options: ["Classify pixels", "Group pixels into regions", "Detect edges", "Enhance contrast"],
            correct: 1
        },
        {
            question: "Which CNN variant uses depthwise separable convolutions?",
            options: ["ResNet", "MobileNet", "DenseNet", "EfficientNet"],
            correct: 1
        },
        {
            question: "What is transfer learning in computer vision?",
            options: ["Moving models between devices", "Using ImageNet weights", "Converting formats", "Data augmentation"],
            correct: 1
        },
        {
            question: "Which technique prevents overfitting in CNNs?",
            options: ["Dropout", "Batch normalization", "Data augmentation", "All of the above"],
            correct: 3
        },
        {
            question: "What is the receptive field in CNNs?",
            options: ["Input size", "Output size", "Region a neuron sees", "Kernel size"],
            correct: 2
        },
        {
            question: "Which pooling operation takes maximum value?",
            options: ["Average pooling", "Max pooling", "Global pooling", "Adaptive pooling"],
            correct: 1
        },
        {
            question: "What is data augmentation in computer vision?",
            options: ["Increase dataset size", "Generate synthetic data", "Both A and B", "Reduce dataset"],
            correct: 2
        },
        {
            question: "Which metric is used for object detection accuracy?",
            options: ["Accuracy", "Precision", "mAP", "F1-score"],
            correct: 2
        },
        {
            question: "What is the purpose of anchor boxes in object detection?",
            options: ["Define object locations", "Specify possible scales", "Handle rotations", "Classify objects"],
            correct: 1
        },
        {
            question: "Which architecture uses residual connections?",
            options: ["VGG", "ResNet", "AlexNet", "GoogLeNet"],
            correct: 1
        },
        {
            question: "What is semantic segmentation?",
            options: ["Instance segmentation", "Pixel-level classification", "Object detection", "Image classification"],
            correct: 1
        },
        {
            question: "Which technique is used for real-time object detection?",
            options: ["R-CNN", "Fast R-CNN", "Faster R-CNN", "YOLO"],
            correct: 3
        },
        {
            question: "What is the purpose of upsampling in segmentation?",
            options: ["Reduce resolution", "Increase resolution", "Change channels", "Add features"],
            correct: 1
        },
        {
            question: "Which preprocessing technique normalizes pixel values?",
            options: ["Resizing", "Normalization", "Cropping", "Flipping"],
            correct: 1
        },
        {
            question: "What is the focal loss used for?",
            options: ["Regression", "Handle class imbalance", "Multi-task learning", "Domain adaptation"],
            correct: 1
        },
        {
            question: "Which architecture is designed for mobile devices?",
            options: ["ResNet-152", "MobileNet", "VGG-19", "DenseNet"],
            correct: 1
        },
        {
            question: "What is the IoU metric used for?",
            options: ["Classification", "Object detection", "Segmentation", "Tracking"],
            correct: 1
        },
        {
            question: "Which technique helps with small object detection?",
            options: ["Multi-scale training", "Feature pyramid networks", "Both A and B", "Data augmentation"],
            correct: 2
        },
        {
            question: "What is the purpose of non-maximum suppression?",
            options: ["Speed up inference", "Remove duplicate detections", "Increase accuracy", "Reduce memory"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Natural Language Processing (25 questions)
        {
            question: "What is tokenization in NLP?",
            options: ["Text classification", "Splitting text into units", "Language translation", "Sentiment analysis"],
            correct: 1
        },
        {
            question: "Which technique converts words to vectors?",
            options: ["Stemming", "Lemmatization", "Word embeddings", "POS tagging"],
            correct: 2
        },
        {
            question: "What is the purpose of recurrent neural networks in NLP?",
            options: ["Handle sequences", "Process images", "Classification", "Regression"],
            correct: 0
        },
        {
            question: "Which attention mechanism revolutionized NLP?",
            options: ["Self-attention", "Multi-head attention", "Scaled dot-product", "All of the above"],
            correct: 3
        },
        {
            question: "What is BERT primarily used for?",
            options: ["Text generation", "Understanding context", "Machine translation", "Speech recognition"],
            correct: 1
        },
        {
            question: "Which technique handles long-range dependencies in sequences?",
            options: ["CNN", "RNN", "Transformer", "LSTM"],
            correct: 2
        },
        {
            question: "What is sentiment analysis?",
            options: ["Language translation", "Determine emotional tone", "Text summarization", "Question answering"],
            correct: 1
        },
        {
            question: "Which model is used for machine translation?",
            options: ["BERT", "GPT", "T5", "All of the above"],
            correct: 3
        },
        {
            question: "What is named entity recognition?",
            options: ["POS tagging", "Identify entities", "Text classification", "Language detection"],
            correct: 1
        },
        {
            question: "Which technique reduces vocabulary size?",
            options: ["Tokenization", "Stemming", "Lemmatization", "Both B and C"],
            correct: 3
        },
        {
            question: "What is the vanishing gradient problem in RNNs?",
            options: ["Weights become large", "Gradients become small", "Network collapses", "Overfitting"],
            correct: 1
        },
        {
            question: "Which architecture solves vanishing gradients in RNNs?",
            options: ["Simple RNN", "LSTM", "GRU", "Both B and C"],
            correct: 3
        },
        {
            question: "What is transfer learning in NLP?",
            options: ["Moving models", "Using pre-trained models", "Fine-tuning", "Both B and C"],
            correct: 3
        },
        {
            question: "Which metric is used for machine translation?",
            options: ["BLEU", "ROUGE", "METEOR", "All of the above"],
            correct: 3
        },
        {
            question: "What is text summarization?",
            options: ["Shorten text", "Generate text", "Translate text", "Classify text"],
            correct: 0
        },
        {
            question: "Which model is autoregressive?",
            options: ["BERT", "GPT", "T5", "RoBERTa"],
            correct: 1
        },
        {
            question: "What is the purpose of positional encoding?",
            options: ["Handle word order", "Encode vocabulary", "Normalize inputs", "Reduce dimensions"],
            correct: 0
        },
        {
            question: "Which technique is used for text classification?",
            options: ["RNN", "CNN", "Transformer", "All of the above"],
            correct: 3
        },
        {
            question: "What is the masked language modeling objective?",
            options: ["Predict next word", "Fill masked words", "Generate text", "Translate text"],
            correct: 1
        },
        {
            question: "Which evaluation metric is used for summarization?",
            options: ["BLEU", "ROUGE", "F1-score", "Accuracy"],
            correct: 1
        },
        {
            question: "What is zero-shot learning in NLP?",
            options: ["No training data", "Learn without examples", "Few-shot learning", "Unsupervised learning"],
            correct: 1
        },
        {
            question: "Which technique handles multiple languages?",
            options: ["Monolingual models", "Multilingual models", "Cross-lingual transfer", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of subword tokenization?",
            options: ["Handle unknown words", "Reduce vocabulary", "Both A and B", "Speed up training"],
            correct: 2
        },
        {
            question: "Which model architecture uses encoder-decoder?",
            options: ["BERT", "GPT", "T5", "RoBERTa"],
            correct: 2
        },
        {
            question: "What is the attention mechanism in transformers?",
            options: ["Focus on relevant parts", "Normalize inputs", "Reduce dimensions", "Handle sequences"],
            correct: 0
        }
    ],
    4: [ // Unit 4: Reinforcement Learning (25 questions)
        {
            question: "What is the main components of reinforcement learning?",
            options: ["Agent, Environment, Reward", "Input, Output, Loss", "Features, Labels, Model", "Train, Test, Validate"],
            correct: 0
        },
        {
            question: "What is a Markov Decision Process?",
            options: ["Decision tree", "Mathematical framework for RL", "Neural network", "Optimization algorithm"],
            correct: 1
        },
        {
            question: "What is the Q-value in reinforcement learning?",
            options: ["Quality of action", "Expected reward", "Both A and B", "State value"],
            correct: 2
        },
        {
            question: "Which algorithm learns Q-values directly?",
            options: ["SARSA", "Q-learning", "Both A and B", "Policy gradient"],
            correct: 2
        },
        {
            question: "What is the exploration-exploitation dilemma?",
            options: ["Try new actions vs use known", "Balance risk and reward", "Both A and B", "Learn vs perform"],
            correct: 2
        },
        {
            question: "Which technique balances exploration and exploitation?",
            options: ["Greedy policy", "ε-greedy", "Random policy", "Optimal policy"],
            correct: 1
        },
        {
            question: "What is a policy in reinforcement learning?",
            options: ["Reward function", "Action selection strategy", "Value function", "Environment model"],
            correct: 1
        },
        {
            question: "Which method optimizes policy directly?",
            options: ["Value iteration", "Q-learning", "Policy gradient", "SARSA"],
            correct: 2
        },
        {
            question: "What is the Bellman equation used for?",
            options: ["Update Q-values", "Compute optimal policy", "Both A and B", "Initialize values"],
            correct: 2
        },
        {
            question: "Which deep RL algorithm uses experience replay?",
            options: ["DQN", "A3C", "PPO", "TRPO"],
            correct: 0
        },
        {
            question: "What is the purpose of experience replay?",
            options: ["Speed up learning", "Reduce correlation", "Both A and B", "Handle large states"],
            correct: 2
        },
        {
            question: "Which algorithm is on-policy?",
            options: ["Q-learning", "SARSA", "Both A and B", "DQN"],
            correct: 1
        },
        {
            question: "What is the difference between on-policy and off-policy?",
            options: ["Learning vs acting policy", "Value vs policy methods", "Model-based vs model-free", "Discrete vs continuous"],
            correct: 0
        },
        {
            question: "Which technique stabilizes training in deep RL?",
            options: ["Target networks", "Experience replay", "Both A and B", "Reward clipping"],
            correct: 2
        },
        {
            question: "What is the actor-critic method?",
            options: ["Two networks approach", "Policy and value function", "Both A and B", "Multi-agent RL"],
            correct: 2
        },
        {
            question: "Which algorithm uses trust region optimization?",
            options: ["PPO", "TRPO", "Both A and B", "A3C"],
            correct: 1
        },
        {
            question: "What is inverse reinforcement learning?",
            options: ["Learn from demonstrations", "Reverse optimal policy", "Both A and B", "Unsupervised RL"],
            correct: 0
        },
        {
            question: "Which domain uses RL extensively?",
            options: ["Computer vision", "Game playing", "NLP", "All of the above"],
            correct: 3
        },
        {
            question: "What is multi-agent reinforcement learning?",
            options: ["Single agent", "Multiple agents", "Cooperative learning", "Both B and C"],
            correct: 3
        },
        {
            question: "Which technique handles continuous action spaces?",
            options: ["Q-learning", "Policy gradients", "Both A and B", "SARSA"],
            correct: 1
        },
        {
            question: "What is the credit assignment problem?",
            options: ["Assign rewards to actions", "Handle delayed rewards", "Both A and B", "Explore vs exploit"],
            correct: 2
        },
        {
            question: "Which algorithm is model-based RL?",
            options: ["Q-learning", "Dyna-Q", "SARSA", "Monte Carlo"],
            correct: 1
        },
        {
            question: "What is the temporal difference learning?",
            options: ["Bootstrapping", "Sample-based learning", "Both A and B", "Policy evaluation"],
            correct: 2
        },
        {
            question: "Which metric evaluates RL performance?",
            options: ["Accuracy", "Average reward", "Convergence time", "All of the above"],
            correct: 3
        },
        {
            question: "What is the purpose of reward shaping?",
            options: ["Modify reward function", "Speed up learning", "Both A and B", "Handle sparse rewards"],
            correct: 2
        }
    ],
    5: [ // Unit 5: Model Deployment and Ethics (25 questions)
        {
            question: "What is MLOps?",
            options: ["Machine Learning Operations", "Model Lifecycle Management", "Both A and B", "Mobile Learning"],
            correct: 2
        },
        {
            question: "Which tool is used for model serving?",
            options: ["TensorFlow Serving", "Flask", "Django", "All of the above"],
            correct: 3
        },
        {
            question: "What is model interpretability?",
            options: ["Understand predictions", "Debug models", "Both A and B", "Speed up inference"],
            correct: 2
        },
        {
            question: "Which technique explains model decisions?",
            options: ["SHAP", "LIME", "Both A and B", "Dropout"],
            correct: 2
        },
        {
            question: "What is algorithmic bias?",
            options: ["Model accuracy", "Unfair discrimination", "Training speed", "Model size"],
            correct: 1
        },
        {
            question: "Which fairness metric measures equal opportunity?",
            options: ["Demographic parity", "Equal opportunity", "Both A and B", "Accuracy parity"],
            correct: 2
        },
        {
            question: "What is model monitoring in production?",
            options: ["Track performance", "Detect drift", "Both A and B", "Update models"],
            correct: 2
        },
        {
            question: "Which technique handles concept drift?",
            options: ["Retraining", "Monitoring", "Both A and B", "Version control"],
            correct: 2
        },
        {
            question: "What is A/B testing in ML deployment?",
            options: ["Compare models", "Load testing", "Both A and B", "Unit testing"],
            correct: 0
        },
        {
            question: "Which container technology is used for deployment?",
            options: ["Docker", "Kubernetes", "Both A and B", "VMware"],
            correct: 2
        },
        {
            question: "What is the purpose of feature stores?",
            options: ["Store features", "Share features", "Both A and B", "Version features"],
            correct: 2
        },
        {
            question: "Which ethical concern involves privacy?",
            options: ["Bias", "Data privacy", "Both A and B", "Transparency"],
            correct: 1
        },
        {
            question: "What is model governance?",
            options: ["Model management", "Ethical oversight", "Both A and B", "Version control"],
            correct: 2
        },
        {
            question: "Which technique reduces model size?",
            options: ["Pruning", "Quantization", "Both A and B", "Distillation"],
            correct: 2
        },
        {
            question: "What is the GDPR related to?",
            options: ["Data protection", "Model licensing", "Both A and B", "Open source"],
            correct: 0
        },
        {
            question: "Which deployment strategy is gradual?",
            options: ["Blue-green", "Canary", "Both A and B", "Rolling"],
            correct: 2
        },
        {
            question: "What is model explainability?",
            options: ["Debug models", "Understand predictions", "Both A and B", "Improve accuracy"],
            correct: 2
        },
        {
            question: "Which bias type occurs in training data?",
            options: ["Algorithmic bias", "Data bias", "Both A and B", "Deployment bias"],
            correct: 1
        },
        {
            question: "What is the purpose of model cards?",
            options: ["Document models", "Share specifications", "Both A and B", "Version control"],
            correct: 2
        },
        {
            question: "Which technique ensures model robustness?",
            options: ["Adversarial training", "Input validation", "Both A and B", "Regularization"],
            correct: 2
        },
        {
            question: "What is the right to explanation?",
            options: ["GDPR requirement", "Understand AI decisions", "Both A and B", "Debug models"],
            correct: 2
        },
        {
            question: "Which tool monitors model performance?",
            options: ["Prometheus", "Grafana", "Both A and B", "TensorBoard"],
            correct: 2
        },
        {
            question: "What is model distillation?",
            options: ["Compress models", "Transfer knowledge", "Both A and B", "Train faster"],
            correct: 2
        },
        {
            question: "Which ethical framework guides AI development?",
            options: ["Utilitarianism", "Deontology", "Both A and B", "Virtue ethics"],
            correct: 2
        },
        {
            question: "What is the purpose of data provenance?",
            options: ["Track data origin", "Ensure quality", "Both A and B", "Audit trails"],
            correct: 2
        }
    ]
};

// Generate function
function generateQuizQuestions(selectedUnits) {
    // Question distribution rules
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    const totalQuestionsNeeded = distribution[selectedUnits.length] || 15;

    let allQuestions = [];
    let selectedQuestions = [];

    // Collect all questions from selected units
    selectedUnits.forEach(unitId => {
        if (mlQuestions[unitId]) {
            mlQuestions[unitId].forEach(question => {
                allQuestions.push({...question, unit: unitId});
            });
        }
    });

    // Shuffle all questions first
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Take only the required number of questions
    selectedQuestions = allQuestions.slice(0, totalQuestionsNeeded);

    return selectedQuestions;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}

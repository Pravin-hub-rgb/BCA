// quiz/subjects/ml/units.js
const mlUnits = [
    {
        id: 1,
        name: "Neural Networks and Deep Learning",
        description: "Artificial neural networks, backpropagation, activation functions, optimization algorithms, and deep learning architectures."
    },
    {
        id: 2,
        name: "Computer Vision",
        description: "Image processing, convolutional neural networks (CNN), object detection, image segmentation, and computer vision applications."
    },
    {
        id: 3,
        name: "Natural Language Processing",
        description: "Text processing, recurrent neural networks (RNN), transformers, language models, and NLP applications."
    },
    {
        id: 4,
        name: "Reinforcement Learning",
        description: "Markov decision processes, Q-learning, policy gradients, deep reinforcement learning, and real-world applications."
    },
    {
        id: 5,
        name: "Model Deployment and Ethics",
        description: "Model deployment strategies, MLOps, model interpretability, bias and fairness, and ethical considerations in machine learning."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.mlUnits = mlUnits;
}

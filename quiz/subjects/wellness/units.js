// quiz/subjects/wellness/units.js
const wellnessUnits = [
    {
        id: 1,
        name: "Well Being and Health",
        description: "Concept of well being, health dimensions, determinants of health, promotion and maintenance of health, characteristics of healthy person."
    },
    {
        id: 2,
        name: "Physical Fitness and Nutrition",
        description: "Physical activity and exercise, yoga and meditation, importance of yoga, essential nutrition, diet, food hygiene, healthy and unhealthy food habits, balanced diet."
    },
    {
        id: 3,
        name: "Health and Environment",
        description: "Environment health and hygiene, biological environment, physical environment, psychosocial environment, living conditions and health, social wellbeing."
    },
    {
        id: 4,
        name: "Mental Well Being",
        description: "Mental health, signs of mentally healthy person, self-evaluation, anger management, burnout syndrome, academic stress, mindfulness, social support."
    },
    {
        id: 5,
        name: "Stress Management",
        description: "Types of stress, stressors, symptoms of stress, stress cycle, stress management techniques and strategies."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.wellnessUnits = wellnessUnits;
}

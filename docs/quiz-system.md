# BCA Quiz System Documentation

## Overview

The BCA Quiz System is a dynamic, modular quiz platform designed for educational purposes. It supports multiple subjects with flexible question management, random question selection, and responsive design.

## Architecture

### Directory Structure

```
quiz/
├── subjects.html          # Subject selection page
├── unit-select.html       # Unit selection for chosen subject
├── quiz.html             # Main quiz interface
├── styles.css            # Shared quiz styling
├── subjects-loader.js    # Dynamic subject discovery
└── subjects/             # Subject-specific content
    └── {subject-id}/
        ├── config.js     # Subject metadata
        ├── units.js      # Unit definitions
        └── questions.js  # Quiz questions
```

### Current Subjects

- **Computer Graphics** (`cg`) - 5 units, 100 questions
- **Android Programming** (`android`) - 5 units, 100 questions

## How It Works

### 1. Subject Discovery
The system automatically discovers available subjects through `subjects-loader.js`:

```javascript
const subjects = [
    {
        id: 'cg',
        name: 'Computer Graphics',
        description: 'Test your knowledge of graphics programming...',
        unitCount: 5,
        totalQuestions: 100,
        questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
    }
    // Add new subjects here
];
```

### 2. Question Generation
Questions are randomly shuffled using Fisher-Yates algorithm:

```javascript
function generateQuizQuestions(selectedUnits) {
    let questions = [];
    selectedUnits.forEach(unitId => {
        questions.push(...subjectQuestions[unitId]);
    });

    // Fisher-Yates shuffle
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions;
}
```

### 3. Quiz Flow

```
Homepage → Quiz Card → Subject Selection → Unit Selection → Quiz → Results
```

### 4. Question Distribution Rules

The quiz system follows these rules for question distribution:

- **1 unit selected**: 15 questions
- **2 units selected**: 20 questions (10 from each)
- **3 units selected**: 25 questions
- **4 units selected**: 30 questions
- **5 units selected**: 40 questions

All questions are randomly selected and shuffled to ensure different experiences each time.

## Adding New Subjects

### Step 1: Create Subject Folder
```bash
mkdir quiz/subjects/{subject-id}
```

### Step 2: Create config.js
```javascript
// quiz/subjects/{subject-id}/config.js
const {subjectId}Config = {
    id: '{subject-id}',
    name: 'Subject Full Name',
    description: 'Brief description of what the quiz covers',
    unitCount: 5,           // Number of units
    totalQuestions: 100,    // Total questions available
    questionDistribution: { // Questions per unit selection
        1: 15,  // 1 unit selected = 15 questions
        2: 20,  // 2 units selected = 20 questions
        3: 25,  // etc.
        4: 30,
        5: 40
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.{subjectId}Config = {subjectId}Config;
}
```

### Step 3: Create units.js
```javascript
// quiz/subjects/{subject-id}/units.js
const {subjectId}Units = [
    {
        id: 1,
        name: "Unit 1 Name",
        description: "Detailed description of unit content..."
    },
    // Add more units...
];

// Make available globally
if (typeof window !== 'undefined') {
    window.{subjectId}Units = {subjectId}Units;
}
```

### Step 4: Create questions.js
```javascript
// quiz/subjects/{subject-id}/questions.js
const {subjectId}Questions = {
    1: [ // Unit 1 questions (20 recommended)
        {
            question: "Question text?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0  // Index of correct answer
        },
        // Add 19 more questions...
    ],
    // Add units 2-5...
};

// Generate function
function generateQuizQuestions(selectedUnits) {
    let questions = [];
    selectedUnits.forEach(unitId => {
        if ({subjectId}Questions[unitId]) {
            {subjectId}Questions[unitId].forEach(question => {
                questions.push({...question, unit: unitId});
            });
        }
    });

    // Shuffle questions
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    return questions;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}
```

### Step 5: Register Subject
Add to `quiz/subjects-loader.js`:

```javascript
availableSubjects = [
    // Existing subjects...
    {
        id: '{subject-id}',
        name: 'Subject Full Name',
        description: 'Brief description...',
        unitCount: 5,
        totalQuestions: 100,
        questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 },
        unitsPath: 'quiz/subjects/{subject-id}/units.js',
        questionsPath: 'quiz/subjects/{subject-id}/questions.js'
    }
];
```

## Question Format Guidelines

### Question Structure
```javascript
{
    question: "Clear, concise question text?",
    options: [
        "Option A (correct)",
        "Option B (distractor)",
        "Option C (distractor)",
        "Option D (distractor)"
    ],
    correct: 0  // Index of correct answer (0-3)
}
```

### Language and Terminology Rules
- **Avoid Short Forms**: Always use full forms instead of abbreviations
  - ❌ "IS implementation" → ✅ "Information System implementation"
  - ❌ "MIS functions" → ✅ "Management Information System functions"
  - ❌ "DSS phases" → ✅ "Decision Support System phases"
  - ❌ "HRM support" → ✅ "Human Resource Management support"
- **Write Full Terms**: Use complete terminology for clarity
  - Use "Transaction Processing System" not "TPS"
  - Use "Office Automation System" not "OAS"
  - Use "Supply Chain Management" not "SCM"
  - Use "Customer Relationship Management" not "CRM"
  - Use "Enterprise Resource Planning" not "ERP"
- **Acceptable Abbreviations**: Standard terms like B2B, B2C, C2C may be used as they are commonly recognized

### Best Practices
- **Questions**: Clear, unambiguous, single-concept
- **Options**: Plausible distractors, similar length
- **Correct Answer**: One definitive correct answer
- **Count**: 20 questions per unit recommended
- **Difficulty**: Mix easy, medium, hard questions
- **Topics**: Cover syllabus comprehensively

### Question Types
- **Factual**: Definition, identification, terminology
- **Conceptual**: Understanding, application, analysis
- **Problem-solving**: Calculations, procedures, methods
- **Comparative**: Differences, advantages, relationships

## Styling Guidelines

### Color Scheme
- **Primary**: System font stack for readability
- **Background**: Matches site theme (light/dark mode)
- **Borders**: Consistent with subject cards (`0.5px solid grey`)
- **Buttons**: Telegram blue (`#04befe`)

### Typography
- **Font**: System font stack for cross-platform consistency
- **Sizes**: Responsive scaling
- **Weight**: Bold for emphasis, normal for content

### Layout
- **Cards**: Fixed min-height (100px) matching subject cards
- **Spacing**: Consistent padding and margins
- **Responsive**: Mobile-optimized breakpoints

## Testing Checklist

### Functionality
- [ ] Subject selection loads correctly
- [ ] Unit selection displays proper checkboxes
- [ ] Quiz questions load and display
- [ ] Random shuffling works
- [ ] Scoring calculates correctly
- [ ] Results show proper feedback

### User Experience
- [ ] Navigation flows logically
- [ ] No broken links or missing assets
- [ ] Responsive on mobile devices
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

### Content Quality
- [ ] Questions are accurate and relevant
- [ ] Answer options are balanced
- [ ] Explanations are clear (if provided)
- [ ] No spelling/grammar errors

## Maintenance

### Regular Tasks
- **Content Updates**: Review and update questions annually
- **Bug Fixes**: Monitor error reports and fix issues
- **Performance**: Optimize loading times and memory usage
- **Accessibility**: Ensure WCAG compliance

### Adding Content
1. Create subject folder structure
2. Write comprehensive questions (20/unit minimum)
3. Test thoroughly before deployment
4. Update documentation if needed

### Monitoring
- **Analytics**: Track quiz completion rates
- **Feedback**: Collect user suggestions
- **Errors**: Monitor console logs and error reports
- **Performance**: Check loading times and responsiveness

## Technical Details

### Dependencies
- **JavaScript**: ES6+ features (arrow functions, destructuring)
- **CSS**: Modern properties with fallbacks
- **HTML**: Semantic markup with accessibility attributes

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

### Performance
- **Lazy Loading**: Questions loaded on demand
- **Caching**: Local storage for user progress
- **Optimization**: Minimal DOM manipulation
- **Bundle Size**: Keep JavaScript lightweight

## Troubleshooting

### Common Issues
- **Questions not loading**: Check file paths and syntax
- **Styling broken**: Verify CSS imports and selectors
- **Navigation fails**: Check URL parameters and routing
- **Scoring incorrect**: Verify correct answer indices

### Debug Steps
1. Check browser console for errors
2. Verify file paths and permissions
3. Test in incognito mode (cache issues)
4. Validate JSON/JS syntax
5. Check responsive breakpoints

## Future Enhancements

### Planned Features
- **Question categories**: Easy, medium, hard difficulty
- **Progress tracking**: Save quiz state between sessions
- **Explanations**: Show correct answer explanations
- **Statistics**: Track performance over time
- **Offline mode**: Download quizzes for offline use

### Technical Improvements
- **PWA support**: Installable web app
- **Database integration**: Centralized question management
- **Real-time sync**: Collaborative question editing
- **Analytics dashboard**: Detailed usage statistics

---

## Quick Reference

### File Templates
- `config.js`: Subject metadata and settings
- `units.js`: Unit definitions with descriptions
- `questions.js`: Question arrays with Fisher-Yates shuffle

### Key Functions
- `loadAvailableSubjects()`: Discovers quiz subjects
- `generateQuizQuestions()`: Creates randomized question sets
- `getQuestionDistribution()`: Calculates questions based on unit selection

### URL Patterns
- `/quiz/subjects.html`: Subject selection
- `/quiz/unit-select.html?subject=cg`: Unit selection
- `/quiz/quiz.html?subject=cg`: Quiz interface

---

*Last updated: January 2026*
*Maintained by: BCA Notes Team*

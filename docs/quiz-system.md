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

- **Computer Graphics** (`cg`) - 5 units, 100 questions ✅
- **Android Programming** (`android`) - 5 units, 100 questions ✅
- **Software Project Management and Information Systems** (`spm`) - 5 units, 100 questions ✅
- **Digital Electronics** (`digital_electronics`) - 5 units, 100 questions ✅
- **Web Technologies** (`web`) - 5 units, 100 questions ✅
- **Data Warehousing and Data Mining** (`dw_dm`) - 5 units, 100 questions ✅

## Quiz Development Status

### ✅ **Completed Quizzes**
- **Computer Graphics** (`cg`) - 5 units, 100 questions
  - Unit 1: Introduction to Computer Graphics (20 questions)
  - Unit 2: Mathematics for Computer Graphics (20 questions)
  - Unit 3: Output Primitives & Clipping (20 questions)
  - Unit 4: 2D & 3D Transformations (20 questions)
  - Unit 5: Animation & Graphics Standards (20 questions)

- **Android Programming** (`android`) - 5 units, 100 questions
  - Unit 1: Introduction to Android (20 questions)
  - Unit 2: App Components (20 questions)
  - Unit 3: Intents and User Interface (20 questions)
  - Unit 4: SQLite Database (20 questions)
  - Unit 5: Telephony and Sensors (20 questions)

- **Software Project Management and Information Systems** (`spm`) - 5 units, 100 questions
  - Unit 1: Overview of Software Project Planning (20 questions)
  - Unit 2: Project Scheduling & Software Configuration Management (20 questions)
  - Unit 3: Information and Information Systems (20 questions)
  - Unit 4: Concepts of Planning & Control (20 questions)
  - Unit 5: Enterprise Resources Planning (ERP) (20 questions)

- **Digital Electronics** (`digital_electronics`) - 5 units, 100 questions
  - Unit 1: Introduction to Digital Electronics & Number Systems (20 questions)
  - Unit 2: Logic Gates & Boolean Algebra (20 questions)
  - Unit 3: Combinational Circuits (25 questions)
  - Unit 4: Sequential Circuits & Flip-Flops (30 questions)
  - Unit 5: Counters (40 questions)

- **Web Technologies** (`web`) - 5 units, 100 questions
  - Unit 1: Web Technology Foundations (20 questions)
  - Unit 2: HTML & CSS (20 questions)
  - Unit 3: Extensible Markup Language (XML) (25 questions)
  - Unit 4: Client Side Scripting with JavaScript (30 questions)
  - Unit 5: Server Side Scripting with PHP (40 questions)

### ❌ **Planned Quizzes** (Not Yet Created)
*Update this section as new quizzes are developed*

#### **Semester 6 Subjects:**
- **Data Mining** (`dm`) - Expected: 5 units, 100 questions
- **Machine Learning** (`ml`) - Expected: 5 units, 100 questions
- **Cloud Computing** (`cloud`) - Expected: 5 units, 100 questions

#### **Semester 5 Subjects:**
- **Software Engineering** (`se`) - Expected: 5 units, 100 questions
- **Database Management Systems** (`dbms`) - Expected: 5 units, 100 questions
- **Computer Networks** (`cn`) - Expected: 5 units, 100 questions
- **Operating Systems** (`os`) - Expected: 5 units, 100 questions

#### **Semester 4 Subjects:**
- **Software Project Management** (`spm`) - ✅ **COMPLETED**
- **Computer Organization** (`co`) - Expected: 5 units, 100 questions
- **Data Structures** (`ds`) - Expected: 5 units, 100 questions
- **Discrete Mathematics** (`dm`) - Expected: 5 units, 100 questions

#### **Semester 3 Subjects:**
- **Object Oriented Programming** (`oop`) - Expected: 5 units, 100 questions
- **Computer Architecture** (`ca`) - Expected: 5 units, 100 questions
- **Data Communication** (`dc`) - Expected: 5 units, 100 questions
- **System Programming** (`sp`) - Expected: 5 units, 100 questions

#### **Semester 2 Subjects:**
- **Advanced C Programming** (`ac`) - Expected: 5 units, 100 questions
- **Digital Electronics** (`digital_electronics`) - ✅ **COMPLETED**
- **Mathematics for Computing** (`mc`) - Expected: 5 units, 100 questions

#### **Semester 1 Subjects:**
- **Computer Fundamentals** (`cf`) - Expected: 5 units, 100 questions
- **Programming in C** (`pc`) - Expected: 5 units, 100 questions
- **Mathematics Foundation** (`mf`) - Expected: 5 units, 100 questions
- **Communication Skills** (`cs`) - Expected: 5 units, 100 questions

### 📊 **Quiz Statistics**
- **Total Subjects Available:** 6/20+ (30% complete)
- **Total Questions Created:** 600 questions
- **Average Questions per Subject:** 100 questions
- **Average Questions per Unit:** 20 questions

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

## 🚀 **Quiz Subject Implementation Workflow**

This section provides a **complete step-by-step workflow** for adding new quiz subjects to the BCA Quiz System. Follow this process for consistent, error-free implementations.

---

## 📋 **Complete Implementation Checklist**

### **Phase 1: Preparation & Research**
- [ ] **Identify subject** and confirm syllabus availability
- [ ] **Analyze syllabus structure** (units, topics, weightage)
- [ ] **Review existing quiz subjects** for consistency
- [ ] **Plan unit structure** (typically 5 units, 20 questions each)

### **Phase 2: Content Creation**
- [ ] **Create questions** (20 per unit, 4 options, 1 correct)
- [ ] **Ensure no abbreviations** (follow language rules)
- [ ] **Verify syllabus coverage** (all topics included)
- [ ] **Test question quality** (clear, unambiguous, single-concept)

### **Phase 3: File Structure Setup**
- [ ] **Create subject folder** (`quiz/subjects/{subject-id}/`)
- [ ] **Create config.js** (metadata and settings)
- [ ] **Create units.js** (unit definitions and descriptions)
- [ ] **Create questions.js** (question arrays and generation logic)

### **Phase 4: System Integration**
- [ ] **Add to subjects-loader.js** (register new subject)
- [ ] **Update subjects.html** (add to search functionality)
- [ ] **Test quiz flow** (subject → units → quiz → results)
- [ ] **Verify responsive design** (mobile compatibility)

### **Phase 5: Documentation & Completion**
- [ ] **Update quiz-system.md** (add to completed quizzes)
- [ ] **Update statistics** (subject count, question count)
- [ ] **Move from "Planned" to "Completed"** in documentation
- [ ] **Final testing** and quality assurance

---

## 🔄 **Detailed Step-by-Step Process**

### **Step 1: Syllabus Analysis & Planning**
```bash
# 1. Find subject resources
ls resources/sem*/{subject-folder}/

# 2. Read syllabus structure
cat resources/sem*/{subject-folder}/index.html

# 3. Plan unit breakdown (typically 5 units)
# - Unit 1: Introduction/Fundamentals
# - Unit 2: Core Concepts
# - Unit 3: Advanced Topics
# - Unit 4: Applications
# - Unit 5: Special Topics/Projects
```

### **Step 2: Question Creation**
```bash
# Create comprehensive questions following guidelines:
# - 20 questions per unit minimum
# - 4 multiple choice options each
# - 1 definitive correct answer
# - No abbreviations (full terminology)
# - Syllabus coverage 100%
# - Mix of difficulty levels
```

### **Step 3: Subject Folder Setup**
```bash
# Create directory structure
mkdir -p quiz/subjects/{subject-id}

# Create required files
touch quiz/subjects/{subject-id}/config.js
touch quiz/subjects/{subject-id}/units.js
touch quiz/subjects/{subject-id}/questions.js
```

### **Step 4: File Implementation**

#### **config.js Template:**
```javascript
// quiz/subjects/{subject-id}/config.js
const {subjectId}Config = {
    id: '{subject-id}',
    name: 'Subject Full Name',
    description: 'Brief description of what the quiz covers',
    unitCount: 5,
    totalQuestions: 100,
    questionDistribution: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.{subjectId}Config = {subjectId}Config;
}
```

#### **units.js Template:**
```javascript
// quiz/subjects/{subject-id}/units.js
const {subjectId}Units = [
    {
        id: 1,
        name: "Unit 1 Name",
        description: "Detailed description of unit content..."
    },
    // Add 4 more units...
];

// Make available globally
if (typeof window !== 'undefined') {
    window.{subjectId}Units = {subjectId}Units;
}
```

#### **questions.js Template:**
```javascript
// quiz/subjects/{subject-id}/questions.js
const {subjectId}Questions = {
    1: [ // Unit 1: 20 questions
        {
            question: "Question text?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0  // Index of correct answer
        },
        // 19 more questions...
    ],
    // Units 2-5: 20 questions each...
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

### **Step 5: System Integration**

#### **Update subjects-loader.js:**
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

#### **Search Integration (Automatic):**
The search functionality in `quiz/subjects.html` automatically includes new subjects once added to `subjects-loader.js`.

### **Step 6: Documentation Update**

#### **Update quiz-system.md:**
1. Add subject to "Completed Quizzes" section
2. Update statistics (total subjects, total questions)
3. Move from "Planned Quizzes" to "Completed Quizzes"
4. Add unit breakdown with question counts

---

## 📊 **Quality Assurance Checklist**

### **Content Quality:**
- [ ] **Question Count**: 20+ questions per unit (100+ total)
- [ ] **Answer Accuracy**: All correct answers verified
- [ ] **No Abbreviations**: Full terminology used throughout
- [ ] **Syllabus Coverage**: All topics adequately represented
- [ ] **Difficulty Balance**: Mix of easy, medium, hard questions

### **Technical Quality:**
- [ ] **File Structure**: All required files present and correctly named
- [ ] **JavaScript Syntax**: No syntax errors, proper exports
- [ ] **Integration**: Subject appears in quiz selection
- [ ] **Navigation**: Quiz flow works (subject → units → quiz → results)
- [ ] **Responsive**: Works on mobile and desktop

### **User Experience:**
- [ ] **Search Functionality**: Subject appears in search results
- [ ] **Quiz Flow**: Smooth navigation between pages
- [ ] **Results Display**: Proper scoring and feedback
- [ ] **Retake Option**: Ability to restart quiz
- [ ] **Theme Support**: Works in light and dark modes

---

## 🎯 **Quick Implementation Commands**

```bash
# 1. Create subject folder and files
mkdir -p quiz/subjects/{subject-id}
touch quiz/subjects/{subject-id}/{config.js,units.js,questions.js}

# 2. Add to subjects loader
# Edit quiz/subjects-loader.js and add subject entry

# 3. Update documentation
# Edit docs/quiz-system.md - move to completed, update stats

# 4. Test implementation
# Open quiz/subjects.html and verify subject appears
```

---

## 📈 **Progress Tracking Template**

Use this template for tracking implementation progress:

```
Subject: {Subject Name}
Start Date: {Date}
Target Completion: {Date}

Phase 1: Preparation & Research
- [x] Syllabus analysis completed
- [x] Unit structure planned
- [ ] Question outline created

Phase 2: Content Creation
- [ ] Unit 1 questions (20/20)
- [ ] Unit 2 questions (20/20)
- [ ] Unit 3 questions (20/20)
- [ ] Unit 4 questions (20/20)
- [ ] Unit 5 questions (20/20)

Phase 3: File Structure Setup
- [ ] config.js created
- [ ] units.js created
- [ ] questions.js created

Phase 4: System Integration
- [ ] Added to subjects-loader.js
- [ ] Tested quiz functionality
- [ ] Verified responsive design

Phase 5: Documentation & Completion
- [ ] Documentation updated
- [ ] Statistics updated
- [ ] Final QA completed
```

---

## 🚨 **Common Issues & Solutions**

### **Issue: Subject not appearing in quiz**
**Solution:** Check subjects-loader.js registration and file paths

### **Issue: Questions not loading**
**Solution:** Verify questions.js syntax and generateQuizQuestions function

### **Issue: Search not working**
**Solution:** Ensure subject added to subjects-loader.js (search is automatic)

### **Issue: Styling broken**
**Solution:** Check quiz/styles.css and ensure responsive breakpoints

### **Issue: Quiz flow broken**
**Solution:** Verify unit-select.html and quiz.html parameter handling

---

## 🎉 **Completion Criteria**

A quiz subject implementation is **complete** when:

- ✅ **Subject appears** in quiz/subjects.html
- ✅ **Appears in search** results
- ✅ **Unit selection** works correctly
- ✅ **Quiz runs** without errors
- ✅ **Results display** properly
- ✅ **Documentation updated** with completion status
- ✅ **Statistics updated** in quiz-system.md
- ✅ **Responsive design** verified on mobile
- ✅ **Theme support** (light/dark mode) confirmed

---

## 📚 **Reference Examples**

### **Completed Subjects:**
- **Computer Graphics** (`cg`) - 5 units, 100 questions
- **Android Programming** (`android`) - 5 units, 100 questions
- **Software Project Management & IS** (`spm`) - 5 units, 100 questions
- **Digital Electronics** (`digital_electronics`) - 5 units, 100 questions

### **File Structure Example:**
```
quiz/subjects/digital_electronics/
├── config.js (metadata)
├── units.js (unit definitions)
└── questions.js (100 questions)
```

### **Integration Points:**
- `quiz/subjects-loader.js` - Subject registration
- `quiz/subjects.html` - Search integration (automatic)
- `docs/quiz-system.md` - Documentation updates

---

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

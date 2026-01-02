# BCA Notes Homepage Redesign

## Overview
Transform the current semester-based homepage into a dynamic subject grid with pinning functionality and category-based organization.

## Current Structure (Semester-Based)
- Subjects grouped under Semester 1-6 sections
- Static organization by academic year
- Semester selector dropdown
- ~47 total subjects

## New Structure (Subject-Centric)

### Display Order
1. **Pinned Subjects** - User-selected favorites (heart icon clicked)
2. **Category Sections** - Alphabetically sorted within each category

### Categories & Subjects

#### Programming Languages (7)
- Advance Concepts of 'C' Programming
- Android Programming
- Data Analytics Using Python
- Java Programming
- Object Oriented Programming Using C++
- Programming Concepts Using C Language
- Programming with .Net

#### Labs (12)
- Android Programming Lab
- C# .Net Lab
- CBNST lab
- Computer Graphics Lab
- Data Structures Lab
- DBMS Lab
- Java Lab
- Machine Learning Lab
- PC Packages Lab
- Programming Concept Using 'C' lab
- Python lab
- Web Technologies lab

#### Core Computer Science (6)
- Computer Fundamentals and Information Technology
- Computer Graphics
- Computer Organization and Architecture
- Data Structures and File Organization
- Digital Electronics
- Operating System

#### Data & Databases (2)
- Data Warehouse and Data Mining
- Database Management System

#### Web & Networking (3)
- Data Communication and Computer Networks
- Network Security and Cyber Law
- Web Technologies

#### Mathematics (4)
- Computer Based Numerical & Statistical Techniques
- Discrete mathematical Structures and Graph Theory
- Mathematical Foundation of Computer Science
- Optimization Techniques

#### Software Engineering & AI (5)
- Cryptography
- Fundamentals of Machine Learning
- Soft Computing
- Software Engineering
- Software Project Management and Information Systems

#### Career & Soft Skills (7)
- Career Skills
- Career Skills - III
- Career Skills-I
- Health Education
- Principle of Management
- Professional Communication -1
- Wellness and Stress Management

### Electronics & Systems (1)
- Microprocessor

## UI/UX Features

### Subject Cards
- Clean card design with subject name
- Heart icon for pinning (outline = unpinned, filled = pinned)
- Click heart to toggle pin status
- Click subject name to navigate
- Responsive grid layout

### Pinning System
- localStorage persistence for pinned subjects
- Pinned subjects appear in "Pinned" section at top
- Immediate reorder on pin/unpin
- No labels or text - intuitive heart icon only

### Search Functionality
- Works across all subjects
- Filters visible cards in real-time
- Maintains pin status and category organization

## Technical Implementation

### Files to Modify
- `index.html` - Replace semester structure with category sections
- `public/main.js` - Add pinning logic and subject management
- `public/style.css` - Update card styles and layout

### Data Structure
```javascript
const subjects = [
  {
    name: "Subject Name",
    url: "./resources/semX/subject/index.html",
    category: "Programming Languages",
    pinned: false
  },
  // ... all subjects
]
```

### localStorage Keys
- `pinnedSubjects`: Array of subject names that are pinned

### JavaScript Modules
- SubjectManager: Handles subject data, categories, pinning
- PinManager: Manages localStorage and pin toggling
- SearchManager: Updated for new structure

## Migration Notes
- All existing subject URLs remain unchanged
- Theme selector and git features preserved
- Mobile responsive behavior maintained
- Search functionality enhanced for new layout

## Future Enhancements (Not Implemented)
- Recently visited tracking
- Category filtering dropdown
- Drag-and-drop reordering
- Subject ratings/favorites beyond pinning

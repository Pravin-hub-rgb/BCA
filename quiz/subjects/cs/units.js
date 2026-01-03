// quiz/subjects/cs/units.js
const csUnits = [
    {
        id: 1,
        name: "Fundamentals of Communication",
        description: "Basic concepts of communication, types of communication, barriers to communication, and communication models."
    },
    {
        id: 2,
        name: "Business Correspondence",
        description: "Business letters, emails, memos, reports, and professional writing formats."
    },
    {
        id: 3,
        name: "Presentation Skills",
        description: "Oral presentations, visual aids, body language, and effective speaking techniques."
    },
    {
        id: 4,
        name: "Group Communication and Interviews",
        description: "Meetings, group discussions, interviews, and interpersonal communication skills."
    },
    {
        id: 5,
        name: "Technical Writing and Documentation",
        description: "Technical reports, user manuals, proposals, and professional documentation."
    }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.csUnits = csUnits;
}

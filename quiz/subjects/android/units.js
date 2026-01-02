// Android Programming Units Configuration
const androidUnits = [
    {
        id: 1,
        name: "Introduction to Android",
        description: "Introduction of Android, OHA, Features of Android, History, versions, Android Architecture, Android core building blocks, Android Emulator. Configuring Android Development Environment: Downloading and installing JDK and Netbeans, Downloading and installing Android Studio. Creating First Android App: Creating new Android Project, Creating AVD. Android project files: Android Manifest.xml, MainActivity.java, R.java, activity_main.xml etc. Android Tools: DVM, AVD Manager, Android SDK Manager, Android Emulator, DDMS, resource folder.",
        questionCount: 20
    },
    {
        id: 2,
        name: "App Components",
        description: "Activity, Service, Broadcast Receiver, and Content Provider. Activity: Creating an Activity, Starting an Activity, Lifecycle of an Activity. Views: Button, Text View, Edit Text, Radio Button, Image View, Toast, Adapter, Spinner, List View, Grid View, ToggleButton, AutocompleteTextview.",
        questionCount: 20
    },
    {
        id: 3,
        name: "Intents and User Interface",
        description: "What is Intent, Why Intent? Types of Intent, Intent Filters. Android Menu. User Interface: layout types and attributes, UI controls. Event handling. Widgets: CheckBox, RadioButton, Alert Dialog, List View, Date Picker, Time Picker, Progress Bar.",
        questionCount: 20
    },
    {
        id: 4,
        name: "SQLite Database",
        description: "Introduction to SQLite Database and SQLiteOpenHelper class. Querying a database: Inserting, searching, updating and deleting a record.",
        questionCount: 20
    },
    {
        id: 5,
        name: "Telephony and Sensors",
        description: "Understanding TelephonyManager class, display phone information, phone call state. SMS: Introduction of SmsManager Class, Sending and receiving sms. Introduction of Sensor devices.",
        questionCount: 20
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.androidUnits = androidUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = androidUnits;
}

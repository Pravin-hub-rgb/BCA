// Android Programming Quiz Questions
const androidQuestions = {
    1: [ // Unit 1: Introduction to Android (20 questions)
        {
            question: "What does OHA stand for in Android context?",
            options: ["Open Handset Alliance", "Open Hardware Alliance", "Operating System Helper Application", "Object Handler Architecture"],
            correct: 0
        },
        {
            question: "Which of the following is NOT a core building block of Android?",
            options: ["Activity", "Service", "Broadcast Receiver", "Web Browser"],
            correct: 3
        },
        {
            question: "What does DVM stand for in Android development?",
            options: ["Dynamic Virtual Machine", "Dalvik Virtual Machine", "Device Virtual Manager", "Data Virtual Memory"],
            correct: 1
        },
        {
            question: "Which file contains the metadata about the Android application?",
            options: ["MainActivity.java", "R.java", "AndroidManifest.xml", "activity_main.xml"],
            correct: 2
        },
        {
            question: "What is the purpose of AVD Manager in Android development?",
            options: ["Manage Android Virtual Devices", "Handle Application Version Data", "Control Android View Dimensions", "Monitor Application Virtual Display"],
            correct: 0
        },
        {
            question: "Which programming language is primarily used for Android app development?",
            options: ["Python", "Java", "C++", "Ruby"],
            correct: 1
        },
        {
            question: "What is the name of the Android application framework layer?",
            options: ["Linux Kernel", "Libraries", "Application Framework", "Applications"],
            correct: 2
        },
        {
            question: "Which tool is used to debug Android applications?",
            options: ["AVD Manager", "SDK Manager", "DDMS", "Emulator"],
            correct: 2
        },
        {
            question: "What does APK stand for?",
            options: ["Android Package Kit", "Android Programming Kit", "Application Package", "Android Package"],
            correct: 0
        },
        {
            question: "Which component is responsible for the Android user interface?",
            options: ["Linux Kernel", "Application Framework", "Libraries", "Runtime"],
            correct: 1
        },
        {
            question: "What is the role of AndroidManifest.xml?",
            options: ["Store application code", "Define application components", "Manage databases", "Handle user input"],
            correct: 1
        },
        {
            question: "Which of these is NOT an Android development tool?",
            options: ["Android Studio", "Eclipse", "Visual Studio Code", "Photoshop"],
            correct: 3
        },
        {
            question: "What is the purpose of the R.java file?",
            options: ["Store resource IDs", "Handle runtime errors", "Manage activities", "Control services"],
            correct: 0
        },
        {
            question: "Which Android version introduced the Material Design?",
            options: ["Android 4.0", "Android 5.0", "Android 6.0", "Android 7.0"],
            correct: 1
        },
        {
            question: "What is the primary function of the Android Emulator?",
            options: ["Compile code", "Test applications", "Manage databases", "Create layouts"],
            correct: 1
        },
        {
            question: "Which company originally developed Android?",
            options: ["Apple", "Microsoft", "Google", "Samsung"],
            correct: 2
        },
        {
            question: "What does SDK stand for in Android development?",
            options: ["Software Development Kit", "System Development Kit", "Standard Development Kit", "Secure Development Kit"],
            correct: 0
        },
        {
            question: "Which file extension is used for Android layout files?",
            options: [".java", ".xml", ".json", ".html"],
            correct: 1
        },
        {
            question: "What is the purpose of Gradle in Android development?",
            options: ["Code editor", "Build system", "Database manager", "UI designer"],
            correct: 1
        },
        {
            question: "Which Android component manages application resources?",
            options: ["Activity", "Service", "Resource Manager", "Package Manager"],
            correct: 3
        }
    ],
    2: [ // Unit 2: App Components (20 questions)
        {
            question: "Which of the following is NOT an Android app component?",
            options: ["Activity", "Service", "Broadcast Receiver", "Web Service"],
            correct: 3
        },
        {
            question: "What is the first callback method called when an Activity is created?",
            options: ["onStart()", "onCreate()", "onResume()", "onRestart()"],
            correct: 1
        },
        {
            question: "Which UI component is used to display a list of scrollable items?",
            options: ["TextView", "Button", "ListView", "ImageView"],
            correct: 2
        },
        {
            question: "What is Toast in Android?",
            options: ["A type of Button", "A small popup message", "A layout container", "An input field"],
            correct: 1
        },
        {
            question: "Which component is used to perform long-running operations in the background?",
            options: ["Activity", "Service", "Broadcast Receiver", "Content Provider"],
            correct: 1
        },
        {
            question: "Which method is called when an Activity becomes visible to the user?",
            options: ["onCreate()", "onStart()", "onResume()", "onVisible()"],
            correct: 1
        },
        {
            question: "What is the purpose of a Content Provider?",
            options: ["Manage UI layouts", "Share data between apps", "Handle user input", "Control app lifecycle"],
            correct: 1
        },
        {
            question: "Which component is used to receive system-wide broadcast announcements?",
            options: ["Activity", "Service", "Broadcast Receiver", "Content Provider"],
            correct: 2
        },
        {
            question: "What does the 'setContentView()' method do?",
            options: ["Sets the app theme", "Loads the UI layout", "Manages fragments", "Handles permissions"],
            correct: 1
        },
        {
            question: "Which UI component allows users to enter text input?",
            options: ["TextView", "Button", "EditText", "ImageView"],
            correct: 2
        },
        {
            question: "What is the purpose of the 'findViewById()' method?",
            options: ["Create new views", "Find views by ID", "Delete views", "Update view properties"],
            correct: 1
        },
        {
            question: "Which component runs in the background without UI?",
            options: ["Activity", "Fragment", "Service", "Dialog"],
            correct: 2
        },
        {
            question: "What is a Fragment in Android?",
            options: ["A type of Service", "A portion of UI", "A database table", "A network request"],
            correct: 1
        },
        {
            question: "Which method is called when an Activity is no longer visible?",
            options: ["onStop()", "onPause()", "onDestroy()", "onHide()"],
            correct: 0
        },
        {
            question: "What does the 'Adapter' class do in Android?",
            options: ["Manage databases", "Connect data to views", "Handle network calls", "Process images"],
            correct: 1
        },
        {
            question: "Which UI component displays images?",
            options: ["TextView", "Button", "ListView", "ImageView"],
            correct: 3
        },
        {
            question: "What is the purpose of a Spinner?",
            options: ["Display text", "Show dropdown list", "Handle clicks", "Store data"],
            correct: 1
        },
        {
            question: "Which component manages app data persistence?",
            options: ["Activity", "Service", "Content Provider", "Broadcast Receiver"],
            correct: 2
        },
        {
            question: "What does the 'onPause()' method indicate?",
            options: ["App is starting", "Activity is pausing", "Activity is resuming", "App is closing"],
            correct: 1
        },
        {
            question: "Which UI component is used for multi-line text display?",
            options: ["TextView", "EditText", "Button", "CheckBox"],
            correct: 0
        }
    ],
    3: [ // Unit 3: Intents and User Interface (20 questions)
        {
            question: "What is the primary purpose of an Intent in Android?",
            options: ["To store data", "To communicate between components", "To handle user input", "To manage layouts"],
            correct: 1
        },
        {
            question: "Which of the following is NOT a type of Intent?",
            options: ["Explicit Intent", "Implicit Intent", "Internal Intent", "Pending Intent"],
            correct: 2
        },
        {
            question: "Which layout attribute is used to specify how much space a view should occupy?",
            options: ["layout_width", "layout_height", "layout_weight", "layout_gravity"],
            correct: 2
        },
        {
            question: "What is the purpose of an Intent Filter?",
            options: ["To filter user input", "To declare component capabilities", "To manage activity lifecycle", "To handle exceptions"],
            correct: 1
        },
        {
            question: "Which widget displays a dialog with a title and up to three buttons?",
            options: ["Toast", "Snackbar", "AlertDialog", "ProgressDialog"],
            correct: 2
        },
        {
            question: "What is the difference between Explicit and Implicit Intents?",
            options: ["Explicit specifies component, Implicit doesn't", "Explicit is for activities, Implicit for services", "Explicit is faster, Implicit is slower", "Explicit is internal, Implicit is external"],
            correct: 0
        },
        {
            question: "Which layout arranges views in a vertical column?",
            options: ["LinearLayout", "RelativeLayout", "FrameLayout", "TableLayout"],
            correct: 0
        },
        {
            question: "What does the 'onClick' attribute in XML do?",
            options: ["Changes view color", "Sets click handler method", "Modifies view size", "Updates view text"],
            correct: 1
        },
        {
            question: "Which method is called when a button is clicked?",
            options: ["onButtonClick()", "onClick()", "onTouch()", "onPress()"],
            correct: 1
        },
        {
            question: "What is the purpose of a RadioGroup?",
            options: ["Group radio buttons together", "Create radio stations", "Manage radio frequencies", "Control radio signals"],
            correct: 0
        },
        {
            question: "Which widget shows progress of an operation?",
            options: ["SeekBar", "ProgressBar", "RatingBar", "ScrollBar"],
            correct: 1
        },
        {
            question: "What does the 'android:id' attribute do?",
            options: ["Sets view color", "Assigns unique identifier", "Defines view size", "Controls view position"],
            correct: 1
        },
        {
            question: "Which layout allows overlapping of views?",
            options: ["LinearLayout", "RelativeLayout", "FrameLayout", "GridLayout"],
            correct: 2
        },
        {
            question: "What is the purpose of a CheckBox?",
            options: ["Single selection", "Multiple selection", "Text input", "Image display"],
            correct: 1
        },
        {
            question: "Which method shows a date picker dialog?",
            options: ["showDatePicker()", "DatePickerDialog.show()", "openDatePicker()", "createDatePicker()"],
            correct: 1
        },
        {
            question: "What is a Menu in Android?",
            options: ["Food ordering system", "Options panel", "Navigation drawer", "Settings panel"],
            correct: 1
        },
        {
            question: "Which attribute controls view visibility?",
            options: ["android:visible", "android:visibility", "android:show", "android:display"],
            correct: 1
        },
        {
            question: "What does 'wrap_content' mean for layout dimensions?",
            options: ["Fill parent", "Fixed size", "Shrink to content", "Match parent"],
            correct: 2
        },
        {
            question: "Which widget allows users to select a time?",
            options: ["DatePicker", "TimePicker", "CalendarView", "ClockView"],
            correct: 1
        },
        {
            question: "What is the purpose of an ImageButton?",
            options: ["Display text", "Show images only", "Clickable image", "Store images"],
            correct: 2
        }
    ],
    4: [ // Unit 4: SQLite Database (20 questions)
        {
            question: "Which class is used to create and manage SQLite databases in Android?",
            options: ["SQLiteDatabase", "SQLiteOpenHelper", "SQLiteManager", "SQLiteHandler"],
            correct: 1
        },
        {
            question: "Which method is called to create the database and tables?",
            options: ["onCreate()", "onOpen()", "onUpgrade()", "onDowngrade()"],
            correct: 0
        },
        {
            question: "What does the 'rawQuery()' method return?",
            options: ["JSONObject", "Cursor", "JSONArray", "SQLiteDatabase"],
            correct: 1
        },
        {
            question: "Which operation is used to modify existing records in SQLite?",
            options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
            correct: 1
        },
        {
            question: "What is the return type of the 'insert()' method in SQLite?",
            options: ["int", "long", "boolean", "String"],
            correct: 1
        },
        {
            question: "Which method is used to open a database connection?",
            options: ["openDatabase()", "getWritableDatabase()", "createDatabase()", "connectDatabase()"],
            correct: 1
        },
        {
            question: "What does the 'execSQL()' method do?",
            options: ["Execute select queries", "Execute non-select queries", "Close database", "Create tables"],
            correct: 1
        },
        {
            question: "Which interface is used to iterate through query results?",
            options: ["Iterator", "Cursor", "ResultSet", "QueryResult"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'db.close()' method?",
            options: ["Delete database", "Close connection", "Save changes", "Update records"],
            correct: 1
        },
        {
            question: "Which method is called when the database version changes?",
            options: ["onCreate()", "onOpen()", "onUpgrade()", "onVersionChange()"],
            correct: 2
        },
        {
            question: "What does the 'moveToNext()' method do in Cursor?",
            options: ["Move to previous row", "Move to next row", "Move to first row", "Move to last row"],
            correct: 1
        },
        {
            question: "Which data type is NOT supported by SQLite?",
            options: ["INTEGER", "TEXT", "BLOB", "XML"],
            correct: 3
        },
        {
            question: "What is the purpose of a database helper class?",
            options: ["Create UI", "Manage database operations", "Handle network calls", "Process images"],
            correct: 1
        },
        {
            question: "Which method retrieves a string value from Cursor?",
            options: ["getString()", "getText()", "getValue()", "getData()"],
            correct: 0
        },
        {
            question: "What does the 'PRIMARY KEY' constraint do?",
            options: ["Allow duplicates", "Ensure unique values", "Sort data", "Index columns"],
            correct: 1
        },
        {
            question: "Which method is used to delete records from database?",
            options: ["remove()", "delete()", "erase()", "clear()"],
            correct: 1
        },
        {
            question: "What is the purpose of 'AUTOINCREMENT' in SQLite?",
            options: ["Auto-sort data", "Auto-generate IDs", "Auto-update records", "Auto-delete old data"],
            correct: 1
        },
        {
            question: "Which class provides methods for database operations?",
            options: ["SQLiteHelper", "DatabaseManager", "SQLiteDatabase", "DBHandler"],
            correct: 2
        },
        {
            question: "What does 'FOREIGN KEY' constraint establish?",
            options: ["Data types", "Relationships between tables", "Column names", "Table sizes"],
            correct: 1
        },
        {
            question: "Which method is used to update existing records?",
            options: ["modify()", "change()", "update()", "edit()"],
            correct: 2
        }
    ],
    5: [ // Unit 5: Telephony and Sensors (20 questions)
        {
            question: "Which class is used to access phone state information in Android?",
            options: ["PhoneManager", "TelephonyManager", "CallManager", "PhoneStateManager"],
            correct: 1
        },
        {
            question: "What permission is required to send SMS messages?",
            options: ["SEND_SMS", "WRITE_SMS", "READ_SMS", "MANAGE_SMS"],
            correct: 0
        },
        {
            question: "Which class is used to send and receive SMS messages?",
            options: ["SMSManager", "SmsManager", "MessageManager", "TextManager"],
            correct: 1
        },
        {
            question: "What method is called when an SMS is received?",
            options: ["onSMSReceived()", "onReceive()", "onMessageReceived()", "onSMSArrival()"],
            correct: 1
        },
        {
            question: "Which sensor type detects device acceleration?",
            options: ["Gyroscope", "Accelerometer", "Magnetometer", "Proximity"],
            correct: 1
        },
        {
            question: "What permission is required to access phone call state?",
            options: ["CALL_PHONE", "READ_PHONE_STATE", "ACCESS_CALL_LOG", "MANAGE_CALLS"],
            correct: 1
        },
        {
            question: "Which method is used to send SMS messages?",
            options: ["sendTextMessage()", "sendSMS()", "dispatchMessage()", "sendMessage()"],
            correct: 0
        },
        {
            question: "What does the Proximity sensor detect?",
            options: ["Device orientation", "Nearby objects", "Light intensity", "Magnetic fields"],
            correct: 1
        },
        {
            question: "Which sensor measures device rotation?",
            options: ["Accelerometer", "Gyroscope", "Magnetometer", "Barometer"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'SmsMessage' class?",
            options: ["Send messages", "Receive and parse SMS", "Manage contacts", "Handle calls"],
            correct: 1
        },
        {
            question: "Which method registers a BroadcastReceiver for SMS?",
            options: ["registerReceiver()", "registerSMSReceiver()", "addSMSListener()", "setSMSHandler()"],
            correct: 0
        },
        {
            question: "What does the Gyroscope sensor measure?",
            options: ["Linear acceleration", "Angular velocity", "Magnetic field", "Atmospheric pressure"],
            correct: 1
        },
        {
            question: "Which permission is needed for internet access?",
            options: ["ACCESS_NETWORK", "INTERNET", "ACCESS_WIFI", "NETWORK_ACCESS"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'SensorManager' class?",
            options: ["Manage device sensors", "Control phone calls", "Handle SMS", "Monitor battery"],
            correct: 0
        },
        {
            question: "Which sensor detects ambient light?",
            options: ["Light sensor", "Proximity sensor", "Temperature sensor", "Pressure sensor"],
            correct: 0
        },
        {
            question: "What method gets the default SmsManager instance?",
            options: ["getDefault()", "getInstance()", "getSmsManager()", "getDefaultManager()"],
            correct: 1
        },
        {
            question: "Which sensor type measures atmospheric pressure?",
            options: ["Barometer", "Altimeter", "Pressure sensor", "Atmospheric sensor"],
            correct: 0
        },
        {
            question: "What permission is required to read SMS messages?",
            options: ["SEND_SMS", "READ_SMS", "RECEIVE_SMS", "MANAGE_SMS"],
            correct: 1
        },
        {
            question: "Which class manages sensor events?",
            options: ["SensorEvent", "SensorEventListener", "SensorHandler", "SensorController"],
            correct: 1
        },
        {
            question: "What does the Magnetometer sensor detect?",
            options: ["Acceleration", "Rotation", "Magnetic fields", "Temperature"],
            correct: 2
        }
    ]
};

// Quiz configuration based on selected units
function getQuestionDistribution(selectedUnits) {
    const distribution = { 1: 15, 2: 20, 3: 25, 4: 30, 5: 40 };
    return distribution[selectedUnits.length] || 15;
}

function generateQuizQuestions(selectedUnits) {
    let allQuestions = [];
    let totalQuestions = getQuestionDistribution(selectedUnits);
    let questionsPerUnit = Math.floor(totalQuestions / selectedUnits.length);
    let extraQuestions = totalQuestions % selectedUnits.length;

    // Collect questions from selected units
    selectedUnits.forEach(unit => {
        const unitQuestions = androidQuestions[unit];
        if (unitQuestions) {
            allQuestions.push(...unitQuestions);
        }
    });

    // Shuffle all questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Return required number of questions
    return allQuestions.slice(0, totalQuestions);
}

// Make available globally
if (typeof window !== 'undefined') {
    window.generateQuizQuestions = generateQuizQuestions;
}

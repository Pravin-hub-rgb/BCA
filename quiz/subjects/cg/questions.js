// Computer Graphics Quiz Questions
// Format: { question: "Question text", options: ["A", "B", "C", "D"], correct: index }

const quizQuestions = {
    unit1: [
        { question: "What is the primary function of computer graphics?", options: ["Data storage", "Creating and manipulating visual content", "Network communication", "Hardware design"], correct: 1 },
        { question: "How does a pixel contribute to digital image formation?", options: ["Stores sound data", "Represents a single color value at a specific location", "Controls monitor brightness", "Manages file compression"], correct: 1 },
        { question: "Which color model uses Red, Green, and Blue as primary colors?", options: ["CMY", "RGB", "HSV", "CMYK"], correct: 1 },
        { question: "What is rasterization in computer graphics?", options: ["Converting vectors to pixels", "Converting pixels to vectors", "Color correction", "Image compression"], correct: 0 },
        { question: "What is the main difference between raster and vector images?", options: ["Vector images use pixels", "Raster images can scale infinitely", "Vector images are made of pixels", "Raster images use mathematical formulas"], correct: 3 },
        { question: "How does pixel density affect image quality?", options: ["Higher density means fewer colors", "Higher density creates sharper, more detailed images", "Density only affects file size", "Density controls animation speed"], correct: 1 },
        { question: "Which display device uses a cathode ray tube?", options: ["LED", "LCD", "CRT", "Plasma"], correct: 2 },
        { question: "What is the purpose of dithering in computer graphics?", options: ["To compress images", "To create more colors from limited palettes", "To convert vector to raster", "To reduce file size"], correct: 1 },
        { question: "What does anti-aliasing do?", options: ["Adds noise to images", "Smooths jagged edges", "Compresses images", "Changes colors"], correct: 1 },
        { question: "Which of these is NOT an advantage of computer graphics?", options: ["Easy communication", "Animation capabilities", "Data storage", "Interactive applications"], correct: 2 },
        { question: "What is scan conversion?", options: ["Converting digital to analog", "Converting continuous shapes to discrete pixels", "Color conversion", "Image compression"], correct: 1 },
        { question: "What type of computer graphics displays static content without user interaction?", options: ["Interactive graphics", "Real-time graphics", "Non-interactive graphics", "Dynamic graphics"], correct: 2 },
        { question: "Which color model is subtractive?", options: ["RGB", "CMY", "HSV", "HSL"], correct: 1 },
        { question: "What is the purpose of aspect ratio?", options: ["To measure image size", "To define proportional relationship between width and height", "To calculate pixel density", "To determine color depth"], correct: 1 },
        { question: "Why is 24-bit color depth commonly used?", options: ["It uses less memory", "It provides 16.7 million colors for realistic images", "It only works with black and white", "It compresses images automatically"], correct: 1 },
        { question: "Which display technology uses gas-filled cells?", options: ["LCD", "LED", "Plasma", "CRT"], correct: 2 },
        { question: "What is the main advantage of flat panel displays over CRT?", options: ["Higher resolution", "Thinner and lighter design", "Better color accuracy", "Lower cost"], correct: 1 },
        { question: "What does half-toning achieve in printing?", options: ["Creates 3D effects", "Produces shades using dot patterns", "Compresses images", "Adds watermarks"], correct: 1 },
        { question: "What is the difference between raster scan and random scan CRT?", options: ["Random scan is faster", "Raster scan covers entire screen systematically", "Random scan uses more power", "Raster scan is cheaper"], correct: 1 },
        { question: "What is the main application of computer graphics in education?", options: ["Data storage", "Interactive simulations and training", "Hardware manufacturing", "Network security"], correct: 1 }
    ],
    unit2: [
        { question: "What is a vector in computer graphics?", options: ["A single pixel", "A quantity with magnitude and direction", "A color value", "A matrix element"], correct: 1 },
        { question: "What is the result of vector addition?", options: ["A scalar value", "A new vector", "A matrix", "A point"], correct: 1 },
        { question: "What does the dot product of two vectors give?", options: ["A perpendicular vector", "A scalar value representing alignment", "A cross product", "A unit vector"], correct: 1 },
        { question: "What is the result of the cross product of two vectors?", options: ["A scalar", "A vector perpendicular to both", "A parallel vector", "A unit vector"], correct: 1 },
        { question: "What is a matrix in computer graphics?", options: ["A single number", "A 2D array of numbers", "A vector", "A point"], correct: 1 },
        { question: "What operation combines transformations in matrices?", options: ["Addition", "Subtraction", "Multiplication", "Division"], correct: 2 },
        { question: "What does the transpose of a matrix do?", options: ["Changes rows to columns", "Multiplies by itself", "Finds the inverse", "Adds all elements"], correct: 0 },
        { question: "When does a matrix have an inverse?", options: ["Always", "When determinant is zero", "When determinant is non-zero", "Never"], correct: 2 },
        { question: "What is parametric representation used for?", options: ["Storing colors", "Describing curves and lines mathematically", "Compressing images", "Converting vectors"], correct: 1 },
        { question: "What is the slope-intercept form of a line?", options: ["ax + by = c", "y = mx + b", "x = at + b", "r = a + bθ"], correct: 1 },
        { question: "What are parametric equations of a circle?", options: ["x = a cos t, y = b sin t", "x = a t, y = b t", "x = a + t, y = b + t", "x = a t², y = b t²"], correct: 0 },
        { question: "What is a conic section?", options: ["A 3D shape", "A curve formed by intersecting a cone with a plane", "A straight line", "A circle only"], correct: 1 },
        { question: "What is the parametric equation for an ellipse?", options: ["x = a cos t, y = b sin t", "x = a t, y = b t", "x = a t², y = b t²", "x = a + t, y = b + t"], correct: 0 },
        { question: "What is the parametric equation for a parabola?", options: ["x = t, y = a t²", "x = a cos t, y = b sin t", "x = a t, y = b t", "x = a + t, y = b - t"], correct: 0 },
        { question: "What does the scalar product (dot product) measure?", options: ["Perpendicular distance", "Angle between vectors", "Vector magnitude", "Matrix size"], correct: 1 },
        { question: "What is the geometric interpretation of the cross product?", options: ["Angle measurement", "Area of parallelogram", "Distance calculation", "Scalar magnitude"], correct: 1 },
        { question: "What is the identity matrix?", options: ["All zeros", "All ones", "Ones on diagonal, zeros elsewhere", "Random values"], correct: 2 },
        { question: "What is the purpose of homogeneous coordinates?", options: ["Color representation", "Translation using matrices", "Image compression", "Vector normalization"], correct: 1 },
        { question: "What is the distance formula in 3D?", options: ["√(x² + y²)", "√(x² + y² + z²)", "x² + y² + z²", "√((x2-x1)² + (y2-y1)² + (z2-z1)²)"], correct: 3 },
        { question: "What is the parametric form of a line?", options: ["x = x1 + t(x2-x1), y = y1 + t(y2-y1)", "x = a t, y = b t", "x = a cos t, y = b sin t", "x = t, y = a t²"], correct: 0 }
    ],
    unit3: [
        { question: "How does the Digital Differential Analyzer line drawing algorithm work?", options: ["Uses only integer calculations", "Uses floating-point arithmetic to calculate pixel positions", "Draws curves only", "Works with 3D coordinates"], correct: 1 },
        { question: "What is the main advantage of Bresenham's algorithm?", options: ["Uses floating point", "Uses only integer arithmetic", "Slower than Digital Differential Analyzer", "More complex"], correct: 1 },
        { question: "What is rasterization?", options: ["Converting vectors to pixels", "Converting pixels to vectors", "Color correction", "Image compression"], correct: 0 },
        { question: "What is the midpoint circle algorithm used for?", options: ["Line drawing", "Circle drawing", "Rectangle filling", "Polygon clipping"], correct: 1 },
        { question: "What is clipping in computer graphics?", options: ["Adding colors", "Removing parts outside a region", "Compressing images", "Scaling objects"], correct: 1 },
        { question: "What algorithm is commonly used for line clipping?", options: ["Cohen-Sutherland algorithm", "Bresenham's algorithm", "Digital Differential Analyzer algorithm", "Midpoint algorithm"], correct: 0 },
        { question: "What is polygon clipping?", options: ["Clipping lines only", "Clipping closed shapes", "Clipping circles", "Clipping text"], correct: 1 },
        { question: "What is the purpose of inside tests?", options: ["Color testing", "Determining if points are inside shapes", "Speed testing", "Memory testing"], correct: 1 },
        { question: "What is the odd-even rule used for?", options: ["Line drawing", "Point-in-polygon testing", "Circle generation", "Color mixing"], correct: 1 },
        { question: "What is flood fill algorithm used for?", options: ["Line drawing", "Filling connected regions", "Clipping", "Transformations"], correct: 1 },
        { question: "What is boundary fill different from flood fill?", options: ["Uses different colors", "Stops at boundary color", "Faster", "Uses less memory"], correct: 1 },
        { question: "What is scan-line polygon fill?", options: ["Filling by scanning lines", "Filling circles", "Filling rectangles", "Filling lines"], correct: 0 },
        { question: "What does the decision parameter in Bresenham's algorithm determine?", options: ["Color choice", "Next pixel position", "Line thickness", "Drawing speed"], correct: 1 },
        { question: "What is the time complexity of Digital Differential Analyzer algorithm?", options: ["O(1)", "O(n)", "O(n²)", "O(log n)"], correct: 1 },
        { question: "What is aliasing?", options: ["Smooth edges", "Jagged edges on diagonal lines", "Color distortion", "Image compression"], correct: 1 },
        { question: "What does anti-aliasing do?", options: ["Creates jagged edges", "Smooths jagged edges", "Increases file size only", "Changes colors"], correct: 1 },
        { question: "What is the Cohen-Sutherland algorithm?", options: ["Circle drawing", "Line clipping", "Polygon filling", "Color conversion"], correct: 1 },
        { question: "What is the Sutherland-Hodgman algorithm used for?", options: ["Line clipping", "Polygon clipping", "Circle clipping", "Text clipping"], correct: 1 },
        { question: "What is 4-connected flood fill?", options: ["Uses 8 directions", "Uses 4 directions (up, down, left, right)", "Uses diagonals only", "Uses 6 directions"], correct: 1 },
        { question: "What is the main disadvantage of recursive flood fill?", options: ["Too slow", "Uses too much memory (stack overflow)", "Not accurate", "Complex code"], correct: 1 }
    ],
    unit4: [
        { question: "What is 2D transformation?", options: ["Changing 3D objects", "Changing position/size/orientation in 2D", "Color changes", "File compression"], correct: 1 },
        { question: "What is translation in 2D?", options: ["Rotation", "Moving object to new position", "Scaling", "Reflection"], correct: 1 },
        { question: "What is scaling in 2D?", options: ["Moving object", "Changing object size", "Rotating object", "Reflecting object"], correct: 1 },
        { question: "What is reflection?", options: ["Size change", "Mirror image across axis", "Position change", "Rotation"], correct: 1 },
        { question: "What is shearing?", options: ["Size change", "Distorting shape", "Color change", "Position change"], correct: 1 },
        { question: "What is homogeneous coordinates used for?", options: ["Colors", "Translation with matrices", "Compression", "Animation"], correct: 1 },
        { question: "What is 3D transformation?", options: ["2D operations", "Operations in 3D space", "Color operations", "File operations"], correct: 1 },
        { question: "What is parallel projection?", options: ["Realistic view", "Technical drawing view", "Perspective view", "Orthogonal view"], correct: 1 },
        { question: "What is perspective projection?", options: ["Technical view", "Realistic depth view", "Parallel lines", "Flat view"], correct: 1 },
        { question: "What is visible surface determination?", options: ["Color selection", "Finding which surfaces are visible", "Size calculation", "Position finding"], correct: 1 },
        { question: "What is hidden surface removal?", options: ["Adding surfaces", "Removing invisible surfaces", "Creating surfaces", "Moving surfaces"], correct: 1 },
        { question: "What is back-face culling?", options: ["Front face removal", "Back face removal", "Side face removal", "All face removal"], correct: 1 },
        { question: "What is the painter's algorithm?", options: ["Color mixing", "Drawing far to near", "Near to far drawing", "Random drawing"], correct: 1 },
        { question: "What is Z-buffer algorithm?", options: ["Color buffer", "Depth buffer for visibility", "Size buffer", "Position buffer"], correct: 1 },
        { question: "What are the types of parallel projection?", options: ["One-point, two-point", "Orthographic, oblique", "Perspective, isometric", "Front, side, top"], correct: 1 },
        { question: "What is orthographic projection?", options: ["Angled view", "Perpendicular projection", "Perspective view", "Oblique view"], correct: 1 },
        { question: "What is oblique projection?", options: ["Perpendicular", "Angled projection", "Perspective", "Isometric"], correct: 1 },
        { question: "What is one-point perspective?", options: ["One vanishing point", "Two vanishing points", "Three vanishing points", "No vanishing points"], correct: 0 },
        { question: "What is Binary Space Partitioning tree used for?", options: ["Color sorting", "Space partitioning for visibility", "Size sorting", "Position sorting"], correct: 1 },
        { question: "What is the difference between parallel and perspective projection?", options: ["Colors", "Convergence of lines", "Speed", "Memory"], correct: 1 }
    ],
    unit5: [
        { question: "What is computer animation?", options: ["Static images", "Sequence of images creating motion", "Sound effects", "Color changes"], correct: 1 },
        { question: "What is squash and stretch principle?", options: ["Color change", "Showing object deformation", "Position change", "Size change"], correct: 1 },
        { question: "What is anticipation in animation?", options: ["After action", "Preparing for action", "During action", "After completion"], correct: 1 },
        { question: "What is follow through?", options: ["Leading action", "Continuing after main action stops", "Preparation", "Main action"], correct: 1 },
        { question: "What are the types of animation?", options: ["2D, 3D, Stop-motion", "Color, size, shape", "Fast, slow, medium", "Big, small, medium"], correct: 0 },
        { question: "What is keyframe animation?", options: ["Every frame drawn", "Only key frames drawn", "Random frames", "No frames"], correct: 1 },
        { question: "What is morphing?", options: ["Shape changing", "Smooth transformation between shapes", "Color changing", "Size changing"], correct: 1 },
        { question: "What is scripting animation?", options: ["Visual creation", "Code-based animation", "Drawing-based", "Sound-based"], correct: 1 },
        { question: "What is procedural animation?", options: ["Manual creation", "Rule-based automatic generation", "Keyframe based", "Morphing based"], correct: 1 },
        { question: "What is stochastic animation?", options: ["Predictable", "Random variations", "Fixed patterns", "Manual control"], correct: 1 },
        { question: "What is the main purpose of graphics standards?", options: ["Making graphics slower", "Ensuring compatibility across different systems", "Reducing image quality", "Increasing file sizes"], correct: 1 },
        { question: "What are graphics primitives?", options: ["Complex 3D models", "Basic drawing elements like lines and circles", "Color palettes", "Animation frames"], correct: 1 },
        { question: "What is a graphics workstation?", options: ["A place to work", "A device interface for graphics input/output", "A type of monitor", "A drawing tool"], correct: 1 },
        { question: "What is a graphics metafile?", options: ["A 3D model file", "A stored sequence of graphics commands", "An image format", "A color profile"], correct: 1 },
        { question: "What is the function of a polyline primitive?", options: ["Drawing single points", "Drawing connected line segments", "Filling shapes", "Creating text"], correct: 1 },
        { question: "What is the function of a polymarker primitive?", options: ["Drawing lines", "Drawing symbols at multiple points", "Filling areas", "Creating curves"], correct: 1 },
        { question: "What is the function of a fill area primitive?", options: ["Drawing lines", "Filling enclosed areas with color", "Drawing markers", "Creating text"], correct: 1 },
        { question: "What is the benefit of graphics standards?", options: ["Making development harder", "Enabling cross-platform compatibility", "Reducing performance", "Increasing complexity"], correct: 1 },
        { question: "What is the difference between input and output workstations?", options: ["Size and weight", "Data flow direction (input vs display)", "Processing speed", "Memory capacity"], correct: 1 },
        { question: "Why are graphics metafiles important?", options: ["They take more storage", "They provide device-independent graphics storage", "They only work on specific devices", "They require special software"], correct: 1 }
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
        const unitQuestions = quizQuestions[`unit${unit}`];
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

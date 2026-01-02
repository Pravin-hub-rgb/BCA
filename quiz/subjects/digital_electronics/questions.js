// Digital Electronics Quiz Questions
const digitalElectronicsQuestions = {
    1: [ // Unit 1: Introduction to Digital Electronics & Number Systems (20 questions)
        {
            question: "What is the primary difference between analog and digital systems?",
            options: ["Analog systems use continuous signals, digital systems use discrete signals", "Analog systems are faster than digital systems", "Digital systems use more power than analog systems", "Analog systems are cheaper than digital systems"],
            correct: 0
        },
        {
            question: "Which number system uses only two digits (0 and 1)?",
            options: ["Decimal", "Octal", "Hexadecimal", "Binary"],
            correct: 3
        },
        {
            question: "What is the result of adding binary numbers 1011 and 1101?",
            options: ["10100", "11000", "10011", "11100"],
            correct: 1
        },
        {
            question: "What is 1's complement of binary number 10110?",
            options: ["01001", "01010", "01101", "01011"],
            correct: 0
        },
        {
            question: "What is 2's complement of binary number 1101?",
            options: ["0011", "0010", "0100", "0011 with carry"],
            correct: 0
        },
        {
            question: "Which code represents characters using 7 bits?",
            options: ["EBCDIC", "ASCII", "BCD", "Gray code"],
            correct: 1
        },
        {
            question: "What is Gray code used for?",
            options: ["Arithmetic operations", "Reducing switching transitions", "Character representation", "Error detection"],
            correct: 1
        },
        {
            question: "What is BCD short for?",
            options: ["Binary Coded Data", "Binary Coded Decimal", "Binary Character Display", "Binary Code Division"],
            correct: 1
        },
        {
            question: "What is Excess-3 code?",
            options: ["BCD plus 3", "BCD minus 3", "BCD multiplied by 3", "BCD divided by 3"],
            correct: 0
        },
        {
            question: "Which error detection method uses parity bits?",
            options: ["Hamming code", "CRC", "Parity checking", "Checksum"],
            correct: 2
        },
        {
            question: "What is overflow in binary arithmetic?",
            options: ["Result too small", "Result too large for register", "Division by zero", "Invalid operation"],
            correct: 1
        },
        {
            question: "What is underflow in floating point arithmetic?",
            options: ["Result too large", "Result too small to represent", "Division by zero", "Invalid exponent"],
            correct: 1
        },
        {
            question: "Which number system uses base 16?",
            options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
            correct: 3
        },
        {
            question: "What is the advantage of digital systems over analog systems?",
            options: ["More accurate", "Less affected by noise", "Easier to design", "All of the above"],
            correct: 3
        },
        {
            question: "What is fixed point representation?",
            options: ["Varying decimal places", "Fixed number of decimal places", "No decimal places", "Variable precision"],
            correct: 1
        },
        {
            question: "What is floating point representation?",
            options: ["Fixed precision", "Variable precision with exponent", "Only integers", "Fixed decimal places"],
            correct: 1
        },
        {
            question: "Which code detects and corrects errors?",
            options: ["Parity code", "Hamming code", "Gray code", "BCD"],
            correct: 1
        },
        {
            question: "What is EBCDIC?",
            options: ["Extended Binary Coded Decimal Interchange Code", "European Binary Code", "Electronic Binary Code", "Extended Binary Character Interchange Code"],
            correct: 0
        },
        {
            question: "How many bits does ASCII use?",
            options: ["6", "7", "8", "16"],
            correct: 1
        },
        {
            question: "What is the binary equivalent of decimal 10?",
            options: ["1010", "1100", "1001", "1110"],
            correct: 0
        }
    ],
    2: [ // Unit 2: Logic Gates & Boolean Algebra (20 questions)
        {
            question: "Which gate produces HIGH output only when all inputs are HIGH?",
            options: ["OR gate", "AND gate", "NOT gate", "XOR gate"],
            correct: 1
        },
        {
            question: "Which gate produces HIGH output when any input is HIGH?",
            options: ["AND gate", "NOT gate", "OR gate", "NAND gate"],
            correct: 2
        },
        {
            question: "What does a NOT gate do?",
            options: ["Inverts the input", "Adds inputs", "Multiplies inputs", "Compares inputs"],
            correct: 0
        },
        {
            question: "Which gate is known as universal gate?",
            options: ["AND gate", "OR gate", "NAND gate", "XOR gate"],
            correct: 2
        },
        {
            question: "What is De Morgan's theorem?",
            options: ["Associative law", "Distributive law", "Complement law", "Absorption law"],
            correct: 2
        },
        {
            question: "What is Karnaugh Map used for?",
            options: ["Circuit design", "Boolean function minimization", "Truth table creation", "Gate selection"],
            correct: 1
        },
        {
            question: "What is Sum of Product (SOP) form?",
            options: ["AND terms ORed together", "OR terms ANDed together", "NAND terms", "NOR terms"],
            correct: 0
        },
        {
            question: "What is Product of Sum (POS) form?",
            options: ["AND terms ORed together", "OR terms ANDed together", "NAND terms", "NOR terms"],
            correct: 1
        },
        {
            question: "Which gate produces HIGH output when inputs are different?",
            options: ["AND gate", "OR gate", "XOR gate", "NAND gate"],
            correct: 2
        },
        {
            question: "What is the Boolean expression for OR gate?",
            options: ["A × B", "A + B", "A'", "A ⊕ B"],
            correct: 1
        },
        {
            question: "What is the Boolean expression for AND gate?",
            options: ["A × B", "A + B", "A'", "A ⊕ B"],
            correct: 0
        },
        {
            question: "What is the Boolean expression for XOR gate?",
            options: ["A × B", "A + B", "A'", "A ⊕ B"],
            correct: 3
        },
        {
            question: "Which law states A × (B + C) = A × B + A × C?",
            options: ["Associative law", "Distributive law", "Commutative law", "Absorption law"],
            correct: 1
        },
        {
            question: "What is canonical form?",
            options: ["Simplified form", "Standard form with all variables", "Minimized form", "Truth table form"],
            correct: 1
        },
        {
            question: "Which gate is equivalent to AND gate followed by NOT?",
            options: ["OR gate", "XOR gate", "NAND gate", "NOR gate"],
            correct: 2
        },
        {
            question: "Which gate is equivalent to OR gate followed by NOT?",
            options: ["AND gate", "XOR gate", "NAND gate", "NOR gate"],
            correct: 3
        },
        {
            question: "What is Boolean algebra used for?",
            options: ["Circuit analysis", "Digital circuit design", "Logic simplification", "All of the above"],
            correct: 3
        },
        {
            question: "What is minimization in Boolean algebra?",
            options: ["Increasing complexity", "Reducing number of gates", "Adding variables", "Creating truth tables"],
            correct: 1
        },
        {
            question: "Which theorem states (A × B)' = A' + B'?",
            options: ["Associative", "Distributive", "De Morgan's", "Absorption"],
            correct: 2
        },
        {
            question: "What is the identity element for OR operation?",
            options: ["1", "0", "A", "A'"],
            correct: 1
        }
    ],
    3: [ // Unit 3: Combinational Circuits (25 questions)
        {
            question: "What is a half adder?",
            options: ["Adds three bits", "Adds two bits without carry", "Adds two bits with carry", "Subtracts two bits"],
            correct: 1
        },
        {
            question: "What is a full adder?",
            options: ["Adds two bits only", "Adds three bits (two numbers + carry)", "Adds four bits", "Subtracts bits"],
            correct: 1
        },
        {
            question: "What does a multiplexer do?",
            options: ["Selects one input from many", "Broadcasts to many outputs", "Adds numbers", "Stores data"],
            correct: 0
        },
        {
            question: "What does a demultiplexer do?",
            options: ["Selects one input", "Routes one input to multiple outputs", "Adds numbers", "Stores data"],
            correct: 1
        },
        {
            question: "What is an encoder?",
            options: ["Converts binary to decimal", "Converts decimal to binary", "Adds numbers", "Stores data"],
            correct: 1
        },
        {
            question: "What is a decoder?",
            options: ["Converts binary to decimal", "Converts decimal to binary", "Adds numbers", "Stores data"],
            correct: 0
        },
        {
            question: "How many inputs does a 4-input multiplexer have?",
            options: ["2", "4 data + 2 select", "8", "16"],
            correct: 1
        },
        {
            question: "How many outputs does a 3-to-8 decoder have?",
            options: ["3", "8", "11", "16"],
            correct: 1
        },
        {
            question: "What is serial adder?",
            options: ["Adds all bits at once", "Adds bits one by one", "Adds in parallel", "Subtracts numbers"],
            correct: 1
        },
        {
            question: "What is parallel adder?",
            options: ["Adds bits sequentially", "Adds all bits simultaneously", "Adds in series", "Subtracts numbers"],
            correct: 1
        },
        {
            question: "What is the output of half adder for inputs 1,1?",
            options: ["0,0", "0,1", "1,0", "1,1"],
            correct: 2
        },
        {
            question: "What is the output of full adder for inputs 1,1,1?",
            options: ["0,0", "0,1", "1,0", "1,1"],
            correct: 3
        },
        {
            question: "How many half adders are needed for full adder?",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            question: "What is the function of select lines in multiplexer?",
            options: ["Choose output", "Choose input to connect", "Control operation", "Enable/disable"],
            correct: 1
        },
        {
            question: "What is priority encoder?",
            options: ["Encodes in any order", "Encodes highest priority first", "Encodes lowest priority first", "No priority"],
            correct: 1
        },
        {
            question: "How many AND gates are needed for 4x1 multiplexer?",
            options: ["2", "4", "6", "8"],
            correct: 1
        },
        {
            question: "What is binary to decimal encoder?",
            options: ["4 inputs to 2 outputs", "2 inputs to 4 outputs", "8 inputs to 3 outputs", "3 inputs to 8 outputs"],
            correct: 2
        },
        {
            question: "What is decimal to binary decoder?",
            options: ["4 inputs to 16 outputs", "4 inputs to 2 outputs", "2 inputs to 4 outputs", "3 inputs to 8 outputs"],
            correct: 2
        },
        {
            question: "What is combinational circuit?",
            options: ["Has memory", "No memory, output depends on current inputs", "Has feedback", "Sequential"],
            correct: 1
        },
        {
            question: "What is the advantage of combinational circuits?",
            options: ["Store data", "Fast operation", "Have memory", "Complex design"],
            correct: 1
        },
        {
            question: "Which is not a combinational circuit?",
            options: ["Adder", "Multiplexer", "Counter", "Decoder"],
            correct: 2
        },
        {
            question: "What is the function of enable input in decoder?",
            options: ["Select output", "Enable/disable all outputs", "Choose input", "Control operation"],
            correct: 1
        },
        {
            question: "How many select lines for 16x1 multiplexer?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is BCD adder?",
            options: ["Adds binary numbers", "Adds BCD numbers with correction", "Adds decimal numbers", "Adds hexadecimal"],
            correct: 1
        },
        {
            question: "What is magnitude comparator?",
            options: ["Adds numbers", "Compares magnitudes", "Multiplies numbers", "Divides numbers"],
            correct: 1
        }
    ],
    4: [ // Unit 4: Sequential Circuits & Flip-Flops (30 questions)
        {
            question: "What is sequential circuit?",
            options: ["No memory", "Has memory, output depends on current and past inputs", "Only combinational", "No feedback"],
            correct: 1
        },
        {
            question: "What is flip-flop?",
            options: ["Combinational circuit", "Basic memory element", "Logic gate", "Adder circuit"],
            correct: 1
        },
        {
            question: "Which flip-flop has S and R inputs?",
            options: ["JK flip-flop", "T flip-flop", "D flip-flop", "SR flip-flop"],
            correct: 3
        },
        {
            question: "What is race condition in SR flip-flop?",
            options: ["Fast operation", "Unpredictable output when S=R=1", "Slow operation", "No output"],
            correct: 1
        },
        {
            question: "Which flip-flop has J and K inputs?",
            options: ["SR flip-flop", "T flip-flop", "JK flip-flop", "D flip-flop"],
            correct: 2
        },
        {
            question: "What is the characteristic of JK flip-flop?",
            options: ["No toggle", "Toggle when J=K=1", "Always toggle", "Never toggle"],
            correct: 1
        },
        {
            question: "Which flip-flop has T input?",
            options: ["SR flip-flop", "JK flip-flop", "T flip-flop", "D flip-flop"],
            correct: 2
        },
        {
            question: "What does T flip-flop do when T=1?",
            options: ["Reset", "Set", "Toggle", "No change"],
            correct: 2
        },
        {
            question: "Which flip-flop has D input?",
            options: ["SR flip-flop", "JK flip-flop", "T flip-flop", "D flip-flop"],
            correct: 3
        },
        {
            question: "What is the characteristic of D flip-flop?",
            options: ["Toggle", "Follow input", "Reset dominant", "Set dominant"],
            correct: 1
        },
        {
            question: "What is master-slave flip-flop?",
            options: ["Two flip-flops in series", "Two flip-flops in parallel", "One flip-flop", "No flip-flops"],
            correct: 0
        },
        {
            question: "What is register?",
            options: ["Single flip-flop", "Group of flip-flops", "Logic gate", "Counter"],
            correct: 1
        },
        {
            question: "What is shift register?",
            options: ["Stores data", "Shifts data left/right", "Counts pulses", "Adds numbers"],
            correct: 1
        },
        {
            question: "How many flip-flops in 4-bit register?",
            options: ["2", "4", "8", "16"],
            correct: 1
        },
        {
            question: "What is serial shift register?",
            options: ["All bits shift simultaneously", "Bits shift one by one", "No shifting", "Random shifting"],
            correct: 1
        },
        {
            question: "What is parallel shift register?",
            options: ["Bits shift one by one", "All bits shift simultaneously", "No shifting", "Circular shifting"],
            correct: 1
        },
        {
            question: "What is the excitation table for?",
            options: ["Present to next state conversion", "Input to output conversion", "Gate operation", "Adder function"],
            correct: 0
        },
        {
            question: "How to convert JK to T flip-flop?",
            options: ["Connect J=K", "Connect J=K=1", "Connect J=1, K=0", "Connect J=0, K=1"],
            correct: 0
        },
        {
            question: "What is the advantage of edge-triggered flip-flops?",
            options: ["Slow operation", "Reduced race conditions", "More complex", "Less reliable"],
            correct: 1
        },
        {
            question: "What is asynchronous input in flip-flop?",
            options: ["Clock input", "Direct set/reset", "Data input", "Enable input"],
            correct: 1
        },
        {
            question: "What is synchronous input?",
            options: ["Direct input", "Clocked input", "Asynchronous", "Random input"],
            correct: 1
        },
        {
            question: "What is the difference between latch and flip-flop?",
            options: ["Same thing", "Latch is level-triggered, flip-flop is edge-triggered", "Latch is faster", "Flip-flop has memory"],
            correct: 1
        },
        {
            question: "What is the purpose of clock in flip-flop?",
            options: ["Power supply", "Synchronization signal", "Data input", "Output signal"],
            correct: 1
        },
        {
            question: "What is the characteristic equation of JK flip-flop?",
            options: ["Q' = Q", "Q' = JQ' + K'Q", "Q' = T ⊕ Q", "Q' = D"],
            correct: 1
        },
        {
            question: "What is the characteristic equation of D flip-flop?",
            options: ["Q' = JQ' + K'Q", "Q' = T ⊕ Q", "Q' = D", "Q' = SR"],
            correct: 2
        },
        {
            question: "What is the characteristic equation of T flip-flop?",
            options: ["Q' = JQ' + K'Q", "Q' = T ⊕ Q", "Q' = D", "Q' = SR"],
            correct: 1
        },
        {
            question: "What is the characteristic equation of SR flip-flop?",
            options: ["Q' = S + R'Q", "Q' = T ⊕ Q", "Q' = D", "Q' = SR"],
            correct: 0
        },
        {
            question: "What is the application of registers?",
            options: ["Counting", "Data storage and transfer", "Logic operations", "Arithmetic operations"],
            correct: 1
        },
        {
            question: "What is the application of shift registers?",
            options: ["Data storage", "Serial to parallel conversion", "Counting", "Logic operations"],
            correct: 1
        },
        {
            question: "What is bidirectional shift register?",
            options: ["Shifts one direction", "Shifts both directions", "No shifting", "Circular shifting"],
            correct: 1
        },
        {
            question: "What is universal shift register?",
            options: ["Shifts left only", "Shifts right only", "Shifts both ways and parallel load", "No shifting"],
            correct: 2
        }
    ],
    5: [ // Unit 5: Counters (40 questions)
        {
            question: "What is a counter in digital electronics?",
            options: ["Memory device", "Sequential circuit that counts pulses", "Logic gate", "Adder circuit"],
            correct: 1
        },
        {
            question: "What is asynchronous counter?",
            options: ["All flip-flops clocked together", "Flip-flops clocked by previous output", "External clock only", "No clock"],
            correct: 1
        },
        {
            question: "What is synchronous counter?",
            options: ["Ripple counter", "All flip-flops clocked together", "Asynchronous counter", "Ring counter"],
            correct: 1
        },
        {
            question: "What is modulus of counter?",
            options: ["Number of flip-flops", "Number of states", "Clock frequency", "Output frequency"],
            correct: 1
        },
        {
            question: "What is ripple counter?",
            options: ["Synchronous counter", "Asynchronous counter", "Ring counter", "Johnson counter"],
            correct: 1
        },
        {
            question: "What is up counter?",
            options: ["Counts down", "Counts from 0 up", "Counts randomly", "No counting"],
            correct: 1
        },
        {
            question: "What is down counter?",
            options: ["Counts up", "Counts from maximum down to 0", "Counts randomly", "No counting"],
            correct: 1
        },
        {
            question: "What is up-down counter?",
            options: ["Counts one direction", "Counts both directions", "No counting", "Random counting"],
            correct: 1
        },
        {
            question: "What is ring counter?",
            options: ["Binary counter", "Circular shift counter", "BCD counter", "Decade counter"],
            correct: 1
        },
        {
            question: "What is Johnson counter?",
            options: ["Binary counter", "Twisted ring counter", "BCD counter", "Decade counter"],
            correct: 1
        },
        {
            question: "How many states in 3-bit binary counter?",
            options: ["3", "6", "8", "16"],
            correct: 2
        },
        {
            question: "What is the modulus of 3-bit binary counter?",
            options: ["3", "6", "8", "16"],
            correct: 2
        },
        {
            question: "What is decade counter?",
            options: ["Counts to 10", "Counts to 8", "Counts to 16", "Counts to 4"],
            correct: 0
        },
        {
            question: "What is BCD counter?",
            options: ["Binary counter", "Decimal counter 0-9", "Hexadecimal counter", "Octal counter"],
            correct: 1
        },
        {
            question: "What is the advantage of synchronous counter?",
            options: ["Simple design", "Faster operation", "Less components", "Slower operation"],
            correct: 1
        },
        {
            question: "What is the disadvantage of asynchronous counter?",
            options: ["Complex design", "Propagation delay", "More expensive", "Slower operation"],
            correct: 1
        },
        {
            question: "What is the lockout condition in asynchronous counter?",
            options: ["Normal operation", "Counter stuck in state", "Fast counting", "No output"],
            correct: 1
        },
        {
            question: "How to prevent lockout in asynchronous counter?",
            options: ["Use synchronous design", "Add extra logic", "Use different flip-flops", "Reduce clock speed"],
            correct: 1
        },
        {
            question: "What is the frequency division in counter?",
            options: ["Input = output", "Output = input ÷ 2^n", "Output = input × 2^n", "No division"],
            correct: 1
        },
        {
            question: "What is the application of counters?",
            options: ["Data storage", "Frequency division, counting events", "Logic operations", "Arithmetic operations"],
            correct: 1
        },
        {
            question: "What is programmable counter?",
            options: ["Fixed modulus", "Variable modulus", "No modulus", "Random modulus"],
            correct: 1
        },
        {
            question: "What is the difference between counter and register?",
            options: ["Same thing", "Counter counts, register stores", "Counter stores, register counts", "No difference"],
            correct: 1
        },
        {
            question: "What is the terminal count in counter?",
            options: ["Starting count", "Maximum count", "Current count", "Minimum count"],
            correct: 1
        },
        {
            question: "What is truncated counter?",
            options: ["Full count", "Partial sequence count", "Complete sequence", "Random count"],
            correct: 1
        },
        {
            question: "What is the count sequence of 3-bit up counter?",
            options: ["000, 001, 010, 011, 100, 101, 110, 111", "000, 111, 110, 101, 100, 011, 010, 001", "Random sequence", "000, 001, 010, 011"],
            correct: 0
        },
        {
            question: "What is the count sequence of 3-bit down counter?",
            options: ["000, 001, 010, 011, 100, 101, 110, 111", "111, 110, 101, 100, 011, 010, 001, 000", "Random sequence", "111, 101, 011, 001"],
            correct: 1
        },
        {
            question: "How many flip-flops in decade counter?",
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "What is the modulus of decade counter?",
            options: ["8", "10", "16", "4"],
            correct: 1
        },
        {
            question: "What is the modulus of 4-bit binary counter?",
            options: ["8", "16", "4", "2"],
            correct: 1
        },
        {
            question: "What is the advantage of Johnson counter?",
            options: ["Simple design", "50% duty cycle", "Complex design", "Slow operation"],
            correct: 1
        },
        {
            question: "What is the advantage of ring counter?",
            options: ["Many states", "Self-starting", "Complex design", "Slow operation"],
            correct: 1
        },
        {
            question: "What is the disadvantage of ring counter?",
            options: ["Self-starting", "Wastes flip-flops", "Fast operation", "Simple design"],
            correct: 1
        },
        {
            question: "What is the disadvantage of Johnson counter?",
            options: ["50% duty cycle", "Wastes flip-flops", "Self-starting", "Simple design"],
            correct: 1
        },
        {
            question: "How to design MOD-6 counter?",
            options: ["3 flip-flops", "3 flip-flops with feedback", "4 flip-flops", "2 flip-flops"],
            correct: 1
        },
        {
            question: "What is the count sequence of MOD-6 counter?",
            options: ["000, 001, 010, 011, 100, 101, 000...", "000, 001, 010, 011, 100, 101, 110, 111, 000...", "000, 111, 110, 101, 100, 011, 000...", "Random sequence"],
            correct: 0
        },
        {
            question: "What is the application of digital clock?",
            options: ["No counters", "Uses counters for timekeeping", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of frequency divider?",
            options: ["Multiply frequency", "Divide frequency using counters", "Change frequency", "Stop frequency"],
            correct: 1
        },
        {
            question: "What is the application of digital clock?",
            options: ["No counters", "Uses counters for timekeeping", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of traffic light controller?",
            options: ["No counters", "Uses counters for timing", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of vending machine?",
            options: ["No counters", "Uses counters for counting money", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of digital clock?",
            options: ["No counters", "Uses counters for timekeeping", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of frequency divider?",
            options: ["Multiply frequency", "Divide frequency using counters", "Change frequency", "Stop frequency"],
            correct: 1
        },
        {
            question: "What is the application of traffic light controller?",
            options: ["No counters", "Uses counters for timing", "Uses registers", "Uses adders"],
            correct: 1
        },
        {
            question: "What is the application of vending machine?",
            options: ["No counters", "Uses counters for counting money", "Uses registers", "Uses adders"],
            correct: 1
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
        const unitQuestions = digitalElectronicsQuestions[unit];
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

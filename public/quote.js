
// ************************** Luck line *****************

const funnyLuckLines = {
    line1: "Break a pencil! Just not literally... exams can be stressful, you know. 😆😆",
    line2: "Look at you,😂 Whole semester you did nothing, now you tryna study!😂😂",
    line3: "Remember, you're so smart that Einstein would ask you for help! 🧠🤣🤣",
    line4: "Aced it in your dreams last night, right? Now go make it a reality! 💪😂😂",
    line5: "Knock those exam questions out of the park like a boss! 🎯😂😂",
    line6: "You've got this! Show that exam who's the real boss around here! 😎😂😂",
    line7: "May the examiners be blinded by the brilliance of your answers! ✨🤣🤣",
    line8: "Go rock that exam like it's a sold-out concert! 🎸😂😂",
    line9: "Sending you a truckload of good vibes and a crate of brainpower! 🚚🧠😂😂",
    line10: "Remember, exams are just a tiny hurdle on the road to world domination! 🌍😂😂",
    line11: "May the exam questions be as easy as operating a microwave! 🍿😂😂",
    line12: "If anyone can turn an exam into a piece of cake, it's definitely you! 🍰😂😂",
    line13: "Remember, exams are like mosquitoes: annoying, but you have the power to swat them away! 🦟💪😂😂",
    line14: "You're about to show that exam who's the real smarty-pants around here! 🤓😂😂",
    line15: "Time to channel your inner genius and leave that exam trembling in fear! 🧠💥😂😂",
    line16: "You've studied so hard that even the exam paper is afraid to challenge you! 💪😂😂",
    line17: "May your exam answers be as sharp and on point as a perfectly timed punchline! 🎯😂😂",
    line18: "Remember, exams are like puzzles, and you're the master puzzle solver! 🧩😂😂",
    line19: "Wishing you an exam experience smoother than a buttered slide! 🧈😂😂",
    line20: "Just imagine the exam paper wearing a 'Kick Me' sign. You've got this! 😂😂",
    line21: "A single piece of paper can't decide your future, but your answersheet can! 📝📝😂😂",
    line22: "May the force of knowledge be with you! 😂😂"
};
const luckLineElement = document.getElementById('quote');

let currentIndex = 1; // Start from line1

function updateLuckLine() {
    luckLineElement.textContent = funnyLuckLines[`line${currentIndex}`];
    currentIndex = (currentIndex % 22) + 1; // Update to the next line
}

updateLuckLine(); // Initial update

setInterval(updateLuckLine, 10000); // Update every 10 seconds
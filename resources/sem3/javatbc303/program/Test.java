// class Test {
//     public static void main(String[] args) {
//         StringBuilder str = new StringBuilder("Henry Ford!");
//         strRev(str);
//     }

//     public static void strRev(StringBuilder str) {
//         StringBuilder rev = new StringBuilder();
//         for (int i = str.length() - 1; i >= 0; i--) {
//             rev.append(str.charAt(i));
//         }
//         System.out.println(rev);
//     }
// }
import java.util.Random;
import java.util.Scanner;

public class Test {

    public static void main(String[] args) {

        // A simple text scanner for user input...
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);

        // Constructor to generate random number for the player...
        Random random = new Random();

        // Given Range of the random number to be generated & maximum attempt the play
        // can have...
        int minimum = 1;
        int maximum = 100;
        int maxAttempts = 10;

        // Variable to keep count for the final result...
        int totalAttempts = 0;
        int totalRounds = 0;

        boolean playAgain = true;

        System.out.println("WELCOME TO NUMBER GUESSING GAME");

        while (playAgain) {
            // Creating a random number by the computer for a given range between minimum &
            // maximum...
            int randomNumber = random.nextInt(maximum - minimum + 1) + minimum;
            System.out.println("\nRound : " + (totalRounds + 1));
            System.out.println("Computer has generate a random number between " + minimum + " and " + maximum);
            System.out.println("Try to guess the number in " + maxAttempts + " attempts");

            int attempt = 0;
            boolean roundWon = false;

            // do...while loop to check user number & computer generated number matches &
            // count number of attempts...
            do {
                System.out.print("Attempt " + (attempt + 1) + "/" + maxAttempts + " : Guess the number : ");
                int userGuess = scanner.nextInt();
                attempt++;

                if (userGuess > randomNumber) {
                    System.out.println("The number is to high");
                } else if (userGuess < randomNumber) {
                    System.out.println("The number is to low");
                } else {
                    System.out.println("Congrulations!!! You guess the right number.");
                    roundWon = true;
                }
            } while (!roundWon && attempt < maxAttempts);

            // Keeping count of Total_Rounds & Total_attempt played by the user...
            if (roundWon) {
                totalRounds++;
                totalAttempts += attempt;
            } else {
                System.out.println("Sorry! You were unable to guess the number. The number was : " + randomNumber);
            }

            // Asking user to play the game again...
            System.out.println("Do you want to play again [yes/no]");
            String playAgainChoice = scanner.next();
            playAgain = playAgainChoice.equalsIgnoreCase("yes");
        }

        // Displaying the final score of the game...
        System.out.println("Game Over ! Thank you for playing.");
        System.out.println("The Final Score is ");
        System.out.println("Total Rounds Won : " + totalRounds);
        System.out.println("Total Attempts : " + totalAttempts);

    }

}
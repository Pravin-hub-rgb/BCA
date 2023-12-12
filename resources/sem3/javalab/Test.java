import java.util.Scanner;

interface Account {
    public void deposit();

    public void withdraw();

    public void displayBalances();
}

class SavingsAccount implements Account {
    Scanner sc = new Scanner(System.in);
    int wallet = 0;

    public void deposit() {
        System.out.println("Enter amount to deposit : ");
        wallet += sc.nextInt();
    }

    public void withdraw() {
        System.out.println("Enter the amount you want to withdraw : ");
        int amount = sc.nextInt();
        wallet -= amount;
    }

    public void displayBalances() {
        System.out.println("Your Balance is = " + wallet);
    }
}

class CurrentAccount implements Account {
    Scanner sc = new Scanner(System.in);
    int wallet = 0;

    public void deposit() {
        System.out.println("Enter amount to deposit : ");
        wallet += sc.nextInt();
    }

    public void withdraw() {
        System.out.println("Enter the amount you want to withdraw : ");
        int amount = sc.nextInt();
        wallet -= amount;
    }

    public void displayBalances() {
        System.out.println("Your Balance is = " + wallet);
    }
}

class Test
{
    public static void main(String[] args)
    {
        SavingsAccount sa = new SavingsAccount();
        sa.deposit();
        sa.withdraw();
        sa.displayBalances();

        CurrentAccount ca = new CurrentAccount();
        ca.deposit();
        ca.withdraw();
        ca.displayBalances();
    }
}
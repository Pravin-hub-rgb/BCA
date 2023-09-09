// // Write a Java program to create an Animal interface with method called
// bark()
// // that takes no arguments and returns void. Create a Dog class that
// implements
// // Animal interface and overrides Bark() method to print "Dog is barking".

// interface Animal {
// public void bark();
// }

// class Dog implements Animal {
// public void bark() {
// System.out.println("Dog is barking");
// }
// }

// class Zoo {
// public static void main(String[] args) {
// Dog firstDog = new Dog();
// firstDog.bark();
// }
// }

// Write a Java program to create a banking system with three classes -
// BankAccount, SavingsAccount and CurrentAccount. The bank should have a list
// of accounts and methods for adding them. Account should be an interface
// with methods deposit, withdraw, calculateInterest and displayBalances.
// SavingsAccount and CurrentAccount should implement the Account interface and
// have their own unique methods.

interface Account {
    public int toDeposit(int value);

    public int withdraw(int value);

    public int calInterest(int value);

    public int displayBalances(int value);
}

class SavingsAccount implements Account {
    int fund = 0;
    public int toDeposit(int value){
        fund += value;
        return fund;
    }

    public int withdraw(int value)
    {
        fund -= value;
        return fund;
    }

    public int calInterest(int value){
        
    }

    public int displayBalances(int value);
}
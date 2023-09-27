public class Test {
    public static void main(String[] args) throws InterruptedException {
        Thread thread1 = new Thread(() -> {
            System.out.println("Thread 1: Running");
        });

        Thread thread2 = new Thread(() -> {
            System.out.println("Thread 2: Running");
        });

        thread1.start(); // Thread 1 transitions from "New" to "Runnable" to "Running."
        thread2.start(); // Thread 2 transitions from "New" to "Runnable" to "Running."

        Thread.sleep(1000);

        thread1.interrupt(); // Thread 1 transitions to "Blocked" if asleep, or "Runnable" if not interrupted.
        Thread.sleep(1000);

        thread1.join(); // Wait for Thread 1 to finish its execution.
        thread2.join(); // Wait for Thread 2 to finish its execution.

        System.out.println("Thread 1 state: " + thread1.getState());
        System.out.println("Thread 2 state: " + thread2.getState());
    }
}

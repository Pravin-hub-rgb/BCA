class Table2 extends Thread {
    public void run() {
        try {
            int i = 2;
            int ans = 0;
            for (int j = 1; j <= 10; j++) {
                ans = i * j;
                System.out.println(ans);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}
class Table3 extends Thread {
    public void run() {
        try {
            int i = 3;
            int ans = 0;
            for (int j = 1; j <= 10; j++) {
                ans = i * j;
                System.out.println(ans);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}
class Table4 extends Thread {
    public void run() {
        try {
            int i = 4;
            int ans = 0;
            for (int j = 1; j <= 10; j++) {
                ans = i * j;
                System.out.println(ans);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}
class Table5 extends Thread {
    public void run() {
        try {
            int i = 5;
            int ans = 0;
            for (int j = 1; j <= 10; j++) {
                ans = i * j;
                System.out.println(ans);
                System.out.println("----");
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

class Table {
    public static void main(String[] args) {
        Table2 obj2;
        obj2 = new Table2();
        Table3 obj3;
        obj3 = new Table3();
        Table4 obj4;
        obj4 = new Table4();
        Table5 obj5;
        obj5 = new Table5();

        obj2.start();
        // obj3.start();
        // obj4.start();
        obj5.start();

    }
}
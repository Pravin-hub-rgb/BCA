// class Thread1 extends Thread 
// {

//     public void run() {
//         int ans;
//         for (int j = 1; j <= 10; j++) {
//             ans = j * 5;
//             System.out.println(ans);
//             try {
//                 Thread.sleep(500); // Sleep for 1 second
//             } catch (InterruptedException e) {
//                 // Handle the interrupted exception (e.g., log it or take appropriate action)
//                 e.printStackTrace();
//             }
//         }
//     }
// }

// class Test {
//     public static void main(String[] args) {
//         Thread1 Th1 = new Thread1();
//         Th1.start();
//         Thread1 Th2 = new Thread1();
//         Th2.start();
//     }
// }

/*
class ThreadCheck implements Runnable{
    public void run()
    {
        // printing table of two
        // alwasys go for try & catch block
        try
        {
            int i = 2;
            int ans = 0;
            for(int j = 1; j<=10; j++)
            {
                ans = i * j;
                System.out.println(ans);
                Thread.sleep(1000);
            }
        }
        catch(InterruptedException e)
        {
            System.out.println(e);
        }
    }
}
class Test
{
    public static void main(String[] args) {
        ThreadCheck obj = new ThreadCheck();
        // start is the method of thread class that's why the following is wrong
        // obj.start();
        Thread th = new Thread(obj); // we can do this
        th.start();
    }
}
*/

/*
class ThreadCheck extends Thread {
    public void run() {
        // printing table of two
        // alwasys go for try & catch block
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

class Test {
    public static void main(String[] args) {
        ThreadCheck obj;
        obj = new ThreadCheck();
        ThreadCheck obj2;
        obj2 = new ThreadCheck();

        obj.start();
        obj2.start();

    }
}
*/
class ThreadCheck extends Thread {
    public void run() {
        // printing table of two
        // alwasys go for try & catch block
        try {
            int i = 2;
            int ans = 0;
            for (int j = 1; j <= 10; j++) {
                ans = i * j;
                System.out.println(ans);
                Thread.sleep(2000);
            }
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}

class Test {
    public static void main(String[] args) {
        ThreadCheck[] th = new ThreadCheck[1000];
        for(int i = 0; i < th.length;i++)
        {
            th[i] = new ThreadCheck();
        }
        for(int i = 0; i < th.length;i++)
        {
            th[i].start();
        }

    }
}
public class Matrix {
    public static void main(String[] args) {
        int mat1[][] = new int[2][2];
        int mat2[][] = new int[2][2];
        int mat3[][] = new int[2][2];
        System.out.println("Initialized the value for first matrix");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                mat1[i][j] = i + j + 10;
            }
        }
        System.out.println("Initialized the value for second matrix");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                mat2[i][j] = i + j + 13;
            }
        }
        System.out.println("Multiplying the matrices");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                mat3[i][j] = mat1[i][j] * mat2[i][j];
            }
        }
        System.out.println("Displaying the multiplied matrix");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                System.out.print(mat3[i][j] + " ");
            }
            System.out.println("");
        }
    }
}

import java.sql.*;

public class CRUD 
{
    public static void main(String[] args) throws Exception
    {
        // Corrected JDBC driver class name
        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/college", "root", "Root1234@");
        Statement st = con.createStatement();
        st.executeUpdate("create table student(rno int, name varchar(20), branch varchar(20))");
        st.close();
        con.close();
    }
}

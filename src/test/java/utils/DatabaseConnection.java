package utils;

import java.sql.*;

public class DatabaseConnection {
    static Connection con;

    public static void initDataBase() throws Exception {
        //1- connect to database:
        Class.forName("com.mysql.cj.jdbc.Driver");
        con = DriverManager.getConnection("jdbc:mysql://localhost:3306/library", "root", "Ronaldo@18");
    }

    public static ResultSet ExecuteQuery(String query) {
        //2-execute query
        ResultSet re = null;
        try {
            Statement statement = con.createStatement();
            re = statement.executeQuery(query);

        } catch (Exception e) {
            e.printStackTrace();

        }
        return re;
    }

    //    //3-process / print result
//
//        while(re.next())
//
//    {
//        System.out.println(re.getString("bookname"));
//    }
    public static void CloseConnection() throws SQLException {
        //4-close the connection
        con.close();
    }


}

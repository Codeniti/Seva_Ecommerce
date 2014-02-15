<?php


$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'project_database';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");
$query = "SELECT DATE(order_time) AS Date, SUM(Quantity) AS TotalSales
        FROM ss_orders,ss_ordered_carts
        WHERE DATE(order_time) = DATE(NOW())
         group by date;";
mysql_select_db($database,$connect);
 $result = mysql_fetch_assoc(mysql_query($query));
echo "<table align='center'><tr><td></td></tr><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td><tr><td></tr></td></table>";
Echo "<table align='center'><tr><td><h1>Sales Report</h1></td></tr>";
 echo "<tr><td>Todays Date:{$result['Date']}</td></tr><br>";
echo "<tr><td>Total Sale:{$result['TotalSales']}</td></tr></table><br>";
?>
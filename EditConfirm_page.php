<?php
$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'Projectdatabase123';
$table_name='ss_orders';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");

 mysql_select_db($database);
 

$num=$_POST['rno'];
$track_id=$_POST['cti'];
$order_time=$_POST['cot'];
$cust_firstname=$_POST['cfn'];
$cust_lastname=$_POST['cln'];
$cust_email=$_POST['cei'];
$cust_country=$_POST['cc'];
$status=$_POST['updatestatus'];

mysql_query("UPDATE $table_name SET track_id='$track_id',order_time='$order_time',cust_firstname='$cust_firstname',cust_lastname='$cust_lastname',cust_email='$cust_email',cust_country='$cust_country',status='$status' where orderID = '".$num."'");
mysql_close($connect);
print "<p>Customer Order Information Is Updated,Click <a href=orderupdatingpage_admin.html>Here</a> To Continue</p>";
print  "<hr>"
?>

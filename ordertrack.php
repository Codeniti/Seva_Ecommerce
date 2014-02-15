<?php
$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'Projectdatabase123';
$table_name='ss_orders';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");

$num = $_POST["oid"];
$cust_email= $_POST["ceic"];

$query = "SELECT * FROM $table_name WHERE track_id='".$num."' and cust_email='".$cust_email."'";
mysql_select_db($database);
$result = mysql_query ($query,$connect);
$myrow = mysql_fetch_array($result);
$num=$myrow['track_id'];
$order_time=$myrow['order_time'];
$cust_firstname=$myrow['cust_firstname'];
$cust_lastname=$myrow['cust_lastname'];
$cust_email=$myrow['cust_email'];
$cust_country=$myrow['cust_country'];
$status=$myrow['status'];
	
if (!$myrow){
   print "<p>Invaild Order ID Or Email ID,Click <a href=ordertracking_enter.html>Here</a> To Try Again</p>";
}
else {
   print "
   <form name='ordertrack_ordered' action ='ordertrack_ordered.php' method='post'>
   <table align='center'><tr><td>
   <h1>You're Order Status</h1></td></tr></table><hr>
   <table align='center'>
   <tr><td>Order ID</td><td><input type='text' name='rno' id='rno' value='$num' readonly></td></tr>
   <tr><td>Customer First Name</td><td><input type='text' name='cfn' value='$cust_firstname' size='30'   disabled></td></tr><tr><td>Customer LastName:</td><td><input type='text' name='cln' value='$cust_lastname' size='30' disabled></td></tr><tr><td>Order Time:</td><td><input type='text' name='cln' value='$order_time' size='30' disabled></td></tr><tr><td>Customer Email ID:</td><td><input type='text' name='cot' value='$cust_email' size='30' disabled></td></tr><tr><td>Coustomer Country:</td><td><input type='text' name='cc' value='$cust_country' size='30' disabled ></td></tr><tr><td>Order Status:</td><td><input type='text' name='cstatus' value='$status' size='30' disabled></td></tr></table>
  ";
   print "<Table align='center'><tr><td><input type='button' value='Close this window' onclick='self.close()'></tr></td></table>";
   print "<hr>";
   print "<input type='submit' value='Check What You Ordered!' name='coct'></form> ";
}
mysql_close($connect);
?>
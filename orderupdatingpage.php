<?php
$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'Projectdatabase123';
$table_name='ss_orders';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");

$num = $_POST["oid"];
      
$query = "SELECT * FROM $table_name WHERE orderID='".$num."'";
mysql_select_db($database);
$result = mysql_query ($query,$connect);
$myrow = mysql_fetch_array($result);
$num=$myrow['orderID'];
$track_id=$myrow['track_id'];
$order_time=$myrow['order_time'];
$cust_firstname=$myrow['cust_firstname'];
$cust_lastname=$myrow['cust_lastname'];
$cust_email=$myrow['cust_email'];
$cust_country=$myrow['cust_country'];
$status=$myrow['status'];
	
if (!$myrow){
   print "<p>Invaild Order ID Of Customer,Click <a href=orderupdatingpage_admin.html>Here</a> To Try Again</p>";
}
else {
   print "
   <form action='EditConfirm_page.php' method='post'>
   <table align='center'><tr><td>
   <h1>Customer Order Status</h1></td></tr></table><hr>
   <table align='center'>
   <tr><td>Order ID</td><td>$num<input type='hidden' name='rno' id='rno' value='$num' ></td></tr>
   <tr><td>Track ID</td><td><input type='text' name='cti' id='cti' value='$track_id' size='30' readonly></td></tr>
   <tr><td>Customer First Name</td><td><input type='text' name='cfn' id='cfn' value='$cust_firstname' size='30'   readonly></td></tr><tr><td>Customer LastName:</td><td><input type='text' name='cln' id='cln' value='$cust_lastname' size='30' readonly></td></tr><tr><td>Order Time:</td><td><input type='text' name='cot' id='cot' value='$order_time' size='30' readonly></td></tr><tr><td>Customer Email ID:</td><td><input type='text' name='cei' id='cei' value='$cust_email' size='30' readonly></td></tr><tr><td>Coustomer Country:</td><td><input type='text' name='cc' id='cc' value='$cust_country' size='30' readonly></td></tr>
   <tr><td>Order Status:</td><td><select name='updatestatus'>  
               <option Selected>Pending</option>  
               <option>Processing</option>  
               <option>Delivered</option>  
               <option>Cancelled</option>  
          </select>  </td></tr>
                             
<tr><td align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='submit' Value='Update Now!'></td></tr></table></form>";
   print "<hr>";
}
mysql_close($connect);
?>
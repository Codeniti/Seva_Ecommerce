<?php
$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'Projectdatabase123';
$table_name='ss_orders';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");

$num = $_POST["rno"];

$query ="SELECT orderID, productID, name, Quantity
FROM ss_ordered_carts
WHERE track_id ='".$num."'";

mysql_select_db($database);
$result = mysql_query ($query,$connect);
$myrow = mysql_fetch_array($result);
$num=$myrow['orderID'];
$productID=$myrow['productID'];
$name=$myrow['name'];
$Quantity=$myrow['Quantity'];

if (!$myrow){
   print "<p>Opps, We Are Sorry But We Could'nt Find You're Order ,Please Contact Our Support Team!</p>";
}
else {
print "
   <table align='center'>
<tr><td><h1>You Have Order The Following Table</h1></td></tr></table><hr>
<table align='center'>
   <tr><td>Order ID</td></tr><tr><td>$num<input type='text' name='rno' id='rno' value='$num' ></td></tr>
    <tr><td>Product ID</td></tr><tr><td><input type='text' name='cprid' id='cprid' value='$productID' ></td></tr>
	<tr><td>Product Name</td></tr><tr><td><input type='text' name='cprid' id='copn' value='$name' ></td></tr>
	<tr><td>Quantity</td></tr><tr><td><input typu='text' name='coq' value='$Quantity' ></td></tr></table>";
}
mysql_close($connect);
?>
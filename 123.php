<?php


$host = 'localhost';
$user = 'root';
$passwd = '';
$database = 'p_database';
$connect = mysql_connect($host,$user,$passwd) or die("could not connect to database");



$today = DATE("Y-m-d", strtotime("now")); 
$y = DATE("Y-m-d", strtotime("-1 day")); 
$w = DATE("Y-m-d", strtotime("-7 day")); 
$ww = DATE("Y-m-d", strtotime("-14 day")); 
$m = DATE("Y-m-d", strtotime("-30 day")); 
$this_month = DATE("Y-m", strtotime('this month')); 
$last_month = DATE("Y-m", strtotime("-1 month")); 

$result = mysql_query("SELECT DATE(order_time) AS Date, SUM(Quantity) AS TotalSales
FROM ss_orders,ss_ordered_carts 
Where orderID <> 0"); 
$count = mysql_num_rows($result); 

for ($t = 0; $t < $count; $t++) 
{ 
    $row = mysql_fetch_array($result); 
    $date = $row['date']; 

    If ($date == $today) 
    { 
        $TodayCnt++; 
    } 
    If ($date == $y) 
    { 
        $YesterdayCnt++; 
    } 
    If ($date >= $w) 
    { 
        $Last7Cnt++; 
    } 
    If ($date >= $ww) 
    { 
        $Last14Cnt++; 
    } 
    If ($date >= $m) 
    { 
        $Last30Cnt++; 
    } 
    If ($date2 == $this_month) 
    { 
        $ThisMonthCnt++; 
    } 
    If ($date2 == $last_month) 
    { 
        $LastMonthCnt++; 
    } 
} 

echo "<table width=\"700px\"><tr><td>"; 
echo "Product Sales<br><br>Today : $TodayCnt<br>"; 
echo "Yesterday : $YesterdayCnt<br><br>Last 7 days : $Last7Cnt<br>Last 14 days : $Last14Cnt<br> Last 30 days : $Last30Cnt<br><br>This Month : $ThisMonthCnt<br>Last Month : $LastMonthCnt<br><br>All Time Sales : $count</td></tr></table>";

?>
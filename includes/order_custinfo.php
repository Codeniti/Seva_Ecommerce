<?php


	//last order step - providing customer information

	if (isset($_GET["order_custinfo"])) //place order
	{
		$smarty->assign("main_content_template", "order_custinfo.tpl.php");
	}

?>
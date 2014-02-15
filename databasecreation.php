<?php


	//installation routine
	
	ini_set("display_errors", "1");

	session_start();

	if (isset($_POST["install"]))
	{
		if (!is_writable("./cfg/connect.inc.php"))
		{
			$error = "Couldn't rewrite file cfg/connect.inc.php.";
		}
		else
		{
			$f = @fopen("./cfg/connect.inc.php","w");
			$s = "<?php
	//database connection settings

	define('DB_HOST', '".$_POST["db_host"]."'); // database host
	define('DB_USER', '".$_POST["db_user"]."'); // username
	define('DB_PASS', '".$_POST["db_pass"]."'); // password
	define('DB_NAME', '".$_POST["db_name"]."'); // database name
	define('ADMIN_LOGIN', '".base64_encode($_POST["admin_login"])."'); //administrator's login
	define('ADMIN_PASS', '".md5($_POST["admin_pass"])."'); //administrator's login

	//database tables
	include(\"./cfg/tables.inc.php\");

?>";
?><?php

			fputs($f,$s);
			fclose($f);

		}

		//try to connect to the database using new settings and register administrator
		include("./cfg/connect.inc.php");

		//choose database file to include
		include("./includes/database/mysql.php");

		$sel = NULL;
		$conn = db_connect(DB_HOST,DB_USER,DB_PASS);
		if ($conn)
		{
			if (!(db_select_db(DB_NAME))) //database connect failed
			{
				$error =  "Couldn't select database ".DB_NAME."<br>Please make sure this database exists";
			}

		}
		else
			$error = "Couldn't connect to the database<br>Please contact your hosting provider to verify database connection settings";


		if (!isset($error)) //successful!
		{
			//create tables
			include("./includes/database/install/mysql.php");

			$_SESSION["log"] = $_POST["admin_login"];
			$_SESSION["pass"] = $_POST["admin_pass"];

			if (isset($_POST["db_name"])) //fill DB with demo content
			{
				//fill products and categories tables
				$helper = "[#%int!g%#]"; //helper
				if (file_exists("./cfg/demo_database.sql"))
				{
					$f = implode("",file("./cfg/demo_database.sql"));
					$f = explode("INSERT INTO",$f);

					for ($i=1; $i<count($f); $i++)
					{
						db_query(trim("INSERT INTO ".str_replace($helper,"INSERT INTO",$f[$i]))) or die (db_error());
					}
				}

			}

		}
	}

	if (!is_writable("./cfg/connect.inc.php"))
	{
		$error = "File cfg/connect.inc.php is not writable";
	}

?><HTML>

<head>

<link rel=STYLESHEET href="images/installer.css" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Zenolaps Online Shop</title>

<script>

	function validate()
	{
		if (document.form1.db_name.value.length<1)
		{
			alert("Please enter database name");
			return false;
		}
		if (document.form1.admin_login.value.length<1)
		{
			alert("Please enter administrator`s login");
			return false;
		}
		if (document.form1.admin_pass.value.length<1)
		{
			alert("Please enter administrator`s password");
			return false;
		}

		return true;
	}


</script>

</head>

<BODY bgColor=white leftMargin=0 topMargin=0 marginwidth="0" marginheight="0">
<TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD>
     </TD></TR>
    <TR>
    <TD vAlign=top height="100%">
      <TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
        <TBODY>
        <TR>
          <TD class=home-content vAlign=top align=middle 
          background="images/banner-shadow.gif">&nbsp; 
          </TD>
          <TD vAlign=top align=middle width=1 
          background="images/arr.gif"><IMG 
            height=8 src="images/arr.gif" 
            width=1> </TD>
          <TD vAlign=top  width=730>
            <TABLE height="100%" align=middle cellSpacing=0 cellPadding=0 width=730 
              border=0><TBODY>
              <TR>
                <TD vAlign=top align=left bgColor=#faffeb><IMG height=4 
                  src="images/banner-shadow.gif" 
                  width=15 border=0></TD>
                <TD vAlign=top align=left width="100%" bgColor=#faffeb><IMG 
                  height=4 
                  src="images/banner-shadow.gif" 
                  width="100%" border=0></TD>
                <TD vAlign=top><IMG height=4 
                  src="images/banner-shadow.gif" 
                  width=10 border=0></TD>
                <TD vAlign=top align=right width=216><IMG height=4 
                  src="images/banner-shadow.gif" 
                  width="100%" border=0></TD>
                <TD vAlign=top align=right width=15><IMG height=4 
                  src="images/banner-shadow.gif" 
                  width=15 border=0></TD></TR>
              <TR>
                <TD vAlign=top align=left width=15 bgColor=#faffeb>&nbsp; </TD>
                <TD style="PADDING-RIGHT: 5px" vAlign=top align=center
                bgColor=#faffeb colSpan=4>

<h1><u>Zenolaps Database Creation Page</u></h1>
<p>
<form name=form1 action="databasecreation.php" method=post onSubmit="return validate(this);">

<?php
	if (isset($_POST["install"]) && !isset($error))
	{
		echo "<h1>Database Creation successful!</h1>";
		echo "<p><a href=\"admin.php\">Go to Admin page ...</a>";
	}
	else
	{
?>


                        <TABLE cellSpacing=0 cellPadding=4  align=center border=0>
                          <TBODY>
                            <TR> 
                              <TD align=center width="1%"><IMG height=75
                        src="image/zenolapslogo.jpg" 
                        width=200  border=0> </TD>
                              
                            </TR>
                          </TBODY>
                        </TABLE>
                                             
<?php
	if (isset($error)) echo "<p><b><font color=red>$error</font></b>";
?>

<p>
<b><br><br>Please enter MySQL database connection settings</b><br>


<p><table cellpadding=5 border=0>
	<tr>
	 <td align=right>Host:</td>
	 <td><input type=text name=db_host<?php echo isset($_POST["db_host"]) ? " value=\"".$_POST["db_host"]."\"":" value=\"localhost\"";?>></td>
	</tr>

	<tr>
	 <td align=right>Username:</td>
	 <td><input type=text name=db_user<?php echo isset($_POST["db_user"]) ? " value=\"".$_POST["db_user"]."\"":"";?>></td>
	</tr>

	<tr>
	 <td align=right>Password:</td>
	 <td><input type=text name=db_pass<?php echo isset($_POST["db_pass"]) ? " value=\"".$_POST["db_pass"]."\"":"";?>></td>
	</tr>

	<tr>
	 <td align=right>Database name:</td>
	 <td><input type=text name=db_name<?php echo isset($_POST["db_name"]) ? " value=\"".$_POST["db_name"]."\"":"";?>></td>
	</tr>



</table>

<p align= left>
<b><br><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Administrator login and password</b><br><br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;You will be able to change these later

<p><table cellpadding=5>
	<tr>
	 <td align=right>Login:</td>
	 <td><input type=text name=admin_login value="<?php echo isset($admin_login) ? $admin_login:"admin";?>"></td>
	</tr>
	<tr>
	 <td align=right>Password:</td>
	 <td><input type=text name=admin_pass value="<?php echo isset($admin_pass) ? $admin_pass:"";?>"></td>
	</tr>
</table>


<p>


<?php
	if (is_writable("./cfg/connect.inc.php"))
	{
		echo "<p><input type=submit name=install value=\"Create\">";
	}
?>

<?php
	}
?>

</form>


                  <P>&nbsp;</P>



			</TD></TR></TBODY></TABLE></TD>
          <TD vAlign=top align=middle width=1 
          background="images/arr.gif"><IMG 
            height=3 src="images/arr.gif" 
            width=1 border=0> </TD>
          <TD class=home-content vAlign=top align=middle 
          background="images/banner-shadow.gif">&nbsp; 
          </TD></TR></TBODY></TABLE></TD></TR>
  <TR vAlign=bottom>
    <TD vAlign=bottom align=middle>
      <TABLE cellSpacing=0 cellPadding=0 width="100%" border=0>
        <TBODY>
        <TR>
          <TD 
            background="images/separator.gif"><IMG 
            height=1 src="images/separator.gif" 
            width=1></TD></TR>
        <TR>
          <TD align=middle>
            <TABLE cellSpacing=0 cellPadding=0 width=730 border=0>
              <TBODY>
              <TR>
                <TD class=textmenu vAlign=center align=left width=15>&nbsp; 
</TD>
                <TD class=textmenu vAlign=center align=middle><NOBR>Copyright 
                  © 2013 Zenolaps</NOBR> </TD>
                <TD class=copyright vAlign=center align=right width=15>&nbsp; 
                </TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></BODY></HTML>
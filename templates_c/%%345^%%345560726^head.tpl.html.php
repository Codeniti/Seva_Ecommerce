<?php /* Smarty version 2.6.0, created on 2013-03-15 16:47:29
         compiled from head.tpl.html */ ?>
<head>

<link rel=STYLESHEET href="style1.css" type="text/css">


<script>
<!--
<?php echo '
	function open_window(link,w,h) //opens new window
	{
		var win = "width="+w+",height="+h+",menubar=no,location=no,resizable=yes,scrollbars=yes";
		newWin = window.open(link,\'newWin\',win);
		newWin.focus();
	}


	function confirmDelete() //unsubscription confirmation
	{
		temp = window.confirm(\'';  echo @constant('QUESTION_UNSUBSCRIBE');  echo '\');
		if (temp) //delete
		{
			window.location="index.php?killuser=yes";
		}
	}

	function validate_custinfo() //validate customer information
	{
var x=document.forms["custinfo_form"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
var y = document.forms["custinfo_form"]["phone"].value;
            var z = document.forms["custinfo_form"]["zip"].value

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }

		if (document.custinfo_form.first_name.value=="" || document.custinfo_form.last_name.value=="")
		{
			alert("';  echo @constant('ERROR_INPUT_NAME');  echo '");

			return false;
		}
		if (document.custinfo_form.email.value=="")
		{
			alert("';  echo @constant('ERROR_INPUT_EMAIL');  echo '");

			return false;
		}
if((isNaN(y)||y.indexOf(" "))!=-1)
           {
              alert("Enter numeric value phone number")
              return false;
           }
          
		if (document.custinfo_form.country.value=="")
		{
			alert("Select your country");
			return false;
		}
		if (document.custinfo_form.state.value=="")
		{
			alert("';  echo @constant('ERROR_INPUT_STATE');  echo '");
			return false;
		}
		if (document.custinfo_form.zip.value=="")
		{
			alert("';  echo @constant('ERROR_INPUT_ZIP');  echo '");
			return false;
		}
  if(isNaN(z)||z.indexOf(" ")!=-1)
           {
              alert("Enter the numeric value zip code")
              return false;
           }
		if (document.custinfo_form.city.value=="")
		{
			alert("';  echo @constant('ERROR_INPUT_CITY');  echo '");
			return false;
		}


		return true;
	}
'; ?>

-->
</script>

</head>
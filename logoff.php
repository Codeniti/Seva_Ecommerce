<?php


/* Start session */
session_start();

if($useCookies == TRUE)
{
	/* Remove cookies */
	setcookie("isLoged", '' ,time()-3600, "/", "", 1);
	setcookie("userName",'' , time()-3600, "/", "", 1);
}

/* Blank out sessions */
$_SESSION['isLoged'] = NULL;
$_SESSION['userName'] = NULL;

/* Unset all of the session variables */
$_SESSION = array();

/* Destory this session */
session_destroy();

/* Rdirect to logout page */
header("Location: index.php");
exit();
?>
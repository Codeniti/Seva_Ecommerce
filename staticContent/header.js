var contentPath = new ContentPath();

function ContentPath()
{
	var staticContentPath;
	this.getStaticContentPath = getStaticContentPath;
	this.setStaticContentPath = setStaticContentPath;
	
	function setStaticContentPath(staticContentPath)
	{
		this.staticContentPath = staticContentPath;
	}
	
	function getStaticContentPath()
	{
		var randomIndex = Math.floor(Math.random()*5)+1;
		if(randomIndex <= 0)
			randomIndex = 1;
		if(randomIndex > 5)
			randomIndex = 5;

		return this.staticContentPath.replace("","");  
	}	
}

var cookie = new Cookie();

function Cookie()
{
	this.getCookie = getCookie;
	this.setCookie = setCookie;
	
	function getCookie(cookieName)
	{
		var ARRcookies=document.cookie.split(";");
		for (var i=0;i<ARRcookies.length;i++)
		{
			var cookieNameTemp = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			var cookieValueTemp = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			cookieNameTemp = cookieNameTemp.replace(/^\s+|\s+$/g,"");
			if (cookieNameTemp == cookieName)
			{
				return unescape(cookieValueTemp);
			}
		}
	}
	
	function setCookie(cookieName,cookieValue,cookieMaxAge,cookiePath)
	{
		if(cookieMaxAge == null)
		{
			cookieMaxAge = 365;
		}
		if(cookiePath == null)
		{
			cookiePath = "/";
		}
		var cookieExpiryDate=new Date();
		cookieExpiryDate.setDate(cookieExpiryDate.getDate() + cookieMaxAge);
		var cookieValue=escape(cookieValue) + "; expires="+cookieExpiryDate.toUTCString()+"; path="+cookiePath;
		document.cookie=cookieName + "=" + cookieValue;
	}
	
}


var commonUtils = new CommonUtils();
 
function CommonUtils()
{
	this.updateBrowsingHistory=updateBrowsingHistory;
	
	function updateBrowsingHistory(browseHistoryParamMap)
	{
		browseHistoryParamMap['osName']= navigator.platform;
		browseHistoryParamMap['actionname']= "updateProductHistory";
		
		$.post('/faces/jsp/ajax/ajax.jsp',browseHistoryParamMap,function(data)
		{
			if(data.status == 'success')
			{
				//DO NOTHING
			}
			else
			{
				//DO NOTHING
			}
		},"json")
		.error(function() 
		{ 
			//DO NOTHING
		});
	}	
}

var menu = new Menu();

function Menu()
{
	var mainMenuDefault = false;
	this.setMainMenuDefault = setMainMenuDefault;
	this.showMainMenu = showMainMenu;
	this.showSubMainMenu = showSubMainMenu;

	function setMainMenuDefault()
	{
		mainMenuDefault = true;
		
		var mainMenuObj = document.getElementById("mainMenu");
		mainMenuObj.style.display="block";
	}

	function showMainMenu(val)
	{
		if(mainMenuDefault)
		{
			return;
		}
		var mainMenuObj = document.getElementById("mainMenu");
		if(val)
			mainMenuObj.style.display="block";
		else
			mainMenuObj.style.display="none";

	}


	function showSubMainMenu(child,act,parent1,position)
	{	
	

		var browser = navigator.appName;
		var b_version=navigator.appVersion;
		//document.getElementById(child).style.display = 'none';
		if (act == "show")
		{
			showMainMenu(true);

			var p = document.getElementById(parent1);
			var c = document.getElementById(child );
			if(p)
			{
				p.className = 'activeLeft';
			}
			if(c)
			{
				   c["at_position"]="x";
				   var top1  = (c["at_position"] == "y") ? p.offsetHeight : 0;
				   var left = (c["at_position"] == "x") ? p.offsetWidth : 0;
			}
			
			for (; p; p = p.offsetParent)
			{
			  top1 += p.offsetTop;
			  left += p.offsetLeft;
			}
			
			if(browser.match("Microsoft Internet Explorer") == "Microsoft Internet Explorer")
			{
			   var ieObjdiv = document.getElementById(child);
			   if(ieObjdiv)
			   {
				ieObjdiv.className = "";
				ieObjdiv.className = "subMenuie";  
			   }
			}
			
			
			//alert("top["+top+"]&left["+left+"]");
			if(c)
			{
				top1 =  calculateSubMenuTopPosition(c,top1,parent1);
				
				c.style.display = 'block'; 
				c.style.position   = "absolute";
				c.style.top        = top1 +'px';
				c.style.left       = left+'px';
				c.style.zIndex = '10000000';
			}
		 }
		 else if (act == "hide")
		 {
			 showMainMenu(false);

			if(document.getElementById(child))
			{
				document.getElementById(child).style.display = 'none';
			}
			var p = document.getElementById(parent1);
			if(p)
			{
				p.className = 'normalLeft';
			}
		 }
		   
	}
	
	function calculateSubMenuTopPosition(c,top1,parent1)
	{
		try
		{
			if(top1>=150)
			{
				var divHTML = $(c).html();
				var divHTMLLength = divHTML.length;
				
				if(jQuery.browser.msie)
				{
					var browserVersion = jQuery.browser.version;
					if(browserVersion)
					{
						browserVersion = parseInt(browserVersion);
						if(browserVersion<10)
						{
							divHTMLLength = divHTMLLength*2;
						}
					}
					
				}
				
				top1 = top1 - (top1/15); 
				
				if(divHTMLLength>=0)
				{
					var firstMenu = document.getElementById("cshow0");
					var firstMenu_top  = $(firstMenu).offset().top;
					var scrollTop = $(document).scrollTop();
					
					if(scrollTop<firstMenu_top)
						scrollTop = firstMenu_top;
					
					
					if(divHTMLLength<8000)
					{	
						divHTMLLength = parseInt(divHTMLLength/50);
						if(divHTMLLength>50)
						{
							top1 = top1 - divHTMLLength;
						}
					}		
					else
					{
						top1 = scrollTop;
					}					
						
					if(top1<scrollTop)
					{	
						top1 = scrollTop;
					}
				}
			}
		}
		catch(Exception)
		{
			
		}
		
		try
		{
			var solidBg = $(c).find(".solidBg");
			if(solidBg)
			{					
				var firstMenu = document.getElementById("cshow0");
				var firstMenu_top  = $(firstMenu).offset().top;
						
				var currentMenu_top  = $("#"+parent1).position().top;
				currentMenu_top=currentMenu_top-top1+firstMenu_top;
				
				var solidBgTop = (currentMenu_top)+"px";
				solidBg.css('display', 'block');
				solidBg.css('position', 'relative');
				solidBg.css('top', solidBgTop);
			}
		
		}
		catch(Exception)
		{
			
		}
		
		return top1;
	
	}
	
}


var login = new Login();

function Login()
{
  var loginFlag = false;
  
  
  this.setLoginFlag = setLoginFlag;
  this.getLoginFlag = getLoginFlag;
  this.callURL = callURL;
  this.socialnetwork = socialnetwork;
  this.openSignIn = openSignIn;
  this.closeSignIn = closeSignIn;
  this.initSignInForm = initSignInForm;  
  this.openSignInForm = openSignInForm;
  this.openRegistrationForm = openRegistrationForm;
  this.openForgotPasswordForm = openForgotPasswordForm;
  this.openTermConditionForm = openTermConditionForm;
  this.submitSignInForm = submitSignInForm;
  this.submitRegistrationForm = submitRegistrationForm;
  this.submitForgotPasswordForm = submitForgotPasswordForm;
  this.checkEmailExists = checkEmailExists;
  this.callSubmitSignInForm = callSubmitSignInForm;
  this.setShoppingCartCount = setShoppingCartCount
  

  function callSubmitSignInForm(event)
  {
	var keyCode;
	if(window.event)
		keyCode =window.event.keyCode;
	else
		keyCode=event.which;
		
	if(keyCode==13)
		submitSignInForm();
  }
  
  
  
  function checkEmailExists()
  {
  var emailId = $("#registration-panel-email").val();
  
  	if(emailId =="")
		{	
			    $("#registration-panel-message").html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Oops! Looks like you forgot to enter your email ID</span>");
			    return false;
		}
		else
		{
		var testPattern = function(value, pattern) 
			{   
				var regExp = new RegExp(pattern,"");
				return regExp.test(value);
			}
			var isvalidemail = testPattern(emailId,"^[a-zA-Z0-9]+[.|_|-]?[a-zA-Z0-9]+@[a-zA-Z]{2,15}[.]{1}[a-zA-Z]{2,4}[.]*[a-zA-Z]*$");
			if(!isvalidemail)
			{
				$('#registration-panel-message').html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please Enter a Valid E-mail Id.</span>");
				return false;
			}
		}
		
		$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "checkEmailIdExists", emailId : emailId } ,function(data)
				{
					if(data.status == 'success')
					{
						$("#registration-panel-message").html(" <span class='msgSucess'>"+data.statusMessage+"</span>");
					}
					else
					{
						 $("#registration-panel-message").html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>"+data.statusMessage+"</span>");
					}
				},"json")
				.error(function() 
				{ 
					//ERROR
				});
		
  }
  function setLoginFlag(flag)
  {
  	loginFlag = flag;  	
  }
  
  function getLoginFlag()
  {
  	return loginFlag;  	
  }
  
  
  function callURL()
  {
    if(loginFlag == false)
    {
    	openSignIn();
	    return false;    	
    }
    return true;
  }
  
  
  
  function socialnetwork(providerId)
  {
	window.open ('/faces/jsp/components/thirdparty/socialnetwork/socialnetwork.jsp?id='+providerId,"socialnetworklogin","status=1,width=400,height=400,left=300,top=300,resizable=1"); 
  }
  
  function openSignIn()
  {
		$('#login-panel-link').trigger('click');
  }
  
  function closeSignIn()
  {
  		$.fancybox.close();
  }
  
  function initSignInForm()
  {
	$("#login-panel-link").fancybox({	//Login Popup
					'titlePosition'		: 'inside',
					'transitionIn'		: 'none',
					'transitionOut'		: 'none'
			    });
			    
	$("#registration-panel-link").fancybox({ //For Registration form Fancybox
					'titlePosition'		: 'inside',
					'transitionIn'		: 'none',
					'transitionOut'		: 'none'
					
				});		
  }
  
  
  
  
  function openSignInForm()
  {
   
  	closeAllSignInForm();
  	
  	$("#login-panel").show();
  }
  
  function closeSignInForm()
  {  
     $("#login-panel-form").get(0).reset();     
     $("#login-panel-message").empty();
  	 $("#login-panel").hide();
  }
  
  
  function openRegistrationForm()
  {
  	closeAllSignInForm();
  	
  	$("#registration-panel").show();
  }
  
  function closeRegistrationForm()
  {  
     $("#registration-panel-form").get(0).reset();     
     $("#registration-panel-message").empty();
  	 $("#registration-panel").hide();
  }
  
  function openTermConditionForm()
  {
  	//var termConditionInfoLength = $("#termConditionInfo").html().length;
  	if($("#termConditionInfo").html() == null  ||  ( $("#termConditionInfo").html() !=null && $("#termConditionInfo").html().length < 10) )
  	{
		$.post('/jsp/components/header/termsNcondition.jsp',{} ,function(data)
		{
			$("#termConditionInfo").append(data);                    
		})
		.error(function() 
		{ 
			//ERROR
		});
	}
 
  	$("#termCondition-panel").slideToggle();
  	
  }
  
  function closeTermConditionForm()
  {
  	$("#termCondition-panel").hide();
  }
  
  function openForgotPasswordForm()
  {
    $("#forgotpassword-panel-form").get(0).reset();     
    $("#forgotpassword-panel-message").empty();
  	$("#forgotpassword-panel").slideToggle();
  }
  
  function closeForgotPasswordForm()
  {
    $("#forgotpassword-panel-form").get(0).reset();     
    $("#forgotpassword-panel-message").empty();
  	$("#forgotpassword-panel").hide();
  }
  
    
  function closeAllSignInForm()
  {
    closeForgotPasswordForm();
    closeTermConditionForm();
  	closeSignInForm();
  	closeRegistrationForm();
  }
  
  function submitSignInForm()
  {
		var emailId = $("#login-panel-emailid").val();
		var password = $("#login-panel-password").val();
		
		if(emailId =="")
		{	
			    $("#login-panel-message").html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Oops! Looks like you forgot to enter your email ID</span>");
			    return false;
		}
		else
		{
		var testPattern = function(value, pattern) 
			{   
				var regExp = new RegExp(pattern,"");
				return regExp.test(value);
			}
			var isvalidemail = testPattern(emailId,"^[a-zA-Z0-9]+[.|_|-]?[a-zA-Z0-9]+@[a-zA-Z]{2,15}[.]{1}[a-zA-Z]{2,4}[.]*[a-zA-Z]*$");
			if(!isvalidemail)
			{
				$('#login-panel-message').html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please Enter a Valid E-mail Id.</span>");
				return false;
			}
		}
		
		if(password =="")
		{	
			    $("#login-panel-message").html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>There is no password typed! Please type your password</span>");
			    return false;
		}
		
		
				$("#login-panel-message").html("<span class='waitMsg'>Please wait few Seconds... </span>");
				$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "doLogin", emailId : emailId , password : password } ,function(data)
				{
					if(data.status == 'success')
					{
						//window.location.href=window.location.href;
						window.location.reload();
					}
					else
					{
						$('#login-panel-message').html(" <span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Looks like the E-mail id or password is wrong! Please Try again.</span>");
					}
				},"json")
				.error(function() 
				{ 
					$('#login-panel-message').html(" <span class='errMsg'> <span class='icn_Error'>&nbsp;</span> Error Occured Please Try Again !</span>");
				});
			 
  }
  
  function submitRegistrationForm()
  {
		var email = $("#registration-panel-email").val();
		var password = $("#registration-panel-password").val();
		var repeatPass=$("#registration-panel-repeat-password").val();	
		var firstname = $("#registration-panel-fname").val();
		var lastname = $("#registration-panel-lname").val();		
		var mobile = $("#registration-panel-mobile").val();	
		var male = $("#registration-panel-gender-male").is(":checked");
		var invitationsender = $("#invitationsender").val();	
		var gender="";
		
			var testPattern = function(value, pattern) 
		{   
					var regExp = new RegExp(pattern,"");
					return regExp.test(value);
		}
		
		if(male)
		gender="male"
		 else
		gender="female"
		
		
		if(email!=null && email!="")
		{
			var status = testPattern(email,"^[a-zA-Z0-9]+[.|_|-]?[a-zA-Z0-9]+@[a-zA-Z]{2,15}[.]{1}[a-zA-Z]{2,4}[.]*[a-zA-Z]*$");
			if(!status)
			{
	           $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please Enter a Valid E-mail Id.</span>");
			   return false;
			}
		}
		else
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Oops! Looks like you forgot to enter your email ID</span>");
		 return false;
		}
		
		var namePatteren="^[a-zA-Z]+$"; 
		if($.trim(firstname)=="")
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please enter your first name.</span>");
		 return false;
		}
		else if(!testPattern($.trim(firstname),namePatteren))
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please enter valid first name.</span>");
		 return false;
		}
		
		if($.trim(lastname)=="")
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please enter your last name.</span>");
		 return false;
		}
		else if(!testPattern($.trim(lastname),namePatteren))
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please enter valid last name.</span>");
		 return false;
		}
		  
		 if($.trim(password)=="")
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>There is no password typed! Please type your password.</span>");
		 return false;
		}
		
		if($.trim(repeatPass)=="")
		{
		 $("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please type your chosen password again</span>");
		 return false;
		}
		  
		if(password!="" || repeatPass!="")
		{
			if(password.length<6)
			{
				$("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Password should be minumum 6 character.</span>");
				return false;
			}
	
			if(password!=repeatPass)
			{
				$("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span> Your password and retype password do not match.</span>");
				return false;
			}
		}
		
		
		if(mobile!=null && mobile!="")
		{
		var mobilePatteren="^[0]?[0-9]+$";
		
			if(!testPattern(mobile,mobilePatteren))
					{
					$("#registration-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please enter a valid mobile number (Should be of atleast 10 Numbers).</span>");
					return false;
					}
				
		}

		if(!$("#registration-panel-terms").is(':checked'))
		{
			$("#registration-panel-message").html("<span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Do you agree with the  Terms & Conditions? To proceed, read carefully and check yes.</span>.");
			return false;
		}
		$("#registration-panel-message").html(" <span class='waitMsg'> Please Wait For Few Seconds.</span>.");
		
		$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "doUserRegistration",email: email, firstname: firstname,lastname: lastname,gender: gender, mobile : mobile, password : password,invitationsender:invitationsender} ,function(data)
		{
			if(data.status == 'success')
			{ 
				$("#registration-panel-message").html(" <span class='msgSucess'> "+data.statusMessage+"</span>");
				$("#registration-panel-form").get(0).reset();
				setTimeout("window.location.reload()", 2000);			
			}
			else
			{
				$('#registration-panel-message').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span> "+data.statusMessage+"</span>");
				$("#registration-panel-form").get(0).reset();
			}
		},"json")
		.error(function() 
		{ 
			$('#registration-panel-message').html(" <span class='errMsg'> <span class='icn_Error'>&nbsp;</span> Error Occured Please Try Again !</span>");
		});
  	
  }
  
  function submitForgotPasswordForm()
  {
		var emailId = $("#forgotpassword-panel-email").val();
		if(emailId=="")
		{	
					$("#forgotpassword-panel-message").html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>To retrieve your password, please type your Email ID.</span>");
		}
		else
		{
			var testPattern = function(value, pattern) 
			{   
				var regExp = new RegExp(pattern,"");
				return regExp.test(value);
			}
			var testStatus = testPattern(emailId,"^[a-zA-Z0-9]+[.|_|-]?[a-zA-Z0-9]+@[a-zA-Z]{2,15}[.]{1}[a-zA-Z]{2,4}[.]*[a-zA-Z]*$");
			if(testStatus)
			{
				$("#forgotpassword-panel-message").html("<span class='waitMsg'> Please wait... </span>");
					$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "forgetPassword", emailId : emailId} ,function(data)
						{
							if(data.status == 'success')
							{
							$("#forgotpassword-panel-message").html(" <span class='msgSucess'>"+data.statusMessage+"</span>");
							}
							else
							{
								$('#forgotpassword-panel-message').html("<span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Provided email id doesnot match our records.</span>");
							}
						},"json")
						.error(function() 
						{ 
							$('#forgotpassword-panel-message').html(" <span class='errMsg'> <span class='icn_Error'>&nbsp;</span> Error Occured Please Try Again !</span>");
						});
				
				
			}
			else
			{
				$('#forgotpassword-panel-message').html("<b style='color:red;'>  <span class='icn_Error'>&nbsp;</span> Please enter valid email address.</b>");
			}
	
		}
  }
  
  	
  	function setShoppingCartCount(userId , isCartLoadedFrmDb , cartCount) 
	{
		
		if( userId != null && isCartLoadedFrmDb == false )
		{
			$.post('/faces/jsp/ajax/ajax.jsp',{ actionname : "getCartCount" },
				function(data)
				{
					if(data)
					{
						data = $.trim(data);
					}
					$("#header_search_shopping_cart_count").html("("+data+") Items");	
				});
		}
		else
		{
			$("#header_search_shopping_cart_count").html("("+cartCount+") Items");	
		}
	}
}

$(document).ready(function () 
{
	login.initSignInForm();
	socialNetworkApps.loadHomePageSocialNetworkLinks();
	visitor.initVisitorForm();
});

function Visitor()
{
	this.initVisitorForm = initVisitorForm;
	this.openVisitorPopup = openVisitorPopup;
  	this.closeVisitorPopup = closeVisitorPopup;
	this.openVisitorForm = openVisitorForm;
	this.closeVisitorForm = closeVisitorForm;
	this.submitVisitorForm = submitVisitorForm;
	this.callSubmitVisitorForm = callSubmitVisitorForm;
	
	var initialLoadTime = 5*(1000); //Time in Millis;
	var lastVisitedTimeDifference = 7*(24*60*60*1000); //Time in Millis;
	var visitorEmailCookie = "NT-visitor-emailId";
	var visitorCloseCookie = "NT-visitor-close";
	
	function initVisitorForm()
  	{
  		if($("#visitor-panel-link") && $("#visitor-panel") )
  		{
	  		$("#visitor-panel-link").fancybox({ //For Visitor form Fancybox
			'titlePosition'		: 'inside',
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'onClosed'		    : function()
						          {
										closeVisitorPopup();
						          }
			});
			openVisitorPopup();
		}
  	}
  	
  	function openVisitorPopup()
  	{
  		var load = false ;
  		if(arguments[0] == true )
  		{
  			load = true;
  		}
  		
  		if(!load)
  		{
  			setTimeout(function() { visitor.openVisitorPopup(true) },initialLoadTime);
  			return;
  		}
  		
  		if(login.getLoginFlag())
		{
			return;
		}
		if(cookie.getCookie(visitorEmailCookie))
		{
			return;
		}
		var visitorLastCloseDate = cookie.getCookie(visitorCloseCookie);
		if(visitorLastCloseDate)
		{
			var visitorLastCloseDifference = new Date() - new Date(visitorLastCloseDate);
			if(visitorLastCloseDifference < lastVisitedTimeDifference)
			{
				return;
			}
		}
  		
  		var isAnyPopUpOpened = false;
  		$("#LightBox").children('div').each(function(i) {
			if(this.style.display != 'none')
			{
				isAnyPopUpOpened = true;	
			}
		});
		
		if(isAnyPopUpOpened)
		{
			return;
		}
		
  		$('#visitor-panel-link').trigger('click');
  		
  	}

  	function closeVisitorPopup()
  	{
  		closeVisitorForm();
  		$.fancybox.close();
  		cookie.setCookie(visitorCloseCookie,new Date(),"365","/");
  	}

  	function openVisitorForm()
  	{
  		$("#visitor-panel").show();
  	}

  	function closeVisitorForm()
  	{
  		$("#visitor-panel-form").get(0).reset();     
     	$("#visitor-panel-message").empty();
  	 	$("#visitor-panel").hide();
  	}

  	function submitVisitorForm()
  	{
  		var emailId = $("#visitor-panel-emailid").val();
	 	
		if(emailId == "")
		{	
			$("#visitor-panel-message").html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Oops! Looks like you forgot to enter your email ID</span>");
			this.visitorEmailIdFetched = "";
			return false;
		}
		else
		{
			var testPattern = function(value, pattern) 
			{   
				var regExp = new RegExp(pattern,"");
				return regExp.test(value);
			}
			var isvalidemail = testPattern(emailId,"^[a-zA-Z0-9]+[.|_|-]?[a-zA-Z0-9]+@[a-zA-Z]{2,15}[.]{1}[a-zA-Z]{2,4}[.]*[a-zA-Z]*$");
			if(!isvalidemail)
			{
				$('#visitor-panel-message').html(" <span class='errMsg'>  <span class='icn_Error'>&nbsp;</span>Please Enter a Valid E-mail Id.</span>");
				return false;
			}
			else
			{
				$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "setVisitorEmailIdCookie", visitorEmailId : emailId } ,function(data)
				{
					if(data.status == 'success')
					{
						closeVisitorPopup();
					}
				},"json")
			}
		}
  	}

  	function callSubmitVisitorForm()
  	{
  		var keyCode;
		if(window.event)
			keyCode =window.event.keyCode;
		else
			keyCode=event.which;
		
		if(keyCode==13)
			submitVisitorForm();
  	}
  	
}

var visitor = new Visitor();


function Slider()
{
	this.slide = slide;
	this.prev = prev;
	this.next = next;
	this.rotate=rotate;

	var map = new Object();

	function slide(sliderId)
	{
		
		obj = $('#'+sliderId).bxSlider({
			controls:false,
			pager: true,
			pagerSelector:'#slider-pager-'+sliderId,
			wrapperClass:'container',
			pagerActiveClass:'slider-pager-active',		
			buildPager: function(slideIndex, slideHtmlObject)
			{
				   $('#'+sliderId).children().css("display", "block");	
		           return '<p><a href="" class="slider-pager-deactive">1</a></p>';
			},
			onBeforeSlide: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject)
            {
            		lazyImageMap(currentSlideHtmlObject);
            }
		});
		map[sliderId] = obj;
		
		lazyImage(sliderId);	
	}
	function prev(sliderId)
	{
		map[sliderId].goToPreviousSlide();
	}

	function next(sliderId)
	{
		map[sliderId].goToNextSlide();		
	}
	
	function rotate(sliderId)
	{
		obj = $('#'+sliderId).bxSlider({	
			controls:false,		
			auto: true,
			onBeforeSlide: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject)
				{
					$('#'+sliderId).children().css("display", "block");				
					lazyImageMap(currentSlideHtmlObject);
				}
			});
		map[sliderId] = obj;
		
		lazyImage(sliderId);
	}
	
	function lazyImage(sliderId)
	{
		try
		{
			$("#"+sliderId).find('img[lazy]').lazyload({effect : "fadeIn"});
			
		}
		catch(Exception){}
	}

	function lazyImageMap(currentSlideHtmlObject)
	{
		try
		{
			var objLazyImgArr = $(currentSlideHtmlObject).find('img[lazy]');
			
			if(objLazyImgArr.length && objLazyImgArr.length > 0)
			{
				for(i=0;i<objLazyImgArr.length;i++)
				{
					var objLazyImg = objLazyImgArr[i];
					var src = $(objLazyImg).attr('src');
					var org_src = $(objLazyImg).attr('data-original');
					if(org_src && src && org_src!=src)
					{
						$(objLazyImg).attr('src',org_src);
					}				
				}				
			}
		}
		catch(Exception){}
	}

}

var slider = new Slider();



function ScrollTop()
{
	this.init=init;
	
	function init()
	{
		var scrollTopHTML = "<div style='position:relative; float:right;'><a href=\"#\" id=\"scrollTop\" class=\"scrollup\" title=\"Go to Top\">&nbsp;</a></div>"
		$('body').append(scrollTopHTML);

		$(window).scroll(function()
		{
			if ($(this).scrollTop() > 100) 
			{
				$('.scrollup').fadeIn();
			}
			else 
			{
				$('.scrollup').fadeOut();
			}
		}); 


		$('#scrollTop').click(function()
		{
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});

	}
}

var scrollTop = new ScrollTop();

function Analytics()
{
	this.loadPageAnalytics = loadPageAnalytics;
	this.loadOrderAnalytics = loadOrderAnalytics;
	this.loadGoogleLeadAnalytics = loadGoogleLeadAnalytics;
	this.loadSellerAnalytics = loadSellerAnalytics;
	this.setCampaignCookie = setCampaignCookie;
	
	
	function loadPageAnalytics()
	{
		try
		{	
			$.post('/faces/jsp/components/seo/pageAnalytics.jsp',{} ,function(data)
			{
				$('body').append(data);                  
			})
			.error(function() 
			{ 
				//DO NOTHING
			});	
		}
		catch(Exception)
		{	
			//DO NOTHING
		}
	}
	
	function loadOrderAnalytics(orderDetailJsonString)
	{
		try
		{
			$.post('/faces/jsp/components/seo/orderAnalytics.jsp',{json_request : JSON.stringify(orderDetailJsonString)} ,function(data)
			{
					$('body').append(data);               
			})
			.error(function() 
			{ 
					//DO NOTHING
			});
		}
		catch(Exception)
		{	
			//DO NOTHING
		}
	}
	
	function loadGoogleLeadAnalytics(source)
	{
		try
		{
			$.post('/faces/jsp/components/seo/googleLeadAnalytics.jsp',{source : source} ,function(data)
			{
					$('body').append(data);               
			})
			.error(function() 
			{ 
					//DO NOTHING
			});
		}
		catch(Exception)
		{	
			//DO NOTHING
		}
	}
	
	function loadSellerAnalytics(sellerId,productId,categoryId,viewType,url)
	{
		try
		{
			var urlUpdate = url;
			while(urlUpdate.indexOf('&') > -1)
			{
				urlUpdate = urlUpdate.replace('&','~');
			}
			var sourcePage = window.location.href;
			
			
			$.post("/faces/jsp/ajax/ajax.jsp", {actionname : "updateCSPLog", sellerId : sellerId, productId : productId, categoryId : categoryId ,sourcePage : sourcePage , viewType : viewType , url : urlUpdate }, function(data)
			{
	        		//DO NOTHING					
			})
			.error(function() 
			{ 
					//DO NOTHING
			});
			
			$.get("/servlets/PageTrack", {rPN : "" , pN : escape(url) }, function(data)
			{
	        		//DO NOTHING
			})
			.error(function() 
			{ 
					//DO NOTHING
			});
			
			window.open(url);
		}
		catch(Exception)
		{	
			//DO NOTHING
		}
		
		try
		{
			var pageTracker = _gat._getTracker("UA-1212912-1");
			pageTracker._trackPageview("/outgoing/"+sellerId+"/"+url);
		}
		catch(GoogleAnalyticsException)
		{
		
		}
	}
	
	function setCampaignCookie(utm_id,utm_source,utm_code,utm_campaign,utm_source_id)
	{
	  try
		{	
			$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "setCampaignCookie",utm_id:utm_id,utm_source:utm_source,utm_code:utm_code,utm_campaign:utm_campaign,utm_source_id:utm_source_id} ,function(data)
			{
				//SUCCESS   
			})
			.error(function() 
			{ 
				//FAILURE
			});	
		}
		catch(Exception)
		{	
			//DO NOTHING
		}
	
	}
}
var analytics = new Analytics();
/*
$(document).ready(function () 
{
  analytics.loadPageAnalytics();
});
*/

function SocialNetworkApps()
{
	this.loadSocialNetworkLinks = loadSocialNetworkLinks;
	this.loadSocialNetworkLinksFooter = loadSocialNetworkLinksFooter;
	this.loadHomePageSocialNetworkLinks = loadHomePageSocialNetworkLinks;
	
	function loadSocialNetworkLinks()
	{
		$.post('/faces/jsp/components/thirdPartyLinks.jsp',{} ,function(data)
		{
			$("#socialNetworkLinks").html(data);                    
		})
		.error(function() 
		{ 
			//DO NOTHING
		});
	}
	
	
	function loadSocialNetworkLinksFooter()
	{
		$.post('/faces/jsp/components/footer/keepInTouchApps.jsp',{} ,function(data)
		{
			$("#socialNetworkLinksFooter").html(data);                    
		})
		.error(function() 
		{ 
			//DO NOTHING
		});
	}
	
	function loadHomePageSocialNetworkLinks()
	{
		$.post('/faces/components/thirdparty/socialnetwork/socialNetworkIndex.jsp',{} ,function(data)
		{
			$("#homePageSocialNetworkLink").html(data);                    
		})
		.error(function() 
		{ 
			//DO NOTHING
		});
	}
		
}
var socialNetworkApps = new SocialNetworkApps();


/////////////////////////////////////// POPUP Functions START //////////////////////////////////////////////////////////////////////////

var popup = new PopUp();

function PopUp()
{
	this.openOutStockForm = openOutStockForm;
	this.openRequestQuoteForm = openRequestQuoteForm;
	this.openSmsEmailForm = openSmsEmailForm;
	this.openWishListForm = openWishListForm;
	this.openProductErrorForm = openProductErrorForm;
	this.openPriceChallangeForm = openPriceChallangeForm;
	this.openCheckDeliveryForm = openCheckDeliveryForm;
	this.openSendEmailForm = openSendEmailForm;
	this.openReportAbuseForm = openReportAbuseForm; 
	this.openAvailableCityWindow = openAvailableCityWindow;
	
	this.closeOutStockForm = closeOutStockForm;
	this.closeRequestQuoteForm = closeRequestQuoteForm;
	this.closeSmsEmailForm = closeSmsEmailForm;
	this.closeWishListForm = closeWishListForm;
	this.closeProductErrorForm = closeProductErrorForm;
	this.closePriceChallangeForm = closePriceChallangeForm;
	this.closeCheckDeliveryForm = closeCheckDeliveryForm;
	this.closeSendEmailForm = closeSendEmailForm;
	this.closeReportAbuseForm = closeReportAbuseForm;
	
	this.submitOutStockForm = submitOutStockForm;
	this.submitRequestQuoteForm = submitRequestQuoteForm;
	this.submitSmsEmailForm = submitSmsEmailForm;
	this.submitWishListForm = submitWishListForm;
	this.submitProductErrorForm = submitProductErrorForm;
	this.submitPriceChallangeForm = submitPriceChallangeForm;
	this.submitCheckDeliveryForm = submitCheckDeliveryForm;
	this.submitSendEmailForm = submitSendEmailForm;
	this.submitReportAbuseForm = submitReportAbuseForm;
	
	this.resetProductErrorForm 	 = resetProductErrorForm;	
	this.resetPriceChallengeForm = resetPriceChallengeForm;
	this.resetSendEmailForm 	 = resetSendEmailForm;
	this.resetReportAbuseForm 	 = resetReportAbuseForm;
	this.resetWishListForm 	 	 = resetWishListForm;
	this.resetOutStockForm 	 	 = resetOutStockForm;
	this.resetRequestQuoteForm 	 = resetRequestQuoteForm;
	this.resetSmsEmailForm 	 	 = resetSmsEmailForm;
	this.resetCheckDeliveryForm  = resetCheckDeliveryForm;
	
	function closeAllForm()
	{
		closeOutStockForm();
		closeRequestQuoteForm();
		closeSmsEmailForm();
		closeWishListForm();
		closeProductErrorForm();
		closePriceChallangeForm();
		closeCheckDeliveryForm();
		closeSendEmailForm();
		closeReportAbuseForm();
	}
	
	function openForm(obj,divId,loginRequired)
	{
		closeAllForm();
		
		if(loginRequired)
		{
			if(!login.getLoginFlag())
			{
				login.openSignIn();
				return false;
			}
		}
		
		var divObj = document.getElementById(divId);
		if(obj!=null && divObj!=null)
	    {
	    	var leftPos = $(obj).offset().left+20;
	    	var topPos  = $(obj).offset().top+25;	    	
	    	   	
	    	if(leftPos < 0)
	    	{
	    		leftPos = $(obj).position().left+400;
	    	}
	    	
	    	if((leftPos+400)> document.body.scrollWidth)
	    	{	
	    		leftPos = document.body.scrollWidth - 400;
	    	}		    	
	    	
	    	if($(window).height() + $(document).scrollTop() - 50 <= topPos){
	    		topPos = topPos - 200;
	    	}
	    	
	    	$(divObj).css("left",leftPos);
			$(divObj).css("top", topPos);
			
	        divObj.style.display="block";
	        divObj.style.visibility="visible";  
	         
	        return true;
	    }      
	    
	    return false;
	}
	
	function closeForm(divId)
	{
		var divObj = document.getElementById(divId);
		if(divObj!=null)
	    {
	    	divObj.style.visibility = "hidden";
			divObj.style.display = "none";
			
			return true;
	    }
	    
	    return false;
	}
	
	function openAvailableCityWindow (splrfnum)
	{
		window.open ("/faces/jsp/product/productAvailableCities.jsp?splrfnum="+splrfnum,"AvailableCities","height=350,width=350,top=300,left=600");
	}
	
	function openOutStockForm(obj,productId,productName)
	{
		if(openForm(obj,"out_stock",true))
	    {	
	    	document.getElementById('out_stock_productId').value = productId; 
	    	document.getElementById('out_stock_productName').value = productName; 
	    }   
	}
	
	function closeOutStockForm()
	{
		if(closeForm("out_stock"))
		{
			document.getElementById('out_stock_err_msg').innerHTML  = "";
			document.getElementById('out_stock_productId').value 			= "";
			document.getElementById('out_stock_productName').value 			= "";
			//document.getElementById('out_stock_name').value = "";
			//document.getElementById('out_stock_emailId').value = "";
			document.getElementById('out_stock_contact_number').value = "";
			document.getElementById('out_stock_city').value = "";
		}
	}
	
	function openRequestQuoteForm(obj,productId,productName)
	{
		if(openForm(obj,"request_quote",true))
	    {	
	        document.getElementById('request_quote_productId').value = productId;	
	        document.getElementById('request_quote_productName').value = productName;        
	    }   
	}
	
	function closeRequestQuoteForm()
	{
		if(closeForm("request_quote"))
		{
			document.getElementById('request_quote_err_msg').innerHTML  = "";
			document.getElementById('request_quote_productId').value = "";
			document.getElementById('request_quote_productName').value = "";  
			//document.getElementById('request_quote_name').value = "";
			//document.getElementById('request_quote_emailId').value = "";
			document.getElementById('request_quote_contact_number').value = "";
			document.getElementById('request_quote_city').value = "";
		}
	}
	
	function openSmsEmailForm(obj,productId,sellerId,productPrice,productName)
	{
		if(openForm(obj,"sms_email",true))
	    {    
	        document.getElementById('sms_email_productId').value = productId; 
	        document.getElementById('sms_email_sellerId').value = sellerId;   
	        document.getElementById('sms_email_productprice').value = productPrice; 
	        document.getElementById('sms_email_productName').value = productName; 
	    }   
	}
	
	function closeSmsEmailForm()
	{
		if(closeForm("sms_email"))
		{
			document.getElementById('sms_email_err_msg').innerHTML  = "";
			document.getElementById('sms_email_productId').value 	= "";
		
			document.getElementById('sms_email_query').value = "";
			//document.getElementById('sms_email_user_name').value = "";
			document.getElementById('sms_email_mobile_number').value = "";
			//document.getElementById('sms_email_id').value = "";
			document.getElementById('sms_email_check').value = "";
		}
	}
	
	function openWishListForm(obj,productId)
	{
		if(openForm(obj,"wish_list",true))
	    {
	        document.getElementById('wish_list_product_id').value 		= productId; 	        
	    }
	}
	
	function closeWishListForm()
	{
		if(closeForm("wish_list"))
		{
			document.getElementById('wish_list_err_msg').innerHTML  	= "";
			document.getElementById('wish_list_product_id').value 		= "";
			
			document.getElementById('product_tags').value = "";
			document.getElementById('product_comment').value = "";
		}
	}
	
	function openProductErrorForm(obj,productId,productName)
	{
		if(openForm(obj,"product_error",true))
	    {
	    	document.getElementById('product_error_product_id').value 		= productId; 
	    	document.getElementById('product_error_product_name').value 	= productName; 	        
	    }
	}
	
	function closeProductErrorForm()
	{
		if(closeForm("product_error"))
		{
			document.getElementById('product_error_err_msg').innerHTML  	= "";
			document.getElementById('product_error_product_id').value 		= "";
			document.getElementById('product_error_product_name').value 	= "";
			
			document.getElementById('product_error_query_text').value = "";
		}
	}
	
	function openPriceChallangeForm(obj,productId, catId, productName, catName)
	{
		if(openForm(obj,"price_challenge",true))
	    {
	    	document.getElementById('price_challange_product_id').value 	= productId; 			
			document.getElementById('price_challange_sscatid').value 		= catId; 
			document.getElementById('price_challange_product_name').value 	= productName; 			
			document.getElementById('price_challange_sscatname').value 		= catName;		
		}
	}
	
	function closePriceChallangeForm()
	{
		
		if(closeForm("price_challenge"))
		{
			document.getElementById('price_challange_err_msg').innerHTML  	= "";
			document.getElementById('price_challange_product_id').value 	= "";
			document.getElementById('price_challange_sscatid').value 		= "";
			
			document.getElementById('price_challange_product_name').value 	= "";
			document.getElementById('price_challange_sscatname').value 		= "";
			 
			document.getElementById('price_challange_website_url').value 	= "";
			//document.getElementById('price_challange_email_id').value 		= "";
			document.getElementById('price_challange_contact_no').value 	= "";
			document.getElementById('price_challange_comments').value 		= "";
		}
	}
	
	
	function openCheckDeliveryForm(obj,splrfnum,sellerid,productid,productname)
	{
		if(openForm(obj,"check_delivery_pincode",false))
	    {
	    	document.getElementById('check_delivery_pincode_splrfnum').value 	= splrfnum; 
	    	document.getElementById('check_delivery_pincode_sellerid').value 	= sellerid; 
	    	document.getElementById('check_delivery_pincode_productid').value 	= productid;
	    	document.getElementById('check_delivery_pincode_productname').value = productname;
	    	
		}
	}
	
	function openSendEmailForm(obj,productId, productName, productUrl)
	{
		if(openForm(obj,"send_email",true))
		{
			document.getElementById("send_email_product_id").value 		= productId;
			document.getElementById("send_email_product_name").value 	= productName;
			document.getElementById("send_email_product_url").value 	= productUrl;
		}
	}
	
	function openReportAbuseForm(obj,entityType, entityId, productId, productName)
	{
		if(openForm(obj,"report_abuse",true))
		{
			document.getElementById("report_abuse_product_id").value 	= productId;
			document.getElementById("report_abuse_entity_id").value 	= entityId;
			document.getElementById("report_abuse_entity_type").value 	= entityType;
			document.getElementById("report_abuse_product_name").value 	= productName;
		}
	}
	
	function closeCheckDeliveryForm()
	{
		if(closeForm("check_delivery_pincode"))
		{
			document.getElementById('check_delivery_pincode_err_msg').innerHTML  	= "";
			document.getElementById('check_delivery_pincode_splrfnum').value 		= "";
			document.getElementById('check_delivery_pincode_sellerid').value 		= "";			
			document.getElementById('check_delivery_pincode_id').value 	= "";
		}
	}
	
	function closeSendEmailForm()
	{
		if(closeForm("send_email"))
		{
			document.getElementById('send_email_err_msg').innerHTML  		= "";
			document.getElementById('send_email_product_name').value 		= "";
			document.getElementById('send_email_product_url').value 		= "";
			document.getElementById('send_email_product_id').value 			= "";
			//document.getElementById('send_email_email_id').value			= "";
			//document.getElementById('send_email_name').value				= "";
			//document.getElementById('send_email_comments').value			= "";
		}
	}
	
	function closeReportAbuseForm()
	{
		if(closeForm("report_abuse"))
		{
			document.getElementById('report_abuse_err_msg').innerHTML  		= "";
			document.getElementById('report_abuse_product_id').value 		= "";
			document.getElementById('report_abuse_entity_id').value 		= "";
			document.getElementById('report_abuse_entity_type').value 		= "";
			document.getElementById('report_abuse_comments').value 			= "";
			document.getElementById('report_abuse_product_name').value 		= "";
		}
	}
	function submitSmsEmailForm()
	{
		var productId 		= $("#sms_email_productId").val();
		var sellerId 		= $("#sms_email_sellerId").val();
		var productPrice 	= $("#sms_email_productprice").val();
		var productName 	= $("#sms_email_productName").val();
		
		var query  			= $("#sms_email_query").val();
		//var name  			= $("#sms_email_user_name").val();
		//var smsFormEmailId 		= $("#sms_email_id").val();
		//var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		var mobileNumber 	= $("#sms_email_mobile_number").val();
		var mobileNumberExp = /^[0-9]+$/;
		
		var check			= $("#sms_email_check").val();
		
		if( query == null || $.trim(query) == "")
		{
			$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Query.</span>");
			return false;
		}
		
		//if( name == null || $.trim(name) == "")
		//{
		//	$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Name.</span>");
		//	return false;
		//}

		//if( smsFormEmailId == null || $.trim(smsFormEmailId) == "")
		//{
		//	$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Email ID.</span>");
		//	return false;
		//}

		//if( smsFormEmailId == null || $.trim(smsFormEmailId) == ""  || !smsFormEmailId.match(emailExp))
		//{
		//	$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Email Id</span>");
		//	return false;
		//}

		if(!mobileNumber.match(mobileNumberExp))
		{
			$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Mobile Number");
			return false;
		}

		if (productId != null && productId != "" && sellerId != null && sellerId != "")
	    {
	        $.post("/faces/jsp/ajax/ajax.jsp", {actionname : "submitSmsDetails", productId : productId, contactSellerId : sellerId, price : productPrice, productName : productName,
	        	query : query, mobileNumber : mobileNumber, check : check }, function(data){
	        	if(data.status == 'success')
				{
					$('#sms_email_err_msg').html("<span class='msgSucess'>SMS Sent Successfully!!</span>");
					resetSmsEmailForm();
				}
				else
				{
					$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetSmsEmailForm();
				}
	        },"json")
	    	.error(function() 
			{ 
				$('#sms_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			});
			
	    }
	}
	function submitRequestQuoteForm()
	{
		var productId		= $("#request_quote_productId").val();
		var productName		= $("#request_quote_productName").val();
		//var name  			= $("#request_quote_name").val();
		//var emailId 		= $("#request_quote_emailId").val();
		//var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;	
		var contactNumber 	= $("#request_quote_contact_number").val();
		var city 			= $("#request_quote_city").val();
		var comments = '';
		comments = " City : "+ city;


		/*if( name == null || $.trim(name) == "")
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Name.</span>");
			return false;
		}
		
		if( emailId == null || $.trim(emailId) == "")
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Email Id.</span>");
			return false;
		}
		
		if( emailId == null || $.trim(emailId) == ""  || !emailId.match(emailExp))
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Email Id</span>");
			return false;
		}*/
		
		if( contactNumber == null || $.trim(contactNumber) == "")
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Contact Number.</span>");
			return false;
		}

		var contactNumberExp = /^[0-9]+$/;
		if(!contactNumber.match(contactNumberExp))
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Contact Number</span>");
			return false;
		}
		
		if(productId != null && productId != ""){
			$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "submitRequestQuoteDetails", productId : productId, contactNumber : contactNumber, comments : comments , type : "request_quote" , productName : productName },function(data){
				if(data.status == 'success')
				{
					$('#request_quote_err_msg').html("<span class='msgSucess'>Request Quote Submitted Successfully!!</span>");
					resetRequestQuoteForm();
				}
				else
				{
					$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetRequestQuoteForm();
				}
			},"json")
			.error(function() 
			{ 
				$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			});	
		}
		else
		{
			$('#request_quote_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
		}
	}

	function submitOutStockForm()
	{
		var productId		= $("#out_stock_productId").val();
		var productName		= $("#out_stock_productName").val();
		//var name  			= $("#out_stock_name").val();
		//var emailId 		= $("#out_stock_emailId").val();
		//var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;	
		var contactNumber 	= $("#out_stock_contact_number").val();
		var city 			= $("#out_stock_city").val();
		var comments = '';
		comments = comments + " City : "+ city;


		/*if( name == null || $.trim(name) == "")
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Name.</span>");
			return false;
		}
		
		if( emailId == null || $.trim(emailId) == "")
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Email Id.</span>");
			return false;
		}
		
		if( emailId == null || $.trim(emailId) == ""  || !emailId.match(emailExp))
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Email Id</span>");
			return false;
		} */
		
		if( contactNumber == null || $.trim(contactNumber) == "")
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Contact Number.</span>");
			return false;
		}

		var contactNumberExp = /^[0-9]+$/;
		if(!contactNumber.match(contactNumberExp))
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Contact Number</span>");
			return false;
		}
		
		if(productId != null && productId != ""){
			$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "submitRequestQuoteDetails", productId : productId, contactNumber : contactNumber, comments : comments, type : "out_stock" , productName : productName},function(data){
				if(data.status == 'success')
				{
					$('#out_stock_err_msg').html("<span class='msgSucess'> Request Quote Submitted Successfully!!</span>");
					resetOutStockForm();
				}
				else
				{
					$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetOutStockForm();
				}
			},"json")
			.error(function() 
			{ 
				$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			});	
		}
		else
		{
			$('#out_stock_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
		}
	}	
	function submitWishListForm()
	{
		var wish_list_product_id  		= $("#wish_list_product_id").val();
		var product_tags  				= $("#product_tags").val();
		var product_comment 			= $("#product_comment").val();
		
		
		if( product_tags == null || $.trim(product_tags) == "")
		{
			$('#wish_list_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Select Product Tag.</span>");
			return false;
		}
		
		if(wish_list_product_id != null && wish_list_product_id != ""){
			$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "addToWishList",  productId : wish_list_product_id, productTag : product_tags, prodComment : product_comment },function(data){
				if(data.status == 'success')
				{
					$('#wish_list_err_msg').html("<span class='msgSucess'>Product Added Successfully!!</span>");
					resetWishListForm();
				}
				else if(data.status == 'exists')
				{
					$('#wish_list_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Product Already Added in Wish List.</span>");
					resetWishListForm();
				}
				else
				{
					$('#wish_list_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetWishListForm();
				}
			},"json")
			.error(function() 
			{ 
				$('#wish_list_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
				resetWishListForm();
			});	
		}
		else
		{
			$('#wish_list_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Product Already Added in Wish List.</span>");
		}
	}
	
	function submitProductErrorForm()
	{
		var product_error_query_text = $("#product_error_query_text").val();
		var productId = $("#product_error_product_id").val();
		var productName = $("#product_error_product_name").val();
		
		if( product_error_query_text == null || $.trim(product_error_query_text) == "")
		{
			$('#product_error_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Provide Comments.</span>");
			return false;
		}
		
		$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "reportErrorForProduct", productId : productId ,  product_error_query_text : product_error_query_text , productName : productName},function(data){
				if(data.status == 'success')
				{
					$('#product_error_err_msg').html("<span class='msgSucess'>Report Error Submitted Successfully!!</span>");
					resetProductErrorForm();
				}
				else
				{
					$('#product_error_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetProductErrorForm();
				}
			},"json")
		.error(function() 
		{ 
			$('#product_error_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			resetProductErrorForm();
		});	
		
	}
	
	function submitPriceChallangeForm()
	{
		var productId 		= $("#price_challange_product_id").val();
		var categoryId 		= $("#price_challange_sscatid").val();
		
		var productName 		= $("#price_challange_product_name").val();
		var categoryName 		= $("#price_challange_sscatname").val();
		
		var websiteUrl 		= $("#price_challange_website_url").val();
		if( websiteUrl == null || $.trim(websiteUrl) == "")
		{
			$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Website URL</span>");
			return false;
		}
		
		//var emailId			=	$("#price_challange_email_id").val();
		//var emailExp 		= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;	
		//if( emailId == null || $.trim(emailId) == ""  || !emailId.match(emailExp))
		//{
		//	$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Email Id</span>");
		//	return false;
		//}
		
		var contactNo  	 	= 	$("#price_challange_contact_no").val();
		var contactNoExp 	= /^[0-9]+$/;
		if(!contactNo.match(contactNoExp) || contactNo == "0000000000")
		{
			$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Contact Number</span>");
			return false;
		}
		
		if(contactNo.length != 10){
			$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Enter 10 Digit Contact Number</span>");
			return false;
		}
		
		
		var comments 	 	=  "";
		comments 			= " Website URL : " + ($("#price_challange_website_url").val()) + " ";
		comments 			= comments + " Comments : " + ($("#price_challange_comments").val());
		
		//alert("websiteUrl:"+websiteUrl+"emailId:"+emailId+"contactNo:"+contactNo+"comments:"+comments);
		$.post('/faces/jsp/ajax/ajax.jsp',{actionname : "submitPriceChallangeForProduct", contactNo : contactNo, comments : comments,categoryId : categoryId, productId : productId , productName : productName, categoryName : categoryName },function(data){
			if(data.status == 'success')
			{
				$('#price_challange_err_msg').html("<span class='msgSucess'>Request Submitted Successfully!!</span>");
				resetPriceChallengeForm();
			}
			else
			{
				$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
				resetPriceChallengeForm();
			}
			},"json")
		.error(function() 
		{ 
			$('#price_challange_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			resetPriceChallengeForm();
		});	
		
	}
	
	function submitCheckDeliveryForm()
	{
		document.getElementById('check_delivery_pincode_err_msg').innerHTML 	= "";
		var pinText 											= $("#check_delivery_pincode_id").val();
		var splrfnum 											= $("#check_delivery_pincode_splrfnum").val();
		var sellerid 											= $("#check_delivery_pincode_sellerid").val();
		var productid 											= $("#check_delivery_pincode_productid").val();
		var productname 										= $("#check_delivery_pincode_productname").val();
		
		
		if(pinText != "" && checkpostal(pinText)){
			$.post("/faces/jsp/ajax/ajax.jsp",{ actionname : "checkDeliveryForProduct" , splrfnum : splrfnum , sellerid : sellerid , pincode : pinText , productid : productid , productname : productname},function(data){
				if(data.status == 'success')
				{
					$('#check_delivery_pincode_err_msg').html("<span class='msgSucess'><b>Congratulations, We deliver this product in your area with the following methods:</b><br>"+(data.payment)+".</span>");
					resetCheckDeliveryForm();
					//$("#pincodeCheckTxt").val("<p><b>Sorry! This product is not deliverable in your region.</b></p>)");
				}
				else
				{
					$('#check_delivery_pincode_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Sorry! This product is not deliverable in your region.</span>");
					resetCheckDeliveryForm();
					//$("#pincodeCheckTxt").val("<p><b>This product is deliverable in your region with following payment options:</b><br>"+data[0]+".</p>");
				}
			}, "json"
			).error(function() 
			{ 
				$('#check_delivery_pincode_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
				resetCheckDeliveryForm();
			});
		}	
		else{
			$('#check_delivery_pincode_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please enter a valid 6 digit pincode.</span>");
		}
		
		return false;
	}
	
	function checkpostal(pinTextObj){
		
	   	var re5digit=/^\d{6}$/ //regular expression defining a 5 digit number
		if (pinTextObj.search(re5digit)==-1){ //if match failed
			return false;
		}
		else{
			return true;
		}
			
	}
	
	function submitSendEmailForm()
	{
		var productId 											= $("#send_email_product_id").val();
		var productName											= $("#send_email_product_name").val();
		var productUrl 											= $("#send_email_product_url").val();
		
		var send_email_email_id 								= $("#send_email_email_id").val();
		var emailExp 											= /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;	
		var send_email_name 									= $("#send_email_name").val();
		var send_email_comments 								= $("#send_email_comments").val();
		
		if( send_email_email_id == null || $.trim(send_email_email_id) == "")
		{
			$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Email Id</span>");
			return false;
		}
		
		if( send_email_email_id == null || $.trim(send_email_email_id) == ""  || !send_email_email_id.match(emailExp))
		{
			$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Valid Email Id</span>");
			return false;
		}
		
		if( send_email_name == null || $.trim(send_email_name) == "")
		{
			$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Name</span>");
			return false;
		}
		
		if( send_email_comments == null || $.trim(send_email_comments) == "")
		{
			$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Comments</span>");
			return false;
		}
		
		if(productId != null && productId != ""){
			$.post("/faces/jsp/ajax/ajax.jsp",{actionname : "submitSendEmailForm", send_email_email_id : send_email_email_id, send_email_name : send_email_name, send_email_comments : send_email_comments,  productId : productId, productName : productName, productUrl : productUrl}, function(data){
				if(data.status == "success"){
					$('#send_email_err_msg').html("<span class='msgSucess'>"+data.statusMessage+"</span>");
					resetSendEmailForm();
				}
				else
				{
					$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
					resetSendEmailForm();
				}
			},"json" )
			.error(function() 
			{ 
				$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
				resetSendEmailForm();
			});
		}
		else{
			$('#send_email_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
			resetSendEmailForm();
		}
		return false;
	}
	
	function submitReportAbuseForm()
	{
		var productId 											= $("#report_abuse_product_id").val();
		var entityId											= $("#report_abuse_entity_id").val();
		var entityType											= $("#report_abuse_entity_type").val();
		var comments 											= $("#report_abuse_comments").val();
		var productName 										= $("#report_abuse_product_name").val();
		
		if( comments == null || $.trim(comments) == "")
		{
			$('#report_abuse_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Please Enter Comments</span>");
			return false;
		}
		
		if(productId != null && productId != ""){
			 $.post("/faces/jsp/ajax/ajax.jsp",{actionname : "submitReportAbuseForm", productId : productId, entityId : entityId, entityType : entityType, comments : comments , productName : productName}, function(data){
				 if(data.status == "success"){
						$('#report_abuse_err_msg').html("<span class='msgSucess'>Report Abuse Submitted Successfully</span>");
						resetReportAbuseForm();
					}
					else
					{
						$('#report_abuse_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
						resetReportAbuseForm();
					}
			 },"json")
			 .error(function() {
					$('#report_abuse_err_msg').html("<span class='errMsg'>Error Occured Please Try Again!!</span>");
					resetReportAbuseForm();
			 });
		}
		else{
			$('#report_abuse_err_msg').html("<span class='errMsg'> <span class='icn_Error'>&nbsp;</span>Error Occured Please Try Again!!</span>");
		}
		return false;
	}
	
	function resetProductErrorForm()
	{
		document.getElementById('product_error_product_id').value 		= "";
		document.getElementById('product_error_query_text').value = "";
		document.getElementById('product_error_product_name').value 		= "";
	}
	
	function resetPriceChallengeForm()
	{
		document.getElementById('price_challange_product_id').value 	= "";
		document.getElementById('price_challange_sscatid').value 		= "";
		document.getElementById('price_challange_website_url').value 	= "";
		document.getElementById('price_challange_contact_no').value 	= "";
		document.getElementById('price_challange_comments').value 		= "";
		document.getElementById('price_challange_product_name').value 	= "";
		document.getElementById('price_challange_sscatname').value 		= "";
	}
	
	function resetSendEmailForm()
	{
		document.getElementById('send_email_product_name').value 		= "";
		document.getElementById('send_email_product_url').value 		= "";
		//document.getElementById('send_email_product_id').value 			= "";
		
		document.getElementById('send_email_email_id').value			= "";
		document.getElementById('send_email_name').value				= "";
		document.getElementById('send_email_comments').value			= "";
	}
	
	function resetReportAbuseForm()
	{
		document.getElementById('report_abuse_product_id').value 		= "";
		document.getElementById('report_abuse_entity_id').value 		= "";
		document.getElementById('report_abuse_entity_type').value 		= "";
		document.getElementById('report_abuse_comments').value 			= "";
		document.getElementById('report_abuse_product_name').value 		= "";
	}
	
	function resetWishListForm()
	{
		document.getElementById('wish_list_product_id').value 		= "";
		document.getElementById('product_tags').value = "";
		document.getElementById('product_comment').value = "";
	}
	
	function resetOutStockForm()
	{
		document.getElementById('out_stock_productId').value 			= "";
		document.getElementById('out_stock_contact_number').value = "";
		document.getElementById('out_stock_city').value = "";
		document.getElementById('out_stock_productName').value 			= "";
	}
	
	function resetRequestQuoteForm()
	{
		document.getElementById('request_quote_productId').value = "";
		document.getElementById('request_quote_contact_number').value = "";
		document.getElementById('request_quote_city').value = "";
		document.getElementById('request_quote_productName').value = "";
	}
	
	function resetSmsEmailForm()
	{
		document.getElementById('sms_email_productId').value 	= "";
		document.getElementById('sms_email_query').value = "";
		document.getElementById('sms_email_mobile_number').value = "";
		document.getElementById('sms_email_check').value = "";
	}
	
	function resetCheckDeliveryForm()
	{
		//document.getElementById('check_delivery_pincode_splrfnum').value 		= "";
		//document.getElementById('check_delivery_pincode_sellerid').value 		= "";			
		document.getElementById('check_delivery_pincode_id').value 	= "";
	}
}

/////////////////////////////////////// POPUP Functions START //////////////////////////////////////////////////////////////////////////

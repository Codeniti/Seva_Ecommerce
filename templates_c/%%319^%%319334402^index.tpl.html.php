<?php /* Smarty version 2.6.0, created on 2014-02-15 12:16:17
         compiled from ./templates/tmpl1/index.tpl.html */ ?>
<html>
<HEAD>
<TITLE>Online Shopping  - Shop Online for Laptops at Zenolaps.com</TITLE>
<META NAME="title" CONTENT="Online Shopping  - Shop Online for Laptops at Zenolaps.com" />
<META NAME="Keywords" CONTENT="online, shopping, price, comparison, compare, shop, mall, best,laptops,computers" />
<META NAME="Description" CONTENT="Online Shopping  -  shop online for  laptops at Zenolaps.com, an online shopping mall | store in india where you can compare and buy at best price.  Free Shipping . Pay Cash on Delivery" />
<script type="text/javascript" src="/staticContent/jquery-1.7.min.js"></script>
<script type="text/javascript" src="/staticContent/jquery.bxSlider.min.js"></script>
<script type="text/javascript" src="/staticContent/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript" src="/staticContent/jquery-ui.min.js"></script>
<script type="text/javascript" src="/staticContent/jquery.lazyload.min.js"></script>
<script type="text/javascript" src="/staticContent/easyTooltip.js"></script>
<script type="text/javascript" src="/staticContent/header.js"></script>
<script>contentPath.setStaticContentPath("/staticContent")</script>
<link rel=" stylesheet" type="text/css" href="/staticContent/zeno.css"/>
<script type="text/javascript" src="images/niftycube.js"></script>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "head.tpl.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<body marginwidth="1" margin height="0" leftmargin="0" topmargin="0">
<table vAlign=top style="background: url(images_layout/bg-gradient.jpg) repeat-y; " width=100% height=150% border="0" cellspacing="0" cellpadding="0"><tr><td >
<table  vAlign=top bgColor=#B2CC80 width=100%  height=50% border="0" cellspacing="0" cellpadding="0">
	<tr ><td height=150>

	<div id="header">
    	<div class="headerInfo"><center>
    	<table  vAlign=top width="70%"  border="0" cellspacing="0" cellpadding="0">				<tr>
                 	<td  width=70% align="right" style="font-size:14px;">	
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
                  		<tr>
                 		 <td align="right" >		<ul id="loginLinks"> 						<li style="border:0"><b>Welcome Guest!</b><li ><a href="contact.php"> Contact Us  </a></li>
			<li ><a href="">Help  </a></li>
			</ul>
                  		</td>
                   		</tr>
                   		<tr>
                   		<td>
			<div class="socialCallDiv" align = "right">
	<p class="callUs">
	<span class="noTel">	       24 x 7 - Customer Support  | Call us  <strong>0944-453-5000</strong> </span>
	</p>						</div> 		
               
               </div>
</td>
</tr>

 <tr>
    <td >
<table bgColor=#faffeb width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="23%">

           	 <h1>
            	<a href="/" style="text-decoration:none">
            	<img src="image/zenolapslogo.jpg" alt="Zenolaps" title="Online Shopping | Zenolaps.com " width="280" height="70" border="0">
            	</a>
  	</h1>            
            	</td>&nbsp;&nbsp;
	<td valign="bottom" width=54%>
				<table bgColor=#faffeb id="tabnav" border="0" cellspacing="0" cellpadding="0">
					<tr valign="top"><td> &nbsp;&nbsp;&nbsp;</td>
					  <td><div <?php if ($this->_tpl_vars['main_content_template'] == "home.tpl.html"): ?> class="topmenu_selected"<?php else: ?> class="topmenu_notselected"<?php endif; ?>><a href="index.php" class="menu"><?php echo @constant('LINK_TO_HOMEPAGE'); ?>
</a></div></td>
					  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
					  <td><div <?php if ($this->_tpl_vars['main_content_template'] == "pricelist.tpl.html"): ?> class="topmenu_selected"<?php else: ?> class="topmenu_notselected"<?php endif; ?>><a href="index.php?show_price=yes" class="menu"><?php echo @constant('STRING_PRICELIST'); ?>
</a></div></td>
					  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
					  <td><div <?php if (( $this->_tpl_vars['main_content_template'] == "aux_page.tpl.html" ) && ( $this->_tpl_vars['aux_page'] == 'aux1' )): ?> class="topmenu_selected"<?php else: ?> class="topmenu_notselected"<?php endif; ?>><a href="index.php?aux_page=aux1" class="menu"><nobr><?php echo @constant('ADMIN_ABOUT_PAGE'); ?>
</nobr></a></div></td>
					  <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
					  <td><div <?php if (( $this->_tpl_vars['main_content_template'] == "aux_page.tpl.html" ) && ( $this->_tpl_vars['aux_page'] == 'aux2' )): ?> class="topmenu_selected"<?php else: ?> class="topmenu_notselected"<?php endif; ?>><a href="index.php?aux_page=aux2" class="menu"><?php echo @constant('ADMIN_SHIPPING_PAGE'); ?>
</a></div>

</td>
					</tr>
				</table>
	</td>
    <td valign="middle" align="right" style="background: #ffffff url(images/gradientbg1.gif) repeat-y; background-position: right; height:70px; width:170px;">

				  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "language.tpl.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

                  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "search_form.tpl.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                  <a href="index.php?search_with_change_category_ability=yes" class="lightsmall"></a>
	</td>

  </tr>
  <tr>

	<td bgcolor="white" height="6" align="right"><img src="images/gradient-dark-strip.gif"></td>
	<td bgcolor="#003399" colspan="2" height="6"></td>

  <tr>
	<td bgcolor="white" height="6" align="right"><img src="images/gradient-dark-strip.gif"></td>
	<td bgcolor="#006E00" colspan="2" height="6"></td>
  </tr>
<tr>
	<td bgcolor="white" height="6" align="right"><img src="images/gradient-dark-strip.gif"></td>
	<td bgcolor="#006E00" colspan="2" height="6"></td>
  </tr>
<tr>
	<td bgcolor="white" height="6" align="right"><img src="images/gradient-dark-strip.gif"></td>
	<td bgcolor="#006E00" colspan="2" height="6"></td>
  </tr>
<tr>
	<td bgcolor="white" height="6" align="right"><img src="images/gradient-dark-strip.gif"></td>
	<td bgcolor="#006E00" colspan="2" height="6"></td>
  </tr>


  <tr> 
    <td width="220" valign="top" align="right">
	 <table cellspacing="0" cellpadding="0" border="0"><tr><td style="background: white url(images/gradientbg2.gif) repeat-y; background-position: right;width:250px;height:100%;">

<p style="padding:10px;">
        
		<table width="250" border="0" align="right" cellpadding="0" cellspacing="0">
		  <?php if (@constant('CONF_SHOW_ADD2CART') == 1): ?>
          <tr> 
            <td align="left" valign="top" bgcolor="#008A00" class="topcorners">
				<div style="padding:5px;font-size:130%;">
					<a href="index.php?shopping_cart=yes" class="menu"><?php echo @constant('CART_TITLE'); ?>
</a>
				</div>
			</td>
		  </tr>
		  <tr>  
            <td style="background: #B2DCB2; background-position: right; padding: 10px;" class="bottomcorners"> 
                            <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "shopping_cart_info.tpl.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
            </td>
          </tr>
		  <tr>
			<td>&nbsp;</td>
		  </tr>
		  <?php endif; ?>
          <tr> 
            <td align="left" valign="top" bgcolor="#352060" class="topcorners">
				<div style="padding:5px;font-size:130%;">
					<a href="index.php#catalog" class="menu"><?php echo @constant('ADMIN_CATALOG'); ?>
</a>
				</div>
			</td>
          </tr>
          <tr> 
                  <td align="left" valign="top" style="background: #C3B4E5; background-position: right; padding: 10px;" class="bottomcorners"> 
                          <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "category_tree.tpl.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
                  </td>
          </tr>

		

          <tr> 
            <td align="right" valign="top"><div align="right"> 
                <table width="200" border="0" align="left" cellpadding="0" cellspacing="0">

				  <tr> 
                    <td align="center" valign="top">
				
						<br><br><br><br><br>

					
						<a href="admin.php"><h3>Seva Administrator Login</h3></a>
						<a href="javascript:window.open('ordertracking_enter.html','mywindowtitle','width=900,height=450'); void(0)"><h3>TRACK ORDER!</h3></a>
						<p>



					</td>
                  </tr>

                </table>
              </div>
			</td>
 <td><br><br><br><br><br><br><br><br><br><br><br><br><br></td>         </tr>
		
        </table>
		</p>

		</td></tr>
		<tr><td align="right"><img src="images/gradientbg3.gif" border="0" width="270" height="121"></td></tr>
		</table>
      </td>
      <td width="100%" align="left" valign="top" style="padding:10px;" colspan="2">

            <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => ($this->_tpl_vars['main_content_template']), 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

       <br><br><br><br><br>
	  </td>
  </tr>

  </table> <center>Copyright &copy sevaenvironment.com

</td>
          </tr>
        </table></td>
          </tr>
        </table>
<!--
	following javascript code creates rounded corners for top menu, shopping cart and categories section
	using Nifty library (http://www.html.it/articoli/niftycube/index.html)
-->
<script type="text/javascript">
<?php echo '
	if ( ! (navigator.userAgent.indexOf(\'Opera\') != -1) )
	{
		Nifty("div.topmenu_notselected,div.topmenu_selected","top transparent");

		Nifty("td.topcorners","tl transparent");
		var tt_layers= getElementsBySelector("td.topcorners");
		for(var k=0, len=tt_layers.length; k<len; k++)
		{
			tt_layers[k].parentNode.style.backgroundColor = "#e0e7ff";
		}
		Nifty("td.topcorners","tr transparent");
		
		Nifty("td.bottomcorners","bl transparent");
		var tt_layers= getElementsBySelector("td.bottomcorners");
		for(var k=0, len=tt_layers.length; k<len; k++)
		{
			tt_layers[k].parentNode.style.backgroundColor = "#e0e7ff";
		}
		Nifty("td.bottomcorners","br transparent");
	}
'; ?>

</script>
<!--
	end of Nifty code
-->
</td>
          </tr>
        </table></td>
          </tr>
<tr><td width=100% height=100%>
</td></tr>
        </table>
</body>
</html>
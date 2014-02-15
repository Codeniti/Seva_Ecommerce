<?php /* Smarty version 2.6.0, created on 2013-03-06 06:40:53
         compiled from conf_login_pass.tpl.html */ ?>

<p>
<?php if ($this->_tpl_vars['configuration_saved'] == 1): ?>
<?php echo @constant('ADMIN_UPDATE_SUCCESSFUL'); ?>

<?php else: ?>

<?php if ($this->_tpl_vars['error'] != NULL): ?>
<p><font color="red"><b><?php echo $this->_tpl_vars['error']; ?>
</b></font>
<?php endif; ?>

<form action="admin.php" method=post>

 <input type=hidden name=dpt value="conf">
 <input type=hidden name=sub value="login_pass">
 <input type=hidden name=save_login_pass value=1>

 <table cellpadding=4>

	<tr>
	<td colspan=2 class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	<b><?php echo @constant('ADMIN_CHANGE_LOGINPASSWORD'); ?>
</b>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_CURRENT_LOGIN'); ?>
:</td>
	<td><input type=text name=new_login value="<?php echo $this->_tpl_vars['curr_log']; ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_OLD_PASS'); ?>
:</td>
	<td><input type=password name=old_pass value=""></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_NEW_PASS'); ?>
:</td>
	<td><input type=password name=new_pass value=""></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_NEW_PASS_CONFIRM'); ?>
:</td>
	<td><input type=password name=new_passconfirm value=""></td>
	</tr>

 </table>

 <input type=submit value="<?php echo @constant('SAVE_BUTTON'); ?>
">

</form>

<?php endif; ?>
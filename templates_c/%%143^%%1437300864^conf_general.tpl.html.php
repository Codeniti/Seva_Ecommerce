<?php /* Smarty version 2.6.0, created on 2013-03-06 00:06:15
         compiled from conf_general.tpl.html */ ?>
<?php require_once(SMARTY_DIR . 'core' . DIRECTORY_SEPARATOR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'replace', 'conf_general.tpl.html', 25, false),)), $this); ?>

<p>
<?php if ($this->_tpl_vars['configuration_saved'] == 1): ?>
<?php echo @constant('ADMIN_UPDATE_SUCCESSFUL'); ?>

<?php endif; ?>


<form action="admin.php" method=post>

 <input type=hidden name=dpt value="conf">
 <input type=hidden name=sub value="general">
 <input type=hidden name=save_general value=1>

 <table cellpadding=4>

	<tr>
	<td colspan=2 class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	<b><?php echo @constant('ADMIN_SETTINGS'); ?>
</b>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_SHOP_NAME'); ?>
:</td>
	<td><input type=text name=shop_name value="<?php echo ((is_array($_tmp=@constant('CONF_SHOP_NAME'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_SHOP_URL'); ?>
:</td>
	<td><input type=text name=shop_url value="<?php echo ((is_array($_tmp=@constant('CONF_SHOP_URL'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_SHOP_EMAIL'); ?>
:</td>
	<td><input type=text name=general_email value="<?php echo ((is_array($_tmp=@constant('CONF_GENERAL_EMAIL'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_ORDERS_EMAIL'); ?>
:</td>
	<td><input type=text name=orders_email value="<?php echo ((is_array($_tmp=@constant('CONF_ORDERS_EMAIL'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td colspan=2 class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	<b><?php echo @constant('ADMIN_CURRENCY'); ?>
</b>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_CURRENCY_ID_LEFT'); ?>
:</td>
	<td><input type=text name=currency_id_left value="<?php echo ((is_array($_tmp=@constant('CONF_CURRENCY_ID_LEFT'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_CURRENCY_ID_RIGHT'); ?>
:</td>
	<td><input type=text name=currency_id_right value="<?php echo ((is_array($_tmp=@constant('CONF_CURRENCY_ID_RIGHT'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_CURRENCY_ISO3'); ?>
:</td>
	<td><input type=text name=currency_iso3 value="<?php echo ((is_array($_tmp=@constant('CONF_CURRENCY_ISO3'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td colspan=2 class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	<b>PayPal</b>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_PAYPAL_INTEGRATION'); ?>
:</td>
	<td>
		<select name=paypal_enabled>
		 <option value="1"<?php if (@constant('CONF_PAYPAL_INTEGRATION') == 1): ?> selected<?php endif; ?>><?php echo @constant('ANSWER_YES'); ?>
</option>
		 <option value="0"<?php if (@constant('CONF_PAYPAL_INTEGRATION') == 0): ?> selected<?php endif; ?>><?php echo @constant('ANSWER_NO'); ?>
</option>
		</select>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_PAYPAL_EMAIL'); ?>
:</td>
	<td><input type=text name=paypal_email value="<?php echo ((is_array($_tmp=@constant('CONF_PAYPAL_EMAIL'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

 </table>

 <input type=submit value="<?php echo @constant('SAVE_BUTTON'); ?>
">

</form>
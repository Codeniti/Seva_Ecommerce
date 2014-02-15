<?php /* Smarty version 2.6.0, created on 2013-03-06 00:07:40
         compiled from conf_appearence.tpl.html */ ?>
<?php require_once(SMARTY_DIR . 'core' . DIRECTORY_SEPARATOR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'replace', 'conf_appearence.tpl.html', 26, false),)), $this); ?>

<p>
<?php if ($this->_tpl_vars['configuration_saved'] == 1): ?>
<?php echo @constant('ADMIN_UPDATE_SUCCESSFUL'); ?>

<?php endif; ?>


<form action="admin.php" method=post>

 <input type=hidden name=dpt value="conf">
 <input type=hidden name=sub value="appearence">
 <input type=hidden name=save_appearence value=1>

 <table cellpadding=4>

	<tr>
	<td colspan=3 class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	<b><?php echo @constant('ADMIN_SETTINGS_APPEARENCE'); ?>
</b>
	</td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_MAX_PRODUCTS_COUNT_PER_PAGE'); ?>
:</td>
	<td width=10>&nbsp;</td>
	<td><input type=text name=productscount value="<?php echo ((is_array($_tmp=@constant('CONF_PRODUCTS_PER_PAGE'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_MAX_COLUMNS_PER_PAGE'); ?>
:</td>
	<td width=10>&nbsp;</td>
	<td><input type=text name=colscount value="<?php echo ((is_array($_tmp=@constant('CONF_COLUMNS_PER_PAGE'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>


	<tr><td colspan=3 align=center><br>
	<?php echo @constant('ADMIN_MAIN_COLORS'); ?>

	</td></tr>

	<tr>
	<td align=right>

	<table><tr>
	<td>
	<?php echo @constant('ADMIN_COLOR'); ?>
 1:
	</td>
	</tr></table>

	</td>
	<td width=10><table bgcolor=black cellspacing=1><tr><td bgcolor=#<?php echo @constant('CONF_DARK_COLOR'); ?>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></td>
	<td><b>#</b><input type=text name=darkcolor value="<?php echo ((is_array($_tmp=@constant('CONF_DARK_COLOR'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right>

	<table><tr>
	<td>
	<?php echo @constant('ADMIN_COLOR'); ?>
 2:
	</td>
	</tr></table>

	</td>
	<td width=10><table bgcolor=black cellspacing=1><tr><td bgcolor=#<?php echo @constant('CONF_MIDDLE_COLOR'); ?>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></td>
	<td><b>#</b><input type=text name=middlecolor value="<?php echo ((is_array($_tmp=@constant('CONF_MIDDLE_COLOR'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right>

	<table><tr>
	<td>
	<?php echo @constant('ADMIN_COLOR'); ?>
 3:
	</td>
	</tr></table>

	</td>
	<td width=10><table bgcolor=black cellspacing=1><tr><td bgcolor=#<?php echo @constant('CONF_LIGHT_COLOR'); ?>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table></td>
	<td><b>#</b><input type=text name=lightcolor value="<?php echo ((is_array($_tmp=@constant('CONF_LIGHT_COLOR'))) ? $this->_run_mod_handler('replace', true, $_tmp, '"', '&quot;') : smarty_modifier_replace($_tmp, '"', '&quot;')); ?>
"></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_SHOW_ADD2CART'); ?>
:</td>
	<td width=10>&nbsp;</td>
	<td><input type=checkbox name=add2cart<?php if (@constant('CONF_SHOW_ADD2CART') == 1): ?> checked<?php endif; ?>></td>
	</tr>

	<tr>
	<td align=right><?php echo @constant('ADMIN_SHOW_BESTCHOICE'); ?>
:</td>
	<td width=10>&nbsp;</td>
	<td><input type=checkbox name=bestchoice<?php if (@constant('CONF_SHOW_BEST_CHOICE') == 1): ?> checked<?php endif; ?>></td>
	</tr>

 </table>

 <input type=submit value="<?php echo @constant('SAVE_BUTTON'); ?>
">

</form>
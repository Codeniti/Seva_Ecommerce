<?php /* Smarty version 2.6.0, created on 2013-03-06 00:07:11
         compiled from conf_aux.tpl.html */ ?>
<?php require_once(SMARTY_DIR . 'core' . DIRECTORY_SEPARATOR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'replace', 'conf_aux.tpl.html', 21, false),)), $this); ?>

<p>
<?php if ($this->_tpl_vars['configuration_saved'] == 1): ?>
	<?php echo @constant('ADMIN_UPDATE_SUCCESSFUL'); ?>

<?php endif; ?>


<form action=admin.php method=post>

<table border=0 cellpadding=15 cellspacing=0>

<tr class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
<td align=center><?php echo @constant('ADMIN_ABOUT_PAGE'); ?>
</td>
<td bgcolor="white">&nbsp;</td>
<td align=center><?php echo @constant('ADMIN_SHIPPING_PAGE'); ?>
</td>
</tr>

<tr>
 <td bgcolor=#F0EFFF>
	<textarea name=about_page rows=30 cols=50><?php echo ((is_array($_tmp=$this->_tpl_vars['about_page'])) ? $this->_run_mod_handler('replace', true, $_tmp, "<", "&lt;") : smarty_modifier_replace($_tmp, "<", "&lt;")); ?>
</textarea>
 </td>
 <td bgcolor="white">
	&nbsp;
 </td>
 <td bgcolor=#F0EFFF>
	<textarea name=shipping_page rows=30 cols=50><?php echo ((is_array($_tmp=$this->_tpl_vars['shipping_page'])) ? $this->_run_mod_handler('replace', true, $_tmp, "<", "&lt;") : smarty_modifier_replace($_tmp, "<", "&lt;")); ?>
</textarea>
 </td>
</tr>

</table>

<p>
<input type=hidden name=dpt value=conf>
<input type=hidden name=sub value=aux>
<input type=hidden name=save_aux value=1>
<input type=submit value="<?php echo @constant('SAVE_BUTTON'); ?>
">

</form>
<?php /* Smarty version 2.6.0, created on 2013-03-05 23:28:28
         compiled from catalog_special.tpl.html */ ?>
<?php require_once(SMARTY_DIR . 'core' . DIRECTORY_SEPARATOR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'cycle', 'catalog_special.tpl.html', 25, false),)), $this); ?>

<p>
<?php if ($this->_tpl_vars['save_successful'] != NULL): ?>
<?php echo $this->_tpl_vars['save_successful']; ?>

<?php endif; ?>

<p>
<?php echo @constant('ADMIN_SPECIAL_OFFERS_DESC'); ?>


<form action="admin.php" method=POST>

<table cellpadding=6 cellspacing=0>

 <tr class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
 <td align=center><?php echo @constant('ADMIN_PRODUCT_NAME'); ?>
</td>
 <td align=center><?php echo @constant('ADMIN_SORT_ORDER'); ?>
</td>
 <td>&nbsp;</td>
 </tr>

<?php if (isset($this->_sections['i'])) unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['offers']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['i']['show'] = true;
$this->_sections['i']['max'] = $this->_sections['i']['loop'];
$this->_sections['i']['step'] = 1;
$this->_sections['i']['start'] = $this->_sections['i']['step'] > 0 ? 0 : $this->_sections['i']['loop']-1;
if ($this->_sections['i']['show']) {
    $this->_sections['i']['total'] = $this->_sections['i']['loop'];
    if ($this->_sections['i']['total'] == 0)
        $this->_sections['i']['show'] = false;
} else
    $this->_sections['i']['total'] = 0;
if ($this->_sections['i']['show']):

            for ($this->_sections['i']['index'] = $this->_sections['i']['start'], $this->_sections['i']['iteration'] = 1;
                 $this->_sections['i']['iteration'] <= $this->_sections['i']['total'];
                 $this->_sections['i']['index'] += $this->_sections['i']['step'], $this->_sections['i']['iteration']++):
$this->_sections['i']['rownum'] = $this->_sections['i']['iteration'];
$this->_sections['i']['index_prev'] = $this->_sections['i']['index'] - $this->_sections['i']['step'];
$this->_sections['i']['index_next'] = $this->_sections['i']['index'] + $this->_sections['i']['step'];
$this->_sections['i']['first']      = ($this->_sections['i']['iteration'] == 1);
$this->_sections['i']['last']       = ($this->_sections['i']['iteration'] == $this->_sections['i']['total']);
?>

 <input type=hidden name="offer_productID_<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][0]; ?>
" value="<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][1]; ?>
">

 <tr class="<?php echo smarty_function_cycle(array('values' => "bg_white, bg_".($this->_tpl_vars['current_dpt'])), $this);?>
">
 <td><a href="admin.php?dpt=catalog&sub=products_categories&categoryID=<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][3]; ?>
"><?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][4]; ?>
</a></td>
 <td align=center><input type=text size=5 name="offer_sort_<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][0]; ?>
" value="<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][2]; ?>
"></td>
 <td><a href="admin.php?dpt=catalog&sub=special&delete=<?php echo $this->_tpl_vars['offers'][$this->_sections['i']['index']][0]; ?>
"><img src="images/backend/button_delete.gif" border=0 alt="<?php echo @constant('DELETE_BUTTON'); ?>
"></a></td>
 </tr>

<?php endfor; else: ?>

 <tr bgcolor=white>
 <td colspan=3><nobr><?php echo @constant('ADMIN_NO_SPECIAL_OFFERS'); ?>
</nobr></td>
 </tr>

<?php endif; ?>

</table>

<p>
<input type=hidden name="dpt" value="catalog">
<input type=hidden name="sub" value="special">
<input type=hidden name="save_offers" value="yes">

<input type=submit value="<?php echo @constant('SAVE_BUTTON'); ?>
">

</form>
<?php /* Smarty version 2.6.0, created on 2014-02-12 17:40:23
         compiled from custord_new_orders.tpl.html */ ?>

<p><?php echo @constant('ADMIN_ABOUT_PRICES'); ?>


<?php if ($this->_tpl_vars['new_order_count'] != 0): ?>

<p>
	<table width="100%" border="0" cellspacing="0" cellpadding="6">

	<tr class="mainmenu_selected_<?php echo $this->_tpl_vars['current_dpt']; ?>
">
	 <td><b><?php echo @constant('STRING_ORDER_ID'); ?>
</b></td>
	 <td><b><?php echo @constant('TABLE_CUSTOMER'); ?>
</b></td><td><b><?php echo @constant('CUSTOMER_EMAIL'); ?>
</b></td> <td><b><?php echo @constant('CUSTOMER_ADDRESS'); ?>
</b></td>
	 <td><b><?php echo @constant('CUSTOMER_PHONE_NUMBER'); ?>
</b></td><td><b><?php echo @constant('TABLE_ORDERED_PRODUCTS'); ?>
</b></td>
	 <td align=center><b><?php echo @constant('TABLE_ORDER_TOTAL'); ?>
</b></td>
	 <td><b><?php echo @constant('TABLE_ORDER_TIME'); ?>
</b></td><td>&nbsp;</td>
	</tr><tr><td><a href="javascript:window.open('orderupdatingpage_admin.html','mywindowtitle','width=900,height=450'); void(0)">Update Customer Order Status</td></tr></a>

	<?php if (isset($this->_sections['i'])) unset($this->_sections['i']);
$this->_sections['i']['name'] = 'i';
$this->_sections['i']['loop'] = is_array($_loop=$this->_tpl_vars['orders']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
	<tr class="<?php if (!($this->_sections['i']['index'] % 2)): ?>bg_white<?php else: ?>bg_<?php echo $this->_tpl_vars['current_dpt'];  endif; ?>">
		<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][0]; ?>
</td>
				<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][2]; ?>
 <?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][3]; ?>
</td>
		<td><a href="mailto:<?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][4]; ?>
"><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][4]; ?>
</a></td>
		<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][9]; ?>
<br><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][8]; ?>
 <?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][7]; ?>
 <?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][6]; ?>
<br><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][5]; ?>
</td>
		<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][10]; ?>
</td>
		<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][11]; ?>
</td>
		<td align=center><b><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][12]; ?>
</b></td>
		<td><?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][1]; ?>
</td>
		<td><a href="javascript:confirmDelete(<?php echo $this->_tpl_vars['orders'][$this->_sections['i']['index']][0]; ?>
,'<?php echo @constant('QUESTION_DELETE_CONFIRMATION'); ?>
','admin.php?dpt=custord&sub=new_orders&delete=');"><img src="images/backend/button_delete.gif" border=0 alt="<?php echo @constant('CANCEL_BUTTON'); ?>
"></a></td>
	</tr>
	<?php endfor; endif; ?>

	</table>
	<input type=hidden name=dpt value=custord>
	<input type=hidden name=sub value=new_orders>

<?php else: ?>

	<p><?php echo @constant('STRING_NO_ORDERS'); ?>


<?php endif; ?>
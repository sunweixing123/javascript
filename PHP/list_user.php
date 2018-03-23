<!DOCTYPE html>
<html>
<head>

	<title></title>
	    <base href="<?php echo site_url() ?>">
    <style>
        table {
            border-collapse: collapse;
            border: 1px solid #000;
        }

        td, th {
            border: 1px solid #000;
        }
    </style>
</head>
<body>
<table>
	<tr>
		<th>ID</th>
		<th>姓名</th>
		<th>真实姓名</th>
		<th>电话</th>
		<th>操作</th>
	</tr>
	<?php 
		foreach ($users as $user) {
		?>
		<tr>
			<td><?php echo $user->user_id ?></td>
			<td><?php echo $user->username ?></td>
			<td><?php echo $user->realname ?></td>
			<td><?php echo $user->tel ?></td>
			<td><a href="#">修改</a> <a class="del" href="welcome/delete_user/" <?php echo $user -> user_id ?>>删除</a></td>
		</tr>
		<?php 
}

		 ?>
		

	 
</table>
</body>
</html>
<?php
	if(isset($_GET['search'])){
		$score = $_GET['score'];
		if(is_numeric($score)&&$score<=100&$score>=0){
			if($score>=80){
				echo "<script> alert('您的成绩是优秀！')</script>";
			}else if($score>=60){
				echo "<script> alert('您的成绩是合格！')</script>";
			}else{
				echo "<script> alert('您的成绩是不合格！')</script>";
			}
		}else{
			echo "<script>alert('输入非法')</script>";
		}
	}
	if(isset($_GET['reset'])){

	}
?>
<meta charset="utf-8">
<form action="5_test.php" method="get" accept-charset="utf-8">
	<h1>输入分数查询成绩</h1>
	分数: <input type="text" name="score" value="<?php echo $score?>">
	<br/>
	<br/>
	<input type="submit" value="提交查询" name="search">
	<input type="submit" value="重置分数" name="reset">
</form>

<html>
<head>
</head>
<link rel="stylesheet" href="http://www.stud.uni-karlsruhe.de/~ukatt/style.css" type="text/css">
<body background="http://www.stud.uni-karlsruhe.de/~ukatt/bg_content.png" bgproperties="fixed" style="background-attachment:fixed">
<?
$mySPLITCOMMAND = ">>>";

$content = implode(file("gb.txt"),$mySPLITCOMMAND);

$myGB = fopen("gb.txt","w");

fwrite($myGB,chop(htmlentities($HTTP_POST_VARS["userNAME"])));
fwrite($myGB,$mySPLITCOMMAND);
fwrite($myGB,chop(htmlentities($HTTP_POST_VARS["userMAIL"])));
fwrite($myGB,$mySPLITCOMMAND);
$my_array = split("http://",$HTTP_POST_VARS["userHOMEPAGE"]);
fwrite($myGB,chop(htmlentities($my_array[0])));
fwrite($myGB,chop(htmlentities($my_array[1])));
fwrite($myGB,$mySPLITCOMMAND);
$my_userMessage = $HTTP_POST_VARS["userTEXT"];
$my_userMessage = str_replace("\n", " ", "$my_userMessage");
$my_userMessage = chop(htmlentities($my_userMessage));
fwrite($myGB,$my_userMessage);
fwrite($myGB,$mySPLITCOMMAND);
fwrite($myGB,date("d.m.y, H:i"));
fwrite($myGB,$mySPLITCOMMAND);
fwrite($myGB,$content);
fclose($myGB);
?>
<script language="javascript">
<!--
  parent.frames[4].location.reload()
-->
</script>
Danke f&uuml;er deinen Eintrag!<br>
<br>
<br>
Hier geht's <a href="javascript:history.back();">zurueck</a>.
</body>
</html>
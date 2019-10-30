<html>
<head>
<link rel="stylesheet" href="http://www.stud.uni-karlsruhe.de/~ukatt/style.css" type="text/css">
<style type="text/css">
<!--
  td {font-size:10px;}
a {text-decoration:none; color:#5a6396;}
-->
</style>
</head>
<body background="http://www.stud.uni-karlsruhe.de/~ukatt/back_content.png" bgproperties="fixed" style="background-attachment:fixed">
<b>Gaestebuch</b><br><br><br>
<?
$mySPLITCOMMAND = ">>>";

$content = implode(file("gb.txt"),$mySPLITCOMMAND);

$myTemp = split($mySPLITCOMMAND,$content);

if (count($myTemp)==1) echo 'Leider keine Eintraege vorhanden!';

for($j=0; 5*$j<(count($myTemp)-1); $j++)
{
  if ($myTemp[$j*5+3]!="")
  {
    if (strpos($myTemp[$j*5+1],"@")===false) {$myTemp[$j*5+1]="";}
    if (strpos($myTemp[$j*5+1]," ")!==false) {$myTemp[$j*5+1]="";}
    if (strpos($myTemp[$j*5+2]," ")!==false) {$myTemp[$j*5+2]="";}
    if ($myTemp[$j*5+0]=="") {$myTemp[$j*5]="<font color='#7f7f7f'><i>anonymous</i></font>"; $myTemp[$j*5+1]="";}
    echo '<table bgcolor="#c2c6dc" width="320" cellpadding="1" cellspacing="1">';
    echo '<tr><td background="http://www.stud.uni-karlsruhe.de/~ukatt/feedback/background.png"><table cellpadding="0" cellspacing="0" width="100%"><tr><td align="left">';
    if ($myTemp[$j*5+1]!="") echo '<a href="mailto:',$myTemp[$j*5+1],'">';
    echo $myTemp[$j*5+0];
    if ($myTemp[$j*5+1]!="") echo '</a>';
    echo '</td><td align="right">';
    echo '<font color="#7f7f7f"><tt>',$myTemp[$j*5+4],'</tt></font>';
    echo '</td></tr></table>';
    echo '</td></tr>';
    echo '<tr><td colspan="2" bgcolor="#eaebf4">', $myTemp[$j*5+3];
    if ($myTemp[$j*5+2]!="") echo '<br><br><a href="//',$myTemp[$j*5+2],'" target=_blank>',$myTemp[$j*5+2],'</a>';
    echo '</td></tr></table><br>';
  }
}
?>
</body>
</html>
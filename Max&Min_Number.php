<?php

// Min & max number show using forloop and condation in PHP.


$arrayList = array(10, 200, 3, 40, 500, 60);

$max = $arrayList[0];
$min = $arrayList[0];

for ($i = 0; $i < count($arrayList); $i++) {

  if ($arrayList[$i] > $max) {
    $max = $arrayList[$i];
  } elseif ($arrayList[$i] < $min) {
    $min = $arrayList[$i];
  }
}
echo $max . "\n";
echo $min;

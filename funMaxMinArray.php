<?php

// find max & min number in PHP using function.



$number = array(1, 20, 30, 4, 50, 600, 70);

function findNumber($number)
{
  $max = $number[0];
  $min = $number[0];
  for ($i = 0; $i < count($number); $i++) {
    if ($number[$i] > $max) {
      $max = $number[$i];
    } elseif ($number[$i] < $min) {
      $min = $number[$i];
    }
  }
  return $max . "\t" . $min;
}
echo findNumber($number);


?>
<?php

$files = array_diff(scandir('img/small'), array('..', '.'));
foreach ($files as $file) {
    echo '<a href="img/big/' . $file . '" data-lightbox="roadtrip"><img src="img/small/' . $file . '"></a>';
}

?>

var arr = [ "IMG_1355.jpg", "IMG_1388.jpg", "IMG_1393.jpg", "IMG_1405.jpg", "IMG_1408.jpg", "IMG_1418.jpg", "IMG_1421.jpg", 
            "IMG_1513.jpg", "IMG_1534.jpg", "IMG_1619.jpg", "IMG_1636.jpg", "IMG_1654.jpg", "IMG_1659.jpg", "IMG_1662.jpg", 
            "IMG_1664.jpg", "IMG_1667.jpg", "IMG_1671.jpg", "IMG_1684.jpg", "IMG_1685.jpg", "IMG_1689.jpg", "IMG_2225.jpg", 
            "IMG_2271.jpg", "IMG_2283.jpg", "IMG_2295.jpg", "IMG_2306.jpg", "IMG_2310.jpg", "IMG_2322.jpg", "IMG_2339.jpg", 
            "IMG_2366.jpg", "IMG_2396.jpg", "IMG_2416.jpg", "IMG_2423.jpg", "IMG_2430.jpg", "IMG_2449.jpg", "IMG_2460.jpg", 
            "IMG_2467.jpg", "IMG_2471.jpg", "IMG_2507.jpg", "IMG_2516.jpg", "IMG_2525.jpg", "IMG_2533.jpg", "IMG_2549.jpg", 
            "IMG_2551.jpg", "IMG_2558.jpg", "IMG_2566.jpg", "IMG_2570.jpg", "IMG_2584.jpg", "IMG_2637.jpg", "IMG_2645.jpg", 
            "IMG_2647.jpg", "IMG_2672.jpg" ];
            
$(function() {
    $.fn.cookiesEU({
        auto_accept: false
    });
    $.each( arr, function( i, val ) {
      $("#thumbs").append('<a href="img/big/' + val + '" data-lightbox="roadtrip" data-title="Riwiera"><img alt="Dom wypoczynkowy Riwiera" class="img-thumbnail lazy" data-original="img/small/' + val + '"></a>');
    });
    $("img.lazy").lazyload();
});
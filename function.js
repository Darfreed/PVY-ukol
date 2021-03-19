$("#vypocti").on("click", function () {
    var a = $("#strana_a").val();
    var b = $("#strana_b").val();
    var c = $("#strana_c").val();
    var vysledky = $("#vysledky").html();
    if(a >= 1 && b >= 1 && c < 1){
        c = Math.pow(Math.pow(a,2) + Math.pow(b,2),1/2)
    }
    else if(a >= 1 && b < 1 && c > a){
        b = Math.pow(Math.pow(c,2) - Math.pow(a,2),1/2)
    }
    else if(a < 1 && b >= 1 && c > b){
        a = Math.pow(Math.pow(c,2) - Math.pow(b,2),1/2)
    }
    console.log(a+","+b+","+c);
    if(c == Math.pow(Math.pow(a,2) + Math.pow(b,2),1/2)&&(a>1||b>1||c>1)){
        $("#vysledky").html("<p class=\"vysledek\">Strany a = "+a+", b = "+b+", c = "+c+" tvoří pravoúhlý trojúhelník!</p>"+vysledky);
    }
    else{
        $("#vysledky").html("<p class=\"vysledek\">Strany a = "+a+", b = "+b+", c = "+c+" netvoří pravoúhlý trojúhelník!</p>"+vysledky);
    }
    console.log(vysledky);
});

$("#smaz").on("click", function () {
    $(".vysledek").remove();
})

$("header").on("click",function () {
    $("h1").toggle();
})
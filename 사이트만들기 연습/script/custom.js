//메뉴

$(".nav > ul > li").hover(function(){
    $(this).find(".submenu").stop().slideDown();
}, function(){
    $(this).find(".submenu").stop().slideUp();
});

//이미지 슬라이드
var slideCount = $(".slideImg").length;
//console.log(slideCount);
var currentIndex = 0;

setInterval(function(){
    if(currentIndex < slideCount -1){
        currentIndex++
    }else{
        currentIndex = 0;
    }
    var slidePostion = currentIndex * (-378)+"px";
    
    $(".slideList").animate({ top:slidePostion},400);
},3000);

  
//탭메뉴
var tabMenu = $(".notice")
tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault;
    var target = $(this);
    
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);


//레이어팝업
$(".ad").click(function(){
    $(".layer_bg").css("display","block")
})
$(".close").click(function(){
    $(".layer_bg").css("display","none")
})


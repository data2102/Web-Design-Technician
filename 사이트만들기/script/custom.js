    
//메뉴 
        $(".nav > ul > li").hover(function(){
            $(this).find(".submenu").stop().slideDown();
        }, function(){
            $(this).find(".submenu").stop().slideUp();
        });
// 서브메뉴 JS 원리
// .nav > ul > li 를 hover 하는경우 function(){}를 실행하라. $(this)는 내가 hover한 메뉴를 가르킨다.
// 이때, find()를 통해 가르킨 메뉴에 .submenu를 찾아서 stop().slideDown()으로 한번만 슬라이드 다운 해라.
        
//이미지 슬라이드 
        var slideCount = $(".slideImg").length //현재 이미지 개수를 구한다. 
        var currentIndex = 0;       //현재 이미지를 변수에 저장

        setInterval(function(){
            if(currentIndex < slideCount -1){
                currentIndex++
            } else {
                currentIndex = 0;
            }
            var slidePosition = currentIndex * (-378)+"px";

            //console.log(slidePosition);
            $(".slideList").animate({ top:slidePosition},400);
        },3000);

//탭메뉴 
var tabMenu = $(".notice");
tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};
// next()는 선택한 요소의 다음요소를 선택한다. 
// parent()는 해당 요소의 바로 위에 존재하는 하나의 부모요소를 반환한다. 
// siblings()는 자신의 제외한 형제요소를 찾는다. 

tabMenu.find("ul > li > a").click(tabList).focus(tabList);

//레이어 팝업

$(".ad").click(function(){
    $(".layer_bg").css("display","block");
//    $(".layer_bg").slideDown();
})

$(".close").click(function(){
    $(".layer_bg").css("display","none");
})









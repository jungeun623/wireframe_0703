$(document).ready(function(){
    //submenu 가 전체가 보여지는 코드
    // $(".navi > li").mouseover(function(){
    //     $(".submenu").stop().slideDown(500)
    // }).mouseout(function(){
    //     $(".submenu").stop().slideUp(500)
    // })   
// navi에 해당하는 submenu가 나오는 코드
$(".navi > li").mouseover(function(){
    // console.log(this);
    $(this).find(".submenu").stop().slideDown(500)})
    .mouseout(function()
    {$(this).find(".submenu").stop().slideUp(500)})
//이미지 슬라이드 기능
setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : -1200 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : -2400 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft : 0 });
    $(".slidelist").delay(2000);
});
    // tapmenu
    $(function(){
        $(".tabmenu > li >a").click(function(){
            // console.log(this);
            $(this).parent().addClass("active").siblings().removeClass("active")
        })
    })
    // modal 기능
    $(".popup").click(function(){
        $(".modal").addClass("active")});
    // 모달창 닫기기능
    $(".close").click(function(){
        $(".modal").removeClass("active")});
});
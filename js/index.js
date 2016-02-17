/**
 * Created by Administrator on 2016/2/17.
 */
$("#nav ul li a").click(function(){
    $(this).addClass("current");
    $(this).parent().siblings().find("a").removeClass("current");
});


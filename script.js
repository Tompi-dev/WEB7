$(function(){
console.log("jQuery is ready!");
$("#readyTag").text("status: ready");
$("#pingReady").click(()=>alert("jQuery document ready!"));



$("#t1-text").click(()=>$("#t1-id").text("Changed via .text()"));
$("#t1-html").click(()=>$("#t1-id").html("<b>Changed</b> via HTML"));
$("#t1-css").click(()=>$("#task1 p").css({color:'#6a5acd'}));
$("#t1-reset").click(()=>$("#task1 p").attr('style',''));


$("#t2-hide").click(()=>$("#t2-paragraph").hide());
$("#t2-show").click(()=>$("#t2-paragraph").show());
$("#t2-toggle").click(()=>$("#t2-paragraph").toggle());



$("#t3-in").click(()=>$("#t3-img").fadeIn());
$("#t3-out").click(()=>$("#t3-img").fadeOut());
$("#t3-toggle").click(()=>$("#t3-img").fadeToggle());


$("#t4-down").click(()=>$("#t4-panel").slideDown());
$("#t4-up").click(()=>$("#t4-panel").slideUp());
$("#t4-toggle").click(()=>$("#t4-panel").slideToggle());

$("#t5-append").click(()=>$("#t5-list").append("<li>Appended</li>"));
$("#t5-prepend").click(()=>$("#t5-list").prepend("<li>Prepended</li>"));
$("#t5-remove").click(()=>$("#t5-list li").last().remove());

$("#t6-change-img").click(()=>$("#t6-img").attr("src","https://picsum.photos/seed/new/400/250"));
$("#t6-change-link").click(()=>$("#t6-link").attr("href","https://www.w3schools.com/jquery/").text("Go to W3Schools"));
$("#t6-reset").click(()=>$("#t6-img").attr("src","https://picsum.photos/seed/aitu/400/250"));



$("#t7-name, #t7-email").on('input', ()=>{
$("#t7-name-out").text($("#t7-name").val() || '—');
$("#t7-email-out").text($("#t7-email").val() || '—');
});
$("#t7-clear").click(()=>{ $("#t7-name,#t7-email").val(''); $("#t7-name-out,#t7-email-out").text('—'); alert('Cleared'); });



const resetBox=()=>$("#box").css({left:0,top:0,width:150,height:35,opacity:1,position:'relative'});
resetBox();
$("#t8-grow").click(()=>$("#box").animate({left:'+=100',top:'+=20',width:200,height:80},400));
$("#t8-reset").click(resetBox);



$("#t9-run").click(()=>{
$("#box").animate({left:'+=100'},300).animate({top:'+=100'},300).animate({width:100,height:40},300).animate({left:0,top:0,width:150,height:35},400);
});
$("#t10-run").click(()=>$("#box").animate({left:150,top:30,opacity:0.5,width:180,height:70},600));


$(".acc-header").click(function(){
$(this).next().slideToggle();
});
$("#mini-expand").click(()=>$(".acc-content").slideDown());
$("#mini-collapse").click(()=>$(".acc-content").slideUp());
});
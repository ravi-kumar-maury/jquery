$("h1").css("color","red") // setting color
$("button").css("color","red") // all buttons 
$("h1").addClass("big-title") // adding class
$("h1").text("hi")
$("h1").html("<em>ok<em>") 
$("button").click(()=>{ // event listener :) damn compact
    var audio = new Audio("wm.mp3");
    audio.play()
})
$("a").attr("href","https://www.google.com") // setting attribute
$("input").keypress((event)=>{
    //console.log(event.key);
    $("h1").text(event.key)
}) 
$("button").on("mouseover", ()=> { //flexible event listener 
      $("button").css("color","blue")
})
$("button").on("click", ()=> { //flexible event listener 
    $("button").hide()
})


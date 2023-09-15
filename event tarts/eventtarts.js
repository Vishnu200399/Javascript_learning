window.onload = function(){

    let circlepo = document.getElementById("cirlce")
    function detectMousePosition(event){
        e=event;
        console.log(e.clientX);
        console.log(e.clientY);

        circlepo.style.top = e.clientY+"px";
        circlepo.style.left = e.clientX+"px";
    }
    document.addEventListener("mousemove",detectMousePosition)
}
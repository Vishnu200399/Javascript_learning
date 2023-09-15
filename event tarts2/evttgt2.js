window.onload =function(){
    let mainItem = document.getElementById("container");
    function getVal(event){
        e =event.target;
        console.log(e.innerHTML);
    };

    mainItem.addEventListener("click",getVal);
    alert(e);
}
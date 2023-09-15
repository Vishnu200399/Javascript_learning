window.onload=function(){
    let alldivs = document.getElementsByClassName("items");
    //console.log(alldivs)
    function innerContent(){
        console.log(this.innerHTML);
    }
    for(let i=0;i<alldivs.length;i++){
        alldivs[i].addEventListener("click",innerContent)
    }
}
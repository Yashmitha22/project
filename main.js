function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "10%"){
            nav.style.right - "-10%";
            bar.src = "photos/img4.jpeg"
        }else{
            nav.style.right = "0%";
            bar.src = "photos/image3bt.jpeg"
        }
    }
}
myNav();
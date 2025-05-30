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

function myHeader(){
    let header = document.getElementById("header");
    let lamp = document.getElementById("lamp");
    window.addEventListener("scroll",function(){
        if(window.scrollY > 0){
            header.classList.add("active")
            lamp.src = "photos\img3bt.jpeg";
        }else{
            header.classList.remove("active")
            lamp.src = "photos\img4.jpeg";
        }
    })
}
myHeader()
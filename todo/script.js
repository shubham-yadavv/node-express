function add(){
    document.getElementById("error").innerHTML = " ";


    let name = document.getElementById("name").value;
    if(name ==''){
        document.getElementById("error").innerHTML = "Please enter a name";
    }
    else{
        let box = document.getElementById("box");

        let list = document.createElement("li");
        list.textContent=name;

        let a=document.createElement("a");
        a.textContent="X";
    
        list.appendChild(a);

        let pos = box.firstElementChild;
        if(pos == null){
            box.appendChild(list);
        }
        else{
            box.insertBefore(list,pos);
        }

    }
    document.getElementById("name").value = "";

}


let btn = document.querySelector("ul");
btn.addEventListener("click",function(e){
    let box = document.getElementById("box");
    let list = e.target.parentNode;
    box.removeChild(list);

});
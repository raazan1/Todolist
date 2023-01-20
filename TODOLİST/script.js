var buttonDOM = document.querySelector("#button")
buttonDOM.addEventListener('click',listAdd)

var list = []
function listAdd(event){
    event.preventDefault()

    const inputDOM = document.querySelector("#input").value;


    if(inputDOM ==="" || inputDOM.trim() === ''){
        alert("Boş Değer Girilemez !!!")
        document.querySelector("#input").value = "";
    } 
    else{

        var li = document.createElement("li");
        var button = document.createElement('button');
        button.style.cssText = ("float:right; border:none;");
        button.classList.add('DEL')
        button.innerHTML = "X"
        var text = document.createTextNode(inputDOM)
        li.appendChild(text);
        li.appendChild(button);
        document.getElementById("ul").appendChild(li);

        document.querySelector("#input").value = "";
        list.push(inputDOM)
        localStorage.setItem("liste",JSON.stringify(list))
        console.log("Uzunluk::",JSON.parse(localStorage.getItem("liste")))

        var current_tasks = document.querySelectorAll(".DEL");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

}


document.querySelector("nav").addEventListener("click", (e) => {
    if(e.target.nodeName != "I") return
    let data;
    switch (e.target.getAttributeNode("item-id").value) {
        case "home":
            data = {title :"HOME" , color : "red" , itemId:"home" , colorText : "white"}
            update(data)
            history.pushState(data , "home" ,"home")
            break;
        case "search":
            data = {title :"SEARCH" , color : "blue" , itemId:"search" , colorText : "white"}
            update(data)
            history.pushState(data , "search" ,"search")
            break;
        case "likes":
            data = {title :"LIKE" , color : "yellow" , itemId:"likes" , colorText : "green"}
            update(data)
            history.pushState(data , "likes" ,"likes")
            break;
    
        default:
            data = {title :"PROFILE" , color : "pink" , itemId:"profile" , colorText : "red"}
            update(data)
            history.pushState(data , "profile" ,"profile")
            break;
    }
})


function update(data){
    document.querySelector("h1").innerText = data.title
    document.querySelector("h1").style.color = data.colorText
    document.querySelector("h1").style.backgroundColor = data.color
    document.querySelectorAll("i").forEach(element =>{ 
        element.style.color = "#666"
        document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black"
    })
}

window.addEventListener('popstate',(e) => {
    if(history.state){
        update(history.state)
    }else{
        update({title :"HOME" , color : "red" , itemId:"home" , colorText : "white"})
    }
})

window.reload((e) => {
    if(history.state){
        update(history.state)
    }else{
        update({title :"HOME" , color : "red" , itemId:"home" , colorText : "white"})
    }
})
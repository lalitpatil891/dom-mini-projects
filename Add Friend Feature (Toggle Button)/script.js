var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add-btn")
var check = 0 ;

addFriend.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.backgroundColor = "lightgray"
        addFriend.style.color = "black"
        addFriend.style.border = "1px solid lightgray"

        console.log("Friend added")
        check = 1;
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "cadetblue"
        addFriend.style.color = "white"
        addFriend.style.border = "1px solid lightgray"
        console.log("Friend removed")
        check = 0;
    }
   
})

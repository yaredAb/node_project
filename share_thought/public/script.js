var isSelected = false;
document.getElementById("comment").addEventListener("click", () => {
    var element = document.getElementById("display-comment");
    if (isSelected) {
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
    isSelected = !isSelected;
})

var isLiked = false;
document.getElementById("like").addEventListener("click", (event) => {
  var element = event.currentTarget; // Get the clicked element
    if (isLiked) {
    element.style.color = "red";
    } else {
    element.style.color = "gray";
    }
isLiked = !isLiked;
});

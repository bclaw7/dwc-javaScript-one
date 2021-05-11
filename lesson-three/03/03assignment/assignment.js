// https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/12/kirkjufell-1313x875.jpg

function addImage() {
    // let imageSrc = imageForm.imageUrl.value;
    let imageSrc = document.getElementById("imageUrl").value;
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", imageSrc);
    document.body.appendChild(imgElement);
}
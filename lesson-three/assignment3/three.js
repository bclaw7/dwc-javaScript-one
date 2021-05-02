function addImage() {
    let imageSrc = document.getElementById("imageUrl").value;
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", imageSrc);
    document.body.appendChild(imgElement);
}
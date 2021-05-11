function showImage() {
    var img = document.createElement('IMG');
    img.src = imageForm.userImage.value;
    img.classList.add("niceImage");
    document.body.appendChild(img);
}
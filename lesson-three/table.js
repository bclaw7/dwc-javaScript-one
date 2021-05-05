function addToList() {
    let product = productForm.productName.value
    let price = productForm.productPrice.value

    document.getElementById("userTable").appendChild(tr);

    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(product));

    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(price));

    tr.appendChild(td1);
    tr.appendChild(td2);

    let tr = document.createElement("tr");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(product + price));
    if(productForm.productName.value.toUpperCase() === "strawberries".toUpperCase) {
        li.style.color = "red";
    }
    document.getElementById("userList").appendChild(li);

    productForm.productName.value = "";
}

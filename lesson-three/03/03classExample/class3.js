function addToList() {
    // get values from form
    let product = productForm.productName.value;
    let price = productForm.productPrice.value;

    // create table row
    let tr = document.createElement("tr");
    // create table cell 1
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(product));

    // create table cell 2
    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(price));
    
    // add cells to table row
    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("userTable").appendChild(tr);

    // if(product.toUpperCase() === "strawberries".toUpperCase()) {
    //     li.style.color = "red";
    // }
    
    // reset input
    productForm.productName.value = "";
    productForm.productPrice.value = "";
}
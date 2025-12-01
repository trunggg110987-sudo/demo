let products = ["Laptop", "Chuột", "Lót chuột", "Sạc máy tính"]
let selectedIndex = null;

function displayProducts() {
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
        const tr = document.createElement("tr");


        const tdIndex = document.createElement("td");
        tdIndex.innerText = index + 1;
        tr.appendChild(tdIndex);


        const tdName = document.createElement("td");
        tdName.innerText = product;
        tdName.style.cursor = "pointer";
        tdName.onclick = function () {
            selectedIndex = index;
            document.getElementById("editProductName").value = product;
        };
        tr.appendChild(tdName);

        const tdAction = document.createElement("td");
        const btnDelete = document.createElement("button");
        btnDelete.innerText = "xóa";
        btnDelete.onclick = function() {
            products.splice(index, 1);
            displayProducts();
        };
        tdAction.appendChild(btnDelete);
        tr.appendChild(tdAction);

        tableBody.appendChild(tr);
    });
}
function addProduct(){
    const input = document.getElementById("newProductName");
    const name = input.value.trim();
    if(name === ""){
        alert("vui long nhap ten san pham");
        return;
    }
    products.push(name);
    displayProducts();
    alert("da them san pham" + name);
}
function editProduct(){
    const input = document.getElementById("editProductName");
    const name = input.value.trim();
    if(selectedIndex === null){
        alert("Vui lòng chọn sản phẩm cần sửa bằng cách click vào tên trong bảng!");
        return;
    }
    if(name === ""){
        alert("ten san pham khong duoc de trong!!")
        return;
    }
    products[selectedIndex] = name;
    selectedIndex = null;
    input.value = "";
    displayProducts();
    alert("da sua san pham!!");
}
displayProducts();

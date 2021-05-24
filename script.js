
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription") ;
var mainBtn=document.getElementById("mainBtn");
var userAlert = document.getElementById("alert");
var productContainer;
var updatedIndex;
var errors=``;
// --------------------localstorage---------------------------------
if(localStorage.getItem("productList")==null){
    productContainer=[];
}
else{
    productContainer=JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}
// -----------------------------add product-----------------------------------------------------------------
function addProduct(){
    if(checkInputs()==true && mainBtn.innerHTML=="add Product" && validateProductName()==true ){
        var product={
            name:productName.value,
            price:productPrice.value,
            cat:productCategory.value,
            desc:productDescription.value
        }
        productContainer.push(product);
        localStorage.setItem("productList",JSON.stringify(productContainer));
        console.log(productContainer);
        displayProduct();
        clearForm()
    }
    else if(checkInputs()==true && mainBtn.innerHTML=="update"  && validateProductName()==true ){
    var product={
        name:productName.value,
        price:productPrice.value,
        cat:productCategory.value,
        desc:productDescription.value
    }
    productContainer.splice(updatedIndex,1,product);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    console.log(productContainer);
    displayProduct();
    clearForm();
    mainBtn.innerHTML="add Product";
}
    else{
        document.getElementById("alert").innerHTML=errors;
        window.alert("all fields are required");
    }
}
// ----------------------------------------display product---------------------------------------------------------------------
function displayProduct(){
    var cartoona=``;
    for(var i=0;i<productContainer.length;i++)
    {
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].cat}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="updateProducts(${i})" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="DeleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`
    }
    document.getElementById("table-body").innerHTML=cartoona;
}
// ------------------------------------------clear form-------------------------------------------------------------------
function clearForm(){
   productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}
// --------------------------------------------check inputs-----------------------------------------------------------------
function checkInputs(){
    if(productName.value!=""&&productPrice.value!=""&&productCategory.value!=""&&productDescription.value!="")
    {
        return true;
    }
    else{
        return false;
    }
}
// ---------------------------------------------Search---------------------------------------------------------
function searchProduct(term){
    var cartoona=``;
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
            cartoona+=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].cat}</td>
            <td>${productContainer[i].desc}</td>
            <td><button onclick="updateProducts(${i})" class="btn btn-outline-warning">update</button></td>
            <td><button onclick="DeleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
            </tr>`
        }
    }
    document.getElementById("table-body").innerHTML=cartoona;
}
// -------------------------------------------Delete--------------------------------------------------------
function DeleteProducts(index){
    productContainer.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    displayProduct();
}
// -----------------------------------------Update--------------------------------------------------------
function updateProducts(index){
    productName.value=productContainer[index].name;
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].cat;
    productDescription.value=productContainer[index].desc;
mainBtn.innerHTML="update";
updatedIndex=index;
}
// -----------------------------------------Validation---------------------------------------------------------
function validateProductName(){
    var regex= /^[A-Z][a-z]{3,8}$/;
    if(regex.test(productName.value)==true){
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        userAlert.classList.replace("d-block","d-none");
        return true;
    }
else{
    userAlert.classList.replace("d-none","d-block");
    productName.classList.add("is-invalid");
    productName.classList.remove("is-valid");
    return false;
}
}
productName.addEventListener("blur",validateProductName);







































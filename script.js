// part1

// function calProduct (price,profit,tax,ads)
// {
//     var result1=price+profit;
//     var result2=result1*tax;
//     var result3= result2+ads;
//     console.log(result3);
// }
// function getAvg(x,y)
// {
//     var sum=x+y;
//     var result=sum/2;
//     console.log(result);
//     return result;
// }
// var x =getAvg(10,30);
// calProduct(x,40,1.1,10);
// ---------------------------------------------------------------
// part2

// console.log(y);
// var y=10;

// console.log(foo());
// var foo =function()
// {
//     return bar();
//     function bar (){return3;}
//     var bar = function(){return 8}
// }

// ----------------------------------------------------------------------
// part5

// function sayhello ()
// {
//     var usrName= document.getElementById("userName").value;
//    window.alert("hello "+usrName)
// }

// ----------------------------------------------------------------------------
// part6

// var user={
//     firstName:"ahmed",
//     age:25,
//     gender:"male",
//     isMarried:true,
//     salary:8000,
//     wife:{firstName:"aya", age:25, gender:"female", son:{firstName:"ali",age:"4"}},
//     welcome:function(){
//         console.log("welcome");
//     }
// };
// console.log(user.wife.son.age);
// user.welcome();
// ---------------------------------------------------------------------------------------------------
// part7

// var friends =["ali", "mohammed" , "taha" , "hazem" , "ibrahim"];
// console.log(friends);
// console.log(friends[3]);
// for(i=0;i<friends.length;i++)
// {
//     console.log("mr "+ friends[i]);
// }
// ------------------------------------------------------------------------------------------------------------------
// part8

// var friends =["taha","ahmed","hazem","ibrahim","saber","tarek","omar"];
// console.log(friends.sort());
// console.log(friends.reverse());
// friends.push("hmza");
// friends.unshift("hmza");
// friends.pop();
// friends.shift();
// friends.splice(2,2,"hmza","abdo");
// console.log(friends.slice(0,4));
//  console.log(friends.toString());
//  console.log(friends.indexOf("hazem"));
//  console.log(friends.lastIndexOf("hazem"));
// ----------------------------------------------------------------------------------
// part10 + week8

// var productName = document.getElementById("productName");
// var productPrice = document.getElementById("productPrice");
// var productCategory = document.getElementById("productcategory");
// var productDesc = document.getElementById("productDesc");
// var mainBtn=document.getElementById("mainBtn");
// var productContainer;
// var updateIndex;
// if (localStorage.getItem("productlist") == null) {
//     productContainer = [];
// }
// else {
//     productContainer = JSON.parse(localStorage.getItem("productlist"));
//     displayProduct();
// }
// function addProduct() {
//     if (checkInputs() == true && mainBtn.innerHTML=="add Product" && validateProductName()==true ) {
//         var product = {
//             name: productName.value,
//             price: productPrice.value,
//             category: productCategory.value,
//             desc: productDesc.value
//         }
//         productContainer.push(product);
//         localStorage.setItem("productlist", JSON.stringify(productContainer));
//         console.log(productContainer);
//         displayProduct();
//         clearForm();
//     }
//     else if(checkInputs() == true && mainBtn.innerHTML=="update"&&validateProductName()==true ){
//         var product = {
//             name: productName.value,
//             price: productPrice.value,
//             category: productCategory.value,
//             desc: productDesc.value
//         }
//         productContainer.splice(updateIndex,1,product)
//         localStorage.setItem("productlist", JSON.stringify(productContainer));
//         console.log(productContainer);
//         mainBtn.innerHTML="add Product";
//         displayProduct();
//          clearForm();
//     }
//     else {
    // document.getElementById("alert").innerHTML=errors;
//         window.alert("sorry all fields are required");
//     }

// }
// function clearForm() {
//     productName.value = "";
//     productPrice.value = "";
//     productCategory.value = "";
//     productDesc.value = "";
// }
// function displayProduct() {
//     var cartoona = ``;
//     for (i = 0; i < productContainer.length; i++) {
//         cartoona += `<tr>
// <td>${i}</td>
// <td>`+ productContainer[i].name + `</td>
// <td>${productContainer[i].price}</td>
// <td>${productContainer[i].category}</td>
// <td>${productContainer[i].desc}</td>
// <td><button onclick="changeFormForUpdate(${i});" class="btn btn-outline-danger">update</button></td>
// <td><button onclick="deleteProduct(${i});"  class="btn btn-outline-warning">delete</button></td>
// </tr>`;

//     }
//     document.getElementById("table-body").innerHTML = cartoona;
// }
// function checkInputs() {
//     if (productName.value != "" && productPrice.value != "" && productCategory.value != "" && productDesc.value != "") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// function searchProducts(term) {
//     var cartoona = ``;
//     for (var i = 0; i < productContainer.length; i++) {

//         if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
//             cartoona += `<tr>
//             <td>${i}</td>
//             <td>${productContainer[i].name}</td>
//             <td>${productContainer[i].price}</td>
//             <td>${productContainer[i].category}</td>
//             <td>${productContainer[i].desc}</td>
//             <td> <button onclick="changeFormForUpdate(${i});" class="btn btn-outline-warning">update</button></td>
//             <td> <button onclick="deleteProduct(${i});" class="btn btn-outline-danger">delete</button></td>
//         </tr>`;
//         }
//     }
//     document.getElementById("table-body").innerHTML = cartoona;
// }
// function deleteProduct(productIndex) {
//     productContainer.splice(productIndex, 1);
//     localStorage.setItem("productlist", JSON.stringify(productContainer));
//     displayProduct();
// }
// function changeFormForUpdate(productIndex)
// {
//     productName.value = productContainer[productIndex].name;
//     productPrice.value = productContainer[productIndex].price;
//     productCategory.value = productContainer[productIndex].category;
//     productDesc.value = productContainer[productIndex].desc;
//     mainBtn.innerHTML="update";
//     updateIndex=productIndex;
// }
// //--------------------------------
// // validation without DOM:
//  // -----------------------
// function validateProductName(){
//     var regex=/^[ a-z][a-z]{3,8}$/
//     if(regex.test(productName.value)==true){
//         return true;
//     }
//     else{
 
    errors += `<p>name is invalid</p>`
//         return false;
//     }
// }
// -----------------------------------------------------------------------------------------------------------------
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDescription=document.getElementById("productDescription") ;
var mainBtn=document.getElementById("mainBtn");
var userAlert = document.getElementById("alert");
var productContainer;
var updatedIndex;
var errors=``;
if(localStorage.getItem("productList")==null){
    productContainer=[];
}
else{
    productContainer=JSON.parse(localStorage.getItem("productList"));
    displayProduct();
}
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
    clearForm()
}
    else{
        document.getElementById("alert").innerHTML=errors;
        window.alert("all fields are required");
    }
}
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
function clearForm(){
   productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}
function checkInputs(){
    if(productName.value!=""&&productPrice.value!=""&&productCategory.value!=""&&productDescription.value!="")
    {
        return true;
    }
    else{
        return false;
    }
}
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
function DeleteProducts(index){
    productContainer.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    displayProduct();
}
function updateProducts(index){
    productName.value=productContainer[index].name;
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].cat;
    productDescription.value=productContainer[index].desc;
mainBtn.innerHTML="update";
updatedIndex=index;
}
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







































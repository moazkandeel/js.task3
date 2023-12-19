
var bookNameInput =document.getElementById('bookNameInput');
var bookUrlInput =document.getElementById('bookUrlInput');
var  tableBody=document.getElementById('tableBody');


var booksContainer;

if(localStorage.getItem('myBooks') !=null){
    booksContainer=JSON.parse(localStorage.getItem('myBooks'));
   displayBooks(booksContainer);
}else{
    booksContainer=[];

}   
function addBooks(){
    var bookName = bookNameInput.value.trim();
    var bookUrl = bookUrlInput.value.trim();
    if (bookName.length < 3) {
        window.alert('Site name must contain at least 3 characters');
        return;
    }

    if (!isValidUrl(bookUrl)) {
        window.alert('Site URL must be a valid one');
        return;
    }

    var books={
        bookName :bookNameInput.value,
        bookUrl  :bookUrlInput.value,
    }


    booksContainer.push(books);
    localStorage.setItem('myBooks',JSON.stringify(booksContainer));
    console.log(booksContainer);
    clear();
    displayBooks(booksContainer);
}
function isValidUrl(url) {
    var urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    return urlPattern.test(url);
}


function clear(){
  bookNameInput.value=''
  bookUrlInput.value=''
  
}

function displayBooks(booksContainer){

    var cartoona=``;
    // var displayIndex=0;
    for (var i=0 ;i< booksContainer.length; i++){
        // displayIndex=i+1
     cartoona+=`   
     <tr>
     
     <td>${i+1}</td> 
     <td>${booksContainer[i].bookName}</td> 
     <td> <button onclick="visitBook(${i})" class="moaz "><i class="fa-solid fa-eye pq"></i>Visit</button></td>
     <td>
         <button onclick="deleteBooks(${i})"  class="btn  btn-danger"><i class="fa-solid fa-trash kj"></i>Dalete</button>
         </td>
 </tr>
 `
}
// tableBody.innerHTML.cartoona;
document.getElementById("tableBody").innerHTML=cartoona;
}



function deleteBooks(deleteIndex){
    booksContainer.splice(deleteIndex,1)
    localStorage.setItem('myBooks',JSON.stringify(booksContainer));

    displayBooks(booksContainer);

}

function visitBook(index) {
    var url = booksContainer[index].bookUrl;
    localStorage.setItem('myBooks',JSON.stringify(booksContainer));
    window.open(url, '_blank');
}




























// function isValidURL(url) {
//     var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

//     return urlPattern.test(url);
// }

// var userInputURL = "الـ_URL_الذي_يريد_المستخدم_إضافته";

// if (isValidURL(userInputURL)) {
//     console.log("الـ URL صحيح، يمكن إضافته.");
// } else {
//     console.log("الـ URL غير صحيح، لا يمكن إضافته.");
// }

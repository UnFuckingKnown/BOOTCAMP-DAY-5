let newBlog = [];

const getIput = document.getElementById("handleInput");

getIput.addEventListener("click", (e) => {
  e.preventDefault;

  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("image").files;
  let checkbox1 = document.getElementById("checkbox1").checked;
  let checkbox2 = document.getElementById("checkbox2").checked;
  let checkbox3 = document.getElementById("checkbox3").checked;
  let checkbox4 = document.getElementById("checkbox4").checked;






  image = URL.createObjectURL(image[0]);



if(checkbox1 == true ){
  checkbox1 = '<i class="fa-brands fa-square-js"></i>'
}else(
  checkbox1 = ""
)


if(checkbox2 == true){
  checkbox2 = '<i class="fa-brands fa-php"></i>'
}else(
  checkbox2 = ""
)


if(checkbox3 == true){
  checkbox3 = '<i class="fa-brands fa-golang"></i>'
}else(
  checkbox3 = ""
)

if(checkbox4 == true){
  checkbox4 = '<i class="fa-brands fa-python"></i>'
}else(
  checkbox4 = ""
)









  if (projectName == "") {
    alert("MOHON UNTUK MENGISI PROJECTNAME TERLEBIH DAHULU");
  } else if (startDate == "") {
    alert("MOHON UNTUK MENGISI START DATE TERLEBIH DAHULU");
  } else if (endDate == "") {
    alert("MOHON UNTUK MENGISI END DATE TERLEBIH DAHULU");
  } else if (description == "") {
    alert("MOHON UNTUK MENGISI DESKRIPSI TERLEBIH DAHULU");
  } else if (image == "") {
    alert("MOHON UNTUK MENGISI FILE TERLEBIH DAHULU");
  } else if (
    checkbox1 == false &&
    checkbox2 == false &&
    checkbox3 == false &&
    checkbox4 == false

  ) {
    alert("MOHON UNTUK CHEKLIST TERLEBIH DAHULU");
  } else {
    alert('terimakasih')


  }




  //  checkbox1 ? `<i class="fa-brands fa-square-js"></i>` : ""
  //  checkbox2 ? `<i class="fa-brands fa-php"></i>` : ""
  //  checkbox3 ? `<i class="fa-brands fa-golang"></i>` : ""
  //  checkbox4 ? `<i class="fa-brands fa-python"></i>` : ""






  let newDatabase = {
    projectName,
    startDate,
    endDate,
    description,
    image,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
  };

  newBlog.push(newDatabase);

  initiation();
});

const initiation = () => {
  console.log(newBlog);
  let upload = document.getElementById("container2");
  upload.innerHTML = '';
  for (let i = 0; i <= newBlog.length; i++) {
    upload.innerHTML += `


   
  
    <div
    style="
      width: 350px;
      height: 350px;
      border-radius: 3px;
      margin: auto;
      background-color: white;
      border-radius: 20px;
      overflow : hidden;
    "
    >
    <img style="width: 100%; height: 200px" src="${newBlog[i].image}" />
    <a style="text-decoration: none;
color: black;" href="/MAINBLOG/mainblog.html"><h1>${newBlog[i].projectName}</h1></a>
    
    <h4>${newBlog[i].startDate}</h4>
    <h4>${newBlog[i].endDate}</h4>
    <br>
    <p>${newBlog[i].description}</p>
    

    ${newBlog[i].checkbox1}
    ${newBlog[i].checkbox2}
    ${newBlog[i].checkbox3}
    ${newBlog[i].checkbox4}
 
    
    </div>

  
        
        
        
        `;
  }
};

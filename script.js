let DirectoryArray=[
    {id:1,name:"Barath",mobile:8925195582},
    {id:2,name:"Dharun",mobile:9012345678}
];

const displayref=document.getElementById("display");
const nameref=document.getElementById("uname");
const mobileref=document.getElementById("umobile");
const btnref=document.getElementById("ubtn");


function editcontacts()
{
    console.log("Hello");
}


const DirectoryData=()=>{
    let contact="";

    for(let a of DirectoryArray){
        contact += `<div class="border rounded d-flex justify-content-between align-items-center border-bottom">
        <p class="d-flex mb-0">${a.name}</p>
        <p class="d-flex mb-0">${a.mobile}</p>
        <div>
          <button  onclick="() => console.log("clicked")" class="btn text-info" >Edit</button>
          <button  onclick="deletedata(${a.id})" class="btn text-danger">Delete</button>
        </div>
      </div>`;
    }
    displayref.innerHTML=contact;
};

const deletedata=(id)=>{
    DirectoryArray=DirectoryArray.filter((b)=>{
        if(id!==b.id){
            return b;
        }
    });
    DirectoryData();
    
};

btnref.addEventListener("click", ()=>{
    if(nameref!=="" && mobileref!==""){
        DirectoryArray.push({id:7,name:nameref.value,mobile:mobileref.value});
    }
    DirectoryData();
    nameref.value="";
    mobileref.value="";
} )

DirectoryData();


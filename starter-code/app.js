

let navspan =document.querySelector("header span")
let nav =document.querySelector("nav")
navspan.addEventListener("click",(e)=> {
     nav.classList.toggle("active")
})

let destinations=[]
let crew=[]
let technology=[]
const myfetch = () => {
     fetch("data.json")
     .then(response => response.json())
     .then(data =>{
          //console.log(data.destinations)
         
         for(let i in data){
          //console.log(data.destinations)
              //console.log(typeof(data[i]))
              //console.log((data[i]))
        if (i==="destinations"){
          data[i].forEach(element => {
               destinations.push(element)
          });         
          
        }
        if (i==="crew"){
          data[i].forEach(element => {
               crew.push(element)
          });            
        
        }
        if (i==="technology"){
          data[i].forEach(element => {
               technology.push(element)
          });   
        }
         }       
          })
       
     } 
    
    



myfetch()


console.log(crew)
console.log(destinations)
let myname
let myimagesrc
let mydescription
let mydistance
let mytravel
let main=document.querySelector(".dest")
//let rightplanet = document.querySelectorAll("main .mygrid2 ul li a")

     if (main){

    
     main.addEventListener("click",e=> {
          if (e.target.classList.contains("moon")){
               myname=destinations[0].name
               myimagesrc=destinations[0].images.png
               mydescription=destinations[0].description
               mydistance=destinations[0].distance
               mytravel=destinations[0].travel         
              }
              if (e.target.classList.contains("mars")){
                   myname=destinations[1].name
                   myimagesrc=destinations[1].images.png
                   mydescription=destinations[1].description
                   mydistance=destinations[1].distance
                   mytravel=destinations[1].travel         
                  }
              if (e.target.classList.contains("europa")){
                   myname=destinations[2].name
                   myimagesrc=destinations[2].images.png
                   mydescription=destinations[2].description
                   mydistance=destinations[2].distance
                   mytravel=destinations[2].travel         
                  }
                  if (e.target.classList.contains("titan")){
                   myname=destinations[3].name
                   myimagesrc=destinations[3].images.png
                   mydescription=destinations[3].description
                   mydistance=destinations[3].distance
                   mytravel=destinations[3].travel         
                  }
                  let mygrid2=document.createElement("div")
                  mygrid2.classList.add("mygrid2")
                  mygrid2.innerHTML=`  <div>
                  <img src="${myimagesrc}" alt="" class="img-fluid">
                </div>
                 <div class="rightplanet">
                   <ul>
                     <li>
                       <a  class="moon">Moon</a>
                     
                     </li>
                     <li> <a  class="mars">Mars</a>
                      </li>
                      <li> <a  class="europa">Europa</a>
                       </li>
                       <li><a  class="titan">Titan</a></li>
                   </ul>
                   <h1 >${myname}</h1>
                   <p>${mydescription}</p>
                     <div class="downclass">
                       <div>
                        <span>Avg. distance</span> 
                         <p>${mydistance}
                         </p>
                       </div>
                       <div>
                         <span>Avg. distance</span> 
                          <p>${mytravel}
                          </p>
                        </div>
                     </div>
                 </div>
                  `
                  main.removeChild(main.lastElementChild)
                  main.appendChild(mygrid2)
     })
}



let mycrewname
let mycrewimagesrc

let myrole
let mybio
let container=document.querySelector(".crew2 .container")

      if (container) {

      
     container.addEventListener("click",e=> {
          if (e.target.classList.contains("Douglas")){
               mycrewname=crew[0].name
               mycrewimagesrc=crew[0].images.png
               myrole=crew[0].role
               mybio=crew[0].bio
                        
              }
              if (e.target.classList.contains("Mark")){
               mycrewname=crew[1].name
               mycrewimagesrc=crew[1].images.png
               myrole=crew[1].role
               mybio=crew[1].bio        
                  }
              if (e.target.classList.contains("Victor")){
               mycrewname=crew[2].name
               mycrewimagesrc=crew[2].images.png
               myrole=crew[2].role
               mybio=crew[2].bio           
                  }
                  if (e.target.classList.contains("Anousheh")){
                    mycrewname=crew[3].name
                    mycrewimagesrc=crew[3].images.png
                    myrole=crew[3].role
                    mybio=crew[3].bio         
                  }
                  let mygrid3=document.createElement("div")
                  mygrid3.classList.add("grid3")
                  mygrid3.innerHTML=` <div class="man">
                  <img src="${mycrewimagesrc}" alt="" class="img-fluid">
                </div>
                <!-- <div class="planet planet2"><span>02</span>   Meet your crew</h1></div> -->
                 <div class="rightplanet">
                   <!-- <div class="planet"><span>02</span>   Meet your crew</h1></div> -->
                    <div class="commander ">
                     <h2 >${myrole}</h2>
                     <h1>${mycrewname}</h1>
                     <p>
                     ${mybio}</p>
                    </div>
                   
                     <ul class="mb-5">
                       <li class="Douglas">
                        
                       
                       </li>
                       <li class="Mark"> 
                        </li>
                        <li class="Victor"> 
                         </li>
                         <li class="Anousheh"></li>
                     </ul>
                   
                    
                 </div>
                  `
                  container.removeChild(container.lastElementChild)
                  container.appendChild(mygrid3)
     })
}




let mytechname
let mytechimagesrc
let mytechimagesrc2

let techdesc

let techcontainer=document.querySelector(".tech ")

      if (techcontainer) {

      
     techcontainer.addEventListener("click",e=> {
          if (e.target.classList.contains("vehicle2")){
               mytechname=technology[0].name
               mytechimagesrc=technology[0].images.portrait
               mytechimagesrc2=technology[0].images.landscape
               techdesc=technology[0].description
               
                        
              }
              if (e.target.classList.contains("port")){
               mytechname=technology[1].name
               mytechimagesrc=technology[1].images.portrait
               mytechimagesrc2=technology[1].images.landscape
               techdesc=technology[1].description     
                  }
              if (e.target.classList.contains("capsule")){
               mytechname=technology[2].name
               mytechimagesrc=technology[2].images.portrait
               mytechimagesrc2=technology[2].images.landscape
               techdesc=technology[2].description        
                  }
                 
                  let mygrid4=document.createElement("div")
                  mygrid4.classList.add("mygrid4")
                  mygrid4.innerHTML=` <div class="subgrid1">
                  <ul>
                    <li class="vehicle2">1</li>
                    <li class="port">2</li>
                    <li class="capsule">3</li>
                  </ul>
                  <div>
                    <h4>The terminology...</h4>
                    <h1> ${mytechname} </h1>
                    <p>${techdesc}</p>
                  </div>
                  
                </div>
                <div class="vehicle">
                 <img src="${mytechimagesrc}" alt="">
                 <img src="${mytechimagesrc2}" alt="">
               </div>
                  `
                 
                  techcontainer.removeChild(techcontainer.lastElementChild)
                 
                  techcontainer.appendChild(mygrid4)
     })
}




    
         

    


let starwars= document.getElementById("results")
let rec= document.getElementById("show")
let id;

async function searchCharacter(query){
try{
let URL= `https://swapi.dev/api/people/?search=${query}`
let res= await fetch(URL)
// console.log(res)
let data= await res.json()
// console.log(data)
return data}
catch(err){
  console.log(err)
}
}


async function getData(){
    let query= document.getElementById("query").value
    let response= searchCharacter(query)
    let data= await response 
    // console.log(data.results)
    recos(data.results)
    // append(data.results)
    
}

function recos(data){
  rec.innerHTML=null
  //  console.log(data)
  data.forEach(function(el){
    let h= document.createElement("p")
    h.innerText= el.name
    h.addEventListener("click",function(){
        dataFun(el)
    })
    rec.append(h)
  })
}

// function dataFun(el){
//    gaurav(el)
//    console.log(el)
//   // console.log("clicked me")
// }

function  dataFun(ele){
  document.querySelector(".container").innerHTML= null
  let h2=document.createElement("h2")
  h2.setAttribute("id","name")
  h2.innerText=ele.name

  let name=document.createElement("div")
  name.append(h2)


  let p1= document.createElement("p")
  p1.innerText=`Birth Year : ${ele.birth_year}`

  let p2= document.createElement("p")
  p2.innerText=`Gender : ${ele.gender}`

  let p3= document.createElement("p")
  p3.innerText=`Height : ${ele.height}`

  let info=document.createElement("div")
  info.setAttribute("id","info")
  info.append(p1,p2,p3)



  let p4= document.createElement("p")
  p4.innerText=`Eye Color : ${ele.eye_color}`

  let p5= document.createElement("p")
  p5.innerText=`Mass : ${ele.mass}`

  let p6= document.createElement("p")
  p6.innerText=`Hair Color : ${ele.hair_color}`

  let anatomy=document.createElement("div")
  anatomy.setAttribute("id","anatomy")
  anatomy.append(p4,p5,p6)

  let button= document.createElement("button")
  button.innerHTML= "Go Back"
  button.setAttribute("id","btn")

  button.addEventListener("click",function(){
      back()
  })

  // starwars.append(name,info,anatomy)
  document.querySelector(".container").append(name,info,anatomy,button)
  console.log(container)
}

function back(){
  window.location.reload()
}



// function append(array){
// // console.log(array)

// array.forEach(function(ele){

//   let h2=document.createElement("h2")
//   h2.innerText=ele.name

//   let name=document.createElement("div")
//   name.setAttribute("id","name")
//   name.append(h2)

 

//   let p1= document.createElement("p")
//   p1.innerText=ele.birth_year

//   let p2= document.createElement("p")
//   p2.innerText=ele.gender

//   let p3= document.createElement("p")
//   p3.innerText=ele.height

//   let info=document.createElement("div")
//   name.setAttribute("id","info")
//   info.append(p1,p2,p3)



//   let p4= document.createElement("p")
//   p4.innerText=ele.eye_colour

//   let p5= document.createElement("p")
//   p5.innerText=ele.mass

//   let p6= document.createElement("p")
//   p6.innerText=ele.hair_colour

//   let anatomy=document.createElement("div")
//   name.setAttribute("id","anatomy")
//   anatomy.append(p4,p5,p6)


// starwars.append(name,info,anatomy)

// })
// }

function debouncing(func,delay){
if(id){
  clearTimeout(id)
}

  id=setTimeout(function(){

    func()
  },delay)
}
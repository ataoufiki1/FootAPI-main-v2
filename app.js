
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca0d916c0dmsh2c7e31c8d06c774p11d0e2jsn7e760bf3bc32',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }

let annee = new Date().getFullYear();
//-------------- generation de la liste des equipes
let id
fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=${annee}`, options)
    
.then(response => response.json())
.then((data) => {
    console.log(data.response);
    data.response.forEach(element => {
                let select= `<select>`  
                id = document.getElementById("contr").value; 
                
                document.getElementById("contr").innerHTML +=` <option value="${element.team.id}"> ${element.team.name} </option>`;
                document.getElementById("logo").logo +=` <option value="${element.team.id}"> ${element.team.name} </option>`;
                // document.getElementById("id").innerHTML +=` <option> ${element.team.id} </option>`;
                      select = `</select>` 
                     // myFunction()
                     
                  
      })
})


function myFunction() {
    id = document.getElementById("contr").value; 
    console.log(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=${annee}`);
 
document.getElementById("demo").innerHTML = "You selected: " + id;

// apres un changement dans le select d'equipe, je recupere l'id de l'equipe puis je crée le <select> des joueurs
fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=${annee}`, options)//39

.then(response => response.json())
.then((data) => {
    console.log(id);
    data.response.forEach(element => {

                let select= `<select>`
             
                      document.getElementById("cont").innerHTML += `<option> ${element.player.name} </option>`;
                      select = `</select>`

                      
      })
      
})

  }













const btnn =document.querySelector("#btnn");

btnn.addEventListener("click",() => {

     

    
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=2022`, options)
    
        .then(response => response.json())
        .then((data) => {
    
    

    
            //--------
          

            //--------
            let affichage =``
            let age =``
            let im =``
    for( let x of data.response)
    {
        let input = document.querySelector("#cont");
         if(input.value === x.player.name)
         {
            affichage = `<strong>${x.player.name}</strong>`
            age = `<strong>${x.player.age}</strong>`
            im = x.player.photo
         }
      
    }
    affichage +=`</ul>`
    document.querySelector("#namme").innerHTML = affichage;
    document.querySelector("#age").innerHTML = age;
    document.querySelector("#img").src = im;
    
    
    
    
        })

//--------------



    })
   


  






    

















    
    // function getData(data) {
    
// }

//         //----------------
        // function getData(data) {

        //     console.log(data);
        //     const container3 = document.querySelector("#container3");
        //     const x = "";
        //     data.forEach(element => {
        //         var name = element.player.name;
               
            
                  
        //             document.getElementById("name").innerHTML += "<div>" + name + "</div>"
                
                
               
        //     });
        // }







        //----------- liste des joueurs

// let date = new Date()
// let annee = date.getFullYear();
// let team = id;
// fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${team}&season=${annee}`, options)

// .then(response => response.json())
// .then((data) => {

//     data.response.forEach(element => {

       
      
//                 let select= `<select>`
             
                      
//                       document.getElementById("cont").innerHTML += `<option> ${element.player.name} </option>`;
                      
             
                   
                     
                
      
                    
      
      
//                       select = `</select>`

                      
//       })
      
// })


//--
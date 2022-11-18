
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'ca0d916c0dmsh2c7e31c8d06c774p11d0e2jsn7e760bf3bc32' ,
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
                id = document.getElementById("select-team").value; 
                
                document.getElementById("select-team").innerHTML +=` <option value="${element.team.id}"> ${element.team.name} </option>`;
                document.getElementById("logo").logo +=` <option value="${element.team.id}"> ${element.team.name} </option>`;
                      select = `</select>` 
                     
                  
      })
})


function myFunction() {
    id = document.getElementById("select-team").value; 
    console.log(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=${annee}`);
 
document.getElementById("team-id").innerHTML = "Vous avez choisi:  " + id;

// apres un changement dans le select d'equipe, je recupere l'id de l'equipe puis je crée le <select> des joueurs
fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=${annee}`, options)//39

.then(response => response.json())
.then((data) => {
    console.log(id);
    data.response.forEach(element => {

                let select= `<select>`
             
                      document.getElementById("select-player").innerHTML += `<option> ${element.player.name} </option>`;
                      select = `</select>`

                      
      })
      
})

  }



const btn = document.querySelector("#btn");

   btn.addEventListener("click", () => {

     

    
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players?team=${id}&season=2022`, options)
    
        .then(response => response.json())
        .then((data) => {


           
            let affichage =``
            let age =``
            let im =``
            let logo =``
            let nationality =``
            let club =``
            let weight =``
            let height =``

    for( let x of data.response)
    {
        let input = document.querySelector("#select-player");
         if(input.value === x.player.name)
         {


            affichage = `<strong>${x.player.name}</strong>`
            age = `<strong>${x.player.age} ans</strong>`
            nationality = `<strong>${x.player.nationality}</strong>`
            weight = `<strong>${x.player.weight}</strong>`
            height = `<strong>${x.player.height}</strong>`
            im = x.player.photo

         }


         else(input.value === x.statistics.team) 
         {
            logo = x.statistics[0].team.logo
            club = `<strong>${x.statistics[0].team.name}</strong>`

        }

    }
    affichage +=`</ul>`
    document.querySelector("#namme").innerHTML = affichage;
    document.querySelector("#age").innerHTML = age;
    document.querySelector("#img").src = im;
    document.querySelector("#logo").src = logo;
    document.querySelector('#nationality').innerHTML = nationality;
    document.querySelector('#weight').innerHTML = weight;
    document.querySelector('#height').innerHTML = height;
    document.querySelector('#club').innerHTML = club;

        })
    })
   

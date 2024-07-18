let normal = document.getElementById("s1");
let shiny = document.getElementById("s2");
let info = document.getElementById("info");

let input = prompt("Enter a pokemon");
getPokemon();
async function getPokemon(){
  try{
    const response = await(fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`));
    
    if(!response.ok)
    {
      throw new Error("Can't get pokemon");
    }
    const data = await response.json();
    normal.src = data.sprites.front_default;
    shiny.src = data.sprites.front_shiny;
    let msg = `<h1>${data.species.name}<h1><br><h3>Abilities<h3><br>`;
    for(let i = 0; i<data.abilities.length;i++){
      msg += `<h5>${data.abilities[i].ability.name}<h5><br>`;
    }
    info.innerHTML = msg;
    
    
  }
  catch(error){
    console.error(error);
  }
}

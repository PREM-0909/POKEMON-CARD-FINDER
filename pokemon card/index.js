const showerror = document.getElementById("error");
const pokemonImg = document.getElementById('pokemonImg');
const name = document.getElementById("name");
const HP = document.getElementById("HP");
const type = document.getElementById("type");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

document.getElementById("fetchPokemon").addEventListener("click", function () {

    const pokemon = document.getElementById("pokemon").value;
    const card = document.getElementById("card");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
            console.log(response)

            if (!response.ok) {
                // show error if pokemon name does not found
                showerror.style.display = "block";
                document.getElementById("card").style.display = "none";
                showerror.innerHTML = "❌POKEMON NOT FOUND!!";
                pokemonImg.style.display = "none";
            }
            return response.json()


        })

        .then(data => {

            showerror.style.display = "none";

            
            // make card visible
            card.style.display = "flex";

            //show image of poemons
            pokemonImg.style.display = "block";
            pokemonImg.src = data.sprites.front_default;

            // stats and names
            name.innerHTML = data.name;
            HP.innerHTML = `HP ${data.stats[0].base_stat}`; //HP
            type.innerHTML = data.types[0].type.name ; //type of pokemon
            height.innerHTML= data.height/10 + "m"; //get height
            weight.innerHTML = data.weight/10 + "kg";




        })

})



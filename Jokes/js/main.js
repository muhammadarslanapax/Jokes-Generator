const btn = document.getElementById("btn")
const btnjoke = document.getElementById("jokes")
const apikey = "E60kUfeYpx+HgjznarCq5g==l1cauwS4S7H7OnbO"



const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    }
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function jokegenerator() {
    try {
        btnjoke.innerHTML = "Updating..."
        btn.disabled = true;
        btn.innerHTML = "Loading..."
        const response = await fetch(apiurl, options)
        const data = await response.json()
        btnjoke.innerHTML = data[0].joke
        btn.disabled = false;
        btn.innerHTML = "TELL ME A JOKE"

    } catch (error) {

        btnjoke.innerHTML = "An Error Happened ! Try Again "
        btn.disabled = false;
        btn.innerHTML = "TELL ME A JOKE"

    }

}

btn.addEventListener("click", jokegenerator)


//get api data  api ninjas https://api-ninjas.com/

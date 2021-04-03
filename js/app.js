//Met Museum API
const baseURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
const objectVanIdArray = [459123, 436533, 437984, 436535, 436528, 436529, 436532, 459193, 436531, 437998];
let currentId = 459123;
const objectCezIDarray = [435876, 435882, 435885, 435868, 435877, 435872, 437990, 459092, 437989, 435875];

const $secondButton = $(".second")

const getData = () => {
    // console.log("this works")
    $.ajax({
        url: baseURL + currentId,
        type: "GET",
        }).then(function(data){
    //   alert("Retrieved records from the dataset!");
      console.log(data);
      const $container = $('<div>')
        $container.html(`
        <h3> ${data.artistDisplayName} </h3>
        <h4> ${data.artistNationality + " " + data.artistRole}</h4>
        <h4 class = title> ${data.title}</h4>
        `)
        const $img = $('<img>').attr('src', data.primaryImage)
        $img.addClass('image')
        $container.append($img)
        $('.large-container').append($container)
        // console.log(data.primaryImage);
        },(error) =>{
            console.log(error);
})
}

$(()=>{
    const $firstButton = $(".first")
    const artistVan = (event) => {
        console.log ("it works")
        event.preventDefault()
    for (let i=0; i <objectVanIdArray.length; i++){
        currentId = objectVanIdArray[i];
        getData();
    }
    }
$firstButton.click(artistVan);
});
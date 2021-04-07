//Met Museum API
const baseURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
//Created Arrays from the Object IDs of works of arts from certain artists from the Search API of the Met Museum
const objectVanIdArray = [459123, 436533, 437984, 436535, 436528, 436529, 436532, 459193, 436531, 437998];
let currentId = 459123;
const objectCezIdArray = [435876, 435882, 435885, 435868, 435877, 435872, 437990, 459092, 437989, 435875];
const objectManIdArray = [438002, 436965, 436964, 436953, 436944, 436960, 436950, 436947, 436951, 436952];
const objectDegIdArray = [436155, 438817, 436157, 436121, 436144, 436126, 436141, 436162, 436135, 436122];
const objectSeuIdArray = [437654, 437658, 459191, 459116, 437655, 339751, 437656, 437659, 438123, 437657];

//getData function to access the JSON
const getData = () => {
    //the items.remove() code removes the data when a new button is clicked so that the information is not added underneath the existing information, but instead replace it.
    const $container = $('<div id = items>')
    $('#items').remove()
    // console.log("this works")
    $.ajax({
        url: baseURL + currentId,
        type: "GET",
        }).then(function(data){
    //   alert("Retrieved records from the dataset!");
      console.log(data);
        $container.html(`
        <h3 class = title> ${data.title}</h4>
        <h4> ${data.medium + ", " + data.objectDate}</h4>
        `)
        const $img = $('<img>').attr('src', data.primaryImage)
        $img.addClass('image')
        $container.append($img)
        const $h5 = $('<h5>').text("Department name on hover.")
        $container.append($h5)
        //Added the ToolTip feature to the page with functionality
        const tooltip = function(){
            const $tooltipClass = $('<div class = "tooltip">');
            $tooltipClass.html(`${data.department}`).appendTo($h5);
        }
        const hideTooltip = function (){
            $('div.tooltip').remove();
        }
        $h5.bind({
            mouseenter: tooltip,
            mouseleave: hideTooltip,
        });
        //appending the information to the large-container, makes it easier to change it on different button clicks.
        const $largecontainer = $('.large-container')
        $largecontainer.append($container)
        // console.log(data.primaryImage);
        },(error) =>{
            console.log(error);
})
}

$(()=>{
    //created constants for different buttons
const $firstButton = $(".first")
const $secondButton = $(".second")
const $thirdButton = $(".third")
const $fourthButton = $(".fourth")
const $fifthButton = $(".fifth")
const $secondContainer = $('.second-container')
//created variables for the text and was able to call different text with the different buttons.
let $text1 = $('<h2>').text("Vincent van Gogh: Dutch Artist")
let $text2 = $('<h2>').text("Paul Cezanne: French Artist")
let $text3 = $('<h2>').text("Edouard Manet: French Artist")
let $text4 = $('<h2>').text("Edgar Degas: French Artist")
let $text5 = $('<h2>').text("Georges Seurat: French Artist")
let $nextButton = $('<button>').text("Next")
let $prevButton = $('<button>').text("Previous")

//each function below is used for each different artist to replace the information with the correct data. 
    const artistVan = (event) => {
        // console.log ("it works")
        event.preventDefault();
        $secondContainer.empty().append($text1, $prevButton, $nextButton);
        // $secondContainer.append()
    for (let i=0; i <objectVanIdArray.length; i++){
        currentId = objectVanIdArray[i];
        getData();
    }
    }
    const artistCez = (event) => {
        // console.log ("it works")
        event.preventDefault();
        $secondContainer.empty().append($text2, $prevButton, $nextButton);
    for (let i=0; i <objectCezIdArray.length; i++){
        currentId = objectCezIdArray[i];
        getData()
    }
    }
    const artistMan = (event) => {
        // console.log ("it works")
        event.preventDefault();
        $secondContainer.empty().append($text3, $prevButton, $nextButton);
    for (let i=0; i <objectManIdArray.length; i++){
        currentId = objectManIdArray[i];
        getData();
    }
    }
    const artistDeg = (event) => {
        // console.log ("it works")
        event.preventDefault();
        $secondContainer.empty().append($text4, $prevButton, $nextButton);
    for (let i=0; i <objectDegIdArray.length; i++){
        currentId = objectDegIdArray[i];
        getData();
    }
    }
    const artistSeu = (event) => {
        // console.log ("it works")
        event.preventDefault();
        $secondContainer.empty().append($text5, $prevButton, $nextButton);
    for (let i=0; i <objectSeuIdArray.length; i++){
        currentId = objectSeuIdArray[i];
        getData();
    }
    }   
    //calling all functions on the buttons below.
$firstButton.click(artistVan);
$secondButton.click(artistCez);
$thirdButton.click(artistMan);
$fourthButton.click(artistDeg);
$fifthButton.click(artistSeu);
});
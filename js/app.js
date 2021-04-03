//Met Museum API
const baseURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
let objectID = [459123, 436533, 436528, 436535, 436532, 436529, 437984, 459193, 336327, 436527];
let testID = []
let objectCezID = 435876
let objectCezIDarray = [435876, 435882, 435885, 435868, 435877, 435872, 437990, 459092, 437989, 435875];

const objectNum = () => {
    for (let i = 0; i < objectID.length; i++){
        objectNum.push
        return objectID[i]
        // console.log(objectID[i])
    }
}
objectNum()
// const $img = $('<img>')

$(()=>{
    const $firstButton = $(".first")
    const $secondButton = $(".second")
    // const objectNum = () =>{
    //     for (let i = 0; i < objectID.length; i++){
    //         return objectID[i]
    //         // console.log(objectID[i])
    //     }
    // }
    // objectNum()
const getData = () => {
    // console.log("this works")
    $.ajax({
        url: baseURL + objectNum(),
        type: "GET",
        // data: {
        //     }
        }).then(function(data){
    //   alert("Retrieved records from the dataset!");
      console.log(data);
        $('.container').html(`
        <h3> ${data.artistDisplayName} </h3>
        <h4> ${data.artistNationality + " " + data.artistRole}</h4>
        <h4 class = title> ${data.title}</h4>
        `)
        const $img = $('<img>').attr('src', data.primaryImage)
        $img.addClass('image')
        $('.container').append($img)
        // console.log(data.primaryImage);
        },(error) =>{
            console.log(error);
})
}
const getCezData = () => {
    // console.log("this works")
    $.ajax({
        url: baseURL + objectCezID,
        type: "GET",
        // data: {
        //     }
        }).then(function(data){
    //   alert("Retrieved records from the dataset!");
      console.log(data);
        $('.container').html(`
        <h3> ${data.artistDisplayName} </h3>
        <h4> ${data.artistNationality + " " + data.artistRole}</h4>
        <h4 class = title> ${data.title}</h4>
        `)
        const $img = $('<img>').attr('src', data.primaryImage)
        $img.addClass('image')
        $('.container').append($img)
        // console.log(data.primaryImage);
        },(error) =>{
            console.log(error);
})
}

$firstButton.click(getData);
$secondButton.click(getCezData);
});
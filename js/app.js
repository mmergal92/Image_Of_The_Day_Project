//Met Museum API
const baseURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
let objectID = 436533
// const $img = $('<img>')

$(()=>{
const getData = () => {
    console.log("this works")
    $.ajax({
        url: baseURL + objectID,
        type: "GET",
        // data: {
        //     }
        }).then(function(data){
    //   alert("Retrieved records from the dataset!");
      console.log(data);
        $('.container').html(`
        <h2> ${data.artistDisplayName} </h2>
        `)
        const $img = $('<img>').attr('src', data.primaryImage)
        $('.container').append($img)
        // console.log(data.primaryImage);
        },(error) =>{
            console.log(error);
})
}
getData();
});
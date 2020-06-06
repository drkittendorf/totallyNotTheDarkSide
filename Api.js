
// this is quote & picture/video API
{

//imageVideoOfTheDay ** 
// call to get the video or image of the day 
//**********************************
function imageVideoOfTheDayAjax() {

    // used to test img 
    // https://apodapi.herokuapp.com/api/?date=2020-06-01

    $.ajax({
        url: `https://apodapi.herokuapp.com/api/`,
        method: 'GET'
    }).then((response) => {

        // console.log(response.url);

        // console.log(response.media_type);

        if (response.media_type === 'image') {
            // console.log('this is an image')
            // the image has to be reponsive find the correct class for the materialize 
            let img = $('<img width="420" height="315"> </img>');
            img.attr('src', response.url);
            img.addClass("responsive-img");

            $('.results').append(img);


        } else if (response.media_type === 'video') {
            // console.log('this is a video')
            // the image has to be reponsive find the correct class for the materialize 
            let video = $('<iframe>');
            video.attr('src', response.url);
            video.addClass('responsive-video');

            $('.results').append(video);

        } 
        // else {
        //     // this is a default image if we dont have an image
        //     // let img = $('<img width="420" height="315"> </img>');
        //     // img.attr('src', response.url);
        //     // img.addClass("responsive-img");

        //     // $('.results').append(img);
        // }

    });
};
//**********************************

// calling the imageVideoOfTheDayAjax function
imageVideoOfTheDayAjax();


//quoteOfTheDay ** 
// calls for author and quote of the day  
//**********************************
function quoteOfTheDayAjax() {

    $.ajax({
        url: `https://quote-garden.herokuapp.com/api/v2/quotes/random`,
        method: 'GET'
    }).then((response) => {

        console.log(response);
        let quoteAuthor = $('<strong>').text(`${response.quote.quoteAuthor} :`).css({
            'margin-right': '10px'
        })
        let quoteGenre = $('<span>').text(response.quote.quoteGenre);
        let quoteText = $('<span>').text(response.quote.quoteText);

        let quoteDiv = $('<div>');
        quoteDiv.append(quoteText);
        quoteDiv.prepend(quoteAuthor);

        $('.results').prepend(quoteDiv);
    });
};
//**********************************

// calling the quoteOfTheDayAjax function
quoteOfTheDayAjax();


}


// have the image have the ability to download  ******* WORK ON THIS 


// this is the SPACE X API
{

// RUN SEARCH FOR API SEARCH BUTTON 
// SPACE X API REQUEST *************
//**********************************
$('#runSearch').on('click', function () {

    let baseUrl = 'https://api.spacexdata.com/v3/'


    let builtUrlQuery = baseUrl + getSpaceXParameters();

    $.ajax({
        url: builtUrlQuery,
        method: 'GET'
    }).then(populateSpaceXData)
    console.log('this is the built query', builtUrlQuery);
});
//**********************************

//    ^^^^^      getSpaceXParameters function BUILDURL
//functions gets the correct endpoints for the url for making the SPACE X the Ajax call ***
//**********************************
function getSpaceXParameters() {

    // here we would have some kind of listener that waits for all the parameters to be checked 

    //Capsules
    //Cores
    //Dragons
    //History
    //Info
    //Landing Pads
    //Launches
    //Launch Pads
    //Missions
    //Payloads
    //Rockets
    //Roadster
    //Ships

    return 'capsules';
};
//**********************************

// POPULATESPACEXDATA function 
// This populateSpaceXData on the page 
//**********************************
function populateSpaceXData(response) {
    // console.log(response[0]['capsule_id']);

    // cool this is working now and populating results on the website dynamically
    // we are gonna not have to specify anything 
    // we will just have to loop HERE  
    response.forEach((e)=>{
        console.log(e['capsule_id'])

        // this will stay here                  this will just say reponse
       $('.spaceDataPopulate').append($('<div>').text(e['capsule_id'])); 

    })

};
//**********************************

// clears the spaceDataPopulate container
//**********************************
$('#clear').on('click', function(){

    $('.spaceDataPopulate').empty();
})
//**********************************


}


// Upcoming Launch API
{

// BUTTON that get us all the Upcoming Launched 
// this call request most recent launches BTN
//**********************************
$('#upComingLaunchBtn').on('click', function(){

    let baseUrl = 'https://launchlibrary.net/1.3/';

    let queryParameters = {
            launch: 'launch'
    }
    
    $.ajax({
        url: baseUrl + queryParameters.launch,
        method: 'GET'
    }).then((appendUpcomingLaunches))
});
//**********************************

// APPENDUPCOMINGLAUNCHES function 
// this function appends the most recent launches to the html
// plus all the juicy stats that come with that
//**********************************
function appendUpcomingLaunches(response){
   
    // this is an array with all the upcoming launches
    console.log(response.launches);

    let launchesArr = response.launches;

    // this this is number of upcoming launches
    console.log(response.count);

    let launchCount = $('<div>').text(`Upcoming Count Launch: ${response.count}`)
    

    $('.upcomingLaunchesContainer').prepend(launchCount);

    // loop through and append the upcoming launches to the html
    launchesArr.forEach((e)=>{
        
        let name = $('<div>').text(`launch name: ${e.name}`);
        let date = $('<div>').text(`launch date: ${e.net}`);
        let id = $('<div>').text(`launch id: ${e.id}`);
        let launchContainer = $('<div>').css({
            'border': ' 1px solid red'
        });

        launchContainer.prepend(name);
        launchContainer.append(date);
        launchContainer.append(id);

        $('.upcomingLaunchesContainer').append(launchContainer)

    })

}
//**********************************

// BUTTON clears the upcomingLaunchesContainer
//**********************************
$('#clearLaunch').on('click', function(){

    $('.upcomingLaunchesContainer').empty();
})
//**********************************

}


// hubble News API this lets us the latest news  ******* WORK ON THIS
{
    function hubbleAjaxCall(){

        // this is the latest news 
        //http://hubblesite.org/api/v3/news_release/last


        // this is a list of the news 
        // http://hubblesite.org/api/v3/news

        let baseUrl = 'https://hubblesite.org/';





    }
}





















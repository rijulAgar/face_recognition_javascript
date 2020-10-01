// for eng

// $("#eng_modal").hide();
// $("#button_eng").click(function() {

//     $("#button_hindi").hide();
//     $("#eng_modal").show();
//     $("#second_img").show();
//     $("#button_eng").show();
//     $("#button_hindi").hide();
//     $("#hindi_modal").hide();
// });

// // for hindi
$("#left").on('click', function() {
    var video = document.getElementById("video");
    video.load();
    $('#video').fadeIn(1000);
    video.play();
});






// right click

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);
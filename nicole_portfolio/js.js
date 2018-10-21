// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
$('.myImg').click(function () {
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    // captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
//close the modal by clicking anywhere away from modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//toggles visibility of containers
function toggle_visibility(id) {
    var e = document.getElementById(id);
    var x = document.getElementsByClassName("page_item");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        e.style.display = 'flex';
        e.style.flexDirection = 'column';
        e.style.justifyContent = 'center';
        e.style.marginTop = '100px';
        // e.style.backgroundColor = 'yellow';

    }
}

//toggles opacity for selected menu item
function change_opactiy(id) {
    var d = document.getElementById(id);
    var y = document.getElementsByClassName("menu_item");
    var o;
    for (o = 0; o < y.length; o++) {
        y[o].style.color = "Black";
        y[o].style.opacity = "1";
        d.style.opacity = '.5';

    }
}

//re-toggle visibilty of work container
function toggle_work(id) {

    var e = document.getElementById(id);
    var x = document.getElementsByClassName("page_item");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        e.style.display = '';

    }
}

function display_captions(id) {
    var e = document.getElementsById()

}

{

}

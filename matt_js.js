


// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//         e.style.display = 'none';
//     else
//         e.style.display = 'block';
// }

function toggle_visibility(id) {
    var e = document.getElementById(id);
    var x = document.getElementsByClassName("page_item");
    var i;
    for (i = 0; i < x.length; i++) {
        console.log ('hello')
        x[i].style.display = "none";
    //     else
    //         i.style.display = 'block';
    e.style.color = 'white';
    e.style.display = 'block';
    }
}

function clear_welcome() {
  var p = document.getElementById(front_page_text);
  p.style.display = 'none';

}

function clear_form(id) {
  var c = document.getElementById(contact_links);
  var n = document.getElementById(form_confirm);
  c.style.display = 'none'
  n.style.display = 'block'

}


function tri_color(id) {
    document.getElementById("triangle_one").style.backgroundcolor = "white";
}


// function toggle_visibility(id) {
//     document.getElementById('id').style.display = 'block';
//     var divsToHide = document.getElementsByClassName("menu_item"); //divsToHide is an array
//     for(var i = 0; i < divsToHide.length; i++){
//         menu_item[i].style.display = "none"; // depending on what you're doing
//     }
// }

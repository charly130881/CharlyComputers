document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);
document.querySelector(".box3").addEventListener("click", box_selected3);

//declarando variables

//box1

const box1 = document.querySelector(".box1");
const check_bg1 = document.querySelector(".box1 .check");
const icon_check1 = document.querySelector(".box1 .fa-check");

//box2

const box2 = document.querySelector(".box2");
const check_bg2 = document.querySelector(".box2 .check");
const icon_check2 = document.querySelector(".box2 .fa-check");

//box3

const box3 = document.querySelector(".box3");
const check_bg3 = document.querySelector(".box3 .check");
const icon_check3 = document.querySelector(".box3 .fa-check");

// //box4

// const box4 = document.querySelector(".box4");
// const check_bg4 = document.querySelector(".box4 .check");
// const icon_check4 = document.querySelector(".box4 .fa-check");

// //box5

// const box5 = document.querySelector(".box5");
// const check_bg5 = document.querySelector(".box5 .check");
// const icon_check5 = document.querySelector(".box5 .fa-check");

// //box6

// const box6 = document.querySelector(".box6");
// const check_bg6 = document.querySelector(".box6 .check");
// const icon_check6 = document.querySelector(".box6 .fa-check");



function box_selected1 () {
    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');

    // box4.classList.remove('box-selected');
    // check_bg4.classList.remove('check-selected');
    // icon_check4.classList.remove('icon-check');

    // box5.classList.remove('box-selected');
    // check_bg5.classList.remove('check-selected');
    // icon_check5.classList.remove('icon-check');

    // box6.classList.remove('box-selected');
    // check_bg6.classList.remove('check-selected');
    // icon_check6.classList.remove('icon-check');

    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    icon_check1.classList.toggle('icon-check');
    
}

function box_selected2 () {

    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    box3.classList.remove('box-selected');
    check_bg3.classList.remove('check-selected');
    icon_check3.classList.remove('icon-check');

    // box4.classList.remove('box-selected');
    // check_bg4.classList.remove('check-selected');
    // icon_check4.classList.remove('icon-check');

    // box5.classList.remove('box-selected');
    // check_bg5.classList.remove('check-selected');
    // icon_check5.classList.remove('icon-check');

    // box6.classList.remove('box-selected');
    // check_bg6.classList.remove('check-selected');
    // icon_check6.classList.remove('icon-check');

    box2.classList.toggle('box-selected');
    check_bg2.classList.toggle('check-selected');
    icon_check2.classList.toggle('icon-check');    
}

function box_selected3 () {
    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    // box4.classList.remove('box-selected');
    // check_bg4.classList.remove('check-selected');
    // icon_check4.classList.remove('icon-check');

    // box5.classList.remove('box-selected');
    // check_bg5.classList.remove('check-selected');
    // icon_check5.classList.remove('icon-check');

    // box6.classList.remove('box-selected');
    // check_bg6.classList.remove('check-selected');
    // icon_check6.classList.remove('icon-check');

    box3.classList.toggle('box-selected');
    check_bg3.classList.toggle('check-selected');
    icon_check3.classList.toggle('icon-check');

}

// function box_selected4 () {

//     box4.classList.toggle('box-selected');
//     check_bg4.classList.toggle('check-selected');
//     icon_check4.classList.toggle('icon-check');

//     box1.classList.remove('box-selected');
//     check_bg1.classList.remove('check-selected');
//     icon_check1.classList.remove('icon-check');

//     box2.classList.remove('box-selected');
//     check_bg2.classList.remove('check-selected');
//     icon_check2.classList.remove('icon-check');

//     box3.classList.remove('box-selected');
//     check_bg3.classList.remove('check-selected');
//     icon_check3.classList.remove('icon-check');

//     box5.classList.remove('box-selected');
//     check_bg5.classList.remove('check-selected');
//     icon_check5.classList.remove('icon-check');

//     box6.classList.remove('box-selected');
//     check_bg6.classList.remove('check-selected');
//     icon_check6.classList.remove('icon-check');   
// }

// function box_selected5 () {
//     box1.classList.remove('box-selected');
//     check_bg1.classList.remove('check-selected');
//     icon_check1.classList.remove('icon-check');

//     box2.classList.remove('box-selected');
//     check_bg2.classList.remove('check-selected');
//     icon_check2.classList.remove('icon-check');

//     box3.classList.remove('box-selected');
//     check_bg3.classList.remove('check-selected');
//     icon_check3.classList.remove('icon-check');

//     box4.classList.remove('box-selected');
//     check_bg4.classList.remove('check-selected');
//     icon_check4.classList.remove('icon-check');

//     box6.classList.remove('box-selected');
//     check_bg6.classList.remove('check-selected');
//     icon_check6.classList.remove('icon-check');

//     box5.classList.toggle('box-selected');
//     check_bg5.classList.toggle('check-selected');
//     icon_check5.classList.toggle('icon-check');

// }

// function box_selected6 () {
//     box1.classList.remove('box-selected');
//     check_bg1.classList.remove('check-selected');
//     icon_check1.classList.remove('icon-check');

//     box2.classList.remove('box-selected');
//     check_bg2.classList.remove('check-selected');
//     icon_check2.classList.remove('icon-check');

//     box3.classList.remove('box-selected');
//     check_bg3.classList.remove('check-selected');
//     icon_check3.classList.remove('icon-check');

//     box4.classList.remove('box-selected');
//     check_bg4.classList.remove('check-selected');
//     icon_check4.classList.remove('icon-check');

//     box5.classList.remove('box-selected');
//     check_bg5.classList.remove('check-selected');
//     icon_check5.classList.remove('icon-check');

//     box6.classList.toggle('box-selected');
//     check_bg6.classList.toggle('check-selected');
//     icon_check6.classList.toggle('icon-check');
// }

const btn_modoOscuro = document.getElementById("btn_modoOscuro");
btn_modoOscuro.addEventListener("click", function modoOscuro() {
    
    document.body.classList.toggle("oscuro");
    headerOscuro.classList.toggle("oscuro")
    h2Oscuro.classList.toggle("oscuro")
    linkA.classList.toggle("oscuro")
    linkB.classList.toggle("oscuro")
    linkC.classList.toggle("oscuro")
    linkD.classList.toggle("oscuro")
    articuloOscuro.classList.toggle("oscuro") 
    articuloOscuro.classList.toggle("border") 
    servicio1.classList.toggle("oscuro") 
    servicio2.classList.toggle("oscuro")
    servicio3.classList.toggle("oscuro")
    // servicio4.classList.toggle("oscuro")
    // servicio5.classList.toggle("oscuro")
    // servicio6.classList.toggle("oscuro") 
    servicio1.classList.toggle("border") 
    servicio2.classList.toggle("border")
    servicio3.classList.toggle("border")
    // servicio4.classList.toggle("border")
    // servicio5.classList.toggle("border")
    // servicio6.classList.toggle("border") 
    bodyOscuro.classList.toggle("oscuro")    
   //  bodyOscuroQuienes.classList.toggle("oscuro")
})

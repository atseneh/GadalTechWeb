// function replaceDIV(){
//     var elm = document.getElementById("hotline_icon");
//     var new_elm = document.createElement("p");
//     new_elm.innerHTML = "9830";
//     // new_elm.style.backgroundColor = "green";
//     // elm.parentNode.replaceChild(new_elm,elm);
//     elm.replaceWith(new_elm)
// }
// // setTimeout(function(){
// //     replaceDIV();
// // }, 3000);
// setTimeout(() => {
//     document.getElementById("hotline_icon").style = 'display:block'
//     document.getElementById("hotline_icon").style = 'display:hidden'
// }, 3000);
const hotlineButton = document.getElementById('hotline-button')
const icon = document.getElementById('hotline_icon')
const text = document.getElementById('hotline_text')
hotlineButton.addEventListener('click',(event)=>{
// if(icon.style.display==='none') {
//     icon.style.display = 'inline'
// }
// else {
//     icon.style.display = 'none'
// }
    icon.style.display = 'none'
    text.style.display = 'inline'
})
var Hide = {} ;

/* Helper functions for obscuring email. 

   Most spam-crawlers don't seem to use javascript. */

Hide.emails = function (text) {
  var a='a';
  if (!text) text = 's' + 'e' + a + 'l' + 'd' + 'ou' + 's' + '@gm' + 'ai' + 'l.c' + 'om' ;
  document.write('<' + a + ' href="m' + a + 'i'+'lto:'+ 's' +'aldo' + 'us' + '@gma'+'il.c' + 'o'+'m">'+text+'</a>');
} ;

Hide.email = function (account,domain,text) {
  document.write('<a href="mailto:'+account+'@'+domain+'">'+text+'</a>') ;
} ;

// Hide.phones = function (text) {
//   var t ='3';
//   if (!text) text = '8' + t + 1 + t + '9' + '27' + '9' + '92';
//   document.write('<a href="8313927992">'831-392-7992'</a>');
// } ;

// Hide.phone = function (account,domain,text) {
//   document.write('<a href="mailto:'+account+'@'+domain+'">'+text+'</a>') ;
// } ;
// Code to make header sticky:
window.onscroll = function() {stickyHeader()};

var topnav = document.getElementById("header");

var sticky = topnav.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}

// To scroll to projects and contact page
function toProjects() {
  let elmnt = document.getElementById("projectsWithPadding");
  elmnt.scrollIntoView();
}

// //Contact Form
// document.contactForm.addEventListener("submit", function(e){
//   e.preventDefault()
//   var name = document.contactForm.name
//   var company = document.contactForm.company.value
//   var email = document.contactForm.email.value
//   var phone = document.contactForm.phone.value
//   var info = document.contactForm.info.value
// })

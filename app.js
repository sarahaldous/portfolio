// lib Maybe 
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

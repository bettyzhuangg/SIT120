function NewsletterChoice(val) {
    var element=document.getElementById('txtOther');
    if(val=='Others')
      element.style.display='block';
    else  
      element.style.display='none';
}
const acc= document.getElementsByClassName('accordition');

for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {

      const panel = this.nextElementSibling;
      if(panel.style.display === 'block'){
        panel.style.display='none';
        acc[i].style.fontWeight = '400'
      }else{
        panel.style.display = 'block'
        acc[i].style.fontWeight = '700'
      }
    });
    }


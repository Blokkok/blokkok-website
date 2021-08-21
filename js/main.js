let navStatus  = false;
let isSendable = true;

const $ = (_querySelector) => { return document.querySelector(_querySelector); }

const BlokkokWebApp = {
  toggleNav: () => {
    if(!navStatus) {
      navStatus = true;
  
      $('#toggle-icon').innerHTML = 'close';
      $('.navBarCollapse').setAttribute('style', 'display: flex;');
    } else {
      navStatus = false;
  
      $('#toggle-icon').innerHTML = 'menu';
      $('.navBarCollapse').setAttribute('style', '');
    }
  },
  sendMail: () => {
    if(!isSendable) {
      alert('Please wait a bit before sending an new one.')
  
      return;
    }
  
    isSendable = false;
  
    const request = new XMLHttpRequest();
    const params = {
      "content": null,
      "embeds": [
        {
          "title": $('#formControlSubject').value,
          "description": $('#formControlMessage').value,
          "color": 43608,
          "footer": {
            "text": $('#formControlEmail').value
          },
          "timestamp": new Date()
        }
      ]
    }
  
    request.open("POST", "https://api.blokkok.ga/v1/sendContact");
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
  
    setTimeout(() => {
      isSendable = true;
    }, 10000);
  }
}

document.addEventListener('scroll', function(e) {
  console.log(window.scrollY);

  if(window.scrollY <= 30) {
    document.querySelector('.navBar').setAttribute('class', 'navBar');
  } else {
    document.querySelector('.navBar').setAttribute('class', 'navBar navBarScrolled');
  }
});

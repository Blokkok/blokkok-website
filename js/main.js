let navStatus = false;

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
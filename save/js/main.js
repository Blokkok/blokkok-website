const firebaseConfig = {
  apiKey: "AIzaSyC5i-h_cKrptVxv0fOCc4lNH1rfVQfh1pw",
  authDomain: "blokkok-3ded8.firebaseapp.com",
  projectId: "blokkok-3ded8",
  storageBucket: "blokkok-3ded8.appspot.com",
  messagingSenderId: "171826471818",
  appId: "1:171826471818:web:a3132c252ff43f7ddf5e73",
  measurementId: "G-YHNZCDZG6H"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

/* ---------------------------------------------------------- */

let isSendable = true;

const sendMail = () => {
  if(!isSendable) {
    alert('Please wait a bit before sending an new one.')

    return;
  }

  isSendable = false;

  db.collection("contact").doc().set({
    subject: document.getElementById('formControlSubject').value,
    message: document.getElementById('formControlMessage').value,
    email: document.getElementById('formControlEmail').value
  })
  .then(() => {
    const request = new XMLHttpRequest();
    const params = {
      "content": null,
      "embeds": [
        {
          "title": document.getElementById('formControlSubject').value,
          "description": document.getElementById('formControlMessage').value,
          "color": 43608,
          "footer": {
            "text": document.getElementById('formControlEmail').value
          },
          "timestamp": new Date()
        }
      ]
    }

    request.open("POST", "https://canary.discord.com/api/webhooks/869942680241725490/JkXa24e5OS9hHi1N749OvQ3WTC0yjn02rxCuWWVspcM-ol6TVOfd_Wxu8xl92kEEqqVL");
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify(params));
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });

  setTimeout(() => {
    isSendable = true;
  }, 10000);
}

/* ---------------------------------------------------------- */

document.addEventListener('scroll', function(e) {
  console.log(window.scrollY);

  if(window.scrollY <= 30) {
    document.querySelector('.navbar').setAttribute('style', 'box-shadow: none; background-color: #00aa58; transition: 300ms;');
    document.querySelector('.navbar').setAttribute('class', 'navbar navbar-expand-lg navbar-dark fixed-top');
  } else {
    document.querySelector('.navbar').setAttribute('style', 'background-color: #fff; transition: 300ms;');
    document.querySelector('.navbar').setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');
  }
});

/* ---------------------------------------------------------- */

// https://api.github.com/repos/OpenBlocksTeam/openblocks-app/contributors

fetch('https://api.github.com/repos/OpenBlocksTeam/openblocks-app/contributors')
  .then(response => response.json())
  .then(data => {
    let i           = 0;
    const dataConst = data;

    function nextPerson(contributorData) {
      if(i === dataConst.lenght || i === 3) return;

      console.log(contributorData);

      fetch(contributorData.url)
        .then(response => response.json())
        .then(data => {
          const newElement = document.createElement('div');

          newElement.setAttribute('class', 'col-md-4 mb-5 mb-md-0');

          Vibrant.from(data.avatar_url).getPalette().then(function(palette) {
            newElement.innerHTML = `
              <div style="height: 100%; text-align: center; box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 25%); border-radius: 6px;">
                <div class="card-body">
                  <div class="card-up info-color" style="height: 150px; background-color: ${palette.Vibrant.hex}; border-radius: 6px;"></div>
                  <!--Avatar-->
                  <div class="avatar mx-auto white" style="margin-top: -50px; display: flex; align-items: center; justify-content: center;">
                    <img src="${data.avatar_url}" class="rounded-circle" style="height: 120px; border: 3px solid #fff; background-color: #fff;">
                  </div>
                  <h4 class="card-title" style="margin-top: 8px;">${data.login}</h4>
                  Contributions: ${contributorData.contributions}
                  <hr />
                  <p class="card-text">
                    ${data.bio == null ? 'No Bio Set.' : data.bio }
                  </p>
                </div>
              </div>
            `;

            document.getElementById('contributorList').appendChild(newElement);

            console.log(palette.Vibrant.hex);

            i++;
            nextPerson(dataConst[i]);
          });
      });
    }

    nextPerson(dataConst[i]);
  });
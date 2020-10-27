//navigation sections on button click
const navBtns = [document.getElementById('home-btn'), document.getElementById('cv-btn'), document.getElementById('portfolio-btn'), document.getElementById('contact-btn'), 
document.getElementById('home-btn2'), document.getElementById('cv-btn2'), document.getElementById('portfolio-btn2'), document.getElementById('contact-btn2')];
navBtns.forEach(function(item){
  item.addEventListener('click', onPress);
});


//the sections themselves
const sectionArr = [document.getElementById('home'), document.getElementById('cv'), document.getElementById('portfolio'), document.getElementById('contact')];


// Listen for nav button click

function onPress(e) {
  const sectionBtn = e.target.id;
  e.preventDefault(); 

  //remove all nav bar displays
  Array.from(sectionArr).forEach(function(item){
    item.style.display = 'none';
  });
  switch(sectionBtn) {
    case 'cv-btn': // Fallthrough
    case 'cv-btn2':
      sectionArr[1].style.display = 'block';
      break;
    case 'portfolio-btn': // Fallthrough
    case 'portfolio-btn2':
      sectionArr[2].style.display = 'block';
      break;
    case 'contact-btn': // Fallthrough
    case 'contact-btn2':
      sectionArr[3].style.display = 'block';
      break
    default:
      sectionArr[0].style.display = 'block';
  }
}


document.getElementById('contact-form')
 .addEventListener('submit', function(e) 
{
  e.preventDefault();
  if(!checkContactForm())
  {
    alert('input is incorrect for contact form! \n look at the console for more detail');
  }
  else 
  {
    const btn = document.getElementById('contact-submit');
    btn.innerText = 'Sending Mail...';

    const serviceID = 'default_service';
    const templateID = 'template_i4wzf5o';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => 
    {
      btn.innerText = 'SEND MAIL';
      console.log('Sent!');
    }, (err) => 
    {
      btn.innerText = 'SEND MAIL';
      console.log(JSON.stringify(err));
    });
  }
});

function isAlphaBetic(str)
{
  const letters = /^[A-Za-z ]+$/;

  if (str.match(letters))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function isPossibleEmail(email)
{
  if (email.indexOf('@') != -1  && email.indexOf('.') != -1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function checkContactForm()
{
  const name = document.forms["contact-form"]["Name"].value;
  const email = document.forms["contact-form"]["Email"].value;

  let isFormCorrect = true;

  if (!isAlphaBetic(name))
  {
    isFormCorrect = false;
    console.log(name + ' must be alphabetic');
  }

  if (!isPossibleEmail(email))
  {
    isFormatCorrect = false;
    console.log(email + ' must be a valid email');
  }

  return isFormCorrect;
}
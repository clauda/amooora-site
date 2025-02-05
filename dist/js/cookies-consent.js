const consentBox = document.getElementById('cookies-consent-popup')
const acceptBtn = document.getElementById('accept-cookies')
const rejectBtn = document.getElementById('reject-cookies')

acceptBtn.onclick = () => {
  document.cookie = 'CookieBy=Amooora; max-age=' + 60 * 60 * 24
  if (document.cookie) {
    consentBox.classList.add('hidden')
  } else {
    console.error(
      "Cookie can't be set! Pleaseunblock this site from the cookie setting of your browser."
    )
  }
}

rejectBtn.onclick = () => {
  console.warn('Cookies rejected. Some functionality may be limited.')
  consentBox.classList.add('hidden')
}

let checkCookie = document.cookie.indexOf('CookieBy=Amooora')
checkCookie !== -1
  ? consentBox.classList.add('hidden')
  : consentBox.classList.remove('hidden')

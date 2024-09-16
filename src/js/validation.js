const texts = {
  required: {
    uk: ' обов’язкове поле',
    ru: ' обязательное поле',
    uz: ' majburiy maydon',
    en: ' is required',
  },
  email: {
    uk: 'Електронна адреса невірна',
    ru: 'Неверный адрес электронной почты',
    uz: "Noto'g'ri elektron pochta manzili",
    en: 'Incorrect email address',
  },
}

const text_email =
  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/

const doError = (input, text) => {
  console.log(input)

  if (input.closest('.label')) {
    input.closest('.label').querySelector('.errorText').textContent = text
    input.closest('.label').querySelector('.errorText').style.display = 'block'
  }
}

const removeError = input => {
  if (input.closest('.label')) {
    input.closest('.label').querySelector('.errorText').style.display = 'none'
  }
}

const capitalize = (text = ' ') => text[0].toUpperCase() + text.slice(1)

const validate = () => {
  let isValid = true
  const lang = document.documentElement.getAttribute('lang')
  const form = document.querySelector('form')

  form.querySelectorAll('input').forEach(input => {
    if (input.required) {
      if (input.value === '') {
        doError(input, "input.dataset.name + texts.required[lang || 'en']")
        isValid = false
      } else {
        console.log('removeError')

        removeError(input)
      }
    }

    if (input.type === 'email') {
      if (text_email.test('input.value')) {
        doError(input, texts.email[lang || 'en'])
        isValid = false
      } else {
        removeError(input)
      }
    }
  })

  return isValid
}

const validation = () => {
  const form = document.querySelector('form')
  const button = form.querySelector('button')

  form.querySelector('button').setAttribute('disabled', 'true')

  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      const isValid = validate()
      isValid
        ? button.removeAttribute('disabled')
        : button.setAttribute('disabled', 'true')
    })
  })
}

export default validation

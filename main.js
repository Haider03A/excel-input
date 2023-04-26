class Validation {
  #text;
  #type;
  #result = {
    error: '',
    value: ''
  }

  constructor(text, maxCh = false) {
    this.#text = text.toString().trim();
  }

  // Setter
  set text(newText) {
    this.#text = newText.toString().trim();
  }

  // Getter
  get text() {
    return this.#text;
  }


  // Mathods
  numberValidation() {
    let state = true;
    const checkLog = []
    const value = this.text
    const result = this.#result

    if (value == '') {
      result.error = 'There is nothing value, enter value'
      result.value = this.text
      return result;
    }


    for (let i = 0; i < value.length; i++) {
      if (state) {
        for (let ii = 0; ii < 10; ii++) {
          if (value[i] != ii) {
            state = false;
          } else if (value[i] == ii) {
            state = true;
            break;
          }
        }
      } else {
        break;
      }
      checkLog.push(state)
    }
    const valueTrue = checkLog.find(i => i == false) == undefined ? true : checkLog.find(i => i == false);
    if (valueTrue) {
      result.error = false
      result.value = this.text
      return result;
    } else {
      result.error = `This value is nuvalidation, enter number only`
      result.value = ''
      return result;
    }
  }

  // Public Methods

  stringValidation() {
    const value = this.text
    const result = this.#result
    if (value == '') {
      result.error = 'There is nothing value, enter value'
      result.value = this.text
      return result;
    } else {
      result.error = false
      result.value = this.text
      return result;
    }
  }

}

const formRef = document.querySelector('form.enterItems');
const nameItemtRef = document.querySelector('input#itemInput')
const priseItemRef = document.querySelector('input#priseItem')
const inputsHelpRef = document.querySelectorAll('form > div small')

const mainFunVaild = _ => {
  const itemNameValid = new Validation(nameItemtRef.value)
  const itemNameValue = itemNameValid.stringValidation()
  
  const priseItemValid = new Validation(priseItemRef.value)
  const priseItemValue = priseItemValid.numberValidation()
  
  if (!itemNameValue.error) {
    inputsHelpRef[0].setAttribute('valid', false)
    inputsHelpRef[0].innerHTML = '<=>'
  } else {
    inputsHelpRef[0].innerHTML = itemNameValue.error
    inputsHelpRef[0].setAttribute('valid', true)
  }
  
  if (!priseItemValue.error) {
    inputsHelpRef[1].setAttribute('valid', false)
    inputsHelpRef[1].innerHTML = '<=>'
  } else {
    inputsHelpRef[1].innerHTML = priseItemValue.error
    inputsHelpRef[1].setAttribute('valid', true)
  }
}

formRef.addEventListener('submit', e => {
  e.preventDefault()
  mainFunVaild()
  
})

nameItemtRef.addEventListener('keyup', e => {
  e.target.value = e.target.value.toString().trimStart()
  
  const itemNameValid = new Validation(nameItemtRef.value)
  const itemNameValue = itemNameValid.stringValidation()
  
  if (!itemNameValue.error) {
    inputsHelpRef[0].setAttribute('valid', false)
    inputsHelpRef[0].innerHTML = '<=>'
  } else {
    inputsHelpRef[0].innerHTML = itemNameValue.error
    inputsHelpRef[0].setAttribute('valid', true)
  }
})

priseItemRef.addEventListener('keyup', e => {
  e.target.value = e.target.value.toString().trimStart()
  
  const priseItemValid = new Validation(priseItemRef.value)
  const priseItemValue = priseItemValid.numberValidation()
  
  if (!priseItemValue.error) {
    inputsHelpRef[1].setAttribute('valid', false)
    inputsHelpRef[1].innerHTML = '<=>'
  } else {
    inputsHelpRef[1].innerHTML = priseItemValue.error
    inputsHelpRef[1].setAttribute('valid', true)
  }
})
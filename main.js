const formRef = document.querySelector('form.enterItems');
const itemInputRef = document.querySelector('input#itemInput')
const priseItemRef = document.querySelector('input#priseItem')

class Validation {
  #text;
  #type;
  #maxCh;

  constructor(text, type, maxCh = false) {
    this.#text = text;
    this.#type = type;
    this.#maxCh = maxCh;
  }

  // Setter
  set text(newText) {
    this.#text = newText;
  }

  set type(newType) {
    this.#type = newType;
  }

  set maxCh(newMaxCh) {
    this.maxCh = newMaxCh;
  }

  // Getter
  get text() {
    return this.#text;
  }

  get type() {
    return this.#type;
  }

  get maxCh() {
    return this.maxCh;
  }

  // Static Methods
  async numberValidation() {
    const value = this.text.toString().trim();
    let state = false;
    const checkLog = []

    for (let i = 0; i < value.length; i++) {
      if (state) {
        for (let ii = 0; ii < 10; ii++) {
          if (value[i] == ii) {
            await (state = true)
          }
          await checkLog.push(state)
        }
      }
    }
    console.log(checkLog);
  }

  // Public Methods

  valid() {
    this.numberValidation()
  }

}

const itemValid = new Validation(123)


console.log(itemValid.valid());


// const validation = (text, type, maxCh = false) => {
//   const value = text.toString().trim();
//   let state = false;
//   value != '' && (state = true)
//   type == 'string' && (1 == value.length) && (state = false)
//   if (state) {
//     if (type == 'number') {

//         for (let i = 0; i < value.length; i++) {
//           if (state) {
//             const checkLog = []
//           for (let ii = 0; ii < 10; ii++) {
//             console.log(value[i], ii)
//             if(value[i] == ii){

//             state = false
//             break;
//             }

//           }
//         }
//       }

//       return state ? value : false
//     } else if (type == 'string') {
//       return 's'
//     } else {
//       return false;
//     }
//   } else {
//     return false
//   }

// }


formRef.addEventListener('submit', e => {
  e.preventDefault()
  const value = validation(priseItemRef.value, 'number')
  console.log(value)
})


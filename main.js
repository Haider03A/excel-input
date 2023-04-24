const formRef = document.querySelector('form.enterItems');
const itemInputRef = document.querySelector('input#itemInput')
const priseItemRef = document.querySelector('input#priseItem')

const validation = (text, type, maxCh = false) => {
  const value = text.toString().trim();
  let state = false;
  value != '' && (state = true)
  type == 'string' && (1 == value.length) && (state = false)
  if (state) {
    if (type == 'number') {
      
        for (let i = 0; i < value.length; i++) {
          if (state) {
            const checkLog = []
          for (let ii = 0; ii < 10; ii++) {
            console.log(value[i], ii)
            if(value[i] == ii){
              
            state = false
            break;
            }
            
          }
        }
      }

      return state ? value : false
    } else if (type == 'string') {
      return 's'
    } else {
      return false;
    }
  } else {
    return false
  }

}


formRef.addEventListener('submit', e => {
  e.preventDefault()
  const value = validation(priseItemRef.value, 'number')
  console.log(value)
})


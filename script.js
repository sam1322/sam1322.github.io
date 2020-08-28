const Whitekeys = ['a','s','d','f','j','k','l' ]
const Blackkeys = [ 'w','e','u','i','o' ]

const keys  = document.querySelectorAll('.key'); 
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
  })

document.addEventListener('keydown', e =>{
    if(e.repeat)return
    const key =e.key
    const whitekeyIndex = Whitekeys.indexOf(key)
    const blackkeyIndex = Blackkeys.indexOf(key)

    if(whitekeyIndex > -1 )playNote(whitekeys[whitekeyIndex])
    if(blackkeyIndex > -1 )playNote(blackkeys[blackkeyIndex])


})

function playNote(key){
    const noteAudio  =  document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0 
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended' , () =>{
        key.classList.remove('active')
    })
}
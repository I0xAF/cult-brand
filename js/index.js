let prevSelectedTab = document.querySelector('.t-selected')
let prevSelected = document.querySelector('.selected')

setSelection('.tabbar-item', (event, parent) => {
  event.preventDefault()
  if(!parent.classList.contains('selected')) {
    if(prevSelected !== null) prevSelected.classList.remove('selected')
    parent.classList.add('selected')
    prevSelected = parent
  }
})

setSelection('.tab-item', (e, parent) => {
  e.preventDefault()
  if(!parent.classList.contains('t-selected')) {
    if(prevSelectedTab !== null){
      prevSelectedTab.classList.remove('t-selected')
    }
    parent.classList.add('t-selected')
    prevSelectedTab = parent
  }
})

function setSelection(selector, callback){
  const items = document.querySelectorAll(selector)
  for(let item of items){
    item.childNodes[1].addEventListener('click', (event) => {
      callback(event, item)
    })
  }
}

function closeStock(e){
  e.preventDefault()
  document.querySelector('.header-stock').style.display = 'none'
}


function slideRight(event, selector){
  event.preventDefault()
  //JQuery animate(!)
  const cardBox = document.querySelector(selector)
  const scrollMax = cardBox.scrollWidth - cardBox.clientWidth;
  console.log(scrollMax, cardBox.scrollLeft);
  if(cardBox.scrollLeft >= scrollMax) {
    cardBox.scrollLeft = 0;
    return
  }
  cardBox.scrollLeft += 165;
}
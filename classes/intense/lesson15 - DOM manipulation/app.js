// 1. Element selecting

// 1.1 Id 
// DOM => Document Object Model 
// const title = document.getElementById('title')

// 1.2 class
// const container = document.getElementsByClassName('container')

// 1.3 tag name
// const list = document.getElementsByTagName('ul')

// 1.4 querySelector
// const result = document.querySelector('ul')


// 2. Style change
// const title = document.querySelector('#title')
// title.style.color = 'red'

// const container = document.querySelector('.container')

// container.style.borderColor = 'blue'
// title.style.fontSize = '70px'


// 3. Create element 
// const container = document.querySelector('.container')

// const newHeader = document.createElement('h1')
// container.append(newHeader)


// 4. Modify element
// 4.1 innerText
// const list = document.querySelectorAll('li')
// const secondListItem = list[1]
// secondListItem.innerText = 'Golf'

// 4.2 Attributes
// const firstListItem = document.querySelector('li')
// // firstListItem.setAttribute('id', 'title')

// const title = document.querySelector('#title')
// // console.log(title.getAttribute('id'))

// const container = document.querySelector('.container')


// 4.3 Delete element 
// const lastElementOfTheList = document.querySelectorAll('li')
// lastElementOfTheList[3].remove()



// Practice
const addNewListItem = () => {
    const list = document.querySelector('ul')
    const newList = document.createElement('li')
    newList.innerHTML = `
        <span>New List Item</span>
        <i class='fa fa-trash-o'></i>
    `
    newList.setAttribute('class', 'text-color')
    newList.style.borderBlockColor = 'pink'
    list.append(newList)
}

const deleteLastListItem = () => {
    const list = document.querySelectorAll('li')
    list[list.length - 1].remove()
}


const addButton = document.querySelector('button')

addButton.addEventListener('click', addNewListItem)

const buttos = document.querySelectorAll('button')

const sportItems = [
    "Basketball",
    "Golf",
    "Football"
]

for (let item of sportItems) {
    const list = document.querySelector('ul')
    const newItem = document.createElement('li')
    newItem.innerHTML = `
        <span>${item}</span>
        <i class='fa fa-trash-o'></i>
    `
    list.append(newItem)
}

const list = document.querySelector('ul')

const deleteButton = () => {}

const clickHandler = (event) => {
    const target = event.target 
    if (target.matches('span')) {
        target.setAttribute('contenteditable', true)
    }   
    if (target.matches('i')) {
        event.target.parentElement.remove()
    }
}

list.addEventListener('click' , clickHandler)
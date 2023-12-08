const navbarNav = document.querySelector('.navbar-nav')
const hamburger = document.querySelector('#hamburger')

hamburger.addEventListener ('click',() => { 
    navbarNav.classList.toggle('active')
})

const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#searchBox')
const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener ('click',(e) => { 
    searchForm.classList.toggle('active')
    searchBox.focus()
    e.preventDefault()
})

const hm = document.querySelector('#hamburger')
const sb = document.querySelector('#searchButton')

document.addEventListener('click',(e)=>{
    if(!hm.contains(e.target)&&!navbarNav.contains(e.target)){
    navbarNav.classList.remove('active')
    }

    if(!sb.contains(e.target)&&!searchForm.contains(e.target)){
    searchForm.classList.remove('active')
    }

})


// Hamburger Toggle
const navbarNav = document.querySelector('.navbar-nav')
const hamburger = document.querySelector('#hamburger')

hamburger.addEventListener ('click',() => { 
    navbarNav.classList.toggle('active')
})

// Search Form Toggle
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#searchBox')
const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener ('click',(e) => { 
    searchForm.classList.toggle('active')
    searchBox.focus()
    e.preventDefault()
})

// Shopping cart  Toggle
const shoppingCart = document.querySelector('.shopping-cart')
const cartButton = document.querySelector('#cartButton')

cartButton.addEventListener ('click',() => { 
    shoppingCart.classList.toggle('active')
})

// Remove Toggle
const hm = document.querySelector('#hamburger')
const sb = document.querySelector('#searchButton')
const cb = document.querySelector('#cartButton')

document.addEventListener('click',(e)=>{
    if(!hm.contains(e.target)&&!navbarNav.contains(e.target)){
    navbarNav.classList.remove('active')
    }

    if(!sb.contains(e.target)&&!searchForm.contains(e.target)){
    searchForm.classList.remove('active')
    }
    
    if(!cb.contains(e.target)&&!shoppingCart.contains(e.target)){
    shoppingCart.classList.remove('active')
    }
})


// modal toggle

const itemDetailButtons = document.querySelectorAll('.item-detail-button')
const addItemModal = document.querySelector('#addItemModal')

itemDetailButtons.forEach((btn)=>{
    btn.onclick=(e)=>{
        addItemModal.style.display ='flex';
        e.preventDefault()   
    }
    
})


document.querySelector('.modal .close-item').onclick=(e)=>{
    addItemModal.style.display ='none';
    e.preventDefault()
}

const modal = document.querySelector('#addItemModal')

window.onclick= (e)=>{
    if(e.target===modal){
        modal.style.display= 'none'
    }
}
const menuBtn = document.querySelector('.menuBtn')
const menuB = document.querySelector('.menuB')
const links = document.querySelectorAll('ul')
const secondLink = document.querySelector('.secondLink')
const leftArrow = document.querySelectorAll('.left')
const content = document.querySelectorAll('.content')
const nav = document.querySelector('nav')

menuB.addEventListener('click', ()=>{
    secondLink.classList.toggle('addHeight')
    console.log(navCon)
})

menuBtn.addEventListener('click', ()=>{
    links.forEach((item) => {
        item.classList.toggle('addHeight')
    })
    console.log(navCon)
})

window.addEventListener('scroll', ()=>{
    const navHeight = nav.getBoundingClientRect().height
    const height = window.pageYOffset
    if(height > navHeight){
        nav.classList.add('fixedNav')
    }else{
        nav.classList.remove('fixedNav')
    }
})


/* Array.from(leftArrow).forEach((items)=>{
    console.log(items)
    items.addEventListener('click', (e)=>{
       content.forEach((ele)=>{
           if(e !== ele){
               ele.classList.add('remove')
           }
           ele.classList.toggle('content')
           console.log(ele)
       })
    })
        
        
})  */
Array.from(leftArrow).forEach( item => {
    item.addEventListener('click', openContent)
} )

function openContent(e) {
    let contentParent = this.parentNode.children
    let content = contentParent[contentParent.length - 1]
    console.log(content)
    content.classList.toggle('content')
}


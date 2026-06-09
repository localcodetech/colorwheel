


function color(){

    const hexcolor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const ranhex = [];

    for(let i =0; i<6;i++){
        const random = Math.floor(Math.random() * hexcolor.length)
        ranhex.push(hexcolor[random])
    }
    console.log(ranhex.join(''))
    return `#${ranhex.join('')}`
};

const  btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const div1 = document.getElementById('div1')

    div1.style.backgroundColor = color()
    div1.textContent = color()

    const div2 = document.getElementById('div2')

    div2.style.backgroundColor = color()
    div2.textContent = color()


    const div3 = document.getElementById('div3')

    div3.style.backgroundColor = color()
    div3.textContent = color()


    const div4 = document.getElementById('div4')

    div4.style.backgroundColor = color()
    div4.textContent = color()


    const div5 = document.getElementById('div5')

    div5.style.backgroundColor = color()
    div5.textContent = color()
})
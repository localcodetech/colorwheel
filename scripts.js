const btn  = document.getElementById('btn')

btn.addEventListener('click',  (e)=>{
    const colorMe = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    const ranHex = []; 
    for(let i = 0;i<6;i++){
        const random = Math.floor(Math.random()*colorMe.length)
        ranHex.push(colorMe[random])
    };
    console.log(ranHex)

    const div1 = document.querySelector('#div1')
    

    
    
})
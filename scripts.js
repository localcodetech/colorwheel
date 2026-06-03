
const colorDiv = document.getElementById('btn');
const div = document.getElementById('firstdiv')
const div3 = document.getElementById('second')
const div4 = document.getElementById('third')
const div5 = document.getElementById('four')
const div6 = document.getElementById('five')
const div7 = document.getElementById('six')



const hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorDiv.addEventListener(
    'click', () => {
        
        const ranClickArray = [];
        for (let i = 0; i <6; i++){
            const randomColor = Math.floor(Math.random()* hexcode.length);
            ranClickArray.push(hexcode[randomColor])
            console.log(ranClickArray)
        };
        div.style.backgroundColor = `#${ranClickArray.join('')}`;
        div.innerHTML = `#${ranClickArray.join('')}`
        div3.classList.add((`bg-[#${Math.floor(Math.random(ranClickArray.join('')))}]`))
        div3.innerHTML = `#${Math.floor()}`
        div4.classList.add((`bg-[#${Math.floor()}]`));
        div5.classList.add((`bg-[#${Math.floor()}]`));;
        div6.classList.add((`bg-[#${Math.floor()}]`));
        div7.classList.add((`bg-[#${Math.floor()}]`));

        div4.innerHTML = `#${ranClickArray.join('')}`;
        div5.innerHTML = `#${ranClickArray.join('')}`;
        div6.innerHTML = `#${ranClickArray.join('')}`;
        div7.innerHTML = `#${ranClickArray.join('')}`;
    }

)
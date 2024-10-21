const rendomcolor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalid = null;
// for start 
const changecolor = ()=>{
    document.body.style.backgroundColor = rendomcolor();
}
// for stop
const stopcolor = () =>{
    clearInterval(intervalid)
}

document.querySelector('#start').addEventListener('click', ()=>{
    intervalid = setInterval(changecolor,1000);
});

document.querySelector('#stop').addEventListener('click', stopcolor) 
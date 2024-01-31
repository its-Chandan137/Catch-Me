let bb1 = document.querySelector("#bb1");
let body = document.querySelector('body');



bb1.addEventListener('mouseover', myFunc);

bb1.addEventListener('click', () => {
    bb1.innerText = "Congoo!";
    console.log("I admit... U won!")
    bb1.style.backgroundColor = "red"; 
    body.style.backgroundColor = "black"
    bb1.style.border = "none";
    bb1.removeEventListener('mouseover', myFunc);
    bb1.addEventListener('mouseout', () => {
        bb1.style.transform = "scale(0)";
        console.log(`Just jocking!! U won't find me now... HaHa! ${num}`)
    });
});
function myFunc() {
    let pos = Math.random();
    console.log(pos);
    switch(parseInt(pos*10)){
        case 0:
            num = "HaHa";
            break;
        case 1:
            num = "Funny!";
            break;
        case 2:
            num = "Hell No!";
            break;
        case 3:
            num = "Na na";
            break;
        case 4:
            num = "Try Hard!";
            break;
        case 5:
            num = "Nope!";
            break;
        case 6:
            num = "Never!";
            break;
        case 7:
            num = "Catch Me!";
            break;
        case 8:
            num = "Go Away!";
            break;
        case 9:
            num = "No";
            break;
        default:
            num = "Nooo!"
    }
    bb1.innerText = `${num}`;
    bb1.style.transform = `translateX(${pos*pos*(pos*100)}px) translateY(${pos*400}px)`;
    // bb1.style.opacity = `${pos}`;   // to make it harder
};


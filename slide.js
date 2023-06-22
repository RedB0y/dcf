function initSlider(className){
let track =  document.querySelector(`.${className}`);//TRACK
let wth = track.getBoundingClientRect().width;
console.log(`%c width = ${wth}`,'background:black;color:white;');
trackChildren = Array.from(track.children);

console.log(`%c TRACK CHILDREN`,'background:black;color:white;'); 	
console.log(trackChildren);

trackChildren.forEach((ele,ind)=>{
	ele.style.left = (ind*wth)+"px";
});
}

// function arrange(ele,ind){//Function To Arrange Elements In Row
    
// }


function movePage(className,indx){
let track =  document.querySelector(`.${className}`);
let wth = track.getBoundingClientRect().width;
console.log(`%c width = ${wth}`,'background:black;color:white;');
track.style.transform = `translateX(0px)`;
track.style.transform = `translateX(-${indx*wth}px)`;

}

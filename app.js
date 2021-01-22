const colours = [
    "#0f4c81", //2020
    "#ff6f61", //2019  
    "#5F4B8B", //2018
    "#88B04B", //2017
    "#F7CAC9", //2016
    "#964F4C", //2015
    "#AD5E99", //2014
    "#009473", //2013
    "#DD4124", //2012
    "#D94F70", //2011
    "#45B5AA", //2010
    "#F0C05A", //2009
    "#5A5B9F", //2008
    "#9B1B30", //2007
    "#DECDBE", //2006
    "#53B0AE", //2005
    "#E2583E", //2004
    "#7BC4C4", //2003
    "#BF1932", //2002
    "#C74375", //2001
    "#98B2D1", //2000
];

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener('click', function(){
    // get random number between 0 and 3
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colours[randomNumber];
   colour.textContent = colours[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colours.length);
}
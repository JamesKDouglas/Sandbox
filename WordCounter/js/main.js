let blurb = "James is a full stack web developer specializing in Internet of Things and Agtech. He came to web development after realizing it is his favorite part of developing products for digital agriculture. James is currently working with the #100devs agency and available for freelance work. React, vanilla JS, Node.js, CSS, HTML, C++, instrument and microcontroller development. Based in Vancouver, Canada. B.Sc.H Chemistry, M.Sc. Agroecology."
function countWords(blurb){
    let words = blurb.split(' ');
    return words.length;
}
console.log(countWords(blurb));
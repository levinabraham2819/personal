function updateDateTime(){
    const now=new Date();
    const currentDateTime=now.toLocaleString();
    document.querySelector('#datetime').textContent=currentDateTime;
}
setInterval(updateDateTime,1000);

//Get the current year
const currentYear = new Date().getFullYear();
//Copyright text
const copyrightText = "Levin Mathew Abraham. All Rights Reserved";
//Display copyright details in the console
console.log(`© ${currentYear} ${copyrightText}`);
//Display copyright details in the webpage
document.addEventListener("DOMContentLoaded", function(){
    const copyrightElement = document.getElementById("copyright");
    if (copyrightElement) {
        //&copy;(copyright symbol) doesn't work with 'textContent' property as it treats everything as plain text.
        //Hence, '\u00A9' Unicode character for the copyright symbol is used when applying the 'textContent' property.
        copyrightElement.textContent = `\u00A9 ${currentYear} ${copyrightText}`;
    }
});
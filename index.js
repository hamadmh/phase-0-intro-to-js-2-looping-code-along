let names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(){
    let i = 0;
    let messages = [];
    while (i < names.length){
        messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        i++;
    }
    return messages;
}
function countDown(){
    let i = 10;
    while (i >= 0){
        console.log(i);
        i--;
    }
}

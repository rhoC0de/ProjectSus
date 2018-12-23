function gen (amount){
    const date = Date.now();
    const unique = Math.abs(Math.sin(date*Math.pow(Math.PI,2)/180));

    // it will have issue if zero starts the numbers
    if(amount==2){
        const uniqueful = Math.floor(unique*(Math.pow(10,10)));
        const str = uniqueful.toString();
        return str.padStart(10,'0');
    }
    else if(amount==5){
        const uniqueful = Math.floor(unique*(Math.pow(10,12)))
        const str = uniqueful.toString();
        return str.padStart(12,'0');
    }
    else {
        const uniqueful = Math.floor(unique*(Math.pow(10,16)))
        const str = uniqueful.toString();
        return str.padStart(16,'0');
    }
}

module.exports = gen;
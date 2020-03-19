class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = typeof this.reverse == 'undefined' ?  true : reverse;
        
    }
    encrypt(message, key) {
        if (message == undefined || key == undefined)  throw new Error();
        let alph = "abcdefghijklmnopqrstuvwxyz".split("");
        let mes = message.toLowerCase();
        let k = key.toLowerCase();
        let output = "";
        let counter = 0;
        for(let i=0; i<mes.length;i++){
            if (alph.indexOf(mes[i]) === -1) {
                output += mes[i];
                counter +=1;
                continue;
            } 

            let a = alph.indexOf(mes[i]);
            
            let b = alph.indexOf(k[(i-counter) % k.length]);
            let index = (a  + b);
            if (index > 25) index -= 26;
            if (index < 0) index += 26;
            
            output+= alph[index].toUpperCase();
        }

        return this.reverse == true ? output : output.split('').join('');

    }

    decrypt(message, key) {
        if (message == undefined || key == undefined)  throw new Error();
        let alph = "abcdefghijklmnopqrstuvwxyz".split("");
        let mes = message.toLowerCase();
        let k = key.toLowerCase();
        let output = "";
        let counter = 0;
        for(let i=0; i<mes.length;i++){
            if (alph.indexOf(mes[i]) === -1) {
                output += mes[i];
                counter +=1;
                continue;
            } 

            let a = alph.indexOf(mes[i]);
            
            let b = alph.indexOf(k[(i-counter) % k.length]);
            let index = (a - b);
            if (index > 25) index -= 26;
            if (index < 0) index += 26;
            
            output+= alph[index].toUpperCase();
        }

        return this.reverse == true ? output : output.split('').join('');

    }
}

module.exports = VigenereCipheringMachine;

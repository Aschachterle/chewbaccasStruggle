"use strict";
class Partner {
    constructor() {
        this.name = [];
    }
    add(info) {
        console.log(info);
        this.name.push(info);
        
    } 
    getMax() {
        return Math.max(...this.name);
    }
}


class Info {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

const cand = new Partner();

while (true) {
    let question = prompt(`Would you like to add a candidate or get results of existing candidates?`);
    if (question == `add`) {
        const name = prompt(`What is the candidates name?`);
        const friendly = parseInt(prompt(`How friendly are they`));
        const fly = parseInt(prompt(`What is the candidates flying skill?`));
        const dejarik = parseInt(prompt(`What is the candidates Dejarik skill level?`));
        const fear = parseInt(prompt(`What is the candidates fear level?`));
        const score = parseInt(friendly + fly + dejarik - fear);
        cand.add(new Info(name, score));
    } else if (question == `get results`) {
        console.log(cand.getMax())
        break;
    } else {
        alert(`please enter "add" or "get results"!`)
    }
}

const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0

}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return{
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4, 
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster', 
        life: 120,
        maxLife: 120,
        attack: 16, 
        defense: 8
    }
}


const stage = {
    lutador1: null,
    lutador2: null,
    lutadorEl1: null,
    lutadorEl2: null,

    start(lutador1, lutador2, lutadorEl1, lutadorEl2) {
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutadorEl1 = lutadorEl1;
        this.lutadorEl2 = lutadorEl2;

        this.lutadorEl1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.lutador1, this.lutador2));
        this.lutadorEl2.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.lutador2, this.lutador1));


        this.update();
    },
    update(){
        //ATUALIZAR INFORMAÇÕES DOS LUTADORES 
        this.lutadorEl1.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP`;
        let l1Pct = (this.lutador1.life / this.lutador1.maxLife) * 100;
        this.lutadorEl1.querySelector('.bar').style.width = `${l1Pct}%`;


        this.lutadorEl2.querySelector('.name').innerHTML = `${this.lutador2.name} - ${this.lutador2.life.toFixed(1)} HP`;
        let l2Pct = (this.lutador1.life / this.lutador2.maxLife) * 100;
        this.lutadorEl2.querySelector('.bar').style.width = `${l2Pct}%`;

    },
    doAttack(atacando, atacado){
        console.log(`${atacando.name} está atacando ${atacado.name}`);

    }
}

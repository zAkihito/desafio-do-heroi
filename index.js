var heroi = { 
    nome: "Akihito ",
    xp: 999
    
    };
    
    if (heroi.xp < 1000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Ferro`)
    }
    else if (heroi.xp == 1001 && heroi.xp<= 2000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Bronze`)
    }
    else if (heroi.xp == 2001 && heroi.xp <= 5000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Prata`)
    }
    else if (heroi.xp == 6001 && heroi.xp <= 7000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Gold`)
    }
    else if (heroi.xp == 7001 && heroi.xp <= 8000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Platina`)
    }
    else if (heroi.xp == 8001 && heroi.xp <= 9000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Ascendente`)
    }
    else if (heroi.xp == 9001 && heroi.xp <= 10000) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Imortal`)
    }
    else if (heroi.xp >= 10001 ) {
        console.log(`O Héroi de nome ${heroi.nome} está no nível de Radiante`)
    }
    
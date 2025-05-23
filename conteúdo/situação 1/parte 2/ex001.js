var individuo1 = {
  nome: "Jones",

  idade: "74",

  filiacao: {
    nomePai: "JonesBerto",

    idadePai: 98,

    nomeMae: "Diorcalina",
  },
};

var individuo2 = {
  nome: "Varisnelson",

  idade: "45",

  filiacao: {
    nomeTio: "JonesUncle",

    idadePai: 98,

    nomeTia: "Mandriva",
  },

  nomePai: "JonesBerto",
};

var individuo3 = {
  nome: "Aurélio",

  idade: "36",

  nomePai: "Felisson",

  filiacao: {
    nomeAvo: "Voners",

    idadePai: 65,

    nomeTia: "Clara",
  },
};

var individuo4 = {
  nome: "Vander",

  idade: "39",

  filiacao: {
    nomePai: "Esteves",

    nomeAvo: "Voners",

    idadePai: 69,

    nomeTia: "Clara",
  },
};

console.log(individuo1.filiacao.nomePai);
console.log(individuo1.filiacao.idadePai);

console.log(individuo2.nomePai);
console.log(individuo2.filiacao.idadePai);

console.log(individuo3.nomePai);
console.log(individuo3.filiacao.idadePai);

console.log(individuo4.filiacao.nomePai);
console.log(individuo4.filiacao.idadePai);

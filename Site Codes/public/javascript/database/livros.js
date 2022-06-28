const livros = [
  {
    nome: "THE WITCHER: A Saga do Bruxo Geralt de Rívia Livro 3 - O Sangue dos Elfos",
    lancamento: 1994,
    autor: "Andrzej Sapkowski",
    generos: ["Romance", "Literatura Fantástica", "Alta Fantasia"],
    sinopse: "Por mais de um século os seres humanos, anões, gnomos e elfos viveram juntos em relativa paz. Mas os tempos mudaram, a paz inquieta está acabada e, mais uma vez, as raças estão lutando entre si. E parece que, para todos, o único elfo bom é um elfo morto. Geralt de Rívia, um bruxo sagaz e habilidoso, tem estado à espera do nascimento de uma criança que profetizou. Essa criança tem o poder de mudar o mundo - para o bem ou para o mal. À medida que a ameaça da guerra paira sobre a terra e a criança é caçada por seus poderes extraordinários, torna-se responsabilidade de Geralt protegê-la de tudo - e o bruxo nunca aceita a derrota como resultado.",
    url: "thewitcher3",
    buylink:"https://www.amazon.com.br/Sangue-dos-Elfos-WITCHER-Geralt-ebook/dp/B013RCGE2A/ref=sr_1_1?keywords=sangue+dos+elfos&qid=1652921996&s=digital-text&sprefix=sangue+d%2Cdigital-text%2C144&sr=1-1"
  },
  {
    nome: "THE WITCHER: A Saga do Bruxo Geralt de Rívia Livro 2 - A Espada do Destino",
    lancamento: 1992,
    autor: "Andrzej Sapkowski",
    generos: ["Romance", "Literatura Fantástica", "Alta Fantasia"],
    sinopse: "Por mais de um século os seres humanos, anões, gnomos e elfos viveram juntos em relativa paz. Mas os tempos mudaram, a paz inquieta está acabada e, mais uma vez, as raças estão lutando entre si. E parece que, para todos, o único elfo bom é um elfo morto. Geralt de Rívia, um bruxo sagaz e habilidoso, tem estado à espera do nascimento de uma criança que profetizou. Essa criança tem o poder de mudar o mundo - para o bem ou para o mal. À medida que a ameaça da guerra paira sobre a terra e a criança é caçada por seus poderes extraordinários, torna-se responsabilidade de Geralt protegê-la de tudo - e o bruxo nunca aceita a derrota como resultado.",
    url: "thewitcher2",
    buylink:"https://www.amazon.com.br/Espada-Destino-WITCHER-Bruxo-Geralt-ebook/dp/B013RCC9U6/ref=sr_1_1?keywords=espada+do+destino&qid=1652921952&s=digital-text&sprefix=espada+do+%2Cdigital-text%2C137&sr=1-1"
  },
  {
    nome: "THE WITCHER: A Saga do Bruxo Geralt de Rívia Livro 1 - O Último Desejo",
    lancamento: 1993,
    autor: "Andrzej Sapkowski",
    generos: ["Romance", "Literatura Fantástica", "Alta Fantasia"],
    sinopse: "Por mais de um século os seres humanos, anões, gnomos e elfos viveram juntos em relativa paz. Mas os tempos mudaram, a paz inquieta está acabada e, mais uma vez, as raças estão lutando entre si. E parece que, para todos, o único elfo bom é um elfo morto. Geralt de Rívia, um bruxo sagaz e habilidoso, tem estado à espera do nascimento de uma criança que profetizou. Essa criança tem o poder de mudar o mundo - para o bem ou para o mal. À medida que a ameaça da guerra paira sobre a terra e a criança é caçada por seus poderes extraordinários, torna-se responsabilidade de Geralt protegê-la de tudo - e o bruxo nunca aceita a derrota como resultado.",
    url: "thewitcher1",
    buylink:"https://www.amazon.com.br/%C3%9Altimo-Desejo-WITCHER-Bruxo-Geralt-ebook/dp/B013RCB3VM/ref=sr_1_1?keywords=o+ultimo+desejo&qid=1652921873&s=digital-text&sprefix=o+ul%2Cdigital-text%2C182&sr=1-1"
  },
  {
    nome: "THE WITCHER: A Saga do Bruxo Geralt de Rívia Livro 4 - Tempo de Desprezo",
    lancamento: 1995,
    autor: "Andrzej Sapkowski",
    generos: ["Romance", "Literatura Fantástica", "Alta Fantasia"],
    sinopse: "Por mais de um século os seres humanos, anões, gnomos e elfos viveram juntos em relativa paz. Mas os tempos mudaram, a paz inquieta está acabada e, mais uma vez, as raças estão lutando entre si. E parece que, para todos, o único elfo bom é um elfo morto. Geralt de Rívia, um bruxo sagaz e habilidoso, tem estado à espera do nascimento de uma criança que profetizou. Essa criança tem o poder de mudar o mundo - para o bem ou para o mal. À medida que a ameaça da guerra paira sobre a terra e a criança é caçada por seus poderes extraordinários, torna-se responsabilidade de Geralt protegê-la de tudo - e o bruxo nunca aceita a derrota como resultado.",
    url: "thewitcher4",
    buylink:"https://www.amazon.com.br/Tempo-Desprezo-WITCHER-Bruxo-Geralt-ebook/dp/B013RBMQAA/ref=sr_1_1?keywords=tempo+de+desprezo&qid=1652921785&s=digital-text&sprefix=tempo+de+desp%2Cdigital-text%2C147&sr=1-1"
  },
  {
    nome: "Harry Potter e a Pedra Filosofal",
    lancamento: 1997,
    autor: "J. K. Rowling",
    generos: ["Fantasia", "Ficção"],
    sinopse: "Harry Potter e a Pedra Filosofal é o primeiro dos sete livros da série de fantasia Harry Potter, escrita por J. K. Rowling. O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo.",
    url: "harrypotter1",
    buylink: "https://www.amazon.com.br/dp/B01LQM96G4/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
  },
  {
    nome: "Harry Potter e a Câmara Secreta",
    lancamento: 1998,
    autor: "J. K. Rowling",
    generos: ["Fantasia", "Ficção", "Aventura"],
    sinopse: "O verão de Harry Potter incluiu o pior aniversário de todos, avisos macabros de um elfo doméstico chamado Dobby, e ser resgatado dos Dursleys por seu amigo Rony Weasley em um carro voador mágico! De volta à Escola de Magia e Bruxaria de Hogwarts para seu segundo ano, Harry ouve estranhos sussurros ecoando pelos corredores vazios - e então, os ataques começam! Estudantes são encontrados transformados em pedra... As previsões sinistras de Dobby parecem estar se tornando realidade.",
    url: "harrypotter2",
    buylink: "https://www.amazon.com.br/Harry-Potter-C%C3%A2mara-Secreta-Rowling/dp/8532530796/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=camara+secreta&qid=1652812468&sr=8-5",
  },
  

].sort((livro1, livro2) => {
  if(livro1.nome > livro2.livro2){
    return 1
  } else if(livro1.nome < livro2.nome){
    return -1
  } else {
    return 0
  }
});



module.exports = livros;





const filmes = new Array(
    {
        Título: "Donnie Darko",
        Classificação: 14,
        Descrição: "Ambientada no fim dos anos 1980, a trama acompanha Donnie, um adolescente excêntrico, inteligente e solitário que sofre de sonambulismo e problemas psicológicos. Certa noite, uma criatura bizarra fantasiada de coelho gigante chamada Frank o atrai para fora de casa e revela que o mundo vai acabar em pouco mais de 28 dias. Ao mesmo tempo, a turbina de um avião misteriosamente cai do céu direto no teto do quarto de Donnie. Tendo escapado da morte por um triz, ele passa a ser guiado pelas visões de Frank para cometer atos de vandalismo e se aprofunda em uma jornada surreal envolvendo viagem no tempo e universos",
        Lançado: "24/09/2003"
    },
    {
        Título: "Onde os Fracos Não Têm Vez",
        Classificação: 16,
        Descrição: "No deserto do Texas, um caçador chamado Llewelyn Moss encontra uma mala com mais de dois milhões de dólares após um negócio de drogas dar errado. Ao ficar com o dinheiro, ele passa a ser perseguido por Anton Chigurh, um assassino frio e implacável, enquanto um xerife envelhecido tenta conter a onda de violência ao seu redor.",
        Lançado: "01/02/008"
    }

);

class filmesService {

    Buscar() {
        return filmes;
    }

    BuscarPorClassificação(id) {
        return filmes[id];
    }

    Criar(marca) {
        filmes.push(marca);
    }

    Atualizar(id, marca) {
        filmes[id] = marca;
    }

    Deletar(id) {
        filmes.splice(id, 1);
    }
}


export default new filmesService();
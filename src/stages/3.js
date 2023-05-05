import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'ATENDIMENTO *CANCELADO* com sucesso. \n Volte Sempre!';
    }

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
        '🔊 ```Se quiser adiantar um pouco o assunto```'
    );

    return '✅ *Prontinho, ATENDIMENTO feito!* \n\nAgora, você sera redirecionado, para um atendente para que ele verique sua solicitação*. \n\n⏳ *Aguarde um instante*.';
  },
};

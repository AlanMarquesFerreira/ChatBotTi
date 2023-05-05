import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```INFORME O ENDEREÇO``` \n*️⃣ - ```CANCELAR ATENDIMENTO```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return '🔴 Atendimento *CANCELADO* com sucesso. \n\n ```Volte Sempre!```';
    } else if (message === '#') {
      storage[from].stage = 3;

      return (
        '📍 Agora, informe o seu *ENDEREÇO* como no exemplo abaixo. \n EX:( ```Quadra 01, Conjunto 01, Casa 70``` ) \n\n\n\ Após envio do endereço, relate o tipo de atendimento desejado.' +
        '\n-----------------------------------\n*️⃣ - ```CANCELAR ATENDIMENTO```'
      );
    } else {
      if (!menu[message]) {
        return `❌ *Código inválido, digite novamente!*\n\n ${order}`;
      }
    }

    storage[from].itens.push(menu[message]);

    return (
      `✅ *${menu[message].description}* Atendimento registrado com sucesso! \n\n` +
      '```Por favor``` *digite #* ```para informar o seu endereço```: \n' +
      order
    );
  },
};
import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { linkadm } from './linkadm.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚨 SUPORTE TÉCNICO 🚨\n*Digite a opção do atendimento desejada.* \n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        } else if (value === '2') {
          msg += `2️⃣ - _${element.description}_ \n`;
        } else if (value === '3') {
          msg += `3️⃣ - _${element.description}_ \n`;
        } else if (value === '4') {
          msg += `4️⃣ - _${element.description}_ \n`;
        }
          
      });

      msg +=
        '\nPara visualizar o site do condomínio *acesse*: \nhttps://solarbsb.org.br/hom\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
      storage[from].stage = 2;

      return msg;
    } else if (message === '2') {
      return (
        '\n-----------------------------------\n' +
        linkadm +
        '\n-----------------------------------\n1️⃣ - ```SUPORTE TÉCNICO``` \n0️⃣ - ```FALAR COM ATENDENTE``` '
      );
    } else if (message === '0') {
      client.markUnseenMessage(from);

      storage[from].stage = 5;

      return '🔃 Outras opções de atendimento via *WhatsApp*. \n\n⏳ *wa.me/556133393288*   *Administração*.\n⏳ *wa.me/556133393287*   *Cadastro/Cobrança*.\n⏳ *wa.me/556133393291*   *Correios*.\n\n*Ou aguarde... Atendimento pelo suporte técnico*';
    }

    return '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️';
  },
};

import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
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

    return `🚨DADOS DO ATENDIMENTO🚨 \n\n📞 Condômino: +${
      phone[0]
    } \n⚙️ Atendimento selecionado: *${desserts}* \n📍 Endereço do atendimento: *${address}* \n📞 Telefone do suporte técnico: *(61)3335-6664* \n⏳ Tempo estimado para resposta: \n*30 minutos*. \n🛑 Detalhes: *${message}*`;
  },
};

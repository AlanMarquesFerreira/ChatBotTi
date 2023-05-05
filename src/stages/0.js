import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, bem vindo ao \n*CONDOMÍNIO SOLAR DE BRASÍLIA* \n\n*Eu sou o solar,* 🤖 *o seu assistente virtual.* \n*Posso te ajudar?* 🙋‍♂️ \n\n*digite o número do setor desejado.*\n-----------------------------------\n1️⃣ - ```SUPORTE TÉCNICO``` \n2️⃣ - ```ADMINISTRAÇÃO```\n0️⃣ - ```FALAR COM ATENDENTE```';
  },
};

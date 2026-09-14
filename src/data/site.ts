import beaded from "@/assets/beaded.jpg";
import macrameBracelet from "@/assets/macrame-bracelet.jpg";
import macrameBag from "@/assets/macrame-bag.jpg";

export const WHATSAPP_URL =
  "https://wa.me/5588988797442?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20encomendar%20uma%20pe%C3%A7a.";
export const WHATSAPP_LABEL = "WhatsApp (88) 98879-7442";
export const INSTAGRAM_URL = "https://www.instagram.com/makorikariri/";

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#colecao", label: "Coleção" },
  { href: "#processo", label: "Processo" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contato", label: "Contato" },
];

export const products = [
  {
    img: beaded,
    name: "Pulseiras de Miçangas",
    desc: "Contas selecionadas uma a uma, em combinações de cor inspiradas na terra e no sertão.",
  },
  {
    img: macrameBracelet,
    name: "Pulseiras de Macramê",
    desc: "Nós tradicionais em fio de algodão natural, resistentes e leves no dia a dia.",
  },
  {
    img: macrameBag,
    name: "Bolsas de Macramê",
    desc: "Peças amplas, trançadas à mão, com caimento suave e acabamento em franjas.",
  },
];

export const values = [
  { t: "Feito à mão", d: "Cada peça nasce do início ao fim nas mãos de quem cria." },
  { t: "Cultura e identidade", d: "Referências indígenas e afro-brasileiras que contam histórias." },
  { t: "Materiais naturais", d: "Algodão, contas e fibras escolhidas com cuidado." },
  { t: "Peças únicas", d: "Pequenos lotes: nenhuma pulseira é exatamente igual à outra." },
];

export const steps: [string, string, string][] = [
  ["01", "Escolha dos materiais", "Contas, fios de algodão e fibras naturais selecionados um a um."],
  ["02", "Trançado manual", "Cada nó e cada conta são montados à mão, sem produção em série."],
  ["03", "Acabamento e entrega", "Revisão cuidadosa, embalagem artesanal e envio para todo o Brasil."],
];

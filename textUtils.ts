// Utilitarios de texto compartilhados. Criado para corrigir um bug recorrente:
// varios componentes geravam a meta description cortando o texto cru em
// `.slice(0, 160)`, sem respeitar limite de palavra - o resultado ficava
// truncado no meio de uma palavra (ou ate no meio de um parenteses, como
// aconteceu com a description do Dr(a). Giovanna: "...Silva e Silva (CRM"),
// sem reticencias, o que aparece quebrado no resultado de busca do Google.
// Usar sempre esta funcao em vez de `.slice()` direto ao gerar description
// automatica a partir de texto livre (primeiro paragrafo de artigo/materia,
// bio do medico, etc).
export function truncateAtWord(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return `${trimmed.trim()}…`;
}

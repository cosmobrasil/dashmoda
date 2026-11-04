# Dashboard v1 — Índice de Circularidade do Produto

**COSMOB BRASIL - CIRCULARIDADE DE PRODUTO** · Protótipo navegável · Região de Brusque (Brusque, Gaspar, Ilhota e Guabiruba) · dados do piloto 2026.

## Como abrir

- **Fonte legível:** `src/index.html` (é aqui que se edita).
- **Publicado:** `index.html` (versão minificada, gerada pelo build).

Para regenerar o `index.html` publicado após editar a fonte:

```bash
npm install
npm run build
```

O resultado continua sendo um arquivo único, sem dependências externas nem servidor — a minificação acontece localmente, antes do deploy.

## O que tem

- **Hero:** donut do índice — 31,1% (região) ou 26,0% (Brusque) — com mediana, meta provisória e gap.
- **PONTUAÇÃO POR INDICADORES:** os cinco eixos em percentuais — todos com nota (Entrada, Gestão de Resíduo, Saída do Produto, Vida do Produto e Monitoramento).
- **Diagnóstico:** perda percentual por eixo (Entrada, Gestão de Resíduo, Saída do Produto, Vida do Produto, Monitoramento).
- **Distribuição:** donut percentual das faixas do índice (distribuição, não o índice).
- **Ação:** mix curto/médio/longo em percentuais, incluindo curto prazo por eixo.
- **Futuro (faixa de 3 cards):** `Tendência` trajetória do índice 2026–2028 em três cenários com meta; `Predição` migração de faixas hoje × 2028 no cenário base; `Foresight` potencial de ganho por eixo (p.p.) com a meta marcada. Tudo derivado dos dados atuais, com premissas explícitas; é simulação, não previsão.
- **Território:** distribuição percentual dos relatórios por município + cobertura de Brusque; universo regional pendente.
- **Leitura estratégica (faixa final):** três avaliações qualitativas geradas sobre o dado — *processo × produto*, *comunicação sem lastro* e *meta gameável sem tocar no produto* — cada uma com evidência curta e um movimento sugerido.
- **Alavancas:** hipóteses para discussão.
- **Qualidade:** limitações explícitas.
- **Toggle Região/Brusque** e modal “Como ler os cards” (guia explicativo de cada card).

## Dados

- `DADOS/circularidade sc.xlsx` — 21 relatórios / 20 CNPJs; 15 completos (10 Brusque + 5 região); 5 simplificados fora.
- `DADOS/tratado/respostas_limpas.csv` — export de respostas do instrumento (nova tabela de 03/11/2026) já filtrado: 21 registros (15 completos + 5 simplificados + 1 de Moda fora da região). Foram descartados os 9 registros de teste (NEURON), o COLEGIO MARISTA (não é moda) e a duplicata MAUELA #2. Fonte das notas de Gestão de Resíduo, Vida do Produto e Monitoramento (15 critérios, 3 pontos por eixo); as 15 notas de eixo reproduzem exatamente os índices dos relatórios — ver `scripts/compute_eixos_export.py` e `DADOS/tratado/eixos.json`.
- `brusque dados.csv` — 30.258 CNPJs ativos; 6.120 empresas de moda (5.594 matrizes); usado só para universo/território e cobertura.
- `DADOS/tratado/avaliadas_empresaqui.csv` — 9 CNPJs faltantes consultados na API EmpresAqui; 8 estão em Gaspar/Ilhota/Guabiruba; 1 CNPJ divergente (FRANCO/TEXFAN).

## Limitações do v1

- Notas por eixo calculadas a partir das respostas (régua de 15 critérios); “não sei” conta como 0.
- **Cenários futuros são simulações, não previsões:** usam +1 ponto por empresa por eixo (≈ +6,7 p.p. no índice) e assumem meta de 45%; não há série temporal para estimar ritmo real.
- **Leituras estratégicas são interpretações qualitativas**, não evidência nova nem previsão; são hipóteses de leitura a validar em campo.
- Sem série temporal, porte confiável, benchmark oficial ou target final.
- Cobertura regional não calculada (falta o universo de Gaspar/Ilhota/Guabiruba).
- Amostra de piloto, não aleatória; IC95% regional aproximado 23,9%–38,3% se fosse aleatória.
- Nenhuma empresa é identificada; os cards usam apenas percentuais; a amostra fica no rodapé.

## Próximos passos

1. Universo dos outros 3 municípios.
2. CNPJ correto da FRANCO.
3. Target oficial e benchmark.
4. Série temporal (T1) e corte por critério (15 critérios) no painel.

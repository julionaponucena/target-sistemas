function calcularFaturamento(faturamentos) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasValidos = 0;
  
    // Primeira passagem: calcular menor, maior, soma e contar dias válidos
    for (let valor of faturamentos) {
      if (valor > 0) {
        if (valor < menorFaturamento) menorFaturamento = valor;
        if (valor > maiorFaturamento) maiorFaturamento = valor;
        somaFaturamento += valor;
        diasValidos++;
      }
    }
  
    // Caso não haja faturamentos válidos
    if (diasValidos === 0) {
      return {
        menorFaturamento: 0,
        maiorFaturamento: 0,
        diasAcimaDaMedia: 0
      };
    }
  
    // Calcular a média anual
    const mediaAnual = somaFaturamento / diasValidos;
  
    // Segunda passagem: contar os dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (let valor of faturamentos) {
      if (valor > 0 && valor > mediaAnual) {
        diasAcimaDaMedia++;
      }
    }
  
    // Retornar os resultados
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia
    };
  }
  
  // Exemplo de uso:
  const faturamentos = [0, 1500, 2000, 0, 100, 500, 0, 2200, 0, 3000, 0, 1200];
  const resultado = calcularFaturamento(faturamentos);
  
  console.log('Menor Faturamento:', resultado.menorFaturamento);
  console.log('Maior Faturamento:', resultado.maiorFaturamento);
  console.log('Dias com Faturamento acima da Média:', resultado.diasAcimaDaMedia);
  
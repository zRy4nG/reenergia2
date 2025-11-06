import jsPDF from 'jspdf';

export const generatePDF = (results: any, appliances: any[]) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  // Configurações iniciais
  pdf.setFont('helvetica', 'normal');
  let yPosition = margin;

  // Cabeçalho
  pdf.setFillColor(59, 130, 246);
  pdf.rect(0, 0, pageWidth, 60, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('RELATÓRIO DE CONSUMO DE ENERGIA', pageWidth / 2, 25, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Simulação gerada em ${new Date().toLocaleDateString('pt-BR')}`, pageWidth / 2, 35, { align: 'center' });
  
  pdf.setTextColor(0, 0, 0);
  yPosition = 70;

  // Resumo Executivo
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('RESUMO EXECUTIVO', margin, yPosition);
  yPosition += 15;

  // Cards de resumo
  const cardWidth = (contentWidth - 20) / 3;
  const cardHeight = 35;

  // Card Consumo
  pdf.setFillColor(219, 234, 254);
  pdf.roundedRect(margin, yPosition, cardWidth, cardHeight, 3, 3, 'F');
  pdf.setTextColor(37, 99, 235);
  pdf.setFontSize(12);
  pdf.text('CONSUMO TOTAL', margin + 10, yPosition + 10);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`${results.totalConsumption} kWh`, margin + 10, yPosition + 22);

  // Card Custo
  pdf.setFillColor(220, 252, 231);
  pdf.roundedRect(margin + cardWidth + 10, yPosition, cardWidth, cardHeight, 3, 3, 'F');
  pdf.setTextColor(22, 163, 74);
  pdf.setFontSize(12);
  pdf.text('CUSTO TOTAL', margin + cardWidth + 20, yPosition + 10);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`R$ ${results.totalCost.toFixed(2)}`, margin + cardWidth + 20, yPosition + 22);

  // Card Tarifa
  pdf.setFillColor(254, 243, 199);
  pdf.roundedRect(margin + (cardWidth * 2) + 20, yPosition, cardWidth, cardHeight, 3, 3, 'F');
  pdf.setTextColor(217, 119, 6);
  pdf.setFontSize(12);
  pdf.text('TARIFA', margin + (cardWidth * 2) + 30, yPosition + 10);
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`R$ ${results.tariff}`, margin + (cardWidth * 2) + 30, yPosition + 22);

  yPosition += cardHeight + 20;

  // Detalhamento dos Aparelhos
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 0, 0);
  pdf.text('DETALHAMENTO DOS APARELHOS', margin, yPosition);
  yPosition += 10;

  // Cabeçalho da tabela
  pdf.setFillColor(249, 250, 251);
  pdf.rect(margin, yPosition, contentWidth, 12, 'F');
  pdf.setDrawColor(229, 231, 235);
  pdf.rect(margin, yPosition, contentWidth, 12);
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(55, 65, 81);
  
  const colWidths = [contentWidth * 0.25, contentWidth * 0.15, contentWidth * 0.15, contentWidth * 0.15, contentWidth * 0.15, contentWidth * 0.15];
  let xPosition = margin;
  
  pdf.text('APARELHO', xPosition + 5, yPosition + 8);
  xPosition += colWidths[0];
  pdf.text('QTD', xPosition + 5, yPosition + 8);
  xPosition += colWidths[1];
  pdf.text('USO DIÁRIO', xPosition + 5, yPosition + 8);
  xPosition += colWidths[2];
  pdf.text('POTÊNCIA', xPosition + 5, yPosition + 8);
  xPosition += colWidths[3];
  pdf.text('kWh/MÊS', xPosition + 5, yPosition + 8);
  xPosition += colWidths[4];
  pdf.text('CUSTO/MÊS', xPosition + 5, yPosition + 8);

  yPosition += 12;

  // Linhas dos aparelhos
  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  
  appliances.forEach((appliance, index) => {
    // Verifica se precisa de nova página
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = margin;
      
      // Cabeçalho da tabela na nova página
      pdf.setFillColor(249, 250, 251);
      pdf.rect(margin, yPosition, contentWidth, 12, 'F');
      pdf.setDrawColor(229, 231, 235);
      pdf.rect(margin, yPosition, contentWidth, 12);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(55, 65, 81);
      
      xPosition = margin;
      pdf.text('APARELHO', xPosition + 5, yPosition + 8);
      xPosition += colWidths[0];
      pdf.text('QTD', xPosition + 5, yPosition + 8);
      xPosition += colWidths[1];
      pdf.text('USO DIÁRIO', xPosition + 5, yPosition + 8);
      xPosition += colWidths[2];
      pdf.text('POTÊNCIA', xPosition + 5, yPosition + 8);
      xPosition += colWidths[3];
      pdf.text('kWh/MÊS', xPosition + 5, yPosition + 8);
      xPosition += colWidths[4];
      pdf.text('CUSTO/MÊS', xPosition + 5, yPosition + 8);
      
      yPosition += 12;
    }

    // Linha com fundo alternado
    if (index % 2 === 0) {
      pdf.setFillColor(255, 255, 255);
    } else {
      pdf.setFillColor(249, 250, 251);
    }
    pdf.rect(margin, yPosition, contentWidth, 15, 'F');
    pdf.setDrawColor(229, 231, 235);
    pdf.rect(margin, yPosition, contentWidth, 15);

    xPosition = margin;
    pdf.setTextColor(0, 0, 0);
    
    // Nome do aparelho
    pdf.setFont('helvetica', 'bold');
    pdf.text(appliance.name.substring(0, 20), xPosition + 5, yPosition + 6);
    pdf.setFont('helvetica', 'normal');
    if (appliance.description) {
      pdf.text(appliance.description.substring(0, 25), xPosition + 5, yPosition + 12);
    }
    xPosition += colWidths[0];

    // Quantidade
    pdf.text(appliance.quantity.toString(), xPosition + 5, yPosition + 9);
    xPosition += colWidths[1];

    // Uso diário
    pdf.text(`${appliance.dailyUsage}h`, xPosition + 5, yPosition + 9);
    xPosition += colWidths[2];

    // Potência
    pdf.text(`${appliance.power}W`, xPosition + 5, yPosition + 9);
    xPosition += colWidths[3];

    // kWh/Mês
    pdf.text(appliance.kWhPerMonth?.toFixed(2) || '0.00', xPosition + 5, yPosition + 9);
    xPosition += colWidths[4];

    // Custo/Mês
    pdf.setTextColor(22, 163, 74);
    pdf.text(`R$ ${appliance.costPerMonth?.toFixed(2) || '0.00'}`, xPosition + 5, yPosition + 9);

    yPosition += 15;
  });

  yPosition += 10;

  // Observações
  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = margin;
  }

  pdf.setDrawColor(59, 130, 246);
  pdf.setLineWidth(0.5);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(59, 130, 246);
  pdf.text('METODOLOGIA DE CÁLCULO', margin, yPosition);
  yPosition += 7;

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(100, 116, 139);
  
  const methodology = [
    '• Cálculo baseado em 30 dias mensais',
    '• kWh = (Potência em Watts × Horas de uso diário × 30 dias) ÷ 1000',
    '• Custo Mensal = Consumo em kWh × Tarifa (R$/kWh)',
    '• Valores podem variar conforme uso real e eficiência dos equipamentos',
    '• Não inclui tributos, encargos ou demais custos da conta de energia'
  ];

  methodology.forEach(line => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = margin;
    }
    pdf.text(line, margin + 5, yPosition);
    yPosition += 5;
  });

  yPosition += 10;

  // Rodapé
  if (yPosition > pageHeight - 20) {
    pdf.addPage();
    yPosition = margin;
  }

  pdf.setFontSize(8);
  pdf.setTextColor(156, 163, 175);
  pdf.text('Simulador de Consumo de Energia - Relatório gerado automaticamente', margin, pageHeight - 10);
  pdf.text(`Página ${pdf.getNumberOfPages()}`, pageWidth - margin - 10, pageHeight - 10, { align: 'right' });

  // Salvar PDF
  pdf.save(`relatorio-consumo-energia-${new Date().toISOString().split('T')[0]}.pdf`);
};
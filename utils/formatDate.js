function formatDate(date) {
  const months = {
    '01': 'janeiro',
    '02': 'fevereiro',
    '03': 'março',
    '04': 'abril',
    '05': 'maio',
    '06': 'junho',
    '07': 'julho',
    '08': 'agosto',
    '09': 'setembro',
    10: 'outubro',
    11: 'novembro',
    12: 'dezembro',
  };

  const splittedDate = date.split('-');

  if (splittedDate[2][0] === '0') splittedDate[2] = splittedDate[2][1];

  return `${splittedDate[2]} de ${months[splittedDate[1]]}`;
}

module.exports = formatDate;

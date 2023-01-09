export interface Tab {
  buttonLink: string;
  buttonTitle: string;
  leftTitle: string;
  rightContent: string;
  rightTitle: string;
}

export const contentList: Tab[] = [
  {
    buttonLink: '/',
    buttonTitle: 'SOBRE SAÚDE MENTAL',
    leftTitle: 'Saúde Mental',
    rightContent: 'Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).',
    rightTitle: 'O que é a plataforma de indicadores de Saúde Mental?'
  },
  {
    buttonLink: '/2',
    buttonTitle: 'Entenda',
    leftTitle: 'Glossário',
    rightContent: 'Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais',
    rightTitle: 'Entenda como interpretar os indicadores'
  }
]

// ACCOUNT

export const accountData = {
  firstName: 'Joana',
  lastName: 'da Silva Oliveira',
  balance: 2500,
}

// HEADER

export const headerData = {
  loggedOutMenu: [
    {
      text: 'Sobre',
      url: '/#sobre',
      blank: false
    },
    {
      text: 'Serviços',
      url: '/services',
      blank: false
    }
  ],
  loggedInMenu: [
    {
      text: 'Inicio',
      url: '/',
      blank: false,
    },
    {
      text: 'Transferências',
      url: '/transfers',
      blank: false,
    },
    {
      text: 'Investimentos',
      url: '/investments',
      blank: false,
    },
    {
      text: 'Outros serviços',
      url: '/services',
      blank: false,
    },
  ],
  subscribeCta: {
    text: 'Abrir minha conta',
    variant: 'green',
  },
  loginCta: {
    text: 'Já tenho conta',
    variant: 'green-inverted',
  },
  profileMenu: [
    {
      text: 'Minha conta',
      url: '/minha-conta',
      blank: false,
    },
    {
      text: 'Configurações',
      url: '/minha-conta',
      blank: false,
    },
    {
      text: 'Sair',
      url: '/',
      blank: false,
    }
  ],
}

// FOOTER

export const footerData = {
  servicesTitle: 'Serviços',
  servicesLinks: [
    {
      text: 'Conta corrente',
      url: '/services',
      blank: false
    },
    {
      text: 'Conta PJ',
      url: '/services',
      blank: false
    },
    {
      text: 'Cartão de Crédito',
      url: '/services',
      blank: false
    }
  ],
  contactTitle: 'Contato',
  contactLinks: [
    {
      text: '0800 004 250 08',
      url: 'tel:080000425008',
      blank: true
    },
    {
      text: 'meajuda@bytebank.com.br',
      url: 'mailto:meajuda@bytebank.com.br',
      blank: true
    },
    {
      text: 'ouvidoria@bytebank.com.br',
      url: 'mailto:ouvidoria@bytebank.com.br',
      blank: true
    }
  ],
  copyrightTitle: 'Desenvolvido por Alura',
  socialsLinks: [
    {
      type: 'instagram',
      url: 'https://www.instagram.com/bytebank/',
      blank: true
    },
    {
      type: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=5500000000000',
      blank: true
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/bytebank',
      blank: true
    }
  ],
}

// BANK STATEMENT

export const bankStatementData = {
  title: 'Extrato',
  transactions: [
    {
      date: '2025-06-18',
      amount: 150,
      type: 'deposit',
    },
    {
      date: '2025-06-21',
      amount: 100,
      type: 'deposit',
    },
    {
      date: '2025-06-21',
      amount: 50,
      type: 'deposit',
    },
    {
      date: '2025-06-21',
      amount: 500,
      type: 'transfer',
    },
  ]
}

// 404

export const notFoundData = {
  title: 'Ops! Não encontramos a página... ',
  description: 'E olha que exploramos o universo procurando por ela! Que tal voltar e tentar novamente?',
  cta: {
    text: 'Voltar para o início',
    url: '/',
    blank: false,
  }
}

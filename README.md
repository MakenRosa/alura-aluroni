# Aluroni

Este é um projeto React desenvolvido durante os seguintes cursos da Alura:

## React: Lidando com Arquivos Estáticos

Neste curso, foram abordados diversos aspectos relacionados ao uso de arquivos estáticos em aplicações React. Alguns dos tópicos abordados incluem:

- Criação de uma aplicação React do zero utilizando o Create React App.
- Normalização de estilos com o uso do normalize.css.
- Configuração de imports absolutos para facilitar a importação de arquivos.
- Utilização de boas práticas em CSS, como o uso de variáveis e arquivos separados para breakpoints.
- Uso do pacote 'classnames' para simplificar o uso de CSS Modules e estilos condicionais.
- Importação de arquivos SVG como componentes React utilizando o SVGR.
- Aprendizado sobre imports estáticos e importação dinâmica de arquivos estáticos.

---

## React: Conhecendo a Biblioteca React Router (continuação do projeto do primeiro curso)

Neste curso, foram explorados diversos aspectos relacionados à biblioteca React Router. Alguns dos tópicos abordados incluem:

- Configuração inicial do React Router e a integração com a aplicação React existente.
- Compreensão sobre o funcionamento das rotas e como a biblioteca interage com o navegador.
- Uso do pacote 'react-router-dom' para implementar a navegação entre diferentes componentes da aplicação.
- Criação de múltiplas rotas e navegação entre elas de diversas formas.
- Reaproveitamento de componentes em diferentes rotas para otimização do código.
- Entendimento sobre rotas aninhadas (nested routes) e sua utilidade para resolver problemas e melhorar a organização do código.
- Descoberta sobre como o React Router utiliza funcionalidades nativas do navegador para alterar as rotas e compartilhar estados.
- Refatoração do código utilizando o ESLint para garantir um código limpo, fácil de entender e escalável. 

---

## React: Otimizando a Performance (continuação do projeto do segundo curso)

Neste curso, foram abordados vários tópicos importantes relacionados à otimização de performance em aplicações React. Alguns dos tópicos abordados incluem:

- Análise de componentes e páginas para identificar oportunidades de melhorar a performance.
- Compreensão profunda de como o React renderiza componentes, incluindo conceitos como Virtual DOM e Reconciliation.
- Uso de técnicas como memoização e imutabilidade, entender como elas se complementam e a sua importância em projetos React.
- Diferenças entre 'memo' e 'useMemo' e orientações sobre quando usar cada um deles.
- Uso prático da extensão React Devtools para analisar tempos de renderização de componentes e identificar por que os componentes estão atualizando.


**[Acesse aqui o Aluroni pelo Vercel](https://aluroni-aug.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

``` bash
git clone https://github.com/makenrosa/aluroni.git
```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando o projeto

Para executar o projeto React, siga as etapas abaixo:

1. Navegue até o diretório onde você clonou o repositório.

2. Abra o terminal ou prompt de comando.

3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).

4. Execute o seguinte comando para instalar as dependências do projeto:
    
``` bash
npm install
```

5. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

``` bash
npm start
```

6. O servidor de desenvolvimento será iniciado e você poderá acessar a aplicação no seu navegador através do endereço `http://localhost:3000`.

## Estruturas dos projetos

### Curso React: Lidando com Arquivos Estáticos:

```aluroni/  # Diretório principal do projeto
├── public/  # Diretório contendo os arquivos públicos da aplicação
│   ├── assets/  
│   │   └── menu_food/ # Diretório para imagens relacionadas ao menu de comida
│   │       ├── chilli_pasta.png
│   │       ├── diced_picanha.png
│   │       ├── house_pasta.png
│   │       ├── house_salad.png
│   │       ├── meatballs.png
│   │       ├── mediterranean_pasta.png
│   │       ├── special_salad.png
│   │       ├── steak_with_potatoes.png
│   │       └── vegan_lasagna.png
│   └── index.html  # Ponto de entrada da aplicação
├── src/  # Diretório principal da aplicação
│   ├── assets/  # Diretório para arquivos estáticos utilizados na aplicação
│   │   ├── menu/
│   │   │   └── header.png
│   │   └── logo.svg
│   ├── pages/  # Diretório para as páginas da aplicação
│   │   └── Menu/
│   │       ├── Filters/  # Diretório para os componentes de filtros
│   │       │   ├── filters.json
│   │       │   ├── Filters.module.css
│   │       │   └── index.tsx
│   │       ├── Items/  # Diretório para os componentes dos itens do menu
│   │       │   ├── Item/
│   │       │   │   ├── Item.module.css
│   │       │   │   └── index.tsx
│   │       │   ├── items.json
│   │       │   ├── Items.module.css
│   │       │   └── index.tsx
│   │       ├── Orderer/  # Diretório para o componente de ordenação
│   │       │   ├── options.json
│   │       │   ├── Orderer.module.css
│   │       │   └── index.tsx
│   │       ├── Search/  # Diretório para o componente de busca
│   │       │   ├── Search.module.css
│   │       │   └── index.tsx
│   │       ├── Menu.module.css  # Estilos específicos para a página do menu
│   │       └── index.tsx
│   ├── styles/  # Diretório para os estilos globais da aplicação
│   │   ├── breakpoints.css  # Ponto de quebra responsivo
│   │   └── variables.css  # Variáveis de estilo
│   ├── index.css  # Estilos globais adicionais
│   ├── index.tsx  # Arquivo de entrada da aplicação React
│   └── react-app-env.d.ts  # Configuração do ambiente do React
├── .gitignore  # Lista de arquivos/diretórios ignorados pelo Git
├── package-lock.json  # Gerenciamento de dependências da aplicação
├── package.json  # Gerenciamento de dependências da aplicação
└── tsconfig.json  # Configuração do TypeScript
```
### Curso React: Conhecendo a Biblioteca React Router:


``` aluroni/  # Diretório principal do projeto
├── public/  # Diretório contendo os arquivos públicos da aplicação
│   ├── assets/
│   │   └── menu_food/  # Diretório para imagens relacionadas ao menu de comida
│   │       ├── chilli_pasta.png
│   │       ├── diced_picanha.png
│   │       ├── house_pasta.png
│   │       ├── house_salad.png
│   │       ├── meatballs.png
│   │       ├── mediterranean_pasta.png
│   │       ├── special_salad.png
│   │       ├── steak_with_potatoes.png
│   │       └── vegan_lasagna.png
│   └── index.html  # Ponto de entrada da aplicação
├── src/  # Diretório principal da aplicação
│   ├── assets/  # Diretório para arquivos estáticos utilizados na aplicação
|   |   ├── about/  # Diretório para imagens da página Sobre
│   │   │   ├── home.png
│   │   │   ├── pasta1.png
│   │   │   └── pasta2.png
│   │   ├── menu/
│   │   │   └── header.png
|   |   ├── not_found.svg  # Imagem para página de erro 404
|   |   ├── our-home.png  # Imagem para a página inicial
│   │   └── logo.svg  # Logotipo do projeto
|   ├── components/  # Diretório para componentes reutilizáveis
|   |   ├── DishTags/
|   |   │   ├── DishTags.module.scss
|   |   │   └── index.tsx
|   |   ├── Footer/
|   |   │   ├── Footer.module.scss
|   |   │   └── index.tsx
|   |   ├── Header/
|   |   │   ├── Header.module.scss
|   |   │   └── index.tsx
|   |   └── NavMenu/
|   |       ├── NavMenu.module.scss
|   |       └── index.tsx
|   ├── data/  # Diretório para os dados em formato JSON
|   |   └── menu.json
│   ├── pages/  # Diretório para as páginas da aplicação
│   │   ├── About/  # Página Sobre
│   │   │   ├── About.module.scss
│   │   │   └── index.tsx
│   │   ├── BasePage/  # Componente base para todas as páginas
│   │   │   └── index.tsx
│   │   ├── Dish/  # Página de detalhes do prato
│   │   │   ├── Dish.module.scss
│   │   │   └── index.tsx
│   │   ├── Home/  # Página inicial
│   │   │   ├── Home.module.scss
│   │   │   └── index.tsx
|   │   ├── NotFound/  # Página para erro 404
│   │   │   ├── NotFound.module.scss
│   │   │   └── index.tsx
│   │   └── Menu/  # Página do Menu
│   │       ├── Filters/  # Componente de Filtros
│   │       │   ├── filters.json
│   │       │   ├── Filters.module.scss
│   │       │   └── index.tsx
│   │       ├── Items/  # Componente de Itens do Menu
│   │       │   ├── Item/
│   │       │   │   ├── Item.module.scss
│   │       │   │   └── index.tsx
│   │       │   ├── Items.module.scss
│   │       │   └── index.tsx
│   │       ├── Orderer/  # Componente de Ordenação
|   │       │   ├── options.json
│   │       │   ├── Orderer.module.scss
│   │       │   └── index.tsx
│   │       ├── Search/  # Componente de Busca
│   │       │   ├── Search.module.scss
│   │       │   └── index.tsx
│   │       ├── Menu.module.scss
│   │       └── index.tsx
│   ├── styles/  # Diretório para os estilos globais da aplicação
|   |   ├── Theme.module.scss  # Tema da aplicação
│   │   ├── breakpoints.scss  # Pontos de quebra para responsividade
│   │   └── variables.scss  # Variáveis de estilo
|   ├── types/  # Diretório para os tipos de TypeScript
|   |   └── Dish.ts
│   ├── index.css  # Estilos globais adicionais
│   ├── index.tsx  # Arquivo de entrada da aplicação React
|   ├── routes.tsx  # Rotas da aplicação
│   └── react-app-env.d.ts  # Configuração do ambiente do React
├── .eslintrc.json  # Configuração do ESLint
├── .gitignore  # Lista de arquivos/diretórios ignorados pelo Git
├── package-lock.json  # Gerenciamento de dependências da aplicação
├── package.json  # Gerenciamento de dependências da aplicação
└── tsconfig.json  # Configuração do TypeScript
```

### Curso React: Otimizando a Performance: Não houve alterações na estrutura do projeto.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/aluroni/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
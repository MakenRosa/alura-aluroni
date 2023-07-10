# Aluroni

Este é um projeto React desenvolvido durante o curso "React: Lidando com Arquivos Estáticos" da Alura. Neste curso, foram abordados diversos aspectos relacionados ao uso de arquivos estáticos em aplicações React. Alguns dos tópicos abordados incluem:

- Criação de uma aplicação React do zero utilizando o Create React App.
- Normalização de estilos com o uso do normalize.css.
- Configuração de imports absolutos para facilitar a importação de arquivos.
- Utilização de boas práticas em CSS, como o uso de variáveis e arquivos separados para breakpoints.
- Uso do pacote 'classnames' para simplificar o uso de CSS Modules e estilos condicionais.
- Importação de arquivos SVG como componentes React utilizando o SVGR.
- Aprendizado sobre imports estáticos e importação dinâmica de arquivos estáticos.

**[Acesse aqui o Alura-Aluroni pelo Vercel](https://alura-aluroni-pi.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

``` bash
git clone https://github.com/makenrosa/alura-aluroni.git
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

## Estrutura do projeto

A estrutura do projeto é a seguinte:
``` Aluroni/
├── public/
│   ├── assets/
│   │   └── menu_food/
│   │       ├── chilli_pasta.png
│   │       ├── diced_picanha.png
│   │       ├── house_pasta.png
│   │       ├── house_salad.png
│   │       ├── meatballs.png
│   │       ├── mediterranean_pasta.png
│   │       ├── special_salad.png
│   │       ├── steak_with_potatoes.png
│   │       └── vegan_lasagna.png
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── menu/
│   │   │   └── header.png
│   │   └── logo.svg
│   ├── pages/
│   │   └── Menu/
│   │       ├── Filters/
│   │       │   ├── filters.json
│   │       │   ├── Filters.module.css
│   │       │   └── index.tsx
│   │       ├── Items/
│   │       │   ├── Item/
│   │       │   │   ├── Item.module.css
│   │       │   │   └── index.tsx
│   │       │   ├── items.json
│   │       │   ├── Items.module.css
│   │       │   └── index.tsx
│   │       ├── Orderer/
|   │       │   ├── options.json
│   │       │   ├── Orderer.module.css
│   │       │   └── index.tsx
│   │       ├── Search/
│   │       │   ├── Search.module.css
│   │       │   └── index.tsx
│   │       ├── Menu.module.css
│   │       └── index.tsx
│   ├── styles/
│   │   ├── breakpoints.css
│   │   └── variables.css
│   ├── index.css
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

- O diretório `public/` contém os arquivos públicos da aplicação, incluindo a pasta `assets/` para imagens relacionadas ao menu de comida e o arquivo `index.html` como o ponto de entrada da aplicação.

- O diretório `src/` é o diretório principal da aplicação.

  - O diretório `src/assets/` contém os arquivos estáticos utilizados na aplicação, como a pasta `menu/` para a imagem do cabeçalho e o arquivo `logo.svg`.

  - O diretório `src/pages/` contém as páginas da aplicação. A pasta `Menu/` possui os componentes relacionados ao menu de comida, como os diretórios `Filters/` para os filtros, `Items/` para os itens do menu, `Orderer/` para o componente de ordenação e `Search/` para a busca. O arquivo `Menu.module.css` contém os estilos específicos para a página do menu.

  - O diretório `src/styles/` contém os arquivos de estilos globais da aplicação, como `breakpoints.css` para os pontos de quebra responsivos e `variables.css` para as variáveis de estilo.

  - O arquivo `src/index.css` contém estilos globais adicionais.

  - O arquivo `src/index.tsx` é o arquivo de entrada da aplicação React.

  - O arquivo `src/react-app-env.d.ts` é um arquivo de configuração do ambiente do React.

- O arquivo `.gitignore` lista os arquivos e diretórios que serão ignorados pelo Git.

- Os arquivos `package-lock.json` e `package.json` são utilizados para gerenciar as dependências da aplicação.

- O arquivo `tsconfig.json` é o arquivo de configuração do TypeScript.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-aluroni/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
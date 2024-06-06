# Arquitetura do Projeto

![Project image](@site/static/img/prototipo.jpeg)

## Componente dinâmico de Card:

O componente **Card** é um componente reutilizável e funcional que exibe informações de maneira organizada e estilizada. Ele é flexível e está sendo utilizado para renderizar as ferramentas de gerenciamento de software do nosso banco de dados. Ele é projetado para exibir um cartão informativo contendo uma imagem, nome, categoria e um link para mais informações. A seguir apresentaremos uma análise detalhada de cada parte do componente:

```tsx
interface CardProps {
  name: string;
  category: string;
  link: string;
  image: string;
}

export function Card({ name, category, link, image }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="Logo" />
      <div className="card-div">
        <h2>{name}</h2>
        <p>{category}</p>
        <a href={link} target="_blank">
          Saiba Mais
        </a>
      </div>
    </div>
  );
}
```

## Página App.tsx:

O componente App é responsável por estruturar a página principal da aplicação. Ele exibe um título e subtítulo, fornece opções de navegação através de uma lista suspensa, uma barra de pesquisa, e renderiza uma lista de cartões dinâmicos usando o componente Card. Cada Card é criado com base nos dados fornecidos pelo array cards, garantindo que a interface seja flexível e fácil de atualizar ao modificar os dados subjacentes.



### Arquivo cards.tsx:
O arquivo cards.tsx é um banco de dados local feito em Typescript que exporta um array de objetos, onde cada objeto representa um cartão (card) com informações sobre diferentes ferramentas tecnológicas. Este array é utilizado no componente React App para renderizar uma lista de cartões informativos na interface do usuário.

 #### Estrutura de Cada Objeto no Array
 
 Cada objeto no array cards representa uma ferramenta e contém as seguintes propriedades:
  - id: Um identificador único para a ferramenta.
  - title: O nome da ferramenta.
  - image: A URL da imagem associada à ferramenta.
  - link: Um link para a página oficial ou de mais informações sobre a ferramenta.
  - category: A categoria à qual a ferramenta pertence (por exemplo, "Gerenciamento", "Controle de Versão", "Teste", etc.).

  ```tsx
  export const cards = [
  {
    id: 1,
    title: "Trello",
    image: "https://i.postimg.cc/vTG38f26/trello.png",
    link: "https://trello.com/pt-BR",
    category:"Gerenciamento"
  },
  ...
  ]
  ```

  #### Uso no Componente App:
  - Renderização Dinâmica:
  - O método map itera sobre o array cards.
  - Para cada objeto filter no array, um componente Card é criado e renderizado, recebendo as propriedades name, image, - link, e category com base nos valores do objeto.
  - O componente Card exibe as informações da ferramenta, incluindo a imagem, título, categoria e um link para mais informações.

```tsx
function App() {
  <section className="sectionCard">
    {cards.map((filter, index) => {
      return (
        <Card
          key={index}
          name={filter.title}
          image={filter.image}
          link={filter.link}
          category={filter.category}
        />
      );
    })}
  </section>;
}

export default App;
```

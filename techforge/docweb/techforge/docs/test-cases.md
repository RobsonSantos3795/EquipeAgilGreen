
# Casos de teste

Analisaremos passo a passo do código que está escrito em JavaScript, usando React e a biblioteca de testes @testing-library/react, onde verifica se os cards são renderizados corretamente na aplicação.

## Importações
```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import cards from '../utils/data/cards';

```
**React:** Importamos a biblioteca React para criar componentes
**Render e Screem:** Utilizamos para importar funções da biblioteca de testes @testing-library/react. **Render** é usado para renderizar componentes React em um ambiente de teste e o **Screen** é usado para consultar elementos renderizados.

**App:** Serve para importar o componente principal da aplicação.

**Cards:** Importa a lista de cards a partir de um arquivo de dados.

## Interface CardProps

```tsx
interface CardProps {
  name: string;
  image: string;
  link: string;
  category: string;
}
```

Define uma interface TypeScript para as propriedades de um cartão. Isso é útil para garantir que os cartões recebam as propriedades corretas com os tipos de dados esperados.

## Mock do componente Card

```tsx

jest.mock('../components/Card', () => {
  return {
    Card: ({ name, image, link, category }: CardProps) => (
      <div data-testid="card">
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <a href={link}>Link</a>
        <p>{category}</p>
      </div>
    )
  };
});


```

1. Jest.mock: Substitui o componente real **Card** por uma versão mock para testes. Isso é feito para controlar como o componente se comporta e para não depender de sua implementação real durante os testes.

2. Card.mock: Define um componente mock **card** que aceita **name**, **image**, **link** e **category** como props e renderizam o **div** com esses dados. Cada **div** tem um atributo **data-testid** para facilitar a consulta durantes os testes. 

## Teste unitário

```tsx

test('renders all cards', () => {
  render(<App />);
  
  // Verifique se o número de cartões renderizados é igual ao número de cartões na lista
  const cardElements = screen.getAllByTestId('card');
  expect(cardElements).toHaveLength(cards.length);

  // Verifique se cada cartão tem os dados corretos
  cards.forEach(card => {
    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByAltText(card.title)).toBeInTheDocument();
    // Use getAllByText para múltiplos elementos com o mesmo texto
    expect(screen.getAllByText(card.category).length).toBeGreaterThan(0);
  });
});

```
1. render(<App/>): Renderiza o componente 'App' para teste.

2. screen.getAllByTestld('card'): Obtém todos os elementos que tem o atributo 'data-testid = "card"'.

3. expect(cardElements).toHaveLength(cards.length): Verifica se o número de elementos renderizados é igual ao número de cartões la lista 'cards';

4. cards.forEach: Itera sobre cada card na lista e verifica os seguintes pontos:

    - Se o texto do título do cartão está presente no documento.
    - Se a imagem do cartão está presente no documento (verificada pelo atributo alt).
    - Se a categoria do cartão está presente no documento, permitindo múltiplas ocorrências do mesmo texto.

**OBS:** Esse código assegura que todos os cartões são renderizados corretamente e que cada cartão contém os dados esperados (título, imagem, e categoria).


Analisaremos esse código de teste que verifica o comportamento do componente Card em uma aplicação React, usando a biblioteca de testes @testing-library/react e as extensões de asserções do Jest.

## Importações

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/Card'; // Assumindo que o componente Card está no mesmo diretório

```
1. React: Importa a biblioteca React, necessária para utilizar JSX.
2. render e screen: Importa funções da biblioteca de testes @testing-library/react. render é usado para renderizar o componente em um ambiente de teste, e screen é usado para consultar elementos renderizados.
3. '@testing-library/jest-dom/extend-expect': Importa extensões para asserções do Jest, como toBeInTheDocument.
4. Card: Importa o componente Card que será testado.

## Descrição do teste

```tsx

describe('Card Component', () => {
  const defaultProps = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/150',
  };

```
**Describe:** Agrupa os testes relacionados ao componente Card.
**DefaultProps:** Define um conjunto de propriedades padrão que serão passadas para o componente Card durante os testes.

## Primeiro Teste: Verificar a Renderização do Componente com Props Padrão

```tsx

  test('renders the Card component with the given props', () => {
    render(<Card {...defaultProps} />);

    // Verifica se a imagem está renderizada corretamente
    const imgElement = screen.getByAltText('Logo');
    expect(imgElement).toHaveAttribute('src', defaultProps.image);

    // Verifica se o nome está renderizado corretamente
    const nameElement = screen.getByText(defaultProps.name);
    expect(nameElement).toBeInTheDocument();

    // Verifica se a categoria está renderizada corretamente
    const categoryElement = screen.getByText(defaultProps.category);
    expect(categoryElement).toBeInTheDocument();

    // Verifica se o link está renderizado corretamente
    const linkElement = screen.getByText('Saiba Mais');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.link);
    expect(linkElement).toHaveAttribute('target', '_blank');
  });


```

1. test: Define um teste que verifica se o componente Card é renderizado corretamente com as propriedades fornecidas.
2. render(<Card {...defaultProps} />): Renderiza o componente Card com as propriedades padrão.
3. screen.getByAltText('Logo'): Obtém o elemento de imagem pelo texto alternativo 'Logo'.
4. expect(imgElement).toHaveAttribute('src', defaultProps.image): Verifica se a imagem tem o atributo src igual ao valor esperado.
5. screen.getByText(defaultProps.name): Obtém o elemento que contém o nome fornecido.
6. expect(nameElement).toBeInTheDocument(): Verifica se o nome está presente no documento.
7. screen.getByText(defaultProps.category): Obtém o elemento que contém a categoria fornecida.
8. expect(categoryElement).toBeInTheDocument(): Verifica se a categoria está presente no documento.
9. screen.getByText('Saiba Mais'): Obtém o elemento de link pelo texto 'Saiba Mais'.
expect(linkElement).toHaveAttribute('href', defaultProps.link): Verifica se o link tem o atributo href correto.
10. expect(linkElement).toHaveAttribute('target', '_blank'): Verifica se o link abre em uma nova aba.

## Segundo Teste: Verificar a Renderização com Props Adicionais

```tsx
  test('renders the Card component with additional props', () => {
    const additionalProps = {
      additionalInfo: 'Additional Info',
    };
    const combinedProps = { ...defaultProps, ...additionalProps };

    render(<Card {...combinedProps} />);

    // Verifica se a informação adicional está renderizada corretamente
    const additionalInfoElement = screen.getByText(additionalProps.additionalInfo);
    expect(additionalInfoElement).toBeInTheDocument();
  });
});

```

1. additionalProps: Define propriedades adicionais que serão passadas para o componente.
2. combinedProps: Combina as propriedades padrão com as propriedades adicionais.
3. render(<Card {...combinedProps} />): Renderiza o componente Card com as propriedades combinadas.
4. screen.getByText(additionalProps.additionalInfo): Obtém o elemento que contém a informação adicional.
5. expect(additionalInfoElement).toBeInTheDocument(): Verifica se a informação adicional está presente no documento.

**OBS:** Este código realiza testes unitários no componente Card, verificando se ele é renderizado corretamente com diferentes conjuntos de propriedades. Ele assegura que todos os elementos importantes, como imagem, nome, categoria e link, estão presentes e têm os atributos corretos. Também testa a capacidade do componente de lidar com propriedades adicionais.

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import cards from '../utils/data/cards';

interface CardProps {
  name: string;
  image: string;
  link: string;
  category: string;
}

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

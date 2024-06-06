// Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components/Card'; // Assumindo que o componente Card está no mesmo diretório

describe('Card Component', () => {
  const defaultProps = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'https://example.com',
    image: 'https://via.placeholder.com/150',
  };

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


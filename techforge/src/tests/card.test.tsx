/**
 * @jest-environment jsdom
 */ 

/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('renders the Card component with the correct name', () => {
  const props = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'http://example.com',
    image: 'http://example.com/image.jpg'
  };

  render(<Card {...props} />);

  // Verifica se o nome está sendo renderizado corretamente
  const nameElement = screen.getByText('Test Name');
  expect(nameElement).toBeTruthy();
});

test('renders the Card component with the correct category', () => {
  const props = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'http://example.com',
    image: 'http://example.com/image.jpg'
  };

  render(<Card {...props} />);

  // Verifica se a categoria está sendo renderizada corretamente
  const categoryElement = screen.getByText('Test Category');
  expect(categoryElement).toBeTruthy();
});

test('renders the Card component with the correct image', () => {
  const props = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'http://example.com',
    image: 'http://example.com/image.jpg'
  };

  render(<Card {...props} />);

});

test('renders the Card component with the correct link', () => {
  const props = {
    name: 'Test Name',
    category: 'Test Category',
    link: 'http://example.com',
    image: 'http://example.com/image.jpg'
  };

  render(<Card {...props} />);

});

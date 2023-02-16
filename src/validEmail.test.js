import React from "react";
import { render, screen } from "@testing-library/react";
import ValidEmail from "./components/validEmail";

test.skip('Testando o email caso seja válido', () => {
  const EMAIL = 'email@email.com';
  render(<ValidEmail email={ EMAIL } />);

  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
})

test.skip('Testando o email caso seja invalido', () => {
  const EMAIL = 'invalidEmail';
  render(<ValidEmail email={ EMAIL } />);

  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
})
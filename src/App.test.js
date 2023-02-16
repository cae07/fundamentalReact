import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('testando api fetch', async () => {
  const joke = {
    id: 'asjdfhask',
    joke: 'pra ver ou pra comer',
    status: 200
  }

  // PRIMEIRA FORMA DE MOCKAR O FETCH
  // jest.spyOn(global, 'fetch');
  // global.fetch.mockResolvedValue({
  //   json: jest.fn().mockResolvedValue(joke)
  // });


  // SEGUNDA FORMA DE MOCKAR O FETCH
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke)
  // })) 


  // TERCEIRA FORMA DE MOCKAR O FETCH

  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }))


  render(<App />);
  const response = await screen.findByText('pra ver ou pra comer');

  expect(response).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }});
});

describe.skip('pular', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByLabelText(/email/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveProperty('type', 'email');
  });
  
  test('verify app has a button', () => {
    render(<App />);
    const linkElement = screen.getAllByRole('button');
    expect(linkElement).toHaveLength(2);
  });
  
  test('verify app has a button with text', () => {
    render(<App />);
    const linkElement = screen.getByTestId('enviar-email');
  
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveValue('enviar email')
  });
  
  const EMAIL = 'user@email.com';
  test('testa input funcionando', () => {
    render(<App />);
    const input = screen.getByLabelText(/email/i);
    userEvent.type(input, EMAIL);
  
    expect(input).toHaveValue(EMAIL)
  });
  
  test('testa botao funcionando corretamente', () => {
    render(<App />);
    const input = screen.getByLabelText(/email/i);
    const button = screen.getByTestId('enviar-email');
  
    userEvent.type(input, EMAIL);
    userEvent.click(button);
  
    expect(input).toHaveValue('');
  });
  
  test('testa texto email correto na tela', () => {
    render(<App />);
    const textH2 = `O email digitado é ${EMAIL}`;
    
    const input = screen.getByLabelText(/email/i);
    const button = screen.getByTestId('enviar-email');
    
    userEvent.type(input, EMAIL);
    userEvent.click(button);
    const header = screen.getByTestId('tag-h2');
  
    expect(input).toHaveValue('');
    expect(header).toHaveTextContent(textH2);
  });

})

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

let isEven = () => retornaNumeroAleatorio() % 2 === 0;

test.skip('Verifica o numero aleatorio é par', () => {
  isEven = jest.fn().mockReturnValue(true);

  expect(isEven()).toBe(true);
  expect(isEven).toBeCalled();
  isEven();
  expect(isEven).toBeCalledTimes(2);

  isEven.mockReset();
  expect(isEven()).toBeUndefined();
});
const Calculadora = require('./components/Calculadora');

// jest.mock('./components/Calculadora');

test.skip('testando aqui', () => {
  // Calculadora.somar.mockImplementation((a, b) => a - b);
  const mockSomar = jest.spyOn(Calculadora, "somar");

  const resut = mockSomar(5, 2);

  expect(resut).toBe(7);
  expect(mockSomar).toHaveBeenCalledWith(5, 2);
  expect(mockSomar).toHaveBeenCalledTimes(1);
})

const statusServer = require('../services/statusServer');

describe('Services :: StatusServer', () => {

  afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should return status equal UP when random more than 0.5 or equal to 0.5', () => {

    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    const value = statusServer();
    expect(value).toEqual({ status: 'UP' });
  });

  it('should return status equal DOWN when random less than 0.5', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);

    const value = statusServer();
    expect(value).toEqual({ status: 'DOWN' });
  });
})
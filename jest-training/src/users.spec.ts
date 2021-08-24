
import axios from 'axios';
import { getUserDataByIds }  from './users';

jest.mock('axios');

describe('getUserDataByIds: Ajax', () => {

  afterEach(() => {
    jest.resetAllMocks();
  });


  it('should return users', async () => {
    const mockedUsers = [{ userId: 1 }];
    axios.get = jest.fn().mockResolvedValue(mockedUsers);

    const actualValue = await getUserDataByIds(['1']);

    expect(actualValue).toEqual(mockedUsers);
    expect(axios.get).toBeCalledWith('/users');
  });


  it('should return empty Map when axios.get failed', async () => {
    const getError = new Error('network error');
    axios.get = jest.fn().mockRejectedValue(getError);

    const actualValue = await getUserDataByIds(['1']);
    
    expect(actualValue).toEqual(new Map());
    expect(axios.get).toBeCalledWith('/users');
  });


});

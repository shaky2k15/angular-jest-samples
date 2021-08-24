
import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import { getPerson } from './api';

jest.mock('node-fetch', () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

describe('getPerson test', () => {
  test('getPerson should fetch a person', async () => {

    // provide a mock implementation for the mocked fetch:
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve({name: 'Luke Vader'});
        }
      });
    });

    // getPerson uses the mock implementation for fetch:
    const person = await getPerson(1);
    expect(mocked(fetch).mock.calls.length).toBe(1);
    expect(person).toBeDefined();
    expect(person.name).toBe('Luke Vader');
  });
});





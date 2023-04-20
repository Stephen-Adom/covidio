import store from '../redux/store';

jest.mock('react-redux');

const continents = [
  {
    active: 2676394,
    activePerOneMillion: 4474.52,
    cases: 125999093,
    casesPerOneMillion: 210651.19,
    continent: 'North America',
    countries: ['Anguilla'],
    critical: 6761,
    criticalPerOneMillion: 11.3,
    deaths: 1626003,
    deathsPerOneMillion: 2718.43,
    population: 598140916,
    recovered: 121696696,
    recoveredPerOneMillion: 203458.24,
    tests: 1313821709,
    testsPerOneMillion: 2196508.67,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 1098,
    updated: 1681906728561,
  },
  {
    active: 2676394,
    activePerOneMillion: 4474.52,
    cases: 125999093,
    casesPerOneMillion: 210651.19,
    continent: 'Asia',
    countries: ['Afghanistan'],
    critical: 6761,
    criticalPerOneMillion: 11.3,
    deaths: 1626003,
    deathsPerOneMillion: 2718.43,
    population: 598140916,
    recovered: 121696696,
    recoveredPerOneMillion: 203458.24,
    tests: 1313821709,
    testsPerOneMillion: 2196508.67,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 1098,
    updated: 1681906728561,
  },
];

const countries = [
  {
    active: 12444,
    activePerOneMillion: 305.34,
    cases: 213336,
    casesPerOneMillion: 5235,
    continent: 'Asia',
    country: 'Afghanistan',
    countryInfo: {},
    critical: 45,
    criticalPerOneMillion: 1.1,
    deaths: 7896,
    deathsPerOneMillion: 194,
    oneCasePerPeople: 191,
    oneDeathPerPeople: 5161,
    oneTestPerPeople: 33,
    population: 40754388,
    recovered: 192996,
    recoveredPerOneMillion: 4735.59,
    tests: 1227389,
    testsPerOneMillion: 30117,
    todayCases: 0,
    todayDeaths: 0,
    todayRecovered: 0,
    updated: 1681906728395,
  },
];

describe('Metric Slice', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should set status to pending when continent action is initiated', () => {
    const mockDispatch = jest.fn(() => ({
      type: 'metrics/continent/pending',
    }));

    store.dispatch(mockDispatch());

    expect(store.getState().metrics.status).toEqual('pending');
  });

  it('should set status to fulfilled when continent action is fulfilled', () => {
    const mockDispatch = jest.fn(() => ({
      type: 'metrics/all-continents/fulfilled',
      payload: continents,
    }));

    store.dispatch(mockDispatch());

    expect(store.getState().metrics.status).toEqual('fulfilled');
    expect(store.getState().metrics.allContinents.length).toEqual(continents.length);
  });

  it('should set status to pending when contries action is initiated', () => {
    const mockDispatch = jest.fn(() => ({
      type: 'metrics/countries/pending',
    }));

    store.dispatch(mockDispatch());

    expect(store.getState().metrics.status).toEqual('pending');
  });

  it('should set status to fulfilled when continent action is fulfilled', () => {
    const mockDispatch = jest.fn(() => ({
      type: 'metrics/countries/fulfilled',
      payload: countries,
    }));

    store.dispatch(mockDispatch());

    expect(store.getState().metrics.status).toEqual('fulfilled');
    expect(store.getState().metrics.countries.length).toEqual(countries.length);
  });
});

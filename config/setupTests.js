// import '@testing-library/cleanup-after-each';
import fetchMock from 'fetch-mock';

fetchMock.catch();
fetchMock.config.overwriteRoutes = true;

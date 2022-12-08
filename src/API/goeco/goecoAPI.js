import axios from 'axios';
import * as paths from './paths';

export const loginService = (email, password) =>
  axios.post(
    paths.authURL,
    { email, password },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );

export const signupService = (ecoServiceObject) =>
  axios.post(paths.ecoServiceURL, ecoServiceObject, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

export const changePasswordService = (id, { oldPassword, newPassword, confirmPassword }) => {
  const path = paths.ecoServiceURL + `/${id}`;
  return axios.patch(
    path,
    { oldPassword, newPassword, confirmPassword },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};

export const changeServiceInfo = (newEcoServiceObject) => {
  const path = paths.ecoServiceURL + `/${newEcoServiceObject.id}`;
  return axios.put(path, newEcoServiceObject, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getServices = () =>
  axios.get(paths.ecoServiceURL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

export const getServiceById = (id) => {
  const path = paths.ecoServiceURL + `/${id}`;
  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const deleteService = (ecoServiceId) => {
  const path = paths.ecoServiceURL + '/' + ecoServiceId;
  return axios.delete(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getFilteredWastePoints = (filter) => {
  const { types, country, city } = filter;

  let query = city ? `city=${city}` : '';

  query = country ? `country=${country}&${query}` : query;

  query = types
    ? types
        .map((item, index, array) =>
          index !== array.length - 1 ? `types=${item}&` : `types=${item}`,
        )
        .join('')
    : `${query}`;

  const path = query ? paths.wastePointsURL + `?${query}` : paths.wastePointsURL;

  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const postWastePoint = (wastePointObject) =>
  axios.post(paths.wastePointsURL, wastePointObject, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

export const getWastePointById = (wastePointId) => {
  const path = paths.wastePointsURL + '/' + wastePointId;
  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getWastPointsByEcoServiceId = (ecoServiceId) => {
  const path = paths.wastePointsURL + '/ecoserviceId/' + ecoServiceId;
  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const postWastePointRating = (feedback) => {
  //feedback is object { rating, comment, wasteId }
  return axios.post(paths.ratingsURL, feedback, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getWastePointRating = (wasteId) => {
  const path = paths.ratingsURL + `/waste/${wasteId}`;
  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const postOrder = (order) => {
  return axios.post(paths.ordersURL, order, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const patchOrder = (orderId, newStatus) => {
  const path = paths.ordersURL + `/${orderId}/${newStatus}`;
  return axios.patch(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getOrdersByEcoserviceId = (ecoserviceId) => {
  const path = paths.ordersURL + `/${ecoserviceId}`;
  return axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const getEvents = (data: any): Promise<any> => {
  return axios
    .post(`${API_URL}/event/filter-event`, data)
    .then((response: any) => {
      return response?.data;
    });
};

export { getEvents };

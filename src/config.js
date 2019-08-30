const TOKEN_API = 'BQAyUw5wQJV_RpqxH9xbn3Y_zeP9s7uxO7OP0HI4eIvJMRbQMKDVXI8ka0x9Jo4wiz5ftLyrqOk0vPmcJsegTmmnDl0svv9nrsNQyh8mp7craOq2HBwv3wzjDsQydECXW8cLsXapgn9yW6CWmLH9NP9nHqMCcVZ8iNT6_ucpXroiTCuAokZFW6ekf132sTE2xA';

export const API_URL = 'https://api.spotify.com/v1';

export const HEADERS = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN_API}`
    }
};

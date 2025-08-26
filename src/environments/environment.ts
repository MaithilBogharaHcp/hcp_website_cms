type Credential = { username: string; password: string };

export const environment = {
  production: false,
  credentials: {
    localhost: {
      username: '123',
      password: '123',
    },
    'hcp.co.in': {
      username: 'hcparmy',
      password: 'hcpindianarmy!@7#',
    },
    'cms.hcp.co.in': {
      username: 'adminhcparmy',
      password: 'adminhcparmy!@007#',
    },
  } as Record<string, Credential>
};

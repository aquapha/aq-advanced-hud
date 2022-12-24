type APIResponse<T = any> = {
  status: 'ok';
  data: T;
} | {
  errorMessage: string;
  status: 'error',
};

type NUIResponse<T = any> = {
  type: string;
  data: T;
};

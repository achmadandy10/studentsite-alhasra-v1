/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ResponseAPIProps {
  code: number;
  status: string;
  errors: any;
  data: any;
}

export const ResponseAPI = (
  code: number,
  status: string,
  errors: any,
  data: any,
) => {
  const response: ResponseAPIProps = {
    code: code,
    status: status,
    errors: errors,
    data: data,
  };

  return response;
};

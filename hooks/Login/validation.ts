export interface ValidationLoginProps {
  username?: string;
  password?: string;
}

const validationLogin = (form: ValidationLoginProps) => {
  const errors: ValidationLoginProps = {};

  if (!form.username) {
    errors.username = 'Username harus diisi.';
  }

  if (!form.password) {
    errors.password = 'Password harus diisi.';
  }

  return errors;
};

export default validationLogin;

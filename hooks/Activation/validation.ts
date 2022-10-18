export interface ValidationActivitionProps {
  nis?: string;
  placeBorn?: string;
  dateBorn?: string;
  email?: string;
  phoneNumber?: string;
  username?: string;
  password?: string;
}

const validationActivition = (form: ValidationActivitionProps) => {
  const errors: ValidationActivitionProps = {};

  if (!form.nis) {
    errors.nis = 'NIS harus diisi.';
  }

  if (!form.placeBorn) {
    errors.placeBorn = 'Tempat lahir harus diisi.';
  }

  if (!form.dateBorn) {
    errors.dateBorn = 'Tanggal lahir harus diisi.';
  }

  if (!form.email) {
    errors.email = 'Email harus diisi.';
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Email tidak valid.';
  }

  if (!form.phoneNumber) {
    errors.phoneNumber = 'Nomor Handphone harus diisi.';
  }

  if (!form.username) {
    errors.username = 'Email harus diisi.';
  }

  if (!form.password) {
    errors.password = 'Kata sandi harus diisi.';
  }

  return errors;
};

export default validationActivition;

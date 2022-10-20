import { useToast } from '@chakra-ui/react';
import { NextRouter, useRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import validationActivition, { ValidationActivitionProps } from './validation';

interface FormProps {
  nis: string;
  placeBorn: string;
  dateBorn: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
}

export const useActivation = () => {
  const router: NextRouter = useRouter();
  const [form, setForm] = useState<FormProps>({
    nis: '',
    placeBorn: '',
    dateBorn: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationActivitionProps>({});
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit: FormEventHandler = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setErrors(validationActivition(form));
    setIsSubmit(true);

    if (Object.keys(validationActivition(form)).length === 0) {
      setIsSubmit(true);

      const formData = new FormData();

      formData.append('nis', form.nis);
      formData.append('place_born', form.placeBorn);
      formData.append('date_born', form.dateBorn);
      formData.append('email', form.email);
      formData.append('phone_number', form.phoneNumber);
      formData.append('username', form.username);
      formData.append('password', form.password);

      toast({
        title: 'Berhasil daftar!',
        status: 'success',
        isClosable: true,
      });

      setIsSubmit(false);

      router.replace('/dashboard');
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0 && isSubmit) {
      setIsSubmit(false);
    }
  }, [errors, isSubmit]);

  return { form, handleChange, handleSubmit, errors, isSubmit };
};

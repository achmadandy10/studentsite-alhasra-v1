import { useToast } from '@chakra-ui/react';
import { NextRouter, useRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import validationLogin, { ValidationLoginProps } from './validation';

interface FormProps {
  username: string;
  password: string;
}

export const useLogin = () => {
  const router: NextRouter = useRouter();
  const [form, setForm] = useState<FormProps>({
    username: '',
    password: '',
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationLoginProps>({});
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit: FormEventHandler = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setErrors(validationLogin(form));
    setIsSubmit(true);

    if (Object.keys(validationLogin(form)).length === 0) {
      setIsSubmit(true);

      const formData = new FormData();

      formData.append('username', form.username);
      formData.append('password', form.password);

      toast({
        title: 'Berhasil login!',
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

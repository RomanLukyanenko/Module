import { useSelector, useDispatch } from 'react-redux';
import { cleanCart } from '../../store/CartSlice';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import { EmptyCartMessage } from './EmptyCartMessage';


export default function Order() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  const cartCount = cart.length;

  // Схема валідації для Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обов'язкове поле"),
    email: Yup.string().email("Некоректна електронна пошта").required("Обов'язкове поле"),
    address: Yup.string().required("Обов'язкове поле"),
  });

  // Ініціалізація стану форми
  const initialValues = {
    name: "",
    email: "",
    address: "",
  };

  // Функція для обробки події відправки форми
  const handleSubmit = (values, { setSubmitting }) => {
    const orderProducts = cart.map(item => `${item.title} (${item.count})`).join(', ');

    // Тут ваш код для обробки даних форми
    console.log('Форма відправлена з даними:', values, orderProducts);

    // Припустимо, ви відправляєте дані на сервер
    fetch('https://api.inderio.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: values.email,
        subject: 'Оформлення замовлення',
        message: `Привіт ${values.name}! Ви замовили наступні товари: ${orderProducts}. Ваша адреса доставки: ${values.address}.`
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email відправлено:', data);
      setSubmitting(false);
      alert("Замовлення відправлено!");
      dispatch(cleanCart());
    })
    .catch(error => {
      console.error('Помилка при відправці:', error);
      setSubmitting(false);
    });
  };

  // Формуємо props для Formik
  const formikProps = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  };

  return (
    <div className="article">
      <div className="container">
        <h2 className="article__title">Оформити замовлення</h2>
        <div className="page-content">
          {cartCount > 0 ? (
            <Formik {...formikProps}>
              {({ isSubmitting }) => (
                <Form id="order-form">
                  <FormField name="name" label="Ім'я" type="text" />
                  <FormField name="email" label="Електронна пошта" type="email" />
                  <FormField name="address" label="Адреса доставки" type="text" />
                  <SubmitButton isSubmitting={isSubmitting} />
                </Form>
              )}
            </Formik>
          ) : <EmptyCartMessage />}
        </div>
      </div>
    </div>
  );
}
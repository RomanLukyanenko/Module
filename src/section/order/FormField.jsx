import { ErrorMessage, Field } from "formik";

export const FormField = ({ name, label, type, ...props }) => {
  return (
    // Контейнер для поля форми
    <div className="form-group">
      {/* // Мітка для поля форми */}
      <label htmlFor={name}>{label}:</label>
      {/* // Поле форми з використанням компоненту Field з бібліотеки Formik */}
      <Field 
        name={name} // Визначення імені поля, яке відповідає за зв'язок зі станом форми в Formik
        type={type} // Тип поля (наприклад, 'text', 'email', 'password')
        className="form-control" // Клас для стилізації поля
        {...props} // Передача додаткових пропсів до поля форми
      />
      {/* // Компонент для відображення повідомлення про помилку */}
      <ErrorMessage 
        name={name} // Ім'я поля, для якого відображатиметься повідомлення про помилку
        component="div" // Компонент, який буде використано для відображення помилки
        className="error-message" // Клас для стилізації повідомлення про помилку
      />
    </div>
  );
};

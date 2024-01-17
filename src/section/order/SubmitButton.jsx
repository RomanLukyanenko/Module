export const SubmitButton = ({ isSubmitting }) => {
  return (
    // Кнопка для відправлення форми
    <button 
      type="submit" // Тип кнопки встановлено як submit для відправлення форми
      className="btn" // Клас для стилізації кнопки
      disabled={isSubmitting} // Кнопка буде неактивною (disabled), якщо isSubmitting = true
    >
      Оформити замовлення
    </button>
  );
};

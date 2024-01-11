export const SubmitButton = ({ isSubmitting }) => {
  return (
    <button type="submit" className="btn" disabled={isSubmitting}>
      Оформити замовлення
    </button>
  );
};

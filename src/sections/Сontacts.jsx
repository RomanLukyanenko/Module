export const Contacts = () => {
  return (
    <div className="article">
      <div className="container">
        <h2 className="article__title">Контакти</h2>

        <div className="page-content">
          <p>
            Якщо вам потрібна допомога або у вас є запитання, будь ласка,
            зв&apos;яжіться з нами за наступними контактами:
          </p>

          <p>
            <strong>Email:</strong> example@email.com
          </p>
          <p>
            <strong>Телефон:</strong>{" "}
            <a href="tel:+3809312345678">+38 (093) 123-45-678</a>
          </p>

          <p>Ми знаходимося за адресою:</p>
          <p>
            <strong>Адреса:</strong>{" "}
            <a
              href="https://www.google.com.ua/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4021379,30.3678857,11z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              вул. Прикладна, 12345, Київ, Україна
            </a>
          </p>

          <p>Завітайте до нас в робочий час:</p>
          <p>
            <strong>Години роботи:</strong> Пн-Пт: 9:00 - 17:00
          </p>

          <p>Будемо раді вам допомогти!</p>
        </div>
      </div>
    </div>
  );
};

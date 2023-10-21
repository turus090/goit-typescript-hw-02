"use strict";
/*
  Ви маєте форму реєстрації користувачів.
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю.
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль,
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createOrUpdateUser(initialValues) {
    var user = {
        name: initialValues.name || "",
        surname: initialValues.surname || "",
        email: initialValues.email || "",
        password: initialValues.password || "",
    };
}
createOrUpdateUser({ email: "user@mail.com", password: "password123" });

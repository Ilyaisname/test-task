export const validate = values => {
  const errors = {};
  if(!values.password){
      errors.password = 'Поле обязательно для заполнения!';
  } else if (values.password.length < 8) {
      errors.password = 'Пароль должен быть не менее 8 символов!'
  }
  if(!values.email) {
    errors.email = 'Поле обязательно для заполнения!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.firstName) {
    errors.firstName = 'Поле обязательно для заполнения!';
  }
  if(!values.secondName) {
    errors.secondName = 'Поле обязательно для заполнения!';
  }
  if(!values.repeatPassword){
    errors.repeatPassword = 'Поле обязательно для заполнения!';
} else if (values.repeatPassword.length < 8) {
    errors.repeatPassword = 'Пароль должен быть не менее 8 символов!'
}
if (values.password !== values.repeatPassword) {
  errors.repeatPassword = 'Пароли не совпадают'
}

  // для синхронной валидации нужно вернуть объект с ошибками
  return errors
};



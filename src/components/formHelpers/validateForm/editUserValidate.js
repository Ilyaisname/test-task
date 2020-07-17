export const validate = (values) => {
  const errors = {};


  if(!values.email) {
    errors.email = 'Поле обязательно для заполнения!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(!values.firstName) {
    errors.firstName = 'Поле обязательно для заполнения!'
  }

  if(!values.secondName) {
    errors.secondName = 'Поле обязательно для заполнения!'
  }

  return errors
}
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { registrationSchema } from 'validSchemas/registrationSchema';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper.styled';

const fieldsArray = [
  {
    labelText: 'Ім’я',
    placeholder: '...',
    name: 'name',
  },
  {
    labelText: 'Електронна адреса ',
    placeholder: 'your@email.com',
    name: 'email',
  },
  {
    labelText: 'Пароль',
    placeholder: 'Пароль',
    name: 'password',
  },
  {
    labelText: 'Підтвердити пароль',
    placeholder: 'Пароль',
    name: 'confirmPassword',
  },
];

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handelSubmit = values => {
    console.log(values);
    dispatch(registration(values));
    navigate('/', { replace: true });
  };

  return (
    <section>
      <StyledContainer>
        <AuthWrapper>
          <AuthForm
            fieldsArray={fieldsArray}
            btnTextContent={'Зареєструватися'}
            initialValues={initialValues}
            validationSchema={registrationSchema}
            handelSubmit={handelSubmit}
          />

          {/* <div className={styles.right__block}>
            <div className={styles.log__text}>
              <svg className={styles.svg__qutation}>
                <use href={svgPath.quatation + '#quatation'}></use>
              </svg>
              <LoginPhrase />
            </div>
          </div> */}
        </AuthWrapper>
      </StyledContainer>
    </section>
  );
};

export default RegistrationPage;

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'validSchemas/loginSchema';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper.styled';

const fieldsArray = [
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
];

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handelSubmit = values => {
    console.log(values);
    dispatch(logIn(values.email));
    navigate('/', { replace: true });
  };

  return (
    <section>
      <StyledContainer>
        <AuthWrapper>
          <AuthForm
            fieldsArray={fieldsArray}
            btnTextContent={'Увійти'}
            initialValues={initialValues}
            validationSchema={loginSchema}
            handelSubmit={handelSubmit}
            type="login"
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

export default LoginPage;

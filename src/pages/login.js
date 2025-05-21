import React, { useState } from 'react';
import '../styles/Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // Функции переключения
  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="form-wrapper">
        <div
          className={`form-box login ${
            isLogin ? 'swap-login-back' : 'swap-login'
          }`}
        >
          <p className="title">Welcome back</p>
          <form className="login-form" action="/submit" method="POST">
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required placeholder="Введите ваш email" />

            <label htmlFor="password">Пароль:</label><br />
            <input type="password" id="password" name="password" required placeholder="Введите пароль" />

            <p className="forgot">Забыли пароль?</p>

            <button type="submit">Войти</button>

            <p className="or">или</p>

            <div className="links">
              <div className="alternative google"></div>
              <div className="alternative facebook"></div>
            </div>

            <p className="link-to-reg">
              Нет аккаунта?{' '}
              <span className="to-register" style={{ cursor: 'pointer' }} onClick={switchToRegister}>
                Зарегистрируйся
              </span>
            </p>
          </form>
          <div className={`login-bg ${isLogin ? 'enabled-login' : 'disabled-login'}`}></div>
        </div>

        <div
          className={`form-box registration ${
            isLogin ? 'swap-register-back' : 'swap-register'
          }`}
        >
          <p className="title">Hello</p>
          <form className="registration-form" action="/register" method="POST">
            <label htmlFor="reg-email">Email:</label><br />
            <input type="email" id="reg-email" name="email" required placeholder="Введите ваш email" />

            <label htmlFor="reg-password">Пароль:</label><br />
            <input type="password" id="reg-password" name="password" required placeholder="Введите пароль" />

            <label htmlFor="reg-confirm-password">Подтвердите пароль:</label><br />
            <input type="password" id="reg-confirm-password" name="confirm_password" required placeholder="Подтвердите пароль" />

            {/* 
            <label htmlFor="reg-phone">Телефон:</label><br />
            <input type="tel" id="reg-phone" name="phone" required placeholder="+7(999)-999-99-99" pattern="^\+?\d{10}$" />
            */}

            <button type="submit">Зарегистрироваться</button>

            <p className="link-to-log">
              Уже есть аккаунта?{' '}
              <span className="to-login" style={{ cursor: 'pointer' }} onClick={switchToLogin}>
                Войти
              </span>
            </p>
          </form>
          <div className={`registration-bg ${isLogin ? 'disabled-register' : 'enabled-register'}`}></div>
        </div>
      </div>
    </div>
  );
}

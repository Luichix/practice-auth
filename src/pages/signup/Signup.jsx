import React, { useState, useRef } from 'react';
import styles from './signup.module.css';
import classNames from 'classnames';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [see, setSee] = useState('password');

  return (
    <div className={styles.container}>
      <FaArrowCircleLeft name="arrow-circle-left" className={styles.icon} />
      <div className={styles.form}>
        <div className={styles.head}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.label}>
            Enter your information below or continue with other methods
          </p>
        </div>
        <div className={styles.inputCard}>
          <MdOutlineEmail name="email" className={styles.inputIcon} />
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email Address</label>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder={'Your email address'}
              className={classNames(styles.inputText, styles.input)}
            />
          </div>
        </div>
        <div className={styles.inputCard}>
          <MdLockOutline name="lock-outline" className={styles.inputIcon} />
          <div className={styles.inputGroup}>
            <p className={styles.inputLabel}>Password</p>
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type={see}
              placeholder="Create password"
              className={classNames(styles.inputText, styles.input)}
            />
          </div>
          <div
            className={styles.see}
            onClick={() => setSee(see === 'text' ? 'password' : 'text')}
          >
            {see === 'password' ? (
              <HiEyeOff name="eye-off" className={styles.inputIcon} />
            ) : (
              <HiEye name="eye" className={styles.inputIcon} />
            )}
          </div>
        </div>
        <div className={styles.section}>
          <button className={styles.button} onClick={() => {}}>
            <p className={styles.buttonText}>Create Account</p>
          </button>
        </div>
      </div>
      <p className={styles.labelOr}>Or</p>
      <div className={styles.section}>
        <div>
          <button className={styles.buttonGoogle}>
            <img
              src="https://avatars.githubusercontent.com/u/1342004?s=200&v=4"
              className={styles.google}
            />
            <p className={styles.textGoogle}>Signup with Google</p>
          </button>
        </div>
        <div className={styles.signup}>
          <p className={styles.label}>
            Already have an account? &nbsp;
            <a className={styles.link}>Login Now</a>
          </p>
        </div>
      </div>
    </div>
  );
}

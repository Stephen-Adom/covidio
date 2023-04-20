import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from '../styles/Splash.module.css';
import logo from '../assets/covido-logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigate('/dashboard');
    }, 3100);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [navigate]);

  return (
    <section className={styles['splash-container']}>
      <div className="relative logo-container">
        <img className={`${styles['bounce-in-fwd']}`} src={logo} width="100%" alt="covido" />
        <h1 className={`${styles.logo} ${styles['tracking-in-expand']}`}>Covidio</h1>
      </div>

    </section>
  );
};
export default SplashScreen;

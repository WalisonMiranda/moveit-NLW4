import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const { minutes, seconds, isActive, hasFinished, startCountdown, resetCountdown } = useContext(CountdownContext);
  
  //Separa os caracteres do time em 2 dígitos
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled
        className={ styles.countdownButton }
        >
          Ciclo encerrado <span><img src="icons/check.svg" alt="Ciclo completo"/></span>
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
            type="button" 
            className={ `${styles.countdownButton} ${styles.countdownButtonActive}` }
            onClick={resetCountdown}
            >
              Abandonar ciclo <span><img src="icons/close.svg" alt="Abandonar ciclo"/></span>
            </button>
          ) : (
            <button 
            type="button" 
            className={ styles.countdownButton }
            onClick={startCountdown}
            >
              Iniciar um ciclo <span><img src="icons/play_arrow.svg" alt="Abandonar ciclo"/></span>
            </button>
          ) }
        </>
      ) }

      

    </div>
  );
}

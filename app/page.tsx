'use client'
import styles from './page.module.css'
import Todo from './components/Todo/Todo'
import Button from './components/Button/Button'

export default function Home() {

  const onRegister = () => {
    // ...........
    alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია!')
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Button title='რეგისტრაცია' />
      </div>
    </main>
  )
}
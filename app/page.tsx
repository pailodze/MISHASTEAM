'use client'
import styles from './page.module.css'
<<<<<<< HEAD
=======
import Todo from './components/Todo/Todo'
>>>>>>> 6d37d4b (displayname)
import Button from './components/Button/Button'

export default function Home() {

  const onRegister = () => {
    // ...........
    alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია!')
  };

  return (
    <main className={styles.main}>
<<<<<<< HEAD

      <div className={styles.center}>
        <Button title='ავტორიზაცია' />
=======
      <div className={styles.center}>
        <Button title='რეგისტრაცია' />
>>>>>>> 6d37d4b (displayname)
      </div>
    </main>
  )
}
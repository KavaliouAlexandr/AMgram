import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory() //сохраняет данные из списка дел при переходе на главную страницу
  return (
    <>
      <h1>Strona Info</h1>
      <p>
        Aplikacja dla zapisywania listy zadań 
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Do listy Zadań
      </button>
    </>
  )
}

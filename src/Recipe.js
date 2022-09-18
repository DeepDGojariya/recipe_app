import React from 'react'
import style from './recipe.module.css'

export default function Recipe(props) {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={props.image} alt="Recipe Img" />
      <h1>{props.title}</h1>
      <p>{props.calories}</p>
      <ul>
        {props.ingredients.map((ingredient,index)=>(
            <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  )
}

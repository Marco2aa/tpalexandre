import React from 'react'
import './CategorySection.css'

const CategorySection = ({children}) => {
  return (
    <section className='category-section'>
      {children}
    </section>
  )
}

export default CategorySection

<<<<<<< HEAD
import React from 'react'
import list from '../list'
import Card from './Card'

function Shop({handleClick}) {
  return (
    <section>
        {list.map((item)=>{
           return <Card item={item} key={item.id} handleClick={handleClick} />
        })}
    </section>
)
}

export default Shop

=======
import React from 'react'
import list from '../list'
import Card from './Card'

function Shop({handleClick}) {
  return (
    <section>
        {list.map((item)=>{
           return <Card item={item} key={item.id} handleClick={handleClick} />
        })}
    </section>
)
}

export default Shop

>>>>>>> b3a28b23bc2610f33b81c9e611ad8c6c4bf31213

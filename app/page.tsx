'use client'
import axios from 'axios'
import styles from './page.module.css'
import { useEffect, useState } from 'react'


export default function Home() {

  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('asc')
  const [limit, setLimit] = useState(20)


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
      .then((result) => {        
        setProducts(result.data);
      })
  }, [sort, limit]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <select onChange={(e) => {
          setSort(e.target.value)
        }}>
          <option>asc</option>
          <option>desc</option>
        </select>
        <input type='number' 
                value={limit} 
                onChange={(e) => {
                  setLimit(+e.target.value)
                }} 
          />
        <ul>
          {
            products.map((product: any) => 
            <li>
              <img width='50px' src={product.image} />
              {product.title}
            </li>)
          }
        </ul>
      </div>
    </main>
  )
}
'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])

  // const inputRef = useRef<HTMLInputElement>(null)

  // const handleClick = () => {
  //   if(inputRef.current == null || inputRef.current.value === '') {
  //     alert('input name plz')
  //     return
  //   }
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Product List</p>
      {products &&
        products.map((product) => <div key={product.id}>{product.name}</div>)}
    </main>
  )
}

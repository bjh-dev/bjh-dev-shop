import React from 'react'

interface ShopLayoutProps {
  children: React.ReactNode
}

function ShopLayout({ children }: ShopLayoutProps) {
  return <div className="container mt-16">{children}</div>
}

export default ShopLayout

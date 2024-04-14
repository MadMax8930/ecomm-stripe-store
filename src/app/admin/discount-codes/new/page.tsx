import db from "@/db/db"
import PageHeader from "@/components/PageHeader"
import { DiscountCodeForm } from "@/components/DiscountCodeForm"

export default async function NewDiscountCodePage() {
  const products = await db.product.findMany({
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  })

  return (
    <>
      <PageHeader>Add Product</PageHeader>
      <DiscountCodeForm products={products} />
    </>
  )
}
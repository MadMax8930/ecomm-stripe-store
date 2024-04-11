import React from "react"
import * as crypto from "crypto"
import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind } from "@react-email/components"
import { OrderInformation } from "@/components/OrderInformation"
 
type OrderHistoryEmailProps = {
   orders: {
     id: string
     pricePaidInCents: number
     createdAt: Date
     downloadVerificationId: string
     product: {
       name: string
       imagePath: string
       description: string
     }
   }[]
}
 
OrderHistoryEmail.PreviewProps = {
   orders: [
     {
       id: crypto.randomUUID(),
       createdAt: new Date(),
       pricePaidInCents: 10000,
       downloadVerificationId: crypto.randomUUID(),
       product: {
         name: "Product name",
         description: "Some description",
         imagePath:
           "/products/ff3a11e6-8c72-4df8-a81b-738a4547fdf7-fiverr_thumbnail.png",
       },
     },
     {
       id: crypto.randomUUID(),
       createdAt: new Date(),
       pricePaidInCents: 2000,
       downloadVerificationId: crypto.randomUUID(),
       product: {
         name: "Product name 2",
         description: "Some other desc",
         imagePath:
           "/products/a64f2a45-e3d2-4484-9793-071e7e060310-logo-freelance.png",
       },
     },
   ],
} satisfies OrderHistoryEmailProps
 
export default function OrderHistoryEmail({ orders }: OrderHistoryEmailProps) {
   return (
     <Html>
       <Preview>Order History & Downloads</Preview>
       <Tailwind>
         <Head />
         <Body className="font-sans bg-white">
           <Container className="max-w-xl">
             <Heading>Order History</Heading>
             {orders.map((order, index) => (
               <React.Fragment key={order.id}>
                 <OrderInformation
                   order={order}
                   product={order.product}
                   downloadVerificationId={order.downloadVerificationId}
                 />
                 {index < orders.length - 1 && <Hr />}
               </React.Fragment>
             ))}
           </Container>
         </Body>
       </Tailwind>
     </Html>
   )
}
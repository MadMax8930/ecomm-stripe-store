import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic" // Force NextJs to not cache any of our customer pages

export default function CustomerLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
      <>
         <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/orders">My Orders</NavLink>
         </Nav>
         <div className="container my-6">{children}</div>
      </>
   );
 }
 
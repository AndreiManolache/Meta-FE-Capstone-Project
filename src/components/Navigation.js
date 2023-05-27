import { Link } from "react-router-dom";

const navItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    target: '_self'
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
    target: '_self'
  },
  {
    id: 'menu',
    label: 'Menu',
    path: '/assets/menu.webp',
    target: '_blank'
  },
  {
    id: 'reservations',
    label: 'Reservations',
    path: '/reservations',
    target: '_self'
  },
  {
    id: 'order',
    label: 'Order',
    path: '/order',
    target: '_self'
  },
  {
    id: 'login',
    label: 'Login',
    path: '/login',
    target: '_self'
  }
]

export default function NavigationItems({ mobileOpen }) {
  return (
    <>
      {navItems.map(item => (
        <Link key={item.id} to={item.path} target={item.target}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

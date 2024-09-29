import Link from "next/link";

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand mx-5' href='/'>
        Weather App
      </Link>
      <div className='' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-link' aria-current='page' href='/'>
            Home
          </Link>
          <Link className='nav-link' href='/favorites'>
            Favorites Cities
          </Link>
        </div>
      </div>
    </nav>
  );
}

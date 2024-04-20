import Link from "next/link";

export const Header = () => {
    return(
        <header>
          <nav>
            <ul>
              <li>
              <Link href="/">
                <li>Home</li>
              </Link>
              </li>
              <li>
              <Link href="/store">
                <li>Store</li>
              </Link>
              </li>
              <li>
              <Link href="/test">
                <li>Test</li>
              </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}
import Link from "next/link";
import Logout from "./Logout";
import { Button } from "@/components/ui/button";
import { getUser } from "@/utils/get-user";

export default async function Header() {
  const user = await getUser();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-600">
          AeroAware
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-sky-600"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#solution" className="text-gray-600 hover:text-sky-600">
              Solution
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-600 hover:text-sky-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#app" className="text-gray-600 hover:text-sky-600">
              Mobile App
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-600 font-bold">{user.firstName}</span>
              <Logout />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

import { Nav } from "./components/Navbar";

export function AboutUs() {
  return (
    <>
      <Nav />
      <div className="text-center py-16">
        <h1 className="text-4xl py-8">About Us</h1>
        <p className="text-lg py-8">
          Welcome to our company. We are here to serve you.
        </p>
        <p className="text-lg py-8">
          For any inquiries, please contact us at:
          <a
            href="mailto:admin@unione.site"
            className="text-blue-500 hover:text-blue-700"
          >
            admin@unione.site
          </a>
        </p>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 text-center bg-black text-white">
      <p>
        &copy; {new Date().getFullYear()} Powered by Ember. All rights reserved.
      </p>
    </footer>
  );
}

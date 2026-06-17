import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="min-h-screen flex items-center justify-center pt-20">
    <div className="container-wide text-center">
      <p className="font-mono-label text-[11px] uppercase text-muted-foreground mb-6">"” Error 404</p>
      <h1 className="font-serif-display text-7xl md:text-9xl leading-[0.9]">Off the <em>grid.</em></h1>
      <p className="mt-8 text-lg text-muted-foreground max-w-md mx-auto">The page you're looking for is unmonitored. Let's get you back to safety.</p>
      <Link to="/" className="btn-primary mt-10">Return home</Link>
    </div>
  </section>
);
export default NotFound;


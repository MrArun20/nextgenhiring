export function LogoScroller() {
  const logos = [
    "/assets/uber.jpg",
    "/assets/amazon.jpg",
    "/assets/flipkart.jpg",
    "/assets/rapido.jpg",
    "/assets/zepto.jpg",
    "/assets/blinkit.jpg",
    "/assets/genpact.png",
    "/assets/google.jpg",
    "/assets/hdfc.png",
    "/assets/icici.jpg",
    "/assets/kotakbank.jpg",
    "/assets/myntra.png",
    "/assets/ola.png",
    "/assets/rapido.jpg",
    "/assets/sbi.jpg",
    "/assets/swiggy instamart.jpg",
    "/assets/swiggy.jpg",
    "/assets/tcs.jpg",
    "/assets/techmahindra.png",
    "/assets/uber eats.jpg",
    "/assets/uber.jpg",
    "/assets/wipro.jpg",
    "/assets/zepto.jpg",
    "/assets/zomato.jpg",
  ];

  return (
    <section className="px-10 bg-background pb-3 overflow-hidden">
  <div className="overflow-hidden w-full py-2">
  <div className="animate-scroll flex items-center space-x-12">
    {logos.map((logo, index) => (
      <img key={index} src={logo} alt="logo" className="h-14 w-auto rounded-lg opacity-70 hover:opacity-100 transition" />
    ))}

    {/* Duplicate for seamless infinite scroll */}
    {logos.map((logo, index) => (
      <img key={`copy-${index}`} src={logo} alt="logo" className="h-14 w-auto rounded-lg opacity-70 hover:opacity-100 transition" />
    ))}
  </div>
</div> 

    </section>
  );
}
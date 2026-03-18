const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Abir Hasan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with passion & coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Diogenes Tayam III
            </p>
          </div> */}
          
          <div className="w-full text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Diogenes Tayam III. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
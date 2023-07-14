export interface NavLinkProps {
  text: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  closeNav: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  special: Special;
}

export interface SpecialProps {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

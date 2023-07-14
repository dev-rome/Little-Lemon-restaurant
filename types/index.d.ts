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

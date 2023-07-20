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
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface SpecialCardProps {
  special: Special;
}

export interface SpecialProps {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface TestimonialProps {
  id: string;
  rating: number;
  image: string;
  name: string;
  comment: string;
}

interface BookingFormProps {
  availableTimes: string[];
  dispatch?: (action: any) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
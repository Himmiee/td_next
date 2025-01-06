export interface ISocialIcons {
  icon: React.ElementType;
  name: string;
  route: string;
}
export interface IAboutus {
  id: number;
  title: string;
  description: string;
}
export interface FormTextAreaProps {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  maxWords?: number;
}

export interface FooterLinkProps {
  name: string;
  route: string;
}

export interface WaitlistFormInputs {
  email: string;
}

export interface ErrorResponse {
  response?: {
    data: {
      message: string;
      status: number;
    };
  };
  message: string;
}

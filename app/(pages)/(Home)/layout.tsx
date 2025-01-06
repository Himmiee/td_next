import { FooterComponent } from "@/components/layouts/FooterComponent";
import { HeaderComponent } from "@/components/layouts/HeaderComponent";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <main className="overflow-x-hidden">
      <HeaderComponent showBtn />

      <div>{children}</div>

      <FooterComponent />
    </main>
  );
};

export default MainLayout;

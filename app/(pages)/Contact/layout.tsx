import { FooterComponent } from "@/components/layouts/FooterComponent";
import { HeaderComponent } from "@/components/layouts/HeaderComponent";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <main className="overflow-x-hidden">
      {/* Header should be positioned outside of any content wrappers */}
      <HeaderComponent isDark={false} showBtn/>

      {/* Content of the page */}
      <div>{children}</div>

      {/* Footer at the bottom */}
      <FooterComponent />
    </main>
  );
};

export default MainLayout;

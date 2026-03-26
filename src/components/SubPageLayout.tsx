import Link from "next/link";
import PageHero from "./PageHero";

interface SideMenuItem {
  name: string;
  href: string;
}

interface SubPageLayoutProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  description?: string;
  sideMenu: SideMenuItem[];
  currentPath: string;
  children: React.ReactNode;
}

export default function SubPageLayout({
  category,
  categoryHref,
  title,
  subtitle,
  description,
  sideMenu,
  currentPath,
  children,
}: SubPageLayoutProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} description={description} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-text-muted/80 tracking-wide mb-12">
          <Link href="/" className="hover:text-foreground transition-colors">HOME</Link>
          <span className="text-border-color">/</span>
          <Link href={categoryHref} className="hover:text-foreground transition-colors uppercase">{category}</Link>
          <span className="text-border-color">/</span>
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Side navigation */}
          <aside className="lg:w-60 shrink-0">
            <div className="sticky top-28">
              <p className="text-[12px] font-semibold tracking-[0.1em] text-accent uppercase mb-4">{category}</p>
              <div className="w-6 h-px bg-accent/60 mb-5" />
              <nav className="flex flex-col gap-0.5">
                {sideMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2.5 text-[13px] transition-colors border-l-2 ${
                      currentPath === item.href
                        ? "border-accent text-foreground font-medium bg-section-bg/60"
                        : "border-transparent text-text-muted hover:border-border-color hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </>
  );
}

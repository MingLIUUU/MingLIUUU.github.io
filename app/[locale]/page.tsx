export async function generateStaticParams() {
  const locales = ['en', 'zh']; // Define all locales you want to statically export

  return locales.map((locale) => ({
    locale,
  }));
}

// Page component for dynamic locale
export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <div>
      <h1>Locale: {locale}</h1>
      <p>This is the page for locale: {locale}</p>
    </div>
  );
}
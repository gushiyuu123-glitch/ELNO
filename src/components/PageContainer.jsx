function PageContainer({ children, className = "" }) {
  return (
    <section
      className={`isolate overflow-x-hidden animate-page-fade ${className}`}
    >
      {children}
    </section>
  );
}

export default PageContainer;
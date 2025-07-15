export default function PageHeader({ title, caption, className = "", variant = "default" }) {
  const variants = {
    default: {
      container: "text-center py-16",
      title: "text-4xl md:text-5xl font-bold text-[#6B4F4E] mb-6 leading-tight",
      caption: "text-lg md:text-xl text-[#6B4F4E] max-w-3xl mx-auto"
    },
    hero: {
      container: "text-center py-16 pt-32",
      title: "text-5xl md:text-7xl  text-[#6B4F4E] mb-8 leading-tight",
      caption: "text-xl md:text-2xl text-[#6B4F4E] max-w-4xl mx-auto"
    },
    compact: {
      container: "text-center py-12",
      title: "text-3xl md:text-4xl font-bold text-[#6B4F4E] mb-4 leading-tight",
      caption: "text-base md:text-lg text-[#6B4F4E] max-w-2xl mx-auto"
    },
    left: {
      container: "text-left py-16",
      title: "text-4xl md:text-5xl font-bold text-[#6B4F4E] mb-6 leading-tight",
      caption: "text-lg md:text-xl text-[#6B4F4E] max-w-3xl"
    }
  };

  const styles = variants[variant] || variants.default;

  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>
        {title}
      </h1>
      {caption && (
        <p className={styles.caption}>
          {caption}
        </p>
      )}
    </div>
  );
}

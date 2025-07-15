export default function SectionHeader({
  title,
  caption,
  className = "",
  titleClassName = "",
  captionClassName = "",
  variant = "default",
  alignment = "center"
}) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const variants = {
    default: {
      title: "text-3xl md:text-4xl font-bold text-[#6B4F4E] mb-4 leading-tight",
      caption: "text-lg text-[#6B4F4E]"
    },
    large: {
      title: "text-4xl md:text-5xl font-bold text-[#6B4F4E] mb-6 leading-tight",
      caption: "text-xl text-[#6B4F4E]"
    },
    small: {
      title: "text-2xl md:text-3xl font-bold text-[#6B4F4E] mb-3 leading-tight",
      caption: "text-base md:text-lg text-[#6B4F4E]"
    },
    feature: {
      title: "text-2xl font-bold text-[#6B4F4E] mb-2",
      caption: "text-[#6B4F4E] leading-relaxed"
    }
  };

  const styles = variants[variant] || variants.default;
  const alignClass = alignmentClasses[alignment] || alignmentClasses.center;

  return (
    <div className={`${alignClass} ${className}`}>
      <h2 className={`${styles.title} ${titleClassName}`}>
        {title}
      </h2>
      {caption && (
        <p className={`${styles.caption} ${captionClassName}`}>
          {caption}
        </p>
      )}
    </div>
  );
}

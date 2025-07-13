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
      title: "text-3xl md:text-4xl font-bold text-[#715482] mb-4 leading-tight",
      caption: "text-lg text-[#715482]"
    },
    large: {
      title: "text-4xl md:text-5xl font-bold text-[#715482] mb-6 leading-tight",
      caption: "text-xl text-[#715482]"
    },
    small: {
      title: "text-2xl md:text-3xl font-bold text-[#715482] mb-3 leading-tight",
      caption: "text-base md:text-lg text-[#715482]"
    },
    feature: {
      title: "text-2xl font-bold text-[#715482] mb-2",
      caption: "text-[#715482] leading-relaxed"
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

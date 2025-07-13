import PageHeader from '../components/common/PageHeader';
import SectionHeader from '../components/common/SectionHeader';

export default function ComponentExamples() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">

      {/* Example 1: Hero page header */}
      <PageHeader
        title="Component Examples"
        caption="Explore different ways to use the PageHeader and SectionHeader components"
        variant="hero"
      />

      <div className="max-w-6xl mx-auto px-8 space-y-16 pb-20">

        {/* Example 2: Default page header */}
        <PageHeader
          title="Default Page Header"
          caption="This is a default variant with centered text and standard sizing"
          variant="default"
        />

        {/* Example 3: Compact page header */}
        <PageHeader
          title="Compact Header"
          caption="Smaller spacing and text sizes for less prominent sections"
          variant="compact"
        />

        {/* Example 4: Left-aligned header */}
        <PageHeader
          title="Left Aligned Header"
          caption="Sometimes you need left alignment for better content flow"
          variant="left"
        />

        {/* Example 5: Section headers with different variants */}
        <div className="space-y-12">
          <SectionHeader
            title="Large Section Header"
            caption="Use this for major sections within a page"
            variant="large"
          />

          <SectionHeader
            title="Default Section Header"
            caption="Standard size for regular sections"
            variant="default"
          />

          <SectionHeader
            title="Small Section Header"
            caption="Compact version for subsections"
            variant="small"
          />
        </div>

        {/* Example 6: Feature cards using SectionHeader */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="Feature Card 1"
              caption="Perfect for feature cards with left-aligned content that flows naturally"
              variant="feature"
              alignment="left"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="Feature Card 2"
              caption="Another example showing consistent styling across multiple cards"
              variant="feature"
              alignment="left"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <SectionHeader
              title="Feature Card 3"
              caption="The feature variant is designed specifically for this use case"
              variant="feature"
              alignment="left"
            />
          </div>
        </div>

        {/* Example 7: Custom styling with additional classes */}
        <SectionHeader
          title="Custom Styled Header"
          caption="You can add custom classes for additional styling when needed"
          variant="default"
          className="bg-white rounded-2xl p-8 shadow-sm"
          titleClassName="text-purple-600"
          captionClassName="text-gray-600"
        />

        {/* Example 8: No caption */}
        <SectionHeader
          title="Title Only Header"
          variant="large"
        />

      </div>
    </div>
  );
}

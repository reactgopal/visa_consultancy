import { scrollToSection } from "../../utils/scrollUtils";

/**
 * TableOfContents component for displaying clickable table of contents.
 * @param {Array} contents - Array of content items with id and title.
 */
const TableOfContents = ({ contents }) => {
  if (!contents?.length) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand mb-5">Table of Contents</h2>
      <ul className="space-y-2 bg-gray-50 p-6 rounded">
        {contents.map((content) => (
          <li key={content?.id} className="flex items-start text-gray-700">
            <span className="mr-3">⇨</span>
            <span
              onClick={() => scrollToSection(`section-${content.id}`)}
              className="underline hover:text-brand cursor-pointer"
            >
              {content?.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;

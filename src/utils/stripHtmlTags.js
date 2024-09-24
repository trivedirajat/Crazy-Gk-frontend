import React from "react";
import DOMPurify from "dompurify";
export function stripHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export function renderHtmlContent(html) {
  return DOMPurify.sanitize(html);
}

const HtmlRenderer = ({ htmlContent }) => {
  const sanitizedHtml = renderHtmlContent(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default HtmlRenderer;

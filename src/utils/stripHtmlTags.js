import React from "react";
import DOMPurify from "dompurify";
export function stripHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

export function renderHtmlContent(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const sanitizedHtml = DOMPurify.sanitize(doc.body.innerHTML || ""); 
  return sanitizedHtml;
}

const HtmlRenderer = ({ htmlContent }) => {
  const convertedHtml = renderHtmlContent(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: convertedHtml }} />;
};

export default HtmlRenderer;

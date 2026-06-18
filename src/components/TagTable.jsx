import React, { useEffect, useState } from "react";

const TagTable = ({ api_url }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tag`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        setTags(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, [api_url]);

  if (loading) {
    return <div>Loading tags...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tags.length) {
    return <div>No tags found.</div>;
  }

  // Dynamically get column names from first object
  const columns = Object.keys(tags[0]);

  return (
    <div>
      <h2>Tags</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tags.map((tag, rowIndex) => (
            <tr key={tag.id || rowIndex}>
              {columns.map((column) => (
                <td key={column}>
                  {String(tag[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TagTable;
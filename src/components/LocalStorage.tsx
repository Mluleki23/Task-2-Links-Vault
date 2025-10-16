import { useState, useEffect } from "react";

interface LinkItem {
  id: number;
  tag: string;
  title: string;
  url: string;
  description: string;
}

export default function LocalStorage() {
  const [links, setLinks] = useState<LinkItem[]>([]);

  // Load saved links from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("linksVault");
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h2>Saved Links</h2>
      {links.length === 0 ? (
        <p>No links saved yet.</p>
      ) : (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <strong>{link.title}</strong> - {link.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

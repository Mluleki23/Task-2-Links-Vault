import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import SearchBar from "./components/SearchBar";

interface LinkItem {
  id: number;
  tag: string;
  title: string;
  url: string;
  description: string;
}

export default function LinksTable() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [form, setForm] = useState({
    tag: "",
    title: "",
    url: "",
    description: "",
  });
  const [editId, setEditId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Load links from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("linksVault");
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("linksVault", JSON.stringify(links));
  }, [links]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveLink = () => {
    if (!form.tag || !form.title || !form.url) return;

    if (editId !== null) {
      setLinks((prev) =>
        prev.map((l) => (l.id === editId ? { ...l, ...form } : l))
      );
      alert("Link updated successfully!"); // ✅ alert for update
      setEditId(null);
    } else {
      setLinks((prev) => [...prev, { id: Date.now(), ...form }]);
      alert("Link added to localStorage!"); // ✅ alert for add
    }

    setForm({ tag: "", title: "", url: "", description: "" });
  };

  const editLink = (id: number) => {
    const link = links.find((l) => l.id === id);
    if (!link) return;
    setForm({
      tag: link.tag,
      title: link.title,
      url: link.url,
      description: link.description,
    });
    setEditId(id);
  };

  const deleteLink = (id: number) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
    alert("Link deleted!"); // ✅ alert for delete
  };

  const filteredLinks = links.filter((l) => {
    const q = searchTerm.toLowerCase();
    return (
      l.title.toLowerCase().includes(q) ||
      l.tag.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="links-table-container">
      {/* Header styled like footer */}
      <div className="link-header">
        <h1>Add Link</h1>
      </div>

      <SearchBar onSearch={setSearchTerm} />

      <div className="form-section">
        <Input text="Tag" value={form.tag} onChange={handleChange} />
        <Input text="Title" value={form.title} onChange={handleChange} />
        <Input text="Url" value={form.url} onChange={handleChange} />
        <Input
          text="Description"
          value={form.description}
          onChange={handleChange}
        />
        <button className="btn btn-green" onClick={saveLink}>
          {editId !== null ? "Update" : "Save"}
        </button>
      </div>

      {filteredLinks.length > 0 && (
        <table className="links-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLinks.map((link) => (
              <tr key={link.id}>
                <td>{link.tag}</td>
                <td>{link.title}</td>
                <td>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.url}
                  </a>
                </td>
                <td>{link.description}</td>
                <td>
                  <button
                    className="btn btn-green"
                    onClick={() => editLink(link.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => deleteLink(link.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

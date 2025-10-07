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
  const [addedHeading, setAddedHeading] = useState(""); // ✅ heading-style message

  useEffect(() => {
    const stored = localStorage.getItem("linksVault");
    if (stored) setLinks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("linksVault", JSON.stringify(links));
  }, [links]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveLink = () => {
    if (!form.tag || !form.title || !form.url) {
      alert("Incorrect submission: Tag, Title, and URL are required.");
      return;
    }

    try {
      new URL(form.url);
    } catch {
      alert(
        "Incorrect URL format. Please enter a valid URL (e.g., https://example.com)."
      );
      return;
    }

    if (editId !== null) {
      setLinks((prev) =>
        prev.map((l) => (l.id === editId ? { ...l, ...form } : l))
      );
      setAddedHeading("Updated Link:");
      alert(`Link updated successfully!\n\nTitle: ${form.title}\nURL: ${form.url}`);
      setEditId(null);
    } else {
      setLinks((prev) => [...prev, { id: Date.now(), ...form }]);
      setAddedHeading("Added Link:");
      alert(`Link added successfully!\n\nTitle: ${form.title}\nURL: ${form.url}`);
    }

    setForm({ tag: "", title: "", url: "", description: "" });

    // Remove heading after 3 seconds
    setTimeout(() => setAddedHeading(""), 3000);
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this link?"
    );
    if (!confirmDelete) return;
    setLinks((prev) => prev.filter((l) => l.id !== id));
    setAddedHeading("Deleted Link:");
    setTimeout(() => setAddedHeading(""), 3000);
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
      {/* Search Bar */}
      <SearchBar onSearch={setSearchTerm} />

      {/* Add Link Section */}
      <div className="add-link-section">
        <h2 style={{ marginBottom: "0.5rem" }}>Add a new link here:</h2>
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
      </div>

      {/* ✅ Heading displayed like “Add a new link here” */}
      {addedHeading && (
        <h2 style={{ textAlign: "center", margin: "1rem 0", color: "#28a745" }}>
          {addedHeading}
        </h2>
      )}

      {/* Links Table */}
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
                  <div className="action-buttons">
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

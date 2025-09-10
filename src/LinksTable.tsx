import React from "react";

export default function LinksTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td>
          <td>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://google.com
            </a>
          </td>
          <td>Search engine</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>GitHub</td>
          <td>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com
            </a>
          </td>
          <td>Code hosting</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

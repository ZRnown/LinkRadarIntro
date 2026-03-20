import React from 'react'

export function SpecsTable({ rows }) {
  return (
    <table className="specs-table">
      <thead>
        <tr>
          <th>规模</th>
          <th>账号数参考</th>
          <th>推荐配置</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.size}>
            <td>{row.size}</td>
            <td>{row.accounts}</td>
            <td>{row.specs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

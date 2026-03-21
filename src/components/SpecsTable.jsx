import React from 'react'

export function SpecsTable({
  headers = ['规模', '账号数参考', '推荐配置'],
  rows,
}) {
  return (
    <table className="specs-table">
      <thead>
        <tr>
          <th>{headers[0]}</th>
          <th>{headers[1]}</th>
          <th>{headers[2]}</th>
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

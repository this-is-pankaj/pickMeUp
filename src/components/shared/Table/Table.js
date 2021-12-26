const Table = ({theads, tableId, tbodys, rowClick}) => {
  const handleClick = (row) => {
    if(rowClick) {
      rowClick(row[1]);
    }
  };
  return (
    <div className="table-responsive">  
      <table className="table">
        <thead>
          <tr className="text-center">
            {
              theads.map((h, idx) => <th key={`${tableId}_th-${idx}`} className="table-head">{h}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            tbodys.map((t, idx) => {
              return (
                <tr
                  key={`${tableId}_tr-${idx}`}
                  className={["text-center", rowClick? 'clickable': ''].join(' ')}
                  onClick={() => handleClick(t)}
                >
                  {
                    t.map((d) => {
                      return (
                        <td className="table-cell">{d}</td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};

export default Table;
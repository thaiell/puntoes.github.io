


const DataTable = ({ columns, children }) => {
    return (
        
                
<table>     
    <thead>
        <tr className="bg-gray-300">
            {columns.map((col, index) => (
                <th className="h-10 text-left" key={index}>
                    {col}
                </th>
            ))}
        </tr>

    </thead>         
    <tbody>

        { children }
                        
    </tbody>
</table>
             

    )
}
export default DataTable
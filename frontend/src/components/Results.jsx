import React from "react";

function Results({ dadosFiltrados, selecionadaChaves, cliqueItem }) {
    
    return (
        <ul className="list-group">
            {dadosFiltrados.map(item => (
                <li
                key={item.id}
                className="list-group-item list-group.item-action"
                onClick={() => cliqueItem(item)} >
                    {selecionadaChaves.map(key => (
                        <span key={key} className='item-field'>
                            {item[key]};
                        </span>
                    ))}
                </li>
            ))}

        </ul>
    )
}

export default Results;

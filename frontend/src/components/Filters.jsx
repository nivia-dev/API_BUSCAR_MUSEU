import React from 'react'

function Filters({ selecionadaChaves, mudancaCheckbox, setBuscaTermo}) {
    const chavesDisponiveis = ['UF', 'Município', 'Nome do Museu'];

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Filtros</h5>
                {chavesDisponiveis.map(key => (
                    
                    <label className='form-check-label' key={key} >
                        <input
                        className='form-check-input'
                        type="checkbox"
                        checked={selecionadaChaves.includes(key)}
                        onChange={() => mudancaCheckbox(key)}
                        />
                        {key}
                    </label>
                ))}
                <div className='row mb-3'>
                    <div className='col'>
                        <input
                        className='form-control'
                        type="text"
                        placeholder='Pesquisar...'
                        onChange={e => {setBuscaTermo(e.target.value);
                            console.log('Termo de busca:', e.target.value)}}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Filters;

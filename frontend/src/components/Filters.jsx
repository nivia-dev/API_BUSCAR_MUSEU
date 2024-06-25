function Filters({ selecionadaChaves, mudancaCheckbox, setBuscaTermo, ufs, setUfSelecionado, ufSelecionado, municipios, setMunicipioSelecionado, municipioSelecionado }) {
    const chavesDisponiveis = ['Nome do Museu', 'UF'];

    // Função para ordenar e colocar linhas vazias no final
    const ordenarLista = (lista) => {
        return lista.sort((a, b) => {
            if (!a) return 1;
            if (!b) return -1;
            return a.localeCompare(b);
        });
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Filtros</h5>
                {chavesDisponiveis.map(key => (
                    <div key={key}>
                        <label className='form-check-label'>
                            <input
                                className='form-check-input'
                                type="checkbox"
                                checked={selecionadaChaves.includes(key)}
                                onChange={() => mudancaCheckbox(key)}
                            />
                            {key}
                        </label>
                        {key === 'UF' && selecionadaChaves.includes(key) && (
                            <select
                                className='form-control mt-2'
                                value={ufSelecionado}
                                onChange={(e) => setUfSelecionado(e.target.value)}
                            >
                                <option value=''>Selecione o UF</option>
                                {ordenarLista(ufs).map(uf => (
                                    <option key={uf} value={uf}>{uf || 'Não especificado'}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
                {selecionadaChaves.includes('Nome do Museu') && (
                    <div className='row mb-3'>
                        <div className='col'>
                            <input
                                className='form-control'
                                type="text"
                                placeholder='Pesquisar...'
                                onChange={e => setBuscaTermo(e.target.value)}
                            />
                        </div>
                    </div>
                )}
                {ufSelecionado && (
                    <div className='row mb-3'>
                        <div className='col'>
                            <select
                                className='form-control mt-2'
                                value={municipioSelecionado}
                                onChange={(e) => setMunicipioSelecionado(e.target.value)}
                            >
                                <option value=''>Selecione o Município</option>
                                {ordenarLista(municipios).map(municipio => (
                                    <option key={municipio} value={municipio}>{municipio || 'Não especificado'}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Filters;
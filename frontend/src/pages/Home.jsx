import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import Results from '../components/Results';
import Details from '../components/Details';

function Home() {
    const [buscaTermo, setBuscaTermo] = useState('');
    const [selecionadaChaves, setSelecionadaChaves] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [selecionadoItem, setSelecionadoItem] = useState(null);
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(20);

    useEffect(() => {
        fetchData();
    }, [pagina, buscaTermo, selecionadaChaves]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/museus', {
             params: {
                pagina,
                limite
             }   
            });
            const data = response.data;
            const resultados = data.filter(item =>
                selecionadaChaves.some(key =>
                  item[key] && item[key].toString().toLowerCase().includes(buscaTermo.toLowerCase())  
                )
            );
            setDadosFiltrados(resultados);
        } catch (error) {
            console.error('Erro ao buscar dados', error)
        }
    };

    const mudancaCheckbox = (key) => {
        setSelecionadaChaves(prevkeys =>
            prevkeys.includes(key) ? prevkeys.filter(k =>
                k !== key) : [...prevkeys, key]
        );
    };

    const cliqueItem = (item) => {
        setSelecionadoItem(item);
    };

    const mudancaPagina = (novaPagina) => {
        if (novaPagina > 0) {
            setPagina(novaPagina);
        }
    };
    
    return (
        <div className='container mt-4'>
            <div className='row'>
                
                <div className='col-md-4'>
                    <Filters
                        selecionadaChaves={selecionadaChaves}
                        mudancaCheckbox={mudancaCheckbox}
                        setBuscaTermo={setBuscaTermo}
                    />
                </div>

                <div className='col-md-8'>
                    <Results
                    dadosFiltrados={dadosFiltrados}
                    selecionadaChaves={selecionadaChaves}
                    cliqueItem={cliqueItem} />
                </div>

            </div>

            <div className='mt-4'>
                <button onClick={() => mudancaPagina(pagina - 1)} disabled={pagina === 1}>
                    Página Anterior
                </button>
                <button onClick={() => mudancaPagina(pagina + 1)}>
                    Próxima Página
                </button>
            </div>

            {selecionadoItem && (
                <div className='row mt-4'>
                    <div className='col'>
                        <Details item={selecionadoItem} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;

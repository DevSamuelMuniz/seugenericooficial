import React, { useState } from 'react';
import './Pesquisa.css';
import magnify from '../../assets/search-magnify.svg';
import axios from 'axios';

function Pesquisa() {
    const [medicamento, setMedicamento] = useState('');

    const handleInputChange = (event) => {
        setMedicamento(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://localhost:5000/getGeneric/${medicamento}`);
            console.log(response.data); // Aqui você pode manipular os dados recebidos do backend
            // Faça algo com os dados recebidos, como atualizar o estado do componente ou exibi-los na interface
        } catch (error) {
            console.error('Erro ao buscar medicamento:', error);
        }
    };

    return (
        <div className="pesquisa">
            <div className="container-pesquisa">
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            id='medicamento'
                            className='barra-pesquisa'
                            type='text'
                            placeholder='Pesquisar medicamento'
                            value={medicamento}
                            onChange={handleInputChange}
                        />
                        <button type='submit' className='input-img'>
                            <img src={magnify} alt='Search' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Pesquisa;

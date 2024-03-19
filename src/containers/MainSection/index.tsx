import { useState } from 'react';
import {SelectorDiv} from './styles'
import {FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';

const Selector = () => {

  const [turnoSelecionado, setTurnoSelecionado] = useState(0)

  const options = [
    { value: 0, turno: '7-15' },
    { value: 1, turno: '15-23' },
    { value: 2, turno: '23-07' },
    { value: 3, turno: '7-15 domingo' },
    { value: 4, turno: '7-15 segunda' },
  ];

function mostraRotina(ValorRecebido: number) {

  const [tarefasFeitas, setTarefasFeitas] = useState(0);

    const rotinas = [
        { value: 0, rotina: ['PCO', 'Análise dos tanques', 'Inspeção de equipamentos', 'Preencher planilha de produtos químicos'] },
        { value: 1, rotina: ['PCO', 'Análise dos tanques', 'Inspeção de equipamentos', 'Preencher planilha de produtos químicos' , 'leitura dos equipamentos'] },
        { value: 2, rotina: ['PCO', 'Análise dos tanques', 'Inspeção de equipamentos', 'Preencher planilha de produtos químicos' ,'Contagem de produtos químicos', 'Enviar relatório de produção'] },
        { value: 3, rotina: ['PCO', 'Análise dos tanques', 'Inspeção de equipamentos', 'Preencher planilha de produtos químicos', 'Planilha dos hidrantes'] },
        { value: 4, rotina: ['PCO', 'Análise dos tanques', 'Inspeção de equipamentos', 'Preencher planilha de produtos químicos', 'Checklist das bombas'] }
    ]

        return <>
        {rotinas[ValorRecebido].rotina.map((rotina, index) => (
            <div key={index}>
              <FormControlLabel   onChange={(e) => {
              e.target.checked ? setTarefasFeitas(tarefasFeitas + 1) : setTarefasFeitas(tarefasFeitas - 1);
            }} control={<Switch />} label={rotina} />
            </div>
          ))}
          <input className='range' value={tarefasFeitas} type="range" min={0} max={rotinas[ValorRecebido].rotina.length}/>
          {rotinas[ValorRecebido].rotina.length == tarefasFeitas ? <p>Parabéns! Realizou todas as rotinas do turno</p> : ''}
          <button onClick={() => setTarefasFeitas(0)}>Resetar</button>
        </>
}

  return (
    <SelectorDiv>
        <h2>Escolha seu turno</h2>
    <select  value = {turnoSelecionado} onChange={(e) => setTurnoSelecionado(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.turno}
        </option>
      ))}
    </select>
    <div className='rotinas'>
    {
      mostraRotina(turnoSelecionado)
    }
    </div>
    </SelectorDiv>

  );
};

export default Selector;

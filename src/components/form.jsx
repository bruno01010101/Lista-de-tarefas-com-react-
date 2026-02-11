import PropTypes from 'prop-types';

export default function Form({handleSubmit, mudou, novaTarefa}){     // componente deve ter nome maiúsculo
    return(
        <form action="#" className="form" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => mudou(e)} value={novaTarefa}/>
            <button type="submit" >+</button>
      </form>
    )
}

Form.propTypes = {  // tem que ser esse nome certinho, senão react ignora
    handleSubmit: PropTypes.func.isRequired,
    mudou: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string
}
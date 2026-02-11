import {FaEdit, FaWindowClose} from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function main({tarefas, handleDelete, handleEdit}){
    return(
        <ul className="tarefas">
            {tarefas.map((v, i) => {
                return (
                <li key={i}>
                    {v}
                    <div>
                        <span className="delete" onClick={() => handleDelete(i)}><FaWindowClose/></span>
                        <span className="edit" onClick={() => handleEdit(i)}><FaEdit/></span>
                    </div>
                </li> )
            })}
        </ul>
    )
}

main.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    tarefas: PropTypes.array
}
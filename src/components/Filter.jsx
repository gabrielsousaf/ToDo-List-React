import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter, setSort }) => {

    Filter.propTypes = {
        filter: PropTypes.string.isRequired,
        setFilter: PropTypes.func.isRequired,
        setSort: PropTypes.func.isRequired
    };
      
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Des</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
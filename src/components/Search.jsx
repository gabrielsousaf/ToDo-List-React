import PropTypes from 'prop-types';

const Search = ({search, setSearch}) => {
  Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  };

  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input
         type="text"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         placeholder="Digite para pesquisar..."
         />
    </div>
  )
}

export default Search
import { Container } from './styles';
import { GrSearch } from 'react-icons/gr';

function SearchBar() {
  return (
    <Container>
      <GrSearch />
      <input type="text" name="searchBar" id="" placeholder='Praia do Arrombado'/>
    </Container>
  );
};

export default SearchBar;

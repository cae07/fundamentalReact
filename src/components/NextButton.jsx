import { useLocation, useNavigate } from 'react-router-dom';

function NextButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const actualLocation = location.pathname;
    const actualPage = actualLocation.replace('/', '');
    const route = Number(actualPage) + 1 === 4 ? '/' : `/${Number(actualPage) + 1}`;
    navigate(route);
  }

  return(
    <button onClick={ handleClick } type="button">
      próxima página
    </button>
  )
}

export default NextButton;

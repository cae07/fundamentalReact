import { useLocation, useNavigate } from 'react-router-dom';


function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const actualLocation = location.pathname;
    const actualPage = actualLocation.replace('/', '');

    const page = Number(actualPage) - 1 === 0 ? '/' : `/${Number(actualPage) - 1}`;

    const route = actualLocation === '/' ? '/3' : page
    navigate(route);
  }

  return(
    <button onClick={ handleClick } type="button">
      página anterior
    </button>
  )
}

export default BackButton;

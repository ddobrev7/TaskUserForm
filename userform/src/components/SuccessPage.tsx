import { useLocation, useNavigate } from 'react-router-dom';

interface SuccessPageProps {
  uname?: string;
}

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { uname } = location.state || {};

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='success-page-message'>
      <a className='success-page-link-style' href="https://mswjs.io/docs/network-behavior/rest">mswjs.io</a>
      <div className="rectangle8">
        <div>Hi, {uname ? uname : "Guest"}!</div> { }
        <div className="group_48095935">
          <button onClick={handleClick} className="back_rectangle_style back_text_style">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

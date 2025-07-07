
import { AppBar, Toolbar,  Button, Box } from '@mui/material'; 
// import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link, useNavigate } from 'react-router-dom';
const Component = styled(AppBar)`
  background: linear-gradient(135deg, rgba(15, 32, 39, 0.9), rgba(32, 58, 67, 0.9), rgba(44, 83, 100, 0.9));
  color: #f0f0f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  margin: 0;
`;
const styles = {
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logo: {
    height: '40px',
    width: '40px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3f51b5',
    fontFamily: 'Courier New, monospace',
  },
};


const Container = styled(Toolbar)`
  justify-content: space-between;
  padding: 0 24px;
  min-height: 64px; /* Ensures no extra height */
  margin: 0;
  font-family: 'Segoe UI', sans-serif;

  & > a {
    margin: 0 8px;
    color: #f0f0f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #90caf9;
  }
}

  & > img {
    height: 80px;
    margin-right: 16px;
  }
`;


const Header = ({ minimal }) => {
  const navigate = useNavigate();

  const logout = async () => navigate('/account');

return (
  <Component>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* <img src="" alt="NodeBoard Logo" style={{ height: '40px' }} /> */}
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', fontFamily: 'monospace' }}>
          &lt;M/&gt;
        </span>
      </div>

      {minimal ? (
        <Button
          variant="outlined"
          onClick={() => navigate('/account')}
          style={{
            borderColor: '#ffffff',
            color: '#ffffff',
            fontWeight: '600',
          }}
        >
          Sign Up
        </Button>
      ) : (
        <>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
          <Link to='/account'>LOGOUT</Link>
        </>
      )}
    </Container>
  </Component>
);

};


export default Header;

import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
import { RMV } from '../redux/actions/action';
import { useDispatch } from 'react-redux';


const Header = () => {
    const[price, setPrice] = useState(0)
    console.log(price)
  const getdata = useSelector((state) => state.cartreducer.cart)
  console.log(getdata)
  const dispatch = useDispatch();
  const rmv = (id) => {
    dispatch(RMV(id))
  }
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const total = ()=>{
    let price = 0;
    getdata.map((ele)=>{
      price = ele.price * ele.qnty + price
    })
    setPrice(price)
  }
  useEffect(() => {
    total()
  }, [total])
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="text-decoration-none text-dark mx-3">Add to Cart</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className="text-decoration-none text-dark">Home</NavLink>
          </Nav>
          
        </Navbar.Collapse>
        <Badge badgeContent={getdata.length} color="primary"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <i className="fa-solid fa-cart-shopping"></i>
</Badge>
        
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className='card_details d-flex justify-content-center' style={{width:"16rem"}}>
        {
            getdata.length ? <table className='table '>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Restaurant</th>
                </tr>
            </thead>
            <tbody>
                { getdata.map(e => {
                    return(
                        <tr>
                        <td>
                            <NavLink onClick={handleClose} to={`/cart/${e.id}`}><img src={e.imgdata } className='img-fluid' style={{width:"5rem", height:"5rem"}} alt=''/></NavLink>
                        </td>
                        <td>
                            <p>{e.rname}</p>
                            <p>Price: {e.price}</p>
                            <p>Quantity: {e.qnty}</p>
                            <p>Remove : <i onClick={() => rmv(e.id)} className='fas fa-trash text-danger'></i></p>
                        </td>
                    </tr>   
                    )
                })
                }
                   
            </tbody>
        </table>:  <div className='card-details'>
            <p>your cart is empty</p>
            <i className='fa-solid fa-cart-shopping'></i>
            <i className='fa fa-close' onClick={handleClose}></i>
            </div>
        }
            
        </div>
        <p className='text-center'>Total : {price}</p>
      </Menu>
    </Navbar>
    </div>
  )
}

export default Header

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RMV, ADD, RMVIND } from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const CardsDetails = () => {
  const[data, setData] = useState([] )
  const {id} = useParams()
  const dispatch = useDispatch();
  const history = useNavigate()

  const send = (e) => {
    dispatch(ADD(e));
    
  }
  const rmv = (id) => {
    dispatch(RMV(id))
    history("/")
  }
  const rmvind = (item) => {
    dispatch(RMVIND(item))
  }
  //console.log(id)
  const getdata = useSelector((state) => state.cartreducer.cart)
  //console.log(getdata)
  const compare = () => {
    let comparedata = getdata.filter(e => {
      return e.id == id
    })
    setData(comparedata)
  }
  
  useEffect(() => {
    compare()
  }, [id])
  return (
    <div>
     <div className='container'>
     <h3 className='text-center'>Add to cart details</h3>
       {
        data.map(ele => {
          return(
            <>
             <div className='row d-flex justify-content-between'>
           <div className='img-details col-6'>
            <img className='img-fluid' src={ele.imgdata} />
           </div>
           <div className='details col-6'>
              <table>
                <tr>
                  <td><p><strong>Restaurant</strong>:{ele.rname}</p>
                  <p><strong>Price</strong>:{ele.price}</p>
                  <p><strong>Dishes</strong>:{ele.address}</p>
                  <p><strong>Total</strong>:{ele.price * ele.qnty}</p>
                  <div>
                    <button className='btn btn-primary' onClick={ele.qnty <=1 ? () => rmv(ele.id) : () => rmvind(ele)}>-</button>
                    <span className='px-2'>{ele.qnty}</span>
                    <button className='btn btn-primary' onClick={() => send(ele)}>+</button>
                  </div>
                  </td>
                  <td>
                  <p><strong>Rating</strong> <span className='bg-success text-white'>{ele.rating} *</span></p>
                  <p><strong>Over View</strong>:{ele.somedata}</p>
                  <p><strong>Remove</strong><i className='fa fa-trash text-danger' onClick={() => rmv(ele.id)}></i></p>
                  </td>
                  
                </tr>
                 
              </table>
           </div>

            
        </div>
            </>
          )
        })
       }
          
        </div>
      </div>
    
  )
}

export default CardsDetails

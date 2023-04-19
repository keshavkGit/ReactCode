import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')

  let num = 1






  function apiFunction() {


    axios.get(`https://dummyjson.com/products `)
      .then((res) =>
        //  console.log(res?.data?.data,"(res?.data"))
        setData(res?.data?.products)
      )

  }

  useEffect(() => {

    apiFunction();

  }, [])




  const addToCart = ((val, i, n) => {

    console.log(val, i, n, "value")
    setShow(true)

    let newVal = {
      title: val?.title,
      qty: 1,
      price: val?.price,
      total: val?.price,
      offeredPrice: Math.floor(((val?.price) * (val?.discountPercentage)) / 100),
      discountedPriceSum:  Math.floor(((val?.price) * (val?.discountPercentage)) / 100)
      //  (val?.price - Math.floor(((val?.price) * (val?.discountPercentage)) / 100))
    }

    let newData = [...data2]
    newData.push(newVal)

    console.log(newData, "newVal")
    setData2(newData)


  })


  const changeToCart = ((val, i, n) => {

    console.log(val, i, n, "getvalue")



    if (data2.length > 0) {

      if (n == 0) {
        let newData = [...data2]
        newData.splice(i, 1)

        console.log(newData, "splice")
        setData2(newData)

      }
      else {
        let newData = [...data2]

        console.log(newData, "newData")
        newData[i] = {
          ...newData[i], title: val?.title, qty: n, price: val?.price,
          total: val?.price * n,
          offeredPrice: val?.offeredPrice,
          discountedPriceSum: val?.offeredPrice * n
        }

        setData2(newData)
      }

    }

  })

  const priceTotal = () => {
    let sum = 0
    data2.forEach((val) => {
      sum = sum + val?.total
    })
    return sum
  }

  const discountTotal = () => {

    let discount = 0
    data2.forEach((val) => {
      discount = discount + val?.discountedPriceSum
    })
    return discount
  }


  const grandTotal = (() => {

    let finalTotal = priceTotal() - discountTotal()

    return finalTotal
  })

  const showItem = ((val) => {

    setName(val?.title)
    setTimeout(() => {
      setName('')
    }, 3000);
  })


  return (

    <div style={{ display: 'flex', flexDirection: 'row', }}>

      <div>
        <p style={{ margin: 12, marginLeft: 200, textAlign: 'left' }}>
          <strong  >All Items</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {name} </p>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'left', width: 800 }}>



          {
            data.map((val, index) => {
              // console.log(val, 'val')
              return <>


                <div
                  style={{
                    border: '2.5px solid #ebe8e8', width: 180, height: 200,
                    margin: 20,
                  }}>

                  <div style={{ width: 60, height: 30, marginTop: 0, backgroundColor: '#cfc9c9' }}>
                    {val?.discountPercentage + '%'}
                  </div>
                  <img  style={{marginLeft:20 }} height={120} width='80%' src={val.thumbnail}
                   />

                  <div style={{ height: 45, width: '100%', backgroundColor: 'whitesmoke' }}>

                    <label>{val?.title.slice(0, 20)} </label> <br />
                    <label><strike> {val?.price + ' '}</strike>  </label>

                    <label>    {' ' + Math.floor(val?.price - ((val?.price) * (val?.discountPercentage)) / 100)}

                    </label>

                    <button style={{ height: 20, marginRight: 5, float: 'right' }}
                      onClick={() => {
                        addToCart(val, index, num)
                        showItem(val)
                      }}>Add to Cart</button>

                  </div>
                </div>



              </>


            })

          }
        </div>
      </div>



      <div>


        <h4> Cart</h4>

        {show ?
          <>

            <div>

              <table style={{ border: '3px solid #ebe8e8', borderCollapse: 'collapse' }}>

                <tr style={{ backgroundColor: '#ebe8e8' }}>
                  <th style={{ width: 200, textAlign: 'left', paddingLeft: 10 }}>Items</th>
                  <th style={{ width: 100, textAlign: 'left', paddingLeft: 10 }}>Qty</th>
                  <th style={{ width: 100, textAlign: 'left', paddingLeft: 10 }}> Price</th>
                </tr>

                {data2.map((val, index) => {
                  return <tr >
                    <td style={{ paddingLeft: 10 }}>{val?.title} </td>
                    <td style={{ paddingLeft: 10 }}>
                      <button onClick={() => { changeToCart(val, index, val?.qty - 1) }}>-</button>
                      {val?.qty}
                      <button onClick={() => { changeToCart(val, index, val?.qty + 1) }}>+</button>
                    </td>
                    <td style={{ paddingLeft: 10 }}>{val?.price * val?.qty} </td>
                  </tr>
                })}



              </table>

            </div>

            <br />
            <br />
            <br />

            <div style={{ border: '3px solid #ebe8e8', paddingLeft: 10 }}>
              <p style={{ margin: 0, marginTop: 10 }}> <strong>Total</strong> </p>

              <tr>
                <td style={{ width: 200 }}>Items ({data2.length})</td>
                <td style={{ width: 100 }}>   : </td>
                <td style={{ width: 100 }}> {priceTotal()} </td>
              </tr>

              <tr>
                <td style={{ width: 200 }}>Discount </td>
                <td style={{ width: 100 }}>   : </td>
                <td style={{ width: 100 }}> {'- ' + discountTotal()} </td>
              </tr>
              <br />
              <tr style={{ backgroundColor: 'whitesmoke' }}>
                <td style={{ width: 200 }}> Grand Total </td>
                <td style={{ width: 100 }}>   : </td>
                <td style={{ width: 100 }}> {grandTotal()} </td>
              </tr>

            </div>

          </>

          : <> <h4>Cart Is Empty</h4></>}

      </div>



    </div>
  )
}
export default App;
import './App.css';
import React from 'react';
import { useState } from 'react'

function App() {

  const [totalLot, setTotalLot] = useState(1)
  const [position, setPosition] = useState('buy')
  const [optionType, setOptionType] = useState('call')
  const [expiry, setexpiry] = useState('weekly')
  const [strikeCriteria, setStrikeCriteria] = useState('strikeType')
  const [count, setCount] = useState(1)
  const [isLegAdded, setIsLegAdded] = useState(false)
  const [legData, setLegData] = useState([])
  // const [momentum, setMomentum] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const finalSubmit = (e) => {
    setIsLegAdded(false)
    setIsSubmit(true)
    e.preventDefault()
    const submit = [...legData]
    setLegData([])
    setCount(0)
    console.log(submit, "submit")
  }

  const addLeg = (e) => {
    e.preventDefault()
    console.log(totalLot, position, optionType, expiry, strikeCriteria, "totalLot")

    setCount(count + 1)
    setIsLegAdded(true)

    console.log(count, "count")
    legData.push({
      // id: count,
      lots: totalLot,
      positionType: position,
      optionType: optionType,
      ExpiryType: expiry,
      selectStrikeCriteria: strikeCriteria,
      momentumAdd: { checkbox1: false, momentum: { type: 'pointsUp', value: 0 } },
      trailAdd: {
        checkbox2: false,
        trail: {
          type: 'points',
          value: {
            instrumentMove: 0,
            stopLossMove: 0
          }
        }
      }

    })

    console.log(legData, "legdata")
  }
  const addLotValue = (data, index) => {
    console.log(index, data, "lot")
    const newData = [...legData]
    newData[index] =  { ...newData[index], lots: data };
    setLegData(newData)
  }
  // const  addLotValue = (data,id) => {
  //   const newArray = legData.map((obj, index) => {
  //     if (index === id) {
  //       return { ...obj, lots: data };
  //     } else {
  //       return obj;
  //     }
  //   });
  //   setLegData(newArray);
  // };

  const addPositionValue = (data, index) => {
    console.log(index, data, "lot")
    const newData = [...legData]
    console.log(newData,"newdata")
     newData[index] =  { ...newData[index], positionType: data };
    setLegData(newData)

  }
  const addOptionValue = (data, index) => {
    console.log(index, data, "lot")
    const newData = [...legData]
    newData[index] =  { ...newData[index], optionType: data };
    setLegData(newData)

  }
  const addExpiryValue = (data, index) => {
    console.log(index, data, "lot")
    const newData = [...legData]
    newData[index] =  { ...newData[index], ExpiryType: data };
    setLegData(newData)

  }
  const addStrikeValue = (data, index) => {
    console.log(index, data, "lot")
    const newData = [...legData]
    newData[index] =  { ...newData[index], selectStrikeCriteria: data };
    setLegData(newData)

  }

  const copyData = (index) => {
    console.log(legData[index], "getdata")

    const newData = [...legData]
    const copiedData = newData[index]
    newData.splice(index+1, 0, copiedData)
    setLegData(newData)
    // console.log(legData,"newData")
  }

  const deleteData = (index) => {

    const newData = [...legData]
    newData.splice(index, 1)
    setLegData(newData)
  }


  // const changeMomentum = (index) => {
  //   console.log(index, "index")
  //   const newMomentum = [...legData]
  //   newMomentum[index].momentumAdd.checkbox1 = !newMomentum[index].momentumAdd.checkbox1
  //   setLegData(newMomentum)

  // }
  const changeMomentum = (data, index) => {
    console.log(index, data, "index")
    const newData = [...legData]
    newData[index].momentumAdd =  { ...newData[index].momentumAdd, checkbox1: data };
    setLegData(newData)

  }

  const addMomentumType = (data, index) => {
    console.log(index, "indextype")
    const newData = [...legData]
    newData[index].momentumAdd.momentum =  { ...newData[index].momentumAdd.momentum, type: data };
    setLegData(newData)
    // console.log(legData, "moment")

  }


  const addMomentumValue = (data, index) => {
    console.log(index, "indexvalue")
    const newData = [...legData]
    newData[index].momentumAdd.momentum =  { ...newData[index].momentumAdd.momentum, value: data };
    setLegData(newData)

  }

  const changeTrail = (data,index) => {
    // console.log(index, "index")
    const newData = [...legData]
    newData[index].trailAdd =  { ...newData[index].trailAdd, checkbox2: data };
    setLegData(newData)

  }

  const addTrailType = (data, index) => {
    // console.log(index, "index")
    const newData = [...legData]
    newData[index].trailAdd.trail =  { ...newData[index].trailAdd.trail, type: data };
    setLegData(newData)
    // console.log(legData, "trail")
  }

  const addTrailValue1 = (data, index) => {
    // console.log(index, "index")
    const newData = [...legData]
    newData[index].trailAdd.trail.value =  { ...newData[index].trailAdd.trail.value, instrumentMove: data };
    setLegData(newData)
    // console.log(legData, "trail2")
  }

  const addTrailValue2 = (data, index) => {
    // console.log(index, "index")
    const newData = [...legData]
    newData[index].trailAdd.trail.value =  { ...newData[index].trailAdd.trail.value, stopLossMove: data };
  
    setLegData(newData)
  }

  return (
    <div style={{ margin: 10, padding: 10, backgroundColor: 'whitesmoke' }}>
      <form >
        <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', justifyContent: 'center' }} >

          <div style={{ margin: 10, padding: 10, }}>
            <h5 style={{ textAlign: 'center' }} >Total Lot</h5>

            <input className='headField' style={{ width: 80, height: '1.8em' }} type='number' min='1' max='100' value={totalLot} onChange={(e) => { setTotalLot(e.target.value) }} />

          </div>

          <div style={{ margin: 10, padding: 10, }}>
            <h5 style={{ textAlign: 'center' }}>Position</h5>
            <select className='headField' onChange={(e) => { setPosition(e.target.value) }}>
              <option value='buy'>Buy</option>
              <option value='sell'> Sell</option>

            </select>
          </div>
          <div style={{ margin: 10, padding: 10, }}>
            <h5 style={{ textAlign: 'center' }}>Option Type</h5>
            <select className='headField' onChange={(e) => { setOptionType(e.target.value) }}>
              <option value='call'>Call</option>
              <option value='put'>Put</option>

            </select>
          </div>
          <div style={{ margin: 10, padding: 10, }}>
            <h5 style={{ textAlign: 'center' }}>Expiry</h5>
            <select className='headField' onChange={(e) => { setexpiry(e.target.value) }}>
              <option value='weekly'>Weekly</option>
              <option value='Monthly'>Monthly</option>

            </select>
          </div>
          <div style={{ margin: 10, padding: 10, textAlign: 'center' }}>
            <h5 style={{ textAlign: 'center' }}>Select Strike Criteria</h5>
            <select className='headField' style={{ width: 150, }} onChange={(e) => { setStrikeCriteria(e.target.value) }}>
              <option value='strikeType'>Strike Type</option>
              <option value='premiumRange'> Premium Range</option>

            </select>
          </div>


        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', justifyContent: 'center' }} >
          <button className='btn' style={{ backgroundColor: '#4371b3', color: 'white' }} onClick={addLeg}> Add Leg</button>
          <button className='btn' style={{ color: '#4a6cb1', backgroundColor: 'white', }}> Cancel</button>
        </div>

      </form>

      {
        (isLegAdded) ?
          <div>
            {legData.map((val, index) => {
              console.log(legData, "val")
              return (
                <form style={{ backgroundColor: '#ece4e4', marginInline: 200, marginTop: 20, paddingTop: 20 }} >

                  <div key={index} style={{
                    // width:800,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    flexWrap: 'wrap',
                    // backgroundColor: '#f7f5f5'
                  }}>

                    <div style={{ margin: 10, padding: 10, }}>

                      <div><strong>Lots </strong>
                        <input className='headField2' type='number' min='1' max='100' value={val.lots}
                          onChange={(e) => { addLotValue(e.target.value, index) }} />

                      </div>


                    </div>
                    <div style={{ margin: 10, padding: 10, }}>

                      <div>
                        <select className='formField'value={val.positionType} onChange={(e) => { addPositionValue(e.target.value, index) }} >
                          <option value='buy' selected={val.positionType == 'buy'}  >Buy</option>
                          <option value='sell' selected={val.positionType == 'sell'}> Sell</option>

                        </select></div>

                    </div>
                    <div style={{ margin: 10, padding: 10, }}>

                      <div>
                        <select className='formField' value={val.optionType} onChange={(e) => { addOptionValue(e.target.value, index) }}>
                          <option value='call' selected={val.optionType == 'call'} >Call</option>
                          <option value='put' selected={val.optionType == 'put'} >Put</option>

                        </select>
                      </div>


                    </div>
                    <div style={{ margin: 10, padding: 10, }}>

                      <div>

                        <select className='formField'value={val.ExpiryType} onChange={(e) => { addExpiryValue(e.target.value, index) }}>
                          <option value='weekly' selected={val.ExpiryType == 'weekly'}> Weekly</option>
                          <option value='monthly' selected={val.ExpiryType == 'monthly'} >Monthly</option>

                        </select>
                      </div>


                    </div>
                    <div style={{ margin: 10, padding: 10, }}>

                      <div><strong>Select Strike </strong>

                        <select className='formField' value={val.selectStrikeCriteria} style={{ width: 150, }} onChange={(e) => { addStrikeValue(e.target.value, index) }}>
                          <option value='strikeType' selected={val.selectStrikeCriteria == 'strikeType'} >Strike Type</option>
                          <option value='premiumRange' selected={val.selectStrikeCriteria == 'premiumRange'} > Premium Range</option>

                        </select>
                      </div>


                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <img src='copy.png' alt='copy' style={{ width: 20, height: 20, cursor: 'pointer' }}
                        onClick={() => { copyData(index) }} /> <br />
                      <img src='del.jpg' alt='delete' style={{ width: 20, height: 20, cursor: 'pointer' }}
                        onClick={() => {
                          deleteData(index)
                        }} />

                    </div>


                  </div>

                  <div
                    style={{
                      display: 'flex', flexDirection: 'row', justifyContent: 'center', justifyItems: 'center',
                    }}>

                    <div style={{ margin: 10, padding: 10, }}>
                      <input type='checkbox' checked={val.momentumAdd.checkbox1} onChange={(e) => { changeMomentum(e.target.checked, index) }} /> Simple Momentum

                      <div>


                        <select className='formField'  style={{ width: 120, }} disabled={(val.momentumAdd.checkbox1) ? false : true}
                          onChange={(e) => { addMomentumType(e.target.value, index) }}
                        >
                          <option value='pointsUp' selected={'pointsUp' == val.momentumAdd.momentum.type}>Points UP</option>
                          <option value='pointsDown' selected={'pointsDown' == val.momentumAdd.momentum.type}> Points Down</option>

                        </select>
                        {/* style={{backgroundColor:'white', color:'black'}} */}

                        <input className='headField2' disabled={(val.momentumAdd.checkbox1) ? false : true} type='number' min='0' max='100'
                          value={val.momentumAdd.momentum.value}
                          onChange={(e) => { addMomentumValue(e.target.value, index) }} />
                      </div>


                    </div>
                    <div style={{ margin: 10, padding: 10, }}>
                      <input type='checkbox' checked={val.trailAdd.checkbox2} onChange={(e) => { changeTrail(e.target.checked, index) }} /> Trail SL
                      <div>

                        <select className='formField' disabled={(val.trailAdd.checkbox2) ? false : true}
                          onChange={(e) => { addTrailType(e.target.value, index) }}
                        >
                          <option value='points' selected={val.trailAdd.trail.type == 'points'}>Points </option>
                          <option value='percentage'  selected={val.trailAdd.trail.type == 'percentage'}>Percentage</option>

                        </select>

                        <input className='headField2' type='number' disabled={!(val.trailAdd.checkbox2) ? true : false} min={0} max={100}
                          value={val.trailAdd.trail.value.instrumentMove}
                          onChange={(e) => { addTrailValue1(e.target.value, index) }} />

                        <input className='headField2' type='number' disabled={!(val.trailAdd.checkbox2) ? true : false} min={0} max={100}
                          value={val.trailAdd.trail.value.stopLossMove}
                          onChange={(e) => { addTrailValue2(e.target.value, index) }} />

                      </div>


                    </div>

                  </div>


                </form>
              )


            })}


            <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', justifyContent: 'center' }} >
              <button className='btn' style={{ backgroundColor: '#4371b3', borderRadius: 0, color: 'white' }} onClick={finalSubmit}>Final Submit</button>
            </div>
          </div>
          : <> {(isLegAdded == false && isSubmit == true) ? <p style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', justifyContent: 'center' }}> Form Submitted Successfully</p> : <> </>} </>
      }
    </div>


  );
}

export default App;

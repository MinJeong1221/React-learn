import React, { useRef, useState } from 'react'
import moment from 'moment'
import 'moment-timezone'

function Moment() {
    const momentDate = moment();
    const newMomentDate = momentDate.add(1, 'week');
    const cloneNewMomentDate = newMomentDate.clone().add(1, 'week');

    const [day, setDay] = useState('');
    const birthDayRef = useRef(null);

    const handleBirthDayChange = (e) => {
        setDay(moment(e.target.value, 'YYYY-MM_DD').format('dddd'))
    }

  return (
    <div>
        <h1>Moment</h1>
        <div>Immutable Check</div>
        <div>
            {momentDate.format()}        
        </div>
        <br/>
        <div>
            {newMomentDate.format()}        
        </div>
        <br/>
        <div>
            {cloneNewMomentDate.format()}        
        </div>
        <br/>

        <div>Summer time London</div>
        <div>
            2018년 3월 일 13시에 하루 더하기:{''}
            {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
        </div>
        <div>
            2018년 3월 10일 13시에 24시간 더하기:{''}
            {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, 'hour').format()}
        </div>
        <div>Leap year Korea</div>
        <div>
            2017년 1월 1일에 1년 빼기:{''}
            {moment.tz("2017-01-01").subtract(1, 'year').format()}
        </div>
        <div>
            2017년 1월 1일에 356일 빼기:{''}
            {moment.tz("2017-01-01").subtract(365, 'day').format()}
        </div>
        <br/>

        <div>자신의 생일 요일 찾기</div>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
            <div>무슨 요일일까?</div>
            <div>{day}</div>
        </div>
        <br/>

        <div>날짜 두개 비교 해보기</div>
        <div>
            <div>2017년 1월 1일과 2020년 1월 1일은 몇일 차이날까?</div>
            <div>{moment('2017-01-01 3:00').diff(moment('2020-01-01 3:00'),"days")}</div>
        </div>
    </div>
  )
}

export default Moment
import React from 'react'
import dayjs from 'dayjs'

function Day() {
    const momentDate = dayjs();
    const newMomentDate = momentDate.add(1, 'week');
    const cloneNewMomentDate = newMomentDate.clone().add(1, 'week');
    return (
        <div>
            <h1>Dayjs</h1>
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
        </div>
    )
}

export default Day
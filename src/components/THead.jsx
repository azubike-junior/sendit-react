import React from 'react'

export default function THead() {
    return (
        <React.Fragment>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Parcel Name</th>
                <th scope="col">To</th>
                <th scope="col">From</th>
                <th scope="col">weight</th>
                <th scope="col">weight Metric</th>
                <th scope="col">sent on</th>
                <th scope="col">Parcel Status</th>
              </tr>
        </thead>
      </React.Fragment>
    )
}

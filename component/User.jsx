import React from 'react'

export const User = ({ud}) => {
  return (
    <div class="flex flex-wrap py-2 gap-5 justify-between">
    <div class="flex-1 p-4 m-2 bg-gray-200">
    Name:  {ud.FirstName} {ud.lastName}
    </div>
    
    <div class="flex-1 p-4 m-2 bg-gray-200">
    EmailId: {ud.EmailId}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    Mobile: {ud.Mobile}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    Address1: {ud.Address1}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    Address2: {ud.Address1}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    State: {ud.State}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    Country: {ud.Country}
    </div>
    <div class="flex-1 p-4 m-2 bg-gray-200">
    ZipCode: {ud.ZipCode}
    </div>

  </div>
  )
}

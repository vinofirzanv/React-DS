import React from 'react'
 
import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'
import {CountryDropdown} from 'react-country-region-selector'

const Country = () => {
  const handleSelect = (country) => {
    console.log(country)
    /* returns the details on selected country as an object
    	{
          name: "United States of America", 
          code: "US", 
          capital: "Washington, D.C.", 
          region: "Americas", 
          latlng: [38, -97]
        }
    */
  }
  return (
    <div className='text-black'>
      <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' />
      {/* <CountryDropdown onSelect={handleSelect} countryCode='IN'></CountryDropdown> */}
    </div>
  )
}
export default Country;
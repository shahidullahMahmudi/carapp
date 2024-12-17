
export async function fetchCars(){
    const headers={
    'x-rapidapi-key': 'b2da86c3bbmsh5206b9e732f972ep18317ajsnb98eea4ab6ea',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,

    });
    const result=await response.json();
    return result;

}

export const calculatorCarRent=(city_mpg:number,year:number)=>{
    const basePricePerDay=50;
    const mileageFactor=0.1;
    const ageFactor=0.05;

    const mileageRate=city_mpg*mileageFactor;
    const ageRate=(new Date().getFullYear()-year)*ageFactor;
    const rentalRatePerDay=basePricePerDay+mileageRate+ageRate;
    return rentalRatePerDay.toFixed(0);
}
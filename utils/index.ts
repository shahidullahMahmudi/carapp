import { CarProps } from "@/components/CarCard";

export async function fetchCars(){
    const headers={
    'x-rapidapi-key': 'b2da86c3bbmsh5206b9e732f972ep18317ajsnb98eea4ab6ea',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
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
export const generateCarImageUrl=(car:CarProps,angle?:string)=>{
    const url=new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model}=car;
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);
    return `${url}`
}
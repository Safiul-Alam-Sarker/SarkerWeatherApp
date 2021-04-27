const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName') 
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_real_value = document.getElementById('temp_real_value')
const datahide = document.querySelector('.middle_layer');
const today = document.getElementById('day')
const today_date = document.getElementById('today_date')

window.addEventListener('load', (event) => {
    const date = new Date;
        const day = date.getDay();
        if(day==6) bar = "Saturday"
        else if(day==7) bar = "Sunday"
        else if(day==1) bar = "Monday"
        else if(day==2) bar = "Tuesday"
        else if(day==3) bar = "thrusday"
        else if(day==4) bar = "Friday"
        else if(day==5) bar = "Saturday"

        const month = date.getMonth();

        if(month == 0 ) month_string = "Jan"
        else if(month == 1 ) month_string = "Fab"
        else if(month == 2 ) month_string = "March"
        else if(month == 3 ) month_string = "April"
        else if(month == 4 ) month_string = "May"
        else if(month == 5 ) month_string = "June"
        else if(month == 6 ) month_string = "July"
        else if(month == 7 ) month_string = "Aug"
        else if(month == 8 ) month_string = "Sep"
        else if(month == 9 ) month_string = "Oct"
        else if(month == 10 ) month_string = "Nov"
        else if(month == 11 ) month_string = "Dec"

        console.log(month);

        today.innerText=bar;
        today_date.innerText =`${date.getDate()} ${month_string}`;
});


const getInfo = (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    // let url = `api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
    if(cityVal === ""){
        city_name.innerText = `Plese write the name before search`;
        datahide.classList.add("data_hide");
    }
    else{
 try {
       
       
    //     let url =`api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=117746d0c6c449b1cb2fe6ea8c181caa`

    //     console.log(url);
    //     // const response = await fetch(url)
    //     // console.log(response);

    //     // const data  = await response.json();

    //     // console.log(data);
    // fetch(url)
    //    .then( (response) => {
           
    //        return response.json();
    //     } )
    //    .then( (data)=>{
    //        console.log(data);
    //    })
    //    .catch( (error) =>{
    //        console.log(error);
    //    })


    var url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=117746d0c6c449b1cb2fe6ea8c181caa`;
    fetch(url)
    .then(response => response.json())
    .then(data => {

// fetch(url)
//     .then(function(response){
//         console.log(response.json())

//     }).then(function(response){
//         console.log(response)
//     })
    



        const arrData = [data];
        console.log(arrData);
        
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country} `;
        temp_real_value.innerText =(arrData[0].main.temp - 273).toFixed(2) ;
        // temp_real_value.innerText =(arrData[0].main.temp /10).toFixed(2);
        // temp_status.innerText = arrData[0].weather[0].main;

const tempMood =arrData[0].weather[0].main;
        // conditionj to check sunny of coludy
        if(tempMood == 'clear')
        {
            temp_status.innerHTML = `<i class="fa fa-sun" style = 'color:#eccc68;'></i>`
        }
        else if(tempMood == 'Clouds')
        {
            temp_status.innerHTML = `<i class="fa fa-cloud" style = 'color:#f1f2f6;'></i>`
        }else if(tempMood == 'Rain')
        {
            temp_status.innerHTML = `<i class="fa fa-cloud-rain" style = 'color:#a4b0be;'></i>`
        }
        else
        {
            temp_status.innerHTML = `<i class="fa fa-sun" style = 'color:#eccc68;'></i>`
            // sarker4 
        }

        datahide.classList.remove("data_hide");

            
        } 
    )
        


 }
    
        catch (error) {
            console.log(error)
            

        }
    

    }
        


    }






submitBtn.addEventListener('click',getInfo);
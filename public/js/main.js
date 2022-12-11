const btn1 = document.getElementById('btn1');
const searchbtn = document.getElementById("searchbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const weather_report =document.getElementById('weather_report');
const temp_logo = document.getElementById('temp_logo');
const date_month = document.getElementById('date_month');
const day = document.getElementById('day');
const now = new Date();
const nowmonth  = (now.toDateString());
	day.innerHTML = nowmonth;
 const getinfo = async(event)=>{
	event.preventDefault();
		let cityval = cityname.value;
	if(cityval === ""){
		city_name.innerText  = "plz enter the name before search";
		temp_logo.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";
		 weather_report.innerText ="0";
	}
	else{
		try{
			let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=fcf39c24e89bb51a7fd58d6137c0d061`
		const response = await fetch(url);
		const data= await response.json();
		const arrdata =[data];
		city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
		 weather_report.innerText = arrdata[0].main.temp;
		 const tempmood = arrdata[0].weather[0].main;
		if(tempmood=="Clear"){
			temp_logo.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";
		}
		else if(tempmood=="Clouds"){
			temp_logo.innerHTML= "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
		}
		else if(tempmood=="Rain"){
			temp_logo.innerHTML= "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
		}
		else{
			
			temp_logo.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";
		}
		}
		catch{
			city_name.innerText  = "plz enter the name before search";
			temp_logo.innerHTML= "<i class='fas fa-sun' style='color: #eccc68;'></i>";
		 weather_report.innerText ="0";
		}
	}	
}
searchbtn.addEventListener('click', getinfo);

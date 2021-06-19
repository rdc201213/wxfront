import axios from 'axios'
//var baseUrl="http://localhost:8888"

import { get, post } from './basehttp'

// export async function getAttendCourse(id){
// 	let arr;
// 	var config = {
// 	  method: 'get',
// 	  url: 'http://localhost:8888/swimmingPlatform1/userAttendCourse?user_id=1',
// 	  headers: { }
// 	};
	
// 	await axios(config)
// 	.then(response=>response.data.course)
// 	.catch(function (error) {
// 	  console.log(error);
// 	});
// 	//console.log(JSON.stringify(arr));
// 	//return "yes";
// }
export const testAttendCourse = (id) => get(`swimmingPlatform1/userAttendCourse?user_id=${id}`)

export const getLastAnnoucement=(id)=>get(`/swimmingPlatform1/getLatestAnnoucement?course_id=${id}`)

export const optionalCourse=(id)=>get(`/swimmingPlatform1/optionalCourse?user_id=${id}`)

export const joinCourse=(params)=>post(`swimmingPlatform1/joinCourse`,params)

export const getStudent=(id)=>get(`swimmingPlatform1/getStudents?course_id=${id}`)
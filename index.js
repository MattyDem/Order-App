import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBjXkO9h-OBreilThx81OEuPv23vM7EypI",
    authDomain: "order-app-5eab5.firebaseapp.com",
    projectId: "order-app-5eab5",
    storageBucket: "order-app-5eab5.firebasestorage.app",
    messagingSenderId: "551151721376",
    appId: "1:551151721376:web:bbce706b6e60c376e0e2c5",
    measurementId: "G-B6QH548P3D"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

	
	const orderList = document.getElementById("orderName");
	const delName = document.getElementById("deliveryName");
	const delAddress = document.getElementById("deliveryAddress");
	
	const btn = document.getElementById("orderButton");
	
	btn.addEventListener("click", () => {
	const order = orderList.value;
	const person = delName.value;
	const address = delAddress.value;
	
	if(order === "" || person === "" || address === ""){
	alert("field can't be Empty");
	return;
	};
	const orderInfo = push(ref(db, "Order List"));
	 set(orderInfo, {
		time: Date.now(),
		order: order,
		name: person,
		address: address
		})
	.then(() =>{
	alert('Order Success');
	})
	.catch(err => {
	alert("Error" + err);
	});
	});

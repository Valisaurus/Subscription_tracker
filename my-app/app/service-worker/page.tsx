// const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
// const subscribeButton = document.getElementById("subscribe");
// const unsubscribeButton = document.getElementById("unsubscribe");
// const notifyMeButton = document.getElementById("notify-me");

// if ("serviceWorker" in navigator && "PushManager" in window) {
//   navigator.serviceWorker
//     .register("./service-worker.js")
//     .then((serviceWorkerRegistration) => {
//       console.info("Service worker was registered.");
//       console.info({ serviceWorkerRegistration });
//     })
//     .catch((error) => {
//       console.error("An error occurred while registering the service worker.");
//       console.error(error);
//     });
//   subscribeButton.disabled = false;
// } else {
//   console.error("Browser does not support service workers or push messages.");
// }
// // Push notification logic.

// const subscribeButtonHandler = async () => {
//   // TODO
//   // Prevent the user from clicking the subscribe button multiple times.
//   subscribeButton.disabled = true;
//   const result = await Notification.requestPermission();
//   if (result === "denied") {
//     console.error("The user explicitly denied the permission request.");
//     return;
//   }
//   if (result === "granted") {
//     console.info("The user accepted the permission request.");
//   }
// };

// const unsubscribeButtonHandler = async () => {
//   // TODO
// };

// // Convert a base64 string to Uint8Array.
// // Must do this so the server can understand the VAPID_PUBLIC_KEY.
// function urlB64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// // Startup logic.

// // TODO add startup logic here

// // Logic for the "Notify me" and "Notify all" buttons.

// const notifyMe = async () => {
//   const registration = await navigator.serviceWorker.getRegistration();
//   const subscription = await registration.pushManager.getSubscription();
//   fetch("/notify-me", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ endpoint: subscription.endpoint }),
//   });
// });

// const ServiceWorker = () => {
//   return (
//     <div>
//       <button onClick={subscribeButtonHandler}>Subscribe</button>
//       <button onClick={unsubscribeButtonHandler}>UnSubscribe</button>
//       <button onClick={notifyMe}>Notefy me</button>
//     </div>
//   );
// };

// export default ServiceWorker;

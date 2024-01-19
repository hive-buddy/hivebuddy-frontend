// import {useState} from "react";
//
// export async function AuthHiveId(hiveId) {
//     const [hiveExists, setHiveExists] = useState(false);
//
//     try {
//         const response = await fetch(`/api/v1/data/login/${hiveId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//         const contentType = response.headers.get('Content-Type');
//         console.log(`Content-Type: ${contentType}`);
//         const data = await response.json();
//
//         if (data === 'false') {
//             setHiveExists(true);
//         }
//
//         // if (data === 'false'){
//         //     navigate("/login");
//         // } else {
//         //     alert("no HiveId " + hiveId);
//         //     console.log(data);
//         //     console.log("Error during login:", response);
//         // }
//     } catch (error) {
//         console.error("Error during login:", error);
//     }
//
//     return hiveExists;
// }
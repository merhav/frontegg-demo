// const fetchAuditLogs = async () => {
//   try {
//     const baseUrl = ContextHolder.getContext().baseUrl;
//     const accessToken = user?.accessToken; // Access token of the logged-in user
    
//     const response = await fetch(`${baseUrl}/api/audit-logs`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     const data = await response.json();
//     console.log('Audit Logs:', data);
//   } catch (error) {
//     console.error('Error fetching audit logs:', error);
//   }
// };

// // Call this function when needed
// fetchAuditLogs();

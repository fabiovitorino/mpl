async function getcliente(request, response) {
    const clienteResponse = await fetch('http://csw.grupompl.com.br:7256/api/cadastrosgerais/v10/cliente/85188', {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'empresa': 1,
             'Authorization': 'eyJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJtYXJjdXMuYW50b25pbyIsImlzcyI6ImNzd1NlcnZlciIsImlhdCI6MTYzNTcxNTI3MiwiYXVkIjoiY3N3VmlldyIsImNzd1Rva2VuIjoiM3RPb25xS2lGZjNtcWFPRVB4azlJdyIsImRiTmFtZVNwYWNlIjoic2lzdGVtYXMifQ.ZC_NZyXxeylFJIDPXBZpCt-4Do-PDsTNvqjudcksWfe6Tcyn7mI_HxSaURdpvcAgVdkYgJy9YftaBWjNnlKTWg'
     }
       })
       const clienteResponseJson = await clienteResponse.json();
 
       console.log(clienteResponseJson);
 
       response.json(clienteResponseJson);
 }
 
 export default getcliente;